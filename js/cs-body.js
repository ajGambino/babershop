var _____WB$wombat$assign$function_____ = function(name) {
  return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function(obj) {
      this.__WB_source = obj;
      return this;
  }
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  var csBody = function(e) {
      var t = {};
      function n(i) {
          if (t[i]) {
              return t[i].exports
          }
          var r = t[i] = {
              i: i,
              l: false,
              exports: {}
          };
          e[i].call(r.exports, r, r.exports, n);
          r.l = true;
          return r.exports
      }
      n.m = e;
      n.c = t;
      n.d = function(e, t, i) {
          if (!n.o(e, t)) {
              Object.defineProperty(e, t, {
                  configurable: false,
                  enumerable: true,
                  get: i
              })
          }
      }
      ;
      n.n = function(e) {
          var t = e && e.__esModule ? function t() {
              return e["default"]
          }
          : function t() {
              return e
          }
          ;
          n.d(t, "a", t);
          return t
      }
      ;
      n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }
      ;
      n.p = "";
      return n(n.s = 53)
  }([function(e, t) {
      e.exports = window.jQuery
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      t.default = function(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          if (!n.handle) {
              n.handle = e
          }
          (0,
          r.default)('[data-x-element="' + e + '"]', function(e) {
              try {
                  return t.call(e, JSON.parse(e.getAttribute("data-x-params")) || {})
              } catch (t) {
                  console.warn("Unable to render element", t, e)
              }
          }, n)
      }
      ;
      var i = n(14);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
  }
  , function(e, t) {
      var n = e.exports = {
          version: "2.5.3"
      };
      if (typeof __e == "number")
          __e = n
  }
  , function(e, t, n) {
      var i = n(29)("wks");
      var r = n(20);
      var a = n(4).Symbol;
      var o = typeof a == "function";
      var s = e.exports = function(e) {
          return i[e] || (i[e] = o && a[e] || (o ? a : r)("Symbol." + e))
      }
      ;
      s.store = i
  }
  , function(e, t) {
      var n = e.exports = typeof window != "undefined" && window.Math == Math ? window : typeof self != "undefined" && self.Math == Math ? self : Function("return this")();
      if (typeof __g == "number")
          __g = n
  }
  , function(e, t, n) {
      var i = n(15);
      var r = n(40);
      var a = n(26);
      var o = Object.defineProperty;
      t.f = n(8) ? Object.defineProperty : function e(t, n, s) {
          i(t);
          n = a(n, true);
          i(s);
          if (r)
              try {
                  return o(t, n, s)
              } catch (e) {}
          if ("get"in s || "set"in s)
              throw TypeError("Accessors not supported!");
          if ("value"in s)
              t[n] = s.value;
          return t
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      n(62);
      function i(e, t, n) {
          var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          new window.Waypoint({
              element: e,
              handler: function n() {
                  t.call(e);
                  if (i) {
                      this.destroy()
                  }
              },
              offset: n
          })
      }
      t.default = i
  }
  , function(e, t, n) {
      var i = n(4);
      var r = n(2);
      var a = n(39);
      var o = n(11);
      var s = "prototype";
      var l = function(e, t, n) {
          var u = e & l.F;
          var c = e & l.G;
          var f = e & l.S;
          var d = e & l.P;
          var v = e & l.B;
          var h = e & l.W;
          var p = c ? r : r[t] || (r[t] = {});
          var m = p[s];
          var g = c ? i : f ? i[t] : (i[t] || {})[s];
          var y, w, b;
          if (c)
              n = t;
          for (y in n) {
              w = !u && g && g[y] !== undefined;
              if (w && y in p)
                  continue;
              b = w ? g[y] : n[y];
              p[y] = c && typeof g[y] != "function" ? n[y] : v && w ? a(b, i) : h && g[y] == b ? function(e) {
                  var t = function(t, n, i) {
                      if (this instanceof e) {
                          switch (arguments.length) {
                          case 0:
                              return new e;
                          case 1:
                              return new e(t);
                          case 2:
                              return new e(t,n)
                          }
                          return new e(t,n,i)
                      }
                      return e.apply(this, arguments)
                  };
                  t[s] = e[s];
                  return t
              }(b) : d && typeof b == "function" ? a(Function.call, b) : b;
              if (d) {
                  (p.virtual || (p.virtual = {}))[y] = b;
                  if (e & l.R && m && !m[y])
                      o(m, y, b)
              }
          }
      };
      l.F = 1;
      l.G = 2;
      l.S = 4;
      l.P = 8;
      l.B = 16;
      l.W = 32;
      l.U = 64;
      l.R = 128;
      e.exports = l
  }
  , function(e, t, n) {
      e.exports = !n(12)(function() {
          return Object.defineProperty({}, "a", {
              get: function() {
                  return 7
              }
          }).a != 7
      })
  }
  , function(e, t) {
      var n = {}.hasOwnProperty;
      e.exports = function(e, t) {
          return n.call(e, t)
      }
  }
  , function(e, t, n) {
      var i = n(45);
      var r = n(24);
      e.exports = function(e) {
          return i(r(e))
      }
  }
  , function(e, t, n) {
      var i = n(5);
      var r = n(17);
      e.exports = n(8) ? function(e, t, n) {
          return i.f(e, t, r(1, n))
      }
      : function(e, t, n) {
          e[t] = n;
          return e
      }
  }
  , function(e, t) {
      e.exports = function(e) {
          try {
              return !!e()
          } catch (e) {
              return true
          }
      }
  }
  , function(e, t, n) {
      var i = n(44);
      var r = n(30);
      e.exports = Object.keys || function e(t) {
          return i(t, r)
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(22);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var o = false;
      var s = null;
      var l = [];
      var u = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
          var t = (this.document || this.ownerDocument).querySelectorAll(e)
            , n = t.length;
          while (--n >= 0 && t.item(n) !== this) {}
          return n > -1
      }
      ;
      function c(e, t) {
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {}
            , i = n.init
            , r = n.debounced
            , a = r === undefined ? function() {}
          : r
            , s = n.debounceDelay
            , u = s === undefined ? 0 : s
            , c = n.handle
            , d = c === undefined ? "" : c;
          var h = function e() {};
          if ("function" === typeof i) {
              h = function e() {
                  if (!i._everinitCalled) {
                      i._everinitCalled = true;
                      i()
                  }
              }
          }
          var p = {
              selectors: "string" === typeof e ? [e] : e,
              debounced: v(function() {
                  h();
                  a()
              }, u),
              handler: t,
              handle: d
          };
          l.push(p);
          if (o) {
              f(p)
          }
      }
      function f(e) {
          var t = e.selectors
            , n = e.handler
            , i = e.debounced
            , a = e.handle;
          t.forEach(function(e) {
              return [].concat((0,
              r.default)(window.document.querySelectorAll(e))).forEach(d(n, a))
          });
          i()
      }
      function d(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
          return function(n) {
              if (!n.__everinit || !n.__everinit[t]) {
                  e.call(window, n)
              }
              if (t) {
                  if (!n.__everinit) {
                      n.__everinit = {}
                  }
                  n.__everinit[t] = true
              }
          }
      }
      window.document.addEventListener("DOMContentLoaded", function() {
          l.forEach(f);
          s = new MutationObserver(function(e) {
              e.reduce(function(e, t) {
                  for (var n = 0; n < t.addedNodes.length; n++) {
                      if (1 === t.addedNodes[n].nodeType) {
                          e.push(t.addedNodes[n])
                      }
                  }
                  return e
              }, []).forEach(function e(t) {
                  if (t.children && t.children.length > 0) {
                      for (var n = 0; n < t.children.length; n++) {
                          e(t.children[n])
                      }
                  }
                  l.forEach(function(e) {
                      var n = e.selectors
                        , i = e.handler
                        , r = e.debounced
                        , a = e.handle;
                      n.forEach(function(e) {
                          if (u.call(t, e)) {
                              d(i, a)(t);
                              r()
                          }
                      })
                  })
              })
          }
          );
          s.observe(window.document.body, {
              childList: true,
              subtree: true
          });
          o = true
      });
      function v(e, t) {
          var n = void 0;
          return function() {
              var i = this
                , r = arguments;
              clearTimeout(n);
              n = setTimeout(function() {
                  n = null;
                  e.apply(i, r)
              }, t)
          }
      }
      t.default = c
  }
  , function(e, t, n) {
      var i = n(16);
      e.exports = function(e) {
          if (!i(e))
              throw TypeError(e + " is not an object!");
          return e
      }
  }
  , function(e, t) {
      e.exports = function(e) {
          return typeof e === "object" ? e !== null : typeof e === "function"
      }
  }
  , function(e, t) {
      e.exports = function(e, t) {
          return {
              enumerable: !(e & 1),
              configurable: !(e & 2),
              writable: !(e & 4),
              value: t
          }
      }
  }
  , function(e, t) {
      e.exports = {}
  }
  , function(e, t) {
      t.f = {}.propertyIsEnumerable
  }
  , function(e, t) {
      var n = 0;
      var i = Math.random();
      e.exports = function(e) {
          return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + i).toString(36))
      }
  }
  , function(e, t, n) {
      var i = n(24);
      e.exports = function(e) {
          return Object(i(e))
      }
  }
  , function(e, t, n) {
      "use strict";
      t.__esModule = true;
      var i = n(63);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      t.default = function(e) {
          if (Array.isArray(e)) {
              for (var t = 0, n = Array(e.length); t < e.length; t++) {
                  n[t] = e[t]
              }
              return n
          } else {
              return (0,
              r.default)(e)
          }
      }
  }
  , function(e, t) {
      var n = Math.ceil;
      var i = Math.floor;
      e.exports = function(e) {
          return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
      }
  }
  , function(e, t) {
      e.exports = function(e) {
          if (e == undefined)
              throw TypeError("Can't call method on  " + e);
          return e
      }
  }
  , function(e, t) {
      e.exports = true
  }
  , function(e, t, n) {
      var i = n(16);
      e.exports = function(e, t) {
          if (!i(e))
              return e;
          var n, r;
          if (t && typeof (n = e.toString) == "function" && !i(r = n.call(e)))
              return r;
          if (typeof (n = e.valueOf) == "function" && !i(r = n.call(e)))
              return r;
          if (!t && typeof (n = e.toString) == "function" && !i(r = n.call(e)))
              return r;
          throw TypeError("Can't convert object to primitive value")
      }
  }
  , function(e, t) {
      var n = {}.toString;
      e.exports = function(e) {
          return n.call(e).slice(8, -1)
      }
  }
  , function(e, t, n) {
      var i = n(29)("keys");
      var r = n(20);
      e.exports = function(e) {
          return i[e] || (i[e] = r(e))
      }
  }
  , function(e, t, n) {
      var i = n(4);
      var r = "__core-js_shared__";
      var a = i[r] || (i[r] = {});
      e.exports = function(e) {
          return a[e] || (a[e] = {})
      }
  }
  , function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }
  , function(e, t, n) {
      var i = n(5).f;
      var r = n(9);
      var a = n(3)("toStringTag");
      e.exports = function(e, t, n) {
          if (e && !r(e = n ? e : e.prototype, a))
              i(e, a, {
                  configurable: true,
                  value: t
              })
      }
  }
  , function(e, t, n) {
      "use strict";
      t.__esModule = true;
      var i = n(81);
      var r = l(i);
      var a = n(87);
      var o = l(a);
      var s = typeof o.default === "function" && typeof r.default === "symbol" ? function(e) {
          return typeof e
      }
      : function(e) {
          return e && typeof o.default === "function" && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e
      }
      ;
      function l(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      t.default = typeof o.default === "function" && s(r.default) === "symbol" ? function(e) {
          return typeof e === "undefined" ? "undefined" : s(e)
      }
      : function(e) {
          return e && typeof o.default === "function" && e.constructor === o.default && e !== o.default.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : s(e)
      }
  }
  , function(e, t, n) {
      t.f = n(3)
  }
  , function(e, t, n) {
      var i = n(4);
      var r = n(2);
      var a = n(25);
      var o = n(33);
      var s = n(5).f;
      e.exports = function(e) {
          var t = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
          if (e.charAt(0) != "_" && !(e in t))
              s(t, e, {
                  value: o.f(e)
              })
      }
  }
  , function(e, t) {
      t.f = Object.getOwnPropertySymbols
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      t.scrollTop = i;
      t.scrollLeft = r;
      t.throttle = a;
      t.debounce = o;
      function i() {
          return window.pageYOffset || document.documentElement.scrollTop
      }
      function r() {
          return window.pageXOffset || document.documentElement.scrollLeft
      }
      function a(e, t) {
          var n = void 0
            , i = void 0
            , r = void 0;
          var a = null;
          var o = 0;
          var s = function t() {
              o = Date.now();
              a = null;
              r = e.apply(n, i);
              if (!a) {
                  n = i = null
              }
          };
          return function() {
              var l = Date.now();
              var u = t - (l - o);
              n = this;
              i = arguments;
              if (u <= 0 || u > t) {
                  if (a) {
                      clearTimeout(a);
                      a = null
                  }
                  o = l;
                  r = e.apply(n, i);
                  if (!a) {
                      n = i = null
                  }
              } else if (!a) {
                  a = setTimeout(s, u)
              }
              return r
          }
      }
      function o(e) {
          var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var i = void 0
            , r = void 0
            , a = void 0
            , o = void 0
            , s = void 0;
          var l = function l() {
              var u = Date.now() - o;
              if (u < t && u >= 0) {
                  i = setTimeout(l, t - u)
              } else {
                  i = null;
                  if (!n) {
                      s = e.apply(a, r);
                      if (!i) {
                          a = r = null
                      }
                  }
              }
          };
          return function() {
              a = this;
              r = arguments;
              o = Date.now();
              var u = n && !i;
              if (!i) {
                  i = setTimeout(l, t)
              }
              if (u) {
                  s = e.apply(a, r);
                  a = r = null
              }
              return s
          }
      }
      t.default = {
          scrollTop: i,
          scrollLeft: r,
          throttle: a,
          debounce: o
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(65)(true);
      n(38)(String, "String", function(e) {
          this._t = String(e);
          this._i = 0
      }, function() {
          var e = this._t;
          var t = this._i;
          var n;
          if (t >= e.length)
              return {
                  value: undefined,
                  done: true
              };
          n = i(e, t);
          this._i += n.length;
          return {
              value: n,
              done: false
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(25);
      var r = n(7);
      var a = n(42);
      var o = n(11);
      var s = n(9);
      var l = n(18);
      var u = n(67);
      var c = n(31);
      var f = n(72);
      var d = n(3)("iterator");
      var v = !([].keys && "next"in [].keys());
      var h = "@@iterator";
      var p = "keys";
      var m = "values";
      var g = function() {
          return this
      };
      e.exports = function(e, t, n, y, w, b, x) {
          u(n, t, y);
          var S = function(e) {
              if (!v && e in _)
                  return _[e];
              switch (e) {
              case p:
                  return function t() {
                      return new n(this,e)
                  }
                  ;
              case m:
                  return function t() {
                      return new n(this,e)
                  }
              }
              return function t() {
                  return new n(this,e)
              }
          };
          var T = t + " Iterator";
          var C = w == m;
          var E = false;
          var _ = e.prototype;
          var A = _[d] || _[h] || w && _[w];
          var M = !v && A || S(w);
          var k = w ? !C ? M : S("entries") : undefined;
          var O = t == "Array" ? _.entries || A : A;
          var P, L, I;
          if (O) {
              I = f(O.call(new e));
              if (I !== Object.prototype && I.next) {
                  c(I, T, true);
                  if (!i && !s(I, d))
                      o(I, d, g)
              }
          }
          if (C && A && A.name !== m) {
              E = true;
              M = function e() {
                  return A.call(this)
              }
          }
          if ((!i || x) && (v || E || !_[d])) {
              o(_, d, M)
          }
          l[t] = M;
          l[T] = g;
          if (w) {
              P = {
                  values: C ? M : S(m),
                  keys: b ? M : S(p),
                  entries: k
              };
              if (x)
                  for (L in P) {
                      if (!(L in _))
                          a(_, L, P[L])
                  }
              else
                  r(r.P + r.F * (v || E), t, P)
          }
          return P
      }
  }
  , function(e, t, n) {
      var i = n(66);
      e.exports = function(e, t, n) {
          i(e);
          if (t === undefined)
              return e;
          switch (n) {
          case 1:
              return function(n) {
                  return e.call(t, n)
              }
              ;
          case 2:
              return function(n, i) {
                  return e.call(t, n, i)
              }
              ;
          case 3:
              return function(n, i, r) {
                  return e.call(t, n, i, r)
              }
          }
          return function() {
              return e.apply(t, arguments)
          }
      }
  }
  , function(e, t, n) {
      e.exports = !n(8) && !n(12)(function() {
          return Object.defineProperty(n(41)("div"), "a", {
              get: function() {
                  return 7
              }
          }).a != 7
      })
  }
  , function(e, t, n) {
      var i = n(16);
      var r = n(4).document;
      var a = i(r) && i(r.createElement);
      e.exports = function(e) {
          return a ? r.createElement(e) : {}
      }
  }
  , function(e, t, n) {
      e.exports = n(11)
  }
  , function(e, t, n) {
      var i = n(15);
      var r = n(68);
      var a = n(30);
      var o = n(28)("IE_PROTO");
      var s = function() {};
      var l = "prototype";
      var u = function() {
          var e = n(41)("iframe");
          var t = a.length;
          var i = "<";
          var r = ">";
          var o;
          e.style.display = "none";
          n(71).appendChild(e);
          e.src = "javascript:";
          o = e.contentWindow.document;
          o.open();
          o.write(i + "script" + r + "document.F=Object" + i + "/script" + r);
          o.close();
          u = o.F;
          while (t--)
              delete u[l][a[t]];
          return u()
      };
      e.exports = Object.create || function e(t, n) {
          var a;
          if (t !== null) {
              s[l] = i(t);
              a = new s;
              s[l] = null;
              a[o] = t
          } else
              a = u();
          return n === undefined ? a : r(a, n)
      }
  }
  , function(e, t, n) {
      var i = n(9);
      var r = n(10);
      var a = n(69)(false);
      var o = n(28)("IE_PROTO");
      e.exports = function(e, t) {
          var n = r(e);
          var s = 0;
          var l = [];
          var u;
          for (u in n)
              if (u != o)
                  i(n, u) && l.push(u);
          while (t.length > s)
              if (i(n, u = t[s++])) {
                  ~a(l, u) || l.push(u)
              }
          return l
      }
  }
  , function(e, t, n) {
      var i = n(27);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
          return i(e) == "String" ? e.split("") : Object(e)
      }
  }
  , function(e, t, n) {
      var i = n(23);
      var r = Math.min;
      e.exports = function(e) {
          return e > 0 ? r(i(e), 9007199254740991) : 0
      }
  }
  , function(e, t, n) {
      var i = n(44);
      var r = n(30).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function e(t) {
          return i(t, r)
      }
  }
  , function(e, t, n) {
      e.exports = {
          default: n(98),
          __esModule: true
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function o() {
          var e = (0,
          r.default)("body");
          e.on("mouseenter focusin", ".x-anchor", function() {
              setTimeout(function() {
                  d((0,
                  r.default)(this))
              }
              .bind(this), 0)
          });
          e.on("mouseleave focusout", ".x-anchor", function() {
              v((0,
              r.default)(this))
          })
      }
      function s(e, t) {
          return t ? l(e) : u(e)
      }
      function l(e) {
          var t = (0,
          r.default)(e);
          if (!t || t.hasClass("x-active")) {
              return
          }
          h(t);
          t.addClass("x-active")
      }
      function u(e) {
          var t = (0,
          r.default)(e);
          if (!t) {
              return
          }
          t.removeClass("x-active x-interactive");
          p(t)
      }
      function c(e) {
          var t = (0,
          r.default)(e);
          if (t.hasClass("x-active") || t.hasClass("x-currently-active")) {
              return
          }
          t.removeClass("x-interactive");
          h(t);
          t.addClass("x-currently-active")
      }
      function f(e) {
          var t = (0,
          r.default)(e);
          if (t.hasClass("x-active")) {
              return
          }
          t.removeClass("x-currently-active");
          p(t)
      }
      function d(e) {
          var t = (0,
          r.default)(e);
          if (t.hasClass("x-active") || t.hasClass("x-interactive") || t.hasClass("x-currently-active")) {
              return
          }
          h(t);
          t.addClass("x-interactive")
      }
      function v(e) {
          var t = (0,
          r.default)(e);
          if (t.hasClass("x-active") || t.hasClass("x-currently-active")) {
              return
          }
          t.removeClass("x-interactive");
          p(t)
      }
      function h(e) {
          var t = (0,
          r.default)(e);
          if (!t || t.hasClass("x-active") || t.hasClass("x-interactive")) {
              return
          }
          var n = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
          t.find(".x-graphic").children().addClass("x-active");
          t.find("[data-x-single-anim]:not(.x-always-active)").each(function() {
              var e = (0,
              r.default)(this);
              e.css({
                  "animation-name": e.data("x-single-anim")
              }).one(n, function() {
                  return e.css({
                      "animation-name": ""
                  })
              })
          });
          t.find("[data-x-particle]").addClass("x-active")
      }
      function p(e) {
          var t = (0,
          r.default)(e);
          t.find("[data-x-particle]").removeClass("x-active");
          t.find(".x-graphic").children().removeClass("x-active")
      }
      function m(e, t) {
          return t ? g(e) : y(e)
      }
      function g(e) {
          var t = (0,
          r.default)(e);
          var n = t.outerHeight();
          if (!t || t.data("is-transitioning") === true) {
              return
          }
          t.removeClass("x-collapsed");
          t.addClass("x-collapsing");
          t.attr("aria-hidden", "false");
          t.data("is-transitioning", true);
          requestAnimationFrame(function() {
              setTimeout(function() {
                  t.css({
                      height: n
                  })
              }, 0)
          });
          t.one("csTransitionEnd", function() {
              t.removeClass("x-collapsing");
              t.css({
                  height: ""
              });
              t.data("is-transitioning", false)
          }).csEmulateTransitionEnd(350)
      }
      function y(e) {
          var t = (0,
          r.default)(e);
          var n = t.outerHeight();
          if (!t || t.data("is-transitioning") === true || t.hasClass("x-collapsed")) {
              return
          }
          t.css({
              height: n
          });
          t.data("is-transitioning", true);
          t.addClass("x-collapsing");
          t.attr("aria-hidden", "true");
          requestAnimationFrame(function() {
              setTimeout(function() {
                  t.css({
                      height: ""
                  })
              }, 0)
          });
          t.one("csTransitionEnd", function() {
              t.removeClass("x-collapsing");
              t.addClass("x-collapsed");
              t.data("is-transitioning", false)
          }).csEmulateTransitionEnd(350)
      }
      function w(e, t) {
          return t ? b(e) : x(e)
      }
      function b(e) {
          var t = (0,
          r.default)(e);
          var n = t.attr("data-x-toggleable");
          var i = t.closest("[data-x-toggle-layered-root]");
          var a = t.closest('ul:not([data-x-toggleable="' + n + '"])');
          var o = 0;
          t.children("li").each(function() {
              o += (0,
              r.default)(this).outerHeight(true)
          });
          i.css({
              height: o
          });
          a.removeClass("x-current-layer").addClass("x-prev-layer");
          t.addClass("x-current-layer")
      }
      function x(e) {
          var t = (0,
          r.default)(e);
          var n = t.attr("data-x-toggleable");
          var i = t.closest("[data-x-toggle-layered-root]");
          var a = t.closest('ul:not([data-x-toggleable="' + n + '"])');
          var o = 0;
          a.children("li").each(function() {
              o += (0,
              r.default)(this).outerHeight(true)
          });
          if (a.hasClass("x-prev-layer")) {
              i.css({
                  height: o
              });
              t.removeClass("x-current-layer");
              a.addClass("x-current-layer").removeClass("x-prev-layer")
          }
      }
      t.default = {
          setup: o,
          toggleAnchor: s,
          activateAnchor: l,
          deactivateAnchor: u,
          activateCurrentAnchor: c,
          deactivateCurrentAnchor: f,
          startAnchorInteraction: d,
          endAnchorInteraction: v,
          activateParticle: h,
          deactivateParticle: p,
          toggleCollapse: m,
          activateCollapse: g,
          deactivateCollapse: y,
          traverseLayers: w,
          descendLayer: b,
          ascendLayer: x
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(22);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var o = {};
      var s = {};
      function l(e, t) {
          if (!o[e]) {
              o[e] = []
          }
          o[e].push("function" === typeof t ? t : function() {
              return t
          }
          )
      }
      function u(e, t) {
          if (!s[e]) {
              s[e] = []
          }
          s[e].push(t)
      }
      function c() {
          var e = this;
          var t = [].concat(Array.prototype.slice.call(arguments));
          var n = t.shift();
          var i = t.shift();
          var a = o[n] ? o[n] : [];
          var l = s[n] ? s[n] : [];
          l.forEach(function(n) {
              return n.call.apply(n, [e, i].concat((0,
              r.default)(t)))
          });
          return a.reduce(function(n, i) {
              return i.call.apply(i, [e, n].concat((0,
              r.default)(t)))
          }, i)
      }
      t.default = {
          filter: l,
          action: u,
          apply: c,
          filters: o,
          actions: s
      }
  }
  , function(e, t) {
      var n;
      n = function() {
          return this
      }();
      try {
          n = n || Function("return this")() || (1,
          eval)("this")
      } catch (e) {
          if (typeof window === "object")
              n = window
      }
      e.exports = n
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      r.default.fn.csFitText = function(e, t) {
          var n = e || 1
            , i = r.default.extend({
              minFontSize: Number.NEGATIVE_INFINITY,
              maxFontSize: Number.POSITIVE_INFINITY
          }, t);
          return this.each(function() {
              var e = (0,
              r.default)(this);
              var t = function t() {
                  e.css("font-size", Math.max(Math.min(e.width() / (n * 10), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
              };
              t();
              (0,
              r.default)(window).on("resize.fittext orientationchange.fittext", t);
              (0,
              r.default)(window).on("fittextReset", function() {
                  (0,
                  r.default)(window).off("resize.fittext orientationchange.fittext", t);
                  e.css("font-size", "")
              })
          })
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(0);
      var r = A(i);
      n(54);
      n(55);
      n(56);
      n(57);
      var a = n(58);
      var o = A(a);
      var s = n(59);
      var l = A(s);
      var u = n(60);
      var c = A(u);
      var f = n(6);
      var d = A(f);
      var v = n(14);
      var h = A(v);
      var p = n(80);
      var m = A(p);
      var g = n(103);
      var y = A(g);
      var w = n(49);
      var b = A(w);
      var x = n(50);
      var S = A(x);
      var T = n(104);
      var C = A(T);
      var E = n(36);
      var _ = A(E);
      function A(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      n(109);
      n(52);
      n(52);
      n(113);
      n(114);
      n(115);
      n(116);
      n(122);
      n(124);
      n(125);
      n(126);
      n(127);
      n(128);
      n(129);
      n(130);
      n(131);
      n(132);
      n(133);
      n(134);
      n(135);
      n(140);
      n(141);
      n(142);
      n(143);
      n(144);
      n(145);
      n(146);
      n(147);
      n(148);
      window.csModernizr = window.csModernizr || {};
      window.xData = window.xData || {};
      window.csGlobal = window.csGlobal || {};
      window.csGlobal.waypoint = d.default;
      window.csGlobal.everinit = h.default;
      window.csGlobal.stem = m.default;
      window.csGlobal.particle = b.default;
      window.csGlobal.bowser = c.default;
      window.csGlobal.PerfectScrollbar = l.default;
      window.csGlobal.adminBarOffset = o.default;
      window.csGlobal.csHooks = S.default;
      window.csGlobal.hashScrolling = y.default;
      window.csGlobal._ = _.default;
      window.xData.api = {
          map: function e() {
              console.log("xData.api.map is deprecated. Use window.cs.global.everinit instead like this:", "window.csGlobal.everinit( '.any-css-selector', function(el){ /* Initialize your element here */})")
          }
      };
      (0,
      r.default)(function() {
          return setTimeout(function() {
              return S.default.apply("ready")
          }, 5)
      });
      b.default.setup();
      (0,
      m.default)({
          positioning: true,
          interaction: {
              selectors: [".x-menu-inline .menu-item-has-children", ".x-menu-dropdown .menu-item-has-children"],
              beforeActivate: function e(t) {
                  return b.default.activateAnchor((0,
                  r.default)(t).find("a:first")[0])
              },
              beforeDeactivate: function e(t) {
                  return b.default.deactivateAnchor((0,
                  r.default)(t).find("a:first")[0])
              },
              deactivateChild: function e(t) {
                  return b.default.deactivateAnchor((0,
                  r.default)(t).find("a:first")[0])
              }
          }
      });
      (0,
      h.default)("[data-x-scrollbar]", function(e) {
          return new l.default(e,(0,
          r.default)(e).data("x-scrollbar"))
      });
      S.default.filter("ready", function() {
          var e = false;
          var t = (0,
          C.default)({
              selector: S.default.apply("scrollspy_selector", '#cs-content a[href*="#"]'),
              offset: function e(t) {
                  return S.default.apply("scrollspy_offset", t + (0,
                  o.default)(), t)
              },
              ignorePatterns: S.default.apply("scrollspy_ignore_patterns", ["#/", "#wp-toolbar"]),
              activate: function t(n) {
                  if (e) {
                      return
                  }
                  if ((0,
                  r.default)(n).hasClass("x-anchor")) {
                      return b.default.activateCurrentAnchor(n)
                  }
                  S.default.apply("scrollspy_activate", n)
              },
              deactivate: function t(n) {
                  if (e) {
                      return
                  }
                  if ((0,
                  r.default)(n).hasClass("x-anchor")) {
                      return b.default.deactivateCurrentAnchor(n)
                  }
                  S.default.apply("scrollspy_deactivate", n)
              }
          })
            , n = t.triggerScrollSpy;
          (0,
          y.default)({
              selector: S.default.apply("hash_scrolling_selector", '#cs-content a[href*="#"]'),
              offset: function e(t) {
                  return S.default.apply("hash_scrolling_offset", t - (0,
                  o.default)(), t)
              },
              easing: "xEaseInOutExpo",
              duration: S.default.apply("hash_scrolling_duration", 850),
              initialMove: S.default.apply("hash_scrolling_initial_move", false),
              before: function t(n) {
                  e = true;
                  return S.default.apply("hash_scrolling_before", n)
              },
              after: function t(i) {
                  e = false;
                  n();
                  return S.default.apply("hash_scrolling_after", i)
              },
              allowScroll: function e() {
                  return S.default.apply.apply(S.default, ["hash_scrolling_allow", true].concat(Array.prototype.slice.call(arguments)))
              }
          })
      });
      t.default = window.csGlobal
  }
  , function(e, t, n) {
      "use strict";
      (function() {
          if (!String.prototype.includes) {
              String.prototype.includes = function(e, t) {
                  "use strict";
                  if (typeof t !== "number") {
                      t = 0
                  }
                  if (t + e.length > this.length) {
                      return false
                  } else {
                      return this.indexOf(e, t) !== -1
                  }
              }
          }
      }
      )();
      (function() {
          if (typeof window.CustomEvent === "function") {
              return false
          }
          function e(e, t) {
              t = t || {
                  bubbles: false,
                  cancelable: false,
                  detail: undefined
              };
              var n = document.createEvent("CustomEvent");
              n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail);
              return n
          }
          e.prototype = window.Event.prototype;
          window.CustomEvent = e
      }
      )();
      if (!Array.prototype.includes) {
          Object.defineProperty(Array.prototype, "includes", {
              value: function e(t, n) {
                  if (this == null) {
                      throw new TypeError('"this" is null or not defined')
                  }
                  var i = Object(this);
                  var r = i.length >>> 0;
                  if (r === 0) {
                      return false
                  }
                  var a = n | 0;
                  var o = Math.max(a >= 0 ? a : r - Math.abs(a), 0);
                  function s(e, t) {
                      return e === t || typeof e === "number" && typeof t === "number" && isNaN(e) && isNaN(t)
                  }
                  while (o < r) {
                      if (s(i[o], t)) {
                          return true
                      }
                      o++
                  }
                  return false
              }
          })
      }
      if (!Array.prototype.find) {
          Object.defineProperty(Array.prototype, "find", {
              value: function e(t) {
                  if (this == null) {
                      throw new TypeError('"this" is null or not defined')
                  }
                  var n = Object(this);
                  var i = n.length >>> 0;
                  if (typeof t !== "function") {
                      throw new TypeError("predicate must be a function")
                  }
                  var r = arguments[1];
                  var a = 0;
                  while (a < i) {
                      var o = n[a];
                      if (t.call(r, o, a, n)) {
                          return o
                      }
                      a++
                  }
                  return undefined
              },
              configurable: true,
              writable: true
          })
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      r.default)(function(e) {
          var t = e("body");
          t.on("click", '.x-alert [data-dismiss="alert"]', function(t) {
              t.preventDefault();
              var n = e(this).parent();
              n.removeClass("in");
              n.hasClass("fade") ? n.one("csTransitionEnd", function() {
                  return n.remove()
              }).csEmulateTransitionEnd(150) : n.remove()
          })
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      r.default.fn.csRedraw = function() {
          function e() {}
          return (0,
          r.default)(this).each(function() {
              e(this.offsetHeight)
          })
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      r.default.extend(r.default.easing, {
          xEaseOutQuad: function e(t) {
              return 1 - (1 - t) * (1 - t)
          },
          xEaseOutQuart: function e(t) {
              return 1 - Math.pow(1 - t, 4)
          },
          xEaseOutExpo: function e(t) {
              return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          },
          xEaseInOutExpo: function e(t) {
              return t === 0 ? 0 : t === 1 ? 1 : t < .5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      t.default = s;
      var i = void 0;
      var r = false;
      var a = void 0;
      function o() {
          if (!r) {
              i = 0;
              window.addEventListener("resize", o);
              a = document.querySelector("#wpadminbar");
              r = true
          }
          if (a) {
              var e = window.getComputedStyle(a)
                , t = e.position
                , n = e.height;
              i = "fixed" === t ? parseInt(n) : 0
          }
      }
      function s() {
          if ("undefined" === typeof i) {
              o()
          }
          return i
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      function i(e) {
          return getComputedStyle(e)
      }
      function r(e, t) {
          for (var n in t) {
              var i = t[n];
              if (typeof i === "number") {
                  i = i + "px"
              }
              e.style[n] = i
          }
          return e
      }
      function a(e) {
          var t = document.createElement("div");
          t.className = e;
          return t
      }
      var o = typeof Element !== "undefined" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector);
      function s(e, t) {
          if (!o) {
              throw new Error("No element matching method supported")
          }
          return o.call(e, t)
      }
      function l(e) {
          if (e.remove) {
              e.remove()
          } else {
              if (e.parentNode) {
                  e.parentNode.removeChild(e)
              }
          }
      }
      function u(e, t) {
          return Array.prototype.filter.call(e.children, function(e) {
              return s(e, t)
          })
      }
      var c = {
          main: "ps",
          element: {
              thumb: function(e) {
                  return "ps__thumb-" + e
              },
              rail: function(e) {
                  return "ps__rail-" + e
              },
              consuming: "ps__child--consume"
          },
          state: {
              focus: "ps--focus",
              active: function(e) {
                  return "ps--active-" + e
              },
              scrolling: function(e) {
                  return "ps--scrolling-" + e
              }
          }
      };
      var f = {
          x: null,
          y: null
      };
      function d(e, t) {
          var n = e.element.classList;
          var i = c.state.scrolling(t);
          if (n.contains(i)) {
              clearTimeout(f[t])
          } else {
              n.add(i)
          }
      }
      function v(e, t) {
          f[t] = setTimeout(function() {
              return e.isAlive && e.element.classList.remove(c.state.scrolling(t))
          }, e.settings.scrollingThreshold)
      }
      function h(e, t) {
          d(e, t);
          v(e, t)
      }
      var p = function e(t) {
          this.element = t;
          this.handlers = {}
      };
      var m = {
          isEmpty: {
              configurable: true
          }
      };
      p.prototype.bind = function e(t, n) {
          if (typeof this.handlers[t] === "undefined") {
              this.handlers[t] = []
          }
          this.handlers[t].push(n);
          this.element.addEventListener(t, n, false)
      }
      ;
      p.prototype.unbind = function e(t, n) {
          var i = this;
          this.handlers[t] = this.handlers[t].filter(function(e) {
              if (n && e !== n) {
                  return true
              }
              i.element.removeEventListener(t, e, false);
              return false
          })
      }
      ;
      p.prototype.unbindAll = function e() {
          var t = this;
          for (var n in t.handlers) {
              t.unbind(n)
          }
      }
      ;
      m.isEmpty.get = function() {
          var e = this;
          return Object.keys(this.handlers).every(function(t) {
              return e.handlers[t].length === 0
          })
      }
      ;
      Object.defineProperties(p.prototype, m);
      var g = function e() {
          this.eventElements = []
      };
      g.prototype.eventElement = function e(t) {
          var n = this.eventElements.filter(function(e) {
              return e.element === t
          })[0];
          if (!n) {
              n = new p(t);
              this.eventElements.push(n)
          }
          return n
      }
      ;
      g.prototype.bind = function e(t, n, i) {
          this.eventElement(t).bind(n, i)
      }
      ;
      g.prototype.unbind = function e(t, n, i) {
          var r = this.eventElement(t);
          r.unbind(n, i);
          if (r.isEmpty) {
              this.eventElements.splice(this.eventElements.indexOf(r), 1)
          }
      }
      ;
      g.prototype.unbindAll = function e() {
          this.eventElements.forEach(function(e) {
              return e.unbindAll()
          });
          this.eventElements = []
      }
      ;
      g.prototype.once = function e(t, n, i) {
          var r = this.eventElement(t);
          var a = function(e) {
              r.unbind(n, a);
              i(e)
          };
          r.bind(n, a)
      }
      ;
      function y(e) {
          if (typeof window.CustomEvent === "function") {
              return new CustomEvent(e)
          } else {
              var t = document.createEvent("CustomEvent");
              t.initCustomEvent(e, false, false, undefined);
              return t
          }
      }
      var w = function(e, t, n, i, r) {
          if (i === void 0)
              i = true;
          if (r === void 0)
              r = false;
          var a;
          if (t === "top") {
              a = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]
          } else if (t === "left") {
              a = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
          } else {
              throw new Error("A proper axis should be provided")
          }
          b(e, n, a, i, r)
      };
      function b(e, t, n, i, r) {
          var a = n[0];
          var o = n[1];
          var s = n[2];
          var l = n[3];
          var u = n[4];
          var c = n[5];
          if (i === void 0)
              i = true;
          if (r === void 0)
              r = false;
          var f = e.element;
          e.reach[l] = null;
          if (f[s] < 1) {
              e.reach[l] = "start"
          }
          if (f[s] > e[a] - e[o] - 1) {
              e.reach[l] = "end"
          }
          if (t) {
              f.dispatchEvent(y("ps-scroll-" + l));
              if (t < 0) {
                  f.dispatchEvent(y("ps-scroll-" + u))
              } else if (t > 0) {
                  f.dispatchEvent(y("ps-scroll-" + c))
              }
              if (i) {
                  h(e, l)
              }
          }
          if (e.reach[l] && (t || r)) {
              f.dispatchEvent(y("ps-" + l + "-reach-" + e.reach[l]))
          }
      }
      function x(e) {
          return parseInt(e, 10) || 0
      }
      function S(e) {
          return s(e, "input,[contenteditable]") || s(e, "select,[contenteditable]") || s(e, "textarea,[contenteditable]") || s(e, "button,[contenteditable]")
      }
      function T(e) {
          var t = i(e);
          return x(t.width) + x(t.paddingLeft) + x(t.paddingRight) + x(t.borderLeftWidth) + x(t.borderRightWidth)
      }
      var C = {
          isWebKit: typeof document !== "undefined" && "WebkitAppearance"in document.documentElement.style,
          supportsTouch: typeof window !== "undefined" && ("ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch),
          supportsIePointer: typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
          isChrome: typeof navigator !== "undefined" && /Chrome/i.test(navigator && navigator.userAgent)
      };
      var E = function(e) {
          var t = e.element;
          e.containerWidth = t.clientWidth;
          e.containerHeight = t.clientHeight;
          e.contentWidth = t.scrollWidth;
          e.contentHeight = t.scrollHeight;
          if (!t.contains(e.scrollbarXRail)) {
              u(t, c.element.rail("x")).forEach(function(e) {
                  return l(e)
              });
              t.appendChild(e.scrollbarXRail)
          }
          if (!t.contains(e.scrollbarYRail)) {
              u(t, c.element.rail("y")).forEach(function(e) {
                  return l(e)
              });
              t.appendChild(e.scrollbarYRail)
          }
          if (!e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth) {
              e.scrollbarXActive = true;
              e.railXWidth = e.containerWidth - e.railXMarginWidth;
              e.railXRatio = e.containerWidth / e.railXWidth;
              e.scrollbarXWidth = _(e, x(e.railXWidth * e.containerWidth / e.contentWidth));
              e.scrollbarXLeft = x((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))
          } else {
              e.scrollbarXActive = false
          }
          if (!e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight) {
              e.scrollbarYActive = true;
              e.railYHeight = e.containerHeight - e.railYMarginHeight;
              e.railYRatio = e.containerHeight / e.railYHeight;
              e.scrollbarYHeight = _(e, x(e.railYHeight * e.containerHeight / e.contentHeight));
              e.scrollbarYTop = x(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))
          } else {
              e.scrollbarYActive = false
          }
          if (e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth) {
              e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth
          }
          if (e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight) {
              e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight
          }
          A(t, e);
          if (e.scrollbarXActive) {
              t.classList.add(c.state.active("x"))
          } else {
              t.classList.remove(c.state.active("x"));
              e.scrollbarXWidth = 0;
              e.scrollbarXLeft = 0;
              t.scrollLeft = 0
          }
          if (e.scrollbarYActive) {
              t.classList.add(c.state.active("y"))
          } else {
              t.classList.remove(c.state.active("y"));
              e.scrollbarYHeight = 0;
              e.scrollbarYTop = 0;
              t.scrollTop = 0
          }
      };
      function _(e, t) {
          if (e.settings.minScrollbarLength) {
              t = Math.max(t, e.settings.minScrollbarLength)
          }
          if (e.settings.maxScrollbarLength) {
              t = Math.min(t, e.settings.maxScrollbarLength)
          }
          return t
      }
      function A(e, t) {
          var n = {
              width: t.railXWidth
          };
          if (t.isRtl) {
              n.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth
          } else {
              n.left = e.scrollLeft
          }
          if (t.isScrollbarXUsingBottom) {
              n.bottom = t.scrollbarXBottom - e.scrollTop
          } else {
              n.top = t.scrollbarXTop + e.scrollTop
          }
          r(t.scrollbarXRail, n);
          var i = {
              top: e.scrollTop,
              height: t.railYHeight
          };
          if (t.isScrollbarYUsingRight) {
              if (t.isRtl) {
                  i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth
              } else {
                  i.right = t.scrollbarYRight - e.scrollLeft
              }
          } else {
              if (t.isRtl) {
                  i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth * 2 - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth
              } else {
                  i.left = t.scrollbarYLeft + e.scrollLeft
              }
          }
          r(t.scrollbarYRail, i);
          r(t.scrollbarX, {
              left: t.scrollbarXLeft,
              width: t.scrollbarXWidth - t.railBorderXWidth
          });
          r(t.scrollbarY, {
              top: t.scrollbarYTop,
              height: t.scrollbarYHeight - t.railBorderYWidth
          })
      }
      var M = function(e) {
          e.event.bind(e.scrollbarY, "mousedown", function(e) {
              return e.stopPropagation()
          });
          e.event.bind(e.scrollbarYRail, "mousedown", function(t) {
              var n = t.pageY - window.pageYOffset - e.scrollbarYRail.getBoundingClientRect().top;
              var i = n > e.scrollbarYTop ? 1 : -1;
              e.element.scrollTop += i * e.containerHeight;
              E(e);
              t.stopPropagation()
          });
          e.event.bind(e.scrollbarX, "mousedown", function(e) {
              return e.stopPropagation()
          });
          e.event.bind(e.scrollbarXRail, "mousedown", function(t) {
              var n = t.pageX - window.pageXOffset - e.scrollbarXRail.getBoundingClientRect().left;
              var i = n > e.scrollbarXLeft ? 1 : -1;
              e.element.scrollLeft += i * e.containerWidth;
              E(e);
              t.stopPropagation()
          })
      };
      var k = function(e) {
          O(e, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x"]);
          O(e, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y"])
      };
      function O(e, t) {
          var n = t[0];
          var i = t[1];
          var r = t[2];
          var a = t[3];
          var o = t[4];
          var s = t[5];
          var l = t[6];
          var u = t[7];
          var c = e.element;
          var f = null;
          var h = null;
          var p = null;
          function m(t) {
              c[l] = f + p * (t[r] - h);
              d(e, u);
              E(e);
              t.stopPropagation();
              t.preventDefault()
          }
          function g() {
              v(e, u);
              e.event.unbind(e.ownerDocument, "mousemove", m)
          }
          e.event.bind(e[o], "mousedown", function(t) {
              f = c[l];
              h = t[r];
              p = (e[i] - e[n]) / (e[a] - e[s]);
              e.event.bind(e.ownerDocument, "mousemove", m);
              e.event.once(e.ownerDocument, "mouseup", g);
              t.stopPropagation();
              t.preventDefault()
          })
      }
      var P = function(e) {
          var t = e.element;
          var n = function() {
              return s(t, ":hover")
          };
          var i = function() {
              return s(e.scrollbarX, ":focus") || s(e.scrollbarY, ":focus")
          };
          function r(n, i) {
              var r = t.scrollTop;
              if (n === 0) {
                  if (!e.scrollbarYActive) {
                      return false
                  }
                  if (r === 0 && i > 0 || r >= e.contentHeight - e.containerHeight && i < 0) {
                      return !e.settings.wheelPropagation
                  }
              }
              var a = t.scrollLeft;
              if (i === 0) {
                  if (!e.scrollbarXActive) {
                      return false
                  }
                  if (a === 0 && n < 0 || a >= e.contentWidth - e.containerWidth && n > 0) {
                      return !e.settings.wheelPropagation
                  }
              }
              return true
          }
          e.event.bind(e.ownerDocument, "keydown", function(a) {
              if (a.isDefaultPrevented && a.isDefaultPrevented() || a.defaultPrevented) {
                  return
              }
              if (!n() && !i()) {
                  return
              }
              var o = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;
              if (o) {
                  if (o.tagName === "IFRAME") {
                      o = o.contentDocument.activeElement
                  } else {
                      while (o.shadowRoot) {
                          o = o.shadowRoot.activeElement
                      }
                  }
                  if (S(o)) {
                      return
                  }
              }
              var s = 0;
              var l = 0;
              switch (a.which) {
              case 37:
                  if (a.metaKey) {
                      s = -e.contentWidth
                  } else if (a.altKey) {
                      s = -e.containerWidth
                  } else {
                      s = -30
                  }
                  break;
              case 38:
                  if (a.metaKey) {
                      l = e.contentHeight
                  } else if (a.altKey) {
                      l = e.containerHeight
                  } else {
                      l = 30
                  }
                  break;
              case 39:
                  if (a.metaKey) {
                      s = e.contentWidth
                  } else if (a.altKey) {
                      s = e.containerWidth
                  } else {
                      s = 30
                  }
                  break;
              case 40:
                  if (a.metaKey) {
                      l = -e.contentHeight
                  } else if (a.altKey) {
                      l = -e.containerHeight
                  } else {
                      l = -30
                  }
                  break;
              case 32:
                  if (a.shiftKey) {
                      l = e.containerHeight
                  } else {
                      l = -e.containerHeight
                  }
                  break;
              case 33:
                  l = e.containerHeight;
                  break;
              case 34:
                  l = -e.containerHeight;
                  break;
              case 36:
                  l = e.contentHeight;
                  break;
              case 35:
                  l = -e.contentHeight;
                  break;
              default:
                  return
              }
              if (e.settings.suppressScrollX && s !== 0) {
                  return
              }
              if (e.settings.suppressScrollY && l !== 0) {
                  return
              }
              t.scrollTop -= l;
              t.scrollLeft += s;
              E(e);
              if (r(s, l)) {
                  a.preventDefault()
              }
          })
      };
      var L = function(e) {
          var t = e.element;
          function n(n, i) {
              var r = t.scrollTop === 0;
              var a = t.scrollTop + t.offsetHeight === t.scrollHeight;
              var o = t.scrollLeft === 0;
              var s = t.scrollLeft + t.offsetWidth === t.offsetWidth;
              var l;
              if (Math.abs(i) > Math.abs(n)) {
                  l = r || a
              } else {
                  l = o || s
              }
              return l ? !e.settings.wheelPropagation : true
          }
          function r(e) {
              var t = e.deltaX;
              var n = -1 * e.deltaY;
              if (typeof t === "undefined" || typeof n === "undefined") {
                  t = -1 * e.wheelDeltaX / 6;
                  n = e.wheelDeltaY / 6
              }
              if (e.deltaMode && e.deltaMode === 1) {
                  t *= 10;
                  n *= 10
              }
              if (t !== t && n !== n) {
                  t = 0;
                  n = e.wheelDelta
              }
              if (e.shiftKey) {
                  return [-n, -t]
              }
              return [t, n]
          }
          function a(e, n, r) {
              if (!C.isWebKit && t.querySelector("select:focus")) {
                  return true
              }
              if (!t.contains(e)) {
                  return false
              }
              var a = e;
              while (a && a !== t) {
                  if (a.classList.contains(c.element.consuming)) {
                      return true
                  }
                  var o = i(a);
                  var s = [o.overflow, o.overflowX, o.overflowY].join("");
                  if (s.match(/(scroll|auto)/)) {
                      var l = a.scrollHeight - a.clientHeight;
                      if (l > 0) {
                          if (!(a.scrollTop === 0 && r > 0) && !(a.scrollTop === l && r < 0)) {
                              return true
                          }
                      }
                      var u = a.scrollLeft - a.clientWidth;
                      if (u > 0) {
                          if (!(a.scrollLeft === 0 && n < 0) && !(a.scrollLeft === u && n > 0)) {
                              return true
                          }
                      }
                  }
                  a = a.parentNode
              }
              return false
          }
          function o(i) {
              var o = r(i);
              var s = o[0];
              var l = o[1];
              if (a(i.target, s, l)) {
                  return
              }
              var u = false;
              if (!e.settings.useBothWheelAxes) {
                  t.scrollTop -= l * e.settings.wheelSpeed;
                  t.scrollLeft += s * e.settings.wheelSpeed
              } else if (e.scrollbarYActive && !e.scrollbarXActive) {
                  if (l) {
                      t.scrollTop -= l * e.settings.wheelSpeed
                  } else {
                      t.scrollTop += s * e.settings.wheelSpeed
                  }
                  u = true
              } else if (e.scrollbarXActive && !e.scrollbarYActive) {
                  if (s) {
                      t.scrollLeft += s * e.settings.wheelSpeed
                  } else {
                      t.scrollLeft -= l * e.settings.wheelSpeed
                  }
                  u = true
              }
              E(e);
              u = u || n(s, l);
              if (u && !i.ctrlKey) {
                  i.stopPropagation();
                  i.preventDefault()
              }
          }
          if (typeof window.onwheel !== "undefined") {
              e.event.bind(t, "wheel", o)
          } else if (typeof window.onmousewheel !== "undefined") {
              e.event.bind(t, "mousewheel", o)
          }
      };
      var I = function(e) {
          if (!C.supportsTouch && !C.supportsIePointer) {
              return
          }
          var t = e.element;
          function n(n, i) {
              var r = t.scrollTop;
              var a = t.scrollLeft;
              var o = Math.abs(n);
              var s = Math.abs(i);
              if (s > o) {
                  if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && r === 0) {
                      return window.scrollY === 0 && i > 0 && C.isChrome
                  }
              } else if (o > s) {
                  if (n < 0 && a === e.contentWidth - e.containerWidth || n > 0 && a === 0) {
                      return true
                  }
              }
              return true
          }
          function r(n, i) {
              t.scrollTop -= i;
              t.scrollLeft -= n;
              E(e)
          }
          var a = {};
          var o = 0;
          var s = {};
          var l = null;
          function u(e) {
              if (e.targetTouches) {
                  return e.targetTouches[0]
              } else {
                  return e
              }
          }
          function f(e) {
              if (e.pointerType && e.pointerType === "pen" && e.buttons === 0) {
                  return false
              }
              if (e.targetTouches && e.targetTouches.length === 1) {
                  return true
              }
              if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
                  return true
              }
              return false
          }
          function d(e) {
              if (!f(e)) {
                  return
              }
              var t = u(e);
              a.pageX = t.pageX;
              a.pageY = t.pageY;
              o = (new Date).getTime();
              if (l !== null) {
                  clearInterval(l)
              }
          }
          function v(e, n, r) {
              if (!t.contains(e)) {
                  return false
              }
              var a = e;
              while (a && a !== t) {
                  if (a.classList.contains(c.element.consuming)) {
                      return true
                  }
                  var o = i(a);
                  var s = [o.overflow, o.overflowX, o.overflowY].join("");
                  if (s.match(/(scroll|auto)/)) {
                      var l = a.scrollHeight - a.clientHeight;
                      if (l > 0) {
                          if (!(a.scrollTop === 0 && r > 0) && !(a.scrollTop === l && r < 0)) {
                              return true
                          }
                      }
                      var u = a.scrollLeft - a.clientWidth;
                      if (u > 0) {
                          if (!(a.scrollLeft === 0 && n < 0) && !(a.scrollLeft === u && n > 0)) {
                              return true
                          }
                      }
                  }
                  a = a.parentNode
              }
              return false
          }
          function h(e) {
              if (f(e)) {
                  var t = u(e);
                  var i = {
                      pageX: t.pageX,
                      pageY: t.pageY
                  };
                  var l = i.pageX - a.pageX;
                  var c = i.pageY - a.pageY;
                  if (v(e.target, l, c)) {
                      return
                  }
                  r(l, c);
                  a = i;
                  var d = (new Date).getTime();
                  var h = d - o;
                  if (h > 0) {
                      s.x = l / h;
                      s.y = c / h;
                      o = d
                  }
                  if (n(l, c)) {
                      e.preventDefault()
                  }
              }
          }
          function p() {
              if (e.settings.swipeEasing) {
                  clearInterval(l);
                  l = setInterval(function() {
                      if (e.isInitialized) {
                          clearInterval(l);
                          return
                      }
                      if (!s.x && !s.y) {
                          clearInterval(l);
                          return
                      }
                      if (Math.abs(s.x) < .01 && Math.abs(s.y) < .01) {
                          clearInterval(l);
                          return
                      }
                      r(s.x * 30, s.y * 30);
                      s.x *= .8;
                      s.y *= .8
                  }, 10)
              }
          }
          if (C.supportsTouch) {
              e.event.bind(t, "touchstart", d);
              e.event.bind(t, "touchmove", h);
              e.event.bind(t, "touchend", p)
          } else if (C.supportsIePointer) {
              if (window.PointerEvent) {
                  e.event.bind(t, "pointerdown", d);
                  e.event.bind(t, "pointermove", h);
                  e.event.bind(t, "pointerup", p)
              } else if (window.MSPointerEvent) {
                  e.event.bind(t, "MSPointerDown", d);
                  e.event.bind(t, "MSPointerMove", h);
                  e.event.bind(t, "MSPointerUp", p)
              }
          }
      };
      var W = function() {
          return {
              handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
              maxScrollbarLength: null,
              minScrollbarLength: null,
              scrollingThreshold: 1e3,
              scrollXMarginOffset: 0,
              scrollYMarginOffset: 0,
              suppressScrollX: false,
              suppressScrollY: false,
              swipeEasing: true,
              useBothWheelAxes: false,
              wheelPropagation: false,
              wheelSpeed: 1
          }
      };
      var N = {
          "click-rail": M,
          "drag-thumb": k,
          keyboard: P,
          wheel: L,
          touch: I
      };
      var H = function e(t, n) {
          var o = this;
          if (n === void 0)
              n = {};
          if (typeof t === "string") {
              t = document.querySelector(t)
          }
          if (!t || !t.nodeName) {
              throw new Error("no element is specified to initialize PerfectScrollbar")
          }
          this.element = t;
          t.classList.add(c.main);
          this.settings = W();
          for (var s in n) {
              o.settings[s] = n[s]
          }
          this.containerWidth = null;
          this.containerHeight = null;
          this.contentWidth = null;
          this.contentHeight = null;
          var l = function() {
              return t.classList.add(c.state.focus)
          };
          var u = function() {
              return t.classList.remove(c.state.focus)
          };
          this.isRtl = i(t).direction === "rtl";
          this.isNegativeScroll = function() {
              var e = t.scrollLeft;
              var n = null;
              t.scrollLeft = -1;
              n = t.scrollLeft < 0;
              t.scrollLeft = e;
              return n
          }();
          this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0;
          this.event = new g;
          this.ownerDocument = t.ownerDocument || document;
          this.scrollbarXRail = a(c.element.rail("x"));
          t.appendChild(this.scrollbarXRail);
          this.scrollbarX = a(c.element.thumb("x"));
          this.scrollbarXRail.appendChild(this.scrollbarX);
          this.scrollbarX.setAttribute("tabindex", 0);
          this.event.bind(this.scrollbarX, "focus", l);
          this.event.bind(this.scrollbarX, "blur", u);
          this.scrollbarXActive = null;
          this.scrollbarXWidth = null;
          this.scrollbarXLeft = null;
          var f = i(this.scrollbarXRail);
          this.scrollbarXBottom = parseInt(f.bottom, 10);
          if (isNaN(this.scrollbarXBottom)) {
              this.isScrollbarXUsingBottom = false;
              this.scrollbarXTop = x(f.top)
          } else {
              this.isScrollbarXUsingBottom = true
          }
          this.railBorderXWidth = x(f.borderLeftWidth) + x(f.borderRightWidth);
          r(this.scrollbarXRail, {
              display: "block"
          });
          this.railXMarginWidth = x(f.marginLeft) + x(f.marginRight);
          r(this.scrollbarXRail, {
              display: ""
          });
          this.railXWidth = null;
          this.railXRatio = null;
          this.scrollbarYRail = a(c.element.rail("y"));
          t.appendChild(this.scrollbarYRail);
          this.scrollbarY = a(c.element.thumb("y"));
          this.scrollbarYRail.appendChild(this.scrollbarY);
          this.scrollbarY.setAttribute("tabindex", 0);
          this.event.bind(this.scrollbarY, "focus", l);
          this.event.bind(this.scrollbarY, "blur", u);
          this.scrollbarYActive = null;
          this.scrollbarYHeight = null;
          this.scrollbarYTop = null;
          var d = i(this.scrollbarYRail);
          this.scrollbarYRight = parseInt(d.right, 10);
          if (isNaN(this.scrollbarYRight)) {
              this.isScrollbarYUsingRight = false;
              this.scrollbarYLeft = x(d.left)
          } else {
              this.isScrollbarYUsingRight = true
          }
          this.scrollbarYOuterWidth = this.isRtl ? T(this.scrollbarY) : null;
          this.railBorderYWidth = x(d.borderTopWidth) + x(d.borderBottomWidth);
          r(this.scrollbarYRail, {
              display: "block"
          });
          this.railYMarginHeight = x(d.marginTop) + x(d.marginBottom);
          r(this.scrollbarYRail, {
              display: ""
          });
          this.railYHeight = null;
          this.railYRatio = null;
          this.reach = {
              x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
              y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
          };
          this.isAlive = true;
          this.settings.handlers.forEach(function(e) {
              return N[e](o)
          });
          this.lastScrollTop = t.scrollTop;
          this.lastScrollLeft = t.scrollLeft;
          this.event.bind(this.element, "scroll", function(e) {
              return o.onScroll(e)
          });
          E(this)
      };
      H.prototype.update = function e() {
          if (!this.isAlive) {
              return
          }
          this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0;
          r(this.scrollbarXRail, {
              display: "block"
          });
          r(this.scrollbarYRail, {
              display: "block"
          });
          this.railXMarginWidth = x(i(this.scrollbarXRail).marginLeft) + x(i(this.scrollbarXRail).marginRight);
          this.railYMarginHeight = x(i(this.scrollbarYRail).marginTop) + x(i(this.scrollbarYRail).marginBottom);
          r(this.scrollbarXRail, {
              display: "none"
          });
          r(this.scrollbarYRail, {
              display: "none"
          });
          E(this);
          w(this, "top", 0, false, true);
          w(this, "left", 0, false, true);
          r(this.scrollbarXRail, {
              display: ""
          });
          r(this.scrollbarYRail, {
              display: ""
          })
      }
      ;
      H.prototype.onScroll = function e(t) {
          if (!this.isAlive) {
              return
          }
          E(this);
          w(this, "top", this.element.scrollTop - this.lastScrollTop);
          w(this, "left", this.element.scrollLeft - this.lastScrollLeft);
          this.lastScrollTop = this.element.scrollTop;
          this.lastScrollLeft = this.element.scrollLeft
      }
      ;
      H.prototype.destroy = function e() {
          if (!this.isAlive) {
              return
          }
          this.event.unbindAll();
          l(this.scrollbarX);
          l(this.scrollbarY);
          l(this.scrollbarXRail);
          l(this.scrollbarYRail);
          this.removePsClasses();
          this.element = null;
          this.scrollbarX = null;
          this.scrollbarY = null;
          this.scrollbarXRail = null;
          this.scrollbarYRail = null;
          this.isAlive = false
      }
      ;
      H.prototype.removePsClasses = function e() {
          this.element.className = this.element.className.split(" ").filter(function(e) {
              return !e.match(/^ps([-_].+|)$/)
          }).join(" ")
      }
      ;
      t["default"] = H
  }
  , function(e, t, n) {
      !function(t, i, r) {
          if (typeof e != "undefined" && e.exports)
              e.exports = r();
          else if (true)
              n(61)(i, r);
          else
              t[i] = r()
      }(this, "bowser", function() {
          var e = true;
          function t(t) {
              function n(e) {
                  var n = t.match(e);
                  return n && n.length > 1 && n[1] || ""
              }
              function i(e) {
                  var n = t.match(e);
                  return n && n.length > 1 && n[2] || ""
              }
              var r = n(/(ipod|iphone|ipad)/i).toLowerCase(), a = /like android/i.test(t), o = !a && /android/i.test(t), s = /nexus\s*[0-6]\s*/i.test(t), l = !s && /nexus\s*[0-9]+/i.test(t), u = /CrOS/.test(t), c = /silk/i.test(t), f = /sailfish/i.test(t), d = /tizen/i.test(t), v = /(web|hpw)os/i.test(t), h = /windows phone/i.test(t), p = /SamsungBrowser/i.test(t), m = !h && /windows/i.test(t), g = !r && !c && /macintosh/i.test(t), y = !o && !f && !d && !v && /linux/i.test(t), w = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i), b = n(/version\/(\d+(\.\d+)?)/i), x = /tablet/i.test(t) && !/tablet pc/i.test(t), S = !x && /[^-]mobi/i.test(t), T = /xbox/i.test(t), C;
              if (/opera/i.test(t)) {
                  C = {
                      name: "Opera",
                      opera: e,
                      version: b || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
                  }
              } else if (/opr\/|opios/i.test(t)) {
                  C = {
                      name: "Opera",
                      opera: e,
                      version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || b
                  }
              } else if (/SamsungBrowser/i.test(t)) {
                  C = {
                      name: "Samsung Internet for Android",
                      samsungBrowser: e,
                      version: b || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
                  }
              } else if (/coast/i.test(t)) {
                  C = {
                      name: "Opera Coast",
                      coast: e,
                      version: b || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
                  }
              } else if (/yabrowser/i.test(t)) {
                  C = {
                      name: "Yandex Browser",
                      yandexbrowser: e,
                      version: b || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                  }
              } else if (/ucbrowser/i.test(t)) {
                  C = {
                      name: "UC Browser",
                      ucbrowser: e,
                      version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
                  }
              } else if (/mxios/i.test(t)) {
                  C = {
                      name: "Maxthon",
                      maxthon: e,
                      version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
                  }
              } else if (/epiphany/i.test(t)) {
                  C = {
                      name: "Epiphany",
                      epiphany: e,
                      version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
                  }
              } else if (/puffin/i.test(t)) {
                  C = {
                      name: "Puffin",
                      puffin: e,
                      version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
                  }
              } else if (/sleipnir/i.test(t)) {
                  C = {
                      name: "Sleipnir",
                      sleipnir: e,
                      version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
                  }
              } else if (/k-meleon/i.test(t)) {
                  C = {
                      name: "K-Meleon",
                      kMeleon: e,
                      version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
                  }
              } else if (h) {
                  C = {
                      name: "Windows Phone",
                      osname: "Windows Phone",
                      windowsphone: e
                  };
                  if (w) {
                      C.msedge = e;
                      C.version = w
                  } else {
                      C.msie = e;
                      C.version = n(/iemobile\/(\d+(\.\d+)?)/i)
                  }
              } else if (/msie|trident/i.test(t)) {
                  C = {
                      name: "Internet Explorer",
                      msie: e,
                      version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                  }
              } else if (u) {
                  C = {
                      name: "Chrome",
                      osname: "Chrome OS",
                      chromeos: e,
                      chromeBook: e,
                      chrome: e,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  }
              } else if (/edg([ea]|ios)/i.test(t)) {
                  C = {
                      name: "Microsoft Edge",
                      msedge: e,
                      version: w
                  }
              } else if (/vivaldi/i.test(t)) {
                  C = {
                      name: "Vivaldi",
                      vivaldi: e,
                      version: n(/vivaldi\/(\d+(\.\d+)?)/i) || b
                  }
              } else if (f) {
                  C = {
                      name: "Sailfish",
                      osname: "Sailfish OS",
                      sailfish: e,
                      version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                  }
              } else if (/seamonkey\//i.test(t)) {
                  C = {
                      name: "SeaMonkey",
                      seamonkey: e,
                      version: n(/seamonkey\/(\d+(\.\d+)?)/i)
                  }
              } else if (/firefox|iceweasel|fxios/i.test(t)) {
                  C = {
                      name: "Firefox",
                      firefox: e,
                      version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
                  };
                  if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)) {
                      C.firefoxos = e;
                      C.osname = "Firefox OS"
                  }
              } else if (c) {
                  C = {
                      name: "Amazon Silk",
                      silk: e,
                      version: n(/silk\/(\d+(\.\d+)?)/i)
                  }
              } else if (/phantom/i.test(t)) {
                  C = {
                      name: "PhantomJS",
                      phantom: e,
                      version: n(/phantomjs\/(\d+(\.\d+)?)/i)
                  }
              } else if (/slimerjs/i.test(t)) {
                  C = {
                      name: "SlimerJS",
                      slimer: e,
                      version: n(/slimerjs\/(\d+(\.\d+)?)/i)
                  }
              } else if (/blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t)) {
                  C = {
                      name: "BlackBerry",
                      osname: "BlackBerry OS",
                      blackberry: e,
                      version: b || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                  }
              } else if (v) {
                  C = {
                      name: "WebOS",
                      osname: "WebOS",
                      webos: e,
                      version: b || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                  };
                  /touchpad\//i.test(t) && (C.touchpad = e)
              } else if (/bada/i.test(t)) {
                  C = {
                      name: "Bada",
                      osname: "Bada",
                      bada: e,
                      version: n(/dolfin\/(\d+(\.\d+)?)/i)
                  }
              } else if (d) {
                  C = {
                      name: "Tizen",
                      osname: "Tizen",
                      tizen: e,
                      version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || b
                  }
              } else if (/qupzilla/i.test(t)) {
                  C = {
                      name: "QupZilla",
                      qupzilla: e,
                      version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || b
                  }
              } else if (/chromium/i.test(t)) {
                  C = {
                      name: "Chromium",
                      chromium: e,
                      version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || b
                  }
              } else if (/chrome|crios|crmo/i.test(t)) {
                  C = {
                      name: "Chrome",
                      chrome: e,
                      version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                  }
              } else if (o) {
                  C = {
                      name: "Android",
                      version: b
                  }
              } else if (/safari|applewebkit/i.test(t)) {
                  C = {
                      name: "Safari",
                      safari: e
                  };
                  if (b) {
                      C.version = b
                  }
              } else if (r) {
                  C = {
                      name: r == "iphone" ? "iPhone" : r == "ipad" ? "iPad" : "iPod"
                  };
                  if (b) {
                      C.version = b
                  }
              } else if (/googlebot/i.test(t)) {
                  C = {
                      name: "Googlebot",
                      googlebot: e,
                      version: n(/googlebot\/(\d+(\.\d+))/i) || b
                  }
              } else {
                  C = {
                      name: n(/^(.*)\/(.*) /),
                      version: i(/^(.*)\/(.*) /)
                  }
              }
              if (!C.msedge && /(apple)?webkit/i.test(t)) {
                  if (/(apple)?webkit\/537\.36/i.test(t)) {
                      C.name = C.name || "Blink";
                      C.blink = e
                  } else {
                      C.name = C.name || "Webkit";
                      C.webkit = e
                  }
                  if (!C.version && b) {
                      C.version = b
                  }
              } else if (!C.opera && /gecko\//i.test(t)) {
                  C.name = C.name || "Gecko";
                  C.gecko = e;
                  C.version = C.version || n(/gecko\/(\d+(\.\d+)?)/i)
              }
              if (!C.windowsphone && (o || C.silk)) {
                  C.android = e;
                  C.osname = "Android"
              } else if (!C.windowsphone && r) {
                  C[r] = e;
                  C.ios = e;
                  C.osname = "iOS"
              } else if (g) {
                  C.mac = e;
                  C.osname = "macOS"
              } else if (T) {
                  C.xbox = e;
                  C.osname = "Xbox"
              } else if (m) {
                  C.windows = e;
                  C.osname = "Windows"
              } else if (y) {
                  C.linux = e;
                  C.osname = "Linux"
              }
              function E(e) {
                  switch (e) {
                  case "NT":
                      return "NT";
                  case "XP":
                      return "XP";
                  case "NT 5.0":
                      return "2000";
                  case "NT 5.1":
                      return "XP";
                  case "NT 5.2":
                      return "2003";
                  case "NT 6.0":
                      return "Vista";
                  case "NT 6.1":
                      return "7";
                  case "NT 6.2":
                      return "8";
                  case "NT 6.3":
                      return "8.1";
                  case "NT 10.0":
                      return "10";
                  default:
                      return undefined
                  }
              }
              var _ = "";
              if (C.windows) {
                  _ = E(n(/Windows ((NT|XP)( \d\d?.\d)?)/i))
              } else if (C.windowsphone) {
                  _ = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i)
              } else if (C.mac) {
                  _ = n(/Mac OS X (\d+([_\.\s]\d+)*)/i);
                  _ = _.replace(/[_\s]/g, ".")
              } else if (r) {
                  _ = n(/os (\d+([_\s]\d+)*) like mac os x/i);
                  _ = _.replace(/[_\s]/g, ".")
              } else if (o) {
                  _ = n(/android[ \/-](\d+(\.\d+)*)/i)
              } else if (C.webos) {
                  _ = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i)
              } else if (C.blackberry) {
                  _ = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i)
              } else if (C.bada) {
                  _ = n(/bada\/(\d+(\.\d+)*)/i)
              } else if (C.tizen) {
                  _ = n(/tizen[\/\s](\d+(\.\d+)*)/i)
              }
              if (_) {
                  C.osversion = _
              }
              var A = !C.windows && _.split(".")[0];
              if (x || l || r == "ipad" || o && (A == 3 || A >= 4 && !S) || C.silk) {
                  C.tablet = e
              } else if (S || r == "iphone" || r == "ipod" || o || s || C.blackberry || C.webos || C.bada) {
                  C.mobile = e
              }
              if (C.msedge || C.msie && C.version >= 10 || C.yandexbrowser && C.version >= 15 || C.vivaldi && C.version >= 1 || C.chrome && C.version >= 20 || C.samsungBrowser && C.version >= 4 || C.firefox && C.version >= 20 || C.safari && C.version >= 6 || C.opera && C.version >= 10 || C.ios && C.osversion && C.osversion.split(".")[0] >= 6 || C.blackberry && C.version >= 10.1 || C.chromium && C.version >= 20) {
                  C.a = e
              } else if (C.msie && C.version < 10 || C.chrome && C.version < 20 || C.firefox && C.version < 20 || C.safari && C.version < 6 || C.opera && C.version < 10 || C.ios && C.osversion && C.osversion.split(".")[0] < 6 || C.chromium && C.version < 20) {
                  C.c = e
              } else
                  C.x = e;
              return C
          }
          var n = t(typeof navigator !== "undefined" ? navigator.userAgent || "" : "");
          n.test = function(e) {
              for (var t = 0; t < e.length; ++t) {
                  var i = e[t];
                  if (typeof i === "string") {
                      if (i in n) {
                          return true
                      }
                  }
              }
              return false
          }
          ;
          function i(e) {
              return e.split(".").length
          }
          function r(e, t) {
              var n = [], i;
              if (Array.prototype.map) {
                  return Array.prototype.map.call(e, t)
              }
              for (i = 0; i < e.length; i++) {
                  n.push(t(e[i]))
              }
              return n
          }
          function a(e) {
              var t = Math.max(i(e[0]), i(e[1]));
              var n = r(e, function(e) {
                  var n = t - i(e);
                  e = e + new Array(n + 1).join(".0");
                  return r(e.split("."), function(e) {
                      return new Array(20 - e.length).join("0") + e
                  }).reverse()
              });
              while (--t >= 0) {
                  if (n[0][t] > n[1][t]) {
                      return 1
                  } else if (n[0][t] === n[1][t]) {
                      if (t === 0) {
                          return 0
                      }
                  } else {
                      return -1
                  }
              }
          }
          function o(e, i, r) {
              var o = n;
              if (typeof i === "string") {
                  r = i;
                  i = void 0
              }
              if (i === void 0) {
                  i = false
              }
              if (r) {
                  o = t(r)
              }
              var s = "" + o.version;
              for (var l in e) {
                  if (e.hasOwnProperty(l)) {
                      if (o[l]) {
                          if (typeof e[l] !== "string") {
                              throw new Error("Browser version in the minVersion map should be a string: " + l + ": " + String(e))
                          }
                          return a([s, e[l]]) < 0
                      }
                  }
              }
              return i
          }
          function s(e, t, n) {
              return !o(e, t, n)
          }
          n.isUnsupportedBrowser = o;
          n.compareVersions = a;
          n.check = s;
          n._detect = t;
          n.detect = t;
          return n
      })
  }
  , function(e, t) {
      e.exports = function() {
          throw new Error("define cannot be used indirect")
      }
  }
  , function(e, t) {
      (function() {
          "use strict";
          var e = 0;
          var t = {};
          function n(i) {
              if (!i) {
                  throw new Error("No options passed to Waypoint constructor")
              }
              if (!i.element) {
                  throw new Error("No element option passed to Waypoint constructor")
              }
              if (!i.handler) {
                  throw new Error("No handler option passed to Waypoint constructor")
              }
              this.key = "waypoint-" + e;
              this.options = n.Adapter.extend({}, n.defaults, i);
              this.element = this.options.element;
              this.adapter = new n.Adapter(this.element);
              this.callback = i.handler;
              this.axis = this.options.horizontal ? "horizontal" : "vertical";
              this.enabled = this.options.enabled;
              this.triggerPoint = null;
              this.group = n.Group.findOrCreate({
                  name: this.options.group,
                  axis: this.axis
              });
              this.context = n.Context.findOrCreateByElement(this.options.context);
              if (n.offsetAliases[this.options.offset]) {
                  this.options.offset = n.offsetAliases[this.options.offset]
              }
              this.group.add(this);
              this.context.add(this);
              t[this.key] = this;
              e += 1
          }
          n.prototype.queueTrigger = function(e) {
              this.group.queueTrigger(this, e)
          }
          ;
          n.prototype.trigger = function(e) {
              if (!this.enabled) {
                  return
              }
              if (this.callback) {
                  this.callback.apply(this, e)
              }
          }
          ;
          n.prototype.destroy = function() {
              this.context.remove(this);
              this.group.remove(this);
              delete t[this.key]
          }
          ;
          n.prototype.disable = function() {
              this.enabled = false;
              return this
          }
          ;
          n.prototype.enable = function() {
              this.context.refresh();
              this.enabled = true;
              return this
          }
          ;
          n.prototype.next = function() {
              return this.group.next(this)
          }
          ;
          n.prototype.previous = function() {
              return this.group.previous(this)
          }
          ;
          n.invokeAll = function(e) {
              var n = [];
              for (var i in t) {
                  n.push(t[i])
              }
              for (var r = 0, a = n.length; r < a; r++) {
                  n[r][e]()
              }
          }
          ;
          n.destroyAll = function() {
              n.invokeAll("destroy")
          }
          ;
          n.disableAll = function() {
              n.invokeAll("disable")
          }
          ;
          n.enableAll = function() {
              n.Context.refreshAll();
              for (var e in t) {
                  t[e].enabled = true
              }
              return this
          }
          ;
          n.refreshAll = function() {
              n.Context.refreshAll()
          }
          ;
          n.viewportHeight = function() {
              return window.innerHeight || document.documentElement.clientHeight
          }
          ;
          n.viewportWidth = function() {
              return document.documentElement.clientWidth
          }
          ;
          n.adapters = [];
          n.defaults = {
              context: window,
              continuous: true,
              enabled: true,
              group: "default",
              horizontal: false,
              offset: 0
          };
          n.offsetAliases = {
              "bottom-in-view": function() {
                  return this.context.innerHeight() - this.adapter.outerHeight()
              },
              "right-in-view": function() {
                  return this.context.innerWidth() - this.adapter.outerWidth()
              }
          };
          window.Waypoint = n
      }
      )();
      (function() {
          "use strict";
          function e(e) {
              window.setTimeout(e, 1e3 / 60)
          }
          var t = 0;
          var n = {};
          var i = window.Waypoint;
          var r = window.onload;
          function a(e) {
              this.element = e;
              this.Adapter = i.Adapter;
              this.adapter = new this.Adapter(e);
              this.key = "waypoint-context-" + t;
              this.didScroll = false;
              this.didResize = false;
              this.oldScroll = {
                  x: this.adapter.scrollLeft(),
                  y: this.adapter.scrollTop()
              };
              this.waypoints = {
                  vertical: {},
                  horizontal: {}
              };
              e.waypointContextKey = this.key;
              n[e.waypointContextKey] = this;
              t += 1;
              if (!i.windowContext) {
                  i.windowContext = true;
                  i.windowContext = new a(window)
              }
              this.createThrottledScrollHandler();
              this.createThrottledResizeHandler()
          }
          a.prototype.add = function(e) {
              var t = e.options.horizontal ? "horizontal" : "vertical";
              this.waypoints[t][e.key] = e;
              this.refresh()
          }
          ;
          a.prototype.checkEmpty = function() {
              var e = this.Adapter.isEmptyObject(this.waypoints.horizontal);
              var t = this.Adapter.isEmptyObject(this.waypoints.vertical);
              var i = this.element == this.element.window;
              if (e && t && !i) {
                  this.adapter.off(".waypoints");
                  delete n[this.key]
              }
          }
          ;
          a.prototype.createThrottledResizeHandler = function() {
              var e = this;
              function t() {
                  e.handleResize();
                  e.didResize = false
              }
              this.adapter.on("resize.waypoints", function() {
                  if (!e.didResize) {
                      e.didResize = true;
                      i.requestAnimationFrame(t)
                  }
              })
          }
          ;
          a.prototype.createThrottledScrollHandler = function() {
              var e = this;
              function t() {
                  e.handleScroll();
                  e.didScroll = false
              }
              this.adapter.on("scroll.waypoints", function() {
                  if (!e.didScroll || i.isTouch) {
                      e.didScroll = true;
                      i.requestAnimationFrame(t)
                  }
              })
          }
          ;
          a.prototype.handleResize = function() {
              i.Context.refreshAll()
          }
          ;
          a.prototype.handleScroll = function() {
              var e = {};
              var t = {
                  horizontal: {
                      newScroll: this.adapter.scrollLeft(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left"
                  },
                  vertical: {
                      newScroll: this.adapter.scrollTop(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up"
                  }
              };
              for (var n in t) {
                  var i = t[n];
                  var r = i.newScroll > i.oldScroll;
                  var a = r ? i.forward : i.backward;
                  for (var o in this.waypoints[n]) {
                      var s = this.waypoints[n][o];
                      if (s.triggerPoint === null) {
                          continue
                      }
                      var l = i.oldScroll < s.triggerPoint;
                      var u = i.newScroll >= s.triggerPoint;
                      var c = l && u;
                      var f = !l && !u;
                      if (c || f) {
                          s.queueTrigger(a);
                          e[s.group.id] = s.group
                      }
                  }
              }
              for (var d in e) {
                  e[d].flushTriggers()
              }
              this.oldScroll = {
                  x: t.horizontal.newScroll,
                  y: t.vertical.newScroll
              }
          }
          ;
          a.prototype.innerHeight = function() {
              if (this.element == this.element.window) {
                  return i.viewportHeight()
              }
              return this.adapter.innerHeight()
          }
          ;
          a.prototype.remove = function(e) {
              delete this.waypoints[e.axis][e.key];
              this.checkEmpty()
          }
          ;
          a.prototype.innerWidth = function() {
              if (this.element == this.element.window) {
                  return i.viewportWidth()
              }
              return this.adapter.innerWidth()
          }
          ;
          a.prototype.destroy = function() {
              var e = [];
              for (var t in this.waypoints) {
                  for (var n in this.waypoints[t]) {
                      e.push(this.waypoints[t][n])
                  }
              }
              for (var i = 0, r = e.length; i < r; i++) {
                  e[i].destroy()
              }
          }
          ;
          a.prototype.refresh = function() {
              var e = this.element == this.element.window;
              var t = e ? undefined : this.adapter.offset();
              var n = {};
              var r;
              this.handleScroll();
              r = {
                  horizontal: {
                      contextOffset: e ? 0 : t.left,
                      contextScroll: e ? 0 : this.oldScroll.x,
                      contextDimension: this.innerWidth(),
                      oldScroll: this.oldScroll.x,
                      forward: "right",
                      backward: "left",
                      offsetProp: "left"
                  },
                  vertical: {
                      contextOffset: e ? 0 : t.top,
                      contextScroll: e ? 0 : this.oldScroll.y,
                      contextDimension: this.innerHeight(),
                      oldScroll: this.oldScroll.y,
                      forward: "down",
                      backward: "up",
                      offsetProp: "top"
                  }
              };
              for (var a in r) {
                  var o = r[a];
                  for (var s in this.waypoints[a]) {
                      var l = this.waypoints[a][s];
                      var u = l.options.offset;
                      var c = l.triggerPoint;
                      var f = 0;
                      var d = c == null;
                      var v, h, p;
                      var m, g;
                      if (l.element !== l.element.window) {
                          f = l.adapter.offset()[o.offsetProp]
                      }
                      if (typeof u === "function") {
                          u = u.apply(l)
                      } else if (typeof u === "string") {
                          u = parseFloat(u);
                          if (l.options.offset.indexOf("%") > -1) {
                              u = Math.ceil(o.contextDimension * u / 100)
                          }
                      }
                      v = o.contextScroll - o.contextOffset;
                      l.triggerPoint = Math.floor(f + v - u);
                      h = c < o.oldScroll;
                      p = l.triggerPoint >= o.oldScroll;
                      m = h && p;
                      g = !h && !p;
                      if (!d && m) {
                          l.queueTrigger(o.backward);
                          n[l.group.id] = l.group
                      } else if (!d && g) {
                          l.queueTrigger(o.forward);
                          n[l.group.id] = l.group
                      } else if (d && o.oldScroll >= l.triggerPoint) {
                          l.queueTrigger(o.forward);
                          n[l.group.id] = l.group
                      }
                  }
              }
              i.requestAnimationFrame(function() {
                  for (var e in n) {
                      n[e].flushTriggers()
                  }
              });
              return this
          }
          ;
          a.findOrCreateByElement = function(e) {
              return a.findByElement(e) || new a(e)
          }
          ;
          a.refreshAll = function() {
              for (var e in n) {
                  n[e].refresh()
              }
          }
          ;
          a.findByElement = function(e) {
              return n[e.waypointContextKey]
          }
          ;
          window.onload = function() {
              if (r) {
                  r()
              }
              a.refreshAll()
          }
          ;
          i.requestAnimationFrame = function(t) {
              var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e;
              n.call(window, t)
          }
          ;
          i.Context = a
      }
      )();
      (function() {
          "use strict";
          function e(e, t) {
              return e.triggerPoint - t.triggerPoint
          }
          function t(e, t) {
              return t.triggerPoint - e.triggerPoint
          }
          var n = {
              vertical: {},
              horizontal: {}
          };
          var i = window.Waypoint;
          function r(e) {
              this.name = e.name;
              this.axis = e.axis;
              this.id = this.name + "-" + this.axis;
              this.waypoints = [];
              this.clearTriggerQueues();
              n[this.axis][this.name] = this
          }
          r.prototype.add = function(e) {
              this.waypoints.push(e)
          }
          ;
          r.prototype.clearTriggerQueues = function() {
              this.triggerQueues = {
                  up: [],
                  down: [],
                  left: [],
                  right: []
              }
          }
          ;
          r.prototype.flushTriggers = function() {
              for (var n in this.triggerQueues) {
                  var i = this.triggerQueues[n];
                  var r = n === "up" || n === "left";
                  i.sort(r ? t : e);
                  for (var a = 0, o = i.length; a < o; a += 1) {
                      var s = i[a];
                      if (s.options.continuous || a === i.length - 1) {
                          s.trigger([n])
                      }
                  }
              }
              this.clearTriggerQueues()
          }
          ;
          r.prototype.next = function(t) {
              this.waypoints.sort(e);
              var n = i.Adapter.inArray(t, this.waypoints);
              var r = n === this.waypoints.length - 1;
              return r ? null : this.waypoints[n + 1]
          }
          ;
          r.prototype.previous = function(t) {
              this.waypoints.sort(e);
              var n = i.Adapter.inArray(t, this.waypoints);
              return n ? this.waypoints[n - 1] : null
          }
          ;
          r.prototype.queueTrigger = function(e, t) {
              this.triggerQueues[t].push(e)
          }
          ;
          r.prototype.remove = function(e) {
              var t = i.Adapter.inArray(e, this.waypoints);
              if (t > -1) {
                  this.waypoints.splice(t, 1)
              }
          }
          ;
          r.prototype.first = function() {
              return this.waypoints[0]
          }
          ;
          r.prototype.last = function() {
              return this.waypoints[this.waypoints.length - 1]
          }
          ;
          r.findOrCreate = function(e) {
              return n[e.axis][e.name] || new r(e)
          }
          ;
          i.Group = r
      }
      )();
      (function() {
          "use strict";
          var e = window.Waypoint;
          function t(e) {
              return e === e.window
          }
          function n(e) {
              if (t(e)) {
                  return e
              }
              return e.defaultView
          }
          function i(e) {
              this.element = e;
              this.handlers = {}
          }
          i.prototype.innerHeight = function() {
              var e = t(this.element);
              return e ? this.element.innerHeight : this.element.clientHeight
          }
          ;
          i.prototype.innerWidth = function() {
              var e = t(this.element);
              return e ? this.element.innerWidth : this.element.clientWidth
          }
          ;
          i.prototype.off = function(e, t) {
              function n(e, t, n) {
                  for (var i = 0, r = t.length - 1; i < r; i++) {
                      var a = t[i];
                      if (!n || n === a) {
                          e.removeEventListener(a)
                      }
                  }
              }
              var i = e.split(".");
              var r = i[0];
              var a = i[1];
              var o = this.element;
              if (a && this.handlers[a] && r) {
                  n(o, this.handlers[a][r], t);
                  this.handlers[a][r] = []
              } else if (r) {
                  for (var s in this.handlers) {
                      n(o, this.handlers[s][r] || [], t);
                      this.handlers[s][r] = []
                  }
              } else if (a && this.handlers[a]) {
                  for (var l in this.handlers[a]) {
                      n(o, this.handlers[a][l], t)
                  }
                  this.handlers[a] = {}
              }
          }
          ;
          i.prototype.offset = function() {
              if (!this.element.ownerDocument) {
                  return null
              }
              var e = this.element.ownerDocument.documentElement;
              var t = n(this.element.ownerDocument);
              var i = {
                  top: 0,
                  left: 0
              };
              if (this.element.getBoundingClientRect) {
                  i = this.element.getBoundingClientRect()
              }
              return {
                  top: i.top + t.pageYOffset - e.clientTop,
                  left: i.left + t.pageXOffset - e.clientLeft
              }
          }
          ;
          i.prototype.on = function(e, t) {
              var n = e.split(".");
              var i = n[0];
              var r = n[1] || "__default";
              var a = this.handlers[r] = this.handlers[r] || {};
              var o = a[i] = a[i] || [];
              o.push(t);
              this.element.addEventListener(i, t)
          }
          ;
          i.prototype.outerHeight = function(e) {
              var n = this.innerHeight();
              var i;
              if (e && !t(this.element)) {
                  i = window.getComputedStyle(this.element);
                  n += parseInt(i.marginTop, 10);
                  n += parseInt(i.marginBottom, 10)
              }
              return n
          }
          ;
          i.prototype.outerWidth = function(e) {
              var n = this.innerWidth();
              var i;
              if (e && !t(this.element)) {
                  i = window.getComputedStyle(this.element);
                  n += parseInt(i.marginLeft, 10);
                  n += parseInt(i.marginRight, 10)
              }
              return n
          }
          ;
          i.prototype.scrollLeft = function() {
              var e = n(this.element);
              return e ? e.pageXOffset : this.element.scrollLeft
          }
          ;
          i.prototype.scrollTop = function() {
              var e = n(this.element);
              return e ? e.pageYOffset : this.element.scrollTop
          }
          ;
          i.extend = function() {
              var e = Array.prototype.slice.call(arguments);
              function t(e, t) {
                  if (typeof e === "object" && typeof t === "object") {
                      for (var n in t) {
                          if (t.hasOwnProperty(n)) {
                              e[n] = t[n]
                          }
                      }
                  }
                  return e
              }
              for (var n = 1, i = e.length; n < i; n++) {
                  t(e[0], e[n])
              }
              return e[0]
          }
          ;
          i.inArray = function(e, t, n) {
              return t == null ? -1 : t.indexOf(e, n)
          }
          ;
          i.isEmptyObject = function(e) {
              for (var t in e) {
                  return false
              }
              return true
          }
          ;
          e.adapters.push({
              name: "noframework",
              Adapter: i
          });
          e.Adapter = i
      }
      )()
  }
  , function(e, t, n) {
      e.exports = {
          default: n(64),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(37);
      n(73);
      e.exports = n(2).Array.from
  }
  , function(e, t, n) {
      var i = n(23);
      var r = n(24);
      e.exports = function(e) {
          return function(t, n) {
              var a = String(r(t));
              var o = i(n);
              var s = a.length;
              var l, u;
              if (o < 0 || o >= s)
                  return e ? "" : undefined;
              l = a.charCodeAt(o);
              return l < 55296 || l > 56319 || o + 1 === s || (u = a.charCodeAt(o + 1)) < 56320 || u > 57343 ? e ? a.charAt(o) : l : e ? a.slice(o, o + 2) : (l - 55296 << 10) + (u - 56320) + 65536
          }
      }
  }
  , function(e, t) {
      e.exports = function(e) {
          if (typeof e != "function")
              throw TypeError(e + " is not a function!");
          return e
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(43);
      var r = n(17);
      var a = n(31);
      var o = {};
      n(11)(o, n(3)("iterator"), function() {
          return this
      });
      e.exports = function(e, t, n) {
          e.prototype = i(o, {
              next: r(1, n)
          });
          a(e, t + " Iterator")
      }
  }
  , function(e, t, n) {
      var i = n(5);
      var r = n(15);
      var a = n(13);
      e.exports = n(8) ? Object.defineProperties : function e(t, n) {
          r(t);
          var o = a(n);
          var s = o.length;
          var l = 0;
          var u;
          while (s > l)
              i.f(t, u = o[l++], n[u]);
          return t
      }
  }
  , function(e, t, n) {
      var i = n(10);
      var r = n(46);
      var a = n(70);
      e.exports = function(e) {
          return function(t, n, o) {
              var s = i(t);
              var l = r(s.length);
              var u = a(o, l);
              var c;
              if (e && n != n)
                  while (l > u) {
                      c = s[u++];
                      if (c != c)
                          return true
                  }
              else
                  for (; l > u; u++)
                      if (e || u in s) {
                          if (s[u] === n)
                              return e || u || 0
                      }
              return !e && -1
          }
      }
  }
  , function(e, t, n) {
      var i = n(23);
      var r = Math.max;
      var a = Math.min;
      e.exports = function(e, t) {
          e = i(e);
          return e < 0 ? r(e + t, 0) : a(e, t)
      }
  }
  , function(e, t, n) {
      var i = n(4).document;
      e.exports = i && i.documentElement
  }
  , function(e, t, n) {
      var i = n(9);
      var r = n(21);
      var a = n(28)("IE_PROTO");
      var o = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
          e = r(e);
          if (i(e, a))
              return e[a];
          if (typeof e.constructor == "function" && e instanceof e.constructor) {
              return e.constructor.prototype
          }
          return e instanceof Object ? o : null
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(39);
      var r = n(7);
      var a = n(21);
      var o = n(74);
      var s = n(75);
      var l = n(46);
      var u = n(76);
      var c = n(77);
      r(r.S + r.F * !n(79)(function(e) {
          Array.from(e)
      }), "Array", {
          from: function e(t) {
              var n = a(t);
              var r = typeof this == "function" ? this : Array;
              var f = arguments.length;
              var d = f > 1 ? arguments[1] : undefined;
              var v = d !== undefined;
              var h = 0;
              var p = c(n);
              var m, g, y, w;
              if (v)
                  d = i(d, f > 2 ? arguments[2] : undefined, 2);
              if (p != undefined && !(r == Array && s(p))) {
                  for (w = p.call(n),
                  g = new r; !(y = w.next()).done; h++) {
                      u(g, h, v ? o(w, d, [y.value, h], true) : y.value)
                  }
              } else {
                  m = l(n.length);
                  for (g = new r(m); m > h; h++) {
                      u(g, h, v ? d(n[h], h) : n[h])
                  }
              }
              g.length = h;
              return g
          }
      })
  }
  , function(e, t, n) {
      var i = n(15);
      e.exports = function(e, t, n, r) {
          try {
              return r ? t(i(n)[0], n[1]) : t(n)
          } catch (t) {
              var a = e["return"];
              if (a !== undefined)
                  i(a.call(e));
              throw t
          }
      }
  }
  , function(e, t, n) {
      var i = n(18);
      var r = n(3)("iterator");
      var a = Array.prototype;
      e.exports = function(e) {
          return e !== undefined && (i.Array === e || a[r] === e)
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(5);
      var r = n(17);
      e.exports = function(e, t, n) {
          if (t in e)
              i.f(e, t, r(0, n));
          else
              e[t] = n
      }
  }
  , function(e, t, n) {
      var i = n(78);
      var r = n(3)("iterator");
      var a = n(18);
      e.exports = n(2).getIteratorMethod = function(e) {
          if (e != undefined)
              return e[r] || e["@@iterator"] || a[i(e)]
      }
  }
  , function(e, t, n) {
      var i = n(27);
      var r = n(3)("toStringTag");
      var a = i(function() {
          return arguments
      }()) == "Arguments";
      var o = function(e, t) {
          try {
              return e[t]
          } catch (e) {}
      };
      e.exports = function(e) {
          var t, n, s;
          return e === undefined ? "Undefined" : e === null ? "Null" : typeof (n = o(t = Object(e), r)) == "string" ? n : a ? i(t) : (s = i(t)) == "Object" && typeof t.callee == "function" ? "Arguments" : s
      }
  }
  , function(e, t, n) {
      var i = n(3)("iterator");
      var r = false;
      try {
          var a = [7][i]();
          a["return"] = function() {
              r = true
          }
          ;
          Array.from(a, function() {
              throw 2
          })
      } catch (e) {}
      e.exports = function(e, t) {
          if (!t && !r)
              return false;
          var n = false;
          try {
              var a = [7];
              var o = a[i]();
              o.next = function() {
                  return {
                      done: n = true
                  }
              }
              ;
              a[i] = function() {
                  return o
              }
              ;
              e(a)
          } catch (e) {}
          return n
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(32);
      var r = v(i);
      var a = n(48);
      var o = v(a);
      t.default = function(e) {
          if (e.interaction) {
              h(e.interaction)
          }
          if (e.positioning) {
              p(e.positioning)
          }
      }
      ;
      var s = n(14);
      var l = v(s);
      var u = n(101);
      var c = v(u);
      var f = n(0);
      var d = v(f);
      function v(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      function h(e) {
          e = (0,
          o.default)({
              selectors: [],
              indicatingSelecter: "a",
              rootElementEvents: false,
              requireClick: function e() {
                  return false
              },
              toggleOnFocus: true,
              activate: function t(n) {
                  var i = (0,
                  d.default)(n);
                  if (e.indicatingSelecter) {
                      i.find(e.indicatingSelecter + ":first").addClass(e.activeClass)
                  } else {
                      i.addClass(e.activeClass)
                  }
                  i.find(e.nestedSelector + ":first").addClass(e.activeClass)
              },
              deactivate: function t(n) {
                  var i = (0,
                  d.default)(n);
                  if (e.indicatingSelecter) {
                      i.find(e.indicatingSelecter + ":first").removeClass(e.activeClass)
                  } else {
                      i.removeClass(e.activeClass)
                  }
                  i.find(e.nestedSelector + ":first").removeClass(e.activeClass)
              },
              isActive: function t(n) {
                  var i = (0,
                  d.default)(n);
                  if (e.indicatingSelecter) {
                      return i.find(e.indicatingSelecter + ":first").hasClass(e.activeClass)
                  } else {
                      return i.hasClass(e.activeClass)
                  }
              },
              deactivateChildren: function t(n, i) {
                  (0,
                  d.default)(n).find(e.nestedSelector).each(function() {
                      var t = (0,
                      d.default)(this);
                      if (!t.hasClass(e.activeClass)) {
                          return
                      }
                      t.removeClass(e.activeClass);
                      if ("function" === typeof i) {
                          i(this)
                      }
                  })
              },
              deactivateChild: null,
              activeClass: "x-active",
              nestedSelector: ".sub-menu",
              findSiblings: null,
              closeSiblings: true
          }, "object" === (typeof e === "undefined" ? "undefined" : (0,
          r.default)(e)) ? e : {});
          (0,
          l.default)(e.selectors, function(i) {
              var r = (0,
              d.default)(i);
              var a = r;
              var o = false;
              i._stemAllowFocusIn = true;
              if (!e.rootElementEvents) {
                  a = a.find(e.indicatingSelecter + ":first")
              }
              a.on("mousedown touch", f);
              a.on("touchstart", function() {
                  i._stemAllowFocusIn = false
              });
              if (e.toggleOnFocus) {
                  a.on("focusin", l);
                  r.on("focusout", u)
              }
              if (!e.requireClick(i)) {
                  a.one("touchstart", function() {
                      o = true
                  });
                  var s = (0,
                  c.default)(i, function() {
                      if (o) {
                          return
                      }
                      a.off("mousedown touch", f);
                      t(i, true)
                  }, function() {
                      if (o) {
                          return
                      }
                      t(i, false)
                  });
                  s.options({
                      interval: 50,
                      timeout: 500
                  })
              }
              function l() {
                  if (i._stemAllowFocusIn) {
                      n(i, t(i, true))
                  }
              }
              function u() {
                  setTimeout(function() {
                      if (!d.default.contains(r[0], document.activeElement)) {
                          n(i, t(i, false))
                      }
                  }, 0)
              }
              function f(r) {
                  if ("mousedown" === r.type) {
                      (0,
                      d.default)(r.currentTarget).one("click", function(e) {
                          e.preventDefault()
                      })
                  }
                  r.preventDefault();
                  r.stopPropagation();
                  var a = t(i);
                  n(i, a);
                  if (a && e.closeSiblings) {
                      var o = [];
                      if ("function" === typeof e.findSiblings) {
                          o = e.findSiblings(i)
                      } else {
                          (0,
                          d.default)(i).siblings().each(function() {
                              o.push(this)
                          })
                      }
                      o.forEach(function(e) {
                          t(e, false);
                          n(e, false)
                      })
                  }
              }
          });
          function t(t, n) {
              t._stemAllowFocusIn = true;
              if ("undefined" === typeof n) {
                  n = !e.isActive(t)
              }
              if (n) {
                  if ("function" === typeof e.beforeActivate) {
                      e.beforeActivate(t)
                  }
                  e.activate(t);
                  if ("function" === typeof e.afterActivate) {
                      e.afterActivate(t)
                  }
              } else {
                  if ("function" === typeof e.beforeDeactivate) {
                      e.beforeDeactivate(t)
                  }
                  e.deactivate(t);
                  if ("function" === typeof e.afterDeactivate) {
                      e.afterDeactivate(t)
                  }
              }
              return e.isActive(t)
          }
          function n(t, n) {
              if ("function" !== typeof e.deactivateChildren) {
                  return
              }
              clearTimeout(t._stemCloseChildrenTimer);
              if (!n) {
                  t._stemCloseChildrenTimer = setTimeout(function() {
                      e.deactivateChildren(t, e.deactivateChild)
                  }, 1e3)
              }
          }
      }
      function p(e) {
          e = (0,
          o.default)({
              attr: "x-stem"
          }, "object" === (typeof e === "undefined" ? "undefined" : (0,
          r.default)(e)) ? e : {});
          var t = e.attr;
          function n(e) {
              var r = [];
              function a(e, i) {
                  if (!i && e.hasAttribute("data-" + t)) {
                      r.push(e);
                      n(e);
                      return
                  }
                  if (e.children) {
                      for (var o = 0; o < e.children.length; o++) {
                          a(e.children[o])
                      }
                  }
              }
              a(e, true);
              var o = u(function() {
                  i(e);
                  setTimeout(function() {
                      r.forEach(function(e) {
                          return e.dispatchEvent(new CustomEvent(t + ":update"))
                      })
                  }, 0)
              }, 25);
              e.addEventListener(t + ":update", o, false);
              if (e.hasAttribute("data-" + t + "-top")) {
                  e.dispatchEvent(new CustomEvent(t + ":update"));
                  window.addEventListener("resize", o, false);
                  window.addEventListener("scroll", o, false)
              }
          }
          (0,
          l.default)("[data-" + t + "-top]", n);
          function i(e) {
              var n = s(e).getBoundingClientRect();
              var i = e.getBoundingClientRect();
              var r = {
                  t: n.top - i.height,
                  r: n.left + n.width + i.width,
                  b: n.top + i.height,
                  l: n.left - i.width
              };
              var o;
              if (e.hasAttribute("data-" + t + "-top")) {
                  var l = "ltr" === window.getComputedStyle(e).direction;
                  var u = -1 !== e.getAttribute("data-" + t + "-top").indexOf("r");
                  o = {
                      y: true,
                      x: !!(l ^ u)
                  };
                  r.b += n.height;
                  r.r += n.width
              } else {
                  var c = a(e);
                  o = {
                      y: -1 !== c.indexOf("d"),
                      x: -1 !== c.indexOf("r")
                  }
              }
              r.r = window.innerWidth - r.r;
              r.b = window.innerHeight - r.b;
              if (o.x && r.r < 0) {
                  if (r.r < r.l) {
                      o.x = false
                  }
              } else if (r.l < 0) {
                  if (r.l < r.r) {
                      o.x = true
                  }
              }
              if (o.y && r.b < 0) {
                  if (r.b < r.t) {
                      o.y = false
                  }
              } else if (r.t < 0) {
                  if (r.t < r.b) {
                      o.y = true
                  }
              }
              e.setAttribute("data-" + t, (o.y ? "d" : "u") + (o.x ? "r" : "l"))
          }
          function a(e) {
              if (null === e.parentElement) {
                  return "tr"
              }
              if (e.parentElement.hasAttribute("data-" + t)) {
                  return e.parentElement.getAttribute("data-" + t)
              }
              return a(e.parentElement)
          }
          function s(e) {
              if (null === e.parentElement) {
                  return document.body
              }
              if ("relative" === window.getComputedStyle(e.parentElement, null).position) {
                  return e.parentElement
              }
              return s(e.parentElement)
          }
          function u(e, t) {
              var n, i = true;
              return function() {
                  if (i) {
                      e.call();
                      i = false;
                      clearTimeout(n);
                      setTimeout(function() {
                          i = true
                      }, t)
                  } else {
                      clearTimeout(n);
                      n = setTimeout(e, t)
                  }
              }
          }
      }
  }
  , function(e, t, n) {
      e.exports = {
          default: n(82),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(37);
      n(83);
      e.exports = n(33).f("iterator")
  }
  , function(e, t, n) {
      n(84);
      var i = n(4);
      var r = n(11);
      var a = n(18);
      var o = n(3)("toStringTag");
      var s = ("CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList," + "DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement," + "MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList," + "SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList," + "TextTrackList,TouchList").split(",");
      for (var l = 0; l < s.length; l++) {
          var u = s[l];
          var c = i[u];
          var f = c && c.prototype;
          if (f && !f[o])
              r(f, o, u);
          a[u] = a.Array
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(85);
      var r = n(86);
      var a = n(18);
      var o = n(10);
      e.exports = n(38)(Array, "Array", function(e, t) {
          this._t = o(e);
          this._i = 0;
          this._k = t
      }, function() {
          var e = this._t;
          var t = this._k;
          var n = this._i++;
          if (!e || n >= e.length) {
              this._t = undefined;
              return r(1)
          }
          if (t == "keys")
              return r(0, n);
          if (t == "values")
              return r(0, e[n]);
          return r(0, [n, e[n]])
      }, "values");
      a.Arguments = a.Array;
      i("keys");
      i("values");
      i("entries")
  }
  , function(e, t) {
      e.exports = function() {}
  }
  , function(e, t) {
      e.exports = function(e, t) {
          return {
              value: t,
              done: !!e
          }
      }
  }
  , function(e, t, n) {
      e.exports = {
          default: n(88),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(89);
      n(95);
      n(96);
      n(97);
      e.exports = n(2).Symbol
  }
  , function(e, t, n) {
      "use strict";
      var i = n(4);
      var r = n(9);
      var a = n(8);
      var o = n(7);
      var s = n(42);
      var l = n(90).KEY;
      var u = n(12);
      var c = n(29);
      var f = n(31);
      var d = n(20);
      var v = n(3);
      var h = n(33);
      var p = n(34);
      var m = n(91);
      var g = n(92);
      var y = n(15);
      var w = n(16);
      var b = n(10);
      var x = n(26);
      var S = n(17);
      var T = n(43);
      var C = n(93);
      var E = n(94);
      var _ = n(5);
      var A = n(13);
      var M = E.f;
      var k = _.f;
      var O = C.f;
      var P = i.Symbol;
      var L = i.JSON;
      var I = L && L.stringify;
      var W = "prototype";
      var N = v("_hidden");
      var H = v("toPrimitive");
      var j = {}.propertyIsEnumerable;
      var D = c("symbol-registry");
      var z = c("symbols");
      var Y = c("op-symbols");
      var X = Object[W];
      var R = typeof P == "function";
      var F = i.QObject;
      var B = !F || !F[W] || !F[W].findChild;
      var $ = a && u(function() {
          return T(k({}, "a", {
              get: function() {
                  return k(this, "a", {
                      value: 7
                  }).a
              }
          })).a != 7
      }) ? function(e, t, n) {
          var i = M(X, t);
          if (i)
              delete X[t];
          k(e, t, n);
          if (i && e !== X)
              k(X, t, i)
      }
      : k;
      var q = function(e) {
          var t = z[e] = T(P[W]);
          t._k = e;
          return t
      };
      var G = R && typeof P.iterator == "symbol" ? function(e) {
          return typeof e == "symbol"
      }
      : function(e) {
          return e instanceof P
      }
      ;
      var V = function e(t, n, i) {
          if (t === X)
              V(Y, n, i);
          y(t);
          n = x(n, true);
          y(i);
          if (r(z, n)) {
              if (!i.enumerable) {
                  if (!r(t, N))
                      k(t, N, S(1, {}));
                  t[N][n] = true
              } else {
                  if (r(t, N) && t[N][n])
                      t[N][n] = false;
                  i = T(i, {
                      enumerable: S(0, false)
                  })
              }
              return $(t, n, i)
          }
          return k(t, n, i)
      };
      var K = function e(t, n) {
          y(t);
          var i = m(n = b(n));
          var r = 0;
          var a = i.length;
          var o;
          while (a > r)
              V(t, o = i[r++], n[o]);
          return t
      };
      var U = function e(t, n) {
          return n === undefined ? T(t) : K(T(t), n)
      };
      var Q = function e(t) {
          var n = j.call(this, t = x(t, true));
          if (this === X && r(z, t) && !r(Y, t))
              return false;
          return n || !r(this, t) || !r(z, t) || r(this, N) && this[N][t] ? n : true
      };
      var J = function e(t, n) {
          t = b(t);
          n = x(n, true);
          if (t === X && r(z, n) && !r(Y, n))
              return;
          var i = M(t, n);
          if (i && r(z, n) && !(r(t, N) && t[N][n]))
              i.enumerable = true;
          return i
      };
      var Z = function e(t) {
          var n = O(b(t));
          var i = [];
          var a = 0;
          var o;
          while (n.length > a) {
              if (!r(z, o = n[a++]) && o != N && o != l)
                  i.push(o)
          }
          return i
      };
      var ee = function e(t) {
          var n = t === X;
          var i = O(n ? Y : b(t));
          var a = [];
          var o = 0;
          var s;
          while (i.length > o) {
              if (r(z, s = i[o++]) && (n ? r(X, s) : true))
                  a.push(z[s])
          }
          return a
      };
      if (!R) {
          P = function e() {
              if (this instanceof P)
                  throw TypeError("Symbol is not a constructor!");
              var t = d(arguments.length > 0 ? arguments[0] : undefined);
              var n = function(e) {
                  if (this === X)
                      n.call(Y, e);
                  if (r(this, N) && r(this[N], t))
                      this[N][t] = false;
                  $(this, t, S(1, e))
              };
              if (a && B)
                  $(X, t, {
                      configurable: true,
                      set: n
                  });
              return q(t)
          }
          ;
          s(P[W], "toString", function e() {
              return this._k
          });
          E.f = J;
          _.f = V;
          n(47).f = C.f = Z;
          n(19).f = Q;
          n(35).f = ee;
          if (a && !n(25)) {
              s(X, "propertyIsEnumerable", Q, true)
          }
          h.f = function(e) {
              return q(v(e))
          }
      }
      o(o.G + o.W + o.F * !R, {
          Symbol: P
      });
      for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; )
          v(te[ne++]);
      for (var ie = A(v.store), re = 0; ie.length > re; )
          p(ie[re++]);
      o(o.S + o.F * !R, "Symbol", {
          for: function(e) {
              return r(D, e += "") ? D[e] : D[e] = P(e)
          },
          keyFor: function e(t) {
              if (!G(t))
                  throw TypeError(t + " is not a symbol!");
              for (var n in D)
                  if (D[n] === t)
                      return n
          },
          useSetter: function() {
              B = true
          },
          useSimple: function() {
              B = false
          }
      });
      o(o.S + o.F * !R, "Object", {
          create: U,
          defineProperty: V,
          defineProperties: K,
          getOwnPropertyDescriptor: J,
          getOwnPropertyNames: Z,
          getOwnPropertySymbols: ee
      });
      L && o(o.S + o.F * (!R || u(function() {
          var e = P();
          return I([e]) != "[null]" || I({
              a: e
          }) != "{}" || I(Object(e)) != "{}"
      })), "JSON", {
          stringify: function e(t) {
              var n = [t];
              var i = 1;
              var r, a;
              while (arguments.length > i)
                  n.push(arguments[i++]);
              a = r = n[1];
              if (!w(r) && t === undefined || G(t))
                  return;
              if (!g(r))
                  r = function(e, t) {
                      if (typeof a == "function")
                          t = a.call(this, e, t);
                      if (!G(t))
                          return t
                  }
                  ;
              n[1] = r;
              return I.apply(L, n)
          }
      });
      P[W][H] || n(11)(P[W], H, P[W].valueOf);
      f(P, "Symbol");
      f(Math, "Math", true);
      f(i.JSON, "JSON", true)
  }
  , function(e, t, n) {
      var i = n(20)("meta");
      var r = n(16);
      var a = n(9);
      var o = n(5).f;
      var s = 0;
      var l = Object.isExtensible || function() {
          return true
      }
      ;
      var u = !n(12)(function() {
          return l(Object.preventExtensions({}))
      });
      var c = function(e) {
          o(e, i, {
              value: {
                  i: "O" + ++s,
                  w: {}
              }
          })
      };
      var f = function(e, t) {
          if (!r(e))
              return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
          if (!a(e, i)) {
              if (!l(e))
                  return "F";
              if (!t)
                  return "E";
              c(e)
          }
          return e[i].i
      };
      var d = function(e, t) {
          if (!a(e, i)) {
              if (!l(e))
                  return true;
              if (!t)
                  return false;
              c(e)
          }
          return e[i].w
      };
      var v = function(e) {
          if (u && h.NEED && l(e) && !a(e, i))
              c(e);
          return e
      };
      var h = e.exports = {
          KEY: i,
          NEED: false,
          fastKey: f,
          getWeak: d,
          onFreeze: v
      }
  }
  , function(e, t, n) {
      var i = n(13);
      var r = n(35);
      var a = n(19);
      e.exports = function(e) {
          var t = i(e);
          var n = r.f;
          if (n) {
              var o = n(e);
              var s = a.f;
              var l = 0;
              var u;
              while (o.length > l)
                  if (s.call(e, u = o[l++]))
                      t.push(u)
          }
          return t
      }
  }
  , function(e, t, n) {
      var i = n(27);
      e.exports = Array.isArray || function e(t) {
          return i(t) == "Array"
      }
  }
  , function(e, t, n) {
      var i = n(10);
      var r = n(47).f;
      var a = {}.toString;
      var o = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      var s = function(e) {
          try {
              return r(e)
          } catch (e) {
              return o.slice()
          }
      };
      e.exports.f = function e(t) {
          return o && a.call(t) == "[object Window]" ? s(t) : r(i(t))
      }
  }
  , function(e, t, n) {
      var i = n(19);
      var r = n(17);
      var a = n(10);
      var o = n(26);
      var s = n(9);
      var l = n(40);
      var u = Object.getOwnPropertyDescriptor;
      t.f = n(8) ? u : function e(t, n) {
          t = a(t);
          n = o(n, true);
          if (l)
              try {
                  return u(t, n)
              } catch (e) {}
          if (s(t, n))
              return r(!i.f.call(t, n), t[n])
      }
  }
  , function(e, t) {}
  , function(e, t, n) {
      n(34)("asyncIterator")
  }
  , function(e, t, n) {
      n(34)("observable")
  }
  , function(e, t, n) {
      n(99);
      e.exports = n(2).Object.assign
  }
  , function(e, t, n) {
      var i = n(7);
      i(i.S + i.F, "Object", {
          assign: n(100)
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(13);
      var r = n(35);
      var a = n(19);
      var o = n(21);
      var s = n(45);
      var l = Object.assign;
      e.exports = !l || n(12)(function() {
          var e = {};
          var t = {};
          var n = Symbol();
          var i = "abcdefghijklmnopqrst";
          e[n] = 7;
          i.split("").forEach(function(e) {
              t[e] = e
          });
          return l({}, e)[n] != 7 || Object.keys(l({}, t)).join("") != i
      }) ? function e(t, n) {
          var l = o(t);
          var u = arguments.length;
          var c = 1;
          var f = r.f;
          var d = a.f;
          while (u > c) {
              var v = s(arguments[c++]);
              var h = f ? i(v).concat(f(v)) : i(v);
              var p = h.length;
              var m = 0;
              var g;
              while (p > m)
                  if (d.call(v, g = h[m++]))
                      l[g] = v[g]
          }
          return l
      }
      : l
  }
  , function(e, t, n) {
      "use strict";
      var i = n(102);
      e.exports = function(e, t, n) {
          var r, a, o, s;
          var l = {}
            , u = 0
            , c = 0;
          var f = {
              sensitivity: 7,
              interval: 100,
              timeout: 0
          };
          function d(e, t) {
              if (c)
                  c = clearTimeout(c);
              u = 0;
              return n.call(e, t)
          }
          function v(e) {
              r = e.clientX;
              a = e.clientY
          }
          function h(e, n) {
              if (c)
                  c = clearTimeout(c);
              if (Math.abs(o - r) + Math.abs(s - a) < f.sensitivity) {
                  u = 1;
                  return t.call(e, n)
              } else {
                  o = r;
                  s = a;
                  c = setTimeout(function() {
                      h(e, n)
                  }, f.interval)
              }
          }
          l.options = function(e) {
              f = i({}, f, e);
              return l
          }
          ;
          function p(t) {
              if (c)
                  c = clearTimeout(c);
              e.removeEventListener("mousemove", v, false);
              if (u !== 1) {
                  o = t.clientX;
                  s = t.clientY;
                  e.addEventListener("mousemove", v, false);
                  c = setTimeout(function() {
                      h(e, t)
                  }, f.interval)
              }
              return this
          }
          function m(t) {
              if (c)
                  c = clearTimeout(c);
              e.removeEventListener("mousemove", v, false);
              if (u === 1) {
                  c = setTimeout(function() {
                      d(e, t)
                  }, f.timeout)
              }
              return this
          }
          l.remove = function() {
              if (!e)
                  return;
              e.removeEventListener("mouseover", p, false);
              e.removeEventListener("mouseout", m, false)
          }
          ;
          if (e) {
              e.addEventListener("mouseover", p, false);
              e.addEventListener("mouseout", m, false)
          }
          return l
      }
  }
  , function(e, t) {
      e.exports = i;
      var n = Object.prototype.hasOwnProperty;
      function i() {
          var e = {};
          for (var t = 0; t < arguments.length; t++) {
              var i = arguments[t];
              for (var r in i) {
                  if (n.call(i, r)) {
                      e[r] = i[r]
                  }
              }
          }
          return e
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      t.default = function(e) {
          var t = e.selector
            , n = t === undefined ? 'a[href*="#"]' : t
            , i = e.offset
            , a = i === undefined ? function(e) {
              return e
          }
          : i
            , o = e.easing
            , s = o === undefined ? "swing" : o
            , l = e.duration
            , u = l === undefined ? 850 : l
            , c = e.before
            , f = c === undefined ? function() {}
          : c
            , d = e.after
            , v = d === undefined ? function() {}
          : d
            , h = e.initialMove
            , p = h === undefined ? true : h
            , m = e.allowScroll
            , g = m === undefined ? function() {
              return true
          }
          : m;
          var y = (0,
          r.default)("body");
          var w = (0,
          r.default)(window);
          var b = false;
          y.on("touchmove", function() {
              b = true
          });
          y.on("touchstart", function() {
              b = false
          });
          if (p && window.location.hash) {
              w.on("load", function() {
                  return x(window.location.hash, 1)
              })
          }
          y.on("touchend click", n, function(e) {
              var t = this;
              var n = void 0;
              var i = (0,
              r.default)(this);
              var a = i.attr("href");
              var o = "#" + a.split("#").pop();
              if (b || o === "#" || !g(this, e, o)) {
                  return
              }
              try {
                  n = (0,
                  r.default)(o);
                  if (0 === n.length) {
                      return
                  }
              } catch (e) {
                  return
              }
              e.preventDefault();
              if (window.history.pushState) {
                  window.history.pushState(null, null, o);
                  window.dispatchEvent(new CustomEvent("tcoHistoryPush"))
              }
              f({
                  $target: n,
                  anchor: this,
                  $anchor: i,
                  hash: o
              });
              x(n, u, s, function(e) {
                  v({
                      $target: n,
                      anchor: t,
                      $anchor: i,
                      hash: o,
                      error: e
                  })
              })
          });
          function x(e, t) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "linear";
              var i = arguments[3];
              if ("string" === typeof e) {
                  try {
                      e = (0,
                      r.default)(e)
                  } catch (e) {
                      return "function" === typeof i ? i({
                          error: e
                      }) : null
                  }
              }
              if (!e || 0 === e.length) {
                  return
              }
              var o = void 0;
              if ("function" === typeof i) {
                  o = function e() {
                      if (!o.done) {
                          i();
                          o.done = true
                      }
                  }
              }
              var s = a(e.offset().top) + 1;
              (0,
              r.default)("html, body").animate({
                  scrollTop: s
              }, t, n, o)
          }
      }
      ;
      var i = n(0);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = n(105);
      var r = l(i);
      t.default = function(e) {
          var t = e.selector
            , n = t === undefined ? 'a[href*="#"]' : t
            , i = e.offset
            , a = i === undefined ? function() {
              return 0
          }
          : i
            , l = e.activate
            , u = l === undefined ? function() {}
          : l
            , c = e.deactivate
            , f = c === undefined ? function() {}
          : c
            , d = e.throttle
            , v = d === undefined ? 50 : d
            , h = e.ignorePatterns
            , p = h === undefined ? [] : h;
          var m = {
              hash: null
          };
          var g = [];
          var y = [];
          (0,
          o.default)(n, function(e) {
              return g.push(e)
          }, {
              init: function e() {
                  window.addEventListener("scroll", (0,
                  s.throttle)(x, v));
                  window.addEventListener("load", function() {
                      return setTimeout(x, 250)
                  })
              },
              debounced: w,
              debounceDelay: 15
          });
          function w() {
              g = g.filter(function(e) {
                  return window.document.body.contains(e)
              });
              y = (0,
              r.default)(g.reduce(function(e, t) {
                  var n = t.getAttribute("href");
                  var i = "#" + n.split("#").pop();
                  if (i === "#" || !b(i) || p.reduce(function(e, t) {
                      return e || i.match(t)
                  }, false)) {
                      return e
                  }
                  if (!e[i]) {
                      try {
                          var r = document.querySelector(i);
                          if (r) {
                              e[i] = {
                                  hash: i,
                                  target: r,
                                  anchors: [t]
                              }
                          }
                      } catch (e) {
                          if (window.csGlobal.debug) {
                              console.warn("Invalid scrollspy selector", i)
                          }
                      }
                  } else {
                      e[i].anchors.push(t)
                  }
                  return e
              }, {})).sort(function(e, t) {
                  return e.target.getBoundingClientRect().top > t.target.getBoundingClientRect().top
              })
          }
          function b(e) {
              return /^#[A-Za-z]+[\w\-:.]*$/.test(e)
          }
          function x(e, t) {
              var n = (0,
              s.scrollTop)();
              var i = a(n);
              var r = m.hash;
              var o = 0 === n ? false : y.find(function(e, t) {
                  var r = e.target;
                  var a = r.getBoundingClientRect()
                    , o = a.top
                    , s = a.height;
                  var l = o + s;
                  var u = y[t + 1];
                  if (u && u.target) {
                      var c = u.target.getBoundingClientRect();
                      l = c.top
                  }
                  return n + o <= i && n + l >= i
              });
              m = o && o.hash ? o : {
                  hash: null
              };
              if (r === m.hash && !t) {
                  return
              }
              y.filter(function(e) {
                  var t = e.hash;
                  return t !== m.hash
              }).reduce(function(e, t) {
                  var n = t.anchors;
                  return e.concat(n.filter(function(t) {
                      return !e.includes(t)
                  }))
              }, []).forEach(f);
              if (m.anchors) {
                  m.anchors.forEach(u)
              }
          }
          return {
              refreshTargets: w,
              triggerScrollSpy: function e() {
                  x(null, true)
              }
          }
      }
      ;
      var a = n(14);
      var o = l(a);
      var s = n(36);
      function l(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
  }
  , function(e, t, n) {
      e.exports = {
          default: n(106),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(107);
      e.exports = n(2).Object.values
  }
  , function(e, t, n) {
      var i = n(7);
      var r = n(108)(false);
      i(i.S, "Object", {
          values: function e(t) {
              return r(t)
          }
      })
  }
  , function(e, t, n) {
      var i = n(13);
      var r = n(10);
      var a = n(19).f;
      e.exports = function(e) {
          return function(t) {
              var n = r(t);
              var o = i(n);
              var s = o.length;
              var l = 0;
              var u = [];
              var c;
              while (s > l)
                  if (a.call(n, c = o[l++])) {
                      u.push(e ? [c, n[c]] : n[c])
                  }
              return u
          }
      }
  }
  , function(e, t, n) {
      (function(e) {
          (function(t) {
              var n = true;
              t.flexslider = function(i, r) {
                  var a = t(i);
                  if (typeof r.rtl == "undefined" && t("html").attr("dir") == "rtl") {
                      r.rtl = true
                  }
                  a.vars = t.extend({}, t.flexslider.defaults, r);
                  var o = a.vars.namespace, s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, l = ("ontouchstart"in window || s || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch, u = "click touchend MSPointerUp keyup", c = "", f, d = a.vars.direction === "vertical", v = a.vars.reverse, h = a.vars.itemWidth > 0, p = a.vars.animation === "fade", m = a.vars.asNavFor !== "", g = {};
                  t.data(i, "flexslider", a);
                  g = {
                      init: function() {
                          a.animating = false;
                          a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0, 10);
                          if (isNaN(a.currentSlide)) {
                              a.currentSlide = 0
                          }
                          a.animatingTo = a.currentSlide;
                          a.atEnd = a.currentSlide === 0 || a.currentSlide === a.last;
                          a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" "));
                          a.slides = t(a.vars.selector, a);
                          a.container = t(a.containerSelector, a);
                          a.count = a.slides.length;
                          a.syncExists = t(a.vars.sync).length > 0;
                          if (a.vars.animation === "slide") {
                              a.vars.animation = "swing"
                          }
                          a.prop = d ? "top" : a.vars.rtl ? "marginRight" : "marginLeft";
                          a.args = {};
                          a.manualPause = false;
                          a.stopped = false;
                          a.started = false;
                          a.startTimeout = null;
                          a.transitions = !a.vars.video && !p && a.vars.useCSS && function() {
                              var e = document.createElement("div")
                                , t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                              for (var n in t) {
                                  if (e.style[t[n]] !== undefined) {
                                      a.pfx = t[n].replace("Perspective", "").toLowerCase();
                                      a.prop = "-" + a.pfx + "-transform";
                                      return true
                                  }
                              }
                              return false
                          }();
                          a.ensureAnimationEnd = "";
                          if (a.vars.controlsContainer !== "")
                              a.controlsContainer = t(a.vars.controlsContainer).length > 0 && t(a.vars.controlsContainer);
                          if (a.vars.manualControls !== "")
                              a.manualControls = t(a.vars.manualControls).length > 0 && t(a.vars.manualControls);
                          if (a.vars.customDirectionNav !== "")
                              a.customDirectionNav = t(a.vars.customDirectionNav).length === 2 && t(a.vars.customDirectionNav);
                          if (a.vars.randomize) {
                              a.slides.sort(function() {
                                  return Math.round(Math.random()) - .5
                              });
                              a.container.empty().append(a.slides)
                          }
                          a.doMath();
                          a.setup("init");
                          if (a.vars.controlNav) {
                              g.controlNav.setup()
                          }
                          if (a.vars.directionNav) {
                              g.directionNav.setup()
                          }
                          if (a.vars.keyboard && (t(a.containerSelector).length === 1 || a.vars.multipleKeyboard)) {
                              t(document).bind("keyup", function(e) {
                                  var t = e.keyCode;
                                  if (!a.animating && (t === 39 || t === 37)) {
                                      var n = a.vars.rtl ? t === 37 ? a.getTarget("next") : t === 39 ? a.getTarget("prev") : false : t === 39 ? a.getTarget("next") : t === 37 ? a.getTarget("prev") : false;
                                      a.flexAnimate(n, a.vars.pauseOnAction)
                                  }
                              })
                          }
                          if (a.vars.mousewheel) {
                              a.bind("mousewheel", function(e, t, n, i) {
                                  e.preventDefault();
                                  var r = t < 0 ? a.getTarget("next") : a.getTarget("prev");
                                  a.flexAnimate(r, a.vars.pauseOnAction)
                              })
                          }
                          if (a.vars.pausePlay) {
                              g.pausePlay.setup()
                          }
                          if (a.vars.slideshow && a.vars.pauseInvisible) {
                              g.pauseInvisible.init()
                          }
                          if (a.vars.slideshow) {
                              if (a.vars.pauseOnHover) {
                                  a.hover(function() {
                                      if (!a.manualPlay && !a.manualPause) {
                                          a.pause()
                                      }
                                  }, function() {
                                      if (!a.manualPause && !a.manualPlay && !a.stopped) {
                                          a.play()
                                      }
                                  })
                              }
                              if (!a.vars.pauseInvisible || !g.pauseInvisible.isHidden()) {
                                  a.vars.initDelay > 0 ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play()
                              }
                          }
                          if (m) {
                              g.asNav.setup()
                          }
                          if (l && a.vars.touch) {
                              g.touch()
                          }
                          if (!p || p && a.vars.smoothHeight) {
                              t(window).bind("resize orientationchange focus", g.resize)
                          }
                          a.find("img").attr("draggable", "false");
                          setTimeout(function() {
                              a.vars.start(a)
                          }, 200)
                      },
                      asNav: {
                          setup: function() {
                              a.asNav = true;
                              a.animatingTo = Math.floor(a.currentSlide / a.move);
                              a.currentItem = a.currentSlide;
                              a.slides.removeClass(o + "active-slide").eq(a.currentItem).addClass(o + "active-slide");
                              if (!s) {
                                  a.slides.on(u, function(e) {
                                      e.preventDefault();
                                      var n = t(this)
                                        , i = n.index();
                                      var r;
                                      if (a.vars.rtl) {
                                          r = -1 * (n.offset().right - t(a).scrollLeft())
                                      } else {
                                          r = n.offset().left - t(a).scrollLeft()
                                      }
                                      if (r <= 0 && n.hasClass(o + "active-slide")) {
                                          a.flexAnimate(a.getTarget("prev"), true)
                                      } else if (!t(a.vars.asNavFor).data("flexslider").animating && !n.hasClass(o + "active-slide")) {
                                          a.direction = a.currentItem < i ? "next" : "prev";
                                          a.flexAnimate(i, a.vars.pauseOnAction, false, true, true)
                                      }
                                  })
                              } else {
                                  i._slider = a;
                                  a.slides.each(function() {
                                      var e = this;
                                      e._gesture = new MSGesture;
                                      e._gesture.target = e;
                                      e.addEventListener("MSPointerDown", function(e) {
                                          e.preventDefault();
                                          if (e.currentTarget._gesture) {
                                              e.currentTarget._gesture.addPointer(e.pointerId)
                                          }
                                      }, false);
                                      e.addEventListener("MSGestureTap", function(e) {
                                          e.preventDefault();
                                          var n = t(this)
                                            , i = n.index();
                                          if (!t(a.vars.asNavFor).data("flexslider").animating && !n.hasClass("active")) {
                                              a.direction = a.currentItem < i ? "next" : "prev";
                                              a.flexAnimate(i, a.vars.pauseOnAction, false, true, true)
                                          }
                                      })
                                  })
                              }
                          }
                      },
                      controlNav: {
                          setup: function() {
                              if (!a.manualControls) {
                                  g.controlNav.setupPaging()
                              } else {
                                  g.controlNav.setupManual()
                              }
                          },
                          setupPaging: function() {
                              var e = a.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging", n = 1, i, r;
                              a.controlNavScaffold = t('<ol class="' + o + "control-nav " + o + e + '"></ol>');
                              if (a.pagingCount > 1) {
                                  for (var s = 0; s < a.pagingCount; s++) {
                                      r = a.slides.eq(s);
                                      if (undefined === r.attr("data-thumb-alt")) {
                                          r.attr("data-thumb-alt", "")
                                      }
                                      var l = "" !== r.attr("data-thumb-alt") ? l = ' alt="' + r.attr("data-thumb-alt") + '"' : "";
                                      i = a.vars.controlNav === "thumbnails" ? '<img src="' + r.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + n + "</a>";
                                      if ("thumbnails" === a.vars.controlNav && true === a.vars.thumbCaptions) {
                                          var f = r.attr("data-thumbcaption");
                                          if ("" !== f && undefined !== f) {
                                              i += '<span class="' + o + 'caption">' + f + "</span>"
                                          }
                                      }
                                      a.controlNavScaffold.append("<li>" + i + "</li>");
                                      n++
                                  }
                              }
                              a.controlsContainer ? t(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                              g.controlNav.set();
                              g.controlNav.active();
                              a.controlNavScaffold.delegate("a, img", u, function(e) {
                                  e.preventDefault();
                                  if (c === "" || c === e.type) {
                                      var n = t(this)
                                        , i = a.controlNav.index(n);
                                      if (!n.hasClass(o + "active")) {
                                          a.direction = i > a.currentSlide ? "next" : "prev";
                                          a.flexAnimate(i, a.vars.pauseOnAction)
                                      }
                                  }
                                  if (c === "") {
                                      c = e.type
                                  }
                                  g.setToClearWatchedEvent()
                              })
                          },
                          setupManual: function() {
                              a.controlNav = a.manualControls;
                              g.controlNav.active();
                              a.controlNav.bind(u, function(e) {
                                  e.preventDefault();
                                  if (c === "" || c === e.type) {
                                      var n = t(this)
                                        , i = a.controlNav.index(n);
                                      if (!n.hasClass(o + "active")) {
                                          i > a.currentSlide ? a.direction = "next" : a.direction = "prev";
                                          a.flexAnimate(i, a.vars.pauseOnAction)
                                      }
                                  }
                                  if (c === "") {
                                      c = e.type
                                  }
                                  g.setToClearWatchedEvent()
                              })
                          },
                          set: function() {
                              var e = a.vars.controlNav === "thumbnails" ? "img" : "a";
                              a.controlNav = t("." + o + "control-nav li " + e, a.controlsContainer ? a.controlsContainer : a)
                          },
                          active: function() {
                              a.controlNav.removeClass(o + "active").eq(a.animatingTo).addClass(o + "active")
                          },
                          update: function(e, n) {
                              if (a.pagingCount > 1 && e === "add") {
                                  a.controlNavScaffold.append(t('<li><a href="#">' + a.count + "</a></li>"))
                              } else if (a.pagingCount === 1) {
                                  a.controlNavScaffold.find("li").remove()
                              } else {
                                  a.controlNav.eq(n).closest("li").remove()
                              }
                              g.controlNav.set();
                              a.pagingCount > 1 && a.pagingCount !== a.controlNav.length ? a.update(n, e) : g.controlNav.active()
                          }
                      },
                      directionNav: {
                          setup: function() {
                              var e = t('<ul class="' + o + 'direction-nav"><li class="' + o + 'nav-prev"><a class="' + o + 'prev" href="#">' + a.vars.prevText + '</a></li><li class="' + o + 'nav-next"><a class="' + o + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
                              if (a.customDirectionNav) {
                                  a.directionNav = a.customDirectionNav
                              } else if (a.controlsContainer) {
                                  t(a.controlsContainer).append(e);
                                  a.directionNav = t("." + o + "direction-nav li a", a.controlsContainer)
                              } else {
                                  a.append(e);
                                  a.directionNav = t("." + o + "direction-nav li a", a)
                              }
                              g.directionNav.update();
                              a.directionNav.bind(u, function(e) {
                                  e.preventDefault();
                                  var n;
                                  if (c === "" || c === e.type) {
                                      n = t(this).hasClass(o + "next") ? a.getTarget("next") : a.getTarget("prev");
                                      a.flexAnimate(n, a.vars.pauseOnAction)
                                  }
                                  if (c === "") {
                                      c = e.type
                                  }
                                  g.setToClearWatchedEvent()
                              })
                          },
                          update: function() {
                              var e = o + "disabled";
                              if (a.pagingCount === 1) {
                                  a.directionNav.addClass(e).attr("tabindex", "-1")
                              } else if (!a.vars.animationLoop) {
                                  if (a.animatingTo === 0) {
                                      a.directionNav.removeClass(e).filter("." + o + "prev").addClass(e).attr("tabindex", "-1")
                                  } else if (a.animatingTo === a.last) {
                                      a.directionNav.removeClass(e).filter("." + o + "next").addClass(e).attr("tabindex", "-1")
                                  } else {
                                      a.directionNav.removeClass(e).removeAttr("tabindex")
                                  }
                              } else {
                                  a.directionNav.removeClass(e).removeAttr("tabindex")
                              }
                          }
                      },
                      pausePlay: {
                          setup: function() {
                              var e = t('<div class="' + o + 'pauseplay"><a href="#"></a></div>');
                              if (a.controlsContainer) {
                                  a.controlsContainer.append(e);
                                  a.pausePlay = t("." + o + "pauseplay a", a.controlsContainer)
                              } else {
                                  a.append(e);
                                  a.pausePlay = t("." + o + "pauseplay a", a)
                              }
                              g.pausePlay.update(a.vars.slideshow ? o + "pause" : o + "play");
                              a.pausePlay.bind(u, function(e) {
                                  e.preventDefault();
                                  if (c === "" || c === e.type) {
                                      if (t(this).hasClass(o + "pause")) {
                                          a.manualPause = true;
                                          a.manualPlay = false;
                                          a.pause()
                                      } else {
                                          a.manualPause = false;
                                          a.manualPlay = true;
                                          a.play()
                                      }
                                  }
                                  if (c === "") {
                                      c = e.type
                                  }
                                  g.setToClearWatchedEvent()
                              })
                          },
                          update: function(e) {
                              e === "play" ? a.pausePlay.removeClass(o + "pause").addClass(o + "play").html(a.vars.playText) : a.pausePlay.removeClass(o + "play").addClass(o + "pause").html(a.vars.pauseText)
                          }
                      },
                      touch: function() {
                          var t, n, r, o, l, u, c, f, m, g = false, y = 0, w = 0, b = 0;
                          if (!s) {
                              c = function(e) {
                                  if (a.animating) {
                                      e.preventDefault()
                                  } else if (window.navigator.msPointerEnabled || e.touches.length === 1) {
                                      a.pause();
                                      o = d ? a.h : a.w;
                                      u = Number(new Date);
                                      y = e.touches[0].pageX;
                                      w = e.touches[0].pageY;
                                      r = h && v && a.animatingTo === a.last ? 0 : h && v ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : v ? (a.last - a.currentSlide + a.cloneOffset) * o : (a.currentSlide + a.cloneOffset) * o;
                                      t = d ? w : y;
                                      n = d ? y : w;
                                      i.addEventListener("touchmove", f, false);
                                      i.addEventListener("touchend", m, false)
                                  }
                              }
                              ;
                              f = function(e) {
                                  y = e.touches[0].pageX;
                                  w = e.touches[0].pageY;
                                  l = d ? t - w : (a.vars.rtl ? -1 : 1) * (t - y);
                                  g = d ? Math.abs(l) < Math.abs(y - n) : Math.abs(l) < Math.abs(w - n);
                                  var i = 500;
                                  if (!g || Number(new Date) - u > i) {
                                      e.preventDefault();
                                      if (!p && a.transitions) {
                                          if (!a.vars.animationLoop) {
                                              l = l / (a.currentSlide === 0 && l < 0 || a.currentSlide === a.last && l > 0 ? Math.abs(l) / o + 2 : 1)
                                          }
                                          a.setProps(r + l, "setTouch")
                                      }
                                  }
                              }
                              ;
                              m = function(e) {
                                  i.removeEventListener("touchmove", f, false);
                                  if (a.animatingTo === a.currentSlide && !g && !(l === null)) {
                                      var s = v ? -l : l
                                        , c = s > 0 ? a.getTarget("next") : a.getTarget("prev");
                                      if (a.canAdvance(c) && (Number(new Date) - u < 550 && Math.abs(s) > 50 || Math.abs(s) > o / 2)) {
                                          a.flexAnimate(c, a.vars.pauseOnAction)
                                      } else {
                                          if (!p) {
                                              a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, true)
                                          }
                                      }
                                  }
                                  i.removeEventListener("touchend", m, false);
                                  t = null;
                                  n = null;
                                  l = null;
                                  r = null
                              }
                              ;
                              i.addEventListener("touchstart", c, false)
                          } else {
                              i.style.msTouchAction = "none";
                              i._gesture = new MSGesture;
                              i._gesture.target = i;
                              i.addEventListener("MSPointerDown", x, false);
                              i._slider = a;
                              i.addEventListener("MSGestureChange", S, false);
                              i.addEventListener("MSGestureEnd", T, false);
                              function x(e) {
                                  e.stopPropagation();
                                  if (a.animating) {
                                      e.preventDefault()
                                  } else {
                                      a.pause();
                                      i._gesture.addPointer(e.pointerId);
                                      b = 0;
                                      o = d ? a.h : a.w;
                                      u = Number(new Date);
                                      r = h && v && a.animatingTo === a.last ? 0 : h && v ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : v ? (a.last - a.currentSlide + a.cloneOffset) * o : (a.currentSlide + a.cloneOffset) * o
                                  }
                              }
                              function S(t) {
                                  t.stopPropagation();
                                  var n = t.target._slider;
                                  if (!n) {
                                      return
                                  }
                                  var a = -t.translationX
                                    , s = -t.translationY;
                                  b = b + (d ? s : a);
                                  l = (n.vars.rtl ? -1 : 1) * b;
                                  g = d ? Math.abs(b) < Math.abs(-a) : Math.abs(b) < Math.abs(-s);
                                  if (t.detail === t.MSGESTURE_FLAG_INERTIA) {
                                      e(function() {
                                          i._gesture.stop()
                                      });
                                      return
                                  }
                                  if (!g || Number(new Date) - u > 500) {
                                      t.preventDefault();
                                      if (!p && n.transitions) {
                                          if (!n.vars.animationLoop) {
                                              l = b / (n.currentSlide === 0 && b < 0 || n.currentSlide === n.last && b > 0 ? Math.abs(b) / o + 2 : 1)
                                          }
                                          n.setProps(r + l, "setTouch")
                                      }
                                  }
                              }
                              function T(e) {
                                  e.stopPropagation();
                                  var i = e.target._slider;
                                  if (!i) {
                                      return
                                  }
                                  if (i.animatingTo === i.currentSlide && !g && !(l === null)) {
                                      var a = v ? -l : l
                                        , s = a > 0 ? i.getTarget("next") : i.getTarget("prev");
                                      if (i.canAdvance(s) && (Number(new Date) - u < 550 && Math.abs(a) > 50 || Math.abs(a) > o / 2)) {
                                          i.flexAnimate(s, i.vars.pauseOnAction)
                                      } else {
                                          if (!p) {
                                              i.flexAnimate(i.currentSlide, i.vars.pauseOnAction, true)
                                          }
                                      }
                                  }
                                  t = null;
                                  n = null;
                                  l = null;
                                  r = null;
                                  b = 0
                              }
                          }
                      },
                      resize: function() {
                          if (!a.animating && a.is(":visible")) {
                              if (!h) {
                                  a.doMath()
                              }
                              if (p) {
                                  g.smoothHeight()
                              } else if (h) {
                                  a.slides.width(a.computedW);
                                  a.update(a.pagingCount);
                                  a.setProps()
                              } else if (d) {
                                  a.viewport.height(a.h);
                                  a.setProps(a.h, "setTotal")
                              } else {
                                  if (a.vars.smoothHeight) {
                                      g.smoothHeight()
                                  }
                                  a.newSlides.width(a.computedW);
                                  a.setProps(a.computedW, "setTotal")
                              }
                          }
                      },
                      smoothHeight: function(e) {
                          if (!d || p) {
                              var t = p ? a : a.viewport;
                              e ? t.animate({
                                  height: a.slides.eq(a.animatingTo).innerHeight()
                              }, e) : t.innerHeight(a.slides.eq(a.animatingTo).innerHeight())
                          }
                      },
                      sync: function(e) {
                          var n = t(a.vars.sync).data("flexslider")
                            , i = a.animatingTo;
                          switch (e) {
                          case "animate":
                              n.flexAnimate(i, a.vars.pauseOnAction, false, true);
                              break;
                          case "play":
                              if (!n.playing && !n.asNav) {
                                  n.play()
                              }
                              break;
                          case "pause":
                              n.pause();
                              break
                          }
                      },
                      uniqueID: function(e) {
                          e.filter("[id]").add(e.find("[id]")).each(function() {
                              var e = t(this);
                              e.attr("id", e.attr("id") + "_clone")
                          });
                          return e
                      },
                      pauseInvisible: {
                          visProp: null,
                          init: function() {
                              var e = g.pauseInvisible.getHiddenProp();
                              if (e) {
                                  var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                                  document.addEventListener(t, function() {
                                      if (g.pauseInvisible.isHidden()) {
                                          if (a.startTimeout) {
                                              clearTimeout(a.startTimeout)
                                          } else {
                                              a.pause()
                                          }
                                      } else {
                                          if (a.started) {
                                              a.play()
                                          } else {
                                              if (a.vars.initDelay > 0) {
                                                  setTimeout(a.play, a.vars.initDelay)
                                              } else {
                                                  a.play()
                                              }
                                          }
                                      }
                                  })
                              }
                          },
                          isHidden: function() {
                              var e = g.pauseInvisible.getHiddenProp();
                              if (!e) {
                                  return false
                              }
                              return document[e]
                          },
                          getHiddenProp: function() {
                              var e = ["webkit", "moz", "ms", "o"];
                              if ("hidden"in document) {
                                  return "hidden"
                              }
                              for (var t = 0; t < e.length; t++) {
                                  if (e[t] + "Hidden"in document) {
                                      return e[t] + "Hidden"
                                  }
                              }
                              return null
                          }
                      },
                      setToClearWatchedEvent: function() {
                          clearTimeout(f);
                          f = setTimeout(function() {
                              c = ""
                          }, 3e3)
                      }
                  };
                  a.flexAnimate = function(e, n, i, r, s) {
                      if (!a.vars.animationLoop && e !== a.currentSlide) {
                          a.direction = e > a.currentSlide ? "next" : "prev"
                      }
                      if (m && a.pagingCount === 1)
                          a.direction = a.currentItem < e ? "next" : "prev";
                      if (!a.animating && (a.canAdvance(e, s) || i) && a.is(":visible")) {
                          if (m && r) {
                              var u = t(a.vars.asNavFor).data("flexslider");
                              a.atEnd = e === 0 || e === a.count - 1;
                              u.flexAnimate(e, true, false, true, s);
                              a.direction = a.currentItem < e ? "next" : "prev";
                              u.direction = a.direction;
                              if (Math.ceil((e + 1) / a.visible) - 1 !== a.currentSlide && e !== 0) {
                                  a.currentItem = e;
                                  a.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide");
                                  e = Math.floor(e / a.visible)
                              } else {
                                  a.currentItem = e;
                                  a.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide");
                                  return false
                              }
                          }
                          a.animating = true;
                          a.animatingTo = e;
                          if (n) {
                              a.pause()
                          }
                          a.vars.before(a);
                          if (a.syncExists && !s) {
                              g.sync("animate")
                          }
                          if (a.vars.controlNav) {
                              g.controlNav.active()
                          }
                          if (!h) {
                              a.slides.removeClass(o + "active-slide").eq(e).addClass(o + "active-slide")
                          }
                          a.atEnd = e === 0 || e === a.last;
                          if (a.vars.directionNav) {
                              g.directionNav.update()
                          }
                          if (e === a.last) {
                              a.vars.end(a);
                              if (!a.vars.animationLoop) {
                                  a.pause()
                              }
                          }
                          if (!p) {
                              var c = d ? a.slides.filter(":first").height() : a.computedW, f, y, w;
                              if (h) {
                                  f = a.vars.itemMargin;
                                  w = (a.itemW + f) * a.move * a.animatingTo;
                                  y = w > a.limit && a.visible !== 1 ? a.limit : w
                              } else if (a.currentSlide === 0 && e === a.count - 1 && a.vars.animationLoop && a.direction !== "next") {
                                  y = v ? (a.count + a.cloneOffset) * c : 0
                              } else if (a.currentSlide === a.last && e === 0 && a.vars.animationLoop && a.direction !== "prev") {
                                  y = v ? 0 : (a.count + 1) * c
                              } else {
                                  y = v ? (a.count - 1 - e + a.cloneOffset) * c : (e + a.cloneOffset) * c
                              }
                              a.setProps(y, "", a.vars.animationSpeed);
                              if (a.transitions) {
                                  if (!a.vars.animationLoop || !a.atEnd) {
                                      a.animating = false;
                                      a.currentSlide = a.animatingTo
                                  }
                                  a.container.unbind("webkitTransitionEnd transitionend");
                                  a.container.bind("webkitTransitionEnd transitionend", function() {
                                      clearTimeout(a.ensureAnimationEnd);
                                      a.wrapup(c)
                                  });
                                  clearTimeout(a.ensureAnimationEnd);
                                  a.ensureAnimationEnd = setTimeout(function() {
                                      a.wrapup(c)
                                  }, a.vars.animationSpeed + 100)
                              } else {
                                  a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
                                      a.wrapup(c)
                                  })
                              }
                          } else {
                              if (!l) {
                                  a.slides.eq(a.currentSlide).css({
                                      zIndex: 1
                                  }).animate({
                                      opacity: 0
                                  }, a.vars.animationSpeed, a.vars.easing);
                                  a.slides.eq(e).css({
                                      zIndex: 2
                                  }).animate({
                                      opacity: 1
                                  }, a.vars.animationSpeed, a.vars.easing, a.wrapup)
                              } else {
                                  a.slides.eq(a.currentSlide).css({
                                      opacity: 0,
                                      zIndex: 1
                                  });
                                  a.slides.eq(e).css({
                                      opacity: 1,
                                      zIndex: 2
                                  });
                                  a.wrapup(c)
                              }
                          }
                          if (a.vars.smoothHeight) {
                              g.smoothHeight(a.vars.animationSpeed)
                          }
                      }
                  }
                  ;
                  a.wrapup = function(e) {
                      if (!p && !h) {
                          if (a.currentSlide === 0 && a.animatingTo === a.last && a.vars.animationLoop) {
                              a.setProps(e, "jumpEnd")
                          } else if (a.currentSlide === a.last && a.animatingTo === 0 && a.vars.animationLoop) {
                              a.setProps(e, "jumpStart")
                          }
                      }
                      a.animating = false;
                      a.currentSlide = a.animatingTo;
                      a.vars.after(a)
                  }
                  ;
                  a.animateSlides = function() {
                      if (!a.animating && n) {
                          a.flexAnimate(a.getTarget("next"))
                      }
                  }
                  ;
                  a.pause = function() {
                      clearInterval(a.animatedSlides);
                      a.animatedSlides = null;
                      a.playing = false;
                      if (a.vars.pausePlay) {
                          g.pausePlay.update("play")
                      }
                      if (a.syncExists) {
                          g.sync("pause")
                      }
                  }
                  ;
                  a.play = function() {
                      if (a.playing) {
                          clearInterval(a.animatedSlides)
                      }
                      a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed);
                      a.started = a.playing = true;
                      if (a.vars.pausePlay) {
                          g.pausePlay.update("pause")
                      }
                      if (a.syncExists) {
                          g.sync("play")
                      }
                  }
                  ;
                  a.stop = function() {
                      a.pause();
                      a.stopped = true
                  }
                  ;
                  a.canAdvance = function(e, t) {
                      var n = m ? a.pagingCount - 1 : a.last;
                      return t ? true : m && a.currentItem === a.count - 1 && e === 0 && a.direction === "prev" ? true : m && a.currentItem === 0 && e === a.pagingCount - 1 && a.direction !== "next" ? false : e === a.currentSlide && !m ? false : a.vars.animationLoop ? true : a.atEnd && a.currentSlide === 0 && e === n && a.direction !== "next" ? false : a.atEnd && a.currentSlide === n && e === 0 && a.direction === "next" ? false : true
                  }
                  ;
                  a.getTarget = function(e) {
                      a.direction = e;
                      if (e === "next") {
                          return a.currentSlide === a.last ? 0 : a.currentSlide + 1
                      } else {
                          return a.currentSlide === 0 ? a.last : a.currentSlide - 1
                      }
                  }
                  ;
                  a.setProps = function(e, t, n) {
                      var i = function() {
                          var n = e ? e : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo
                            , i = function() {
                              if (h) {
                                  return t === "setTouch" ? e : v && a.animatingTo === a.last ? 0 : v ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : n
                              } else {
                                  switch (t) {
                                  case "setTotal":
                                      return v ? (a.count - 1 - a.currentSlide + a.cloneOffset) * e : (a.currentSlide + a.cloneOffset) * e;
                                  case "setTouch":
                                      return v ? e : e;
                                  case "jumpEnd":
                                      return v ? e : a.count * e;
                                  case "jumpStart":
                                      return v ? a.count * e : e;
                                  default:
                                      return e
                                  }
                              }
                          }();
                          return i * (a.vars.rtl ? 1 : -1) + "px"
                      }();
                      if (a.transitions) {
                          i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + ((a.vars.rtl ? -1 : 1) * parseInt(i) + "px") + ",0,0)";
                          n = n !== undefined ? n / 1e3 + "s" : "0s";
                          a.container.css("-" + a.pfx + "-transition-duration", n);
                          a.container.css("transition-duration", n)
                      }
                      a.args[a.prop] = i;
                      if (a.transitions || n === undefined) {
                          a.container.css(a.args)
                      }
                      a.container.css("transform", i)
                  }
                  ;
                  a.setup = function(e) {
                      if (!p) {
                          var n, i;
                          if (e === "init") {
                              a.viewport = t('<div class="' + o + 'viewport"></div>').css({
                                  overflow: "hidden",
                                  position: "relative"
                              }).appendTo(a).append(a.container);
                              a.cloneCount = 0;
                              a.cloneOffset = 0;
                              if (v) {
                                  i = t.makeArray(a.slides).reverse();
                                  a.slides = t(i);
                                  a.container.empty().append(a.slides)
                              }
                          }
                          if (a.vars.animationLoop && !h) {
                              a.cloneCount = 2;
                              a.cloneOffset = 1;
                              if (e !== "init") {
                                  a.container.find(".clone").remove()
                              }
                              a.container.append(g.uniqueID(a.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(a.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))
                          }
                          a.newSlides = t(a.vars.selector, a);
                          n = v ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                          if (d && !h) {
                              a.container.height((a.count + a.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                              setTimeout(function() {
                                  a.newSlides.css({
                                      display: "block"
                                  });
                                  a.doMath();
                                  a.viewport.height(a.h);
                                  a.setProps(n * a.h, "init")
                              }, e === "init" ? 100 : 0)
                          } else {
                              a.container.width((a.count + a.cloneCount) * 200 + "%");
                              a.setProps(n * a.computedW, "init");
                              setTimeout(function() {
                                  a.doMath();
                                  if (a.vars.rtl) {
                                      a.newSlides.css({
                                          width: a.computedW,
                                          marginRight: a.computedM,
                                          float: "left",
                                          display: "block"
                                      })
                                  } else {
                                      a.newSlides.css({
                                          width: a.computedW,
                                          marginRight: a.computedM,
                                          float: "left",
                                          display: "block"
                                      })
                                  }
                                  if (a.vars.smoothHeight) {
                                      g.smoothHeight()
                                  }
                              }, e === "init" ? 100 : 0)
                          }
                      } else {
                          if (a.vars.rtl) {
                              a.slides.css({
                                  width: "100%",
                                  float: "right",
                                  marginLeft: "-100%",
                                  position: "relative"
                              })
                          } else {
                              a.slides.css({
                                  width: "100%",
                                  float: "left",
                                  marginRight: "-100%",
                                  position: "relative"
                              })
                          }
                          if (e === "init") {
                              if (!l) {
                                  if (a.vars.fadeFirstSlide == false) {
                                      a.slides.css({
                                          opacity: 0,
                                          display: "block",
                                          zIndex: 1
                                      }).eq(a.currentSlide).css({
                                          zIndex: 2
                                      }).css({
                                          opacity: 1
                                      })
                                  } else {
                                      a.slides.css({
                                          opacity: 0,
                                          display: "block",
                                          zIndex: 1
                                      }).eq(a.currentSlide).css({
                                          zIndex: 2
                                      }).animate({
                                          opacity: 1
                                      }, a.vars.animationSpeed, a.vars.easing)
                                  }
                              } else {
                                  a.slides.css({
                                      opacity: 0,
                                      display: "block",
                                      webkitTransition: "opacity " + a.vars.animationSpeed / 1e3 + "s ease",
                                      zIndex: 1
                                  }).eq(a.currentSlide).css({
                                      opacity: 1,
                                      zIndex: 2
                                  })
                              }
                          }
                          if (a.vars.smoothHeight) {
                              g.smoothHeight()
                          }
                      }
                      if (!h) {
                          a.slides.removeClass(o + "active-slide").eq(a.currentSlide).addClass(o + "active-slide")
                      }
                      a.vars.init(a)
                  }
                  ;
                  a.doMath = function() {
                      var e = a.slides.first()
                        , t = a.vars.itemMargin
                        , n = a.vars.minItems
                        , i = a.vars.maxItems;
                      a.w = a.viewport === undefined ? a.width() : a.viewport.width();
                      a.h = e.height();
                      a.boxPadding = e.outerWidth() - e.width();
                      if (h) {
                          a.itemT = a.vars.itemWidth + t;
                          a.itemM = t;
                          a.minW = n ? n * a.itemT : a.w;
                          a.maxW = i ? i * a.itemT - t : a.w;
                          a.itemW = a.minW > a.w ? (a.w - t * (n - 1)) / n : a.maxW < a.w ? (a.w - t * (i - 1)) / i : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth;
                          a.visible = Math.floor(a.w / a.itemW);
                          a.move = a.vars.move > 0 && a.vars.move < a.visible ? a.vars.move : a.visible;
                          a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1);
                          a.last = a.pagingCount - 1;
                          a.limit = a.pagingCount === 1 ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + t * (a.count - 1) : (a.itemW + t) * a.count - a.w - t
                      } else {
                          a.itemW = a.w;
                          a.itemM = t;
                          a.pagingCount = a.count;
                          a.last = a.count - 1
                      }
                      a.computedW = a.itemW - a.boxPadding;
                      a.computedM = a.itemM
                  }
                  ;
                  a.update = function(e, t) {
                      a.doMath();
                      if (!h) {
                          if (e < a.currentSlide) {
                              a.currentSlide += 1
                          } else if (e <= a.currentSlide && e !== 0) {
                              a.currentSlide -= 1
                          }
                          a.animatingTo = a.currentSlide
                      }
                      if (a.vars.controlNav && !a.manualControls) {
                          if (t === "add" && !h || a.pagingCount > a.controlNav.length) {
                              g.controlNav.update("add")
                          } else if (t === "remove" && !h || a.pagingCount < a.controlNav.length) {
                              if (h && a.currentSlide > a.last) {
                                  a.currentSlide -= 1;
                                  a.animatingTo -= 1
                              }
                              g.controlNav.update("remove", a.last)
                          }
                      }
                      if (a.vars.directionNav) {
                          g.directionNav.update()
                      }
                  }
                  ;
                  a.addSlide = function(e, n) {
                      var i = t(e);
                      a.count += 1;
                      a.last = a.count - 1;
                      if (d && v) {
                          n !== undefined ? a.slides.eq(a.count - n).after(i) : a.container.prepend(i)
                      } else {
                          n !== undefined ? a.slides.eq(n).before(i) : a.container.append(i)
                      }
                      a.update(n, "add");
                      a.slides = t(a.vars.selector + ":not(.clone)", a);
                      a.setup();
                      a.vars.added(a)
                  }
                  ;
                  a.removeSlide = function(e) {
                      var n = isNaN(e) ? a.slides.index(t(e)) : e;
                      a.count -= 1;
                      a.last = a.count - 1;
                      if (isNaN(e)) {
                          t(e, a.slides).remove()
                      } else {
                          d && v ? a.slides.eq(a.last).remove() : a.slides.eq(e).remove()
                      }
                      a.doMath();
                      a.update(n, "remove");
                      a.slides = t(a.vars.selector + ":not(.clone)", a);
                      a.setup();
                      a.vars.removed(a)
                  }
                  ;
                  g.init()
              }
              ;
              t(window).blur(function(e) {
                  n = false
              }).focus(function(e) {
                  n = true
              });
              t.flexslider.defaults = {
                  namespace: "flex-",
                  selector: ".slides > li",
                  animation: "fade",
                  easing: "swing",
                  direction: "horizontal",
                  reverse: false,
                  animationLoop: true,
                  smoothHeight: false,
                  startAt: 0,
                  slideshow: true,
                  slideshowSpeed: 7e3,
                  animationSpeed: 600,
                  initDelay: 0,
                  randomize: false,
                  fadeFirstSlide: true,
                  thumbCaptions: false,
                  pauseOnAction: true,
                  pauseOnHover: false,
                  pauseInvisible: true,
                  useCSS: true,
                  touch: true,
                  video: false,
                  controlNav: true,
                  directionNav: true,
                  prevText: "Previous",
                  nextText: "Next",
                  keyboard: true,
                  multipleKeyboard: false,
                  mousewheel: false,
                  pausePlay: false,
                  pauseText: "Pause",
                  playText: "Play",
                  controlsContainer: "",
                  manualControls: "",
                  customDirectionNav: "",
                  sync: "",
                  asNavFor: "",
                  itemWidth: 0,
                  itemMargin: 0,
                  minItems: 1,
                  maxItems: 0,
                  move: 0,
                  allowOneSlide: true,
                  start: function() {},
                  before: function() {},
                  after: function() {},
                  end: function() {},
                  added: function() {},
                  removed: function() {},
                  init: function() {},
                  rtl: false
              };
              t.fn.flexslider = function(e) {
                  if (e === undefined) {
                      e = {}
                  }
                  if (typeof e === "object") {
                      return this.each(function() {
                          var n = t(this)
                            , i = e.selector ? e.selector : ".slides > li"
                            , r = n.find(i);
                          if (r.length === 1 && e.allowOneSlide === false || r.length === 0) {
                              r.fadeIn(400);
                              if (e.start) {
                                  e.start(n)
                              }
                          } else if (n.data("flexslider") === undefined) {
                              new t.flexslider(this,e)
                          }
                      })
                  } else {
                      var n = t(this).data("flexslider");
                      switch (e) {
                      case "play":
                          n.play();
                          break;
                      case "pause":
                          n.pause();
                          break;
                      case "stop":
                          n.stop();
                          break;
                      case "next":
                          n.flexAnimate(n.getTarget("next"), true);
                          break;
                      case "prev":
                      case "previous":
                          n.flexAnimate(n.getTarget("prev"), true);
                          break;
                      default:
                          if (typeof e === "number") {
                              n.flexAnimate(e, true)
                          }
                      }
                  }
              }
          }
          )(jQuery)
      }
      ).call(t, n(110).setImmediate)
  }
  , function(e, t, n) {
      (function(e) {
          var i = Function.prototype.apply;
          t.setTimeout = function() {
              return new r(i.call(setTimeout, window, arguments),clearTimeout)
          }
          ;
          t.setInterval = function() {
              return new r(i.call(setInterval, window, arguments),clearInterval)
          }
          ;
          t.clearTimeout = t.clearInterval = function(e) {
              if (e) {
                  e.close()
              }
          }
          ;
          function r(e, t) {
              this._id = e;
              this._clearFn = t
          }
          r.prototype.unref = r.prototype.ref = function() {}
          ;
          r.prototype.close = function() {
              this._clearFn.call(window, this._id)
          }
          ;
          t.enroll = function(e, t) {
              clearTimeout(e._idleTimeoutId);
              e._idleTimeout = t
          }
          ;
          t.unenroll = function(e) {
              clearTimeout(e._idleTimeoutId);
              e._idleTimeout = -1
          }
          ;
          t._unrefActive = t.active = function(e) {
              clearTimeout(e._idleTimeoutId);
              var t = e._idleTimeout;
              if (t >= 0) {
                  e._idleTimeoutId = setTimeout(function t() {
                      if (e._onTimeout)
                          e._onTimeout()
                  }, t)
              }
          }
          ;
          n(111);
          t.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof e !== "undefined" && e.setImmediate || this && this.setImmediate;
          t.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof e !== "undefined" && e.clearImmediate || this && this.clearImmediate
      }
      ).call(t, n(51))
  }
  , function(e, t, n) {
      (function(e, t) {
          (function(e, n) {
              "use strict";
              if (e.setImmediate) {
                  return
              }
              var i = 1;
              var r = {};
              var a = false;
              var o = e.document;
              var s;
              function l(e) {
                  if (typeof e !== "function") {
                      e = new Function("" + e)
                  }
                  var t = new Array(arguments.length - 1);
                  for (var n = 0; n < t.length; n++) {
                      t[n] = arguments[n + 1]
                  }
                  var a = {
                      callback: e,
                      args: t
                  };
                  r[i] = a;
                  s(i);
                  return i++
              }
              function u(e) {
                  delete r[e]
              }
              function c(e) {
                  var t = e.callback;
                  var i = e.args;
                  switch (i.length) {
                  case 0:
                      t();
                      break;
                  case 1:
                      t(i[0]);
                      break;
                  case 2:
                      t(i[0], i[1]);
                      break;
                  case 3:
                      t(i[0], i[1], i[2]);
                      break;
                  default:
                      t.apply(n, i);
                      break
                  }
              }
              function f(e) {
                  if (a) {
                      setTimeout(f, 0, e)
                  } else {
                      var t = r[e];
                      if (t) {
                          a = true;
                          try {
                              c(t)
                          } finally {
                              u(e);
                              a = false
                          }
                      }
                  }
              }
              function d() {
                  s = function(e) {
                      t.nextTick(function() {
                          f(e)
                      })
                  }
              }
              function v() {
                  if (e.postMessage && !e.importScripts) {
                      var t = true;
                      var n = e.onmessage;
                      e.onmessage = function() {
                          t = false
                      }
                      ;
                      e.postMessage("", "*");
                      e.onmessage = n;
                      return t
                  }
              }
              function h() {
                  var t = "setImmediate$" + Math.random() + "$";
                  var n = function(n) {
                      if (n.source === e && typeof n.data === "string" && n.data.indexOf(t) === 0) {
                          f(+n.data.slice(t.length))
                      }
                  };
                  if (e.addEventListener) {
                      e.addEventListener("message", n, false)
                  } else {
                      e.attachEvent("onmessage", n)
                  }
                  s = function(n) {
                      e.postMessage(t + n, "*")
                  }
              }
              function p() {
                  var e = new MessageChannel;
                  e.port1.onmessage = function(e) {
                      var t = e.data;
                      f(t)
                  }
                  ;
                  s = function(t) {
                      e.port2.postMessage(t)
                  }
              }
              function m() {
                  var e = o.documentElement;
                  s = function(t) {
                      var n = o.createElement("script");
                      n.onreadystatechange = function() {
                          f(t);
                          n.onreadystatechange = null;
                          e.removeChild(n);
                          n = null
                      }
                      ;
                      e.appendChild(n)
                  }
              }
              function g() {
                  s = function(e) {
                      setTimeout(f, 0, e)
                  }
              }
              var y = Object.getPrototypeOf && Object.getPrototypeOf(e);
              y = y && y.setTimeout ? y : e;
              if ({}.toString.call(e.process) === "[object process]") {
                  d()
              } else if (v()) {
                  h()
              } else if (e.MessageChannel) {
                  p()
              } else if (o && "onreadystatechange"in o.createElement("script")) {
                  m()
              } else {
                  g()
              }
              y.setImmediate = l;
              y.clearImmediate = u
          }
          )(typeof self === "undefined" ? typeof e === "undefined" ? this : e : self)
      }
      ).call(t, n(51), n(112))
  }
  , function(e, t) {
      var n = e.exports = {};
      var i;
      var r;
      function a() {
          throw new Error("setTimeout has not been defined")
      }
      function o() {
          throw new Error("clearTimeout has not been defined")
      }
      (function() {
          try {
              if (typeof setTimeout === "function") {
                  i = setTimeout
              } else {
                  i = a
              }
          } catch (e) {
              i = a
          }
          try {
              if (typeof clearTimeout === "function") {
                  r = clearTimeout
              } else {
                  r = o
              }
          } catch (e) {
              r = o
          }
      }
      )();
      function s(e) {
          if (i === setTimeout) {
              return setTimeout(e, 0)
          }
          if ((i === a || !i) && setTimeout) {
              i = setTimeout;
              return setTimeout(e, 0)
          }
          try {
              return i(e, 0)
          } catch (t) {
              try {
                  return i.call(null, e, 0)
              } catch (t) {
                  return i.call(this, e, 0)
              }
          }
      }
      function l(e) {
          if (r === clearTimeout) {
              return clearTimeout(e)
          }
          if ((r === o || !r) && clearTimeout) {
              r = clearTimeout;
              return clearTimeout(e)
          }
          try {
              return r(e)
          } catch (t) {
              try {
                  return r.call(null, e)
              } catch (t) {
                  return r.call(this, e)
              }
          }
      }
      var u = [];
      var c = false;
      var f;
      var d = -1;
      function v() {
          if (!c || !f) {
              return
          }
          c = false;
          if (f.length) {
              u = f.concat(u)
          } else {
              d = -1
          }
          if (u.length) {
              h()
          }
      }
      function h() {
          if (c) {
              return
          }
          var e = s(v);
          c = true;
          var t = u.length;
          while (t) {
              f = u;
              u = [];
              while (++d < t) {
                  if (f) {
                      f[d].run()
                  }
              }
              d = -1;
              t = u.length
          }
          f = null;
          c = false;
          l(e)
      }
      n.nextTick = function(e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) {
              for (var n = 1; n < arguments.length; n++) {
                  t[n - 1] = arguments[n]
              }
          }
          u.push(new p(e,t));
          if (u.length === 1 && !c) {
              s(h)
          }
      }
      ;
      function p(e, t) {
          this.fun = e;
          this.array = t
      }
      p.prototype.run = function() {
          this.fun.apply(null, this.array)
      }
      ;
      n.title = "browser";
      n.browser = true;
      n.env = {};
      n.argv = [];
      n.version = "";
      n.versions = {};
      function m() {}
      n.on = m;
      n.addListener = m;
      n.once = m;
      n.off = m;
      n.removeListener = m;
      n.removeAllListeners = m;
      n.emit = m;
      n.prependListener = m;
      n.prependOnceListener = m;
      n.listeners = function(e) {
          return []
      }
      ;
      n.binding = function(e) {
          throw new Error("process.binding is not supported")
      }
      ;
      n.cwd = function() {
          return "/"
      }
      ;
      n.chdir = function(e) {
          throw new Error("process.chdir is not supported")
      }
      ;
      n.umask = function() {
          return 0
      }
  }
  , function(e, t, n) {
      "use strict";
      (function(e, t, n) {
          "use strict";
          e.fn.backstretch = function(i, a) {
              if (i === n || i.length === 0) {
                  e.error("No images were supplied for Backstretch")
              }
              if (e(t).scrollTop() === 0) {
                  t.scrollTo(0, 0)
              }
              return this.each(function() {
                  var t = e(this)
                    , n = t.data("backstretch");
                  if (n) {
                      if (typeof i == "string" && typeof n[i] == "function") {
                          n[i](a);
                          return
                      }
                      a = e.extend(n.options, a);
                      n.destroy(true)
                  }
                  n = new r(this,i,a);
                  t.data("backstretch", n)
              })
          }
          ;
          e.backstretch = function(t, n) {
              return e("body").backstretch(t, n).data("backstretch")
          }
          ;
          e.expr[":"].backstretch = function(t) {
              return e(t).data("backstretch") !== n
          }
          ;
          e.fn.backstretch.defaults = {
              centeredX: true,
              centeredY: true,
              duration: 5e3,
              fade: 0
          };
          var i = {
              wrap: {
                  left: 0,
                  top: 0,
                  overflow: "hidden",
                  margin: 0,
                  padding: 0,
                  height: "100%",
                  width: "100%",
                  zIndex: -999999
              },
              img: {
                  position: "absolute",
                  display: "none",
                  margin: 0,
                  padding: 0,
                  border: "none",
                  width: "auto",
                  height: "auto",
                  maxHeight: "none",
                  maxWidth: "none",
                  zIndex: -999999
              }
          };
          var r = function n(r, o, s) {
              this.options = e.extend({}, e.fn.backstretch.defaults, s || {});
              this.images = e.isArray(o) ? o : [o];
              e.each(this.images, function() {
                  e("<img />")[0].src = this
              });
              this.isBody = r === document.body;
              this.$container = e(r);
              this.$root = this.isBody ? a ? e(t) : e(document) : this.$container;
              var l = this.$container.children(".backstretch").first();
              this.$wrap = l.length ? l : e('<div class="backstretch"></div>').css(i.wrap).appendTo(this.$container);
              if (!this.isBody) {
                  var u = this.$container.css("position")
                    , c = this.$container.css("zIndex");
                  this.$container.css({
                      position: u === "static" ? "relative" : u,
                      zIndex: c === "auto" ? 0 : c,
                      background: "none"
                  });
                  this.$wrap.css({
                      zIndex: -999998
                  })
              }
              this.$wrap.css({
                  position: this.isBody && a ? "fixed" : "absolute"
              });
              this.index = 0;
              this.show(this.index);
              e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function() {
                  if (this.isBody && t.pageYOffset === 0) {
                      t.scrollTo(0, 1);
                      this.resize()
                  }
              }, this))
          };
          r.prototype = {
              resize: function e() {
                  try {
                      var n = {
                          left: 0,
                          top: 0
                      }, i = this.isBody ? this.$root.width() : this.$root.innerWidth(), r = i, a = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(), o = r / this.$img.data("ratio"), s;
                      if (o >= a) {
                          s = (o - a) / 2;
                          if (this.options.centeredY) {
                              n.top = "-" + s + "px"
                          }
                      } else {
                          o = a;
                          r = o * this.$img.data("ratio");
                          s = (r - i) / 2;
                          if (this.options.centeredX) {
                              n.left = "-" + s + "px"
                          }
                      }
                      this.$wrap.css({
                          width: i,
                          height: a
                      }).find("img:not(.deleteable)").css({
                          width: r,
                          height: o
                      }).css(n)
                  } catch (e) {}
                  return this
              },
              show: function t(n) {
                  if (Math.abs(n) > this.images.length - 1) {
                      return
                  }
                  var r = this
                    , a = r.$wrap.find("img").addClass("deleteable")
                    , o = {
                      relatedTarget: r.$container[0]
                  };
                  r.$container.trigger(e.Event("backstretch.before", o), [r, n]);
                  this.index = n;
                  clearInterval(r.interval);
                  r.$img = e("<img />").css(i.img).bind("load", function(t) {
                      var i = this.width || e(t.target).width()
                        , s = this.height || e(t.target).height();
                      e(this).data("ratio", i / s);
                      e(this).fadeIn(r.options.speed || r.options.fade, function() {
                          a.remove();
                          if (!r.paused) {
                              r.cycle()
                          }
                          e(["after", "show"]).each(function() {
                              r.$container.trigger(e.Event("backstretch." + this, o), [r, n])
                          })
                      });
                      r.resize()
                  }).appendTo(r.$wrap);
                  r.$img.attr("src", r.images[n]);
                  return r
              },
              next: function e() {
                  return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
              },
              prev: function e() {
                  return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1)
              },
              pause: function e() {
                  this.paused = true;
                  return this
              },
              resume: function e() {
                  this.paused = false;
                  this.next();
                  return this
              },
              cycle: function t() {
                  if (this.images.length > 1) {
                      clearInterval(this.interval);
                      this.interval = setInterval(e.proxy(function() {
                          if (!this.paused) {
                              this.next()
                          }
                      }, this), this.options.duration)
                  }
                  return this
              },
              destroy: function n(i) {
                  e(t).off("resize.backstretch orientationchange.backstretch");
                  clearInterval(this.interval);
                  if (!i) {
                      this.$wrap.remove()
                  }
                  this.$container.removeData("backstretch")
              }
          };
          var a = function() {
              var e = navigator.userAgent
                , n = navigator.platform
                , i = e.match(/AppleWebKit\/([0-9]+)/)
                , r = !!i && i[1]
                , a = e.match(/Fennec\/([0-9]+)/)
                , o = !!a && a[1]
                , s = e.match(/Opera Mobi\/([0-9]+)/)
                , l = !!s && s[1]
                , u = e.match(/MSIE ([0-9]+)/)
                , c = !!u && u[1];
              return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && r && r < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || s && l < 7458 || e.indexOf("Android") > -1 && r && r < 533 || o && o < 6 || "palmGetResource"in t && r && r < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || c && c <= 6)
          }()
      }
      )(jQuery, window)
  }
  , function(e, t, n) {
      "use strict";
      (function(e) {
          var t = function e(t) {
              return t.split("").reverse().join("")
          };
          var n = {
              numberStep: function t(n, i) {
                  var r = Math.floor(n)
                    , a = e(i.elem);
                  a.text(r)
              }
          };
          var i = function e(t) {
              var i = t.elem;
              if (i.nodeType && i.parentNode) {
                  var r = i._animateNumberSetter;
                  if (!r) {
                      r = n.numberStep
                  }
                  r(t.now, t)
              }
          };
          if (!e.Tween || !e.Tween.propHooks) {
              e.fx.step.number = i
          } else {
              e.Tween.propHooks.number = {
                  set: i
              }
          }
          var r = function e(t, n) {
              var i = t.split("").reverse(), r = [], a, o, s;
              for (var l = 0, u = Math.ceil(t.length / n); l < u; l++) {
                  a = "";
                  for (s = 0; s < n; s++) {
                      o = l * n + s;
                      if (o === t.length) {
                          break
                      }
                      a = a + i[o]
                  }
                  r.push(a)
              }
              return r
          };
          var a = function e(n) {
              var i = n.length - 1
                , r = t(n[i]);
              n[i] = t(parseInt(r, 10).toString());
              return n
          };
          e.animateNumber = {
              numberStepFactories: {
                  append: function t(n) {
                      return function(t, i) {
                          var r = Math.floor(t)
                            , a = e(i.elem);
                          a.prop("number", t).text(r + n)
                      }
                  },
                  separator: function n(i, o, s) {
                      i = i || " ";
                      o = o || 3;
                      s = s || "";
                      return function(n, l) {
                          var u = n < 0
                            , c = Math.floor((u ? -1 : 1) * n)
                            , f = c.toString()
                            , d = e(l.elem);
                          if (f.length > o) {
                              var v = r(f, o);
                              f = a(v).join(i);
                              f = t(f)
                          }
                          d.prop("number", n).text((u ? "-" : "") + f + s)
                      }
                  }
              }
          };
          e.fn.animateNumber = function() {
              var t = arguments[0]
                , i = e.extend({}, n, t)
                , r = e(this)
                , a = [i];
              for (var o = 1, s = arguments.length; o < s; o++) {
                  a.push(arguments[o])
              }
              if (t.numberStep) {
                  var l = this.each(function() {
                      this._animateNumberSetter = t.numberStep
                  });
                  var u = i.complete;
                  i.complete = function() {
                      l.each(function() {
                          delete this._animateNumberSetter
                      });
                      if (u) {
                          u.apply(this, arguments)
                      }
                  }
              }
              return r.animate.apply(r, a)
          }
      }
      )(jQuery)
  }
  , function(e, t, n) {
      "use strict";
      var i = n(32);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      !function(e) {
          "use strict";
          var t = function t(n, i) {
              this.el = e(n);
              this.options = e.extend({}, e.fn.typed.defaults, i);
              this.isInput = this.el.is("input");
              this.attr = this.options.attr;
              this.showCursor = this.isInput ? false : this.options.showCursor;
              this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text();
              this.contentType = this.options.contentType;
              this.typeSpeed = this.options.typeSpeed;
              this.startDelay = this.options.startDelay;
              this.backSpeed = this.options.backSpeed;
              this.backDelay = this.options.backDelay;
              this.stringsElement = this.options.stringsElement;
              this.strings = this.options.strings;
              this.strPos = 0;
              this.arrayPos = 0;
              this.stopNum = 0;
              this.loop = this.options.loop;
              this.loopCount = this.options.loopCount;
              this.curLoop = 0;
              this.stop = false;
              this.cursorChar = this.options.cursorChar;
              this.shuffle = this.options.shuffle;
              this.sequence = [];
              this.build()
          };
          t.prototype = {
              constructor: t,
              init: function e() {
                  var t = this;
                  t.timeout = setTimeout(function() {
                      for (var e = 0; e < t.strings.length; ++e) {
                          t.sequence[e] = e
                      }
                      if (t.shuffle)
                          t.sequence = t.shuffleArray(t.sequence);
                      t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                  }, t.startDelay)
              },
              build: function t() {
                  var n = this;
                  if (this.showCursor === true) {
                      this.cursor = e('<span class="typed-cursor">' + this.cursorChar + "</span>");
                      this.el.after(this.cursor)
                  }
                  if (this.stringsElement) {
                      n.strings = [];
                      this.stringsElement.hide();
                      var i = this.stringsElement.find("p");
                      e.each(i, function(t, i) {
                          n.strings.push(e(i).html())
                      })
                  }
                  this.init()
              },
              typewrite: function e(t, n) {
                  if (this.stop === true) {
                      return
                  }
                  var i = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
                  var r = this;
                  r.timeout = setTimeout(function() {
                      var e = 0;
                      var i = t.substr(n);
                      if (i.charAt(0) === "^") {
                          var a = 1;
                          if (/^\^\d+/.test(i)) {
                              i = /\d+/.exec(i)[0];
                              a += i.length;
                              e = parseInt(i)
                          }
                          t = t.substring(0, n) + t.substring(n + a)
                      }
                      if (r.contentType === "html") {
                          var o = t.substr(n).charAt(0);
                          if (o === "<" || o === "&") {
                              var s = "";
                              var l = "";
                              if (o === "<") {
                                  l = ">"
                              } else {
                                  l = ";"
                              }
                              while (t.substr(n).charAt(0) !== l) {
                                  s += t.substr(n).charAt(0);
                                  n++
                              }
                              n++;
                              s += l
                          }
                      }
                      r.timeout = setTimeout(function() {
                          if (n === t.length) {
                              r.options.onStringTyped(r.arrayPos);
                              if (r.arrayPos === r.strings.length - 1) {
                                  r.options.callback();
                                  r.curLoop++;
                                  if (r.loop === false || r.curLoop === r.loopCount)
                                      return
                              }
                              r.timeout = setTimeout(function() {
                                  r.backspace(t, n)
                              }, r.backDelay)
                          } else {
                              if (n === 0)
                                  r.options.preStringTyped(r.arrayPos);
                              var e = t.substr(0, n + 1);
                              if (r.attr) {
                                  r.el.attr(r.attr, e)
                              } else {
                                  if (r.isInput) {
                                      r.el.val(e)
                                  } else if (r.contentType === "html") {
                                      r.el.html(e)
                                  } else {
                                      r.el.text(e)
                                  }
                              }
                              n++;
                              r.typewrite(t, n)
                          }
                      }, e)
                  }, i)
              },
              backspace: function e(t, n) {
                  if (this.stop === true) {
                      return
                  }
                  var i = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
                  var r = this;
                  r.timeout = setTimeout(function() {
                      if (r.contentType === "html") {
                          if (t.substr(n).charAt(0) === ">") {
                              var e = "";
                              while (t.substr(n).charAt(0) !== "<") {
                                  e -= t.substr(n).charAt(0);
                                  n--
                              }
                              n--;
                              e += "<"
                          }
                      }
                      var i = t.substr(0, n);
                      if (r.attr) {
                          r.el.attr(r.attr, i)
                      } else {
                          if (r.isInput) {
                              r.el.val(i)
                          } else if (r.contentType === "html") {
                              r.el.html(i)
                          } else {
                              r.el.text(i)
                          }
                      }
                      if (n > r.stopNum) {
                          n--;
                          r.backspace(t, n)
                      } else if (n <= r.stopNum) {
                          r.arrayPos++;
                          if (r.arrayPos === r.strings.length) {
                              r.arrayPos = 0;
                              if (r.shuffle)
                                  r.sequence = r.shuffleArray(r.sequence);
                              r.init()
                          } else
                              r.typewrite(r.strings[r.sequence[r.arrayPos]], n)
                      }
                  }, i)
              },
              shuffleArray: function e(t) {
                  var n, i, r = t.length;
                  if (r)
                      while (--r) {
                          i = Math.floor(Math.random() * (r + 1));
                          n = t[i];
                          t[i] = t[r];
                          t[r] = n
                      }
                  return t
              },
              reset: function e() {
                  var t = this;
                  clearInterval(t.timeout);
                  var n = this.el.attr("id");
                  this.el.after('<span id="' + n + '"/>');
                  this.el.remove();
                  if (typeof this.cursor !== "undefined") {
                      this.cursor.remove()
                  }
                  t.options.resetCallback()
              }
          };
          e.fn.typed = function(n) {
              return this.each(function() {
                  var i = e(this)
                    , a = i.data("typed")
                    , o = (typeof n === "undefined" ? "undefined" : (0,
                  r.default)(n)) == "object" && n;
                  if (!a)
                      i.data("typed", a = new t(this,o));
                  if (typeof n == "string")
                      a[n]()
              })
          }
          ;
          e.fn.typed.defaults = {
              strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
              stringsElement: null,
              typeSpeed: 0,
              startDelay: 0,
              backSpeed: 0,
              shuffle: false,
              backDelay: 500,
              loop: false,
              loopCount: false,
              showCursor: true,
              cursorChar: "|",
              attr: null,
              contentType: "html",
              callback: function e() {},
              preStringTyped: function e() {},
              onStringTyped: function e() {},
              resetCallback: function e() {}
          }
      }(window.jQuery)
  }
  , function(e, t, n) {
      "use strict";
      var i = n(32);
      var r = v(i);
      var a = n(117);
      var o = v(a);
      var s = n(118);
      var l = v(s);
      var u = n(48);
      var c = v(u);
      var f = n(0);
      var d = v(f);
      function v(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var h = {
          animation: true,
          placement: "top",
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
          trigger: "hover focus",
          title: "",
          container: false
      };
      var p = {
          placement: "right",
          trigger: "click",
          content: "",
          template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      };
      var m = function e(t) {
          return t === "popover" ? (0,
          c.default)({}, h, p) : h
      };
      var g = function() {
          function e(t, n) {
              var i = this;
              (0,
              o.default)(this, e);
              this.type = null;
              this.options = null;
              this.hoverState = null;
              this.$element = null;
              this.enter = function() {
                  i.hoverState = "in";
                  i.show()
              }
              ;
              this.leave = function() {
                  i.hoverState = "out";
                  i.hide()
              }
              ;
              this.toggle = function() {
                  if (i.tip().hasClass("in")) {
                      i.leave()
                  } else {
                      i.enter()
                  }
              }
              ;
              this.type = n.type || "tooltip";
              this.$element = (0,
              d.default)(t);
              this.options = (0,
              c.default)({}, m(this.type), this.$element.data(), n);
              this.$body = (0,
              d.default)("body");
              var r = this.options.trigger.split(" ");
              for (var a = r.length; a--; ) {
                  var s = r[a];
                  if (s == "click") {
                      this.$element.on("click." + this.type, false, this.toggle)
                  } else {
                      var l = s == "hover" ? "mouseenter" : "focusin";
                      var u = s == "hover" ? "mouseleave" : "focusout";
                      this.$element.on(l + "." + this.type, false, this.enter);
                      this.$element.on(u + "." + this.type, false, this.leave)
                  }
              }
              if (this.$element.attr("title") || typeof this.$element.attr("data-original-title") !== "string") {
                  this.$element.attr("data-original-title", this.$element.attr("title") || "").attr("title", "")
              }
          }
          (0,
          l.default)(e, [{
              key: "show",
              value: function e() {
                  var t = d.default.Event("show.bs." + this.type);
                  if (this.getTitle() || this.getContent()) {
                      this.$element.trigger(t);
                      var n = d.default.contains(document.documentElement, this.$element[0]);
                      if (t.isDefaultPrevented() || !n)
                          return;
                      var i = this;
                      var r = this.tip();
                      var a = this.getUID(this.type);
                      this.setContent();
                      r.attr("id", a);
                      this.$element.attr("aria-describedby", a);
                      if (this.options.animation)
                          r.addClass("fade");
                      var o = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement;
                      var s = /\s?auto?\s?/i;
                      var l = s.test(o);
                      if (l)
                          o = o.replace(s, "") || "top";
                      r.detach().css({
                          top: 0,
                          left: 0,
                          display: "block"
                      }).addClass(o).data("bs." + this.type, this);
                      this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                      var u = this.getPosition();
                      var c = r[0].offsetWidth;
                      var f = r[0].offsetHeight;
                      if (l) {
                          var v = o;
                          var h = this.$element.parent();
                          var p = this.getPosition(h);
                          o = o == "bottom" && u.top + u.height + f - p.scroll > p.height ? "top" : o == "top" && u.top - p.scroll - f < 0 ? "bottom" : o == "right" && u.right + c > p.width ? "left" : o == "left" && u.left - c < p.left ? "right" : o;
                          r.removeClass(v).addClass(o)
                      }
                      var m = this.getCalculatedOffset(o, u, c, f);
                      this.applyPlacement(m, o);
                      var g = function e() {
                          i.$element.trigger("shown.bs." + i.type);
                          i.hoverState = null
                      };
                      d.default.support.transition && this.$tip.hasClass("fade") ? r.one("csTransitionEnd", g).csEmulateTransitionEnd(150) : g()
                  }
              }
          }, {
              key: "applyPlacement",
              value: function e(t, n) {
                  var i = this.tip();
                  var r = i[0].offsetWidth;
                  var a = i[0].offsetHeight;
                  var o = parseInt(i.css("margin-top"), 10);
                  var s = parseInt(i.css("margin-left"), 10);
                  if (isNaN(o))
                      o = 0;
                  if (isNaN(s))
                      s = 0;
                  t.top = t.top + o;
                  t.left = t.left + s;
                  d.default.offset.setOffset(i[0], d.default.extend({
                      using: function e(t) {
                          i.css({
                              top: Math.round(t.top),
                              left: Math.round(t.left)
                          })
                      }
                  }, t), 0);
                  i.addClass("in");
                  var l = i[0].offsetWidth;
                  var u = i[0].offsetHeight;
                  if (n == "top" && u != a) {
                      t.top = t.top + a - u
                  }
                  var c = this.getViewportAdjustedDelta(n, t, l, u);
                  if (c.left)
                      t.left += c.left;
                  else
                      t.top += c.top;
                  var f = c.left ? c.left * 2 - r + l : c.top * 2 - a + u;
                  var v = c.left ? "left" : "top";
                  var h = c.left ? "offsetWidth" : "offsetHeight";
                  i.offset(t);
                  this.replaceArrow(f, i[0][h], v)
              }
          }, {
              key: "replaceArrow",
              value: function e(t, n, i) {
                  this.arrow().css(i, t ? 50 * (1 - t / n) + "%" : "")
              }
          }, {
              key: "setContent",
              value: function e() {
                  var t = this.tip();
                  var n = this.getTitle();
                  if (this.type === "popover") {
                      var i = t.find(".popover-title");
                      if (n) {
                          i.text(n)
                      } else {
                          t.find(".popover-title").hide()
                      }
                      t.find(".popover-content").empty().text(this.getContent())
                  } else {
                      t.find(".tooltip-inner").text(n)
                  }
                  t.removeClass("fade in top bottom left right")
              }
          }, {
              key: "hide",
              value: function e() {
                  var t = this;
                  var n = this.tip();
                  var i = d.default.Event("hide.bs." + this.type);
                  this.$element.removeAttr("aria-describedby");
                  function r() {
                      if (t.hoverState != "in")
                          n.detach();
                      t.$element.trigger("hidden.bs." + t.type)
                  }
                  this.$element.trigger(i);
                  if (i.isDefaultPrevented())
                      return;
                  n.removeClass("in");
                  d.default.support.transition && this.$tip.hasClass("fade") ? n.one("csTransitionEnd", r).csEmulateTransitionEnd(150) : r();
                  this.hoverState = null;
                  return this
              }
          }, {
              key: "getContent",
              value: function e() {
                  if (this.type !== "popover")
                      return "";
                  return this.$element.attr("data-content") || this.getContentOption()
              }
          }, {
              key: "getPosition",
              value: function e(t) {
                  t = t || this.$element;
                  var n = t[0];
                  var i = n.tagName == "BODY";
                  return d.default.extend({}, typeof n.getBoundingClientRect == "function" ? n.getBoundingClientRect() : null, {
                      scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
                      width: i ? (0,
                      d.default)(window).width() : t.outerWidth(),
                      height: i ? (0,
                      d.default)(window).height() : t.outerHeight()
                  }, i ? {
                      top: 0,
                      left: 0
                  } : t.offset())
              }
          }, {
              key: "getCalculatedOffset",
              value: function e(t, n, i, r) {
                  return t == "bottom" ? {
                      top: n.top + n.height,
                      left: n.left + n.width / 2 - i / 2
                  } : t == "top" ? {
                      top: n.top - r,
                      left: n.left + n.width / 2 - i / 2
                  } : t == "left" ? {
                      top: n.top + n.height / 2 - r / 2,
                      left: n.left - i
                  } : {
                      top: n.top + n.height / 2 - r / 2,
                      left: n.left + n.width
                  }
              }
          }, {
              key: "getViewportAdjustedDelta",
              value: function e(t, n, i, r) {
                  var a = {
                      top: 0,
                      left: 0
                  };
                  if (!this.$body)
                      return a;
                  var o = this.getPosition(this.$body);
                  if (/right|left/.test(t)) {
                      var s = n.top - o.scroll;
                      var l = n.top - o.scroll + r;
                      if (s < o.top) {
                          a.top = o.top - s
                      } else if (l > o.top + o.height) {
                          a.top = o.top + o.height - l
                      }
                  } else {
                      var u = n.left;
                      var c = n.left + i;
                      if (u < o.left) {
                          a.left = o.left - u
                      } else if (c > o.width) {
                          a.left = o.left + o.width - c
                      }
                  }
                  return a
              }
          }, {
              key: "getTitle",
              value: function e() {
                  return this.$element.attr("data-original-title") || this.getTitleOption() || this.type !== "popover" && this.getContentOption()
              }
          }, {
              key: "getTitleOption",
              value: function e() {
                  return typeof this.options.title == "function" ? this.options.title.call(this.$element[0]) : this.options.title || ""
              }
          }, {
              key: "getContentOption",
              value: function e() {
                  return typeof this.options.content == "function" ? this.options.content.call(this.$element[0]) : this.options.content || ""
              }
          }, {
              key: "getUID",
              value: function e(t) {
                  do {
                      t += ~~(Math.random() * 1e6)
                  } while (document.getElementById(t));
                  return t
              }
          }, {
              key: "tip",
              value: function e() {
                  return this.$tip = this.$tip || (0,
                  d.default)(this.options.template)
              }
          }, {
              key: "arrow",
              value: function e() {
                  if (!this.$arrow) {
                      this.$arrow = this.tip().find(this.type === "popover" ? ".arrow" : ".tooltip-arrow")
                  }
                  return this.$arrow
              }
          }, {
              key: "validate",
              value: function e() {
                  if (!this.$element[0].parentNode) {
                      this.hide();
                      this.$element = null;
                      this.options = null
                  }
              }
          }, {
              key: "destroy",
              value: function e() {
                  this.hide().$element.off("." + this.type).removeData("bs." + this.type)
              }
          }]);
          return e
      }();
      function y(e) {
          return this.each(function() {
              var t = (0,
              d.default)(this);
              var n = t.data("bs.tooltip");
              var i = (typeof e === "undefined" ? "undefined" : (0,
              r.default)(e)) == "object" && e;
              if (!n && e == "destroy")
                  return;
              if (!n)
                  t.data("bs.tooltip", n = new g(this,i));
              if (typeof e == "string")
                  n[e]()
          })
      }
      var w = d.default.fn.csTooltip;
      d.default.fn.csTooltip = y;
      d.default.fn.csTooltip.Constructor = g
  }
  , function(e, t, n) {
      "use strict";
      t.__esModule = true;
      t.default = function(e, t) {
          if (!(e instanceof t)) {
              throw new TypeError("Cannot call a class as a function")
          }
      }
  }
  , function(e, t, n) {
      "use strict";
      t.__esModule = true;
      var i = n(119);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      t.default = function() {
          function e(e, t) {
              for (var n = 0; n < t.length; n++) {
                  var i = t[n];
                  i.enumerable = i.enumerable || false;
                  i.configurable = true;
                  if ("value"in i)
                      i.writable = true;
                  (0,
                  r.default)(e, i.key, i)
              }
          }
          return function(t, n, i) {
              if (n)
                  e(t.prototype, n);
              if (i)
                  e(t, i);
              return t
          }
      }()
  }
  , function(e, t, n) {
      e.exports = {
          default: n(120),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(121);
      var i = n(2).Object;
      e.exports = function e(t, n, r) {
          return i.defineProperty(t, n, r)
      }
  }
  , function(e, t, n) {
      var i = n(7);
      i(i.S + i.F * !n(8), "Object", {
          defineProperty: n(5).f
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(123);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      r.default)(window).on("load", function() {
          (0,
          r.default)(".x-flexslider-featured-gallery").flexslider({
              controlNav: false,
              selector: ".x-slides > li",
              prevText: '<i class="x-icon-chevron-left" data-x-icon-s="&#xf053;"></i>',
              nextText: '<i class="x-icon-chevron-right" data-x-icon-s="&#xf054;"></i>',
              animation: "fade",
              easing: "xEaseInOutExpo",
              smoothHeight: true,
              slideshow: false
          })
      });
      (0,
      r.default)(function() {
          var e = (0,
          r.default)(window);
          var t = e.height();
          e.resize(function() {
              t = e.height()
          });
          r.default.fn.parallaxContentBand = function(n, i) {
              var a = (0,
              r.default)(this);
              var o;
              a.each(function() {
                  o = a.offset().top
              });
              e.resize(function() {
                  a.each(function() {
                      o = a.offset().top
                  })
              });
              function s() {
                  var r = e.scrollTop();
                  a.each(function() {
                      var e = a.offset().top;
                      var s = a.outerHeight();
                      if (e + s < r || e > r + t) {
                          return
                      }
                      a.css("background-position", n + " " + Math.floor((o - r) * i) + "px")
                  })
              }
              e.bind("scroll", s).resize(s);
              s()
          }
      });
      r.default.fn.csEmulateTransitionEnd = function(e) {
          var t = false;
          var n = this;
          (0,
          r.default)(this).one("csTransitionEnd", function() {
              t = true
          });
          setTimeout(function() {
              if (!t) {
                  (0,
                  r.default)(n).trigger(r.default.support.transition.end)
              }
          }, e);
          return this
      }
      ;
      (0,
      r.default)(function() {
          r.default.support.transition = {
              end: o.default.transitionEnd()
          };
          if (!r.default.support.transition) {
              return
          }
          r.default.event.special.csTransitionEnd = {
              bindType: r.default.support.transition.end,
              delegateType: r.default.support.transition.end,
              handle: function e(t) {
                  if ((0,
                  r.default)(t.target).is(this)) {
                      return t.handleObj.handler.apply(this, arguments)
                  }
              }
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: true
      });
      var i = {};
      function r() {
          if (!i.transitionEnd) {
              i.transitionEnd = e()
          }
          return i.transitionEnd;
          function e() {
              var e = document.createElement("div");
              var t = {
                  transition: "transitionend",
                  WebkitTransition: "webkitTransitionEnd",
                  MozTransition: "transitionend",
                  OTransition: "oTransitionEnd otransitionend"
              };
              for (var n in t) {
                  if (undefined !== e.style[n]) {
                      return t[n]
                  }
              }
              return false
          }
      }
      t.default = {
          transitionEnd: r
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(22);
      var r = h(i);
      var a = n(0);
      var o = h(a);
      var s = n(14);
      var l = h(s);
      var u = n(50);
      var c = h(u);
      var f = n(36);
      var d = n(49);
      var v = h(d);
      function h(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var p = {};
      var m = {};
      (0,
      o.default)(function(e) {
          var t = {};
          var n = "webkitAnimationIteration mozAnimationIteration MSAnimationIteration oanimationiteration animationiteration";
          var i = e("body");
          window.xToggleGetState = function(e) {
              return u(e)
          }
          ;
          window.xToggleUpdate = function(e, t) {
              return o({
                  id: e,
                  state: t
              })
          }
          ;
          i.on("click keydown", "[data-x-toggle]", function(t) {
              if (t.target.isContentEditable) {
                  return
              }
              if (t.type === "keydown" && !(t.which === 13 || t.keyCode === 13)) {
                  return
              }
              var n = e(this);
              var i = n[0].hasAttribute("data-x-toggleable") ? n.attr("data-x-toggleable") : n.closest("[data-x-toggleable]").attr("data-x-toggleable");
              var r = n.find("[data-x-toggle-nested-trigger]");
              if (r.length > 0 && t.target !== r[0]) {
                  return
              }
              t.preventDefault();
              t.stopPropagation();
              a(t.target, i);
              o({
                  id: i
              })
          });
          i.on("click", "[data-x-toggle-close]", function(t) {
              t.stopPropagation();
              o({
                  id: e(this).closest("[data-x-toggleable]").attr("data-x-toggleable"),
                  state: false
              })
          });
          i.on("click", function(t) {
              var n = t.target;
              if (e(".x-dropdown.x-active").length > 0) {
                  a(n)
              }
              if (e(".x-modal.x-active, .x-off-canvas.x-active").length <= 0) {
                  return
              }
              var i = e(n);
              if (i.closest(".x-modal-content, .x-off-canvas-content").length > 0) {
                  return
              }
              o({
                  id: i.closest("[data-x-toggleable]").attr("data-x-toggleable"),
                  state: false
              })
          });
          var a = (0,
          f.debounce)(function(e, t) {
              [].concat((0,
              r.default)(document.querySelectorAll(".x-dropdown"))).map(function(e) {
                  return {
                      id: e.getAttribute("data-x-toggleable"),
                      el: e
                  }
              }).filter(function(e) {
                  var n = e.id;
                  return !t || t !== n
              }).filter(function(t) {
                  var n = t.el;
                  return !n.contains(e)
              }).forEach(function(e) {
                  var t = e.id;
                  return o({
                      id: t,
                      state: false
                  })
              })
          }, 10, true);
          function o(n) {
              var i = n.id
                , r = n.state
                , a = n._triggeringGroup
                , l = n.force;
              var c = u(i);
              if ("undefined" === typeof r) {
                  r = !c
              }
              if (!l && !a && !s(c, i)) {
                  return
              }
              t[i] = r;
              if (c !== t[i] || l) {
                  e('[data-x-toggleable="' + i + '"]').trigger("xToggleState", [t[i]])
              }
              if (!a && e("[data-x-toggleable=" + i + "]").attr("data-x-toggle-group")) {
                  var f = e('[data-x-toggleable="' + i + '"]').attr("data-x-toggle-group");
                  var d = e('[data-x-toggle-group="' + f + '"]:not([data-x-toggleable="' + i + '"])');
                  d.each(function() {
                      var t = e(this).attr("data-x-toggleable");
                      o({
                          force: l,
                          id: t,
                          state: false,
                          _triggeringGroup: true
                      })
                  })
              }
          }
          function s(t, n) {
              var i = e("[data-x-toggleable=" + n + "]").first();
              if (i.hasClass("mce-content-body")) {
                  return false
              }
              if (t && i.attr("data-x-toggle") === "tab") {
                  return false
              }
              return true
          }
          function u(e) {
              if (!t.hasOwnProperty(e)) {
                  t[e] = d(e)
              }
              return t[e]
          }
          function d(t) {
              var n = e('[data-x-toggleable="' + t + '"]').first();
              if (n.parent().hasClass("x-nav-tabs-item")) {
                  return n.parent().hasClass("active")
              }
              if (n.attr("data-x-toggle") === "collapse" && n.hasClass("x-active")) {
                  return true
              }
              if (n.attr("data-x-toggle") === "tab") {
                  if (n.hasClass("x-active")) {
                      return true
                  }
                  if (0 === e('[data-x-toggle-group="' + n.attr("data-x-toggle-group") + '"].x-active').length) {
                      return true
                  }
              }
              if (n.attr("data-x-toggle") === "layered" && n.hasClass("x-active")) {
                  return true
              }
              if (n.attr("data-x-toggle") === "collapse-b" && !n.hasClass("collapsed")) {
                  return true
              }
              return false
          }
          i.on("xToggleState", "[data-x-toggleable]", function(t, n) {
              t.stopPropagation();
              var i = e(this);
              if (i.attr("aria-hidden")) {
                  i.attr("aria-hidden", !n)
              }
              if (i.attr("data-x-toggle-collapse")) {
                  v.default.toggleCollapse(this, n)
              } else if (i.attr("data-x-toggle-layered")) {
                  v.default.traverseLayers(this, n)
              } else if (i.hasClass("x-anchor")) {
                  v.default.toggleAnchor(this, n)
              } else if (i.attr("data-x-toggle") === "collapse-b") {
                  i.toggleClass("collapsed", !n)
              } else if (i.parent().hasClass("x-nav-tabs-item")) {
                  i.parent().toggleClass("active", n)
              } else if (i.hasClass("x-tab-pane")) {
                  i.toggleClass("active", n)
              } else {
                  i.toggleClass("x-active", n)
              }
              i.find("[data-x-toggleable-content]").each(function() {
                  var t = e(this);
                  var i = t.attr("data-x-toggleable-content");
                  if (!p[i]) {
                      var r = t.find('script[type="text/cs-toggle-template"]').first().html();
                      if (!r)
                          return;
                      p[i] = r
                  }
                  clearTimeout(m[i]);
                  if (n) {
                      t.html(p[i])
                  } else {
                      m[i] = setTimeout(function() {
                          t.html("")
                      }, 350)
                  }
              })
          });
          i.on("xToggleState", "[data-x-toggle]", function(t, i) {
              var r = e(this);
              r.find(".x-toggle").toggleClass("x-active", i);
              if (r.attr("aria-expanded")) {
                  r.attr("aria-expanded", i)
              }
              if (r.attr("aria-selected")) {
                  r.attr("aria-selected", i)
              }
              if (window.csGlobal.bowser.msedge || window.csGlobal.bowser.msie || window.csGlobal.bowser.ios) {
                  return
              }
              r.find("[data-x-toggle-anim]").each(function() {
                  var t = e(this);
                  if (!t.hasClass("x-running")) {
                      t.one(n, function() {
                          t.removeClass("x-running");
                          if (!r.hasClass("x-active")) {
                              t.removeAttr("style")
                          }
                      })
                  }
                  t.addClass("x-running");
                  if (r.hasClass("x-active")) {
                      t.css({
                          "animation-name": t.data("x-toggle-anim")
                      })
                  }
              })
          });
          i.on("xToggleState", '[data-x-toggleable][tabindex="-1"]', function(t, n) {
              if (n && !window.csGlobal.isPreview) {
                  e(t.currentTarget).focus()
              }
          });
          i.on("xToggleState", "[data-x-toggleable].x-modal", function(t, n) {
              if (n && !window.csGlobal.isPreview) {
                  var i = e(t.currentTarget).find("[data-x-search] input");
                  if (i.length > 0) {
                      i.focus()
                  }
              }
          });
          (0,
          l.default)("[data-x-toggle-layered-root]", function(t) {
              var n = e(t);
              var i = function t() {
                  var i = n;
                  var r = i.parent().find(".x-current-layer");
                  var a = 0;
                  r.children("li").each(function() {
                      a += e(this).outerHeight(true)
                  });
                  i.css({
                      height: a
                  })
              };
              i();
              e(window).on("resize", i)
          });
          (0,
          l.default)("[data-x-toggleable]", function(t) {
              var n = e(t);
              var i = n.attr("data-x-toggleable");
              var r = n.attr("data-x-toggle-hash");
              if (u(i) || r && r === window.location.hash.replace("#", "")) {
                  o({
                      id: i,
                      state: true,
                      force: true
                  })
              }
          });
          var h = function t() {
              e("[data-x-toggle-hash]").each(function() {
                  var t = e(this);
                  var n = t.attr("data-x-toggle-hash");
                  if (n === window.location.hash.replace("#", "")) {
                      o({
                          id: t.attr("data-x-toggleable"),
                          state: true
                      })
                  }
              })
          };
          window.addEventListener("tcoHistoryPush", h, false);
          window.addEventListener("hashchange", h, false);
          c.default.filter("hash_scrolling_allow", function(e, t, n) {
              if (n.target.hasAttribute("data-x-toggle-nested-trigger")) {
                  return false
              }
              return e
          });
          c.default.action("hash_scrolling_before", function(e) {
              var t = e.$anchor;
              var n = t.closest(".x-modal.x-active, .x-off-canvas.x-active");
              if (0 !== n.length && !(t[0].hasAttribute("data-x-toggleable") && 0 === t.find("[data-x-toggle-nested-trigger]").length)) {
                  o({
                      id: n.attr("data-x-toggleable"),
                      state: false
                  })
              }
          })
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(1);
      var r = a(i);
      function a(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (function(e) {
          (0,
          r.default)("bg", function() {
              var t = this;
              var n = e(window);
              function i(t) {
                  var n = e(t);
                  n.css({
                      height: n.parent().outerHeight()
                  })
              }
              if (window.navigator.userAgent.indexOf("Trident/") > 0) {
                  i(this);
                  n.on("resize", function() {
                      i(t)
                  })
              }
          })
      }
      )(window.jQuery, window.xData);
      (function(e) {
          (0,
          r.default)("bg_layer", function(t) {
              var n = this;
              var i = e(window);
              function r(n) {
                  var r = e(n);
                  var a = t.parallaxDir === "v";
                  var o = t.parallaxDir === "h";
                  var s = t.parallaxRev === true;
                  var l = t.parallaxRev === false;
                  var u = {
                      opacity: "1"
                  };
                  if (a) {
                      if (l) {
                          u.top = "auto";
                          u.bottom = "0"
                      }
                      u.height = t.parallaxSize
                  }
                  if (o) {
                      if (l) {
                          u.left = "auto";
                          u.right = "0"
                      }
                      u.width = t.parallaxSize
                  }
                  r.css(u);
                  var c = i.height();
                  var f = i.scrollTop();
                  var d = f + c;
                  var v = r.parent(".x-bg");
                  var h = v.outerWidth();
                  var p = v.outerHeight();
                  var m = v.offset().top;
                  var g = m + p;
                  var y = d > m;
                  var w = f > g;
                  var b = Boolean(y ^ w);
                  if (b) {
                      var x = s ? -1 : 1;
                      var S = a ? r.outerHeight() - p : r.outerWidth() - h;
                      var T = 1 - (g - f) / (c + p);
                      var C = parseInt(T * S * x, 10) + "px";
                      var E = o ? C : 0;
                      var _ = a ? C : 0;
                      r.css({
                          transform: "translate3d(" + E + ", " + _ + ", 0)"
                      })
                  } else {
                      return
                  }
              }
              r(this);
              i.on("resize scroll", function() {
                  r(n)
              })
          })
      }
      )(window.jQuery, window.xData)
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("card", function() {
          var e = (0,
          r.default)(this);
          if (window.csModernizr.preserve3d) {
              e.addClass("flip-3d")
          }
          e.on("click", t);
          e.on("mouseenter", n);
          e.on("mouseleave", i);
          e.on("touchstart", function() {
              e.off("touchend", t);
              e.on("touchend", t)
          });
          e.on("touchmove", function() {
              e.off("touchend", t)
          });
          e.one("touchstart", function() {
              e.off("click", t);
              e.off("mouseenter", n);
              e.off("mouseleave", i)
          });
          e.on("click touchend", "a", function(e) {
              e.stopPropagation()
          });
          function t() {
              e.toggleClass("flipped")
          }
          function n() {
              e.addClass("flipped")
          }
          function i() {
              e.removeClass("flipped")
          }
          e.on("cs:setcardheight", function() {
              var e = (0,
              r.default)(this);
              var t = e.find(".x-face-outer.front");
              var n = t.find(".x-face-content").outerHeight();
              var i = parseInt(t.css("border-top-width"), 10);
              var a = parseInt(t.css("border-bottom-width"), 10);
              var o = n + i + a;
              var s = e.find(".x-face-outer.back");
              var l = s.find(".x-face-content").outerHeight();
              var u = parseInt(s.css("border-top-width"), 10);
              var c = parseInt(s.css("border-bottom-width"), 10);
              var f = l + u + c;
              var d = Math.max(o, f);
              e.find(".x-card-inner").css({
                  height: d
              })
          });
          e.trigger("cs:setcardheight");
          (0,
          r.default)(window).on("load resize", function() {
              e.trigger("cs:setcardheight")
          })
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("column", function(e) {
          if (!e.fade) {
              return
          }
          var t = (0,
          r.default)(this);
          (0,
          l.default)(t.parent()[0], function() {
              t.css({
                  opacity: "1",
                  transform: "translate(0, 0)"
              })
          }, "65%")
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      var c = function e() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 500;
          var n = parseFloat(t);
          if (t === n || t.indexOf("ms") === t.length - 2)
              return n || 500;
          return n * 1e3
      };
      (0,
      o.default)("counter", function(e) {
          var t = e.selector
            , n = t === undefined ? ".number" : t
            , i = e.numStart
            , a = e.numEnd
            , o = e.numSpeed;
          var s = (0,
          r.default)(this).find(n);
          (0,
          l.default)(this, function() {
              s.prop("number", parseFloat(i));
              s.animateNumber({
                  number: parseFloat(a)
              }, c(o))
          }, "85%")
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("creative_cta", function(e) {
          var t = (0,
          r.default)(this);
          t.children(".graphic").css("transform", "translate(-50%, -50%) scale(0)");
          t.on("mouseenter", function() {
              t.css({
                  "background-color": e.bg_color_hover
              }).children(".graphic").css("transform", "translate(-50%, -50%) scale(1)")
          });
          t.on("mouseleave", function() {
              t.css({
                  "background-color": e.bg_color
              }).children(".graphic").css("transform", "translate(-50%, -50%) scale(0)")
          })
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("extra", function(e) {
          (0,
          r.default)(this).csTooltip(e)
      });
      (0,
      r.default)(function() {
          (0,
          r.default)('[data-toggle="tooltip"]').csTooltip();
          (0,
          r.default)('[data-toggle="popover"]').csTooltip({
              type: "popover"
          })
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("feature_box", function(e) {
          var t = this;
          if (e.child !== true && e.graphicAnimation !== "none") {
              (0,
              l.default)(t, function() {
                  setTimeout(function() {
                      var n = (0,
                      r.default)(t).find(".x-feature-box-graphic-outer");
                      var i = "animated " + e.graphicAnimation;
                      c(n, i)
                  }, e.graphicAnimationDelay)
              }, e.graphicAnimationOffset + "%")
          }
      });
      (0,
      o.default)("feature_list", function(e) {
          var t = this;
          var n = (0,
          r.default)(t).children().first().data("x-params");
          var i = 0;
          if (n.graphicAnimation !== "none" || n.connectorAnimation !== "none") {
              (0,
              l.default)(t, function() {
                  setTimeout(function() {
                      (0,
                      r.default)(t).children("li").each(function() {
                          var t = (0,
                          r.default)(this);
                          if (n.graphicAnimation !== "none") {
                              var a = t.find(".x-feature-box-graphic-outer");
                              var o = "animated " + n.graphicAnimation;
                              c(a, o, i++, e.animationDelayBetween)
                          }
                          if (n.connectorAnimation !== "none") {
                              var s = "animated " + n.connectorAnimation;
                              if (n.alignV === "middle") {
                                  var l = t.children(".lower");
                                  var u = t.next().children(".upper");
                                  c(l, s, i, e.animationDelayBetween);
                                  c(u, s, i++, e.animationDelayBetween)
                              } else {
                                  var f = t.children(".full");
                                  c(f, s, i++, e.animationDelayBetween)
                              }
                          }
                      })
                  }, e.animationDelayInitial)
              }, e.animationOffset + "%")
          }
      });
      function c(e, t, n, i) {
          n = typeof n === "undefined" ? 0 : n;
          i = typeof i === "undefined" ? 0 : i;
          var r = n * i;
          var a = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
          e.delay(r).queue(function() {
              e.removeClass("animated-hide").addClass(t).one(a, function() {
                  e.removeClass(t)
              }).dequeue()
          })
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("map_google", function(e) {
          if (!window.google || !window.google.maps) {
              return
          }
          var t = (0,
          r.default)(this);
          var n = new window.google.maps.LatLng(e.lat,e.lng);
          var i = e.styles === "" ? null : JSON.parse(e.styles);
          var a = {
              mapTypeId: "roadmap",
              center: n,
              draggable: e.drag,
              zoomControl: e.zoom,
              zoom: parseInt(e.zoomLevel, 10),
              clickableIcons: false,
              disableDefaultUI: true,
              disableDoubleClickZoom: false,
              fullscreenControl: false,
              mapTypeControl: false,
              rotateControl: false,
              scrollwheel: false,
              streetViewControl: false,
              backgroundColor: "transparent"
          };
          var o = [];
          t.find('[data-x-element="map_google_marker"]').each(function() {
              o.push((0,
              r.default)(this).data("x-params"))
          });
          var s = new window.google.maps.StyledMapType(i,{
              name: "Styled Map"
          });
          var l = new window.google.maps.Map(t[0],a);
          l.mapTypes.set("map_google", s);
          l.setMapTypeId("map_google");
          o.forEach(function(e) {
              var t = e.lat
                , n = e.lng
                , i = e.imageSrc
                , r = e.imageWidth
                , a = e.imageOffsetX
                , o = e.imageHeight
                , s = e.imageOffsetY
                , u = e.imageRetina
                , c = e.content
                , f = e.contentStart;
              var d = {
                  map: l,
                  position: new window.google.maps.LatLng(parseFloat(t),parseFloat(n))
              };
              if (i) {
                  var v = {
                      url: i,
                      origin: new window.google.maps.Point(0,0)
                  };
                  var h = Math.abs(r / (100 / parseFloat(a)) - r / 2);
                  var p = Math.abs(o / (100 / parseFloat(s)) - o / 2);
                  if (u) {
                      v.anchor = new window.google.maps.Point(h / 2,p / 2);
                      v.scaledSize = new window.google.maps.Size(r / 2,o / 2)
                  } else {
                      v.anchor = new window.google.maps.Point(h,p);
                      v.size = new window.google.maps.Size(r,o)
                  }
                  d.icon = v
              }
              var m = new window.google.maps.Marker(d);
              if (c !== "") {
                  var g = new window.google.maps.InfoWindow({
                      content: c,
                      maxWidth: 200
                  });
                  if (f === "open") {
                      g.open(l, m)
                  }
                  window.google.maps.event.addListener(m, "click", function() {
                      g.open(l, this)
                  })
              }
          });
          if (!e.drag) {
              l.addListener("center_changed", function() {
                  l.panTo(n)
              })
          }
      }, {
          handle: "google-map"
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("google_map", function(e) {
          if (!window.google || !window.google.maps) {
              return
          }
          function t(e) {
              var t = [];
              var n = [];
              (0,
              r.default)(this).find(".x-google-map-marker").each(function(i, a) {
                  var o = (0,
                  r.default)(a).data("x-params");
                  var s = new window.google.maps.Marker({
                      map: e,
                      position: new window.google.maps.LatLng(o.lat,o.lng),
                      infoWindowIndex: i,
                      icon: o.image
                  });
                  t[i] = s;
                  if ("" !== o.markerInfo) {
                      var l = new window.google.maps.InfoWindow({
                          content: o.markerInfo,
                          maxWidth: 200
                      });
                      n[i] = l;
                      if (o.startOpen) {
                          l.open(e, s)
                      }
                      window.google.maps.event.addListener(t[i], "click", function() {
                          l.open(e, this)
                      })
                  }
              })
          }
          var n = (0,
          r.default)(this).find(".x-google-map-inner");
          var i = e.lat;
          var a = e.lng;
          var o = new window.google.maps.LatLng(i,a);
          var s = e.drag;
          var l = parseInt(e.zoom);
          var u = e.zoomControl;
          var c = e.hue;
          var f = [{
              featureType: "all",
              elementType: "all",
              stylers: [{
                  hue: c ? c : null
              }]
          }, {
              featureType: "water",
              elementType: "all",
              stylers: [{
                  hue: c ? c : null
              }, {
                  saturation: 0
              }, {
                  lightness: 50
              }]
          }, {
              featureType: "poi",
              elementType: "all",
              stylers: [{
                  visibility: "off"
              }]
          }];
          var d = {
              scrollwheel: false,
              draggable: s === true,
              zoomControl: u === true,
              disableDoubleClickZoom: false,
              disableDefaultUI: true,
              zoom: l,
              center: o,
              mapTypeId: window.google.maps.MapTypeId.ROADMAP
          };
          var v = new window.google.maps.StyledMapType(f,{
              name: "Styled Map"
          });
          var h = new window.google.maps.Map(n[0],d);
          h.mapTypes.set("map_style", v);
          h.setMapTypeId("map_style");
          t.call(this, h)
      });
      (0,
      r.default)(".x-widgetbar").on("shown.bs.collapse", function() {
          if (typeof google !== "undefined" && window.google.hasOwnProperty("maps")) {
              window.google.maps.event.trigger(window, "resize", {})
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("lightbox", function(e) {
          if (e.disable || window.xData && window.xData.isPreview) {
              return
          }
          var t = {
              skin: "light",
              overlay: {
                  opacity: e.opacity,
                  blur: true
              },
              styles: {
                  prevScale: e.prevScale,
                  prevOpacity: e.prevOpacity,
                  nextScale: e.nextScale,
                  nextOpacity: e.nextOpacity
              },
              path: e.orientation,
              controls: {
                  thumbnail: e.thumbnails
              }
          };
          if (e.deeplink) {
              t.linkId = "gallery-image"
          }
          (0,
          r.default)(e.selector).iLightBox(t)
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(136);
      var r = u(i);
      var a = n(0);
      var o = u(a);
      var s = n(1);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      l.default)("x_mejs", function(e) {
          var t = e.poster;
          var n = (0,
          o.default)(this);
          var i = n.hasClass("bg") || n.hasClass("x-video-bg");
          var a = n.hasClass("vimeo") || n.hasClass("youtube");
          var s = ["playpause", "progress"];
          var l = ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"];
          if (window.mejs && window.mejs.plugins && window.mejs.plugins.silverlight) {
              ["video/x-ms-wmv", "audio/x-ms-wma"].forEach(function(e) {
                  return !window.mejs.plugins.silverlight[0].types.includes(e) && window.mejs.plugins.silverlight[0].types.push(e)
              })
          }
          if (i) {
              if (window.csModernizr.touchevents) {
                  n.addClass("poster").css({
                      "background-image": "url(" + t + ")"
                  });
                  setTimeout(function() {
                      return n.removeClass("transparent")
                  }, 500)
              } else {
                  var u = n.find('script[type="text/template"]');
                  u.after(u.html()).remove()
              }
              if (n.hasClass("transparent")) {
                  n.on("xmejs:start", function() {
                      return n.removeClass("transparent")
                  })
              }
          }
          var c = n.find(".x-mejs").first();
          if (!window.mejs || 0 === c.length || c.parent().hasClass("mejs-mediaelement")) {
              return
          }
          var f = function e(t) {
              console.warn("MEJS media error.", t);
              t.stopPropagation()
          };
          try {
              c.mediaelementplayer({
                  pluginPath: window._wpmejsSettings.pluginPath,
                  startVolume: 1,
                  features: i ? [] : c.hasClass("advanced-controls") ? l : s,
                  audioWidth: "100%",
                  audioHeight: 32,
                  audioVolume: "vertical",
                  videoWidth: "100%",
                  videoHeight: "100%",
                  videoVolume: "vertical",
                  pauseOtherPlayers: false,
                  alwaysShowControls: true,
                  setDimensions: false,
                  stretching: "responsive",
                  success: d,
                  error: function e(t) {
                      f(t)
                  }
              })
          } catch (e) {
              f(e)
          }
          function d(e, t, a) {
              var s = true;
              var l = true;
              if (n.hasClass("autoplay")) {
                  (0,
                  o.default)(e).prop("autoplay", true)
              }
              e.addEventListener("canplay", function() {
                  if (t.attributes.hasOwnProperty("autoplay") && s) {
                      e.play();
                      s = false
                  }
                  if (t.attributes.hasOwnProperty("muted") && l) {
                      e.setMuted(true);
                      l = false
                  }
              });
              var u = a.controls.find(".mejs-volume-button");
              e.addEventListener("volumechange", function() {
                  return e.setVolume(u.hasClass("mejs-mute") ? 1 : 0)
              });
              e.addEventListener("ended", function() {
                  if (t.attributes.hasOwnProperty("loop")) {
                      e.play()
                  }
              });
              e.addEventListener("playing", function() {
                  (0,
                  r.default)(window.mejs.players).filter(function(e) {
                      return e !== a.id && !window.mejs.players[e].xIsVideoBG
                  }).map(function(e) {
                      return window.mejs.players[e]
                  }).forEach(function(e) {
                      return e.pause()
                  })
              });
              if (true === a.isVideo) {
                  a.xIsVideoBG = i;
                  v(e, t, a)
              }
          }
          function v(e, t, r) {
              var s = r.container
                , l = r.controls;
              e.addEventListener("timeupdate", function t() {
                  n.trigger("xmejs:start");
                  e.removeEventListener("timeupdate", t)
              });
              (0,
              o.default)(s).on("exitedfullscreen", function() {
                  return (0,
                  o.default)(e).removeAttr("style")
              });
              if (a) {
                  n.on("xmejs:start", function() {
                      return n.find("video.x-mejs").removeAttr("poster")
                  })
              }
              if (i) {
                  e.addEventListener("playing", function() {
                      e.setMuted(true);
                      n.trigger("xmejs:bgvideoready")
                  });
                  n.on("xmejs:bgvideoready", f);
                  (0,
                  o.default)(window).on("resize", function() {
                      return f
                  })
              } else {
                  var u = function e() {
                      return l.stop().animate({
                          opacity: 1
                      }, 150, "xEaseOutQuad")
                  };
                  var c = function e() {
                      return l.stop().animate({
                          opacity: 0
                      }, 150, "xEaseOutQuad")
                  };
                  e.addEventListener("playing", function() {
                      return s.hover(u, c)
                  });
                  e.addEventListener("pause", function() {
                      s.off("mouseenter mouseleave");
                      u()
                  })
              }
              function f() {
                  var e = n.find(a ? ".me-plugin" : "video");
                  var i = t.videoWidth;
                  var r = t.videoHeight;
                  var o = a || i === 0 ? 1280 : i;
                  var s = a || r === 0 ? 720 : r;
                  var l = n.outerWidth();
                  var u = n.outerHeight();
                  var c = l / o;
                  var f = u / s;
                  var d = c > f ? c : f;
                  var v = Math.ceil(d * o + 20);
                  var h = Math.ceil(d * s + 20);
                  var p = Math.ceil((v - l) / 2);
                  var m = Math.ceil((h - u) / 2);
                  var g = l < p + 20 ? l - 20 : p;
                  var y = u < m + 20 ? u - 20 : m;
                  e.width(v);
                  e.height(h);
                  n.find(".mejs-mediaelement").scrollLeft(g);
                  n.find(".mejs-mediaelement").scrollTop(y)
              }
              if (["flash", "silverlight"].includes(e.pluginType)) {
                  d();
                  n.on("xmejs:bgvideosize", d);
                  (0,
                  o.default)(window).on("resize", d)
              }
              function d() {
                  var t = (0,
                  o.default)("#" + e.id + "_container");
                  e.setVideoSize(t.outerWidth(), t.outerHeight())
              }
          }
      }, {
          debounceDelay: 10
      })
  }
  , function(e, t, n) {
      e.exports = {
          default: n(137),
          __esModule: true
      }
  }
  , function(e, t, n) {
      n(138);
      e.exports = n(2).Object.keys
  }
  , function(e, t, n) {
      var i = n(21);
      var r = n(13);
      n(139)("keys", function() {
          return function e(t) {
              return r(i(t))
          }
      })
  }
  , function(e, t, n) {
      var i = n(7);
      var r = n(2);
      var a = n(12);
      e.exports = function(e, t) {
          var n = (r.Object || {})[e] || Object[e];
          var o = {};
          o[e] = t(n);
          i(i.S + i.F * a(function() {
              n(1)
          }), "Object", o)
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("recent_posts", function(e) {
          if (e.fade) {
              (0,
              l.default)(this, function() {
                  (0,
                  r.default)(this).find("a").each(function(e, t) {
                      (0,
                      r.default)(t).delay(e * 90).animate({
                          opacity: "1"
                      }, 750, "xEaseOutExpo")
                  });
                  setTimeout(function() {
                      (0,
                      r.default)(this).addClass("complete")
                  }, (0,
                  r.default)(this).find("a").length * 90 + 400)
              }, "75%")
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("responsive_text", function(e) {
          var t = {};
          if (e.minFontSize !== "") {
              t.minFontSize = e.minFontSize
          }
          if (e.maxFontSize !== "") {
              t.maxFontSize = e.maxFontSize
          }
          (0,
          r.default)(e.selector).csFitText(e.compression, t)
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("section", l);
      (0,
      o.default)("content_band", l);
      function l() {
          var e = (0,
          r.default)(this);
          var t = function t() {
              if (e.hasClass("parallax")) {
                  if (window.csModernizr.touchevents) {
                      e.css("background-attachment", "scroll")
                  } else {
                      var n;
                      if (e.hasClass("bg-image")) {
                          n = .1
                      }
                      if (e.hasClass("bg-pattern")) {
                          n = .3
                      }
                      if (n) {
                          e.parallaxContentBand("50%", n)
                      }
                  }
              }
          };
          if (document.readyState === "complete") {
              t()
          } else {
              (0,
              r.default)(window).on("load", t)
          }
      }
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("skill_bar", function(e) {
          (0,
          l.default)(this, function() {
              (0,
              r.default)(this).find(".bar").animate({
                  width: e.percent
              }, 750, "xEaseInOutExpo")
          }, "95%")
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = u(i);
      var a = n(1);
      var o = u(a);
      var s = n(6);
      var l = u(s);
      function u(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("statbar", function(e) {
          (0,
          l.default)(this, function() {
              (0,
              r.default)(this).find(".x-statbar-bar, .x-statbar-label").addClass("x-active")
          }, e.triggerOffset)
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("slider", function(e) {
          var t = (0,
          r.default)(this);
          var n = function n() {
              t.flexslider({
                  selector: ".x-slides > li",
                  prevText: '<i class="x-icon-chevron-left" data-x-icon-s="&#xf053;"></i>',
                  nextText: '<i class="x-icon-chevron-right" data-x-icon-s="&#xf054;"></i>',
                  animation: e.animation,
                  controlNav: e.controlNav,
                  directionNav: e.prevNextNav,
                  slideshowSpeed: parseInt(e.slideTime),
                  animationSpeed: parseInt(e.slideSpeed),
                  slideshow: e.slideshow,
                  randomize: e.random,
                  touch: e.touch,
                  pauseOnHover: e.pauseOnHover,
                  useCSS: true,
                  video: true,
                  smoothHeight: true,
                  easing: "xEaseInOutExpo"
              })
          };
          if ("complete" === document.readyState) {
              n()
          } else {
              (0,
              r.default)(window).on("load", n)
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("tabs", function(e) {
          var t = (0,
          r.default)(this).children(".x-tabs-panels");
          if (e.equalPanelHeight === true) {
              setTimeout(function() {
                  n()
              }, 0);
              (0,
              r.default)(window).on("resize", n)
          }
          function n() {
              var e = null;
              t.css({
                  height: ""
              }).children().each(function() {
                  var t = (0,
                  r.default)(this).outerHeight();
                  if (e === null || t > e) {
                      e = t
                  }
              });
              t.css({
                  height: e
              })
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("tab_nav", function(e) {
          var t = (0,
          r.default)(this);
          var n = t.next(".x-tab-content");
          if ("vertical" === e.orientation) {
              n.css({
                  minHeight: t.outerHeight()
              })
          }
      })
  }
  , function(e, t, n) {
      "use strict";
      var i = n(0);
      var r = s(i);
      var a = n(1);
      var o = s(a);
      function s(e) {
          return e && e.__esModule ? e : {
              default: e
          }
      }
      (0,
      o.default)("text_type", function(e) {
          (0,
          r.default)(this).find(".text, .x-text-typing").typed({
              strings: e.strings,
              typeSpeed: e.type_speed,
              startDelay: e.start_delay,
              backSpeed: e.back_speed,
              backDelay: e.back_delay,
              loop: e.loop,
              showCursor: e.show_cursor,
              cursorChar: e.cursor
          })
      })
  }
  ]);
  //# sourceMappingURL=cs-body.js.map

}
/*
   FILE ARCHIVED ON 19:35:20 Mar 31, 2022 AND RETRIEVED FROM THE
   INTERNET ARCHIVE ON 09:06:02 Jun 12, 2024.
   JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

   ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
   SECTION 108(a)(3)).
*/
/*
playback timings (ms):
captures_list: 1.072
exclusion.robots: 0.125
exclusion.robots.policy: 0.11
esindex: 0.013
cdx.remote: 6.442
LoadShardBlock: 58.44 (3)
PetaboxLoader3.datanode: 897.832 (4)
PetaboxLoader3.resolve: 65.965 (2)
load_resource: 911.974
*/
