<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config/database.php';

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = trim($path, '/');
$segments = explode('/', $path);

// Remove 'api' from segments if present
if ($segments[0] === 'api') {
    array_shift($segments);
}

$resource = $segments[0] ?? '';
$id = $segments[1] ?? null;

try {
    switch ($resource) {
        case 'users':
            handleUsers($method, $id);
            break;
        case 'auth':
            handleAuth($method, $segments[1] ?? '');
            break;
        case 'categories':
            handleCategories($method, $id);
            break;
        case 'products':
            handleProducts($method, $id);
            break;
        case 'tables':
            handleTables($method, $id);
            break;
        case 'orders':
            handleOrders($method, $id, $segments[2] ?? null, $segments[3] ?? null);
            break;
        default:
            http_response_code(404);
            echo json_encode(['error' => 'Endpoint not found']);
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}

function handleUsers($method, $id) {
    global $pdo;
    
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT id, username, name, role, created_at FROM users ORDER BY id");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}

function handleAuth($method, $action) {
    global $pdo;
    
    if ($method === 'POST' && $action === 'login') {
        $input = json_decode(file_get_contents('php://input'), true);
        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';
        
        $stmt = $pdo->prepare("SELECT id, username, name, role FROM users WHERE username = ? AND password = ?");
        $stmt->execute([$username, $password]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($user) {
            echo json_encode($user);
        } else {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid credentials']);
        }
    }
}

function handleCategories($method, $id) {
    global $pdo;
    
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM categories ORDER BY name");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}

function handleProducts($method, $id) {
    global $pdo;
    
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM products WHERE available = 1 ORDER BY name");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    }
}

function handleTables($method, $id) {
    global $pdo;
    
    if ($method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM restaurant_tables ORDER BY table_number");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    } elseif ($method === 'PUT' && $id) {
        $input = json_decode(file_get_contents('php://input'), true);
        $status = $input['status'] ?? '';
        
        $stmt = $pdo->prepare("UPDATE restaurant_tables SET status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);
        
        $stmt = $pdo->prepare("SELECT * FROM restaurant_tables WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
    }
}

function handleOrders($method, $id, $subResource, $subId) {
    global $pdo;
    
    if ($method === 'GET') {
        $sql = "SELECT o.*, 
                       GROUP_CONCAT(
                           JSON_OBJECT(
                               'id', oi.id,
                               'product_id', oi.product_id,
                               'quantity', oi.quantity,
                               'price_bgn', oi.price_bgn,
                               'price_eur', oi.price_eur,
                               'status', oi.status,
                               'bar_item', oi.bar_item
                           )
                       ) as items
                FROM orders o
                LEFT JOIN order_items oi ON o.id = oi.order_id
                GROUP BY o.id
                ORDER BY o.created_at DESC";
        
        $stmt = $pdo->query($sql);
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        // Parse items JSON
    foreach ($orders as &$order) {
            if ($order['items']) {
                $order['items'] = json_decode('[' . $order['items'] . ']', true);
            } else {
                $order['items'] = [];
            }
        }
        
        echo json_encode($orders);
        
    } elseif ($method === 'POST' && !$id) {
        $input = json_decode(file_get_contents('php://input'), true);
        
        $pdo->beginTransaction();
        
        try {
            // Create order
            $stmt = $pdo->prepare("INSERT INTO orders (table_id, waiter_id, status, total_bgn, total_eur) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([
                $input['table_id'],
                $input['waiter_id'],
                $input['status'],
                $input['total_bgn'],
                $input['total_eur']
            ]);
            
            $orderId = $pdo->lastInsertId();
            
            // Add order items
            foreach ($input['items'] as $item) {
                // Fetch bar_item flag from product
                $productStmt = $pdo->prepare("SELECT bar_item FROM products WHERE id = ?");
                $productStmt->execute([$item['product_id']]);
                $bar_item = $productStmt->fetchColumn() ?? 0;

                $stmt = $pdo->prepare("INSERT INTO order_items (order_id, product_id, quantity, price_bgn, price_eur, status, bar_item) VALUES (?, ?, ?, ?, ?, ?, ?)");
                $stmt->execute([
                    $orderId,
                    $item['product_id'],
                    $item['quantity'],
                    $item['price_bgn'],
                    $item['price_eur'],
                    $item['status'],
                    $bar_item
                ]);
            }
            
            $pdo->commit();
            
            // Return the created order
            $stmt = $pdo->prepare("SELECT o.*, 
                                          GROUP_CONCAT(
                                              JSON_OBJECT(
                                                  'id', oi.id,
                                                  'product_id', oi.product_id,
                                                  'quantity', oi.quantity,
                                                  'price_bgn', oi.price_bgn,
                                                  'price_eur', oi.price_eur,
                                                  'status', oi.status,
                                                  'bar_item', oi.bar_item
                                              )
                                          ) as items
                                   FROM orders o
                                   LEFT JOIN order_items oi ON o.id = oi.order_id
                                   WHERE o.id = ?
                                   GROUP BY o.id");
            $stmt->execute([$orderId]);
            $order = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($order['items']) {
                $order['items'] = json_decode('[' . $order['items'] . ']', true);
            } else {
                $order['items'] = [];
            }
            
            echo json_encode($order);
        } catch (Exception $e) {
            $pdo->rollBack();
            throw $e;
        }
    } elseif ($method === 'PUT' && $id) {
        $input = json_decode(file_get_contents('php://input'), true);
        
        $stmt = $pdo->prepare("UPDATE orders SET status = ? WHERE id = ?");
        $stmt->execute([$input['status'], $id]);
        
        echo json_encode(['success' => true]);
    } elseif ($method === 'POST' && $id && $subResource === 'items') {
        $input = json_decode(file_get_contents('php://input'), true);
        
        $pdo->beginTransaction();
        
        try {
            // Add new items
            foreach ($input['items'] as $item) {
                $stmt = $pdo->prepare("INSERT INTO order_items (order_id, product_id, quantity, price_bgn, price_eur, status) VALUES (?, ?, ?, ?, ?, ?)");
                $stmt->execute([
                    $id,
                    $item['product_id'],
                    $item['quantity'],
                    $item['price_bgn'],
                    $item['price_eur'],
                    $item['status']
                ]);
            }
            
            // Recalculate order totals
            $stmt = $pdo->prepare("UPDATE orders SET 
                                   total_bgn = (SELECT SUM(price_bgn * quantity) FROM order_items WHERE order_id = ?),
                                   total_eur = (SELECT SUM(price_eur * quantity) FROM order_items WHERE order_id = ?)
                                   WHERE id = ?");
            $stmt->execute([$id, $id, $id]);
            
            $pdo->commit();
            
            // Return updated order
            $stmt = $pdo->prepare("SELECT o.*, 
                                          GROUP_CONCAT(
                                              JSON_OBJECT(
                                                  'id', oi.id,
                                                  'product_id', oi.product_id,
                                                  'quantity', oi.quantity,
                                                  'price_bgn', oi.price_bgn,
                                                  'price_eur', oi.price_eur,
                                                  'status', oi.status
                                              )
                                          ) as items
                                   FROM orders o
                                   LEFT JOIN order_items oi ON o.id = oi.order_id
                                   WHERE o.id = ?
                                   GROUP BY o.id");
            $stmt->execute([$id]);
            $order = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if ($order['items']) {
                $order['items'] = json_decode('[' . $order['items'] . ']', true);
            } else {
                $order['items'] = [];
            }
            
            echo json_encode($order);
        } catch (Exception $e) {
            $pdo->rollBack();
            throw $e;
        }
    } elseif ($method === 'PUT' && $id && $subResource === 'items' && $subId) {
        $input = json_decode(file_get_contents('php://input'), true);
        
        $stmt = $pdo->prepare("UPDATE order_items SET status = ? WHERE id = ? AND order_id = ?");
        $stmt->execute([$input['status'], $subId, $id]);
        
        echo json_encode(['success' => true]);
    }
}
?>
