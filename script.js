(self.webpackChunk = self.webpackChunk || []).push([
  ["901"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new x.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function i(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function a() {}
        function r(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var i = n;
          return (
            Q.test(e) || !q.test(e)
              ? (i = parseInt(e, 10))
              : q.test(e) && (i = 1e3 * parseFloat(e)),
            0 > i && (i = 0),
            i == i ? i : n
          );
        }
        function o(e) {
          j.debug && window && window.console.warn(e);
        }
        var u,
          s,
          c,
          l = (function (e, t, n) {
            function i(e) {
              return "object" == typeof e;
            }
            function a(e) {
              return "function" == typeof e;
            }
            function r() {}
            return function o(u, s) {
              function c() {
                var e = new l();
                return a(e.init) && e.init.apply(e, arguments), e;
              }
              function l() {}
              s === n && ((s = u), (u = Object)), (c.Bare = l);
              var d,
                f = (r[e] = u[e]),
                p = (l[e] = c[e] = new r());
              return (
                (p.constructor = c),
                (c.mixin = function (t) {
                  return (l[e] = c[e] = o(c, t)[e]), c;
                }),
                (c.open = function (e) {
                  if (
                    ((d = {}),
                    a(e) ? (d = e.call(c, p, f, c, u)) : i(e) && (d = e),
                    i(d))
                  )
                    for (var n in d) t.call(d, n) && (p[n] = d[n]);
                  return a(p.init) || (p.init = u), c;
                }),
                c.open(s)
              );
            };
          })("prototype", {}.hasOwnProperty),
          d = {
            ease: [
              "ease",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (-2.75 * r * a + 11 * a * a + -15.5 * r + 8 * a + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (-1 * r * a + 3 * a * a + -3 * r + 2 * a);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return (
                  t +
                  n *
                    (0.3 * r * a + -1.6 * a * a + 2.2 * r + -1.8 * a + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, i) {
                var a = (e /= i) * e,
                  r = a * e;
                return t + n * (2 * r * a + -5 * a * a + 2 * r + 2 * a);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, i) {
                return (n * e) / i + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, i) {
                return n * (e /= i) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, i) {
                return -n * (e /= i) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, i) {
                return -n * ((e = e / i - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, i) {
                return n * (e /= i) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, i) {
                return n * ((e = e / i - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, i) {
                return -n * Math.cos((e / i) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, i) {
                return n * Math.sin((e / i) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, i) {
                return (-n / 2) * (Math.cos((Math.PI * e) / i) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, i) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / i - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, i) {
                return e === i
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / i) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, i) {
                return 0 === e
                  ? t
                  : e === i
                  ? t + n
                  : (e /= i / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, i) {
                return -n * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, i) {
                return n * Math.sqrt(1 - (e = e / i - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, i) {
                return (e /= i / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * (e /= i) * e * ((a + 1) * e - a) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  n * ((e = e / i - 1) * e * ((a + 1) * e + a) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, i, a) {
                return (
                  void 0 === a && (a = 1.70158),
                  (e /= i / 2) < 1
                    ? (n / 2) * e * e * (((a *= 1.525) + 1) * e - a) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          g = /[\-\.0-9]/g,
          m = /[A-Z]/,
          h = "number",
          y = /^(rgb|#)/,
          I = /(em|cm|mm|in|pt|pc|px)$/,
          T = /(em|cm|mm|in|pt|pc|px|%)$/,
          b = /(deg|rad|turn)$/,
          v = "unitless",
          O = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          A = document.createElement("a"),
          R = ["Webkit", "Moz", "O", "ms"],
          w = ["-webkit-", "-moz-", "-o-", "-ms-"],
          N = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              i = "",
              a = e.split("-");
            for (t = 0; t < a.length; t++)
              i += a[t].charAt(0).toUpperCase() + a[t].slice(1);
            for (t = 0; t < R.length; t++)
              if ((n = R[t] + i) in A.style) return { dom: n, css: w[t] + e };
          },
          S = (t.support = {
            bind: Function.prototype.bind,
            transform: N("transform"),
            transition: N("transition"),
            backface: N("backface-visibility"),
            timing: N("transition-timing-function"),
          });
        if (S.transition) {
          var L = S.timing.dom;
          if (((A.style[L] = d["ease-in-back"][0]), !A.style[L]))
            for (var C in f) d[C][0] = f[C];
        }
        var P = (t.frame =
            (u =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && S.bind
              ? u.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          M = (t.now =
            (c =
              (s = p.performance) &&
              (s.now || s.webkitNow || s.msNow || s.mozNow)) && S.bind
              ? c.bind(s)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          F = l(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                    var a = e[t];
                    a && i.push(a);
                  }
                  return i;
                })(("" + e).split(" ")),
                i = n[0];
              t = t || {};
              var a = H[i];
              if (!a) return o("Unsupported property: " + i);
              if (!t.weak || !this.props[i]) {
                var r = a[0],
                  u = this.props[i];
                return (
                  u || (u = this.props[i] = new r.Bare()),
                  u.init(this.$el, n, a, t),
                  u
                );
              }
            }
            function i(e, t, i) {
              if (e) {
                var o = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == o && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: a,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == o && t) {
                  switch (e) {
                    case "hide":
                      s.call(this);
                      break;
                    case "stop":
                      u.call(this);
                      break;
                    case "redraw":
                      c.call(this);
                      break;
                    default:
                      n.call(this, e, i && i[1]);
                  }
                  return a.call(this);
                }
                if ("function" == o) return void e.call(this, this);
                if ("object" == o) {
                  var f = 0;
                  d.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = r(e.wait, 0));
                    }
                  ),
                    l.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = a));
                  var p = this,
                    E = !1,
                    g = {};
                  P(function () {
                    d.call(p, e, function (e) {
                      e.active && ((E = !0), (g[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(g);
                  });
                }
              }
            }
            function a() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                i.call(this, e.options, !0, e.args);
              }
            }
            function u(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                d.call(this, t, f),
                l.call(this);
            }
            function s() {
              u.call(this), (this.el.style.display = "none");
            }
            function c() {
              this.el.offsetHeight;
            }
            function l() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[S.transition.dom] = n));
            }
            function d(e, t, i) {
              var a,
                r,
                o,
                u,
                s = t !== f,
                c = {};
              for (a in e)
                (o = e[a]),
                  a in $
                    ? (c.transform || (c.transform = {}), (c.transform[a] = o))
                    : (m.test(a) &&
                        (a = a.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      a in H ? (c[a] = o) : (u || (u = {}), (u[a] = o)));
              for (a in c) {
                if (((o = c[a]), !(r = this.props[a]))) {
                  if (!s) continue;
                  r = n.call(this, a);
                }
                t.call(this, r, o);
              }
              i && u && i.call(this, u);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function g(e) {
              this.$el.css(e);
            }
            function h(e, n) {
              t[e] = function () {
                return this.children
                  ? y.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function y(e, t) {
              var n,
                i = this.children.length;
              for (n = 0; i > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = z(this.el, "transition");
                n && !O.test(n) && (this.upstream = n);
              }
              S.backface &&
                j.hideBackface &&
                W(this.el, S.backface.css, "hidden");
            }),
              h("add", n),
              h("start", i),
              h("wait", function (e) {
                (e = r(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: a,
                      })),
                      (this.active = !0));
              }),
              h("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = a))
                  : o(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              h("next", a),
              h("stop", u),
              h("set", function (e) {
                u.call(this, e), d.call(this, e, p, g);
              }),
              h("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              h("hide", s),
              h("redraw", c),
              h("destroy", function () {
                u.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          x = l(F, function (t) {
            function n(t, n) {
              var i = e.data(t, E) || e.data(t, E, new F.Bare());
              return i.el || i.init(t), n ? i.start(n) : i;
            }
            t.init = function (t, i) {
              var a = e(t);
              if (!a.length) return this;
              if (1 === a.length) return n(a[0], i);
              var r = [];
              return (
                a.each(function (e, t) {
                  r.push(n(t, i));
                }),
                (this.children = r),
                this
              );
            };
          }),
          k = l(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, i) {
              (this.$el = e), (this.el = e[0]);
              var a,
                o,
                u,
                s = t[0];
              n[2] && (s = n[2]),
                Y[s] && (s = Y[s]),
                (this.name = s),
                (this.type = n[1]),
                (this.duration = r(t[1], this.duration, 500)),
                (this.ease =
                  ((a = t[2]),
                  (o = this.ease),
                  (u = "ease"),
                  void 0 !== o && (u = o),
                  a in d ? a : u)),
                (this.delay = r(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = i.unit || this.unit || j.defaultUnit),
                (this.angle = i.angle || this.angle || j.defaultAngle),
                j.fallback || i.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + d[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new V({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return z(this.el, this.name);
              }),
              (e.update = function (e) {
                W(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  W(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  a,
                  r = "number" == typeof e,
                  u = "string" == typeof e;
                switch (t) {
                  case h:
                    if (r) return e;
                    if (u && "" === e.replace(g, "")) return +e;
                    a = "number(unitless)";
                    break;
                  case y:
                    if (u) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? i(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    a = "hex or rgb string";
                    break;
                  case I:
                    if (r) return e + this.unit;
                    if (u && t.test(e)) return e;
                    a = "number(px) or string(unit)";
                    break;
                  case T:
                    if (r) return e + this.unit;
                    if (u && t.test(e)) return e;
                    a = "number(px) or string(unit or %)";
                    break;
                  case b:
                    if (r) return e + this.angle;
                    if (u && t.test(e)) return e;
                    a = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (r || (u && T.test(e))) return e;
                    a = "number(unitless) or string(unit or %)";
                }
                return (
                  o(
                    "Type warning: Expected: [" +
                      a +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          G = l(k, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), y));
            };
          }),
          D = l(k, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          U = l(k, function (e, t) {
            function n(e, t) {
              var n, i, a, r, o;
              for (n in e)
                (a = (r = $[n])[0]),
                  (i = r[1] || n),
                  (o = this.convert(e[n], a)),
                  t.call(this, i, o, a);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  $.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    W(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  W(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  i = {};
                for (n in this.current) i[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(i));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                W(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  i = {};
                return (
                  n.call(this, e, function (e, n, a) {
                    (i[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, a)));
                  }),
                  i
                );
              });
          }),
          V = l(function (t) {
            function r() {
              var e,
                t,
                n,
                i = s.length;
              if (i)
                for (P(r), t = M(), e = i; e--; ) (n = s[e]) && n.render(t);
            }
            var u = { ease: d.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || u.ease;
              d[t] && (t = d[t][1]),
                "function" != typeof t && (t = u.ease),
                (this.ease = t),
                (this.update = e.update || a),
                (this.complete = e.complete || a),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                i = e.to;
              void 0 === n && (n = u.from),
                void 0 === i && (i = u.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof i
                  ? ((this.begin = n), (this.change = i - n))
                  : this.format(i, n),
                (this.value = this.begin + this.unit),
                (this.start = M()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = M()),
                  (this.active = !0),
                  1 === s.push(this) && P(r));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, s)) >= 0 &&
                    ((t = s.slice(n + 1)),
                    (s.length = n),
                    t.length && (s = s.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var a,
                    r,
                    o = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((a = this.startRGB),
                        (r = this.endRGB),
                        i(
                          a[0] + o * (r[0] - a[0]),
                          a[1] + o * (r[1] - a[1]),
                          a[2] + o * (r[2] - a[2])
                        ))
                      : Math.round((this.begin + o * this.change) * c) / c),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var i = t.replace(g, "");
                  i !== e.replace(g, "") &&
                    o("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = i);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = a);
              });
            var s = [],
              c = 1e3;
          }),
          B = l(V, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || a),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = l(V, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new V({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  i = this.tweens.length,
                  a = !1;
                for (t = i; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (a = !0));
                return a
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !S.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!S.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new V(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var W = e.style,
          z = e.css,
          Y = { transform: S.transform && S.transform.css },
          H = {
            color: [G, y],
            background: [G, y, "background-color"],
            "outline-color": [G, y],
            "border-color": [G, y],
            "border-top-color": [G, y],
            "border-right-color": [G, y],
            "border-bottom-color": [G, y],
            "border-left-color": [G, y],
            "border-width": [k, I],
            "border-top-width": [k, I],
            "border-right-width": [k, I],
            "border-bottom-width": [k, I],
            "border-left-width": [k, I],
            "border-spacing": [k, I],
            "letter-spacing": [k, I],
            margin: [k, I],
            "margin-top": [k, I],
            "margin-right": [k, I],
            "margin-bottom": [k, I],
            "margin-left": [k, I],
            padding: [k, I],
            "padding-top": [k, I],
            "padding-right": [k, I],
            "padding-bottom": [k, I],
            "padding-left": [k, I],
            "outline-width": [k, I],
            opacity: [k, h],
            top: [k, T],
            right: [k, T],
            bottom: [k, T],
            left: [k, T],
            "font-size": [k, T],
            "text-indent": [k, T],
            "word-spacing": [k, T],
            width: [k, T],
            "min-width": [k, T],
            "max-width": [k, T],
            height: [k, T],
            "min-height": [k, T],
            "max-height": [k, T],
            "line-height": [k, v],
            "scroll-top": [D, h, "scrollTop"],
            "scroll-left": [D, h, "scrollLeft"],
          },
          $ = {};
        S.transform &&
          ((H.transform = [U]),
          ($ = {
            x: [T, "translateX"],
            y: [T, "translateY"],
            rotate: [b],
            rotateX: [b],
            rotateY: [b],
            scale: [h],
            scaleX: [h],
            scaleY: [h],
            skew: [b],
            skewX: [b],
            skewY: [b],
          })),
          S.transform &&
            S.backface &&
            (($.z = [T, "translateZ"]),
            ($.rotateZ = [b]),
            ($.scaleZ = [h]),
            ($.perspective = [I]));
        var Q = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var i,
        a,
        r,
        o,
        u,
        s,
        c,
        l,
        d,
        f,
        p,
        E,
        g,
        m,
        h,
        y,
        I,
        T,
        b,
        v,
        O = window.$,
        _ = n(5487) && O.tram;
      ((i = {}).VERSION = "1.6.0-Webflow"),
        (a = {}),
        (r = Array.prototype),
        (o = Object.prototype),
        (u = Function.prototype),
        r.push,
        (s = r.slice),
        r.concat,
        o.toString,
        (c = o.hasOwnProperty),
        (l = r.forEach),
        (d = r.map),
        r.reduce,
        r.reduceRight,
        (f = r.filter),
        r.every,
        (p = r.some),
        (E = r.indexOf),
        r.lastIndexOf,
        (g = Object.keys),
        u.bind,
        (m =
          i.each =
          i.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (l && e.forEach === l) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var r = 0, o = e.length; r < o; r++)
                  if (t.call(n, e[r], r, e) === a) return;
              } else
                for (var u = i.keys(e), r = 0, o = u.length; r < o; r++)
                  if (t.call(n, e[u[r]], u[r], e) === a) return;
              return e;
            }),
        (i.map = i.collect =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : d && e.map === d
              ? e.map(t, n)
              : (m(e, function (e, a, r) {
                  i.push(t.call(n, e, a, r));
                }),
                i);
          }),
        (i.find = i.detect =
          function (e, t, n) {
            var i;
            return (
              h(e, function (e, a, r) {
                if (t.call(n, e, a, r)) return (i = e), !0;
              }),
              i
            );
          }),
        (i.filter = i.select =
          function (e, t, n) {
            var i = [];
            return null == e
              ? i
              : f && e.filter === f
              ? e.filter(t, n)
              : (m(e, function (e, a, r) {
                  t.call(n, e, a, r) && i.push(e);
                }),
                i);
          }),
        (h =
          i.some =
          i.any =
            function (e, t, n) {
              t || (t = i.identity);
              var r = !1;
              return null == e
                ? r
                : p && e.some === p
                ? e.some(t, n)
                : (m(e, function (e, i, o) {
                    if (r || (r = t.call(n, e, i, o))) return a;
                  }),
                  !!r);
            }),
        (i.contains = i.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : h(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (i.delay = function (e, t) {
          var n = s.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (i.defer = function (e) {
          return i.delay.apply(i, [e, 1].concat(s.call(arguments, 1)));
        }),
        (i.throttle = function (e) {
          var t, n, i;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (i = this),
              _.frame(function () {
                (t = !1), e.apply(i, n);
              }));
          };
        }),
        (i.debounce = function (e, t, n) {
          var a,
            r,
            o,
            u,
            s,
            c = function () {
              var l = i.now() - u;
              l < t
                ? (a = setTimeout(c, t - l))
                : ((a = null), n || ((s = e.apply(o, r)), (o = r = null)));
            };
          return function () {
            (o = this), (r = arguments), (u = i.now());
            var l = n && !a;
            return (
              a || (a = setTimeout(c, t)),
              l && ((s = e.apply(o, r)), (o = r = null)),
              s
            );
          };
        }),
        (i.defaults = function (e) {
          if (!i.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var a = arguments[t];
            for (var r in a) void 0 === e[r] && (e[r] = a[r]);
          }
          return e;
        }),
        (i.keys = function (e) {
          if (!i.isObject(e)) return [];
          if (g) return g(e);
          var t = [];
          for (var n in e) i.has(e, n) && t.push(n);
          return t;
        }),
        (i.has = function (e, t) {
          return c.call(e, t);
        }),
        (i.isObject = function (e) {
          return e === Object(e);
        }),
        (i.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (i.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (y = /(.)^/),
        (I = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (T = /\\|'|\r|\n|\u2028|\u2029/g),
        (b = function (e) {
          return "\\" + I[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (i.template = function (e, t, n) {
          !t && n && (t = n);
          var a,
            r = RegExp(
              [
                ((t = i.defaults({}, t, i.templateSettings)).escape || y)
                  .source,
                (t.interpolate || y).source,
                (t.evaluate || y).source,
              ].join("|") + "|$",
              "g"
            ),
            o = 0,
            u = "__p+='";
          e.replace(r, function (t, n, i, a, r) {
            return (
              (u += e.slice(o, r).replace(T, b)),
              (o = r + t.length),
              n
                ? (u += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : i
                ? (u += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                : a && (u += "';\n" + a + "\n__p+='"),
              t
            );
          }),
            (u += "';\n");
          var s = t.variable;
          if (s) {
            if (!v.test(s))
              throw Error("variable is not a bare identifier: " + s);
          } else (u = "with(obj||{}){\n" + u + "}\n"), (s = "obj");
          u =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            u +
            "return __p;\n";
          try {
            a = Function(t.variable || "obj", "_", u);
          } catch (e) {
            throw ((e.source = u), e);
          }
          var c = function (e) {
            return a.call(this, e, i);
          };
          return (c.source = "function(" + s + "){\n" + u + "}"), c;
        }),
        (e.exports = i);
    },
    9461: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            a = document,
            r = e("html"),
            o = e("body"),
            u = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            c =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function l() {
            var n =
              a.fullScreen ||
              a.mozFullScreen ||
              a.webkitIsFullScreen ||
              a.msFullscreenElement ||
              !!a.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function d() {
            var e = o.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              a = i.env("editor");
            if (n) {
              a && e.remove();
              return;
            }
            e.length && e.remove(), a || o.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                i,
                o,
                f = r.attr("data-wf-status"),
                p = r.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && u.hostname !== p && (f = !0),
                f &&
                  !s &&
                  ((t =
                    t ||
                    ((n = e().attr(
                      "href",
                      "https://webflow.com?utm_campaign=brandjs"
                    )),
                    (i = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
                      )
                      .attr("alt", "")
                      .css({ marginRight: "4px", width: "26px" })),
                    (o = e("<img>")
                      .attr(
                        "src",
                        "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
                      )
                      .attr("alt", "Made in Webflow")),
                    n.append(i, o),
                    n[0])),
                  d(),
                  setTimeout(d, 500),
                  e(a).off(c, l).on(c, l));
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (i.env("test") || i.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var a,
            r = e(window),
            o = e(document.documentElement),
            u = document.location,
            s = "hashchange",
            c =
              n.load ||
              function () {
                var t, n, i;
                (a = !0),
                  (window.WebflowEditor = !0),
                  r.off(s, d),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: o.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var i, a, r;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (a =
                              (i = t.scriptPath).indexOf("//") >= 0
                                ? i
                                : p("https://editor-api.webflow.com" + i)),
                            (r = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: a,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(r, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (i = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, i), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, i), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, i), t(!1);
                  }),
                  window.addEventListener("message", i, !1),
                  window.document.body.appendChild(n);
              },
            l = !1;
          try {
            l =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function d() {
            !a && /\?edit/.test(u.hash) && c();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            l
              ? c()
              : u.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                  /\?edit$/.test(u.href)) &&
                c()
              : r.on(s, d).triggerHandler(s),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      i = null,
                      a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function r(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function o(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function u() {
                      t = !1;
                    }
                    function s() {
                      document.addEventListener("mousemove", c),
                        document.addEventListener("mousedown", c),
                        document.addEventListener("mouseup", c),
                        document.addEventListener("pointermove", c),
                        document.addEventListener("pointerdown", c),
                        document.addEventListener("pointerup", c),
                        document.addEventListener("touchmove", c),
                        document.addEventListener("touchstart", c),
                        document.addEventListener("touchend", c);
                    }
                    function c(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", c),
                        document.removeEventListener("mousedown", c),
                        document.removeEventListener("mouseup", c),
                        document.removeEventListener("pointermove", c),
                        document.removeEventListener("pointerdown", c),
                        document.removeEventListener("pointerup", c),
                        document.removeEventListener("touchmove", c),
                        document.removeEventListener("touchstart", c),
                        document.removeEventListener("touchend", c));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (r(e.activeElement) && o(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", u, !0),
                      document.addEventListener("pointerdown", u, !0),
                      document.addEventListener("touchstart", u, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), s());
                        },
                        !0
                      ),
                      s(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (r(e.target)) {
                            var n, i, u;
                            (t ||
                              ((i = (n = e.target).type),
                              ("INPUT" === (u = n.tagName) &&
                                a[i] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === u && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              o(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            r(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(i),
                              (i = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function a(n) {
            var i, a;
            (a = (i = n.target).tagName),
              ((/^a$/i.test(a) && null != i.href) ||
                (/^(button|textarea)$/i.test(a) && !0 !== i.disabled) ||
                (/^input$/i.test(a) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(i.type) &&
                  !i.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(a) &&
                  !Number.isNaN(Number.parseFloat(i.tabIndex))) ||
                /^audio$/i.test(a) ||
                (/^video$/i.test(a) && !0 === i.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var i = e.pop();
                    i.target.dispatchEvent(new MouseEvent(i.type, i));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                i.env.safari &&
                (document.addEventListener("mousedown", a, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        i = [],
        a = ".w-ix",
        r = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, i) {
            i.__wf_intro ||
              ((i.__wf_intro = !0), t(i).triggerHandler(n.types.INTRO));
          },
          outro: function (e, i) {
            i.__wf_intro &&
              ((i.__wf_intro = null), t(i).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + a, OUTRO: "w-ix-outro" + a }),
        (n.init = function () {
          for (var e = i.length, a = 0; a < e; a++) {
            var o = i[a];
            o[0](0, o[1]);
          }
          (i = []), t.extend(n.triggers, r);
        }),
        (n.async = function () {
          for (var e in r) {
            var t = r[e];
            r.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                i.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var i = n(7199);
      function a(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var r = window.jQuery,
        o = {},
        u = ".w-ix";
      (o.triggers = {}),
        (o.types = { INTRO: "w-ix-intro" + u, OUTRO: "w-ix-outro" + u }),
        r.extend(o.triggers, {
          reset: function (e, t) {
            i.triggers.reset(e, t);
          },
          intro: function (e, t) {
            i.triggers.intro(e, t), a(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            i.triggers.outro(e, t), a(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = o);
    },
    941: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(6011);
      a.setEnv(i.env),
        i.define(
          "ix2",
          (e.exports = function () {
            return a;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var i,
        a,
        r = {},
        o = {},
        u = [],
        s = window.Webflow || [],
        c = window.jQuery,
        l = c(window),
        d = c(document),
        f = c.isFunction,
        p = (r._ = n(5756)),
        E = (r.tram = n(5487) && c.tram),
        g = !1,
        m = !1;
      function h(e) {
        r.env() &&
          (f(e.design) && l.on("__wf_design", e.design),
          f(e.preview) && l.on("__wf_preview", e.preview)),
          f(e.destroy) && l.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (g) return e.ready();
              p.contains(u, e.ready) || u.push(e.ready);
            })(e);
      }
      function y(e) {
        var t;
        f(e.design) && l.off("__wf_design", e.design),
          f(e.preview) && l.off("__wf_preview", e.preview),
          f(e.destroy) && l.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (u = p.filter(u, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (r.define = function (e, t, n) {
          o[e] && y(o[e]);
          var i = (o[e] = t(c, p, n) || {});
          return h(i), i;
        }),
        (r.require = function (e) {
          return o[e];
        }),
        (r.push = function (e) {
          if (g) {
            f(e) && e();
            return;
          }
          s.push(e);
        }),
        (r.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var I = navigator.userAgent.toLowerCase(),
        T = (r.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        b = (r.env.chrome =
          /chrome/.test(I) &&
          /Google/.test(navigator.vendor) &&
          parseInt(I.match(/chrome\/(\d+)\./)[1], 10)),
        v = (r.env.ios = /(ipod|iphone|ipad)/.test(I));
      (r.env.safari = /safari/.test(I) && !b && !v),
        T &&
          d.on("touchstart mousedown", function (e) {
            i = e.target;
          }),
        (r.validClick = T
          ? function (e) {
              return e === i || c.contains(e, i);
            }
          : function () {
              return !0;
            });
      var O = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + O;
      function A(e, t) {
        var n = [],
          i = {};
        return (
          (i.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, i.up),
          (i.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (i.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          i
        );
      }
      function R(e) {
        f(e) && e();
      }
      function w() {
        a && (a.reject(), l.off("load", a.resolve)),
          (a = new c.Deferred()),
          l.on("load", a.resolve);
      }
      (r.resize = A(l, O)),
        (r.scroll = A(l, _)),
        (r.redraw = A()),
        (r.location = function (e) {
          window.location = e;
        }),
        r.env() && (r.location = function () {}),
        (r.ready = function () {
          (g = !0),
            m ? ((m = !1), p.each(o, h)) : p.each(u, R),
            p.each(s, R),
            r.resize.up();
        }),
        (r.load = function (e) {
          a.then(e);
        }),
        (r.destroy = function (e) {
          (e = e || {}),
            (m = !0),
            l.triggerHandler("__wf_destroy"),
            null != e.domready && (g = e.domready),
            p.each(o, y),
            r.resize.off(),
            r.scroll.off(),
            r.redraw.off(),
            (u = []),
            (s = []),
            "pending" === a.state() && w();
        }),
        c(r.ready),
        w(),
        (e.exports = window.Webflow = r);
    },
    7624: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            a,
            r,
            o = {},
            u = e(window),
            s = i.env(),
            c = window.location,
            l = document.createElement("a"),
            d = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = u.scrollTop(),
              n = u.height();
            t.each(a, function (t) {
              if (!t.link.attr("hreflang")) {
                var i = t.link,
                  a = t.sec,
                  r = a.offset().top,
                  o = a.outerHeight(),
                  u = 0.5 * n,
                  s = a.is(":visible") && r + o - u >= e && r + u <= e + n;
                t.active !== s && ((t.active = s), g(i, d, s));
              }
            });
          }
          function g(e, t, n) {
            var i = e.hasClass(t);
            (!n || !i) && (n || i) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (o.ready =
              o.design =
              o.preview =
                function () {
                  (n = s && i.env("design")),
                    (r = i.env("slug") || c.pathname || ""),
                    i.scroll.off(E),
                    (a = []);
                  for (var t = document.links, o = 0; o < t.length; ++o)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var i =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((l.href = i), !(i.indexOf(":") >= 0))) {
                          var o = e(t);
                          if (
                            l.hash.length > 1 &&
                            l.host + l.pathname === c.host + c.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                            var u = e(l.hash);
                            u.length && a.push({ link: o, sec: u, active: !1 });
                            return;
                          }
                          "#" !== i &&
                            "" !== i &&
                            g(
                              o,
                              d,
                              l.href === c.href ||
                                i === r ||
                                (f.test(i) && p.test(r))
                            );
                        }
                      }
                    })(t[o]);
                  a.length && (i.scroll.on(E), E());
                }),
            o
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var i = n(3949);
      i.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            a = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            r = e(window),
            o = e(document),
            u = e(document.body),
            s =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            c = i.env("editor") ? ".w-editor-body" : "body",
            l =
              "header, " +
              c +
              " > .header, " +
              c +
              " > .w-nav:not([data-no-scroll])",
            d = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + d + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let g =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function m(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function h(t) {
            var o = t.currentTarget;
            if (
              !(
                i.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(o.className))
              )
            ) {
              var c =
                E.test(o.hash) && o.host + o.pathname === n.host + n.pathname
                  ? o.hash
                  : "";
              if ("" !== c) {
                var d,
                  f = e(c);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (d = c),
                  n.hash !== d &&
                    a &&
                    a.pushState &&
                    !(i.env.chrome && "file:" === n.protocol) &&
                    (a.state && a.state.hash) !== d &&
                    a.pushState({ hash: d }, "", d),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var i = r.scrollTop(),
                        a = (function (t) {
                          var n = e(l),
                            i =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            a = t.offset().top - i;
                          if ("mid" === t.data("scroll")) {
                            var o = r.height() - i,
                              u = t.outerHeight();
                            u < o && (a -= Math.round((o - u) / 2));
                          }
                          return a;
                        })(t);
                      if (i !== a) {
                        var o = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              g.matches
                            )
                              return 0;
                            var i = 1;
                            return (
                              u.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (i = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                i
                            );
                          })(t, i, a),
                          c = Date.now(),
                          d = function () {
                            var e,
                              t,
                              r,
                              u,
                              l,
                              f = Date.now() - c;
                            window.scroll(
                              0,
                              ((e = i),
                              (t = a),
                              (r = f) > (u = o)
                                ? t
                                : e +
                                  (t - e) *
                                    ((l = r / u) < 0.5
                                      ? 4 * l * l * l
                                      : (l - 1) * (2 * l - 2) * (2 * l - 2) +
                                        1))
                            ),
                              f <= o ? s(d) : "function" == typeof n && n();
                          };
                        s(d);
                      }
                    })(f, function () {
                      m(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        m(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              o.on(n, f, h),
                o.on(e, d, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function i(t) {
            var i,
              a,
              r = !1,
              o = !1,
              u = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function s(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((r = !0),
                t ? ((o = !0), (i = t[0].clientX)) : (i = e.clientX),
                (a = i));
            }
            function c(t) {
              if (r) {
                if (o && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var i,
                  s,
                  c,
                  l,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - a;
                (a = p),
                  Math.abs(E) > u &&
                    n &&
                    "" === String(n()) &&
                    ((i = "swipe"),
                    (s = t),
                    (c = { direction: E > 0 ? "right" : "left" }),
                    (l = e.Event(i, { originalEvent: s })),
                    e(s.target).trigger(l, c),
                    d());
              }
            }
            function l(e) {
              if (r && ((r = !1), o && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (o = !1);
                return;
              }
            }
            function d() {
              r = !1;
            }
            t.addEventListener("touchstart", s, !1),
              t.addEventListener("touchmove", c, !1),
              t.addEventListener("touchend", l, !1),
              t.addEventListener("touchcancel", d, !1),
              t.addEventListener("mousedown", s, !1),
              t.addEventListener("mousemove", c, !1),
              t.addEventListener("mouseup", l, !1),
              t.addEventListener("mouseout", d, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", s, !1),
                  t.removeEventListener("touchmove", c, !1),
                  t.removeEventListener("touchend", l, !1),
                  t.removeEventListener("touchcancel", d, !1),
                  t.removeEventListener("mousedown", s, !1),
                  t.removeEventListener("mousemove", c, !1),
                  t.removeEventListener("mouseup", l, !1),
                  t.removeEventListener("mouseout", d, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new i(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    6524: function (e, t) {
      "use strict";
      function n(e, t, n, i, a, r, o, u, s, c, l, d, f) {
        return function (p) {
          e(p);
          var E = p.form,
            g = {
              name: E.attr("data-name") || E.attr("name") || "Untitled Form",
              pageId: E.attr("data-wf-page-id") || "",
              elementId: E.attr("data-wf-element-id") || "",
              domain: d("html").attr("data-wf-domain") || null,
              source: t.href,
              test: n.env(),
              fields: {},
              fileUploads: {},
              dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                E.html()
              ),
              trackingCookies: i(),
            };
          let m = E.attr("data-wf-flow");
          m && (g.wfFlow = m);
          let h = E.attr("data-wf-locale-id");
          h && (g.localeId = h), a(p);
          var y = r(E, g.fields);
          return y
            ? o(y)
            : ((g.fileUploads = u(E)), s(p), c)
            ? void d
                .ajax({
                  url: f,
                  type: "POST",
                  data: g,
                  dataType: "json",
                  crossDomain: !0,
                })
                .done(function (e) {
                  e && 200 === e.code && (p.success = !0), l(p);
                })
                .fail(function () {
                  l(p);
                })
            : void l(p);
        };
      }
      Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function () {
          return n;
        },
      });
    },
    7527: function (e, t, n) {
      "use strict";
      var i = n(3949);
      let a = (e, t, n, i) => {
        let a = document.createElement("div");
        t.appendChild(a),
          turnstile.render(a, {
            sitekey: e,
            callback: function (e) {
              n(e);
            },
            "error-callback": function () {
              i();
            },
          });
      };
      i.define(
        "forms",
        (e.exports = function (e, t) {
          let r,
            o = "TURNSTILE_LOADED";
          var u,
            s,
            c,
            l,
            d,
            f = {},
            p = e(document),
            E = window.location,
            g = window.XDomainRequest && !window.atob,
            m = ".w-form",
            h = /e(-)?mail/i,
            y = /^\S+@\S+$/,
            I = window.alert,
            T = i.env();
          let b = p.find("[data-turnstile-sitekey]").data("turnstile-sitekey");
          var v = /list-manage[1-9]?.com/i,
            O = t.debounce(function () {
              console.warn(
                "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
              );
            }, 100);
          function _(t, r) {
            var u = e(r),
              c = e.data(r, m);
            c || (c = e.data(r, m, { form: u })), A(c);
            var f = u.closest("div.w-form");
            (c.done = f.find("> .w-form-done")),
              (c.fail = f.find("> .w-form-fail")),
              (c.fileUploads = f.find(".w-file-upload")),
              c.fileUploads.each(function (t) {
                !(function (t, n) {
                  if (n.fileUploads && n.fileUploads[t]) {
                    var i,
                      a = e(n.fileUploads[t]),
                      r = a.find("> .w-file-upload-default"),
                      o = a.find("> .w-file-upload-uploading"),
                      u = a.find("> .w-file-upload-success"),
                      s = a.find("> .w-file-upload-error"),
                      c = r.find(".w-file-upload-input"),
                      l = r.find(".w-file-upload-label"),
                      f = l.children(),
                      p = s.find(".w-file-upload-error-msg"),
                      E = u.find(".w-file-upload-file"),
                      g = u.find(".w-file-remove-link"),
                      m = E.find(".w-file-upload-file-name"),
                      h = p.attr("data-w-size-error"),
                      y = p.attr("data-w-type-error"),
                      I = p.attr("data-w-generic-error");
                    if (
                      (T ||
                        l.on("click keydown", function (e) {
                          ("keydown" !== e.type ||
                            13 === e.which ||
                            32 === e.which) &&
                            (e.preventDefault(), c.click());
                        }),
                      l
                        .find(".w-icon-file-upload-icon")
                        .attr("aria-hidden", "true"),
                      g
                        .find(".w-icon-file-upload-remove")
                        .attr("aria-hidden", "true"),
                      T)
                    )
                      c.on("click", function (e) {
                        e.preventDefault();
                      }),
                        l.on("click", function (e) {
                          e.preventDefault();
                        }),
                        f.on("click", function (e) {
                          e.preventDefault();
                        });
                    else {
                      g.on("click keydown", function (e) {
                        if ("keydown" === e.type) {
                          if (13 !== e.which && 32 !== e.which) return;
                          e.preventDefault();
                        }
                        c.removeAttr("data-value"),
                          c.val(""),
                          m.html(""),
                          r.toggle(!0),
                          u.toggle(!1),
                          l.focus();
                      }),
                        c.on("change", function (a) {
                          var u, c, l;
                          (i =
                            a.target && a.target.files && a.target.files[0]) &&
                            (r.toggle(!1),
                            s.toggle(!1),
                            o.toggle(!0),
                            o.focus(),
                            m.text(i.name),
                            w() || R(n),
                            (n.fileUploads[t].uploading = !0),
                            (u = i),
                            (c = O),
                            (l = new URLSearchParams({
                              name: u.name,
                              size: u.size,
                            })),
                            e
                              .ajax({
                                type: "GET",
                                url: `${d}?${l}`,
                                crossDomain: !0,
                              })
                              .done(function (e) {
                                c(null, e);
                              })
                              .fail(function (e) {
                                c(e);
                              }));
                        });
                      var b = l.outerHeight();
                      c.height(b), c.width(1);
                    }
                  }
                  function v(e) {
                    var i = e.responseJSON && e.responseJSON.msg,
                      a = I;
                    "string" == typeof i &&
                    0 === i.indexOf("InvalidFileTypeError")
                      ? (a = y)
                      : "string" == typeof i &&
                        0 === i.indexOf("MaxFileSizeError") &&
                        (a = h),
                      p.text(a),
                      c.removeAttr("data-value"),
                      c.val(""),
                      o.toggle(!1),
                      r.toggle(!0),
                      s.toggle(!0),
                      s.focus(),
                      (n.fileUploads[t].uploading = !1),
                      w() || A(n);
                  }
                  function O(t, n) {
                    if (t) return v(t);
                    var a = n.fileName,
                      r = n.postData,
                      o = n.fileId,
                      u = n.s3Url;
                    c.attr("data-value", o),
                      (function (t, n, i, a, r) {
                        var o = new FormData();
                        for (var u in n) o.append(u, n[u]);
                        o.append("file", i, a),
                          e
                            .ajax({
                              type: "POST",
                              url: t,
                              data: o,
                              processData: !1,
                              contentType: !1,
                            })
                            .done(function () {
                              r(null);
                            })
                            .fail(function (e) {
                              r(e);
                            });
                      })(u, r, i, a, _);
                  }
                  function _(e) {
                    if (e) return v(e);
                    o.toggle(!1),
                      u.css("display", "inline-block"),
                      u.focus(),
                      (n.fileUploads[t].uploading = !1),
                      w() || A(n);
                  }
                  function w() {
                    return (
                      (n.fileUploads && n.fileUploads.toArray()) ||
                      []
                    ).some(function (e) {
                      return e.uploading;
                    });
                  }
                })(t, c);
              }),
              b &&
                ((function (e) {
                  let t = e.btn || e.form.find(':input[type="submit"]');
                  e.btn || (e.btn = t),
                    t.prop("disabled", !0),
                    t.addClass("w-form-loading");
                })(c),
                w(u, !0),
                p.on(
                  "undefined" != typeof turnstile ? "ready" : o,
                  function () {
                    a(
                      b,
                      r,
                      (e) => {
                        (c.turnstileToken = e), A(c), w(u, !1);
                      },
                      () => {
                        A(c), c.btn && c.btn.prop("disabled", !0), w(u, !1);
                      }
                    );
                  }
                ));
            var g =
              c.form.attr("aria-label") || c.form.attr("data-name") || "Form";
            c.done.attr("aria-label") || c.form.attr("aria-label", g),
              c.done.attr("tabindex", "-1"),
              c.done.attr("role", "region"),
              c.done.attr("aria-label") ||
                c.done.attr("aria-label", g + " success"),
              c.fail.attr("tabindex", "-1"),
              c.fail.attr("role", "region"),
              c.fail.attr("aria-label") ||
                c.fail.attr("aria-label", g + " failure");
            var h = (c.action = u.attr("action"));
            if (
              ((c.handler = null),
              (c.redirect = u.attr("data-redirect")),
              v.test(h))
            ) {
              c.handler = P;
              return;
            }
            if (!h) {
              if (s) {
                c.handler = (0, n(6524).default)(
                  A,
                  E,
                  i,
                  C,
                  F,
                  N,
                  I,
                  S,
                  R,
                  s,
                  M,
                  e,
                  l
                );
                return;
              }
              O();
            }
          }
          function A(e) {
            var t = (e.btn = e.form.find(':input[type="submit"]'));
            (e.wait = e.btn.attr("data-wait") || null), (e.success = !1);
            let n = !!(b && !e.turnstileToken);
            t.prop("disabled", n),
              t.removeClass("w-form-loading"),
              e.label && t.val(e.label);
          }
          function R(e) {
            var t = e.btn,
              n = e.wait;
            t.prop("disabled", !0), n && ((e.label = t.val()), t.val(n));
          }
          function w(e, t) {
            let n = e.closest(".w-form");
            t ? n.addClass("w-form-loading") : n.removeClass("w-form-loading");
          }
          function N(t, n) {
            var i = null;
            return (
              (n = n || {}),
              t
                .find(
                  ':input:not([type="submit"]):not([type="file"]):not([type="button"])'
                )
                .each(function (a, r) {
                  var o,
                    u,
                    s,
                    c,
                    l,
                    d = e(r),
                    f = d.attr("type"),
                    p =
                      d.attr("data-name") ||
                      d.attr("name") ||
                      "Field " + (a + 1);
                  p = encodeURIComponent(p);
                  var E = d.val();
                  if ("checkbox" === f) E = d.is(":checked");
                  else if ("radio" === f) {
                    if (null === n[p] || "string" == typeof n[p]) return;
                    E =
                      t
                        .find('input[name="' + d.attr("name") + '"]:checked')
                        .val() || null;
                  }
                  "string" == typeof E && (E = e.trim(E)),
                    (n[p] = E),
                    (i =
                      i ||
                      ((o = d),
                      (u = f),
                      (s = p),
                      (c = E),
                      (l = null),
                      "password" === u
                        ? (l = "Passwords cannot be submitted.")
                        : o.attr("required")
                        ? c
                          ? h.test(o.attr("type")) &&
                            !y.test(c) &&
                            (l = "Please enter a valid email address for: " + s)
                          : (l = "Please fill out the required field: " + s)
                        : "g-recaptcha-response" !== s ||
                          c ||
                          (l = "Please confirm you're not a robot."),
                      l));
                }),
              i
            );
          }
          function S(t) {
            var n = {};
            return (
              t.find(':input[type="file"]').each(function (t, i) {
                var a = e(i),
                  r =
                    a.attr("data-name") || a.attr("name") || "File " + (t + 1),
                  o = a.attr("data-value");
                "string" == typeof o && (o = e.trim(o)), (n[r] = o);
              }),
              n
            );
          }
          f.ready =
            f.design =
            f.preview =
              function () {
                b &&
                  (((r = document.createElement("script")).src =
                    "https://challenges.cloudflare.com/turnstile/v0/api.js"),
                  document.head.appendChild(r),
                  (r.onload = () => {
                    p.trigger(o);
                  })),
                  (l =
                    "https://webflow.com/api/v1/form/" +
                    (s = e("html").attr("data-wf-site"))),
                  g &&
                    l.indexOf("https://webflow.com") >= 0 &&
                    (l = l.replace(
                      "https://webflow.com",
                      "https://formdata.webflow.com"
                    )),
                  (d = `${l}/signFile`),
                  (u = e(m + " form")).length && u.each(_),
                  (!T || i.env("preview")) &&
                    !c &&
                    (function () {
                      (c = !0),
                        p.on("submit", m + " form", function (t) {
                          var n = e.data(this, m);
                          n.handler && ((n.evt = t), n.handler(n));
                        });
                      let t = ".w-checkbox-input",
                        n = ".w-radio-input",
                        i = "w--redirected-checked",
                        a = "w--redirected-focus",
                        r = "w--redirected-focus-visible",
                        o = [
                          ["checkbox", t],
                          ["radio", n],
                        ];
                      p.on(
                        "change",
                        m + ' form input[type="checkbox"]:not(' + t + ")",
                        (n) => {
                          e(n.target).siblings(t).toggleClass(i);
                        }
                      ),
                        p.on("change", m + ' form input[type="radio"]', (a) => {
                          e(`input[name="${a.target.name}"]:not(${t})`).map(
                            (t, a) => e(a).siblings(n).removeClass(i)
                          );
                          let r = e(a.target);
                          r.hasClass("w-radio-input") ||
                            r.siblings(n).addClass(i);
                        }),
                        o.forEach(([t, n]) => {
                          p.on(
                            "focus",
                            m + ` form input[type="${t}"]:not(` + n + ")",
                            (t) => {
                              e(t.target).siblings(n).addClass(a),
                                e(t.target)
                                  .filter(
                                    ":focus-visible, [data-wf-focus-visible]"
                                  )
                                  .siblings(n)
                                  .addClass(r);
                            }
                          ),
                            p.on(
                              "blur",
                              m + ` form input[type="${t}"]:not(` + n + ")",
                              (t) => {
                                e(t.target)
                                  .siblings(n)
                                  .removeClass(`${a} ${r}`);
                              }
                            );
                        });
                    })();
              };
          let L = { _mkto_trk: "marketo" };
          function C() {
            return document.cookie.split("; ").reduce(function (e, t) {
              let n = t.split("="),
                i = n[0];
              if (i in L) {
                let t = L[i],
                  a = n.slice(1).join("=");
                e[t] = a;
              }
              return e;
            }, {});
          }
          function P(n) {
            A(n);
            var i,
              a = n.form,
              r = {};
            if (/^https/.test(E.href) && !/^https/.test(n.action))
              return void a.attr("method", "post");
            F(n);
            var o = N(a, r);
            if (o) return I(o);
            R(n),
              t.each(r, function (e, t) {
                h.test(t) && (r.EMAIL = e),
                  /^((full[ _-]?)?name)$/i.test(t) && (i = e),
                  /^(first[ _-]?name)$/i.test(t) && (r.FNAME = e),
                  /^(last[ _-]?name)$/i.test(t) && (r.LNAME = e);
              }),
              i &&
                !r.FNAME &&
                ((r.FNAME = (i = i.split(" "))[0]),
                (r.LNAME = r.LNAME || i[1]));
            var u = n.action.replace("/post?", "/post-json?") + "&c=?",
              s = u.indexOf("u=") + 2;
            s = u.substring(s, u.indexOf("&", s));
            var c = u.indexOf("id=") + 3;
            (r["b_" + s + "_" + (c = u.substring(c, u.indexOf("&", c)))] = ""),
              e
                .ajax({ url: u, data: r, dataType: "jsonp" })
                .done(function (e) {
                  (n.success = "success" === e.result || /already/.test(e.msg)),
                    n.success || console.info("MailChimp error: " + e.msg),
                    M(n);
                })
                .fail(function () {
                  M(n);
                });
          }
          function M(e) {
            var t = e.form,
              n = e.redirect,
              a = e.success;
            if (a && n) return void i.location(n);
            e.done.toggle(a),
              e.fail.toggle(!a),
              a ? e.done.focus() : e.fail.focus(),
              t.toggle(!a),
              A(e);
          }
          function F(e) {
            e.evt && e.evt.preventDefault(), (e.evt = null);
          }
          return f;
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var i = n(3949),
        a = n(5134);
      let r = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      i.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            o,
            u,
            s,
            c = {},
            l = e.tram,
            d = e(window),
            f = e(document),
            p = t.debounce,
            E = i.env(),
            g = ".w-nav",
            m = "w--open",
            h = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            I = "w--nav-dropdown-list-open",
            T = "w--nav-link-open",
            b = a.triggers,
            v = e();
          function O() {
            i.resize.off(_);
          }
          function _() {
            o.each(F);
          }
          function A(n, i) {
            var a,
              o,
              c,
              l,
              p,
              E = e(i),
              m = e.data(i, g);
            m ||
              (m = e.data(i, g, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (m.menu = E.find(".w-nav-menu")),
              (m.links = m.menu.find(".w-nav-link")),
              (m.dropdowns = m.menu.find(".w-dropdown")),
              (m.dropdownToggle = m.menu.find(".w-dropdown-toggle")),
              (m.dropdownList = m.menu.find(".w-dropdown-list")),
              (m.button = E.find(".w-nav-button")),
              (m.container = E.find(".w-container")),
              (m.overlayContainerId = "w-nav-overlay-" + n),
              (m.outside =
                ((a = m).outside && f.off("click" + g, a.outside),
                function (t) {
                  var n = e(t.target);
                  (s && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    M(a, n);
                }));
            var h = E.find(".w-nav-brand");
            h &&
              "/" === h.attr("href") &&
              null == h.attr("aria-label") &&
              h.attr("aria-label", "home"),
              m.button.attr("style", "-webkit-user-select: text;"),
              null == m.button.attr("aria-label") &&
                m.button.attr("aria-label", "menu"),
              m.button.attr("role", "button"),
              m.button.attr("tabindex", "0"),
              m.button.attr("aria-controls", m.overlayContainerId),
              m.button.attr("aria-haspopup", "menu"),
              m.button.attr("aria-expanded", "false"),
              m.el.off(g),
              m.button.off(g),
              m.menu.off(g),
              N(m),
              u
                ? (w(m),
                  m.el.on(
                    "setting" + g,
                    ((o = m),
                    function (e, n) {
                      n = n || {};
                      var i = d.width();
                      N(o),
                        !0 === n.open && D(o, !0),
                        !1 === n.open && V(o, !0),
                        o.open &&
                          t.defer(function () {
                            i !== d.width() && L(o);
                          });
                    })
                  ))
                : ((c = m).overlay ||
                    ((c.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(c.el)),
                    c.overlay.attr("id", c.overlayContainerId),
                    (c.parent = c.menu.parent()),
                    V(c, !0)),
                  m.button.on("click" + g, C(m)),
                  m.menu.on("click" + g, "a", P(m)),
                  m.button.on(
                    "keydown" + g,
                    ((l = m),
                    function (e) {
                      switch (e.keyCode) {
                        case r.SPACE:
                        case r.ENTER:
                          return (
                            C(l)(), e.preventDefault(), e.stopPropagation()
                          );
                        case r.ESCAPE:
                          return V(l), e.preventDefault(), e.stopPropagation();
                        case r.ARROW_RIGHT:
                        case r.ARROW_DOWN:
                        case r.HOME:
                        case r.END:
                          if (!l.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === r.END
                              ? (l.selectedIdx = l.links.length - 1)
                              : (l.selectedIdx = 0),
                            S(l),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  m.el.on(
                    "keydown" + g,
                    ((p = m),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case r.HOME:
                          case r.END:
                            return (
                              e.keyCode === r.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ESCAPE:
                            return (
                              V(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_LEFT:
                          case r.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case r.ARROW_RIGHT:
                          case r.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              S(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              F(n, i);
          }
          function R(t, n) {
            var i = e.data(n, g);
            i && (w(i), e.removeData(n, g));
          }
          function w(e) {
            e.overlay && (V(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function N(e) {
            var n = {},
              i = e.config || {},
              a = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(a)),
              (n.animDirect = /left$/.test(a) ? -1 : 1),
              i.animation !== a && e.open && t.defer(L, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var r = e.el.attr("data-duration");
            (n.duration = null != r ? Number(r) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function S(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), P(t);
            }
          }
          function L(e) {
            e.open && (V(e, !0), D(e, !0));
          }
          function C(e) {
            return p(function () {
              e.open ? V(e) : D(e);
            });
          }
          function P(t) {
            return function (n) {
              var a = e(this).attr("href");
              if (!i.validClick(n.currentTarget))
                return void n.preventDefault();
              a && 0 === a.indexOf("#") && t.open && V(t);
            };
          }
          (c.ready =
            c.design =
            c.preview =
              function () {
                (u = E && i.env("design")),
                  (s = i.env("editor")),
                  (n = e(document.body)),
                  (o = f.find(g)).length && (o.each(A), O(), i.resize.on(_));
              }),
            (c.destroy = function () {
              (v = e()), O(), o && o.length && o.each(R);
            });
          var M = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || V(e);
            }
          });
          function F(t, n) {
            var i = e.data(n, g),
              a = (i.collapsed = "none" !== i.button.css("display"));
            if ((!i.open || a || u || V(i, !0), i.container.length)) {
              var r,
                o =
                  ("none" === (r = i.container.css(x)) && (r = ""),
                  function (t, n) {
                    (n = e(n)).css(x, ""), "none" === n.css(x) && n.css(x, r);
                  });
              i.links.each(o), i.dropdowns.each(o);
            }
            i.open && U(i);
          }
          var x = "max-width";
          function k(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function G(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function D(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(k),
                e.links.addClass(T),
                e.dropdowns.addClass(h),
                e.dropdownToggle.addClass(y),
                e.dropdownList.addClass(I),
                e.button.addClass(m);
              var n = e.config;
              ("none" === n.animation ||
                !l.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var a = U(e),
                r = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                s = e.el.height(),
                c = e.el[0];
              if (
                (F(0, c),
                b.intro(0, c),
                i.redraw.up(),
                u || f.on("click" + g, e.outside),
                t)
              )
                return void p();
              var d = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                l(e.menu)
                  .add(d)
                  .set({ x: n.animDirect * o, height: a })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(o);
                return;
              }
              l(e.menu)
                .add(d)
                .set({ y: -(s + r) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function U(e) {
            var t = e.config,
              i = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(i)
                : "fixed" !== e.el.css("position") &&
                  (i -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(i),
              i
            );
          }
          function V(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(m);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !l.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                b.outro(0, e.el[0]),
                f.off("click" + g, e.outside),
                t)
              ) {
                l(e.menu).stop(), u();
                return;
              }
              var i = "transform " + n.duration + "ms " + n.easing2,
                a = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                o = e.el.height();
              if (n.animOver)
                return void l(e.menu)
                  .add(i)
                  .start({ x: r * n.animDirect })
                  .then(u);
              l(e.menu)
                .add(i)
                .start({ y: -(o + a) })
                .then(u);
            }
            function u() {
              e.menu.height(""),
                l(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(G),
                e.links.removeClass(T),
                e.dropdowns.removeClass(h),
                e.dropdownToggle.removeClass(y),
                e.dropdownList.removeClass(I),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return c;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        actionListPlaybackChanged: function () {
          return z;
        },
        animationFrameChanged: function () {
          return U;
        },
        clearRequested: function () {
          return x;
        },
        elementStateChanged: function () {
          return W;
        },
        eventListenerAdded: function () {
          return k;
        },
        eventStateChanged: function () {
          return D;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return H;
        },
        parameterChanged: function () {
          return V;
        },
        playbackRequested: function () {
          return M;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return N;
        },
        sessionInitialized: function () {
          return S;
        },
        sessionStarted: function () {
          return L;
        },
        sessionStopped: function () {
          return C;
        },
        stopRequested: function () {
          return F;
        },
        testFrameRendered: function () {
          return G;
        },
        viewportWidthChanged: function () {
          return Y;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(7087),
        o = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: u,
          IX2_SESSION_INITIALIZED: s,
          IX2_SESSION_STARTED: c,
          IX2_SESSION_STOPPED: l,
          IX2_PREVIEW_REQUESTED: d,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: g,
          IX2_TEST_FRAME_RENDERED: m,
          IX2_EVENT_STATE_CHANGED: h,
          IX2_ANIMATION_FRAME_CHANGED: y,
          IX2_PARAMETER_CHANGED: I,
          IX2_INSTANCE_ADDED: T,
          IX2_INSTANCE_STARTED: b,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: O,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = r.IX2EngineActionTypes,
        { reifyState: w } = o.IX2VanillaUtils,
        N = (e) => ({ type: u, payload: { ...w(e) } }),
        S = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: s,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        L = () => ({ type: c }),
        C = () => ({ type: l }),
        P = ({ rawData: e, defer: t }) => ({
          type: d,
          payload: { defer: t, rawData: e },
        }),
        M = ({
          actionTypeId: e = r.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: i,
          allowEvents: a,
          immediate: o,
          testManual: u,
          verbose: s,
          rawData: c,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: u,
            eventId: i,
            allowEvents: a,
            immediate: o,
            verbose: s,
            rawData: c,
          },
        }),
        F = (e) => ({ type: p, payload: { actionListId: e } }),
        x = () => ({ type: E }),
        k = (e, t) => ({ type: g, payload: { target: e, listenerParams: t } }),
        G = (e = 1) => ({ type: m, payload: { step: e } }),
        D = (e, t) => ({ type: h, payload: { stateKey: e, newState: t } }),
        U = (e, t) => ({ type: y, payload: { now: e, parameters: t } }),
        V = (e, t) => ({ type: I, payload: { key: e, value: t } }),
        B = (e) => ({ type: T, payload: { ...e } }),
        X = (e, t) => ({ type: b, payload: { instanceId: e, time: t } }),
        j = (e) => ({ type: v, payload: { instanceId: e } }),
        W = (e, t, n, i) => ({
          type: O,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: i },
        }),
        z = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        Y = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        H = () => ({ type: R });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          actions: function () {
            return c;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return d;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = n(9516),
        u = (i = n(7243)) && i.__esModule ? i : { default: i },
        s = n(1970),
        c = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = l(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(3946));
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      let d = (0, o.createStore)(u.default);
      function f(e) {
        e() && (0, s.observeRequests)(d);
      }
      function p(e) {
        E(), (0, s.startEngine)({ store: d, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, s.stopEngine)(d);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        elementContains: function () {
          return I;
        },
        getChildElements: function () {
          return b;
        },
        getClosestElement: function () {
          return O;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return m;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return h;
        },
        isSiblingNode: function () {
          return T;
        },
        matchSelector: function () {
          return g;
        },
        queryDocument: function () {
          return y;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(9468),
        o = n(7087),
        { ELEMENT_MATCHES: u } = r.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: s,
          HTML_ELEMENT: c,
          PLAIN_OBJECT: l,
          WF_PAGE: d,
        } = o.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function g(e) {
        return (t) => t[u](e);
      }
      function m({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(s)) {
            let n = e.split(s),
              i = n[0];
            if (((t = n[1]), i !== document.documentElement.getAttribute(d)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function h(e) {
        return null == e || e === document.documentElement.getAttribute(d)
          ? document
          : null;
      }
      function y(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function I(e, t) {
        return e.contains(t);
      }
      function T(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function b(e) {
        let t = [];
        for (let n = 0, { length: i } = e || []; n < i; n++) {
          let { children: i } = e[n],
            { length: a } = i;
          if (a) for (let e = 0; e < a; e++) t.push(i[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let i = 0, { length: a } = e; i < a; i++) {
          let { parentNode: a } = e[i];
          if (!a || !a.children || !a.children.length || -1 !== n.indexOf(a))
            continue;
          n.push(a);
          let r = a.firstElementChild;
          for (; null != r; )
            -1 === e.indexOf(r) && t.push(r), (r = r.nextElementSibling);
        }
        return t;
      }
      let O = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[u] && n[u](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? c
            : l
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ei;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ea;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = y(n(9777)),
        o = y(n(4738)),
        u = y(n(4659)),
        s = y(n(3452)),
        c = y(n(6633)),
        l = y(n(3729)),
        d = y(n(2397)),
        f = y(n(5082)),
        p = n(7087),
        E = n(9468),
        g = n(3946),
        m = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = I(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(5012)),
        h = y(n(8955));
      function y(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function I(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (I = function (e) {
          return e ? n : t;
        })(e);
      }
      let T = Object.keys(p.QuickEffectIds),
        b = (e) => T.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: O,
          HTML_ELEMENT: _,
          RENDER_GENERAL: A,
          W_MOD_IX: R,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: w,
          getElementId: N,
          getDestinationValues: S,
          observeStore: L,
          getInstanceId: C,
          renderHTMLElement: P,
          clearAllStyles: M,
          getMaxDurationItemIndex: F,
          getComputedStyle: x,
          getInstanceOrigin: k,
          reduceListToGroup: G,
          shouldNamespaceEventParameter: D,
          getNamespacedParameterId: U,
          shouldAllowMediaQuery: V,
          cleanupHTMLElement: B,
          clearObjectCache: X,
          stringifyTarget: j,
          mediaQueriesEqual: W,
          shallowEqual: z,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Y,
          createPluginInstance: H,
          getPluginDuration: $,
        } = E.IX2VanillaPlugins,
        Q = navigator.userAgent,
        q = Q.match(/iPad/i) || Q.match(/iPhone/);
      function K(e) {
        L({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          L({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          L({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          L({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let i = () => {
          ei({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(i, 0) : i();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: i,
            actionItemId: a,
            eventId: r,
            allowEvents: o,
            immediate: u,
            testManual: s,
            verbose: c = !0,
          } = e,
          { rawData: l } = e;
        if (i && a && l && u) {
          let e = l.actionLists[i];
          e && (l = G({ actionList: e, actionItemId: a, rawData: l }));
        }
        if (
          (ei({ store: t, rawData: l, allowEvents: o, testManual: s }),
          (i && n === p.ActionTypeConsts.GENERAL_START_ACTION) || b(n))
        ) {
          ep({ store: t, actionListId: i }),
            ed({ store: t, actionListId: i, eventId: r });
          let e = eE({
            store: t,
            eventId: r,
            actionListId: i,
            immediate: u,
            verbose: c,
          });
          c &&
            e &&
            t.dispatch(
              (0, g.actionListPlaybackChanged)({
                actionListId: i,
                isPlaying: !u,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ea(t);
      }
      function en(e, t) {
        ea(t), M({ store: t, elementApi: m });
      }
      function ei({ store: e, rawData: t, allowEvents: n, testManual: i }) {
        let { ixSession: a } = e.getState();
        if ((t && e.dispatch((0, g.rawDataImported)(t)), !a.active)) {
          (e.dispatch(
            (0, g.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(O),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              eu(e),
                (0, d.default)(n, (t, n) => {
                  let i = h.default[n];
                  if (!i)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let i in e) {
                        let { eventTypeId: a, target: r } = e[i],
                          o = m.getQuerySelector(r);
                        t[o] ||
                          ((a === p.EventTypeConsts.MOUSE_CLICK ||
                            a === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[o] = !0),
                            (n +=
                              o +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: i, handler: a } = e,
                      { ixData: s } = t.getState(),
                      { actionLists: c } = s,
                      l = es(n, el);
                    if (!(0, u.default)(l)) return;
                    (0, d.default)(l, (e, i) => {
                      let a = n[i],
                        {
                          action: u,
                          id: l,
                          mediaQueries: d = s.mediaQueryKeys,
                        } = a,
                        { actionListId: f } = u.config;
                      W(d, s.mediaQueryKeys) ||
                        t.dispatch((0, g.mediaQueriesDefined)()),
                        u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(a.config)
                            ? a.config
                            : [a.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: i } = n,
                              a = (0, o.default)(
                                c,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              u = (0, r.default)(a, ({ id: e }) => e === i),
                              s = (n.smoothing || 0) / 100,
                              d = (n.restingState || 0) / 100;
                            u &&
                              e.forEach((e, i) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: i,
                                  eventConfig: a,
                                  actionListId: r,
                                  parameterGroup: u,
                                  smoothing: s,
                                  restingValue: c,
                                }) {
                                  let { ixData: l, ixSession: d } =
                                      e.getState(),
                                    { events: f } = l,
                                    E = f[i],
                                    { eventTypeId: g } = E,
                                    h = {},
                                    y = {},
                                    I = [],
                                    { continuousActionGroups: T } = u,
                                    { id: b } = u;
                                  D(g, a) && (b = U(t, b));
                                  let _ =
                                    d.hasBoundaryNodes && n
                                      ? m.getClosestElement(n, O)
                                      : null;
                                  T.forEach((e) => {
                                    let { keyframe: t, actionItems: i } = e;
                                    i.forEach((e) => {
                                      let { actionTypeId: i } = e,
                                        { target: a } = e.config;
                                      if (!a) return;
                                      let r = a.boundaryMode ? _ : null,
                                        o = j(a) + v + i;
                                      if (
                                        ((y[o] = (function (e = [], t, n) {
                                          let i,
                                            a = [...e];
                                          return (
                                            a.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((i = n), !0)
                                            ),
                                            null == i &&
                                              ((i = a.length),
                                              a.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            a[i].actionItems.push(n),
                                            a
                                          );
                                        })(y[o], t, e)),
                                        !h[o])
                                      ) {
                                        h[o] = !0;
                                        let { config: t } = e;
                                        w({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: r,
                                          elementApi: m,
                                        }).forEach((e) => {
                                          I.push({ element: e, key: o });
                                        });
                                      }
                                    });
                                  }),
                                    I.forEach(({ element: t, key: n }) => {
                                      let a = y[n],
                                        u = (0, o.default)(
                                          a,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: l } = u,
                                        d = (
                                          l === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                u.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Y(l)
                                        )
                                          ? H(l)?.(t, u)
                                          : null,
                                        f = S(
                                          {
                                            element: t,
                                            actionItem: u,
                                            elementApi: m,
                                          },
                                          d
                                        );
                                      eg({
                                        store: e,
                                        element: t,
                                        eventId: i,
                                        actionListId: r,
                                        actionItem: u,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: b,
                                        actionGroups: a,
                                        smoothing: s,
                                        restingValue: c,
                                        pluginInstance: d,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: l + v + i,
                                  eventTarget: e,
                                  eventId: l,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: u,
                                  smoothing: s,
                                  restingValue: d,
                                });
                              });
                          }),
                        (u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          b(u.actionTypeId)) &&
                          ed({ store: t, actionListId: f, eventId: l });
                    });
                    let E = (e) => {
                        let { ixSession: i } = t.getState();
                        ec(l, (r, o, u) => {
                          let c = n[o],
                            l = i.eventState[u],
                            { action: d, mediaQueries: f = s.mediaQueryKeys } =
                              c;
                          if (!V(f, i.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let i = a(
                              {
                                store: t,
                                element: r,
                                event: c,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: u,
                              },
                              l
                            );
                            z(i, l) ||
                              t.dispatch((0, g.eventStateChanged)(u, i));
                          };
                          d.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(c.config)
                                ? c.config
                                : [c.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      h = (0, f.default)(E, 12),
                      y = ({ target: e = document, types: n, throttle: i }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let a = i ? h : E;
                            e.addEventListener(n, a),
                              t.dispatch((0, g.eventListenerAdded)(e, [n, a]));
                          });
                      };
                    Array.isArray(i)
                      ? i.forEach(y)
                      : "string" == typeof i && y(e);
                  })({ logic: i, store: e, events: t });
                });
              let { ixSession: i } = e.getState();
              i.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    eu(e);
                  };
                  eo.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, g.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              L({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ea(e),
                    M({ store: e, elementApi: m }),
                    ei({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, g.sessionStarted)()),
            (function (e, t) {
              let n = (i) => {
                let { ixSession: a, ixParameters: r } = e.getState();
                if (a.active)
                  if ((e.dispatch((0, g.animationFrameChanged)(i, r)), t)) {
                    let t = L({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, i);
        }
      }
      function ea(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(er), X(), e.dispatch((0, g.sessionStopped)());
        }
      }
      function er({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let eo = ["resize", "orientationchange"];
      function eu(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          i = window.innerWidth;
        if (i !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, g.viewportWidthChanged)({ width: i, mediaQueries: t })
          );
        }
      }
      let es = (e, t) => (0, s.default)((0, l.default)(e, t), c.default),
        ec = (e, t) => {
          (0, d.default)(e, (e, n) => {
            e.forEach((e, i) => {
              t(e, n, n + v + i);
            });
          });
        },
        el = (e) =>
          w({
            config: { target: e.target, targets: e.targets },
            elementApi: m,
          });
      function ed({ store: e, actionListId: t, eventId: n }) {
        let { ixData: i, ixSession: a } = e.getState(),
          { actionLists: r, events: u } = i,
          s = u[n],
          c = r[t];
        if (c && c.useFirstGroupAsInitialState) {
          let r = (0, o.default)(c, "actionItemGroups[0].actionItems", []);
          if (
            !V(
              (0, o.default)(s, "mediaQueries", i.mediaQueryKeys),
              a.mediaQueryKey
            )
          )
            return;
          r.forEach((i) => {
            let { config: a, actionTypeId: r } = i,
              o = w({
                config:
                  a?.target?.useEventTarget === !0 &&
                  a?.target?.objectId == null
                    ? { target: s.target, targets: s.targets }
                    : a,
                event: s,
                elementApi: m,
              }),
              u = Y(r);
            o.forEach((a) => {
              let o = u ? H(r)?.(a, i) : null;
              eg({
                destination: S({ element: a, actionItem: i, elementApi: m }, o),
                immediate: !0,
                store: e,
                element: a,
                eventId: n,
                actionItem: i,
                actionListId: t,
                pluginInstance: o,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, d.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: i } = t;
            em(t, e),
              i &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
      }) {
        let { ixInstances: r, ixSession: u } = e.getState(),
          s = u.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null;
        (0, d.default)(r, (n) => {
          let r = (0, o.default)(n, "actionItem.config.target.boundaryMode"),
            u = !i || n.eventStateKey === i;
          if (n.actionListId === a && n.eventId === t && u) {
            if (s && r && !m.elementContains(s, n.element)) return;
            em(n, e),
              n.verbose &&
                e.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: a,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: i,
        actionListId: a,
        groupIndex: r = 0,
        immediate: u,
        verbose: s,
      }) {
        let { ixData: c, ixSession: l } = e.getState(),
          { events: d } = c,
          f = d[t] || {},
          { mediaQueries: p = c.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: g } = (0,
          o.default)(c, `actionLists.${a}`, {});
        if (!E || !E.length) return !1;
        r >= E.length && (0, o.default)(f, "config.loop") && (r = 0),
          0 === r && g && r++;
        let h =
            (0 === r || (1 === r && g)) && b(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          y = (0, o.default)(E, [r, "actionItems"], []);
        if (!y.length || !V(p, l.mediaQueryKey)) return !1;
        let I = l.hasBoundaryNodes && n ? m.getClosestElement(n, O) : null,
          T = F(y),
          v = !1;
        return (
          y.forEach((o, c) => {
            let { config: l, actionTypeId: d } = o,
              p = Y(d),
              { target: E } = l;
            E &&
              w({
                config: l,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? I : null,
                elementApi: m,
              }).forEach((l, f) => {
                let E = p ? H(d)?.(l, o) : null,
                  g = p ? $(d)(l, o) : null;
                v = !0;
                let y = x({ element: l, actionItem: o }),
                  I = S({ element: l, actionItem: o, elementApi: m }, E);
                eg({
                  store: e,
                  element: l,
                  actionItem: o,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: i,
                  actionListId: a,
                  groupIndex: r,
                  isCarrier: T === c && 0 === f,
                  computedStyle: y,
                  destination: I,
                  immediate: u,
                  verbose: s,
                  pluginInstance: E,
                  pluginDuration: g,
                  instanceDelay: h,
                });
              });
          }),
          v
        );
      }
      function eg(e) {
        let t,
          { store: n, computedStyle: i, ...a } = e,
          {
            element: r,
            actionItem: o,
            immediate: u,
            pluginInstance: s,
            continuous: c,
            restingValue: l,
            eventId: d,
          } = a,
          f = C(),
          { ixElements: E, ixSession: h, ixData: y } = n.getState(),
          I = N(E, r),
          { refState: T } = E[I] || {},
          b = m.getRefType(r),
          v = h.reducedMotion && p.ReducedMotionTypes[o.actionTypeId];
        if (v && c)
          switch (y.events[d]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = l;
              break;
            default:
              t = 0.5;
          }
        let O = k(r, T, i, o, m, s);
        if (
          (n.dispatch(
            (0, g.instanceAdded)({
              instanceId: f,
              elementId: I,
              origin: O,
              refType: b,
              skipMotion: v,
              skipToValue: t,
              ...a,
            })
          ),
          eh(document.body, "ix2-animation-started", f),
          u)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, g.instanceStarted)(t, 0)),
              e.dispatch((0, g.animationFrameChanged)(performance.now(), n));
            let { ixInstances: i } = e.getState();
            ey(i[t], e);
          })(n, f);
        L({ store: n, select: ({ ixInstances: e }) => e[f], onChange: ey }),
          c || n.dispatch((0, g.instanceStarted)(f, h.tick));
      }
      function em(e, t) {
        eh(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: i } = e,
          { ixElements: a } = t.getState(),
          { ref: r, refType: o } = a[n] || {};
        o === _ && B(r, i, m), t.dispatch((0, g.instanceRemoved)(e.id));
      }
      function eh(e, t, n) {
        let i = document.createEvent("CustomEvent");
        i.initCustomEvent(t, !0, !0, n), e.dispatchEvent(i);
      }
      function ey(e, t) {
        let {
            active: n,
            continuous: i,
            complete: a,
            elementId: r,
            actionItem: o,
            actionTypeId: u,
            renderType: s,
            current: c,
            groupIndex: l,
            eventId: d,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: h,
            styleProp: y,
            verbose: I,
            pluginInstance: T,
          } = e,
          { ixData: b, ixSession: v } = t.getState(),
          { events: O } = b,
          { mediaQueries: R = b.mediaQueryKeys } = O && O[d] ? O[d] : {};
        if (V(R, v.mediaQueryKey) && (i || n || a)) {
          if (c || (s === A && a)) {
            t.dispatch((0, g.elementStateChanged)(r, u, c, o));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: i, refState: a } = e[r] || {},
              l = a && a[u];
            (i === _ || Y(u)) && P(n, a, l, d, o, y, m, s, T);
          }
          if (a) {
            if (h) {
              let e = eE({
                store: t,
                eventId: d,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: l + 1,
                verbose: I,
              });
              I &&
                !e &&
                t.dispatch(
                  (0, g.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            em(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let i;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let a = d(n(5801)),
        r = d(n(4738)),
        o = d(n(3789)),
        u = n(7087),
        s = n(1970),
        c = n(3946),
        l = n(9468);
      function d(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: g,
          MOUSE_OVER: m,
          MOUSE_OUT: h,
          DROPDOWN_CLOSE: y,
          DROPDOWN_OPEN: I,
          SLIDER_ACTIVE: T,
          SLIDER_INACTIVE: b,
          TAB_ACTIVE: v,
          TAB_INACTIVE: O,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: R,
          PAGE_SCROLL_DOWN: w,
          SCROLL_INTO_VIEW: N,
          SCROLL_OUT_OF_VIEW: S,
          PAGE_SCROLL_UP: L,
          SCROLLING_IN_VIEW: C,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: M,
          ECOMMERCE_CART_OPEN: F,
          PAGE_START: x,
          PAGE_SCROLL: k,
        } = u.EventTypeConsts,
        G = "COMPONENT_ACTIVE",
        D = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: U } = u.IX2EngineConstants,
        { getNamespacedParameterId: V } = l.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        W = (0, a.default)([X, j]),
        z = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: i } = n,
              a = i[t];
            if (a && !ee[a.eventTypeId]) return a;
          }
          return null;
        },
        Y = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: i } = n.config;
          return !!z(e, i);
        },
        H = ({ store: e, event: t, element: n, eventStateKey: i }, a) => {
          let { action: o, id: u } = t,
            { actionListId: c, autoStopEventId: l } = o.config,
            d = z(e, l);
          return (
            d &&
              (0, s.stopActionGroup)({
                store: e,
                eventId: l,
                eventTarget: n,
                eventStateKey: l + U + i.split(U)[1],
                actionListId: (0, r.default)(d, "action.config.actionListId"),
              }),
            (0, s.stopActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            (0, s.startActionGroup)({
              store: e,
              eventId: u,
              eventTarget: n,
              eventStateKey: i,
              actionListId: c,
            }),
            a
          );
        },
        $ = (e, t) => (n, i) => !0 === e(n, i) ? t(n, i) : i,
        Q = { handler: $(W, H) },
        q = { ...Q, types: [G, D].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: x, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, o.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ei = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: i, relatedTarget: a } = t,
            r = e.contains(i);
          if ("mouseover" === n && r) return !0;
          let o = e.contains(a);
          return "mouseout" === n && !!r && !!o;
        },
        ea = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: i, clientHeight: a } = et(),
            r = n.scrollOffsetValue,
            o = "PX" === n.scrollOffsetUnit ? r : (a * (r || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: o,
            right: i,
            bottom: a - o,
          });
        },
        er = (e) => (t, n) => {
          let { type: i } = t.nativeEvent,
            a = -1 !== [G, D].indexOf(i) ? i === G : n.isActive,
            r = { ...n, isActive: a };
          return ((!n || r.isActive !== n.isActive) && e(t, r)) || r;
        },
        eo = (e) => (t, n) => {
          let i = { elementHovered: ei(t) };
          return (
            ((n ? i.elementHovered !== n.elementHovered : i.elementHovered) &&
              e(t, i)) ||
            i
          );
        },
        eu =
          (e) =>
          (t, n = {}) => {
            let i,
              a,
              { stiffScrollTop: r, scrollHeight: o, innerHeight: u } = et(),
              {
                event: { config: s, eventTypeId: c },
              } = t,
              { scrollOffsetValue: l, scrollOffsetUnit: d } = s,
              f = o - u,
              p = Number((r / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === d ? l : (u * (l || 0)) / 100) / f,
              g = 0;
            n &&
              ((i = p > n.percentTop),
              (g = (a = n.scrollingDown !== i) ? p : n.anchorTop));
            let m = c === w ? p >= g + E : p <= g - E,
              h = {
                ...n,
                percentTop: p,
                inBounds: m,
                anchorTop: g,
                scrollingDown: i,
              };
            return (n && m && (a || h.inBounds !== n.inBounds) && e(t, h)) || h;
          },
        es = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        ec =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let i = { clickCount: (n.clickCount % 2) + 1 };
            return (i.clickCount !== n.clickCount && e(t, i)) || i;
          },
        el = (e = !0) => ({
          ...q,
          handler: $(
            e ? W : X,
            er((e, t) => (t.isActive ? Q.handler(e, t) : t))
          ),
        }),
        ed = (e = !0) => ({
          ...q,
          handler: $(
            e ? W : X,
            er((e, t) => (t.isActive ? t : Q.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((i = (e, t) => {
              let { elementVisible: n } = t,
                { event: i, store: a } = e,
                { ixData: r } = a.getState(),
                { events: o } = r;
              return !o[i.action.config.autoStopEventId] && t.triggered
                ? t
                : (i.eventTypeId === N) === n
                ? (H(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ea(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  i(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [T]: el(),
          [b]: ed(),
          [I]: el(),
          [y]: ed(),
          [A]: el(!1),
          [_]: ed(!1),
          [v]: el(),
          [O]: ed(),
          [F]: { types: "ecommerce-cart-open", handler: $(W, H) },
          [M]: { types: "ecommerce-cart-close", handler: $(W, H) },
          [f]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                Y(e) ? 1 === t && H(e) : H(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: $(
              W,
              ec((e, { clickCount: t }) => {
                2 === t && H(e);
              })
            ),
          },
          [E]: { ...Q, types: "mousedown" },
          [g]: { ...Q, types: "mouseup" },
          [m]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered && H(e);
              })
            ),
          },
          [h]: {
            types: Z,
            handler: $(
              W,
              eo((e, t) => {
                t.elementHovered || H(e);
              })
            ),
          },
          [R]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: i,
                eventStateKey: a,
              },
              r = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: o,
                  selectedAxis: s,
                  continuousParameterGroupId: l,
                  reverse: d,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = r.clientX,
                  clientY: E = r.clientY,
                  pageX: g = r.pageX,
                  pageY: m = r.pageY,
                } = i,
                h = "X_AXIS" === s,
                y = "mouseout" === i.type,
                I = f / 100,
                T = l,
                b = !1;
              switch (o) {
                case u.EventBasedOn.VIEWPORT:
                  I = h
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case u.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: i,
                  } = et();
                  I = h ? Math.min(e + g, n) / n : Math.min(t + m, i) / i;
                  break;
                }
                case u.EventBasedOn.ELEMENT:
                default: {
                  T = V(a, l);
                  let e = 0 === i.type.indexOf("mouse");
                  if (e && !0 !== W({ element: t, nativeEvent: i })) break;
                  let n = t.getBoundingClientRect(),
                    { left: r, top: o, width: u, height: s } = n;
                  if (!e && !es({ left: p, top: E }, n)) break;
                  (b = !0), (I = h ? (p - r) / u : (E - o) / s);
                }
              }
              return (
                y && (I > 0.95 || I < 0.05) && (I = Math.round(I)),
                (o !== u.EventBasedOn.ELEMENT || b || b !== r.elementHovered) &&
                  ((I = d ? 1 - I : I),
                  e.dispatch((0, c.parameterChanged)(T, I))),
                {
                  elementHovered: b,
                  clientX: p,
                  clientY: E,
                  pageX: g,
                  pageY: m,
                }
              );
            },
          },
          [k]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: i } = t,
                { scrollTop: a, scrollHeight: r, clientHeight: o } = et(),
                u = a / (r - o);
              (u = i ? 1 - u : u), e.dispatch((0, c.parameterChanged)(n, u));
            },
          },
          [C]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: i },
              a = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: r,
                  scrollTop: o,
                  scrollWidth: s,
                  scrollHeight: l,
                  clientHeight: d,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: g,
                  startsExiting: m,
                  addEndOffset: h,
                  addStartOffset: y,
                  addOffsetValue: I = 0,
                  endOffsetValue: T = 0,
                } = n;
              if (f === u.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? r / s : o / l;
                return (
                  e !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = V(i, E),
                  r = e.getBoundingClientRect(),
                  o = (y ? I : 0) / 100,
                  u = (h ? T : 0) / 100;
                (o = g ? o : 1 - o), (u = m ? u : 1 - u);
                let s = r.top + Math.min(r.height * o, d),
                  f = Math.min(d + (r.top + r.height * u - s), l),
                  p = Math.min(Math.max(0, d - s), f) / f;
                return (
                  p !== a.scrollPercent &&
                    t.dispatch((0, c.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [N]: ef,
          [S]: ef,
          [w]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown && H(e);
            }),
          },
          [L]: {
            ...J,
            handler: eu((e, t) => {
              t.scrollingDown || H(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && H(e), n;
            }),
          },
          [x]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: $(X, (e, t) => (t || H(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: i } = n(7087).IX2EngineActionTypes,
        a = (e = Object.freeze({}), t) =>
          t.type === i ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let i = n(7087),
        a = n(9468),
        r = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: o,
          IX2_SESSION_STOPPED: u,
          IX2_INSTANCE_ADDED: s,
          IX2_INSTANCE_STARTED: c,
          IX2_INSTANCE_REMOVED: l,
          IX2_ANIMATION_FRAME_CHANGED: d,
        } = i.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = a.IX2EasingUtils,
        { RENDER_GENERAL: g } = i.IX2EngineConstants,
        {
          getItemConfigByKey: m,
          getRenderType: h,
          getStyleProp: y,
        } = a.IX2VanillaUtils,
        I = (e, t) => {
          let n,
            i,
            a,
            o,
            {
              position: u,
              parameterId: s,
              actionGroups: c,
              destinationKeys: l,
              smoothing: d,
              restingValue: E,
              actionTypeId: g,
              customEasingFn: h,
              skipMotion: y,
              skipToValue: I,
            } = e,
            { parameters: T } = t.payload,
            b = Math.max(1 - d, 0.01),
            v = T[s];
          null == v && ((b = 1), (v = E));
          let O = f((Math.max(v, 0) || 0) - u),
            _ = y ? I : f(u + O * b),
            A = 100 * _;
          if (_ === u && e.current) return e;
          for (let e = 0, { length: t } = c; e < t; e++) {
            let { keyframe: t, actionItems: r } = c[e];
            if ((0 === e && (n = r[0]), A >= t)) {
              n = r[0];
              let u = c[e + 1],
                s = u && A !== t;
              (i = s ? u.actionItems[0] : null),
                s && ((a = t / 100), (o = (u.keyframe - t) / 100));
            }
          }
          let R = {};
          if (n && !i)
            for (let e = 0, { length: t } = l; e < t; e++) {
              let t = l[e];
              R[t] = m(g, t, n.config);
            }
          else if (n && i && void 0 !== a && void 0 !== o) {
            let e = (_ - a) / o,
              t = p(n.config.easing, e, h);
            for (let e = 0, { length: a } = l; e < a; e++) {
              let a = l[e],
                r = m(g, a, n.config),
                o = (m(g, a, i.config) - r) * t + r;
              R[a] = o;
            }
          }
          return (0, r.merge)(e, { position: _, current: R });
        },
        T = (e, t) => {
          let {
              active: n,
              origin: i,
              start: a,
              immediate: o,
              renderType: u,
              verbose: s,
              actionItem: c,
              destination: l,
              destinationKeys: d,
              pluginDuration: E,
              instanceDelay: m,
              customEasingFn: h,
              skipMotion: y,
            } = e,
            I = c.config.easing,
            { duration: T, delay: b } = c.config;
          null != E && (T = E),
            (b = null != m ? m : b),
            u === g ? (T = 0) : (o || y) && (T = b = 0);
          let { now: v } = t.payload;
          if (n && i) {
            let t = v - (a + b);
            if (s) {
              let t = T + b,
                n = f(Math.min(Math.max(0, (v - a) / t), 1));
              e = (0, r.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / T), 1)),
              o = p(I, n, h),
              u = {},
              c = null;
            return (
              d.length &&
                (c = d.reduce((e, t) => {
                  let n = l[t],
                    a = parseFloat(i[t]) || 0,
                    r = parseFloat(n) - a;
                  return (e[t] = r * o + a), e;
                }, {})),
              (u.current = c),
              (u.position = n),
              1 === n && ((u.active = !1), (u.complete = !0)),
              (0, r.merge)(e, u)
            );
          }
          return e;
        },
        b = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case o:
              return t.payload.ixInstances || Object.freeze({});
            case u:
              return Object.freeze({});
            case s: {
              let {
                  instanceId: n,
                  elementId: i,
                  actionItem: a,
                  eventId: o,
                  eventTarget: u,
                  eventStateKey: s,
                  actionListId: c,
                  groupIndex: l,
                  isCarrier: d,
                  origin: f,
                  destination: p,
                  immediate: g,
                  verbose: m,
                  continuous: I,
                  parameterId: T,
                  actionGroups: b,
                  smoothing: v,
                  restingValue: O,
                  pluginInstance: _,
                  pluginDuration: A,
                  instanceDelay: R,
                  skipMotion: w,
                  skipToValue: N,
                } = t.payload,
                { actionTypeId: S } = a,
                L = h(S),
                C = y(L, S),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: M } = a.config;
              return (0, r.set)(e, n, {
                id: n,
                elementId: i,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: g,
                verbose: m,
                current: null,
                actionItem: a,
                actionTypeId: S,
                eventId: o,
                eventTarget: u,
                eventStateKey: s,
                actionListId: c,
                groupIndex: l,
                renderType: L,
                isCarrier: d,
                styleProp: C,
                continuous: I,
                parameterId: T,
                actionGroups: b,
                smoothing: v,
                restingValue: O,
                pluginInstance: _,
                pluginDuration: A,
                instanceDelay: R,
                skipMotion: w,
                skipToValue: N,
                customEasingFn:
                  Array.isArray(M) && 4 === M.length ? E(M) : void 0,
              });
            }
            case c: {
              let { instanceId: n, time: i } = t.payload;
              return (0, r.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: i,
              });
            }
            case l: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let i = {},
                a = Object.keys(e),
                { length: r } = a;
              for (let t = 0; t < r; t++) {
                let r = a[t];
                r !== n && (i[r] = e[r]);
              }
              return i;
            }
            case d: {
              let n = e,
                i = Object.keys(e),
                { length: a } = i;
              for (let o = 0; o < a; o++) {
                let a = i[o],
                  u = e[a],
                  s = u.continuous ? I : T;
                n = (0, r.set)(n, a, s(u, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: i,
          IX2_SESSION_STOPPED: a,
          IX2_PARAMETER_CHANGED: r,
        } = n(7087).IX2EngineActionTypes,
        o = (e = {}, t) => {
          switch (t.type) {
            case i:
              return t.payload.ixParameters || {};
            case a:
              return {};
            case r: {
              let { key: n, value: i } = t.payload;
              return (e[n] = i), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(9516),
        a = n(4609),
        r = n(628),
        o = n(5862),
        u = n(9468),
        s = n(7718),
        c = n(1540),
        { ixElements: l } = u.IX2ElementsReducer,
        d = (0, i.combineReducers)({
          ixData: a.ixData,
          ixRequest: r.ixRequest,
          ixSession: o.ixSession,
          ixElements: l,
          ixInstances: s.ixInstances,
          ixParameters: c.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_PREVIEW_REQUESTED: r,
          IX2_PLAYBACK_REQUESTED: o,
          IX2_STOP_REQUESTED: u,
          IX2_CLEAR_REQUESTED: s,
        } = i.IX2EngineActionTypes,
        c = { preview: {}, playback: {}, stop: {}, clear: {} },
        l = Object.create(null, {
          [r]: { value: "preview" },
          [o]: { value: "playback" },
          [u]: { value: "stop" },
          [s]: { value: "clear" },
        }),
        d = (e = c, t) => {
          if (t.type in l) {
            let n = [l[t.type]];
            return (0, a.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return m;
          },
        });
      let i = n(7087),
        a = n(1185),
        {
          IX2_SESSION_INITIALIZED: r,
          IX2_SESSION_STARTED: o,
          IX2_TEST_FRAME_RENDERED: u,
          IX2_SESSION_STOPPED: s,
          IX2_EVENT_LISTENER_ADDED: c,
          IX2_EVENT_STATE_CHANGED: l,
          IX2_ANIMATION_FRAME_CHANGED: d,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = i.IX2EngineActionTypes,
        g = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        m = (e = g, t) => {
          switch (t.type) {
            case r: {
              let { hasBoundaryNodes: n, reducedMotion: i } = t.payload;
              return (0, a.merge)(e, { hasBoundaryNodes: n, reducedMotion: i });
            }
            case o:
              return (0, a.set)(e, "active", !0);
            case u: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, a.set)(e, "tick", e.tick + n);
            }
            case s:
              return g;
            case d: {
              let {
                payload: { now: n },
              } = t;
              return (0, a.set)(e, "tick", n);
            }
            case c: {
              let n = (0, a.addLast)(e.eventListeners, t.payload);
              return (0, a.set)(e, "eventListeners", n);
            }
            case l: {
              let { stateKey: n, newState: i } = t.payload;
              return (0, a.setIn)(e, ["eventState", n], i);
            }
            case f: {
              let { actionListId: n, isPlaying: i } = t.payload;
              return (0, a.setIn)(e, ["playbackState", n], i);
            }
            case p: {
              let { width: n, mediaQueries: i } = t.payload,
                r = i.length,
                o = null;
              for (let e = 0; e < r; e++) {
                let { key: t, min: a, max: r } = i[e];
                if (n >= a && n <= r) {
                  o = t;
                  break;
                }
              }
              return (0, a.merge)(e, { viewportWidth: n, mediaQueryKey: o });
            }
            case E:
              return (0, a.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return l;
        },
        createPluginInstance: function () {
          return s;
        },
        getPluginConfig: function () {
          return a;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return r;
        },
        getPluginOrigin: function () {
          return o;
        },
        renderPlugin: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => e.value,
        r = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        o = (e) => e || { value: 0 },
        u = (e) => ({ value: e.value }),
        s = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        c = (e, t, n) => {
          if (!e) return;
          let i = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * i);
        },
        l = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "--wf-rive-fit",
        r = "--wf-rive-alignment",
        o = (e) => document.querySelector(`[data-w-id="${e}"]`),
        u = () => window.Webflow.require("rive"),
        s = (e, t) => e.value.inputs[t],
        c = () => null,
        l = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: i = {} } = t.config.value;
          for (let e in i) null == i[e] && (n[e] = 0);
          return n;
        },
        d = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? o(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let i = u();
          if (!i) return;
          let o = i.getInstance(e),
            s = i.rive.StateMachineInputType,
            { name: c, inputs: l = {} } = n.config.value || {};
          function d(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(c);
              if (null != n) {
                if ((e.isPlaying || e.play(c, !1), a in l || r in l)) {
                  let t = e.layout,
                    n = l[a] ?? t.fit,
                    i = l[r] ?? t.alignment;
                  (n !== t.fit || i !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: i }));
                }
                for (let e in l) {
                  if (e === a || e === r) continue;
                  let i = n.find((t) => t.name === e);
                  if (null != i)
                    switch (i.type) {
                      case s.Boolean:
                        null != l[e] && (i.value = !!l[e]);
                        break;
                      case s.Number: {
                        let n = t[e];
                        null != n && (i.value = n);
                        break;
                      }
                      case s.Trigger:
                        l[e] && i.fire();
                    }
                }
              }
            }
          }
          o?.rive ? d(o.rive) : i.setLoadHandler(e, d);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return u;
        },
        getPluginDestination: function () {
          return d;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return l;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = (e) => document.querySelector(`[data-w-id="${e}"]`),
        r = () => window.Webflow.require("spline"),
        o = (e, t) => e.filter((e) => !t.includes(e)),
        u = (e, t) => e.value[t],
        s = () => null,
        c = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        l = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = o(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = c[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = c[t]), e), {});
        },
        d = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? a(n) : null;
        },
        p = (e, t, n) => {
          let i = r();
          if (!i) return;
          let a = i.getInstance(e),
            o = n.config.target.objectId,
            u = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = o && e.findObjectById(o);
              if (!n) return;
              let { PLUGIN_SPLINE: i } = t;
              null != i.positionX && (n.position.x = i.positionX),
                null != i.positionY && (n.position.y = i.positionY),
                null != i.positionZ && (n.position.z = i.positionZ),
                null != i.rotationX && (n.rotation.x = i.rotationX),
                null != i.rotationY && (n.rotation.y = i.rotationY),
                null != i.rotationZ && (n.rotation.z = i.rotationZ),
                null != i.scaleX && (n.scale.x = i.scaleX),
                null != i.scaleY && (n.scale.y = i.scaleY),
                null != i.scaleZ && (n.scale.z = i.scaleZ);
            };
          a ? u(a.spline) : i.setLoadHandler(e, u);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return l;
        },
        getPluginConfig: function () {
          return o;
        },
        getPluginDestination: function () {
          return c;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return s;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(380),
        o = (e, t) => e.value[t],
        u = () => null,
        s = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            i = t.config.target.objectId,
            a = getComputedStyle(document.documentElement).getPropertyValue(i);
          return null != n.size
            ? { size: parseInt(a, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(a) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, r.normalizeColor)(a)
            : void 0;
        },
        c = (e) => e.value,
        l = () => null,
        d = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: i }) =>
              [e, t, n, i].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: i }) =>
              `rgba(${e}, ${t}, ${n}, ${i})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: i },
              value: { unit: a },
            } = n.config,
            r = t.PLUGIN_VARIABLE,
            o = Object.values(d).find((e) => e.match(r, a));
          o && document.documentElement.style.setProperty(i, o.getValue(r, a));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let i = n(7087),
        a = c(n(7377)),
        r = c(n(2866)),
        o = c(n(2570)),
        u = c(n(1407));
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = s(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
      let l = new Map([
        [i.ActionTypeConsts.PLUGIN_LOTTIE, { ...a }],
        [i.ActionTypeConsts.PLUGIN_SPLINE, { ...r }],
        [i.ActionTypeConsts.PLUGIN_RIVE, { ...o }],
        [i.ActionTypeConsts.PLUGIN_VARIABLE, { ...u }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return T;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return d;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return I;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return m;
        },
        IX2_INSTANCE_REMOVED: function () {
          return y;
        },
        IX2_INSTANCE_STARTED: function () {
          return h;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return g;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return c;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return s;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return a;
        },
        IX2_SESSION_INITIALIZED: function () {
          return r;
        },
        IX2_SESSION_STARTED: function () {
          return o;
        },
        IX2_SESSION_STOPPED: function () {
          return u;
        },
        IX2_STOP_REQUESTED: function () {
          return l;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return O;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return b;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "IX2_RAW_DATA_IMPORTED",
        r = "IX2_SESSION_INITIALIZED",
        o = "IX2_SESSION_STARTED",
        u = "IX2_SESSION_STOPPED",
        s = "IX2_PREVIEW_REQUESTED",
        c = "IX2_PLAYBACK_REQUESTED",
        l = "IX2_STOP_REQUESTED",
        d = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        g = "IX2_PARAMETER_CHANGED",
        m = "IX2_INSTANCE_ADDED",
        h = "IX2_INSTANCE_STARTED",
        y = "IX2_INSTANCE_REMOVED",
        I = "IX2_ELEMENT_STATE_CHANGED",
        T = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        O = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return W;
        },
        BACKGROUND: function () {
          return D;
        },
        BACKGROUND_COLOR: function () {
          return G;
        },
        BAR_DELIMITER: function () {
          return H;
        },
        BORDER_COLOR: function () {
          return U;
        },
        BOUNDARY_SELECTOR: function () {
          return s;
        },
        CHILDREN: function () {
          return $;
        },
        COLON_DELIMITER: function () {
          return Y;
        },
        COLOR: function () {
          return V;
        },
        COMMA_DELIMITER: function () {
          return z;
        },
        CONFIG_UNIT: function () {
          return m;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return c;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return l;
        },
        CONFIG_Z_UNIT: function () {
          return g;
        },
        CONFIG_Z_VALUE: function () {
          return d;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return M;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return F;
        },
        HEIGHT: function () {
          return k;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return Q;
        },
        IX2_ID_DELIMITER: function () {
          return a;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ei;
        },
        RENDER_PLUGIN: function () {
          return er;
        },
        RENDER_STYLE: function () {
          return ea;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return w;
        },
        ROTATE_Z: function () {
          return N;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return O;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return S;
        },
        SKEW_X: function () {
          return L;
        },
        SKEW_Y: function () {
          return C;
        },
        TRANSFORM: function () {
          return h;
        },
        TRANSLATE_3D: function () {
          return b;
        },
        TRANSLATE_X: function () {
          return y;
        },
        TRANSLATE_Y: function () {
          return I;
        },
        TRANSLATE_Z: function () {
          return T;
        },
        WF_PAGE: function () {
          return r;
        },
        WIDTH: function () {
          return x;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return u;
        },
        W_MOD_JS: function () {
          return o;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = "|",
        r = "data-wf-page",
        o = "w-mod-js",
        u = "w-mod-ix",
        s = ".w-dyn-item",
        c = "xValue",
        l = "yValue",
        d = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        g = "zUnit",
        m = "unit",
        h = "transform",
        y = "translateX",
        I = "translateY",
        T = "translateZ",
        b = "translate3d",
        v = "scaleX",
        O = "scaleY",
        _ = "scaleZ",
        A = "scale3d",
        R = "rotateX",
        w = "rotateY",
        N = "rotateZ",
        S = "skew",
        L = "skewX",
        C = "skewY",
        P = "opacity",
        M = "filter",
        F = "font-variation-settings",
        x = "width",
        k = "height",
        G = "backgroundColor",
        D = "background",
        U = "borderColor",
        V = "color",
        B = "display",
        X = "flex",
        j = "willChange",
        W = "AUTO",
        z = ",",
        Y = ":",
        H = "|",
        $ = "CHILDREN",
        Q = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ei = "RENDER_GENERAL",
        ea = "RENDER_STYLE",
        er = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return r;
        },
        ActionTypeConsts: function () {
          return a;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        r = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        ActionTypeConsts: function () {
          return o.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return u;
        },
        IX2EngineConstants: function () {
          return s;
        },
        QuickEffectIds: function () {
          return r.QuickEffectIds;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = c(n(1833), t),
        o = c(n(262), t);
      c(n(8704), t), c(n(3213), t);
      let u = d(n(8023)),
        s = d(n(2686));
      function c(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function l(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (l = function (e) {
          return e ? n : t;
        })(e);
      }
      function d(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = l(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let {
          TRANSFORM_MOVE: i,
          TRANSFORM_SCALE: a,
          TRANSFORM_ROTATE: r,
          TRANSFORM_SKEW: o,
          STYLE_SIZE: u,
          STYLE_FILTER: s,
          STYLE_FONT_VARIATION: c,
        } = n(262).ActionTypeConsts,
        l = { [i]: !0, [a]: !0, [r]: !0, [o]: !0, [u]: !0, [s]: !0, [c]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return r;
        },
        EventBasedOn: function () {
          return o;
        },
        EventContinuousMouseAxes: function () {
          return u;
        },
        EventLimitAffectedElements: function () {
          return s;
        },
        EventTypeConsts: function () {
          return a;
        },
        QuickEffectDirectionConsts: function () {
          return l;
        },
        QuickEffectIds: function () {
          return c;
        },
      };
      for (var i in n)
        Object.defineProperty(t, i, { enumerable: !0, get: n[i] });
      let a = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        r = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        o = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        u = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        s = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        c = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        l = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function i(e) {
        let t,
          i,
          a,
          r = 1,
          o = e.replace(/\s/g, "").toLowerCase(),
          u = ("string" == typeof n[o] ? n[o].toLowerCase() : null) || o;
        if (u.startsWith("#")) {
          let e = u.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (i = parseInt(e[1] + e[1], 16)),
              (a = parseInt(e[2] + e[2], 16)),
              4 === e.length && (r = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (i = parseInt(e.substring(2, 4), 16)),
              (a = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (r = parseInt(e.substring(6, 8), 16) / 255));
        } else if (u.startsWith("rgba")) {
          let e = u.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10)),
            (r = parseFloat(e[3]));
        } else if (u.startsWith("rgb")) {
          let e = u.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (i = parseInt(e[1], 10)),
            (a = parseInt(e[2], 10));
        } else if (u.startsWith("hsla")) {
          let e,
            n,
            o,
            s = u.match(/hsla\(([^)]+)\)/)[1].split(","),
            c = parseFloat(s[0]),
            l = parseFloat(s[1].replace("%", "")) / 100,
            d = parseFloat(s[2].replace("%", "")) / 100;
          r = parseFloat(s[3]);
          let f = (1 - Math.abs(2 * d - 1)) * l,
            p = f * (1 - Math.abs(((c / 60) % 2) - 1)),
            E = d - f / 2;
          c >= 0 && c < 60
            ? ((e = f), (n = p), (o = 0))
            : c >= 60 && c < 120
            ? ((e = p), (n = f), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = f), (o = p))
            : c >= 180 && c < 240
            ? ((e = 0), (n = p), (o = f))
            : c >= 240 && c < 300
            ? ((e = p), (n = 0), (o = f))
            : ((e = f), (n = 0), (o = p)),
            (t = Math.round((e + E) * 255)),
            (i = Math.round((n + E) * 255)),
            (a = Math.round((o + E) * 255));
        } else if (u.startsWith("hsl")) {
          let e,
            n,
            r,
            o = u.match(/hsl\(([^)]+)\)/)[1].split(","),
            s = parseFloat(o[0]),
            c = parseFloat(o[1].replace("%", "")) / 100,
            l = parseFloat(o[2].replace("%", "")) / 100,
            d = (1 - Math.abs(2 * l - 1)) * c,
            f = d * (1 - Math.abs(((s / 60) % 2) - 1)),
            p = l - d / 2;
          s >= 0 && s < 60
            ? ((e = d), (n = f), (r = 0))
            : s >= 60 && s < 120
            ? ((e = f), (n = d), (r = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (n = d), (r = f))
            : s >= 180 && s < 240
            ? ((e = 0), (n = f), (r = d))
            : s >= 240 && s < 300
            ? ((e = f), (n = 0), (r = d))
            : ((e = d), (n = 0), (r = f)),
            (t = Math.round((e + p) * 255)),
            (i = Math.round((n + p) * 255)),
            (a = Math.round((r + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(i) || Number.isNaN(a))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: i, blue: a, alpha: r };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        IX2BrowserSupport: function () {
          return r;
        },
        IX2EasingUtils: function () {
          return u;
        },
        IX2Easings: function () {
          return o;
        },
        IX2ElementsReducer: function () {
          return s;
        },
        IX2VanillaPlugins: function () {
          return c;
        },
        IX2VanillaUtils: function () {
          return l;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = f(n(2662)),
        o = f(n(8686)),
        u = f(n(3767)),
        s = f(n(5861)),
        c = f(n(1799)),
        l = f(n(4124));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var i = { __proto__: null },
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
          if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
            o && (o.get || o.set)
              ? Object.defineProperty(i, r, o)
              : (i[r] = e[r]);
          }
        return (i.default = e), n && n.set(e, i), i;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          ELEMENT_MATCHES: function () {
            return c;
          },
          FLEX_PREFIXED: function () {
            return l;
          },
          IS_BROWSER_ENV: function () {
            return u;
          },
          TRANSFORM_PREFIXED: function () {
            return d;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return s;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(9777)) && i.__esModule ? i : { default: i },
        u = "undefined" != typeof window,
        s = (e, t) => (u ? e() : t),
        c = s(() =>
          (0, o.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        l = s(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        d = s(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let n = t[i] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = d.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          applyEasing: function () {
            return d;
          },
          createBezierEasing: function () {
            return l;
          },
          optimizeFloat: function () {
            return c;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = s(t);
          if (n && n.has(e)) return n.get(e);
          var i = { __proto__: null },
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
              var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
              o && (o.get || o.set)
                ? Object.defineProperty(i, r, o)
                : (i[r] = e[r]);
            }
          return (i.default = e), n && n.set(e, i), i;
        })(n(8686)),
        u = (i = n(1361)) && i.__esModule ? i : { default: i };
      function s(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (s = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t = 5, n = 10) {
        let i = Math.pow(n, t),
          a = Number(Math.round(e * i) / i);
        return Math.abs(a) > 1e-4 ? a : 0;
      }
      function l(e) {
        return (0, u.default)(...e);
      }
      function d(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? c(t > 0 ? n(t) : t)
          : c(t > 0 && e && o[e] ? o[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        a = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return u;
          },
          easeIn: function () {
            return s;
          },
          easeInOut: function () {
            return l;
          },
          easeOut: function () {
            return c;
          },
          inBack: function () {
            return M;
          },
          inCirc: function () {
            return S;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return k;
          },
          inExpo: function () {
            return R;
          },
          inOutBack: function () {
            return x;
          },
          inOutCirc: function () {
            return C;
          },
          inOutCubic: function () {
            return m;
          },
          inOutElastic: function () {
            return D;
          },
          inOutExpo: function () {
            return N;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return I;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return d;
          },
          inQuart: function () {
            return h;
          },
          inQuint: function () {
            return T;
          },
          inSine: function () {
            return O;
          },
          outBack: function () {
            return F;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return L;
          },
          outCubic: function () {
            return g;
          },
          outElastic: function () {
            return G;
          },
          outExpo: function () {
            return w;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return y;
          },
          outQuint: function () {
            return b;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return V;
          },
          swingFromTo: function () {
            return U;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var r in a)
        Object.defineProperty(t, r, { enumerable: !0, get: a[r] });
      let o = (i = n(1361)) && i.__esModule ? i : { default: i },
        u = (0, o.default)(0.25, 0.1, 0.25, 1),
        s = (0, o.default)(0.42, 0, 1, 1),
        c = (0, o.default)(0, 0, 0.58, 1),
        l = (0, o.default)(0.42, 0, 0.58, 1);
      function d(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function g(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function m(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function h(e) {
        return Math.pow(e, 4);
      }
      function y(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function I(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function T(e) {
        return Math.pow(e, 5);
      }
      function b(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function O(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function w(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function N(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function S(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function L(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function C(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function M(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function F(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function x(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            -(
              i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function G(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            i * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function D(e) {
        let t = 1.70158,
          n = 0,
          i = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            i < 1
              ? ((i = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / i)),
            e < 1)
          ? -0.5 *
            (i *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : i *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function U(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function V(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        clearPlugin: function () {
          return g;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return d;
        },
        getPluginOrigin: function () {
          return l;
        },
        isPluginType: function () {
          return u;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(2662),
        o = n(3690);
      function u(e) {
        return o.pluginMethodMap.has(e);
      }
      let s = (e) => (t) => {
          if (!r.IS_BROWSER_ENV) return () => null;
          let n = o.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let i = n[e];
          if (!i) throw Error(`IX2 invalid plugin method: ${e}`);
          return i;
        },
        c = s("getPluginConfig"),
        l = s("getPluginOrigin"),
        d = s("getPluginDuration"),
        f = s("getPluginDestination"),
        p = s("createPluginInstance"),
        E = s("renderPlugin"),
        g = s("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        cleanupHTMLElement: function () {
          return ez;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return ed;
        },
        getActionListProgress: function () {
          return eQ;
        },
        getAffectedElements: function () {
          return eT;
        },
        getComputedStyle: function () {
          return eb;
        },
        getDestinationValues: function () {
          return eS;
        },
        getElementId: function () {
          return eg;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eN;
        },
        getMaxDurationItemIndex: function () {
          return e$;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eL;
        },
        getStyleProp: function () {
          return eC;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return ey;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return em;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return l.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = g(n(4075)),
        o = g(n(1455)),
        u = g(n(5720)),
        s = n(1185),
        c = n(7087),
        l = g(n(7164)),
        d = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function g(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: m,
          TRANSFORM: h,
          TRANSLATE_3D: y,
          SCALE_3D: I,
          ROTATE_X: T,
          ROTATE_Y: b,
          ROTATE_Z: v,
          SKEW: O,
          PRESERVE_3D: _,
          FLEX: A,
          OPACITY: R,
          FILTER: w,
          FONT_VARIATION_SETTINGS: N,
          WIDTH: S,
          HEIGHT: L,
          BACKGROUND_COLOR: C,
          BORDER_COLOR: P,
          COLOR: M,
          CHILDREN: F,
          IMMEDIATE_CHILDREN: x,
          SIBLINGS: k,
          PARENT: G,
          DISPLAY: D,
          WILL_CHANGE: U,
          AUTO: V,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: X,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: W,
          RENDER_GENERAL: z,
          RENDER_STYLE: Y,
          RENDER_PLUGIN: H,
        } = c.IX2EngineConstants,
        {
          TRANSFORM_MOVE: $,
          TRANSFORM_SCALE: Q,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ei,
          STYLE_TEXT_COLOR: ea,
          GENERAL_DISPLAY: er,
          OBJECT_VALUE: eo,
        } = c.ActionTypeConsts,
        eu = (e) => e.trim(),
        es = Object.freeze({ [en]: C, [ei]: P, [ea]: M }),
        ec = Object.freeze({
          [E.TRANSFORM_PREFIXED]: h,
          [C]: m,
          [R]: R,
          [w]: w,
          [S]: S,
          [L]: L,
          [N]: N,
        }),
        el = new Map();
      function ed() {
        el.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eg(e, t) {
        for (let n in e) {
          let i = e[n];
          if (i && i.ref === t) return i.id;
        }
        return "e" + eE++;
      }
      function em({ events: e, actionLists: t, site: n } = {}) {
        let i = (0, o.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          a = n && n.mediaQueries,
          r = [];
        return (
          a
            ? (r = a.map((e) => e.key))
            : ((a = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: i,
              mediaQueries: a,
              mediaQueryKeys: r,
            },
          }
        );
      }
      let eh = (e, t) => e === t;
      function ey({ store: e, select: t, onChange: n, comparator: i = eh }) {
        let { getState: a, subscribe: r } = e,
          o = r(function () {
            let r = t(a());
            if (null == r) return void o();
            i(r, u) || n((u = r), e);
          }),
          u = t(a());
        return o;
      }
      function eI(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: i,
            selectorGuids: a,
            appliesTo: r,
            useEventTarget: o,
          };
        }
        return {};
      }
      function eT({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: i,
        elementApi: a,
      }) {
        let r, o, u;
        if (!a) throw Error("IX2 missing elementApi");
        let { targets: s } = e;
        if (Array.isArray(s) && s.length > 0)
          return s.reduce(
            (e, r) =>
              e.concat(
                eT({
                  config: { target: r },
                  event: t,
                  eventTarget: n,
                  elementRoot: i,
                  elementApi: a,
                })
              ),
            []
          );
        let {
            getValidDocument: l,
            getQuerySelector: d,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: g,
            matchSelector: m,
            elementContains: h,
            isSiblingNode: y,
          } = a,
          { target: I } = e;
        if (!I) return [];
        let {
          id: T,
          objectId: b,
          selector: v,
          selectorGuids: O,
          appliesTo: _,
          useEventTarget: A,
        } = eI(I);
        if (b) return [el.has(b) ? el.get(b) : el.set(b, {}).get(b)];
        if (_ === c.EventAppliesTo.PAGE) {
          let e = l(T);
          return e ? [e] : [];
        }
        let R = (t?.action?.config?.affectedElements ?? {})[T || v] || {},
          w = !!(R.id || R.selector),
          N = t && d(eI(t.target));
        if (
          (w
            ? ((r = R.limitAffectedElements), (o = N), (u = d(R)))
            : (o = u = d({ id: T, selector: v, selectorGuids: O })),
          t && A)
        ) {
          let e = n && (u || !0 === A) ? [n] : f(N);
          if (u) {
            if (A === G) return f(u).filter((t) => e.some((e) => h(t, e)));
            if (A === F) return f(u).filter((t) => e.some((e) => h(e, t)));
            if (A === k) return f(u).filter((t) => e.some((e) => y(e, t)));
          }
          return e;
        }
        return null == o || null == u
          ? []
          : E.IS_BROWSER_ENV && i
          ? f(u).filter((e) => i.contains(e))
          : r === F
          ? f(o, u)
          : r === x
          ? p(f(o)).filter(m(u))
          : r === k
          ? g(f(o)).filter(m(u))
          : f(u);
      }
      function eb({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ei:
          case ea:
          case er:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eO = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = ex[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eA(e, t = {}, n = {}, i, a) {
        let { getStyle: o } = a,
          { actionTypeId: u } = i;
        if ((0, p.isPluginType)(u)) return (0, p.getPluginOrigin)(u)(t[u], i);
        switch (i.actionTypeId) {
          case $:
          case Q:
          case q:
          case K:
            return t[i.actionTypeId] || eM[i.actionTypeId];
          case J:
            return eO(t[i.actionTypeId], i.config.filters);
          case ee:
            return e_(t[i.actionTypeId], i.config.fontVariations);
          case Z:
            return { value: (0, r.default)(parseFloat(o(e, R)), 1) };
          case et: {
            let t,
              a = o(e, S),
              u = o(e, L);
            return {
              widthValue:
                i.config.widthUnit === V
                  ? ev.test(a)
                    ? parseFloat(a)
                    : parseFloat(n.width)
                  : (0, r.default)(parseFloat(a), parseFloat(n.width)),
              heightValue:
                i.config.heightUnit === V
                  ? ev.test(u)
                    ? parseFloat(u)
                    : parseFloat(n.height)
                  : (0, r.default)(parseFloat(u), parseFloat(n.height)),
            };
          }
          case en:
          case ei:
          case ea:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: i,
            }) {
              let a = es[t],
                o = i(e, a),
                u = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eU, eD.test(o) ? o : n[a]).split(B);
              return {
                rValue: (0, r.default)(parseInt(u[0], 10), 255),
                gValue: (0, r.default)(parseInt(u[1], 10), 255),
                bValue: (0, r.default)(parseInt(u[2], 10), 255),
                aValue: (0, r.default)(parseFloat(u[3]), 1),
              };
            })({
              element: e,
              actionTypeId: i.actionTypeId,
              computedStyle: n,
              getStyle: o,
            });
          case er:
            return { value: (0, r.default)(o(e, D), n.display) };
          case eo:
            return t[i.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        ew = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eN = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, u.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, u.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eS({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case $:
          case Q:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: i } = t.config;
            return { xValue: e, yValue: n, zValue: i };
          }
          case et: {
            let { getStyle: i, setStyle: a, getProperty: r } = n,
              { widthUnit: o, heightUnit: u } = t.config,
              { widthValue: s, heightValue: c } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: s, heightValue: c };
            if (o === V) {
              let t = i(e, S);
              a(e, S, ""), (s = r(e, "offsetWidth")), a(e, S, t);
            }
            if (u === V) {
              let t = i(e, L);
              a(e, L, ""), (c = r(e, "offsetHeight")), a(e, L, t);
            }
            return { widthValue: s, heightValue: c };
          }
          case en:
          case ei:
          case ea: {
            let {
              rValue: i,
              gValue: a,
              bValue: r,
              aValue: o,
              globalSwatchId: u,
            } = t.config;
            if (u && u.startsWith("--")) {
              let { getStyle: t } = n,
                i = t(e, u),
                a = (0, f.normalizeColor)(i);
              return {
                rValue: a.red,
                gValue: a.green,
                bValue: a.blue,
                aValue: a.alpha,
              };
            }
            return { rValue: i, gValue: a, bValue: r, aValue: o };
          }
          case J:
            return t.config.filters.reduce(eR, {});
          case ee:
            return t.config.fontVariations.reduce(ew, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eL(e) {
        return /^TRANSFORM_/.test(e)
          ? W
          : /^STYLE_/.test(e)
          ? Y
          : /^GENERAL_/.test(e)
          ? z
          : /^PLUGIN_/.test(e)
          ? H
          : void 0;
      }
      function eC(e, t) {
        return e === Y ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, i, a, r, u, s, c) {
        switch (s) {
          case W:
            var l = e,
              d = t,
              f = n,
              g = a,
              m = u;
            let h = eG
                .map((e) => {
                  let t = eM[e],
                    {
                      xValue: n = t.xValue,
                      yValue: i = t.yValue,
                      zValue: a = t.zValue,
                      xUnit: r = "",
                      yUnit: o = "",
                      zUnit: u = "",
                    } = d[e] || {};
                  switch (e) {
                    case $:
                      return `${y}(${n}${r}, ${i}${o}, ${a}${u})`;
                    case Q:
                      return `${I}(${n}${r}, ${i}${o}, ${a}${u})`;
                    case q:
                      return `${T}(${n}${r}) ${b}(${i}${o}) ${v}(${a}${u})`;
                    case K:
                      return `${O}(${n}${r}, ${i}${o})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: R } = m;
            eV(l, E.TRANSFORM_PREFIXED, m),
              R(l, E.TRANSFORM_PREFIXED, h),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: i }
              ) {
                return (
                  (e === $ && void 0 !== i) ||
                  (e === Q && void 0 !== i) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(g, f) && R(l, E.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case Y:
            return (function (e, t, n, i, a, r) {
              let { setStyle: u } = r;
              switch (i.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: a = "" } = i.config,
                    { widthValue: o, heightValue: s } = n;
                  void 0 !== o &&
                    (t === V && (t = "px"), eV(e, S, r), u(e, S, o + t)),
                    void 0 !== s &&
                      (a === V && (a = "px"), eV(e, L, r), u(e, L, s + a));
                  break;
                }
                case J:
                  var s = i.config;
                  let c = (0, o.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ek(n, s)})`,
                      ""
                    ),
                    { setStyle: l } = r;
                  eV(e, w, r), l(e, w, c);
                  break;
                case ee:
                  i.config;
                  let d = (0, o.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = r;
                  eV(e, N, r), f(e, N, d);
                  break;
                case en:
                case ei:
                case ea: {
                  let t = es[i.actionTypeId],
                    a = Math.round(n.rValue),
                    o = Math.round(n.gValue),
                    s = Math.round(n.bValue),
                    c = n.aValue;
                  eV(e, t, r),
                    u(
                      e,
                      t,
                      c >= 1
                        ? `rgb(${a},${o},${s})`
                        : `rgba(${a},${o},${s},${c})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = i.config;
                  eV(e, a, r), u(e, a, n.value + t);
                }
              }
            })(e, 0, n, a, r, u);
          case z:
            var C = e,
              P = a,
              M = u;
            let { setStyle: F } = M;
            if (P.actionTypeId === er) {
              let { value: e } = P.config;
              F(C, D, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case H: {
            let { actionTypeId: e } = a;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(c, t, a);
          }
        }
      }
      let eM = {
          [$]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [Q]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eF = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        ex = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ek = (e, t) => {
          let n = (0, u.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eG = Object.keys(eM),
        eD = /^rgb/,
        eU = RegExp("rgba?\\(([^)]+)\\)");
      function eV(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        if (!o) return void r(e, U, i);
        let u = o.split(B).map(eu);
        -1 === u.indexOf(i) && r(e, U, u.concat(i).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let i = ec[t];
        if (!i) return;
        let { getStyle: a, setStyle: r } = n,
          o = a(e, U);
        o &&
          -1 !== o.indexOf(i) &&
          r(
            e,
            U,
            o
              .split(B)
              .map(eu)
              .filter((e) => e !== i)
              .join(B)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: i = {}, actionLists: a = {} } = n;
        Object.keys(i).forEach((e) => {
          let n = i[e],
            { config: r } = n.action,
            { actionListId: o } = r,
            u = a[o];
          u && ej({ actionList: u, event: n, elementApi: t });
        }),
          Object.keys(a).forEach((e) => {
            ej({ actionList: a[e], elementApi: t });
          });
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e;
        i &&
          i.forEach((e) => {
            eW({ actionGroup: e, event: t, elementApi: n });
          }),
          a &&
            a.forEach((e) => {
              let { continuousActionGroups: i } = e;
              i.forEach((e) => {
                eW({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eW({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: i } = e;
        i.forEach((e) => {
          let i,
            { actionTypeId: a, config: r } = e;
          (i = (0, p.isPluginType)(a)
            ? (t) => (0, p.clearPlugin)(a)(t, e)
            : eY({ effect: eH, actionTypeId: a, elementApi: n })),
            eT({ config: r, event: t, elementApi: n }).forEach(i);
        });
      }
      function ez(e, t, n) {
        let { setStyle: i, getStyle: a } = n,
          { actionTypeId: r } = t;
        if (r === et) {
          let { config: n } = t;
          n.widthUnit === V && i(e, S, ""), n.heightUnit === V && i(e, L, "");
        }
        a(e, U) && eY({ effect: eB, actionTypeId: r, elementApi: n })(e);
      }
      let eY =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (i) => {
          switch (t) {
            case $:
            case Q:
            case q:
            case K:
              e(i, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(i, w, n);
              break;
            case ee:
              e(i, N, n);
              break;
            case Z:
              e(i, R, n);
              break;
            case et:
              e(i, S, n), e(i, L, n);
              break;
            case en:
            case ei:
            case ea:
              e(i, es[t], n);
              break;
            case er:
              e(i, D, n);
          }
        };
      function eH(e, t, n) {
        let { setStyle: i } = n;
        eB(e, t, n),
          i(e, t, ""),
          t === E.TRANSFORM_PREFIXED && i(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function e$(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, i) => {
            let { config: a } = e,
              r = a.delay + a.duration;
            r >= t && ((t = r), (n = i));
          }),
          n
        );
      }
      function eQ(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: i } = e,
          { actionItem: a, verboseTimeElapsed: r = 0 } = t,
          o = 0,
          u = 0;
        return (
          n.forEach((e, t) => {
            if (i && 0 === t) return;
            let { actionItems: n } = e,
              s = n[e$(n)],
              { config: c, actionTypeId: l } = s;
            a.id === s.id && (u = o + r);
            let d = eL(l) === z ? 0 : c.duration;
            o += c.delay + d;
          }),
          o > 0 ? (0, d.optimizeFloat)(u / o) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: i, continuousParameterGroups: a } = e,
          r = [],
          o = (e) => (
            r.push((0, s.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          i && i.some(({ actionItems: e }) => e.some(o)),
          a &&
            a.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(o));
            }),
          (0, s.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: r }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === c.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === c.EventBasedOn.ELEMENT || null == t)) ||
          (e === c.EventTypeConsts.MOUSE_MOVE && t === c.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, l.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: i = "" } = e;
        return t + j + n + j + i;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let i = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let i = Object.keys(e),
          a = Object.keys(t);
        if (i.length !== a.length) return !1;
        for (let a = 0; a < i.length; a++)
          if (!Object.hasOwn(t, i[a]) || !n(e[i[a]], t[i[a]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = {
        createElementState: function () {
          return O;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var a in i)
        Object.defineProperty(t, a, { enumerable: !0, get: i[a] });
      let r = n(1185),
        o = n(7087),
        {
          HTML_ELEMENT: u,
          PLAIN_OBJECT: s,
          ABSTRACT_NODE: c,
          CONFIG_X_VALUE: l,
          CONFIG_Y_VALUE: d,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: g,
          CONFIG_Z_UNIT: m,
          CONFIG_UNIT: h,
        } = o.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: y,
          IX2_INSTANCE_ADDED: I,
          IX2_ELEMENT_STATE_CHANGED: T,
        } = o.IX2EngineActionTypes,
        b = {},
        v = (e = b, t = {}) => {
          switch (t.type) {
            case y:
              return b;
            case I: {
              let {
                  elementId: n,
                  element: i,
                  origin: a,
                  actionItem: o,
                  refType: u,
                } = t.payload,
                { actionTypeId: s } = o,
                c = e;
              return (
                (0, r.getIn)(c, [n, i]) !== i && (c = O(c, i, u, n, o)),
                _(c, n, s, a, o)
              );
            }
            case T: {
              let {
                elementId: n,
                actionTypeId: i,
                current: a,
                actionItem: r,
              } = t.payload;
              return _(e, n, i, a, r);
            }
            default:
              return e;
          }
        };
      function O(e, t, n, i, a) {
        let o =
          n === s ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [i], { id: i, ref: t, refId: o, refType: n });
      }
      function _(e, t, n, i, a) {
        let o = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let i = n[0],
              a = n[1],
              r = t[i],
              o = t[a];
            return null != r && null != o && (e[a] = o), e;
          }, {});
        })(a);
        return (0, r.mergeIn)(e, [t, "refState", n], i, o);
      }
      let A = [
        [l, E],
        [d, g],
        [f, m],
        [p, h],
      ];
    },
    2202: function () {
      Webflow.require("ix2").init({
        events: {
          e: {
            id: "e",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|7d9c7c69-b7de-a8de-1957-98a43ba17f90",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|7d9c7c69-b7de-a8de-1957-98a43ba17f90",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19522811fa3,
          },
          "e-2": {
            id: "e-2",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|7d9c7c69-b7de-a8de-1957-98a43ba17f92",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|7d9c7c69-b7de-a8de-1957-98a43ba17f92",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19522811fa3,
          },
          "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-4",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|b21c4284-f672-c2b2-7be7-925adc0468a7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|b21c4284-f672-c2b2-7be7-925adc0468a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19212f1271a,
          },
          "e-5": {
            id: "e-5",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-6",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".ix_marquee-vertical-up",
              originalId:
                "6872c6928b459659a571e64b|ae5830f6-7c57-7ebd-6d80-dc81e7970dee",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ix_marquee-vertical-up",
                originalId:
                  "6872c6928b459659a571e64b|ae5830f6-7c57-7ebd-6d80-dc81e7970dee",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192e46bd9fe,
          },
          "e-6": {
            id: "e-6",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-5",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".ix_marquee-vertical-up",
              originalId:
                "6872c6928b459659a571e64b|ae5830f6-7c57-7ebd-6d80-dc81e7970dee",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ix_marquee-vertical-up",
                originalId:
                  "6872c6928b459659a571e64b|ae5830f6-7c57-7ebd-6d80-dc81e7970dee",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192e46bd9fe,
          },
          "e-9": {
            id: "e-9",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19801535924,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: { actionListId: "a", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198015ddade,
          },
          "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198015fa8d4,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-8",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-8-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x198016106d9,
          },
          "e-18": {
            id: "e-18",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1983c18c3bc,
          },
          "e-21": {
            id: "e-21",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-22" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x1983c18c3bc,
          },
          "e-23": {
            id: "e-23",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-10",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6872c6928b459659a571e64b|19bf1abf-5390-a2ff-ab0d-fd536ce71fe8",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|19bf1abf-5390-a2ff-ab0d-fd536ce71fe8",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-10-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !0,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1946fc25d8e,
          },
          "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1946ea9a68f,
          },
          "e-25": {
            id: "e-25",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-12",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".ix_card-rotate-left",
              originalId:
                "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".ix_card-rotate-left",
                originalId:
                  "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-12-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1946ea4c326,
          },
          "e-26": {
            id: "e-26",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3d7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3d7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1946eb920dc,
          },
          "e-27": {
            id: "e-27",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-11",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3ed",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3ed",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-11-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1946eb9b279,
          },
          "e-28": {
            id: "e-28",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-13",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|b24f8c86-ea6a-f662-ceef-58f2e6253fd5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|b24f8c86-ea6a-f662-ceef-58f2e6253fd5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-13-p",
                smoothing: 80,
                startsEntering: !1,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !0,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193d32bb99e,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-14",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium"],
            target: {
              id: "6872c6928b459659a571e64b|c244b9d6-2e13-8981-76a1-cd3c8f4baf3c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|c244b9d6-2e13-8981-76a1-cd3c8f4baf3c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-14-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x193d9262e85,
          },
          "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-15",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-15-p",
                smoothing: 63,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1983f6c3fd3,
          },
          "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-16",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-16-p",
                smoothing: 50,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x1983f6dfe83,
          },
          "e-41": {
            id: "e-41",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-42",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19840fe42ba,
          },
          "e-45": {
            id: "e-45",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-46",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501dedf",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501dedf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ec164e7,
          },
          "e-47": {
            id: "e-47",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-48",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501dee0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501dee0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ec164e7,
          },
          "e-49": {
            id: "e-49",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-50",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501df78",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501df78",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ed8bb16,
          },
          "e-51": {
            id: "e-51",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-19",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-52",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|9e198b57-b469-1483-1bd3-3c9359b31502",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|9e198b57-b469-1483-1bd3-3c9359b31502",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1984ed96216,
          },
          "e-55": {
            id: "e-55",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-56",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b|08efddca-1560-1109-9b1a-bcf7476828c1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b|08efddca-1560-1109-9b1a-bcf7476828c1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985ba42532,
          },
          "e-59": {
            id: "e-59",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                playInReverse: !1,
                autoStopEventId: "e-60",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e63b|6e5c8885-3f9a-fc38-093e-237f5800952d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e63b|6e5c8885-3f9a-fc38-093e-237f5800952d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19527f9347d,
          },
          "e-60": {
            id: "e-60",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                playInReverse: !1,
                autoStopEventId: "e-59",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e63b|6e5c8885-3f9a-fc38-093e-237f5800952d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e63b|6e5c8885-3f9a-fc38-093e-237f5800952d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19527f9347d,
          },
          "e-61": {
            id: "e-61",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_OPEN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                playInReverse: !1,
                autoStopEventId: "e-62",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "866965d9-c1a8-89b2-0bc8-d39bd9a28eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "866965d9-c1a8-89b2-0bc8-d39bd9a28eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e9861fc,
          },
          "e-62": {
            id: "e-62",
            name: "",
            animationType: "preset",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                playInReverse: !1,
                autoStopEventId: "e-61",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "866965d9-c1a8-89b2-0bc8-d39bd9a28eac",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "866965d9-c1a8-89b2-0bc8-d39bd9a28eac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1985e9861fc,
          },
          "e-80": {
            id: "e-80",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-79",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "6872c6928b459659a571e64b",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "6872c6928b459659a571e64b",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x198882826fe,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "[Utility] Parallax Speed -10%",
            continuousParameterGroups: [
              {
                id: "a-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: { useEventTarget: !0, id: null },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 10,
                    actionItems: [
                      {
                        id: "a-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|c65ad343-75c1-874f-ab54-a53df7d86226",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: { useEventTarget: !0, id: null },
                          yValue: 10,
                          xUnit: "PX",
                          yUnit: "vh",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x191946344a2,
          },
          "a-2": {
            id: "a-2",
            title: "[Intro] Fade Slide Up",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-1-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688c",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-1-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688c",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-2-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688d",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-2-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688d",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-3-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688e",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-3-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688e",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-7",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-4-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688f",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-4-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688f",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-9",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-5-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046890",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-10",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-5-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046890",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-6-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046891",
                        ],
                      },
                      yValue: 5,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-6-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046891",
                        ],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-13",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-1-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688c",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-14",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-1-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688c",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-15",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 200,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-2-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688d",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 200,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-2-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688d",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-3-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688e",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-18",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 400,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-3-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688e",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-19",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-4-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688f",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-20",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-4-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc04688f",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-21",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-5-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046890",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-22",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 800,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-5-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046890",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-2-n-23",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-6-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046891",
                        ],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-2-n-24",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 1e3,
                      easing: "easeOut",
                      duration: 400,
                      target: {
                        selector:
                          ".ix_hero-intro-slide-up.is-step-6-hero-intro-slide-up",
                        selectorGuids: [
                          "1920696a-f2ec-58ad-9d36-36ee00da6626",
                          "b21c4284-f672-c2b2-7be7-925adc046891",
                        ],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191e4274e7c,
          },
          "a-3": {
            id: "a-3",
            title: "[Marquee] Up Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { useEventTarget: !0, id: null },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 2e4,
                      target: { useEventTarget: !0, id: null },
                      yValue: -100,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { useEventTarget: !0, id: null },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191e1a9bebc,
          },
          "a-4": {
            id: "a-4",
            title: "[Marquee] Up Loop Stop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: { useEventTarget: !0, id: null },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191e1a9bebc,
          },
          "a-15": {
            id: "a-15",
            title: "Section 3",
            continuousParameterGroups: [
              {
                id: "a-15-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 14,
                    actionItems: [
                      {
                        id: "a-15-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 26,
                    actionItems: [
                      {
                        id: "a-15-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|38bb3814-44fa-269f-7181-ff04938d00b0",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1983f6c5585,
          },
          "a-8": {
            id: "a-8",
            title: "Section 2",
            continuousParameterGroups: [
              {
                id: "a-8-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-8-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|5f50925b-fcbb-c410-e193-1e1ed8030c5f",
                          },
                          xValue: -500,
                          xUnit: "px",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 8,
                    actionItems: [
                      {
                        id: "a-8-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|5f50925b-fcbb-c410-e193-1e1ed8030c5f",
                          },
                          xValue: 0,
                          yValue: 0,
                          zValue: 0,
                          xUnit: "px",
                          yUnit: "px",
                          zUnit: "px",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x198015fb4fb,
          },
          "a-10": {
            id: "a-10",
            title: "[Card] Change Width",
            continuousParameterGroups: [
              {
                id: "a-10-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 60,
                    actionItems: [
                      {
                        id: "a-10-n",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 100, unit: "%" },
                          target: {
                            objectId:
                              "@var_variable-4680e5b9-4eae-98c3-2be4-b8523afc917e",
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|19bf1abf-5390-a2ff-ab0d-fd536ce71fe7",
                          },
                        },
                      },
                      {
                        id: "a-10-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-change-side-content",
                            selectorGuids: [
                              "19bf1abf-5390-a2ff-ab0d-fd536ce71fc0",
                            ],
                          },
                          xValue: 30,
                          xUnit: "vw",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 75,
                    actionItems: [
                      {
                        id: "a-10-n-3",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-change-width-background",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6671",
                            ],
                          },
                          widthValue: 100,
                          heightValue: 100,
                          widthUnit: "vw",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-10-n-4",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-change-side-content",
                            selectorGuids: [
                              "19bf1abf-5390-a2ff-ab0d-fd536ce71fc0",
                            ],
                          },
                          xValue: 0,
                          yValue: null,
                          xUnit: "vw",
                          yUnit: "vw",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-10-n-5",
                        actionTypeId: "PLUGIN_VARIABLE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          value: { size: 50, unit: "%" },
                          target: {
                            objectId:
                              "@var_variable-4680e5b9-4eae-98c3-2be4-b8523afc917e",
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|19bf1abf-5390-a2ff-ab0d-fd536ce71fe7",
                          },
                        },
                      },
                      {
                        id: "a-10-n-6",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-change-width-background",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6671",
                            ],
                          },
                          widthValue: 10,
                          heightValue: 10,
                          widthUnit: "vw",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1946f8fa5d3,
          },
          "a-11": {
            id: "a-11",
            title: "[Utility] Rotate from Right",
            continuousParameterGroups: [
              {
                id: "a-11-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-11-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
                          },
                          xValue: 70,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
                          },
                          zValue: 30,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-11-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-11-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3bf",
                          },
                          zValue: 0,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1946ea4d7a8,
          },
          "a-12": {
            id: "a-12",
            title: "[Utility] Rotate from Left",
            continuousParameterGroups: [
              {
                id: "a-12-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-12-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
                          },
                          xValue: -70,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-12-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
                          },
                          zValue: -30,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 40,
                    actionItems: [
                      {
                        id: "a-12-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
                          },
                          xValue: 0,
                          xUnit: "%",
                          yUnit: "PX",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-12-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: !0,
                            id: "6872c6928b459659a571e64b|2c5a29d3-efaf-ac58-6a87-cde79059f3cb",
                          },
                          zValue: 0,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1946ea4d7a8,
          },
          "a-13": {
            id: "a-13",
            title: "[Sticky] Full Screen Overlay",
            continuousParameterGroups: [
              {
                id: "a-13-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-13-n",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_full-screen-background",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6665",
                            ],
                          },
                          widthValue: 20,
                          heightValue: 20,
                          widthUnit: "vw",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-13-n-2",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 51,
                    actionItems: [
                      {
                        id: "a-13-n-3",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 1,
                          yValue: 1,
                          locked: !0,
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-13-n-4",
                        actionTypeId: "STYLE_SIZE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_full-screen-background",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6665",
                            ],
                          },
                          widthValue: 100,
                          heightValue: 100,
                          widthUnit: "vw",
                          heightUnit: "vh",
                          locked: !1,
                        },
                      },
                      {
                        id: "a-13-n-5",
                        actionTypeId: "TRANSFORM_SCALE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {},
                          xValue: 0.6,
                          yValue: 0.6,
                          locked: !0,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d32c16d9,
          },
          "a-14": {
            id: "a-14",
            title: "[Card] Deck Unstack 3 Cards",
            continuousParameterGroups: [
              {
                id: "a-14-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-14-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          xValue: 35,
                          yValue: -3,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-2",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          zValue: -3,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-14-n-3",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          xValue: -35,
                          yValue: -3,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-4",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          zValue: 3,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 50,
                    actionItems: [
                      {
                        id: "a-14-n-5",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-6",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          zValue: -9,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-14-n-7",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          xValue: 0,
                          yValue: 0,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-8",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          zValue: 9,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-14-n-9",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          xValue: -10,
                          yValue: 3,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-10",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-1",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da6668",
                            ],
                          },
                          zValue: -9,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                      {
                        id: "a-14-n-11",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          xValue: 10,
                          yValue: 3,
                          xUnit: "%",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                      {
                        id: "a-14-n-12",
                        actionTypeId: "TRANSFORM_ROTATE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".ix_card-stack-3",
                            selectorGuids: [
                              "1920696a-f2ec-58ad-9d36-36ee00da666a",
                            ],
                          },
                          zValue: 9,
                          xUnit: "DEG",
                          yUnit: "DEG",
                          zUnit: "deg",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x193d926c96b,
          },
          "a-16": {
            id: "a-16",
            title: "Section 4",
            continuousParameterGroups: [
              {
                id: "a-16-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 28,
                    actionItems: [
                      {
                        id: "a-16-n",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|46ac3d76-97dc-a1c1-1679-12633f47bf75",
                          },
                          value: 0,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 37,
                    actionItems: [
                      {
                        id: "a-16-n-3",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|46ac3d76-97dc-a1c1-1679-12633f47bf75",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-16-n-2",
                        actionTypeId: "STYLE_OPACITY",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            id: "6872c6928b459659a571e64b|46ac3d76-97dc-a1c1-1679-12633f47bf75",
                          },
                          value: 1,
                          unit: "",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x1983f6e10cc,
          },
          "a-19": {
            id: "a-19",
            title: "Modal/Close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-19-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".div-block-3",
                        selectorGuids: ["3de3277f-581e-7407-5b45-95f725c548f5"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19840dbf8d9,
          },
          "a-20": {
            id: "a-20",
            title: "Modal/Open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501deda",
                      },
                      value: "block",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-20-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuad",
                      duration: 500,
                      target: {
                        id: "6872c6928b459659a571e64b|bfe45898-9d78-e50f-5d15-651f6501deda",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19840dc87e6,
          },
          "a-26": {
            id: "a-26",
            title: "[Nav] Full Page - Open 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ix_nav-cover",
                        selectorGuids: ["1920696a-f2ec-58ad-9d36-36ee00da6679"],
                      },
                      xValue: null,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-26-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "outSine",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ix_nav-cover",
                        selectorGuids: ["1920696a-f2ec-58ad-9d36-36ee00da6679"],
                      },
                      xValue: null,
                      yValue: 0,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x194d1e8f5a9,
          },
          "a-27": {
            id: "a-27",
            title: "[Nav] Full Page - Close 3",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "easeOut",
                      duration: 300,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".ix_nav-cover",
                        selectorGuids: ["1920696a-f2ec-58ad-9d36-36ee00da6679"],
                      },
                      xValue: null,
                      yValue: 1,
                      locked: !1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x194d1e8f5a9,
          },
          "a-29": {
            id: "a-29",
            title: "Ball Loading",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "6872c6928b459659a571e64b|ef53e78c-7af4-2f7e-b494-4e716fe46c7a",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 1e3,
                      easing: "",
                      duration: 0,
                      target: {
                        id: "6872c6928b459659a571e64b|ef53e78c-7af4-2f7e-b494-4e716fe46c7a",
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19888286b73,
          },
          growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);
