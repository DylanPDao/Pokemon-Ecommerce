function Kd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Yd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var da = { exports: {} },
  Ol = {},
  fa = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for('react.element'),
  Gd = Symbol.for('react.portal'),
  Xd = Symbol.for('react.fragment'),
  Zd = Symbol.for('react.strict_mode'),
  Jd = Symbol.for('react.profiler'),
  qd = Symbol.for('react.provider'),
  bd = Symbol.for('react.context'),
  ef = Symbol.for('react.forward_ref'),
  tf = Symbol.for('react.suspense'),
  nf = Symbol.for('react.memo'),
  rf = Symbol.for('react.lazy'),
  Uu = Symbol.iterator;
function lf(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Uu && e[Uu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var pa = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ma = Object.assign,
  ha = {};
function Sn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ha),
    (this.updater = n || pa);
}
Sn.prototype.isReactComponent = {};
Sn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Sn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function va() {}
va.prototype = Sn.prototype;
function $i(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ha),
    (this.updater = n || pa);
}
var zi = ($i.prototype = new va());
zi.constructor = $i;
ma(zi, Sn.prototype);
zi.isPureReactComponent = !0;
var Au = Array.isArray,
  ga = Object.prototype.hasOwnProperty,
  Di = { current: null },
  ya = { key: !0, ref: !0, __self: !0, __source: !0 };
function xa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      ga.call(t, r) && !ya.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: gr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Di.current,
  };
}
function of(e, t) {
  return {
    $$typeof: gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ui(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === gr;
}
function uf(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Bu = /\/+/g;
function oo(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? uf('' + e.key)
    : t.toString(36);
}
function Xr(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case gr:
          case Gd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + oo(i, 0) : r),
      Au(l)
        ? ((n = ''),
          e != null && (n = e.replace(Bu, '$&/') + '/'),
          Xr(l, t, n, '', function (a) {
            return a;
          }))
        : l != null &&
          (Ui(l) &&
            (l = of(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(Bu, '$&/') + '/') +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), Au(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + oo(o, u);
      i += Xr(o, t, n, s, l);
    }
  else if (((s = lf(e)), typeof s == 'function'))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + oo(o, u++)), (i += Xr(o, t, n, s, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function Ir(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xr(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function sf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var de = { current: null },
  Zr = { transition: null },
  af = {
    ReactCurrentDispatcher: de,
    ReactCurrentBatchConfig: Zr,
    ReactCurrentOwner: Di,
  };
R.Children = {
  map: Ir,
  forEach: function (e, t, n) {
    Ir(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ir(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ir(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ui(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
R.Component = Sn;
R.Fragment = Xd;
R.Profiler = Jd;
R.PureComponent = $i;
R.StrictMode = Zd;
R.Suspense = tf;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = af;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = ma({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Di.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ga.call(t, s) &&
        !ya.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: bd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: qd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = xa;
R.createFactory = function (e) {
  var t = xa.bind(null, e);
  return (t.type = e), t;
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: ef, render: e };
};
R.isValidElement = Ui;
R.lazy = function (e) {
  return { $$typeof: rf, _payload: { _status: -1, _result: e }, _init: sf };
};
R.memo = function (e, t) {
  return { $$typeof: nf, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
R.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
R.useCallback = function (e, t) {
  return de.current.useCallback(e, t);
};
R.useContext = function (e) {
  return de.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return de.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return de.current.useEffect(e, t);
};
R.useId = function () {
  return de.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return de.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return de.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return de.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return de.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return de.current.useRef(e);
};
R.useState = function (e) {
  return de.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return de.current.useTransition();
};
R.version = '18.2.0';
fa.exports = R;
var g = fa.exports;
const kt = Yd(g),
  $o = Kd({ __proto__: null, default: kt }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var cf = g,
  df = Symbol.for('react.element'),
  ff = Symbol.for('react.fragment'),
  pf = Object.prototype.hasOwnProperty,
  mf = cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) pf.call(t, r) && !hf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: df,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: mf.current,
  };
}
Ol.Fragment = ff;
Ol.jsx = wa;
Ol.jsxs = wa;
da.exports = Ol;
var d = da.exports,
  zo = {},
  Sa = { exports: {} },
  Ee = {},
  ka = { exports: {} },
  Ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(P, L) {
    var T = P.length;
    P.push(L);
    e: for (; 0 < T; ) {
      var Q = (T - 1) >>> 1,
        J = P[Q];
      if (0 < l(J, L)) (P[Q] = L), (P[T] = J), (T = Q);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var L = P[0],
      T = P.pop();
    if (T !== L) {
      P[0] = T;
      e: for (var Q = 0, J = P.length, Pr = J >>> 1; Q < Pr; ) {
        var _t = 2 * (Q + 1) - 1,
          lo = P[_t],
          It = _t + 1,
          _r = P[It];
        if (0 > l(lo, T))
          It < J && 0 > l(_r, lo)
            ? ((P[Q] = _r), (P[It] = T), (Q = It))
            : ((P[Q] = lo), (P[_t] = T), (Q = _t));
        else if (It < J && 0 > l(_r, T)) (P[Q] = _r), (P[It] = T), (Q = It);
        else break e;
      }
    }
    return L;
  }
  function l(P, L) {
    var T = P.sortIndex - L.sortIndex;
    return T !== 0 ? T : P.id - L.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    a = [],
    p = 1,
    f = null,
    h = 3,
    x = !1,
    w = !1,
    y = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(P) {
    for (var L = n(a); L !== null; ) {
      if (L.callback === null) r(a);
      else if (L.startTime <= P)
        r(a), (L.sortIndex = L.expirationTime), t(s, L);
      else break;
      L = n(a);
    }
  }
  function S(P) {
    if (((y = !1), v(P), !w))
      if (n(s) !== null) (w = !0), no(k);
      else {
        var L = n(a);
        L !== null && ro(S, L.startTime - P);
      }
  }
  function k(P, L) {
    (w = !1), y && ((y = !1), m(I), (I = -1)), (x = !0);
    var T = h;
    try {
      for (
        v(L), f = n(s);
        f !== null && (!(f.expirationTime > L) || (P && !Te()));

      ) {
        var Q = f.callback;
        if (typeof Q == 'function') {
          (f.callback = null), (h = f.priorityLevel);
          var J = Q(f.expirationTime <= L);
          (L = e.unstable_now()),
            typeof J == 'function' ? (f.callback = J) : f === n(s) && r(s),
            v(L);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var Pr = !0;
      else {
        var _t = n(a);
        _t !== null && ro(S, _t.startTime - L), (Pr = !1);
      }
      return Pr;
    } finally {
      (f = null), (h = T), (x = !1);
    }
  }
  var j = !1,
    _ = null,
    I = -1,
    H = 5,
    O = -1;
  function Te() {
    return !(e.unstable_now() - O < H);
  }
  function Nn() {
    if (_ !== null) {
      var P = e.unstable_now();
      O = P;
      var L = !0;
      try {
        L = _(!0, P);
      } finally {
        L ? Pn() : ((j = !1), (_ = null));
      }
    } else j = !1;
  }
  var Pn;
  if (typeof c == 'function')
    Pn = function () {
      c(Nn);
    };
  else if (typeof MessageChannel < 'u') {
    var Du = new MessageChannel(),
      Qd = Du.port2;
    (Du.port1.onmessage = Nn),
      (Pn = function () {
        Qd.postMessage(null);
      });
  } else
    Pn = function () {
      C(Nn, 0);
    };
  function no(P) {
    (_ = P), j || ((j = !0), Pn());
  }
  function ro(P, L) {
    I = C(function () {
      P(e.unstable_now());
    }, L);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), no(k));
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (H = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = h;
      }
      var T = h;
      h = L;
      try {
        return P();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, L) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var T = h;
      h = P;
      try {
        return L();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (P, L, T) {
      var Q = e.unstable_now();
      switch (
        (typeof T == 'object' && T !== null
          ? ((T = T.delay), (T = typeof T == 'number' && 0 < T ? Q + T : Q))
          : (T = Q),
        P)
      ) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return (
        (J = T + J),
        (P = {
          id: p++,
          callback: L,
          priorityLevel: P,
          startTime: T,
          expirationTime: J,
          sortIndex: -1,
        }),
        T > Q
          ? ((P.sortIndex = T),
            t(a, P),
            n(s) === null &&
              P === n(a) &&
              (y ? (m(I), (I = -1)) : (y = !0), ro(S, T - Q)))
          : ((P.sortIndex = J), t(s, P), w || x || ((w = !0), no(k))),
        P
      );
    }),
    (e.unstable_shouldYield = Te),
    (e.unstable_wrapCallback = function (P) {
      var L = h;
      return function () {
        var T = h;
        h = L;
        try {
          return P.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(Ea);
ka.exports = Ea;
var vf = ka.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca = g,
  ke = vf;
function E(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ja = new Set(),
  Zn = {};
function Ht(e, t) {
  pn(e, t), pn(e + 'Capture', t);
}
function pn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) ja.add(t[e]);
}
var qe = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Do = Object.prototype.hasOwnProperty,
  gf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Vu = {},
  Wu = {};
function yf(e) {
  return Do.call(Wu, e)
    ? !0
    : Do.call(Vu, e)
    ? !1
    : gf.test(e)
    ? (Wu[e] = !0)
    : ((Vu[e] = !0), !1);
}
function xf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function wf(e, t, n, r) {
  if (t === null || typeof t > 'u' || xf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var re = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  re[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  re[e] = new fe(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    re[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  re[e] = new fe(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  re[e] = new fe(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  re[e] = new fe(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  re[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ai = /[\-:]([a-z])/g;
function Bi(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ai, Bi);
    re[t] = new fe(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Ai, Bi);
    re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Ai, Bi);
  re[t] = new fe(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new fe(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  re[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (wf(t, n, l, r) && (n = null),
    r || l === null
      ? yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = Ca.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Lr = Symbol.for('react.element'),
  Gt = Symbol.for('react.portal'),
  Xt = Symbol.for('react.fragment'),
  Wi = Symbol.for('react.strict_mode'),
  Uo = Symbol.for('react.profiler'),
  Na = Symbol.for('react.provider'),
  Pa = Symbol.for('react.context'),
  Hi = Symbol.for('react.forward_ref'),
  Ao = Symbol.for('react.suspense'),
  Bo = Symbol.for('react.suspense_list'),
  Qi = Symbol.for('react.memo'),
  ot = Symbol.for('react.lazy'),
  _a = Symbol.for('react.offscreen'),
  Hu = Symbol.iterator;
function _n(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Hu && e[Hu]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var V = Object.assign,
  io;
function zn(e) {
  if (io === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      io = (t && t[1]) || '';
    }
  return (
    `
` +
    io +
    e
  );
}
var uo = !1;
function so(e, t) {
  if (!e || uo) return '';
  uo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var l = a.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    s.includes('<anonymous>') &&
                    (s = s.replace('<anonymous>', e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (uo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? zn(e) : '';
}
function Sf(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn('Lazy');
    case 13:
      return zn('Suspense');
    case 19:
      return zn('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = so(e.type, !1)), e;
    case 11:
      return (e = so(e.type.render, !1)), e;
    case 1:
      return (e = so(e.type, !0)), e;
    default:
      return '';
  }
}
function Vo(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Xt:
      return 'Fragment';
    case Gt:
      return 'Portal';
    case Uo:
      return 'Profiler';
    case Wi:
      return 'StrictMode';
    case Ao:
      return 'Suspense';
    case Bo:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Pa:
        return (e.displayName || 'Context') + '.Consumer';
      case Na:
        return (e._context.displayName || 'Context') + '.Provider';
      case Hi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Qi:
        return (
          (t = e.displayName || null), t !== null ? t : Vo(e.type) || 'Memo'
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return Vo(e(t));
        } catch {}
    }
  return null;
}
function kf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Vo(t);
    case 8:
      return t === Wi ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Et(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ia(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Ef(e) {
  var t = Ia(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Tr(e) {
  e._valueTracker || (e._valueTracker = Ef(e));
}
function La(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Ia(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wo(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qu(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Et(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Ta(e, t) {
  (t = t.checked), t != null && Vi(e, 'checked', t, !1);
}
function Ho(e, t) {
  Ta(e, t);
  var n = Et(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Qo(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Qo(e, t.type, Et(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ku(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Qo(e, t, n) {
  (t !== 'number' || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Dn = Array.isArray;
function un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ko(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Ra(e, t) {
  var n = Et(t.value),
    r = Et(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Oa(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Yo(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Oa(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Rr,
  Fa = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Rr = Rr || document.createElement('div'),
          Rr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Rr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Jn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bn = {
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
    strokeWidth: !0,
  },
  Cf = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Bn).forEach(function (e) {
  Cf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
  });
});
function Ma(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
    ? ('' + t).trim()
    : t + 'px';
}
function $a(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Ma(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jf = V(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function Go(e, t) {
  if (t) {
    if (jf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(E(62));
  }
}
function Xo(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Zo = null;
function Ki(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Jo = null,
  sn = null,
  an = null;
function Xu(e) {
  if ((e = wr(e))) {
    if (typeof Jo != 'function') throw Error(E(280));
    var t = e.stateNode;
    t && ((t = Dl(t)), Jo(e.stateNode, e.type, t));
  }
}
function za(e) {
  sn ? (an ? an.push(e) : (an = [e])) : (sn = e);
}
function Da() {
  if (sn) {
    var e = sn,
      t = an;
    if (((an = sn = null), Xu(e), t)) for (e = 0; e < t.length; e++) Xu(t[e]);
  }
}
function Ua(e, t) {
  return e(t);
}
function Aa() {}
var ao = !1;
function Ba(e, t, n) {
  if (ao) return e(t, n);
  ao = !0;
  try {
    return Ua(e, t, n);
  } finally {
    (ao = !1), (sn !== null || an !== null) && (Aa(), Da());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Dl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(E(231, t, typeof n));
  return n;
}
var qo = !1;
if (qe)
  try {
    var In = {};
    Object.defineProperty(In, 'passive', {
      get: function () {
        qo = !0;
      },
    }),
      window.addEventListener('test', In, In),
      window.removeEventListener('test', In, In);
  } catch {
    qo = !1;
  }
function Nf(e, t, n, r, l, o, i, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var Vn = !1,
  sl = null,
  al = !1,
  bo = null,
  Pf = {
    onError: function (e) {
      (Vn = !0), (sl = e);
    },
  };
function _f(e, t, n, r, l, o, i, u, s) {
  (Vn = !1), (sl = null), Nf.apply(Pf, arguments);
}
function If(e, t, n, r, l, o, i, u, s) {
  if ((_f.apply(this, arguments), Vn)) {
    if (Vn) {
      var a = sl;
      (Vn = !1), (sl = null);
    } else throw Error(E(198));
    al || ((al = !0), (bo = a));
  }
}
function Qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Va(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Zu(e) {
  if (Qt(e) !== e) throw Error(E(188));
}
function Lf(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Qt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Zu(l), e;
        if (o === r) return Zu(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function Wa(e) {
  return (e = Lf(e)), e !== null ? Ha(e) : null;
}
function Ha(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ha(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qa = ke.unstable_scheduleCallback,
  Ju = ke.unstable_cancelCallback,
  Tf = ke.unstable_shouldYield,
  Rf = ke.unstable_requestPaint,
  K = ke.unstable_now,
  Of = ke.unstable_getCurrentPriorityLevel,
  Yi = ke.unstable_ImmediatePriority,
  Ka = ke.unstable_UserBlockingPriority,
  cl = ke.unstable_NormalPriority,
  Ff = ke.unstable_LowPriority,
  Ya = ke.unstable_IdlePriority,
  Fl = null,
  Qe = null;
function Mf(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == 'function')
    try {
      Qe.onCommitFiberRoot(Fl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ze = Math.clz32 ? Math.clz32 : Df,
  $f = Math.log,
  zf = Math.LN2;
function Df(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - (($f(e) / zf) | 0)) | 0;
}
var Or = 64,
  Fr = 4194304;
function Un(e) {
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
      return e;
  }
}
function dl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Un(u)) : ((o &= i), o !== 0 && (r = Un(o)));
  } else (i = n & ~l), i !== 0 ? (r = Un(i)) : o !== 0 && (r = Un(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ze(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Uf(e, t) {
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
      return -1;
  }
}
function Af(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ze(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = Uf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function ei(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ga() {
  var e = Or;
  return (Or <<= 1), !(Or & 4194240) && (Or = 64), e;
}
function co(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function yr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ze(t)),
    (e[t] = n);
}
function Bf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ze(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Gi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ze(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var M = 0;
function Xa(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Za,
  Xi,
  Ja,
  qa,
  ba,
  ti = !1,
  Mr = [],
  ft = null,
  pt = null,
  mt = null,
  bn = new Map(),
  er = new Map(),
  ut = [],
  Vf =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function qu(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ft = null;
      break;
    case 'dragenter':
    case 'dragleave':
      pt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      mt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      bn.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      er.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = wr(t)), t !== null && Xi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Wf(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (ft = Ln(ft, e, t, n, r, l)), !0;
    case 'dragenter':
      return (pt = Ln(pt, e, t, n, r, l)), !0;
    case 'mouseover':
      return (mt = Ln(mt, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return bn.set(o, Ln(bn.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (
        (o = l.pointerId), er.set(o, Ln(er.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function ec(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Va(n)), t !== null)) {
          (e.blockedOn = t),
            ba(e.priority, function () {
              Ja(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ni(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Zo = r), n.target.dispatchEvent(r), (Zo = null);
    } else return (t = wr(n)), t !== null && Xi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bu(e, t, n) {
  Jr(e) && n.delete(t);
}
function Hf() {
  (ti = !1),
    ft !== null && Jr(ft) && (ft = null),
    pt !== null && Jr(pt) && (pt = null),
    mt !== null && Jr(mt) && (mt = null),
    bn.forEach(bu),
    er.forEach(bu);
}
function Tn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ti ||
      ((ti = !0),
      ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Hf)));
}
function tr(e) {
  function t(l) {
    return Tn(l, e);
  }
  if (0 < Mr.length) {
    Tn(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Tn(ft, e),
      pt !== null && Tn(pt, e),
      mt !== null && Tn(mt, e),
      bn.forEach(t),
      er.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    ec(n), n.blockedOn === null && ut.shift();
}
var cn = nt.ReactCurrentBatchConfig,
  fl = !0;
function Qf(e, t, n, r) {
  var l = M,
    o = cn.transition;
  cn.transition = null;
  try {
    (M = 1), Zi(e, t, n, r);
  } finally {
    (M = l), (cn.transition = o);
  }
}
function Kf(e, t, n, r) {
  var l = M,
    o = cn.transition;
  cn.transition = null;
  try {
    (M = 4), Zi(e, t, n, r);
  } finally {
    (M = l), (cn.transition = o);
  }
}
function Zi(e, t, n, r) {
  if (fl) {
    var l = ni(e, t, n, r);
    if (l === null) So(e, t, r, pl, n), qu(e, r);
    else if (Wf(l, e, t, n, r)) r.stopPropagation();
    else if ((qu(e, r), t & 4 && -1 < Vf.indexOf(e))) {
      for (; l !== null; ) {
        var o = wr(l);
        if (
          (o !== null && Za(o),
          (o = ni(e, t, n, r)),
          o === null && So(e, t, r, pl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else So(e, t, r, null, n);
  }
}
var pl = null;
function ni(e, t, n, r) {
  if (((pl = null), (e = Ki(r)), (e = Rt(e)), e !== null))
    if (((t = Qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Va(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pl = e), null;
}
function tc(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Of()) {
        case Yi:
          return 1;
        case Ka:
          return 4;
        case cl:
        case Ff:
          return 16;
        case Ya:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Ji = null,
  qr = null;
function nc() {
  if (qr) return qr;
  var e,
    t = Ji,
    n = t.length,
    r,
    l = 'value' in at ? at.value : at.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (qr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function br(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $r() {
  return !0;
}
function es() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? $r
        : es),
      (this.isPropagationStopped = es),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = $r));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = $r));
      },
      persist: function () {},
      isPersistent: $r,
    }),
    t
  );
}
var kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  qi = Ce(kn),
  xr = V({}, kn, { view: 0, detail: 0 }),
  Yf = Ce(xr),
  fo,
  po,
  Rn,
  Ml = V({}, xr, {
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
    getModifierState: bi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Rn &&
            (Rn && e.type === 'mousemove'
              ? ((fo = e.screenX - Rn.screenX), (po = e.screenY - Rn.screenY))
              : (po = fo = 0),
            (Rn = e)),
          fo);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : po;
    },
  }),
  ts = Ce(Ml),
  Gf = V({}, Ml, { dataTransfer: 0 }),
  Xf = Ce(Gf),
  Zf = V({}, xr, { relatedTarget: 0 }),
  mo = Ce(Zf),
  Jf = V({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  qf = Ce(Jf),
  bf = V({}, kn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ep = Ce(bf),
  tp = V({}, kn, { data: 0 }),
  ns = Ce(tp),
  np = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  rp = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  lp = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function op(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = lp[e]) ? !!t[e] : !1;
}
function bi() {
  return op;
}
var ip = V({}, xr, {
    key: function (e) {
      if (e.key) {
        var t = np[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = br(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? rp[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: bi,
    charCode: function (e) {
      return e.type === 'keypress' ? br(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? br(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  up = Ce(ip),
  sp = V({}, Ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  rs = Ce(sp),
  ap = V({}, xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: bi,
  }),
  cp = Ce(ap),
  dp = V({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fp = Ce(dp),
  pp = V({}, Ml, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mp = Ce(pp),
  hp = [9, 13, 27, 32],
  eu = qe && 'CompositionEvent' in window,
  Wn = null;
qe && 'documentMode' in document && (Wn = document.documentMode);
var vp = qe && 'TextEvent' in window && !Wn,
  rc = qe && (!eu || (Wn && 8 < Wn && 11 >= Wn)),
  ls = String.fromCharCode(32),
  os = !1;
function lc(e, t) {
  switch (e) {
    case 'keyup':
      return hp.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function oc(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Zt = !1;
function gp(e, t) {
  switch (e) {
    case 'compositionend':
      return oc(t);
    case 'keypress':
      return t.which !== 32 ? null : ((os = !0), ls);
    case 'textInput':
      return (e = t.data), e === ls && os ? null : e;
    default:
      return null;
  }
}
function yp(e, t) {
  if (Zt)
    return e === 'compositionend' || (!eu && lc(e, t))
      ? ((e = nc()), (qr = Ji = at = null), (Zt = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return rc && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var xp = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0,
};
function is(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!xp[e.type] : t === 'textarea';
}
function ic(e, t, n, r) {
  za(r),
    (t = ml(t, 'onChange')),
    0 < t.length &&
      ((n = new qi('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hn = null,
  nr = null;
function wp(e) {
  gc(e, 0);
}
function $l(e) {
  var t = bt(e);
  if (La(t)) return e;
}
function Sp(e, t) {
  if (e === 'change') return t;
}
var uc = !1;
if (qe) {
  var ho;
  if (qe) {
    var vo = 'oninput' in document;
    if (!vo) {
      var us = document.createElement('div');
      us.setAttribute('oninput', 'return;'),
        (vo = typeof us.oninput == 'function');
    }
    ho = vo;
  } else ho = !1;
  uc = ho && (!document.documentMode || 9 < document.documentMode);
}
function ss() {
  Hn && (Hn.detachEvent('onpropertychange', sc), (nr = Hn = null));
}
function sc(e) {
  if (e.propertyName === 'value' && $l(nr)) {
    var t = [];
    ic(t, nr, e, Ki(e)), Ba(wp, t);
  }
}
function kp(e, t, n) {
  e === 'focusin'
    ? (ss(), (Hn = t), (nr = n), Hn.attachEvent('onpropertychange', sc))
    : e === 'focusout' && ss();
}
function Ep(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return $l(nr);
}
function Cp(e, t) {
  if (e === 'click') return $l(t);
}
function jp(e, t) {
  if (e === 'input' || e === 'change') return $l(t);
}
function Np(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ae = typeof Object.is == 'function' ? Object.is : Np;
function rr(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Do.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function as(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function cs(e, t) {
  var n = as(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = as(n);
  }
}
function ac(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? ac(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function cc() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Pp(e) {
  var t = cc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ac(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && tu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = cs(n, o));
        var i = cs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var _p = qe && 'documentMode' in document && 11 >= document.documentMode,
  Jt = null,
  ri = null,
  Qn = null,
  li = !1;
function ds(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li ||
    Jt == null ||
    Jt !== ul(r) ||
    ((r = Jt),
    'selectionStart' in r && tu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Qn && rr(Qn, r)) ||
      ((Qn = r),
      (r = ml(ri, 'onSelect')),
      0 < r.length &&
        ((t = new qi('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Jt))));
}
function zr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var qt = {
    animationend: zr('Animation', 'AnimationEnd'),
    animationiteration: zr('Animation', 'AnimationIteration'),
    animationstart: zr('Animation', 'AnimationStart'),
    transitionend: zr('Transition', 'TransitionEnd'),
  },
  go = {},
  dc = {};
qe &&
  ((dc = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete qt.animationend.animation,
    delete qt.animationiteration.animation,
    delete qt.animationstart.animation),
  'TransitionEvent' in window || delete qt.transitionend.transition);
function zl(e) {
  if (go[e]) return go[e];
  if (!qt[e]) return e;
  var t = qt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dc) return (go[e] = t[n]);
  return e;
}
var fc = zl('animationend'),
  pc = zl('animationiteration'),
  mc = zl('animationstart'),
  hc = zl('transitionend'),
  vc = new Map(),
  fs =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function jt(e, t) {
  vc.set(e, t), Ht(t, [e]);
}
for (var yo = 0; yo < fs.length; yo++) {
  var xo = fs[yo],
    Ip = xo.toLowerCase(),
    Lp = xo[0].toUpperCase() + xo.slice(1);
  jt(Ip, 'on' + Lp);
}
jt(fc, 'onAnimationEnd');
jt(pc, 'onAnimationIteration');
jt(mc, 'onAnimationStart');
jt('dblclick', 'onDoubleClick');
jt('focusin', 'onFocus');
jt('focusout', 'onBlur');
jt(hc, 'onTransitionEnd');
pn('onMouseEnter', ['mouseout', 'mouseover']);
pn('onMouseLeave', ['mouseout', 'mouseover']);
pn('onPointerEnter', ['pointerout', 'pointerover']);
pn('onPointerLeave', ['pointerout', 'pointerover']);
Ht(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
Ht(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
Ht('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ht(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ht(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ht(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var An =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Tp = new Set('cancel close invalid load scroll toggle'.split(' ').concat(An));
function ps(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), If(r, t, void 0, e), (e.currentTarget = null);
}
function gc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ps(l, u, a), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ps(l, u, a), (o = s);
        }
    }
  }
  if (al) throw ((e = bo), (al = !1), (bo = null), e);
}
function z(e, t) {
  var n = t[ai];
  n === void 0 && (n = t[ai] = new Set());
  var r = e + '__bubble';
  n.has(r) || (yc(t, e, 2, !1), n.add(r));
}
function wo(e, t, n) {
  var r = 0;
  t && (r |= 4), yc(n, e, r, t);
}
var Dr = '_reactListening' + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Dr]) {
    (e[Dr] = !0),
      ja.forEach(function (n) {
        n !== 'selectionchange' && (Tp.has(n) || wo(n, !1, e), wo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Dr] || ((t[Dr] = !0), wo('selectionchange', !1, t));
  }
}
function yc(e, t, n, r) {
  switch (tc(t)) {
    case 1:
      var l = Qf;
      break;
    case 4:
      l = Kf;
      break;
    default:
      l = Zi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !qo ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function So(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Rt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Ba(function () {
    var a = o,
      p = Ki(n),
      f = [];
    e: {
      var h = vc.get(e);
      if (h !== void 0) {
        var x = qi,
          w = e;
        switch (e) {
          case 'keypress':
            if (br(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            x = up;
            break;
          case 'focusin':
            (w = 'focus'), (x = mo);
            break;
          case 'focusout':
            (w = 'blur'), (x = mo);
            break;
          case 'beforeblur':
          case 'afterblur':
            x = mo;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            x = ts;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            x = Xf;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            x = cp;
            break;
          case fc:
          case pc:
          case mc:
            x = qf;
            break;
          case hc:
            x = fp;
            break;
          case 'scroll':
            x = Yf;
            break;
          case 'wheel':
            x = mp;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            x = ep;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            x = rs;
        }
        var y = (t & 4) !== 0,
          C = !y && e === 'scroll',
          m = y ? (h !== null ? h + 'Capture' : null) : h;
        y = [];
        for (var c = a, v; c !== null; ) {
          v = c;
          var S = v.stateNode;
          if (
            (v.tag === 5 &&
              S !== null &&
              ((v = S),
              m !== null && ((S = qn(c, m)), S != null && y.push(or(c, S, v)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < y.length &&
          ((h = new x(h, w, null, n, p)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === 'mouseover' || e === 'pointerover'),
          (x = e === 'mouseout' || e === 'pointerout'),
          h &&
            n !== Zo &&
            (w = n.relatedTarget || n.fromElement) &&
            (Rt(w) || w[be]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = a),
              (w = w ? Rt(w) : null),
              w !== null &&
                ((C = Qt(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = a)),
          x !== w)
        ) {
          if (
            ((y = ts),
            (S = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = rs),
              (S = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (c = 'pointer')),
            (C = x == null ? h : bt(x)),
            (v = w == null ? h : bt(w)),
            (h = new y(S, c + 'leave', x, n, p)),
            (h.target = C),
            (h.relatedTarget = v),
            (S = null),
            Rt(p) === a &&
              ((y = new y(m, c + 'enter', w, n, p)),
              (y.target = v),
              (y.relatedTarget = C),
              (S = y)),
            (C = S),
            x && w)
          )
            t: {
              for (y = x, m = w, c = 0, v = y; v; v = Yt(v)) c++;
              for (v = 0, S = m; S; S = Yt(S)) v++;
              for (; 0 < c - v; ) (y = Yt(y)), c--;
              for (; 0 < v - c; ) (m = Yt(m)), v--;
              for (; c--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Yt(y)), (m = Yt(m));
              }
              y = null;
            }
          else y = null;
          x !== null && ms(f, h, x, y, !1),
            w !== null && C !== null && ms(f, C, w, y, !0);
        }
      }
      e: {
        if (
          ((h = a ? bt(a) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === 'select' || (x === 'input' && h.type === 'file'))
        )
          var k = Sp;
        else if (is(h))
          if (uc) k = jp;
          else {
            k = Ep;
            var j = kp;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (k = Cp);
        if (k && (k = k(e, a))) {
          ic(f, k, n, p);
          break e;
        }
        j && j(e, h, a),
          e === 'focusout' &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === 'number' &&
            Qo(h, 'number', h.value);
      }
      switch (((j = a ? bt(a) : window), e)) {
        case 'focusin':
          (is(j) || j.contentEditable === 'true') &&
            ((Jt = j), (ri = a), (Qn = null));
          break;
        case 'focusout':
          Qn = ri = Jt = null;
          break;
        case 'mousedown':
          li = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (li = !1), ds(f, n, p);
          break;
        case 'selectionchange':
          if (_p) break;
        case 'keydown':
        case 'keyup':
          ds(f, n, p);
      }
      var _;
      if (eu)
        e: {
          switch (e) {
            case 'compositionstart':
              var I = 'onCompositionStart';
              break e;
            case 'compositionend':
              I = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              I = 'onCompositionUpdate';
              break e;
          }
          I = void 0;
        }
      else
        Zt
          ? lc(e, n) && (I = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (I = 'onCompositionStart');
      I &&
        (rc &&
          n.locale !== 'ko' &&
          (Zt || I !== 'onCompositionStart'
            ? I === 'onCompositionEnd' && Zt && (_ = nc())
            : ((at = p),
              (Ji = 'value' in at ? at.value : at.textContent),
              (Zt = !0))),
        (j = ml(a, I)),
        0 < j.length &&
          ((I = new ns(I, e, null, n, p)),
          f.push({ event: I, listeners: j }),
          _ ? (I.data = _) : ((_ = oc(n)), _ !== null && (I.data = _)))),
        (_ = vp ? gp(e, n) : yp(e, n)) &&
          ((a = ml(a, 'onBeforeInput')),
          0 < a.length &&
            ((p = new ns('onBeforeInput', 'beforeinput', null, n, p)),
            f.push({ event: p, listeners: a }),
            (p.data = _)));
    }
    gc(f, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ml(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = qn(e, n)),
      o != null && r.unshift(or(e, o, l)),
      (o = qn(e, t)),
      o != null && r.push(or(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ms(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = qn(n, o)), s != null && i.unshift(or(n, s, u)))
        : l || ((s = qn(n, o)), s != null && i.push(or(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Rp = /\r\n?/g,
  Op = /\u0000|\uFFFD/g;
function hs(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Rp,
      `
`
    )
    .replace(Op, '');
}
function Ur(e, t, n) {
  if (((t = hs(t)), hs(e) !== t && n)) throw Error(E(425));
}
function hl() {}
var oi = null,
  ii = null;
function ui(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var si = typeof setTimeout == 'function' ? setTimeout : void 0,
  Fp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  vs = typeof Promise == 'function' ? Promise : void 0,
  Mp =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof vs < 'u'
      ? function (e) {
          return vs.resolve(null).then(e).catch($p);
        }
      : si;
function $p(e) {
  setTimeout(function () {
    throw e;
  });
}
function ko(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), tr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  tr(t);
}
function ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function gs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var En = Math.random().toString(36).slice(2),
  He = '__reactFiber$' + En,
  ir = '__reactProps$' + En,
  be = '__reactContainer$' + En,
  ai = '__reactEvents$' + En,
  zp = '__reactListeners$' + En,
  Dp = '__reactHandles$' + En;
function Rt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[be] || n[He])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gs(e); e !== null; ) {
          if ((n = e[He])) return n;
          e = gs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function wr(e) {
  return (
    (e = e[He] || e[be]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Dl(e) {
  return e[ir] || null;
}
var ci = [],
  en = -1;
function Nt(e) {
  return { current: e };
}
function D(e) {
  0 > en || ((e.current = ci[en]), (ci[en] = null), en--);
}
function $(e, t) {
  en++, (ci[en] = e.current), (e.current = t);
}
var Ct = {},
  se = Nt(Ct),
  ve = Nt(!1),
  Ut = Ct;
function mn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ge(e) {
  return (e = e.childContextTypes), e != null;
}
function vl() {
  D(ve), D(se);
}
function ys(e, t, n) {
  if (se.current !== Ct) throw Error(E(168));
  $(se, t), $(ve, n);
}
function xc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, kf(e) || 'Unknown', l));
  return V({}, n, r);
}
function gl(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    (Ut = se.current),
    $(se, e),
    $(ve, ve.current),
    !0
  );
}
function xs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = xc(e, t, Ut)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(ve),
      D(se),
      $(se, e))
    : D(ve),
    $(ve, n);
}
var Ge = null,
  Ul = !1,
  Eo = !1;
function wc(e) {
  Ge === null ? (Ge = [e]) : Ge.push(e);
}
function Up(e) {
  (Ul = !0), wc(e);
}
function Pt() {
  if (!Eo && Ge !== null) {
    Eo = !0;
    var e = 0,
      t = M;
    try {
      var n = Ge;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ge = null), (Ul = !1);
    } catch (l) {
      throw (Ge !== null && (Ge = Ge.slice(e + 1)), Qa(Yi, Pt), l);
    } finally {
      (M = t), (Eo = !1);
    }
  }
  return null;
}
var tn = [],
  nn = 0,
  yl = null,
  xl = 0,
  je = [],
  Ne = 0,
  At = null,
  Xe = 1,
  Ze = '';
function Lt(e, t) {
  (tn[nn++] = xl), (tn[nn++] = yl), (yl = e), (xl = t);
}
function Sc(e, t, n) {
  (je[Ne++] = Xe), (je[Ne++] = Ze), (je[Ne++] = At), (At = e);
  var r = Xe;
  e = Ze;
  var l = 32 - ze(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ze(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Xe = (1 << (32 - ze(t) + l)) | (n << l) | r),
      (Ze = o + e);
  } else (Xe = (1 << o) | (n << l) | r), (Ze = e);
}
function nu(e) {
  e.return !== null && (Lt(e, 1), Sc(e, 1, 0));
}
function ru(e) {
  for (; e === yl; )
    (yl = tn[--nn]), (tn[nn] = null), (xl = tn[--nn]), (tn[nn] = null);
  for (; e === At; )
    (At = je[--Ne]),
      (je[Ne] = null),
      (Ze = je[--Ne]),
      (je[Ne] = null),
      (Xe = je[--Ne]),
      (je[Ne] = null);
}
var Se = null,
  we = null,
  U = !1,
  Me = null;
function kc(e, t) {
  var n = Pe(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ws(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Se = e), (we = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = At !== null ? { id: Xe, overflow: Ze } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Se = e),
            (we = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function di(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function fi(e) {
  if (U) {
    var t = we;
    if (t) {
      var n = t;
      if (!ws(e, t)) {
        if (di(e)) throw Error(E(418));
        t = ht(n.nextSibling);
        var r = Se;
        t && ws(e, t)
          ? kc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e));
      }
    } else {
      if (di(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (Se = e);
    }
  }
}
function Ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Se = e;
}
function Ar(e) {
  if (e !== Se) return !1;
  if (!U) return Ss(e), (U = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ui(e.type, e.memoizedProps))),
    t && (t = we))
  ) {
    if (di(e)) throw (Ec(), Error(E(418)));
    for (; t; ) kc(e, t), (t = ht(t.nextSibling));
  }
  if ((Ss(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              we = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Se ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Ec() {
  for (var e = we; e; ) e = ht(e.nextSibling);
}
function hn() {
  (we = Se = null), (U = !1);
}
function lu(e) {
  Me === null ? (Me = [e]) : Me.push(e);
}
var Ap = nt.ReactCurrentBatchConfig;
function Oe(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var wl = Nt(null),
  Sl = null,
  rn = null,
  ou = null;
function iu() {
  ou = rn = Sl = null;
}
function uu(e) {
  var t = wl.current;
  D(wl), (e._currentValue = t);
}
function pi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function dn(e, t) {
  (Sl = e),
    (ou = rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (ou !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), rn === null)) {
      if (Sl === null) throw Error(E(308));
      (rn = e), (Sl.dependencies = { lanes: 0, firstContext: e });
    } else rn = rn.next = e;
  return t;
}
var Ot = null;
function su(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function Cc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), su(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    et(e, r)
  );
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function au(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function jc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Je(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      et(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), su(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    et(e, n)
  );
}
function el(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
function ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = a) : (u.next = a),
        (p.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = l.baseState;
    (i = 0), (p = a = s = null), (u = o);
    do {
      var h = u.lane,
        x = u.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: x,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((h = t), (x = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == 'function')) {
                f = w.call(x, f, h);
                break e;
              }
              f = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (h = typeof w == 'function' ? w.call(x, f, h) : w),
                h == null)
              )
                break e;
              f = V({}, f, h);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [u]) : h.push(u));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((a = p = x), (s = f)) : (p = p.next = x),
          (i |= h);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (h = u),
          (u = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (s = f),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Vt |= i), (e.lanes = i), (e.memoizedState = f);
  }
}
function Es(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(E(191, l));
        l.call(r);
      }
    }
}
var Nc = new Ca.Component().refs;
function mi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = yt(e),
      o = Je(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (De(t, e, l, r), el(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ce(),
      l = yt(e),
      o = Je(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (De(t, e, l, r), el(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ce(),
      r = yt(e),
      l = Je(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (De(t, e, r, n), el(t, e, r));
  },
};
function Cs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !rr(n, r) || !rr(l, o)
      : !0
  );
}
function Pc(e, t, n) {
  var r = !1,
    l = Ct,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = Ie(o))
      : ((l = ge(t) ? Ut : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? mn(e, l) : Ct)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Al.enqueueReplaceState(t, t.state, null);
}
function hi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Nc), au(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = Ie(o))
    : ((o = ge(t) ? Ut : se.current), (l.context = mn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (mi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Al.enqueueReplaceState(l, l.state, null),
      kl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function On(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Nc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Br(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function Ns(e) {
  var t = e._init;
  return t(e._payload);
}
function _c(e) {
  function t(m, c) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [c]), (m.flags |= 16)) : v.push(c);
    }
  }
  function n(m, c) {
    if (!e) return null;
    for (; c !== null; ) t(m, c), (c = c.sibling);
    return null;
  }
  function r(m, c) {
    for (m = new Map(); c !== null; )
      c.key !== null ? m.set(c.key, c) : m.set(c.index, c), (c = c.sibling);
    return m;
  }
  function l(m, c) {
    return (m = xt(m, c)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, c, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < c ? ((m.flags |= 2), c) : v)
            : ((m.flags |= 2), c))
        : ((m.flags |= 1048576), c)
    );
  }
  function i(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, c, v, S) {
    return c === null || c.tag !== 6
      ? ((c = Lo(v, m.mode, S)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function s(m, c, v, S) {
    var k = v.type;
    return k === Xt
      ? p(m, c, v.props.children, S, v.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === ot &&
            Ns(k) === c.type))
      ? ((S = l(c, v.props)), (S.ref = On(m, c, v)), (S.return = m), S)
      : ((S = il(v.type, v.key, v.props, null, m.mode, S)),
        (S.ref = On(m, c, v)),
        (S.return = m),
        S);
  }
  function a(m, c, v, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== v.containerInfo ||
      c.stateNode.implementation !== v.implementation
      ? ((c = To(v, m.mode, S)), (c.return = m), c)
      : ((c = l(c, v.children || [])), (c.return = m), c);
  }
  function p(m, c, v, S, k) {
    return c === null || c.tag !== 7
      ? ((c = $t(v, m.mode, S, k)), (c.return = m), c)
      : ((c = l(c, v)), (c.return = m), c);
  }
  function f(m, c, v) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = Lo('' + c, m.mode, v)), (c.return = m), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case Lr:
          return (
            (v = il(c.type, c.key, c.props, null, m.mode, v)),
            (v.ref = On(m, null, c)),
            (v.return = m),
            v
          );
        case Gt:
          return (c = To(c, m.mode, v)), (c.return = m), c;
        case ot:
          var S = c._init;
          return f(m, S(c._payload), v);
      }
      if (Dn(c) || _n(c))
        return (c = $t(c, m.mode, v, null)), (c.return = m), c;
      Br(m, c);
    }
    return null;
  }
  function h(m, c, v, S) {
    var k = c !== null ? c.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return k !== null ? null : u(m, c, '' + v, S);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Lr:
          return v.key === k ? s(m, c, v, S) : null;
        case Gt:
          return v.key === k ? a(m, c, v, S) : null;
        case ot:
          return (k = v._init), h(m, c, k(v._payload), S);
      }
      if (Dn(v) || _n(v)) return k !== null ? null : p(m, c, v, S, null);
      Br(m, v);
    }
    return null;
  }
  function x(m, c, v, S, k) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number')
      return (m = m.get(v) || null), u(c, m, '' + S, k);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Lr:
          return (m = m.get(S.key === null ? v : S.key) || null), s(c, m, S, k);
        case Gt:
          return (m = m.get(S.key === null ? v : S.key) || null), a(c, m, S, k);
        case ot:
          var j = S._init;
          return x(m, c, v, j(S._payload), k);
      }
      if (Dn(S) || _n(S)) return (m = m.get(v) || null), p(c, m, S, k, null);
      Br(c, S);
    }
    return null;
  }
  function w(m, c, v, S) {
    for (
      var k = null, j = null, _ = c, I = (c = 0), H = null;
      _ !== null && I < v.length;
      I++
    ) {
      _.index > I ? ((H = _), (_ = null)) : (H = _.sibling);
      var O = h(m, _, v[I], S);
      if (O === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && O.alternate === null && t(m, _),
        (c = o(O, c, I)),
        j === null ? (k = O) : (j.sibling = O),
        (j = O),
        (_ = H);
    }
    if (I === v.length) return n(m, _), U && Lt(m, I), k;
    if (_ === null) {
      for (; I < v.length; I++)
        (_ = f(m, v[I], S)),
          _ !== null &&
            ((c = o(_, c, I)), j === null ? (k = _) : (j.sibling = _), (j = _));
      return U && Lt(m, I), k;
    }
    for (_ = r(m, _); I < v.length; I++)
      (H = x(_, m, I, v[I], S)),
        H !== null &&
          (e && H.alternate !== null && _.delete(H.key === null ? I : H.key),
          (c = o(H, c, I)),
          j === null ? (k = H) : (j.sibling = H),
          (j = H));
    return (
      e &&
        _.forEach(function (Te) {
          return t(m, Te);
        }),
      U && Lt(m, I),
      k
    );
  }
  function y(m, c, v, S) {
    var k = _n(v);
    if (typeof k != 'function') throw Error(E(150));
    if (((v = k.call(v)), v == null)) throw Error(E(151));
    for (
      var j = (k = null), _ = c, I = (c = 0), H = null, O = v.next();
      _ !== null && !O.done;
      I++, O = v.next()
    ) {
      _.index > I ? ((H = _), (_ = null)) : (H = _.sibling);
      var Te = h(m, _, O.value, S);
      if (Te === null) {
        _ === null && (_ = H);
        break;
      }
      e && _ && Te.alternate === null && t(m, _),
        (c = o(Te, c, I)),
        j === null ? (k = Te) : (j.sibling = Te),
        (j = Te),
        (_ = H);
    }
    if (O.done) return n(m, _), U && Lt(m, I), k;
    if (_ === null) {
      for (; !O.done; I++, O = v.next())
        (O = f(m, O.value, S)),
          O !== null &&
            ((c = o(O, c, I)), j === null ? (k = O) : (j.sibling = O), (j = O));
      return U && Lt(m, I), k;
    }
    for (_ = r(m, _); !O.done; I++, O = v.next())
      (O = x(_, m, I, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? I : O.key),
          (c = o(O, c, I)),
          j === null ? (k = O) : (j.sibling = O),
          (j = O));
    return (
      e &&
        _.forEach(function (Nn) {
          return t(m, Nn);
        }),
      U && Lt(m, I),
      k
    );
  }
  function C(m, c, v, S) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Xt &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Lr:
          e: {
            for (var k = v.key, j = c; j !== null; ) {
              if (j.key === k) {
                if (((k = v.type), k === Xt)) {
                  if (j.tag === 7) {
                    n(m, j.sibling),
                      (c = l(j, v.props.children)),
                      (c.return = m),
                      (m = c);
                    break e;
                  }
                } else if (
                  j.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === ot &&
                    Ns(k) === j.type)
                ) {
                  n(m, j.sibling),
                    (c = l(j, v.props)),
                    (c.ref = On(m, j, v)),
                    (c.return = m),
                    (m = c);
                  break e;
                }
                n(m, j);
                break;
              } else t(m, j);
              j = j.sibling;
            }
            v.type === Xt
              ? ((c = $t(v.props.children, m.mode, S, v.key)),
                (c.return = m),
                (m = c))
              : ((S = il(v.type, v.key, v.props, null, m.mode, S)),
                (S.ref = On(m, c, v)),
                (S.return = m),
                (m = S));
          }
          return i(m);
        case Gt:
          e: {
            for (j = v.key; c !== null; ) {
              if (c.key === j)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === v.containerInfo &&
                  c.stateNode.implementation === v.implementation
                ) {
                  n(m, c.sibling),
                    (c = l(c, v.children || [])),
                    (c.return = m),
                    (m = c);
                  break e;
                } else {
                  n(m, c);
                  break;
                }
              else t(m, c);
              c = c.sibling;
            }
            (c = To(v, m.mode, S)), (c.return = m), (m = c);
          }
          return i(m);
        case ot:
          return (j = v._init), C(m, c, j(v._payload), S);
      }
      if (Dn(v)) return w(m, c, v, S);
      if (_n(v)) return y(m, c, v, S);
      Br(m, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        c !== null && c.tag === 6
          ? (n(m, c.sibling), (c = l(c, v)), (c.return = m), (m = c))
          : (n(m, c), (c = Lo(v, m.mode, S)), (c.return = m), (m = c)),
        i(m))
      : n(m, c);
  }
  return C;
}
var vn = _c(!0),
  Ic = _c(!1),
  Sr = {},
  Ke = Nt(Sr),
  ur = Nt(Sr),
  sr = Nt(Sr);
function Ft(e) {
  if (e === Sr) throw Error(E(174));
  return e;
}
function cu(e, t) {
  switch (($(sr, t), $(ur, e), $(Ke, Sr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Yo(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Yo(t, e));
  }
  D(Ke), $(Ke, t);
}
function gn() {
  D(Ke), D(ur), D(sr);
}
function Lc(e) {
  Ft(sr.current);
  var t = Ft(Ke.current),
    n = Yo(t, e.type);
  t !== n && ($(ur, e), $(Ke, n));
}
function du(e) {
  ur.current === e && (D(Ke), D(ur));
}
var A = Nt(0);
function El(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Co = [];
function fu() {
  for (var e = 0; e < Co.length; e++)
    Co[e]._workInProgressVersionPrimary = null;
  Co.length = 0;
}
var tl = nt.ReactCurrentDispatcher,
  jo = nt.ReactCurrentBatchConfig,
  Bt = 0,
  B = null,
  X = null,
  q = null,
  Cl = !1,
  Kn = !1,
  ar = 0,
  Bp = 0;
function le() {
  throw Error(E(321));
}
function pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function mu(e, t, n, r, l, o) {
  if (
    ((Bt = o),
    (B = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (tl.current = e === null || e.memoizedState === null ? Qp : Kp),
    (e = n(r, l)),
    Kn)
  ) {
    o = 0;
    do {
      if (((Kn = !1), (ar = 0), 25 <= o)) throw Error(E(301));
      (o += 1),
        (q = X = null),
        (t.updateQueue = null),
        (tl.current = Yp),
        (e = n(r, l));
    } while (Kn);
  }
  if (
    ((tl.current = jl),
    (t = X !== null && X.next !== null),
    (Bt = 0),
    (q = X = B = null),
    (Cl = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function hu() {
  var e = ar !== 0;
  return (ar = 0), e;
}
function Ve() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return q === null ? (B.memoizedState = q = e) : (q = q.next = e), q;
}
function Le() {
  if (X === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? B.memoizedState : q.next;
  if (t !== null) (q = t), (X = e);
  else {
    if (e === null) throw Error(E(310));
    (X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      q === null ? (B.memoizedState = q = e) : (q = q.next = e);
  }
  return q;
}
function cr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function No(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      a = o;
    do {
      var p = a.lane;
      if ((Bt & p) === p)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: p,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = f), (i = r)) : (s = s.next = f),
          (B.lanes |= p),
          (Vt |= p);
      }
      a = a.next;
    } while (a !== null && a !== o);
    s === null ? (i = r) : (s.next = u),
      Ae(r, t.memoizedState) || (he = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (B.lanes |= o), (Vt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Po(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Ae(o, t.memoizedState) || (he = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Tc() {}
function Rc(e, t) {
  var n = B,
    r = Le(),
    l = t(),
    o = !Ae(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (he = !0)),
    (r = r.queue),
    vu(Mc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (q !== null && q.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      dr(9, Fc.bind(null, n, r, l, t), void 0, null),
      b === null)
    )
      throw Error(E(349));
    Bt & 30 || Oc(n, t, l);
  }
  return l;
}
function Oc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $c(t) && zc(e);
}
function Mc(e, t, n) {
  return n(function () {
    $c(t) && zc(e);
  });
}
function $c(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function zc(e) {
  var t = et(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Ps(e) {
  var t = Ve();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: cr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Hp.bind(null, B, e)),
    [t.memoizedState, e]
  );
}
function dr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = B.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (B.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Dc() {
  return Le().memoizedState;
}
function nl(e, t, n, r) {
  var l = Ve();
  (B.flags |= e),
    (l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Bl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && pu(r, i.deps))) {
      l.memoizedState = dr(t, n, o, r);
      return;
    }
  }
  (B.flags |= e), (l.memoizedState = dr(1 | t, n, o, r));
}
function _s(e, t) {
  return nl(8390656, 8, e, t);
}
function vu(e, t) {
  return Bl(2048, 8, e, t);
}
function Uc(e, t) {
  return Bl(4, 2, e, t);
}
function Ac(e, t) {
  return Bl(4, 4, e, t);
}
function Bc(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Vc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Bl(4, 4, Bc.bind(null, t, e), n)
  );
}
function gu() {}
function Wc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qc(e, t, n) {
  return Bt & 21
    ? (Ae(n, t) || ((n = Ga()), (B.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (he = !0)), (e.memoizedState = n));
}
function Vp(e, t) {
  var n = M;
  (M = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jo.transition;
  jo.transition = {};
  try {
    e(!1), t();
  } finally {
    (M = n), (jo.transition = r);
  }
}
function Kc() {
  return Le().memoizedState;
}
function Wp(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yc(e))
  )
    Gc(t, n);
  else if (((n = Cc(e, t, n, r)), n !== null)) {
    var l = ce();
    De(n, e, r, l), Xc(n, t, r);
  }
}
function Hp(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yc(e)) Gc(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Ae(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), su(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Cc(e, t, l, r)),
      n !== null && ((l = ce()), De(n, e, r, l), Xc(n, t, r));
  }
}
function Yc(e) {
  var t = e.alternate;
  return e === B || (t !== null && t === B);
}
function Gc(e, t) {
  Kn = Cl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Gi(e, n);
  }
}
var jl = {
    readContext: Ie,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Qp = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (Ve().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: _s,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        nl(4194308, 4, Bc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return nl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return nl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ve();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ve();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Wp.bind(null, B, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ve();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ps,
    useDebugValue: gu,
    useDeferredValue: function (e) {
      return (Ve().memoizedState = e);
    },
    useTransition: function () {
      var e = Ps(!1),
        t = e[0];
      return (e = Vp.bind(null, e[1])), (Ve().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = B,
        l = Ve();
      if (U) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), b === null)) throw Error(E(349));
        Bt & 30 || Oc(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        _s(Mc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        dr(9, Fc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ve(),
        t = b.identifierPrefix;
      if (U) {
        var n = Ze,
          r = Xe;
        (n = (r & ~(1 << (32 - ze(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ar++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Bp++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Kp = {
    readContext: Ie,
    useCallback: Wc,
    useContext: Ie,
    useEffect: vu,
    useImperativeHandle: Vc,
    useInsertionEffect: Uc,
    useLayoutEffect: Ac,
    useMemo: Hc,
    useReducer: No,
    useRef: Dc,
    useState: function () {
      return No(cr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = Le();
      return Qc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = No(cr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Tc,
    useSyncExternalStore: Rc,
    useId: Kc,
    unstable_isNewReconciler: !1,
  },
  Yp = {
    readContext: Ie,
    useCallback: Wc,
    useContext: Ie,
    useEffect: vu,
    useImperativeHandle: Vc,
    useInsertionEffect: Uc,
    useLayoutEffect: Ac,
    useMemo: Hc,
    useReducer: Po,
    useRef: Dc,
    useState: function () {
      return Po(cr);
    },
    useDebugValue: gu,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : Qc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = Po(cr)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Tc,
    useSyncExternalStore: Rc,
    useId: Kc,
    unstable_isNewReconciler: !1,
  };
function yn(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Sf(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function _o(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gp = typeof WeakMap == 'function' ? WeakMap : Map;
function Zc(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Pl || ((Pl = !0), (Ni = r)), vi(e, t);
    }),
    n
  );
}
function Jc(e, t, n) {
  (n = Je(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        vi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        vi(e, t),
          typeof r != 'function' &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Is(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gp();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = sm.bind(null, e, t, n)), t.then(e, e));
}
function Ls(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ts(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Je(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Xp = nt.ReactCurrentOwner,
  he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ic(t, null, n, r) : vn(t, e.child, n, r);
}
function Rs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    dn(t, l),
    (r = mu(e, t, n, r, o, l)),
    (n = hu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (U && n && nu(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Os(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !ju(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qc(e, t, o, r, l))
      : ((e = il(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : rr), n(i, r) && e.ref === t.ref)
    )
      return tt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = xt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (rr(o, r) && e.ref === t.ref)
      if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (he = !0);
      else return (t.lanes = e.lanes), tt(e, t, l);
  }
  return gi(e, t, n, r, l);
}
function bc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(on, xe),
        (xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(on, xe),
          (xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        $(on, xe),
        (xe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(on, xe),
      (xe |= r);
  return ae(e, t, l, n), t.child;
}
function ed(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function gi(e, t, n, r, l) {
  var o = ge(n) ? Ut : se.current;
  return (
    (o = mn(t, o)),
    dn(t, l),
    (n = mu(e, t, n, r, o, l)),
    (r = hu()),
    e !== null && !he
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        tt(e, t, l))
      : (U && r && nu(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function Fs(e, t, n, r, l) {
  if (ge(n)) {
    var o = !0;
    gl(t);
  } else o = !1;
  if ((dn(t, l), t.stateNode === null))
    rl(e, t), Pc(t, n, r), hi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Ie(a))
      : ((a = ge(n) ? Ut : se.current), (a = mn(t, a)));
    var p = n.getDerivedStateFromProps,
      f =
        typeof p == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== r || s !== a) && js(t, i, r, a)),
      (it = !1);
    var h = t.memoizedState;
    (i.state = h),
      kl(t, r, i, l),
      (s = t.memoizedState),
      u !== r || h !== s || ve.current || it
        ? (typeof p == 'function' && (mi(t, n, p, r), (s = t.memoizedState)),
          (u = it || Cs(t, n, u, r, h, s, a))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = a),
          (r = u))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      jc(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Oe(t.type, u)),
      (i.props = a),
      (f = t.pendingProps),
      (h = i.context),
      (s = n.contextType),
      typeof s == 'object' && s !== null
        ? (s = Ie(s))
        : ((s = ge(n) ? Ut : se.current), (s = mn(t, s)));
    var x = n.getDerivedStateFromProps;
    (p =
      typeof x == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((u !== f || h !== s) && js(t, i, r, s)),
      (it = !1),
      (h = t.memoizedState),
      (i.state = h),
      kl(t, r, i, l);
    var w = t.memoizedState;
    u !== f || h !== w || ve.current || it
      ? (typeof x == 'function' && (mi(t, n, x, r), (w = t.memoizedState)),
        (a = it || Cs(t, n, a, r, h, w, s) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (u === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (u === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yi(e, t, n, r, o, l);
}
function yi(e, t, n, r, l, o) {
  ed(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && xs(t, n, !1), tt(e, t, o);
  (r = t.stateNode), (Xp.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = vn(t, e.child, null, o)), (t.child = vn(t, null, u, o)))
      : ae(e, t, u, o),
    (t.memoizedState = r.state),
    l && xs(t, n, !0),
    t.child
  );
}
function td(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ys(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ys(e, t.context, !1),
    cu(e, t.containerInfo);
}
function Ms(e, t, n, r, l) {
  return hn(), lu(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function nd(e, t, n) {
  var r = t.pendingProps,
    l = A.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    $(A, l & 1),
    e === null)
  )
    return (
      fi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Hl(i, r, 0, null)),
              (e = $t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = wi(n)),
              (t.memoizedState = xi),
              e)
            : yu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Zp(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = xt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = xt(u, o)) : ((o = $t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? wi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = xi),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = xt(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function yu(e, t) {
  return (
    (t = Hl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Vr(e, t, n, r) {
  return (
    r !== null && lu(r),
    vn(t, e.child, null, n),
    (e = yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Zp(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _o(Error(E(422)))), Vr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Hl({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = $t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && vn(t, e.child, null, i),
        (t.child.memoizedState = wi(i)),
        (t.memoizedState = xi),
        o);
  if (!(t.mode & 1)) return Vr(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(E(419))), (r = _o(o, r, void 0)), Vr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), he || u)) {
    if (((r = b), r !== null)) {
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
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), et(e, l), De(r, e, l, -1));
    }
    return Cu(), (r = _o(Error(E(421)))), Vr(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = am.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (we = ht(l.nextSibling)),
      (Se = t),
      (U = !0),
      (Me = null),
      e !== null &&
        ((je[Ne++] = Xe),
        (je[Ne++] = Ze),
        (je[Ne++] = At),
        (Xe = e.id),
        (Ze = e.overflow),
        (At = t)),
      (t = yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function $s(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), pi(e.return, t, n);
}
function Io(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function rd(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = A.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $s(e, n, t);
        else if (e.tag === 19) $s(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(A, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && El(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Io(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && El(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Io(t, !0, n, null, o);
        break;
      case 'together':
        Io(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function rl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jp(e, t, n) {
  switch (t.tag) {
    case 3:
      td(t), hn();
      break;
    case 5:
      Lc(t);
      break;
    case 1:
      ge(t.type) && gl(t);
      break;
    case 4:
      cu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      $(wl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(A, A.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? nd(e, t, n)
          : ($(A, A.current & 1),
            (e = tt(e, t, n)),
            e !== null ? e.sibling : null);
      $(A, A.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return rd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        $(A, A.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), bc(e, t, n);
  }
  return tt(e, t, n);
}
var ld, Si, od, id;
ld = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Si = function () {};
od = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Ft(Ke.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = Wo(e, l)), (r = Wo(e, r)), (o = []);
        break;
      case 'select':
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (o = []);
        break;
      case 'textarea':
        (l = Ko(e, l)), (r = Ko(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hl);
    }
    Go(n, r);
    var i;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === 'style') {
          var u = l[a];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Zn.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === 'style')
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(a, n)), (n = s);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(a, s))
            : a === 'children'
            ? (typeof s != 'string' && typeof s != 'number') ||
              (o = o || []).push(a, '' + s)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Zn.hasOwnProperty(a)
                ? (s != null && a === 'onScroll' && z('scroll', e),
                  o || u === s || (o = []))
                : (o = o || []).push(a, s));
    }
    n && (o = o || []).push('style', n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
id = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Fn(e, t) {
  if (!U)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function qp(e, t, n) {
  var r = t.pendingProps;
  switch ((ru(t), t.tag)) {
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
      return oe(t), null;
    case 1:
      return ge(t.type) && vl(), oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        gn(),
        D(ve),
        D(se),
        fu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ar(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Me !== null && (Ii(Me), (Me = null)))),
        Si(e, t),
        oe(t),
        null
      );
    case 5:
      du(t);
      var l = Ft(sr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        od(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return oe(t), null;
        }
        if (((e = Ft(Ke.current)), Ar(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[He] = t), (r[ir] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              z('cancel', r), z('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              z('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < An.length; l++) z(An[l], r);
              break;
            case 'source':
              z('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              z('error', r), z('load', r);
              break;
            case 'details':
              z('toggle', r);
              break;
            case 'input':
              Qu(r, o), z('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                z('invalid', r);
              break;
            case 'textarea':
              Yu(r, o), z('invalid', r);
          }
          Go(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === 'children'
                ? typeof u == 'string'
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ['children', u]))
                  : typeof u == 'number' &&
                    r.textContent !== '' + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ur(r.textContent, u, e),
                    (l = ['children', '' + u]))
                : Zn.hasOwnProperty(i) &&
                  u != null &&
                  i === 'onScroll' &&
                  z('scroll', r);
            }
          switch (n) {
            case 'input':
              Tr(r), Ku(r, o, !0);
              break;
            case 'textarea':
              Tr(r), Gu(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = hl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Oa(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[He] = t),
            (e[ir] = r),
            ld(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Xo(n, r)), n)) {
              case 'dialog':
                z('cancel', e), z('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                z('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < An.length; l++) z(An[l], e);
                l = r;
                break;
              case 'source':
                z('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                z('error', e), z('load', e), (l = r);
                break;
              case 'details':
                z('toggle', e), (l = r);
                break;
              case 'input':
                Qu(e, r), (l = Wo(e, r)), z('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  z('invalid', e);
                break;
              case 'textarea':
                Yu(e, r), (l = Ko(e, r)), z('invalid', e);
                break;
              default:
                l = r;
            }
            Go(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === 'style'
                  ? $a(e, s)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((s = s ? s.__html : void 0), s != null && Fa(e, s))
                  : o === 'children'
                  ? typeof s == 'string'
                    ? (n !== 'textarea' || s !== '') && Jn(e, s)
                    : typeof s == 'number' && Jn(e, '' + s)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Zn.hasOwnProperty(o)
                      ? s != null && o === 'onScroll' && z('scroll', e)
                      : s != null && Vi(e, o, s, i));
              }
            switch (n) {
              case 'input':
                Tr(e), Ku(e, r, !1);
                break;
              case 'textarea':
                Tr(e), Gu(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Et(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? un(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = hl);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return oe(t), null;
    case 6:
      if (e && t.stateNode != null) id(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(E(166));
        if (((n = Ft(sr.current)), Ft(Ke.current), Ar(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[He] = t),
            (o = r.nodeValue !== n) && ((e = Se), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ur(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ur(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[He] = t),
            (t.stateNode = r);
      }
      return oe(t), null;
    case 13:
      if (
        (D(A),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && we !== null && t.mode & 1 && !(t.flags & 128))
          Ec(), hn(), (t.flags |= 98560), (o = !1);
        else if (((o = Ar(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(E(317));
            o[He] = t;
          } else
            hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          oe(t), (o = !1);
        } else Me !== null && (Ii(Me), (Me = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || A.current & 1 ? Z === 0 && (Z = 3) : Cu())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (
        gn(), Si(e, t), e === null && lr(t.stateNode.containerInfo), oe(t), null
      );
    case 10:
      return uu(t.type._context), oe(t), null;
    case 17:
      return ge(t.type) && vl(), oe(t), null;
    case 19:
      if ((D(A), (o = t.memoizedState), o === null)) return oe(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Fn(o, !1);
        else {
          if (Z !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = El(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Fn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(A, (A.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > xn &&
            ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = El(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Fn(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !U)
            )
              return oe(t), null;
          } else
            2 * K() - o.renderingStartTime > xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Fn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = A.current),
          $(A, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        Eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? xe & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function bp(e, t) {
  switch ((ru(t), t.tag)) {
    case 1:
      return (
        ge(t.type) && vl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        gn(),
        D(ve),
        D(se),
        fu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return du(t), null;
    case 13:
      if ((D(A), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(A), null;
    case 4:
      return gn(), null;
    case 10:
      return uu(t.type._context), null;
    case 22:
    case 23:
      return Eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wr = !1,
  ue = !1,
  em = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function ln(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function ki(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var zs = !1;
function tm(e, t) {
  if (((oi = fl), (e = cc()), tu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            a = 0,
            p = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              f !== n || (l !== 0 && f.nodeType !== 3) || (u = i + l),
                f !== o || (r !== 0 && f.nodeType !== 3) || (s = i + r),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (x = f.firstChild) !== null;

            )
              (h = f), (f = x);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++a === l && (u = i),
                h === o && ++p === r && (s = i),
                (x = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = x;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ii = { focusedElem: e, selectionRange: n }, fl = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    C = w.memoizedState,
                    m = t.stateNode,
                    c = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Oe(t.type, y),
                      C
                    );
                  m.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (S) {
          W(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = zs), (zs = !1), w;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && ki(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Vl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ei(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function ud(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ud(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[He], delete t[ir], delete t[ai], delete t[zp], delete t[Dp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function sd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
function ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ji(e, t, n), e = e.sibling; e !== null; ) ji(e, t, n), (e = e.sibling);
}
var ee = null,
  Fe = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) ad(e, t, n), (n = n.sibling);
}
function ad(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == 'function')
    try {
      Qe.onCommitFiberUnmount(Fl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ue || ln(n, t);
    case 6:
      var r = ee,
        l = Fe;
      (ee = null),
        lt(e, t, n),
        (ee = r),
        (Fe = l),
        ee !== null &&
          (Fe
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Fe
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? ko(e.parentNode, n)
              : e.nodeType === 1 && ko(e, n),
            tr(e))
          : ko(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Fe),
        (ee = n.stateNode.containerInfo),
        (Fe = !0),
        lt(e, t, n),
        (ee = r),
        (Fe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && ki(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !ue &&
        (ln(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          W(n, t, u);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ue = (r = ue) || n.memoizedState !== null), lt(e, t, n), (ue = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function Us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new em()),
      t.forEach(function (r) {
        var l = cm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ee = u.stateNode), (Fe = !1);
              break e;
            case 3:
              (ee = u.stateNode.containerInfo), (Fe = !0);
              break e;
            case 4:
              (ee = u.stateNode.containerInfo), (Fe = !0);
              break e;
          }
          u = u.return;
        }
        if (ee === null) throw Error(E(160));
        ad(o, i, l), (ee = null), (Fe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        W(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) cd(t, e), (t = t.sibling);
}
function cd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Re(t, e), Be(e), r & 4)) {
        try {
          Yn(3, e, e.return), Vl(3, e);
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Yn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      Re(t, e), Be(e), r & 512 && n !== null && ln(n, n.return);
      break;
    case 5:
      if (
        (Re(t, e),
        Be(e),
        r & 512 && n !== null && ln(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Jn(l, '');
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === 'input' && o.type === 'radio' && o.name != null && Ta(l, o),
              Xo(u, i);
            var a = Xo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var p = s[i],
                f = s[i + 1];
              p === 'style'
                ? $a(l, f)
                : p === 'dangerouslySetInnerHTML'
                ? Fa(l, f)
                : p === 'children'
                ? Jn(l, f)
                : Vi(l, p, f, a);
            }
            switch (u) {
              case 'input':
                Ho(l, o);
                break;
              case 'textarea':
                Ra(l, o);
                break;
              case 'select':
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var x = o.value;
                x != null
                  ? un(l, !!o.multiple, x, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? un(l, !!o.multiple, o.defaultValue, !0)
                      : un(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[ir] = o;
          } catch (y) {
            W(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Re(t, e), Be(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Re(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          tr(t.containerInfo);
        } catch (y) {
          W(e, e.return, y);
        }
      break;
    case 4:
      Re(t, e), Be(e);
      break;
    case 13:
      Re(t, e),
        Be(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Su = K())),
        r & 4 && Us(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ue = (a = ue) || p), Re(t, e), (ue = a)) : Re(t, e),
        Be(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !p && e.mode & 1)
        )
          for (N = e, p = e.child; p !== null; ) {
            for (f = N = p; N !== null; ) {
              switch (((h = N), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, h, h.return);
                  break;
                case 1:
                  ln(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      W(r, n, y);
                    }
                  }
                  break;
                case 5:
                  ln(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Bs(f);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (N = x)) : Bs(f);
            }
            p = p.sibling;
          }
        e: for (p = null, f = e; ; ) {
          if (f.tag === 5) {
            if (p === null) {
              p = f;
              try {
                (l = f.stateNode),
                  a
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((u = f.stateNode),
                      (s = f.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty('display')
                          ? s.display
                          : null),
                      (u.style.display = Ma('display', i)));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (p === null)
              try {
                f.stateNode.nodeValue = a ? '' : f.memoizedProps;
              } catch (y) {
                W(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            p === f && (p = null), (f = f.return);
          }
          p === f && (p = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Re(t, e), Be(e), r & 4 && Us(e);
      break;
    case 21:
      break;
    default:
      Re(t, e), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (sd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Jn(l, ''), (r.flags &= -33));
          var o = Ds(e);
          ji(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Ds(e);
          Ci(e, u, i);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      W(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function nm(e, t, n) {
  (N = e), dd(e);
}
function dd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || ue;
        u = Wr;
        var a = ue;
        if (((Wr = i), (ue = s) && !a))
          for (N = l; N !== null; )
            (i = N),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Vs(l)
                : s !== null
                ? ((s.return = i), (N = s))
                : Vs(l);
        for (; o !== null; ) (N = o), dd(o), (o = o.sibling);
        (N = l), (Wr = u), (ue = a);
      }
      As(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : As(e);
  }
}
function As(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ue || Vl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ue)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Oe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Es(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Es(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    s.autoFocus && n.focus();
                    break;
                  case 'img':
                    s.src && (n.src = s.src);
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
                var a = t.alternate;
                if (a !== null) {
                  var p = a.memoizedState;
                  if (p !== null) {
                    var f = p.dehydrated;
                    f !== null && tr(f);
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
              throw Error(E(163));
          }
        ue || (t.flags & 512 && Ei(t));
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Bs(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Vs(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vl(4, t);
          } catch (s) {
            W(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              W(t, l, s);
            }
          }
          var o = t.return;
          try {
            Ei(t);
          } catch (s) {
            W(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ei(t);
          } catch (s) {
            W(t, i, s);
          }
      }
    } catch (s) {
      W(t, t.return, s);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var rm = Math.ceil,
  Nl = nt.ReactCurrentDispatcher,
  xu = nt.ReactCurrentOwner,
  _e = nt.ReactCurrentBatchConfig,
  F = 0,
  b = null,
  Y = null,
  ne = 0,
  xe = 0,
  on = Nt(0),
  Z = 0,
  fr = null,
  Vt = 0,
  Wl = 0,
  wu = 0,
  Gn = null,
  pe = null,
  Su = 0,
  xn = 1 / 0,
  Ye = null,
  Pl = !1,
  Ni = null,
  gt = null,
  Hr = !1,
  ct = null,
  _l = 0,
  Xn = 0,
  Pi = null,
  ll = -1,
  ol = 0;
function ce() {
  return F & 6 ? K() : ll !== -1 ? ll : (ll = K());
}
function yt(e) {
  return e.mode & 1
    ? F & 2 && ne !== 0
      ? ne & -ne
      : Ap.transition !== null
      ? (ol === 0 && (ol = Ga()), ol)
      : ((e = M),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tc(e.type))),
        e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Xn) throw ((Xn = 0), (Pi = null), Error(E(185)));
  yr(e, n, r),
    (!(F & 2) || e !== b) &&
      (e === b && (!(F & 2) && (Wl |= n), Z === 4 && st(e, ne)),
      ye(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((xn = K() + 500), Ul && Pt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Af(e, t);
  var r = dl(e, e === b ? ne : 0);
  if (r === 0)
    n !== null && Ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ju(n), t === 1))
      e.tag === 0 ? Up(Ws.bind(null, e)) : wc(Ws.bind(null, e)),
        Mp(function () {
          !(F & 6) && Pt();
        }),
        (n = null);
    else {
      switch (Xa(r)) {
        case 1:
          n = Yi;
          break;
        case 4:
          n = Ka;
          break;
        case 16:
          n = cl;
          break;
        case 536870912:
          n = Ya;
          break;
        default:
          n = cl;
      }
      n = xd(n, fd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function fd(e, t) {
  if (((ll = -1), (ol = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = dl(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
  else {
    t = r;
    var l = F;
    F |= 2;
    var o = md();
    (b !== e || ne !== t) && ((Ye = null), (xn = K() + 500), Mt(e, t));
    do
      try {
        im();
        break;
      } catch (u) {
        pd(e, u);
      }
    while (1);
    iu(),
      (Nl.current = o),
      (F = l),
      Y !== null ? (t = 0) : ((b = null), (ne = 0), (t = Z));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ei(e)), l !== 0 && ((r = l), (t = _i(e, l)))), t === 1)
    )
      throw ((n = fr), Mt(e, 0), st(e, r), ye(e, K()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !lm(l) &&
          ((t = Il(e, r)),
          t === 2 && ((o = ei(e)), o !== 0 && ((r = o), (t = _i(e, o)))),
          t === 1))
      )
        throw ((n = fr), Mt(e, 0), st(e, r), ye(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Tt(e, pe, Ye);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = Su + 500 - K()), 10 < t))
          ) {
            if (dl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ce(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = si(Tt.bind(null, e, pe, Ye), t);
            break;
          }
          Tt(e, pe, Ye);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ze(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * rm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = si(Tt.bind(null, e, pe, Ye), r);
            break;
          }
          Tt(e, pe, Ye);
          break;
        case 5:
          Tt(e, pe, Ye);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function _i(e, t) {
  var n = Gn;
  return (
    e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256),
    (e = Il(e, t)),
    e !== 2 && ((t = pe), (pe = n), t !== null && Ii(t)),
    e
  );
}
function Ii(e) {
  pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function lm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ae(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function st(e, t) {
  for (
    t &= ~wu,
      t &= ~Wl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ze(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ws(e) {
  if (F & 6) throw Error(E(327));
  fn();
  var t = dl(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ei(e);
    r !== 0 && ((t = r), (n = _i(e, r)));
  }
  if (n === 1) throw ((n = fr), Mt(e, 0), st(e, t), ye(e, K()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Tt(e, pe, Ye),
    ye(e, K()),
    null
  );
}
function ku(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((xn = K() + 500), Ul && Pt());
  }
}
function Wt(e) {
  ct !== null && ct.tag === 0 && !(F & 6) && fn();
  var t = F;
  F |= 1;
  var n = _e.transition,
    r = M;
  try {
    if (((_e.transition = null), (M = 1), e)) return e();
  } finally {
    (M = r), (_e.transition = n), (F = t), !(F & 6) && Pt();
  }
}
function Eu() {
  (xe = on.current), D(on);
}
function Mt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fp(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((ru(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vl();
          break;
        case 3:
          gn(), D(ve), D(se), fu();
          break;
        case 5:
          du(r);
          break;
        case 4:
          gn();
          break;
        case 13:
          D(A);
          break;
        case 19:
          D(A);
          break;
        case 10:
          uu(r.type._context);
          break;
        case 22:
        case 23:
          Eu();
      }
      n = n.return;
    }
  if (
    ((b = e),
    (Y = e = xt(e.current, null)),
    (ne = xe = t),
    (Z = 0),
    (fr = null),
    (wu = Wl = Vt = 0),
    (pe = Gn = null),
    Ot !== null)
  ) {
    for (t = 0; t < Ot.length; t++)
      if (((n = Ot[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Ot = null;
  }
  return e;
}
function pd(e, t) {
  do {
    var n = Y;
    try {
      if ((iu(), (tl.current = jl), Cl)) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Cl = !1;
      }
      if (
        ((Bt = 0),
        (q = X = B = null),
        (Kn = !1),
        (ar = 0),
        (xu.current = null),
        n === null || n.return === null)
      ) {
        (Z = 1), (fr = t), (Y = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = ne),
          (u.flags |= 32768),
          s !== null && typeof s == 'object' && typeof s.then == 'function')
        ) {
          var a = s,
            p = u,
            f = p.tag;
          if (!(p.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var x = Ls(i);
          if (x !== null) {
            (x.flags &= -257),
              Ts(x, i, u, o, t),
              x.mode & 1 && Is(o, a, t),
              (t = x),
              (s = a);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(s), (t.updateQueue = y);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Is(o, a, t), Cu();
              break e;
            }
            s = Error(E(426));
          }
        } else if (U && u.mode & 1) {
          var C = Ls(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Ts(C, i, u, o, t),
              lu(yn(s, u));
            break e;
          }
        }
        (o = s = yn(s, u)),
          Z !== 4 && (Z = 2),
          Gn === null ? (Gn = [o]) : Gn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Zc(o, s, t);
              ks(o, m);
              break e;
            case 1:
              u = s;
              var c = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (gt === null || !gt.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Jc(o, u, t);
                ks(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      vd(n);
    } catch (k) {
      (t = k), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function md() {
  var e = Nl.current;
  return (Nl.current = jl), e === null ? jl : e;
}
function Cu() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4),
    b === null || (!(Vt & 268435455) && !(Wl & 268435455)) || st(b, ne);
}
function Il(e, t) {
  var n = F;
  F |= 2;
  var r = md();
  (b !== e || ne !== t) && ((Ye = null), Mt(e, t));
  do
    try {
      om();
      break;
    } catch (l) {
      pd(e, l);
    }
  while (1);
  if ((iu(), (F = n), (Nl.current = r), Y !== null)) throw Error(E(261));
  return (b = null), (ne = 0), Z;
}
function om() {
  for (; Y !== null; ) hd(Y);
}
function im() {
  for (; Y !== null && !Tf(); ) hd(Y);
}
function hd(e) {
  var t = yd(e.alternate, e, xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? vd(e) : (Y = t),
    (xu.current = null);
}
function vd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bp(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Z = 6), (Y = null);
        return;
      }
    } else if (((n = qp(n, t, xe)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Tt(e, t, n) {
  var r = M,
    l = _e.transition;
  try {
    (_e.transition = null), (M = 1), um(e, t, n, r);
  } finally {
    (_e.transition = l), (M = r);
  }
  return null;
}
function um(e, t, n, r) {
  do fn();
  while (ct !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Bf(e, o),
    e === b && ((Y = b = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Hr ||
      ((Hr = !0),
      xd(cl, function () {
        return fn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = _e.transition), (_e.transition = null);
    var i = M;
    M = 1;
    var u = F;
    (F |= 4),
      (xu.current = null),
      tm(e, n),
      cd(n, e),
      Pp(ii),
      (fl = !!oi),
      (ii = oi = null),
      (e.current = n),
      nm(n),
      Rf(),
      (F = u),
      (M = i),
      (_e.transition = o);
  } else e.current = n;
  if (
    (Hr && ((Hr = !1), (ct = e), (_l = l)),
    (o = e.pendingLanes),
    o === 0 && (gt = null),
    Mf(n.stateNode),
    ye(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Pl) throw ((Pl = !1), (e = Ni), (Ni = null), e);
  return (
    _l & 1 && e.tag !== 0 && fn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Pi ? Xn++ : ((Xn = 0), (Pi = e))) : (Xn = 0),
    Pt(),
    null
  );
}
function fn() {
  if (ct !== null) {
    var e = Xa(_l),
      t = _e.transition,
      n = M;
    try {
      if (((_e.transition = null), (M = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (_l = 0), F & 6)) throw Error(E(331));
        var l = F;
        for (F |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (N = a; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, p, o);
                  }
                  var f = p.child;
                  if (f !== null) (f.return = p), (N = f);
                  else
                    for (; N !== null; ) {
                      p = N;
                      var h = p.sibling,
                        x = p.return;
                      if ((ud(p), p === a)) {
                        N = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (N = h);
                        break;
                      }
                      N = x;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var C = y.sibling;
                    (y.sibling = null), (y = C);
                  } while (y !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yn(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (N = m);
                break e;
              }
              N = o.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          i = N;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (N = v);
          else
            e: for (i = c; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vl(9, u);
                  }
                } catch (k) {
                  W(u, u.return, k);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var S = u.sibling;
              if (S !== null) {
                (S.return = u.return), (N = S);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((F = l), Pt(), Qe && typeof Qe.onPostCommitFiberRoot == 'function')
        )
          try {
            Qe.onPostCommitFiberRoot(Fl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (M = n), (_e.transition = t);
    }
  }
  return !1;
}
function Hs(e, t, n) {
  (t = yn(n, t)),
    (t = Zc(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = ce()),
    e !== null && (yr(e, 1, t), ye(e, t));
}
function W(e, t, n) {
  if (e.tag === 3) Hs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (gt === null || !gt.has(r)))
        ) {
          (e = yn(n, e)),
            (e = Jc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = ce()),
            t !== null && (yr(t, 1, e), ye(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function sm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ce()),
    (e.pingedLanes |= e.suspendedLanes & n),
    b === e &&
      (ne & n) === n &&
      (Z === 4 || (Z === 3 && (ne & 130023424) === ne && 500 > K() - Su)
        ? Mt(e, 0)
        : (wu |= n)),
    ye(e, t);
}
function gd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Fr), (Fr <<= 1), !(Fr & 130023424) && (Fr = 4194304))
      : (t = 1));
  var n = ce();
  (e = et(e, t)), e !== null && (yr(e, t, n), ye(e, n));
}
function am(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), gd(e, n);
}
function cm(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), gd(e, n);
}
var yd;
yd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ve.current) he = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (he = !1), Jp(e, t, n);
      he = !!(e.flags & 131072);
    }
  else (he = !1), U && t.flags & 1048576 && Sc(t, xl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      rl(e, t), (e = t.pendingProps);
      var l = mn(t, se.current);
      dn(t, n), (l = mu(null, t, r, e, l, n));
      var o = hu();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ge(r) ? ((o = !0), gl(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            au(t),
            (l.updater = Al),
            (t.stateNode = l),
            (l._reactInternals = t),
            hi(t, r, e, n),
            (t = yi(null, t, r, !0, o, n)))
          : ((t.tag = 0), U && o && nu(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (rl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = fm(r)),
          (e = Oe(r, e)),
          l)
        ) {
          case 0:
            t = gi(null, t, r, e, n);
            break e;
          case 1:
            t = Fs(null, t, r, e, n);
            break e;
          case 11:
            t = Rs(null, t, r, e, n);
            break e;
          case 14:
            t = Os(null, t, r, Oe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        gi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        Fs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((td(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          jc(e, t),
          kl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = yn(Error(E(423)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = yn(Error(E(424)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else
            for (
              we = ht(t.stateNode.containerInfo.firstChild),
                Se = t,
                U = !0,
                Me = null,
                n = Ic(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((hn(), r === l)) {
            t = tt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Lc(t),
        e === null && fi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        ui(r, l) ? (i = null) : o !== null && ui(r, o) && (t.flags |= 32),
        ed(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && fi(t), null;
    case 13:
      return nd(e, t, n);
    case 4:
      return (
        cu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        Rs(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          $(wl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Ae(o.value, i)) {
            if (o.children === l.children && !ve.current) {
              t = tt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Je(-1, n & -n)), (s.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var p = a.pending;
                        p === null
                          ? (s.next = s)
                          : ((s.next = p.next), (p.next = s)),
                          (a.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      pi(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(E(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  pi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        dn(t, n),
        (l = Ie(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Oe(r, t.pendingProps)),
        (l = Oe(r.type, l)),
        Os(e, t, r, l, n)
      );
    case 15:
      return qc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Oe(r, l)),
        rl(e, t),
        (t.tag = 1),
        ge(r) ? ((e = !0), gl(t)) : (e = !1),
        dn(t, n),
        Pc(t, r, l),
        hi(t, r, l, n),
        yi(null, t, r, !0, e, n)
      );
    case 19:
      return rd(e, t, n);
    case 22:
      return bc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function xd(e, t) {
  return Qa(e, t);
}
function dm(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pe(e, t, n, r) {
  return new dm(e, t, n, r);
}
function ju(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function fm(e) {
  if (typeof e == 'function') return ju(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Hi)) return 11;
    if (e === Qi) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function il(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) ju(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Xt:
        return $t(n.children, l, o, t);
      case Wi:
        (i = 8), (l |= 8);
        break;
      case Uo:
        return (
          (e = Pe(12, n, t, l | 2)), (e.elementType = Uo), (e.lanes = o), e
        );
      case Ao:
        return (e = Pe(13, n, t, l)), (e.elementType = Ao), (e.lanes = o), e;
      case Bo:
        return (e = Pe(19, n, t, l)), (e.elementType = Bo), (e.lanes = o), e;
      case _a:
        return Hl(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Na:
              i = 10;
              break e;
            case Pa:
              i = 9;
              break e;
            case Hi:
              i = 11;
              break e;
            case Qi:
              i = 14;
              break e;
            case ot:
              (i = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Pe(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function $t(e, t, n, r) {
  return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function Hl(e, t, n, r) {
  return (
    (e = Pe(22, e, r, t)),
    (e.elementType = _a),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Lo(e, t, n) {
  return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function To(e, t, n) {
  return (
    (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function pm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = co(0)),
    (this.expirationTimes = co(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = co(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Nu(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new pm(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Pe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    au(o),
    e
  );
}
function mm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gt,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function wd(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ge(n)) return xc(e, n, t);
  }
  return t;
}
function Sd(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Nu(n, r, !0, e, l, o, i, u, s)),
    (e.context = wd(null)),
    (n = e.current),
    (r = ce()),
    (l = yt(n)),
    (o = Je(r, l)),
    (o.callback = t ?? null),
    vt(n, o, l),
    (e.current.lanes = l),
    yr(e, l, r),
    ye(e, r),
    e
  );
}
function Ql(e, t, n, r) {
  var l = t.current,
    o = ce(),
    i = yt(l);
  return (
    (n = wd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Je(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, i)),
    e !== null && (De(e, l, i, o), el(e, l, i)),
    i
  );
}
function Ll(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pu(e, t) {
  Qs(e, t), (e = e.alternate) && Qs(e, t);
}
function hm() {
  return null;
}
var kd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function _u(e) {
  this._internalRoot = e;
}
Kl.prototype.render = _u.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ql(e, t, null, null);
};
Kl.prototype.unmount = _u.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Wt(function () {
      Ql(null, e, null, null);
    }),
      (t[be] = null);
  }
};
function Kl(e) {
  this._internalRoot = e;
}
Kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && ec(e);
  }
};
function Iu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ks() {}
function vm(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var a = Ll(i);
        o.call(a);
      };
    }
    var i = Sd(t, r, e, 0, null, !1, !1, '', Ks);
    return (
      (e._reactRootContainer = i),
      (e[be] = i.current),
      lr(e.nodeType === 8 ? e.parentNode : e),
      Wt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var u = r;
    r = function () {
      var a = Ll(s);
      u.call(a);
    };
  }
  var s = Nu(e, 0, !1, null, null, !1, !1, '', Ks);
  return (
    (e._reactRootContainer = s),
    (e[be] = s.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    Wt(function () {
      Ql(t, s, n, r);
    }),
    s
  );
}
function Gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var u = l;
      l = function () {
        var s = Ll(i);
        u.call(s);
      };
    }
    Ql(t, i, e, l);
  } else i = vm(n, t, e, l, r);
  return Ll(i);
}
Za = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Un(t.pendingLanes);
        n !== 0 &&
          (Gi(t, n | 1), ye(t, K()), !(F & 6) && ((xn = K() + 500), Pt()));
      }
      break;
    case 13:
      Wt(function () {
        var r = et(e, 1);
        if (r !== null) {
          var l = ce();
          De(r, e, 1, l);
        }
      }),
        Pu(e, 1);
  }
};
Xi = function (e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ce();
      De(t, e, 134217728, n);
    }
    Pu(e, 134217728);
  }
};
Ja = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = et(e, t);
    if (n !== null) {
      var r = ce();
      De(n, e, t, r);
    }
    Pu(e, t);
  }
};
qa = function () {
  return M;
};
ba = function (e, t) {
  var n = M;
  try {
    return (M = e), t();
  } finally {
    M = n;
  }
};
Jo = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ho(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Dl(r);
            if (!l) throw Error(E(90));
            La(r), Ho(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Ra(e, n);
      break;
    case 'select':
      (t = n.value), t != null && un(e, !!n.multiple, t, !1);
  }
};
Ua = ku;
Aa = Wt;
var gm = { usingClientEntryPoint: !1, Events: [wr, bt, Dl, za, Da, ku] },
  Mn = {
    findFiberByHostInstance: Rt,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  ym = {
    bundleType: Mn.bundleType,
    version: Mn.version,
    rendererPackageName: Mn.rendererPackageName,
    rendererConfig: Mn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Wa(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Mn.findFiberByHostInstance || hm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Qr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Qr.isDisabled && Qr.supportsFiber)
    try {
      (Fl = Qr.inject(ym)), (Qe = Qr);
    } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gm;
Ee.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Iu(t)) throw Error(E(200));
  return mm(e, t, null, n);
};
Ee.createRoot = function (e, t) {
  if (!Iu(e)) throw Error(E(299));
  var n = !1,
    r = '',
    l = kd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Nu(e, 1, !1, null, null, n, !1, r, l)),
    (e[be] = t.current),
    lr(e.nodeType === 8 ? e.parentNode : e),
    new _u(t)
  );
};
Ee.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(E(188))
      : ((e = Object.keys(e).join(',')), Error(E(268, e)));
  return (e = Wa(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
  return Wt(e);
};
Ee.hydrate = function (e, t, n) {
  if (!Yl(t)) throw Error(E(200));
  return Gl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
  if (!Iu(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = kd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Sd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[be] = t.current),
    lr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Kl(t);
};
Ee.render = function (e, t, n) {
  if (!Yl(t)) throw Error(E(200));
  return Gl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
  if (!Yl(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Wt(function () {
        Gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[be] = null);
        });
      }),
      !0)
    : !1;
};
Ee.unstable_batchedUpdates = ku;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Gl(e, t, n, !1, r);
};
Ee.version = '18.2.0-next-9e3b772b8-20220608';
function Ed() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ed);
    } catch (e) {
      console.error(e);
    }
}
Ed(), (Sa.exports = Ee);
var xm = Sa.exports,
  Ys = xm;
(zo.createRoot = Ys.createRoot), (zo.hydrateRoot = Ys.hydrateRoot);
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function pr() {
  return (
    (pr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pr.apply(this, arguments)
  );
}
var dt;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(dt || (dt = {}));
const Gs = 'popstate';
function wm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Li(
      '',
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : Tl(l);
  }
  return km(t, n, null, e);
}
function G(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function Cd(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Sm() {
  return Math.random().toString(36).substr(2, 8);
}
function Xs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Li(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    pr(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? Cn(t) : t,
      { state: n, key: (t && t.key) || r || Sm() }
    )
  );
}
function Tl(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Cn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function km(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = dt.Pop,
    s = null,
    a = p();
  a == null && ((a = 0), i.replaceState(pr({}, i.state, { idx: a }), ''));
  function p() {
    return (i.state || { idx: null }).idx;
  }
  function f() {
    u = dt.Pop;
    let C = p(),
      m = C == null ? null : C - a;
    (a = C), s && s({ action: u, location: y.location, delta: m });
  }
  function h(C, m) {
    u = dt.Push;
    let c = Li(y.location, C, m);
    n && n(c, C), (a = p() + 1);
    let v = Xs(c, a),
      S = y.createHref(c);
    try {
      i.pushState(v, '', S);
    } catch (k) {
      if (k instanceof DOMException && k.name === 'DataCloneError') throw k;
      l.location.assign(S);
    }
    o && s && s({ action: u, location: y.location, delta: 1 });
  }
  function x(C, m) {
    u = dt.Replace;
    let c = Li(y.location, C, m);
    n && n(c, C), (a = p());
    let v = Xs(c, a),
      S = y.createHref(c);
    i.replaceState(v, '', S),
      o && s && s({ action: u, location: y.location, delta: 0 });
  }
  function w(C) {
    let m = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      c = typeof C == 'string' ? C : Tl(C);
    return (
      (c = c.replace(/ $/, '%20')),
      G(
        m,
        'No window.location.(origin|href) available to create URL for href: ' +
          c
      ),
      new URL(c, m)
    );
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Gs, f),
        (s = C),
        () => {
          l.removeEventListener(Gs, f), (s = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: w,
    encodeLocation(C) {
      let m = w(C);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: x,
    go(C) {
      return i.go(C);
    },
  };
  return y;
}
var Zs;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(Zs || (Zs = {}));
function Em(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Cn(t) : t,
    l = Lu(r.pathname || '/', n);
  if (l == null) return null;
  let o = jd(e);
  Cm(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) {
    let s = $m(l);
    i = Om(o[u], s);
  }
  return i;
}
function jd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, u) => {
    let s = {
      relativePath: u === void 0 ? o.path || '' : u,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    s.relativePath.startsWith('/') &&
      (G(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let a = wt([r, s.relativePath]),
      p = n.concat(s);
    o.children &&
      o.children.length > 0 &&
      (G(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + a + '".')
      ),
      jd(o.children, t, p, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: Tm(a, o.index), routesMeta: p });
  };
  return (
    e.forEach((o, i) => {
      var u;
      if (o.path === '' || !((u = o.path) != null && u.includes('?'))) l(o, i);
      else for (let s of Nd(o.path)) l(o, i, s);
    }),
    t
  );
}
function Nd(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Nd(r.join('/')),
    u = [];
  return (
    u.push(...i.map((s) => (s === '' ? o : [o, s].join('/')))),
    l && u.push(...i),
    u.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function Cm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Rm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const jm = /^:[\w-]+$/,
  Nm = 3,
  Pm = 2,
  _m = 1,
  Im = 10,
  Lm = -2,
  Js = (e) => e === '*';
function Tm(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Js) && (r += Lm),
    t && (r += Pm),
    n
      .filter((l) => !Js(l))
      .reduce((l, o) => l + (jm.test(o) ? Nm : o === '' ? _m : Im), r)
  );
}
function Rm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Om(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      s = i === n.length - 1,
      a = l === '/' ? t : t.slice(l.length) || '/',
      p = Fm(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: s },
        a
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let f = u.route;
    o.push({
      params: r,
      pathname: wt([l, p.pathname]),
      pathnameBase: Am(wt([l, p.pathnameBase])),
      route: f,
    }),
      p.pathnameBase !== '/' && (l = wt([l, p.pathnameBase]));
  }
  return o;
}
function Fm(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Mm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    u = l.slice(1);
  return {
    params: r.reduce((a, p, f) => {
      let { paramName: h, isOptional: x } = p;
      if (h === '*') {
        let y = u[f] || '';
        i = o.slice(0, o.length - y.length).replace(/(.)\/+$/, '$1');
      }
      const w = u[f];
      return (
        x && !w ? (a[h] = void 0) : (a[h] = (w || '').replace(/%2F/g, '/')), a
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Mm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Cd(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, u, s) => (
            r.push({ paramName: u, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function $m(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      Cd(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function Lu(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function zm(e, t) {
  t === void 0 && (t = '/');
  let {
    pathname: n,
    search: r = '',
    hash: l = '',
  } = typeof e == 'string' ? Cn(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Dm(n, t)) : t,
    search: Bm(r),
    hash: Vm(l),
  };
}
function Dm(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Ro(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Um(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Pd(e, t) {
  let n = Um(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function _d(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Cn(e))
    : ((l = pr({}, e)),
      G(
        !l.pathname || !l.pathname.includes('?'),
        Ro('?', 'pathname', 'search', l)
      ),
      G(
        !l.pathname || !l.pathname.includes('#'),
        Ro('#', 'pathname', 'hash', l)
      ),
      G(!l.search || !l.search.includes('#'), Ro('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    u;
  if (i == null) u = n;
  else {
    let f = t.length - 1;
    if (!r && i.startsWith('..')) {
      let h = i.split('/');
      for (; h[0] === '..'; ) h.shift(), (f -= 1);
      l.pathname = h.join('/');
    }
    u = f >= 0 ? t[f] : '/';
  }
  let s = zm(l, u),
    a = i && i !== '/' && i.endsWith('/'),
    p = (o || i === '.') && n.endsWith('/');
  return !s.pathname.endsWith('/') && (a || p) && (s.pathname += '/'), s;
}
const wt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Am = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Bm = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Vm = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
function Wm(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Id = ['post', 'put', 'patch', 'delete'];
new Set(Id);
const Hm = ['get', ...Id];
new Set(Hm);
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function mr() {
  return (
    (mr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    mr.apply(this, arguments)
  );
}
const Tu = g.createContext(null),
  Qm = g.createContext(null),
  Kt = g.createContext(null),
  Xl = g.createContext(null),
  rt = g.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Ld = g.createContext(null);
function Km(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  kr() || G(!1);
  let { basename: r, navigator: l } = g.useContext(Kt),
    { hash: o, pathname: i, search: u } = Od(e, { relative: n }),
    s = i;
  return (
    r !== '/' && (s = i === '/' ? r : wt([r, i])),
    l.createHref({ pathname: s, search: u, hash: o })
  );
}
function kr() {
  return g.useContext(Xl) != null;
}
function Zl() {
  return kr() || G(!1), g.useContext(Xl).location;
}
function Td(e) {
  g.useContext(Kt).static || g.useLayoutEffect(e);
}
function Er() {
  let { isDataRoute: e } = g.useContext(rt);
  return e ? uh() : Ym();
}
function Ym() {
  kr() || G(!1);
  let e = g.useContext(Tu),
    { basename: t, future: n, navigator: r } = g.useContext(Kt),
    { matches: l } = g.useContext(rt),
    { pathname: o } = Zl(),
    i = JSON.stringify(Pd(l, n.v7_relativeSplatPath)),
    u = g.useRef(!1);
  return (
    Td(() => {
      u.current = !0;
    }),
    g.useCallback(
      function (a, p) {
        if ((p === void 0 && (p = {}), !u.current)) return;
        if (typeof a == 'number') {
          r.go(a);
          return;
        }
        let f = _d(a, JSON.parse(i), o, p.relative === 'path');
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : wt([t, f.pathname])),
          (p.replace ? r.replace : r.push)(f, p.state, p);
      },
      [t, r, i, o, e]
    )
  );
}
const Gm = g.createContext(null);
function Xm(e) {
  let t = g.useContext(rt).outlet;
  return t && g.createElement(Gm.Provider, { value: e }, t);
}
function Rd() {
  let { matches: e } = g.useContext(rt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Od(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(Kt),
    { matches: l } = g.useContext(rt),
    { pathname: o } = Zl(),
    i = JSON.stringify(Pd(l, r.v7_relativeSplatPath));
  return g.useMemo(() => _d(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function Zm(e, t) {
  return Jm(e, t);
}
function Jm(e, t, n, r) {
  kr() || G(!1);
  let { navigator: l } = g.useContext(Kt),
    { matches: o } = g.useContext(rt),
    i = o[o.length - 1],
    u = i ? i.params : {};
  i && i.pathname;
  let s = i ? i.pathnameBase : '/';
  i && i.route;
  let a = Zl(),
    p;
  if (t) {
    var f;
    let C = typeof t == 'string' ? Cn(t) : t;
    s === '/' || ((f = C.pathname) != null && f.startsWith(s)) || G(!1),
      (p = C);
  } else p = a;
  let h = p.pathname || '/',
    x = h;
  if (s !== '/') {
    let C = s.replace(/^\//, '').split('/');
    x = '/' + h.replace(/^\//, '').split('/').slice(C.length).join('/');
  }
  let w = Em(e, { pathname: x }),
    y = nh(
      w &&
        w.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, u, C.params),
            pathname: wt([
              s,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === '/'
                ? s
                : wt([
                    s,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && y
    ? g.createElement(
        Xl.Provider,
        {
          value: {
            location: mr(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              p
            ),
            navigationType: dt.Pop,
          },
        },
        y
      )
    : y;
}
function qm() {
  let e = ih(),
    t = Wm(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' },
    o = null;
  return g.createElement(
    g.Fragment,
    null,
    g.createElement('h2', null, 'Unexpected Application Error!'),
    g.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? g.createElement('pre', { style: l }, n) : null,
    o
  );
}
const bm = g.createElement(qm, null);
class eh extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      'React Router caught the following error during render',
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          rt.Provider,
          { value: this.props.routeContext },
          g.createElement(Ld.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function th(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(Tu);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(rt.Provider, { value: t }, r)
  );
}
function nh(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    u = (l = n) == null ? void 0 : l.errors;
  if (u != null) {
    let p = i.findIndex(
      (f) => f.route.id && (u == null ? void 0 : u[f.route.id])
    );
    p >= 0 || G(!1), (i = i.slice(0, Math.min(i.length, p + 1)));
  }
  let s = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let p = 0; p < i.length; p++) {
      let f = i[p];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = p),
        f.route.id)
      ) {
        let { loaderData: h, errors: x } = n,
          w =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!x || x[f.route.id] === void 0);
        if (f.route.lazy || w) {
          (s = !0), a >= 0 ? (i = i.slice(0, a + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((p, f, h) => {
    let x,
      w = !1,
      y = null,
      C = null;
    n &&
      ((x = u && f.route.id ? u[f.route.id] : void 0),
      (y = f.route.errorElement || bm),
      s &&
        (a < 0 && h === 0
          ? (sh('route-fallback', !1), (w = !0), (C = null))
          : a === h &&
            ((w = !0), (C = f.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, h + 1)),
      c = () => {
        let v;
        return (
          x
            ? (v = y)
            : w
            ? (v = C)
            : f.route.Component
            ? (v = g.createElement(f.route.Component, null))
            : f.route.element
            ? (v = f.route.element)
            : (v = p),
          g.createElement(th, {
            match: f,
            routeContext: { outlet: p, matches: m, isDataRoute: n != null },
            children: v,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? g.createElement(eh, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: x,
          children: c(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Fd = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(Fd || {}),
  Rl = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Rl || {});
function rh(e) {
  let t = g.useContext(Tu);
  return t || G(!1), t;
}
function lh(e) {
  let t = g.useContext(Qm);
  return t || G(!1), t;
}
function oh(e) {
  let t = g.useContext(rt);
  return t || G(!1), t;
}
function Md(e) {
  let t = oh(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || G(!1), n.route.id;
}
function ih() {
  var e;
  let t = g.useContext(Ld),
    n = lh(Rl.UseRouteError),
    r = Md(Rl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function uh() {
  let { router: e } = rh(Fd.UseNavigateStable),
    t = Md(Rl.UseNavigateStable),
    n = g.useRef(!1);
  return (
    Td(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, mr({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const qs = {};
function sh(e, t, n) {
  !t && !qs[e] && (qs[e] = !0);
}
function ah(e) {
  return Xm(e.context);
}
function ie(e) {
  G(!1);
}
function ch(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = dt.Pop,
    navigator: o,
    static: i = !1,
    future: u,
  } = e;
  kr() && G(!1);
  let s = t.replace(/^\/*/, '/'),
    a = g.useMemo(
      () => ({
        basename: s,
        navigator: o,
        static: i,
        future: mr({ v7_relativeSplatPath: !1 }, u),
      }),
      [s, u, o, i]
    );
  typeof r == 'string' && (r = Cn(r));
  let {
      pathname: p = '/',
      search: f = '',
      hash: h = '',
      state: x = null,
      key: w = 'default',
    } = r,
    y = g.useMemo(() => {
      let C = Lu(p, s);
      return C == null
        ? null
        : {
            location: { pathname: C, search: f, hash: h, state: x, key: w },
            navigationType: l,
          };
    }, [s, p, f, h, x, w, l]);
  return y == null
    ? null
    : g.createElement(
        Kt.Provider,
        { value: a },
        g.createElement(Xl.Provider, { children: n, value: y })
      );
}
function dh(e) {
  let { children: t, location: n } = e;
  return Zm(Ti(t), n);
}
new Promise(() => {});
function Ti(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    g.Children.forEach(e, (r, l) => {
      if (!g.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === g.Fragment) {
        n.push.apply(n, Ti(r.props.children, o));
        return;
      }
      r.type !== ie && G(!1), !r.props.index || !r.props.children || G(!1);
      let i = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = Ti(r.props.children, o)), n.push(i);
    }),
    n
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
function fh(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function ph(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function mh(e, t) {
  return e.button === 0 && (!t || t === '_self') && !ph(e);
}
const hh = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  vh = '6';
try {
  window.__reactRouterVersion = vh;
} catch {}
const gh = 'startTransition',
  bs = $o[gh];
function yh(e) {
  let { basename: t, children: n, future: r, window: l } = e,
    o = g.useRef();
  o.current == null && (o.current = wm({ window: l, v5Compat: !0 }));
  let i = o.current,
    [u, s] = g.useState({ action: i.action, location: i.location }),
    { v7_startTransition: a } = r || {},
    p = g.useCallback(
      (f) => {
        a && bs ? bs(() => s(f)) : s(f);
      },
      [s, a]
    );
  return (
    g.useLayoutEffect(() => i.listen(p), [i, p]),
    g.createElement(ch, {
      basename: t,
      children: n,
      location: u.location,
      navigationType: u.action,
      navigator: i,
      future: r,
    })
  );
}
const xh =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ue = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: s,
        to: a,
        preventScrollReset: p,
        unstable_viewTransition: f,
      } = t,
      h = fh(t, hh),
      { basename: x } = g.useContext(Kt),
      w,
      y = !1;
    if (typeof a == 'string' && wh.test(a) && ((w = a), xh))
      try {
        let v = new URL(window.location.href),
          S = a.startsWith('//') ? new URL(v.protocol + a) : new URL(a),
          k = Lu(S.pathname, x);
        S.origin === v.origin && k != null
          ? (a = k + S.search + S.hash)
          : (y = !0);
      } catch {}
    let C = Km(a, { relative: l }),
      m = Sh(a, {
        replace: i,
        state: u,
        target: s,
        preventScrollReset: p,
        relative: l,
        unstable_viewTransition: f,
      });
    function c(v) {
      r && r(v), v.defaultPrevented || m(v);
    }
    return g.createElement(
      'a',
      Ri({}, h, { href: w || C, onClick: y || o ? r : c, ref: n, target: s })
    );
  });
var ea;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(ea || (ea = {}));
var ta;
(function (e) {
  (e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration');
})(ta || (ta = {}));
function Sh(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: u,
    } = t === void 0 ? {} : t,
    s = Er(),
    a = Zl(),
    p = Od(e, { relative: i });
  return g.useCallback(
    (f) => {
      if (mh(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Tl(a) === Tl(p);
        s(e, {
          replace: h,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: u,
        });
      }
    },
    [a, s, p, r, l, n, e, o, i, u]
  );
}
const Cr = g.createContext(void 0);
function kh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5',
    })
  );
}
const Eh = g.forwardRef(kh),
  Ch = Eh;
function jh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'm9 7.5 3 4.5m0 0 3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
    })
  );
}
const Nh = g.forwardRef(jh),
  Ph = Nh;
function _h({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M5 12h14',
    })
  );
}
const Ih = g.forwardRef(_h),
  Lh = Ih;
function Th({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M12 4.5v15m7.5-7.5h-15',
    })
  );
}
const Rh = g.forwardRef(Th),
  Oh = Rh;
function Fh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
    })
  );
}
const Mh = g.forwardRef(Fh),
  $h = Mh;
function zh({ title: e, titleId: t, ...n }, r) {
  return g.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: 1.5,
        stroke: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n
    ),
    e ? g.createElement('title', { id: t }, e) : null,
    g.createElement('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
    })
  );
}
const Dh = g.forwardRef(zh),
  Uh = Dh;
function jn() {
  async function e(u, s, a) {
    const p = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: s, password: a }),
      },
      f = await fetch(`/${u}`, p);
    if (!f.ok) throw new Error(`Sign In or Sign Up error ${f.status}`);
    return await f.json();
  }
  async function t(u) {
    u = Number(u);
    const s = await fetch(`/api/products/${u}`);
    if (!s.ok) throw new Error(`fetch Error ${s.status}`);
    return await s.json();
  }
  async function n({ product: u, quantity: s, user: a }) {
    const p = u;
    (p.quantity = s), (p.userId = a == null ? void 0 : a.user.userId);
    const f = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(u),
      },
      h = await fetch('/add-to-cart', f);
    if (!h.ok) throw new Error(`fetch Error ${h.status}`);
    return await h.json();
  }
  async function r(u) {
    const s = await fetch(`/api/cart/${u}`);
    if (!s.ok) throw new Error('Could not find cart');
    return await s.json();
  }
  async function l({ quantity: u, cartId: s, cartItemId: a }) {
    const f = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity: u, cartId: s, cartItemId: a }),
    };
    if (!(await fetch('/api/cart/update', f)).ok)
      throw new Error('Could not update cart');
  }
  async function o({ cartId: u, cartItemId: s }) {
    const a = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cartId: u, cartItemId: s }),
    };
    if (!(await fetch('/api/cart/delete', a)).ok)
      throw new Error('Could not delete cart item');
  }
  async function i(u) {
    const s = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cart: u }),
    };
    return await (await fetch('/api/checkout', s)).json();
  }
  return {
    signUpOrIn: e,
    getProduct: t,
    addToCart: n,
    viewCart: r,
    updateCart: l,
    deleteCartItem: o,
    checkout: i,
  };
}
async function Ah({ type: e, searchString: t }) {
  const n = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: e, searchString: t }),
    },
    r = await fetch('/catalog', n);
  if (!r.ok) throw new Error(`fetch Error ${r.status}`);
  return await r.json();
}
function hr(e) {
  return `$${Number(e).toFixed(2)}`;
}
function $d(e) {
  return e.sort((n, r) => {
    const l = n.name.toUpperCase(),
      o = r.name.toUpperCase();
    return l < o ? -1 : l > o ? 1 : 0;
  });
}
function zd({ productId: e, className: t, quantity: n }) {
  const { getProduct: r, addToCart: l } = jn(),
    [o, i] = g.useState(),
    u = g.useContext(Cr),
    [s, a] = g.useState(!1);
  async function p() {
    try {
      a(!0);
      const f = await r(e);
      await l({ product: f, quantity: n, user: u });
    } catch (f) {
      i(f);
    }
  }
  return o
    ? (console.error('Could not fetch product!:', o),
      d.jsx('div', { children: `Error! ${o}` }))
    : d.jsx('button', {
        className: `${t} ${s && 'animate-wiggle'}`,
        onClick: p,
        onAnimationEnd: () => a(!1),
        children: 'Add to cart',
      });
}
function Dd({ stock: e, counts: t, quantityCart: n }) {
  const [r, l] = g.useState(1);
  g.useEffect(() => {
    n && l(n);
  }, [n]);
  function o() {
    r >= e || (l(r + 1), t(r + 1));
  }
  function i() {
    r >= 2 && (l(r - 1), t(r - 1));
  }
  return d.jsxs('div', {
    className: 'w-full flex  justify-around items-center',
    children: [
      d.jsx('button', {
        className: 'flex justify-center w-4/12',
        onClick: i,
        children: d.jsx(Lh, { className: 'w-6' }),
      }),
      d.jsx('div', {
        className: 'w-4/12',
        children: d.jsx('p', { className: 'text-xl font-bold', children: r }),
      }),
      d.jsx('button', {
        className: 'flex justify-center w-4/12',
        onClick: o,
        children: d.jsx(Oh, { className: 'w-6' }),
      }),
    ],
  });
}
function Bh({ banners: e }) {
  const [t, n] = g.useState(0);
  return (
    g.useEffect(() => {
      const r = setInterval(() => {
        n((t + 1) % e.length);
      }, 3e3);
      return () => clearInterval(r);
    }, [e.length, t]),
    d.jsxs('div', {
      className: 'container px-8 mt-4',
      children: [
        d.jsx(Vh, { banners: e, isActive: t }),
        d.jsx(Wh, { banners: e, onSelect: (r) => n(r), isActive: t }),
      ],
    })
  );
}
function Vh({ banners: e, isActive: t }) {
  const n = [];
  return (
    e.map((r) => {
      n.push(
        d.jsx(
          'img',
          {
            src: r.bannerUrl,
            alt: 'pokemon',
            className: t === r.id ? 'w-full rounded-xl' : 'hidden',
          },
          r.id
        )
      );
    }),
    d.jsx('div', { className: 'w-full mt-0', children: n })
  );
}
function Wh({ banners: e, onSelect: t, isActive: n }) {
  const r = [];
  return (
    e.map((l) => {
      r.push(
        d.jsx(
          Ph,
          {
            onClick: () => t(l.id),
            className: n === l.id ? 'indicator text-primary' : 'indicator',
          },
          l.id
        )
      );
    }),
    d.jsx('div', {
      className: 'relative flex h-6 justify-center bottom-12',
      children: r,
    })
  );
}
function Hh({
  imageUrl: e,
  name: t,
  price: n,
  productId: r,
  cartId: l,
  cartItemId: o,
  setCart: i,
  user: u,
  quantityCart: s,
}) {
  const { getProduct: a, deleteCartItem: p, viewCart: f, updateCart: h } = jn(),
    [x, w] = g.useState(),
    [y, C] = g.useState(!0),
    [m, c] = g.useState();
  g.useEffect(() => {
    async function k() {
      try {
        const j = await a(r);
        w(j);
      } catch (j) {
        c(j);
      } finally {
        C(!1);
      }
    }
    x || k();
  }, [a, x, r]);
  async function v() {
    try {
      await p({ cartId: l, cartItemId: o });
      const k = await f(u.userId);
      i(k);
    } catch (k) {
      c(k);
    }
  }
  async function S(k) {
    try {
      await h({ quantity: k, cartId: l, cartItemId: o });
      let j = await f(u.userId);
      (j = $d(j)), i(j);
    } catch (j) {
      c(j);
    }
  }
  return y
    ? d.jsx('div', { children: ' Loading... ' })
    : m
    ? (console.error('Fetch error:', m),
      d.jsx('div', { children: `Error! ${m}` }))
    : d.jsx(d.Fragment, {
        children: d.jsxs('div', {
          className:
            'justify-between mb-6 rounded-lg bg-gray-100 p-6 shadow-md md:flex md:justify-start',
          children: [
            d.jsx('img', {
              src: e,
              alt: t,
              className: 'w-full rounded-lg md:w-40',
            }),
            d.jsxs('div', {
              className: 'md:ml-4 md:flex md:w-full md:justify-between',
              children: [
                d.jsx('div', {
                  className: 'mt-5 md:mt-0 flex justify-center',
                  children: d.jsx('h2', {
                    className: 'mb-2 text-lg font-bold text-gray-900',
                    children: t,
                  }),
                }),
                d.jsxs('div', {
                  className: 'flex flex-col justify-around',
                  children: [
                    d.jsx(Dd, { quantityCart: s, stock: x.stock, counts: S }),
                    d.jsxs('div', {
                      className:
                        'mt-2 flex justify-center items-center space-x-4',
                      children: [
                        d.jsx('p', { className: 'text-md', children: hr(n) }),
                        d.jsx('svg', {
                          onClick: v,
                          xmlns: 'http://www.w3.org/2000/svg',
                          fill: 'none',
                          viewBox: '0 0 24 24',
                          strokeWidth: '1.5',
                          stroke: 'currentColor',
                          className:
                            'h-5 w-5 cursor-pointer duration-150 hover:text-red-500',
                          children: d.jsx('path', {
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            d: 'M6 18L18 6M6 6l12 12',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
}
function Qh({ imageUrl: e, name: t, productId: n, price: r }) {
  return d.jsx(d.Fragment, {
    children: d.jsx('div', {
      className: 'md:w-3/12 m-4 w-full',
      children: d.jsxs('div', {
        className: 'w-full flex flex-col',
        children: [
          d.jsx(Ue, {
            to: `/products/${n}`,
            className: 'w-full flex items-center justify-center',
            children: d.jsx('img', {
              className: 'w-10/12 pt-4',
              src: e,
              alt: 'product',
            }),
          }),
          d.jsxs('div', {
            className: 'flex flex-col w-full',
            children: [
              d.jsx(Ue, {
                to: `/products/${n}`,
                className: 'w-full pt-2',
                children: d.jsx('h5', {
                  className: 'text-l font-semibold dark:text-white w-full',
                  children: t,
                }),
              }),
              d.jsxs('div', {
                className: 'flex w-full pt-2 justify-center items-center',
                children: [
                  d.jsx('div', {
                    className:
                      ' font-bold text-gray-900 dark:text-white w-6/12',
                    children: hr(r),
                  }),
                  d.jsx(zd, {
                    quantity: 1,
                    className:
                      'text-white w-6/12 text-xs m-2 p-2 bg-blue-700 hover:bg-blue-800 active:ring-4 rounded-lg text-center',
                    productId: n,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function jr() {
  return d.jsxs('div', {
    className: 'flex justify-center items-center h-2/3',
    role: 'status',
    children: [
      d.jsxs('svg', {
        'aria-hidden': 'true',
        className:
          'w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
        viewBox: '0 0 100 101',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        children: [
          d.jsx('path', {
            d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
            fill: 'currentColor',
          }),
          d.jsx('path', {
            d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
            fill: 'currentFill',
          }),
        ],
      }),
      d.jsx('span', { className: 'sr-only', children: 'Loading...' }),
    ],
  });
}
function Kr({ src: e, alt: t, text: n, link: r }) {
  return d.jsx(d.Fragment, {
    children: d.jsxs(Ue, {
      to: r,
      className: 'w-1/4 flex items-center justify-center',
      children: [
        d.jsx('img', { className: 'h-10', alt: t, src: e }),
        d.jsx('h1', { className: '', children: n }),
      ],
    }),
  });
}
function Kh({
  imageUrl: e,
  name: t,
  productId: n,
  price: r,
  longDescription: l,
  stock: o,
}) {
  const [i, u] = g.useState(1);
  return d.jsxs('div', {
    className:
      'flex flex-col md:flex-row justify-center items-center border-2 mt-4',
    children: [
      d.jsx('div', {
        className: 'w-6/12 flex justify-center',
        children: d.jsx('img', {
          className: 'w-10/12 lg:w-6/12',
          alt: t,
          src: e,
        }),
      }),
      d.jsxs('div', {
        className: 'md:w-6/12 w-full',
        children: [
          d.jsx('p', { className: 'mb-4 text-2xl font-bold', children: t }),
          d.jsxs('div', {
            className: 'mb-2 w-full flex justify-center items-center',
            children: [
              d.jsx('p', {
                className: 'w-6/12 text-red-600',
                children: `Only ${o} left!`,
              }),
              d.jsx('div', {
                className: 'w-6/12',
                children: d.jsx(Dd, { quantityCart: 1, counts: u, stock: o }),
              }),
            ],
          }),
          d.jsxs('div', {
            className: 'mb-2 flex items-center justify-around',
            children: [
              d.jsx('div', {
                className: 'w-2/12 text-blue-900 text-2xl',
                children: hr(r),
              }),
              d.jsx(zd, {
                quantity: i,
                className:
                  'text-white w-2/12 text-xs m-2 p-2 bg-blue-700 hover:bg-blue-800 active:ring-4 rounded-lg text-center',
                productId: n,
              }),
            ],
          }),
          d.jsx('div', {
            className:
              'h-56 overflow-auto pr-2 text-left w-11/12 ml-auto mr-auto',
            children: l,
          }),
        ],
      }),
    ],
  });
}
function na({ searchString: e }) {
  const [t, n] = g.useState(!1),
    [r, l] = g.useState(''),
    [o, i] = g.useState(),
    [u, s] = g.useState(),
    [a, p] = g.useState(),
    [f, h] = g.useState(!1),
    x = Er();
  g.useEffect(() => {
    async function m() {
      try {
        const c = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'all' }),
          },
          v = await fetch('/catalog', c);
        if (!v.ok) throw new Error(`fetch Error ${v.status}`);
        const S = await v.json();
        i(S);
      } catch (c) {
        s(c);
      }
    }
    m();
  }, []);
  function w(m) {
    if ((l(m.target.value.toLowerCase()), o)) {
      const c = o.filter((v) => v.name.toLowerCase().includes(r));
      p(c), h(!0);
    }
  }
  function y() {
    setTimeout(() => h(!1), 250), l('');
  }
  function C(m) {
    m.preventDefault(), e(r), x('/catalog/search'), l('');
  }
  return u
    ? (console.error('Fetch error:', u),
      d.jsx('div', { children: `Error! ${u}` }))
    : d.jsxs('div', {
        className: 'w-full flex justify-center items-center flex-col relative',
        children: [
          d.jsxs('form', {
            className: 'w-full',
            onSubmit: C,
            children: [
              d.jsx('label', {
                htmlFor: 'default-search',
                className:
                  'mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white',
                children: 'Search',
              }),
              d.jsxs('div', {
                className: 'relative',
                children: [
                  d.jsx('div', {
                    className:
                      'absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none',
                    children: d.jsx('svg', {
                      'aria-hidden': 'true',
                      className: 'w-5 h-5 text-gray-500 dark:text-gray-400',
                      fill: 'none',
                      stroke: 'currentColor',
                      viewBox: '0 0 24 24',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: d.jsx('path', {
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: '2',
                        d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
                      }),
                    }),
                  }),
                  d.jsx('input', {
                    onBlur: y,
                    value: r,
                    onChange: w,
                    type: 'search',
                    id: 'default-search',
                    className:
                      'block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg',
                    placeholder: 'Search...',
                    required: !0,
                  }),
                  d.jsx('button', {
                    type: 'submit',
                    className: `${
                      t && 'animate-wiggle'
                    } absolute right-8 bottom-2 font-medium rounded-lg text-sm px-4 py-2`,
                    onClick: () => n(!0),
                    onAnimationEnd: () => n(!1),
                    children: 'Search',
                  }),
                ],
              }),
            ],
          }),
          d.jsx('div', {
            className: `${
              f || 'hidden'
            } top-14 absolute flex flex-col bg-white border-2 border-gray-200 rounded-lg w-full`,
            children:
              f &&
              a &&
              a.map((m) =>
                d.jsx(
                  Ue,
                  {
                    to: `/products/${m.productId}`,
                    className: 'text-gray-900',
                    children: m.name,
                  },
                  m.productId
                )
              ),
          }),
        ],
      });
}
var Yh = Object.defineProperty,
  Gh = (e, t, n) =>
    t in e
      ? Yh(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Oo = (e, t, n) => (Gh(e, typeof t != 'symbol' ? t + '' : t, n), n);
let Xh = class {
    constructor() {
      Oo(this, 'current', this.detect()),
        Oo(this, 'handoffState', 'pending'),
        Oo(this, 'currentId', 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = 'pending'),
        (this.currentId = 0),
        (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === 'server';
    }
    get isClient() {
      return this.current === 'client';
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client';
    }
    handoff() {
      this.handoffState === 'pending' && (this.handoffState = 'complete');
    }
    get isHandoffComplete() {
      return this.handoffState === 'complete';
    }
  },
  zt = new Xh(),
  St = (e, t) => {
    zt.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t);
  };
function Ru(e) {
  let t = g.useRef(e);
  return (
    St(() => {
      t.current = e;
    }, [e]),
    t
  );
}
let me = function (e) {
  let t = Ru(e);
  return kt.useCallback((...n) => t.current(...n), [t]);
};
function Zh(e) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          })
        );
}
function wn() {
  let e = [],
    t = {
      addEventListener(n, r, l, o) {
        return (
          n.addEventListener(r, l, o),
          t.add(() => n.removeEventListener(r, l, o))
        );
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          Zh(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, l) {
        let o = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: l }),
          this.add(() => {
            Object.assign(n.style, { [r]: o });
          })
        );
      },
      group(n) {
        let r = wn();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let l of e.splice(r, 1)) l();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function Ud() {
  let [e] = g.useState(wn);
  return g.useEffect(() => () => e.dispose(), [e]), e;
}
function Jh() {
  let e = typeof document > 'u';
  return 'useSyncExternalStore' in $o
    ? ((t) => t.useSyncExternalStore)($o)(
        () => () => {},
        () => !1,
        () => !e
      )
    : !1;
}
function qh() {
  let e = Jh(),
    [t, n] = g.useState(zt.isHandoffComplete);
  return (
    t && zt.isHandoffComplete === !1 && n(!1),
    g.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    g.useEffect(() => zt.handoff(), []),
    e ? !1 : t
  );
}
var ra;
let Ou =
  (ra = kt.useId) != null
    ? ra
    : function () {
        let e = qh(),
          [t, n] = kt.useState(e ? () => zt.nextId() : null);
        return (
          St(() => {
            t === null && n(zt.nextId());
          }, [t]),
          t != null ? '' + t : void 0
        );
      };
function Nr(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == 'function' ? l(...n) : l;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t
    )
      .map((l) => `"${l}"`)
      .join(', ')}.`
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, Nr), r);
}
function Jl(e) {
  return zt.isServer
    ? null
    : e instanceof Node
    ? e.ownerDocument
    : e != null && e.hasOwnProperty('current') && e.current instanceof Node
    ? e.current.ownerDocument
    : document;
}
let Oi = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(',');
var Fi = ((e) => (
    (e[(e.First = 1)] = 'First'),
    (e[(e.Previous = 2)] = 'Previous'),
    (e[(e.Next = 4)] = 'Next'),
    (e[(e.Last = 8)] = 'Last'),
    (e[(e.WrapAround = 16)] = 'WrapAround'),
    (e[(e.NoScroll = 32)] = 'NoScroll'),
    e
  ))(Fi || {}),
  bh = ((e) => (
    (e[(e.Error = 0)] = 'Error'),
    (e[(e.Overflow = 1)] = 'Overflow'),
    (e[(e.Success = 2)] = 'Success'),
    (e[(e.Underflow = 3)] = 'Underflow'),
    e
  ))(bh || {}),
  ev = ((e) => (
    (e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e
  ))(ev || {});
function Ad(e = document.body) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(Oi)).sort((t, n) =>
        Math.sign(
          (t.tabIndex || Number.MAX_SAFE_INTEGER) -
            (n.tabIndex || Number.MAX_SAFE_INTEGER)
        )
      );
}
var Fu = ((e) => (
  (e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e
))(Fu || {});
function Mu(e, t = 0) {
  var n;
  return e === ((n = Jl(e)) == null ? void 0 : n.body)
    ? !1
    : Nr(t, {
        0() {
          return e.matches(Oi);
        },
        1() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(Oi)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
function Bd(e) {
  let t = Jl(e);
  wn().nextFrame(() => {
    t && !Mu(t.activeElement, 0) && nv(e);
  });
}
var tv = ((e) => (
  (e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e
))(tv || {});
typeof window < 'u' &&
  typeof document < 'u' &&
  (document.addEventListener(
    'keydown',
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = '');
    },
    !0
  ),
  document.addEventListener(
    'click',
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 &&
          (document.documentElement.dataset.headlessuiFocusVisible = '');
    },
    !0
  ));
function nv(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let rv = ['textarea', 'input'].join(',');
function lv(e) {
  var t, n;
  return (n =
    (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, rv)) !=
    null
    ? n
    : !1;
}
function Vd(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let l = t(n),
      o = t(r);
    if (l === null || o === null) return 0;
    let i = l.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING
      ? -1
      : i & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
  });
}
function ov(e, t) {
  return iv(Ad(), t, { relativeTo: e });
}
function iv(
  e,
  t,
  { sorted: n = !0, relativeTo: r = null, skipElements: l = [] } = {}
) {
  let o = Array.isArray(e)
      ? e.length > 0
        ? e[0].ownerDocument
        : document
      : e.ownerDocument,
    i = Array.isArray(e) ? (n ? Vd(e) : e) : Ad(e);
  l.length > 0 && i.length > 1 && (i = i.filter((x) => !l.includes(x))),
    (r = r ?? o.activeElement);
  let u = (() => {
      if (t & 5) return 1;
      if (t & 10) return -1;
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      );
    })(),
    s = (() => {
      if (t & 1) return 0;
      if (t & 2) return Math.max(0, i.indexOf(r)) - 1;
      if (t & 4) return Math.max(0, i.indexOf(r)) + 1;
      if (t & 8) return i.length - 1;
      throw new Error(
        'Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last'
      );
    })(),
    a = t & 32 ? { preventScroll: !0 } : {},
    p = 0,
    f = i.length,
    h;
  do {
    if (p >= f || p + f <= 0) return 0;
    let x = s + p;
    if (t & 16) x = (x + f) % f;
    else {
      if (x < 0) return 3;
      if (x >= f) return 1;
    }
    (h = i[x]), h == null || h.focus(a), (p += u);
  } while (h !== o.activeElement);
  return t & 6 && lv(h) && h.select(), 2;
}
function uv() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) &&
      window.navigator.maxTouchPoints > 0)
  );
}
function sv() {
  return /Android/gi.test(window.navigator.userAgent);
}
function av() {
  return uv() || sv();
}
function Yr(e, t, n) {
  let r = Ru(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      document.addEventListener(e, l, n),
      () => document.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function cv(e, t, n) {
  let r = Ru(t);
  g.useEffect(() => {
    function l(o) {
      r.current(o);
    }
    return (
      window.addEventListener(e, l, n),
      () => window.removeEventListener(e, l, n)
    );
  }, [e, n]);
}
function dv(e, t, n = !0) {
  let r = g.useRef(!1);
  g.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function l(i, u) {
    if (!r.current || i.defaultPrevented) return;
    let s = u(i);
    if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
    let a = (function p(f) {
      return typeof f == 'function'
        ? p(f())
        : Array.isArray(f) || f instanceof Set
        ? f
        : [f];
    })(e);
    for (let p of a) {
      if (p === null) continue;
      let f = p instanceof HTMLElement ? p : p.current;
      if (
        (f != null && f.contains(s)) ||
        (i.composed && i.composedPath().includes(f))
      )
        return;
    }
    return !Mu(s, Fu.Loose) && s.tabIndex !== -1 && i.preventDefault(), t(i, s);
  }
  let o = g.useRef(null);
  Yr(
    'pointerdown',
    (i) => {
      var u, s;
      r.current &&
        (o.current =
          ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null
            ? void 0
            : s[0]) || i.target);
    },
    !0
  ),
    Yr(
      'mousedown',
      (i) => {
        var u, s;
        r.current &&
          (o.current =
            ((s = (u = i.composedPath) == null ? void 0 : u.call(i)) == null
              ? void 0
              : s[0]) || i.target);
      },
      !0
    ),
    Yr(
      'click',
      (i) => {
        av() || (o.current && (l(i, () => o.current), (o.current = null)));
      },
      !0
    ),
    Yr(
      'touchend',
      (i) => l(i, () => (i.target instanceof HTMLElement ? i.target : null)),
      !0
    ),
    cv(
      'blur',
      (i) =>
        l(i, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null
        ),
      !0
    );
}
function fv(...e) {
  return g.useMemo(() => Jl(...e), [...e]);
}
function la(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : 'button';
  if (typeof n == 'string' && n.toLowerCase() === 'button') return 'button';
}
function pv(e, t) {
  let [n, r] = g.useState(() => la(e));
  return (
    St(() => {
      r(la(e));
    }, [e.type, e.as]),
    St(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'));
    }, [n, t]),
    n
  );
}
let mv = Symbol();
function ql(...e) {
  let t = g.useRef(e);
  g.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = me((r) => {
    for (let l of t.current)
      l != null && (typeof l == 'function' ? l(r) : (l.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[mv])) ? void 0 : n;
}
function oa(e) {
  return [e.screenX, e.screenY];
}
function hv() {
  let e = g.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = oa(t);
      return e.current[0] === n[0] && e.current[1] === n[1]
        ? !1
        : ((e.current = n), !0);
    },
    update(t) {
      e.current = oa(t);
    },
  };
}
function vv({ container: e, accept: t, walk: n, enabled: r = !0 }) {
  let l = g.useRef(t),
    o = g.useRef(n);
  g.useEffect(() => {
    (l.current = t), (o.current = n);
  }, [t, n]),
    St(() => {
      if (!e || !r) return;
      let i = Jl(e);
      if (!i) return;
      let u = l.current,
        s = o.current,
        a = Object.assign((f) => u(f), { acceptNode: u }),
        p = i.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, a, !1);
      for (; p.nextNode(); ) s(p.currentNode);
    }, [e, r, l, o]);
}
function ia(...e) {
  return Array.from(
    new Set(e.flatMap((t) => (typeof t == 'string' ? t.split(' ') : [])))
  )
    .filter(Boolean)
    .join(' ');
}
var Mi = ((e) => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(Mi || {}),
  gv = ((e) => (
    (e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e
  ))(gv || {});
function bl({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: l,
  visible: o = !0,
  name: i,
  mergeRefs: u,
}) {
  u = u ?? yv;
  let s = Wd(t, e);
  if (o) return Gr(s, n, r, i, u);
  let a = l ?? 0;
  if (a & 2) {
    let { static: p = !1, ...f } = s;
    if (p) return Gr(f, n, r, i, u);
  }
  if (a & 1) {
    let { unmount: p = !0, ...f } = s;
    return Nr(p ? 0 : 1, {
      0() {
        return null;
      },
      1() {
        return Gr({ ...f, hidden: !0, style: { display: 'none' } }, n, r, i, u);
      },
    });
  }
  return Gr(s, n, r, i, u);
}
function Gr(e, t = {}, n, r, l) {
  let {
      as: o = n,
      children: i,
      refName: u = 'ref',
      ...s
    } = Fo(e, ['unmount', 'static']),
    a = e.ref !== void 0 ? { [u]: e.ref } : {},
    p = typeof i == 'function' ? i(t) : i;
  'className' in s &&
    s.className &&
    typeof s.className == 'function' &&
    (s.className = s.className(t));
  let f = {};
  if (t) {
    let h = !1,
      x = [];
    for (let [w, y] of Object.entries(t))
      typeof y == 'boolean' && (h = !0), y === !0 && x.push(w);
    h && (f['data-headlessui-state'] = x.join(' '));
  }
  if (o === g.Fragment && Object.keys(ua(s)).length > 0) {
    if (!g.isValidElement(p) || (Array.isArray(p) && p.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${r} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(s).map((y) => `  - ${y}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((y) => `  - ${y}`).join(`
`),
        ].join(`
`)
      );
    let h = p.props,
      x =
        typeof (h == null ? void 0 : h.className) == 'function'
          ? (...y) => ia(h == null ? void 0 : h.className(...y), s.className)
          : ia(h == null ? void 0 : h.className, s.className),
      w = x ? { className: x } : {};
    return g.cloneElement(
      p,
      Object.assign(
        {},
        Wd(p.props, ua(Fo(s, ['ref']))),
        f,
        a,
        { ref: l(p.ref, a.ref) },
        w
      )
    );
  }
  return g.createElement(
    o,
    Object.assign(
      {},
      Fo(s, ['ref']),
      o !== g.Fragment && a,
      o !== g.Fragment && f
    ),
    p
  );
}
function yv(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e)
          n != null && (typeof n == 'function' ? n(t) : (n.current = t));
      };
}
function Wd(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let l in r)
      l.startsWith('on') && typeof r[l] == 'function'
        ? (n[l] != null || (n[l] = []), n[l].push(r[l]))
        : (t[l] = r[l]);
  if (t.disabled || t['aria-disabled'])
    return Object.assign(
      t,
      Object.fromEntries(Object.keys(n).map((r) => [r, void 0]))
    );
  for (let r in n)
    Object.assign(t, {
      [r](l, ...o) {
        let i = n[r];
        for (let u of i) {
          if (
            (l instanceof Event ||
              (l == null ? void 0 : l.nativeEvent) instanceof Event) &&
            l.defaultPrevented
          )
            return;
          u(l, ...o);
        }
      },
    });
  return t;
}
function eo(e) {
  var t;
  return Object.assign(g.forwardRef(e), {
    displayName: (t = e.displayName) != null ? t : e.name,
  });
}
function ua(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Fo(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let $u = g.createContext(null);
$u.displayName = 'OpenClosedContext';
var vr = ((e) => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))(vr || {});
function xv() {
  return g.useContext($u);
}
function wv({ value: e, children: t }) {
  return kt.createElement($u.Provider, { value: e }, t);
}
function Sv(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === '';
  return r && kv(n) ? !1 : r;
}
function kv(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Ev(e) {
  throw new Error('Unexpected object: ' + e);
}
var $e = ((e) => (
  (e[(e.First = 0)] = 'First'),
  (e[(e.Previous = 1)] = 'Previous'),
  (e[(e.Next = 2)] = 'Next'),
  (e[(e.Last = 3)] = 'Last'),
  (e[(e.Specific = 4)] = 'Specific'),
  (e[(e.Nothing = 5)] = 'Nothing'),
  e
))($e || {});
function Cv(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    l = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let o = 0; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 1: {
      for (let o = l - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 2: {
      for (let o = l + 1; o < n.length; ++o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 3: {
      for (let o = n.length - 1; o >= 0; --o)
        if (!t.resolveDisabled(n[o], o, n)) return o;
      return r;
    }
    case 4: {
      for (let o = 0; o < n.length; ++o)
        if (t.resolveId(n[o], o, n) === e.id) return o;
      return r;
    }
    case 5:
      return null;
    default:
      Ev(e);
  }
}
var te = ((e) => (
  (e.Space = ' '),
  (e.Enter = 'Enter'),
  (e.Escape = 'Escape'),
  (e.Backspace = 'Backspace'),
  (e.Delete = 'Delete'),
  (e.ArrowLeft = 'ArrowLeft'),
  (e.ArrowUp = 'ArrowUp'),
  (e.ArrowRight = 'ArrowRight'),
  (e.ArrowDown = 'ArrowDown'),
  (e.Home = 'Home'),
  (e.End = 'End'),
  (e.PageUp = 'PageUp'),
  (e.PageDown = 'PageDown'),
  (e.Tab = 'Tab'),
  e
))(te || {});
let sa =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function aa(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : '',
    l = e.cloneNode(!0);
  if (!(l instanceof HTMLElement)) return r;
  let o = !1;
  for (let u of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    u.remove(), (o = !0);
  let i = o ? ((n = l.innerText) != null ? n : '') : r;
  return sa.test(i) && (i = i.replace(sa, '')), i;
}
function jv(e) {
  let t = e.getAttribute('aria-label');
  if (typeof t == 'string') return t.trim();
  let n = e.getAttribute('aria-labelledby');
  if (n) {
    let r = n
      .split(' ')
      .map((l) => {
        let o = document.getElementById(l);
        if (o) {
          let i = o.getAttribute('aria-label');
          return typeof i == 'string' ? i.trim() : aa(o).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(', ');
  }
  return aa(e).trim();
}
function Nv(e) {
  let t = g.useRef(''),
    n = g.useRef('');
  return me(() => {
    let r = e.current;
    if (!r) return '';
    let l = r.innerText;
    if (t.current === l) return n.current;
    let o = jv(r).trim().toLowerCase();
    return (t.current = l), (n.current = o), o;
  });
}
var Pv = ((e) => (
    (e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e
  ))(Pv || {}),
  _v = ((e) => (
    (e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e
  ))(_v || {}),
  Iv = ((e) => (
    (e[(e.OpenMenu = 0)] = 'OpenMenu'),
    (e[(e.CloseMenu = 1)] = 'CloseMenu'),
    (e[(e.GoToItem = 2)] = 'GoToItem'),
    (e[(e.Search = 3)] = 'Search'),
    (e[(e.ClearSearch = 4)] = 'ClearSearch'),
    (e[(e.RegisterItem = 5)] = 'RegisterItem'),
    (e[(e.UnregisterItem = 6)] = 'UnregisterItem'),
    e
  ))(Iv || {});
function Mo(e, t = (n) => n) {
  let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
    r = Vd(t(e.items.slice()), (o) => o.dataRef.current.domRef.current),
    l = n ? r.indexOf(n) : null;
  return l === -1 && (l = null), { items: r, activeItemIndex: l };
}
let Lv = {
    1(e) {
      return e.menuState === 1
        ? e
        : { ...e, activeItemIndex: null, menuState: 1 };
    },
    0(e) {
      return e.menuState === 0 ? e : { ...e, __demoMode: !1, menuState: 0 };
    },
    2: (e, t) => {
      var n;
      let r = Mo(e),
        l = Cv(t, {
          resolveItems: () => r.items,
          resolveActiveIndex: () => r.activeItemIndex,
          resolveId: (o) => o.id,
          resolveDisabled: (o) => o.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: '',
        activeItemIndex: l,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    3: (e, t) => {
      let n = e.searchQuery !== '' ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        l = (
          e.activeItemIndex !== null
            ? e.items
                .slice(e.activeItemIndex + n)
                .concat(e.items.slice(0, e.activeItemIndex + n))
            : e.items
        ).find((i) => {
          var u;
          return (
            ((u = i.dataRef.current.textValue) == null
              ? void 0
              : u.startsWith(r)) && !i.dataRef.current.disabled
          );
        }),
        o = l ? e.items.indexOf(l) : -1;
      return o === -1 || o === e.activeItemIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeItemIndex: o, activationTrigger: 1 };
    },
    4(e) {
      return e.searchQuery === ''
        ? e
        : { ...e, searchQuery: '', searchActiveItemIndex: null };
    },
    5: (e, t) => {
      let n = Mo(e, (r) => [...r, { id: t.id, dataRef: t.dataRef }]);
      return { ...e, ...n };
    },
    6: (e, t) => {
      let n = Mo(e, (r) => {
        let l = r.findIndex((o) => o.id === t.id);
        return l !== -1 && r.splice(l, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
  },
  zu = g.createContext(null);
zu.displayName = 'MenuContext';
function to(e) {
  let t = g.useContext(zu);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, to), n);
  }
  return t;
}
function Tv(e, t) {
  return Nr(t.type, Lv, e, t);
}
let Rv = g.Fragment;
function Ov(e, t) {
  let { __demoMode: n = !1, ...r } = e,
    l = g.useReducer(Tv, {
      __demoMode: n,
      menuState: n ? 0 : 1,
      buttonRef: g.createRef(),
      itemsRef: g.createRef(),
      items: [],
      searchQuery: '',
      activeItemIndex: null,
      activationTrigger: 1,
    }),
    [{ menuState: o, itemsRef: i, buttonRef: u }, s] = l,
    a = ql(t);
  dv(
    [u, i],
    (x, w) => {
      var y;
      s({ type: 1 }),
        Mu(w, Fu.Loose) ||
          (x.preventDefault(), (y = u.current) == null || y.focus());
    },
    o === 0
  );
  let p = me(() => {
      s({ type: 1 });
    }),
    f = g.useMemo(() => ({ open: o === 0, close: p }), [o, p]),
    h = { ref: a };
  return kt.createElement(
    zu.Provider,
    { value: l },
    kt.createElement(
      wv,
      { value: Nr(o, { 0: vr.Open, 1: vr.Closed }) },
      bl({ ourProps: h, theirProps: r, slot: f, defaultTag: Rv, name: 'Menu' })
    )
  );
}
let Fv = 'button';
function Mv(e, t) {
  var n;
  let r = Ou(),
    { id: l = `headlessui-menu-button-${r}`, ...o } = e,
    [i, u] = to('Menu.Button'),
    s = ql(i.buttonRef, t),
    a = Ud(),
    p = me((y) => {
      switch (y.key) {
        case te.Space:
        case te.Enter:
        case te.ArrowDown:
          y.preventDefault(),
            y.stopPropagation(),
            u({ type: 0 }),
            a.nextFrame(() => u({ type: 2, focus: $e.First }));
          break;
        case te.ArrowUp:
          y.preventDefault(),
            y.stopPropagation(),
            u({ type: 0 }),
            a.nextFrame(() => u({ type: 2, focus: $e.Last }));
          break;
      }
    }),
    f = me((y) => {
      switch (y.key) {
        case te.Space:
          y.preventDefault();
          break;
      }
    }),
    h = me((y) => {
      if (Sv(y.currentTarget)) return y.preventDefault();
      e.disabled ||
        (i.menuState === 0
          ? (u({ type: 1 }),
            a.nextFrame(() => {
              var C;
              return (C = i.buttonRef.current) == null
                ? void 0
                : C.focus({ preventScroll: !0 });
            }))
          : (y.preventDefault(), u({ type: 0 })));
    }),
    x = g.useMemo(() => ({ open: i.menuState === 0 }), [i]),
    w = {
      ref: s,
      id: l,
      type: pv(e, i.buttonRef),
      'aria-haspopup': 'menu',
      'aria-controls': (n = i.itemsRef.current) == null ? void 0 : n.id,
      'aria-expanded': i.menuState === 0,
      onKeyDown: p,
      onKeyUp: f,
      onClick: h,
    };
  return bl({
    ourProps: w,
    theirProps: o,
    slot: x,
    defaultTag: Fv,
    name: 'Menu.Button',
  });
}
let $v = 'div',
  zv = Mi.RenderStrategy | Mi.Static;
function Dv(e, t) {
  var n, r;
  let l = Ou(),
    { id: o = `headlessui-menu-items-${l}`, ...i } = e,
    [u, s] = to('Menu.Items'),
    a = ql(u.itemsRef, t),
    p = fv(u.itemsRef),
    f = Ud(),
    h = xv(),
    x = (() => (h !== null ? (h & vr.Open) === vr.Open : u.menuState === 0))();
  g.useEffect(() => {
    let c = u.itemsRef.current;
    c &&
      u.menuState === 0 &&
      c !== (p == null ? void 0 : p.activeElement) &&
      c.focus({ preventScroll: !0 });
  }, [u.menuState, u.itemsRef, p]),
    vv({
      container: u.itemsRef.current,
      enabled: u.menuState === 0,
      accept(c) {
        return c.getAttribute('role') === 'menuitem'
          ? NodeFilter.FILTER_REJECT
          : c.hasAttribute('role')
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
      walk(c) {
        c.setAttribute('role', 'none');
      },
    });
  let w = me((c) => {
      var v, S;
      switch ((f.dispose(), c.key)) {
        case te.Space:
          if (u.searchQuery !== '')
            return (
              c.preventDefault(),
              c.stopPropagation(),
              s({ type: 3, value: c.key })
            );
        case te.Enter:
          if (
            (c.preventDefault(),
            c.stopPropagation(),
            s({ type: 1 }),
            u.activeItemIndex !== null)
          ) {
            let { dataRef: k } = u.items[u.activeItemIndex];
            (S = (v = k.current) == null ? void 0 : v.domRef.current) == null ||
              S.click();
          }
          Bd(u.buttonRef.current);
          break;
        case te.ArrowDown:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            s({ type: 2, focus: $e.Next })
          );
        case te.ArrowUp:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            s({ type: 2, focus: $e.Previous })
          );
        case te.Home:
        case te.PageUp:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            s({ type: 2, focus: $e.First })
          );
        case te.End:
        case te.PageDown:
          return (
            c.preventDefault(),
            c.stopPropagation(),
            s({ type: 2, focus: $e.Last })
          );
        case te.Escape:
          c.preventDefault(),
            c.stopPropagation(),
            s({ type: 1 }),
            wn().nextFrame(() => {
              var k;
              return (k = u.buttonRef.current) == null
                ? void 0
                : k.focus({ preventScroll: !0 });
            });
          break;
        case te.Tab:
          c.preventDefault(),
            c.stopPropagation(),
            s({ type: 1 }),
            wn().nextFrame(() => {
              ov(u.buttonRef.current, c.shiftKey ? Fi.Previous : Fi.Next);
            });
          break;
        default:
          c.key.length === 1 &&
            (s({ type: 3, value: c.key }),
            f.setTimeout(() => s({ type: 4 }), 350));
          break;
      }
    }),
    y = me((c) => {
      switch (c.key) {
        case te.Space:
          c.preventDefault();
          break;
      }
    }),
    C = g.useMemo(() => ({ open: u.menuState === 0 }), [u]),
    m = {
      'aria-activedescendant':
        u.activeItemIndex === null || (n = u.items[u.activeItemIndex]) == null
          ? void 0
          : n.id,
      'aria-labelledby': (r = u.buttonRef.current) == null ? void 0 : r.id,
      id: o,
      onKeyDown: w,
      onKeyUp: y,
      role: 'menu',
      tabIndex: 0,
      ref: a,
    };
  return bl({
    ourProps: m,
    theirProps: i,
    slot: C,
    defaultTag: $v,
    features: zv,
    visible: x,
    name: 'Menu.Items',
  });
}
let Uv = g.Fragment;
function Av(e, t) {
  let n = Ou(),
    { id: r = `headlessui-menu-item-${n}`, disabled: l = !1, ...o } = e,
    [i, u] = to('Menu.Item'),
    s = i.activeItemIndex !== null ? i.items[i.activeItemIndex].id === r : !1,
    a = g.useRef(null),
    p = ql(t, a);
  St(() => {
    if (i.__demoMode || i.menuState !== 0 || !s || i.activationTrigger === 0)
      return;
    let k = wn();
    return (
      k.requestAnimationFrame(() => {
        var j, _;
        (_ = (j = a.current) == null ? void 0 : j.scrollIntoView) == null ||
          _.call(j, { block: 'nearest' });
      }),
      k.dispose
    );
  }, [i.__demoMode, a, s, i.menuState, i.activationTrigger, i.activeItemIndex]);
  let f = Nv(a),
    h = g.useRef({
      disabled: l,
      domRef: a,
      get textValue() {
        return f();
      },
    });
  St(() => {
    h.current.disabled = l;
  }, [h, l]),
    St(
      () => (u({ type: 5, id: r, dataRef: h }), () => u({ type: 6, id: r })),
      [h, r]
    );
  let x = me(() => {
      u({ type: 1 });
    }),
    w = me((k) => {
      if (l) return k.preventDefault();
      u({ type: 1 }), Bd(i.buttonRef.current);
    }),
    y = me(() => {
      if (l) return u({ type: 2, focus: $e.Nothing });
      u({ type: 2, focus: $e.Specific, id: r });
    }),
    C = hv(),
    m = me((k) => C.update(k)),
    c = me((k) => {
      C.wasMoved(k) &&
        (l || s || u({ type: 2, focus: $e.Specific, id: r, trigger: 0 }));
    }),
    v = me((k) => {
      C.wasMoved(k) && (l || (s && u({ type: 2, focus: $e.Nothing })));
    }),
    S = g.useMemo(() => ({ active: s, disabled: l, close: x }), [s, l, x]);
  return bl({
    ourProps: {
      id: r,
      ref: p,
      role: 'menuitem',
      tabIndex: l === !0 ? void 0 : -1,
      'aria-disabled': l === !0 ? !0 : void 0,
      disabled: void 0,
      onClick: w,
      onFocus: y,
      onPointerEnter: m,
      onMouseEnter: m,
      onPointerMove: c,
      onMouseMove: c,
      onPointerLeave: v,
      onMouseLeave: v,
    },
    theirProps: o,
    slot: S,
    defaultTag: Uv,
    name: 'Menu.Item',
  });
}
let Bv = eo(Ov),
  Vv = eo(Mv),
  Wv = eo(Dv),
  Hv = eo(Av),
  Dt = Object.assign(Bv, { Button: Vv, Items: Wv, Item: Hv });
function We({ name: e, url: t }) {
  return d.jsx(d.Fragment, {
    children: d.jsx(Dt.Item, {
      children: ({ active: n }) =>
        d.jsx(
          Ue,
          {
            to: t,
            className: `${
              n ? 'bg-primary text-white' : 'text-gray-900'
            } group flex w-full items-center rounded-md px-2 py-2 text-md text-center`,
            children: e,
          },
          t
        ),
    }),
  });
}
function Qv() {
  const e = g.useContext(Cr);
  return d.jsxs(Dt, {
    as: 'div',
    className: 'relative',
    children: [
      d.jsx('div', {
        children: d.jsx(Dt.Button, {
          className: 'inline-flex w-full justify-center',
          children: d.jsx(Uh, { className: 'h-8 w-8' }),
        }),
      }),
      d.jsx(Dt.Items, {
        className: 'absolute right-4 mt-2 w-32 bg-white border-2 rounded-lg',
        children: d.jsxs('div', {
          className: 'px-1 py-1',
          children: [
            d.jsx(We, { name: 'Home', url: '/' }),
            d.jsx(We, { name: 'Sign Out', url: '/sign-out' }),
            (e == null ? void 0 : e.user.admin) &&
              d.jsx(We, { name: 'Add Product', url: '/admin-add' }),
          ],
        }),
      }),
    ],
  });
}
function Kv({ searchString: e }) {
  const t = g.useContext(Cr);
  return d.jsxs('div', {
    className: 'container h-screen my-auto mx-auto',
    children: [
      d.jsxs('div', {
        className:
          'flex items-center justify-center border-b-2 flex-col md:flex-row',
        children: [
          d.jsxs('div', {
            className: 'flex w-full md:w-4/12 items-center justify-around',
            children: [
              d.jsx(Ue, {
                to: '/',
                className: 'md:w-5/12 w-4/12',
                children: d.jsx('img', {
                  alt: 'pikachu logo',
                  src: '/images/pikachu-head.svg',
                }),
              }),
              d.jsx('h1', {
                className: 'md:block md:w-6/12 w-4/12',
                children: 'Gimme Pokemon',
              }),
              d.jsxs(Dt, {
                as: 'div',
                className: 'md:hidden w-4/12 relative',
                children: [
                  d.jsx('div', {
                    children: d.jsx(Dt.Button, {
                      className: 'inline-flex w-full justify-end pr-4',
                      children: d.jsx(Ch, { className: 'h-8 w-8' }),
                    }),
                  }),
                  d.jsx(Dt.Items, {
                    className:
                      'absolute mt-2 right-4 w-48 bg-white border-2 rounded-lg z-10',
                    children: d.jsxs('div', {
                      className: 'px-1 py-1 text-2xl',
                      children: [
                        d.jsx(We, { name: 'Cards', url: 'catalog/cards' }),
                        d.jsx(We, {
                          name: 'Toys/Plush',
                          url: 'catalog/toys-plush',
                        }),
                        d.jsx(We, { name: 'Games', url: 'catalog/games' }),
                        d.jsx(We, { name: 'Other', url: 'catalog/other' }),
                        d.jsx(We, {
                          name: t ? 'Sign Out' : 'Sign In',
                          url: t ? 'sign-out' : 'sign-in',
                        }),
                        d.jsx(We, {
                          name: 'Cart',
                          url: `cart/${t ? t.user.userId : 'guest'}`,
                        }),
                        (t == null ? void 0 : t.user.admin) &&
                          d.jsx(We, { name: 'Add Product', url: '/admin-add' }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          d.jsx('div', {
            className: 'md:block w-6/12 hidden',
            children: d.jsx(na, { searchString: e }),
          }),
          d.jsxs('div', {
            className: 'md:flex md:w-4/12 md:items-center hidden',
            children: [
              d.jsx(Ue, {
                to: t ? '' : 'sign-in',
                className: 'w-6/12',
                children: t ? d.jsx(Qv, {}) : 'Sign In',
              }),
              d.jsx(Ue, {
                to: `cart/${t ? t.user.userId : 'guest'}`,
                className: 'w-6/12',
                children: d.jsx($h, {
                  className: 'h-8 w-8 flex-no-shrink mr-auto ml-auto',
                }),
              }),
            ],
          }),
          d.jsx('div', {
            className: 'md:hidden w-full flex z-0',
            children: d.jsx(na, { searchString: e }),
          }),
        ],
      }),
      d.jsxs('div', {
        className: 'md:flex md:border-b-2 md:p-1 hidden',
        children: [
          d.jsx(Kr, {
            src: '/images/blank-cards.svg',
            alt: 'blank cards',
            text: 'Cards',
            link: 'catalog/cards',
          }),
          d.jsx(Kr, {
            src: '/images/eevee.svg',
            alt: 'Eevee',
            text: 'Toys/Plush',
            link: 'catalog/toys-plush',
          }),
          d.jsx(Kr, {
            src: '/images/gameboy.svg',
            alt: 'Gamboy Color',
            text: 'Games',
            link: 'catalog/games',
          }),
          d.jsx(Kr, {
            src: '/images/pokeball.svg',
            alt: 'Pokeball',
            text: 'Other',
            link: 'catalog/others',
          }),
        ],
      }),
      d.jsx(ah, {}),
    ],
  });
}
function ca({ action: e, user: t }) {
  const { signUpOrIn: n } = jn(),
    r = Er(),
    [l, o] = g.useState(),
    [i, u] = g.useState(!1),
    [s, a] = g.useState({ username: 'admin', password: 'admin' });
  if (l)
    return (
      console.error('Fetch error:', l),
      d.jsx('div', { children: `Error! ${l}` })
    );
  if (i) return d.jsx(jr, {});
  async function p(w) {
    w.preventDefault();
    const y = new FormData(w.currentTarget);
    let { username: C, password: m } = Object.fromEntries(y.entries());
    try {
      u(!0);
      const c = await n(e, C, m);
      e === 'sign-up'
        ? (r('/sign-in'), a({ username: '', password: '' }))
        : c.user && c.token && (t(c), r('/'));
    } catch (c) {
      o(c);
    } finally {
      u(!1);
    }
  }
  const f = e === 'sign-up' ? '/sign-in' : '/sign-up',
    h = e === 'sign-up' ? 'Sign in instead' : 'Register now',
    x = e === 'sign-up' ? 'Register' : 'Log In';
  return d.jsx('div', {
    className: 'container flex w-full justify-center items-center p-10',
    children: d.jsxs('form', {
      className: 'border-2 p-6 rounded-lg',
      onSubmit: p,
      children: [
        d.jsx('p', { className: 'mb-4 text-lg', children: x }),
        d.jsx('div', {
          className: 'mb-3',
          children: d.jsxs('label', {
            className: 'form-label flex',
            children: [
              'Username:',
              d.jsx('input', {
                required: !0,
                value: s.username,
                onChange: (w) => a({ ...s, username: w.target.value }),
                autoFocus: !0,
                type: 'text',
                name: 'username',
                className: 'form-control border-2 rounded-lg ml-1',
              }),
            ],
          }),
        }),
        d.jsx('div', {
          className: 'mb-3',
          children: d.jsxs('label', {
            className: 'form-label flex',
            children: [
              'Password:',
              d.jsx('input', {
                value: s.password,
                onChange: (w) => a({ ...s, password: w.target.value }),
                required: !0,
                type: 'password',
                name: 'password',
                className: 'form-control border-2 rounded-lg ml-1',
              }),
            ],
          }),
        }),
        d.jsxs('div', {
          className: 'flex justify-between items-center',
          children: [
            d.jsx('small', {
              children: d.jsx(Ue, {
                className: 'text-blue-400',
                to: f,
                children: h,
              }),
            }),
            d.jsx('button', { type: 'submit', className: '', children: x }),
          ],
        }),
      ],
    }),
  });
}
function Yv() {
  const [e, t] = g.useState(),
    [n, r] = g.useState(!1),
    l = Er();
  async function o(i) {
    r(!0), i.preventDefault();
    const u = new FormData(i.currentTarget);
    try {
      const p = await (
        await fetch('/upload', { method: 'POST', body: u })
      ).json();
      if (!p)
        return d.jsx('div', {
          className: 'text-red-900 text-2xl',
          children: 'Item was not added',
        });
      r(!1), l(`/products/${p.productId}`);
    } catch (s) {
      t(s);
    }
  }
  return n
    ? d.jsx(jr, {})
    : e
    ? (console.error('Fetch error:', e),
      d.jsx('div', { children: `Error! ${e}` }))
    : d.jsx('div', {
        className: 'container flex justify-center mt-10',
        children: d.jsxs('form', {
          className: 'flex border-2 p-5 rounded-lg',
          onSubmit: o,
          children: [
            d.jsxs('div', {
              className: 'flex-col justify-center items-center w-6/12',
              children: [
                d.jsx('div', {
                  className: 'mb-3',
                  children: d.jsxs('label', {
                    className: 'form-label flex flex-col',
                    children: [
                      'Product Name:',
                      d.jsx('input', {
                        required: !0,
                        autoFocus: !0,
                        type: 'text',
                        name: 'name',
                        className: 'form-control border-2 rounded-lg ml-1',
                      }),
                    ],
                  }),
                }),
                d.jsx('div', {
                  className: 'mb-3',
                  children: d.jsxs('label', {
                    className: 'form-label flex flex-col',
                    children: [
                      'Price:',
                      d.jsx('input', {
                        required: !0,
                        autoFocus: !0,
                        type: 'text',
                        name: 'price',
                        className: 'form-control border-2 rounded-lg ml-1',
                      }),
                    ],
                  }),
                }),
                d.jsxs('div', {
                  className: 'mb-3 flex flex-col ',
                  children: [
                    d.jsxs('label', {
                      className: 'form-label',
                      children: [
                        'Stock:',
                        d.jsxs('select', {
                          name: 'stock',
                          className: 'form-control border-2 rounded-lg ml-1',
                          children: [
                            d.jsx('option', { value: 1, children: '1' }),
                            d.jsx('option', { value: 2, children: '2' }),
                            d.jsx('option', { value: 3, children: '3' }),
                            d.jsx('option', { value: 4, children: '4' }),
                            d.jsx('option', { value: 5, children: '5' }),
                          ],
                        }),
                      ],
                    }),
                    d.jsxs('label', {
                      className: 'form-label',
                      children: [
                        'Type:',
                        d.jsxs('select', {
                          name: 'type',
                          className: 'form-control border-2 rounded-lg ml-1',
                          children: [
                            d.jsx('option', {
                              value: 'card',
                              children: 'Card',
                            }),
                            d.jsx('option', { value: 'set', children: 'Set' }),
                            d.jsx('option', {
                              value: 'toys-plush',
                              children: 'Toys/Plush',
                            }),
                            d.jsx('option', {
                              value: 'game',
                              children: 'Games',
                            }),
                            d.jsx('option', {
                              value: 'other',
                              children: 'Other',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                d.jsx('div', {
                  className: 'mb-3 w-5/6 ml-auto mr-auto',
                  children: d.jsx('input', {
                    className: 'border w-11/12 rounded-sm',
                    required: !0,
                    type: 'file',
                    name: 'image',
                    accept: '.png, .jpg, .jpeg, .gif, .svg',
                  }),
                }),
                d.jsx('button', {
                  type: 'submit',
                  className: 'border rounded-lg p-2',
                  children: 'Upload',
                }),
              ],
            }),
            d.jsx('div', {
              className: 'w-10/12',
              children: d.jsx('div', {
                className: 'mb-3',
                children: d.jsxs('label', {
                  className: 'form-label flex flex-col',
                  children: [
                    'Long Description:',
                    d.jsx('textarea', {
                      name: 'longDescription',
                      className: 'form-control border-2 rounded-lg ml-1',
                      rows: 10,
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
      });
}
function $n({ type: e, searchString: t }) {
  const [n, r] = g.useState(),
    [l, o] = g.useState(),
    [i, u] = g.useState(!0);
  return (
    g.useEffect(() => {
      async function s() {
        try {
          const a = await Ah({ type: e, searchString: t });
          r(a);
        } catch (a) {
          o(a);
        } finally {
          u(!1);
        }
      }
      s();
    }, [e, t]),
    i
      ? d.jsx(jr, {})
      : l
      ? (console.error('Fetch error:', l),
        d.jsx('div', { children: `Error! ${l}` }))
      : d.jsx('div', {
          className: 'container',
          children: d.jsx('div', {
            className:
              'flex md:flex-wrap flex-col md:flex-row justify-center items-end',
            children: n
              ? n.map((s) =>
                  d.jsx(
                    Qh,
                    {
                      name: s.name,
                      price: s.price,
                      imageUrl: s.imageUrl,
                      productId: s.productId,
                    },
                    s.productId
                  )
                )
              : null,
          }),
        })
  );
}
function Gv() {
  return d.jsx('div', {
    className: 'h-2/3 flex items-center justify-center',
    children: d.jsx('div', {
      className: 'row',
      children: d.jsxs('div', {
        className: 'col text-center mb-5',
        children: [
          d.jsx('h3', {
            children: 'Uh oh, we could not find the page you were looking for!',
          }),
          d.jsx('p', {
            className: 'text-muted',
            children: d.jsx(Ue, { to: '/', children: 'Return to the home' }),
          }),
        ],
      }),
    }),
  });
}
const Hd = [
    { bannerUrl: '/images/Banner1.jpeg', id: 1 },
    { bannerUrl: '/images/Banner2.jpeg', id: 2 },
    { bannerUrl: '/images/Banner3.jpeg', id: 3 },
    { bannerUrl: '/images/Banner4.jpeg', id: 4 },
    { bannerUrl: '/images/Banner0.jpeg', id: 0 },
  ],
  Xv = Hd.map((e) =>
    d.jsx(
      'li',
      {
        className: 'md:hidden p-2',
        children: d.jsx('img', { alt: 'banner', src: e.bannerUrl }),
      },
      e.bannerUrl
    )
  );
function Zv() {
  return d.jsxs('div', {
    className: 'container',
    children: [
      d.jsx('div', {
        className: 'hidden md:block',
        children: d.jsx(Bh, { banners: Hd }),
      }),
      d.jsx('ul', { children: Xv }),
    ],
  });
}
function Jv() {
  const { getProduct: e } = jn(),
    { productId: t } = Rd(),
    [n, r] = g.useState(),
    [l, o] = g.useState(!0),
    [i, u] = g.useState();
  return (
    g.useEffect(() => {
      async function s() {
        try {
          const a = await e(t);
          r(a);
        } catch (a) {
          u(a);
        } finally {
          o(!1);
        }
      }
      s();
    }, [t, e]),
    l
      ? d.jsx(jr, {})
      : i
      ? (console.error('Fetch error:', i),
        d.jsx('div', { children: `Error! ${i}` }))
      : n
      ? d.jsx('div', {
          className: 'container ml-auto mr-auto',
          children: n
            ? d.jsx(Kh, {
                name: n.name,
                price: n.price,
                imageUrl: n.imageUrl,
                productId: n.productId,
                longDescription: n.longDescription,
                stock: n.stock,
              })
            : null,
        })
      : null
  );
}
function qv({ user: e }) {
  const t = Er();
  return (
    e(void 0),
    d.jsx('div', {
      className: 'container flex justify-center items-center',
      children: d.jsxs('div', {
        className: 'mt-12',
        children: [
          d.jsx('p', {
            className: 'mb-4 text-lg',
            children: 'Sign Out Success!',
          }),
          d.jsx('button', {
            className:
              'text-white w-6/12 text-xs m-2 p-2 bg-blue-700 hover:bg-blue-800 active:ring-4 rounded-lg text-center',
            onClick: () => t('/'),
            children: 'Back to home!',
          }),
        ],
      }),
    })
  );
}
function bv() {
  const { viewCart: e, checkout: t } = jn(),
    [n, r] = g.useState(),
    [l, o] = g.useState(!0),
    [i, u] = g.useState(),
    s = Rd();
  let a = 0;
  g.useEffect(() => {
    async function f() {
      try {
        let h = await e(s.userId);
        (h = $d(h)), r(h);
      } catch (h) {
        u(h);
      } finally {
        o(!1);
      }
    }
    n || f();
  }, [n, e, s, a]),
    n && n.map((f) => (a += Number(f.price) * Number(f.quantity)));
  async function p() {
    o(!0);
    const f = await t(n);
    (window.location.href = f), o(!1);
  }
  return l
    ? d.jsx(jr, {})
    : i
    ? (console.error('Fetch error:', i),
      d.jsx('div', { children: `Error! ${i}` }))
    : d.jsxs('div', {
        className: 'container',
        children: [
          d.jsx('h1', {
            className: 'mt-4 mb-4 text-center text-2xl font-bold',
            children: 'Cart Items',
          }),
          d.jsxs('div', {
            className: 'flex md:items-start flex-col md:flex-row items-center',
            children: [
              d.jsx('div', {
                className: 'w-full md:w-8/12 p-4',
                children:
                  n &&
                  n.map((f) =>
                    d.jsx(
                      Hh,
                      {
                        user: s,
                        setCart: r,
                        name: f.name,
                        price: f.price,
                        imageUrl: f.imageUrl,
                        productId: f.productId,
                        cartId: f.cartId,
                        cartItemId: f.cartItemId,
                        quantityCart: f.quantity,
                      },
                      f.productId
                    )
                  ),
              }),
              d.jsx('div', {
                className: 'w-full md:w-4/12 flex justify-center p-4',
                children: d.jsxs('div', {
                  className:
                    'w-full rounded-lg border bg-gray-100 shadow-md p-4',
                  children: [
                    d.jsxs('div', {
                      className: 'mb-2 flex justify-between',
                      children: [
                        d.jsx('p', {
                          className: 'text-gray-700',
                          children: 'Subtotal',
                        }),
                        d.jsx('p', {
                          className: 'text-gray-700',
                          children: hr(a),
                        }),
                      ],
                    }),
                    d.jsxs('div', {
                      className: 'flex justify-between',
                      children: [
                        d.jsx('p', {
                          className: 'text-gray-700',
                          children: 'Shipping',
                        }),
                        d.jsx('p', {
                          className: 'text-gray-700',
                          children: '$4.99',
                        }),
                      ],
                    }),
                    d.jsx('hr', { className: 'my-4' }),
                    d.jsxs('div', {
                      className: 'flex justify-between',
                      children: [
                        d.jsx('p', {
                          className: 'text-lg font-bold',
                          children: 'Total',
                        }),
                        d.jsx('div', {
                          className: '',
                          children: d.jsxs('p', {
                            className: 'mb-1 text-lg font-bold',
                            children: [hr(a + 4.99), ' USD'],
                          }),
                        }),
                      ],
                    }),
                    d.jsx('button', {
                      onClick: p,
                      className:
                        'mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600',
                      children: 'Check out',
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      });
}
function e0() {
  const { viewCart: e, deleteCartItem: t } = jn(),
    [n, r] = g.useState(),
    l = g.useContext(Cr);
  return (
    g.useEffect(() => {
      async function o() {
        try {
          const i = l ? await e(l.user.userId) : await e('guest');
          r(i),
            i.forEach(
              async (u) =>
                await t({ cartId: u.cartId, cartItemId: u.cartItemId })
            );
        } catch {}
      }
      n || o();
    }),
    d.jsx('div', {
      className: 'bg-gray-100 h-screen flex items-start justify-center',
      children: d.jsxs('div', {
        className: 'bg-white p-6  md:mx-auto',
        children: [
          d.jsx('svg', {
            viewBox: '0 0 24 24',
            className: 'text-green-600 w-16 h-16 mx-auto my-6',
            children: d.jsx('path', {
              fill: 'currentColor',
              d: 'M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z',
            }),
          }),
          d.jsxs('div', {
            className: 'text-center',
            children: [
              d.jsx('h3', {
                className:
                  'md:text-2xl text-base text-gray-900 font-semibold text-center',
                children: 'Payment Done!',
              }),
              d.jsx('p', {
                className: 'text-gray-600 my-2',
                children:
                  'Thank you for completing your secure online payment.',
              }),
              d.jsx('p', { children: ' Have a great day! ' }),
              d.jsx('div', {
                className: 'py-10 text-center',
                children: d.jsx(Ue, {
                  to: '/',
                  className:
                    'rounded-lg px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3',
                  children: 'HOME',
                }),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function t0() {
  const [e, t] = g.useState(),
    [n, r] = g.useState();
  return d.jsx('div', {
    className: 'App',
    children: d.jsx(Cr.Provider, {
      value: e,
      children: d.jsx(dh, {
        children: d.jsxs(ie, {
          path: '/',
          element: d.jsx(Kv, { searchString: r }),
          children: [
            d.jsx(ie, { index: !0, element: d.jsx(Zv, {}) }),
            d.jsx(ie, {
              path: '/sign-in',
              element: d.jsx(ca, { user: t, action: 'sign-in' }),
            }),
            d.jsx(ie, {
              path: '/sign-up',
              element: d.jsx(ca, { user: t, action: 'sign-up' }),
            }),
            d.jsx(ie, { path: '/admin-add', element: d.jsx(Yv, {}) }),
            d.jsx(ie, {
              path: '/catalog/cards',
              element: d.jsx($n, { type: 'card' }),
            }),
            d.jsx(ie, {
              path: '/catalog/toys-plush',
              element: d.jsx($n, { type: 'toys-plush' }),
            }),
            d.jsx(ie, {
              path: '/catalog/games',
              element: d.jsx($n, { type: 'game' }),
            }),
            d.jsx(ie, {
              path: '/catalog/others',
              element: d.jsx($n, { type: 'other' }),
            }),
            d.jsx(ie, {
              path: '/catalog/search',
              element: d.jsx($n, { type: 'search', searchString: n }),
            }),
            d.jsx(ie, { path: '/products/:productId', element: d.jsx(Jv, {}) }),
            d.jsx(ie, { path: '/sign-out', element: d.jsx(qv, { user: t }) }),
            d.jsx(ie, { path: '/cart/:userId', element: d.jsx(bv, {}) }),
            d.jsx(ie, { path: '/success', element: d.jsx(e0, {}) }),
            d.jsx(ie, { path: '*', element: d.jsx(Gv, {}) }),
          ],
        }),
      }),
    }),
  });
}
const n0 = zo.createRoot(document.getElementById('root'));
n0.render(
  d.jsx(kt.StrictMode, { children: d.jsx(yh, { children: d.jsx(t0, {}) }) })
);
