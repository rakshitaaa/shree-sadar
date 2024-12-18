!(function (e, t) {
    function n(e, n, r) {
      if (r === t && 1 === e.nodeType) {
        var i = "data-" + n.replace(le, "-$1").toLowerCase();
        if ("string" == typeof (r = e.getAttribute(i))) {
          try {
            r =
              "true" === r ||
              ("false" !== r &&
                ("null" === r
                  ? null
                  : +r + "" === r
                  ? +r
                  : se.test(r)
                  ? z.parseJSON(r)
                  : r));
          } catch (e) {}
          z.data(e, n, r);
        } else r = t;
      }
      return r;
    }
    function r(e) {
      var t;
      for (t in e)
        if (("data" !== t || !z.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
      return !0;
    }
    function i() {
      return !1;
    }
    function o() {
      return !0;
    }
    function a(e) {
      return !e || !e.parentNode || 11 === e.parentNode.nodeType;
    }
    function s(e, t) {
      do {
        e = e[t];
      } while (e && 1 !== e.nodeType);
      return e;
    }
    function l(e, t, n) {
      if (((t = t || 0), z.isFunction(t)))
        return z.grep(e, function (e, r) {
          return !!t.call(e, r, e) === n;
        });
      if (t.nodeType)
        return z.grep(e, function (e, r) {
          return (e === t) === n;
        });
      if ("string" == typeof t) {
        var r = z.grep(e, function (e) {
          return 1 === e.nodeType;
        });
        if (Ae.test(t)) return z.filter(t, r, !n);
        t = z.filter(t, r);
      }
      return z.grep(e, function (e, r) {
        return z.inArray(e, t) >= 0 === n;
      });
    }
    function u(e) {
      var t = Fe.split("|"),
        n = e.createDocumentFragment();
      if (n.createElement) for (; t.length; ) n.createElement(t.pop());
      return n;
    }
    function c(e, t) {
      if (1 === t.nodeType && z.hasData(e)) {
        var n,
          r,
          i,
          o = z._data(e),
          a = z._data(t, o),
          s = o.events;
        if (s) {
          delete a.handle, (a.events = {});
          for (n in s)
            for (r = 0, i = s[n].length; r < i; r++) z.event.add(t, n, s[n][r]);
        }
        a.data && (a.data = z.extend({}, a.data));
      }
    }
    function f(e, t) {
      var n;
      1 === t.nodeType &&
        (t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        "object" === (n = t.nodeName.toLowerCase())
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            z.support.html5Clone &&
              e.innerHTML &&
              !z.trim(t.innerHTML) &&
              (t.innerHTML = e.innerHTML))
          : "input" === n && Ie.test(e.type)
          ? ((t.defaultChecked = t.checked = e.checked),
            t.value !== e.value && (t.value = e.value))
          : "option" === n
          ? (t.selected = e.defaultSelected)
          : "input" === n || "textarea" === n
          ? (t.defaultValue = e.defaultValue)
          : "script" === n && t.text !== e.text && (t.text = e.text),
        t.removeAttribute(z.expando));
    }
    function p(e) {
      return void 0 !== e.getElementsByTagName
        ? e.getElementsByTagName("*")
        : void 0 !== e.querySelectorAll
        ? e.querySelectorAll("*")
        : [];
    }
    function d(e) {
      Ie.test(e.type) && (e.defaultChecked = e.checked);
    }
    function h(e, t) {
      if (t in e) return t;
      for (
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = ft.length;
        i--;
  
      )
        if ((t = ft[i] + n) in e) return t;
      return r;
    }
    function g(e, t) {
      return (
        (e = t || e),
        "none" === z.css(e, "display") || !z.contains(e.ownerDocument, e)
      );
    }
    function m(e, t) {
      for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
        (n = e[o]).style &&
          ((i[o] = z._data(n, "olddisplay")),
          t
            ? (!i[o] && "none" === n.style.display && (n.style.display = ""),
              "" === n.style.display &&
                g(n) &&
                (i[o] = z._data(n, "olddisplay", x(n.nodeName))))
            : ((r = Ge(n, "display")),
              !i[o] && "none" !== r && z._data(n, "olddisplay", r)));
      for (o = 0; o < a; o++)
        (n = e[o]).style &&
          ((t && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = t ? i[o] || "" : "none"));
      return e;
    }
    function y(e, t, n) {
      var r = it.exec(t);
      return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function v(e, t, n, r) {
      for (
        var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          o = 0;
        i < 4;
        i += 2
      )
        "margin" === n && (o += z.css(e, n + ct[i], !0)),
          r
            ? ("content" === n &&
                (o -= parseFloat(Ge(e, "padding" + ct[i])) || 0),
              "margin" !== n &&
                (o -= parseFloat(Ge(e, "border" + ct[i] + "Width")) || 0))
            : ((o += parseFloat(Ge(e, "padding" + ct[i])) || 0),
              "padding" !== n &&
                (o += parseFloat(Ge(e, "border" + ct[i] + "Width")) || 0));
      return o;
    }
    function b(e, t, n) {
      var r = "width" === t ? e.offsetWidth : e.offsetHeight,
        i = !0,
        o = z.support.boxSizing && "border-box" === z.css(e, "boxSizing");
      if (r <= 0 || null == r) {
        if ((((r = Ge(e, t)) < 0 || null == r) && (r = e.style[t]), ot.test(r)))
          return r;
        (i = o && (z.support.boxSizingReliable || r === e.style[t])),
          (r = parseFloat(r) || 0);
      }
      return r + v(e, t, n || (o ? "border" : "content"), i) + "px";
    }
    function x(e) {
      if (st[e]) return st[e];
      var t = z("<" + e + ">").appendTo(F.body),
        n = t.css("display");
      return (
        t.remove(),
        ("none" !== n && "" !== n) ||
          ((Qe = F.body.appendChild(
            Qe ||
              z.extend(F.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0,
              })
          )),
          (Ke && Qe.createElement) ||
            ((Ke = (Qe.contentWindow || Qe.contentDocument).document).write(
              "<!doctype html><html><body>"
            ),
            Ke.close()),
          (t = Ke.body.appendChild(Ke.createElement(e))),
          (n = Ge(t, "display")),
          F.body.removeChild(Qe)),
        (st[e] = n),
        n
      );
    }
    function w(e, t, n, r) {
      var i;
      if (z.isArray(t))
        z.each(t, function (t, i) {
          n || ht.test(e)
            ? r(e, i)
            : w(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
        });
      else if (n || "object" !== z.type(t)) r(e, t);
      else for (i in t) w(e + "[" + i + "]", t[i], n, r);
    }
    function T(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var r,
          i,
          o,
          a = t.toLowerCase().split(Y),
          s = 0,
          l = a.length;
        if (z.isFunction(n))
          for (; s < l; s++)
            (r = a[s]),
              (o = /^\+/.test(r)),
              o && (r = r.substr(1) || "*"),
              (i = e[r] = e[r] || []),
              i[o ? "unshift" : "push"](n);
      };
    }
    function N(e, n, r, i, o, a) {
      (o = o || n.dataTypes[0]), ((a = a || {})[o] = !0);
      for (
        var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === jt;
        u < c && (f || !s);
        u++
      )
        (s = l[u](n, r, i)),
          "string" == typeof s &&
            (!f || a[s]
              ? (s = t)
              : (n.dataTypes.unshift(s), (s = N(e, n, r, i, s, a))));
      return (f || !s) && !a["*"] && (s = N(e, n, r, i, "*", a)), s;
    }
    function C(e, n) {
      var r,
        i,
        o = z.ajaxSettings.flatOptions || {};
      for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
      i && z.extend(!0, e, i);
    }
    function k() {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    }
    function E() {
      return (
        setTimeout(function () {
          Pt = t;
        }, 0),
        (Pt = z.now())
      );
    }
    function S(e, t, n) {
      var r,
        i,
        o,
        a = 0,
        s = Xt.length,
        l = z.Deferred().always(function () {
          delete u.elem;
        }),
        u = function () {
          for (
            var t = Pt || E(),
              n = Math.max(0, c.startTime + c.duration - t),
              r = 1 - (n / c.duration || 0),
              i = 0,
              o = c.tweens.length;
            i < o;
            i++
          )
            c.tweens[i].run(r);
          return (
            l.notifyWith(e, [c, r, n]),
            r < 1 && o ? n : (l.resolveWith(e, [c]), !1)
          );
        },
        c = l.promise({
          elem: e,
          props: z.extend({}, t),
          opts: z.extend(!0, { specialEasing: {} }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: Pt || E(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n, r) {
            var i = z.Tween(
              e,
              c.opts,
              t,
              n,
              c.opts.specialEasing[t] || c.opts.easing
            );
            return c.tweens.push(i), i;
          },
          stop: function (t) {
            for (var n = 0, r = t ? c.tweens.length : 0; n < r; n++)
              c.tweens[n].run(1);
            return t ? l.resolveWith(e, [c, t]) : l.rejectWith(e, [c, t]), this;
          },
        }),
        f = c.props;
      for (
        !(function (e, t) {
          var n, r, i, o, a;
          for (n in e)
            if (
              ((r = z.camelCase(n)),
              (i = t[r]),
              (o = e[n]),
              z.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
              n !== r && ((e[r] = o), delete e[n]),
              (a = z.cssHooks[r]) && ("expand" in a))
            ) {
              (o = a.expand(o)), delete e[r];
              for (n in o) (n in e) || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
        })(f, c.opts.specialEasing);
        a < s;
        a++
      )
        if ((r = Xt[a].call(c, e, f, c.opts))) return r;
      return (
        (i = c),
        (o = f),
        z.each(o, function (e, t) {
          for (
            var n = (Ut[e] || []).concat(Ut["*"]), r = 0, o = n.length;
            r < o;
            r++
          )
            if (n[r].call(i, e, t)) return;
        }),
        z.isFunction(c.opts.start) && c.opts.start.call(e, c),
        z.fx.timer(z.extend(u, { anim: c, queue: c.opts.queue, elem: e })),
        c
          .progress(c.opts.progress)
          .done(c.opts.done, c.opts.complete)
          .fail(c.opts.fail)
          .always(c.opts.always)
      );
    }
    function A(e, t, n, r, i) {
      return new A.prototype.init(e, t, n, r, i);
    }
    function j(e, t) {
      var n,
        r = { height: e },
        i = 0;
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        (n = ct[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function D(e) {
      return z.isWindow(e)
        ? e
        : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var L,
      H,
      F = e.document,
      M = e.location,
      O = e.navigator,
      _ = e.jQuery,
      q = e.$,
      B = Array.prototype.push,
      W = Array.prototype.slice,
      P = Array.prototype.indexOf,
      R = Object.prototype.toString,
      $ = Object.prototype.hasOwnProperty,
      I = String.prototype.trim,
      z = function (e, t) {
        return new z.fn.init(e, t, L);
      },
      X = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
      U = /\S/,
      Y = /\s+/,
      J = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      V = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
      G = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      Q = /^[\],:{}\s]*$/,
      K = /(?:^|:|,)(?:\s*\[)+/g,
      Z = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      ee = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
      te = /^-ms-/,
      ne = /-([\da-z])/gi,
      re = function (e, t) {
        return (t + "").toUpperCase();
      },
      ie = function () {
        F.addEventListener
          ? (F.removeEventListener("DOMContentLoaded", ie, !1), z.ready())
          : "complete" === F.readyState &&
            (F.detachEvent("onreadystatechange", ie), z.ready());
      },
      oe = {};
    (z.fn = z.prototype =
      {
        constructor: z,
        init: function (e, n, r) {
          var i, o, a;
          if (!e) return this;
          if (e.nodeType)
            return (this.context = this[0] = e), (this.length = 1), this;
          if ("string" == typeof e) {
            if (
              (i =
                "<" === e.charAt(0) &&
                ">" === e.charAt(e.length - 1) &&
                e.length >= 3
                  ? [null, e, null]
                  : V.exec(e)) &&
              (i[1] || !n)
            ) {
              if (i[1])
                return (
                  (n = n instanceof z ? n[0] : n),
                  (a = n && n.nodeType ? n.ownerDocument || n : F),
                  (e = z.parseHTML(i[1], a, !0)),
                  G.test(i[1]) && z.isPlainObject(n) && this.attr.call(e, n, !0),
                  z.merge(this, e)
                );
              if ((o = F.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return r.find(e);
                (this.length = 1), (this[0] = o);
              }
              return (this.context = F), (this.selector = e), this;
            }
            return !n || n.jquery
              ? (n || r).find(e)
              : this.constructor(n).find(e);
          }
          return z.isFunction(e)
            ? r.ready(e)
            : (e.selector !== t &&
                ((this.selector = e.selector), (this.context = e.context)),
              z.makeArray(e, this));
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function () {
          return this.length;
        },
        toArray: function () {
          return W.call(this);
        },
        get: function (e) {
          return null == e
            ? this.toArray()
            : e < 0
            ? this[this.length + e]
            : this[e];
        },
        pushStack: function (e, t, n) {
          var r = z.merge(this.constructor(), e);
          return (
            (r.prevObject = this),
            (r.context = this.context),
            "find" === t
              ? (r.selector = this.selector + (this.selector ? " " : "") + n)
              : t && (r.selector = this.selector + "." + t + "(" + n + ")"),
            r
          );
        },
        each: function (e, t) {
          return z.each(this, e, t);
        },
        ready: function (e) {
          return z.ready.promise().done(e), this;
        },
        eq: function (e) {
          return -1 === (e = +e) ? this.slice(e) : this.slice(e, e + 1);
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        slice: function () {
          return this.pushStack(
            W.apply(this, arguments),
            "slice",
            W.call(arguments).join(",")
          );
        },
        map: function (e) {
          return this.pushStack(
            z.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: B,
        sort: [].sort,
        splice: [].splice,
      }),
      (z.fn.init.prototype = z.fn),
      (z.extend = z.fn.extend =
        function () {
          var e,
            n,
            r,
            i,
            o,
            a,
            s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
          for (
            "boolean" == typeof s && ((c = s), (s = arguments[1] || {}), (l = 2)),
              "object" != typeof s && !z.isFunction(s) && (s = {}),
              u === l && ((s = this), --l);
            l < u;
            l++
          )
            if (null != (e = arguments[l]))
              for (n in e)
                (r = s[n]),
                  s !== (i = e[n]) &&
                    (c && i && (z.isPlainObject(i) || (o = z.isArray(i)))
                      ? (o
                          ? ((o = !1), (a = r && z.isArray(r) ? r : []))
                          : (a = r && z.isPlainObject(r) ? r : {}),
                        (s[n] = z.extend(c, a, i)))
                      : i !== t && (s[n] = i));
          return s;
        }),
      z.extend({
        noConflict: function (t) {
          return e.$ === z && (e.$ = q), t && e.jQuery === z && (e.jQuery = _), z;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? z.readyWait++ : z.ready(!0);
        },
        ready: function (e) {
          if (!0 === e ? !--z.readyWait : !z.isReady) {
            if (!F.body) return setTimeout(z.ready, 1);
            (z.isReady = !0),
              (!0 !== e && --z.readyWait > 0) ||
                (H.resolveWith(F, [z]),
                z.fn.trigger && z(F).trigger("ready").off("ready"));
          }
        },
        isFunction: function (e) {
          return "function" === z.type(e);
        },
        isArray:
          Array.isArray ||
          function (e) {
            return "array" === z.type(e);
          },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function (e) {
          return null == e ? String(e) : oe[R.call(e)] || "object";
        },
        isPlainObject: function (e) {
          if (!e || "object" !== z.type(e) || e.nodeType || z.isWindow(e))
            return !1;
          try {
            if (
              e.constructor &&
              !$.call(e, "constructor") &&
              !$.call(e.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (e) {
            return !1;
          }
          var n;
          for (n in e);
          return n === t || $.call(e, n);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        error: function (e) {
          throw new Error(e);
        },
        parseHTML: function (e, t, n) {
          var r;
          return e && "string" == typeof e
            ? ("boolean" == typeof t && ((n = t), (t = 0)),
              (t = t || F),
              (r = G.exec(e))
                ? [t.createElement(r[1])]
                : ((r = z.buildFragment([e], t, n ? null : [])),
                  z.merge(
                    [],
                    (r.cacheable ? z.clone(r.fragment) : r.fragment).childNodes
                  )))
            : null;
        },
        parseJSON: function (t) {
          return t && "string" == typeof t
            ? ((t = z.trim(t)),
              e.JSON && e.JSON.parse
                ? e.JSON.parse(t)
                : Q.test(t.replace(Z, "@").replace(ee, "]").replace(K, ""))
                ? new Function("return " + t)()
                : void z.error("Invalid JSON: " + t))
            : null;
        },
        parseXML: function (n) {
          var r, i;
          if (!n || "string" != typeof n) return null;
          try {
            e.DOMParser
              ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
              : (((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false"),
                r.loadXML(n));
          } catch (e) {
            r = t;
          }
          return (
            (!r ||
              !r.documentElement ||
              r.getElementsByTagName("parsererror").length) &&
              z.error("Invalid XML: " + n),
            r
          );
        },
        noop: function () {},
        globalEval: function (t) {
          t &&
            U.test(t) &&
            (
              e.execScript ||
              function (t) {
                e.eval.call(e, t);
              }
            )(t);
        },
        camelCase: function (e) {
          return e.replace(te, "ms-").replace(ne, re);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, n, r) {
          var i,
            o = 0,
            a = e.length,
            s = a === t || z.isFunction(e);
          if (r)
            if (s) {
              for (i in e) if (!1 === n.apply(e[i], r)) break;
            } else for (; o < a && !1 !== n.apply(e[o++], r); );
          else if (s) {
            for (i in e) if (!1 === n.call(e[i], i, e[i])) break;
          } else for (; o < a && !1 !== n.call(e[o], o, e[o++]); );
          return e;
        },
        trim:
          I && !I.call("\ufeff ")
            ? function (e) {
                return null == e ? "" : I.call(e);
              }
            : function (e) {
                return null == e ? "" : (e + "").replace(J, "");
              },
        makeArray: function (e, t) {
          var n,
            r = t || [];
          return (
            null != e &&
              ((n = z.type(e)),
              null == e.length ||
              "string" === n ||
              "function" === n ||
              "regexp" === n ||
              z.isWindow(e)
                ? B.call(r, e)
                : z.merge(r, e)),
            r
          );
        },
        inArray: function (e, t, n) {
          var r;
          if (t) {
            if (P) return P.call(t, e, n);
            for (
              r = t.length, n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0;
              n < r;
              n++
            )
              if (n in t && t[n] === e) return n;
          }
          return -1;
        },
        merge: function (e, n) {
          var r = n.length,
            i = e.length,
            o = 0;
          if ("number" == typeof r) for (; o < r; o++) e[i++] = n[o];
          else for (; n[o] !== t; ) e[i++] = n[o++];
          return (e.length = i), e;
        },
        grep: function (e, t, n) {
          var r,
            i = [],
            o = 0,
            a = e.length;
          for (n = !!n; o < a; o++) (r = !!t(e[o], o)), n !== r && i.push(e[o]);
          return i;
        },
        map: function (e, n, r) {
          var i,
            o,
            a = [],
            s = 0,
            l = e.length;
          if (
            e instanceof z ||
            (l !== t &&
              "number" == typeof l &&
              ((l > 0 && e[0] && e[l - 1]) || 0 === l || z.isArray(e)))
          )
            for (; s < l; s++)
              (i = n(e[s], s, r)), null != i && (a[a.length] = i);
          else for (o in e) (i = n(e[o], o, r)), null != i && (a[a.length] = i);
          return a.concat.apply([], a);
        },
        guid: 1,
        proxy: function (e, n) {
          var r, i, o;
          return (
            "string" == typeof n && ((r = e[n]), (n = e), (e = r)),
            z.isFunction(e)
              ? ((i = W.call(arguments, 2)),
                ((o = function () {
                  return e.apply(n, i.concat(W.call(arguments)));
                }).guid = e.guid =
                  e.guid || z.guid++),
                o)
              : t
          );
        },
        access: function (e, n, r, i, o, a, s) {
          var l,
            u = null == r,
            c = 0,
            f = e.length;
          if (r && "object" == typeof r) {
            for (c in r) z.access(e, n, c, r[c], 1, a, i);
            o = 1;
          } else if (i !== t) {
            if (
              ((l = s === t && z.isFunction(i)),
              u &&
                (l
                  ? ((l = n),
                    (n = function (e, t, n) {
                      return l.call(z(e), n);
                    }))
                  : (n.call(e, i), (n = null))),
              n)
            )
              for (; c < f; c++)
                n(e[c], r, l ? i.call(e[c], c, n(e[c], r)) : i, s);
            o = 1;
          }
          return o ? e : u ? n.call(e) : f ? n(e[0], r) : a;
        },
        now: function () {
          return new Date().getTime();
        },
      }),
      (z.ready.promise = function (t) {
        if (!H)
          if (((H = z.Deferred()), "complete" === F.readyState))
            setTimeout(z.ready, 1);
          else if (F.addEventListener)
            F.addEventListener("DOMContentLoaded", ie, !1),
              e.addEventListener("load", z.ready, !1);
          else {
            F.attachEvent("onreadystatechange", ie),
              e.attachEvent("onload", z.ready);
            var n = !1;
            try {
              n = null == e.frameElement && F.documentElement;
            } catch (e) {}
            n &&
              n.doScroll &&
              (function e() {
                if (!z.isReady) {
                  try {
                    n.doScroll("left");
                  } catch (t) {
                    return setTimeout(e, 50);
                  }
                  z.ready();
                }
              })();
          }
        return H.promise(t);
      }),
      z.each(
        "Boolean Number String Function Array Date RegExp Object".split(" "),
        function (e, t) {
          oe["[object " + t + "]"] = t.toLowerCase();
        }
      ),
      (L = z(F));
    var ae = {};
    (z.Callbacks = function (e) {
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c = [],
        f =
          !(e =
            "string" == typeof e
              ? ae[e] ||
                ((r = ae[(n = e)] = {}),
                z.each(n.split(Y), function (e, t) {
                  r[t] = !0;
                }),
                r)
              : z.extend({}, e)).once && [],
        p = function (t) {
          for (
            i = e.memory && t, o = !0, u = s || 0, s = 0, l = c.length, a = !0;
            c && u < l;
            u++
          )
            if (!1 === c[u].apply(t[0], t[1]) && e.stopOnFalse) {
              i = !1;
              break;
            }
          (a = !1),
            c && (f ? f.length && p(f.shift()) : i ? (c = []) : d.disable());
        },
        d = {
          add: function () {
            if (c) {
              var t = c.length;
              (function t(n) {
                z.each(n, function (n, r) {
                  var i = z.type(r);
                  "function" !== i || (e.unique && d.has(r))
                    ? r && r.length && "string" !== i && t(r)
                    : c.push(r);
                });
              })(arguments),
                a ? (l = c.length) : i && ((s = t), p(i));
            }
            return this;
          },
          remove: function () {
            return (
              c &&
                z.each(arguments, function (e, t) {
                  for (var n; (n = z.inArray(t, c, n)) > -1; )
                    c.splice(n, 1), a && (n <= l && l--, n <= u && u--);
                }),
              this
            );
          },
          has: function (e) {
            return z.inArray(e, c) > -1;
          },
          empty: function () {
            return (c = []), this;
          },
          disable: function () {
            return (c = f = i = t), this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return (f = t), i || d.disable(), this;
          },
          locked: function () {
            return !f;
          },
          fireWith: function (e, t) {
            return (
              (t = [e, (t = t || []).slice ? t.slice() : t]),
              c && (!o || f) && (a ? f.push(t) : p(t)),
              this
            );
          },
          fire: function () {
            return d.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return d;
    }),
      z.extend({
        Deferred: function (e) {
          var t = [
              ["resolve", "done", z.Callbacks("once memory"), "resolved"],
              ["reject", "fail", z.Callbacks("once memory"), "rejected"],
              ["notify", "progress", z.Callbacks("memory")],
            ],
            n = "pending",
            r = {
              state: function () {
                return n;
              },
              always: function () {
                return i.done(arguments).fail(arguments), this;
              },
              then: function () {
                var e = arguments;
                return z
                  .Deferred(function (n) {
                    z.each(t, function (t, r) {
                      var o = r[0],
                        a = e[t];
                      i[r[1]](
                        z.isFunction(a)
                          ? function () {
                              var e = a.apply(this, arguments);
                              e && z.isFunction(e.promise)
                                ? e
                                    .promise()
                                    .done(n.resolve)
                                    .fail(n.reject)
                                    .progress(n.notify)
                                : n[o + "With"](this === i ? n : this, [e]);
                            }
                          : n[o]
                      );
                    }),
                      (e = null);
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? z.extend(e, r) : r;
              },
            },
            i = {};
          return (
            (r.pipe = r.then),
            z.each(t, function (e, o) {
              var a = o[2],
                s = o[3];
              (r[o[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      n = s;
                    },
                    t[1 ^ e][2].disable,
                    t[2][2].lock
                  ),
                (i[o[0]] = a.fire),
                (i[o[0] + "With"] = a.fireWith);
            }),
            r.promise(i),
            e && e.call(i, i),
            i
          );
        },
        when: function (e) {
          var t,
            n,
            r,
            i = 0,
            o = W.call(arguments),
            a = o.length,
            s = 1 !== a || (e && z.isFunction(e.promise)) ? a : 0,
            l = 1 === s ? e : z.Deferred(),
            u = function (e, n, r) {
              return function (i) {
                (n[e] = this),
                  (r[e] = arguments.length > 1 ? W.call(arguments) : i),
                  r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
              };
            };
          if (a > 1)
            for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++)
              o[i] && z.isFunction(o[i].promise)
                ? o[i]
                    .promise()
                    .done(u(i, r, o))
                    .fail(l.reject)
                    .progress(u(i, n, t))
                : --s;
          return s || l.resolveWith(r, o), l.promise();
        },
      }),
      (z.support = (function () {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          p = F.createElement("div");
        if (
          (p.setAttribute("className", "t"),
          (p.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (n = p.getElementsByTagName("*")),
          ((r = p.getElementsByTagName("a")[0]).style.cssText =
            "top:1px;float:left;opacity:.5"),
          !n || !n.length)
        )
          return {};
        (o = (i = F.createElement("select")).appendChild(
          F.createElement("option")
        )),
          (a = p.getElementsByTagName("input")[0]),
          (t = {
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === a.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== p.className,
            enctype: !!F.createElement("form").enctype,
            html5Clone:
              "<:nav></:nav>" !== F.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === F.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1,
          }),
          (a.checked = !0),
          (t.noCloneChecked = a.cloneNode(!0).checked),
          (i.disabled = !0),
          (t.optDisabled = !o.disabled);
        try {
          delete p.test;
        } catch (e) {
          t.deleteExpando = !1;
        }
        if (
          (!p.addEventListener &&
            p.attachEvent &&
            p.fireEvent &&
            (p.attachEvent(
              "onclick",
              (f = function () {
                t.noCloneEvent = !1;
              })
            ),
            p.cloneNode(!0).fireEvent("onclick"),
            p.detachEvent("onclick", f)),
          ((a = F.createElement("input")).value = "t"),
          a.setAttribute("type", "radio"),
          (t.radioValue = "t" === a.value),
          a.setAttribute("checked", "checked"),
          a.setAttribute("name", "t"),
          p.appendChild(a),
          (s = F.createDocumentFragment()).appendChild(p.lastChild),
          (t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (t.appendChecked = a.checked),
          s.removeChild(a),
          s.appendChild(p),
          p.attachEvent)
        )
          for (u in { submit: !0, change: !0, focusin: !0 })
            (l = "on" + u),
              (c = l in p),
              c ||
                (p.setAttribute(l, "return;"), (c = "function" == typeof p[l])),
              (t[u + "Bubbles"] = c);
        return (
          z(function () {
            var n,
              r,
              i,
              o,
              a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
              s = F.getElementsByTagName("body")[0];
            s &&
              (((n = F.createElement("div")).style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
              s.insertBefore(n, s.firstChild),
              (r = F.createElement("div")),
              n.appendChild(r),
              (r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              ((i = r.getElementsByTagName("td"))[0].style.cssText =
                "padding:0;margin:0;border:0;display:none"),
              (c = 0 === i[0].offsetHeight),
              (i[0].style.display = ""),
              (i[1].style.display = "none"),
              (t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight),
              (r.innerHTML = ""),
              (r.style.cssText =
                "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
              (t.boxSizing = 4 === r.offsetWidth),
              (t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop),
              e.getComputedStyle &&
                ((t.pixelPosition =
                  "1%" !== (e.getComputedStyle(r, null) || {}).top),
                (t.boxSizingReliable =
                  "4px" ===
                  (e.getComputedStyle(r, null) || { width: "4px" }).width),
                ((o = F.createElement("div")).style.cssText = r.style.cssText =
                  a),
                (o.style.marginRight = o.style.width = "0"),
                (r.style.width = "1px"),
                r.appendChild(o),
                (t.reliableMarginRight = !parseFloat(
                  (e.getComputedStyle(o, null) || {}).marginRight
                ))),
              void 0 !== r.style.zoom &&
                ((r.innerHTML = ""),
                (r.style.cssText =
                  a + "width:1px;padding:1px;display:inline;zoom:1"),
                (t.inlineBlockNeedsLayout = 3 === r.offsetWidth),
                (r.style.display = "block"),
                (r.style.overflow = "visible"),
                (r.innerHTML = "<div></div>"),
                (r.firstChild.style.width = "5px"),
                (t.shrinkWrapBlocks = 3 !== r.offsetWidth),
                (n.style.zoom = 1)),
              s.removeChild(n),
              (n = r = i = o = null));
          }),
          s.removeChild(p),
          (n = r = i = o = a = s = p = null),
          t
        );
      })());
    var se = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      le = /([A-Z])/g;
    z.extend({
      cache: {},
      deletedIds: [],
      uuid: 0,
      expando: "jQuery" + (z.fn.jquery + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0,
      },
      hasData: function (e) {
        return !!(e = e.nodeType ? z.cache[e[z.expando]] : e[z.expando]) && !r(e);
      },
      data: function (e, n, r, i) {
        if (z.acceptData(e)) {
          var o,
            a,
            s = z.expando,
            l = "string" == typeof n,
            u = e.nodeType,
            c = u ? z.cache : e,
            f = u ? e[s] : e[s] && s;
          if ((f && c[f] && (i || c[f].data)) || !l || r !== t)
            return (
              f || (u ? (e[s] = f = z.deletedIds.pop() || z.guid++) : (f = s)),
              c[f] || ((c[f] = {}), u || (c[f].toJSON = z.noop)),
              ("object" != typeof n && "function" != typeof n) ||
                (i
                  ? (c[f] = z.extend(c[f], n))
                  : (c[f].data = z.extend(c[f].data, n))),
              (o = c[f]),
              i || (o.data || (o.data = {}), (o = o.data)),
              r !== t && (o[z.camelCase(n)] = r),
              l ? null == (a = o[n]) && (a = o[z.camelCase(n)]) : (a = o),
              a
            );
        }
      },
      removeData: function (e, t, n) {
        if (z.acceptData(e)) {
          var i,
            o,
            a,
            s = e.nodeType,
            l = s ? z.cache : e,
            u = s ? e[z.expando] : z.expando;
          if (l[u]) {
            if (t && (i = n ? l[u] : l[u].data)) {
              z.isArray(t) ||
                (t in i
                  ? (t = [t])
                  : (t = (t = z.camelCase(t)) in i ? [t] : t.split(" ")));
              for (o = 0, a = t.length; o < a; o++) delete i[t[o]];
              if (!(n ? r : z.isEmptyObject)(i)) return;
            }
            (n || (delete l[u].data, r(l[u]))) &&
              (s
                ? z.cleanData([e], !0)
                : z.support.deleteExpando || l != l.window
                ? delete l[u]
                : (l[u] = null));
          }
        }
      },
      _data: function (e, t, n) {
        return z.data(e, t, n, !0);
      },
      acceptData: function (e) {
        var t = e.nodeName && z.noData[e.nodeName.toLowerCase()];
        return !t || (!0 !== t && e.getAttribute("classid") === t);
      },
    }),
      z.fn.extend({
        data: function (e, r) {
          var i,
            o,
            a,
            s,
            l,
            u = this[0],
            c = 0,
            f = null;
          if (e === t) {
            if (
              this.length &&
              ((f = z.data(u)), 1 === u.nodeType && !z._data(u, "parsedAttrs"))
            ) {
              for (l = (a = u.attributes).length; c < l; c++)
                (s = a[c].name),
                  s.indexOf("data-") ||
                    ((s = z.camelCase(s.substring(5))), n(u, s, f[s]));
              z._data(u, "parsedAttrs", !0);
            }
            return f;
          }
          return "object" == typeof e
            ? this.each(function () {
                z.data(this, e);
              })
            : (((i = e.split(".", 2))[1] = i[1] ? "." + i[1] : ""),
              (o = i[1] + "!"),
              z.access(
                this,
                function (r) {
                  if (r === t)
                    return (
                      (f = this.triggerHandler("getData" + o, [i[0]])),
                      f === t && u && ((f = z.data(u, e)), (f = n(u, e, f))),
                      f === t && i[1] ? this.data(i[0]) : f
                    );
                  (i[1] = r),
                    this.each(function () {
                      var t = z(this);
                      t.triggerHandler("setData" + o, i),
                        z.data(this, e, r),
                        t.triggerHandler("changeData" + o, i);
                    });
                },
                null,
                r,
                arguments.length > 1,
                null,
                !1
              ));
        },
        removeData: function (e) {
          return this.each(function () {
            z.removeData(this, e);
          });
        },
      }),
      z.extend({
        queue: function (e, t, n) {
          var r;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (r = z._data(e, t)),
              n &&
                (!r || z.isArray(n)
                  ? (r = z._data(e, t, z.makeArray(n)))
                  : r.push(n)),
              r || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = z.queue(e, t),
            r = n.length,
            i = n.shift(),
            o = z._queueHooks(e, t);
          "inprogress" === i && ((i = n.shift()), r--),
            i &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              i.call(
                e,
                function () {
                  z.dequeue(e, t);
                },
                o
              )),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            z._data(e, n) ||
            z._data(e, n, {
              empty: z.Callbacks("once memory").add(function () {
                z.removeData(e, t + "queue", !0), z.removeData(e, n, !0);
              }),
            })
          );
        },
      }),
      z.fn.extend({
        queue: function (e, n) {
          var r = 2;
          return (
            "string" != typeof e && ((n = e), (e = "fx"), r--),
            arguments.length < r
              ? z.queue(this[0], e)
              : n === t
              ? this
              : this.each(function () {
                  var t = z.queue(this, e, n);
                  z._queueHooks(this, e),
                    "fx" === e && "inprogress" !== t[0] && z.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            z.dequeue(this, e);
          });
        },
        delay: function (e, t) {
          return (
            (e = (z.fx && z.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, n) {
              var r = setTimeout(t, e);
              n.stop = function () {
                clearTimeout(r);
              };
            })
          );
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, n) {
          var r,
            i = 1,
            o = z.Deferred(),
            a = this,
            s = this.length,
            l = function () {
              --i || o.resolveWith(a, [a]);
            };
          for ("string" != typeof e && ((n = e), (e = t)), e = e || "fx"; s--; )
            (r = z._data(a[s], e + "queueHooks")),
              r && r.empty && (i++, r.empty.add(l));
          return l(), o.promise(n);
        },
      });
    var ue,
      ce,
      fe,
      pe = /[\t\r\n]/g,
      de = /\r/g,
      he = /^(?:button|input)$/i,
      ge = /^(?:button|input|object|select|textarea)$/i,
      me = /^a(?:rea|)$/i,
      ye =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      ve = z.support.getSetAttribute;
    z.fn.extend({
      attr: function (e, t) {
        return z.access(this, z.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          z.removeAttr(this, e);
        });
      },
      prop: function (e, t) {
        return z.access(this, z.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return (
          (e = z.propFix[e] || e),
          this.each(function () {
            try {
              (this[e] = t), delete this[e];
            } catch (e) {}
          })
        );
      },
      addClass: function (e) {
        var t, n, r, i, o, a, s;
        if (z.isFunction(e))
          return this.each(function (t) {
            z(this).addClass(e.call(this, t, this.className));
          });
        if (e && "string" == typeof e)
          for (t = e.split(Y), n = 0, r = this.length; n < r; n++)
            if (1 === (i = this[n]).nodeType)
              if (i.className || 1 !== t.length) {
                for (o = " " + i.className + " ", a = 0, s = t.length; a < s; a++)
                  o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                i.className = z.trim(o);
              } else i.className = e;
        return this;
      },
      removeClass: function (e) {
        var n, r, i, o, a, s, l;
        if (z.isFunction(e))
          return this.each(function (t) {
            z(this).removeClass(e.call(this, t, this.className));
          });
        if ((e && "string" == typeof e) || e === t)
          for (n = (e || "").split(Y), s = 0, l = this.length; s < l; s++)
            if (1 === (i = this[s]).nodeType && i.className) {
              for (
                r = (" " + i.className + " ").replace(pe, " "),
                  o = 0,
                  a = n.length;
                o < a;
                o++
              )
                for (; r.indexOf(" " + n[o] + " ") >= 0; )
                  r = r.replace(" " + n[o] + " ", " ");
              i.className = e ? z.trim(r) : "";
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = "boolean" == typeof t;
        return z.isFunction(e)
          ? this.each(function (n) {
              z(this).toggleClass(e.call(this, n, this.className, t), t);
            })
          : this.each(function () {
              if ("string" === n)
                for (
                  var i, o = 0, a = z(this), s = t, l = e.split(Y);
                  (i = l[o++]);
  
                )
                  (s = r ? s : !a.hasClass(i)),
                    a[s ? "addClass" : "removeClass"](i);
              else
                ("undefined" !== n && "boolean" !== n) ||
                  (this.className &&
                    z._data(this, "__className__", this.className),
                  (this.className =
                    this.className || !1 === e
                      ? ""
                      : z._data(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
          if (
            1 === this[n].nodeType &&
            (" " + this[n].className + " ").replace(pe, " ").indexOf(t) >= 0
          )
            return !0;
        return !1;
      },
      val: function (e) {
        var n,
          r,
          i,
          o = this[0];
        return arguments.length
          ? ((i = z.isFunction(e)),
            this.each(function (r) {
              var o,
                a = z(this);
              1 === this.nodeType &&
                (null == (o = i ? e.call(this, r, a.val()) : e)
                  ? (o = "")
                  : "number" == typeof o
                  ? (o += "")
                  : z.isArray(o) &&
                    (o = z.map(o, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((n =
                  z.valHooks[this.type] ||
                  z.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in n &&
                  n.set(this, o, "value") !== t) ||
                  (this.value = o));
            }))
          : o
          ? (n = z.valHooks[o.type] || z.valHooks[o.nodeName.toLowerCase()]) &&
            "get" in n &&
            (r = n.get(o, "value")) !== t
            ? r
            : "string" == typeof (r = o.value)
            ? r.replace(de, "")
            : null == r
            ? ""
            : r
          : void 0;
      },
    }),
      z.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = e.attributes.value;
              return !t || t.specified ? e.value : e.text;
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                r,
                i,
                o = e.selectedIndex,
                a = [],
                s = e.options,
                l = "select-one" === e.type;
              if (o < 0) return null;
              for (n = l ? o : 0, r = l ? o + 1 : s.length; n < r; n++)
                if (
                  (i = s[n]).selected &&
                  (z.support.optDisabled
                    ? !i.disabled
                    : null === i.getAttribute("disabled")) &&
                  (!i.parentNode.disabled ||
                    !z.nodeName(i.parentNode, "optgroup"))
                ) {
                  if (((t = z(i).val()), l)) return t;
                  a.push(t);
                }
              return l && !a.length && s.length ? z(s[o]).val() : a;
            },
            set: function (e, t) {
              var n = z.makeArray(t);
              return (
                z(e)
                  .find("option")
                  .each(function () {
                    this.selected = z.inArray(z(this).val(), n) >= 0;
                  }),
                n.length || (e.selectedIndex = -1),
                n
              );
            },
          },
        },
        attrFn: {},
        attr: function (e, n, r, i) {
          var o,
            a,
            s,
            l = e.nodeType;
          if (e && 3 !== l && 8 !== l && 2 !== l)
            return i && z.isFunction(z.fn[n])
              ? z(e)[n](r)
              : void 0 === e.getAttribute
              ? z.prop(e, n, r)
              : ((s = 1 !== l || !z.isXMLDoc(e)) &&
                  ((n = n.toLowerCase()),
                  (a = z.attrHooks[n] || (ye.test(n) ? ce : ue))),
                r !== t
                  ? null === r
                    ? void z.removeAttr(e, n)
                    : a && "set" in a && s && (o = a.set(e, r, n)) !== t
                    ? o
                    : (e.setAttribute(n, r + ""), r)
                  : a && "get" in a && s && null !== (o = a.get(e, n))
                  ? o
                  : null === (o = e.getAttribute(n))
                  ? t
                  : o);
        },
        removeAttr: function (e, t) {
          var n,
            r,
            i,
            o,
            a = 0;
          if (t && 1 === e.nodeType)
            for (r = t.split(Y); a < r.length; a++)
              (i = r[a]),
                i &&
                  ((n = z.propFix[i] || i),
                  (o = ye.test(i)),
                  o || z.attr(e, i, ""),
                  e.removeAttribute(ve ? i : n),
                  o && n in e && (e[n] = !1));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (he.test(e.nodeName) && e.parentNode)
                z.error("type property can't be changed");
              else if (
                !z.support.radioValue &&
                "radio" === t &&
                z.nodeName(e, "input")
              ) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
          value: {
            get: function (e, t) {
              return ue && z.nodeName(e, "button")
                ? ue.get(e, t)
                : t in e
                ? e.value
                : null;
            },
            set: function (e, t, n) {
              if (ue && z.nodeName(e, "button")) return ue.set(e, t, n);
              e.value = t;
            },
          },
        },
        propFix: {
          tabindex: "tabIndex",
          readonly: "readOnly",
          for: "htmlFor",
          class: "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable",
        },
        prop: function (e, n, r) {
          var i,
            o,
            a = e.nodeType;
          if (e && 3 !== a && 8 !== a && 2 !== a)
            return (
              (1 !== a || !z.isXMLDoc(e)) &&
                ((n = z.propFix[n] || n), (o = z.propHooks[n])),
              r !== t
                ? o && "set" in o && (i = o.set(e, r, n)) !== t
                  ? i
                  : (e[n] = r)
                : o && "get" in o && null !== (i = o.get(e, n))
                ? i
                : e[n]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var n = e.getAttributeNode("tabindex");
              return n && n.specified
                ? parseInt(n.value, 10)
                : ge.test(e.nodeName) || (me.test(e.nodeName) && e.href)
                ? 0
                : t;
            },
          },
        },
      }),
      (ce = {
        get: function (e, n) {
          var r,
            i = z.prop(e, n);
          return !0 === i ||
            ("boolean" != typeof i &&
              (r = e.getAttributeNode(n)) &&
              !1 !== r.nodeValue)
            ? n.toLowerCase()
            : t;
        },
        set: function (e, t, n) {
          var r;
          return (
            !1 === t
              ? z.removeAttr(e, n)
              : ((r = z.propFix[n] || n) in e && (e[r] = !0),
                e.setAttribute(n, n.toLowerCase())),
            n
          );
        },
      }),
      ve ||
        ((fe = { name: !0, id: !0, coords: !0 }),
        (ue = z.valHooks.button =
          {
            get: function (e, n) {
              var r;
              return (r = e.getAttributeNode(n)) &&
                (fe[n] ? "" !== r.value : r.specified)
                ? r.value
                : t;
            },
            set: function (e, t, n) {
              var r = e.getAttributeNode(n);
              return (
                r || ((r = F.createAttribute(n)), e.setAttributeNode(r)),
                (r.value = t + "")
              );
            },
          }),
        z.each(["width", "height"], function (e, t) {
          z.attrHooks[t] = z.extend(z.attrHooks[t], {
            set: function (e, n) {
              if ("" === n) return e.setAttribute(t, "auto"), n;
            },
          });
        }),
        (z.attrHooks.contenteditable = {
          get: ue.get,
          set: function (e, t, n) {
            "" === t && (t = "false"), ue.set(e, t, n);
          },
        })),
      z.support.hrefNormalized ||
        z.each(["href", "src", "width", "height"], function (e, n) {
          z.attrHooks[n] = z.extend(z.attrHooks[n], {
            get: function (e) {
              var r = e.getAttribute(n, 2);
              return null === r ? t : r;
            },
          });
        }),
      z.support.style ||
        (z.attrHooks.style = {
          get: function (e) {
            return e.style.cssText.toLowerCase() || t;
          },
          set: function (e, t) {
            return (e.style.cssText = t + "");
          },
        }),
      z.support.optSelected ||
        (z.propHooks.selected = z.extend(z.propHooks.selected, {
          get: function (e) {
            var t = e.parentNode;
            return (
              t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
              null
            );
          },
        })),
      z.support.enctype || (z.propFix.enctype = "encoding"),
      z.support.checkOn ||
        z.each(["radio", "checkbox"], function () {
          z.valHooks[this] = {
            get: function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            },
          };
        }),
      z.each(["radio", "checkbox"], function () {
        z.valHooks[this] = z.extend(z.valHooks[this], {
          set: function (e, t) {
            if (z.isArray(t)) return (e.checked = z.inArray(z(e).val(), t) >= 0);
          },
        });
      });
    var be = /^(?:textarea|input|select)$/i,
      xe = /^([^\.]*|)(?:\.(.+)|)$/,
      we = /(?:^|\s)hover(\.\S+|)\b/,
      Te = /^key/,
      Ne = /^(?:mouse|contextmenu)|click/,
      Ce = /^(?:focusinfocus|focusoutblur)$/,
      ke = function (e) {
        return z.event.special.hover
          ? e
          : e.replace(we, "mouseenter$1 mouseleave$1");
      };
    (z.event = {
      add: function (e, n, r, i, o) {
        var a, s, l, u, c, f, p, d, h, g, m;
        if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (a = z._data(e))) {
          for (
            r.handler && ((r = (h = r).handler), (o = h.selector)),
              r.guid || (r.guid = z.guid++),
              (l = a.events) || (a.events = l = {}),
              (s = a.handle) ||
                ((a.handle = s =
                  function (e) {
                    return void 0 === z || (e && z.event.triggered === e.type)
                      ? t
                      : z.event.dispatch.apply(s.elem, arguments);
                  }),
                (s.elem = e)),
              n = z.trim(ke(n)).split(" "),
              u = 0;
            u < n.length;
            u++
          )
            (f = (c = xe.exec(n[u]) || [])[1]),
              (p = (c[2] || "").split(".").sort()),
              (m = z.event.special[f] || {}),
              (f = (o ? m.delegateType : m.bindType) || f),
              (m = z.event.special[f] || {}),
              (d = z.extend(
                {
                  type: f,
                  origType: c[1],
                  data: i,
                  handler: r,
                  guid: r.guid,
                  selector: o,
                  needsContext: o && z.expr.match.needsContext.test(o),
                  namespace: p.join("."),
                },
                h
              )),
              (g = l[f]) ||
                (((g = l[f] = []).delegateCount = 0),
                (m.setup && !1 !== m.setup.call(e, i, p, s)) ||
                  (e.addEventListener
                    ? e.addEventListener(f, s, !1)
                    : e.attachEvent && e.attachEvent("on" + f, s))),
              m.add &&
                (m.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)),
              o ? g.splice(g.delegateCount++, 0, d) : g.push(d),
              (z.event.global[f] = !0);
          e = null;
        }
      },
      global: {},
      remove: function (e, t, n, r, i) {
        var o,
          a,
          s,
          l,
          u,
          c,
          f,
          p,
          d,
          h,
          g,
          m = z.hasData(e) && z._data(e);
        if (m && (p = m.events)) {
          for (t = z.trim(ke(t || "")).split(" "), o = 0; o < t.length; o++)
            if (((s = l = (a = xe.exec(t[o]) || [])[1]), (u = a[2]), s)) {
              for (
                d = z.event.special[s] || {},
                  c = (h = p[(s = (r ? d.delegateType : d.bindType) || s)] || [])
                    .length,
                  u = u
                    ? new RegExp(
                        "(^|\\.)" +
                          u.split(".").sort().join("\\.(?:.*\\.|)") +
                          "(\\.|$)"
                      )
                    : null,
                  f = 0;
                f < h.length;
                f++
              )
                (g = h[f]),
                  (i || l === g.origType) &&
                    (!n || n.guid === g.guid) &&
                    (!u || u.test(g.namespace)) &&
                    (!r || r === g.selector || ("**" === r && g.selector)) &&
                    (h.splice(f--, 1),
                    g.selector && h.delegateCount--,
                    d.remove && d.remove.call(e, g));
              0 === h.length &&
                c !== h.length &&
                ((!d.teardown || !1 === d.teardown.call(e, u, m.handle)) &&
                  z.removeEvent(e, s, m.handle),
                delete p[s]);
            } else for (s in p) z.event.remove(e, s + t[o], n, r, !0);
          z.isEmptyObject(p) && (delete m.handle, z.removeData(e, "events", !0));
        }
      },
      customEvent: { getData: !0, setData: !0, changeData: !0 },
      trigger: function (n, r, i, o) {
        if (!i || (3 !== i.nodeType && 8 !== i.nodeType)) {
          var a,
            s,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m = n.type || n,
            y = [];
          if (Ce.test(m + z.event.triggered)) return;
          if (
            (m.indexOf("!") >= 0 && ((m = m.slice(0, -1)), (s = !0)),
            m.indexOf(".") >= 0 && ((m = (y = m.split(".")).shift()), y.sort()),
            (!i || z.event.customEvent[m]) && !z.event.global[m])
          )
            return;
          if (
            (((n =
              "object" == typeof n
                ? n[z.expando]
                  ? n
                  : new z.Event(m, n)
                : new z.Event(m)).type = m),
            (n.isTrigger = !0),
            (n.exclusive = s),
            (n.namespace = y.join(".")),
            (n.namespace_re = n.namespace
              ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (f = m.indexOf(":") < 0 ? "on" + m : ""),
            !i)
          ) {
            a = z.cache;
            for (l in a)
              a[l].events &&
                a[l].events[m] &&
                z.event.trigger(n, r, a[l].handle.elem, !0);
            return;
          }
          if (
            ((n.result = t),
            n.target || (n.target = i),
            (r = null != r ? z.makeArray(r) : []).unshift(n),
            (p = z.event.special[m] || {}).trigger &&
              !1 === p.trigger.apply(i, r))
          )
            return;
          if (
            ((h = [[i, p.bindType || m]]), !o && !p.noBubble && !z.isWindow(i))
          ) {
            for (
              g = p.delegateType || m,
                u = Ce.test(g + m) ? i : i.parentNode,
                c = i;
              u;
              u = u.parentNode
            )
              h.push([u, g]), (c = u);
            c === (i.ownerDocument || F) &&
              h.push([c.defaultView || c.parentWindow || e, g]);
          }
          for (l = 0; l < h.length && !n.isPropagationStopped(); l++)
            (u = h[l][0]),
              (n.type = h[l][1]),
              (d = (z._data(u, "events") || {})[n.type] && z._data(u, "handle")),
              d && d.apply(u, r),
              (d = f && u[f]),
              d &&
                z.acceptData(u) &&
                d.apply &&
                !1 === d.apply(u, r) &&
                n.preventDefault();
          return (
            (n.type = m),
            !o &&
              !n.isDefaultPrevented() &&
              (!p._default || !1 === p._default.apply(i.ownerDocument, r)) &&
              ("click" !== m || !z.nodeName(i, "a")) &&
              z.acceptData(i) &&
              f &&
              i[m] &&
              (("focus" !== m && "blur" !== m) || 0 !== n.target.offsetWidth) &&
              !z.isWindow(i) &&
              ((c = i[f]) && (i[f] = null),
              (z.event.triggered = m),
              i[m](),
              (z.event.triggered = t),
              c && (i[f] = c)),
            n.result
          );
        }
      },
      dispatch: function (n) {
        n = z.event.fix(n || e.event);
        var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c,
          f,
          p = (z._data(this, "events") || {})[n.type] || [],
          d = p.delegateCount,
          h = W.call(arguments),
          g = !n.exclusive && !n.namespace,
          m = z.event.special[n.type] || {},
          y = [];
        if (
          ((h[0] = n),
          (n.delegateTarget = this),
          !m.preDispatch || !1 !== m.preDispatch.call(this, n))
        ) {
          if (d && (!n.button || "click" !== n.type))
            for (o = n.target; o != this; o = o.parentNode || this)
              if (!0 !== o.disabled || "click" !== n.type) {
                for (s = {}, u = [], r = 0; r < d; r++)
                  (c = p[r]),
                    (f = c.selector),
                    s[f] === t &&
                      (s[f] = c.needsContext
                        ? z(f, this).index(o) >= 0
                        : z.find(f, this, null, [o]).length),
                    s[f] && u.push(c);
                u.length && y.push({ elem: o, matches: u });
              }
          for (
            p.length > d && y.push({ elem: this, matches: p.slice(d) }), r = 0;
            r < y.length && !n.isPropagationStopped();
            r++
          )
            for (
              l = y[r], n.currentTarget = l.elem, i = 0;
              i < l.matches.length && !n.isImmediatePropagationStopped();
              i++
            )
              (c = l.matches[i]),
                (g ||
                  (!n.namespace && !c.namespace) ||
                  (n.namespace_re && n.namespace_re.test(c.namespace))) &&
                  ((n.data = c.data),
                  (n.handleObj = c),
                  (a = (
                    (z.event.special[c.origType] || {}).handle || c.handler
                  ).apply(l.elem, h)) !== t &&
                    ((n.result = a),
                    !1 === a && (n.preventDefault(), n.stopPropagation())));
          return m.postDispatch && m.postDispatch.call(this, n), n.result;
        }
      },
      props:
        "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return (
            null == e.which &&
              (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (e, n) {
          var r,
            i,
            o,
            a = n.button,
            s = n.fromElement;
          return (
            null == e.pageX &&
              null != n.clientX &&
              ((i = (r = e.target.ownerDocument || F).documentElement),
              (o = r.body),
              (e.pageX =
                n.clientX +
                ((i && i.scrollLeft) || (o && o.scrollLeft) || 0) -
                ((i && i.clientLeft) || (o && o.clientLeft) || 0)),
              (e.pageY =
                n.clientY +
                ((i && i.scrollTop) || (o && o.scrollTop) || 0) -
                ((i && i.clientTop) || (o && o.clientTop) || 0))),
            !e.relatedTarget &&
              s &&
              (e.relatedTarget = s === e.target ? n.toElement : s),
            !e.which &&
              a !== t &&
              (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
            e
          );
        },
      },
      fix: function (e) {
        if (e[z.expando]) return e;
        var t,
          n,
          r = e,
          i = z.event.fixHooks[e.type] || {},
          o = i.props ? this.props.concat(i.props) : this.props;
        for (e = z.Event(r), t = o.length; t; ) (n = o[--t]), (e[n] = r[n]);
        return (
          e.target || (e.target = r.srcElement || F),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          (e.metaKey = !!e.metaKey),
          i.filter ? i.filter(e, r) : e
        );
      },
      special: {
        load: { noBubble: !0 },
        focus: { delegateType: "focusin" },
        blur: { delegateType: "focusout" },
        beforeunload: {
          setup: function (e, t, n) {
            z.isWindow(this) && (this.onbeforeunload = n);
          },
          teardown: function (e, t) {
            this.onbeforeunload === t && (this.onbeforeunload = null);
          },
        },
      },
      simulate: function (e, t, n, r) {
        var i = z.extend(new z.Event(), n, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? z.event.trigger(i, null, t) : z.event.dispatch.call(t, i),
          i.isDefaultPrevented() && n.preventDefault();
      },
    }),
      (z.event.handle = z.event.dispatch),
      (z.removeEvent = F.removeEventListener
        ? function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1);
          }
        : function (e, t, n) {
            var r = "on" + t;
            e.detachEvent &&
              (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
          }),
      (z.Event = function (e, t) {
        if (!(this instanceof z.Event)) return new z.Event(e, t);
        e && e.type
          ? ((this.originalEvent = e),
            (this.type = e.type),
            (this.isDefaultPrevented =
              e.defaultPrevented ||
              !1 === e.returnValue ||
              (e.getPreventDefault && e.getPreventDefault())
                ? o
                : i))
          : (this.type = e),
          t && z.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || z.now()),
          (this[z.expando] = !0);
      }),
      (z.Event.prototype = {
        preventDefault: function () {
          this.isDefaultPrevented = o;
          var e = this.originalEvent;
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          this.isPropagationStopped = o;
          var e = this.originalEvent;
          e && (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          (this.isImmediatePropagationStopped = o), this.stopPropagation();
        },
        isDefaultPrevented: i,
        isPropagationStopped: i,
        isImmediatePropagationStopped: i,
      }),
      z.each(
        { mouseenter: "mouseover", mouseleave: "mouseout" },
        function (e, t) {
          z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                r = e.relatedTarget,
                i = e.handleObj;
              i.selector;
              return (
                (r && (r === this || z.contains(this, r))) ||
                  ((e.type = i.origType),
                  (n = i.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      z.support.submitBubbles ||
        (z.event.special.submit = {
          setup: function () {
            if (z.nodeName(this, "form")) return !1;
            z.event.add(this, "click._submit keypress._submit", function (e) {
              var n = e.target,
                r =
                  z.nodeName(n, "input") || z.nodeName(n, "button") ? n.form : t;
              r &&
                !z._data(r, "_submit_attached") &&
                (z.event.add(r, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                z._data(r, "_submit_attached", !0));
            });
          },
          postDispatch: function (e) {
            e._submit_bubble &&
              (delete e._submit_bubble,
              this.parentNode &&
                !e.isTrigger &&
                z.event.simulate("submit", this.parentNode, e, !0));
          },
          teardown: function () {
            if (z.nodeName(this, "form")) return !1;
            z.event.remove(this, "._submit");
          },
        }),
      z.support.changeBubbles ||
        (z.event.special.change = {
          setup: function () {
            if (be.test(this.nodeName))
              return (
                ("checkbox" !== this.type && "radio" !== this.type) ||
                  (z.event.add(this, "propertychange._change", function (e) {
                    "checked" === e.originalEvent.propertyName &&
                      (this._just_changed = !0);
                  }),
                  z.event.add(this, "click._change", function (e) {
                    this._just_changed &&
                      !e.isTrigger &&
                      (this._just_changed = !1),
                      z.event.simulate("change", this, e, !0);
                  })),
                !1
              );
            z.event.add(this, "beforeactivate._change", function (e) {
              var t = e.target;
              be.test(t.nodeName) &&
                !z._data(t, "_change_attached") &&
                (z.event.add(t, "change._change", function (e) {
                  this.parentNode &&
                    !e.isSimulated &&
                    !e.isTrigger &&
                    z.event.simulate("change", this.parentNode, e, !0);
                }),
                z._data(t, "_change_attached", !0));
            });
          },
          handle: function (e) {
            var t = e.target;
            if (
              this !== t ||
              e.isSimulated ||
              e.isTrigger ||
              ("radio" !== t.type && "checkbox" !== t.type)
            )
              return e.handleObj.handler.apply(this, arguments);
          },
          teardown: function () {
            return z.event.remove(this, "._change"), !be.test(this.nodeName);
          },
        }),
      z.support.focusinBubbles ||
        z.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = 0,
            r = function (e) {
              z.event.simulate(t, e.target, z.event.fix(e), !0);
            };
          z.event.special[t] = {
            setup: function () {
              0 == n++ && F.addEventListener(e, r, !0);
            },
            teardown: function () {
              0 == --n && F.removeEventListener(e, r, !0);
            },
          };
        }),
      z.fn.extend({
        on: function (e, n, r, o, a) {
          var s, l;
          if ("object" == typeof e) {
            "string" != typeof n && ((r = r || n), (n = t));
            for (l in e) this.on(l, n, r, e[l], a);
            return this;
          }
          if (
            (null == r && null == o
              ? ((o = n), (r = n = t))
              : null == o &&
                ("string" == typeof n
                  ? ((o = r), (r = t))
                  : ((o = r), (r = n), (n = t))),
            !1 === o)
          )
            o = i;
          else if (!o) return this;
          return (
            1 === a &&
              ((s = o),
              ((o = function (e) {
                return z().off(e), s.apply(this, arguments);
              }).guid = s.guid || (s.guid = z.guid++))),
            this.each(function () {
              z.event.add(this, e, o, r, n);
            })
          );
        },
        one: function (e, t, n, r) {
          return this.on(e, t, n, r, 1);
        },
        off: function (e, n, r) {
          var o, a;
          if (e && e.preventDefault && e.handleObj)
            return (
              (o = e.handleObj),
              z(e.delegateTarget).off(
                o.namespace ? o.origType + "." + o.namespace : o.origType,
                o.selector,
                o.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (a in e) this.off(a, n, e[a]);
            return this;
          }
          return (
            (!1 !== n && "function" != typeof n) || ((r = n), (n = t)),
            !1 === r && (r = i),
            this.each(function () {
              z.event.remove(this, e, r, n);
            })
          );
        },
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        live: function (e, t, n) {
          return z(this.context).on(e, this.selector, t, n), this;
        },
        die: function (e, t) {
          return z(this.context).off(e, this.selector || "**", t), this;
        },
        delegate: function (e, t, n, r) {
          return this.on(t, e, n, r);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
        trigger: function (e, t) {
          return this.each(function () {
            z.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          if (this[0]) return z.event.trigger(e, t, this[0], !0);
        },
        toggle: function (e) {
          var t = arguments,
            n = e.guid || z.guid++,
            r = 0,
            i = function (n) {
              var i = (z._data(this, "lastToggle" + e.guid) || 0) % r;
              return (
                z._data(this, "lastToggle" + e.guid, i + 1),
                n.preventDefault(),
                t[i].apply(this, arguments) || !1
              );
            };
          for (i.guid = n; r < t.length; ) t[r++].guid = n;
          return this.click(i);
        },
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      z.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (e, t) {
          (z.fn[t] = function (e, n) {
            return (
              null == n && ((n = e), (e = null)),
              arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            );
          }),
            Te.test(t) && (z.event.fixHooks[t] = z.event.keyHooks),
            Ne.test(t) && (z.event.fixHooks[t] = z.event.mouseHooks);
        }
      ),
      (function (e, t) {
        function n(e, t, n, r) {
          n = n || [];
          var i,
            o,
            a,
            s,
            l = (t = t || _).nodeType;
          if (!e || "string" != typeof e) return n;
          if (1 !== l && 9 !== l) return [];
          if (!(a = b(t)) && !r && (i = ae.exec(e)))
            if ((s = i[1])) {
              if (9 === l) {
                if (!(o = t.getElementById(s)) || !o.parentNode) return n;
                if (o.id === s) return n.push(o), n;
              } else if (
                t.ownerDocument &&
                (o = t.ownerDocument.getElementById(s)) &&
                x(t, o) &&
                o.id === s
              )
                return n.push(o), n;
            } else {
              if (i[2])
                return R.apply(n, $.call(t.getElementsByTagName(e), 0)), n;
              if ((s = i[3]) && me && t.getElementsByClassName)
                return R.apply(n, $.call(t.getElementsByClassName(s), 0)), n;
            }
          return d(e.replace(ne, "$1"), t, n, r, a);
        }
        function r(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }
        function i(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        }
        function o(e) {
          return X(function (t) {
            return (
              (t = +t),
              X(function (n, r) {
                for (var i, o = e([], n.length, t), a = o.length; a--; )
                  n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
              })
            );
          });
        }
        function a(e, t, n) {
          if (e === t) return n;
          for (var r = e.nextSibling; r; ) {
            if (r === t) return -1;
            r = r.nextSibling;
          }
          return 1;
        }
        function s(e, t) {
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = J[M][e];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, l = [], u = y.preFilter; s; ) {
            (r && !(i = re.exec(s))) ||
              (i && (s = s.slice(i[0].length)), l.push((o = []))),
              (r = !1),
              (i = ie.exec(s)) &&
                (o.push((r = new O(i.shift()))),
                (s = s.slice(r.length)),
                (r.type = i[0].replace(ne, " ")));
            for (a in y.filter)
              (i = fe[a].exec(s)) &&
                (!u[a] || (i = u[a](i, _, !0))) &&
                (o.push((r = new O(i.shift()))),
                (s = s.slice(r.length)),
                (r.type = a),
                (r.matches = i));
            if (!r) break;
          }
          return t ? s.length : s ? n.error(e) : J(e, l).slice(0);
        }
        function l(e, t, n) {
          var r = t.dir,
            i = n && "parentNode" === t.dir,
            o = W++;
          return t.first
            ? function (t, n, o) {
                for (; (t = t[r]); ) if (i || 1 === t.nodeType) return e(t, n, o);
              }
            : function (t, n, a) {
                if (a) {
                  for (; (t = t[r]); )
                    if ((i || 1 === t.nodeType) && e(t, n, a)) return t;
                } else
                  for (var s, l = B + " " + o + " ", u = l + g; (t = t[r]); )
                    if (i || 1 === t.nodeType) {
                      if ((s = t[M]) === u) return t.sizset;
                      if ("string" == typeof s && 0 === s.indexOf(l)) {
                        if (t.sizset) return t;
                      } else {
                        if (((t[M] = u), e(t, n, a))) return (t.sizset = !0), t;
                        t.sizset = !1;
                      }
                    }
              };
        }
        function u(e) {
          return e.length > 1
            ? function (t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
              }
            : e[0];
        }
        function c(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
            (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), u && t.push(s)));
          return a;
        }
        function f(e, t, r, i, o, a) {
          return (
            i && !i[M] && (i = f(i)),
            o && !o[M] && (o = f(o, a)),
            X(function (a, s, l, u) {
              if (!a || !o) {
                var f,
                  p,
                  d,
                  h = [],
                  g = [],
                  m = s.length,
                  y =
                    a ||
                    (function (e, t, r, i) {
                      for (var o = 0, a = t.length; o < a; o++) n(e, t[o], r, i);
                      return r;
                    })(t || "*", l.nodeType ? [l] : l, [], a),
                  v = !e || (!a && t) ? y : c(y, h, e, l, u),
                  b = r ? (o || (a ? e : m || i) ? [] : s) : v;
                if ((r && r(v, b, l, u), i))
                  for (d = c(b, g), i(d, [], l, u), f = d.length; f--; )
                    (p = d[f]) && (b[g[f]] = !(v[g[f]] = p));
                if (a)
                  for (f = e && b.length; f--; )
                    (p = b[f]) && (a[h[f]] = !(s[h[f]] = p));
                else
                  (b = c(b === s ? b.splice(m, b.length) : b)),
                    o ? o(null, s, b, u) : R.apply(s, b);
              }
            })
          );
        }
        function p(e) {
          for (
            var t,
              n,
              r,
              i = e.length,
              o = y.relative[e[0].type],
              a = o || y.relative[" "],
              s = o ? 1 : 0,
              c = l(
                function (e) {
                  return e === t;
                },
                a,
                !0
              ),
              d = l(
                function (e) {
                  return I.call(t, e) > -1;
                },
                a,
                !0
              ),
              h = [
                function (e, n, r) {
                  return (
                    (!o && (r || n !== C)) ||
                    ((t = n).nodeType ? c(e, n, r) : d(e, n, r))
                  );
                },
              ];
            s < i;
            s++
          )
            if ((n = y.relative[e[s].type])) h = [l(u(h), n)];
            else {
              if ((n = y.filter[e[s].type].apply(null, e[s].matches))[M]) {
                for (r = ++s; r < i && !y.relative[e[r].type]; r++);
                return f(
                  s > 1 && u(h),
                  s > 1 &&
                    e
                      .slice(0, s - 1)
                      .join("")
                      .replace(ne, "$1"),
                  n,
                  s < r && p(e.slice(s, r)),
                  r < i && p((e = e.slice(r))),
                  r < i && e.join("")
                );
              }
              h.push(n);
            }
          return u(h);
        }
        function d(e, t, n, r, i) {
          var o,
            a,
            l,
            u,
            c,
            f = s(e);
          f.length;
          if (!r && 1 === f.length) {
            if (
              (a = f[0] = f[0].slice(0)).length > 2 &&
              "ID" === (l = a[0]).type &&
              9 === t.nodeType &&
              !i &&
              y.relative[a[1].type]
            ) {
              if (!(t = y.find.ID(l.matches[0].replace(ce, ""), t, i)[0]))
                return n;
              e = e.slice(a.shift().length);
            }
            for (
              o = fe.POS.test(e) ? -1 : a.length - 1;
              o >= 0 && ((l = a[o]), !y.relative[(u = l.type)]);
              o--
            )
              if (
                (c = y.find[u]) &&
                (r = c(
                  l.matches[0].replace(ce, ""),
                  (se.test(a[0].type) && t.parentNode) || t,
                  i
                ))
              ) {
                if ((a.splice(o, 1), !(e = r.length && a.join(""))))
                  return R.apply(n, $.call(r, 0)), n;
                break;
              }
          }
          return w(e, f)(r, t, i, n, se.test(e)), n;
        }
        function h() {}
        var g,
          m,
          y,
          v,
          b,
          x,
          w,
          T,
          N,
          C,
          k,
          E,
          S,
          A,
          j,
          D,
          L,
          H,
          F = "undefined",
          M = ("sizcache" + Math.random()).replace(".", ""),
          O = String,
          _ = e.document,
          q = _.documentElement,
          B = 0,
          W = 0,
          P = [].pop,
          R = [].push,
          $ = [].slice,
          I =
            [].indexOf ||
            function (e) {
              for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e) return t;
              return -1;
            },
          X = function (e, t) {
            return (e[M] = null == t || t), e;
          },
          U = function () {
            var e = {},
              t = [];
            return X(function (n, r) {
              return t.push(n) > y.cacheLength && delete e[t.shift()], (e[n] = r);
            }, e);
          },
          Y = U(),
          J = U(),
          V = U(),
          G = "[\\x20\\t\\r\\n\\f]",
          Q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
          K = Q.replace("w", "w#"),
          Z =
            "\\[" +
            G +
            "*(" +
            Q +
            ")" +
            G +
            "*(?:([*^$|!~]?=)" +
            G +
            "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
            K +
            ")|)|)" +
            G +
            "*\\]",
          ee =
            ":(" +
            Q +
            ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
            Z +
            ")|[^:]|\\\\.)*|.*))\\)|)",
          te =
            ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            G +
            "*((?:-\\d)?\\d*)" +
            G +
            "*\\)|)(?=[^-]|$)",
          ne = new RegExp(
            "^" + G + "+|((?:^|[^\\\\])(?:\\\\.)*)" + G + "+$",
            "g"
          ),
          re = new RegExp("^" + G + "*," + G + "*"),
          ie = new RegExp("^" + G + "*([\\x20\\t\\r\\n\\f>+~])" + G + "*"),
          oe = new RegExp(ee),
          ae = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
          se = /[\x20\t\r\n\f]*[+~]/,
          le = /h\d/i,
          ue = /input|select|textarea|button/i,
          ce = /\\(?!\\)/g,
          fe = {
            ID: new RegExp("^#(" + Q + ")"),
            CLASS: new RegExp("^\\.(" + Q + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + Q + ")['\"]?\\]"),
            TAG: new RegExp("^(" + Q.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + Z),
            PSEUDO: new RegExp("^" + ee),
            POS: new RegExp(te, "i"),
            CHILD: new RegExp(
              "^:(only|nth|first|last)-child(?:\\(" +
                G +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                G +
                "*(?:([+-]|)" +
                G +
                "*(\\d+)|))" +
                G +
                "*\\)|)",
              "i"
            ),
            needsContext: new RegExp("^" + G + "*[>+~]|" + te, "i"),
          },
          pe = function (e) {
            var t = _.createElement("div");
            try {
              return e(t);
            } catch (e) {
              return !1;
            } finally {
              t = null;
            }
          },
          de = pe(function (e) {
            return (
              e.appendChild(_.createComment("")),
              !e.getElementsByTagName("*").length
            );
          }),
          he = pe(function (e) {
            return (
              (e.innerHTML = "<a href='#'></a>"),
              e.firstChild &&
                typeof e.firstChild.getAttribute !== F &&
                "#" === e.firstChild.getAttribute("href")
            );
          }),
          ge = pe(function (e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t;
          }),
          me = pe(function (e) {
            return (
              (e.innerHTML =
                "<div class='hidden e'></div><div class='hidden'></div>"),
              !(
                !e.getElementsByClassName || !e.getElementsByClassName("e").length
              ) &&
                ((e.lastChild.className = "e"),
                2 === e.getElementsByClassName("e").length)
            );
          }),
          ye = pe(function (e) {
            (e.id = M + 0),
              (e.innerHTML =
                "<a name='" + M + "'></a><div name='" + M + "'></div>"),
              q.insertBefore(e, q.firstChild);
            var t =
              _.getElementsByName &&
              _.getElementsByName(M).length ===
                2 + _.getElementsByName(M + 0).length;
            return (m = !_.getElementById(M)), q.removeChild(e), t;
          });
        try {
          $.call(q.childNodes, 0)[0].nodeType;
        } catch (e) {
          $ = function (e) {
            for (var t, n = []; (t = this[e]); e++) n.push(t);
            return n;
          };
        }
        (n.matches = function (e, t) {
          return n(e, null, null, t);
        }),
          (n.matchesSelector = function (e, t) {
            return n(t, null, null, [e]).length > 0;
          }),
          (v = n.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += v(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r]); r++) n += v(t);
              return n;
            }),
          (b = n.isXML =
            function (e) {
              var t = e && (e.ownerDocument || e).documentElement;
              return !!t && "HTML" !== t.nodeName;
            }),
          (x = n.contains =
            q.contains
              ? function (e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !!(r && 1 === r.nodeType && n.contains && n.contains(r))
                  );
                }
              : q.compareDocumentPosition
              ? function (e, t) {
                  return t && !!(16 & e.compareDocumentPosition(t));
                }
              : function (e, t) {
                  for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (n.attr = function (e, t) {
            var n,
              r = b(e);
            return (
              r || (t = t.toLowerCase()),
              (n = y.attrHandle[t])
                ? n(e)
                : r || ge
                ? e.getAttribute(t)
                : (n = e.getAttributeNode(t))
                ? "boolean" == typeof e[t]
                  ? e[t]
                    ? t
                    : null
                  : n.specified
                  ? n.value
                  : null
                : null
            );
          }),
          (y = n.selectors =
            {
              cacheLength: 50,
              createPseudo: X,
              match: fe,
              attrHandle: he
                ? {}
                : {
                    href: function (e) {
                      return e.getAttribute("href", 2);
                    },
                    type: function (e) {
                      return e.getAttribute("type");
                    },
                  },
              find: {
                ID: m
                  ? function (e, t, n) {
                      if (typeof t.getElementById !== F && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : [];
                      }
                    }
                  : function (e, t, n) {
                      if (typeof t.getElementById !== F && !n) {
                        var r = t.getElementById(e);
                        return r
                          ? r.id === e ||
                            (typeof r.getAttributeNode !== F &&
                              r.getAttributeNode("id").value === e)
                            ? [r]
                            : void 0
                          : [];
                      }
                    },
                TAG: de
                  ? function (e, t) {
                      if (typeof t.getElementsByTagName !== F)
                        return t.getElementsByTagName(e);
                    }
                  : function (e, t) {
                      var n = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (var r, i = [], o = 0; (r = n[o]); o++)
                          1 === r.nodeType && i.push(r);
                        return i;
                      }
                      return n;
                    },
                NAME:
                  ye &&
                  function (e, t) {
                    if (typeof t.getElementsByName !== F)
                      return t.getElementsByName(name);
                  },
                CLASS:
                  me &&
                  function (e, t, n) {
                    if (typeof t.getElementsByClassName !== F && !n)
                      return t.getElementsByClassName(e);
                  },
              },
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(ce, "")),
                    (e[3] = (e[4] || e[5] || "").replace(ce, "")),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1]
                      ? (e[2] || n.error(e[0]),
                        (e[3] = +(e[3]
                          ? e[4] + (e[5] || 1)
                          : 2 * ("even" === e[2] || "odd" === e[2]))),
                        (e[4] = +(e[6] + e[7] || "odd" === e[2])))
                      : e[2] && n.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t, n;
                  return fe.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[3])
                        : (t = e[4]) &&
                          (oe.test(t) &&
                            (n = s(t, !0)) &&
                            (n = t.indexOf(")", t.length - n) - t.length) &&
                            ((t = t.slice(0, n)), (e[0] = e[0].slice(0, n))),
                          (e[2] = t)),
                      e.slice(0, 3));
                },
              },
              filter: {
                ID: m
                  ? function (e) {
                      return (
                        (e = e.replace(ce, "")),
                        function (t) {
                          return t.getAttribute("id") === e;
                        }
                      );
                    }
                  : function (e) {
                      return (
                        (e = e.replace(ce, "")),
                        function (t) {
                          var n =
                            typeof t.getAttributeNode !== F &&
                            t.getAttributeNode("id");
                          return n && n.value === e;
                        }
                      );
                    },
                TAG: function (e) {
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : ((e = e.replace(ce, "").toLowerCase()),
                      function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e;
                      });
                },
                CLASS: function (e) {
                  var t = Y[M][e];
                  return (
                    t ||
                      (t = Y(
                        e,
                        new RegExp("(^|" + G + ")" + e + "(" + G + "|$)")
                      )),
                    function (e) {
                      return t.test(
                        e.className ||
                          (typeof e.getAttribute !== F &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }
                  );
                },
                ATTR: function (e, t, r) {
                  return function (i, o) {
                    var a = n.attr(i, e);
                    return null == a
                      ? "!=" === t
                      : !t ||
                          ((a += ""),
                          "=" === t
                            ? a === r
                            : "!=" === t
                            ? a !== r
                            : "^=" === t
                            ? r && 0 === a.indexOf(r)
                            : "*=" === t
                            ? r && a.indexOf(r) > -1
                            : "$=" === t
                            ? r && a.substr(a.length - r.length) === r
                            : "~=" === t
                            ? (" " + a + " ").indexOf(r) > -1
                            : "|=" === t &&
                              (a === r || a.substr(0, r.length + 1) === r + "-"));
                  };
                },
                CHILD: function (e, t, n, r) {
                  return "nth" === e
                    ? function (e) {
                        var t,
                          i,
                          o = e.parentNode;
                        if (1 === n && 0 === r) return !0;
                        if (o)
                          for (
                            i = 0, t = o.firstChild;
                            t && (1 !== t.nodeType || (i++, e !== t));
                            t = t.nextSibling
                          );
                        return (i -= r) === n || (i % n == 0 && i / n >= 0);
                      }
                    : function (t) {
                        var n = t;
                        switch (e) {
                          case "only":
                          case "first":
                            for (; (n = n.previousSibling); )
                              if (1 === n.nodeType) return !1;
                            if ("first" === e) return !0;
                            n = t;
                          case "last":
                            for (; (n = n.nextSibling); )
                              if (1 === n.nodeType) return !1;
                            return !0;
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var r,
                    i =
                      y.pseudos[e] ||
                      y.setFilters[e.toLowerCase()] ||
                      n.error("unsupported pseudo: " + e);
                  return i[M]
                    ? i(t)
                    : i.length > 1
                    ? ((r = [e, e, "", t]),
                      y.setFilters.hasOwnProperty(e.toLowerCase())
                        ? X(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--; )
                              (r = I.call(e, o[a])), (e[r] = !(n[r] = o[a]));
                          })
                        : function (e) {
                            return i(e, 0, r);
                          })
                    : i;
                },
              },
              pseudos: {
                not: X(function (e) {
                  var t = [],
                    n = [],
                    r = w(e.replace(ne, "$1"));
                  return r[M]
                    ? X(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o));
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), !n.pop();
                      };
                }),
                has: X(function (e) {
                  return function (t) {
                    return n(e, t).length > 0;
                  };
                }),
                contains: X(function (e) {
                  return function (t) {
                    return (t.textContent || t.innerText || v(t)).indexOf(e) > -1;
                  };
                }),
                enabled: function (e) {
                  return !1 === e.disabled;
                },
                disabled: function (e) {
                  return !0 === e.disabled;
                },
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                  );
                },
                parent: function (e) {
                  return !y.pseudos.empty(e);
                },
                empty: function (e) {
                  var t;
                  for (e = e.firstChild; e; ) {
                    if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t)
                      return !1;
                    e = e.nextSibling;
                  }
                  return !0;
                },
                header: function (e) {
                  return le.test(e.nodeName);
                },
                text: function (e) {
                  var t, n;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === (t = e.type) &&
                    (null == (n = e.getAttribute("type")) ||
                      n.toLowerCase() === t)
                  );
                },
                radio: r("radio"),
                checkbox: r("checkbox"),
                file: r("file"),
                password: r("password"),
                image: r("image"),
                submit: i("submit"),
                reset: i("reset"),
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return ("input" === t && "button" === e.type) || "button" === t;
                },
                input: function (e) {
                  return ue.test(e.nodeName);
                },
                focus: function (e) {
                  var t = e.ownerDocument;
                  return (
                    e === t.activeElement &&
                    (!t.hasFocus || t.hasFocus()) &&
                    (!!e.type || !!e.href)
                  );
                },
                active: function (e) {
                  return e === e.ownerDocument.activeElement;
                },
                first: o(function (e, t, n) {
                  return [0];
                }),
                last: o(function (e, t, n) {
                  return [t - 1];
                }),
                eq: o(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: o(function (e, t, n) {
                  for (var r = 0; r < t; r += 2) e.push(r);
                  return e;
                }),
                odd: o(function (e, t, n) {
                  for (var r = 1; r < t; r += 2) e.push(r);
                  return e;
                }),
                lt: o(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                  return e;
                }),
                gt: o(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }),
          (T = q.compareDocumentPosition
            ? function (e, t) {
                return e === t
                  ? ((N = !0), 0)
                  : (
                      e.compareDocumentPosition && t.compareDocumentPosition
                        ? 4 & e.compareDocumentPosition(t)
                        : e.compareDocumentPosition
                    )
                  ? -1
                  : 1;
              }
            : function (e, t) {
                if (e === t) return (N = !0), 0;
                if (e.sourceIndex && t.sourceIndex)
                  return e.sourceIndex - t.sourceIndex;
                var n,
                  r,
                  i = [],
                  o = [],
                  s = e.parentNode,
                  l = t.parentNode,
                  u = s;
                if (s === l) return a(e, t);
                if (!s) return -1;
                if (!l) return 1;
                for (; u; ) i.unshift(u), (u = u.parentNode);
                for (u = l; u; ) o.unshift(u), (u = u.parentNode);
                (n = i.length), (r = o.length);
                for (var c = 0; c < n && c < r; c++)
                  if (i[c] !== o[c]) return a(i[c], o[c]);
                return c === n ? a(e, o[c], -1) : a(i[c], t, 1);
              }),
          [0, 0].sort(T),
          (k = !N),
          (n.uniqueSort = function (e) {
            var t,
              n = 1;
            if (((N = k), e.sort(T), N))
              for (; (t = e[n]); n++) t === e[n - 1] && e.splice(n--, 1);
            return e;
          }),
          (n.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (w = n.compile =
            function (e, t) {
              var r,
                i,
                o,
                a,
                l,
                u,
                f = [],
                d = [],
                h = V[M][e];
              if (!h) {
                for (t || (t = s(e)), r = t.length; r--; )
                  (h = p(t[r])), h[M] ? f.push(h) : d.push(h);
                h = V(
                  e,
                  ((i = d),
                  (a = (o = f).length > 0),
                  (l = i.length > 0),
                  ((u = function (e, t, r, s, f) {
                    var p,
                      d,
                      h,
                      m = [],
                      v = 0,
                      b = "0",
                      x = e && [],
                      w = null != f,
                      T = C,
                      N = e || (l && y.find.TAG("*", (f && t.parentNode) || t)),
                      k = (B += null == T ? 1 : Math.E);
                    for (
                      w && ((C = t !== _ && t), (g = u.el));
                      null != (p = N[b]);
                      b++
                    ) {
                      if (l && p) {
                        for (d = 0; (h = i[d]); d++)
                          if (h(p, t, r)) {
                            s.push(p);
                            break;
                          }
                        w && ((B = k), (g = ++u.el));
                      }
                      a && ((p = !h && p) && v--, e && x.push(p));
                    }
                    if (((v += b), a && b !== v)) {
                      for (d = 0; (h = o[d]); d++) h(x, m, t, r);
                      if (e) {
                        if (v > 0)
                          for (; b--; ) !x[b] && !m[b] && (m[b] = P.call(s));
                        m = c(m);
                      }
                      R.apply(s, m),
                        w &&
                          !e &&
                          m.length > 0 &&
                          v + o.length > 1 &&
                          n.uniqueSort(s);
                    }
                    return w && ((B = k), (C = T)), x;
                  }).el = 0),
                  a ? X(u) : u)
                );
              }
              return h;
            }),
          _.querySelectorAll &&
            ((S = d),
            (A = /'|\\/g),
            (j = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g),
            (D = [":focus"]),
            (L = [":active", ":focus"]),
            (H =
              q.matchesSelector ||
              q.mozMatchesSelector ||
              q.webkitMatchesSelector ||
              q.oMatchesSelector ||
              q.msMatchesSelector),
            pe(function (e) {
              (e.innerHTML = "<select><option selected=''></option></select>"),
                e.querySelectorAll("[selected]").length ||
                  D.push(
                    "\\[" +
                      G +
                      "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                  ),
                e.querySelectorAll(":checked").length || D.push(":checked");
            }),
            pe(function (e) {
              (e.innerHTML = "<p test=''></p>"),
                e.querySelectorAll("[test^='']").length &&
                  D.push("[*^$]=" + G + "*(?:\"\"|'')"),
                (e.innerHTML = "<input type='hidden'/>"),
                e.querySelectorAll(":enabled").length ||
                  D.push(":enabled", ":disabled");
            }),
            (D = new RegExp(D.join("|"))),
            (d = function (e, t, n, r, i) {
              if (!(r || i || (D && D.test(e)))) {
                var o,
                  a,
                  l = !0,
                  u = M,
                  c = t,
                  f = 9 === t.nodeType && e;
                if (1 === t.nodeType && "object" !== t.nodeName.toLowerCase()) {
                  for (
                    o = s(e),
                      (l = t.getAttribute("id"))
                        ? (u = l.replace(A, "\\$&"))
                        : t.setAttribute("id", u),
                      u = "[id='" + u + "'] ",
                      a = o.length;
                    a--;
  
                  )
                    o[a] = u + o[a].join("");
                  (c = (se.test(e) && t.parentNode) || t), (f = o.join(","));
                }
                if (f)
                  try {
                    return R.apply(n, $.call(c.querySelectorAll(f), 0)), n;
                  } catch (e) {
                  } finally {
                    l || t.removeAttribute("id");
                  }
              }
              return S(e, t, n, r, i);
            }),
            H &&
              (pe(function (e) {
                E = H.call(e, "div");
                try {
                  H.call(e, "[test!='']:sizzle"), L.push("!=", ee);
                } catch (e) {}
              }),
              (L = new RegExp(L.join("|"))),
              (n.matchesSelector = function (e, t) {
                if (
                  ((t = t.replace(j, "='$1']")),
                  !(b(e) || L.test(t) || (D && D.test(t))))
                )
                  try {
                    var r = H.call(e, t);
                    if (r || E || (e.document && 11 !== e.document.nodeType))
                      return r;
                  } catch (e) {}
                return n(t, null, null, [e]).length > 0;
              }))),
          (y.pseudos.nth = y.pseudos.eq),
          (y.filters = h.prototype = y.pseudos),
          (y.setFilters = new h()),
          (n.attr = z.attr),
          (z.find = n),
          (z.expr = n.selectors),
          (z.expr[":"] = z.expr.pseudos),
          (z.unique = n.uniqueSort),
          (z.text = n.getText),
          (z.isXMLDoc = n.isXML),
          (z.contains = n.contains);
      })(e);
    var Ee = /Until$/,
      Se = /^(?:parents|prev(?:Until|All))/,
      Ae = /^.[^:#\[\.,]*$/,
      je = z.expr.match.needsContext,
      De = { children: !0, contents: !0, next: !0, prev: !0 };
    z.fn.extend({
      find: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s = this;
        if ("string" != typeof e)
          return z(e).filter(function () {
            for (t = 0, n = s.length; t < n; t++)
              if (z.contains(s[t], this)) return !0;
          });
        for (
          a = this.pushStack("", "find", e), t = 0, n = this.length;
          t < n;
          t++
        )
          if (((r = a.length), z.find(e, this[t], a), t > 0))
            for (i = r; i < a.length; i++)
              for (o = 0; o < r; o++)
                if (a[o] === a[i]) {
                  a.splice(i--, 1);
                  break;
                }
        return a;
      },
      has: function (e) {
        var t,
          n = z(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; t < r; t++) if (z.contains(this, n[t])) return !0;
        });
      },
      not: function (e) {
        return this.pushStack(l(this, e, !1), "not", e);
      },
      filter: function (e) {
        return this.pushStack(l(this, e, !0), "filter", e);
      },
      is: function (e) {
        return (
          !!e &&
          ("string" == typeof e
            ? je.test(e)
              ? z(e, this.context).index(this[0]) >= 0
              : z.filter(e, this).length > 0
            : this.filter(e).length > 0)
        );
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            o = [],
            a = je.test(e) || "string" != typeof e ? z(e, t || this.context) : 0;
          r < i;
          r++
        )
          for (
            n = this[r];
            n && n.ownerDocument && n !== t && 11 !== n.nodeType;
  
          ) {
            if (a ? a.index(n) > -1 : z.find.matchesSelector(n, e)) {
              o.push(n);
              break;
            }
            n = n.parentNode;
          }
        return (
          (o = o.length > 1 ? z.unique(o) : o), this.pushStack(o, "closest", e)
        );
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? z.inArray(this[0], z(e))
            : z.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.prevAll().length
          : -1;
      },
      add: function (e, t) {
        var n =
            "string" == typeof e
              ? z(e, t)
              : z.makeArray(e && e.nodeType ? [e] : e),
          r = z.merge(this.get(), n);
        return this.pushStack(a(n[0]) || a(r[0]) ? r : z.unique(r));
      },
      addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      },
    }),
      (z.fn.andSelf = z.fn.addBack),
      z.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return z.dir(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return z.dir(e, "parentNode", n);
          },
          next: function (e) {
            return s(e, "nextSibling");
          },
          prev: function (e) {
            return s(e, "previousSibling");
          },
          nextAll: function (e) {
            return z.dir(e, "nextSibling");
          },
          prevAll: function (e) {
            return z.dir(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return z.dir(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return z.dir(e, "previousSibling", n);
          },
          siblings: function (e) {
            return z.sibling((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return z.sibling(e.firstChild);
          },
          contents: function (e) {
            return z.nodeName(e, "iframe")
              ? e.contentDocument || e.contentWindow.document
              : z.merge([], e.childNodes);
          },
        },
        function (e, t) {
          z.fn[e] = function (n, r) {
            var i = z.map(this, t, n);
            return (
              Ee.test(e) || (r = n),
              r && "string" == typeof r && (i = z.filter(r, i)),
              (i = this.length > 1 && !De[e] ? z.unique(i) : i),
              this.length > 1 && Se.test(e) && (i = i.reverse()),
              this.pushStack(i, e, W.call(arguments).join(","))
            );
          };
        }
      ),
      z.extend({
        filter: function (e, t, n) {
          return (
            n && (e = ":not(" + e + ")"),
            1 === t.length
              ? z.find.matchesSelector(t[0], e)
                ? [t[0]]
                : []
              : z.find.matches(e, t)
          );
        },
        dir: function (e, n, r) {
          for (
            var i = [], o = e[n];
            o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !z(o).is(r));
  
          )
            1 === o.nodeType && i.push(o), (o = o[n]);
          return i;
        },
        sibling: function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
      });
    var Le,
      He,
      Fe =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Me = / jQuery\d+="(?:null|\d+)"/g,
      Oe = /^\s+/,
      _e =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      qe = /<([\w:]+)/,
      Be = /<tbody/i,
      We = /<|&#?\w+;/,
      Pe = /<(?:script|style|link)/i,
      Re = /<(?:script|object|embed|option|style)/i,
      $e = new RegExp("<(?:" + Fe + ")[\\s/>]", "i"),
      Ie = /^(?:checkbox|radio)$/,
      ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Xe = /\/(java|ecma)script/i,
      Ue = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
      Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""],
      },
      Je = u(F),
      Ve = Je.appendChild(F.createElement("div"));
    (Ye.optgroup = Ye.option),
      (Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead),
      (Ye.th = Ye.td),
      z.support.htmlSerialize || (Ye._default = [1, "X<div>", "</div>"]),
      z.fn.extend({
        text: function (e) {
          return z.access(
            this,
            function (e) {
              return e === t
                ? z.text(this)
                : this.empty().append(
                    ((this[0] && this[0].ownerDocument) || F).createTextNode(e)
                  );
            },
            null,
            e,
            arguments.length
          );
        },
        wrapAll: function (e) {
          if (z.isFunction(e))
            return this.each(function (t) {
              z(this).wrapAll(e.call(this, t));
            });
          if (this[0]) {
            var t = z(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (
                    var e = this;
                    e.firstChild && 1 === e.firstChild.nodeType;
  
                  )
                    e = e.firstChild;
                  return e;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (e) {
          return z.isFunction(e)
            ? this.each(function (t) {
                z(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = z(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = z.isFunction(e);
          return this.each(function (n) {
            z(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              z.nodeName(this, "body") || z(this).replaceWith(this.childNodes);
            })
            .end();
        },
        append: function () {
          return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e);
          });
        },
        prepend: function () {
          return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType) &&
              this.insertBefore(e, this.firstChild);
          });
        },
        before: function () {
          if (!a(this[0]))
            return this.domManip(arguments, !1, function (e) {
              this.parentNode.insertBefore(e, this);
            });
          if (arguments.length) {
            var e = z.clean(arguments);
            return this.pushStack(z.merge(e, this), "before", this.selector);
          }
        },
        after: function () {
          if (!a(this[0]))
            return this.domManip(arguments, !1, function (e) {
              this.parentNode.insertBefore(e, this.nextSibling);
            });
          if (arguments.length) {
            var e = z.clean(arguments);
            return this.pushStack(z.merge(this, e), "after", this.selector);
          }
        },
        remove: function (e, t) {
          for (var n, r = 0; null != (n = this[r]); r++)
            (e && !z.filter(e, [n]).length) ||
              (!t &&
                1 === n.nodeType &&
                (z.cleanData(n.getElementsByTagName("*")), z.cleanData([n])),
              n.parentNode && n.parentNode.removeChild(n));
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            for (
              1 === e.nodeType && z.cleanData(e.getElementsByTagName("*"));
              e.firstChild;
  
            )
              e.removeChild(e.firstChild);
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return z.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return z.access(
            this,
            function (e) {
              var n = this[0] || {},
                r = 0,
                i = this.length;
              if (e === t)
                return 1 === n.nodeType ? n.innerHTML.replace(Me, "") : t;
              if (
                "string" == typeof e &&
                !Pe.test(e) &&
                (z.support.htmlSerialize || !$e.test(e)) &&
                (z.support.leadingWhitespace || !Oe.test(e)) &&
                !Ye[(qe.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = e.replace(_e, "<$1></$2>");
                try {
                  for (; r < i; r++)
                    (n = this[r] || {}),
                      1 === n.nodeType &&
                        (z.cleanData(n.getElementsByTagName("*")),
                        (n.innerHTML = e));
                  n = 0;
                } catch (e) {}
              }
              n && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function (e) {
          return a(this[0])
            ? this.length
              ? this.pushStack(z(z.isFunction(e) ? e() : e), "replaceWith", e)
              : this
            : z.isFunction(e)
            ? this.each(function (t) {
                var n = z(this),
                  r = n.html();
                n.replaceWith(e.call(this, t, r));
              })
            : ("string" != typeof e && (e = z(e).detach()),
              this.each(function () {
                var t = this.nextSibling,
                  n = this.parentNode;
                z(this).remove(), t ? z(t).before(e) : z(n).append(e);
              }));
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (e, n, r) {
          var i,
            o,
            a,
            s,
            l,
            u,
            c = 0,
            f = (e = [].concat.apply([], e))[0],
            p = [],
            d = this.length;
          if (
            !z.support.checkClone &&
            d > 1 &&
            "string" == typeof f &&
            ze.test(f)
          )
            return this.each(function () {
              z(this).domManip(e, n, r);
            });
          if (z.isFunction(f))
            return this.each(function (i) {
              var o = z(this);
              (e[0] = f.call(this, i, n ? o.html() : t)), o.domManip(e, n, r);
            });
          if (this[0]) {
            if (
              ((o = (a = (i = z.buildFragment(e, this, p)).fragment).firstChild),
              1 === a.childNodes.length && (a = o),
              o)
            )
              for (
                n = n && z.nodeName(o, "tr"), s = i.cacheable || d - 1;
                c < d;
                c++
              )
                r.call(
                  n && z.nodeName(this[c], "table")
                    ? ((l = this[c]),
                      (u = "tbody"),
                      l.getElementsByTagName(u)[0] ||
                        l.appendChild(l.ownerDocument.createElement(u)))
                    : this[c],
                  c === s ? a : z.clone(a, !0, !0)
                );
            (a = o = null),
              p.length &&
                z.each(p, function (e, t) {
                  t.src
                    ? z.ajax
                      ? z.ajax({
                          url: t.src,
                          type: "GET",
                          dataType: "script",
                          async: !1,
                          global: !1,
                          throws: !0,
                        })
                      : z.error("no ajax")
                    : z.globalEval(
                        (t.text || t.textContent || t.innerHTML || "").replace(
                          Ue,
                          ""
                        )
                      ),
                    t.parentNode && t.parentNode.removeChild(t);
                });
          }
          return this;
        },
      }),
      (z.buildFragment = function (e, n, r) {
        var i,
          o,
          a,
          s = e[0];
        return (
          (n = (n = (!(n = n || F).nodeType && n[0]) || n).ownerDocument || n),
          1 === e.length &&
            "string" == typeof s &&
            s.length < 512 &&
            n === F &&
            "<" === s.charAt(0) &&
            !Re.test(s) &&
            (z.support.checkClone || !ze.test(s)) &&
            (z.support.html5Clone || !$e.test(s)) &&
            ((o = !0), (a = (i = z.fragments[s]) !== t)),
          i ||
            ((i = n.createDocumentFragment()),
            z.clean(e, n, i, r),
            o && (z.fragments[s] = a && i)),
          { fragment: i, cacheable: o }
        );
      }),
      (z.fragments = {}),
      z.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          z.fn[e] = function (n) {
            var r,
              i = 0,
              o = [],
              a = z(n),
              s = a.length,
              l = 1 === this.length && this[0].parentNode;
            if (
              (null == l ||
                (l && 11 === l.nodeType && 1 === l.childNodes.length)) &&
              1 === s
            )
              return a[t](this[0]), this;
            for (; i < s; i++)
              (r = (i > 0 ? this.clone(!0) : this).get()),
                z(a[i])[t](r),
                (o = o.concat(r));
            return this.pushStack(o, e, a.selector);
          };
        }
      ),
      z.extend({
        clone: function (e, t, n) {
          var r, i, o, a;
          if (
            (z.support.html5Clone ||
            z.isXMLDoc(e) ||
            !$e.test("<" + e.nodeName + ">")
              ? (a = e.cloneNode(!0))
              : ((Ve.innerHTML = e.outerHTML),
                Ve.removeChild((a = Ve.firstChild))),
            !(
              (z.support.noCloneEvent && z.support.noCloneChecked) ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              z.isXMLDoc(e)
            ))
          )
            for (f(e, a), r = p(e), i = p(a), o = 0; r[o]; ++o)
              i[o] && f(r[o], i[o]);
          if (t && (c(e, a), n))
            for (r = p(e), i = p(a), o = 0; r[o]; ++o) c(r[o], i[o]);
          return (r = i = null), a;
        },
        clean: function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            l,
            c,
            f,
            p,
            h,
            g,
            m,
            y = t === F && Je,
            v = [];
          for (
            (t && void 0 !== t.createDocumentFragment) || (t = F), i = 0;
            null != (a = e[i]);
            i++
          )
            if (("number" == typeof a && (a += ""), a)) {
              if ("string" == typeof a)
                if (We.test(a)) {
                  for (
                    y = y || u(t),
                      f = t.createElement("div"),
                      y.appendChild(f),
                      a = a.replace(_e, "<$1></$2>"),
                      s = (qe.exec(a) || ["", ""])[1].toLowerCase(),
                      c = (l = Ye[s] || Ye._default)[0],
                      f.innerHTML = l[1] + a + l[2];
                    c--;
  
                  )
                    f = f.lastChild;
                  if (!z.support.tbody)
                    for (
                      p = Be.test(a),
                        o =
                          (h =
                            "table" !== s || p
                              ? "<table>" !== l[1] || p
                                ? []
                                : f.childNodes
                              : f.firstChild && f.firstChild.childNodes).length -
                          1;
                      o >= 0;
                      --o
                    )
                      z.nodeName(h[o], "tbody") &&
                        !h[o].childNodes.length &&
                        h[o].parentNode.removeChild(h[o]);
                  !z.support.leadingWhitespace &&
                    Oe.test(a) &&
                    f.insertBefore(t.createTextNode(Oe.exec(a)[0]), f.firstChild),
                    (a = f.childNodes),
                    f.parentNode.removeChild(f);
                } else a = t.createTextNode(a);
              a.nodeType ? v.push(a) : z.merge(v, a);
            }
          if ((f && (a = f = y = null), !z.support.appendChecked))
            for (i = 0; null != (a = v[i]); i++)
              z.nodeName(a, "input")
                ? d(a)
                : void 0 !== a.getElementsByTagName &&
                  z.grep(a.getElementsByTagName("input"), d);
          if (n)
            for (
              g = function (e) {
                if (!e.type || Xe.test(e.type))
                  return r
                    ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e)
                    : n.appendChild(e);
              },
                i = 0;
              null != (a = v[i]);
              i++
            )
              (z.nodeName(a, "script") && g(a)) ||
                (n.appendChild(a),
                void 0 !== a.getElementsByTagName &&
                  ((m = z.grep(z.merge([], a.getElementsByTagName("script")), g)),
                  v.splice.apply(v, [i + 1, 0].concat(m)),
                  (i += m.length)));
          return v;
        },
        cleanData: function (e, t) {
          for (
            var n,
              r,
              i,
              o,
              a = 0,
              s = z.expando,
              l = z.cache,
              u = z.support.deleteExpando,
              c = z.event.special;
            null != (i = e[a]);
            a++
          )
            if ((t || z.acceptData(i)) && (n = (r = i[s]) && l[r])) {
              if (n.events)
                for (o in n.events)
                  c[o] ? z.event.remove(i, o) : z.removeEvent(i, o, n.handle);
              l[r] &&
                (delete l[r],
                u
                  ? delete i[s]
                  : i.removeAttribute
                  ? i.removeAttribute(s)
                  : (i[s] = null),
                z.deletedIds.push(r));
            }
        },
      }),
      (z.uaMatch = function (e) {
        e = e.toLowerCase();
        var t =
          /(chrome)[ \/]([\w.]+)/.exec(e) ||
          /(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (e.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [];
        return { browser: t[1] || "", version: t[2] || "0" };
      }),
      (He = {}),
      (Le = z.uaMatch(O.userAgent)).browser &&
        ((He[Le.browser] = !0), (He.version = Le.version)),
      He.chrome ? (He.webkit = !0) : He.webkit && (He.safari = !0),
      (z.browser = He),
      (z.sub = function () {
        function e(t, n) {
          return new e.fn.init(t, n);
        }
        z.extend(!0, e, this),
          (e.superclass = this),
          (e.fn = e.prototype = this()),
          (e.fn.constructor = e),
          (e.sub = this.sub),
          (e.fn.init = function (n, r) {
            return (
              r && r instanceof z && !(r instanceof e) && (r = e(r)),
              z.fn.init.call(this, n, r, t)
            );
          }),
          (e.fn.init.prototype = e.fn);
        var t = e(F);
        return e;
      });
    var Ge,
      Qe,
      Ke,
      Ze = /alpha\([^)]*\)/i,
      et = /opacity=([^)]*)/,
      tt = /^(top|right|bottom|left)$/,
      nt = /^(none|table(?!-c[ea]).+)/,
      rt = /^margin/,
      it = new RegExp("^(" + X + ")(.*)$", "i"),
      ot = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
      at = new RegExp("^([-+])=(" + X + ")", "i"),
      st = {},
      lt = { position: "absolute", visibility: "hidden", display: "block" },
      ut = { letterSpacing: 0, fontWeight: 400 },
      ct = ["Top", "Right", "Bottom", "Left"],
      ft = ["Webkit", "O", "Moz", "ms"],
      pt = z.fn.toggle;
    z.fn.extend({
      css: function (e, n) {
        return z.access(
          this,
          function (e, n, r) {
            return r !== t ? z.style(e, n, r) : z.css(e, n);
          },
          e,
          n,
          arguments.length > 1
        );
      },
      show: function () {
        return m(this, !0);
      },
      hide: function () {
        return m(this);
      },
      toggle: function (e, t) {
        var n = "boolean" == typeof e;
        return z.isFunction(e) && z.isFunction(t)
          ? pt.apply(this, arguments)
          : this.each(function () {
              (n ? e : g(this)) ? z(this).show() : z(this).hide();
            });
      },
    }),
      z.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ge(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: { float: z.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, n, r, i) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              a,
              s,
              l = z.camelCase(n),
              u = e.style;
            if (
              ((n = z.cssProps[l] || (z.cssProps[l] = h(u, l))),
              (s = z.cssHooks[n] || z.cssHooks[l]),
              r === t)
            )
              return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
            if (
              ("string" === (a = typeof r) &&
                (o = at.exec(r)) &&
                ((r = (o[1] + 1) * o[2] + parseFloat(z.css(e, n))),
                (a = "number")),
              !(
                null == r ||
                ("number" === a && isNaN(r)) ||
                ("number" === a && !z.cssNumber[l] && (r += "px"),
                s && "set" in s && (r = s.set(e, r, i)) === t)
              ))
            )
              try {
                u[n] = r;
              } catch (e) {}
          }
        },
        css: function (e, n, r, i) {
          var o,
            a,
            s,
            l = z.camelCase(n);
          return (
            (n = z.cssProps[l] || (z.cssProps[l] = h(e.style, l))),
            (s = z.cssHooks[n] || z.cssHooks[l]) &&
              "get" in s &&
              (o = s.get(e, !0, i)),
            o === t && (o = Ge(e, n)),
            "normal" === o && n in ut && (o = ut[n]),
            r || i !== t
              ? ((a = parseFloat(o)), r || z.isNumeric(a) ? a || 0 : o)
              : o
          );
        },
        swap: function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          r = n.call(e);
          for (i in t) e.style[i] = o[i];
          return r;
        },
      }),
      e.getComputedStyle
        ? (Ge = function (t, n) {
            var r,
              i,
              o,
              a,
              s = e.getComputedStyle(t, null),
              l = t.style;
            return (
              s &&
                ("" === (r = s[n]) &&
                  !z.contains(t.ownerDocument, t) &&
                  (r = z.style(t, n)),
                ot.test(r) &&
                  rt.test(n) &&
                  ((i = l.width),
                  (o = l.minWidth),
                  (a = l.maxWidth),
                  (l.minWidth = l.maxWidth = l.width = r),
                  (r = s.width),
                  (l.width = i),
                  (l.minWidth = o),
                  (l.maxWidth = a))),
              r
            );
          })
        : F.documentElement.currentStyle &&
          (Ge = function (e, t) {
            var n,
              r,
              i = e.currentStyle && e.currentStyle[t],
              o = e.style;
            return (
              null == i && o && o[t] && (i = o[t]),
              ot.test(i) &&
                !tt.test(t) &&
                ((n = o.left),
                (r = e.runtimeStyle && e.runtimeStyle.left) &&
                  (e.runtimeStyle.left = e.currentStyle.left),
                (o.left = "fontSize" === t ? "1em" : i),
                (i = o.pixelLeft + "px"),
                (o.left = n),
                r && (e.runtimeStyle.left = r)),
              "" === i ? "auto" : i
            );
          }),
      z.each(["height", "width"], function (e, t) {
        z.cssHooks[t] = {
          get: function (e, n, r) {
            if (n)
              return 0 === e.offsetWidth && nt.test(Ge(e, "display"))
                ? z.swap(e, lt, function () {
                    return b(e, t, r);
                  })
                : b(e, t, r);
          },
          set: function (e, n, r) {
            return y(
              0,
              n,
              r
                ? v(
                    e,
                    t,
                    r,
                    z.support.boxSizing && "border-box" === z.css(e, "boxSizing")
                  )
                : 0
            );
          },
        };
      }),
      z.support.opacity ||
        (z.cssHooks.opacity = {
          get: function (e, t) {
            return et.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : t
              ? "1"
              : "";
          },
          set: function (e, t) {
            var n = e.style,
              r = e.currentStyle,
              i = z.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
              o = (r && r.filter) || n.filter || "";
            (n.zoom = 1),
              (t >= 1 &&
                "" === z.trim(o.replace(Ze, "")) &&
                n.removeAttribute &&
                (n.removeAttribute("filter"), r && !r.filter)) ||
                (n.filter = Ze.test(o) ? o.replace(Ze, i) : o + " " + i);
          },
        }),
      z(function () {
        z.support.reliableMarginRight ||
          (z.cssHooks.marginRight = {
            get: function (e, t) {
              return z.swap(e, { display: "inline-block" }, function () {
                if (t) return Ge(e, "marginRight");
              });
            },
          }),
          !z.support.pixelPosition &&
            z.fn.position &&
            z.each(["top", "left"], function (e, t) {
              z.cssHooks[t] = {
                get: function (e, n) {
                  if (n) {
                    var r = Ge(e, t);
                    return ot.test(r) ? z(e).position()[t] + "px" : r;
                  }
                },
              };
            });
      }),
      z.expr &&
        z.expr.filters &&
        ((z.expr.filters.hidden = function (e) {
          return (
            (0 === e.offsetWidth && 0 === e.offsetHeight) ||
            (!z.support.reliableHiddenOffsets &&
              "none" === ((e.style && e.style.display) || Ge(e, "display")))
          );
        }),
        (z.expr.filters.visible = function (e) {
          return !z.expr.filters.hidden(e);
        })),
      z.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (z.cssHooks[e + t] = {
          expand: function (n) {
            var r,
              i = "string" == typeof n ? n.split(" ") : [n],
              o = {};
            for (r = 0; r < 4; r++) o[e + ct[r] + t] = i[r] || i[r - 2] || i[0];
            return o;
          },
        }),
          rt.test(e) || (z.cssHooks[e + t].set = y);
      });
    var dt = /%20/g,
      ht = /\[\]$/,
      gt = /\r?\n/g,
      mt =
        /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      yt = /^(?:select|textarea)/i;
    z.fn.extend({
      serialize: function () {
        return z.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? z.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || yt.test(this.nodeName) || mt.test(this.type))
            );
          })
          .map(function (e, t) {
            var n = z(this).val();
            return null == n
              ? null
              : z.isArray(n)
              ? z.map(n, function (e, n) {
                  return { name: t.name, value: e.replace(gt, "\r\n") };
                })
              : { name: t.name, value: n.replace(gt, "\r\n") };
          })
          .get();
      },
    }),
      (z.param = function (e, n) {
        var r,
          i = [],
          o = function (e, t) {
            (t = z.isFunction(t) ? t() : null == t ? "" : t),
              (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        if (
          (n === t && (n = z.ajaxSettings && z.ajaxSettings.traditional),
          z.isArray(e) || (e.jquery && !z.isPlainObject(e)))
        )
          z.each(e, function () {
            o(this.name, this.value);
          });
        else for (r in e) w(r, e[r], n, o);
        return i.join("&").replace(dt, "+");
      });
    var vt,
      bt,
      xt = /#.*$/,
      wt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Tt = /^(?:GET|HEAD)$/,
      Nt = /^\/\//,
      Ct = /\?/,
      kt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      Et = /([?&])_=[^&]*/,
      St = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      At = z.fn.load,
      jt = {},
      Dt = {},
      Lt = ["*/"] + ["*"];
    try {
      bt = M.href;
    } catch (e) {
      ((bt = F.createElement("a")).href = ""), (bt = bt.href);
    }
    (vt = St.exec(bt.toLowerCase()) || []),
      (z.fn.load = function (e, n, r) {
        if ("string" != typeof e && At) return At.apply(this, arguments);
        if (!this.length) return this;
        var i,
          o,
          a,
          s = this,
          l = e.indexOf(" ");
        return (
          l >= 0 && ((i = e.slice(l, e.length)), (e = e.slice(0, l))),
          z.isFunction(n)
            ? ((r = n), (n = t))
            : n && "object" == typeof n && (o = "POST"),
          z
            .ajax({
              url: e,
              type: o,
              dataType: "html",
              data: n,
              complete: function (e, t) {
                r && s.each(r, a || [e.responseText, t, e]);
              },
            })
            .done(function (e) {
              (a = arguments),
                s.html(i ? z("<div>").append(e.replace(kt, "")).find(i) : e);
            }),
          this
        );
      }),
      z.each(
        "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
          " "
        ),
        function (e, t) {
          z.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      z.each(["get", "post"], function (e, n) {
        z[n] = function (e, r, i, o) {
          return (
            z.isFunction(r) && ((o = o || i), (i = r), (r = t)),
            z.ajax({ type: n, url: e, data: r, success: i, dataType: o })
          );
        };
      }),
      z.extend({
        getScript: function (e, n) {
          return z.get(e, t, n, "script");
        },
        getJSON: function (e, t, n) {
          return z.get(e, t, n, "json");
        },
        ajaxSetup: function (e, t) {
          return (
            t ? C(e, z.ajaxSettings) : ((t = e), (e = z.ajaxSettings)), C(e, t), e
          );
        },
        ajaxSettings: {
          url: bt,
          isLocal:
            /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(
              vt[1]
            ),
          global: !0,
          type: "GET",
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          processData: !0,
          async: !0,
          accepts: {
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain",
            json: "application/json, text/javascript",
            "*": Lt,
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: { xml: "responseXML", text: "responseText" },
          converters: {
            "* text": e.String,
            "text html": !0,
            "text json": z.parseJSON,
            "text xml": z.parseXML,
          },
          flatOptions: { context: !0, url: !0 },
        },
        ajaxPrefilter: T(jt),
        ajaxTransport: T(Dt),
        ajax: function (e, n) {
          function r(e, n, r, a) {
            var u,
              f,
              v,
              b,
              w,
              N = n;
            2 !== x &&
              ((x = 2),
              l && clearTimeout(l),
              (s = t),
              (o = a || ""),
              (T.readyState = e > 0 ? 4 : 0),
              r &&
                (b = (function (e, n, r) {
                  var i,
                    o,
                    a,
                    s,
                    l = e.contents,
                    u = e.dataTypes,
                    c = e.responseFields;
                  for (o in c) o in r && (n[c[o]] = r[o]);
                  for (; "*" === u[0]; )
                    u.shift(),
                      i === t &&
                        (i = e.mimeType || n.getResponseHeader("content-type"));
                  if (i)
                    for (o in l)
                      if (l[o] && l[o].test(i)) {
                        u.unshift(o);
                        break;
                      }
                  if (u[0] in r) a = u[0];
                  else {
                    for (o in r) {
                      if (!u[0] || e.converters[o + " " + u[0]]) {
                        a = o;
                        break;
                      }
                      s || (s = o);
                    }
                    a = a || s;
                  }
                  if (a) return a !== u[0] && u.unshift(a), r[a];
                })(p, T, r)),
              (e >= 200 && e < 300) || 304 === e
                ? (p.ifModified &&
                    ((w = T.getResponseHeader("Last-Modified")) &&
                      (z.lastModified[i] = w),
                    (w = T.getResponseHeader("Etag")) && (z.etag[i] = w)),
                  304 === e
                    ? ((N = "notmodified"), (u = !0))
                    : ((N = (u = (function (e, t) {
                        var n,
                          r,
                          i,
                          o,
                          a = e.dataTypes.slice(),
                          s = a[0],
                          l = {},
                          u = 0;
                        if (
                          (e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                          a[1])
                        )
                          for (n in e.converters)
                            l[n.toLowerCase()] = e.converters[n];
                        for (; (i = a[++u]); )
                          if ("*" !== i) {
                            if ("*" !== s && s !== i) {
                              if (!(n = l[s + " " + i] || l["* " + i]))
                                for (r in l)
                                  if (
                                    (o = r.split(" "))[1] === i &&
                                    (n = l[s + " " + o[0]] || l["* " + o[0]])
                                  ) {
                                    !0 === n
                                      ? (n = l[r])
                                      : !0 !== l[r] &&
                                        ((i = o[0]), a.splice(u--, 0, i));
                                    break;
                                  }
                              if (!0 !== n)
                                if (n && e.throws) t = n(t);
                                else
                                  try {
                                    t = n(t);
                                  } catch (e) {
                                    return {
                                      state: "parsererror",
                                      error: n
                                        ? e
                                        : "No conversion from " + s + " to " + i,
                                    };
                                  }
                            }
                            s = i;
                          }
                        return { state: "success", data: t };
                      })(p, b)).state),
                      (f = u.data),
                      (u = !(v = u.error))))
                : ((v = N), (N && !e) || ((N = "error"), e < 0 && (e = 0))),
              (T.status = e),
              (T.statusText = (n || N) + ""),
              u ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]),
              T.statusCode(y),
              (y = t),
              c &&
                h.trigger("ajax" + (u ? "Success" : "Error"), [T, p, u ? f : v]),
              m.fireWith(d, [T, N]),
              c &&
                (h.trigger("ajaxComplete", [T, p]),
                --z.active || z.event.trigger("ajaxStop")));
          }
          "object" == typeof e && ((n = e), (e = t)), (n = n || {});
          var i,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            p = z.ajaxSetup({}, n),
            d = p.context || p,
            h = d !== p && (d.nodeType || d instanceof z) ? z(d) : z.event,
            g = z.Deferred(),
            m = z.Callbacks("once memory"),
            y = p.statusCode || {},
            v = {},
            b = {},
            x = 0,
            w = "canceled",
            T = {
              readyState: 0,
              setRequestHeader: function (e, t) {
                if (!x) {
                  var n = e.toLowerCase();
                  (e = b[n] = b[n] || e), (v[e] = t);
                }
                return this;
              },
              getAllResponseHeaders: function () {
                return 2 === x ? o : null;
              },
              getResponseHeader: function (e) {
                var n;
                if (2 === x) {
                  if (!a)
                    for (a = {}; (n = wt.exec(o)); ) a[n[1].toLowerCase()] = n[2];
                  n = a[e.toLowerCase()];
                }
                return n === t ? null : n;
              },
              overrideMimeType: function (e) {
                return x || (p.mimeType = e), this;
              },
              abort: function (e) {
                return (e = e || w), s && s.abort(e), r(0, e), this;
              },
            };
          if (
            (g.promise(T),
            (T.success = T.done),
            (T.error = T.fail),
            (T.complete = m.add),
            (T.statusCode = function (e) {
              var t;
              if (e)
                if (x < 2) for (t in e) y[t] = [y[t], e[t]];
                else (t = e[T.status]), T.always(t);
              return this;
            }),
            (p.url = ((e || p.url) + "")
              .replace(xt, "")
              .replace(Nt, vt[1] + "//")),
            (p.dataTypes = z
              .trim(p.dataType || "*")
              .toLowerCase()
              .split(Y)),
            null == p.crossDomain &&
              ((u = St.exec(p.url.toLowerCase()) || !1),
              (p.crossDomain =
                u &&
                u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !==
                  vt.join(":") + (vt[3] ? "" : "http:" === vt[1] ? 80 : 443))),
            p.data &&
              p.processData &&
              "string" != typeof p.data &&
              (p.data = z.param(p.data, p.traditional)),
            N(jt, p, n, T),
            2 === x)
          )
            return T;
          if (
            ((c = p.global),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Tt.test(p.type)),
            c && 0 == z.active++ && z.event.trigger("ajaxStart"),
            !p.hasContent &&
              (p.data &&
                ((p.url += (Ct.test(p.url) ? "&" : "?") + p.data), delete p.data),
              (i = p.url),
              !1 === p.cache))
          ) {
            var C = z.now(),
              k = p.url.replace(Et, "$1_=" + C);
            p.url =
              k + (k === p.url ? (Ct.test(p.url) ? "&" : "?") + "_=" + C : "");
          }
          ((p.data && p.hasContent && !1 !== p.contentType) || n.contentType) &&
            T.setRequestHeader("Content-Type", p.contentType),
            p.ifModified &&
              ((i = i || p.url),
              z.lastModified[i] &&
                T.setRequestHeader("If-Modified-Since", z.lastModified[i]),
              z.etag[i] && T.setRequestHeader("If-None-Match", z.etag[i])),
            T.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "")
                : p.accepts["*"]
            );
          for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
          if (!p.beforeSend || (!1 !== p.beforeSend.call(d, T, p) && 2 !== x)) {
            w = "abort";
            for (f in { success: 1, error: 1, complete: 1 }) T[f](p[f]);
            if ((s = N(Dt, p, n, T))) {
              (T.readyState = 1),
                c && h.trigger("ajaxSend", [T, p]),
                p.async &&
                  p.timeout > 0 &&
                  (l = setTimeout(function () {
                    T.abort("timeout");
                  }, p.timeout));
              try {
                (x = 1), s.send(v, r);
              } catch (e) {
                if (!(x < 2)) throw e;
                r(-1, e);
              }
            } else r(-1, "No Transport");
            return T;
          }
          return T.abort();
        },
        active: 0,
        lastModified: {},
        etag: {},
      });
    var Ht = [],
      Ft = /\?/,
      Mt = /(=)\?(?=&|$)|\?\?/,
      Ot = z.now();
    z.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Ht.pop() || z.expando + "_" + Ot++;
        return (this[e] = !0), e;
      },
    }),
      z.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o,
          a,
          s,
          l = n.data,
          u = n.url,
          c = !1 !== n.jsonp,
          f = c && Mt.test(u),
          p =
            c &&
            !f &&
            "string" == typeof l &&
            !(n.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            Mt.test(l);
        if ("jsonp" === n.dataTypes[0] || f || p)
          return (
            (o = n.jsonpCallback =
              z.isFunction(n.jsonpCallback)
                ? n.jsonpCallback()
                : n.jsonpCallback),
            (a = e[o]),
            f
              ? (n.url = u.replace(Mt, "$1" + o))
              : p
              ? (n.data = l.replace(Mt, "$1" + o))
              : c && (n.url += (Ft.test(u) ? "&" : "?") + n.jsonp + "=" + o),
            (n.converters["script json"] = function () {
              return s || z.error(o + " was not called"), s[0];
            }),
            (n.dataTypes[0] = "json"),
            (e[o] = function () {
              s = arguments;
            }),
            i.always(function () {
              (e[o] = a),
                n[o] && ((n.jsonpCallback = r.jsonpCallback), Ht.push(o)),
                s && z.isFunction(a) && a(s[0]),
                (s = a = t);
            }),
            "script"
          );
      }),
      z.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /javascript|ecmascript/ },
        converters: {
          "text script": function (e) {
            return z.globalEval(e), e;
          },
        },
      }),
      z.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1),
          e.crossDomain && ((e.type = "GET"), (e.global = !1));
      }),
      z.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var n,
            r = F.head || F.getElementsByTagName("head")[0] || F.documentElement;
          return {
            send: function (i, o) {
              ((n = F.createElement("script")).async = "async"),
                e.scriptCharset && (n.charset = e.scriptCharset),
                (n.src = e.url),
                (n.onload = n.onreadystatechange =
                  function (e, i) {
                    (i ||
                      !n.readyState ||
                      /loaded|complete/.test(n.readyState)) &&
                      ((n.onload = n.onreadystatechange = null),
                      r && n.parentNode && r.removeChild(n),
                      (n = t),
                      i || o(200, "success"));
                  }),
                r.insertBefore(n, r.firstChild);
            },
            abort: function () {
              n && n.onload(0, 1);
            },
          };
        }
      });
    var _t,
      qt,
      Bt =
        !!e.ActiveXObject &&
        function () {
          for (var e in _t) _t[e](0, 1);
        },
      Wt = 0;
    (z.ajaxSettings.xhr = e.ActiveXObject
      ? function () {
          return (
            (!this.isLocal && k()) ||
            (function () {
              try {
                return new e.ActiveXObject("Microsoft.XMLHTTP");
              } catch (e) {}
            })()
          );
        }
      : k),
      (qt = z.ajaxSettings.xhr()),
      z.extend(z.support, { ajax: !!qt, cors: !!qt && "withCredentials" in qt }),
      z.support.ajax &&
        z.ajaxTransport(function (n) {
          var r;
          if (!n.crossDomain || z.support.cors)
            return {
              send: function (i, o) {
                var a,
                  s,
                  l = n.xhr();
                if (
                  (n.username
                    ? l.open(n.type, n.url, n.async, n.username, n.password)
                    : l.open(n.type, n.url, n.async),
                  n.xhrFields)
                )
                  for (s in n.xhrFields) l[s] = n.xhrFields[s];
                n.mimeType &&
                  l.overrideMimeType &&
                  l.overrideMimeType(n.mimeType),
                  !n.crossDomain &&
                    !i["X-Requested-With"] &&
                    (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                  for (s in i) l.setRequestHeader(s, i[s]);
                } catch (e) {}
                l.send((n.hasContent && n.data) || null),
                  (r = function (e, i) {
                    var s, u, c, f, p;
                    try {
                      if (r && (i || 4 === l.readyState))
                        if (
                          ((r = t),
                          a &&
                            ((l.onreadystatechange = z.noop), Bt && delete _t[a]),
                          i)
                        )
                          4 !== l.readyState && l.abort();
                        else {
                          (s = l.status),
                            (c = l.getAllResponseHeaders()),
                            (f = {}),
                            (p = l.responseXML) &&
                              p.documentElement &&
                              (f.xml = p);
                          try {
                            f.text = l.responseText;
                          } catch (e) {}
                          try {
                            u = l.statusText;
                          } catch (e) {
                            u = "";
                          }
                          s || !n.isLocal || n.crossDomain
                            ? 1223 === s && (s = 204)
                            : (s = f.text ? 200 : 404);
                        }
                    } catch (e) {
                      i || o(-1, e);
                    }
                    f && o(s, u, f, c);
                  }),
                  n.async
                    ? 4 === l.readyState
                      ? setTimeout(r, 0)
                      : ((a = ++Wt),
                        Bt && (_t || ((_t = {}), z(e).unload(Bt)), (_t[a] = r)),
                        (l.onreadystatechange = r))
                    : r();
              },
              abort: function () {
                r && r(0, 1);
              },
            };
        });
    var Pt,
      Rt,
      $t = /^(?:toggle|show|hide)$/,
      It = new RegExp("^(?:([-+])=|)(" + X + ")([a-z%]*)$", "i"),
      zt = /queueHooks$/,
      Xt = [
        function (e, t, n) {
          var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            f = this,
            p = e.style,
            d = {},
            h = [],
            m = e.nodeType && g(e);
          n.queue ||
            (null == (u = z._queueHooks(e, "fx")).unqueued &&
              ((u.unqueued = 0),
              (c = u.empty.fire),
              (u.empty.fire = function () {
                u.unqueued || c();
              })),
            u.unqueued++,
            f.always(function () {
              f.always(function () {
                u.unqueued--, z.queue(e, "fx").length || u.empty.fire();
              });
            })),
            1 === e.nodeType &&
              ("height" in t || "width" in t) &&
              ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
              "inline" === z.css(e, "display") &&
                "none" === z.css(e, "float") &&
                (z.support.inlineBlockNeedsLayout && "inline" !== x(e.nodeName)
                  ? (p.zoom = 1)
                  : (p.display = "inline-block"))),
            n.overflow &&
              ((p.overflow = "hidden"),
              z.support.shrinkWrapBlocks ||
                f.done(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                }));
          for (r in t)
            if (((o = t[r]), $t.exec(o))) {
              if ((delete t[r], o === (m ? "hide" : "show"))) continue;
              h.push(r);
            }
          if ((a = h.length))
            for (
              s = z._data(e, "fxshow") || z._data(e, "fxshow", {}),
                m
                  ? z(e).show()
                  : f.done(function () {
                      z(e).hide();
                    }),
                f.done(function () {
                  var t;
                  z.removeData(e, "fxshow", !0);
                  for (t in d) z.style(e, t, d[t]);
                }),
                r = 0;
              r < a;
              r++
            )
              (i = h[r]),
                (l = f.createTween(i, m ? s[i] : 0)),
                (d[i] = s[i] || z.style(e, i)),
                i in s ||
                  ((s[i] = l.start),
                  m &&
                    ((l.end = l.start),
                    (l.start = "width" === i || "height" === i ? 1 : 0)));
        },
      ],
      Ut = {
        "*": [
          function (e, t) {
            var n,
              r,
              i = this.createTween(e, t),
              o = It.exec(t),
              a = i.cur(),
              s = +a || 0,
              l = 1,
              u = 20;
            if (o) {
              if (
                ((n = +o[2]),
                "px" !== (r = o[3] || (z.cssNumber[e] ? "" : "px")) && s)
              ) {
                s = z.css(i.elem, e, !0) || n || 1;
                do {
                  (l = l || ".5"), (s /= l), z.style(i.elem, e, s + r);
                } while (l !== (l = i.cur() / a) && 1 !== l && --u);
              }
              (i.unit = r),
                (i.start = s),
                (i.end = o[1] ? s + (o[1] + 1) * n : n);
            }
            return i;
          },
        ],
      };
    (z.Animation = z.extend(S, {
      tweener: function (e, t) {
        z.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
        for (var n, r = 0, i = e.length; r < i; r++)
          (n = e[r]), (Ut[n] = Ut[n] || []), Ut[n].unshift(t);
      },
      prefilter: function (e, t) {
        t ? Xt.unshift(e) : Xt.push(e);
      },
    })),
      (z.Tween = A),
      (A.prototype = {
        constructor: A,
        init: function (e, t, n, r, i, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = i || "swing"),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = r),
            (this.unit = o || (z.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = A.propHooks[this.prop];
          return e && e.get ? e.get(this) : A.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = A.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  z.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
          );
        },
      }),
      (A.prototype.init.prototype = A.prototype),
      (A.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
              (e.elem.style && null != e.elem.style[e.prop])
              ? (t = z.css(e.elem, e.prop, !1, "")) && "auto" !== t
                ? t
                : 0
              : e.elem[e.prop];
          },
          set: function (e) {
            z.fx.step[e.prop]
              ? z.fx.step[e.prop](e)
              : e.elem.style &&
                (null != e.elem.style[z.cssProps[e.prop]] || z.cssHooks[e.prop])
              ? z.style(e.elem, e.prop, e.now + e.unit)
              : (e.elem[e.prop] = e.now);
          },
        },
      }),
      (A.propHooks.scrollTop = A.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      z.each(["toggle", "show", "hide"], function (e, t) {
        var n = z.fn[t];
        z.fn[t] = function (r, i, o) {
          return null == r ||
            "boolean" == typeof r ||
            (!e && z.isFunction(r) && z.isFunction(i))
            ? n.apply(this, arguments)
            : this.animate(j(t, !0), r, i, o);
        };
      }),
      z.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(g)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, r);
        },
        animate: function (e, t, n, r) {
          var i = z.isEmptyObject(e),
            o = z.speed(t, n, r),
            a = function () {
              var t = S(this, z.extend({}, e), o);
              i && t.stop(!0);
            };
          return i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function (e, n, r) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r);
          };
          return (
            "string" != typeof e && ((r = n), (n = e), (e = t)),
            n && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                n = null != e && e + "queueHooks",
                o = z.timers,
                a = z._data(this);
              if (n) a[n] && a[n].stop && i(a[n]);
              else for (n in a) a[n] && a[n].stop && zt.test(n) && i(a[n]);
              for (n = o.length; n--; )
                o[n].elem === this &&
                  (null == e || o[n].queue === e) &&
                  (o[n].anim.stop(r), (t = !1), o.splice(n, 1));
              (t || !r) && z.dequeue(this, e);
            })
          );
        },
      }),
      z.each(
        {
          slideDown: j("show"),
          slideUp: j("hide"),
          slideToggle: j("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          z.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r);
          };
        }
      ),
      (z.speed = function (e, t, n) {
        var r =
          e && "object" == typeof e
            ? z.extend({}, e)
            : {
                complete: n || (!n && t) || (z.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !z.isFunction(t) && t),
              };
        return (
          (r.duration = z.fx.off
            ? 0
            : "number" == typeof r.duration
            ? r.duration
            : r.duration in z.fx.speeds
            ? z.fx.speeds[r.duration]
            : z.fx.speeds._default),
          (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
          (r.old = r.complete),
          (r.complete = function () {
            z.isFunction(r.old) && r.old.call(this),
              r.queue && z.dequeue(this, r.queue);
          }),
          r
        );
      }),
      (z.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
      }),
      (z.timers = []),
      (z.fx = A.prototype.init),
      (z.fx.tick = function () {
        for (var e, t = z.timers, n = 0; n < t.length; n++)
          (e = t[n]), !e() && t[n] === e && t.splice(n--, 1);
        t.length || z.fx.stop();
      }),
      (z.fx.timer = function (e) {
        e() &&
          z.timers.push(e) &&
          !Rt &&
          (Rt = setInterval(z.fx.tick, z.fx.interval));
      }),
      (z.fx.interval = 13),
      (z.fx.stop = function () {
        clearInterval(Rt), (Rt = null);
      }),
      (z.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (z.fx.step = {}),
      z.expr &&
        z.expr.filters &&
        (z.expr.filters.animated = function (e) {
          return z.grep(z.timers, function (t) {
            return e === t.elem;
          }).length;
        });
    var Yt = /^(?:body|html)$/i;
    (z.fn.offset = function (e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function (t) {
              z.offset.setOffset(this, e, t);
            });
      var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u = { top: 0, left: 0 },
        c = this[0],
        f = c && c.ownerDocument;
      return f
        ? (r = f.body) === c
          ? z.offset.bodyOffset(c)
          : ((n = f.documentElement),
            z.contains(n, c)
              ? (void 0 !== c.getBoundingClientRect &&
                  (u = c.getBoundingClientRect()),
                (i = D(f)),
                (o = n.clientTop || r.clientTop || 0),
                (a = n.clientLeft || r.clientLeft || 0),
                (s = i.pageYOffset || n.scrollTop),
                (l = i.pageXOffset || n.scrollLeft),
                { top: u.top + s - o, left: u.left + l - a })
              : u)
        : void 0;
    }),
      (z.offset = {
        bodyOffset: function (e) {
          var t = e.offsetTop,
            n = e.offsetLeft;
          return (
            z.support.doesNotIncludeMarginInBodyOffset &&
              ((t += parseFloat(z.css(e, "marginTop")) || 0),
              (n += parseFloat(z.css(e, "marginLeft")) || 0)),
            { top: t, left: n }
          );
        },
        setOffset: function (e, t, n) {
          var r = z.css(e, "position");
          "static" === r && (e.style.position = "relative");
          var i,
            o,
            a = z(e),
            s = a.offset(),
            l = z.css(e, "top"),
            u = z.css(e, "left"),
            c = {},
            f = {};
          ("absolute" === r || "fixed" === r) && z.inArray("auto", [l, u]) > -1
            ? ((i = (f = a.position()).top), (o = f.left))
            : ((i = parseFloat(l) || 0), (o = parseFloat(u) || 0)),
            z.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (c.top = t.top - s.top + i),
            null != t.left && (c.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, c) : a.css(c);
        },
      }),
      z.fn.extend({
        position: function () {
          if (this[0]) {
            var e = this[0],
              t = this.offsetParent(),
              n = this.offset(),
              r = Yt.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
            return (
              (n.top -= parseFloat(z.css(e, "marginTop")) || 0),
              (n.left -= parseFloat(z.css(e, "marginLeft")) || 0),
              (r.top += parseFloat(z.css(t[0], "borderTopWidth")) || 0),
              (r.left += parseFloat(z.css(t[0], "borderLeftWidth")) || 0),
              { top: n.top - r.top, left: n.left - r.left }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || F.body;
              e && !Yt.test(e.nodeName) && "static" === z.css(e, "position");
  
            )
              e = e.offsetParent;
            return e || F.body;
          });
        },
      }),
      z.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, n) {
          var r = /Y/.test(n);
          z.fn[e] = function (i) {
            return z.access(
              this,
              function (e, i, o) {
                var a = D(e);
                if (o === t)
                  return a
                    ? n in a
                      ? a[n]
                      : a.document.documentElement[i]
                    : e[i];
                a
                  ? a.scrollTo(
                      r ? z(a).scrollLeft() : o,
                      r ? o : z(a).scrollTop()
                    )
                  : (e[i] = o);
              },
              e,
              i,
              arguments.length,
              null
            );
          };
        }
      ),
      z.each({ Height: "height", Width: "width" }, function (e, n) {
        z.each(
          { padding: "inner" + e, content: n, "": "outer" + e },
          function (r, i) {
            z.fn[i] = function (i, o) {
              var a = arguments.length && (r || "boolean" != typeof i),
                s = r || (!0 === i || !0 === o ? "margin" : "border");
              return z.access(
                this,
                function (n, r, i) {
                  var o;
                  return z.isWindow(n)
                    ? n.document.documentElement["client" + e]
                    : 9 === n.nodeType
                    ? ((o = n.documentElement),
                      Math.max(
                        n.body["scroll" + e],
                        o["scroll" + e],
                        n.body["offset" + e],
                        o["offset" + e],
                        o["client" + e]
                      ))
                    : i === t
                    ? z.css(n, r, i, s)
                    : z.style(n, r, i, s);
                },
                n,
                a ? i : t,
                a,
                null
              );
            };
          }
        );
      }),
      (e.jQuery = e.$ = z),
      "function" == typeof define &&
        define.amd &&
        define.amd.jQuery &&
        define("jquery", [], function () {
          return z;
        });
  })(window);
  