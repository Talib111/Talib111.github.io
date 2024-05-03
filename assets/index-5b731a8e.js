import {
  r as A,
  a as Ve,
  G as me,
  g as nt,
  u as je,
  b as st,
  O as Ce,
  c as at,
  L as xe,
  d as He,
  R as lt,
  e as Ee,
  B as ct,
} from "./react-5020d5b0.js";
(function () {
  const h = document.createElement("link").relList;
  if (h && h.supports && h.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) v(u);
  new MutationObserver((u) => {
    for (const m of u)
      if (m.type === "childList")
        for (const l of m.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && v(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function y(u) {
    const m = {};
    return (
      u.integrity && (m.integrity = u.integrity),
      u.referrerPolicy && (m.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : u.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function v(u) {
    if (u.ep) return;
    u.ep = !0;
    const m = y(u);
    fetch(u.href, m);
  }
})();
var Qe = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ut = A,
  dt = Symbol.for("react.element"),
  pt = Symbol.for("react.fragment"),
  ft = Object.prototype.hasOwnProperty,
  mt = ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ht = { key: !0, ref: !0, __self: !0, __source: !0 };
function qe(i, h, y) {
  var v,
    u = {},
    m = null,
    l = null;
  y !== void 0 && (m = "" + y),
    h.key !== void 0 && (m = "" + h.key),
    h.ref !== void 0 && (l = h.ref);
  for (v in h) ft.call(h, v) && !ht.hasOwnProperty(v) && (u[v] = h[v]);
  if (i && i.defaultProps)
    for (v in ((h = i.defaultProps), h)) u[v] === void 0 && (u[v] = h[v]);
  return {
    $$typeof: dt,
    type: i,
    key: m,
    ref: l,
    props: u,
    _owner: mt.current,
  };
}
Ae.Fragment = pt;
Ae.jsx = qe;
Ae.jsxs = qe;
Qe.exports = Ae;
var t = Qe.exports,
  Me = {},
  Je = Ve;
(Me.createRoot = Je.createRoot), (Me.hydrateRoot = Je.hydrateRoot);
function yt(i) {
  return me({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z",
        },
      },
      {
        tag: "path",
        attr: {
          d: "M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z",
        },
      },
    ],
  })(i);
}
function _e(i) {
  return me({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z",
        },
      },
    ],
  })(i);
}
function Re(i) {
  return me({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59 7-7 7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z",
        },
      },
    ],
  })(i);
}
function bt(i) {
  return me({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z",
        },
      },
    ],
  })(i);
}
function Ze(i) {
  return me({
    tag: "svg",
    attr: { viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z",
        },
      },
    ],
  })(i);
}
const De = (i) => {
  const h = localStorage.getItem(i);
  return h || null;
};
var Xe = { exports: {} },
  gt = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  vt = gt,
  xt = vt;
function Ye() {}
function Ge() {}
Ge.resetWarningCache = Ye;
var jt = function () {
  function i(v, u, m, l, z, L) {
    if (L !== xt) {
      var c = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((c.name = "Invariant Violation"), c);
    }
  }
  i.isRequired = i;
  function h() {
    return i;
  }
  var y = {
    array: i,
    bigint: i,
    bool: i,
    func: i,
    number: i,
    object: i,
    string: i,
    symbol: i,
    any: i,
    arrayOf: h,
    element: i,
    elementType: i,
    instanceOf: h,
    node: i,
    objectOf: h,
    oneOf: h,
    oneOfType: h,
    shape: h,
    exact: h,
    checkPropTypes: Ge,
    resetWarningCache: Ye,
  };
  return (y.PropTypes = y), y;
};
Xe.exports = jt();
var wt = Xe.exports;
const ve = nt(wt);
var Ke = { exports: {} };
(() => {
  var i = {
      296: (u, m, l) => {
        var z = /^\s+|\s+$/g,
          L = /^[-+]0x[0-9a-f]+$/i,
          c = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          _ = parseInt,
          g = typeof l.g == "object" && l.g && l.g.Object === Object && l.g,
          O = typeof self == "object" && self && self.Object === Object && self,
          X = g || O || Function("return this")(),
          F = Object.prototype.toString,
          Y = Math.max,
          he = Math.min,
          ae = function () {
            return X.Date.now();
          };
        function ne(P) {
          var E = typeof P;
          return !!P && (E == "object" || E == "function");
        }
        function de(P) {
          if (typeof P == "number") return P;
          if (
            (function (j) {
              return (
                typeof j == "symbol" ||
                ((function (R) {
                  return !!R && typeof R == "object";
                })(j) &&
                  F.call(j) == "[object Symbol]")
              );
            })(P)
          )
            return NaN;
          if (ne(P)) {
            var E = typeof P.valueOf == "function" ? P.valueOf() : P;
            P = ne(E) ? E + "" : E;
          }
          if (typeof P != "string") return P === 0 ? P : +P;
          P = P.replace(z, "");
          var G = c.test(P);
          return G || b.test(P)
            ? _(P.slice(2), G ? 2 : 8)
            : L.test(P)
            ? NaN
            : +P;
        }
        u.exports = function (P, E, G) {
          var j,
            R,
            W,
            Z,
            M,
            K,
            J = 0,
            re = !1,
            ee = !1,
            se = !0;
          if (typeof P != "function")
            throw new TypeError("Expected a function");
          function oe(U) {
            var B = j,
              H = R;
            return (j = R = void 0), (J = U), (Z = P.apply(H, B));
          }
          function le(U) {
            var B = U - K;
            return K === void 0 || B >= E || B < 0 || (ee && U - J >= W);
          }
          function I() {
            var U = ae();
            if (le(U)) return ie(U);
            M = setTimeout(
              I,
              (function (B) {
                var H = E - (B - K);
                return ee ? he(H, W - (B - J)) : H;
              })(U)
            );
          }
          function ie(U) {
            return (M = void 0), se && j ? oe(U) : ((j = R = void 0), Z);
          }
          function V() {
            var U = ae(),
              B = le(U);
            if (((j = arguments), (R = this), (K = U), B)) {
              if (M === void 0)
                return (function (H) {
                  return (J = H), (M = setTimeout(I, E)), re ? oe(H) : Z;
                })(K);
              if (ee) return (M = setTimeout(I, E)), oe(K);
            }
            return M === void 0 && (M = setTimeout(I, E)), Z;
          }
          return (
            (E = de(E) || 0),
            ne(G) &&
              ((re = !!G.leading),
              (W = (ee = "maxWait" in G) ? Y(de(G.maxWait) || 0, E) : W),
              (se = "trailing" in G ? !!G.trailing : se)),
            (V.cancel = function () {
              M !== void 0 && clearTimeout(M),
                (J = 0),
                (j = K = R = M = void 0);
            }),
            (V.flush = function () {
              return M === void 0 ? Z : ie(ae());
            }),
            V
          );
        };
      },
      96: (u, m, l) => {
        var z = "Expected a function",
          L = NaN,
          c = "[object Symbol]",
          b = /^\s+|\s+$/g,
          _ = /^[-+]0x[0-9a-f]+$/i,
          g = /^0b[01]+$/i,
          O = /^0o[0-7]+$/i,
          X = parseInt,
          F = typeof l.g == "object" && l.g && l.g.Object === Object && l.g,
          Y = typeof self == "object" && self && self.Object === Object && self,
          he = F || Y || Function("return this")(),
          ae = Object.prototype.toString,
          ne = Math.max,
          de = Math.min,
          P = function () {
            return he.Date.now();
          };
        function E(j) {
          var R = typeof j;
          return !!j && (R == "object" || R == "function");
        }
        function G(j) {
          if (typeof j == "number") return j;
          if (
            (function (Z) {
              return (
                typeof Z == "symbol" ||
                ((function (M) {
                  return !!M && typeof M == "object";
                })(Z) &&
                  ae.call(Z) == c)
              );
            })(j)
          )
            return L;
          if (E(j)) {
            var R = typeof j.valueOf == "function" ? j.valueOf() : j;
            j = E(R) ? R + "" : R;
          }
          if (typeof j != "string") return j === 0 ? j : +j;
          j = j.replace(b, "");
          var W = g.test(j);
          return W || O.test(j) ? X(j.slice(2), W ? 2 : 8) : _.test(j) ? L : +j;
        }
        u.exports = function (j, R, W) {
          var Z = !0,
            M = !0;
          if (typeof j != "function") throw new TypeError(z);
          return (
            E(W) &&
              ((Z = "leading" in W ? !!W.leading : Z),
              (M = "trailing" in W ? !!W.trailing : M)),
            (function (K, J, re) {
              var ee,
                se,
                oe,
                le,
                I,
                ie,
                V = 0,
                U = !1,
                B = !1,
                H = !0;
              if (typeof K != "function") throw new TypeError(z);
              function ge(Q) {
                var te = ee,
                  ue = se;
                return (ee = se = void 0), (V = Q), (le = K.apply(ue, te));
              }
              function we(Q) {
                var te = Q - ie;
                return ie === void 0 || te >= J || te < 0 || (B && Q - V >= oe);
              }
              function ce() {
                var Q = P();
                if (we(Q)) return Te(Q);
                I = setTimeout(
                  ce,
                  (function (te) {
                    var ue = J - (te - ie);
                    return B ? de(ue, oe - (te - V)) : ue;
                  })(Q)
                );
              }
              function Te(Q) {
                return (I = void 0), H && ee ? ge(Q) : ((ee = se = void 0), le);
              }
              function pe() {
                var Q = P(),
                  te = we(Q);
                if (((ee = arguments), (se = this), (ie = Q), te)) {
                  if (I === void 0)
                    return (function (ue) {
                      return (V = ue), (I = setTimeout(ce, J)), U ? ge(ue) : le;
                    })(ie);
                  if (B) return (I = setTimeout(ce, J)), ge(ie);
                }
                return I === void 0 && (I = setTimeout(ce, J)), le;
              }
              return (
                (J = G(J) || 0),
                E(re) &&
                  ((U = !!re.leading),
                  (oe = (B = "maxWait" in re) ? ne(G(re.maxWait) || 0, J) : oe),
                  (H = "trailing" in re ? !!re.trailing : H)),
                (pe.cancel = function () {
                  I !== void 0 && clearTimeout(I),
                    (V = 0),
                    (ee = ie = se = I = void 0);
                }),
                (pe.flush = function () {
                  return I === void 0 ? le : Te(P());
                }),
                pe
              );
            })(j, R, { leading: Z, maxWait: R, trailing: M })
          );
        };
      },
      703: (u, m, l) => {
        var z = l(414);
        function L() {}
        function c() {}
        (c.resetWarningCache = L),
          (u.exports = function () {
            function b(O, X, F, Y, he, ae) {
              if (ae !== z) {
                var ne = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((ne.name = "Invariant Violation"), ne);
              }
            }
            function _() {
              return b;
            }
            b.isRequired = b;
            var g = {
              array: b,
              bigint: b,
              bool: b,
              func: b,
              number: b,
              object: b,
              string: b,
              symbol: b,
              any: b,
              arrayOf: _,
              element: b,
              elementType: b,
              instanceOf: _,
              node: b,
              objectOf: _,
              oneOf: _,
              oneOfType: _,
              shape: _,
              exact: _,
              checkPropTypes: c,
              resetWarningCache: L,
            };
            return (g.PropTypes = g), g;
          });
      },
      697: (u, m, l) => {
        u.exports = l(703)();
      },
      414: (u) => {
        u.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    h = {};
  function y(u) {
    var m = h[u];
    if (m !== void 0) return m.exports;
    var l = (h[u] = { exports: {} });
    return i[u](l, l.exports, y), l.exports;
  }
  (y.n = (u) => {
    var m = u && u.__esModule ? () => u.default : () => u;
    return y.d(m, { a: m }), m;
  }),
    (y.d = (u, m) => {
      for (var l in m)
        y.o(m, l) &&
          !y.o(u, l) &&
          Object.defineProperty(u, l, { enumerable: !0, get: m[l] });
    }),
    (y.g = (function () {
      if (typeof globalThis == "object") return globalThis;
      try {
        return this || new Function("return this")();
      } catch {
        if (typeof window == "object") return window;
      }
    })()),
    (y.o = (u, m) => Object.prototype.hasOwnProperty.call(u, m)),
    (y.r = (u) => {
      typeof Symbol < "u" &&
        Symbol.toStringTag &&
        Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(u, "__esModule", { value: !0 });
    });
  var v = {};
  (() => {
    y.r(v),
      y.d(v, {
        LazyLoadComponent: () => Ue,
        LazyLoadImage: () => it,
        trackWindowScroll: () => ie,
      });
    const u = A;
    var m = y.n(u),
      l = y(697);
    const z = Ve;
    var L = y.n(z);
    function c() {
      return (
        typeof window < "u" &&
        "IntersectionObserver" in window &&
        "isIntersecting" in window.IntersectionObserverEntry.prototype
      );
    }
    function b(n) {
      return (
        (b =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        b(n)
      );
    }
    function _(n, e) {
      var s = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(n);
        e &&
          (a = a.filter(function (x) {
            return Object.getOwnPropertyDescriptor(n, x).enumerable;
          })),
          s.push.apply(s, a);
      }
      return s;
    }
    function g(n, e, s) {
      return (
        (e = X(e)) in n
          ? Object.defineProperty(n, e, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[e] = s),
        n
      );
    }
    function O(n, e) {
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(n, X(a.key), a);
      }
    }
    function X(n) {
      var e = (function (s, a) {
        if (b(s) !== "object" || s === null) return s;
        var x = s[Symbol.toPrimitive];
        if (x !== void 0) {
          var w = x.call(s, "string");
          if (b(w) !== "object") return w;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(s);
      })(n);
      return b(e) === "symbol" ? e : String(e);
    }
    function F(n, e) {
      return (
        (F = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (s, a) {
              return (s.__proto__ = a), s;
            }),
        F(n, e)
      );
    }
    function Y(n) {
      return (
        (Y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Y(n)
      );
    }
    var he = function (n) {
        n.forEach(function (e) {
          e.isIntersecting && e.target.onVisible();
        });
      },
      ae = {},
      ne = (function (n) {
        (function (r, o) {
          if (typeof o != "function" && o !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (r.prototype = Object.create(o && o.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(r, "prototype", { writable: !1 }),
            o && F(r, o);
        })(N, n);
        var e,
          s,
          a,
          x,
          w =
            ((a = N),
            (x = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var r,
                o = Y(a);
              if (x) {
                var f = Y(this).constructor;
                r = Reflect.construct(o, arguments, f);
              } else r = o.apply(this, arguments);
              return (function (p, d) {
                if (d && (b(d) === "object" || typeof d == "function"))
                  return d;
                if (d !== void 0)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (T) {
                  if (T === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return T;
                })(p);
              })(this, r);
            });
        function N(r) {
          var o;
          if (
            ((function (p, d) {
              if (!(p instanceof d))
                throw new TypeError("Cannot call a class as a function");
            })(this, N),
            ((o = w.call(this, r)).supportsObserver =
              !r.scrollPosition && r.useIntersectionObserver && c()),
            o.supportsObserver)
          ) {
            var f = r.threshold;
            o.observer = (function (p) {
              return (
                (ae[p] =
                  ae[p] ||
                  new IntersectionObserver(he, { rootMargin: p + "px" })),
                ae[p]
              );
            })(f);
          }
          return o;
        }
        return (
          (e = N),
          (s = [
            {
              key: "componentDidMount",
              value: function () {
                this.placeholder &&
                  this.observer &&
                  ((this.placeholder.onVisible = this.props.onVisible),
                  this.observer.observe(this.placeholder)),
                  this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.observer &&
                  this.placeholder &&
                  this.observer.unobserve(this.placeholder);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: "getPlaceholderBoundingBox",
              value: function () {
                var r =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.props.scrollPosition,
                  o = this.placeholder.getBoundingClientRect(),
                  f = L().findDOMNode(this.placeholder).style,
                  p = parseInt(f.getPropertyValue("margin-left"), 10) || 0,
                  d = parseInt(f.getPropertyValue("margin-top"), 10) || 0;
                return {
                  bottom: r.y + o.bottom + d,
                  left: r.x + o.left + p,
                  right: r.x + o.right + p,
                  top: r.y + o.top + d,
                };
              },
            },
            {
              key: "isPlaceholderInViewport",
              value: function () {
                if (typeof window > "u" || !this.placeholder) return !1;
                var r = this.props,
                  o = r.scrollPosition,
                  f = r.threshold,
                  p = this.getPlaceholderBoundingBox(o),
                  d = o.y + window.innerHeight,
                  T = o.x,
                  k = o.x + window.innerWidth,
                  C = o.y;
                return (
                  C - f <= p.bottom &&
                  d + f >= p.top &&
                  T - f <= p.right &&
                  k + f >= p.left
                );
              },
            },
            {
              key: "updateVisibility",
              value: function () {
                this.isPlaceholderInViewport() && this.props.onVisible();
              },
            },
            {
              key: "render",
              value: function () {
                var r = this,
                  o = this.props,
                  f = o.className,
                  p = o.height,
                  d = o.placeholder,
                  T = o.style,
                  k = o.width;
                if (d && typeof d.type != "function")
                  return m().cloneElement(d, {
                    ref: function (S) {
                      return (r.placeholder = S);
                    },
                  });
                var C = (function (S) {
                  for (var $ = 1; $ < arguments.length; $++) {
                    var D = arguments[$] != null ? arguments[$] : {};
                    $ % 2
                      ? _(Object(D), !0).forEach(function (q) {
                          g(S, q, D[q]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          S,
                          Object.getOwnPropertyDescriptors(D)
                        )
                      : _(Object(D)).forEach(function (q) {
                          Object.defineProperty(
                            S,
                            q,
                            Object.getOwnPropertyDescriptor(D, q)
                          );
                        });
                  }
                  return S;
                })({ display: "inline-block" }, T);
                return (
                  k !== void 0 && (C.width = k),
                  p !== void 0 && (C.height = p),
                  m().createElement(
                    "span",
                    {
                      className: f,
                      ref: function (S) {
                        return (r.placeholder = S);
                      },
                      style: C,
                    },
                    d
                  )
                );
              },
            },
          ]),
          s && O(e.prototype, s),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          N
        );
      })(m().Component);
    (ne.propTypes = {
      onVisible: l.PropTypes.func.isRequired,
      className: l.PropTypes.string,
      height: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string]),
      placeholder: l.PropTypes.element,
      threshold: l.PropTypes.number,
      useIntersectionObserver: l.PropTypes.bool,
      scrollPosition: l.PropTypes.shape({
        x: l.PropTypes.number.isRequired,
        y: l.PropTypes.number.isRequired,
      }),
      width: l.PropTypes.oneOfType([l.PropTypes.number, l.PropTypes.string]),
    }),
      (ne.defaultProps = {
        className: "",
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0,
      });
    const de = ne;
    var P = y(296),
      E = y.n(P),
      G = y(96),
      j = y.n(G),
      R = function (n) {
        var e = getComputedStyle(n, null);
        return (
          e.getPropertyValue("overflow") +
          e.getPropertyValue("overflow-y") +
          e.getPropertyValue("overflow-x")
        );
      };
    const W = function (n) {
      if (!(n instanceof HTMLElement)) return window;
      for (var e = n; e && e instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(R(e))) return e;
        e = e.parentNode;
      }
      return window;
    };
    function Z(n) {
      return (
        (Z =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        Z(n)
      );
    }
    var M = ["delayMethod", "delayTime"];
    function K() {
      return (
        (K = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var a in s)
                  Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
              }
              return n;
            }),
        K.apply(this, arguments)
      );
    }
    function J(n, e) {
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(
            n,
            ((x = (function (w, N) {
              if (Z(w) !== "object" || w === null) return w;
              var r = w[Symbol.toPrimitive];
              if (r !== void 0) {
                var o = r.call(w, "string");
                if (Z(o) !== "object") return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(w);
            })(a.key)),
            Z(x) === "symbol" ? x : String(x)),
            a
          );
      }
      var x;
    }
    function re(n, e) {
      return (
        (re = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (s, a) {
              return (s.__proto__ = a), s;
            }),
        re(n, e)
      );
    }
    function ee(n, e) {
      if (e && (Z(e) === "object" || typeof e == "function")) return e;
      if (e !== void 0)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return se(n);
    }
    function se(n) {
      if (n === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return n;
    }
    function oe(n) {
      return (
        (oe = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        oe(n)
      );
    }
    var le = function () {
        return typeof window > "u" ? 0 : window.scrollX || window.pageXOffset;
      },
      I = function () {
        return typeof window > "u" ? 0 : window.scrollY || window.pageYOffset;
      };
    const ie = function (n) {
      var e = (function (s) {
        (function (f, p) {
          if (typeof p != "function" && p !== null)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (f.prototype = Object.create(p && p.prototype, {
            constructor: { value: f, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(f, "prototype", { writable: !1 }),
            p && re(f, p);
        })(o, s);
        var a,
          x,
          w,
          N,
          r =
            ((w = o),
            (N = (function () {
              if (
                typeof Reflect > "u" ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == "function") return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var f,
                p = oe(w);
              if (N) {
                var d = oe(this).constructor;
                f = Reflect.construct(p, arguments, d);
              } else f = p.apply(this, arguments);
              return ee(this, f);
            });
        function o(f) {
          var p;
          if (
            ((function (T, k) {
              if (!(T instanceof k))
                throw new TypeError("Cannot call a class as a function");
            })(this, o),
            ((p = r.call(this, f)).useIntersectionObserver =
              f.useIntersectionObserver && c()),
            p.useIntersectionObserver)
          )
            return ee(p);
          var d = p.onChangeScroll.bind(se(p));
          return (
            f.delayMethod === "debounce"
              ? (p.delayedScroll = E()(d, f.delayTime))
              : f.delayMethod === "throttle" &&
                (p.delayedScroll = j()(d, f.delayTime)),
            (p.state = { scrollPosition: { x: le(), y: I() } }),
            (p.baseComponentRef = m().createRef()),
            p
          );
        }
        return (
          (a = o),
          (x = [
            {
              key: "componentDidMount",
              value: function () {
                this.addListeners();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  (W(L().findDOMNode(this.baseComponentRef.current)) !==
                    this.scrollElement &&
                    (this.removeListeners(), this.addListeners()));
              },
            },
            {
              key: "addListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  ((this.scrollElement = W(
                    L().findDOMNode(this.baseComponentRef.current)
                  )),
                  this.scrollElement.addEventListener(
                    "scroll",
                    this.delayedScroll,
                    { passive: !0 }
                  ),
                  window.addEventListener("resize", this.delayedScroll, {
                    passive: !0,
                  }),
                  this.scrollElement !== window &&
                    window.addEventListener("scroll", this.delayedScroll, {
                      passive: !0,
                    }));
              },
            },
            {
              key: "removeListeners",
              value: function () {
                typeof window > "u" ||
                  this.useIntersectionObserver ||
                  (this.scrollElement.removeEventListener(
                    "scroll",
                    this.delayedScroll
                  ),
                  window.removeEventListener("resize", this.delayedScroll),
                  this.scrollElement !== window &&
                    window.removeEventListener("scroll", this.delayedScroll));
              },
            },
            {
              key: "onChangeScroll",
              value: function () {
                this.useIntersectionObserver ||
                  this.setState({ scrollPosition: { x: le(), y: I() } });
              },
            },
            {
              key: "render",
              value: function () {
                var f = this.props,
                  p =
                    (f.delayMethod,
                    f.delayTime,
                    (function (T, k) {
                      if (T == null) return {};
                      var C,
                        S,
                        $ = (function (q, be) {
                          if (q == null) return {};
                          var fe,
                            Ne,
                            Fe = {},
                            We = Object.keys(q);
                          for (Ne = 0; Ne < We.length; Ne++)
                            (fe = We[Ne]),
                              be.indexOf(fe) >= 0 || (Fe[fe] = q[fe]);
                          return Fe;
                        })(T, k);
                      if (Object.getOwnPropertySymbols) {
                        var D = Object.getOwnPropertySymbols(T);
                        for (S = 0; S < D.length; S++)
                          (C = D[S]),
                            k.indexOf(C) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                T,
                                C
                              ) &&
                                ($[C] = T[C]));
                      }
                      return $;
                    })(f, M)),
                  d = this.useIntersectionObserver
                    ? null
                    : this.state.scrollPosition;
                return m().createElement(
                  n,
                  K({ forwardRef: this.baseComponentRef, scrollPosition: d }, p)
                );
              },
            },
          ]) && J(a.prototype, x),
          Object.defineProperty(a, "prototype", { writable: !1 }),
          o
        );
      })(m().Component);
      return (
        (e.propTypes = {
          delayMethod: l.PropTypes.oneOf(["debounce", "throttle"]),
          delayTime: l.PropTypes.number,
          useIntersectionObserver: l.PropTypes.bool,
        }),
        (e.defaultProps = {
          delayMethod: "throttle",
          delayTime: 300,
          useIntersectionObserver: !0,
        }),
        e
      );
    };
    function V(n) {
      return (
        (V =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        V(n)
      );
    }
    function U(n, e) {
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(
            n,
            ((x = (function (w, N) {
              if (V(w) !== "object" || w === null) return w;
              var r = w[Symbol.toPrimitive];
              if (r !== void 0) {
                var o = r.call(w, "string");
                if (V(o) !== "object") return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(w);
            })(a.key)),
            V(x) === "symbol" ? x : String(x)),
            a
          );
      }
      var x;
    }
    function B(n, e) {
      return (
        (B = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (s, a) {
              return (s.__proto__ = a), s;
            }),
        B(n, e)
      );
    }
    function H(n) {
      return (
        (H = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        H(n)
      );
    }
    var ge = (function (n) {
      (function (r, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (r.prototype = Object.create(o && o.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          o && B(r, o);
      })(N, n);
      var e,
        s,
        a,
        x,
        w =
          ((a = N),
          (x = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var r,
              o = H(a);
            if (x) {
              var f = H(this).constructor;
              r = Reflect.construct(o, arguments, f);
            } else r = o.apply(this, arguments);
            return (function (p, d) {
              if (d && (V(d) === "object" || typeof d == "function")) return d;
              if (d !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (T) {
                if (T === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return T;
              })(p);
            })(this, r);
          });
      function N(r) {
        return (
          (function (o, f) {
            if (!(o instanceof f))
              throw new TypeError("Cannot call a class as a function");
          })(this, N),
          w.call(this, r)
        );
      }
      return (
        (e = N),
        (s = [
          {
            key: "render",
            value: function () {
              return m().createElement(de, this.props);
            },
          },
        ]) && U(e.prototype, s),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        N
      );
    })(m().Component);
    const we = ie(ge);
    function ce(n) {
      return (
        (ce =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        ce(n)
      );
    }
    function Te(n, e) {
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(
            n,
            ((x = (function (w, N) {
              if (ce(w) !== "object" || w === null) return w;
              var r = w[Symbol.toPrimitive];
              if (r !== void 0) {
                var o = r.call(w, "string");
                if (ce(o) !== "object") return o;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(w);
            })(a.key)),
            ce(x) === "symbol" ? x : String(x)),
            a
          );
      }
      var x;
    }
    function pe(n, e) {
      return (
        (pe = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (s, a) {
              return (s.__proto__ = a), s;
            }),
        pe(n, e)
      );
    }
    function Q(n) {
      if (n === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return n;
    }
    function te(n) {
      return (
        (te = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        te(n)
      );
    }
    var ue = (function (n) {
      (function (r, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (r.prototype = Object.create(o && o.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          o && pe(r, o);
      })(N, n);
      var e,
        s,
        a,
        x,
        w =
          ((a = N),
          (x = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var r,
              o = te(a);
            if (x) {
              var f = te(this).constructor;
              r = Reflect.construct(o, arguments, f);
            } else r = o.apply(this, arguments);
            return (function (p, d) {
              if (d && (ce(d) === "object" || typeof d == "function")) return d;
              if (d !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return Q(p);
            })(this, r);
          });
      function N(r) {
        var o;
        (function (k, C) {
          if (!(k instanceof C))
            throw new TypeError("Cannot call a class as a function");
        })(this, N),
          (o = w.call(this, r));
        var f = r.afterLoad,
          p = r.beforeLoad,
          d = r.scrollPosition,
          T = r.visibleByDefault;
        return (
          (o.state = { visible: T }),
          T && (p(), f()),
          (o.onVisible = o.onVisible.bind(Q(o))),
          (o.isScrollTracked = !!(
            d &&
            Number.isFinite(d.x) &&
            d.x >= 0 &&
            Number.isFinite(d.y) &&
            d.y >= 0
          )),
          o
        );
      }
      return (
        (e = N),
        (s = [
          {
            key: "componentDidUpdate",
            value: function (r, o) {
              o.visible !== this.state.visible && this.props.afterLoad();
            },
          },
          {
            key: "onVisible",
            value: function () {
              this.props.beforeLoad(), this.setState({ visible: !0 });
            },
          },
          {
            key: "render",
            value: function () {
              if (this.state.visible) return this.props.children;
              var r = this.props,
                o = r.className,
                f = r.delayMethod,
                p = r.delayTime,
                d = r.height,
                T = r.placeholder,
                k = r.scrollPosition,
                C = r.style,
                S = r.threshold,
                $ = r.useIntersectionObserver,
                D = r.width;
              return this.isScrollTracked || ($ && c())
                ? m().createElement(de, {
                    className: o,
                    height: d,
                    onVisible: this.onVisible,
                    placeholder: T,
                    scrollPosition: k,
                    style: C,
                    threshold: S,
                    useIntersectionObserver: $,
                    width: D,
                  })
                : m().createElement(we, {
                    className: o,
                    delayMethod: f,
                    delayTime: p,
                    height: d,
                    onVisible: this.onVisible,
                    placeholder: T,
                    style: C,
                    threshold: S,
                    width: D,
                  });
            },
          },
        ]) && Te(e.prototype, s),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        N
      );
    })(m().Component);
    (ue.propTypes = {
      afterLoad: l.PropTypes.func,
      beforeLoad: l.PropTypes.func,
      useIntersectionObserver: l.PropTypes.bool,
      visibleByDefault: l.PropTypes.bool,
    }),
      (ue.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1,
      });
    const Ue = ue;
    function ye(n) {
      return (
        (ye =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol == "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        ye(n)
      );
    }
    var tt = [
      "afterLoad",
      "beforeLoad",
      "delayMethod",
      "delayTime",
      "effect",
      "placeholder",
      "placeholderSrc",
      "scrollPosition",
      "threshold",
      "useIntersectionObserver",
      "visibleByDefault",
      "wrapperClassName",
      "wrapperProps",
    ];
    function Be(n, e) {
      var s = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(n);
        e &&
          (a = a.filter(function (x) {
            return Object.getOwnPropertyDescriptor(n, x).enumerable;
          })),
          s.push.apply(s, a);
      }
      return s;
    }
    function ze(n) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e] != null ? arguments[e] : {};
        e % 2
          ? Be(Object(s), !0).forEach(function (a) {
              rt(n, a, s[a]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
          : Be(Object(s)).forEach(function (a) {
              Object.defineProperty(
                n,
                a,
                Object.getOwnPropertyDescriptor(s, a)
              );
            });
      }
      return n;
    }
    function rt(n, e, s) {
      return (
        (e = $e(e)) in n
          ? Object.defineProperty(n, e, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[e] = s),
        n
      );
    }
    function Oe() {
      return (
        (Oe = Object.assign
          ? Object.assign.bind()
          : function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var s = arguments[e];
                for (var a in s)
                  Object.prototype.hasOwnProperty.call(s, a) && (n[a] = s[a]);
              }
              return n;
            }),
        Oe.apply(this, arguments)
      );
    }
    function ot(n, e) {
      for (var s = 0; s < e.length; s++) {
        var a = e[s];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(n, $e(a.key), a);
      }
    }
    function $e(n) {
      var e = (function (s, a) {
        if (ye(s) !== "object" || s === null) return s;
        var x = s[Symbol.toPrimitive];
        if (x !== void 0) {
          var w = x.call(s, "string");
          if (ye(w) !== "object") return w;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(s);
      })(n);
      return ye(e) === "symbol" ? e : String(e);
    }
    function Le(n, e) {
      return (
        (Le = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (s, a) {
              return (s.__proto__ = a), s;
            }),
        Le(n, e)
      );
    }
    function Pe(n) {
      return (
        (Pe = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        Pe(n)
      );
    }
    var ke = (function (n) {
      (function (r, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (r.prototype = Object.create(o && o.prototype, {
          constructor: { value: r, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(r, "prototype", { writable: !1 }),
          o && Le(r, o);
      })(N, n);
      var e,
        s,
        a,
        x,
        w =
          ((a = N),
          (x = (function () {
            if (
              typeof Reflect > "u" ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == "function") return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var r,
              o = Pe(a);
            if (x) {
              var f = Pe(this).constructor;
              r = Reflect.construct(o, arguments, f);
            } else r = o.apply(this, arguments);
            return (function (p, d) {
              if (d && (ye(d) === "object" || typeof d == "function")) return d;
              if (d !== void 0)
                throw new TypeError(
                  "Derived constructors may only return object or undefined"
                );
              return (function (T) {
                if (T === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return T;
              })(p);
            })(this, r);
          });
      function N(r) {
        var o;
        return (
          (function (f, p) {
            if (!(f instanceof p))
              throw new TypeError("Cannot call a class as a function");
          })(this, N),
          ((o = w.call(this, r)).state = { loaded: !1 }),
          o
        );
      }
      return (
        (e = N),
        (s = [
          {
            key: "onImageLoad",
            value: function () {
              var r = this;
              return this.state.loaded
                ? null
                : function (o) {
                    r.props.onLoad(o),
                      r.props.afterLoad(),
                      r.setState({ loaded: !0 });
                  };
            },
          },
          {
            key: "getImg",
            value: function () {
              var r = this.props,
                o =
                  (r.afterLoad,
                  r.beforeLoad,
                  r.delayMethod,
                  r.delayTime,
                  r.effect,
                  r.placeholder,
                  r.placeholderSrc,
                  r.scrollPosition,
                  r.threshold,
                  r.useIntersectionObserver,
                  r.visibleByDefault,
                  r.wrapperClassName,
                  r.wrapperProps,
                  (function (f, p) {
                    if (f == null) return {};
                    var d,
                      T,
                      k = (function (S, $) {
                        if (S == null) return {};
                        var D,
                          q,
                          be = {},
                          fe = Object.keys(S);
                        for (q = 0; q < fe.length; q++)
                          (D = fe[q]), $.indexOf(D) >= 0 || (be[D] = S[D]);
                        return be;
                      })(f, p);
                    if (Object.getOwnPropertySymbols) {
                      var C = Object.getOwnPropertySymbols(f);
                      for (T = 0; T < C.length; T++)
                        (d = C[T]),
                          p.indexOf(d) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(f, d) &&
                              (k[d] = f[d]));
                    }
                    return k;
                  })(r, tt));
              return m().createElement(
                "img",
                Oe({}, o, { onLoad: this.onImageLoad() })
              );
            },
          },
          {
            key: "getLazyLoadImage",
            value: function () {
              var r = this.props,
                o = r.beforeLoad,
                f = r.className,
                p = r.delayMethod,
                d = r.delayTime,
                T = r.height,
                k = r.placeholder,
                C = r.scrollPosition,
                S = r.style,
                $ = r.threshold,
                D = r.useIntersectionObserver,
                q = r.visibleByDefault,
                be = r.width;
              return m().createElement(
                Ue,
                {
                  beforeLoad: o,
                  className: f,
                  delayMethod: p,
                  delayTime: d,
                  height: T,
                  placeholder: k,
                  scrollPosition: C,
                  style: S,
                  threshold: $,
                  useIntersectionObserver: D,
                  visibleByDefault: q,
                  width: be,
                },
                this.getImg()
              );
            },
          },
          {
            key: "getWrappedLazyLoadImage",
            value: function (r) {
              var o = this.props,
                f = o.effect,
                p = o.height,
                d = o.placeholderSrc,
                T = o.width,
                k = o.wrapperClassName,
                C = o.wrapperProps,
                S = this.state.loaded,
                $ = S ? " lazy-load-image-loaded" : "",
                D =
                  S || !d
                    ? {}
                    : {
                        backgroundImage: "url(".concat(d, ")"),
                        backgroundSize: "100% 100%",
                      };
              return m().createElement(
                "span",
                Oe(
                  {
                    className: k + " lazy-load-image-background " + f + $,
                    style: ze(
                      ze({}, D),
                      {},
                      {
                        color: "transparent",
                        display: "inline-block",
                        height: p,
                        width: T,
                      }
                    ),
                  },
                  C
                ),
                r
              );
            },
          },
          {
            key: "render",
            value: function () {
              var r = this.props,
                o = r.effect,
                f = r.placeholderSrc,
                p = r.visibleByDefault,
                d = r.wrapperClassName,
                T = r.wrapperProps,
                k = this.getLazyLoadImage();
              return ((o || f) && !p) || d || T
                ? this.getWrappedLazyLoadImage(k)
                : k;
            },
          },
        ]) && ot(e.prototype, s),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        N
      );
    })(m().Component);
    (ke.propTypes = {
      onLoad: l.PropTypes.func,
      afterLoad: l.PropTypes.func,
      beforeLoad: l.PropTypes.func,
      delayMethod: l.PropTypes.string,
      delayTime: l.PropTypes.number,
      effect: l.PropTypes.string,
      placeholderSrc: l.PropTypes.string,
      threshold: l.PropTypes.number,
      useIntersectionObserver: l.PropTypes.bool,
      visibleByDefault: l.PropTypes.bool,
      wrapperClassName: l.PropTypes.string,
      wrapperProps: l.PropTypes.object,
    }),
      (ke.defaultProps = {
        onLoad: function () {},
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        delayMethod: "throttle",
        delayTime: 300,
        effect: "",
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: "",
      });
    const it = ke;
  })(),
    (Ke.exports = v);
})();
var Tt = Ke.exports;
function Ot(i = "1/1") {
  return {
    "4/3": "calc(100% / 4 * 3)",
    "3/4": "calc(100% / 3 * 4)",
    "6/4": "calc(100% / 6 * 4)",
    "4/6": "calc(100% / 4 * 6)",
    "16/9": "calc(100% / 16 * 9)",
    "9/16": "calc(100% / 9 * 16)",
    "21/9": "calc(100% / 21 * 9)",
    "9/21": "calc(100% / 9 * 21)",
    "1/1": "100%",
  }[i];
}
ve.LazyImage = {
  ratio: ve.string,
  disabledEffect: ve.bool,
  effect: ve.string,
  ref: ve.object,
};
const Se = A.forwardRef(
  ({ ratio: i, disabledEffect: h = !1, effect: y = "blur", ...v }, u) => {
    const m = t.jsx(Tt.LazyLoadImage, {
      wrapperClassName: "wrapper",
      effect: h ? void 0 : y,
      placeholderSrc: "/placeholder.svg",
      width: "100%",
      ...v,
    });
    return i
      ? t.jsx("span", {
          ref: u,
          style: {
            width: 1,
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
            paddingTop: Ot(i),
          },
          children: m,
        })
      : t.jsx("span", {
          ref: u,
          style: {
            lineHeight: 1,
            display: "block",
            overflow: "hidden",
            position: "relative",
          },
          children: m,
        });
  }
);
function Pt(i) {
  return me({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" },
      },
      { tag: "line", attr: { x1: "15", x2: "9", y1: "10", y2: "10" } },
    ],
  })(i);
}
function Nt() {
  const [i, h] = A.useState(0),
    [y, v] = A.useState([]),
    u = je(),
    m = (c, b) => {
      h(c), u(b);
    },
    l = [
      {
        id: 0,
        menuName: "Home",
        menuLink: "/home",
        icon: t.jsx(Re, {
          className: `inline text-xl ${
            i === 0 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Payment",
        menuLink: "/transaction-history",
        icon: t.jsx(_e, {
          className: `inline text-xl ${
            i === 1 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Settings",
        menuLink: "/Settings",
        icon: t.jsx(Ze, {
          className: `inline text-xl ${
            i === 4 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
    ],
    z = [
      {
        id: 0,
        menuName: "Home",
        menuLink: "/home",
        icon: t.jsx(Re, {
          className: `inline text-xl ${
            i === 0 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 0,
        menuName: "Search",
        menuLink: "/search-customer",
        icon: t.jsx(bt, {
          className: `inline text-xl ${
            i === 1 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Booking",
        menuLink: "/booking-list",
        icon: t.jsx(yt, {
          className: `inline text-xl ${
            i === 2 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Notification",
        menuLink: "/notifications",
        icon: t.jsx(_e, {
          className: `inline text-xl ${
            i === 3 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Settings",
        menuLink: "/Settings",
        icon: t.jsx(Ze, {
          className: `inline text-xl ${
            i === 3 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
    ],
    L = [
      {
        id: 0,
        menuName: "Home",
        menuLink: "/home",
        icon: t.jsx(Re, {
          className: `inline text-xl ${
            i === 0 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Work",
        menuLink: "/active-work",
        icon: t.jsx(_e, {
          className: `inline text-xl ${
            i === 1 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "History",
        menuLink: "/work-history",
        icon: t.jsx(Pt, {
          className: `inline text-xl ${
            i === 2 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Notification",
        menuLink: "/notifications",
        icon: t.jsx(_e, {
          className: `inline text-xl ${
            i === 3 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
      {
        id: 1,
        menuName: "Settings",
        menuLink: "/Settings",
        icon: t.jsx(Ze, {
          className: `inline text-xl ${
            i === 3 ? "text-[#755698]" : "text-gray-400"
          }`,
        }),
      },
    ];
  return (
    A.useEffect(() => {
      let c = window.localStorage.getItem("userType");
      c === "ADMIN" && v(l),
        c === "CALLING_EMPLOYEE" && v(z),
        c === "FIELD_EMPLOYEE" && v(L);
    }, []),
    t.jsx(t.Fragment, {
      children: t.jsx("div", {
        className: "fixed md:hidden bottom-0 left-0 w-full",
        children: t.jsx("div", {
          className: "shadow-md bg-white w-full flex py-1",
          children:
            Array.isArray(y) &&
            (y == null
              ? void 0
              : y.map((c, b) =>
                  t.jsxs("div", {
                    onClick: () => m(b, c == null ? void 0 : c.menuLink),
                    className:
                      "flex-1 flex flex-col justify-center items-center",
                    children: [
                      t.jsx("div", { children: c == null ? void 0 : c.icon }),
                      t.jsx("div", {
                        className: `text-sm ${
                          i === b
                            ? "text-[#755698] border-b-2 border-b-[#755698]"
                            : "text-gray-400"
                        }`,
                        children: c == null ? void 0 : c.menuName,
                      }),
                    ],
                  })
                )),
        }),
      }),
    })
  );
}
function _t() {
  const i = st();
  return (
    De("userType"),
    i.pathname === "/notfound"
      ? t.jsx(Ce, {})
      : t.jsx(t.Fragment, {
          children:
            i.pathname === "/" || De("userType") == "CALLING_EMPLOYEE"
              ? t.jsx(Ce, {})
              : t.jsxs(t.Fragment, {
                  children: [t.jsx(Ce, {}), t.jsx(Nt, {})],
                }),
        })
  );
}
function St(i) {
  return me({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" } },
      { tag: "line", attr: { x1: "12", y1: "8", x2: "12", y2: "12" } },
      { tag: "line", attr: { x1: "12", y1: "16", x2: "12.01", y2: "16" } },
    ],
  })(i);
}
function Ie(i) {
  const h = A.useRef(),
    y = je();
  return (
    A.useEffect(() => {
      i != null && i.logoutModalStatus
        ? h.current.open || h.current.showModal()
        : h.current.open && h.current.close();
    }, [i == null ? void 0 : i.logoutModalStatus]),
    t.jsx("dialog", {
      ref: h,
      className: "bg-transparent",
      children: t.jsxs("div", {
        style: { zIndex: 9999999 },
        class: "relative bg-white rounded-lg shadow-xl border-2 border-gray-50",
        children: [
          t.jsx("button", {
            onClick: () => (i == null ? void 0 : i.setlogoutModalStatus(!1)),
            type: "button",
            class:
              "absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center darks:hover:bg-gray-800 darks:hover:text-white",
            children: t.jsx("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              children: t.jsx("path", {
                "fill-rule": "evenodd",
                d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                "clip-rule": "evenodd",
              }),
            }),
          }),
          t.jsxs("div", {
            class: "p-6 text-center",
            children: [
              t.jsxs("div", {
                className: "w-full flex h-10",
                children: [
                  " ",
                  t.jsx("span", {
                    className: "mx-auto",
                    children: t.jsx(St, { size: 30 }),
                  }),
                ],
              }),
              t.jsx("h3", {
                class:
                  "mb-5 text-lg font-normal text-gray-500 darks:text-gray-400",
                children: "Do you want to logout ?",
              }),
              t.jsx("button", {
                type: "button",
                className:
                  "cypress_button_logout text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 darks:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2",
                onClick: () => y("/"),
                children: "Yes, I'm sure",
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function At() {
  let i = "http://localhost:1337";
  const y = {
    timeout: 6e4,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      Accept: "application/json",
    },
  };
  return {
    baseUrl: i,
    ApiHeader: y,
    api_createProject: `${i}/project`,
    api_readProject: `${i}/api/projects`,
    api_readServices: `${i}/api/services`,
    api_runServer: `${i}/manager`,
  };
}
const Lt = at.create();
Lt.interceptors.response.use(
  (i) => {
    var y;
    return (
      (y = i == null ? void 0 : i.data) == null || y.authenticated,
      i.status === 200 &&
        i.data.success &&
        (i.data.message = "Response modified!"),
      i
    );
  },
  (i) => (
    i.response.status === 401 &&
      (window.ReactNativeWebView
        ? window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: "LOGOUT" })
          )
        : (localStorage.clear(), (window.location.href = "/"))),
    Promise.reject(i)
  )
);
function kt() {
  return {
    projectListData: [
      {
        id: "serviceData2",
        attributes: {
          projectName: "Skills",
          desc: "lms project",
          type: 1,
          status: !0,
          order: 2,
          createdAt: "2024-04-14T06:11:22.584Z",
          updatedAt: "2024-04-14T06:11:33.470Z",
          publishedAt: "2024-04-14T06:11:33.465Z",
          imageUrl:
            "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412141/Project-Research/talib_sfoqx3.png",
        },
      },
      {
        id: "serviceData3",
        attributes: {
          projectName: "Money",
          desc: "Money options",
          type: 1,
          status: !0,
          order: 2,
          createdAt: "2024-04-14T06:11:22.584Z",
          updatedAt: "2024-04-14T06:11:33.470Z",
          publishedAt: "2024-04-14T06:11:33.465Z",
          imageUrl:
            "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560165/Project-Research/money-bag_phsorr.png",
        },
      },
      {
        id: "serviceData4",
        attributes: {
          projectName: "Tasks",
          desc: "Tasks Options",
          status: !0,
          type: 1,
          order: 2,
          createdAt: "2024-04-14T06:11:22.584Z",
          updatedAt: "2024-04-14T06:11:33.470Z",
          publishedAt: "2024-04-14T06:11:33.465Z",
          imageUrl:
            "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560163/Project-Research/task_otjt4m.png",
        },
      },
      {
        id: "serviceData5",
        attributes: {
          projectName: "Active",
          desc: "Active Work Options",
          type: 2,
          status: !0,
          order: 2,
          createdAt: "2024-04-14T06:11:22.584Z",
          updatedAt: "2024-04-14T06:11:33.470Z",
          publishedAt: "2024-04-14T06:11:33.465Z",
          imageUrl:
            "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732470/clock_eqwwxv.png",
        },
      },
    ],
  };
}
function Ct(i) {
  const h = je(),
    [y, v] = A.useState(!1),
    [u, m] = A.useState(!1),
    [l, z] = A.useState(null);
  At();
  const { projectListData: L } = kt();
  return (
    A.useEffect(() => {
      z(L);
    }, []),
    u
      ? t.jsxs("div", {
          role: "status",
          className: "w-full h-[100vh] flex justify-center items-center",
          children: [
            t.jsxs("svg", {
              "aria-hidden": "true",
              class:
                "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                t.jsx("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                t.jsx("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            t.jsx("span", { className: "", children: "Loading..." }),
          ],
        })
      : t.jsxs(t.Fragment, {
          children: [
            t.jsx(Ie, { logoutModalStatus: y, setlogoutModalStatus: v }),
            t.jsxs("div", {
              className: "mx-auto w-auto h-[100vh] bg-gray-100 overflow-hidden",
              children: [
                t.jsxs("div", {
                  className:
                    "px-12 text-2xl md:text-3xl font-semibold text-gray-700 py-2",
                  children: [
                    "Project Manager (",
                    (l == null ? void 0 : l.length) || 0,
                    ")",
                  ],
                }),
                t.jsx("div", {
                  className: "flex justify-center items-center relative mt-6",
                  children: t.jsx("div", {
                    className: "w-full px-2 mx-auto ",
                    children: t.jsx("div", {
                      className: "relative",
                      children: t.jsx("div", {
                        className:
                          "grid gap-6 px-6 md:px-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
                        children:
                          Array.isArray(l) &&
                          (l == null
                            ? void 0
                            : l.map((c, b) => {
                                var _, g, O;
                                return t.jsx(t.Fragment, {
                                  children: t.jsx(xe, {
                                    to:
                                      ((_ =
                                        c == null ? void 0 : c.attributes) ==
                                      null
                                        ? void 0
                                        : _.type) === 1
                                        ? `/services/${
                                            c == null ? void 0 : c.id
                                          }`
                                        : `/servicesType2/${
                                            c == null ? void 0 : c.id
                                          }`,
                                    children: t.jsxs(
                                      "div",
                                      {
                                        onClick: () => {
                                          (c == null ? void 0 : c.menuName) ===
                                          "Logout"
                                            ? v(!0)
                                            : h(
                                                c == null ? void 0 : c.menuLink
                                              );
                                        },
                                        className:
                                          "bg-white shadow-sm border rounded-xl flex flex-col justify-center items-center p-3  md:p-6 relative cursor-pointer",
                                        href: "",
                                        children: [
                                          t.jsx(Se, {
                                            className: "h-16 md:h-32 md:w-32",
                                            src: `${
                                              (g =
                                                c == null
                                                  ? void 0
                                                  : c.attributes) == null
                                                ? void 0
                                                : g.imageUrl
                                            }`,
                                            alt: "Icon",
                                          }),
                                          t.jsx("div", {
                                            className:
                                              "font-bold mt-2 text-xl text-center mb-2",
                                            children:
                                              (O =
                                                c == null
                                                  ? void 0
                                                  : c.attributes) == null
                                                ? void 0
                                                : O.projectName,
                                          }),
                                        ],
                                      },
                                      `homeOptions${b}`
                                    ),
                                  }),
                                });
                              })),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        })
  );
}
function Et() {
  return [
    {
      id: 3,
      attributes: {
        serviceName: "Fast2Sms",
        desc: "Fast2Sms pannel for top sms",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/fast2sms.md",
        status: !0,
        order: 1,
        createdAt: "2024-04-14T06:12:26.145Z",
        updatedAt: "2024-04-14T06:47:46.765Z",
        publishedAt: "2024-04-14T06:12:39.401Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293284/Project-Research/fast2sms_4b734acd57_h3gkns.jpg",
        type: "main",
      },
    },
    {
      id: 4,
      attributes: {
        serviceName: "Jio Dlt",
        desc: "Sms template registration",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/jio_dlt.md",
        status: !0,
        order: 2,
        createdAt: "2024-04-14T06:39:26.736Z",
        updatedAt: "2024-04-14T06:47:57.273Z",
        publishedAt: "2024-04-14T06:39:27.538Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293286/Project-Research/jio_728dd040c1_m14x2m.png",
        type: "main",
      },
    },
    {
      id: 5,
      attributes: {
        serviceName: "Razorpay",
        desc: "Razorpay paymentr",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/razropay.md",
        status: !0,
        order: 3,
        createdAt: "2024-04-14T06:41:36.159Z",
        updatedAt: "2024-04-14T06:48:04.036Z",
        publishedAt: "2024-04-14T06:41:37.621Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293294/Project-Research/rzp_3e48269d4e_eos5x6.png",
        type: "main",
      },
    },
    {
      id: 14,
      attributes: {
        serviceName: "Node Mail",
        desc: "Automaic service close mail",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/nodemail.md",
        status: !0,
        order: 5,
        createdAt: "2024-04-24T08:39:34.428Z",
        updatedAt: "2024-04-24T08:39:35.459Z",
        publishedAt: "2024-04-24T08:39:35.452Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293288/Project-Research/mail_removebg_preview_86c886be50_qyiu9p.png",
        type: "main",
      },
    },
  ];
}
function Rt() {
  return [
    {
      id: 8,
      attributes: {
        serviceName: "HTML",
        desc: "Frontend hosting",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/1_Code_Html.md",
        status: !0,
        order: 5,
        createdAt: "2024-04-14T06:52:57.029Z",
        updatedAt: "2024-04-14T06:53:15.302Z",
        publishedAt: "2024-04-14T06:53:15.298Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412630/Project-Research/html-removebg-preview_arjwtp.png",
        type: "main",
      },
    },
    {
      id: 9,
      attributes: {
        serviceName: "Css",
        desc: "mongodb database",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/2_Code_Css.md",
        status: !0,
        order: null,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412618/Project-Research/css-removebg-preview_ilhxet.png",
        type: "main",
      },
    },
    {
      id: 10,
      attributes: {
        serviceName: "Javascript",
        desc: "customer frontend",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/3_Code_Javascript.md",
        status: !0,
        order: 6,
        createdAt: "2024-04-14T07:29:39.778Z",
        updatedAt: "2024-04-14T07:29:40.605Z",
        publishedAt: "2024-04-14T07:29:40.599Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412617/Project-Research/javascript-removebg-preview_hucimb.png",
        type: "main",
      },
    },
    {
      id: 11,
      attributes: {
        serviceName: "React Js",
        desc: "playstore",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/4_Code_React.md",
        status: !0,
        order: 7,
        createdAt: "2024-04-14T07:31:10.164Z",
        updatedAt: "2024-04-18T10:31:08.666Z",
        publishedAt: "2024-04-14T07:31:11.241Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412617/Project-Research/reactjs-removebg-preview_ujxljp.png",
        type: "main",
      },
    },
    {
      id: 12,
      attributes: {
        serviceName: "React Native",
        desc: "appstore",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/5_Code_React_Native.md",
        status: !0,
        order: 8,
        createdAt: "2024-04-14T07:32:09.120Z",
        updatedAt: "2024-04-14T07:32:10.078Z",
        publishedAt: "2024-04-14T07:32:10.074Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412617/Project-Research/reactjs-removebg-preview_ujxljp.png",
        type: "main",
      },
    },
    {
      id: 13,
      attributes: {
        serviceName: "Next Js",
        desc: "Firebase Analytics",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/7_Code_NextJs.md",
        status: !0,
        order: 4,
        createdAt: "2024-04-24T08:14:22.510Z",
        updatedAt: "2024-04-24T08:14:23.738Z",
        publishedAt: "2024-04-24T08:14:23.731Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412616/Project-Research/next-removebg-preview_dipgrm.png",
        type: "main",
      },
    },
    {
      id: 14,
      attributes: {
        serviceName: "Node Js",
        desc: "Automaic service close mail",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/6_Code_NodeJs.md",
        status: !0,
        order: 5,
        createdAt: "2024-04-24T08:39:34.428Z",
        updatedAt: "2024-04-24T08:39:35.459Z",
        publishedAt: "2024-04-24T08:39:35.452Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412616/Project-Research/nodejs-removebg-preview_n7ssvo.png",
        type: "main",
      },
    },
    {
      id: 15,
      attributes: {
        serviceName: "Typescript",
        desc: "Push notification",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/9_Code_TypeScript.md",
        status: !0,
        order: 6,
        createdAt: "2024-04-27T16:14:07.651Z",
        updatedAt: "2024-04-27T16:14:09.251Z",
        publishedAt: "2024-04-27T16:14:09.244Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412617/Project-Research/ts-removebg-preview_fz5zo2.png",
        type: "main",
      },
    },
    {
      id: 16,
      attributes: {
        serviceName: "Sql",
        desc: "Push notification",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/8_Code_Mysql.md",
        status: !0,
        order: 6,
        createdAt: "2024-04-27T16:14:07.651Z",
        updatedAt: "2024-04-27T16:14:09.251Z",
        publishedAt: "2024-04-27T16:14:09.244Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714412616/Project-Research/sql-removebg-preview_lb2n0j.png",
        type: "main",
      },
    },
    {
      id: 16,
      attributes: {
        serviceName: "Mongo Db",
        desc: "Push notification",
        url: "https://github.com/Talib111/Dev_Notes/blob/main/Skills/Main_Skills/10_Code_MongoDb.md",
        status: !0,
        order: 6,
        createdAt: "2024-04-27T16:14:07.651Z",
        updatedAt: "2024-04-27T16:14:09.251Z",
        publishedAt: "2024-04-27T16:14:09.244Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293289/Project-Research/mngo_removebg_preview_537d85db96_jacjac.png",
        type: "main",
      },
    },
    {
      id: 3,
      attributes: {
        serviceName: "Fast2Sms",
        desc: "Fast2Sms pannel for top sms",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/fast2sms.md",
        status: !0,
        order: 1,
        createdAt: "2024-04-14T06:12:26.145Z",
        updatedAt: "2024-04-14T06:47:46.765Z",
        publishedAt: "2024-04-14T06:12:39.401Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293284/Project-Research/fast2sms_4b734acd57_h3gkns.jpg",
        type: "thirdParty",
      },
    },
    {
      id: 4,
      attributes: {
        serviceName: "Jio Dlt",
        desc: "Sms template registration",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/jio_dlt.md",
        status: !0,
        order: 2,
        createdAt: "2024-04-14T06:39:26.736Z",
        updatedAt: "2024-04-14T06:47:57.273Z",
        publishedAt: "2024-04-14T06:39:27.538Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293286/Project-Research/jio_728dd040c1_m14x2m.png",
        type: "thirdParty",
      },
    },
    {
      id: 5,
      attributes: {
        serviceName: "Razorpay",
        desc: "Razorpay paymentr",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/razropay.md",
        status: !0,
        order: 3,
        createdAt: "2024-04-14T06:41:36.159Z",
        updatedAt: "2024-04-14T06:48:04.036Z",
        publishedAt: "2024-04-14T06:41:37.621Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293294/Project-Research/rzp_3e48269d4e_eos5x6.png",
        type: "thirdParty",
      },
    },
    {
      id: 14,
      attributes: {
        serviceName: "Node Mail",
        desc: "Automaic service close mail",
        url: "https://github.com/Talib111/PROJECT_MANGEMENT/blob/main/Service/nodemail.md",
        status: !0,
        order: 5,
        createdAt: "2024-04-24T08:39:34.428Z",
        updatedAt: "2024-04-24T08:39:35.459Z",
        publishedAt: "2024-04-24T08:39:35.452Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714293288/Project-Research/mail_removebg_preview_86c886be50_qyiu9p.png",
        type: "thirdParty",
      },
    },
  ];
}
function Zt() {
  return [
    {
      id: 8,
      attributes: {
        serviceName: "Money Need",
        desc: "Frontend hosting",
        url: "https://docs.google.com/spreadsheets/d/15IBExJ84hurPpQWlrRWfyr0JbkhmnZ0XP6af8Jx9yeM/edit#gid=172548835",
        status: !0,
        order: 5,
        createdAt: "2024-04-14T06:52:57.029Z",
        updatedAt: "2024-04-14T06:53:15.302Z",
        publishedAt: "2024-04-14T06:53:15.298Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560416/Project-Research/spending_rujpfp.png",
        type: "main",
      },
    },
    {
      id: 9,
      attributes: {
        serviceName: "Money Source",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/15IBExJ84hurPpQWlrRWfyr0JbkhmnZ0XP6af8Jx9yeM/edit#gid=380688548",
        status: !0,
        order: null,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560414/Project-Research/income_dmpxbb.png",
        type: "main",
      },
    },
  ];
}
function Mt() {
  return [
    {
      id: 8,
      attributes: {
        serviceName: "Raw Tasks",
        desc: "Frontend hosting",
        url: "https://docs.google.com/spreadsheets/d/1Q_WaXtYP3Jxi9WiYlHJKHPPBhvqKOI9w9RQoNXpoaxA/edit#gid=1097744162",
        status: !0,
        order: 5,
        createdAt: "2024-04-14T06:52:57.029Z",
        updatedAt: "2024-04-14T06:53:15.302Z",
        publishedAt: "2024-04-14T06:53:15.298Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560409/Project-Research/solution_viadlt.png",
        type: "main",
      },
    },
    {
      id: 9,
      attributes: {
        serviceName: "Money Tasks",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1Q_WaXtYP3Jxi9WiYlHJKHPPBhvqKOI9w9RQoNXpoaxA/edit#gid=502431259",
        status: !0,
        order: null,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714560410/Project-Research/star_etqddm.png",
        type: "main",
      },
    },
    {
      id: 9,
      attributes: {
        serviceName: "ToDo",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1Q_WaXtYP3Jxi9WiYlHJKHPPBhvqKOI9w9RQoNXpoaxA/edit#gid=1489694341",
        status: !0,
        order: null,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714562975/Project-Research/to-do-list_hch08x.png",
        type: "main",
      },
    },
  ];
}
function Dt() {
  return [
    {
      id: "id__rm",
      attributes: {
        serviceName: "Remaining Completion",
        desc: "Frontend hosting",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: 5,
        value: 0,
        createdAt: "2024-04-14T06:52:57.029Z",
        updatedAt: "2024-04-14T06:53:15.302Z",
        publishedAt: "2024-04-14T06:53:15.298Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732469/check-mark_p7fblh.png",
        type: "main",
      },
    },
    {
      id: "id__fresh",
      attributes: {
        serviceName: "Fresh-Dev",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 1,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732466/fresh_bccv7f.png",
        type: "main",
      },
    },
    {
      id: "id__bugs",
      attributes: {
        serviceName: "Bugs",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 3,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732690/bug_wuizpd.png",
        type: "main",
      },
    },
    {
      id: "id__updation",
      attributes: {
        serviceName: "Updation",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 0,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732468/updated_hb2uwd.png",
        type: "main",
      },
    },
    {
      id: "id__third",
      attributes: {
        serviceName: "Third-Party",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 1,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732462/third-party_snblkc.png",
        type: "main",
      },
    },
    {
      id: "id__testing",
      attributes: {
        serviceName: "Testing",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 1,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732785/test_yoxrmo.png",
        type: "main",
      },
    },
    {
      id: "id__optional",
      attributes: {
        serviceName: "Optional",
        desc: "mongodb database",
        url: "https://docs.google.com/spreadsheets/d/1vEwQjsSl5xN8ZAef1bz_8nJUwc0ji60z6WNtDbjuXQM/edit#gid=725473305",
        status: !0,
        order: null,
        value: 0,
        createdAt: "2024-04-14T07:28:33.458Z",
        updatedAt: "2024-04-16T02:38:25.872Z",
        publishedAt: "2024-04-14T07:28:34.455Z",
        imageUrl:
          "https://res.cloudinary.com/dor3gao8l/image/upload/v1714732459/skip_c7chcw.png",
        type: "main",
      },
    },
  ];
}
function et(i) {
  const h = Et(),
    y = Rt(),
    v = Zt(),
    u = Mt(),
    m = Dt();
  return {
    serviceData1: h,
    serviceData2: y,
    serviceData3: v,
    serviceData4: u,
    serviceData5: m,
  }[i];
}
function It(i) {
  const h = je(),
    [y, v] = A.useState(!1),
    [u, m] = A.useState(!1),
    [l, z] = A.useState(null),
    { projectId: L } = He();
  return (
    A.useEffect(() => {
      const c = et(L);
      z(c);
    }, []),
    u
      ? t.jsxs("div", {
          role: "status",
          className: "w-full h-[100vh] flex justify-center items-center",
          children: [
            t.jsxs("svg", {
              "aria-hidden": "true",
              class:
                "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
              viewBox: "0 0 100 101",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                t.jsx("path", {
                  d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                  fill: "currentColor",
                }),
                t.jsx("path", {
                  d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                  fill: "currentFill",
                }),
              ],
            }),
            t.jsx("span", { className: "", children: "Loading..." }),
          ],
        })
      : t.jsxs(t.Fragment, {
          children: [
            t.jsx(Ie, { logoutModalStatus: y, setlogoutModalStatus: v }),
            t.jsx("div", {
              className:
                "mx-auto w-auto  bg-gray-100 overflow-hidden pb-40 min-h-screen",
              children: t.jsx("div", {
                className: "flex justify-center items-center relative mt-6",
                children: t.jsx("div", {
                  className: "w-full px-2 mx-auto ",
                  children: t.jsxs("div", {
                    className: "relative",
                    children: [
                      t.jsx("div", {
                        className: "px-4 md:px-12 font-semibold text-xl mb-2",
                        children: "Services",
                      }),
                      t.jsx("div", {
                        className:
                          "grid gap-2 md:gap-6 px-4 md:px-10 grid-cols-3  md:grid-cols-6",
                        children:
                          Array.isArray(l) &&
                          l
                            .filter((c) => {
                              var b;
                              return (
                                ((b = c.attributes) == null
                                  ? void 0
                                  : b.type) === "main"
                              );
                            })
                            .map((c, b) => {
                              var _, g, O;
                              return t.jsx(
                                xe,
                                {
                                  to: `${
                                    (_ = c.attributes) == null ? void 0 : _.url
                                  }`,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: t.jsxs("div", {
                                    onClick: () => {
                                      c.menuName === "Logout"
                                        ? v(!0)
                                        : h(c.menuLink);
                                    },
                                    className:
                                      "bg-white shadow-sm border rounded-xl flex flex-col justify-center items-center py-3 relative cursor-pointer",
                                    href: "",
                                    children: [
                                      t.jsx(Se, {
                                        className: "h-12 md:h-20 md:w-20",
                                        src: `${
                                          (g = c.attributes) == null
                                            ? void 0
                                            : g.imageUrl
                                        }`,
                                        alt: "Icon",
                                      }),
                                      t.jsx("div", {
                                        className:
                                          "font-bold mt-2 text-xs md:text-xl text-center mb-2 px-2",
                                        children:
                                          (O = c.attributes) == null
                                            ? void 0
                                            : O.serviceName,
                                      }),
                                    ],
                                  }),
                                },
                                `ServiceList${b}`
                              );
                            }),
                      }),
                      L === "serviceData2" &&
                        t.jsx("div", {
                          className: "px-12 mt-10",
                          children: t.jsx("hr", {}),
                        }),
                      L === "serviceData2" &&
                        t.jsxs(t.Fragment, {
                          children: [
                            t.jsx("div", {
                              className:
                                "px-4 md:px-12 font-semibold text-xl mb-2 mt-4",
                              children: "Third Party ",
                            }),
                            t.jsx("div", {
                              className:
                                "grid gap-2 md:gap-6 px-4 md:px-10 grid-cols-3  md:grid-cols-6",
                              children:
                                Array.isArray(l) &&
                                l
                                  .filter((c) => {
                                    var b;
                                    return (
                                      ((b = c.attributes) == null
                                        ? void 0
                                        : b.type) === "thirdParty"
                                    );
                                  })
                                  .map((c, b) => {
                                    var _, g, O;
                                    return t.jsx(
                                      xe,
                                      {
                                        to: `${
                                          (_ = c.attributes) == null
                                            ? void 0
                                            : _.url
                                        }`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: t.jsxs("div", {
                                          onClick: () => {
                                            c.menuName === "Logout"
                                              ? v(!0)
                                              : h(c.menuLink);
                                          },
                                          className:
                                            "bg-white shadow-sm border rounded-xl flex flex-col justify-center items-center py-3 relative cursor-pointer",
                                          href: "",
                                          children: [
                                            t.jsx(Se, {
                                              className: "h-12 md:h-20 md:w-20",
                                              src: `${
                                                (g = c.attributes) == null
                                                  ? void 0
                                                  : g.imageUrl
                                              }`,
                                              alt: "Icon",
                                            }),
                                            t.jsx("div", {
                                              className:
                                                "font-bold mt-2 text-xs md:text-xl text-center mb-2 px-2",
                                              children:
                                                (O = c.attributes) == null
                                                  ? void 0
                                                  : O.serviceName,
                                            }),
                                          ],
                                        }),
                                      },
                                      `ServiceList${b}`
                                    );
                                  }),
                            }),
                          ],
                        }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        })
  );
}
function Ut(i) {
  const h = je(),
    [y, v] = A.useState(!1),
    [u, m] = A.useState(!1),
    [l, z] = A.useState(null),
    [L, c] = A.useState(0),
    { projectId: b } = He();
  A.useEffect(() => {
    const g = et(b);
    z(g), _(g);
  }, []);
  const _ = (g) => {
    const O = g.slice(1, -1).reduce((X, F) => X + F.attributes.value, 0);
    c(O);
  };
  return u
    ? t.jsxs("div", {
        role: "status",
        className: "w-full h-[100vh] flex justify-center items-center",
        children: [
          t.jsxs("svg", {
            "aria-hidden": "true",
            class:
              "w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",
            viewBox: "0 0 100 101",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              t.jsx("path", {
                d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                fill: "currentColor",
              }),
              t.jsx("path", {
                d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                fill: "currentFill",
              }),
            ],
          }),
          t.jsx("span", { className: "", children: "Loading..." }),
        ],
      })
    : t.jsxs(t.Fragment, {
        children: [
          t.jsx(Ie, { logoutModalStatus: y, setlogoutModalStatus: v }),
          t.jsx("div", {
            className:
              "mx-auto w-auto  bg-gray-100 overflow-hidden pb-40 min-h-screen",
            children: t.jsx("div", {
              className: "flex justify-center items-center relative mt-6",
              children: t.jsx("div", {
                className: "w-full px-2 mx-auto ",
                children: t.jsxs("div", {
                  className: "relative",
                  children: [
                    t.jsx("div", {
                      className: "px-4 md:px-12 font-semibold text-xl mb-2",
                      children: "Collibet",
                    }),
                    t.jsx("div", {
                      className:
                        "grid gap-2 md:gap-6 px-4 md:px-10 grid-cols-3  md:grid-cols-6",
                      children:
                        Array.isArray(l) &&
                        l
                          .filter((g) => {
                            var O;
                            return (
                              ((O = g.attributes) == null ? void 0 : O.type) ===
                              "main"
                            );
                          })
                          .map((g, O) => {
                            var X, F, Y;
                            return t.jsx(
                              xe,
                              {
                                to: `${
                                  (X = g.attributes) == null ? void 0 : X.url
                                }`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: t.jsxs("div", {
                                  onClick: () => {
                                    g.menuName === "Logout"
                                      ? v(!0)
                                      : h(g.menuLink);
                                  },
                                  className: `${
                                    O === 0
                                      ? "bg-white border shadow-xl rounded-xl flex flex-col justify-center items-center py-3 relative cursor-pointer"
                                      : "bg-gray-50 border rounded-xl flex flex-col justify-center items-center py-3 relative cursor-pointer"
                                  }`,
                                  href: "",
                                  children: [
                                    t.jsx("div", {
                                      id: "id_remainingCompletion",
                                      className: `${
                                        O === 0
                                          ? "font-bold mt-4 text-xl md:text-xl text-green-500 text-center mb-0 px-2 inline"
                                          : "font-bold mt-4 text-md md:text-xl text-gray-500 text-center mb-0 px-2"
                                      }`,
                                      children:
                                        O === 0
                                          ? L
                                          : (F =
                                              g == null
                                                ? void 0
                                                : g.attributes) == null
                                          ? void 0
                                          : F.value,
                                    }),
                                    t.jsx("div", {
                                      className: `${
                                        O === 0
                                          ? "font-bold mt-2 text-xs md:text-xl text-center mb-2 px-2"
                                          : "font-bold mt-2 text-xs md:text-xl text-center text-gray-500 mb-2 px-2"
                                      }`,
                                      children:
                                        (Y = g.attributes) == null
                                          ? void 0
                                          : Y.serviceName,
                                    }),
                                  ],
                                }),
                              },
                              `ServiceList${O}`
                            );
                          }),
                    }),
                    b === "serviceData2" &&
                      t.jsx("div", {
                        className: "px-12 mt-10",
                        children: t.jsx("hr", {}),
                      }),
                    b === "serviceData2" &&
                      t.jsxs(t.Fragment, {
                        children: [
                          t.jsx("div", {
                            className:
                              "px-4 md:px-12 font-semibold text-xl mb-2 mt-4",
                            children: "Third Party ",
                          }),
                          t.jsx("div", {
                            className:
                              "grid gap-2 md:gap-6 px-4 md:px-10 grid-cols-3  md:grid-cols-6",
                            children:
                              Array.isArray(l) &&
                              l
                                .filter((g) => {
                                  var O;
                                  return (
                                    ((O = g.attributes) == null
                                      ? void 0
                                      : O.type) === "thirdParty"
                                  );
                                })
                                .map((g, O) => {
                                  var X, F, Y;
                                  return t.jsx(
                                    xe,
                                    {
                                      to: `${
                                        (X = g.attributes) == null
                                          ? void 0
                                          : X.url
                                      }`,
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: t.jsxs("div", {
                                        onClick: () => {
                                          g.menuName === "Logout"
                                            ? v(!0)
                                            : h(g.menuLink);
                                        },
                                        className:
                                          "bg-white shadow-sm border rounded-xl flex flex-col justify-center items-center py-3 relative cursor-pointer",
                                        href: "",
                                        children: [
                                          t.jsx(Se, {
                                            className: "h-12 md:h-20 md:w-20",
                                            src: `${
                                              (F = g.attributes) == null
                                                ? void 0
                                                : F.imageUrl
                                            }`,
                                            alt: "Icon",
                                          }),
                                          t.jsx("div", {
                                            className:
                                              "font-bold mt-2 text-xs md:text-xl text-center mb-2 px-2",
                                            children:
                                              (Y = g.attributes) == null
                                                ? void 0
                                                : Y.serviceName,
                                          }),
                                        ],
                                      }),
                                    },
                                    `ServiceList${O}`
                                  );
                                }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
            }),
          }),
        ],
      });
}
const Bt = A.createContext("");
function zt() {
  const [i, h] = A.useState(null),
    [y, v] = A.useState(!1);
  return (
    A.useEffect(() => {
      const u = De("userType");
      u && h(u), window.innerWidth < 500 ? v(!1) : v(!0);
    }, []),
    t.jsx(t.Fragment, {
      children: t.jsxs(Bt.Provider, {
        value: { userType: i, setUserType: h },
        children: [
          t.jsxs(lt, {
            children: [
              t.jsx(Ee, { path: "/", element: t.jsx(Ct, {}) }),
              t.jsx(Ee, {
                path: "/services/:projectId",
                element: t.jsx(It, {}),
              }),
              t.jsx(Ee, {
                path: "/servicesType2/:projectId",
                element: t.jsx(Ut, {}),
              }),
            ],
          }),
          t.jsx(_t, {}),
        ],
      }),
    })
  );
}
Me.createRoot(document.getElementById("root")).render(
  t.jsx(ct, { children: t.jsx(zt, {}) })
);
