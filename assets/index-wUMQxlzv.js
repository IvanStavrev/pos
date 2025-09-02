(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const s of l)
            if (s.type === "childList")
                for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const s = {};
        return l.integrity && (s.integrity = l.integrity), l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? s.credentials = "include" : l.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const s = n(l);
        fetch(l.href, s)
    }
})();

function fc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Zo = {
        exports: {}
    },
    ul = {},
    Jo = {
        exports: {}
    },
    R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr = Symbol.for("react.element"),
    pc = Symbol.for("react.portal"),
    mc = Symbol.for("react.fragment"),
    hc = Symbol.for("react.strict_mode"),
    gc = Symbol.for("react.profiler"),
    yc = Symbol.for("react.provider"),
    vc = Symbol.for("react.context"),
    xc = Symbol.for("react.forward_ref"),
    wc = Symbol.for("react.suspense"),
    Nc = Symbol.for("react.memo"),
    Sc = Symbol.for("react.lazy"),
    Ui = Symbol.iterator;

function kc(e) {
    return e === null || typeof e != "object" ? null : (e = Ui && e[Ui] || e["@@iterator"], typeof e == "function" ? e : null)
}
var qo = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    },
    ea = Object.assign,
    ta = {};

function gn(e, t, n) {
    this.props = e, this.context = t, this.refs = ta, this.updater = n || qo
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
gn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function na() {}
na.prototype = gn.prototype;

function bs(e, t, n) {
    this.props = e, this.context = t, this.refs = ta, this.updater = n || qo
}
var Hs = bs.prototype = new na;
Hs.constructor = bs;
ea(Hs, gn.prototype);
Hs.isPureReactComponent = !0;
var Ai = Array.isArray,
    ra = Object.prototype.hasOwnProperty,
    Qs = {
        current: null
    },
    la = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function sa(e, t, n) {
    var r, l = {},
        s = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (s = "" + t.key), t) ra.call(t, r) && !la.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var c = Array(u), f = 0; f < u; f++) c[f] = arguments[f + 2];
        l.children = c
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: sr,
        type: e,
        key: s,
        ref: i,
        props: l,
        _owner: Qs.current
    }
}

function jc(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ks(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sr
}

function _c(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function (n) {
        return t[n]
    })
}
var Bi = /\/+/g;

function _l(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? _c("" + e.key) : t.toString(36)
}

function Er(e, t, n, r, l) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (s) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case sr:
                case pc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + _l(i, 0) : r, Ai(l) ? (n = "", e != null && (n = e.replace(Bi, "$&/") + "/"), Er(l, t, n, "", function (f) {
        return f
    })) : l != null && (Ks(l) && (l = jc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Bi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Ai(e))
        for (var u = 0; u < e.length; u++) {
            s = e[u];
            var c = r + _l(s, u);
            i += Er(s, t, n, c, l)
        } else if (c = kc(e), typeof c == "function")
            for (e = c.call(e), u = 0; !(s = e.next()).done;) s = s.value, c = r + _l(s, u++), i += Er(s, t, n, c, l);
        else if (s === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function cr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Er(e, r, "", "", function (s) {
        return t.call(n, s, l++)
    }), r
}

function Cc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function (n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var he = {
        current: null
    },
    Pr = {
        transition: null
    },
    Ec = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: Pr,
        ReactCurrentOwner: Qs
    };

function ia() {
    throw Error("act(...) is not supported in production builds of React.")
}
R.Children = {
    map: cr,
    forEach: function (e, t, n) {
        cr(e, function () {
            t.apply(this, arguments)
        }, n)
    },
    count: function (e) {
        var t = 0;
        return cr(e, function () {
            t++
        }), t
    },
    toArray: function (e) {
        return cr(e, function (t) {
            return t
        }) || []
    },
    only: function (e) {
        if (!Ks(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
R.Component = gn;
R.Fragment = mc;
R.Profiler = gc;
R.PureComponent = bs;
R.StrictMode = hc;
R.Suspense = wc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ec;
R.act = ia;
R.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = ea({}, e.props),
        l = e.key,
        s = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref, i = Qs.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
        for (c in t) ra.call(t, c) && !la.hasOwnProperty(c) && (r[c] = t[c] === void 0 && u !== void 0 ? u[c] : t[c])
    }
    var c = arguments.length - 2;
    if (c === 1) r.children = n;
    else if (1 < c) {
        u = Array(c);
        for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
        r.children = u
    }
    return {
        $$typeof: sr,
        type: e.type,
        key: l,
        ref: s,
        props: r,
        _owner: i
    }
};
R.createContext = function (e) {
    return e = {
        $$typeof: vc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: yc,
        _context: e
    }, e.Consumer = e
};
R.createElement = sa;
R.createFactory = function (e) {
    var t = sa.bind(null, e);
    return t.type = e, t
};
R.createRef = function () {
    return {
        current: null
    }
};
R.forwardRef = function (e) {
    return {
        $$typeof: xc,
        render: e
    }
};
R.isValidElement = Ks;
R.lazy = function (e) {
    return {
        $$typeof: Sc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Cc
    }
};
R.memo = function (e, t) {
    return {
        $$typeof: Nc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
R.startTransition = function (e) {
    var t = Pr.transition;
    Pr.transition = {};
    try {
        e()
    } finally {
        Pr.transition = t
    }
};
R.unstable_act = ia;
R.useCallback = function (e, t) {
    return he.current.useCallback(e, t)
};
R.useContext = function (e) {
    return he.current.useContext(e)
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
    return he.current.useDeferredValue(e)
};
R.useEffect = function (e, t) {
    return he.current.useEffect(e, t)
};
R.useId = function () {
    return he.current.useId()
};
R.useImperativeHandle = function (e, t, n) {
    return he.current.useImperativeHandle(e, t, n)
};
R.useInsertionEffect = function (e, t) {
    return he.current.useInsertionEffect(e, t)
};
R.useLayoutEffect = function (e, t) {
    return he.current.useLayoutEffect(e, t)
};
R.useMemo = function (e, t) {
    return he.current.useMemo(e, t)
};
R.useReducer = function (e, t, n) {
    return he.current.useReducer(e, t, n)
};
R.useRef = function (e) {
    return he.current.useRef(e)
};
R.useState = function (e) {
    return he.current.useState(e)
};
R.useSyncExternalStore = function (e, t, n) {
    return he.current.useSyncExternalStore(e, t, n)
};
R.useTransition = function () {
    return he.current.useTransition()
};
R.version = "18.3.1";
Jo.exports = R;
var $ = Jo.exports;
const Pc = fc($);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = $,
    Oc = Symbol.for("react.element"),
    Lc = Symbol.for("react.fragment"),
    zc = Object.prototype.hasOwnProperty,
    Dc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Ic = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function oa(e, t, n) {
    var r, l = {},
        s = null,
        i = null;
    n !== void 0 && (s = "" + n), t.key !== void 0 && (s = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) zc.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Oc,
        type: e,
        key: s,
        ref: i,
        props: l,
        _owner: Dc.current
    }
}
ul.Fragment = Lc;
ul.jsx = oa;
ul.jsxs = oa;
Zo.exports = ul;
var o = Zo.exports,
    Zl = {},
    aa = {
        exports: {}
    },
    Ee = {},
    ua = {
        exports: {}
    },
    ca = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
    function t(x, j) {
        var O = x.length;
        x.push(j);
        e: for (; 0 < O;) {
            var z = O - 1 >>> 1,
                U = x[z];
            if (0 < l(U, j)) x[z] = j, x[O] = U, O = z;
            else break e
        }
    }

    function n(x) {
        return x.length === 0 ? null : x[0]
    }

    function r(x) {
        if (x.length === 0) return null;
        var j = x[0],
            O = x.pop();
        if (O !== j) {
            x[0] = O;
            e: for (var z = 0, U = x.length, st = U >>> 1; z < st;) {
                var Ve = 2 * (z + 1) - 1,
                    B = x[Ve],
                    fe = Ve + 1,
                    Vt = x[fe];
                if (0 > l(B, O)) fe < U && 0 > l(Vt, B) ? (x[z] = Vt, x[fe] = O, z = fe) : (x[z] = B, x[Ve] = O, z = Ve);
                else if (fe < U && 0 > l(Vt, O)) x[z] = Vt, x[fe] = O, z = fe;
                else break e
            }
        }
        return j
    }

    function l(x, j) {
        var O = x.sortIndex - j.sortIndex;
        return O !== 0 ? O : x.id - j.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function () {
            return s.now()
        }
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function () {
            return i.now() - u
        }
    }
    var c = [],
        f = [],
        g = 1,
        h = null,
        m = 3,
        N = !1,
        S = !1,
        y = !1,
        L = typeof setTimeout == "function" ? setTimeout : null,
        a = typeof clearTimeout == "function" ? clearTimeout : null,
        d = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(x) {
        for (var j = n(f); j !== null;) {
            if (j.callback === null) r(f);
            else if (j.startTime <= x) r(f), j.sortIndex = j.expirationTime, t(c, j);
            else break;
            j = n(f)
        }
    }

    function v(x) {
        if (y = !1, p(x), !S)
            if (n(c) !== null) S = !0, I(_);
            else {
                var j = n(f);
                j !== null && M(v, j.startTime - x)
            }
    }

    function _(x, j) {
        S = !1, y && (y = !1, a(T), T = -1), N = !0;
        var O = m;
        try {
            for (p(j), h = n(c); h !== null && (!(h.expirationTime > j) || x && !ee());) {
                var z = h.callback;
                if (typeof z == "function") {
                    h.callback = null, m = h.priorityLevel;
                    var U = z(h.expirationTime <= j);
                    j = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(c) && r(c), p(j)
                } else r(c);
                h = n(c)
            }
            if (h !== null) var st = !0;
            else {
                var Ve = n(f);
                Ve !== null && M(v, Ve.startTime - j), st = !1
            }
            return st
        } finally {
            h = null, m = O, N = !1
        }
    }
    var E = !1,
        P = null,
        T = -1,
        V = 5,
        D = -1;

    function ee() {
        return !(e.unstable_now() - D < V)
    }

    function ye() {
        if (P !== null) {
            var x = e.unstable_now();
            D = x;
            var j = !0;
            try {
                j = P(!0, x)
            } finally {
                j ? Ge() : (E = !1, P = null)
            }
        } else E = !1
    }
    var Ge;
    if (typeof d == "function") Ge = function () {
        d(ye)
    };
    else if (typeof MessageChannel < "u") {
        var Ct = new MessageChannel,
            wn = Ct.port2;
        Ct.port1.onmessage = ye, Ge = function () {
            wn.postMessage(null)
        }
    } else Ge = function () {
        L(ye, 0)
    };

    function I(x) {
        P = x, E || (E = !0, Ge())
    }

    function M(x, j) {
        T = L(function () {
            x(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (x) {
        x.callback = null
    }, e.unstable_continueExecution = function () {
        S || N || (S = !0, I(_))
    }, e.unstable_forceFrameRate = function (x) {
        0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : V = 0 < x ? Math.floor(1e3 / x) : 5
    }, e.unstable_getCurrentPriorityLevel = function () {
        return m
    }, e.unstable_getFirstCallbackNode = function () {
        return n(c)
    }, e.unstable_next = function (x) {
        switch (m) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = m
        }
        var O = m;
        m = j;
        try {
            return x()
        } finally {
            m = O
        }
    }, e.unstable_pauseExecution = function () {}, e.unstable_requestPaint = function () {}, e.unstable_runWithPriority = function (x, j) {
        switch (x) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                x = 3
        }
        var O = m;
        m = x;
        try {
            return j()
        } finally {
            m = O
        }
    }, e.unstable_scheduleCallback = function (x, j, O) {
        var z = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? z + O : z) : O = z, x) {
            case 1:
                var U = -1;
                break;
            case 2:
                U = 250;
                break;
            case 5:
                U = 1073741823;
                break;
            case 4:
                U = 1e4;
                break;
            default:
                U = 5e3
        }
        return U = O + U, x = {
            id: g++,
            callback: j,
            priorityLevel: x,
            startTime: O,
            expirationTime: U,
            sortIndex: -1
        }, O > z ? (x.sortIndex = O, t(f, x), n(c) === null && x === n(f) && (y ? (a(T), T = -1) : y = !0, M(v, O - z))) : (x.sortIndex = U, t(c, x), S || N || (S = !0, I(_))), x
    }, e.unstable_shouldYield = ee, e.unstable_wrapCallback = function (x) {
        var j = m;
        return function () {
            var O = m;
            m = j;
            try {
                return x.apply(this, arguments)
            } finally {
                m = O
            }
        }
    }
})(ca);
ua.exports = ca;
var Rc = ua.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc = $,
    Ce = Rc;

function k(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var da = new Set,
    Vn = {};

function At(e, t) {
    un(e, t), un(e + "Capture", t)
}

function un(e, t) {
    for (Vn[e] = t, e = 0; e < t.length; e++) da.add(t[e])
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Jl = Object.prototype.hasOwnProperty,
    Fc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vi = {},
    Wi = {};

function $c(e) {
    return Jl.call(Wi, e) ? !0 : Jl.call(Vi, e) ? !1 : Fc.test(e) ? Wi[e] = !0 : (Vi[e] = !0, !1)
}

function Uc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Ac(e, t, n, r) {
    if (t === null || typeof t > "u" || Uc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ge(e, t, n, r, l, s, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = i
}
var oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    oe[e] = new ge(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function (e) {
    var t = e[0];
    oe[t] = new ge(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    oe[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    oe[e] = new ge(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
    oe[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    oe[e] = new ge(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function (e) {
    oe[e] = new ge(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function (e) {
    oe[e] = new ge(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function (e) {
    oe[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Gs = /[\-:]([a-z])/g;

function Ys(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) {
    var t = e.replace(Gs, Ys);
    oe[t] = new ge(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Gs, Ys);
    oe[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Gs, Ys);
    oe[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    oe[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
oe.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    oe[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Xs(e, t, n, r) {
    var l = oe.hasOwnProperty(t) ? oe[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ac(t, n, l, r) && (n = null), r || l === null ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var lt = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    dr = Symbol.for("react.element"),
    bt = Symbol.for("react.portal"),
    Ht = Symbol.for("react.fragment"),
    Zs = Symbol.for("react.strict_mode"),
    ql = Symbol.for("react.profiler"),
    fa = Symbol.for("react.provider"),
    pa = Symbol.for("react.context"),
    Js = Symbol.for("react.forward_ref"),
    es = Symbol.for("react.suspense"),
    ts = Symbol.for("react.suspense_list"),
    qs = Symbol.for("react.memo"),
    ot = Symbol.for("react.lazy"),
    ma = Symbol.for("react.offscreen"),
    bi = Symbol.iterator;

function Nn(e) {
    return e === null || typeof e != "object" ? null : (e = bi && e[bi] || e["@@iterator"], typeof e == "function" ? e : null)
}
var X = Object.assign,
    Cl;

function Tn(e) {
    if (Cl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Cl = t && t[1] || ""
    }
    return `
` + Cl + e
}
var El = !1;

function Pl(e, t) {
    if (!e || El) return "";
    El = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function () {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (f) {
                    var r = f
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (f) {
                    r = f
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                r = f
            }
            e()
        }
    } catch (f) {
        if (f && r && typeof f.stack == "string") {
            for (var l = f.stack.split(`
`), s = r.stack.split(`
`), i = l.length - 1, u = s.length - 1; 1 <= i && 0 <= u && l[i] !== s[u];) u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== s[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--, u--, 0 > u || l[i] !== s[u]) {
                                var c = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c
                            } while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        El = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Tn(e) : ""
}

function Bc(e) {
    switch (e.tag) {
        case 5:
            return Tn(e.type);
        case 16:
            return Tn("Lazy");
        case 13:
            return Tn("Suspense");
        case 19:
            return Tn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Pl(e.type, !1), e;
        case 11:
            return e = Pl(e.type.render, !1), e;
        case 1:
            return e = Pl(e.type, !0), e;
        default:
            return ""
    }
}

function ns(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ht:
            return "Fragment";
        case bt:
            return "Portal";
        case ql:
            return "Profiler";
        case Zs:
            return "StrictMode";
        case es:
            return "Suspense";
        case ts:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case pa:
            return (e.displayName || "Context") + ".Consumer";
        case fa:
            return (e._context.displayName || "Context") + ".Provider";
        case Js:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case qs:
            return t = e.displayName || null, t !== null ? t : ns(e.type) || "Memo";
        case ot:
            t = e._payload, e = e._init;
            try {
                return ns(e(t))
            } catch {}
    }
    return null
}

function Vc(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ns(t);
        case 8:
            return t === Zs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Nt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function ha(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Wc(e) {
    var t = ha(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
                return l.call(this)
            },
            set: function (i) {
                r = "" + i, s.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function () {
                return r
            },
            setValue: function (i) {
                r = "" + i
            },
            stopTracking: function () {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function fr(e) {
    e._valueTracker || (e._valueTracker = Wc(e))
}

function ga(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = ha(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Ur(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function rs(e, t) {
    var n = t.checked;
    return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Hi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Nt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function ya(e, t) {
    t = t.checked, t != null && Xs(e, "checked", t, !1)
}

function ls(e, t) {
    ya(e, t);
    var n = Nt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ss(e, t.type, n) : t.hasOwnProperty("defaultValue") && ss(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Qi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ss(e, t, n) {
    (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var On = Array.isArray;

function nn(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Nt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function is(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ki(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(k(92));
            if (On(n)) {
                if (1 < n.length) throw Error(k(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Nt(n)
    }
}

function va(e, t) {
    var n = Nt(t.value),
        r = Nt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Gi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function xa(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function os(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? xa(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var pr, wa = function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l)
        })
    } : e
}(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (pr = pr || document.createElement("div"), pr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = pr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Wn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Dn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dn).forEach(function (e) {
    bc.forEach(function (t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Dn[t] = Dn[e]
    })
});

function Na(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px"
}

function Sa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Na(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var Hc = X({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function as(e, t) {
    if (t) {
        if (Hc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(k(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(k(62))
    }
}

function us(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var cs = null;

function ei(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var ds = null,
    rn = null,
    ln = null;

function Yi(e) {
    if (e = ar(e)) {
        if (typeof ds != "function") throw Error(k(280));
        var t = e.stateNode;
        t && (t = ml(t), ds(e.stateNode, e.type, t))
    }
}

function ka(e) {
    rn ? ln ? ln.push(e) : ln = [e] : rn = e
}

function ja() {
    if (rn) {
        var e = rn,
            t = ln;
        if (ln = rn = null, Yi(e), t)
            for (e = 0; e < t.length; e++) Yi(t[e])
    }
}

function _a(e, t) {
    return e(t)
}

function Ca() {}
var Tl = !1;

function Ea(e, t, n) {
    if (Tl) return e(t, n);
    Tl = !0;
    try {
        return _a(e, t, n)
    } finally {
        Tl = !1, (rn !== null || ln !== null) && (Ca(), ja())
    }
}

function bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ml(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n
}
var fs = !1;
if (et) try {
    var Sn = {};
    Object.defineProperty(Sn, "passive", {
        get: function () {
            fs = !0
        }
    }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn)
} catch {
    fs = !1
}

function Qc(e, t, n, r, l, s, i, u, c) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, f)
    } catch (g) {
        this.onError(g)
    }
}
var In = !1,
    Ar = null,
    Br = !1,
    ps = null,
    Kc = {
        onError: function (e) {
            In = !0, Ar = e
        }
    };

function Gc(e, t, n, r, l, s, i, u, c) {
    In = !1, Ar = null, Qc.apply(Kc, arguments)
}

function Yc(e, t, n, r, l, s, i, u, c) {
    if (Gc.apply(this, arguments), In) {
        if (In) {
            var f = Ar;
            In = !1, Ar = null
        } else throw Error(k(198));
        Br || (Br = !0, ps = f)
    }
}

function Bt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Pa(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Xi(e) {
    if (Bt(e) !== e) throw Error(k(188))
}

function Xc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Bt(e), t === null) throw Error(k(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var s = l.alternate;
        if (s === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === s.child) {
            for (s = l.child; s;) {
                if (s === n) return Xi(l), e;
                if (s === r) return Xi(l), t;
                s = s.sibling
            }
            throw Error(k(188))
        }
        if (n.return !== r.return) n = l, r = s;
        else {
            for (var i = !1, u = l.child; u;) {
                if (u === n) {
                    i = !0, n = l, r = s;
                    break
                }
                if (u === r) {
                    i = !0, r = l, n = s;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = s.child; u;) {
                    if (u === n) {
                        i = !0, n = s, r = l;
                        break
                    }
                    if (u === r) {
                        i = !0, r = s, n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i) throw Error(k(189))
            }
        }
        if (n.alternate !== r) throw Error(k(190))
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t
}

function Ta(e) {
    return e = Xc(e), e !== null ? Oa(e) : null
}

function Oa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Oa(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var La = Ce.unstable_scheduleCallback,
    Zi = Ce.unstable_cancelCallback,
    Zc = Ce.unstable_shouldYield,
    Jc = Ce.unstable_requestPaint,
    J = Ce.unstable_now,
    qc = Ce.unstable_getCurrentPriorityLevel,
    ti = Ce.unstable_ImmediatePriority,
    za = Ce.unstable_UserBlockingPriority,
    Vr = Ce.unstable_NormalPriority,
    ed = Ce.unstable_LowPriority,
    Da = Ce.unstable_IdlePriority,
    cl = null,
    Qe = null;

function td(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
        Qe.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : ld,
    nd = Math.log,
    rd = Math.LN2;

function ld(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (nd(e) / rd | 0) | 0
}
var mr = 64,
    hr = 4194304;

function Ln(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Wr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        s = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = Ln(u) : (s &= i, s !== 0 && (r = Ln(s)))
    } else i = n & ~l, i !== 0 ? r = Ln(i) : s !== 0 && (r = Ln(s));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, s = t & -t, l >= s || l === 16 && (s & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Ue(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function sd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function id(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, s = e.pendingLanes; 0 < s;) {
        var i = 31 - Ue(s),
            u = 1 << i,
            c = l[i];
        c === -1 ? (!(u & n) || u & r) && (l[i] = sd(u, t)) : c <= t && (e.expiredLanes |= u), s &= ~u
    }
}

function ms(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Ia() {
    var e = mr;
    return mr <<= 1, !(mr & 4194240) && (mr = 64), e
}

function Ol(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function ir(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ue(t), e[t] = n
}

function od(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Ue(n),
            s = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~s
    }
}

function ni(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ue(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var A = 0;

function Ra(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ma, ri, Fa, $a, Ua, hs = !1,
    gr = [],
    pt = null,
    mt = null,
    ht = null,
    Hn = new Map,
    Qn = new Map,
    ut = [],
    ad = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ji(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            pt = null;
            break;
        case "dragenter":
        case "dragleave":
            mt = null;
            break;
        case "mouseover":
        case "mouseout":
            ht = null;
            break;
        case "pointerover":
        case "pointerout":
            Hn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Qn.delete(t.pointerId)
    }
}

function kn(e, t, n, r, l, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l]
    }, t !== null && (t = ar(t), t !== null && ri(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function ud(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return pt = kn(pt, e, t, n, r, l), !0;
        case "dragenter":
            return mt = kn(mt, e, t, n, r, l), !0;
        case "mouseover":
            return ht = kn(ht, e, t, n, r, l), !0;
        case "pointerover":
            var s = l.pointerId;
            return Hn.set(s, kn(Hn.get(s) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return s = l.pointerId, Qn.set(s, kn(Qn.get(s) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Aa(e) {
    var t = Ot(e.target);
    if (t !== null) {
        var n = Bt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Pa(n), t !== null) {
                    e.blockedOn = t, Ua(e.priority, function () {
                        Fa(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = gs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            cs = r, n.target.dispatchEvent(r), cs = null
        } else return t = ar(n), t !== null && ri(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function qi(e, t, n) {
    Tr(e) && n.delete(t)
}

function cd() {
    hs = !1, pt !== null && Tr(pt) && (pt = null), mt !== null && Tr(mt) && (mt = null), ht !== null && Tr(ht) && (ht = null), Hn.forEach(qi), Qn.forEach(qi)
}

function jn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, hs || (hs = !0, Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, cd)))
}

function Kn(e) {
    function t(l) {
        return jn(l, e)
    }
    if (0 < gr.length) {
        jn(gr[0], e);
        for (var n = 1; n < gr.length; n++) {
            var r = gr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (pt !== null && jn(pt, e), mt !== null && jn(mt, e), ht !== null && jn(ht, e), Hn.forEach(t), Qn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ut.length && (n = ut[0], n.blockedOn === null);) Aa(n), n.blockedOn === null && ut.shift()
}
var sn = lt.ReactCurrentBatchConfig,
    br = !0;

function dd(e, t, n, r) {
    var l = A,
        s = sn.transition;
    sn.transition = null;
    try {
        A = 1, li(e, t, n, r)
    } finally {
        A = l, sn.transition = s
    }
}

function fd(e, t, n, r) {
    var l = A,
        s = sn.transition;
    sn.transition = null;
    try {
        A = 4, li(e, t, n, r)
    } finally {
        A = l, sn.transition = s
    }
}

function li(e, t, n, r) {
    if (br) {
        var l = gs(e, t, n, r);
        if (l === null) Al(e, t, r, Hr, n), Ji(e, r);
        else if (ud(l, e, t, n, r)) r.stopPropagation();
        else if (Ji(e, r), t & 4 && -1 < ad.indexOf(e)) {
            for (; l !== null;) {
                var s = ar(l);
                if (s !== null && Ma(s), s = gs(e, t, n, r), s === null && Al(e, t, r, Hr, n), s === l) break;
                l = s
            }
            l !== null && r.stopPropagation()
        } else Al(e, t, r, null, n)
    }
}
var Hr = null;

function gs(e, t, n, r) {
    if (Hr = null, e = ei(r), e = Ot(e), e !== null)
        if (t = Bt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Pa(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Hr = e, null
}

function Ba(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (qc()) {
                case ti:
                    return 1;
                case za:
                    return 4;
                case Vr:
                case ed:
                    return 16;
                case Da:
                    return 536870912;
                default:
                    return 16
            }
            default:
                return 16
    }
}
var dt = null,
    si = null,
    Or = null;

function Va() {
    if (Or) return Or;
    var e, t = si,
        n = t.length,
        r, l = "value" in dt ? dt.value : dt.textContent,
        s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[s - r]; r++);
    return Or = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Lr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function yr() {
    return !0
}

function eo() {
    return !1
}

function Pe(e) {
    function t(n, r, l, s, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = s, this.target = i, this.currentTarget = null;
        for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(s) : s[u]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? yr : eo, this.isPropagationStopped = eo, this
    }
    return X(t.prototype, {
        preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yr)
        },
        stopPropagation: function () {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yr)
        },
        persist: function () {},
        isPersistent: yr
    }), t
}
var yn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ii = Pe(yn),
    or = X({}, yn, {
        view: 0,
        detail: 0
    }),
    pd = Pe(or),
    Ll, zl, _n, dl = X({}, or, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: oi,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== _n && (_n && e.type === "mousemove" ? (Ll = e.screenX - _n.screenX, zl = e.screenY - _n.screenY) : zl = Ll = 0, _n = e), Ll)
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : zl
        }
    }),
    to = Pe(dl),
    md = X({}, dl, {
        dataTransfer: 0
    }),
    hd = Pe(md),
    gd = X({}, or, {
        relatedTarget: 0
    }),
    Dl = Pe(gd),
    yd = X({}, yn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    vd = Pe(yd),
    xd = X({}, yn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    wd = Pe(xd),
    Nd = X({}, yn, {
        data: 0
    }),
    no = Pe(Nd),
    Sd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    kd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    jd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function _d(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jd[e]) ? !!t[e] : !1
}

function oi() {
    return _d
}
var Cd = X({}, or, {
        key: function (e) {
            if (e.key) {
                var t = Sd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: oi,
        charCode: function (e) {
            return e.type === "keypress" ? Lr(e) : 0
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Ed = Pe(Cd),
    Pd = X({}, dl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    ro = Pe(Pd),
    Td = X({}, or, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: oi
    }),
    Od = Pe(Td),
    Ld = X({}, yn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    zd = Pe(Ld),
    Dd = X({}, dl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Id = Pe(Dd),
    Rd = [9, 13, 27, 32],
    ai = et && "CompositionEvent" in window,
    Rn = null;
et && "documentMode" in document && (Rn = document.documentMode);
var Md = et && "TextEvent" in window && !Rn,
    Wa = et && (!ai || Rn && 8 < Rn && 11 >= Rn),
    lo = " ",
    so = !1;

function ba(e, t) {
    switch (e) {
        case "keyup":
            return Rd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Ha(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Qt = !1;

function Fd(e, t) {
    switch (e) {
        case "compositionend":
            return Ha(t);
        case "keypress":
            return t.which !== 32 ? null : (so = !0, lo);
        case "textInput":
            return e = t.data, e === lo && so ? null : e;
        default:
            return null
    }
}

function $d(e, t) {
    if (Qt) return e === "compositionend" || !ai && ba(e, t) ? (e = Va(), Or = si = dt = null, Qt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Wa && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Ud = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function io(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ud[e.type] : t === "textarea"
}

function Qa(e, t, n, r) {
    ka(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ii("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Mn = null,
    Gn = null;

function Ad(e) {
    ru(e, 0)
}

function fl(e) {
    var t = Yt(e);
    if (ga(t)) return e
}

function Bd(e, t) {
    if (e === "change") return t
}
var Ka = !1;
if (et) {
    var Il;
    if (et) {
        var Rl = "oninput" in document;
        if (!Rl) {
            var oo = document.createElement("div");
            oo.setAttribute("oninput", "return;"), Rl = typeof oo.oninput == "function"
        }
        Il = Rl
    } else Il = !1;
    Ka = Il && (!document.documentMode || 9 < document.documentMode)
}

function ao() {
    Mn && (Mn.detachEvent("onpropertychange", Ga), Gn = Mn = null)
}

function Ga(e) {
    if (e.propertyName === "value" && fl(Gn)) {
        var t = [];
        Qa(t, Gn, e, ei(e)), Ea(Ad, t)
    }
}

function Vd(e, t, n) {
    e === "focusin" ? (ao(), Mn = t, Gn = n, Mn.attachEvent("onpropertychange", Ga)) : e === "focusout" && ao()
}

function Wd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Gn)
}

function bd(e, t) {
    if (e === "click") return fl(t)
}

function Hd(e, t) {
    if (e === "input" || e === "change") return fl(t)
}

function Qd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Be = typeof Object.is == "function" ? Object.is : Qd;

function Yn(e, t) {
    if (Be(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Jl.call(t, l) || !Be(e[l], t[l])) return !1
    }
    return !0
}

function uo(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function co(e, t) {
    var n = uo(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = uo(n)
    }
}

function Ya(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ya(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Xa() {
    for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Ur(e.document)
    }
    return t
}

function ui(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Kd(e) {
    var t = Xa(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ya(n.ownerDocument.documentElement, n)) {
        if (r !== null && ui(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    s = Math.min(r.start, l);
                r = r.end === void 0 ? s : Math.min(r.end, l), !e.extend && s > r && (l = r, r = s, s = l), l = co(n, s);
                var i = co(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), s > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Gd = et && "documentMode" in document && 11 >= document.documentMode,
    Kt = null,
    ys = null,
    Fn = null,
    vs = !1;

function fo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vs || Kt == null || Kt !== Ur(r) || (r = Kt, "selectionStart" in r && ui(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Fn && Yn(Fn, r) || (Fn = r, r = Qr(ys, "onSelect"), 0 < r.length && (t = new ii("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Kt)))
}

function vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Gt = {
        animationend: vr("Animation", "AnimationEnd"),
        animationiteration: vr("Animation", "AnimationIteration"),
        animationstart: vr("Animation", "AnimationStart"),
        transitionend: vr("Transition", "TransitionEnd")
    },
    Ml = {},
    Za = {};
et && (Za = document.createElement("div").style, "AnimationEvent" in window || (delete Gt.animationend.animation, delete Gt.animationiteration.animation, delete Gt.animationstart.animation), "TransitionEvent" in window || delete Gt.transitionend.transition);

function pl(e) {
    if (Ml[e]) return Ml[e];
    if (!Gt[e]) return e;
    var t = Gt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Za) return Ml[e] = t[n];
    return e
}
var Ja = pl("animationend"),
    qa = pl("animationiteration"),
    eu = pl("animationstart"),
    tu = pl("transitionend"),
    nu = new Map,
    po = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function kt(e, t) {
    nu.set(e, t), At(t, [e])
}
for (var Fl = 0; Fl < po.length; Fl++) {
    var $l = po[Fl],
        Yd = $l.toLowerCase(),
        Xd = $l[0].toUpperCase() + $l.slice(1);
    kt(Yd, "on" + Xd)
}
kt(Ja, "onAnimationEnd");
kt(qa, "onAnimationIteration");
kt(eu, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(tu, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
At("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
At("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
At("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
At("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
At("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
At("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));

function mo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Yc(r, t, void 0, e), e.currentTarget = null
}

function ru(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        c = u.instance,
                        f = u.currentTarget;
                    if (u = u.listener, c !== s && l.isPropagationStopped()) break e;
                    mo(l, u, f), s = c
                } else
                    for (i = 0; i < r.length; i++) {
                        if (u = r[i], c = u.instance, f = u.currentTarget, u = u.listener, c !== s && l.isPropagationStopped()) break e;
                        mo(l, u, f), s = c
                    }
        }
    }
    if (Br) throw e = ps, Br = !1, ps = null, e
}

function H(e, t) {
    var n = t[ks];
    n === void 0 && (n = t[ks] = new Set);
    var r = e + "__bubble";
    n.has(r) || (lu(t, e, 2, !1), n.add(r))
}

function Ul(e, t, n) {
    var r = 0;
    t && (r |= 4), lu(n, e, r, t)
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);

function Xn(e) {
    if (!e[xr]) {
        e[xr] = !0, da.forEach(function (n) {
            n !== "selectionchange" && (Zd.has(n) || Ul(n, !1, e), Ul(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[xr] || (t[xr] = !0, Ul("selectionchange", !1, t))
    }
}

function lu(e, t, n, r) {
    switch (Ba(t)) {
        case 1:
            var l = dd;
            break;
        case 4:
            l = fd;
            break;
        default:
            l = li
    }
    n = l.bind(null, t, n, e), l = void 0, !fs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Al(e, t, n, r, l) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var u = r.stateNode.containerInfo;
            if (u === l || u.nodeType === 8 && u.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var c = i.tag;
                    if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
                    i = i.return
                }
            for (; u !== null;) {
                if (i = Ot(u), i === null) return;
                if (c = i.tag, c === 5 || c === 6) {
                    r = s = i;
                    continue e
                }
                u = u.parentNode
            }
        }
        r = r.return
    }
    Ea(function () {
        var f = s,
            g = ei(n),
            h = [];
        e: {
            var m = nu.get(e);
            if (m !== void 0) {
                var N = ii,
                    S = e;
                switch (e) {
                    case "keypress":
                        if (Lr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        N = Ed;
                        break;
                    case "focusin":
                        S = "focus", N = Dl;
                        break;
                    case "focusout":
                        S = "blur", N = Dl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        N = Dl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        N = to;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        N = hd;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        N = Od;
                        break;
                    case Ja:
                    case qa:
                    case eu:
                        N = vd;
                        break;
                    case tu:
                        N = zd;
                        break;
                    case "scroll":
                        N = pd;
                        break;
                    case "wheel":
                        N = Id;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        N = wd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        N = ro
                }
                var y = (t & 4) !== 0,
                    L = !y && e === "scroll",
                    a = y ? m !== null ? m + "Capture" : null : m;
                y = [];
                for (var d = f, p; d !== null;) {
                    p = d;
                    var v = p.stateNode;
                    if (p.tag === 5 && v !== null && (p = v, a !== null && (v = bn(d, a), v != null && y.push(Zn(d, v, p)))), L) break;
                    d = d.return
                }
                0 < y.length && (m = new N(m, S, null, n, g), h.push({
                    event: m,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", m && n !== cs && (S = n.relatedTarget || n.fromElement) && (Ot(S) || S[tt])) break e;
                if ((N || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, N ? (S = n.relatedTarget || n.toElement, N = f, S = S ? Ot(S) : null, S !== null && (L = Bt(S), S !== L || S.tag !== 5 && S.tag !== 6) && (S = null)) : (N = null, S = f), N !== S)) {
                    if (y = to, v = "onMouseLeave", a = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (y = ro, v = "onPointerLeave", a = "onPointerEnter", d = "pointer"), L = N == null ? m : Yt(N), p = S == null ? m : Yt(S), m = new y(v, d + "leave", N, n, g), m.target = L, m.relatedTarget = p, v = null, Ot(g) === f && (y = new y(a, d + "enter", S, n, g), y.target = p, y.relatedTarget = L, v = y), L = v, N && S) t: {
                        for (y = N, a = S, d = 0, p = y; p; p = Wt(p)) d++;
                        for (p = 0, v = a; v; v = Wt(v)) p++;
                        for (; 0 < d - p;) y = Wt(y),
                        d--;
                        for (; 0 < p - d;) a = Wt(a),
                        p--;
                        for (; d--;) {
                            if (y === a || a !== null && y === a.alternate) break t;
                            y = Wt(y), a = Wt(a)
                        }
                        y = null
                    }
                    else y = null;
                    N !== null && ho(h, m, N, y, !1), S !== null && L !== null && ho(h, L, S, y, !0)
                }
            }
            e: {
                if (m = f ? Yt(f) : window, N = m.nodeName && m.nodeName.toLowerCase(), N === "select" || N === "input" && m.type === "file") var _ = Bd;
                else if (io(m))
                    if (Ka) _ = Hd;
                    else {
                        _ = Wd;
                        var E = Vd
                    }
                else(N = m.nodeName) && N.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (_ = bd);
                if (_ && (_ = _(e, f))) {
                    Qa(h, _, n, g);
                    break e
                }
                E && E(e, m, f),
                e === "focusout" && (E = m._wrapperState) && E.controlled && m.type === "number" && ss(m, "number", m.value)
            }
            switch (E = f ? Yt(f) : window, e) {
                case "focusin":
                    (io(E) || E.contentEditable === "true") && (Kt = E, ys = f, Fn = null);
                    break;
                case "focusout":
                    Fn = ys = Kt = null;
                    break;
                case "mousedown":
                    vs = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    vs = !1, fo(h, n, g);
                    break;
                case "selectionchange":
                    if (Gd) break;
                case "keydown":
                case "keyup":
                    fo(h, n, g)
            }
            var P;
            if (ai) e: {
                switch (e) {
                    case "compositionstart":
                        var T = "onCompositionStart";
                        break e;
                    case "compositionend":
                        T = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        T = "onCompositionUpdate";
                        break e
                }
                T = void 0
            }
            else Qt ? ba(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");T && (Wa && n.locale !== "ko" && (Qt || T !== "onCompositionStart" ? T === "onCompositionEnd" && Qt && (P = Va()) : (dt = g, si = "value" in dt ? dt.value : dt.textContent, Qt = !0)), E = Qr(f, T), 0 < E.length && (T = new no(T, e, null, n, g), h.push({
                event: T,
                listeners: E
            }), P ? T.data = P : (P = Ha(n), P !== null && (T.data = P)))),
            (P = Md ? Fd(e, n) : $d(e, n)) && (f = Qr(f, "onBeforeInput"), 0 < f.length && (g = new no("onBeforeInput", "beforeinput", null, n, g), h.push({
                event: g,
                listeners: f
            }), g.data = P))
        }
        ru(h, t)
    })
}

function Zn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Qr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            s = l.stateNode;
        l.tag === 5 && s !== null && (l = s, s = bn(e, n), s != null && r.unshift(Zn(e, s, l)), s = bn(e, t), s != null && r.push(Zn(e, s, l))), e = e.return
    }
    return r
}

function Wt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function ho(e, t, n, r, l) {
    for (var s = t._reactName, i = []; n !== null && n !== r;) {
        var u = n,
            c = u.alternate,
            f = u.stateNode;
        if (c !== null && c === r) break;
        u.tag === 5 && f !== null && (u = f, l ? (c = bn(n, s), c != null && i.unshift(Zn(n, c, u))) : l || (c = bn(n, s), c != null && i.push(Zn(n, c, u)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Jd = /\r\n?/g,
    qd = /\u0000|\uFFFD/g;

function go(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jd, `
`).replace(qd, "")
}

function wr(e, t, n) {
    if (t = go(t), go(e) !== t && n) throw Error(k(425))
}

function Kr() {}
var xs = null,
    ws = null;

function Ns(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Ss = typeof setTimeout == "function" ? setTimeout : void 0,
    ef = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yo = typeof Promise == "function" ? Promise : void 0,
    tf = typeof queueMicrotask == "function" ? queueMicrotask : typeof yo < "u" ? function (e) {
        return yo.resolve(null).then(e).catch(nf)
    } : Ss;

function nf(e) {
    setTimeout(function () {
        throw e
    })
}

function Bl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Kn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Kn(t)
}

function gt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function vo(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var vn = Math.random().toString(36).slice(2),
    He = "__reactFiber$" + vn,
    Jn = "__reactProps$" + vn,
    tt = "__reactContainer$" + vn,
    ks = "__reactEvents$" + vn,
    rf = "__reactListeners$" + vn,
    lf = "__reactHandles$" + vn;

function Ot(e) {
    var t = e[He];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[tt] || n[He]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = vo(e); e !== null;) {
                    if (n = e[He]) return n;
                    e = vo(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function ar(e) {
    return e = e[He] || e[tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33))
}

function ml(e) {
    return e[Jn] || null
}
var js = [],
    Xt = -1;

function jt(e) {
    return {
        current: e
    }
}

function Q(e) {
    0 > Xt || (e.current = js[Xt], js[Xt] = null, Xt--)
}

function b(e, t) {
    Xt++, js[Xt] = e.current, e.current = t
}
var St = {},
    de = jt(St),
    we = jt(!1),
    Rt = St;

function cn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return St;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        s;
    for (s in n) l[s] = t[s];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Ne(e) {
    return e = e.childContextTypes, e != null
}

function Gr() {
    Q(we), Q(de)
}

function xo(e, t, n) {
    if (de.current !== St) throw Error(k(168));
    b(de, t), b(we, n)
}

function su(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(k(108, Vc(e) || "Unknown", l));
    return X({}, n, r)
}

function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, Rt = de.current, b(de, e), b(we, we.current), !0
}

function wo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n ? (e = su(e, t, Rt), r.__reactInternalMemoizedMergedChildContext = e, Q(we), Q(de), b(de, e)) : Q(we), b(we, n)
}
var Xe = null,
    hl = !1,
    Vl = !1;

function iu(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}

function sf(e) {
    hl = !0, iu(e)
}

function _t() {
    if (!Vl && Xe !== null) {
        Vl = !0;
        var e = 0,
            t = A;
        try {
            var n = Xe;
            for (A = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Xe = null, hl = !1
        } catch (l) {
            throw Xe !== null && (Xe = Xe.slice(e + 1)), La(ti, _t), l
        } finally {
            A = t, Vl = !1
        }
    }
    return null
}
var Zt = [],
    Jt = 0,
    Xr = null,
    Zr = 0,
    Te = [],
    Oe = 0,
    Mt = null,
    Ze = 1,
    Je = "";

function Pt(e, t) {
    Zt[Jt++] = Zr, Zt[Jt++] = Xr, Xr = e, Zr = t
}

function ou(e, t, n) {
    Te[Oe++] = Ze, Te[Oe++] = Je, Te[Oe++] = Mt, Mt = e;
    var r = Ze;
    e = Je;
    var l = 32 - Ue(r) - 1;
    r &= ~(1 << l), n += 1;
    var s = 32 - Ue(t) + l;
    if (30 < s) {
        var i = l - l % 5;
        s = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Ze = 1 << 32 - Ue(t) + l | n << l | r, Je = s + e
    } else Ze = 1 << s | n << l | r, Je = e
}

function ci(e) {
    e.return !== null && (Pt(e, 1), ou(e, 1, 0))
}

function di(e) {
    for (; e === Xr;) Xr = Zt[--Jt], Zt[Jt] = null, Zr = Zt[--Jt], Zt[Jt] = null;
    for (; e === Mt;) Mt = Te[--Oe], Te[Oe] = null, Je = Te[--Oe], Te[Oe] = null, Ze = Te[--Oe], Te[Oe] = null
}
var _e = null,
    je = null,
    K = !1,
    $e = null;

function au(e, t) {
    var n = Le(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function No(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, je = gt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _e = e, je = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mt !== null ? {
                id: Ze,
                overflow: Je
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Le(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _e = e, je = null, !0) : !1;
        default:
            return !1
    }
}

function _s(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Cs(e) {
    if (K) {
        var t = je;
        if (t) {
            var n = t;
            if (!No(e, t)) {
                if (_s(e)) throw Error(k(418));
                t = gt(n.nextSibling);
                var r = _e;
                t && No(e, t) ? au(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, _e = e)
            }
        } else {
            if (_s(e)) throw Error(k(418));
            e.flags = e.flags & -4097 | 2, K = !1, _e = e
        }
    }
}

function So(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    _e = e
}

function Nr(e) {
    if (e !== _e) return !1;
    if (!K) return So(e), K = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ns(e.type, e.memoizedProps)), t && (t = je)) {
        if (_s(e)) throw uu(), Error(k(418));
        for (; t;) au(e, t), t = gt(t.nextSibling)
    }
    if (So(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            je = gt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            je = null
        }
    } else je = _e ? gt(e.stateNode.nextSibling) : null;
    return !0
}

function uu() {
    for (var e = je; e;) e = gt(e.nextSibling)
}

function dn() {
    je = _e = null, K = !1
}

function fi(e) {
    $e === null ? $e = [e] : $e.push(e)
}
var of = lt.ReactCurrentBatchConfig;

function Cn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(k(309));
                var r = n.stateNode
            }
            if (!r) throw Error(k(147, e));
            var l = r,
                s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function (i) {
                var u = l.refs;
                i === null ? delete u[s] : u[s] = i
            }, t._stringRef = s, t)
        }
        if (typeof e != "string") throw Error(k(284));
        if (!n._owner) throw Error(k(290, e))
    }
    return e
}

function Sr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function ko(e) {
    var t = e._init;
    return t(e._payload)
}

function cu(e) {
    function t(a, d) {
        if (e) {
            var p = a.deletions;
            p === null ? (a.deletions = [d], a.flags |= 16) : p.push(d)
        }
    }

    function n(a, d) {
        if (!e) return null;
        for (; d !== null;) t(a, d), d = d.sibling;
        return null
    }

    function r(a, d) {
        for (a = new Map; d !== null;) d.key !== null ? a.set(d.key, d) : a.set(d.index, d), d = d.sibling;
        return a
    }

    function l(a, d) {
        return a = wt(a, d), a.index = 0, a.sibling = null, a
    }

    function s(a, d, p) {
        return a.index = p, e ? (p = a.alternate, p !== null ? (p = p.index, p < d ? (a.flags |= 2, d) : p) : (a.flags |= 2, d)) : (a.flags |= 1048576, d)
    }

    function i(a) {
        return e && a.alternate === null && (a.flags |= 2), a
    }

    function u(a, d, p, v) {
        return d === null || d.tag !== 6 ? (d = Yl(p, a.mode, v), d.return = a, d) : (d = l(d, p), d.return = a, d)
    }

    function c(a, d, p, v) {
        var _ = p.type;
        return _ === Ht ? g(a, d, p.props.children, v, p.key) : d !== null && (d.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ot && ko(_) === d.type) ? (v = l(d, p.props), v.ref = Cn(a, d, p), v.return = a, v) : (v = $r(p.type, p.key, p.props, null, a.mode, v), v.ref = Cn(a, d, p), v.return = a, v)
    }

    function f(a, d, p, v) {
        return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = Xl(p, a.mode, v), d.return = a, d) : (d = l(d, p.children || []), d.return = a, d)
    }

    function g(a, d, p, v, _) {
        return d === null || d.tag !== 7 ? (d = It(p, a.mode, v, _), d.return = a, d) : (d = l(d, p), d.return = a, d)
    }

    function h(a, d, p) {
        if (typeof d == "string" && d !== "" || typeof d == "number") return d = Yl("" + d, a.mode, p), d.return = a, d;
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case dr:
                    return p = $r(d.type, d.key, d.props, null, a.mode, p), p.ref = Cn(a, null, d), p.return = a, p;
                case bt:
                    return d = Xl(d, a.mode, p), d.return = a, d;
                case ot:
                    var v = d._init;
                    return h(a, v(d._payload), p)
            }
            if (On(d) || Nn(d)) return d = It(d, a.mode, p, null), d.return = a, d;
            Sr(a, d)
        }
        return null
    }

    function m(a, d, p, v) {
        var _ = d !== null ? d.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return _ !== null ? null : u(a, d, "" + p, v);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case dr:
                    return p.key === _ ? c(a, d, p, v) : null;
                case bt:
                    return p.key === _ ? f(a, d, p, v) : null;
                case ot:
                    return _ = p._init, m(a, d, _(p._payload), v)
            }
            if (On(p) || Nn(p)) return _ !== null ? null : g(a, d, p, v, null);
            Sr(a, p)
        }
        return null
    }

    function N(a, d, p, v, _) {
        if (typeof v == "string" && v !== "" || typeof v == "number") return a = a.get(p) || null, u(d, a, "" + v, _);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case dr:
                    return a = a.get(v.key === null ? p : v.key) || null, c(d, a, v, _);
                case bt:
                    return a = a.get(v.key === null ? p : v.key) || null, f(d, a, v, _);
                case ot:
                    var E = v._init;
                    return N(a, d, p, E(v._payload), _)
            }
            if (On(v) || Nn(v)) return a = a.get(p) || null, g(d, a, v, _, null);
            Sr(d, v)
        }
        return null
    }

    function S(a, d, p, v) {
        for (var _ = null, E = null, P = d, T = d = 0, V = null; P !== null && T < p.length; T++) {
            P.index > T ? (V = P, P = null) : V = P.sibling;
            var D = m(a, P, p[T], v);
            if (D === null) {
                P === null && (P = V);
                break
            }
            e && P && D.alternate === null && t(a, P), d = s(D, d, T), E === null ? _ = D : E.sibling = D, E = D, P = V
        }
        if (T === p.length) return n(a, P), K && Pt(a, T), _;
        if (P === null) {
            for (; T < p.length; T++) P = h(a, p[T], v), P !== null && (d = s(P, d, T), E === null ? _ = P : E.sibling = P, E = P);
            return K && Pt(a, T), _
        }
        for (P = r(a, P); T < p.length; T++) V = N(P, a, T, p[T], v), V !== null && (e && V.alternate !== null && P.delete(V.key === null ? T : V.key), d = s(V, d, T), E === null ? _ = V : E.sibling = V, E = V);
        return e && P.forEach(function (ee) {
            return t(a, ee)
        }), K && Pt(a, T), _
    }

    function y(a, d, p, v) {
        var _ = Nn(p);
        if (typeof _ != "function") throw Error(k(150));
        if (p = _.call(p), p == null) throw Error(k(151));
        for (var E = _ = null, P = d, T = d = 0, V = null, D = p.next(); P !== null && !D.done; T++, D = p.next()) {
            P.index > T ? (V = P, P = null) : V = P.sibling;
            var ee = m(a, P, D.value, v);
            if (ee === null) {
                P === null && (P = V);
                break
            }
            e && P && ee.alternate === null && t(a, P), d = s(ee, d, T), E === null ? _ = ee : E.sibling = ee, E = ee, P = V
        }
        if (D.done) return n(a, P), K && Pt(a, T), _;
        if (P === null) {
            for (; !D.done; T++, D = p.next()) D = h(a, D.value, v), D !== null && (d = s(D, d, T), E === null ? _ = D : E.sibling = D, E = D);
            return K && Pt(a, T), _
        }
        for (P = r(a, P); !D.done; T++, D = p.next()) D = N(P, a, T, D.value, v), D !== null && (e && D.alternate !== null && P.delete(D.key === null ? T : D.key), d = s(D, d, T), E === null ? _ = D : E.sibling = D, E = D);
        return e && P.forEach(function (ye) {
            return t(a, ye)
        }), K && Pt(a, T), _
    }

    function L(a, d, p, v) {
        if (typeof p == "object" && p !== null && p.type === Ht && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case dr:
                    e: {
                        for (var _ = p.key, E = d; E !== null;) {
                            if (E.key === _) {
                                if (_ = p.type, _ === Ht) {
                                    if (E.tag === 7) {
                                        n(a, E.sibling), d = l(E, p.props.children), d.return = a, a = d;
                                        break e
                                    }
                                } else if (E.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === ot && ko(_) === E.type) {
                                    n(a, E.sibling), d = l(E, p.props), d.ref = Cn(a, E, p), d.return = a, a = d;
                                    break e
                                }
                                n(a, E);
                                break
                            } else t(a, E);
                            E = E.sibling
                        }
                        p.type === Ht ? (d = It(p.props.children, a.mode, v, p.key), d.return = a, a = d) : (v = $r(p.type, p.key, p.props, null, a.mode, v), v.ref = Cn(a, d, p), v.return = a, a = v)
                    }
                    return i(a);
                case bt:
                    e: {
                        for (E = p.key; d !== null;) {
                            if (d.key === E)
                                if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                    n(a, d.sibling), d = l(d, p.children || []), d.return = a, a = d;
                                    break e
                                } else {
                                    n(a, d);
                                    break
                                }
                            else t(a, d);
                            d = d.sibling
                        }
                        d = Xl(p, a.mode, v),
                        d.return = a,
                        a = d
                    }
                    return i(a);
                case ot:
                    return E = p._init, L(a, d, E(p._payload), v)
            }
            if (On(p)) return S(a, d, p, v);
            if (Nn(p)) return y(a, d, p, v);
            Sr(a, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, d !== null && d.tag === 6 ? (n(a, d.sibling), d = l(d, p), d.return = a, a = d) : (n(a, d), d = Yl(p, a.mode, v), d.return = a, a = d), i(a)) : n(a, d)
    }
    return L
}
var fn = cu(!0),
    du = cu(!1),
    Jr = jt(null),
    qr = null,
    qt = null,
    pi = null;

function mi() {
    pi = qt = qr = null
}

function hi(e) {
    var t = Jr.current;
    Q(Jr), e._currentValue = t
}

function Es(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function on(e, t) {
    qr = e, pi = qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), e.firstContext = null)
}

function De(e) {
    var t = e._currentValue;
    if (pi !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, qt === null) {
            if (qr === null) throw Error(k(308));
            qt = e, qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else qt = qt.next = e;
    return t
}
var Lt = null;

function gi(e) {
    Lt === null ? Lt = [e] : Lt.push(e)
}

function fu(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, gi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nt(e, r)
}

function nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var at = !1;

function yi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function pu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, gi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nt(e, n)
}

function zr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ni(e, n)
    }
}

function jo(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            s = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? l = s = i : s = s.next = i, n = n.next
            } while (n !== null);
            s === null ? l = s = t : s = s.next = t
        } else l = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function el(e, t, n, r) {
    var l = e.updateQueue;
    at = !1;
    var s = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var c = u,
            f = c.next;
        c.next = null, i === null ? s = f : i.next = f, i = c;
        var g = e.alternate;
        g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== i && (u === null ? g.firstBaseUpdate = f : u.next = f, g.lastBaseUpdate = c))
    }
    if (s !== null) {
        var h = l.baseState;
        i = 0, g = f = c = null, u = s;
        do {
            var m = u.lane,
                N = u.eventTime;
            if ((r & m) === m) {
                g !== null && (g = g.next = {
                    eventTime: N,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var S = e,
                        y = u;
                    switch (m = t, N = n, y.tag) {
                        case 1:
                            if (S = y.payload, typeof S == "function") {
                                h = S.call(N, h, m);
                                break e
                            }
                            h = S;
                            break e;
                        case 3:
                            S.flags = S.flags & -65537 | 128;
                        case 0:
                            if (S = y.payload, m = typeof S == "function" ? S.call(N, h, m) : S, m == null) break e;
                            h = X({}, h, m);
                            break e;
                        case 2:
                            at = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = l.effects, m === null ? l.effects = [u] : m.push(u))
            } else N = {
                eventTime: N,
                lane: m,
                tag: u.tag,
                payload: u.payload,
                callback: u.callback,
                next: null
            }, g === null ? (f = g = N, c = h) : g = g.next = N, i |= m;
            if (u = u.next, u === null) {
                if (u = l.shared.pending, u === null) break;
                m = u, u = m.next, m.next = null, l.lastBaseUpdate = m, l.shared.pending = null
            }
        } while (!0);
        if (g === null && (c = h), l.baseState = c, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else s === null && (l.shared.lanes = 0);
        $t |= i, e.lanes = i, e.memoizedState = h
    }
}

function _o(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
                l.call(r)
            }
        }
}
var ur = {},
    Ke = jt(ur),
    qn = jt(ur),
    er = jt(ur);

function zt(e) {
    if (e === ur) throw Error(k(174));
    return e
}

function vi(e, t) {
    switch (b(er, t), b(qn, e), b(Ke, ur), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : os(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = os(t, e)
    }
    Q(Ke), b(Ke, t)
}

function pn() {
    Q(Ke), Q(qn), Q(er)
}

function mu(e) {
    zt(er.current);
    var t = zt(Ke.current),
        n = os(t, e.type);
    t !== n && (b(qn, e), b(Ke, n))
}

function xi(e) {
    qn.current === e && (Q(Ke), Q(qn))
}
var G = jt(0);

function tl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Wl = [];

function wi() {
    for (var e = 0; e < Wl.length; e++) Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var Dr = lt.ReactCurrentDispatcher,
    bl = lt.ReactCurrentBatchConfig,
    Ft = 0,
    Y = null,
    te = null,
    re = null,
    nl = !1,
    $n = !1,
    tr = 0,
    af = 0;

function ae() {
    throw Error(k(321))
}

function Ni(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Be(e[n], t[n])) return !1;
    return !0
}

function Si(e, t, n, r, l, s) {
    if (Ft = s, Y = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? ff : pf, e = n(r, l), $n) {
        s = 0;
        do {
            if ($n = !1, tr = 0, 25 <= s) throw Error(k(301));
            s += 1, re = te = null, t.updateQueue = null, Dr.current = mf, e = n(r, l)
        } while ($n)
    }
    if (Dr.current = rl, t = te !== null && te.next !== null, Ft = 0, re = te = Y = null, nl = !1, t) throw Error(k(300));
    return e
}

function ki() {
    var e = tr !== 0;
    return tr = 0, e
}

function be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return re === null ? Y.memoizedState = re = e : re = re.next = e, re
}

function Ie() {
    if (te === null) {
        var e = Y.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = te.next;
    var t = re === null ? Y.memoizedState : re.next;
    if (t !== null) re = t, te = e;
    else {
        if (e === null) throw Error(k(310));
        te = e, e = {
            memoizedState: te.memoizedState,
            baseState: te.baseState,
            baseQueue: te.baseQueue,
            queue: te.queue,
            next: null
        }, re === null ? Y.memoizedState = re = e : re = re.next = e
    }
    return re
}

function nr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Hl(e) {
    var t = Ie(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = te,
        l = r.baseQueue,
        s = n.pending;
    if (s !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = s.next, s.next = i
        }
        r.baseQueue = l = s, n.pending = null
    }
    if (l !== null) {
        s = l.next, r = r.baseState;
        var u = i = null,
            c = null,
            f = s;
        do {
            var g = f.lane;
            if ((Ft & g) === g) c !== null && (c = c.next = {
                lane: 0,
                action: f.action,
                hasEagerState: f.hasEagerState,
                eagerState: f.eagerState,
                next: null
            }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
            else {
                var h = {
                    lane: g,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                c === null ? (u = c = h, i = r) : c = c.next = h, Y.lanes |= g, $t |= g
            }
            f = f.next
        } while (f !== null && f !== s);
        c === null ? i = r : c.next = u, Be(r, t.memoizedState) || (xe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do s = l.lane, Y.lanes |= s, $t |= s, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Ql(e) {
    var t = Ie(),
        n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        s = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do s = e(s, i.action), i = i.next; while (i !== l);
        Be(s, t.memoizedState) || (xe = !0), t.memoizedState = s, t.baseQueue === null && (t.baseState = s), n.lastRenderedState = s
    }
    return [s, r]
}

function hu() {}

function gu(e, t) {
    var n = Y,
        r = Ie(),
        l = t(),
        s = !Be(r.memoizedState, l);
    if (s && (r.memoizedState = l, xe = !0), r = r.queue, ji(xu.bind(null, n, r, e), [e]), r.getSnapshot !== t || s || re !== null && re.memoizedState.tag & 1) {
        if (n.flags |= 2048, rr(9, vu.bind(null, n, r, l, t), void 0, null), le === null) throw Error(k(349));
        Ft & 30 || yu(n, t, l)
    }
    return l
}

function yu(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Y.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Y.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function vu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, wu(t) && Nu(e)
}

function xu(e, t, n) {
    return n(function () {
        wu(t) && Nu(e)
    })
}

function wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Be(e, n)
    } catch {
        return !0
    }
}

function Nu(e) {
    var t = nt(e, 1);
    t !== null && Ae(t, e, 1, -1)
}

function Co(e) {
    var t = be();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = df.bind(null, Y, e), [t.memoizedState, e]
}

function rr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Y.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Y.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Su() {
    return Ie().memoizedState
}

function Ir(e, t, n, r) {
    var l = be();
    Y.flags |= e, l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r)
}

function gl(e, t, n, r) {
    var l = Ie();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (te !== null) {
        var i = te.memoizedState;
        if (s = i.destroy, r !== null && Ni(r, i.deps)) {
            l.memoizedState = rr(t, n, s, r);
            return
        }
    }
    Y.flags |= e, l.memoizedState = rr(1 | t, n, s, r)
}

function Eo(e, t) {
    return Ir(8390656, 8, e, t)
}

function ji(e, t) {
    return gl(2048, 8, e, t)
}

function ku(e, t) {
    return gl(4, 2, e, t)
}

function ju(e, t) {
    return gl(4, 4, e, t)
}

function _u(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function () {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function () {
            t.current = null
        }
}

function Cu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gl(4, 4, _u.bind(null, t, e), n)
}

function _i() {}

function Eu(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ni(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Pu(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ni(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Tu(e, t, n) {
    return Ft & 21 ? (Be(n, t) || (n = Ia(), Y.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, xe = !0), e.memoizedState = n)
}

function uf(e, t) {
    var n = A;
    A = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = bl.transition;
    bl.transition = {};
    try {
        e(!1), t()
    } finally {
        A = n, bl.transition = r
    }
}

function Ou() {
    return Ie().memoizedState
}

function cf(e, t, n) {
    var r = xt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Lu(e)) zu(t, n);
    else if (n = fu(e, t, n, r), n !== null) {
        var l = me();
        Ae(n, e, r, l), Du(n, t, r)
    }
}

function df(e, t, n) {
    var r = xt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Lu(e)) zu(t, l);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer, s !== null)) try {
            var i = t.lastRenderedState,
                u = s(i, n);
            if (l.hasEagerState = !0, l.eagerState = u, Be(u, i)) {
                var c = t.interleaved;
                c === null ? (l.next = l, gi(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = fu(e, t, l, r), n !== null && (l = me(), Ae(n, e, r, l), Du(n, t, r))
    }
}

function Lu(e) {
    var t = e.alternate;
    return e === Y || t !== null && t === Y
}

function zu(e, t) {
    $n = nl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Du(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, ni(e, n)
    }
}
var rl = {
        readContext: De,
        useCallback: ae,
        useContext: ae,
        useEffect: ae,
        useImperativeHandle: ae,
        useInsertionEffect: ae,
        useLayoutEffect: ae,
        useMemo: ae,
        useReducer: ae,
        useRef: ae,
        useState: ae,
        useDebugValue: ae,
        useDeferredValue: ae,
        useTransition: ae,
        useMutableSource: ae,
        useSyncExternalStore: ae,
        useId: ae,
        unstable_isNewReconciler: !1
    },
    ff = {
        readContext: De,
        useCallback: function (e, t) {
            return be().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: De,
        useEffect: Eo,
        useImperativeHandle: function (e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ir(4194308, 4, _u.bind(null, t, e), n)
        },
        useLayoutEffect: function (e, t) {
            return Ir(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return Ir(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = be();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function (e, t, n) {
            var r = be();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = cf.bind(null, Y, e), [r.memoizedState, e]
        },
        useRef: function (e) {
            var t = be();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: Co,
        useDebugValue: _i,
        useDeferredValue: function (e) {
            return be().memoizedState = e
        },
        useTransition: function () {
            var e = Co(!1),
                t = e[0];
            return e = uf.bind(null, e[1]), be().memoizedState = e, [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = Y,
                l = be();
            if (K) {
                if (n === void 0) throw Error(k(407));
                n = n()
            } else {
                if (n = t(), le === null) throw Error(k(349));
                Ft & 30 || yu(r, t, n)
            }
            l.memoizedState = n;
            var s = {
                value: n,
                getSnapshot: t
            };
            return l.queue = s, Eo(xu.bind(null, r, s, e), [e]), r.flags |= 2048, rr(9, vu.bind(null, r, s, n, t), void 0, null), n
        },
        useId: function () {
            var e = be(),
                t = le.identifierPrefix;
            if (K) {
                var n = Je,
                    r = Ze;
                n = (r & ~(1 << 32 - Ue(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tr++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = af++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    pf = {
        readContext: De,
        useCallback: Eu,
        useContext: De,
        useEffect: ji,
        useImperativeHandle: Cu,
        useInsertionEffect: ku,
        useLayoutEffect: ju,
        useMemo: Pu,
        useReducer: Hl,
        useRef: Su,
        useState: function () {
            return Hl(nr)
        },
        useDebugValue: _i,
        useDeferredValue: function (e) {
            var t = Ie();
            return Tu(t, te.memoizedState, e)
        },
        useTransition: function () {
            var e = Hl(nr)[0],
                t = Ie().memoizedState;
            return [e, t]
        },
        useMutableSource: hu,
        useSyncExternalStore: gu,
        useId: Ou,
        unstable_isNewReconciler: !1
    },
    mf = {
        readContext: De,
        useCallback: Eu,
        useContext: De,
        useEffect: ji,
        useImperativeHandle: Cu,
        useInsertionEffect: ku,
        useLayoutEffect: ju,
        useMemo: Pu,
        useReducer: Ql,
        useRef: Su,
        useState: function () {
            return Ql(nr)
        },
        useDebugValue: _i,
        useDeferredValue: function (e) {
            var t = Ie();
            return te === null ? t.memoizedState = e : Tu(t, te.memoizedState, e)
        },
        useTransition: function () {
            var e = Ql(nr)[0],
                t = Ie().memoizedState;
            return [e, t]
        },
        useMutableSource: hu,
        useSyncExternalStore: gu,
        useId: Ou,
        unstable_isNewReconciler: !1
    };

function Me(e, t) {
    if (e && e.defaultProps) {
        t = X({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Ps(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : X({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var yl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Bt(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = me(),
            l = xt(e),
            s = qe(r, l);
        s.payload = t, n != null && (s.callback = n), t = yt(e, s, l), t !== null && (Ae(t, e, l, r), zr(t, e, l))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = me(),
            l = xt(e),
            s = qe(r, l);
        s.tag = 1, s.payload = t, n != null && (s.callback = n), t = yt(e, s, l), t !== null && (Ae(t, e, l, r), zr(t, e, l))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = me(),
            r = xt(e),
            l = qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Ae(t, e, r, n), zr(t, e, r))
    }
};

function Po(e, t, n, r, l, s, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, i) : t.prototype && t.prototype.isPureReactComponent ? !Yn(n, r) || !Yn(l, s) : !0
}

function Iu(e, t, n) {
    var r = !1,
        l = St,
        s = t.contextType;
    return typeof s == "object" && s !== null ? s = De(s) : (l = Ne(t) ? Rt : de.current, r = t.contextTypes, s = (r = r != null) ? cn(e, l) : St), t = new t(n, s), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = yl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = s), t
}

function To(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && yl.enqueueReplaceState(t, t.state, null)
}

function Ts(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, yi(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? l.context = De(s) : (s = Ne(t) ? Rt : de.current, l.context = cn(e, s)), l.state = e.memoizedState, s = t.getDerivedStateFromProps, typeof s == "function" && (Ps(e, t, s, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && yl.enqueueReplaceState(l, l.state, null), el(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function mn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Bc(r), r = r.return; while (r);
        var l = n
    } catch (s) {
        l = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Kl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function Os(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var hf = typeof WeakMap == "function" ? WeakMap : Map;

function Ru(e, t, n) {
    n = qe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function () {
        sl || (sl = !0, As = r), Os(e, t)
    }, n
}

function Mu(e, t, n) {
    n = qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function () {
            return r(l)
        }, n.callback = function () {
            Os(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function () {
        Os(e, t), typeof r != "function" && (vt === null ? vt = new Set([this]) : vt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Oo(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new hf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Tf.bind(null, e, t, n), t.then(e, e))
}

function Lo(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function zo(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = qe(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e)
}
var gf = lt.ReactCurrentOwner,
    xe = !1;

function pe(e, t, n, r) {
    t.child = e === null ? du(t, null, n, r) : fn(t, e.child, n, r)
}

function Do(e, t, n, r, l) {
    n = n.render;
    var s = t.ref;
    return on(t, l), r = Si(e, t, n, r, s, l), n = ki(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (K && n && ci(t), t.flags |= 1, pe(e, t, r, l), t.child)
}

function Io(e, t, n, r, l) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Di(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = s, Fu(e, t, s, r, l)) : (e = $r(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (s = e.child, !(e.lanes & l)) {
        var i = s.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Yn, n(i, r) && e.ref === t.ref) return rt(e, t, l)
    }
    return t.flags |= 1, e = wt(s, r), e.ref = t.ref, e.return = t, t.child = e
}

function Fu(e, t, n, r, l) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Yn(s, r) && e.ref === t.ref)
            if (xe = !1, t.pendingProps = r = s, (e.lanes & l) !== 0) e.flags & 131072 && (xe = !0);
            else return t.lanes = e.lanes, rt(e, t, l)
    }
    return Ls(e, t, n, r, l)
}

function $u(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, b(tn, ke), ke |= n;
        else {
            if (!(n & 1073741824)) return e = s !== null ? s.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, b(tn, ke), ke |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = s !== null ? s.baseLanes : n, b(tn, ke), ke |= r
        }
    else s !== null ? (r = s.baseLanes | n, t.memoizedState = null) : r = n, b(tn, ke), ke |= r;
    return pe(e, t, l, n), t.child
}

function Uu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ls(e, t, n, r, l) {
    var s = Ne(n) ? Rt : de.current;
    return s = cn(t, s), on(t, l), n = Si(e, t, n, r, s, l), r = ki(), e !== null && !xe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (K && r && ci(t), t.flags |= 1, pe(e, t, n, l), t.child)
}

function Ro(e, t, n, r, l) {
    if (Ne(n)) {
        var s = !0;
        Yr(t)
    } else s = !1;
    if (on(t, l), t.stateNode === null) Rr(e, t), Iu(t, n, r), Ts(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var c = i.context,
            f = n.contextType;
        typeof f == "object" && f !== null ? f = De(f) : (f = Ne(n) ? Rt : de.current, f = cn(t, f));
        var g = n.getDerivedStateFromProps,
            h = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== f) && To(t, i, r, f), at = !1;
        var m = t.memoizedState;
        i.state = m, el(t, r, i, l), c = t.memoizedState, u !== r || m !== c || we.current || at ? (typeof g == "function" && (Ps(t, n, g, r), c = t.memoizedState), (u = at || Po(t, n, u, r, m, c, f)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, pu(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Me(t.type, u), i.props = f, h = t.pendingProps, m = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = De(c) : (c = Ne(n) ? Rt : de.current, c = cn(t, c));
        var N = n.getDerivedStateFromProps;
        (g = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || m !== c) && To(t, i, r, c), at = !1, m = t.memoizedState, i.state = m, el(t, r, i, l);
        var S = t.memoizedState;
        u !== h || m !== S || we.current || at ? (typeof N == "function" && (Ps(t, n, N, r), S = t.memoizedState), (f = at || Po(t, n, f, r, m, S, c) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, S, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, S, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), i.props = r, i.state = S, i.context = c, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return zs(e, t, n, r, s, l)
}

function zs(e, t, n, r, l, s) {
    Uu(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && wo(t, n, !1), rt(e, t, s);
    r = t.stateNode, gf.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = fn(t, e.child, null, s), t.child = fn(t, null, u, s)) : pe(e, t, u, s), t.memoizedState = r.state, l && wo(t, n, !0), t.child
}

function Au(e) {
    var t = e.stateNode;
    t.pendingContext ? xo(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xo(e, t.context, !1), vi(e, t.containerInfo)
}

function Mo(e, t, n, r, l) {
    return dn(), fi(l), t.flags |= 256, pe(e, t, n, r), t.child
}
var Ds = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Is(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Bu(e, t, n) {
    var r = t.pendingProps,
        l = G.current,
        s = !1,
        i = (t.flags & 128) !== 0,
        u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (s = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), b(G, l & 1), e === null) return Cs(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, s ? (r = t.mode, s = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && s !== null ? (s.childLanes = 0, s.pendingProps = i) : s = wl(i, r, 0, null), e = It(e, r, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = Is(n), t.memoizedState = Ds, e) : Ci(t, i));
    if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return yf(e, t, i, r, u, l, n);
    if (s) {
        s = r.fallback, i = t.mode, l = e.child, u = l.sibling;
        var c = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = wt(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? s = wt(u, s) : (s = It(s, i, n, null), s.flags |= 2), s.return = t, r.return = t, r.sibling = s, t.child = r, r = s, s = t.child, i = e.child.memoizedState, i = i === null ? Is(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, s.memoizedState = i, s.childLanes = e.childLanes & ~n, t.memoizedState = Ds, r
    }
    return s = e.child, e = s.sibling, r = wt(s, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ci(e, t) {
    return t = wl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function kr(e, t, n, r) {
    return r !== null && fi(r), fn(t, e.child, null, n), e = Ci(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function yf(e, t, n, r, l, s, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Kl(Error(k(422))), kr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (s = r.fallback, l = t.mode, r = wl({
        mode: "visible",
        children: r.children
    }, l, 0, null), s = It(s, l, i, null), s.flags |= 2, r.return = t, s.return = t, r.sibling = s, t.child = r, t.mode & 1 && fn(t, e.child, null, i), t.child.memoizedState = Is(i), t.memoizedState = Ds, s);
    if (!(t.mode & 1)) return kr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
        return r = u, s = Error(k(419)), r = Kl(s, r, void 0), kr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0, xe || u) {
        if (r = le, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== s.retryLane && (s.retryLane = l, nt(e, l), Ae(r, e, l, -1))
        }
        return zi(), r = Kl(Error(k(421))), kr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Of.bind(null, e), l._reactRetry = t, null) : (e = s.treeContext, je = gt(l.nextSibling), _e = t, K = !0, $e = null, e !== null && (Te[Oe++] = Ze, Te[Oe++] = Je, Te[Oe++] = Mt, Ze = e.id, Je = e.overflow, Mt = t), t = Ci(t, r.children), t.flags |= 4096, t)
}

function Fo(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Es(e.return, t, n)
}

function Gl(e, t, n, r, l) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = l)
}

function Vu(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        s = r.tail;
    if (pe(e, t, r.children, n), r = G.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Fo(e, n, t);
            else if (e.tag === 19) Fo(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (b(G, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && tl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Gl(t, !1, l, n, s);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && tl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Gl(t, !0, n, null, s);
            break;
        case "together":
            Gl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Rr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
        for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function vf(e, t, n) {
    switch (t.tag) {
        case 3:
            Au(t), dn();
            break;
        case 5:
            mu(t);
            break;
        case 1:
            Ne(t.type) && Yr(t);
            break;
        case 4:
            vi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            b(Jr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (b(G, G.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Bu(e, t, n) : (b(G, G.current & 1), e = rt(e, t, n), e !== null ? e.sibling : null);
            b(G, G.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Vu(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), b(G, G.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, $u(e, t, n)
    }
    return rt(e, t, n)
}
var Wu, Rs, bu, Hu;
Wu = function (e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Rs = function () {};
bu = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, zt(Ke.current);
        var s = null;
        switch (n) {
            case "input":
                l = rs(e, l), r = rs(e, r), s = [];
                break;
            case "select":
                l = X({}, l, {
                    value: void 0
                }), r = X({}, r, {
                    value: void 0
                }), s = [];
                break;
            case "textarea":
                l = is(e, l), r = is(e, r), s = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr)
        }
        as(n, r);
        var i;
        n = null;
        for (f in l)
            if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
                if (f === "style") {
                    var u = l[f];
                    for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Vn.hasOwnProperty(f) ? s || (s = []) : (s = s || []).push(f, null));
        for (f in r) {
            var c = r[f];
            if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && c !== u && (c != null || u != null))
                if (f === "style")
                    if (u) {
                        for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i])
                    } else n || (s || (s = []), s.push(f, n)), n = c;
            else f === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (s = s || []).push(f, c)) : f === "children" ? typeof c != "string" && typeof c != "number" || (s = s || []).push(f, "" + c) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Vn.hasOwnProperty(f) ? (c != null && f === "onScroll" && H("scroll", e), s || u === c || (s = [])) : (s = s || []).push(f, c))
        }
        n && (s = s || []).push("style", n);
        var f = s;
        (t.updateQueue = f) && (t.flags |= 4)
    }
};
Hu = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function En(e, t) {
    if (!K) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function xf(e, t, n) {
    var r = t.pendingProps;
    switch (di(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ue(t), null;
        case 1:
            return Ne(t.type) && Gr(), ue(t), null;
        case 3:
            return r = t.stateNode, pn(), Q(we), Q(de), wi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, $e !== null && (Ws($e), $e = null))), Rs(e, t), ue(t), null;
        case 5:
            xi(t);
            var l = zt(er.current);
            if (n = t.type, e !== null && t.stateNode != null) bu(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(k(166));
                    return ue(t), null
                }
                if (e = zt(Ke.current), Nr(t)) {
                    r = t.stateNode, n = t.type;
                    var s = t.memoizedProps;
                    switch (r[He] = t, r[Jn] = s, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            H("cancel", r), H("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            H("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < zn.length; l++) H(zn[l], r);
                            break;
                        case "source":
                            H("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            H("error", r), H("load", r);
                            break;
                        case "details":
                            H("toggle", r);
                            break;
                        case "input":
                            Hi(r, s), H("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!s.multiple
                            }, H("invalid", r);
                            break;
                        case "textarea":
                            Ki(r, s), H("invalid", r)
                    }
                    as(n, s), l = null;
                    for (var i in s)
                        if (s.hasOwnProperty(i)) {
                            var u = s[i];
                            i === "children" ? typeof u == "string" ? r.textContent !== u && (s.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (s.suppressHydrationWarning !== !0 && wr(r.textContent, u, e), l = ["children", "" + u]) : Vn.hasOwnProperty(i) && u != null && i === "onScroll" && H("scroll", r)
                        } switch (n) {
                        case "input":
                            fr(r), Qi(r, s, !0);
                            break;
                        case "textarea":
                            fr(r), Gi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof s.onClick == "function" && (r.onclick = Kr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xa(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[He] = t, e[Jn] = r, Wu(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = us(n, r), n) {
                            case "dialog":
                                H("cancel", e), H("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                H("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < zn.length; l++) H(zn[l], e);
                                l = r;
                                break;
                            case "source":
                                H("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                H("error", e), H("load", e), l = r;
                                break;
                            case "details":
                                H("toggle", e), l = r;
                                break;
                            case "input":
                                Hi(e, r), l = rs(e, r), H("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = X({}, r, {
                                    value: void 0
                                }), H("invalid", e);
                                break;
                            case "textarea":
                                Ki(e, r), l = is(e, r), H("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        as(n, l),
                        u = l;
                        for (s in u)
                            if (u.hasOwnProperty(s)) {
                                var c = u[s];
                                s === "style" ? Sa(e, c) : s === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && wa(e, c)) : s === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Wn(e, c) : typeof c == "number" && Wn(e, "" + c) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Vn.hasOwnProperty(s) ? c != null && s === "onScroll" && H("scroll", e) : c != null && Xs(e, s, c, i))
                            } switch (n) {
                            case "input":
                                fr(e), Qi(e, r, !1);
                                break;
                            case "textarea":
                                fr(e), Gi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, s = r.value, s != null ? nn(e, !!r.multiple, s, !1) : r.defaultValue != null && nn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Kr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ue(t), null;
        case 6:
            if (e && t.stateNode != null) Hu(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
                if (n = zt(er.current), zt(Ke.current), Nr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (s = r.nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
                        case 3:
                            wr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    s && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r
            }
            return ue(t), null;
        case 13:
            if (Q(G), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (K && je !== null && t.mode & 1 && !(t.flags & 128)) uu(), dn(), t.flags |= 98560, s = !1;
                else if (s = Nr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!s) throw Error(k(318));
                        if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(k(317));
                        s[He] = t
                    } else dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ue(t), s = !1
                } else $e !== null && (Ws($e), $e = null), s = !0;
                if (!s) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || G.current & 1 ? ne === 0 && (ne = 3) : zi())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
        case 4:
            return pn(), Rs(e, t), e === null && Xn(t.stateNode.containerInfo), ue(t), null;
        case 10:
            return hi(t.type._context), ue(t), null;
        case 17:
            return Ne(t.type) && Gr(), ue(t), null;
        case 19:
            if (Q(G), s = t.memoizedState, s === null) return ue(t), null;
            if (r = (t.flags & 128) !== 0, i = s.rendering, i === null)
                if (r) En(s, !1);
                else {
                    if (ne !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = tl(e), i !== null) {
                                for (t.flags |= 128, En(s, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) s = n, e = r, s.flags &= 14680066, i = s.alternate, i === null ? (s.childLanes = 0, s.lanes = e, s.child = null, s.subtreeFlags = 0, s.memoizedProps = null, s.memoizedState = null, s.updateQueue = null, s.dependencies = null, s.stateNode = null) : (s.childLanes = i.childLanes, s.lanes = i.lanes, s.child = i.child, s.subtreeFlags = 0, s.deletions = null, s.memoizedProps = i.memoizedProps, s.memoizedState = i.memoizedState, s.updateQueue = i.updateQueue, s.type = i.type, e = i.dependencies, s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return b(G, G.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    s.tail !== null && J() > hn && (t.flags |= 128, r = !0, En(s, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = tl(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(s, !0), s.tail === null && s.tailMode === "hidden" && !i.alternate && !K) return ue(t), null
                    } else 2 * J() - s.renderingStartTime > hn && n !== 1073741824 && (t.flags |= 128, r = !0, En(s, !1), t.lanes = 4194304);
                s.isBackwards ? (i.sibling = t.child, t.child = i) : (n = s.last, n !== null ? n.sibling = i : t.child = i, s.last = i)
            }
            return s.tail !== null ? (t = s.tail, s.rendering = t, s.tail = t.sibling, s.renderingStartTime = J(), t.sibling = null, n = G.current, b(G, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
        case 22:
        case 23:
            return Li(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(k(156, t.tag))
}

function wf(e, t) {
    switch (di(t), t.tag) {
        case 1:
            return Ne(t.type) && Gr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return pn(), Q(we), Q(de), wi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return xi(t), null;
        case 13:
            if (Q(G), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(k(340));
                dn()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Q(G), null;
        case 4:
            return pn(), null;
        case 10:
            return hi(t.type._context), null;
        case 22:
        case 23:
            return Li(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var jr = !1,
    ce = !1,
    Nf = typeof WeakSet == "function" ? WeakSet : Set,
    C = null;

function en(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Z(e, t, r)
        } else n.current = null
}

function Ms(e, t, n) {
    try {
        n()
    } catch (r) {
        Z(e, t, r)
    }
}
var $o = !1;

function Sf(e, t) {
    if (xs = br, e = Xa(), ui(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    s = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, s.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    u = -1,
                    c = -1,
                    f = 0,
                    g = 0,
                    h = e,
                    m = null;
                t: for (;;) {
                    for (var N; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l), h !== s || r !== 0 && h.nodeType !== 3 || (c = i + r), h.nodeType === 3 && (i += h.nodeValue.length), (N = h.firstChild) !== null;) m = h, h = N;
                    for (;;) {
                        if (h === e) break t;
                        if (m === n && ++f === l && (u = i), m === s && ++g === r && (c = i), (N = h.nextSibling) !== null) break;
                        h = m, m = h.parentNode
                    }
                    h = N
                }
                n = u === -1 || c === -1 ? null : {
                    start: u,
                    end: c
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (ws = {
            focusedElem: e,
            selectionRange: n
        }, br = !1, C = t; C !== null;)
        if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
        else
            for (; C !== null;) {
                t = C;
                try {
                    var S = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (S !== null) {
                                var y = S.memoizedProps,
                                    L = S.memoizedState,
                                    a = t.stateNode,
                                    d = a.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Me(t.type, y), L);
                                a.__reactInternalSnapshotBeforeUpdate = d
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(k(163))
                    }
                } catch (v) {
                    Z(t, t.return, v)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, C = e;
                    break
                }
                C = t.return
            }
    return S = $o, $o = !1, S
}

function Un(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var s = l.destroy;
                l.destroy = void 0, s !== void 0 && Ms(t, n, s)
            }
            l = l.next
        } while (l !== r)
    }
}

function vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Fs(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Qu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Qu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[Jn], delete t[ks], delete t[rf], delete t[lf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Ku(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Uo(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Ku(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function $s(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
    else if (r !== 4 && (e = e.child, e !== null))
        for ($s(e, t, n), e = e.sibling; e !== null;) $s(e, t, n), e = e.sibling
}

function Us(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Us(e, t, n), e = e.sibling; e !== null;) Us(e, t, n), e = e.sibling
}
var se = null,
    Fe = !1;

function it(e, t, n) {
    for (n = n.child; n !== null;) Gu(e, t, n), n = n.sibling
}

function Gu(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
        Qe.onCommitFiberUnmount(cl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ce || en(n, t);
        case 6:
            var r = se,
                l = Fe;
            se = null, it(e, t, n), se = r, Fe = l, se !== null && (Fe ? (e = se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : se.removeChild(n.stateNode));
            break;
        case 18:
            se !== null && (Fe ? (e = se, n = n.stateNode, e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n), Kn(e)) : Bl(se, n.stateNode));
            break;
        case 4:
            r = se, l = Fe, se = n.stateNode.containerInfo, Fe = !0, it(e, t, n), se = r, Fe = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ce && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var s = l,
                        i = s.destroy;
                    s = s.tag, i !== void 0 && (s & 2 || s & 4) && Ms(n, t, i), l = l.next
                } while (l !== r)
            }
            it(e, t, n);
            break;
        case 1:
            if (!ce && (en(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (u) {
                Z(n, t, u)
            }
            it(e, t, n);
            break;
        case 21:
            it(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ce = (r = ce) || n.memoizedState !== null, it(e, t, n), ce = r) : it(e, t, n);
            break;
        default:
            it(e, t, n)
    }
}

function Ao(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Nf), t.forEach(function (r) {
            var l = Lf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Re(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var s = e,
                    i = t,
                    u = i;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case 5:
                            se = u.stateNode, Fe = !1;
                            break e;
                        case 3:
                            se = u.stateNode.containerInfo, Fe = !0;
                            break e;
                        case 4:
                            se = u.stateNode.containerInfo, Fe = !0;
                            break e
                    }
                    u = u.return
                }
                if (se === null) throw Error(k(160));
                Gu(s, i, l), se = null, Fe = !1;
                var c = l.alternate;
                c !== null && (c.return = null), l.return = null
            } catch (f) {
                Z(l, t, f)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Yu(t, e), t = t.sibling
}

function Yu(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Re(t, e), We(e), r & 4) {
                try {
                    Un(3, e, e.return), vl(3, e)
                } catch (y) {
                    Z(e, e.return, y)
                }
                try {
                    Un(5, e, e.return)
                } catch (y) {
                    Z(e, e.return, y)
                }
            }
            break;
        case 1:
            Re(t, e), We(e), r & 512 && n !== null && en(n, n.return);
            break;
        case 5:
            if (Re(t, e), We(e), r & 512 && n !== null && en(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Wn(l, "")
                } catch (y) {
                    Z(e, e.return, y)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var s = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : s,
                    u = e.type,
                    c = e.updateQueue;
                if (e.updateQueue = null, c !== null) try {
                    u === "input" && s.type === "radio" && s.name != null && ya(l, s), us(u, i);
                    var f = us(u, s);
                    for (i = 0; i < c.length; i += 2) {
                        var g = c[i],
                            h = c[i + 1];
                        g === "style" ? Sa(l, h) : g === "dangerouslySetInnerHTML" ? wa(l, h) : g === "children" ? Wn(l, h) : Xs(l, g, h, f)
                    }
                    switch (u) {
                        case "input":
                            ls(l, s);
                            break;
                        case "textarea":
                            va(l, s);
                            break;
                        case "select":
                            var m = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!s.multiple;
                            var N = s.value;
                            N != null ? nn(l, !!s.multiple, N, !1) : m !== !!s.multiple && (s.defaultValue != null ? nn(l, !!s.multiple, s.defaultValue, !0) : nn(l, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    l[Jn] = s
                } catch (y) {
                    Z(e, e.return, y)
                }
            }
            break;
        case 6:
            if (Re(t, e), We(e), r & 4) {
                if (e.stateNode === null) throw Error(k(162));
                l = e.stateNode, s = e.memoizedProps;
                try {
                    l.nodeValue = s
                } catch (y) {
                    Z(e, e.return, y)
                }
            }
            break;
        case 3:
            if (Re(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kn(t.containerInfo)
            } catch (y) {
                Z(e, e.return, y)
            }
            break;
        case 4:
            Re(t, e), We(e);
            break;
        case 13:
            Re(t, e), We(e), l = e.child, l.flags & 8192 && (s = l.memoizedState !== null, l.stateNode.isHidden = s, !s || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = J())), r & 4 && Ao(e);
            break;
        case 22:
            if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ce = (f = ce) || g, Re(t, e), ce = f) : Re(t, e), We(e), r & 8192) {
                if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1)
                    for (C = e, g = e.child; g !== null;) {
                        for (h = C = g; C !== null;) {
                            switch (m = C, N = m.child, m.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Un(4, m, m.return);
                                    break;
                                case 1:
                                    en(m, m.return);
                                    var S = m.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = m, n = m.return;
                                        try {
                                            t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount()
                                        } catch (y) {
                                            Z(r, n, y)
                                        }
                                    }
                                    break;
                                case 5:
                                    en(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Vo(h);
                                        continue
                                    }
                            }
                            N !== null ? (N.return = m, C = N) : Vo(h)
                        }
                        g = g.sibling
                    }
                e: for (g = null, h = e;;) {
                    if (h.tag === 5) {
                        if (g === null) {
                            g = h;
                            try {
                                l = h.stateNode, f ? (s = l.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (u = h.stateNode, c = h.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = Na("display", i))
                            } catch (y) {
                                Z(e, e.return, y)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (g === null) try {
                            h.stateNode.nodeValue = f ? "" : h.memoizedProps
                        } catch (y) {
                            Z(e, e.return, y)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        g === h && (g = null), h = h.return
                    }
                    g === h && (g = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Re(t, e), We(e), r & 4 && Ao(e);
            break;
        case 21:
            break;
        default:
            Re(t, e), We(e)
    }
}

function We(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Ku(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(k(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Wn(l, ""), r.flags &= -33);
                    var s = Uo(e);
                    Us(e, s, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Uo(e);
                    $s(e, u, i);
                    break;
                default:
                    throw Error(k(161))
            }
        }
        catch (c) {
            Z(e, e.return, c)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function kf(e, t, n) {
    C = e, Xu(e)
}

function Xu(e, t, n) {
    for (var r = (e.mode & 1) !== 0; C !== null;) {
        var l = C,
            s = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || jr;
            if (!i) {
                var u = l.alternate,
                    c = u !== null && u.memoizedState !== null || ce;
                u = jr;
                var f = ce;
                if (jr = i, (ce = c) && !f)
                    for (C = l; C !== null;) i = C, c = i.child, i.tag === 22 && i.memoizedState !== null ? Wo(l) : c !== null ? (c.return = i, C = c) : Wo(l);
                for (; s !== null;) C = s, Xu(s), s = s.sibling;
                C = l, jr = u, ce = f
            }
            Bo(e)
        } else l.subtreeFlags & 8772 && s !== null ? (s.return = l, C = s) : Bo(e)
    }
}

function Bo(e) {
    for (; C !== null;) {
        var t = C;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ce || vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ce)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var s = t.updateQueue;
                        s !== null && _o(t, s, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            _o(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var c = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    c.autoFocus && n.focus();
                                    break;
                                case "img":
                                    c.src && (n.src = c.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var f = t.alternate;
                            if (f !== null) {
                                var g = f.memoizedState;
                                if (g !== null) {
                                    var h = g.dehydrated;
                                    h !== null && Kn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(k(163))
                }
                ce || t.flags & 512 && Fs(t)
            } catch (m) {
                Z(t, t.return, m)
            }
        }
        if (t === e) {
            C = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function Vo(e) {
    for (; C !== null;) {
        var t = C;
        if (t === e) {
            C = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, C = n;
            break
        }
        C = t.return
    }
}

function Wo(e) {
    for (; C !== null;) {
        var t = C;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        vl(4, t)
                    } catch (c) {
                        Z(t, n, c)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (c) {
                            Z(t, l, c)
                        }
                    }
                    var s = t.return;
                    try {
                        Fs(t)
                    } catch (c) {
                        Z(t, s, c)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Fs(t)
                    } catch (c) {
                        Z(t, i, c)
                    }
            }
        } catch (c) {
            Z(t, t.return, c)
        }
        if (t === e) {
            C = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return, C = u;
            break
        }
        C = t.return
    }
}
var jf = Math.ceil,
    ll = lt.ReactCurrentDispatcher,
    Ei = lt.ReactCurrentOwner,
    ze = lt.ReactCurrentBatchConfig,
    F = 0,
    le = null,
    q = null,
    ie = 0,
    ke = 0,
    tn = jt(0),
    ne = 0,
    lr = null,
    $t = 0,
    xl = 0,
    Pi = 0,
    An = null,
    ve = null,
    Ti = 0,
    hn = 1 / 0,
    Ye = null,
    sl = !1,
    As = null,
    vt = null,
    _r = !1,
    ft = null,
    il = 0,
    Bn = 0,
    Bs = null,
    Mr = -1,
    Fr = 0;

function me() {
    return F & 6 ? J() : Mr !== -1 ? Mr : Mr = J()
}

function xt(e) {
    return e.mode & 1 ? F & 2 && ie !== 0 ? ie & -ie : of .transition !== null ? (Fr === 0 && (Fr = Ia()), Fr) : (e = A, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ba(e.type)), e) : 1
}

function Ae(e, t, n, r) {
    if (50 < Bn) throw Bn = 0, Bs = null, Error(k(185));
    ir(e, n, r), (!(F & 2) || e !== le) && (e === le && (!(F & 2) && (xl |= n), ne === 4 && ct(e, ie)), Se(e, r), n === 1 && F === 0 && !(t.mode & 1) && (hn = J() + 500, hl && _t()))
}

function Se(e, t) {
    var n = e.callbackNode;
    id(e, t);
    var r = Wr(e, e === le ? ie : 0);
    if (r === 0) n !== null && Zi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Zi(n), t === 1) e.tag === 0 ? sf(bo.bind(null, e)) : iu(bo.bind(null, e)), tf(function () {
            !(F & 6) && _t()
        }), n = null;
        else {
            switch (Ra(r)) {
                case 1:
                    n = ti;
                    break;
                case 4:
                    n = za;
                    break;
                case 16:
                    n = Vr;
                    break;
                case 536870912:
                    n = Da;
                    break;
                default:
                    n = Vr
            }
            n = lc(n, Zu.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Zu(e, t) {
    if (Mr = -1, Fr = 0, F & 6) throw Error(k(327));
    var n = e.callbackNode;
    if (an() && e.callbackNode !== n) return null;
    var r = Wr(e, e === le ? ie : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
    else {
        t = r;
        var l = F;
        F |= 2;
        var s = qu();
        (le !== e || ie !== t) && (Ye = null, hn = J() + 500, Dt(e, t));
        do try {
            Ef();
            break
        } catch (u) {
            Ju(e, u)
        }
        while (!0);
        mi(), ll.current = s, F = l, q !== null ? t = 0 : (le = null, ie = 0, t = ne)
    }
    if (t !== 0) {
        if (t === 2 && (l = ms(e), l !== 0 && (r = l, t = Vs(e, l))), t === 1) throw n = lr, Dt(e, 0), ct(e, r), Se(e, J()), n;
        if (t === 6) ct(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !_f(l) && (t = ol(e, r), t === 2 && (s = ms(e), s !== 0 && (r = s, t = Vs(e, s))), t === 1)) throw n = lr, Dt(e, 0), ct(e, r), Se(e, J()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(k(345));
                case 2:
                    Tt(e, ve, Ye);
                    break;
                case 3:
                    if (ct(e, r), (r & 130023424) === r && (t = Ti + 500 - J(), 10 < t)) {
                        if (Wr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            me(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Ss(Tt.bind(null, e, ve, Ye), t);
                        break
                    }
                    Tt(e, ve, Ye);
                    break;
                case 4:
                    if (ct(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Ue(r);
                        s = 1 << i, i = t[i], i > l && (l = i), r &= ~s
                    }
                    if (r = l, r = J() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * jf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Ss(Tt.bind(null, e, ve, Ye), r);
                        break
                    }
                    Tt(e, ve, Ye);
                    break;
                case 5:
                    Tt(e, ve, Ye);
                    break;
                default:
                    throw Error(k(329))
            }
        }
    }
    return Se(e, J()), e.callbackNode === n ? Zu.bind(null, e) : null
}

function Vs(e, t) {
    var n = An;
    return e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = ve, ve = n, t !== null && Ws(t)), e
}

function Ws(e) {
    ve === null ? ve = e : ve.push.apply(ve, e)
}

function _f(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        s = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Be(s(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function ct(e, t) {
    for (t &= ~Pi, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ue(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function bo(e) {
    if (F & 6) throw Error(k(327));
    an();
    var t = Wr(e, 0);
    if (!(t & 1)) return Se(e, J()), null;
    var n = ol(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ms(e);
        r !== 0 && (t = r, n = Vs(e, r))
    }
    if (n === 1) throw n = lr, Dt(e, 0), ct(e, t), Se(e, J()), n;
    if (n === 6) throw Error(k(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Tt(e, ve, Ye), Se(e, J()), null
}

function Oi(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t)
    } finally {
        F = n, F === 0 && (hn = J() + 500, hl && _t())
    }
}

function Ut(e) {
    ft !== null && ft.tag === 0 && !(F & 6) && an();
    var t = F;
    F |= 1;
    var n = ze.transition,
        r = A;
    try {
        if (ze.transition = null, A = 1, e) return e()
    } finally {
        A = r, ze.transition = n, F = t, !(F & 6) && _t()
    }
}

function Li() {
    ke = tn.current, Q(tn)
}

function Dt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, ef(n)), q !== null)
        for (n = q.return; n !== null;) {
            var r = n;
            switch (di(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Gr();
                    break;
                case 3:
                    pn(), Q(we), Q(de), wi();
                    break;
                case 5:
                    xi(r);
                    break;
                case 4:
                    pn();
                    break;
                case 13:
                    Q(G);
                    break;
                case 19:
                    Q(G);
                    break;
                case 10:
                    hi(r.type._context);
                    break;
                case 22:
                case 23:
                    Li()
            }
            n = n.return
        }
    if (le = e, q = e = wt(e.current, null), ie = ke = t, ne = 0, lr = null, Pi = xl = $t = 0, ve = An = null, Lt !== null) {
        for (t = 0; t < Lt.length; t++)
            if (n = Lt[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    s = n.pending;
                if (s !== null) {
                    var i = s.next;
                    s.next = l, r.next = i
                }
                n.pending = r
            } Lt = null
    }
    return e
}

function Ju(e, t) {
    do {
        var n = q;
        try {
            if (mi(), Dr.current = rl, nl) {
                for (var r = Y.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                nl = !1
            }
            if (Ft = 0, re = te = Y = null, $n = !1, tr = 0, Ei.current = null, n === null || n.return === null) {
                ne = 1, lr = t, q = null;
                break
            }
            e: {
                var s = e,
                    i = n.return,
                    u = n,
                    c = t;
                if (t = ie, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
                    var f = c,
                        g = u,
                        h = g.tag;
                    if (!(g.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var m = g.alternate;
                        m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null)
                    }
                    var N = Lo(i);
                    if (N !== null) {
                        N.flags &= -257, zo(N, i, u, s, t), N.mode & 1 && Oo(s, f, t), t = N, c = f;
                        var S = t.updateQueue;
                        if (S === null) {
                            var y = new Set;
                            y.add(c), t.updateQueue = y
                        } else S.add(c);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Oo(s, f, t), zi();
                            break e
                        }
                        c = Error(k(426))
                    }
                } else if (K && u.mode & 1) {
                    var L = Lo(i);
                    if (L !== null) {
                        !(L.flags & 65536) && (L.flags |= 256), zo(L, i, u, s, t), fi(mn(c, u));
                        break e
                    }
                }
                s = c = mn(c, u),
                ne !== 4 && (ne = 2),
                An === null ? An = [s] : An.push(s),
                s = i;do {
                    switch (s.tag) {
                        case 3:
                            s.flags |= 65536, t &= -t, s.lanes |= t;
                            var a = Ru(s, c, t);
                            jo(s, a);
                            break e;
                        case 1:
                            u = c;
                            var d = s.type,
                                p = s.stateNode;
                            if (!(s.flags & 128) && (typeof d.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (vt === null || !vt.has(p)))) {
                                s.flags |= 65536, t &= -t, s.lanes |= t;
                                var v = Mu(s, u, t);
                                jo(s, v);
                                break e
                            }
                    }
                    s = s.return
                } while (s !== null)
            }
            tc(n)
        } catch (_) {
            t = _, q === n && n !== null && (q = n = n.return);
            continue
        }
        break
    } while (!0)
}

function qu() {
    var e = ll.current;
    return ll.current = rl, e === null ? rl : e
}

function zi() {
    (ne === 0 || ne === 3 || ne === 2) && (ne = 4), le === null || !($t & 268435455) && !(xl & 268435455) || ct(le, ie)
}

function ol(e, t) {
    var n = F;
    F |= 2;
    var r = qu();
    (le !== e || ie !== t) && (Ye = null, Dt(e, t));
    do try {
        Cf();
        break
    } catch (l) {
        Ju(e, l)
    }
    while (!0);
    if (mi(), F = n, ll.current = r, q !== null) throw Error(k(261));
    return le = null, ie = 0, ne
}

function Cf() {
    for (; q !== null;) ec(q)
}

function Ef() {
    for (; q !== null && !Zc();) ec(q)
}

function ec(e) {
    var t = rc(e.alternate, e, ke);
    e.memoizedProps = e.pendingProps, t === null ? tc(e) : q = t, Ei.current = null
}

function tc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = wf(n, t), n !== null) {
                n.flags &= 32767, q = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                ne = 6, q = null;
                return
            }
        } else if (n = xf(n, t, ke), n !== null) {
            q = n;
            return
        }
        if (t = t.sibling, t !== null) {
            q = t;
            return
        }
        q = t = e
    } while (t !== null);
    ne === 0 && (ne = 5)
}

function Tt(e, t, n) {
    var r = A,
        l = ze.transition;
    try {
        ze.transition = null, A = 1, Pf(e, t, n, r)
    } finally {
        ze.transition = l, A = r
    }
    return null
}

function Pf(e, t, n, r) {
    do an(); while (ft !== null);
    if (F & 6) throw Error(k(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (od(e, s), e === le && (q = le = null, ie = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || _r || (_r = !0, lc(Vr, function () {
            return an(), null
        })), s = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || s) {
        s = ze.transition, ze.transition = null;
        var i = A;
        A = 1;
        var u = F;
        F |= 4, Ei.current = null, Sf(e, n), Yu(n, e), Kd(ws), br = !!xs, ws = xs = null, e.current = n, kf(n), Jc(), F = u, A = i, ze.transition = s
    } else e.current = n;
    if (_r && (_r = !1, ft = e, il = l), s = e.pendingLanes, s === 0 && (vt = null), td(n.stateNode), Se(e, J()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (sl) throw sl = !1, e = As, As = null, e;
    return il & 1 && e.tag !== 0 && an(), s = e.pendingLanes, s & 1 ? e === Bs ? Bn++ : (Bn = 0, Bs = e) : Bn = 0, _t(), null
}

function an() {
    if (ft !== null) {
        var e = Ra(il),
            t = ze.transition,
            n = A;
        try {
            if (ze.transition = null, A = 16 > e ? 16 : e, ft === null) var r = !1;
            else {
                if (e = ft, ft = null, il = 0, F & 6) throw Error(k(331));
                var l = F;
                for (F |= 4, C = e.current; C !== null;) {
                    var s = C,
                        i = s.child;
                    if (C.flags & 16) {
                        var u = s.deletions;
                        if (u !== null) {
                            for (var c = 0; c < u.length; c++) {
                                var f = u[c];
                                for (C = f; C !== null;) {
                                    var g = C;
                                    switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Un(8, g, s)
                                    }
                                    var h = g.child;
                                    if (h !== null) h.return = g, C = h;
                                    else
                                        for (; C !== null;) {
                                            g = C;
                                            var m = g.sibling,
                                                N = g.return;
                                            if (Qu(g), g === f) {
                                                C = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = N, C = m;
                                                break
                                            }
                                            C = N
                                        }
                                }
                            }
                            var S = s.alternate;
                            if (S !== null) {
                                var y = S.child;
                                if (y !== null) {
                                    S.child = null;
                                    do {
                                        var L = y.sibling;
                                        y.sibling = null, y = L
                                    } while (y !== null)
                                }
                            }
                            C = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && i !== null) i.return = s, C = i;
                    else e: for (; C !== null;) {
                        if (s = C, s.flags & 2048) switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Un(9, s, s.return)
                        }
                        var a = s.sibling;
                        if (a !== null) {
                            a.return = s.return, C = a;
                            break e
                        }
                        C = s.return
                    }
                }
                var d = e.current;
                for (C = d; C !== null;) {
                    i = C;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, C = p;
                    else e: for (i = d; C !== null;) {
                        if (u = C, u.flags & 2048) try {
                            switch (u.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vl(9, u)
                            }
                        } catch (_) {
                            Z(u, u.return, _)
                        }
                        if (u === i) {
                            C = null;
                            break e
                        }
                        var v = u.sibling;
                        if (v !== null) {
                            v.return = u.return, C = v;
                            break e
                        }
                        C = u.return
                    }
                }
                if (F = l, _t(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
                    Qe.onPostCommitFiberRoot(cl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            A = n, ze.transition = t
        }
    }
    return !1
}

function Ho(e, t, n) {
    t = mn(n, t), t = Ru(e, t, 1), e = yt(e, t, 1), t = me(), e !== null && (ir(e, 1, t), Se(e, t))
}

function Z(e, t, n) {
    if (e.tag === 3) Ho(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Ho(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vt === null || !vt.has(r))) {
                    e = mn(n, e), e = Mu(t, e, 1), t = yt(t, e, 1), e = me(), t !== null && (ir(t, 1, e), Se(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Tf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = me(), e.pingedLanes |= e.suspendedLanes & n, le === e && (ie & n) === n && (ne === 4 || ne === 3 && (ie & 130023424) === ie && 500 > J() - Ti ? Dt(e, 0) : Pi |= n), Se(e, t)
}

function nc(e, t) {
    t === 0 && (e.mode & 1 ? (t = hr, hr <<= 1, !(hr & 130023424) && (hr = 4194304)) : t = 1);
    var n = me();
    e = nt(e, t), e !== null && (ir(e, t, n), Se(e, n))
}

function Of(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), nc(e, n)
}

function Lf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(k(314))
    }
    r !== null && r.delete(t), nc(e, n)
}
var rc;
rc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || we.current) xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return xe = !1, vf(e, t, n);
            xe = !!(e.flags & 131072)
        }
    else xe = !1, K && t.flags & 1048576 && ou(t, Zr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Rr(e, t), e = t.pendingProps;
            var l = cn(t, de.current);
            on(t, n), l = Si(null, t, r, e, l, n);
            var s = ki();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ne(r) ? (s = !0, Yr(t)) : s = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, yi(t), l.updater = yl, t.stateNode = l, l._reactInternals = t, Ts(t, r, e, n), t = zs(null, t, r, !0, s, n)) : (t.tag = 0, K && s && ci(t), pe(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Rr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Df(r), e = Me(r, e), l) {
                    case 0:
                        t = Ls(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ro(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Do(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Io(null, t, r, Me(r.type, e), n);
                        break e
                }
                throw Error(k(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ls(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Ro(e, t, r, l, n);
        case 3:
            e: {
                if (Au(t), e === null) throw Error(k(387));r = t.pendingProps,
                s = t.memoizedState,
                l = s.element,
                pu(e, t),
                el(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, s.isDehydrated)
                    if (s = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = s, t.memoizedState = s, t.flags & 256) {
                        l = mn(Error(k(423)), t), t = Mo(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = mn(Error(k(424)), t), t = Mo(e, t, r, n, l);
                    break e
                } else
                    for (je = gt(t.stateNode.containerInfo.firstChild), _e = t, K = !0, $e = null, n = du(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (dn(), r === l) {
                        t = rt(e, t, n);
                        break e
                    }
                    pe(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return mu(t), e === null && Cs(t), r = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, i = l.children, Ns(r, l) ? i = null : s !== null && Ns(r, s) && (t.flags |= 32), Uu(e, t), pe(e, t, i, n), t.child;
        case 6:
            return e === null && Cs(t), null;
        case 13:
            return Bu(e, t, n);
        case 4:
            return vi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fn(t, null, r, n) : pe(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Do(e, t, r, l, n);
        case 7:
            return pe(e, t, t.pendingProps, n), t.child;
        case 8:
            return pe(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return pe(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, s = t.memoizedProps, i = l.value, b(Jr, r._currentValue), r._currentValue = i, s !== null)
                    if (Be(s.value, i)) {
                        if (s.children === l.children && !we.current) {
                            t = rt(e, t, n);
                            break e
                        }
                    } else
                        for (s = t.child, s !== null && (s.return = t); s !== null;) {
                            var u = s.dependencies;
                            if (u !== null) {
                                i = s.child;
                                for (var c = u.firstContext; c !== null;) {
                                    if (c.context === r) {
                                        if (s.tag === 1) {
                                            c = qe(-1, n & -n), c.tag = 2;
                                            var f = s.updateQueue;
                                            if (f !== null) {
                                                f = f.shared;
                                                var g = f.pending;
                                                g === null ? c.next = c : (c.next = g.next, g.next = c), f.pending = c
                                            }
                                        }
                                        s.lanes |= n, c = s.alternate, c !== null && (c.lanes |= n), Es(s.return, n, t), u.lanes |= n;
                                        break
                                    }
                                    c = c.next
                                }
                            } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
                            else if (s.tag === 18) {
                                if (i = s.return, i === null) throw Error(k(341));
                                i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Es(i, n, t), i = s.sibling
                            } else i = s.child;
                            if (i !== null) i.return = s;
                            else
                                for (i = s; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (s = i.sibling, s !== null) {
                                        s.return = i.return, i = s;
                                        break
                                    }
                                    i = i.return
                                }
                            s = i
                        }
                pe(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, on(t, n), l = De(l), r = r(l), t.flags |= 1, pe(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), Io(e, t, r, l, n);
        case 15:
            return Fu(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Rr(e, t), t.tag = 1, Ne(r) ? (e = !0, Yr(t)) : e = !1, on(t, n), Iu(t, r, l), Ts(t, r, l, n), zs(null, t, r, !0, e, n);
        case 19:
            return Vu(e, t, n);
        case 22:
            return $u(e, t, n)
    }
    throw Error(k(156, t.tag))
};

function lc(e, t) {
    return La(e, t)
}

function zf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Le(e, t, n, r) {
    return new zf(e, t, n, r)
}

function Di(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Df(e) {
    if (typeof e == "function") return Di(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Js) return 11;
        if (e === qs) return 14
    }
    return 2
}

function wt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Le(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function $r(e, t, n, r, l, s) {
    var i = 2;
    if (r = e, typeof e == "function") Di(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Ht:
            return It(n.children, l, s, t);
        case Zs:
            i = 8, l |= 8;
            break;
        case ql:
            return e = Le(12, n, t, l | 2), e.elementType = ql, e.lanes = s, e;
        case es:
            return e = Le(13, n, t, l), e.elementType = es, e.lanes = s, e;
        case ts:
            return e = Le(19, n, t, l), e.elementType = ts, e.lanes = s, e;
        case ma:
            return wl(n, l, s, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case fa:
                    i = 10;
                    break e;
                case pa:
                    i = 9;
                    break e;
                case Js:
                    i = 11;
                    break e;
                case qs:
                    i = 14;
                    break e;
                case ot:
                    i = 16, r = null;
                    break e
            }
            throw Error(k(130, e == null ? e : typeof e, ""))
    }
    return t = Le(i, n, t, l), t.elementType = e, t.type = r, t.lanes = s, t
}

function It(e, t, n, r) {
    return e = Le(7, e, r, t), e.lanes = n, e
}

function wl(e, t, n, r) {
    return e = Le(22, e, r, t), e.elementType = ma, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Yl(e, t, n) {
    return e = Le(6, e, null, t), e.lanes = n, e
}

function Xl(e, t, n) {
    return t = Le(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function If(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ol(0), this.expirationTimes = Ol(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ol(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ii(e, t, n, r, l, s, i, u, c) {
    return e = new If(e, t, n, u, c), t === 1 ? (t = 1, s === !0 && (t |= 8)) : t = 0, s = Le(3, null, null, t), e.current = s, s.stateNode = e, s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, yi(s), e
}

function Rf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: bt,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function sc(e) {
    if (!e) return St;
    e = e._reactInternals;
    e: {
        if (Bt(e) !== e || e.tag !== 1) throw Error(k(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Ne(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(k(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ne(n)) return su(e, n, t)
    }
    return t
}

function ic(e, t, n, r, l, s, i, u, c) {
    return e = Ii(n, r, !0, e, l, s, i, u, c), e.context = sc(null), n = e.current, r = me(), l = xt(n), s = qe(r, l), s.callback = t ?? null, yt(n, s, l), e.current.lanes = l, ir(e, l, r), Se(e, r), e
}

function Nl(e, t, n, r) {
    var l = t.current,
        s = me(),
        i = xt(l);
    return n = sc(n), t.context === null ? t.context = n : t.pendingContext = n, t = qe(s, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, i), e !== null && (Ae(e, l, i, s), zr(e, l, i)), i
}

function al(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Qo(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Ri(e, t) {
    Qo(e, t), (e = e.alternate) && Qo(e, t)
}

function Mf() {
    return null
}
var oc = typeof reportError == "function" ? reportError : function (e) {
    console.error(e)
};

function Mi(e) {
    this._internalRoot = e
}
Sl.prototype.render = Mi.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Nl(e, t, null, null)
};
Sl.prototype.unmount = Mi.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ut(function () {
            Nl(null, e, null, null)
        }), t[tt] = null
    }
};

function Sl(e) {
    this._internalRoot = e
}
Sl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = $a();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
        ut.splice(n, 0, e), n === 0 && Aa(e)
    }
};

function Fi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function kl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Ko() {}

function Ff(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var s = r;
            r = function () {
                var f = al(i);
                s.call(f)
            }
        }
        var i = ic(t, r, e, 0, null, !1, !1, "", Ko);
        return e._reactRootContainer = i, e[tt] = i.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ut(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function () {
            var f = al(c);
            u.call(f)
        }
    }
    var c = Ii(e, 0, !1, null, null, !1, !1, "", Ko);
    return e._reactRootContainer = c, e[tt] = c.current, Xn(e.nodeType === 8 ? e.parentNode : e), Ut(function () {
        Nl(t, c, n, r)
    }), c
}

function jl(e, t, n, r, l) {
    var s = n._reactRootContainer;
    if (s) {
        var i = s;
        if (typeof l == "function") {
            var u = l;
            l = function () {
                var c = al(i);
                u.call(c)
            }
        }
        Nl(t, i, e, l)
    } else i = Ff(n, t, e, l, r);
    return al(i)
}
Ma = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ln(t.pendingLanes);
                n !== 0 && (ni(t, n | 1), Se(t, J()), !(F & 6) && (hn = J() + 500, _t()))
            }
            break;
        case 13:
            Ut(function () {
                var r = nt(e, 1);
                if (r !== null) {
                    var l = me();
                    Ae(r, e, 1, l)
                }
            }), Ri(e, 1)
    }
};
ri = function (e) {
    if (e.tag === 13) {
        var t = nt(e, 134217728);
        if (t !== null) {
            var n = me();
            Ae(t, e, 134217728, n)
        }
        Ri(e, 134217728)
    }
};
Fa = function (e) {
    if (e.tag === 13) {
        var t = xt(e),
            n = nt(e, t);
        if (n !== null) {
            var r = me();
            Ae(n, e, t, r)
        }
        Ri(e, t)
    }
};
$a = function () {
    return A
};
Ua = function (e, t) {
    var n = A;
    try {
        return A = e, t()
    } finally {
        A = n
    }
};
ds = function (e, t, n) {
    switch (t) {
        case "input":
            if (ls(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ml(r);
                        if (!l) throw Error(k(90));
                        ga(r), ls(r, l)
                    }
                }
            }
            break;
        case "textarea":
            va(e, n);
            break;
        case "select":
            t = n.value, t != null && nn(e, !!n.multiple, t, !1)
    }
};
_a = Oi;
Ca = Ut;
var $f = {
        usingClientEntryPoint: !1,
        Events: [ar, Yt, ml, ka, ja, Oi]
    },
    Pn = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Uf = {
        bundleType: Pn.bundleType,
        version: Pn.version,
        rendererPackageName: Pn.rendererPackageName,
        rendererConfig: Pn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: lt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return e = Ta(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Pn.findFiberByHostInstance || Mf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cr.isDisabled && Cr.supportsFiber) try {
        cl = Cr.inject(Uf), Qe = Cr
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $f;
Ee.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fi(t)) throw Error(k(200));
    return Rf(e, t, null, n)
};
Ee.createRoot = function (e, t) {
    if (!Fi(e)) throw Error(k(299));
    var n = !1,
        r = "",
        l = oc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ii(e, 1, !1, null, null, n, !1, r, l), e[tt] = t.current, Xn(e.nodeType === 8 ? e.parentNode : e), new Mi(t)
};
Ee.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
    return e = Ta(t), e = e === null ? null : e.stateNode, e
};
Ee.flushSync = function (e) {
    return Ut(e)
};
Ee.hydrate = function (e, t, n) {
    if (!kl(t)) throw Error(k(200));
    return jl(null, e, t, !0, n)
};
Ee.hydrateRoot = function (e, t, n) {
    if (!Fi(e)) throw Error(k(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        s = "",
        i = oc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = ic(t, null, e, 1, n ?? null, l, !1, s, i), e[tt] = t.current, Xn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Sl(t)
};
Ee.render = function (e, t, n) {
    if (!kl(t)) throw Error(k(200));
    return jl(null, e, t, !1, n)
};
Ee.unmountComponentAtNode = function (e) {
    if (!kl(e)) throw Error(k(40));
    return e._reactRootContainer ? (Ut(function () {
        jl(null, null, e, !1, function () {
            e._reactRootContainer = null, e[tt] = null
        })
    }), !0) : !1
};
Ee.unstable_batchedUpdates = Oi;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!kl(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return jl(e, t, n, !1, r)
};
Ee.version = "18.3.1-next-f1338f8080-20240426";

function ac() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ac)
    } catch (e) {
        console.error(e)
    }
}
ac(), aa.exports = Ee;
var Af = aa.exports,
    Go = Af;
Zl.createRoot = Go.createRoot, Zl.hydrateRoot = Go.hydrateRoot;
class Bf {
    constructor() {
        this.apiUrl = "/api", this.isOnline = 1, this.localStorageKey = "restaurant_pos_data", this.initializeLocalStorage()
    }
    initializeLocalStorage() {
        if (!localStorage.getItem(this.localStorageKey)) {
            const n = {
                users: [{
                    id: 1,
                    username: "admin",
                    password: "admin123",
                    name: "Administrator",
                    role: "admin"
                }, {
                    id: 2,
                    username: "waiter1",
                    password: "waiter123",
                    name: "John Smith",
                    role: "waiter"
                }, {
                    id: 3,
                    username: "waiter2",
                    password: "waiter123",
                    name: "Maria Garcia",
                    role: "waiter"
                }, {
                    id: 4,
                    username: "kitchen1",
                    password: "kitchen123",
                    name: "Chef Wilson",
                    role: "kitchen"
                }, {
                    id: 5,
                    username: "bar1",
                    password: "bar123",
                    name: "Alex Bartender",
                    role: "bar"
                }],
                categories: [{
                    id: 1,
                    name: "Appetizers"
                }, {
                    id: 2,
                    name: "Main Courses"
                }, {
                    id: 3,
                    name: "Desserts"
                }, {
                    id: 4,
                    name: "Beverages"
                }, {
                    id: 5,
                    name: "Salads"
                }],
                products: [{
                    id: 1,
                    name: "Caesar Salad",
                    category_id: 5,
                    price_bgn: 12.5,
                    price_eur: 6.39,
                    description: "Fresh romaine lettuce with caesar dressing",
                    available: !0
                }, {
                    id: 2,
                    name: "Grilled Chicken",
                    category_id: 2,
                    price_bgn: 18.9,
                    price_eur: 9.66,
                    description: "Tender grilled chicken breast with herbs",
                    available: !0
                }, {
                    id: 3,
                    name: "Pasta Carbonara",
                    category_id: 2,
                    price_bgn: 16.8,
                    price_eur: 8.59,
                    description: "Classic Italian pasta with bacon and cream",
                    available: !0
                }, {
                    id: 4,
                    name: "Chocolate Cake",
                    category_id: 3,
                    price_bgn: 8.5,
                    price_eur: 4.34,
                    description: "Rich chocolate cake with vanilla ice cream",
                    available: !0
                }, {
                    id: 5,
                    name: "Coffee",
                    category_id: 4,
                    price_bgn: 3.2,
                    price_eur: 1.64,
                    description: "Freshly brewed coffee",
                    available: !0
                }, {
                    id: 6,
                    name: "Wine Glass",
                    category_id: 4,
                    price_bgn: 9.5,
                    price_eur: 4.86,
                    description: "House red or white wine",
                    available: !0
                }, {
                    id: 7,
                    name: "Bruschetta",
                    category_id: 1,
                    price_bgn: 7.8,
                    price_eur: 3.99,
                    description: "Toasted bread with tomatoes and basil",
                    available: !0
                }, {
                    id: 8,
                    name: "Fish & Chips",
                    category_id: 2,
                    price_bgn: 19.9,
                    price_eur: 10.17,
                    description: "Fresh fish with crispy fries",
                    available: !0
                }, {
                    id: 9,
                    name: "Cocktail - Mojito",
                    category_id: 4,
                    price_bgn: 12,
                    price_eur: 6.13,
                    description: "Classic mojito with mint and lime",
                    available: !0
                }, {
                    id: 10,
                    name: "Beer Draft",
                    category_id: 4,
                    price_bgn: 4.5,
                    price_eur: 2.3,
                    description: "Fresh draft beer",
                    available: !0
                }],
                tables: [{
                    id: 1,
                    table_number: "T1",
                    seats: 4,
                    status: "free"
                }, {
                    id: 2,
                    table_number: "T2",
                    seats: 2,
                    status: "free"
                }, {
                    id: 3,
                    table_number: "T3",
                    seats: 6,
                    status: "free"
                }, {
                    id: 4,
                    table_number: "T4",
                    seats: 4,
                    status: "free"
                }, {
                    id: 5,
                    table_number: "T5",
                    seats: 8,
                    status: "free"
                }, {
                    id: 6,
                    table_number: "T6",
                    seats: 2,
                    status: "free"
                }, {
                    id: 7,
                    table_number: "T7",
                    seats: 4,
                    status: "free"
                }, {
                    id: 8,
                    table_number: "T8",
                    seats: 6,
                    status: "free"
                }],
                orders: [],
                nextId: {
                    users: 6,
                    categories: 6,
                    products: 11,
                    tables: 9,
                    orders: 1,
                    order_items: 1
                }
            };
            localStorage.setItem(this.localStorageKey, JSON.stringify(n))
        }
    }
    getLocalData() {
        const t = localStorage.getItem(this.localStorageKey);
        return t ? JSON.parse(t) : null
    }
    saveLocalData(t) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(t))
    }
    async apiCall(t, n = "GET", r = null) {
        try {
            const l = {
                method: n,
                headers: {
                    "Content-Type": "application/json"
                }
            };
            r && n !== "GET" && (l.body = JSON.stringify(r));
            const s = await fetch(`${this.apiUrl}${t}`, l);
            if (!s.ok) throw new Error(`HTTP error! status: ${s.status}`);
            return await s.json()
        } catch (l) {
            return console.warn("API call failed, using localStorage fallback:", l), this.isOnline = !1, null
        }
    }
    async getUsers() {
        const t = await this.apiCall("/users");
        if (t) return this.isOnline = !0, t;
        const n = this.getLocalData();
        return (n == null ? void 0 : n.users) || []
    }
    async authenticateUser(t, n) {
        var i;
        const r = await this.apiCall("/auth/login", "POST", {
            username: t,
            password: n
        });
        if (r) return this.isOnline = !0, r;
        const l = this.getLocalData();
        return ((i = l == null ? void 0 : l.users) == null ? void 0 : i.find(u => u.username === t && u.password === n)) || null
    }
    async getCategories() {
        const t = await this.apiCall("/categories");
        if (t) return this.isOnline = !0, t;
        const n = this.getLocalData();
        return (n == null ? void 0 : n.categories) || []
    }
    async getProducts() {
        const t = await this.apiCall("/products");
        if (t) return this.isOnline = !0, t;
        const n = this.getLocalData();
        return (n == null ? void 0 : n.products) || []
    }
    async getTables() {
        const t = await this.apiCall("/tables");
        if (t) return this.isOnline = !0, t;
        const n = this.getLocalData();
        return (n == null ? void 0 : n.tables) || []
    }
    
    async updateTableStatus(t, n) {
        const r = await this.apiCall(`/tables/${t}`, "PUT", {
            status: n
        });
        if (r) return this.isOnline = !0, r;
        const l = this.getLocalData();
        if (l != null && l.tables) {
            const s = l.tables.findIndex(i => i.id === t);
            if (s !== -1) return l.tables[s].status = n, this.saveLocalData(l), l.tables[s]
        }
        return null
    }
    async getOrders() {
        const t = await this.apiCall("/orders");
        if (t) return this.isOnline = !0, t;
        const n = this.getLocalData();
        return (n == null ? void 0 : n.orders) || []
    }
    async createOrder(t) {
        const n = await this.apiCall("/orders", "POST", t);
        if (n) return this.isOnline = !0, n;
        const r = this.getLocalData();
        if (r) {
            const l = {
                ...t,
                id: r.nextId.orders++,
                created_at: new Date().toISOString(),
                items: t.items.map(s => ({
                    ...s,
                    id: r.nextId.order_items++
                }))
            };
            return r.orders.push(l), this.saveLocalData(r), l
        }
        return null
    }
    async updateOrder(t, n) {
        const r = await this.apiCall(`/orders/${t}`, "PUT", n);
        if (r) return this.isOnline = !0, r;
        const l = this.getLocalData();
        if (l != null && l.orders) {
            const s = l.orders.findIndex(i => i.id === t);
            if (s !== -1) return l.orders[s] = {
                ...l.orders[s],
                ...n
            }, this.saveLocalData(l), l.orders[s]
        }
        return null
    }
    async addItemsToOrder(t, n) {
        const r = await this.apiCall(`/orders/${t}/items`, "POST", {
            items: n
        });
        if (r) return this.isOnline = !0, r;
        const l = this.getLocalData();
        if (l != null && l.orders) {
            const s = l.orders.findIndex(i => i.id === t);
            if (s !== -1) {
                const i = l.orders[s],
                    u = n.map(c => ({
                        ...c,
                        id: l.nextId.order_items++
                    }));
                return i.items = [...i.items, ...u], i.total_bgn = i.items.reduce((c, f) => c + f.price_bgn * f.quantity, 0), i.total_eur = i.items.reduce((c, f) => c + f.price_eur * f.quantity, 0), this.saveLocalData(l), i
            }
        }
        return null
    }
    async updateOrderItemStatus(t, n, r) {
        const l = await this.apiCall(`/orders/${t}/items/${n}`, "PUT", {
            status: r
        });
        if (l) return this.isOnline = !0, l;
        const s = this.getLocalData();
        if (s != null && s.orders) {
            const i = s.orders.findIndex(u => u.id === t);
            if (i !== -1) {
                const u = s.orders[i],
                    c = u.items.findIndex(f => f.id === n);
                if (c !== -1) return u.items[c].status = r, this.saveLocalData(s), u.items[c]
            }
        }
        return null
    }
    isConnected() {
        return this.isOnline
    }
    getConnectionStatus() {
        return this.isOnline ? "Connected to MySQL Database" : "Using Local Storage (Offline Mode)"
    }
}
const Yo = new Bf,
    uc = $.createContext(),
    Vf = () => {
        const e = $.useContext(uc);
        if (!e) throw new Error("useDatabase must be used within a DatabaseProvider");
        return e
    },
    Wf = ({
        children: e
    }) => {
        const [t, n] = $.useState(!1), [r, l] = $.useState("Checking connection...");
        $.useEffect(() => {
            const i = () => {
                l(Yo.getConnectionStatus())
            };
            i();
            const u = setInterval(i, 3e4);
            return () => clearInterval(u)
        }, []);
        const s = async i => {
            n(!0);
            try {
                return await i()
            } finally {
                n(!1)
            }
        };
        return o.jsx(uc.Provider, {
            value: {
                db: Yo,
                isLoading: t,
                connectionStatus: r,
                withLoading: s
            },
            children: e
        })
    },
    cc = $.createContext(),
    xn = () => {
        const e = $.useContext(cc);
        if (!e) throw new Error("useApp must be used within an AppProvider");
        return e
    },
    dc = ({
        children: e
    }) => {
        const {
            db: t,
            withLoading: n
        } = Vf(), [r, l] = $.useState(null), [s, i] = $.useState([]), [u, c] = $.useState([]), [f, g] = $.useState([]), [h, m] = $.useState([]), [N, S] = $.useState(null), [y, L] = $.useState(null), [a, d] = $.useState("BGN"), [p, v] = $.useState([]), _ = r !== null;
        $.useEffect(() => {
            (async () => {
                try {
                    const [M, x, j, O] = await Promise.all([t.getTables(), t.getProducts(), t.getCategories(), t.getOrders()]);
                    i(M || []), c(x || []), g(j || []), m(O || []);
                    console.log(M); /* EditIS */
                    console.log(O);
                } catch (M) {
                    console.error("Error loading initial data:", M)
                }
            })()
        }, [t]);
        const E = async (I, M) => {
            try {
                const x = await n(() => t.authenticateUser(I, M));
                return x ? (l(x), !0) : !1
            } catch (x) {
                return console.error("Login error:", x), !1
            }
        }, P = () => {
            l(null), S(null), L(null), v([])
        }, T = I => {
            L(I), I.status === "free" ? (S({
                table_id: I.id,
                waiter_id: r == null ? void 0 : r.id,
                items: [],
                total_bgn: 0,
                total_eur: 0
            }), v([])) : (S(null), v([]))
        }, V = (I, M) => {
            const x = I.price_bgn,
                j = I.price_eur,
                O = {
                    id: Date.now() + Math.random(),
                    product_id: I.id,
                    quantity: M,
                    price_bgn: x,
                    price_eur: j,
                    status: "pending"
                };
            (y == null ? void 0 : y.status) === "occupied" ? v(z => [...z, O]): S(z => {
                if (!z) return null;
                const U = [...z.items, O],
                    st = U.reduce((B, fe) => B + fe.price_bgn * fe.quantity, 0),
                    Ve = U.reduce((B, fe) => B + fe.price_eur * fe.quantity, 0);
                return {
                    ...z,
                    items: U,
                    total_bgn: st,
                    total_eur: Ve
                }
            })
        }, D = I => {
            (y == null ? void 0 : y.status) === "occupied" ? v(M => M.filter(x => x.id !== I)): S(M => {
                if (!M) return null;
                const x = M.items.filter(z => z.id !== I),
                    j = x.reduce((z, U) => z + U.price_bgn * U.quantity, 0),
                    O = x.reduce((z, U) => z + U.price_eur * U.quantity, 0);
                return {
                    ...M,
                    items: x,
                    total_bgn: j,
                    total_eur: O
                }
            })
        }, ee = async () => {
            if (!(!N || N.items.length === 0)) try {
                const I = {
                        table_id: N.table_id,
                        waiter_id: N.waiter_id,
                        status: "active",
                        total_bgn: N.total_bgn,
                        total_eur: N.total_eur,
                        items: N.items.map(x => ({
                            product_id: x.product_id,
                            quantity: x.quantity,
                            price_bgn: x.price_bgn,
                            price_eur: x.price_eur,
                            status: x.status
                        }))
                    },
                    M = await n(() => t.createOrder(I));
                M && (m(x => [...x, M]), await t.updateTableStatus(N.table_id, "occupied"), i(x => x.map(j => j.id === N.table_id ? {
                    ...j,
                    status: "occupied"
                } : j)), S(null), L(null))
            } catch (I) {
                console.error("Error submitting order:", I)
            }
        }, ye = async () => {
            if (!(!y || y.status !== "occupied" || p.length === 0)) try {
                const I = h.find(j => j.table_id === y.id && j.status === "active");
                if (!I) return;
                const M = p.map(j => ({
                        product_id: j.product_id,
                        quantity: j.quantity,
                        price_bgn: j.price_bgn,
                        price_eur: j.price_eur,
                        status: j.status
                    })),
                    x = await n(() => t.addItemsToOrder(I.id, M));
                x && (m(j => j.map(O => O.id === I.id ? x : O)), v([]))
            } catch (I) {
                console.error("Error submitting new items:", I)
            }
        }, Ge = async (I, M, x) => {
            try {
                await n(() => t.updateOrderItemStatus(I, M, x)), m(j => j.map(O => O.id === I ? {
                    ...O,
                    items: O.items.map(z => z.id === M ? {
                        ...z,
                        status: x
                    } : z)
                } : O))
            } catch (j) {
                console.error("Error updating order item status:", j)
            }
        }, Ct = async I => {
            try {
                await n(() => t.updateOrder(I, {
                    status: "completed"
                })), m(x => x.map(j => j.id === I ? {
                    ...j,
                    status: "completed"
                } : j));
                const M = h.find(x => x.id === I);
                M && (await t.updateTableStatus(M.table_id, "free"), i(x => x.map(j => j.id === M.table_id ? {
                    ...j,
                    status: "free"
                } : j))), L(null), S(null), v([])
            } catch (M) {
                console.error("Error completing order:", M)
            }
        }, wn = I => {
            d(I)
        };
        return o.jsx(cc.Provider, {
            value: {
                currentUser: r,
                isAuthenticated: _,
                tables: s,
                products: u,
                categories: f,
                orders: h,
                currentOrder: N,
                selectedTable: y,
                currentCurrency: a,
                newItemsBuffer: p,
                login: E,
                logout: P,
                selectTable: T,
                addToOrder: V,
                removeFromOrder: D,
                submitOrder: ee,
                submitNewItems: ye,
                updateOrderItemStatus: Ge,
                completeOrder: Ct,
                setCurrency: wn
            },
            children: e
        })
    },
    Xo = () => {
        var y, L;
        const [e, t] = $.useState("role"), [n, r] = $.useState(""), [l, s] = $.useState(""), [i, u] = $.useState(""), [c, f] = $.useState(""), {
            login: g
        } = xn(), h = [{
            id: "admin",
            name: "Admin",
            icon: "👨‍💼",
            color: "bg-red-500"
        }, {
            id: "waiter",
            name: "Waiter",
            icon: "👨‍🍳",
            color: "bg-blue-500"
        }, {
            id: "bar",
            name: "Bar",
            icon: "🍹",
            color: "bg-green-500"
        }, {
            id: "kitchen",
            name: "Kitchen",
            icon: "👨‍🍳",
            color: "bg-orange-500"
        }], m = a => {
            switch (r(a), t("password"), a) {
                case "admin":
                    s("admin");
                    break;
                case "waiter":
                    s("waiter1");
                    break;
                case "bar":
                    s("bar1");
                    break;
                case "kitchen":
                    s("kitchen1");
                    break;
                default:
                    s("")
            }
        }, N = a => {
            a.preventDefault(), f(""), g(l, i) || f("Invalid credentials. Please try again.")
        }, S = () => {
            t("role"), r(""), s(""), u(""), f("")
        };
        return e === "role" ? o.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",
            children: o.jsxs("div", {
                className: "bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",
                children: [o.jsxs("div", {
                    className: "text-center mb-8",
                    children: [o.jsx("h1", {
                        className: "text-3xl font-bold text-gray-800 mb-2",
                        children: "Restaurant POS"
                    }), o.jsx("p", {
                        className: "text-gray-600",
                        children: "Select your role to continue"
                    })]
                }), o.jsx("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: h.map(a => o.jsxs("button", {
                        onClick: () => m(a.id),
                        className: `${a.color} hover:opacity-90 text-white rounded-xl p-6 transition-all duration-200 transform hover:scale-105 shadow-lg`,
                        children: [o.jsx("div", {
                            className: "text-4xl mb-2",
                            children: a.icon
                        }), o.jsx("div", {
                            className: "font-semibold",
                            children: a.name
                        })]
                    }, a.id))
                }), o.jsxs("div", {
                    className: "mt-8 text-center text-sm text-gray-500",
                    children: [o.jsx("p", {
                        children: "Demo Credentials:"
                    }), o.jsx("p", {
                        children: "Admin: admin/admin123"
                    }), o.jsx("p", {
                        children: "Waiter: waiter1/waiter123"
                    }), o.jsx("p", {
                        children: "Bar: bar1/bar123"
                    }), o.jsx("p", {
                        children: "Kitchen: kitchen1/kitchen123"
                    })]
                })]
            })
        }) : o.jsx("div", {
            className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4",
            children: o.jsxs("div", {
                className: "bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md",
                children: [o.jsx("button", {
                    onClick: S,
                    className: "mb-4 text-gray-600 hover:text-gray-800 flex items-center",
                    children: "← Back to role selection"
                }), o.jsxs("div", {
                    className: "text-center mb-8",
                    children: [o.jsx("div", {
                        className: "text-6xl mb-4",
                        children: (y = h.find(a => a.id === n)) == null ? void 0 : y.icon
                    }), o.jsxs("h2", {
                        className: "text-2xl font-bold text-gray-800 mb-2",
                        children: [(L = h.find(a => a.id === n)) == null ? void 0 : L.name, " Login"]
                    }), o.jsx("p", {
                        className: "text-gray-600",
                        children: "Enter your credentials"
                    })]
                }), o.jsxs("form", {
                    onSubmit: N,
                    className: "space-y-6",
                    children: [o.jsxs("div", {
                        children: [o.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Username"
                        }), o.jsx("input", {
                            type: "text",
                            value: l,
                            onChange: a => s(a.target.value),
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            required: !0
                        })]
                    }), o.jsxs("div", {
                        children: [o.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Password"
                        }), o.jsx("input", {
                            type: "password",
                            value: i,
                            onChange: a => u(a.target.value),
                            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                            required: !0
                        })]
                    }), c && o.jsx("div", {
                        className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",
                        children: c
                    }), o.jsx("button", {
                        type: "submit",
                        className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200",
                        children: "Login"
                    })]
                })]
            })
        })
    },
    bf = () => {
        var $i;
        const {
            currentUser: e,
            tables: t,
            products: n,
            categories: r,
            orders: l,
            currentOrder: s,
            selectedTable: i,
            currentCurrency: u,
            newItemsBuffer: c,
            selectTable: f,
            addToOrder: g,
            removeFromOrder: h,
            submitOrder: m,
            submitNewItems: N,
            completeOrder: S,
            setCurrency: y,
            logout: L
        } = xn(), [a, d] = $.useState("tables"), [p, v] = $.useState(null), [_, E] = $.useState(!1), [P, T] = $.useState("cash"), V = t.filter(w => w.status === "free"), D = t.filter(w => w.status === "occupied"), ee = w => l.find(W => W.table_id === w && W.status === "active"), ye = w => !w || !w.items || w.items.length === 0 ? !1 : w.items.every(W => W.status === "served"), Ge = w => !w || !w.items ? 0 : w.items.filter(W => W.status !== "served").length, Ct = w => {
            w.status === "free" ? (f(w), d("menu")) : ee(w.id) && (f(w), d("order"))
        }, wn = w => {
            g(w, 1)
        }, I = () => {
            s && s.items.length > 0 && (m(), d("tables"))
        }, M = () => {
            c.length > 0 && N()
        }, x = () => {
            if (i) {
                const w = ee(i.id);
                w && ye(w) && (S(w.id), E(!1), d("tables"))
            }
        }, j = () => {
            const w = ee(i.id);
            w && ye(w) && E(!0)
        }, O = w => u === "BGN" ? w.price_bgn : w.price_eur, z = (w = s) => w ? u === "BGN" ? w.total_bgn : w.total_eur : 0, U = () => c.length === 0 ? 0 : c.reduce((w, W) => {
            const Et = u === "BGN" ? W.price_bgn : W.price_eur;
            return w + Et * W.quantity
        }, 0), st = p ? n.filter(w => w.category_id === p) : n, B = i && i.status === "occupied" ? ee(i.id) : s, fe = w => {
            const W = r.find(Et => Et.id === w.category_id);
            if (!W) return "🍽️";
            switch (W.name) {
                case "Appetizers":
                    return "🥗";
                case "Main Courses":
                    return "🍽️";
                case "Desserts":
                    return "🍰";
                case "Hot Drinks":
                    return "☕";
                case "Cold Drinks":
                    return "🥤";
                case "Alcoholic":
                    return "🍺";
                default:
                    return "🍽️"
            }
        }, Vt = w => w.stock === 0 ? {
            status: "out-of-stock",
            text: "Out of Stock",
            color: "bg-red-100 text-red-800"
        } : w.stock <= 5 ? {
            status: "low-stock",
            text: "Low Stock",
            color: "bg-yellow-100 text-yellow-800"
        } : {
            status: "available",
            text: "Available",
            color: "bg-green-100 text-green-800"
        };
        return o.jsxs("div", {
            className: "min-h-screen bg-gray-50",
            children: [o.jsxs("div", {
                className: "bg-white shadow-sm border-b",
                children: [o.jsxs("div", {
                    className: "flex items-center justify-between p-4",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [o.jsx("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Waiter Dashboard"
                        }), o.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["Welcome, ", e == null ? void 0 : e.name]
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [o.jsxs("select", {
                            value: u,
                            onChange: w => y(w.target.value),
                            className: "px-3 py-2 border border-gray-300 rounded-lg",
                            children: [o.jsx("option", {
                                value: "BGN",
                                children: "BGN"
                            }), o.jsx("option", {
                                value: "EUR",
                                children: "EUR"
                            })]
                        }), o.jsx("button", {
                            onClick: L,
                            className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                            children: "Logout"
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "flex border-t",
                    children: [o.jsxs("button", {
                        onClick: () => d("tables"),
                        className: `px-6 py-3 font-medium ${a==="tables"?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-gray-800"}`,
                        children: ["Tables (", V.length, " free, ", D.length, " occupied)"]
                    }), o.jsxs("button", {
                        onClick: () => d("menu"),
                        className: `px-6 py-3 font-medium ${a==="menu"?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-gray-800"}`,
                        disabled: !i,
                        children: ["Menu ", i && `(Table is ${i.table_number})`, c.length > 0 && o.jsxs("span", {
                            className: "ml-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full",
                            children: ["+", c.length]
                        })]
                    }), o.jsxs("button", {
                        onClick: () => d("order"),
                        className: `px-6 py-3 font-medium ${a==="order"?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-gray-800"}`,
                        disabled: !B && c.length === 0,
                        children: ["Current Order ", B && `(${(($i=B.items)==null?void 0:$i.length)||0} items)`, c.length > 0 && o.jsxs("span", {
                            className: "ml-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full",
                            children: ["+", c.length, " new"]
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "p-6",
                children: [a === "tables" && o.jsxs("div", {
                    children: [o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-4",
                            children: "Available Tables"
                        }), o.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
                            children: V.map(w => o.jsxs("button", {
                                onClick: () => Ct(w),
                                className: "bg-green-100 hover:bg-green-200 border-2 border-green-300 rounded-lg p-6 text-center transition-colors",
                                children: [o.jsx("div", {
                                    className: "text-2xl font-bold text-green-800",
                                    children: w.table_number /*EDITIS*/
                                }), o.jsxs("div", {
                                    className: "text-sm text-green-600",
                                    children: [w.seats, " seats"] /*EDITIS*/
                                    
                                }), o.jsx("div", {
                                    className: "text-xs text-green-500 mt-1",
                                    children: "Available"
                                })]
                            }, w.id))
                        })]
                    }), D.length > 0 && o.jsxs("div", {
                        children: [o.jsx("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-4",
                            children: "Occupied Tables"
                        }), o.jsx("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4",
                            children: D.map(w => {
                                const W = ee(w.id);
                                return o.jsxs("button", {
                                    onClick: () => Ct(w),
                                    className: "bg-yellow-100 hover:bg-yellow-200 border-2 border-yellow-300 rounded-lg p-6 text-center transition-colors",
                                    children: [o.jsx("div", {
                                        className: "text-2xl font-bold text-yellow-800",
                                        children: w.table_number /*EDITIS*/
                                    }), o.jsxs("div", {
                                        className: "text-sm text-yellow-600",
                                        children: [w.seats, " seats"] /*EDITIS*/
                                    }), o.jsx("div", {
                                        className: "text-xs text-yellow-500 mt-1",
                                        children: W ? `${parseFloat(z(W)).toFixed(2)} ${u}` : "Occupied" /*EDITIS*/
                                    })]
                                }, w.id)
                            })
                        })]
                    })]
                }), a === "menu" && i && o.jsxs("div", {
                    children: [o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsxs("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-2",
                            children: ["Menu - Table ", i.number, i.status === "occupied" && o.jsx("span", {
                                className: "ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 text-sm rounded",
                                children: "Adding to existing order"
                            })]
                        }), o.jsx("p", {
                            className: "text-gray-600",
                            children: "Select items to add to the order"
                        }), i.status === "occupied" && c.length > 0 && o.jsx("div", {
                            className: "mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg",
                            children: o.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [o.jsxs("div", {
                                    children: [o.jsx("h3", {
                                        className: "font-medium text-orange-800",
                                        children: "New Items Added"
                                    }), o.jsxs("p", {
                                        className: "text-sm text-orange-600",
                                        children: [c.length, " item(s) - Total: ", parseFloat(U()).toFixed(2), " ", u]
                                    })]
                                }), o.jsx("button", {
                                    onClick: M,
                                    className: "px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium",
                                    children: "Send to Kitchen/Bar"
                                })]
                            })
                        })]
                    }), o.jsx("div", {
                        className: "mb-6",
                        children: o.jsxs("div", {
                            className: "flex flex-wrap gap-2",
                            children: [o.jsx("button", {
                                onClick: () => v(null),
                                className: `px-4 py-2 rounded-lg font-medium ${p===null?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                children: "All Items"
                            }), r.map(w => o.jsx("button", {
                                onClick: () => v(w.id),
                                className: `px-4 py-2 rounded-lg font-medium ${p===w.id?"bg-blue-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                                children: w.name
                            }, w.id))]
                        })
                    }), o.jsx("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: st.map(w => {
                            const W = Vt(w);
                            /* Edit Ivan Stavrev 
                            const result = O(w);
                                console.log("Type of O(w):", typeof result);
                                console.log("Value of O(w):", result);  */ 
                            return o.jsxs("button", {
                                onClick: () => wn(w),
                                disabled: w.stock === 0,
                                className: `bg-white rounded-xl shadow-sm border-2 p-6 text-left transition-all duration-200 ${w.stock===0?"border-red-200 opacity-60 cursor-not-allowed":"border-gray-200 hover:border-blue-300 hover:shadow-md transform hover:-translate-y-1"}`,
                                children: [o.jsx("div", {
                                    className: "flex justify-center mb-4",
                                    children: o.jsx("div", {
                                        className: "w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl",
                                        children: fe(w)
                                    })
                                }), o.jsx("h3", {
                                    className: "font-bold text-lg text-gray-800 mb-2 text-center",
                                    children: w.name
                                }), o.jsxs("div", {
                                    className: "text-center mb-3",
                                    children: [o.jsx("span", {
                                        className: "text-2xl font-bold text-blue-600",
                                        
                                        children: parseFloat(O(w)).toFixed(2) /* EDITIS */ 
                                    }), o.jsx("span", {
                                        className: "text-lg text-blue-600 ml-1",
                                        children: u
                                    })]
                                }), o.jsx("div", {
                                    className: "flex justify-center mb-3",
                                    children: o.jsx("span", {
                                        className: `px-3 py-1 rounded-full text-xs font-medium ${W.color}`,
                                        children: W.text
                                    })
                                }), o.jsx("div", {
                                    className: "text-center text-sm text-gray-500",
                                    children: w.stock > 0 ? `${w.stock} in stock` : "Out of stock"
                                }), w.stock > 0 && o.jsx("div", {
                                    className: "mt-4 flex justify-center",
                                    children: o.jsx("div", {
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm",
                                        children: "Add to Order"
                                    })
                                })]
                            }, w.id)
                        })
                    })]
                }), a === "order" && (B || c.length > 0) && o.jsxs("div", {
                    children: [o.jsxs("div", {
                        className: "mb-6 flex justify-between items-center",
                        children: [o.jsxs("div", {
                            children: [o.jsxs("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-2",
                                children: ["Order - Table ", i == null ? void 0 : i.number] /* Here */
                            }), o.jsx("p", {
                                className: "text-gray-600",
                                children: (i == null ? void 0 : i.status) === "occupied" ? "Existing order - you can add more items or process payment" : "Review and submit your order"
                            })]
                        }), (i == null ? void 0 : i.status) === "occupied" && B && o.jsxs("div", {
                            className: "flex flex-col items-end space-y-2",
                            children: [!ye(B) && o.jsxs("div", {
                                className: "text-sm text-orange-600 bg-orange-50 px-3 py-1 rounded-lg border border-orange-200",
                                children: [Ge(B), " item(s) not yet served"]
                            }), o.jsx("button", {
                                onClick: j,
                                disabled: !ye(B),
                                className: `px-6 py-3 rounded-lg font-semibold ${ye(B)?"bg-green-600 text-white hover:bg-green-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,
                                children: "Process Payment"
                            }), !ye(B) && o.jsx("p", {
                                className: "text-xs text-gray-500 text-center",
                                children: "All items must be served before payment"
                            }), o.jsx("button", {
                                onClick: () => d("menu"),
                                className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold",
                                children: "Add More Items"
                            })]
                        })]
                    }), B && B.items && B.items.length > 0 && o.jsxs("div", {
                        className: "mb-8",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Current Order Items"
                        }), o.jsx("div", {
                            className: "space-y-4",
                            children: B.items.map(w => {
                                const W = n.find(Et => Et.id === w.product_id);
                                return W ? o.jsxs("div", {
                                    className: "bg-white rounded-lg shadow-sm border p-4 flex items-center justify-between",
                                    children: [o.jsxs("div", {
                                        className: "flex-1",
                                        children: [o.jsx("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: W.name
                                        }), o.jsxs("p", {
                                            className: "text-sm text-gray-600",
                                            children: ["Quantity: ", w.quantity, " × ", (parseFloat(u === "BGN" ? w.price_bgn : w.price_eur)).toFixed(2), " ", u] /*EDITIS*/
                                        }), o.jsx("div", {
                                            className: "flex items-center space-x-2 mt-1",
                                            children: o.jsx("span", {
                                                className: `px-2 py-1 text-xs rounded-full ${w.status==="pending"?"bg-yellow-100 text-yellow-800":w.status==="ready"?"bg-green-100 text-green-800":w.status==="served"?"bg-blue-100 text-blue-800":"bg-gray-100 text-gray-800"}`,
                                                children: w.status.charAt(0).toUpperCase() + w.status.slice(1)
                                            })
                                        })]
                                    }), o.jsx("div", {
                                        className: "flex items-center space-x-4",
                                        children: o.jsxs("span", {
                                            className: "font-bold text-lg",
                                            children: [((u === "BGN" ? w.price_bgn : w.price_eur) * w.quantity).toFixed(2), " ", u]
                                        })
                                    })]
                                }, w.id) : null
                            })
                        })]
                    }), c.length > 0 && o.jsxs("div", {
                        className: "mb-8",
                        children: [o.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [o.jsx("h3", {
                                className: "text-lg font-semibold text-orange-800",
                                children: "New Items to Send"
                            }), o.jsx("button", {
                                onClick: M,
                                className: "px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-medium",
                                children: "Send to Kitchen/Bar"
                            })]
                        }), o.jsx("div", {
                            className: "space-y-4",
                            children: c.map(w => {
                                const W = n.find(Et => Et.id === w.product_id);
                                return W ? o.jsxs("div", {
                                    className: "bg-orange-50 rounded-lg shadow-sm border border-orange-200 p-4 flex items-center justify-between",
                                    children: [o.jsxs("div", {
                                        className: "flex-1",
                                        children: [o.jsx("h3", {
                                            className: "font-semibold text-gray-800",
                                            children: W.name
                                        }), o.jsxs("p", {
                                            className: "text-sm text-gray-600",
                                            children: ["Quantity: ", w.quantity, " × ", parseFloat((u === "BGN" ? w.price_bgn : w.price_eur)).toFixed(2), " ", u]
                                        }), o.jsx("div", {
                                            className: "flex items-center space-x-2 mt-1",
                                            children: o.jsx("span", {
                                                className: "px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-800",
                                                children: "Ready to Send"
                                            })
                                        })]
                                    }), o.jsxs("div", {
                                        className: "flex items-center space-x-4",
                                        children: [o.jsxs("span", {
                                            className: "font-bold text-lg",
                                            children: [((u === "BGN" ? w.price_bgn : w.price_eur) * w.quantity).toFixed(2), " ", u]
                                        }), o.jsx("button", {
                                            onClick: () => h(w.id),
                                            className: "px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700",
                                            children: "Remove"
                                        })]
                                    })]
                                }, w.id) : null
                            })
                        })]
                    }), (B || s) && o.jsxs("div", {
                        className: "bg-blue-50 rounded-lg p-4 mt-6",
                        children: [o.jsxs("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [o.jsx("span", {
                                className: "text-lg font-semibold",
                                children: "Total:"
                            }), o.jsxs("span", {
                                className: "text-2xl font-bold text-blue-600",
                                children: [B ? parseFloat(z(B)).toFixed(2) : parseFloat(z(s)).toFixed(2), " ", u, c.length > 0 && o.jsxs("span", {
                                    className: "text-sm text-orange-600 ml-2",
                                    children: ["+ ", parseFloat(U()).toFixed(2), " ", u, " (new items)"]
                                })]
                            })]
                        }), o.jsxs("div", {
                            className: "flex space-x-3",
                            children: [(i == null ? void 0 : i.status) !== "occupied" && s && o.jsx("button", {
                                onClick: I,
                                className: "flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold",
                                children: "Submit Order"
                            }), o.jsx("button", {
                                onClick: () => d("menu"),
                                className: "px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold",
                                children: "Add More Items"
                            })]
                        })]
                    })]
                })]
            }), _ && o.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50",
                children: o.jsxs("div", {
                    className: "bg-white rounded-lg shadow-xl p-6 w-full max-w-md",
                    children: [o.jsxs("h3", {
                        className: "text-lg font-semibold text-gray-800 mb-4",
                        children: ["Process Payment - Table ", i == null ? void 0 : i.number]
                    }), o.jsx("div", {
                        className: "mb-6",
                        children: o.jsxs("div", {
                            className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                            children: [o.jsx("span", {
                                className: "font-medium",
                                children: "Total Amount:"
                            }), o.jsxs("span", {
                                className: "text-xl font-bold text-green-600",
                                children: [B && parseFloat(z(B)).toFixed(2), " ", u]
                            })]
                        })
                    }), o.jsx("div", {
                        className: "mb-6",
                        children: o.jsxs("div", {
                            className: "flex items-center space-x-2 p-3 bg-green-50 rounded border border-green-200",
                            children: [o.jsx("div", {
                                className: "w-2 h-2 bg-green-500 rounded-full"
                            }), o.jsx("span", {
                                className: "text-sm text-green-700 font-medium",
                                children: "All items have been served"
                            })]
                        })
                    }), o.jsxs("div", {
                        className: "mb-6",
                        children: [o.jsx("label", {
                            className: "block text-sm font-medium text-gray-700 mb-2",
                            children: "Payment Method"
                        }), o.jsxs("select", {
                            value: P,
                            onChange: w => T(w.target.value),
                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                            children: [o.jsx("option", {
                                value: "cash",
                                children: "Cash"
                            }), o.jsx("option", {
                                value: "card",
                                children: "Credit/Debit Card"
                            }), o.jsx("option", {
                                value: "wallet",
                                children: "Digital Wallet"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "flex justify-end space-x-3",
                        children: [o.jsx("button", {
                            onClick: () => E(!1),
                            className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50",
                            children: "Cancel"
                        }), o.jsx("button", {
                            onClick: x,
                            className: "px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold",
                            children: "Complete Payment"
                        })]
                    })]
                })
            })]
        })
    },
    Hf = () => {
        const {
            currentUser: e,
            orders: t,
            products: n,
            updateOrderItemStatus: r,
            logout: l
        } = xn(), [s, i] = $.useState("pending"), u = t.filter(y => y.status === "active" && y.items.some(L => {
            const a = n.find(d => d.id === L.product_id);
            console.log("Item:", L, "Matched product:", a);
            return a && a.bar_item
        })), f = (() => {
            const y = [];
            return u.forEach(L => {
                L.items.forEach(a => {
                    const d = n.find(p => p.id === a.product_id);
                    d && d.bar_item && y.push({
                        ...a,
                        orderId: L.id,
                        tableNumber: L.table_id,
                        productName: d.name,
                        waiterName: L.waiter_id === 2 ? "John Doe" : "Jane Smith"
                    })
                })
            }), y
        })(), g = s === "all" ? f : f.filter(y => y.status === s), h = (y, L, a) => {
            r(y, L, a)
        }, m = y => {
            switch (y) {
                case "pending":
                    return "bg-yellow-100 text-yellow-800 border-yellow-200";
                case "ready":
                    return "bg-green-100 text-green-800 border-green-200";
                case "served":
                    return "bg-gray-100 text-gray-800 border-gray-200";
                default:
                    return "bg-gray-100 text-gray-800 border-gray-200"
            }
        }, N = f.filter(y => y.status === "pending").length, S = f.filter(y => y.status === "ready").length;
        return o.jsxs("div", {
            className: "min-h-screen bg-gray-50",
            children: [o.jsxs("div", {
                className: "bg-white shadow-sm border-b",
                children: [o.jsxs("div", {
                    className: "flex items-center justify-between p-4",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [o.jsx("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Bar Dashboard"
                        }), o.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["Welcome, ", e == null ? void 0 : e.name]
                        })]
                    }), o.jsx("button", {
                        onClick: l,
                        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                        children: "Logout"
                    })]
                }), o.jsxs("div", {
                    className: "flex items-center space-x-6 px-4 py-3 bg-gray-50 border-t",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-3 h-3 bg-yellow-400 rounded-full"
                        }), o.jsxs("span", {
                            className: "text-sm font-medium",
                            children: ["Pending: ", N]
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-3 h-3 bg-green-400 rounded-full"
                        }), o.jsxs("span", {
                            className: "text-sm font-medium",
                            children: ["Ready: ", S]
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "p-6",
                children: [o.jsx("div", {
                    className: "mb-6",
                    children: o.jsxs("div", {
                        className: "flex space-x-1 bg-gray-200 rounded-lg p-1",
                        children: [o.jsxs("button", {
                            onClick: () => i("pending"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="pending"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["Pending (", N, ")"]
                        }), o.jsxs("button", {
                            onClick: () => i("ready"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="ready"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["Ready (", S, ")"]
                        }), o.jsxs("button", {
                            onClick: () => i("all"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="all"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["All (", f.length, ")"]
                        })]
                    })
                }), g.length === 0 ? o.jsxs("div", {
                    className: "text-center py-12",
                    children: [o.jsx("div", {
                        className: "text-6xl mb-4",
                        children: "🍹"
                    }), o.jsx("h3", {
                        className: "text-lg font-medium text-gray-800 mb-2",
                        children: "No bar orders"
                    }), o.jsxs("p", {
                        className: "text-gray-600",
                        children: [s === "pending" && "No pending orders at the moment", s === "ready" && "No orders ready to serve", s === "all" && "No bar orders available"]
                    })]
                }) : o.jsx("div", {
                    className: "grid gap-4",
                    children: g.map(y => o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsxs("div", {
                            className: "flex items-start justify-between mb-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-1",
                                    children: y.productName
                                }), o.jsxs("div", {
                                    className: "flex items-center space-x-4 text-sm text-gray-600",
                                    children: [o.jsxs("span", {
                                        children: ["Table ", y.tableNumber]
                                    }), o.jsxs("span", {
                                        children: ["Qty: ", y.quantity]
                                    }), o.jsxs("span", {
                                        children: ["Waiter: ", y.waiterName]
                                    })]
                                })]
                            }), o.jsx("div", {
                                className: "flex items-center space-x-3",
                                children: o.jsx("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-medium border ${m(y.status)}`,
                                    children: y.status.charAt(0).toUpperCase() + y.status.slice(1)
                                })
                            })]
                        }), o.jsxs("div", {
                            className: "flex justify-end space-x-2",
                            children: [y.status === "pending" && o.jsx("button", {
                                onClick: () => h(y.orderId, y.id, "ready"),
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium",
                                children: "Mark as Ready"
                            }), y.status === "ready" && o.jsx("button", {
                                onClick: () => h(y.orderId, y.id, "served"),
                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                children: "Mark as Served"
                            }), y.status === "served" && o.jsx("span", {
                                className: "px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium",
                                children: "Completed"
                            })]
                        })]
                    }, `${y.orderId}-${y.id}`))
                })]
            })]
        })
    },
    Qf = () => {
        const {
            currentUser: e,
            orders: t,
            products: n,
            updateOrderItemStatus: r,
            logout: l
        } = xn(), [s, i] = $.useState("pending"), u = t.filter(a => a.status === "active" && a.items.some(d => {
            const p = n.find(v => v.id === d.product_id);
            return p && p.kitchen_item
        })), f = (() => {
            const a = [];
            return u.forEach(d => {
                d.items.forEach(p => {
                    const v = n.find(_ => _.id === p.product_id);
                    v && v.kitchen_item && a.push({
                        ...p,
                        orderId: d.id,
                        tableNumber: d.table_id,
                        productName: v.name,
                        waiterName: d.waiter_id === 2 ? "John Doe" : "Jane Smith",
                        orderTime: d.created_at
                    })
                })
            }), a
        })(), g = s === "all" ? f : f.filter(a => a.status === s), h = (a, d, p) => {
            r(a, d, p)
        }, m = a => {
            switch (a) {
                case "pending":
                    return "bg-yellow-100 text-yellow-800 border-yellow-200";
                case "ready":
                    return "bg-green-100 text-green-800 border-green-200";
                case "served":
                    return "bg-gray-100 text-gray-800 border-gray-200";
                default:
                    return "bg-gray-100 text-gray-800 border-gray-200"
            }
        }, N = a => {
            const d = new Date,
                p = new Date(a),
                v = (d - p) / (1e3 * 60);
            return v > 30 ? "border-l-red-500" : v > 15 ? "border-l-yellow-500" : "border-l-green-500"
        }, S = a => new Date(a).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit"
        }), y = f.filter(a => a.status === "pending").length, L = f.filter(a => a.status === "ready").length;
        return o.jsxs("div", {
            className: "min-h-screen bg-gray-50",
            children: [o.jsxs("div", {
                className: "bg-white shadow-sm border-b",
                children: [o.jsxs("div", {
                    className: "flex items-center justify-between p-4",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [o.jsx("h1", {
                            className: "text-2xl font-bold text-gray-800",
                            children: "Kitchen Dashboard"
                        }), o.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["Welcome, ", e == null ? void 0 : e.name]
                        })]
                    }), o.jsx("button", {
                        onClick: l,
                        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                        children: "Logout"
                    })]
                }), o.jsxs("div", {
                    className: "flex items-center space-x-6 px-4 py-3 bg-gray-50 border-t",
                    children: [o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-3 h-3 bg-yellow-400 rounded-full"
                        }), o.jsxs("span", {
                            className: "text-sm font-medium",
                            children: ["Pending: ", y]
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-3 h-3 bg-green-400 rounded-full"
                        }), o.jsxs("span", {
                            className: "text-sm font-medium",
                            children: ["Ready: ", L]
                        })]
                    }), o.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [o.jsx("div", {
                            className: "w-3 h-3 bg-red-400 rounded-full"
                        }), o.jsx("span", {
                            className: "text-sm",
                            children: "High Priority (30+ min)"
                        })]
                    })]
                })]
            }), o.jsxs("div", {
                className: "p-6",
                children: [o.jsx("div", {
                    className: "mb-6",
                    children: o.jsxs("div", {
                        className: "flex space-x-1 bg-gray-200 rounded-lg p-1",
                        children: [o.jsxs("button", {
                            onClick: () => i("pending"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="pending"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["Pending (", y, ")"]
                        }), o.jsxs("button", {
                            onClick: () => i("ready"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="ready"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["Ready (", L, ")"]
                        }), o.jsxs("button", {
                            onClick: () => i("all"),
                            className: `px-4 py-2 rounded-md font-medium transition-colors ${s==="all"?"bg-white text-gray-800 shadow-sm":"text-gray-600 hover:text-gray-800"}`,
                            children: ["All (", f.length, ")"]
                        })]
                    })
                }), g.length === 0 ? o.jsxs("div", {
                    className: "text-center py-12",
                    children: [o.jsx("div", {
                        className: "text-6xl mb-4",
                        children: "👨‍🍳"
                    }), o.jsx("h3", {
                        className: "text-lg font-medium text-gray-800 mb-2",
                        children: "No kitchen orders"
                    }), o.jsxs("p", {
                        className: "text-gray-600",
                        children: [s === "pending" && "No pending orders at the moment", s === "ready" && "No orders ready to serve", s === "all" && "No kitchen orders available"]
                    })]
                }) : o.jsx("div", {
                    className: "grid gap-4",
                    children: g.sort((a, d) => new Date(a.orderTime) - new Date(d.orderTime)).map(a => o.jsxs("div", {
                        className: `bg-white rounded-lg shadow-sm border-l-4 ${N(a.orderTime)} p-6`,
                        children: [o.jsxs("div", {
                            className: "flex items-start justify-between mb-4",
                            children: [o.jsxs("div", {
                                children: [o.jsx("h3", {
                                    className: "text-lg font-semibold text-gray-800 mb-1",
                                    children: a.productName
                                }), o.jsxs("div", {
                                    className: "flex items-center space-x-4 text-sm text-gray-600",
                                    children: [o.jsxs("span", {
                                        children: ["Table ", a.tableNumber]
                                    }), o.jsxs("span", {
                                        children: ["Qty: ", a.quantity]
                                    }), o.jsxs("span", {
                                        children: ["Waiter: ", a.waiterName]
                                    }), o.jsxs("span", {
                                        children: ["Ordered: ", S(a.orderTime)]
                                    })]
                                })]
                            }), o.jsx("div", {
                                className: "flex items-center space-x-3",
                                children: o.jsx("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-medium border ${m(a.status)}`,
                                    children: a.status.charAt(0).toUpperCase() + a.status.slice(1)
                                })
                            })]
                        }), o.jsx("div", {
                            className: "mb-4 p-3 bg-gray-50 rounded-lg",
                            children: o.jsxs("p", {
                                className: "text-sm text-gray-600",
                                children: [o.jsx("strong", {
                                    children: "Preparation Notes:"
                                }), " Standard preparation"]
                            })
                        }), o.jsxs("div", {
                            className: "flex justify-end space-x-2",
                            children: [a.status === "pending" && o.jsx("button", {
                                onClick: () => h(a.orderId, a.id, "ready"),
                                className: "px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium",
                                children: "Mark as Ready"
                            }), a.status === "ready" && o.jsx("button", {
                                onClick: () => h(a.orderId, a.id, "served"),
                                className: "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium",
                                children: "Mark as Served"
                            }), a.status === "served" && o.jsx("span", {
                                className: "px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium",
                                children: "Completed"
                            })]
                        })]
                    }, `${a.orderId}-${a.id}`))
                })]
            })]
        })
    };

function Kf() {
    const {
        currentUser: e,
        users: t,
        products: n,
        categories: r,
        orders: l,
        currentCurrency: s,
        setCurrency: i,
        logout: u
    } = xn(), [c, f] = $.useState("overview"), g = (l || []).filter(a => a && a.id), h = (t || []).filter(a => a && a.id), m = (n || []).filter(a => a && a.id), N = (r || []).filter(a => a && a.id), S = g.reduce((a, d) => {
        const p = s === "BGN" ? d.total_bgn || 0 : d.total_eur || 0;
        return a + p
    }, 0), y = g.filter(a => a.status === "active").length, L = g.filter(a => a.status === "completed").length;
    return o.jsxs("div", {
        className: "min-h-screen bg-gray-50",
        children: [o.jsxs("div", {
            className: "bg-white shadow-sm border-b",
            children: [o.jsxs("div", {
                className: "flex items-center justify-between p-4",
                children: [o.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [o.jsx("h1", {
                        className: "text-2xl font-bold text-gray-800",
                        children: "Admin Dashboard"
                    }), o.jsxs("span", {
                        className: "text-sm text-gray-600",
                        children: ["Welcome, ", (e == null ? void 0 : e.name) || "Admin"]
                    })]
                }), o.jsxs("div", {
                    className: "flex items-center space-x-4",
                    children: [o.jsxs("select", {
                        value: s,
                        onChange: a => i(a.target.value),
                        className: "px-3 py-2 border border-gray-300 rounded-lg",
                        children: [o.jsx("option", {
                            value: "BGN",
                            children: "BGN"
                        }), o.jsx("option", {
                            value: "EUR",
                            children: "EUR"
                        })]
                    }), o.jsx("button", {
                        onClick: u,
                        className: "px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700",
                        children: "Logout"
                    })]
                })]
            }), o.jsx("div", {
                className: "flex border-t",
                children: [{
                    id: "overview",
                    name: "Overview"
                }, {
                    id: "users",
                    name: "Users"
                }, {
                    id: "products",
                    name: "Products"
                }, {
                    id: "orders",
                    name: "Orders"
                }, {
                    id: "reports",
                    name: "Reports"
                }].map(a => o.jsx("button", {
                    onClick: () => f(a.id),
                    className: `px-6 py-3 font-medium ${c===a.id?"border-b-2 border-blue-500 text-blue-600":"text-gray-600 hover:text-gray-800"}`,
                    children: a.name
                }, a.id))
            })]
        }), o.jsxs("div", {
            className: "p-6",
            children: [c === "overview" && o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800 mb-6",
                    children: "System Overview"
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8",
                    children: [o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-sm font-medium text-gray-600 mb-2",
                            children: "Total Sales"
                        }), o.jsxs("p", {
                            className: "text-3xl font-bold text-green-600",
                            children: [parseFloat(S).toFixed(2), " ", s] /*EDITIS*/
                        })]
                    }), o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-sm font-medium text-gray-600 mb-2",
                            children: "Active Orders"
                        }), o.jsx("p", {
                            className: "text-3xl font-bold text-blue-600",
                            children: y
                        })]
                    }), o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-sm font-medium text-gray-600 mb-2",
                            children: "Completed Orders"
                        }), o.jsx("p", {
                            className: "text-3xl font-bold text-gray-600",
                            children: L
                        })]
                    }), o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-sm font-medium text-gray-600 mb-2",
                            children: "Total Products"
                        }), o.jsx("p", {
                            className: "text-3xl font-bold text-purple-600",
                            children: m.length
                        })]
                    })]
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Recent Orders"
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [g.slice(-5).reverse().map(a => o.jsxs("div", {
                                className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                children: [o.jsxs("div", {
                                    children: [o.jsxs("span", {
                                        className: "font-medium",
                                        children: ["Order #", a.id]
                                    }), o.jsxs("span", {
                                        className: "text-sm text-gray-600 ml-2",
                                        children: ["Table ", a.table_id || "N/A"]
                                    })]
                                }), o.jsxs("span", {
                                    className: "font-semibold",
                                    children: [parseFloat((s === "BGN" ? a.total_bgn || 0 : a.total_eur || 0)).toFixed(2), " ", s]
                                })]
                            }, a.id)), g.length === 0 && o.jsx("div", {
                                className: "text-center text-gray-500 py-4",
                                children: "No orders found"
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Staff Overview"
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [h.filter(a => a.role !== "admin").map(a => o.jsxs("div", {
                                className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                children: [o.jsxs("div", {
                                    children: [o.jsx("span", {
                                        className: "font-medium",
                                        children: a.name || "Unknown"
                                    }), o.jsxs("span", {
                                        className: "text-sm text-gray-600 ml-2 capitalize",
                                        children: ["(", a.role || "N/A", ")"]
                                    })]
                                }), o.jsx("span", {
                                    className: "text-sm text-gray-600",
                                    children: a.shift_start && a.shift_end ? `${a.shift_start} - ${a.shift_end}` : "N/A"
                                })]
                            }, a.id)), h.filter(a => a.role !== "admin").length === 0 && o.jsx("div", {
                                className: "text-center text-gray-500 py-4",
                                children: "No staff members found"
                            })]
                        })]
                    })]
                })]
            }), c === "users" && o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800 mb-6",
                    children: "User Management"
                }), o.jsx("div", {
                    className: "bg-white rounded-lg shadow-sm border overflow-hidden",
                    children: o.jsxs("table", {
                        className: "w-full",
                        children: [o.jsx("thead", {
                            className: "bg-gray-50",
                            children: o.jsxs("tr", {
                                children: [o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Name"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Username"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Role"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Shift"
                                })]
                            })
                        }), o.jsxs("tbody", {
                            className: "divide-y divide-gray-200",
                            children: [h.map(a => o.jsxs("tr", {
                                children: [o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900",
                                    children: a.name || "Unknown"
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                    children: a.username || "N/A"
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: o.jsx("span", {
                                        className: "px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 capitalize",
                                        children: a.role || "N/A"
                                    })
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                    children: a.shift_start && a.shift_end ? `${a.shift_start} - ${a.shift_end}` : "N/A"
                                })]
                            }, a.id)), h.length === 0 && o.jsx("tr", {
                                children: o.jsx("td", {
                                    colSpan: "4",
                                    className: "px-6 py-4 text-center text-gray-500",
                                    children: "No users found"
                                })
                            })]
                        })]
                    })
                })]
            }), c === "products" && o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800 mb-6",
                    children: "Product Management"
                }), o.jsx("div", {
                    className: "bg-white rounded-lg shadow-sm border overflow-hidden",
                    children: o.jsxs("table", {
                        className: "w-full",
                        children: [o.jsx("thead", {
                            className: "bg-gray-50",
                            children: o.jsxs("tr", {
                                children: [o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Name"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Category"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Price (BGN)"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Price (EUR)"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Stock"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Type"
                                })]
                            })
                        }), o.jsxs("tbody", {
                            className: "divide-y divide-gray-200",
                            children: [m.map(a => {
                                const d = N.find(p => p.id === a.category_id);
                                return o.jsxs("tr", {
                                    children: [o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900",
                                        children: a.name || "Unknown Product"
                                    }), o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                        children: (d == null ? void 0 : d.name) || "N/A"
                                    }), o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                        children: parseFloat((a.price_bgn || 0)).toFixed(2)
                                    }), o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                        children: parseFloat((a.price_eur || 0)).toFixed(2)
                                    }), o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                        children: a.stock || 0
                                    }), o.jsx("td", {
                                        className: "px-6 py-4 whitespace-nowrap",
                                        children: o.jsxs("div", {
                                            className: "flex space-x-1",
                                            children: [a.kitchen_item && o.jsx("span", {
                                                className: "px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded",
                                                children: "Kitchen"
                                            }), a.bar_item && o.jsx("span", {
                                                className: "px-2 py-1 text-xs bg-green-100 text-green-800 rounded",
                                                children: "Bar"
                                            }), !a.kitchen_item && !a.bar_item && o.jsx("span", {
                                                className: "px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded",
                                                children: "General"
                                            })]
                                        })
                                    })]
                                }, a.id)
                            }), m.length === 0 && o.jsx("tr", {
                                children: o.jsx("td", {
                                    colSpan: "6",
                                    className: "px-6 py-4 text-center text-gray-500",
                                    children: "No products found"
                                })
                            })]
                        })]
                    })
                })]
            }), c === "orders" && o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800 mb-6",
                    children: "Order Management"
                }), o.jsx("div", {
                    className: "bg-white rounded-lg shadow-sm border overflow-hidden",
                    children: o.jsxs("table", {
                        className: "w-full",
                        children: [o.jsx("thead", {
                            className: "bg-gray-50",
                            children: o.jsxs("tr", {
                                children: [o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Order ID"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Table"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Status"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Total"
                                }), o.jsx("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                    children: "Time"
                                })]
                            })
                        }), o.jsxs("tbody", {
                            className: "divide-y divide-gray-200",
                            children: [g.map(a => o.jsxs("tr", {
                                children: [o.jsxs("td", {
                                    className: "px-6 py-4 whitespace-nowrap font-medium text-gray-900",
                                    children: ["#", a.id]
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                    children: a.table_id || "N/A"
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap",
                                    children: o.jsx("span", {
                                        className: `px-2 py-1 text-xs font-semibold rounded-full ${a.status==="active"?"bg-yellow-100 text-yellow-800":a.status==="completed"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"}`,
                                        children: a.status ? a.status.charAt(0).toUpperCase() + a.status.slice(1) : "Unknown"
                                    })
                                }), o.jsxs("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                    children: [parseFloat((s === "BGN" ? a.total_bgn || 0 : a.total_eur || 0)).toFixed(2), " ", s]
                                }), o.jsx("td", {
                                    className: "px-6 py-4 whitespace-nowrap text-gray-600",
                                    children: a.created_at ? new Date(a.created_at).toLocaleTimeString() : "N/A"
                                })]
                            }, a.id)), g.length === 0 && o.jsx("tr", {
                                children: o.jsx("td", {
                                    colSpan: "5",
                                    className: "px-6 py-4 text-center text-gray-500",
                                    children: "No orders found"
                                })
                            })]
                        })]
                    })
                })]
            }), c === "reports" && o.jsxs("div", {
                children: [o.jsx("h2", {
                    className: "text-xl font-semibold text-gray-800 mb-6",
                    children: "Reports & Analytics"
                }), o.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Daily Sales Summary"
                        }), o.jsxs("div", {
                            className: "space-y-4",
                            children: [o.jsxs("div", {
                                className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                children: [o.jsx("span", {
                                    className: "font-medium",
                                    children: "Total Revenue"
                                }), o.jsxs("span", {
                                    className: "text-lg font-bold text-green-600",
                                    children: [parseFloat(S).toFixed(2), " ", s]
                                })]
                            }), o.jsxs("div", {
                                className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                children: [o.jsx("span", {
                                    className: "font-medium",
                                    children: "Orders Completed"
                                }), o.jsx("span", {
                                    className: "text-lg font-bold",
                                    children: L
                                })]
                            }), o.jsxs("div", {
                                className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                children: [o.jsx("span", {
                                    className: "font-medium",
                                    children: "Average Order Value"
                                }), o.jsxs("span", {
                                    className: "text-lg font-bold",
                                    children: [L > 0 ? parseFloat((S / L)).toFixed(2) : "0.00", " ", s]
                                })]
                            })]
                        })]
                    }), o.jsxs("div", {
                        className: "bg-white rounded-lg shadow-sm border p-6",
                        children: [o.jsx("h3", {
                            className: "text-lg font-semibold text-gray-800 mb-4",
                            children: "Staff Performance"
                        }), o.jsxs("div", {
                            className: "space-y-3",
                            children: [h.filter(a => a.role === "waiter").map(a => {
                                const d = g.filter(v => v.waiter_id === a.id),
                                    p = d.reduce((v, _) => v + (s === "BGN" ? _.total_bgn || 0 : _.total_eur || 0), 0);
                                return o.jsxs("div", {
                                    className: "flex justify-between items-center p-3 bg-gray-50 rounded",
                                    children: [o.jsx("span", {
                                        className: "font-medium",
                                        children: a.name || "Unknown"
                                    }), o.jsxs("div", {
                                        className: "text-right",
                                        children: [o.jsxs("div", {
                                            className: "font-bold",
                                            children: [parseFloat(p).toFixed(2), " ", s]
                                        }), o.jsxs("div", {
                                            className: "text-sm text-gray-600",
                                            children: [d.length, " orders"]
                                        })]
                                    })]
                                }, a.id)
                            }), h.filter(a => a.role === "waiter").length === 0 && o.jsx("div", {
                                className: "text-center text-gray-500 py-4",
                                children: "No waiters found"
                            })]
                        })]
                    })]
                })]
            })]
        })]
    })
}

function Gf() {
    const {
        isAuthenticated: e,
        currentUser: t
    } = xn();
    if (!e) return o.jsx(Xo, {});
    switch (t == null ? void 0 : t.role) {
        case "waiter":
            return o.jsx(bf, {});
        case "bar":
            return o.jsx(Hf, {});
        case "kitchen":
            return o.jsx(Qf, {});
        case "admin":
            return o.jsx(Kf, {});
        default:
            return o.jsx(Xo, {})
    }
}

function Yf() {
    return o.jsx(dc, {
        children: o.jsx(Gf, {})
    })
}
Zl.createRoot(document.getElementById("root")).render(o.jsx(Pc.StrictMode, {
    children: o.jsx(Wf, {
        children: o.jsx(dc, {
            children: o.jsx(Yf, {})
        })
    })
}));
