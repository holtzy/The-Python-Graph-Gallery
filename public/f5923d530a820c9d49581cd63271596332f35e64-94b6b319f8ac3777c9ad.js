/*! For license information please see f5923d530a820c9d49581cd63271596332f35e64-94b6b319f8ac3777c9ad.js.LICENSE.txt */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "2W6z": function (e, t, a) {
      "use strict";
      var n = function () {};
      e.exports = n;
    },
    "3Z9Z": function (e, t, a) {
      "use strict";
      var n = a("wx14"),
        r = a("zLVn"),
        o = a("TSYQ"),
        i = a.n(o),
        l = a("q1tI"),
        s = a.n(l),
        c = a("vUet"),
        u = ["xl", "lg", "md", "sm", "xs"],
        d = s.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.className,
            l = e.noGutters,
            d = e.as,
            f = void 0 === d ? "div" : d,
            p = Object(r.a)(e, ["bsPrefix", "className", "noGutters", "as"]),
            m = Object(c.a)(a, "row"),
            h = m + "-cols",
            g = [];
          return (
            u.forEach(function (e) {
              var t,
                a = p[e];
              delete p[e];
              var n = "xs" !== e ? "-" + e : "";
              null != (t = null != a && "object" == typeof a ? a.cols : a) &&
                g.push("" + h + n + "-" + t);
            }),
            s.a.createElement(
              f,
              Object(n.a)({ ref: t }, p, {
                className: i.a.apply(
                  void 0,
                  [o, m, l && "no-gutters"].concat(g)
                ),
              })
            )
          );
        });
      (d.displayName = "Row"), (d.defaultProps = { noGutters: !1 }), (t.a = d);
    },
    "4/Vk": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      });
      a("a4DA");
      var n = a("q1tI"),
        r = a.n(n),
        o = a("AkXV"),
        i = a("cWnB"),
        l = a("Wbzz"),
        s = a("qXiB"),
        c = a("jhdv");
      function u(e) {
        var t = e.title,
          a = e.description,
          n = e.chartType,
          u = s.a.filter(function (e) {
            return e.id === n;
          })[0];
        return r.a.createElement(
          "div",
          { className: "titleAndDescription" },
          r.a.createElement("h1", null, t),
          r.a.createElement("hr", { className: "smallHr" }),
          r.a.createElement(o.a, null),
          r.a.createElement("div", {
            className: "description",
            dangerouslySetInnerHTML: { __html: a },
          }),
          n &&
            r.a.createElement(
              "div",
              { style: { marginTop: "10px" } },
              r.a.createElement(
                l.a,
                { to: Object(c.a)(u.pythonURL) },
                r.a.createElement(i.a, { size: "sm" }, u.label + " section")
              ),
              r.a.createElement(
                "a",
                { href: u.dataToVizURL },
                r.a.createElement(i.a, { size: "sm" }, "About this chart")
              )
            )
        );
      }
    },
    "6+GL": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var n = a("q1tI"),
        r = a.n(n),
        o = (a("IMjo"), a("cWnB"));
      function i() {
        return r.a.createElement(
          "div",
          { className: "contactSection lightSection" },
          r.a.createElement("p", { className: "contactTitle" }, "Contact"),
          r.a.createElement(
            "p",
            { className: "contactText" },
            "This document is a work by ",
            r.a.createElement(
              "a",
              { href: "https://www.yan-holtz.com" },
              "Yan Holtz"
            ),
            ". Any feedback is highly encouraged. You can fill an issue on Github, drop me a message on Twitter, or send an email pasting yan.holtz.data with gmail.com."
          ),
          r.a.createElement(
            "div",
            null,
            r.a.createElement(
              o.a,
              {
                size: "xl",
                href: "https://github.com/holtzy/python-graph-gallery",
              },
              "GITHUB"
            ),
            r.a.createElement(
              o.a,
              { size: "xl", href: "https://twitter.com/R_Graph_Gallery" },
              "TWITTER"
            )
          )
        );
      }
    },
    "7oih": function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return Mn;
      });
      var n = a("q1tI"),
        r = a.n(n),
        o = a("qhky"),
        i = (a("ae5o"), a("AkXV"));
      function l() {
        return r.a.createElement(
          "div",
          { className: "footer" },
          r.a.createElement(
            "div",
            { className: "copyright" },
            "Copyright © the d3 graph gallery 2018"
          ),
          r.a.createElement(i.a, null),
          r.a.createElement(
            "div",
            { className: "policy" },
            r.a.createElement(
              "a",
              { className: "policyItem", href: "" },
              "Pricacy policy"
            ),
            r.a.createElement(
              "a",
              { className: "policyItem", href: "" },
              "Term policy"
            ),
            r.a.createElement(
              "a",
              { className: "policyItem", href: "" },
              "Term of use"
            )
          )
        );
      }
      a("gihY");
      var s = a("wx14"),
        c = a("zLVn"),
        u = a("TSYQ"),
        d = a.n(u);
      a("QLaP");
      function f(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function p(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var a = e[Symbol.toPrimitive];
          if (void 0 !== a) {
            var n = a.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function m(e, t, a) {
        var r = Object(n.useRef)(void 0 !== e),
          o = Object(n.useState)(t),
          i = o[0],
          l = o[1],
          s = void 0 !== e,
          c = r.current;
        return (
          (r.current = s),
          !s && c && i !== t && l(t),
          [
            s ? e : i,
            Object(n.useCallback)(
              function (e) {
                for (
                  var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    r = 1;
                  r < t;
                  r++
                )
                  n[r - 1] = arguments[r];
                a && a.apply(void 0, [e].concat(n)), l(e);
              },
              [a]
            ),
          ]
        );
      }
      function h(e, t) {
        return Object.keys(t).reduce(function (a, n) {
          var r,
            o = a,
            i = o[f(n)],
            l = o[n],
            u = Object(c.a)(o, [f(n), n].map(p)),
            d = t[n],
            h = m(l, i, e[d]),
            g = h[0],
            v = h[1];
          return Object(s.a)({}, u, (((r = {})[n] = g), (r[d] = v), r));
        }, e);
      }
      var g = a("dI71");
      a("94VI");
      var v = /-(.)/g;
      var b = a("vUet"),
        y = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(v, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function w(e, t) {
        var a = void 0 === t ? {} : t,
          n = a.displayName,
          o = void 0 === n ? y(e) : n,
          i = a.Component,
          l = a.defaultProps,
          u = r.a.forwardRef(function (t, a) {
            var n = t.className,
              o = t.bsPrefix,
              l = t.as,
              u = void 0 === l ? i || "div" : l,
              f = Object(c.a)(t, ["className", "bsPrefix", "as"]),
              p = Object(b.a)(o, e);
            return r.a.createElement(
              u,
              Object(s.a)({ ref: a, className: d()(n, p) }, f)
            );
          });
        return (u.defaultProps = l), (u.displayName = o), u;
      }
      var E = r.a.forwardRef(function (e, t) {
        var a = e.bsPrefix,
          n = e.className,
          o = e.as,
          i = Object(c.a)(e, ["bsPrefix", "className", "as"]);
        a = Object(b.a)(a, "navbar-brand");
        var l = o || (i.href ? "a" : "span");
        return r.a.createElement(
          l,
          Object(s.a)({}, i, { ref: t, className: d()(n, a) })
        );
      });
      E.displayName = "NavbarBrand";
      var O = E;
      function x(e) {
        return (e && e.ownerDocument) || document;
      }
      function j(e, t) {
        return (function (e) {
          var t = x(e);
          return (t && t.defaultView) || window;
        })(e).getComputedStyle(e, t);
      }
      var R = /([A-Z])/g;
      var C = /^ms-/;
      function N(e) {
        return (function (e) {
          return e.replace(R, "-$1").toLowerCase();
        })(e).replace(C, "-ms-");
      }
      var L = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
      var S = function (e, t) {
          var a = "",
            n = "";
          if ("string" == typeof t)
            return (
              e.style.getPropertyValue(N(t)) || j(e).getPropertyValue(N(t))
            );
          Object.keys(t).forEach(function (r) {
            var o = t[r];
            o || 0 === o
              ? !(function (e) {
                  return !(!e || !L.test(e));
                })(r)
                ? (a += N(r) + ": " + o + ";")
                : (n += r + "(" + o + ") ")
              : e.style.removeProperty(N(r));
          }),
            n && (a += "transform: " + n + ";"),
            (e.style.cssText += ";" + a);
        },
        k = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        T = !1,
        z = !1;
      try {
        var P = {
          get passive() {
            return (T = !0);
          },
          get once() {
            return (z = T = !0);
          },
        };
        k &&
          (window.addEventListener("test", P, P),
          window.removeEventListener("test", P, !0));
      } catch (Un) {}
      var M = function (e, t, a, n) {
        if (n && "boolean" != typeof n && !z) {
          var r = n.once,
            o = n.capture,
            i = a;
          !z &&
            r &&
            ((i =
              a.__once ||
              function e(n) {
                this.removeEventListener(t, e, o), a.call(this, n);
              }),
            (a.__once = i)),
            e.addEventListener(t, i, T ? n : o);
        }
        e.addEventListener(t, a, n);
      };
      var U = function (e, t, a, n) {
        var r = n && "boolean" != typeof n ? n.capture : n;
        e.removeEventListener(t, a, r),
          a.__once && e.removeEventListener(t, a.__once, r);
      };
      var D = function (e, t, a, n) {
        return (
          M(e, t, a, n),
          function () {
            U(e, t, a, n);
          }
        );
      };
      function I(e, t, a) {
        void 0 === a && (a = 5);
        var n = !1,
          r = setTimeout(function () {
            n ||
              (function (e) {
                var t = document.createEvent("HTMLEvents");
                t.initEvent("transitionend", !0, !0), e.dispatchEvent(t);
              })(e);
          }, t + a),
          o = D(
            e,
            "transitionend",
            function () {
              n = !0;
            },
            { once: !0 }
          );
        return function () {
          clearTimeout(r), o();
        };
      }
      function V(e, t, a, n) {
        var r, o;
        null == a &&
          ((r = S(e, "transitionDuration") || ""),
          (o = -1 === r.indexOf("ms") ? 1e3 : 1),
          (a = parseFloat(r) * o || 0));
        var i = I(e, a, n),
          l = D(e, "transitionend", t);
        return function () {
          i(), l();
        };
      }
      var A = a("i8i4"),
        B = a.n(A),
        H = !1,
        F = r.a.createContext(null),
        W = (function (e) {
          function t(t, a) {
            var n;
            n = e.call(this, t, a) || this;
            var r,
              o = a && !a.isMounting ? t.enter : t.appear;
            return (
              (n.appearStatus = null),
              t.in
                ? o
                  ? ((r = "exited"), (n.appearStatus = "entering"))
                  : (r = "entered")
                : (r =
                    t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"),
              (n.state = { status: r }),
              (n.nextCallback = null),
              n
            );
          }
          Object(g.a)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && "unmounted" === t.status
                ? { status: "exited" }
                : null;
            });
          var a = t.prototype;
          return (
            (a.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (a.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var a = this.state.status;
                this.props.in
                  ? "entering" !== a && "entered" !== a && (t = "entering")
                  : ("entering" !== a && "entered" !== a) || (t = "exiting");
              }
              this.updateStatus(!1, t);
            }),
            (a.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (a.getTimeouts = function () {
              var e,
                t,
                a,
                n = this.props.timeout;
              return (
                (e = t = a = n),
                null != n &&
                  "number" != typeof n &&
                  ((e = n.exit),
                  (t = n.enter),
                  (a = void 0 !== n.appear ? n.appear : t)),
                { exit: e, enter: t, appear: a }
              );
            }),
            (a.updateStatus = function (e, t) {
              void 0 === e && (e = !1),
                null !== t
                  ? (this.cancelNextCallback(),
                    "entering" === t
                      ? this.performEnter(e)
                      : this.performExit())
                  : this.props.unmountOnExit &&
                    "exited" === this.state.status &&
                    this.setState({ status: "unmounted" });
            }),
            (a.performEnter = function (e) {
              var t = this,
                a = this.props.enter,
                n = this.context ? this.context.isMounting : e,
                r = this.props.nodeRef ? [n] : [B.a.findDOMNode(this), n],
                o = r[0],
                i = r[1],
                l = this.getTimeouts(),
                s = n ? l.appear : l.enter;
              (!e && !a) || H
                ? this.safeSetState({ status: "entered" }, function () {
                    t.props.onEntered(o);
                  })
                : (this.props.onEnter(o, i),
                  this.safeSetState({ status: "entering" }, function () {
                    t.props.onEntering(o, i),
                      t.onTransitionEnd(s, function () {
                        t.safeSetState({ status: "entered" }, function () {
                          t.props.onEntered(o, i);
                        });
                      });
                  }));
            }),
            (a.performExit = function () {
              var e = this,
                t = this.props.exit,
                a = this.getTimeouts(),
                n = this.props.nodeRef ? void 0 : B.a.findDOMNode(this);
              t && !H
                ? (this.props.onExit(n),
                  this.safeSetState({ status: "exiting" }, function () {
                    e.props.onExiting(n),
                      e.onTransitionEnd(a.exit, function () {
                        e.safeSetState({ status: "exited" }, function () {
                          e.props.onExited(n);
                        });
                      });
                  }))
                : this.safeSetState({ status: "exited" }, function () {
                    e.props.onExited(n);
                  });
            }),
            (a.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (a.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (a.setNextCallback = function (e) {
              var t = this,
                a = !0;
              return (
                (this.nextCallback = function (n) {
                  a && ((a = !1), (t.nextCallback = null), e(n));
                }),
                (this.nextCallback.cancel = function () {
                  a = !1;
                }),
                this.nextCallback
              );
            }),
            (a.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var a = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : B.a.findDOMNode(this),
                n = null == e && !this.props.addEndListener;
              if (a && !n) {
                if (this.props.addEndListener) {
                  var r = this.props.nodeRef
                      ? [this.nextCallback]
                      : [a, this.nextCallback],
                    o = r[0],
                    i = r[1];
                  this.props.addEndListener(o, i);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (a.render = function () {
              var e = this.state.status;
              if ("unmounted" === e) return null;
              var t = this.props,
                a = t.children,
                n =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  Object(c.a)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return r.a.createElement(
                F.Provider,
                { value: null },
                "function" == typeof a
                  ? a(e, n)
                  : r.a.cloneElement(r.a.Children.only(a), n)
              );
            }),
            t
          );
        })(r.a.Component);
      function q() {}
      (W.contextType = F),
        (W.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: q,
          onEntering: q,
          onEntered: q,
          onExit: q,
          onExiting: q,
          onExited: q,
        }),
        (W.UNMOUNTED = "unmounted"),
        (W.EXITED = "exited"),
        (W.ENTERING = "entering"),
        (W.ENTERED = "entered"),
        (W.EXITING = "exiting");
      var K,
        _ = W,
        G = a("Qg85");
      function X(e) {
        e.offsetHeight;
      }
      var Y = {
        height: ["marginTop", "marginBottom"],
        width: ["marginLeft", "marginRight"],
      };
      function Q(e, t) {
        var a = t["offset" + e[0].toUpperCase() + e.slice(1)],
          n = Y[e];
        return a + parseInt(S(t, n[0]), 10) + parseInt(S(t, n[1]), 10);
      }
      var Z =
          (((K = {}).exited = "collapse"),
          (K.exiting = "collapsing"),
          (K.entering = "collapsing"),
          (K.entered = "collapse show"),
          K),
        J = {
          in: !1,
          timeout: 300,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          getDimensionValue: Q,
        },
        $ = r.a.forwardRef(function (e, t) {
          var a = e.onEnter,
            o = e.onEntering,
            i = e.onEntered,
            l = e.onExit,
            u = e.onExiting,
            f = e.className,
            p = e.children,
            m = e.dimension,
            h = void 0 === m ? "height" : m,
            g = e.getDimensionValue,
            v = void 0 === g ? Q : g,
            b = Object(c.a)(e, [
              "onEnter",
              "onEntering",
              "onEntered",
              "onExit",
              "onExiting",
              "className",
              "children",
              "dimension",
              "getDimensionValue",
            ]),
            y = "function" == typeof h ? h() : h,
            w = Object(n.useMemo)(
              function () {
                return Object(G.a)(function (e) {
                  e.style[y] = "0";
                }, a);
              },
              [y, a]
            ),
            E = Object(n.useMemo)(
              function () {
                return Object(G.a)(function (e) {
                  var t = "scroll" + y[0].toUpperCase() + y.slice(1);
                  e.style[y] = e[t] + "px";
                }, o);
              },
              [y, o]
            ),
            O = Object(n.useMemo)(
              function () {
                return Object(G.a)(function (e) {
                  e.style[y] = null;
                }, i);
              },
              [y, i]
            ),
            x = Object(n.useMemo)(
              function () {
                return Object(G.a)(function (e) {
                  (e.style[y] = v(y, e) + "px"), X(e);
                }, l);
              },
              [l, v, y]
            ),
            j = Object(n.useMemo)(
              function () {
                return Object(G.a)(function (e) {
                  e.style[y] = null;
                }, u);
              },
              [y, u]
            );
          return r.a.createElement(
            _,
            Object(s.a)({ ref: t, addEndListener: V }, b, {
              "aria-expanded": b.role ? b.in : null,
              onEnter: w,
              onEntering: E,
              onEntered: O,
              onExit: x,
              onExiting: j,
            }),
            function (e, t) {
              return r.a.cloneElement(
                p,
                Object(s.a)({}, t, {
                  className: d()(
                    f,
                    p.props.className,
                    Z[e],
                    "width" === y && "width"
                  ),
                })
              );
            }
          );
        });
      $.defaultProps = J;
      var ee = $,
        te = r.a.createContext(null);
      te.displayName = "NavbarContext";
      var ae = te,
        ne = r.a.forwardRef(function (e, t) {
          var a = e.children,
            n = e.bsPrefix,
            o = Object(c.a)(e, ["children", "bsPrefix"]);
          return (
            (n = Object(b.a)(n, "navbar-collapse")),
            r.a.createElement(ae.Consumer, null, function (e) {
              return r.a.createElement(
                ee,
                Object(s.a)({ in: !(!e || !e.expanded) }, o),
                r.a.createElement("div", { ref: t, className: n }, a)
              );
            })
          );
        });
      ne.displayName = "NavbarCollapse";
      var re = ne;
      var oe = function (e) {
        var t = Object(n.useRef)(e);
        return (
          Object(n.useEffect)(
            function () {
              t.current = e;
            },
            [e]
          ),
          t
        );
      };
      function ie(e) {
        var t = oe(e);
        return Object(n.useCallback)(
          function () {
            return t.current && t.current.apply(t, arguments);
          },
          [t]
        );
      }
      var le = r.a.forwardRef(function (e, t) {
        var a = e.bsPrefix,
          o = e.className,
          i = e.children,
          l = e.label,
          u = e.as,
          f = void 0 === u ? "button" : u,
          p = e.onClick,
          m = Object(c.a)(e, [
            "bsPrefix",
            "className",
            "children",
            "label",
            "as",
            "onClick",
          ]);
        a = Object(b.a)(a, "navbar-toggler");
        var h = Object(n.useContext)(ae) || {},
          g = h.onToggle,
          v = h.expanded,
          y = ie(function (e) {
            p && p(e), g && g();
          });
        return (
          "button" === f && (m.type = "button"),
          r.a.createElement(
            f,
            Object(s.a)({}, m, {
              ref: t,
              onClick: y,
              "aria-label": l,
              className: d()(o, a, !v && "collapsed"),
            }),
            i || r.a.createElement("span", { className: a + "-icon" })
          )
        );
      });
      (le.displayName = "NavbarToggle"),
        (le.defaultProps = { label: "Toggle navigation" });
      var se = le,
        ce = r.a.createContext(null),
        ue = function (e, t) {
          return void 0 === t && (t = null), null != e ? String(e) : t || null;
        },
        de = ce,
        fe = w("navbar-text", { Component: "span" }),
        pe = r.a.forwardRef(function (e, t) {
          var a = h(e, { expanded: "onToggle" }),
            o = a.bsPrefix,
            i = a.expand,
            l = a.variant,
            u = a.bg,
            f = a.fixed,
            p = a.sticky,
            m = a.className,
            g = a.children,
            v = a.as,
            y = void 0 === v ? "nav" : v,
            w = a.expanded,
            E = a.onToggle,
            O = a.onSelect,
            x = a.collapseOnSelect,
            j = Object(c.a)(a, [
              "bsPrefix",
              "expand",
              "variant",
              "bg",
              "fixed",
              "sticky",
              "className",
              "children",
              "as",
              "expanded",
              "onToggle",
              "onSelect",
              "collapseOnSelect",
            ]),
            R = Object(b.a)(o, "navbar"),
            C = Object(n.useCallback)(
              function () {
                O && O.apply(void 0, arguments), x && w && E && E(!1);
              },
              [O, x, w, E]
            );
          void 0 === j.role && "nav" !== y && (j.role = "navigation");
          var N = R + "-expand";
          "string" == typeof i && (N = N + "-" + i);
          var L = Object(n.useMemo)(
            function () {
              return {
                onToggle: function () {
                  return E && E(!w);
                },
                bsPrefix: R,
                expanded: !!w,
              };
            },
            [R, w, E]
          );
          return r.a.createElement(
            ae.Provider,
            { value: L },
            r.a.createElement(
              de.Provider,
              { value: C },
              r.a.createElement(
                y,
                Object(s.a)({ ref: t }, j, {
                  className: d()(
                    m,
                    R,
                    i && N,
                    l && R + "-" + l,
                    u && "bg-" + u,
                    p && "sticky-" + p,
                    f && "fixed-" + f
                  ),
                }),
                g
              )
            )
          );
        });
      (pe.defaultProps = {
        expand: !0,
        variant: "light",
        collapseOnSelect: !1,
      }),
        (pe.displayName = "Navbar"),
        (pe.Brand = O),
        (pe.Toggle = se),
        (pe.Collapse = re),
        (pe.Text = fe);
      var me = pe,
        he = (a("K9S6"), r.a.createContext(null));
      he.displayName = "CardContext";
      var ge = he,
        ve = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function be(e, t) {
        return ve(e.querySelectorAll(t));
      }
      function ye() {
        return Object(n.useReducer)(function (e) {
          return !e;
        }, !1)[1];
      }
      var we = function (e) {
        return e && "function" != typeof e
          ? function (t) {
              e.current = t;
            }
          : e;
      };
      var Ee = function (e, t) {
          return Object(n.useMemo)(
            function () {
              return (function (e, t) {
                var a = we(e),
                  n = we(t);
                return function (e) {
                  a && a(e), n && n(e);
                };
              })(e, t);
            },
            [e, t]
          );
        },
        Oe = r.a.createContext(null);
      Oe.displayName = "NavContext";
      var xe = Oe,
        je = r.a.createContext(null),
        Re = function () {},
        Ce = r.a.forwardRef(function (e, t) {
          var a,
            o,
            i = e.as,
            l = void 0 === i ? "ul" : i,
            u = e.onSelect,
            d = e.activeKey,
            f = e.role,
            p = e.onKeyDown,
            m = Object(c.a)(e, [
              "as",
              "onSelect",
              "activeKey",
              "role",
              "onKeyDown",
            ]),
            h = ye(),
            g = Object(n.useRef)(!1),
            v = Object(n.useContext)(de),
            b = Object(n.useContext)(je);
          b &&
            ((f = f || "tablist"),
            (d = b.activeKey),
            (a = b.getControlledId),
            (o = b.getControllerId));
          var y = Object(n.useRef)(null),
            w = function (e) {
              var t = y.current;
              if (!t) return null;
              var a = be(t, "[data-rb-event-key]:not(.disabled)"),
                n = t.querySelector(".active");
              if (!n) return null;
              var r = a.indexOf(n);
              if (-1 === r) return null;
              var o = r + e;
              return (
                o >= a.length && (o = 0), o < 0 && (o = a.length - 1), a[o]
              );
            },
            E = function (e, t) {
              null != e && (u && u(e, t), v && v(e, t));
            };
          Object(n.useEffect)(function () {
            if (y.current && g.current) {
              var e = y.current.querySelector("[data-rb-event-key].active");
              e && e.focus();
            }
            g.current = !1;
          });
          var O = Ee(t, y);
          return r.a.createElement(
            de.Provider,
            { value: E },
            r.a.createElement(
              xe.Provider,
              {
                value: {
                  role: f,
                  activeKey: ue(d),
                  getControlledId: a || Re,
                  getControllerId: o || Re,
                },
              },
              r.a.createElement(
                l,
                Object(s.a)({}, m, {
                  onKeyDown: function (e) {
                    var t;
                    switch ((p && p(e), e.key)) {
                      case "ArrowLeft":
                      case "ArrowUp":
                        t = w(-1);
                        break;
                      case "ArrowRight":
                      case "ArrowDown":
                        t = w(1);
                        break;
                      default:
                        return;
                    }
                    t &&
                      (e.preventDefault(),
                      E(t.dataset.rbEventKey, e),
                      (g.current = !0),
                      h());
                  },
                  ref: O,
                  role: f,
                })
              )
            )
          );
        }),
        Ne = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.className,
            o = e.children,
            i = e.as,
            l = void 0 === i ? "div" : i,
            u = Object(c.a)(e, ["bsPrefix", "className", "children", "as"]);
          return (
            (a = Object(b.a)(a, "nav-item")),
            r.a.createElement(
              l,
              Object(s.a)({}, u, { ref: t, className: d()(n, a) }),
              o
            )
          );
        });
      Ne.displayName = "NavItem";
      var Le = Ne,
        Se = a("dbZe"),
        ke = a("2W6z"),
        Te = a.n(ke),
        ze = r.a.forwardRef(function (e, t) {
          var a = e.active,
            o = e.className,
            i = e.eventKey,
            l = e.onSelect,
            u = e.onClick,
            f = e.as,
            p = Object(c.a)(e, [
              "active",
              "className",
              "eventKey",
              "onSelect",
              "onClick",
              "as",
            ]),
            m = ue(i, p.href),
            h = Object(n.useContext)(de),
            g = Object(n.useContext)(xe),
            v = a;
          if (g) {
            p.role || "tablist" !== g.role || (p.role = "tab");
            var b = g.getControllerId(m),
              y = g.getControlledId(m);
            (p["data-rb-event-key"] = m),
              (p.id = b || p.id),
              (p["aria-controls"] = y || p["aria-controls"]),
              (v = null == a && null != m ? g.activeKey === m : a);
          }
          "tab" === p.role &&
            ((p.tabIndex = v ? p.tabIndex : -1), (p["aria-selected"] = v));
          var w = ie(function (e) {
            u && u(e), null != m && (l && l(m, e), h && h(m, e));
          });
          return r.a.createElement(
            f,
            Object(s.a)({}, p, {
              ref: t,
              onClick: w,
              className: d()(o, v && "active"),
            })
          );
        });
      ze.defaultProps = { disabled: !1 };
      var Pe = ze,
        Me = { disabled: !1, as: Se.a },
        Ue = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.disabled,
            o = e.className,
            i = e.href,
            l = e.eventKey,
            u = e.onSelect,
            f = e.as,
            p = Object(c.a)(e, [
              "bsPrefix",
              "disabled",
              "className",
              "href",
              "eventKey",
              "onSelect",
              "as",
            ]);
          return (
            (a = Object(b.a)(a, "nav-link")),
            r.a.createElement(
              Pe,
              Object(s.a)({}, p, {
                href: i,
                ref: t,
                eventKey: l,
                as: f,
                disabled: n,
                onSelect: u,
                className: d()(o, a, n && "disabled"),
              })
            )
          );
        });
      (Ue.displayName = "NavLink"), (Ue.defaultProps = Me);
      var De = Ue,
        Ie = r.a.forwardRef(function (e, t) {
          var a,
            o,
            i,
            l = h(e, { activeKey: "onSelect" }),
            u = l.as,
            f = void 0 === u ? "div" : u,
            p = l.bsPrefix,
            m = l.variant,
            g = l.fill,
            v = l.justify,
            y = l.navbar,
            w = l.className,
            E = l.children,
            O = l.activeKey,
            x = Object(c.a)(l, [
              "as",
              "bsPrefix",
              "variant",
              "fill",
              "justify",
              "navbar",
              "className",
              "children",
              "activeKey",
            ]),
            j = Object(b.a)(p, "nav"),
            R = !1,
            C = Object(n.useContext)(ae),
            N = Object(n.useContext)(ge);
          return (
            C
              ? ((o = C.bsPrefix), (R = null == y || y))
              : N && (i = N.cardHeaderBsPrefix),
            r.a.createElement(
              Ce,
              Object(s.a)(
                {
                  as: f,
                  ref: t,
                  activeKey: O,
                  className: d()(
                    w,
                    ((a = {}),
                    (a[j] = !R),
                    (a[o + "-nav"] = R),
                    (a[i + "-" + m] = !!i),
                    (a[j + "-" + m] = !!m),
                    (a[j + "-fill"] = g),
                    (a[j + "-justified"] = v),
                    a)
                  ),
                },
                x
              ),
              E
            )
          );
        });
      (Ie.displayName = "Nav"),
        (Ie.defaultProps = { justify: !1, fill: !1 }),
        (Ie.Item = Le),
        (Ie.Link = De);
      var Ve,
        Ae = Ie;
      function Be(e) {
        var t = Object(n.useRef)(null);
        return (
          Object(n.useEffect)(function () {
            t.current = e;
          }),
          t.current
        );
      }
      function He() {
        return Object(n.useState)(null);
      }
      var Fe = r.a.createContext(null);
      function We() {
        var e = Object(n.useRef)(!0),
          t = Object(n.useRef)(function () {
            return e.current;
          });
        return (
          Object(n.useEffect)(function () {
            return function () {
              e.current = !1;
            };
          }, []),
          t.current
        );
      }
      var qe = function (e) {
        var t = We();
        return [
          e[0],
          Object(n.useCallback)(
            function (a) {
              if (t()) return e[1](a);
            },
            [t, e[1]]
          ),
        ];
      };
      function Ke(e) {
        return e.split("-")[0];
      }
      function _e(e) {
        return {
          x: e.offsetLeft,
          y: e.offsetTop,
          width: e.offsetWidth,
          height: e.offsetHeight,
        };
      }
      function Ge(e) {
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function Xe(e) {
        return e instanceof Ge(e).Element || e instanceof Element;
      }
      function Ye(e) {
        return e instanceof Ge(e).HTMLElement || e instanceof HTMLElement;
      }
      function Qe(e, t) {
        var a,
          n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if ((a = n) instanceof Ge(a).ShadowRoot || a instanceof ShadowRoot) {
          var r = t;
          do {
            if (r && e.isSameNode(r)) return !0;
            r = r.parentNode || r.host;
          } while (r);
        }
        return !1;
      }
      function Ze(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function Je(e) {
        return Ge(e).getComputedStyle(e);
      }
      function $e(e) {
        return ["table", "td", "th"].indexOf(Ze(e)) >= 0;
      }
      function et(e) {
        return ((Xe(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function tt(e) {
        return "html" === Ze(e)
          ? e
          : e.assignedSlot || e.parentNode || e.host || et(e);
      }
      function at(e) {
        if (!Ye(e) || "fixed" === Je(e).position) return null;
        var t = e.offsetParent;
        if (t) {
          var a = et(t);
          if (
            "body" === Ze(t) &&
            "static" === Je(t).position &&
            "static" !== Je(a).position
          )
            return a;
        }
        return t;
      }
      function nt(e) {
        for (
          var t = Ge(e), a = at(e);
          a && $e(a) && "static" === Je(a).position;

        )
          a = at(a);
        return a && "body" === Ze(a) && "static" === Je(a).position
          ? t
          : a ||
              (function (e) {
                for (
                  var t = tt(e);
                  Ye(t) && ["html", "body"].indexOf(Ze(t)) < 0;

                ) {
                  var a = Je(t);
                  if (
                    "none" !== a.transform ||
                    "none" !== a.perspective ||
                    (a.willChange && "auto" !== a.willChange)
                  )
                    return t;
                  t = t.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function rt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function ot(e, t, a) {
        return Math.max(e, Math.min(t, a));
      }
      function it(e) {
        return Object.assign(
          Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }),
          e
        );
      }
      function lt(e, t) {
        return t.reduce(function (t, a) {
          return (t[a] = e), t;
        }, {});
      }
      var st = "top",
        ct = "bottom",
        ut = "right",
        dt = "left",
        ft = [st, ct, ut, dt],
        pt = ft.reduce(function (e, t) {
          return e.concat([t + "-start", t + "-end"]);
        }, []),
        mt = [].concat(ft, ["auto"]).reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
        ht = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      var gt = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              a = e.state,
              n = e.name,
              r = a.elements.arrow,
              o = a.modifiersData.popperOffsets,
              i = Ke(a.placement),
              l = rt(i),
              s = [dt, ut].indexOf(i) >= 0 ? "height" : "width";
            if (r && o) {
              var c = a.modifiersData[n + "#persistent"].padding,
                u = _e(r),
                d = "y" === l ? st : dt,
                f = "y" === l ? ct : ut,
                p =
                  a.rects.reference[s] +
                  a.rects.reference[l] -
                  o[l] -
                  a.rects.popper[s],
                m = o[l] - a.rects.reference[l],
                h = nt(r),
                g = h
                  ? "y" === l
                    ? h.clientHeight || 0
                    : h.clientWidth || 0
                  : 0,
                v = p / 2 - m / 2,
                b = c[d],
                y = g - u[s] - c[f],
                w = g / 2 - u[s] / 2 + v,
                E = ot(b, w, y),
                O = l;
              a.modifiersData[n] =
                (((t = {})[O] = E), (t.centerOffset = E - w), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              a = e.options,
              n = e.name,
              r = a.element,
              o = void 0 === r ? "[data-popper-arrow]" : r,
              i = a.padding,
              l = void 0 === i ? 0 : i;
            null != o &&
              ("string" != typeof o ||
                (o = t.elements.popper.querySelector(o))) &&
              Qe(t.elements.popper, o) &&
              ((t.elements.arrow = o),
              (t.modifiersData[n + "#persistent"] = {
                padding: it("number" != typeof l ? l : lt(l, ft)),
              }));
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        },
        vt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function bt(e) {
        var t,
          a = e.popper,
          n = e.popperRect,
          r = e.placement,
          o = e.offsets,
          i = e.position,
          l = e.gpuAcceleration,
          s = e.adaptive,
          c = (function (e) {
            var t = e.x,
              a = e.y,
              n = window.devicePixelRatio || 1;
            return {
              x: Math.round(t * n) / n || 0,
              y: Math.round(a * n) / n || 0,
            };
          })(o),
          u = c.x,
          d = c.y,
          f = o.hasOwnProperty("x"),
          p = o.hasOwnProperty("y"),
          m = dt,
          h = st,
          g = window;
        if (s) {
          var v = nt(a);
          v === Ge(a) && (v = et(a)),
            r === st &&
              ((h = ct), (d -= v.clientHeight - n.height), (d *= l ? 1 : -1)),
            r === dt &&
              ((m = ut), (u -= v.clientWidth - n.width), (u *= l ? 1 : -1));
        }
        var b,
          y = Object.assign({ position: i }, s && vt);
        return l
          ? Object.assign(
              Object.assign({}, y),
              {},
              (((b = {})[h] = p ? "0" : ""),
              (b[m] = f ? "0" : ""),
              (b.transform =
                (g.devicePixelRatio || 1) < 2
                  ? "translate(" + u + "px, " + d + "px)"
                  : "translate3d(" + u + "px, " + d + "px, 0)"),
              b)
            )
          : Object.assign(
              Object.assign({}, y),
              {},
              (((t = {})[h] = p ? d + "px" : ""),
              (t[m] = f ? u + "px" : ""),
              (t.transform = ""),
              t)
            );
      }
      var yt = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              a = e.options,
              n = a.gpuAcceleration,
              r = void 0 === n || n,
              o = a.adaptive,
              i = void 0 === o || o,
              l = {
                placement: Ke(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: r,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                Object.assign({}, t.styles.popper),
                bt(
                  Object.assign(
                    Object.assign({}, l),
                    {},
                    {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: i,
                    }
                  )
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  Object.assign({}, t.styles.arrow),
                  bt(
                    Object.assign(
                      Object.assign({}, l),
                      {},
                      {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                      }
                    )
                  )
                )),
              (t.attributes.popper = Object.assign(
                Object.assign({}, t.attributes.popper),
                {},
                { "data-popper-placement": t.placement }
              ));
          },
          data: {},
        },
        wt = { passive: !0 };
      var Et = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              a = e.instance,
              n = e.options,
              r = n.scroll,
              o = void 0 === r || r,
              i = n.resize,
              l = void 0 === i || i,
              s = Ge(t.elements.popper),
              c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              o &&
                c.forEach(function (e) {
                  e.addEventListener("scroll", a.update, wt);
                }),
              l && s.addEventListener("resize", a.update, wt),
              function () {
                o &&
                  c.forEach(function (e) {
                    e.removeEventListener("scroll", a.update, wt);
                  }),
                  l && s.removeEventListener("resize", a.update, wt);
              }
            );
          },
          data: {},
        },
        Ot = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function xt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return Ot[e];
        });
      }
      var jt = { start: "end", end: "start" };
      function Rt(e) {
        return e.replace(/start|end/g, function (e) {
          return jt[e];
        });
      }
      function Ct(e) {
        var t = e.getBoundingClientRect();
        return {
          width: t.width,
          height: t.height,
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          x: t.left,
          y: t.top,
        };
      }
      function Nt(e) {
        var t = Ge(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Lt(e) {
        return Ct(et(e)).left + Nt(e).scrollLeft;
      }
      function St(e) {
        var t = Je(e),
          a = t.overflow,
          n = t.overflowX,
          r = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(a + r + n);
      }
      function kt(e, t) {
        void 0 === t && (t = []);
        var a = (function e(t) {
            return ["html", "body", "#document"].indexOf(Ze(t)) >= 0
              ? t.ownerDocument.body
              : Ye(t) && St(t)
              ? t
              : e(tt(t));
          })(e),
          n = "body" === Ze(a),
          r = Ge(a),
          o = n ? [r].concat(r.visualViewport || [], St(a) ? a : []) : a,
          i = t.concat(o);
        return n ? i : i.concat(kt(tt(o)));
      }
      function Tt(e) {
        return Object.assign(
          Object.assign({}, e),
          {},
          { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height }
        );
      }
      function zt(e, t) {
        return "viewport" === t
          ? Tt(
              (function (e) {
                var t = Ge(e),
                  a = et(e),
                  n = t.visualViewport,
                  r = a.clientWidth,
                  o = a.clientHeight,
                  i = 0,
                  l = 0;
                return (
                  n &&
                    ((r = n.width),
                    (o = n.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((i = n.offsetLeft), (l = n.offsetTop))),
                  { width: r, height: o, x: i + Lt(e), y: l }
                );
              })(e)
            )
          : Ye(t)
          ? (function (e) {
              var t = Ct(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : Tt(
              (function (e) {
                var t = et(e),
                  a = Nt(e),
                  n = e.ownerDocument.body,
                  r = Math.max(
                    t.scrollWidth,
                    t.clientWidth,
                    n ? n.scrollWidth : 0,
                    n ? n.clientWidth : 0
                  ),
                  o = Math.max(
                    t.scrollHeight,
                    t.clientHeight,
                    n ? n.scrollHeight : 0,
                    n ? n.clientHeight : 0
                  ),
                  i = -a.scrollLeft + Lt(e),
                  l = -a.scrollTop;
                return (
                  "rtl" === Je(n || t).direction &&
                    (i += Math.max(t.clientWidth, n ? n.clientWidth : 0) - r),
                  { width: r, height: o, x: i, y: l }
                );
              })(et(e))
            );
      }
      function Pt(e, t, a) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = kt(tt(e)),
                    a =
                      ["absolute", "fixed"].indexOf(Je(e).position) >= 0 &&
                      Ye(e)
                        ? nt(e)
                        : e;
                  return Xe(a)
                    ? t.filter(function (e) {
                        return Xe(e) && Qe(e, a) && "body" !== Ze(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          r = [].concat(n, [a]),
          o = r[0],
          i = r.reduce(function (t, a) {
            var n = zt(e, a);
            return (
              (t.top = Math.max(n.top, t.top)),
              (t.right = Math.min(n.right, t.right)),
              (t.bottom = Math.min(n.bottom, t.bottom)),
              (t.left = Math.max(n.left, t.left)),
              t
            );
          }, zt(e, o));
        return (
          (i.width = i.right - i.left),
          (i.height = i.bottom - i.top),
          (i.x = i.left),
          (i.y = i.top),
          i
        );
      }
      function Mt(e) {
        return e.split("-")[1];
      }
      function Ut(e) {
        var t,
          a = e.reference,
          n = e.element,
          r = e.placement,
          o = r ? Ke(r) : null,
          i = r ? Mt(r) : null,
          l = a.x + a.width / 2 - n.width / 2,
          s = a.y + a.height / 2 - n.height / 2;
        switch (o) {
          case st:
            t = { x: l, y: a.y - n.height };
            break;
          case ct:
            t = { x: l, y: a.y + a.height };
            break;
          case ut:
            t = { x: a.x + a.width, y: s };
            break;
          case dt:
            t = { x: a.x - n.width, y: s };
            break;
          default:
            t = { x: a.x, y: a.y };
        }
        var c = o ? rt(o) : null;
        if (null != c) {
          var u = "y" === c ? "height" : "width";
          switch (i) {
            case "start":
              t[c] = Math.floor(t[c]) - Math.floor(a[u] / 2 - n[u] / 2);
              break;
            case "end":
              t[c] = Math.floor(t[c]) + Math.ceil(a[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      function Dt(e, t) {
        void 0 === t && (t = {});
        var a = t,
          n = a.placement,
          r = void 0 === n ? e.placement : n,
          o = a.boundary,
          i = void 0 === o ? "clippingParents" : o,
          l = a.rootBoundary,
          s = void 0 === l ? "viewport" : l,
          c = a.elementContext,
          u = void 0 === c ? "popper" : c,
          d = a.altBoundary,
          f = void 0 !== d && d,
          p = a.padding,
          m = void 0 === p ? 0 : p,
          h = it("number" != typeof m ? m : lt(m, ft)),
          g = "popper" === u ? "reference" : "popper",
          v = e.elements.reference,
          b = e.rects.popper,
          y = e.elements[f ? g : u],
          w = Pt(Xe(y) ? y : y.contextElement || et(e.elements.popper), i, s),
          E = Ct(v),
          O = Ut({
            reference: E,
            element: b,
            strategy: "absolute",
            placement: r,
          }),
          x = Tt(Object.assign(Object.assign({}, b), O)),
          j = "popper" === u ? x : E,
          R = {
            top: w.top - j.top + h.top,
            bottom: j.bottom - w.bottom + h.bottom,
            left: w.left - j.left + h.left,
            right: j.right - w.right + h.right,
          },
          C = e.modifiersData.offset;
        if ("popper" === u && C) {
          var N = C[r];
          Object.keys(R).forEach(function (e) {
            var t = [ut, ct].indexOf(e) >= 0 ? 1 : -1,
              a = [st, ct].indexOf(e) >= 0 ? "y" : "x";
            R[e] += N[a] * t;
          });
        }
        return R;
      }
      var It = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            a = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var r = a.mainAxis,
                o = void 0 === r || r,
                i = a.altAxis,
                l = void 0 === i || i,
                s = a.fallbackPlacements,
                c = a.padding,
                u = a.boundary,
                d = a.rootBoundary,
                f = a.altBoundary,
                p = a.flipVariations,
                m = void 0 === p || p,
                h = a.allowedAutoPlacements,
                g = t.options.placement,
                v = Ke(g),
                b =
                  s ||
                  (v === g || !m
                    ? [xt(g)]
                    : (function (e) {
                        if ("auto" === Ke(e)) return [];
                        var t = xt(e);
                        return [Rt(e), t, Rt(t)];
                      })(g)),
                y = [g].concat(b).reduce(function (e, a) {
                  return e.concat(
                    "auto" === Ke(a)
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var a = t,
                            n = a.placement,
                            r = a.boundary,
                            o = a.rootBoundary,
                            i = a.padding,
                            l = a.flipVariations,
                            s = a.allowedAutoPlacements,
                            c = void 0 === s ? mt : s,
                            u = Mt(n),
                            d = u
                              ? l
                                ? pt
                                : pt.filter(function (e) {
                                    return Mt(e) === u;
                                  })
                              : ft,
                            f = d.filter(function (e) {
                              return c.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var p = f.reduce(function (t, a) {
                            return (
                              (t[a] = Dt(e, {
                                placement: a,
                                boundary: r,
                                rootBoundary: o,
                                padding: i,
                              })[Ke(a)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: a,
                          boundary: u,
                          rootBoundary: d,
                          padding: c,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : a
                  );
                }, []),
                w = t.rects.reference,
                E = t.rects.popper,
                O = new Map(),
                x = !0,
                j = y[0],
                R = 0;
              R < y.length;
              R++
            ) {
              var C = y[R],
                N = Ke(C),
                L = "start" === Mt(C),
                S = [st, ct].indexOf(N) >= 0,
                k = S ? "width" : "height",
                T = Dt(t, {
                  placement: C,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: c,
                }),
                z = S ? (L ? ut : dt) : L ? ct : st;
              w[k] > E[k] && (z = xt(z));
              var P = xt(z),
                M = [];
              if (
                (o && M.push(T[N] <= 0),
                l && M.push(T[z] <= 0, T[P] <= 0),
                M.every(function (e) {
                  return e;
                }))
              ) {
                (j = C), (x = !1);
                break;
              }
              O.set(C, M);
            }
            if (x)
              for (
                var U = function (e) {
                    var t = y.find(function (t) {
                      var a = O.get(t);
                      if (a)
                        return a.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (j = t), "break";
                  },
                  D = m ? 3 : 1;
                D > 0;
                D--
              ) {
                if ("break" === U(D)) break;
              }
            t.placement !== j &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = j),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Vt(e, t, a) {
        return (
          void 0 === a && (a = { x: 0, y: 0 }),
          {
            top: e.top - t.height - a.y,
            right: e.right - t.width + a.x,
            bottom: e.bottom - t.height + a.y,
            left: e.left - t.width - a.x,
          }
        );
      }
      function At(e) {
        return [st, ut, ct, dt].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Bt = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (e) {
          var t = e.state,
            a = e.name,
            n = t.rects.reference,
            r = t.rects.popper,
            o = t.modifiersData.preventOverflow,
            i = Dt(t, { elementContext: "reference" }),
            l = Dt(t, { altBoundary: !0 }),
            s = Vt(i, n),
            c = Vt(l, r, o),
            u = At(s),
            d = At(c);
          (t.modifiersData[a] = {
            referenceClippingOffsets: s,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: d,
          }),
            (t.attributes.popper = Object.assign(
              Object.assign({}, t.attributes.popper),
              {},
              { "data-popper-reference-hidden": u, "data-popper-escaped": d }
            ));
        },
      };
      var Ht = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            a = e.options,
            n = e.name,
            r = a.offset,
            o = void 0 === r ? [0, 0] : r,
            i = mt.reduce(function (e, a) {
              return (
                (e[a] = (function (e, t, a) {
                  var n = Ke(e),
                    r = [dt, st].indexOf(n) >= 0 ? -1 : 1,
                    o =
                      "function" == typeof a
                        ? a(
                            Object.assign(
                              Object.assign({}, t),
                              {},
                              { placement: e }
                            )
                          )
                        : a,
                    i = o[0],
                    l = o[1];
                  return (
                    (i = i || 0),
                    (l = (l || 0) * r),
                    [dt, ut].indexOf(n) >= 0 ? { x: l, y: i } : { x: i, y: l }
                  );
                })(a, t.rects, o)),
                e
              );
            }, {}),
            l = i[t.placement],
            s = l.x,
            c = l.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += s),
            (t.modifiersData.popperOffsets.y += c)),
            (t.modifiersData[n] = i);
        },
      };
      var Ft = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (e) {
          var t = e.state,
            a = e.name;
          t.modifiersData[a] = Ut({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement,
          });
        },
        data: {},
      };
      var Wt = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            a = e.options,
            n = e.name,
            r = a.mainAxis,
            o = void 0 === r || r,
            i = a.altAxis,
            l = void 0 !== i && i,
            s = a.boundary,
            c = a.rootBoundary,
            u = a.altBoundary,
            d = a.padding,
            f = a.tether,
            p = void 0 === f || f,
            m = a.tetherOffset,
            h = void 0 === m ? 0 : m,
            g = Dt(t, {
              boundary: s,
              rootBoundary: c,
              padding: d,
              altBoundary: u,
            }),
            v = Ke(t.placement),
            b = Mt(t.placement),
            y = !b,
            w = rt(v),
            E = "x" === w ? "y" : "x",
            O = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            j = t.rects.popper,
            R =
              "function" == typeof h
                ? h(
                    Object.assign(
                      Object.assign({}, t.rects),
                      {},
                      { placement: t.placement }
                    )
                  )
                : h,
            C = { x: 0, y: 0 };
          if (O) {
            if (o) {
              var N = "y" === w ? st : dt,
                L = "y" === w ? ct : ut,
                S = "y" === w ? "height" : "width",
                k = O[w],
                T = O[w] + g[N],
                z = O[w] - g[L],
                P = p ? -j[S] / 2 : 0,
                M = "start" === b ? x[S] : j[S],
                U = "start" === b ? -j[S] : -x[S],
                D = t.elements.arrow,
                I = p && D ? _e(D) : { width: 0, height: 0 },
                V = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                A = V[N],
                B = V[L],
                H = ot(0, x[S], I[S]),
                F = y ? x[S] / 2 - P - H - A - R : M - H - A - R,
                W = y ? -x[S] / 2 + P + H + B + R : U + H + B + R,
                q = t.elements.arrow && nt(t.elements.arrow),
                K = q ? ("y" === w ? q.clientTop || 0 : q.clientLeft || 0) : 0,
                _ = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement][w]
                  : 0,
                G = O[w] + F - _ - K,
                X = O[w] + W - _,
                Y = ot(p ? Math.min(T, G) : T, k, p ? Math.max(z, X) : z);
              (O[w] = Y), (C[w] = Y - k);
            }
            if (l) {
              var Q = "x" === w ? st : dt,
                Z = "x" === w ? ct : ut,
                J = O[E],
                $ = ot(J + g[Q], J, J - g[Z]);
              (O[E] = $), (C[E] = $ - J);
            }
            t.modifiersData[n] = C;
          }
        },
        requiresIfExists: ["offset"],
      };
      function qt(e, t, a) {
        void 0 === a && (a = !1);
        var n,
          r,
          o = et(t),
          i = Ct(e),
          l = Ye(t),
          s = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (l || (!l && !a)) &&
            (("body" !== Ze(t) || St(o)) &&
              (s =
                (n = t) !== Ge(n) && Ye(n)
                  ? { scrollLeft: (r = n).scrollLeft, scrollTop: r.scrollTop }
                  : Nt(n)),
            Ye(t)
              ? (((c = Ct(t)).x += t.clientLeft), (c.y += t.clientTop))
              : o && (c.x = Lt(o))),
          {
            x: i.left + s.scrollLeft - c.x,
            y: i.top + s.scrollTop - c.y,
            width: i.width,
            height: i.height,
          }
        );
      }
      function Kt(e) {
        var t = new Map(),
          a = new Set(),
          n = [];
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            a.has(e.name) ||
              (function e(r) {
                a.add(r.name),
                  []
                    .concat(r.requires || [], r.requiresIfExists || [])
                    .forEach(function (n) {
                      if (!a.has(n)) {
                        var r = t.get(n);
                        r && e(r);
                      }
                    }),
                  n.push(r);
              })(e);
          }),
          n
        );
      }
      var _t = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Gt() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return !t.some(function (e) {
          return !(e && "function" == typeof e.getBoundingClientRect);
        });
      }
      function Xt(e) {
        void 0 === e && (e = {});
        var t = e,
          a = t.defaultModifiers,
          n = void 0 === a ? [] : a,
          r = t.defaultOptions,
          o = void 0 === r ? _t : r;
        return function (e, t, a) {
          void 0 === a && (a = o);
          var r,
            i,
            l = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign(Object.assign({}, _t), o),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            s = [],
            c = !1,
            u = {
              state: l,
              setOptions: function (a) {
                d(),
                  (l.options = Object.assign(
                    Object.assign(Object.assign({}, o), l.options),
                    a
                  )),
                  (l.scrollParents = {
                    reference: Xe(e)
                      ? kt(e)
                      : e.contextElement
                      ? kt(e.contextElement)
                      : [],
                    popper: kt(t),
                  });
                var r = (function (e) {
                  var t = Kt(e);
                  return ht.reduce(function (e, a) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === a;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var a = e[t.name];
                      return (
                        (e[t.name] = a
                          ? Object.assign(
                              Object.assign(Object.assign({}, a), t),
                              {},
                              {
                                options: Object.assign(
                                  Object.assign({}, a.options),
                                  t.options
                                ),
                                data: Object.assign(
                                  Object.assign({}, a.data),
                                  t.data
                                ),
                              }
                            )
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, l.options.modifiers))
                );
                return (
                  (l.orderedModifiers = r.filter(function (e) {
                    return e.enabled;
                  })),
                  l.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      a = e.options,
                      n = void 0 === a ? {} : a,
                      r = e.effect;
                    if ("function" == typeof r) {
                      var o = r({ state: l, name: t, instance: u, options: n });
                      s.push(o || function () {});
                    }
                  }),
                  u.update()
                );
              },
              forceUpdate: function () {
                if (!c) {
                  var e = l.elements,
                    t = e.reference,
                    a = e.popper;
                  if (Gt(t, a)) {
                    (l.rects = {
                      reference: qt(t, nt(a), "fixed" === l.options.strategy),
                      popper: _e(a),
                    }),
                      (l.reset = !1),
                      (l.placement = l.options.placement),
                      l.orderedModifiers.forEach(function (e) {
                        return (l.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var n = 0; n < l.orderedModifiers.length; n++)
                      if (!0 !== l.reset) {
                        var r = l.orderedModifiers[n],
                          o = r.fn,
                          i = r.options,
                          s = void 0 === i ? {} : i,
                          d = r.name;
                        "function" == typeof o &&
                          (l =
                            o({ state: l, options: s, name: d, instance: u }) ||
                            l);
                      } else (l.reset = !1), (n = -1);
                  }
                }
              },
              update:
                ((r = function () {
                  return new Promise(function (e) {
                    u.forceUpdate(), e(l);
                  });
                }),
                function () {
                  return (
                    i ||
                      (i = new Promise(function (e) {
                        Promise.resolve().then(function () {
                          (i = void 0), e(r());
                        });
                      })),
                    i
                  );
                }),
              destroy: function () {
                d(), (c = !0);
              },
            };
          if (!Gt(e, t)) return u;
          function d() {
            s.forEach(function (e) {
              return e();
            }),
              (s = []);
          }
          return (
            u.setOptions(a).then(function (e) {
              !c && a.onFirstUpdate && a.onFirstUpdate(e);
            }),
            u
          );
        };
      }
      var Yt = Xt({ defaultModifiers: [Bt, Ft, yt, Et, Ht, It, Wt, gt] }),
        Qt = function (e) {
          return {
            position: e,
            top: "0",
            left: "0",
            opacity: "0",
            pointerEvents: "none",
          };
        },
        Zt = { name: "applyStyles", enabled: !1 },
        Jt = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                a = e.reference,
                n = e.popper;
              if ("removeAttribute" in a) {
                var r = (a.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== n.id;
                  });
                r.length
                  ? a.setAttribute("aria-describedby", r.join(","))
                  : a.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              a = e.state.elements,
              n = a.popper,
              r = a.reference,
              o =
                null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (n.id && "tooltip" === o && "setAttribute" in r) {
              var i = r.getAttribute("aria-describedby");
              r.setAttribute("aria-describedby", i ? i + "," + n.id : n.id);
            }
          },
        },
        $t = [];
      var ea = function (e, t, a) {
        var r = void 0 === a ? {} : a,
          o = r.enabled,
          i = void 0 === o || o,
          l = r.placement,
          u = void 0 === l ? "bottom" : l,
          d = r.strategy,
          f = void 0 === d ? "absolute" : d,
          p = r.modifiers,
          m = void 0 === p ? $t : p,
          h = Object(c.a)(r, ["enabled", "placement", "strategy", "modifiers"]),
          g = Object(n.useRef)(),
          v = Object(n.useCallback)(function () {
            var e;
            null == (e = g.current) || e.update();
          }, []),
          b = Object(n.useCallback)(function () {
            var e;
            null == (e = g.current) || e.forceUpdate();
          }, []),
          y = qe(
            Object(n.useState)({
              placement: u,
              update: v,
              forceUpdate: b,
              attributes: {},
              styles: { popper: Qt(f), arrow: {} },
            })
          ),
          w = y[0],
          E = y[1],
          O = Object(n.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    a = {},
                    n = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (a[e] = t.styles[e]), (n[e] = t.attributes[e]);
                  }),
                    E({
                      state: t,
                      styles: a,
                      attributes: n,
                      update: v,
                      forceUpdate: b,
                      placement: t.placement,
                    });
                },
              };
            },
            [v, b, E]
          );
        return (
          Object(n.useEffect)(
            function () {
              g.current &&
                i &&
                g.current.setOptions({
                  placement: u,
                  strategy: f,
                  modifiers: [].concat(m, [O, Zt]),
                });
            },
            [f, u, O, i]
          ),
          Object(n.useEffect)(
            function () {
              if (i && null != e && null != t)
                return (
                  (g.current = Yt(
                    e,
                    t,
                    Object(s.a)({}, h, {
                      placement: u,
                      strategy: f,
                      modifiers: [].concat(m, [Jt, O]),
                    })
                  )),
                  function () {
                    null != g.current &&
                      (g.current.destroy(),
                      (g.current = void 0),
                      E(function (e) {
                        return Object(s.a)({}, e, {
                          attributes: {},
                          styles: { popper: Qt(f) },
                        });
                      }));
                  }
                );
            },
            [i, e, t]
          ),
          w
        );
      };
      function ta(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var aa = function (e) {
          return x(
            (function (e) {
              return e && "setState" in e
                ? B.a.findDOMNode(e)
                : null != e
                ? e
                : null;
            })(e)
          );
        },
        na = function () {};
      var ra = function (e) {
        return e && ("current" in e ? e.current : e);
      };
      var oa = function (e, t, a) {
        var r = void 0 === a ? {} : a,
          o = r.disabled,
          i = r.clickTrigger,
          l = void 0 === i ? "click" : i,
          s = Object(n.useRef)(!1),
          c = t || na,
          u = Object(n.useCallback)(
            function (t) {
              var a,
                n = ra(e);
              Te()(
                !!n,
                "RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"
              ),
                (s.current = !(
                  n &&
                  ((a = t),
                  !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey)) &&
                  (function (e) {
                    return 0 === e.button;
                  })(t) &&
                  !ta(n, t.target)
                ));
            },
            [e]
          ),
          d = ie(function (e) {
            s.current || c(e);
          }),
          f = ie(function (e) {
            27 === e.keyCode && c(e);
          });
        Object(n.useEffect)(
          function () {
            if (!o && null != e) {
              var t = aa(ra(e)),
                a = D(t, l, u, !0),
                n = D(t, l, d),
                r = D(t, "keyup", f),
                i = [];
              return (
                "ontouchstart" in t.documentElement &&
                  (i = [].slice.call(t.body.children).map(function (e) {
                    return D(e, "mousemove", na);
                  })),
                function () {
                  a(),
                    n(),
                    r(),
                    i.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, l, u, d, f]
        );
      };
      function ia(e) {
        var t,
          a,
          n,
          r,
          o,
          i = e.enabled,
          l = e.enableEvents,
          c = e.placement,
          u = e.flip,
          d = e.offset,
          f = e.containerPadding,
          p = e.arrowElement,
          m = e.popperConfig,
          h = void 0 === m ? {} : m,
          g = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(h.modifiers);
        return Object(s.a)({}, h, {
          placement: c,
          enabled: i,
          modifiers:
            ((o = Object(s.a)({}, g, {
              eventListeners: { enabled: l },
              preventOverflow: Object(s.a)({}, g.preventOverflow, {
                options: f
                  ? Object(s.a)(
                      { padding: f },
                      null == (t = g.preventOverflow) ? void 0 : t.options
                    )
                  : null == (a = g.preventOverflow)
                  ? void 0
                  : a.options,
              }),
              offset: {
                options: Object(s.a)(
                  { offset: d },
                  null == (n = g.offset) ? void 0 : n.options
                ),
              },
              arrow: Object(s.a)({}, g.arrow, {
                enabled: !!p,
                options: Object(s.a)(
                  {},
                  null == (r = g.arrow) ? void 0 : r.options,
                  { element: p }
                ),
              }),
              flip: Object(s.a)({ enabled: !!u }, g.flip),
            })),
            void 0 === o && (o = {}),
            Array.isArray(o)
              ? o
              : Object.keys(o).map(function (e) {
                  return (o[e].name = e), o[e];
                })),
        });
      }
      var la = function () {};
      function sa(e) {
        void 0 === e && (e = {});
        var t = Object(n.useContext)(Fe),
          a = He(),
          r = a[0],
          o = a[1],
          i = Object(n.useRef)(!1),
          l = e,
          u = l.flip,
          d = l.offset,
          f = l.rootCloseEvent,
          p = l.popperConfig,
          m = void 0 === p ? {} : p,
          h = l.usePopper,
          g = void 0 === h ? !!t : h,
          v = null == (null == t ? void 0 : t.show) ? e.show : t.show,
          b =
            null == (null == t ? void 0 : t.alignEnd) ? e.alignEnd : t.alignEnd;
        v && !i.current && (i.current = !0);
        var y = function (e) {
            null == t || t.toggle(!1, e);
          },
          w = t || {},
          E = w.drop,
          O = w.setMenu,
          x = w.menuElement,
          j = w.toggleElement,
          R = b ? "bottom-end" : "bottom-start";
        "up" === E
          ? (R = b ? "top-end" : "top-start")
          : "right" === E
          ? (R = b ? "right-end" : "right-start")
          : "left" === E && (R = b ? "left-end" : "left-start");
        var C,
          N = ea(
            j,
            x,
            ia({
              placement: R,
              enabled: !(!g || !v),
              enableEvents: v,
              offset: d,
              flip: u,
              arrowElement: r,
              popperConfig: m,
            })
          ),
          L = N.styles,
          S = N.attributes,
          k = Object(c.a)(N, ["styles", "attributes"]),
          T = { ref: O || la, "aria-labelledby": null == j ? void 0 : j.id },
          z = { show: v, alignEnd: b, hasShown: i.current, close: y };
        return (
          (C = g
            ? Object(s.a)({}, k, z, {
                props: Object(s.a)({}, T, S.popper, { style: L.popper }),
                arrowProps: Object(s.a)({ ref: o }, S.arrow, {
                  style: L.arrow,
                }),
              })
            : Object(s.a)({}, z, { props: T })),
          oa(x, y, { clickTrigger: f, disabled: !(C && v) }),
          C
        );
      }
      function ca(e) {
        var t = e.children,
          a = sa(Object(c.a)(e, ["children"]));
        return r.a.createElement(r.a.Fragment, null, a.hasShown ? t(a) : null);
      }
      (ca.displayName = "ReactOverlaysDropdownMenu"),
        (ca.defaultProps = { usePopper: !0 });
      var ua = ca,
        da = function () {};
      function fa() {
        var e = Object(n.useContext)(Fe) || {},
          t = e.show,
          a = void 0 !== t && t,
          r = e.toggle,
          o = void 0 === r ? da : r;
        return [
          { ref: e.setToggle || da, "aria-haspopup": !0, "aria-expanded": !!a },
          { show: a, toggle: o },
        ];
      }
      function pa(e) {
        var t = e.children,
          a = fa(),
          n = a[0],
          o = a[1],
          i = o.show,
          l = o.toggle;
        return r.a.createElement(
          r.a.Fragment,
          null,
          t({ show: i, toggle: l, props: n })
        );
      }
      pa.displayName = "ReactOverlaysDropdownToggle";
      var ma = pa;
      function ha(e) {
        var t = e.drop,
          a = e.alignEnd,
          o = e.defaultShow,
          i = e.show,
          l = e.onToggle,
          s = e.itemSelector,
          c = void 0 === s ? "* > *" : s,
          u = e.focusFirstItemOnShow,
          d = e.children,
          f = ye(),
          p = m(i, o, l),
          h = p[0],
          g = p[1],
          v = He(),
          b = v[0],
          y = v[1],
          w = Object(n.useRef)(null),
          E = w.current,
          O = Object(n.useCallback)(
            function (e) {
              (w.current = e), f();
            },
            [f]
          ),
          x = Be(h),
          j = Object(n.useRef)(null),
          R = Object(n.useRef)(!1),
          C = Object(n.useCallback)(
            function (e) {
              g(!h, e);
            },
            [g, h]
          ),
          N = Object(n.useMemo)(
            function () {
              return {
                toggle: C,
                drop: t,
                show: h,
                alignEnd: a,
                menuElement: E,
                toggleElement: b,
                setMenu: O,
                setToggle: y,
              };
            },
            [C, t, h, a, E, b, O, y]
          );
        E && x && !h && (R.current = E.contains(document.activeElement));
        var L = ie(function () {
            b && b.focus && b.focus();
          }),
          S = ie(function () {
            var e = j.current,
              t = u;
            if (
              (null == t &&
                (t =
                  !(
                    !w.current ||
                    !(function (e, t) {
                      if (!Ve) {
                        var a = document.body,
                          n =
                            a.matches ||
                            a.matchesSelector ||
                            a.webkitMatchesSelector ||
                            a.mozMatchesSelector ||
                            a.msMatchesSelector;
                        Ve = function (e, t) {
                          return n.call(e, t);
                        };
                      }
                      return Ve(e, t);
                    })(w.current, "[role=menu]")
                  ) && "keyboard"),
              !1 !== t && ("keyboard" !== t || /^key.+$/.test(e)))
            ) {
              var a = be(w.current, c)[0];
              a && a.focus && a.focus();
            }
          });
        Object(n.useEffect)(
          function () {
            h ? S() : R.current && ((R.current = !1), L());
          },
          [h, R, L, S]
        ),
          Object(n.useEffect)(function () {
            j.current = null;
          });
        var k = function (e, t) {
          if (!w.current) return null;
          var a = be(w.current, c),
            n = a.indexOf(e) + t;
          return a[(n = Math.max(0, Math.min(n, a.length)))];
        };
        return r.a.createElement(
          Fe.Provider,
          { value: N },
          d({
            props: {
              onKeyDown: function (e) {
                var t = e.key,
                  a = e.target;
                if (
                  !/input|textarea/i.test(a.tagName) ||
                  !(
                    " " === t ||
                    ("Escape" !== t && w.current && w.current.contains(a))
                  )
                )
                  switch (((j.current = e.type), t)) {
                    case "ArrowUp":
                      var n = k(a, -1);
                      return n && n.focus && n.focus(), void e.preventDefault();
                    case "ArrowDown":
                      if ((e.preventDefault(), h)) {
                        var r = k(a, 1);
                        r && r.focus && r.focus();
                      } else C(e);
                      return;
                    case "Escape":
                    case "Tab":
                      g(!1, e);
                  }
              },
            },
          })
        );
      }
      (ha.displayName = "ReactOverlaysDropdown"),
        (ha.Menu = ua),
        (ha.Toggle = ma);
      var ga = ha,
        va = { as: Se.a, disabled: !1 },
        ba = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.className,
            i = e.children,
            l = e.eventKey,
            u = e.disabled,
            f = e.href,
            p = e.onClick,
            m = e.onSelect,
            h = e.active,
            g = e.as,
            v = Object(c.a)(e, [
              "bsPrefix",
              "className",
              "children",
              "eventKey",
              "disabled",
              "href",
              "onClick",
              "onSelect",
              "active",
              "as",
            ]),
            y = Object(b.a)(a, "dropdown-item"),
            w = Object(n.useContext)(de),
            E = (Object(n.useContext)(xe) || {}).activeKey,
            O = ue(l || null, f),
            x = null == h && null != O ? ue(E) === O : h,
            j = ie(function (e) {
              u || (p && p(e), w && w(O, e), m && m(O, e));
            });
          return r.a.createElement(
            g,
            Object(s.a)({}, v, {
              ref: t,
              href: f,
              disabled: u,
              className: d()(o, y, x && "active", u && "disabled"),
              onClick: j,
            }),
            i
          );
        });
      (ba.displayName = "DropdownItem"), (ba.defaultProps = va);
      var ya = ba;
      function wa(e, t) {
        return e;
      }
      function Ea(e, t) {
        return e.classList
          ? !!t && e.classList.contains(t)
          : -1 !==
              (" " + (e.className.baseVal || e.className) + " ").indexOf(
                " " + t + " "
              );
      }
      function Oa(e) {
        var t = window.getComputedStyle(e);
        return {
          top: parseFloat(t.marginTop) || 0,
          right: parseFloat(t.marginRight) || 0,
          bottom: parseFloat(t.marginBottom) || 0,
          left: parseFloat(t.marginLeft) || 0,
        };
      }
      var xa = r.a.forwardRef(function (e, t) {
        var a,
          o,
          i = e.bsPrefix,
          l = e.className,
          u = e.alignRight,
          f = e.rootCloseEvent,
          p = e.flip,
          m = e.show,
          h = e.renderOnMount,
          g = e.as,
          v = void 0 === g ? "div" : g,
          y = e.popperConfig,
          w = Object(c.a)(e, [
            "bsPrefix",
            "className",
            "alignRight",
            "rootCloseEvent",
            "flip",
            "show",
            "renderOnMount",
            "as",
            "popperConfig",
          ]),
          E = Object(n.useContext)(ae),
          O = Object(b.a)(i, "dropdown-menu"),
          x =
            ((a = Object(n.useRef)(null)),
            (o = Object(n.useRef)(null)),
            [
              Object(n.useCallback)(function (e) {
                e &&
                  (Ea(e, "popover") || Ea(e, "dropdown-menu")) &&
                  ((o.current = Oa(e)),
                  (e.style.margin = "0"),
                  (a.current = e));
              }, []),
              [
                Object(n.useMemo)(
                  function () {
                    return {
                      name: "offset",
                      options: {
                        offset: function (e) {
                          var t = e.placement;
                          if (!o.current) return [0, 0];
                          var a = o.current,
                            n = a.top,
                            r = a.left,
                            i = a.bottom,
                            l = a.right;
                          switch (t.split("-")[0]) {
                            case "top":
                              return [0, i];
                            case "left":
                              return [0, l];
                            case "bottom":
                              return [0, n];
                            case "right":
                              return [0, r];
                            default:
                              return [0, 0];
                          }
                        },
                      },
                    };
                  },
                  [o]
                ),
                Object(n.useMemo)(function () {
                  return {
                    name: "popoverArrowMargins",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["arrow"],
                    effect: function (e) {
                      var t = e.state;
                      if (
                        a.current &&
                        t.elements.arrow &&
                        Ea(a.current, "popover") &&
                        t.modifiersData["arrow#persistent"]
                      ) {
                        var n = Oa(t.elements.arrow),
                          r = n.top,
                          o = n.right,
                          i = r || o;
                        return (
                          (t.modifiersData["arrow#persistent"].padding = {
                            top: i,
                            left: i,
                            right: i,
                            bottom: i,
                          }),
                          (t.elements.arrow.style.margin = "0"),
                          function () {
                            t.elements.arrow &&
                              (t.elements.arrow.style.margin = "");
                          }
                        );
                      }
                    },
                  };
                }, []),
              ],
            ]),
          j = x[0],
          R = x[1],
          C = sa({
            flip: p,
            rootCloseEvent: f,
            show: m,
            alignEnd: u,
            usePopper: !E,
            popperConfig: Object(s.a)({}, y, {
              modifiers: R.concat((null == y ? void 0 : y.modifiers) || []),
            }),
          }),
          N = C.hasShown,
          L = C.placement,
          S = C.show,
          k = C.alignEnd,
          T = C.close,
          z = C.props;
        return (
          (z.ref = Ee(j, Ee(wa(t), z.ref))),
          N || h
            ? ("string" != typeof v &&
                ((z.show = S), (z.close = T), (z.alignRight = k)),
              L &&
                ((w.style = Object(s.a)({}, w.style, {}, z.style)),
                (w["x-placement"] = L)),
              r.a.createElement(
                v,
                Object(s.a)({}, w, z, {
                  className: d()(l, O, S && "show", k && O + "-right"),
                })
              ))
            : null
        );
      });
      (xa.displayName = "DropdownMenu"),
        (xa.defaultProps = { alignRight: !1, flip: !0 });
      var ja = xa,
        Ra = (a("BO/t"), a("cWnB")),
        Ca = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.split,
            o = e.className,
            i = e.children,
            l = e.childBsPrefix,
            u = e.as,
            f = void 0 === u ? Ra.a : u,
            p = Object(c.a)(e, [
              "bsPrefix",
              "split",
              "className",
              "children",
              "childBsPrefix",
              "as",
            ]),
            m = Object(b.a)(a, "dropdown-toggle");
          void 0 !== l && (p.bsPrefix = l);
          var h = fa(),
            g = h[0],
            v = h[1].toggle;
          return (
            (g.ref = Ee(g.ref, wa(t))),
            r.a.createElement(
              f,
              Object(s.a)(
                { onClick: v, className: d()(o, m, n && m + "-split") },
                g,
                p
              ),
              i
            )
          );
        });
      Ca.displayName = "DropdownToggle";
      var Na = Ca,
        La = w("dropdown-header", { defaultProps: { role: "heading" } }),
        Sa = w("dropdown-divider", { defaultProps: { role: "separator" } }),
        ka = w("dropdown-item-text", { Component: "span" }),
        Ta = r.a.forwardRef(function (e, t) {
          var a = h(e, { show: "onToggle" }),
            o = a.bsPrefix,
            i = a.drop,
            l = a.show,
            u = a.className,
            f = a.alignRight,
            p = a.onSelect,
            m = a.onToggle,
            g = a.focusFirstItemOnShow,
            v = a.as,
            y = void 0 === v ? "div" : v,
            w =
              (a.navbar,
              Object(c.a)(a, [
                "bsPrefix",
                "drop",
                "show",
                "className",
                "alignRight",
                "onSelect",
                "onToggle",
                "focusFirstItemOnShow",
                "as",
                "navbar",
              ])),
            E = Object(n.useContext)(de),
            O = Object(b.a)(o, "dropdown"),
            x = ie(function (e, t, a) {
              void 0 === a && (a = t.type),
                t.currentTarget === document && (a = "rootClose"),
                m && m(e, t, { source: a });
            }),
            j = ie(function (e, t) {
              E && E(e, t), p && p(e, t), x(!1, t, "select");
            });
          return r.a.createElement(
            de.Provider,
            { value: j },
            r.a.createElement(
              ga,
              {
                drop: i,
                show: l,
                alignEnd: f,
                onToggle: x,
                focusFirstItemOnShow: g,
                itemSelector: "." + O + "-item:not(.disabled):not(:disabled)",
              },
              function (e) {
                var a = e.props;
                return r.a.createElement(
                  y,
                  Object(s.a)({}, w, a, {
                    ref: t,
                    className: d()(
                      u,
                      l && "show",
                      (!i || "down" === i) && O,
                      "up" === i && "dropup",
                      "right" === i && "dropright",
                      "left" === i && "dropleft"
                    ),
                  })
                );
              }
            )
          );
        });
      (Ta.displayName = "Dropdown"),
        (Ta.defaultProps = { navbar: !1 }),
        (Ta.Divider = Sa),
        (Ta.Header = La),
        (Ta.Item = ya),
        (Ta.ItemText = ka),
        (Ta.Menu = ja),
        (Ta.Toggle = Na);
      var za = Ta,
        Pa = r.a.forwardRef(function (e, t) {
          var a = e.id,
            n = e.title,
            o = e.children,
            i = e.bsPrefix,
            l = e.rootCloseEvent,
            u = e.menuRole,
            d = e.disabled,
            f = e.active,
            p = e.renderMenuOnMount,
            m = Object(c.a)(e, [
              "id",
              "title",
              "children",
              "bsPrefix",
              "rootCloseEvent",
              "menuRole",
              "disabled",
              "active",
              "renderMenuOnMount",
            ]);
          return r.a.createElement(
            za,
            Object(s.a)({ ref: t }, m, { as: Le }),
            r.a.createElement(
              za.Toggle,
              {
                id: a,
                eventKey: null,
                active: f,
                disabled: d,
                childBsPrefix: i,
                as: De,
              },
              n
            ),
            r.a.createElement(
              za.Menu,
              { role: u, renderOnMount: p, rootCloseEvent: l },
              o
            )
          );
        });
      (Pa.displayName = "NavDropdown"),
        (Pa.Item = za.Item),
        (Pa.ItemText = za.ItemText),
        (Pa.Divider = za.Divider),
        (Pa.Header = za.Header);
      var Ma,
        Ua = Pa,
        Da = (a("AiCv"), a("JI6e")),
        Ia = a("3Z9Z"),
        Va = a("Wbzz");
      function Aa(e) {
        if (((!Ma && 0 !== Ma) || e) && k) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (Ma = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return Ma;
      }
      function Ba(e) {
        var t,
          a,
          r = ((t = e), ((a = Object(n.useRef)(t)).current = t), a);
        Object(n.useEffect)(function () {
          return function () {
            return r.current();
          };
        }, []);
      }
      function Ha(e) {
        void 0 === e && (e = x());
        try {
          var t = e.activeElement;
          return t && t.nodeName ? t : null;
        } catch (Un) {
          return e.body;
        }
      }
      function Fa(e, t) {
        e.classList
          ? e.classList.add(t)
          : Ea(e, t) ||
            ("string" == typeof e.className
              ? (e.className = e.className + " " + t)
              : e.setAttribute(
                  "class",
                  ((e.className && e.className.baseVal) || "") + " " + t
                ));
      }
      function Wa(e, t) {
        return e
          .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      function qa(e, t) {
        e.classList
          ? e.classList.remove(t)
          : "string" == typeof e.className
          ? (e.className = Wa(e.className, t))
          : e.setAttribute(
              "class",
              Wa((e.className && e.className.baseVal) || "", t)
            );
      }
      function Ka(e) {
        return "window" in e && e.window === e
          ? e
          : ("nodeType" in (t = e) &&
              t.nodeType === document.DOCUMENT_NODE &&
              e.defaultView) ||
              !1;
        var t;
      }
      function _a(e) {
        var t;
        return Ka(e) || ((t = e) && "body" === t.tagName.toLowerCase())
          ? (function (e) {
              var t = Ka(e) ? x() : x(e),
                a = Ka(e) || t.defaultView;
              return t.body.clientWidth < a.innerWidth;
            })(e)
          : e.scrollHeight > e.clientHeight;
      }
      var Ga = ["template", "script", "style"],
        Xa = function (e, t, a) {
          [].forEach.call(e.children, function (e) {
            var n, r, o;
            -1 === t.indexOf(e) &&
              ((r = (n = e).nodeType),
              (o = n.tagName),
              1 === r && -1 === Ga.indexOf(o.toLowerCase())) &&
              a(e);
          });
        };
      function Ya(e, t) {
        t &&
          (e
            ? t.setAttribute("aria-hidden", "true")
            : t.removeAttribute("aria-hidden"));
      }
      var Qa,
        Za = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              a = t.hideSiblingNodes,
              n = void 0 === a || a,
              r = t.handleContainerOverflow,
              o = void 0 === r || r;
            (this.hideSiblingNodes = void 0),
              (this.handleContainerOverflow = void 0),
              (this.modals = void 0),
              (this.containers = void 0),
              (this.data = void 0),
              (this.scrollbarSize = void 0),
              (this.hideSiblingNodes = n),
              (this.handleContainerOverflow = o),
              (this.modals = []),
              (this.containers = []),
              (this.data = []),
              (this.scrollbarSize = Aa());
          }
          var t = e.prototype;
          return (
            (t.isContainerOverflowing = function (e) {
              var t = this.data[this.containerIndexFromModal(e)];
              return t && t.overflowing;
            }),
            (t.containerIndexFromModal = function (e) {
              return (
                (t = this.data),
                (a = function (t) {
                  return -1 !== t.modals.indexOf(e);
                }),
                (n = -1),
                t.some(function (e, t) {
                  return !!a(e, t) && ((n = t), !0);
                }),
                n
              );
              var t, a, n;
            }),
            (t.setContainerStyle = function (e, t) {
              var a = { overflow: "hidden" };
              (e.style = {
                overflow: t.style.overflow,
                paddingRight: t.style.paddingRight,
              }),
                e.overflowing &&
                  (a.paddingRight =
                    parseInt(S(t, "paddingRight") || "0", 10) +
                    this.scrollbarSize +
                    "px"),
                S(t, a);
            }),
            (t.removeContainerStyle = function (e, t) {
              Object.assign(t.style, e.style);
            }),
            (t.add = function (e, t, a) {
              var n = this.modals.indexOf(e),
                r = this.containers.indexOf(t);
              if (-1 !== n) return n;
              if (
                ((n = this.modals.length),
                this.modals.push(e),
                this.hideSiblingNodes &&
                  (function (e, t) {
                    var a = t.dialog,
                      n = t.backdrop;
                    Xa(e, [a, n], function (e) {
                      return Ya(!0, e);
                    });
                  })(t, e),
                -1 !== r)
              )
                return this.data[r].modals.push(e), n;
              var o = {
                modals: [e],
                classes: a ? a.split(/\s+/) : [],
                overflowing: _a(t),
              };
              return (
                this.handleContainerOverflow && this.setContainerStyle(o, t),
                o.classes.forEach(Fa.bind(null, t)),
                this.containers.push(t),
                this.data.push(o),
                n
              );
            }),
            (t.remove = function (e) {
              var t = this.modals.indexOf(e);
              if (-1 !== t) {
                var a = this.containerIndexFromModal(e),
                  n = this.data[a],
                  r = this.containers[a];
                if (
                  (n.modals.splice(n.modals.indexOf(e), 1),
                  this.modals.splice(t, 1),
                  0 === n.modals.length)
                )
                  n.classes.forEach(qa.bind(null, r)),
                    this.handleContainerOverflow &&
                      this.removeContainerStyle(n, r),
                    this.hideSiblingNodes &&
                      (function (e, t) {
                        var a = t.dialog,
                          n = t.backdrop;
                        Xa(e, [a, n], function (e) {
                          return Ya(!1, e);
                        });
                      })(r, e),
                    this.containers.splice(a, 1),
                    this.data.splice(a, 1);
                else if (this.hideSiblingNodes) {
                  var o = n.modals[n.modals.length - 1],
                    i = o.backdrop;
                  Ya(!1, o.dialog), Ya(!1, i);
                }
              }
            }),
            (t.isTopModal = function (e) {
              return (
                !!this.modals.length &&
                this.modals[this.modals.length - 1] === e
              );
            }),
            e
          );
        })(),
        Ja = function (e) {
          var t;
          return "undefined" == typeof document
            ? null
            : null == e
            ? x().body
            : ("function" == typeof e && (e = e()),
              e && "current" in e && (e = e.current),
              ((null == (t = e) ? void 0 : t.nodeType) && e) || null);
        };
      function $a(e) {
        var t = e || (Qa || (Qa = new Za()), Qa),
          a = Object(n.useRef)({ dialog: null, backdrop: null });
        return Object.assign(a.current, {
          add: function (e, n) {
            return t.add(a.current, e, n);
          },
          remove: function () {
            return t.remove(a.current);
          },
          isTopModal: function () {
            return t.isTopModal(a.current);
          },
          setDialogRef: Object(n.useCallback)(function (e) {
            a.current.dialog = e;
          }, []),
          setBackdropRef: Object(n.useCallback)(function (e) {
            a.current.backdrop = e;
          }, []),
        });
      }
      var en = Object(n.forwardRef)(function (e, t) {
        var a = e.show,
          o = void 0 !== a && a,
          i = e.role,
          l = void 0 === i ? "dialog" : i,
          u = e.className,
          d = e.style,
          f = e.children,
          p = e.backdrop,
          m = void 0 === p || p,
          h = e.keyboard,
          g = void 0 === h || h,
          v = e.onBackdropClick,
          b = e.onEscapeKeyDown,
          y = e.transition,
          w = e.backdropTransition,
          E = e.autoFocus,
          O = void 0 === E || E,
          x = e.enforceFocus,
          j = void 0 === x || x,
          R = e.restoreFocus,
          C = void 0 === R || R,
          N = e.restoreFocusOptions,
          L = e.renderDialog,
          S = e.renderBackdrop,
          T =
            void 0 === S
              ? function (e) {
                  return r.a.createElement("div", e);
                }
              : S,
          z = e.manager,
          P = e.container,
          M = e.containerClassName,
          U = e.onShow,
          I = e.onHide,
          V = void 0 === I ? function () {} : I,
          A = e.onExit,
          H = e.onExited,
          F = e.onExiting,
          W = e.onEnter,
          q = e.onEntering,
          K = e.onEntered,
          _ = Object(c.a)(e, [
            "show",
            "role",
            "className",
            "style",
            "children",
            "backdrop",
            "keyboard",
            "onBackdropClick",
            "onEscapeKeyDown",
            "transition",
            "backdropTransition",
            "autoFocus",
            "enforceFocus",
            "restoreFocus",
            "restoreFocusOptions",
            "renderDialog",
            "renderBackdrop",
            "manager",
            "container",
            "containerClassName",
            "onShow",
            "onHide",
            "onExit",
            "onExited",
            "onExiting",
            "onEnter",
            "onEntering",
            "onEntered",
          ]),
          G = (function (e, t) {
            var a = Object(n.useState)(function () {
                return Ja(e);
              }),
              r = a[0],
              o = a[1];
            if (!r) {
              var i = Ja(e);
              i && o(i);
            }
            return (
              Object(n.useEffect)(
                function () {
                  t && r && t(r);
                },
                [t, r]
              ),
              Object(n.useEffect)(
                function () {
                  var t = Ja(e);
                  t !== r && o(t);
                },
                [e, r]
              ),
              r
            );
          })(P),
          X = $a(z),
          Y = We(),
          Q = Be(o),
          Z = Object(n.useState)(!o),
          J = Z[0],
          $ = Z[1],
          ee = Object(n.useRef)(null);
        Object(n.useImperativeHandle)(
          t,
          function () {
            return X;
          },
          [X]
        ),
          k && !Q && o && (ee.current = Ha()),
          y || o || J ? o && J && $(!1) : $(!0);
        var te = ie(function () {
            if (
              (X.add(G, M),
              (se.current = D(document, "keydown", oe)),
              (le.current = D(
                document,
                "focus",
                function () {
                  return setTimeout(ne);
                },
                !0
              )),
              U && U(),
              O)
            ) {
              var e = Ha(document);
              X.dialog &&
                e &&
                !ta(X.dialog, e) &&
                ((ee.current = e), X.dialog.focus());
            }
          }),
          ae = ie(function () {
            var e;
            (X.remove(),
            null == se.current || se.current(),
            null == le.current || le.current(),
            C) &&
              (null == (e = ee.current) || null == e.focus || e.focus(N),
              (ee.current = null));
          });
        Object(n.useEffect)(
          function () {
            o && G && te();
          },
          [o, G, te]
        ),
          Object(n.useEffect)(
            function () {
              J && ae();
            },
            [J, ae]
          ),
          Ba(function () {
            ae();
          });
        var ne = ie(function () {
            if (j && Y() && X.isTopModal()) {
              var e = Ha();
              X.dialog && e && !ta(X.dialog, e) && X.dialog.focus();
            }
          }),
          re = ie(function (e) {
            e.target === e.currentTarget &&
              (null == v || v(e), !0 === m && V());
          }),
          oe = ie(function (e) {
            g &&
              27 === e.keyCode &&
              X.isTopModal() &&
              (null == b || b(e), e.defaultPrevented || V());
          }),
          le = Object(n.useRef)(),
          se = Object(n.useRef)(),
          ce = y;
        if (!G || !(o || (ce && !J))) return null;
        var ue = Object(s.a)(
            {
              role: l,
              ref: X.setDialogRef,
              "aria-modal": "dialog" === l || void 0,
            },
            _,
            { style: d, className: u, tabIndex: -1 }
          ),
          de = L
            ? L(ue)
            : r.a.createElement(
                "div",
                ue,
                r.a.cloneElement(f, { role: "document" })
              );
        ce &&
          (de = r.a.createElement(
            ce,
            {
              appear: !0,
              unmountOnExit: !0,
              in: !!o,
              onExit: A,
              onExiting: F,
              onExited: function () {
                $(!0);
                for (
                  var e = arguments.length, t = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  t[a] = arguments[a];
                null == H || H.apply(void 0, t);
              },
              onEnter: W,
              onEntering: q,
              onEntered: K,
            },
            de
          ));
        var fe = null;
        if (m) {
          var pe = w;
          (fe = T({ ref: X.setBackdropRef, onClick: re })),
            pe && (fe = r.a.createElement(pe, { appear: !0, in: !!o }, fe));
        }
        return r.a.createElement(
          r.a.Fragment,
          null,
          B.a.createPortal(r.a.createElement(r.a.Fragment, null, fe, de), G)
        );
      });
      en.displayName = "Modal";
      var tn,
        an = Object.assign(en, { Manager: Za }),
        nn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        rn = ".sticky-top",
        on = ".navbar-toggler",
        ln = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          Object(g.a)(t, e);
          var a = t.prototype;
          return (
            (a.adjustAndStore = function (e, t, a) {
              var n,
                r = t.style[e];
              (t.dataset[e] = r),
                S(t, (((n = {})[e] = parseFloat(S(t, e)) + a + "px"), n));
            }),
            (a.restore = function (e, t) {
              var a,
                n = t.dataset[e];
              void 0 !== n &&
                (delete t.dataset[e], S(t, (((a = {})[e] = n), a)));
            }),
            (a.setContainerStyle = function (t, a) {
              var n = this;
              if (
                (e.prototype.setContainerStyle.call(this, t, a), t.overflowing)
              ) {
                var r = Aa();
                be(a, nn).forEach(function (e) {
                  return n.adjustAndStore("paddingRight", e, r);
                }),
                  be(a, rn).forEach(function (e) {
                    return n.adjustAndStore("marginRight", e, -r);
                  }),
                  be(a, on).forEach(function (e) {
                    return n.adjustAndStore("marginRight", e, r);
                  });
              }
            }),
            (a.removeContainerStyle = function (t, a) {
              var n = this;
              e.prototype.removeContainerStyle.call(this, t, a),
                be(a, nn).forEach(function (e) {
                  return n.restore("paddingRight", e);
                }),
                be(a, rn).forEach(function (e) {
                  return n.restore("marginRight", e);
                }),
                be(a, on).forEach(function (e) {
                  return n.restore("marginRight", e);
                });
            }),
            t
          );
        })(Za),
        sn = (((tn = {}).entering = "show"), (tn.entered = "show"), tn),
        cn = r.a.forwardRef(function (e, t) {
          var a = e.className,
            o = e.children,
            i = Object(c.a)(e, ["className", "children"]),
            l = Object(n.useCallback)(
              function (e) {
                X(e), i.onEnter && i.onEnter(e);
              },
              [i]
            );
          return r.a.createElement(
            _,
            Object(s.a)({ ref: t, addEndListener: V }, i, { onEnter: l }),
            function (e, t) {
              return r.a.cloneElement(
                o,
                Object(s.a)({}, t, {
                  className: d()("fade", a, o.props.className, sn[e]),
                })
              );
            }
          );
        });
      (cn.defaultProps = {
        in: !1,
        timeout: 300,
        mountOnEnter: !1,
        unmountOnExit: !1,
        appear: !1,
      }),
        (cn.displayName = "Fade");
      var un = cn,
        dn = w("modal-body"),
        fn = r.a.createContext({ onHide: function () {} }),
        pn = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            n = e.className,
            o = e.centered,
            i = e.size,
            l = e.children,
            u = e.scrollable,
            f = Object(c.a)(e, [
              "bsPrefix",
              "className",
              "centered",
              "size",
              "children",
              "scrollable",
            ]),
            p = (a = Object(b.a)(a, "modal")) + "-dialog";
          return r.a.createElement(
            "div",
            Object(s.a)({}, f, {
              ref: t,
              className: d()(
                p,
                n,
                i && a + "-" + i,
                o && p + "-centered",
                u && p + "-scrollable"
              ),
            }),
            r.a.createElement("div", { className: a + "-content" }, l)
          );
        });
      pn.displayName = "ModalDialog";
      var mn = pn,
        hn = w("modal-footer"),
        gn = r.a.forwardRef(function (e, t) {
          var a = e.label,
            n = e.onClick,
            o = e.className,
            i = Object(c.a)(e, ["label", "onClick", "className"]);
          return r.a.createElement(
            "button",
            Object(s.a)(
              {
                ref: t,
                type: "button",
                className: d()("close", o),
                onClick: n,
              },
              i
            ),
            r.a.createElement("span", { "aria-hidden": "true" }, "×"),
            r.a.createElement("span", { className: "sr-only" }, a)
          );
        });
      (gn.displayName = "CloseButton"), (gn.defaultProps = { label: "Close" });
      var vn = gn,
        bn = r.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.closeLabel,
            i = e.closeButton,
            l = e.onHide,
            u = e.className,
            f = e.children,
            p = Object(c.a)(e, [
              "bsPrefix",
              "closeLabel",
              "closeButton",
              "onHide",
              "className",
              "children",
            ]);
          a = Object(b.a)(a, "modal-header");
          var m = Object(n.useContext)(fn),
            h = ie(function () {
              m && m.onHide(), l && l();
            });
          return r.a.createElement(
            "div",
            Object(s.a)({ ref: t }, p, { className: d()(u, a) }),
            f,
            i && r.a.createElement(vn, { label: o, onClick: h })
          );
        });
      (bn.displayName = "ModalHeader"),
        (bn.defaultProps = { closeLabel: "Close", closeButton: !1 });
      var yn,
        wn,
        En = bn,
        On = w("modal-title", {
          Component:
            ((yn = "h4"),
            r.a.forwardRef(function (e, t) {
              return r.a.createElement(
                "div",
                Object(s.a)({}, e, { ref: t, className: d()(e.className, yn) })
              );
            })),
        }),
        xn = {
          show: !1,
          backdrop: !0,
          keyboard: !0,
          autoFocus: !0,
          enforceFocus: !0,
          restoreFocus: !0,
          animation: !0,
          dialogAs: mn,
        };
      function jn(e) {
        return r.a.createElement(un, e);
      }
      function Rn(e) {
        return r.a.createElement(un, e);
      }
      var Cn = r.a.forwardRef(function (e, t) {
        var a = e.bsPrefix,
          o = e.className,
          i = e.style,
          l = e.dialogClassName,
          u = e.children,
          f = e.dialogAs,
          p = e["aria-labelledby"],
          m = e.show,
          h = e.animation,
          g = e.backdrop,
          v = e.keyboard,
          y = e.onEscapeKeyDown,
          w = e.onShow,
          E = e.onHide,
          O = e.container,
          j = e.autoFocus,
          R = e.enforceFocus,
          C = e.restoreFocus,
          N = e.restoreFocusOptions,
          L = e.onEntered,
          S = e.onExit,
          T = e.onExiting,
          z = e.onEnter,
          P = e.onEntering,
          D = e.onExited,
          I = e.backdropClassName,
          A = e.manager,
          B = Object(c.a)(e, [
            "bsPrefix",
            "className",
            "style",
            "dialogClassName",
            "children",
            "dialogAs",
            "aria-labelledby",
            "show",
            "animation",
            "backdrop",
            "keyboard",
            "onEscapeKeyDown",
            "onShow",
            "onHide",
            "container",
            "autoFocus",
            "enforceFocus",
            "restoreFocus",
            "restoreFocusOptions",
            "onEntered",
            "onExit",
            "onExiting",
            "onEnter",
            "onEntering",
            "onExited",
            "backdropClassName",
            "manager",
          ]),
          H = Object(n.useState)({}),
          F = H[0],
          W = H[1],
          q = Object(n.useState)(!1),
          K = q[0],
          _ = q[1],
          G = Object(n.useRef)(!1),
          X = Object(n.useRef)(!1),
          Y = Object(n.useRef)(null),
          Q = He(),
          Z = Q[0],
          J = Q[1],
          $ = ie(E);
        (a = Object(b.a)(a, "modal")),
          Object(n.useImperativeHandle)(
            t,
            function () {
              return {
                get _modal() {
                  return Z;
                },
              };
            },
            [Z]
          );
        var ee = Object(n.useMemo)(
          function () {
            return { onHide: $ };
          },
          [$]
        );
        function te() {
          return A || (wn || (wn = new ln()), wn);
        }
        function ae(e) {
          if (k) {
            var t = te().isContainerOverflowing(Z),
              a = e.scrollHeight > x(e).documentElement.clientHeight;
            W({
              paddingRight: t && !a ? Aa() : void 0,
              paddingLeft: !t && a ? Aa() : void 0,
            });
          }
        }
        var ne = ie(function () {
          Z && ae(Z.dialog);
        });
        Ba(function () {
          U(window, "resize", ne), Y.current && Y.current();
        });
        var re = function () {
            G.current = !0;
          },
          oe = function (e) {
            G.current && Z && e.target === Z.dialog && (X.current = !0),
              (G.current = !1);
          },
          le = function () {
            _(!0),
              (Y.current = V(Z.dialog, function () {
                _(!1);
              }));
          },
          se = function (e) {
            "static" !== g
              ? X.current || e.target !== e.currentTarget
                ? (X.current = !1)
                : E()
              : (function (e) {
                  e.target === e.currentTarget && le();
                })(e);
          },
          ce = Object(n.useCallback)(
            function (e) {
              return r.a.createElement(
                "div",
                Object(s.a)({}, e, {
                  className: d()(a + "-backdrop", I, !h && "show"),
                })
              );
            },
            [h, I, a]
          ),
          ue = Object(s.a)({}, i, {}, F);
        h || (ue.display = "block");
        return r.a.createElement(
          fn.Provider,
          { value: ee },
          r.a.createElement(an, {
            show: m,
            ref: J,
            backdrop: g,
            container: O,
            keyboard: !0,
            autoFocus: j,
            enforceFocus: R,
            restoreFocus: C,
            restoreFocusOptions: N,
            onEscapeKeyDown: function (e) {
              v || "static" !== g ? v && y && y(e) : (e.preventDefault(), le());
            },
            onShow: w,
            onHide: E,
            onEnter: function (e) {
              e && ((e.style.display = "block"), ae(e));
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  n = 1;
                n < t;
                n++
              )
                a[n - 1] = arguments[n];
              z && z.apply(void 0, [e].concat(a));
            },
            onEntering: function (e) {
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  n = 1;
                n < t;
                n++
              )
                a[n - 1] = arguments[n];
              P && P.apply(void 0, [e].concat(a)), M(window, "resize", ne);
            },
            onEntered: L,
            onExit: function (e) {
              Y.current && Y.current();
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  n = 1;
                n < t;
                n++
              )
                a[n - 1] = arguments[n];
              S && S.apply(void 0, [e].concat(a));
            },
            onExiting: T,
            onExited: function (e) {
              e && (e.style.display = "");
              for (
                var t = arguments.length,
                  a = new Array(t > 1 ? t - 1 : 0),
                  n = 1;
                n < t;
                n++
              )
                a[n - 1] = arguments[n];
              D && D.apply(void 0, a), U(window, "resize", ne);
            },
            manager: te(),
            containerClassName: a + "-open",
            transition: h ? jn : void 0,
            backdropTransition: h ? Rn : void 0,
            renderBackdrop: ce,
            renderDialog: function (e) {
              return r.a.createElement(
                "div",
                Object(s.a)({ role: "dialog" }, e, {
                  style: ue,
                  className: d()(o, a, K && a + "-static"),
                  onClick: g ? se : void 0,
                  onMouseUp: oe,
                  "aria-labelledby": p,
                }),
                r.a.createElement(
                  f,
                  Object(s.a)({}, B, {
                    role: "document",
                    onMouseDown: re,
                    className: l,
                  }),
                  u
                )
              );
            },
          })
        );
      });
      (Cn.displayName = "Modal"),
        (Cn.defaultProps = xn),
        (Cn.Body = dn),
        (Cn.Header = En),
        (Cn.Title = On),
        (Cn.Footer = hn),
        (Cn.Dialog = mn),
        (Cn.TRANSITION_DURATION = 300),
        (Cn.BACKDROP_TRANSITION_DURATION = 150);
      var Nn = Cn,
        Ln = a("qXiB"),
        Sn = a("NDdm"),
        kn = a("jhdv");
      function Tn(e) {
        var t = e.show,
          a = e.handleClose,
          n = Ln.a.map(function (e, t) {
            return r.a.createElement(
              Da.a,
              { id: t, xs: 2, md: 2 },
              r.a.createElement(
                Va.a,
                { to: Object(kn.a)(e.pythonURL) },
                r.a.createElement(Sn.a, { chartType: e.logo })
              )
            );
          });
        return r.a.createElement(
          Nn,
          {
            show: t,
            onHide: a,
            "aria-labelledby": "contained-modal-title-vcenter",
            centered: !0,
          },
          r.a.createElement(
            mn,
            { contentClassName: "allFamiliesModal" },
            r.a.createElement(
              Ra.a,
              { className: "closeModalButton", onClick: a },
              "X"
            ),
            r.a.createElement(Ia.a, null, n)
          )
        );
      }
      function zn() {
        var e = r.a.useState(!1),
          t = e[0],
          a = e[1];
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            me,
            { className: "container", expand: "lg", fixed: "top" },
            r.a.createElement(
              me.Brand,
              { href: "/" },
              "← Python Graph Gallery"
            ),
            r.a.createElement(me.Toggle, {
              "aria-controls": "basic-navbar-nav",
            }),
            r.a.createElement(
              me.Collapse,
              { id: "basic-navbar-nav" },
              r.a.createElement(
                Ae,
                { className: "mr-auto" },
                r.a.createElement(
                  Ae.Link,
                  {
                    onClick: function () {
                      return a(!0);
                    },
                  },
                  "Chart types"
                ),
                r.a.createElement(
                  Ua,
                  { title: "Quick", id: "basic-nav-dropdown" },
                  r.a.createElement(
                    Ua.Item,
                    { href: "#action/3.1" },
                    "Matplotlib"
                  ),
                  r.a.createElement(
                    Ua.Item,
                    { href: "#action/3.2" },
                    "Seaborn"
                  ),
                  r.a.createElement(Ua.Item, { href: "#action/3.3" }, "Pandas"),
                  r.a.createElement(Ua.Divider, null),
                  r.a.createElement(
                    Ua.Item,
                    { href: "#action/3.4" },
                    "Separated link"
                  )
                ),
                r.a.createElement(Ae.Link, { href: "#link" }, "All"),
                r.a.createElement(Ae.Link, { href: "#link" }, "Quick"),
                r.a.createElement(Ae.Link, { href: "#link" }, "About"),
                r.a.createElement(
                  Ae.Link,
                  { href: "#home" },
                  r.a.createElement(
                    "svg",
                    {
                      width: "15",
                      "aria-hidden": "true",
                      focusable: "false",
                      "data-prefix": "fas",
                      "data-icon": "search",
                      role: "img",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 512 512",
                    },
                    r.a.createElement("path", {
                      fill: "currentColor",
                      d:
                        "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
                    })
                  )
                )
              )
            )
          ),
          r.a.createElement(Tn, {
            show: t,
            handleClose: function () {
              return a(!1);
            },
          })
        );
      }
      a("x/PU");
      function Pn() {
        return r.a.createElement(
          "div",
          { className: "tableOfContent" },
          r.a.createElement("p", null, "Hello")
        );
      }
      a("8Lv4"), a("q4sD");
      function Mn(e) {
        var t = e.children,
          a = e.title;
        return (
          console.log("children", t),
          r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              o.a,
              null,
              r.a.createElement("title", null, a),
              r.a.createElement("link", {
                href: "/logo/D3_single_small.png",
                rel: "shortcut icon",
                type: "image/x-icon",
              }),
              r.a.createElement("link", {
                href:
                  "https://fonts.googleapis.com/css?family=Roboto|Montserrat",
                rel: "stylesheet",
              })
            ),
            r.a.createElement("header", null, r.a.createElement(zn, null)),
            r.a.createElement("main", null, t),
            r.a.createElement(l, null),
            r.a.createElement(Pn, null)
          )
        );
      }
    },
    "7vrA": function (e, t, a) {
      "use strict";
      var n = a("wx14"),
        r = a("zLVn"),
        o = a("TSYQ"),
        i = a.n(o),
        l = a("q1tI"),
        s = a.n(l),
        c = a("vUet"),
        u = s.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.fluid,
            l = e.as,
            u = void 0 === l ? "div" : l,
            d = e.className,
            f = Object(r.a)(e, ["bsPrefix", "fluid", "as", "className"]),
            p = Object(c.a)(a, "container"),
            m = "string" == typeof o ? "-" + o : "-fluid";
          return s.a.createElement(
            u,
            Object(n.a)({ ref: t }, f, {
              className: i()(d, o ? "" + p + m : p),
            })
          );
        });
      (u.displayName = "Container"),
        (u.defaultProps = { fluid: !1 }),
        (t.a = u);
    },
    "8Lv4": function (e, t, a) {},
    "9d5C": function (e, t, a) {},
    "9eSz": function (e, t, a) {
      "use strict";
      var n = a("TqRt");
      (t.__esModule = !0), (t.default = void 0);
      var r,
        o = n(a("PJYZ")),
        i = n(a("VbXa")),
        l = n(a("8OQS")),
        s = n(a("pVnL")),
        c = n(a("q1tI")),
        u = n(a("17x9")),
        d = function (e) {
          var t = (0, s.default)({}, e),
            a = t.resolutions,
            n = t.sizes,
            r = t.critical;
          return (
            a && ((t.fixed = a), delete t.resolutions),
            n && ((t.fluid = n), delete t.sizes),
            r && (t.loading = "eager"),
            t.fluid && (t.fluid = O([].concat(t.fluid))),
            t.fixed && (t.fixed = O([].concat(t.fixed))),
            t
          );
        },
        f = function (e) {
          var t = e.media;
          return !!t && b && !!window.matchMedia(t).matches;
        },
        p = function (e) {
          var t = e.fluid,
            a = e.fixed,
            n = m(t || a || []);
          return n && n.src;
        },
        m = function (e) {
          if (
            b &&
            (function (e) {
              return (
                !!e &&
                Array.isArray(e) &&
                e.some(function (e) {
                  return void 0 !== e.media;
                })
              );
            })(e)
          ) {
            var t = e.findIndex(f);
            if (-1 !== t) return e[t];
            var a = e.findIndex(function (e) {
              return void 0 === e.media;
            });
            if (-1 !== a) return e[a];
          }
          return e[0];
        },
        h = Object.create({}),
        g = function (e) {
          var t = d(e),
            a = p(t);
          return h[a] || !1;
        },
        v =
          "undefined" != typeof HTMLImageElement &&
          "loading" in HTMLImageElement.prototype,
        b = "undefined" != typeof window,
        y = b && window.IntersectionObserver,
        w = new WeakMap();
      function E(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.srcSet,
            n = e.srcSetWebp,
            r = e.media,
            o = e.sizes;
          return c.default.createElement(
            c.default.Fragment,
            { key: t },
            n &&
              c.default.createElement("source", {
                type: "image/webp",
                media: r,
                srcSet: n,
                sizes: o,
              }),
            a &&
              c.default.createElement("source", {
                media: r,
                srcSet: a,
                sizes: o,
              })
          );
        });
      }
      function O(e) {
        var t = [],
          a = [];
        return (
          e.forEach(function (e) {
            return (e.media ? t : a).push(e);
          }),
          [].concat(t, a)
        );
      }
      function x(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            n = e.tracedSVG;
          return c.default.createElement("source", {
            key: t,
            media: a,
            srcSet: n,
          });
        });
      }
      function j(e) {
        return e.map(function (e) {
          var t = e.src,
            a = e.media,
            n = e.base64;
          return c.default.createElement("source", {
            key: t,
            media: a,
            srcSet: n,
          });
        });
      }
      function R(e, t) {
        var a = e.srcSet,
          n = e.srcSetWebp,
          r = e.media,
          o = e.sizes;
        return (
          "<source " +
          (t ? "type='image/webp' " : "") +
          (r ? 'media="' + r + '" ' : "") +
          'srcset="' +
          (t ? n : a) +
          '" ' +
          (o ? 'sizes="' + o + '" ' : "") +
          "/>"
        );
      }
      var C = function (e, t) {
          var a =
            (void 0 === r &&
              "undefined" != typeof window &&
              window.IntersectionObserver &&
              (r = new window.IntersectionObserver(
                function (e) {
                  e.forEach(function (e) {
                    if (w.has(e.target)) {
                      var t = w.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (r.unobserve(e.target), w.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              )),
            r);
          return (
            a && (a.observe(e), w.set(e, t)),
            function () {
              a.unobserve(e), w.delete(e);
            }
          );
        },
        N = function (e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : "",
            n = e.srcSet ? 'srcset="' + e.srcSet + '" ' : "",
            r = e.title ? 'title="' + e.title + '" ' : "",
            o = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            i = e.width ? 'width="' + e.width + '" ' : "",
            l = e.height ? 'height="' + e.height + '" ' : "",
            s = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : "",
            c = e.loading ? 'loading="' + e.loading + '" ' : "",
            u = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return (
            "<picture>" +
            e.imageVariants
              .map(function (e) {
                return (e.srcSetWebp ? R(e, !0) : "") + R(e);
              })
              .join("") +
            "<img " +
            c +
            i +
            l +
            a +
            n +
            t +
            o +
            r +
            s +
            u +
            'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          );
        },
        L = c.default.forwardRef(function (e, t) {
          var a = e.src,
            n = e.imageVariants,
            r = e.generateSources,
            o = e.spreadProps,
            i = e.ariaHidden,
            l = c.default.createElement(
              S,
              (0, s.default)({ ref: t, src: a }, o, { ariaHidden: i })
            );
          return n.length > 1
            ? c.default.createElement("picture", null, r(n), l)
            : l;
        }),
        S = c.default.forwardRef(function (e, t) {
          var a = e.sizes,
            n = e.srcSet,
            r = e.src,
            o = e.style,
            i = e.onLoad,
            u = e.onError,
            d = e.loading,
            f = e.draggable,
            p = e.ariaHidden,
            m = (0, l.default)(e, [
              "sizes",
              "srcSet",
              "src",
              "style",
              "onLoad",
              "onError",
              "loading",
              "draggable",
              "ariaHidden",
            ]);
          return c.default.createElement(
            "img",
            (0, s.default)(
              { "aria-hidden": p, sizes: a, srcSet: n, src: r },
              m,
              {
                onLoad: i,
                onError: u,
                ref: t,
                loading: d,
                draggable: f,
                style: (0, s.default)(
                  {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  },
                  o
                ),
              }
            )
          );
        });
      S.propTypes = {
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      };
      var k = (function (e) {
        function t(t) {
          var a;
          ((a = e.call(this, t) || this).seenBefore = b && g(t)),
            (a.isCritical = "eager" === t.loading || t.critical),
            (a.addNoScript = !(a.isCritical && !t.fadeIn)),
            (a.useIOSupport = !v && y && !a.isCritical && !a.seenBefore);
          var n = a.isCritical || (b && (v || !a.useIOSupport));
          return (
            (a.state = {
              isVisible: n,
              imgLoaded: !1,
              imgCached: !1,
              fadeIn: !a.seenBefore && t.fadeIn,
              isHydrated: !1,
            }),
            (a.imageRef = c.default.createRef()),
            (a.placeholderRef = t.placeholderRef || c.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind((0, o.default)(a))),
            (a.handleRef = a.handleRef.bind((0, o.default)(a))),
            a
          );
        }
        (0, i.default)(t, e);
        var a = t.prototype;
        return (
          (a.componentDidMount = function () {
            if (
              (this.setState({ isHydrated: b }),
              this.state.isVisible &&
                "function" == typeof this.props.onStartLoad &&
                this.props.onStartLoad({ wasCached: g(this.props) }),
              this.isCritical)
            ) {
              var e = this.imageRef.current;
              e && e.complete && this.handleImageLoaded();
            }
          }),
          (a.componentWillUnmount = function () {
            this.cleanUpListeners && this.cleanUpListeners();
          }),
          (a.handleRef = function (e) {
            var t = this;
            this.useIOSupport &&
              e &&
              (this.cleanUpListeners = C(e, function () {
                var e = g(t.props);
                t.state.isVisible ||
                  "function" != typeof t.props.onStartLoad ||
                  t.props.onStartLoad({ wasCached: e }),
                  t.setState({ isVisible: !0 }, function () {
                    t.setState({
                      imgLoaded: e,
                      imgCached: !(
                        !t.imageRef.current || !t.imageRef.current.currentSrc
                      ),
                    });
                  });
              }));
          }),
          (a.handleImageLoaded = function () {
            var e, t, a;
            (e = this.props),
              (t = d(e)),
              (a = p(t)) && (h[a] = !0),
              this.setState({ imgLoaded: !0 }),
              this.props.onLoad && this.props.onLoad();
          }),
          (a.render = function () {
            var e = d(this.props),
              t = e.title,
              a = e.alt,
              n = e.className,
              r = e.style,
              o = void 0 === r ? {} : r,
              i = e.imgStyle,
              l = void 0 === i ? {} : i,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              p = e.placeholderClassName,
              h = e.fluid,
              g = e.fixed,
              v = e.backgroundColor,
              b = e.durationFadeIn,
              y = e.Tag,
              w = e.itemProp,
              O = e.loading,
              R = e.draggable,
              C = h || g;
            if (!C) return null;
            var k = !1 === this.state.fadeIn || this.state.imgLoaded,
              T = !0 === this.state.fadeIn && !this.state.imgCached,
              z = (0, s.default)(
                {
                  opacity: k ? 1 : 0,
                  transition: T ? "opacity " + b + "ms" : "none",
                },
                l
              ),
              P = "boolean" == typeof v ? "lightgray" : v,
              M = { transitionDelay: b + "ms" },
              U = (0, s.default)(
                { opacity: this.state.imgLoaded ? 0 : 1 },
                T && M,
                l,
                f
              ),
              D = {
                title: t,
                alt: this.state.isVisible ? "" : a,
                style: U,
                className: p,
                itemProp: w,
              },
              I = this.state.isHydrated ? m(C) : C[0];
            if (h)
              return c.default.createElement(
                y,
                {
                  className: (n || "") + " gatsby-image-wrapper",
                  style: (0, s.default)(
                    {
                      position: "relative",
                      overflow: "hidden",
                      maxWidth: I.maxWidth ? I.maxWidth + "px" : null,
                      maxHeight: I.maxHeight ? I.maxHeight + "px" : null,
                    },
                    o
                  ),
                  ref: this.handleRef,
                  key: "fluid-" + JSON.stringify(I.srcSet),
                },
                c.default.createElement(y, {
                  "aria-hidden": !0,
                  style: {
                    width: "100%",
                    paddingBottom: 100 / I.aspectRatio + "%",
                  },
                }),
                P &&
                  c.default.createElement(y, {
                    "aria-hidden": !0,
                    title: t,
                    style: (0, s.default)(
                      {
                        backgroundColor: P,
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        right: 0,
                        left: 0,
                      },
                      T && M
                    ),
                  }),
                I.base64 &&
                  c.default.createElement(L, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: I.base64,
                    spreadProps: D,
                    imageVariants: C,
                    generateSources: j,
                  }),
                I.tracedSVG &&
                  c.default.createElement(L, {
                    ariaHidden: !0,
                    ref: this.placeholderRef,
                    src: I.tracedSVG,
                    spreadProps: D,
                    imageVariants: C,
                    generateSources: x,
                  }),
                this.state.isVisible &&
                  c.default.createElement(
                    "picture",
                    null,
                    E(C),
                    c.default.createElement(S, {
                      alt: a,
                      title: t,
                      sizes: I.sizes,
                      src: I.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: I.srcSet,
                      style: z,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: w,
                      loading: O,
                      draggable: R,
                    })
                  ),
                this.addNoScript &&
                  c.default.createElement("noscript", {
                    dangerouslySetInnerHTML: {
                      __html: N(
                        (0, s.default)({ alt: a, title: t, loading: O }, I, {
                          imageVariants: C,
                        })
                      ),
                    },
                  })
              );
            if (g) {
              var V = (0, s.default)(
                {
                  position: "relative",
                  overflow: "hidden",
                  display: "inline-block",
                  width: I.width,
                  height: I.height,
                },
                o
              );
              return (
                "inherit" === o.display && delete V.display,
                c.default.createElement(
                  y,
                  {
                    className: (n || "") + " gatsby-image-wrapper",
                    style: V,
                    ref: this.handleRef,
                    key: "fixed-" + JSON.stringify(I.srcSet),
                  },
                  P &&
                    c.default.createElement(y, {
                      "aria-hidden": !0,
                      title: t,
                      style: (0, s.default)(
                        {
                          backgroundColor: P,
                          width: I.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: I.height,
                        },
                        T && M
                      ),
                    }),
                  I.base64 &&
                    c.default.createElement(L, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: I.base64,
                      spreadProps: D,
                      imageVariants: C,
                      generateSources: j,
                    }),
                  I.tracedSVG &&
                    c.default.createElement(L, {
                      ariaHidden: !0,
                      ref: this.placeholderRef,
                      src: I.tracedSVG,
                      spreadProps: D,
                      imageVariants: C,
                      generateSources: x,
                    }),
                  this.state.isVisible &&
                    c.default.createElement(
                      "picture",
                      null,
                      E(C),
                      c.default.createElement(S, {
                        alt: a,
                        title: t,
                        width: I.width,
                        height: I.height,
                        sizes: I.sizes,
                        src: I.src,
                        crossOrigin: this.props.crossOrigin,
                        srcSet: I.srcSet,
                        style: z,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                        itemProp: w,
                        loading: O,
                        draggable: R,
                      })
                    ),
                  this.addNoScript &&
                    c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                        __html: N(
                          (0, s.default)({ alt: a, title: t, loading: O }, I, {
                            imageVariants: C,
                          })
                        ),
                      },
                    })
                )
              );
            }
            return null;
          }),
          t
        );
      })(c.default.Component);
      k.defaultProps = {
        fadeIn: !0,
        durationFadeIn: 500,
        alt: "",
        Tag: "div",
        loading: "lazy",
      };
      var T = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
        }),
        z = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
          media: u.default.string,
          maxWidth: u.default.number,
          maxHeight: u.default.number,
        });
      function P(e) {
        return function (t, a, n) {
          var r;
          if (!t.fixed && !t.fluid)
            throw new Error(
              "The prop `fluid` or `fixed` is marked as required in `" +
                n +
                "`, but their values are both `undefined`."
            );
          u.default.checkPropTypes((((r = {})[a] = e), r), t, "prop", n);
        };
      }
      k.propTypes = {
        resolutions: T,
        sizes: z,
        fixed: P(u.default.oneOfType([T, u.default.arrayOf(T)])),
        fluid: P(u.default.oneOfType([z, u.default.arrayOf(z)])),
        fadeIn: u.default.bool,
        durationFadeIn: u.default.number,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        crossOrigin: u.default.oneOfType([u.default.string, u.default.bool]),
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        placeholderClassName: u.default.string,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        onStartLoad: u.default.func,
        Tag: u.default.string,
        itemProp: u.default.string,
        loading: u.default.oneOf(["auto", "lazy", "eager"]),
        draggable: u.default.bool,
      };
      var M = k;
      t.default = M;
    },
    "AK/e": function (e, t, a) {},
    AiCv: function (e, t, a) {},
    AkXV: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      });
      a("NKjI");
      var n = a("q1tI"),
        r = a.n(n);
      function o() {
        return r.a.createElement(
          "div",
          { className: "socialMediaContainer" },
          r.a.createElement(
            "a",
            { href: "https://github.com/holtzy", className: "socialShareIcon" },
            r.a.createElement(
              "svg",
              {
                className: "github",
                width: "21",
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fab",
                "data-icon": "github",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 496 512",
              },
              r.a.createElement("path", {
                fill: "currentColor",
                d:
                  "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
              })
            )
          ),
          r.a.createElement(
            "a",
            {
              href: "https://twitter.com/R_Graph_Gallery",
              className: "socialShareIcon",
            },
            r.a.createElement(
              "svg",
              {
                width: "15",
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fab",
                "data-icon": "twitter",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 512",
              },
              r.a.createElement("path", {
                fill: "currentColor",
                d:
                  "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
              })
            )
          ),
          r.a.createElement(
            "a",
            {
              href: "https://www.linkedin.com/in/yan-holtz-2477534a/",
              className: "socialShareIcon",
            },
            r.a.createElement(
              "svg",
              {
                width: "15",
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fab",
                "data-icon": "linkedin-in",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 448 512",
              },
              r.a.createElement("path", {
                fill: "currentColor",
                d:
                  "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
              })
            )
          ),
          r.a.createElement(
            "a",
            { href: "https://www.yan-holtz.com", className: "socialShareIcon" },
            r.a.createElement(
              "svg",
              {
                width: "20",
                "aria-hidden": "true",
                focusable: "false",
                "data-prefix": "fas",
                "data-icon": "home",
                role: "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 576 512",
              },
              r.a.createElement("path", {
                fill: "currentColor",
                d:
                  "M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z",
              })
            )
          )
        );
      }
    },
    "BO/t": function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          return function (t, a, n, r, o) {
            var i = n || "<<anonymous>>",
              l = o || a;
            if (null == t[a])
              return new Error(
                "The " +
                  r +
                  " `" +
                  l +
                  "` is required to make `" +
                  i +
                  "` accessible for users of assistive technologies such as screen readers."
              );
            for (
              var s = arguments.length, c = Array(s > 5 ? s - 5 : 0), u = 5;
              u < s;
              u++
            )
              c[u - 5] = arguments[u];
            return e.apply(void 0, [t, a, n, r, o].concat(c));
          };
        }),
        (e.exports = t.default);
    },
    H8Fx: function (e, t, a) {},
    IMjo: function (e, t, a) {},
    JI6e: function (e, t, a) {
      "use strict";
      var n = a("wx14"),
        r = a("zLVn"),
        o = a("TSYQ"),
        i = a.n(o),
        l = a("q1tI"),
        s = a.n(l),
        c = a("vUet"),
        u = ["xl", "lg", "md", "sm", "xs"],
        d = s.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.className,
            l = e.as,
            d = void 0 === l ? "div" : l,
            f = Object(r.a)(e, ["bsPrefix", "className", "as"]),
            p = Object(c.a)(a, "col"),
            m = [],
            h = [];
          return (
            u.forEach(function (e) {
              var t,
                a,
                n,
                r = f[e];
              if ((delete f[e], "object" == typeof r && null != r)) {
                var o = r.span;
                (t = void 0 === o || o), (a = r.offset), (n = r.order);
              } else t = r;
              var i = "xs" !== e ? "-" + e : "";
              t && m.push(!0 === t ? "" + p + i : "" + p + i + "-" + t),
                null != n && h.push("order" + i + "-" + n),
                null != a && h.push("offset" + i + "-" + a);
            }),
            m.length || m.push(p),
            s.a.createElement(
              d,
              Object(n.a)({}, f, {
                ref: t,
                className: i.a.apply(void 0, [o].concat(m, h)),
              })
            )
          );
        });
      (d.displayName = "Col"), (t.a = d);
    },
    K9S6: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function () {
          for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
          function n() {
            for (var e = arguments.length, a = Array(e), n = 0; n < e; n++)
              a[n] = arguments[n];
            var r = null;
            return (
              t.forEach(function (e) {
                if (null == r) {
                  var t = e.apply(void 0, a);
                  null != t && (r = t);
                }
              }),
              r
            );
          }
          return (0, o.default)(n);
        });
      var n,
        r = a("pvIh"),
        o = (n = r) && n.__esModule ? n : { default: n };
      e.exports = t.default;
    },
    NDdm: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      a("H8Fx");
      var n = a("q1tI"),
        r = a.n(n),
        o = a("Wbzz"),
        i = a("9eSz"),
        l = a.n(i);
      function s(e) {
        var t = e.chartType,
          a = Object(o.c)("2496446644").allFile.edges.find(function (e) {
            return e.node.name === t;
          });
        return a
          ? r.a.createElement(l.a, {
              alt: "todo",
              fluid: a.node.childImageSharp.fluid,
              className: "sectionLogoImg",
            })
          : null;
      }
    },
    NKjI: function (e, t, a) {},
    Qg85: function (e, t, a) {
      "use strict";
      t.a = function () {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return t
          .filter(function (e) {
            return null != e;
          })
          .reduce(function (e, t) {
            if ("function" != typeof t)
              throw new Error(
                "Invalid Argument Type, must only provide functions, undefined, or null."
              );
            return null === e
              ? t
              : function () {
                  for (
                    var a = arguments.length, n = new Array(a), r = 0;
                    r < a;
                    r++
                  )
                    n[r] = arguments[r];
                  e.apply(this, n), t.apply(this, n);
                };
          }, null);
      };
    },
    TSYQ: function (e, t, a) {
      var n;
      !(function () {
        "use strict";
        var a = {}.hasOwnProperty;
        function r() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var o = typeof n;
              if ("string" === o || "number" === o) e.push(n);
              else if (Array.isArray(n) && n.length) {
                var i = r.apply(null, n);
                i && e.push(i);
              } else if ("object" === o)
                for (var l in n) a.call(n, l) && n[l] && e.push(l);
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 ===
              (n = function () {
                return r;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    a4DA: function (e, t, a) {},
    ae5o: function (e, t, a) {},
    cWnB: function (e, t, a) {
      "use strict";
      var n = a("wx14"),
        r = a("zLVn"),
        o = a("TSYQ"),
        i = a.n(o),
        l = a("q1tI"),
        s = a.n(l),
        c = a("vUet"),
        u = a("dbZe"),
        d = s.a.forwardRef(function (e, t) {
          var a = e.bsPrefix,
            o = e.variant,
            l = e.size,
            d = e.active,
            f = e.className,
            p = e.block,
            m = e.type,
            h = e.as,
            g = Object(r.a)(e, [
              "bsPrefix",
              "variant",
              "size",
              "active",
              "className",
              "block",
              "type",
              "as",
            ]),
            v = Object(c.a)(a, "btn"),
            b = i()(
              f,
              v,
              d && "active",
              v + "-" + o,
              p && v + "-block",
              l && v + "-" + l
            );
          if (g.href)
            return s.a.createElement(
              u.a,
              Object(n.a)({}, g, {
                as: h,
                ref: t,
                className: i()(b, g.disabled && "disabled"),
              })
            );
          t && (g.ref = t), m ? (g.type = m) : h || (g.type = "button");
          var y = h || "button";
          return s.a.createElement(y, Object(n.a)({}, g, { className: b }));
        });
      (d.displayName = "Button"),
        (d.defaultProps = { variant: "primary", active: !1, disabled: !1 }),
        (t.a = d);
    },
    dbZe: function (e, t, a) {
      "use strict";
      var n = a("wx14"),
        r = a("zLVn"),
        o = a("q1tI"),
        i = a.n(o),
        l = a("Qg85");
      function s(e) {
        return !e || "#" === e.trim();
      }
      var c = i.a.forwardRef(function (e, t) {
        var a = e.as,
          o = void 0 === a ? "a" : a,
          c = e.disabled,
          u = e.onKeyDown,
          d = Object(r.a)(e, ["as", "disabled", "onKeyDown"]),
          f = function (e) {
            var t = d.href,
              a = d.onClick;
            (c || s(t)) && e.preventDefault(),
              c ? e.stopPropagation() : a && a(e);
          };
        return (
          s(d.href) &&
            ((d.role = d.role || "button"), (d.href = d.href || "#")),
          c && ((d.tabIndex = -1), (d["aria-disabled"] = !0)),
          i.a.createElement(
            o,
            Object(n.a)({ ref: t }, d, {
              onClick: f,
              onKeyDown: Object(l.a)(function (e) {
                " " === e.key && (e.preventDefault(), f(e));
              }, u),
            })
          )
        );
      });
      (c.displayName = "SafeAnchor"), (t.a = c);
    },
    gihY: function (e, t, a) {},
    jhdv: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = function (e) {
        return e.replace("https://python-graph-gallery.com", "");
      };
    },
    pJaR: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return p;
      });
      a("9d5C");
      var n = a("q1tI"),
        r = a.n(n),
        o = a("3Z9Z"),
        i = a("JI6e"),
        l = (a("AK/e"), a("Wbzz")),
        s = a("NDdm");
      function c(e) {
        var t = e.chartType,
          a = e.caption,
          n = e.link;
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            "div",
            { className: "sectionLogoContainer" },
            r.a.createElement(
              l.a,
              { to: n },
              r.a.createElement(s.a, { chartType: t }),
              r.a.createElement(
                "div",
                { className: "sectionLogoOverlay" },
                r.a.createElement(
                  "div",
                  { className: "sectionLogoOverlayText" },
                  "+"
                )
              )
            )
          ),
          r.a.createElement(
            "p",
            { className: "distributionSection sectionLogoCaption" },
            a
          )
        );
      }
      var u = a("qXiB"),
        d = a("jhdv"),
        f = {
          distribution: "Distribution",
          correlation: "Correlation",
          ranking: "Ranking",
          partOfAWhole: "Part Of A Whole",
          evolution: "Evolution",
          map: "Map",
          flow: "Flow",
          general: "General Knowledge",
        };
      function p(e) {
        var t = e.chartFamily,
          a =
            (e.hasGreyBackground,
            u.a
              .filter(function (e) {
                return e.family === t;
              })
              .map(function (e) {
                var t = Object(d.a)(e.pythonURL);
                return r.a.createElement(
                  i.a,
                  { xs: 4, md: 2 },
                  r.a.createElement(c, {
                    link: t,
                    chartType: e.logo,
                    caption: e.label,
                  })
                );
              }));
        return r.a.createElement(
          "div",
          null,
          r.a.createElement(
            "h2",
            { className: "sectionTitle " + t },
            null == f ? void 0 : f[t]
          ),
          r.a.createElement(o.a, null, a)
        );
      }
    },
    pvIh: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          function t(t, a, n, r, o, i) {
            var l = r || "<<anonymous>>",
              s = i || n;
            if (null == a[n])
              return t
                ? new Error(
                    "Required " +
                      o +
                      " `" +
                      s +
                      "` was not specified in `" +
                      l +
                      "`."
                  )
                : null;
            for (
              var c = arguments.length, u = Array(c > 6 ? c - 6 : 0), d = 6;
              d < c;
              d++
            )
              u[d - 6] = arguments[d];
            return e.apply(void 0, [a, n, l, o, s].concat(u));
          }
          var a = t.bind(null, !1);
          return (a.isRequired = t.bind(null, !0)), a;
        }),
        (e.exports = t.default);
    },
    q4sD: function (e, t, a) {},
    qXiB: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return n;
      });
      var n = [
        {
          id: "violin",
          family: "distribution",
          logo: "Violin150",
          dataToVizURL: "https://www.data-to-viz.com/graph/violin.html",
          pythonURL: "https://python-graph-gallery.com/violin-plot/",
          label: "Violin",
        },
        {
          id: "density",
          family: "distribution",
          logo: "Density150",
          dataToVizURL: "https://www.data-to-viz.com/graph/density.html",
          pythonURL: "https://python-graph-gallery.com/density-plot/",
          label: "Density",
        },
        {
          id: "histogram",
          family: "distribution",
          logo: "Histogram150",
          dataToVizURL: "https://www.data-to-viz.com/graph/histogram.html",
          pythonURL: "https://python-graph-gallery.com/histogram/",
          label: "Histogram",
        },
        {
          id: "boxplot",
          family: "distribution",
          logo: "Box1150",
          dataToVizURL: "https://www.data-to-viz.com/caveat/boxplot.html",
          pythonURL: "https://python-graph-gallery.com/boxplot/",
          label: "Boxplot",
        },
        {
          id: "ridgeline",
          family: "distribution",
          logo: "Joyplot150",
          dataToVizURL: "https://www.data-to-viz.com/graph/ridgeline.html",
          pythonURL: "https://python-graph-gallery.com/ridgeline/",
          label: "Ridgeline",
        },
        {
          id: "scatter",
          family: "correlation",
          logo: "ScatterPlot150",
          dataToVizURL: "https://www.data-to-viz.com/graph/scatter.html",
          pythonURL: "https://python-graph-gallery.com/scatter-plot/",
          label: "Scatterplot",
        },
        {
          id: "heatmap",
          family: "correlation",
          logo: "Heatmap150",
          dataToVizURL: "https://www.data-to-viz.com/graph/heatmap.html",
          pythonURL: "https://python-graph-gallery.com/heatmap/",
          label: "Heatmap",
        },
        {
          id: "correlogram",
          family: "correlation",
          logo: "Correlogram150",
          dataToVizURL: "https://www.data-to-viz.com/graph/correlogram.html",
          pythonURL: "https://python-graph-gallery.com/correlogram/",
          label: "Correlogram",
        },
        {
          id: "bubble",
          family: "correlation",
          logo: "BubblePlot150",
          dataToVizURL: "https://www.data-to-viz.com/graph/bubble.html",
          pythonURL: "https://python-graph-gallery.com/bubble-plot/",
          label: "Bubble",
        },
        {
          id: "connectedScatter",
          family: "correlation",
          logo: "ScatterConnected150",
          dataToVizURL:
            "https://www.data-to-viz.com/graph/connectedscatter.html",
          pythonURL: "https://python-graph-gallery.com/connected-scatter-plot/",
          label: "Connected Scatter",
        },
        {
          id: "density2d",
          family: "correlation",
          logo: "2dDensity150",
          dataToVizURL: "https://www.data-to-viz.com/graph/density2d.html",
          pythonURL: "https://python-graph-gallery.com/2d-density-plot/",
          label: "2D Density",
        },
        {
          id: "barplot",
          family: "ranking",
          logo: "Bar150",
          dataToVizURL: "https://www.data-to-viz.com/graph/barplot.html",
          pythonURL: "https://python-graph-gallery.com/barplot/",
          label: "Barplot",
        },
        {
          id: "radar",
          family: "ranking",
          logo: "Spider150",
          dataToVizURL: "https://www.data-to-viz.com/caveat/spider.html",
          pythonURL: "https://python-graph-gallery.com/radar-chart/",
          label: "Spider / Radar",
        },
        {
          id: "wordcloud",
          family: "ranking",
          logo: "Wordcloud150",
          dataToVizURL: "https://www.data-to-viz.com/graph/wordcloud.html",
          pythonURL: "https://python-graph-gallery.com/wordcloud/",
          label: "Wordcloud",
        },
        {
          id: "parallel",
          family: "ranking",
          logo: "Parallel1150",
          dataToVizURL: "https://www.data-to-viz.com/graph/parallel.html",
          pythonURL: "https://python-graph-gallery.com/parallel-plot/",
          label: "Parallel",
        },
        {
          id: "lollipop",
          family: "ranking",
          logo: "Lollipop150",
          dataToVizURL: "https://www.data-to-viz.com/graph/lollipop.html",
          pythonURL: "https://python-graph-gallery.com/lollipop-plot/",
          label: "Lollipop",
        },
        {
          id: "circularBarplot",
          family: "ranking",
          logo: "CircularBarplot150",
          dataToVizURL:
            "https://www.data-to-viz.com/graph/circularbarplot.html",
          pythonURL: "https://python-graph-gallery.com/circular-barplot/",
          label: "Circular Barplot",
        },
        {
          id: "treemap",
          family: "partOfAWhole",
          logo: "Tree150",
          dataToVizURL: "https://www.data-to-viz.com/graph/treemap.html",
          pythonURL: "https://python-graph-gallery.com/treemap/",
          label: "Treemap",
        },
        {
          id: "venn",
          family: "partOfAWhole",
          logo: "Venn150",
          dataToVizURL: "https://www.data-to-viz.com/graph/venn.html",
          pythonURL: "https://python-graph-gallery.com/venn-diagram/",
          label: "Venn Diagram",
        },
        {
          id: "stackedBar",
          family: "partOfAWhole",
          logo: "Stacked150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/stacked-barplot/",
          label: "Stacked & Grouped",
        },
        {
          id: "donut",
          family: "partOfAWhole",
          logo: "Doughnut150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/donut-plot/",
          label: "Donut",
        },
        {
          id: "pie",
          family: "partOfAWhole",
          logo: "Pie150",
          dataToVizURL: "https://www.data-to-viz.com/caveat/pie.html",
          pythonURL: "https://python-graph-gallery.com/pie-plot/",
          label: "Pie Chart",
        },
        {
          id: "dendrogram",
          family: "partOfAWhole",
          logo: "Dendrogram150",
          dataToVizURL: "https://www.data-to-viz.com/graph/dendrogram.html",
          pythonURL: "https://python-graph-gallery.com/dendrogram/",
          label: "Dendrogram",
        },
        {
          id: "circularPacking",
          family: "partOfAWhole",
          logo: "CircularPacking150",
          dataToVizURL:
            "https://www.data-to-viz.com/graph/circularpacking.html",
          pythonURL: "https://python-graph-gallery.com/circular-packing/",
          label: "Circular Packing",
        },
        {
          id: "line",
          family: "evolution",
          logo: "Line150",
          dataToVizURL: "https://www.data-to-viz.com/graph/line.html",
          pythonURL: "https://python-graph-gallery.com/line-chart/",
          label: "Line chart",
        },
        {
          id: "area",
          family: "evolution",
          logo: "Area150",
          dataToVizURL: "https://www.data-to-viz.com/graph/area.html",
          pythonURL: "https://python-graph-gallery.com/area-plot/",
          label: "Area chart",
        },
        {
          id: "stackedArea",
          family: "evolution",
          logo: "StackedArea150",
          dataToVizURL: "https://www.data-to-viz.com/graph/stackedarea.html",
          pythonURL: "https://python-graph-gallery.com/stacked-area-plot/",
          label: "Stacked Area",
        },
        {
          id: "stream",
          family: "evolution",
          logo: "Stream150",
          dataToVizURL: "https://www.data-to-viz.com/graph/streamgraph.html",
          pythonURL: "https://python-graph-gallery.com/streamchart/",
          label: "Streamgraph",
        },
        {
          id: "map",
          family: "map",
          logo: "Map150",
          dataToVizURL: "https://www.data-to-viz.com/graph/map.html",
          pythonURL: "https://python-graph-gallery.com/map/",
          label: "Map",
        },
        {
          id: "choropleth",
          family: "map",
          logo: "Choropleth150",
          dataToVizURL: "https://www.data-to-viz.com/graph/choropleth.html",
          pythonURL: "https://python-graph-gallery.com/choropleth-map/",
          label: "Choropleth",
        },
        {
          id: "hexbin",
          family: "map",
          logo: "MapHexbin150",
          dataToVizURL: "https://www.data-to-viz.com/graph/hexbinmap.html",
          pythonURL: "https://python-graph-gallery.com/boxplot/hexbin-map/",
          label: "Hexbin",
        },
        {
          id: "cartogram",
          family: "map",
          logo: "Cartogram150",
          dataToVizURL: "https://www.data-to-viz.com/graph/cartogram.html",
          pythonURL: "https://python-graph-gallery.com/cartogram/",
          label: "Cartogram",
        },
        {
          id: "connection",
          family: "map",
          logo: "ConnectedMap150",
          dataToVizURL: "https://www.data-to-viz.com/story/MapConnection.html",
          pythonURL: "https://python-graph-gallery.com/connection-map/",
          label: "Connection",
        },
        {
          id: "bubbleMap",
          family: "map",
          logo: "BubbleMap150",
          dataToVizURL: "https://www.data-to-viz.com/graph/bubblemap.html",
          pythonURL: "https://python-graph-gallery.com/bubble-map/",
          label: "Bubble",
        },
        {
          id: "chordDiagram",
          family: "flow",
          logo: "Chord150",
          dataToVizURL: "https://www.data-to-viz.com/graph/chord.html",
          pythonURL: "https://python-graph-gallery.com/chord-diagram/",
          label: "Chord Diagram",
        },
        {
          id: "network",
          family: "flow",
          logo: "Network150",
          dataToVizURL: "https://www.data-to-viz.com/graph/network.html",
          pythonURL: "https://python-graph-gallery.com/network-chart/",
          label: "Network",
        },
        {
          id: "sankey",
          family: "flow",
          logo: "Sankey150",
          dataToVizURL: "https://www.data-to-viz.com/graph/sankey.html",
          pythonURL: "https://python-graph-gallery.com/sankey-diagram/",
          label: "Sankey",
        },
        {
          id: "arc",
          family: "flow",
          logo: "Arc150",
          dataToVizURL: "https://www.data-to-viz.com/graph/arc.html",
          pythonURL: "https://python-graph-gallery.com/arc-diagram/",
          label: "Arc Diagram",
        },
        {
          id: "edgeBundling",
          family: "flow",
          logo: "Bundle150",
          dataToVizURL: "https://www.data-to-viz.com/graph/edge_bundling.html",
          pythonURL:
            "https://python-graph-gallery.com/hierarchical-edge-bundling/",
          label: "Edge Bundling",
        },
        {
          id: "colors",
          family: "general",
          logo: "Colours150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/python-colors/",
          label: "Colors",
        },
        {
          id: "animation",
          family: "general",
          logo: "anim150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/animation/",
          label: "Interactivity",
        },
        {
          id: "cheatSheets",
          family: "general",
          logo: "Cheat150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/cheat-sheets/",
          label: "Cheat sheets",
        },
        {
          id: "caveats",
          family: "general",
          logo: "Bad150",
          dataToVizURL: "",
          pythonURL: "https://www.data-to-viz.com/caveats.html",
          label: "Caveats",
        },
        {
          id: "3d",
          family: "general",
          logo: "3d150",
          dataToVizURL: "",
          pythonURL: "https://python-graph-gallery.com/3d/",
          label: "3D",
        },
      ];
    },
    vUet: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      a("wx14");
      var n = a("q1tI"),
        r = a.n(n),
        o = r.a.createContext({});
      o.Consumer, o.Provider;
      function i(e, t) {
        var a = Object(n.useContext)(o);
        return e || a[t] || t;
      }
    },
    wx14: function (e, t, a) {
      "use strict";
      function n() {
        return (n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var n in a)
                Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      a.d(t, "a", function () {
        return n;
      });
    },
    "x/PU": function (e, t, a) {},
    zLVn: function (e, t, a) {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
        return r;
      }
      a.d(t, "a", function () {
        return n;
      });
    },
  },
]);
//# sourceMappingURL=f5923d530a820c9d49581cd63271596332f35e64-94b6b319f8ac3777c9ad.js.map
