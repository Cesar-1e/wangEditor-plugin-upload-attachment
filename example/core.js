/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@wangeditor/core@0.14.13/dist/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
 !(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("slate"),
        require("lodash.toarray"),
        require("dom7"),
        require("lodash.foreach"),
        require("nanoid"),
        require("lodash.throttle"),
        require("snabbdom"),
        require("lodash.camelcase"),
        require("is-hotkey"),
        require("lodash.debounce"),
        require("lodash.clonedeep"),
        require("@uppy/core"),
        require("@uppy/xhr-upload")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "slate",
          "lodash.toarray",
          "dom7",
          "lodash.foreach",
          "nanoid",
          "lodash.throttle",
          "snabbdom",
          "lodash.camelcase",
          "is-hotkey",
          "lodash.debounce",
          "lodash.clonedeep",
          "@uppy/core",
          "@uppy/xhr-upload",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).WangEditorCore = {}),
        e.slate,
        e.toArray,
        e.$,
        e.forEach$1,
        null,
        e.throttle,
        e.snabbdom,
        e.camelCase,
        e.isHotkey,
        e.debounce,
        e.cloneDeep,
        e.Uppy,
        e.XHRUpload
      );
})(this, function (e, t, n, r, o, i, a, s, l, u, c, f, d, p) {
  "use strict";
  function h(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var g = h(t),
    v = h(n),
    y = h(r),
    m = h(o),
    b = h(a),
    w = h(l),
    x = h(c),
    E = h(f),
    S = h(d),
    k = h(p),
    O =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
  function C(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  function T(e) {
    var t = { exports: {} };
    return e(t, t.exports), t.exports;
  }
  var N,
    M,
    L = function (e) {
      return e && e.Math == Math && e;
    },
    R =
      L("object" == typeof globalThis && globalThis) ||
      L("object" == typeof window && window) ||
      L("object" == typeof self && self) ||
      L("object" == typeof O && O) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    P = Object.defineProperty,
    D = function (e, t) {
      try {
        P(R, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        R[e] = t;
      }
      return t;
    },
    j = "__core-js_shared__",
    A = R[j] || D(j, {}),
    _ = T(function (e) {
      (e.exports = function (e, t) {
        return A[e] || (A[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.19.3",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
      });
    }),
    F = Function.prototype,
    I = F.bind,
    B = F.call,
    $ = I && I.bind(B),
    W = I
      ? function (e) {
          return e && $(B, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return B.apply(e, arguments);
            }
          );
        },
    V = R.TypeError,
    z = function (e) {
      if (null == e) throw V("Can't call method on " + e);
      return e;
    },
    H = R.Object,
    U = function (e) {
      return H(z(e));
    },
    K = W({}.hasOwnProperty),
    q =
      Object.hasOwn ||
      function (e, t) {
        return K(U(e), t);
      },
    G = 0,
    Y = Math.random(),
    J = W((1).toString),
    X = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + J(++G + Y, 36);
    },
    Q = function (e) {
      return "function" == typeof e;
    },
    Z = function (e) {
      return Q(e) ? e : void 0;
    },
    ee = function (e, t) {
      return arguments.length < 2 ? Z(R[e]) : R[e] && R[e][t];
    },
    te = ee("navigator", "userAgent") || "",
    ne = R.process,
    re = R.Deno,
    oe = (ne && ne.versions) || (re && re.version),
    ie = oe && oe.v8;
  ie && (M = (N = ie.split("."))[0] > 0 && N[0] < 4 ? 1 : +(N[0] + N[1])),
    !M &&
      te &&
      (!(N = te.match(/Edge\/(\d+)/)) || N[1] >= 74) &&
      (N = te.match(/Chrome\/(\d+)/)) &&
      (M = +N[1]);
  var ae = M,
    se = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    le =
      !!Object.getOwnPropertySymbols &&
      !se(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && ae && ae < 41)
        );
      }),
    ue = le && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    ce = _("wks"),
    fe = R.Symbol,
    de = fe && fe.for,
    pe = ue ? fe : (fe && fe.withoutSetter) || X,
    he = function (e) {
      if (!q(ce, e) || (!le && "string" != typeof ce[e])) {
        var t = "Symbol." + e;
        le && q(fe, e) ? (ce[e] = fe[e]) : (ce[e] = ue && de ? de(t) : pe(t));
      }
      return ce[e];
    },
    ge = {};
  ge[he("toStringTag")] = "z";
  var ve = "[object z]" === String(ge),
    ye = !se(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    me = function (e) {
      return "object" == typeof e ? null !== e : Q(e);
    },
    be = R.document,
    we = me(be) && me(be.createElement),
    xe = function (e) {
      return we ? be.createElement(e) : {};
    },
    Ee =
      !ye &&
      !se(function () {
        return (
          7 !=
          Object.defineProperty(xe("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    Se = R.String,
    ke = R.TypeError,
    Oe = function (e) {
      if (me(e)) return e;
      throw ke(Se(e) + " is not an object");
    },
    Ce = Function.prototype.call,
    Te = Ce.bind
      ? Ce.bind(Ce)
      : function () {
          return Ce.apply(Ce, arguments);
        },
    Ne = W({}.isPrototypeOf),
    Me = R.Object,
    Le = ue
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = ee("Symbol");
          return Q(t) && Ne(t.prototype, Me(e));
        },
    Re = R.String,
    Pe = function (e) {
      try {
        return Re(e);
      } catch (e) {
        return "Object";
      }
    },
    De = R.TypeError,
    je = function (e) {
      if (Q(e)) return e;
      throw De(Pe(e) + " is not a function");
    },
    Ae = function (e, t) {
      var n = e[t];
      return null == n ? void 0 : je(n);
    },
    _e = R.TypeError,
    Fe = R.TypeError,
    Ie = he("toPrimitive"),
    Be = function (e, t) {
      if (!me(e) || Le(e)) return e;
      var n,
        r = Ae(e, Ie);
      if (r) {
        if (
          (void 0 === t && (t = "default"), (n = Te(r, e, t)), !me(n) || Le(n))
        )
          return n;
        throw Fe("Can't convert object to primitive value");
      }
      return (
        void 0 === t && (t = "number"),
        (function (e, t) {
          var n, r;
          if ("string" === t && Q((n = e.toString)) && !me((r = Te(n, e))))
            return r;
          if (Q((n = e.valueOf)) && !me((r = Te(n, e)))) return r;
          if ("string" !== t && Q((n = e.toString)) && !me((r = Te(n, e))))
            return r;
          throw _e("Can't convert object to primitive value");
        })(e, t)
      );
    },
    $e = function (e) {
      var t = Be(e, "string");
      return Le(t) ? t : t + "";
    },
    We = R.TypeError,
    Ve = Object.defineProperty,
    ze = {
      f: ye
        ? Ve
        : function (e, t, n) {
            if ((Oe(e), (t = $e(t)), Oe(n), Ee))
              try {
                return Ve(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n) throw We("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          },
    },
    He = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    Ue = ye
      ? function (e, t, n) {
          return ze.f(e, t, He(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    Ke = W(Function.toString);
  Q(A.inspectSource) ||
    (A.inspectSource = function (e) {
      return Ke(e);
    });
  var qe,
    Ge,
    Ye,
    Je = A.inspectSource,
    Xe = R.WeakMap,
    Qe = Q(Xe) && /native code/.test(Je(Xe)),
    Ze = _("keys"),
    et = function (e) {
      return Ze[e] || (Ze[e] = X(e));
    },
    tt = {},
    nt = "Object already initialized",
    rt = R.TypeError,
    ot = R.WeakMap;
  if (Qe || A.state) {
    var it = A.state || (A.state = new ot()),
      at = W(it.get),
      st = W(it.has),
      lt = W(it.set);
    (qe = function (e, t) {
      if (st(it, e)) throw new rt(nt);
      return (t.facade = e), lt(it, e, t), t;
    }),
      (Ge = function (e) {
        return at(it, e) || {};
      }),
      (Ye = function (e) {
        return st(it, e);
      });
  } else {
    var ut = et("state");
    (tt[ut] = !0),
      (qe = function (e, t) {
        if (q(e, ut)) throw new rt(nt);
        return (t.facade = e), Ue(e, ut, t), t;
      }),
      (Ge = function (e) {
        return q(e, ut) ? e[ut] : {};
      }),
      (Ye = function (e) {
        return q(e, ut);
      });
  }
  var ct = {
      set: qe,
      get: Ge,
      has: Ye,
      enforce: function (e) {
        return Ye(e) ? Ge(e) : qe(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!me(t) || (n = Ge(t)).type !== e)
            throw rt("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    ft = Function.prototype,
    dt = ye && Object.getOwnPropertyDescriptor,
    pt = q(ft, "name"),
    ht = {
      EXISTS: pt,
      PROPER: pt && "something" === function () {}.name,
      CONFIGURABLE: pt && (!ye || (ye && dt(ft, "name").configurable)),
    },
    gt = T(function (e) {
      var t = ht.CONFIGURABLE,
        n = ct.get,
        r = ct.enforce,
        o = String(String).split("String");
      (e.exports = function (e, n, i, a) {
        var s,
          l = !!a && !!a.unsafe,
          u = !!a && !!a.enumerable,
          c = !!a && !!a.noTargetGet,
          f = a && void 0 !== a.name ? a.name : n;
        Q(i) &&
          ("Symbol(" === String(f).slice(0, 7) &&
            (f = "[" + String(f).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!q(i, "name") || (t && i.name !== f)) && Ue(i, "name", f),
          (s = r(i)).source ||
            (s.source = o.join("string" == typeof f ? f : ""))),
          e !== R
            ? (l ? !c && e[n] && (u = !0) : delete e[n],
              u ? (e[n] = i) : Ue(e, n, i))
            : u
            ? (e[n] = i)
            : D(n, i);
      })(Function.prototype, "toString", function () {
        return (Q(this) && n(this).source) || Je(this);
      });
    }),
    vt = W({}.toString),
    yt = W("".slice),
    mt = function (e) {
      return yt(vt(e), 8, -1);
    },
    bt = he("toStringTag"),
    wt = R.Object,
    xt =
      "Arguments" ==
      mt(
        (function () {
          return arguments;
        })()
      ),
    Et = ve
      ? mt
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = wt(e)), bt))
            ? n
            : xt
            ? mt(t)
            : "Object" == (r = mt(t)) && Q(t.callee)
            ? "Arguments"
            : r;
        },
    St = ve
      ? {}.toString
      : function () {
          return "[object " + Et(this) + "]";
        };
  ve || gt(Object.prototype, "toString", St, { unsafe: !0 });
  var kt = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Ot = xe("span").classList,
    Ct = Ot && Ot.constructor && Ot.constructor.prototype,
    Tt = Ct === Object.prototype ? void 0 : Ct,
    Nt = W(W.bind),
    Mt = function (e, t) {
      return (
        je(e),
        void 0 === t
          ? e
          : Nt
          ? Nt(e, t)
          : function () {
              return e.apply(t, arguments);
            }
      );
    },
    Lt = R.Object,
    Rt = W("".split),
    Pt = se(function () {
      return !Lt("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == mt(e) ? Rt(e, "") : Lt(e);
        }
      : Lt,
    Dt = Math.ceil,
    jt = Math.floor,
    At = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : (t > 0 ? jt : Dt)(t);
    },
    _t = Math.min,
    Ft = function (e) {
      return e > 0 ? _t(At(e), 9007199254740991) : 0;
    },
    It = function (e) {
      return Ft(e.length);
    },
    Bt =
      Array.isArray ||
      function (e) {
        return "Array" == mt(e);
      },
    $t = function () {},
    Wt = [],
    Vt = ee("Reflect", "construct"),
    zt = /^\s*(?:class|function)\b/,
    Ht = W(zt.exec),
    Ut = !zt.exec($t),
    Kt = function (e) {
      if (!Q(e)) return !1;
      try {
        return Vt($t, Wt, e), !0;
      } catch (e) {
        return !1;
      }
    },
    qt =
      !Vt ||
      se(function () {
        var e;
        return (
          Kt(Kt.call) ||
          !Kt(Object) ||
          !Kt(function () {
            e = !0;
          }) ||
          e
        );
      })
        ? function (e) {
            if (!Q(e)) return !1;
            switch (Et(e)) {
              case "AsyncFunction":
              case "GeneratorFunction":
              case "AsyncGeneratorFunction":
                return !1;
            }
            return Ut || !!Ht(zt, Je(e));
          }
        : Kt,
    Gt = he("species"),
    Yt = R.Array,
    Jt = function (e, t) {
      return new ((function (e) {
        var t;
        return (
          Bt(e) &&
            ((t = e.constructor),
            ((qt(t) && (t === Yt || Bt(t.prototype))) ||
              (me(t) && null === (t = t[Gt]))) &&
              (t = void 0)),
          void 0 === t ? Yt : t
        );
      })(e))(0 === t ? 0 : t);
    },
    Xt = W([].push),
    Qt = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        o = 4 == e,
        i = 6 == e,
        a = 7 == e,
        s = 5 == e || i;
      return function (l, u, c, f) {
        for (
          var d,
            p,
            h = U(l),
            g = Pt(h),
            v = Mt(u, c),
            y = It(g),
            m = 0,
            b = f || Jt,
            w = t ? b(l, y) : n || a ? b(l, 0) : void 0;
          y > m;
          m++
        )
          if ((s || m in g) && ((p = v((d = g[m]), m, h)), e))
            if (t) w[m] = p;
            else if (p)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return m;
                case 2:
                  Xt(w, d);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  Xt(w, d);
              }
        return i ? -1 : r || o ? o : w;
      };
    },
    Zt = {
      forEach: Qt(0),
      map: Qt(1),
      filter: Qt(2),
      some: Qt(3),
      every: Qt(4),
      find: Qt(5),
      findIndex: Qt(6),
      filterReject: Qt(7),
    },
    en = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        se(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    tn = Zt.forEach,
    nn = en("forEach")
      ? [].forEach
      : function (e) {
          return tn(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    rn = function (e) {
      if (e && e.forEach !== nn)
        try {
          Ue(e, "forEach", nn);
        } catch (t) {
          e.forEach = nn;
        }
    };
  for (var on in kt) kt[on] && rn(R[on] && R[on].prototype);
  rn(Tt);
  var an = {}.propertyIsEnumerable,
    sn = Object.getOwnPropertyDescriptor,
    ln =
      sn && !an.call({ 1: 2 }, 1)
        ? function (e) {
            var t = sn(this, e);
            return !!t && t.enumerable;
          }
        : an,
    un = { f: ln },
    cn = function (e) {
      return Pt(z(e));
    },
    fn = Object.getOwnPropertyDescriptor,
    dn = {
      f: ye
        ? fn
        : function (e, t) {
            if (((e = cn(e)), (t = $e(t)), Ee))
              try {
                return fn(e, t);
              } catch (e) {}
            if (q(e, t)) return He(!Te(un.f, e, t), e[t]);
          },
    },
    pn = Math.max,
    hn = Math.min,
    gn = function (e, t) {
      var n = At(e);
      return n < 0 ? pn(n + t, 0) : hn(n, t);
    },
    vn = function (e) {
      return function (t, n, r) {
        var o,
          i = cn(t),
          a = It(i),
          s = gn(r, a);
        if (e && n != n) {
          for (; a > s; ) if ((o = i[s++]) != o) return !0;
        } else
          for (; a > s; s++)
            if ((e || s in i) && i[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    yn = { includes: vn(!0), indexOf: vn(!1) },
    mn = yn.indexOf,
    bn = W([].push),
    wn = function (e, t) {
      var n,
        r = cn(e),
        o = 0,
        i = [];
      for (n in r) !q(tt, n) && q(r, n) && bn(i, n);
      for (; t.length > o; ) q(r, (n = t[o++])) && (~mn(i, n) || bn(i, n));
      return i;
    },
    xn = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    En = xn.concat("length", "prototype"),
    Sn = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return wn(e, En);
        },
    },
    kn = { f: Object.getOwnPropertySymbols },
    On = W([].concat),
    Cn =
      ee("Reflect", "ownKeys") ||
      function (e) {
        var t = Sn.f(Oe(e)),
          n = kn.f;
        return n ? On(t, n(e)) : t;
      },
    Tn = function (e, t) {
      for (var n = Cn(t), r = ze.f, o = dn.f, i = 0; i < n.length; i++) {
        var a = n[i];
        q(e, a) || r(e, a, o(t, a));
      }
    },
    Nn = /#|\.prototype\./,
    Mn = function (e, t) {
      var n = Rn[Ln(e)];
      return n == Dn || (n != Pn && (Q(t) ? se(t) : !!t));
    },
    Ln = (Mn.normalize = function (e) {
      return String(e).replace(Nn, ".").toLowerCase();
    }),
    Rn = (Mn.data = {}),
    Pn = (Mn.NATIVE = "N"),
    Dn = (Mn.POLYFILL = "P"),
    jn = Mn,
    An = dn.f,
    _n = function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s = e.target,
        l = e.global,
        u = e.stat;
      if ((n = l ? R : u ? R[s] || D(s, {}) : (R[s] || {}).prototype))
        for (r in t) {
          if (
            ((i = t[r]),
            (o = e.noTargetGet ? (a = An(n, r)) && a.value : n[r]),
            !jn(l ? r : s + (u ? "." : "#") + r, e.forced) && void 0 !== o)
          ) {
            if (typeof i == typeof o) continue;
            Tn(i, o);
          }
          (e.sham || (o && o.sham)) && Ue(i, "sham", !0), gt(n, r, i, e);
        }
    },
    Fn = he("species"),
    In = function (e) {
      return (
        ae >= 51 ||
        !se(function () {
          var t = [];
          return (
            ((t.constructor = {})[Fn] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    },
    Bn = Zt.map,
    $n = In("map");
  _n(
    { target: "Array", proto: !0, forced: !$n },
    {
      map: function (e) {
        return Bn(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var Wn = function (e, t, n) {
      var r, o;
      Oe(e);
      try {
        if (!(r = Ae(e, "return"))) {
          if ("throw" === t) throw n;
          return n;
        }
        r = Te(r, e);
      } catch (e) {
        (o = !0), (r = e);
      }
      if ("throw" === t) throw n;
      if (o) throw r;
      return Oe(r), n;
    },
    Vn = function (e, t, n, r) {
      try {
        return r ? t(Oe(n)[0], n[1]) : t(n);
      } catch (t) {
        Wn(e, "throw", t);
      }
    },
    zn = {},
    Hn = he("iterator"),
    Un = Array.prototype,
    Kn = function (e) {
      return void 0 !== e && (zn.Array === e || Un[Hn] === e);
    },
    qn = function (e, t, n) {
      var r = $e(t);
      r in e ? ze.f(e, r, He(0, n)) : (e[r] = n);
    },
    Gn = he("iterator"),
    Yn = function (e) {
      if (null != e) return Ae(e, Gn) || Ae(e, "@@iterator") || zn[Et(e)];
    },
    Jn = R.TypeError,
    Xn = function (e, t) {
      var n = arguments.length < 2 ? Yn(e) : t;
      if (je(n)) return Oe(Te(n, e));
      throw Jn(Pe(e) + " is not iterable");
    },
    Qn = R.Array,
    Zn = he("iterator"),
    er = !1;
  try {
    var tr = 0,
      nr = {
        next: function () {
          return { done: !!tr++ };
        },
        return: function () {
          er = !0;
        },
      };
    (nr[Zn] = function () {
      return this;
    }),
      Array.from(nr, function () {
        throw 2;
      });
  } catch (e) {}
  var rr = function (e, t) {
      if (!t && !er) return !1;
      var n = !1;
      try {
        var r = {};
        (r[Zn] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    },
    or = !rr(function (e) {
      Array.from(e);
    });
  _n(
    { target: "Array", stat: !0, forced: or },
    {
      from: function (e) {
        var t = U(e),
          n = qt(this),
          r = arguments.length,
          o = r > 1 ? arguments[1] : void 0,
          i = void 0 !== o;
        i && (o = Mt(o, r > 2 ? arguments[2] : void 0));
        var a,
          s,
          l,
          u,
          c,
          f,
          d = Yn(t),
          p = 0;
        if (!d || (this == Qn && Kn(d)))
          for (a = It(t), s = n ? new this(a) : Qn(a); a > p; p++)
            (f = i ? o(t[p], p) : t[p]), qn(s, p, f);
        else
          for (
            c = (u = Xn(t, d)).next, s = n ? new this() : [];
            !(l = Te(c, u)).done;
            p++
          )
            (f = i ? Vn(u, o, [l.value, p], !0) : l.value), qn(s, p, f);
        return (s.length = p), s;
      },
    }
  );
  var ir,
    ar = R.String,
    sr = function (e) {
      if ("Symbol" === Et(e))
        throw TypeError("Cannot convert a Symbol value to a string");
      return ar(e);
    },
    lr = W("".charAt),
    ur = W("".charCodeAt),
    cr = W("".slice),
    fr = function (e) {
      return function (t, n) {
        var r,
          o,
          i = sr(z(t)),
          a = At(n),
          s = i.length;
        return a < 0 || a >= s
          ? e
            ? ""
            : void 0
          : (r = ur(i, a)) < 55296 ||
            r > 56319 ||
            a + 1 === s ||
            (o = ur(i, a + 1)) < 56320 ||
            o > 57343
          ? e
            ? lr(i, a)
            : r
          : e
          ? cr(i, a, a + 2)
          : o - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    dr = { codeAt: fr(!1), charAt: fr(!0) },
    pr =
      Object.keys ||
      function (e) {
        return wn(e, xn);
      },
    hr = ye
      ? Object.defineProperties
      : function (e, t) {
          Oe(e);
          for (var n, r = cn(t), o = pr(t), i = o.length, a = 0; i > a; )
            ze.f(e, (n = o[a++]), r[n]);
          return e;
        },
    gr = ee("document", "documentElement"),
    vr = et("IE_PROTO"),
    yr = function () {},
    mr = function (e) {
      return "<script>" + e + "</" + "script>";
    },
    br = function (e) {
      e.write(mr("")), e.close();
      var t = e.parentWindow.Object;
      return (e = null), t;
    },
    wr = function () {
      try {
        ir = new ActiveXObject("htmlfile");
      } catch (e) {}
      var e, t;
      wr =
        "undefined" != typeof document
          ? document.domain && ir
            ? br(ir)
            : (((t = xe("iframe")).style.display = "none"),
              gr.appendChild(t),
              (t.src = String("javascript:")),
              (e = t.contentWindow.document).open(),
              e.write(mr("document.F=Object")),
              e.close(),
              e.F)
          : br(ir);
      for (var n = xn.length; n--; ) delete wr.prototype[xn[n]];
      return wr();
    };
  tt[vr] = !0;
  var xr,
    Er,
    Sr,
    kr =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((yr.prototype = Oe(e)),
              (n = new yr()),
              (yr.prototype = null),
              (n[vr] = e))
            : (n = wr()),
          void 0 === t ? n : hr(n, t)
        );
      },
    Or = !se(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    Cr = et("IE_PROTO"),
    Tr = R.Object,
    Nr = Tr.prototype,
    Mr = Or
      ? Tr.getPrototypeOf
      : function (e) {
          var t = U(e);
          if (q(t, Cr)) return t[Cr];
          var n = t.constructor;
          return Q(n) && t instanceof n
            ? n.prototype
            : t instanceof Tr
            ? Nr
            : null;
        },
    Lr = he("iterator"),
    Rr = !1;
  [].keys &&
    ("next" in (Sr = [].keys())
      ? (Er = Mr(Mr(Sr))) !== Object.prototype && (xr = Er)
      : (Rr = !0));
  var Pr =
    null == xr ||
    se(function () {
      var e = {};
      return xr[Lr].call(e) !== e;
    });
  Pr && (xr = {}),
    Q(xr[Lr]) ||
      gt(xr, Lr, function () {
        return this;
      });
  var Dr = { IteratorPrototype: xr, BUGGY_SAFARI_ITERATORS: Rr },
    jr = ze.f,
    Ar = he("toStringTag"),
    _r = function (e, t, n) {
      e &&
        !q((e = n ? e : e.prototype), Ar) &&
        jr(e, Ar, { configurable: !0, value: t });
    },
    Fr = Dr.IteratorPrototype,
    Ir = function () {
      return this;
    },
    Br = R.String,
    $r = R.TypeError,
    Wr =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = W(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              ))(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return (
                Oe(n),
                (function (e) {
                  if ("object" == typeof e || Q(e)) return e;
                  throw $r("Can't set " + Br(e) + " as a prototype");
                })(r),
                t ? e(n, r) : (n.__proto__ = r),
                n
              );
            };
          })()
        : void 0),
    Vr = ht.PROPER,
    zr = ht.CONFIGURABLE,
    Hr = Dr.IteratorPrototype,
    Ur = Dr.BUGGY_SAFARI_ITERATORS,
    Kr = he("iterator"),
    qr = "keys",
    Gr = "values",
    Yr = "entries",
    Jr = function () {
      return this;
    },
    Xr = function (e, t, n, r, o, i, a) {
      !(function (e, t, n, r) {
        var o = t + " Iterator";
        (e.prototype = kr(Fr, { next: He(+!r, n) })),
          _r(e, o, !1),
          (zn[o] = Ir);
      })(n, t, r);
      var s,
        l,
        u,
        c = function (e) {
          if (e === o && g) return g;
          if (!Ur && e in p) return p[e];
          switch (e) {
            case qr:
            case Gr:
            case Yr:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        f = t + " Iterator",
        d = !1,
        p = e.prototype,
        h = p[Kr] || p["@@iterator"] || (o && p[o]),
        g = (!Ur && h) || c(o),
        v = ("Array" == t && p.entries) || h;
      if (
        (v &&
          (s = Mr(v.call(new e()))) !== Object.prototype &&
          s.next &&
          (Mr(s) !== Hr && (Wr ? Wr(s, Hr) : Q(s[Kr]) || gt(s, Kr, Jr)),
          _r(s, f, !0)),
        Vr &&
          o == Gr &&
          h &&
          h.name !== Gr &&
          (zr
            ? Ue(p, "name", Gr)
            : ((d = !0),
              (g = function () {
                return Te(h, this);
              }))),
        o)
      )
        if (((l = { values: c(Gr), keys: i ? g : c(qr), entries: c(Yr) }), a))
          for (u in l) (Ur || d || !(u in p)) && gt(p, u, l[u]);
        else _n({ target: t, proto: !0, forced: Ur || d }, l);
      return p[Kr] !== g && gt(p, Kr, g, { name: o }), (zn[t] = g), l;
    },
    Qr = dr.charAt,
    Zr = "String Iterator",
    eo = ct.set,
    to = ct.getterFor(Zr);
  Xr(
    String,
    "String",
    function (e) {
      eo(this, { type: Zr, string: sr(e), index: 0 });
    },
    function () {
      var e,
        t = to(this),
        n = t.string,
        r = t.index;
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = Qr(n, r)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var no = se(function () {
    pr(1);
  });
  /*!
   * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   */
  function ro(e) {
    return "[object Object]" === Object.prototype.toString.call(e);
  }
  _n(
    { target: "Object", stat: !0, forced: no },
    {
      keys: function (e) {
        return pr(U(e));
      },
    }
  );
  var oo = function (e) {
      var t, n;
      return (
        !1 !== ro(e) &&
        (void 0 === (t = e.constructor) ||
          (!1 !== ro((n = t.prototype)) &&
            !1 !== n.hasOwnProperty("isPrototypeOf")))
      );
    },
    io = Object.defineProperty({ isPlainObject: oo }, "__esModule", {
      value: !0,
    }),
    ao = function (e) {
      return (
        io.isPlainObject(e) &&
        Array.isArray(e.redos) &&
        Array.isArray(e.undos) &&
        (0 === e.redos.length ||
          g.default.Operation.isOperationList(e.redos[0])) &&
        (0 === e.undos.length ||
          g.default.Operation.isOperationList(e.undos[0]))
      );
    },
    so = new WeakMap(),
    lo = new WeakMap(),
    uo = {
      isHistoryEditor: function (e) {
        return ao(e.history) && g.default.Editor.isEditor(e);
      },
      isMerging: function (e) {
        return lo.get(e);
      },
      isSaving: function (e) {
        return so.get(e);
      },
      redo: function (e) {
        e.redo();
      },
      undo: function (e) {
        e.undo();
      },
      withoutMerging: function (e, t) {
        var n = uo.isMerging(e);
        lo.set(e, !1), t(), lo.set(e, n);
      },
      withoutSaving: function (e, t) {
        var n = uo.isSaving(e);
        so.set(e, !1), t(), so.set(e, n);
      },
    };
  function co(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return fo(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return fo(e, t);
        })(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      a = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (a = e.done), e;
      },
      e: function (e) {
        (s = !0), (i = e);
      },
      f: function () {
        try {
          a || null == n.return || n.return();
        } finally {
          if (s) throw i;
        }
      },
    };
  }
  function fo(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  var po = function (e, t) {
      return (
        "set_selection" === e.type ||
        !(
          !t ||
          "insert_text" !== e.type ||
          "insert_text" !== t.type ||
          e.offset !== t.offset + t.text.length ||
          !g.default.Path.equals(e.path, t.path)
        ) ||
        !(
          !t ||
          "remove_text" !== e.type ||
          "remove_text" !== t.type ||
          e.offset + e.text.length !== t.offset ||
          !g.default.Path.equals(e.path, t.path)
        )
      );
    },
    ho = function (e, t) {
      return (
        "set_selection" !== e.type ||
        (null != e.properties && null != e.newProperties)
      );
    },
    go = function (e, t) {
      return !(!t || "set_selection" !== e.type || "set_selection" !== t.type);
    },
    vo = function (e) {
      return "set_selection" !== e.type;
    },
    yo = function (e) {
      var t = e,
        n = t.apply;
      return (
        (t.history = { undos: [], redos: [] }),
        (t.redo = function () {
          var e = t.history,
            n = e.redos;
          if (n.length > 0) {
            var r = n[n.length - 1];
            uo.withoutSaving(t, function () {
              g.default.Editor.withoutNormalizing(t, function () {
                var e,
                  n = co(r);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value;
                    t.apply(o);
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
              });
            }),
              e.redos.pop(),
              e.undos.push(r);
          }
        }),
        (t.undo = function () {
          var e = t.history,
            n = e.undos;
          if (n.length > 0) {
            var r = n[n.length - 1];
            uo.withoutSaving(t, function () {
              g.default.Editor.withoutNormalizing(t, function () {
                var e,
                  n = co(r.map(g.default.Operation.inverse).reverse());
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value;
                    t.apply(o);
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
              });
            }),
              e.redos.push(r),
              e.undos.pop();
          }
        }),
        (t.apply = function (e) {
          var r = t.operations,
            o = t.history,
            i = o.undos,
            a = i[i.length - 1],
            s = a && a[a.length - 1],
            l = go(e, s),
            u = uo.isSaving(t),
            c = uo.isMerging(t);
          if ((null == u && (u = ho(e)), u)) {
            if (
              (null == c &&
                (c = null != a && (0 !== r.length || po(e, s) || l)),
              a && c)
            )
              l && a.pop(), a.push(e);
            else {
              var f = [e];
              i.push(f);
            }
            for (; i.length > 100; ) i.shift();
            vo(e) && (o.redos = []);
          }
          n(e);
        }),
        t
      );
    },
    mo = function () {
      var e = Oe(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    },
    bo = ht.PROPER,
    wo = "toString",
    xo = RegExp.prototype,
    Eo = xo.toString,
    So = W(mo),
    ko = se(function () {
      return "/a/b" != Eo.call({ source: "a", flags: "b" });
    }),
    Oo = bo && Eo.name != wo;
  (ko || Oo) &&
    gt(
      RegExp.prototype,
      wo,
      function () {
        var e = Oe(this),
          t = sr(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          sr(void 0 === n && Ne(xo, e) && !("flags" in xo) ? So(e) : n)
        );
      },
      { unsafe: !0 }
    );
  var Co = he("unscopables"),
    To = Array.prototype;
  null == To[Co] && ze.f(To, Co, { configurable: !0, value: kr(null) });
  var No = function (e) {
      To[Co][e] = !0;
    },
    Mo = yn.includes;
  _n(
    { target: "Array", proto: !0 },
    {
      includes: function (e) {
        return Mo(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    No("includes");
  var Lo = he("match"),
    Ro = function (e) {
      var t;
      return me(e) && (void 0 !== (t = e[Lo]) ? !!t : "RegExp" == mt(e));
    },
    Po = R.TypeError,
    Do = function (e) {
      if (Ro(e)) throw Po("The method doesn't accept regular expressions");
      return e;
    },
    jo = he("match"),
    Ao = function (e) {
      var t = /./;
      try {
        "/./"[e](t);
      } catch (n) {
        try {
          return (t[jo] = !1), "/./"[e](t);
        } catch (e) {}
      }
      return !1;
    },
    _o = W("".indexOf);
  _n(
    { target: "String", proto: !0, forced: !Ao("includes") },
    {
      includes: function (e) {
        return !!~_o(
          sr(z(this)),
          sr(Do(e)),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var Fo,
    Io = /"/g,
    Bo = W("".replace);
  _n(
    {
      target: "String",
      proto: !0,
      forced:
        ((Fo = "anchor"),
        se(function () {
          var e = ""[Fo]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        })),
    },
    {
      anchor: function (e) {
        return (
          (t = "a"),
          (n = "name"),
          (r = e),
          (o = sr(z(this))),
          (i = "<" + t),
          "" !== n && (i += " " + n + '="' + Bo(sr(r), Io, "&quot;") + '"'),
          i + ">" + o + "</" + t + ">"
        );
        var t, n, r, o, i;
      },
    }
  );
  var $o,
    Wo = dn.f,
    Vo = W("".endsWith),
    zo = W("".slice),
    Ho = Math.min,
    Uo = Ao("endsWith"),
    Ko = !(Uo || (($o = Wo(String.prototype, "endsWith")), !$o || $o.writable));
  _n(
    { target: "String", proto: !0, forced: !Ko && !Uo },
    {
      endsWith: function (e) {
        var t = sr(z(this));
        Do(e);
        var n = arguments.length > 1 ? arguments[1] : void 0,
          r = t.length,
          o = void 0 === n ? r : Ho(Ft(n), r),
          i = sr(e);
        return Vo ? Vo(t, i, o) : zo(t, o - i.length, o) === i;
      },
    }
  );
  var qo = W([].join),
    Go = Pt != Object,
    Yo = en("join", ",");
  _n(
    { target: "Array", proto: !0, forced: Go || !Yo },
    {
      join: function (e) {
        return qo(cn(this), void 0 === e ? "," : e);
      },
    }
  );
  var Jo = R.RegExp,
    Xo = se(function () {
      var e = Jo("a", "y");
      return (e.lastIndex = 2), null != e.exec("abcd");
    }),
    Qo =
      Xo ||
      se(function () {
        return !Jo("a", "y").sticky;
      }),
    Zo = {
      BROKEN_CARET:
        Xo ||
        se(function () {
          var e = Jo("^r", "gy");
          return (e.lastIndex = 2), null != e.exec("str");
        }),
      MISSED_STICKY: Qo,
      UNSUPPORTED_Y: Xo,
    },
    ei = R.RegExp,
    ti = se(function () {
      var e = ei(".", "s");
      return !(e.dotAll && e.exec("\n") && "s" === e.flags);
    }),
    ni = R.RegExp,
    ri = se(function () {
      var e = ni("(?<a>b)", "g");
      return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c");
    }),
    oi = ct.get,
    ii = _("native-string-replace", String.prototype.replace),
    ai = RegExp.prototype.exec,
    si = ai,
    li = W("".charAt),
    ui = W("".indexOf),
    ci = W("".replace),
    fi = W("".slice),
    di = (function () {
      var e = /a/,
        t = /b*/g;
      return (
        Te(ai, e, "a"), Te(ai, t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
      );
    })(),
    pi = Zo.BROKEN_CARET,
    hi = void 0 !== /()??/.exec("")[1];
  (di || hi || pi || ti || ri) &&
    (si = function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        s,
        l = this,
        u = oi(l),
        c = sr(e),
        f = u.raw;
      if (f)
        return (
          (f.lastIndex = l.lastIndex),
          (t = Te(si, f, c)),
          (l.lastIndex = f.lastIndex),
          t
        );
      var d = u.groups,
        p = pi && l.sticky,
        h = Te(mo, l),
        g = l.source,
        v = 0,
        y = c;
      if (
        (p &&
          ((h = ci(h, "y", "")),
          -1 === ui(h, "g") && (h += "g"),
          (y = fi(c, l.lastIndex)),
          l.lastIndex > 0 &&
            (!l.multiline ||
              (l.multiline && "\n" !== li(c, l.lastIndex - 1))) &&
            ((g = "(?: " + g + ")"), (y = " " + y), v++),
          (n = new RegExp("^(?:" + g + ")", h))),
        hi && (n = new RegExp("^" + g + "$(?!\\s)", h)),
        di && (r = l.lastIndex),
        (o = Te(ai, p ? n : l, y)),
        p
          ? o
            ? ((o.input = fi(o.input, v)),
              (o[0] = fi(o[0], v)),
              (o.index = l.lastIndex),
              (l.lastIndex += o[0].length))
            : (l.lastIndex = 0)
          : di && o && (l.lastIndex = l.global ? o.index + o[0].length : r),
        hi &&
          o &&
          o.length > 1 &&
          Te(ii, o[0], n, function () {
            for (i = 1; i < arguments.length - 2; i++)
              void 0 === arguments[i] && (o[i] = void 0);
          }),
        o && d)
      )
        for (o.groups = a = kr(null), i = 0; i < d.length; i++)
          a[(s = d[i])[0]] = o[s[1]];
      return o;
    });
  var gi = si;
  _n({ target: "RegExp", proto: !0, forced: /./.exec !== gi }, { exec: gi });
  var vi = Function.prototype,
    yi = vi.apply,
    mi = vi.bind,
    bi = vi.call,
    wi =
      ("object" == typeof Reflect && Reflect.apply) ||
      (mi
        ? bi.bind(yi)
        : function () {
            return bi.apply(yi, arguments);
          }),
    xi = he("species"),
    Ei = RegExp.prototype,
    Si = function (e, t, n, r) {
      var o = he(e),
        i = !se(function () {
          var t = {};
          return (
            (t[o] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        a =
          i &&
          !se(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[xi] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[o] = /./[o])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[o](""),
              !t
            );
          });
      if (!i || !a || n) {
        var s = W(/./[o]),
          l = t(o, ""[e], function (e, t, n, r, o) {
            var a = W(e),
              l = t.exec;
            return l === gi || l === Ei.exec
              ? i && !o
                ? { done: !0, value: s(t, n, r) }
                : { done: !0, value: a(n, t, r) }
              : { done: !1 };
          });
        gt(String.prototype, e, l[0]), gt(Ei, o, l[1]);
      }
      r && Ue(Ei[o], "sham", !0);
    },
    ki = dr.charAt,
    Oi = function (e, t, n) {
      return t + (n ? ki(e, t).length : 1);
    },
    Ci = Math.floor,
    Ti = W("".charAt),
    Ni = W("".replace),
    Mi = W("".slice),
    Li = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    Ri = /\$([$&'`]|\d{1,2})/g,
    Pi = function (e, t, n, r, o, i) {
      var a = n + e.length,
        s = r.length,
        l = Ri;
      return (
        void 0 !== o && ((o = U(o)), (l = Li)),
        Ni(i, l, function (i, l) {
          var u;
          switch (Ti(l, 0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return Mi(t, 0, n);
            case "'":
              return Mi(t, a);
            case "<":
              u = o[Mi(l, 1, -1)];
              break;
            default:
              var c = +l;
              if (0 === c) return i;
              if (c > s) {
                var f = Ci(c / 10);
                return 0 === f
                  ? i
                  : f <= s
                  ? void 0 === r[f - 1]
                    ? Ti(l, 1)
                    : r[f - 1] + Ti(l, 1)
                  : i;
              }
              u = r[c - 1];
          }
          return void 0 === u ? "" : u;
        })
      );
    },
    Di = R.TypeError,
    ji = function (e, t) {
      var n = e.exec;
      if (Q(n)) {
        var r = Te(n, e, t);
        return null !== r && Oe(r), r;
      }
      if ("RegExp" === mt(e)) return Te(gi, e, t);
      throw Di("RegExp#exec called on incompatible receiver");
    },
    Ai = he("replace"),
    _i = Math.max,
    Fi = Math.min,
    Ii = W([].concat),
    Bi = W([].push),
    $i = W("".indexOf),
    Wi = W("".slice),
    Vi = "$0" === "a".replace(/./, "$0"),
    zi = !!/./[Ai] && "" === /./[Ai]("a", "$0");
  Si(
    "replace",
    function (e, t, n) {
      var r = zi ? "$" : "$0";
      return [
        function (e, n) {
          var r = z(this),
            o = null == e ? void 0 : Ae(e, Ai);
          return o ? Te(o, e, r, n) : Te(t, sr(r), e, n);
        },
        function (e, o) {
          var i = Oe(this),
            a = sr(e);
          if ("string" == typeof o && -1 === $i(o, r) && -1 === $i(o, "$<")) {
            var s = n(t, i, a, o);
            if (s.done) return s.value;
          }
          var l = Q(o);
          l || (o = sr(o));
          var u = i.global;
          if (u) {
            var c = i.unicode;
            i.lastIndex = 0;
          }
          for (var f = []; ; ) {
            var d = ji(i, a);
            if (null === d) break;
            if ((Bi(f, d), !u)) break;
            "" === sr(d[0]) && (i.lastIndex = Oi(a, Ft(i.lastIndex), c));
          }
          for (var p, h = "", g = 0, v = 0; v < f.length; v++) {
            for (
              var y = sr((d = f[v])[0]),
                m = _i(Fi(At(d.index), a.length), 0),
                b = [],
                w = 1;
              w < d.length;
              w++
            )
              Bi(b, void 0 === (p = d[w]) ? p : String(p));
            var x = d.groups;
            if (l) {
              var E = Ii([y], b, m, a);
              void 0 !== x && Bi(E, x);
              var S = sr(wi(o, void 0, E));
            } else S = Pi(y, a, m, b, x, o);
            m >= g && ((h += Wi(a, g, m) + S), (g = m + y.length));
          }
          return h + Wi(a, g);
        },
      ];
    },
    !!se(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "7" !== "".replace(e, "$<a>")
      );
    }) ||
      !Vi ||
      zi
  );
  /*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
  var Hi = function (e, t) {
    return (
      (Hi =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      Hi(e, t)
    );
  };
  function Ui(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    function n() {
      this.constructor = e;
    }
    Hi(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }
  var Ki = function () {
    return (
      (Ki =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }),
      Ki.apply(this, arguments)
    );
  };
  function qi(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      n = t && e[t],
      r = 0;
    if (n) return n.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }
          );
        },
      };
    throw new TypeError(
      t ? "Object is not iterable." : "Symbol.iterator is not defined."
    );
  }
  function Gi(e, t) {
    var n = "function" == typeof Symbol && e[Symbol.iterator];
    if (!n) return e;
    var r,
      o,
      i = n.call(e),
      a = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
        a.push(r.value);
    } catch (e) {
      o = { error: e };
    } finally {
      try {
        r && !r.done && (n = i.return) && n.call(i);
      } finally {
        if (o) throw o.error;
      }
    }
    return a;
  }
  function Yi(e, t) {
    for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
    return e;
  }
  var Ji = 0,
    Xi = function () {
      this.id = "" + Ji++;
    },
    Qi = "Array Iterator",
    Zi = ct.set,
    ea = ct.getterFor(Qi),
    ta = Xr(
      Array,
      "Array",
      function (e, t) {
        Zi(this, { type: Qi, target: cn(e), index: 0, kind: t });
      },
      function () {
        var e = ea(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    );
  (zn.Arguments = zn.Array), No("keys"), No("values"), No("entries");
  var na = function (e, t, n) {
      for (var r in t) gt(e, r, t[r], n);
      return e;
    },
    ra = R.Array,
    oa = Math.max,
    ia = function (e, t, n) {
      for (
        var r = It(e),
          o = gn(t, r),
          i = gn(void 0 === n ? r : n, r),
          a = ra(oa(i - o, 0)),
          s = 0;
        o < i;
        o++, s++
      )
        qn(a, s, e[o]);
      return (a.length = s), a;
    },
    aa = Sn.f,
    sa =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    la = {
      f: function (e) {
        return sa && "Window" == mt(e)
          ? (function (e) {
              try {
                return aa(e);
              } catch (e) {
                return ia(sa);
              }
            })(e)
          : aa(cn(e));
      },
    },
    ua = se(function () {
      if ("function" == typeof ArrayBuffer) {
        var e = new ArrayBuffer(8);
        Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
      }
    }),
    ca = Object.isExtensible,
    fa =
      se(function () {
        ca(1);
      }) || ua
        ? function (e) {
            return !!me(e) && (!ua || "ArrayBuffer" != mt(e)) && (!ca || ca(e));
          }
        : ca,
    da = !se(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    pa = T(function (e) {
      var t = ze.f,
        n = !1,
        r = X("meta"),
        o = 0,
        i = function (e) {
          t(e, r, { value: { objectID: "O" + o++, weakData: {} } });
        },
        a = (e.exports = {
          enable: function () {
            (a.enable = function () {}), (n = !0);
            var e = Sn.f,
              t = W([].splice),
              o = {};
            (o[r] = 1),
              e(o).length &&
                ((Sn.f = function (n) {
                  for (var o = e(n), i = 0, a = o.length; i < a; i++)
                    if (o[i] === r) {
                      t(o, i, 1);
                      break;
                    }
                  return o;
                }),
                _n(
                  { target: "Object", stat: !0, forced: !0 },
                  { getOwnPropertyNames: la.f }
                ));
          },
          fastKey: function (e, t) {
            if (!me(e))
              return "symbol" == typeof e
                ? e
                : ("string" == typeof e ? "S" : "P") + e;
            if (!q(e, r)) {
              if (!fa(e)) return "F";
              if (!t) return "E";
              i(e);
            }
            return e[r].objectID;
          },
          getWeakData: function (e, t) {
            if (!q(e, r)) {
              if (!fa(e)) return !0;
              if (!t) return !1;
              i(e);
            }
            return e[r].weakData;
          },
          onFreeze: function (e) {
            return da && n && fa(e) && !q(e, r) && i(e), e;
          },
        });
      tt[r] = !0;
    }),
    ha = R.TypeError,
    ga = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    va = ga.prototype,
    ya = function (e, t, n) {
      var r,
        o,
        i,
        a,
        s,
        l,
        u,
        c = n && n.that,
        f = !(!n || !n.AS_ENTRIES),
        d = !(!n || !n.IS_ITERATOR),
        p = !(!n || !n.INTERRUPTED),
        h = Mt(t, c),
        g = function (e) {
          return r && Wn(r, "normal", e), new ga(!0, e);
        },
        v = function (e) {
          return f
            ? (Oe(e), p ? h(e[0], e[1], g) : h(e[0], e[1]))
            : p
            ? h(e, g)
            : h(e);
        };
      if (d) r = e;
      else {
        if (!(o = Yn(e))) throw ha(Pe(e) + " is not iterable");
        if (Kn(o)) {
          for (i = 0, a = It(e); a > i; i++)
            if ((s = v(e[i])) && Ne(va, s)) return s;
          return new ga(!1);
        }
        r = Xn(e, o);
      }
      for (l = r.next; !(u = Te(l, r)).done; ) {
        try {
          s = v(u.value);
        } catch (e) {
          Wn(r, "throw", e);
        }
        if ("object" == typeof s && s && Ne(va, s)) return s;
      }
      return new ga(!1);
    },
    ma = R.TypeError,
    ba = function (e, t) {
      if (Ne(t, e)) return e;
      throw ma("Incorrect invocation");
    },
    wa = function (e, t, n) {
      var r, o;
      return (
        Wr &&
          Q((r = t.constructor)) &&
          r !== n &&
          me((o = r.prototype)) &&
          o !== n.prototype &&
          Wr(e, o),
        e
      );
    },
    xa = function (e, t, n) {
      var r = -1 !== e.indexOf("Map"),
        o = -1 !== e.indexOf("Weak"),
        i = r ? "set" : "add",
        a = R[e],
        s = a && a.prototype,
        l = a,
        u = {},
        c = function (e) {
          var t = W(s[e]);
          gt(
            s,
            e,
            "add" == e
              ? function (e) {
                  return t(this, 0 === e ? 0 : e), this;
                }
              : "delete" == e
              ? function (e) {
                  return !(o && !me(e)) && t(this, 0 === e ? 0 : e);
                }
              : "get" == e
              ? function (e) {
                  return o && !me(e) ? void 0 : t(this, 0 === e ? 0 : e);
                }
              : "has" == e
              ? function (e) {
                  return !(o && !me(e)) && t(this, 0 === e ? 0 : e);
                }
              : function (e, n) {
                  return t(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        jn(
          e,
          !Q(a) ||
            !(
              o ||
              (s.forEach &&
                !se(function () {
                  new a().entries().next();
                }))
            )
        )
      )
        (l = n.getConstructor(t, e, r, i)), pa.enable();
      else if (jn(e, !0)) {
        var f = new l(),
          d = f[i](o ? {} : -0, 1) != f,
          p = se(function () {
            f.has(1);
          }),
          h = rr(function (e) {
            new a(e);
          }),
          g =
            !o &&
            se(function () {
              for (var e = new a(), t = 5; t--; ) e[i](t, t);
              return !e.has(-0);
            });
        h ||
          (((l = t(function (e, t) {
            ba(e, s);
            var n = wa(new a(), e, l);
            return null != t && ya(t, n[i], { that: n, AS_ENTRIES: r }), n;
          })).prototype = s),
          (s.constructor = l)),
          (p || g) && (c("delete"), c("has"), r && c("get")),
          (g || d) && c(i),
          o && s.clear && delete s.clear;
      }
      return (
        (u[e] = l),
        _n({ global: !0, forced: l != a }, u),
        _r(l, e),
        o || n.setStrong(l, e, r),
        l
      );
    },
    Ea = pa.getWeakData,
    Sa = ct.set,
    ka = ct.getterFor,
    Oa = Zt.find,
    Ca = Zt.findIndex,
    Ta = W([].splice),
    Na = 0,
    Ma = function (e) {
      return e.frozen || (e.frozen = new La());
    },
    La = function () {
      this.entries = [];
    },
    Ra = function (e, t) {
      return Oa(e.entries, function (e) {
        return e[0] === t;
      });
    };
  La.prototype = {
    get: function (e) {
      var t = Ra(this, e);
      if (t) return t[1];
    },
    has: function (e) {
      return !!Ra(this, e);
    },
    set: function (e, t) {
      var n = Ra(this, e);
      n ? (n[1] = t) : this.entries.push([e, t]);
    },
    delete: function (e) {
      var t = Ca(this.entries, function (t) {
        return t[0] === e;
      });
      return ~t && Ta(this.entries, t, 1), !!~t;
    },
  };
  var Pa,
    Da = {
      getConstructor: function (e, t, n, r) {
        var o = e(function (e, o) {
            ba(e, i),
              Sa(e, { type: t, id: Na++, frozen: void 0 }),
              null != o && ya(o, e[r], { that: e, AS_ENTRIES: n });
          }),
          i = o.prototype,
          a = ka(t),
          s = function (e, t, n) {
            var r = a(e),
              o = Ea(Oe(t), !0);
            return !0 === o ? Ma(r).set(t, n) : (o[r.id] = n), e;
          };
        return (
          na(i, {
            delete: function (e) {
              var t = a(this);
              if (!me(e)) return !1;
              var n = Ea(e);
              return !0 === n
                ? Ma(t).delete(e)
                : n && q(n, t.id) && delete n[t.id];
            },
            has: function (e) {
              var t = a(this);
              if (!me(e)) return !1;
              var n = Ea(e);
              return !0 === n ? Ma(t).has(e) : n && q(n, t.id);
            },
          }),
          na(
            i,
            n
              ? {
                  get: function (e) {
                    var t = a(this);
                    if (me(e)) {
                      var n = Ea(e);
                      return !0 === n ? Ma(t).get(e) : n ? n[t.id] : void 0;
                    }
                  },
                  set: function (e, t) {
                    return s(this, e, t);
                  },
                }
              : {
                  add: function (e) {
                    return s(this, e, !0);
                  },
                }
          ),
          o
        );
      },
    },
    ja = ct.enforce,
    Aa = !R.ActiveXObject && "ActiveXObject" in R,
    _a = function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Fa = xa("WeakMap", _a, Da);
  if (Qe && Aa) {
    (Pa = Da.getConstructor(_a, "WeakMap", !0)), pa.enable();
    var Ia = Fa.prototype,
      Ba = W(Ia.delete),
      $a = W(Ia.has),
      Wa = W(Ia.get),
      Va = W(Ia.set);
    na(Ia, {
      delete: function (e) {
        if (me(e) && !fa(e)) {
          var t = ja(this);
          return (
            t.frozen || (t.frozen = new Pa()), Ba(this, e) || t.frozen.delete(e)
          );
        }
        return Ba(this, e);
      },
      has: function (e) {
        if (me(e) && !fa(e)) {
          var t = ja(this);
          return (
            t.frozen || (t.frozen = new Pa()), $a(this, e) || t.frozen.has(e)
          );
        }
        return $a(this, e);
      },
      get: function (e) {
        if (me(e) && !fa(e)) {
          var t = ja(this);
          return (
            t.frozen || (t.frozen = new Pa()),
            $a(this, e) ? Wa(this, e) : t.frozen.get(e)
          );
        }
        return Wa(this, e);
      },
      set: function (e, t) {
        if (me(e) && !fa(e)) {
          var n = ja(this);
          n.frozen || (n.frozen = new Pa()),
            $a(this, e) ? Va(this, e, t) : n.frozen.set(e, t);
        } else Va(this, e, t);
        return this;
      },
    });
  }
  var za = he("iterator"),
    Ha = he("toStringTag"),
    Ua = ta.values,
    Ka = function (e, t) {
      if (e) {
        if (e[za] !== Ua)
          try {
            Ue(e, za, Ua);
          } catch (t) {
            e[za] = Ua;
          }
        if ((e[Ha] || Ue(e, Ha, t), kt[t]))
          for (var n in ta)
            if (e[n] !== ta[n])
              try {
                Ue(e, n, ta[n]);
              } catch (t) {
                e[n] = ta[n];
              }
      }
    };
  for (var qa in kt) Ka(R[qa] && R[qa].prototype, qa);
  Ka(Tt, "DOMTokenList");
  var Ga = new WeakMap(),
    Ya = new WeakMap(),
    Ja = new WeakMap(),
    Xa = new WeakMap(),
    Qa = new WeakMap(),
    Za = new WeakMap(),
    es = new WeakMap(),
    ts = new WeakMap(),
    ns = new WeakMap(),
    rs = new WeakMap(),
    os = new WeakMap(),
    is = new WeakMap(),
    as = new WeakMap(),
    ss = new WeakMap(),
    ls = new WeakMap(),
    us = new WeakMap(),
    cs = new WeakMap(),
    fs = new WeakMap(),
    ds = new WeakMap(),
    ps = new WeakMap(),
    hs = new WeakMap(),
    gs = new WeakMap(),
    vs = new WeakMap(),
    ys = new WeakMap(),
    ms = new WeakMap(),
    bs = Zt.find,
    ws = "find",
    xs = !0;
  ws in [] &&
    Array(1).find(function () {
      xs = !1;
    }),
    _n(
      { target: "Array", proto: !0, forced: xs },
      {
        find: function (e) {
          return bs(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
    No(ws),
    _n({ global: !0 }, { globalThis: R });
  const Es = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "nextid",
    "param",
    "source",
    "track",
    "wbr",
  ];
  r.css && (y.default.fn.css = r.css),
    r.append && (y.default.fn.append = r.append),
    r.addClass && (y.default.fn.addClass = r.addClass),
    r.removeClass && (y.default.fn.removeClass = r.removeClass),
    r.hasClass && (y.default.fn.hasClass = r.hasClass),
    r.on && (y.default.fn.on = r.on),
    r.focus && (y.default.fn.focus = r.focus),
    r.attr && (y.default.fn.attr = r.attr),
    r.removeAttr && (y.default.fn.removeAttr = r.removeAttr),
    r.hide && (y.default.fn.hide = r.hide),
    r.show && (y.default.fn.show = r.show),
    r.offset && (y.default.fn.offset = r.offset),
    r.width && (y.default.fn.width = r.width),
    r.height && (y.default.fn.height = r.height),
    r.parent && (y.default.fn.parent = r.parent),
    r.parents && (y.default.fn.parents = r.parents),
    r.is && (y.default.fn.is = r.is),
    r.dataset && (y.default.fn.dataset = r.dataset),
    r.val && (y.default.fn.val = r.val),
    r.text && (y.default.fn.text = r.text),
    r.html && (y.default.fn.html = r.html),
    r.children && (y.default.fn.children = r.children),
    r.remove && (y.default.fn.remove = r.remove),
    r.find && (y.default.fn.find = r.find),
    r.each && (y.default.fn.each = r.each);
  var Ss,
    ks = function (e) {
      return (e && e.ownerDocument && e.ownerDocument.defaultView) || null;
    },
    Os = function (e) {
      return Cs(e) && 1 === e.nodeType;
    },
    Cs = function (e) {
      var t = ks(e);
      return !!t && e instanceof t.Node;
    },
    Ts = function (e) {
      var t = e && e.anchorNode && ks(e.anchorNode);
      return !!t && e instanceof t.Selection;
    },
    Ns = function (e) {
      return Cs(e) && 3 === e.nodeType;
    },
    Ms = function (e) {
      var t, n, r;
      return null !== (t = window.document.getElementById(e)) && void 0 !== t
        ? t
        : (null ===
            (r =
              null === (n = window.document.activeElement) || void 0 === n
                ? void 0
                : n.shadowRoot) || void 0 === r
            ? void 0
            : r.getElementById(e)) || null;
    },
    Ls = function (e, t, n) {
      for (
        var r, o = e.childNodes, i = o[t], a = t, s = !1, l = !1;
        ((Cs((r = i)) && 8 === r.nodeType) ||
          (Os(i) && 0 === i.childNodes.length) ||
          (Os(i) && "false" === i.getAttribute("contenteditable"))) &&
        (!s || !l);

      )
        a >= o.length
          ? ((s = !0), (a = t - 1), (n = "backward"))
          : a < 0
          ? ((l = !0), (a = t + 1), (n = "forward"))
          : ((i = o[a]), (t = a), (a += "forward" === n ? 1 : -1));
      return [i, t];
    },
    Rs = function (e, t, n) {
      return Gi(Ls(e, t, n), 1)[0];
    },
    Ps = function e(t) {
      var n,
        r,
        o = "";
      if (Ns(t) && t.nodeValue) return t.nodeValue;
      if (Os(t)) {
        try {
          for (
            var i = qi(Array.from(t.childNodes)), a = i.next();
            !a.done;
            a = i.next()
          ) {
            o += e(a.value);
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            a && !a.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        var s = getComputedStyle(t).getPropertyValue("display");
        ("block" !== s &&
          "list" !== s &&
          "table-row" !== s &&
          "BR" !== t.tagName) ||
          (o += "\n");
      }
      return o;
    };
  function Ds(e, t) {
    if (!(e instanceof HTMLElement && "true" === e.dataset.slateVoid))
      for (var n = e.childNodes, r = n.length; r--; ) {
        var o = n[r],
          i = o.nodeType;
        3 == i ? t(o, e) : (1 != i && 9 != i && 11 != i) || Ds(o, t);
      }
  }
  function js(e) {
    if (0 === e.length) return "";
    var t = e[0];
    return t.nodeType !== Ss.ELEMENT_NODE ? "" : t.tagName.toLowerCase();
  }
  !(function (e) {
    (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
      (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
      (e[(e.CDATA_SECTION_NODE = 4)] = "CDATA_SECTION_NODE"),
      (e[(e.PROCESSING_INSTRUCTION_NODE = 7)] = "PROCESSING_INSTRUCTION_NODE"),
      (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE"),
      (e[(e.DOCUMENT_NODE = 9)] = "DOCUMENT_NODE"),
      (e[(e.DOCUMENT_TYPE_NODE = 10)] = "DOCUMENT_TYPE_NODE"),
      (e[(e.DOCUMENT_FRAGMENT_NODE = 11)] = "DOCUMENT_FRAGMENT_NODE");
  })(Ss || (Ss = {})),
    void 0 !== globalThis.navigator &&
      void 0 !== globalThis.window &&
      /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      globalThis.window.MSStream;
  var As =
      "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
    _s =
      "undefined" != typeof navigator &&
      /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
  "undefined" != typeof navigator &&
    /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])).*/i.test(
      navigator.userAgent
    );
  var Fs =
      "undefined" != typeof navigator &&
      /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    Is =
      "undefined" != typeof navigator &&
      /Edge?\/(?:[0-6][0-9]|[0-7][0-8])/i.test(navigator.userAgent),
    Bs =
      "undefined" != typeof navigator &&
      /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])/i.test(navigator.userAgent),
    $s = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent);
  "undefined" != typeof navigator && /.*QQBrowser/.test(navigator.userAgent);
  var Ws =
      !Bs &&
      !Is &&
      "undefined" != typeof globalThis &&
      globalThis.InputEvent &&
      "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    Vs = {
      getWindow: function (e) {
        var t = hs.get(e);
        if (!t)
          throw new Error(
            "Unable to find a host window element for this editor"
          );
        return t;
      },
      findKey: function (e, t) {
        var n = ps.get(t);
        return n || ((n = new Xi()), ps.set(t, n)), n;
      },
      setNewKey: function (e) {
        var t = new Xi();
        ps.set(e, t);
      },
      findPath: function (e, n) {
        for (var r = [], o = n; ; ) {
          var i = ls.get(o);
          if (null == i) {
            if (t.Editor.isEditor(o)) return r;
            break;
          }
          var a = ss.get(o);
          if (null == a) break;
          r.unshift(a), (o = i);
        }
        throw new Error(
          "Unable to find the path for Slate node: " + JSON.stringify(n)
        );
      },
      findDocumentOrShadowRoot: function (e) {
        if (e.isDestroyed) return window.document;
        var t = Vs.toDOMNode(e, e),
          n = t.getRootNode();
        return (n instanceof Document || n instanceof ShadowRoot) &&
          null != n.getSelection
          ? n
          : t.ownerDocument;
      },
      getParentNode: function (e, t) {
        return ls.get(t) || null;
      },
      getParentsNodes: function (e, t) {
        for (var n = [], r = t; r !== e && null != r; ) {
          var o = Vs.getParentNode(e, r);
          if (null == o) break;
          n.push(o), (r = o);
        }
        return n;
      },
      getTopNode: function (e, n) {
        var r = [Vs.findPath(e, n)[0]];
        return t.Node.get(e, r);
      },
      toDOMNode: function (e, n) {
        var r;
        if (t.Editor.isEditor(n)) r = us.get(e);
        else {
          var o = Vs.findKey(e, n);
          r = fs.get(o);
        }
        if (!r)
          throw new Error(
            "Cannot resolve a DOM node from Slate node: " + JSON.stringify(n)
          );
        return r;
      },
      hasDOMNode: function (e, t, n) {
        void 0 === n && (n = {});
        var r,
          o = n.editable,
          i = void 0 !== o && o,
          a = Vs.toDOMNode(e, e);
        try {
          r = Os(t) ? t : t.parentElement;
        } catch (e) {
          if (
            !e.message.includes(
              'Permission denied to access property "nodeType"'
            )
          )
            throw e;
        }
        return (
          !!r &&
          r.closest("[data-slate-editor]") === a &&
          (!i ||
            r.isContentEditable ||
            !!r.getAttribute("data-slate-zero-width"))
        );
      },
      toDOMRange: function (e, n) {
        var r = n.anchor,
          o = n.focus,
          i = t.Range.isBackward(n),
          a = Vs.toDOMPoint(e, r),
          s = t.Range.isCollapsed(n) ? a : Vs.toDOMPoint(e, o),
          l = Vs.getWindow(e).document.createRange(),
          u = Gi(i ? s : a, 2),
          c = u[0],
          f = u[1],
          d = Gi(i ? a : s, 2),
          p = d[0],
          h = d[1],
          g = !!(Os(c) ? c : c.parentElement).getAttribute(
            "data-slate-zero-width"
          ),
          v = !!(Os(p) ? p : p.parentElement).getAttribute(
            "data-slate-zero-width"
          );
        return l.setStart(c, g ? 1 : f), l.setEnd(p, v ? 1 : h), l;
      },
      toDOMPoint: function (e, n) {
        var r,
          o,
          i,
          a = Gi(t.Editor.node(e, n.path), 1)[0],
          s = Vs.toDOMNode(e, a);
        t.Editor.void(e, { at: n }) && (n = { path: n.path, offset: 0 });
        var l = Array.from(
            s.querySelectorAll("[data-slate-string], [data-slate-zero-width]")
          ),
          u = 0;
        try {
          for (var c = qi(l), f = c.next(); !f.done; f = c.next()) {
            var d = f.value,
              p = d.childNodes[0];
            if (null != p && null != p.textContent) {
              var h = p.textContent.length,
                g = d.getAttribute("data-slate-length"),
                v = u + (null == g ? h : parseInt(g, 10));
              if (n.offset <= v) {
                i = [p, Math.min(h, Math.max(0, n.offset - u))];
                break;
              }
              u = v;
            }
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            f && !f.done && (o = c.return) && o.call(c);
          } finally {
            if (r) throw r.error;
          }
        }
        if (!i)
          throw new Error(
            "Cannot resolve a DOM point from Slate point: " + JSON.stringify(n)
          );
        return i;
      },
      toSlateNode: function (e, t) {
        var n = Os(t) ? t : t.parentElement;
        n &&
          !n.hasAttribute("data-slate-node") &&
          (n = n.closest("[data-slate-node]"));
        var r = n ? cs.get(n) : null;
        if (!r)
          throw new Error("Cannot resolve a Slate node from DOM node: " + n);
        return r;
      },
      findEventRange: function (e, n) {
        "nativeEvent" in n && (n = n.nativeEvent);
        var r = n.clientX,
          o = n.clientY,
          i = n.target;
        if (null == r || null == o)
          throw new Error(
            "Cannot resolve a Slate range from a DOM event: " + n
          );
        var a,
          s = Vs.toSlateNode(e, n.target),
          l = Vs.findPath(e, s);
        if (t.Editor.isVoid(e, s)) {
          var u = i.getBoundingClientRect(),
            c = e.isInline(s)
              ? r - u.left < u.left + u.width - r
              : o - u.top < u.top + u.height - o,
            f = t.Editor.point(e, l, { edge: c ? "start" : "end" }),
            d = c ? t.Editor.before(e, f) : t.Editor.after(e, f);
          if (d) return t.Editor.range(e, d);
        }
        var p = this.getWindow(e).document;
        if (p.caretRangeFromPoint) a = p.caretRangeFromPoint(r, o);
        else {
          var h = p.caretPositionFromPoint(r, o);
          h &&
            ((a = p.createRange()).setStart(h.offsetNode, h.offset),
            a.setEnd(h.offsetNode, h.offset));
        }
        if (!a)
          throw new Error(
            "Cannot resolve a Slate range from a DOM event: " + n
          );
        return Vs.toSlateRange(e, a, { exactMatch: !1, suppressThrow: !1 });
      },
      toSlateRange: function (e, n, r) {
        var o,
          i,
          a,
          s,
          l,
          u = r.exactMatch,
          c = r.suppressThrow;
        if (
          ((Ts(n) ? n.anchorNode : n.startContainer) &&
            (Ts(n)
              ? ((o = n.anchorNode),
                (i = n.anchorOffset),
                (a = n.focusNode),
                (s = n.focusOffset),
                (l =
                  $s &&
                  window.document.activeElement &&
                  window.document.activeElement.shadowRoot
                    ? n.anchorNode === n.focusNode &&
                      n.anchorOffset === n.focusOffset
                    : n.isCollapsed))
              : ((o = n.startContainer),
                (i = n.startOffset),
                (a = n.endContainer),
                (s = n.endOffset),
                (l = n.collapsed))),
          null == o || null == a || null == i || null == s)
        )
          throw new Error("Cannot resolve a Slate range from DOM range: " + n);
        var f = Vs.toSlatePoint(e, [o, i], { exactMatch: u, suppressThrow: c });
        if (!f) return null;
        var d = l
          ? f
          : Vs.toSlatePoint(e, [a, s], { exactMatch: u, suppressThrow: c });
        if (!d) return null;
        var p = { anchor: f, focus: d };
        return (
          t.Range.isExpanded(p) &&
            t.Range.isForward(p) &&
            Os(a) &&
            t.Editor.void(e, { at: p.focus, mode: "highest" }) &&
            (p = t.Editor.unhangRange(e, p, { voids: !0 })),
          p
        );
      },
      toSlatePoint: function (e, t, n) {
        var r,
          o = n.exactMatch,
          i = n.suppressThrow,
          a = Gi(
            o
              ? t
              : (function (e) {
                  var t,
                    n = Gi(e, 2),
                    r = n[0],
                    o = n[1];
                  if (Os(r) && r.childNodes.length) {
                    var i = o === r.childNodes.length,
                      a = i ? o - 1 : o;
                    for (
                      r = (t = Gi(Ls(r, a, i ? "backward" : "forward"), 2))[0],
                        i = (a = t[1]) < o;
                      Os(r) && r.childNodes.length;

                    ) {
                      var s = i ? r.childNodes.length - 1 : 0;
                      r = Rs(r, s, i ? "backward" : "forward");
                    }
                    o = i && null != r.textContent ? r.textContent.length : 0;
                  }
                  return [r, o];
                })(t),
            2
          ),
          s = a[0],
          l = a[1],
          u = s.parentNode,
          c = null,
          f = 0;
        if (u) {
          var d = u.closest('[data-slate-void="true"]'),
            p = u.closest("[data-slate-leaf]"),
            h = null;
          if (p) {
            c = p.closest('[data-slate-node="text"]');
            var g = Vs.getWindow(e).document.createRange();
            g.setStart(c, 0), g.setEnd(s, l);
            var y = g.cloneContents();
            Yi(
              Yi(
                [],
                Gi(v.default(y.querySelectorAll("[data-slate-zero-width]")))
              ),
              Gi(v.default(y.querySelectorAll("[contenteditable=false]")))
            ).forEach(function (e) {
              e.parentNode.removeChild(e);
            }),
              (f = y.textContent.length),
              (h = c);
          } else
            d &&
              ((p = d.querySelector("[data-slate-leaf]"))
                ? ((c = p.closest('[data-slate-node="text"]')),
                  (f = (h = p).textContent.length),
                  h
                    .querySelectorAll("[data-slate-zero-width]")
                    .forEach(function (e) {
                      f -= e.textContent.length;
                    }))
                : (f = 1));
          h &&
            f === h.textContent.length &&
            (u.hasAttribute("data-slate-zero-width") ||
              (_s &&
                (null === (r = h.textContent) || void 0 === r
                  ? void 0
                  : r.endsWith("\n")))) &&
            f--;
        }
        if (!c) {
          if (i) return null;
          throw new Error("Cannot resolve a Slate point from DOM point: " + t);
        }
        var m = Vs.toSlateNode(e, c);
        return { path: Vs.findPath(e, m), offset: f };
      },
      hasRange: function (e, n) {
        var r = n.anchor,
          o = n.focus;
        return t.Editor.hasPath(e, r.path) && t.Editor.hasPath(e, o.path);
      },
      getNodeType: function (e) {
        return t.Element.isElement(e) ? e.type : "";
      },
      checkNodeType: function (e, t) {
        return this.getNodeType(e) === t;
      },
      getNodesStr: function (e) {
        return e
          .map(function (e) {
            return t.Node.string(e);
          })
          .join("");
      },
      getSelectedElems: function (e) {
        var n,
          r,
          o = [],
          i = t.Editor.nodes(e, { universal: !0 });
        try {
          for (var a = qi(i), s = a.next(); !s.done; s = a.next()) {
            var l = Gi(s.value, 1)[0];
            t.Element.isElement(l) && o.push(l);
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            s && !s.done && (r = a.return) && r.call(a);
          } finally {
            if (n) throw n.error;
          }
        }
        return o;
      },
      getSelectedNodeByType: function (e, n) {
        var r = this,
          o = Gi(
            t.Editor.nodes(e, {
              match: function (e) {
                return r.checkNodeType(e, n);
              },
              universal: !0,
            }),
            1
          ),
          i = o[0];
        return null == i ? null : i[0];
      },
      getSelectedTextNode: function (e) {
        var n = Gi(
            t.Editor.nodes(e, {
              match: function (e) {
                return t.Text.isText(e);
              },
              universal: !0,
            }),
            1
          ),
          r = n[0];
        return null == r ? null : r[0];
      },
      isNodeSelected: function (e, n) {
        var r = Gi(
            t.Editor.nodes(e, {
              match: function (e) {
                return e === n;
              },
              universal: !0,
            }),
            1
          ),
          o = r[0];
        return null != o && Gi(o, 1)[0] === n;
      },
      isSelectionAtLineEnd: function (e, n) {
        var r = e.selection;
        return (
          !!r &&
          (t.Editor.isEnd(e, r.anchor, n) || t.Editor.isEnd(e, r.focus, n))
        );
      },
      getTextarea: function (e) {
        var t = Ga.get(e);
        if (null == t)
          throw new Error("Cannot find textarea instance by editor");
        return t;
      },
      getToolbar: function (e) {
        return Xa.get(e) || null;
      },
      getHoverbar: function (e) {
        return Za.get(e) || null;
      },
      normalizeContent: function (e) {
        e.children.forEach(function (t, n) {
          e.normalizeNode([t, [n]]);
        });
      },
      getLeftLengthOfMaxLength: function (e) {
        var t = e.getConfig(),
          n = t.maxLength,
          r = t.onMaxLength;
        if ("number" != typeof n || n <= 0) return 1 / 0;
        var o = n - e.getText().replace(/\r|\n|(\r\n)/g, "").length;
        return o <= 0 && r && r(e), o;
      },
      cleanExposedTexNodeInSelectionBlock: function (e) {
        var n,
          r,
          o,
          i,
          a = Vs.getTextarea(e).$textArea,
          s = null == a ? void 0 : a[0].childNodes;
        if (s)
          try {
            for (
              var l = qi(Array.from(s)), u = l.next();
              !u.done;
              u = l.next()
            ) {
              var c = u.value;
              if (3 !== c.nodeType) break;
              c.remove();
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              u && !u.done && (r = l.return) && r.call(l);
            } finally {
              if (n) throw n.error;
            }
          }
        var f = t.Editor.nodes(e, {
          match: function (n) {
            return !(!t.Element.isElement(n) || e.isInline(n));
          },
          universal: !0,
        });
        try {
          for (var d = qi(f), p = d.next(); !p.done; p = d.next()) {
            var h = p.value;
            if (null != h) {
              var g = h[0];
              Ds(Vs.toDOMNode(e, g), function (e, t) {
                var n = y.default(t);
                n.attr("data-slate-string") ||
                  n.attr("data-slate-zero-width") ||
                  t.removeChild(e);
              });
            }
          }
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            p && !p.done && (i = d.return) && i.call(d);
          } finally {
            if (o) throw o.error;
          }
        }
      },
    },
    zs = 1,
    Hs = {};
  var Us = {};
  var Ks = he("species"),
    qs = function (e) {
      var t = ee(e),
        n = ze.f;
      ye &&
        t &&
        !t[Ks] &&
        n(t, Ks, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Gs = ze.f,
    Ys = pa.fastKey,
    Js = ct.set,
    Xs = ct.getterFor,
    Qs = {
      getConstructor: function (e, t, n, r) {
        var o = e(function (e, o) {
            ba(e, i),
              Js(e, {
                type: t,
                index: kr(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              ye || (e.size = 0),
              null != o && ya(o, e[r], { that: e, AS_ENTRIES: n });
          }),
          i = o.prototype,
          a = Xs(t),
          s = function (e, t, n) {
            var r,
              o,
              i = a(e),
              s = l(e, t);
            return (
              s
                ? (s.value = n)
                : ((i.last = s =
                    {
                      index: (o = Ys(t, !0)),
                      key: t,
                      value: n,
                      previous: (r = i.last),
                      next: void 0,
                      removed: !1,
                    }),
                  i.first || (i.first = s),
                  r && (r.next = s),
                  ye ? i.size++ : e.size++,
                  "F" !== o && (i.index[o] = s)),
              e
            );
          },
          l = function (e, t) {
            var n,
              r = a(e),
              o = Ys(t);
            if ("F" !== o) return r.index[o];
            for (n = r.first; n; n = n.next) if (n.key == t) return n;
          };
        return (
          na(i, {
            clear: function () {
              for (var e = a(this), t = e.index, n = e.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete t[n.index],
                  (n = n.next);
              (e.first = e.last = void 0), ye ? (e.size = 0) : (this.size = 0);
            },
            delete: function (e) {
              var t = this,
                n = a(t),
                r = l(t, e);
              if (r) {
                var o = r.next,
                  i = r.previous;
                delete n.index[r.index],
                  (r.removed = !0),
                  i && (i.next = o),
                  o && (o.previous = i),
                  n.first == r && (n.first = o),
                  n.last == r && (n.last = i),
                  ye ? n.size-- : t.size--;
              }
              return !!r;
            },
            forEach: function (e) {
              for (
                var t,
                  n = a(this),
                  r = Mt(e, arguments.length > 1 ? arguments[1] : void 0);
                (t = t ? t.next : n.first);

              )
                for (r(t.value, t.key, this); t && t.removed; ) t = t.previous;
            },
            has: function (e) {
              return !!l(this, e);
            },
          }),
          na(
            i,
            n
              ? {
                  get: function (e) {
                    var t = l(this, e);
                    return t && t.value;
                  },
                  set: function (e, t) {
                    return s(this, 0 === e ? 0 : e, t);
                  },
                }
              : {
                  add: function (e) {
                    return s(this, (e = 0 === e ? 0 : e), e);
                  },
                }
          ),
          ye &&
            Gs(i, "size", {
              get: function () {
                return a(this).size;
              },
            }),
          o
        );
      },
      setStrong: function (e, t, n) {
        var r = t + " Iterator",
          o = Xs(t),
          i = Xs(r);
        Xr(
          e,
          t,
          function (e, t) {
            Js(this, {
              type: r,
              target: e,
              state: o(e),
              kind: t,
              last: void 0,
            });
          },
          function () {
            for (var e = i(this), t = e.kind, n = e.last; n && n.removed; )
              n = n.previous;
            return e.target && (e.last = n = n ? n.next : e.state.first)
              ? "keys" == t
                ? { value: n.key, done: !1 }
                : "values" == t
                ? { value: n.value, done: !1 }
                : { value: [n.key, n.value], done: !1 }
              : ((e.target = void 0), { value: void 0, done: !0 });
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          qs(t);
      },
    };
  xa(
    "Set",
    function (e) {
      return function () {
        return e(this, arguments.length ? arguments[0] : void 0);
      };
    },
    Qs
  );
  var Zs = Zt.filter,
    el = In("filter");
  _n(
    { target: "Array", proto: !0, forced: !el },
    {
      filter: function (e) {
        return Zs(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var tl = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    nl = W("".replace),
    rl = "[" + tl + "]",
    ol = RegExp("^" + rl + rl + "*"),
    il = RegExp(rl + rl + "*$"),
    al = function (e) {
      return function (t) {
        var n = sr(z(t));
        return 1 & e && (n = nl(n, ol, "")), 2 & e && (n = nl(n, il, "")), n;
      };
    },
    sl = { start: al(1), end: al(2), trim: al(3) },
    ll = ht.PROPER,
    ul = sl.trim;
  _n(
    {
      target: "String",
      proto: !0,
      forced: (function (e) {
        return se(function () {
          return !!tl[e]() || "​᠎" !== "​᠎"[e]() || (ll && tl[e].name !== e);
        });
      })("trim"),
    },
    {
      trim: function () {
        return ul(this);
      },
    }
  );
  var cl = R.TypeError,
    fl = he("species"),
    dl = function (e, t) {
      var n,
        r = Oe(e).constructor;
      return void 0 === r || null == (n = Oe(r)[fl])
        ? t
        : (function (e) {
            if (qt(e)) return e;
            throw cl(Pe(e) + " is not a constructor");
          })(n);
    },
    pl = Zo.UNSUPPORTED_Y,
    hl = 4294967295,
    gl = Math.min,
    vl = [].push,
    yl = W(/./.exec),
    ml = W(vl),
    bl = W("".slice),
    wl = !se(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    });
  Si(
    "split",
    function (e, t, n) {
      var r;
      return (
        (r =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (e, n) {
                var r = sr(z(this)),
                  o = void 0 === n ? hl : n >>> 0;
                if (0 === o) return [];
                if (void 0 === e) return [r];
                if (!Ro(e)) return Te(t, r, e, o);
                for (
                  var i,
                    a,
                    s,
                    l = [],
                    u =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    c = 0,
                    f = new RegExp(e.source, u + "g");
                  (i = Te(gi, f, r)) &&
                  !(
                    (a = f.lastIndex) > c &&
                    (ml(l, bl(r, c, i.index)),
                    i.length > 1 && i.index < r.length && wi(vl, l, ia(i, 1)),
                    (s = i[0].length),
                    (c = a),
                    l.length >= o)
                  );

                )
                  f.lastIndex === i.index && f.lastIndex++;
                return (
                  c === r.length
                    ? (!s && yl(f, "")) || ml(l, "")
                    : ml(l, bl(r, c)),
                  l.length > o ? ia(l, 0, o) : l
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : Te(t, this, e, n);
              }
            : t),
        [
          function (t, n) {
            var o = z(this),
              i = null == t ? void 0 : Ae(t, e);
            return i ? Te(i, t, o, n) : Te(r, sr(o), t, n);
          },
          function (e, o) {
            var i = Oe(this),
              a = sr(e),
              s = n(r, i, a, o, r !== t);
            if (s.done) return s.value;
            var l = dl(i, RegExp),
              u = i.unicode,
              c =
                (i.ignoreCase ? "i" : "") +
                (i.multiline ? "m" : "") +
                (i.unicode ? "u" : "") +
                (pl ? "g" : "y"),
              f = new l(pl ? "^(?:" + i.source + ")" : i, c),
              d = void 0 === o ? hl : o >>> 0;
            if (0 === d) return [];
            if (0 === a.length) return null === ji(f, a) ? [a] : [];
            for (var p = 0, h = 0, g = []; h < a.length; ) {
              f.lastIndex = pl ? 0 : h;
              var v,
                y = ji(f, pl ? bl(a, h) : a);
              if (
                null === y ||
                (v = gl(Ft(f.lastIndex + (pl ? h : 0)), a.length)) === p
              )
                h = Oi(a, h, u);
              else {
                if ((ml(g, bl(a, p, h)), g.length === d)) return g;
                for (var m = 1; m <= y.length - 1; m++)
                  if ((ml(g, y[m]), g.length === d)) return g;
                h = p = v;
              }
            }
            return ml(g, bl(a, p)), g;
          },
        ]
      );
    },
    !wl,
    pl
  );
  var xl = [];
  var El = {};
  function Sl(e, t, n) {
    var r = n.isInline(e) ? "span" : "div";
    return "<" + r + ">" + t + "</" + r + ">";
  }
  function kl(e, n) {
    var r = e.type,
      o = void 0 === r ? "" : r,
      i = e.children,
      a = void 0 === i ? [] : i,
      s = t.Editor.isVoid(n, e),
      l = "";
    s ||
      (l = a
        .map(function (e) {
          return Xu(e, n);
        })
        .join(""));
    var u = (function (e) {
        return El[e] || Sl;
      })(o),
      c = u(e, l, n);
    return (
      s ||
        xl.forEach(function (t) {
          return (c = t(e, c));
        }),
      c
    );
  }
  var Ol,
    Cl,
    Tl,
    Nl,
    Ml = R.Promise,
    Ll = W([].slice),
    Rl = /(?:ipad|iphone|ipod).*applewebkit/i.test(te),
    Pl = "process" == mt(R.process),
    Dl = R.setImmediate,
    jl = R.clearImmediate,
    Al = R.process,
    _l = R.Dispatch,
    Fl = R.Function,
    Il = R.MessageChannel,
    Bl = R.String,
    $l = 0,
    Wl = {},
    Vl = "onreadystatechange";
  try {
    Ol = R.location;
  } catch (e) {}
  var zl = function (e) {
      if (q(Wl, e)) {
        var t = Wl[e];
        delete Wl[e], t();
      }
    },
    Hl = function (e) {
      return function () {
        zl(e);
      };
    },
    Ul = function (e) {
      zl(e.data);
    },
    Kl = function (e) {
      R.postMessage(Bl(e), Ol.protocol + "//" + Ol.host);
    };
  (Dl && jl) ||
    ((Dl = function (e) {
      var t = Ll(arguments, 1);
      return (
        (Wl[++$l] = function () {
          wi(Q(e) ? e : Fl(e), void 0, t);
        }),
        Cl($l),
        $l
      );
    }),
    (jl = function (e) {
      delete Wl[e];
    }),
    Pl
      ? (Cl = function (e) {
          Al.nextTick(Hl(e));
        })
      : _l && _l.now
      ? (Cl = function (e) {
          _l.now(Hl(e));
        })
      : Il && !Rl
      ? ((Nl = (Tl = new Il()).port2),
        (Tl.port1.onmessage = Ul),
        (Cl = Mt(Nl.postMessage, Nl)))
      : R.addEventListener &&
        Q(R.postMessage) &&
        !R.importScripts &&
        Ol &&
        "file:" !== Ol.protocol &&
        !se(Kl)
      ? ((Cl = Kl), R.addEventListener("message", Ul, !1))
      : (Cl =
          Vl in xe("script")
            ? function (e) {
                gr.appendChild(xe("script")).onreadystatechange = function () {
                  gr.removeChild(this), zl(e);
                };
              }
            : function (e) {
                setTimeout(Hl(e), 0);
              }));
  var ql,
    Gl,
    Yl,
    Jl,
    Xl,
    Ql,
    Zl,
    eu,
    tu = { set: Dl, clear: jl },
    nu = /ipad|iphone|ipod/i.test(te) && void 0 !== R.Pebble,
    ru = /web0s(?!.*chrome)/i.test(te),
    ou = dn.f,
    iu = tu.set,
    au = R.MutationObserver || R.WebKitMutationObserver,
    su = R.document,
    lu = R.process,
    uu = R.Promise,
    cu = ou(R, "queueMicrotask"),
    fu = cu && cu.value;
  fu ||
    ((ql = function () {
      var e, t;
      for (Pl && (e = lu.domain) && e.exit(); Gl; ) {
        (t = Gl.fn), (Gl = Gl.next);
        try {
          t();
        } catch (e) {
          throw (Gl ? Jl() : (Yl = void 0), e);
        }
      }
      (Yl = void 0), e && e.enter();
    }),
    Rl || Pl || ru || !au || !su
      ? !nu && uu && uu.resolve
        ? (((Zl = uu.resolve(void 0)).constructor = uu),
          (eu = Mt(Zl.then, Zl)),
          (Jl = function () {
            eu(ql);
          }))
        : Pl
        ? (Jl = function () {
            lu.nextTick(ql);
          })
        : ((iu = Mt(iu, R)),
          (Jl = function () {
            iu(ql);
          }))
      : ((Xl = !0),
        (Ql = su.createTextNode("")),
        new au(ql).observe(Ql, { characterData: !0 }),
        (Jl = function () {
          Ql.data = Xl = !Xl;
        })));
  var du,
    pu,
    hu,
    gu,
    vu =
      fu ||
      function (e) {
        var t = { fn: e, next: void 0 };
        Yl && (Yl.next = t), Gl || ((Gl = t), Jl()), (Yl = t);
      },
    yu = function (e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = je(t)),
        (this.reject = je(n));
    },
    mu = {
      f: function (e) {
        return new yu(e);
      },
    },
    bu = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    },
    wu = "object" == typeof window,
    xu = tu.set,
    Eu = he("species"),
    Su = "Promise",
    ku = ct.getterFor(Su),
    Ou = ct.set,
    Cu = ct.getterFor(Su),
    Tu = Ml && Ml.prototype,
    Nu = Ml,
    Mu = Tu,
    Lu = R.TypeError,
    Ru = R.document,
    Pu = R.process,
    Du = mu.f,
    ju = Du,
    Au = !!(Ru && Ru.createEvent && R.dispatchEvent),
    _u = Q(R.PromiseRejectionEvent),
    Fu = "unhandledrejection",
    Iu = !1,
    Bu = jn(Su, function () {
      var e = Je(Nu),
        t = e !== String(Nu);
      if (!t && 66 === ae) return !0;
      if (ae >= 51 && /native code/.test(e)) return !1;
      var n = new Nu(function (e) {
          e(1);
        }),
        r = function (e) {
          e(
            function () {},
            function () {}
          );
        };
      return (
        ((n.constructor = {})[Eu] = r),
        !(Iu = n.then(function () {}) instanceof r) || (!t && wu && !_u)
      );
    }),
    $u =
      Bu ||
      !rr(function (e) {
        Nu.all(e).catch(function () {});
      }),
    Wu = function (e) {
      var t;
      return !(!me(e) || !Q((t = e.then))) && t;
    },
    Vu = function (e, t) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        vu(function () {
          for (var r = e.value, o = 1 == e.state, i = 0; n.length > i; ) {
            var a,
              s,
              l,
              u = n[i++],
              c = o ? u.ok : u.fail,
              f = u.resolve,
              d = u.reject,
              p = u.domain;
            try {
              c
                ? (o || (2 === e.rejection && Ku(e), (e.rejection = 1)),
                  !0 === c
                    ? (a = r)
                    : (p && p.enter(), (a = c(r)), p && (p.exit(), (l = !0))),
                  a === u.promise
                    ? d(Lu("Promise-chain cycle"))
                    : (s = Wu(a))
                    ? Te(s, a, f, d)
                    : f(a))
                : d(r);
            } catch (e) {
              p && !l && p.exit(), d(e);
            }
          }
          (e.reactions = []), (e.notified = !1), t && !e.rejection && Hu(e);
        });
      }
    },
    zu = function (e, t, n) {
      var r, o;
      Au
        ? (((r = Ru.createEvent("Event")).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          R.dispatchEvent(r))
        : (r = { promise: t, reason: n }),
        !_u && (o = R["on" + e])
          ? o(r)
          : e === Fu &&
            (function (e, t) {
              var n = R.console;
              n &&
                n.error &&
                (1 == arguments.length ? n.error(e) : n.error(e, t));
            })("Unhandled promise rejection", n);
    },
    Hu = function (e) {
      Te(xu, R, function () {
        var t,
          n = e.facade,
          r = e.value;
        if (
          Uu(e) &&
          ((t = bu(function () {
            Pl ? Pu.emit("unhandledRejection", r, n) : zu(Fu, n, r);
          })),
          (e.rejection = Pl || Uu(e) ? 2 : 1),
          t.error)
        )
          throw t.value;
      });
    },
    Uu = function (e) {
      return 1 !== e.rejection && !e.parent;
    },
    Ku = function (e) {
      Te(xu, R, function () {
        var t = e.facade;
        Pl
          ? Pu.emit("rejectionHandled", t)
          : zu("rejectionhandled", t, e.value);
      });
    },
    qu = function (e, t, n) {
      return function (r) {
        e(t, r, n);
      };
    },
    Gu = function (e, t, n) {
      e.done ||
        ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), Vu(e, !0));
    },
    Yu = function (e, t, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (e.facade === t) throw Lu("Promise can't be resolved itself");
          var r = Wu(t);
          r
            ? vu(function () {
                var n = { done: !1 };
                try {
                  Te(r, t, qu(Yu, n, e), qu(Gu, n, e));
                } catch (t) {
                  Gu(n, t, e);
                }
              })
            : ((e.value = t), (e.state = 1), Vu(e, !1));
        } catch (t) {
          Gu({ done: !1 }, t, e);
        }
      }
    };
  if (
    Bu &&
    ((Mu = (Nu = function (e) {
      ba(this, Mu), je(e), Te(du, this);
      var t = ku(this);
      try {
        e(qu(Yu, t), qu(Gu, t));
      } catch (e) {
        Gu(t, e);
      }
    }).prototype),
    ((du = function (e) {
      Ou(this, {
        type: Su,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = na(Mu, {
      then: function (e, t) {
        var n = Cu(this),
          r = n.reactions,
          o = Du(dl(this, Nu));
        return (
          (o.ok = !Q(e) || e),
          (o.fail = Q(t) && t),
          (o.domain = Pl ? Pu.domain : void 0),
          (n.parent = !0),
          (r[r.length] = o),
          0 != n.state && Vu(n, !1),
          o.promise
        );
      },
      catch: function (e) {
        return this.then(void 0, e);
      },
    })),
    (pu = function () {
      var e = new du(),
        t = ku(e);
      (this.promise = e), (this.resolve = qu(Yu, t)), (this.reject = qu(Gu, t));
    }),
    (mu.f = Du =
      function (e) {
        return e === Nu || e === hu ? new pu(e) : ju(e);
      }),
    Q(Ml) && Tu !== Object.prototype)
  ) {
    (gu = Tu.then),
      Iu ||
        (gt(
          Tu,
          "then",
          function (e, t) {
            var n = this;
            return new Nu(function (e, t) {
              Te(gu, n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        gt(Tu, "catch", Mu.catch, { unsafe: !0 }));
    try {
      delete Tu.constructor;
    } catch (e) {}
    Wr && Wr(Tu, Mu);
  }
  function Ju(e) {
    Promise.resolve().then(e);
  }
  function Xu(e, n) {
    return t.Element.isElement(e)
      ? kl(e, n)
      : (function (e, t) {
          var n = e.text;
          if (null == n)
            throw new Error(
              "Current node is not slate Text " + JSON.stringify(e)
            );
          var r = n;
          r = (function (e) {
            return e
              .replace(/ /g, "&nbsp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/®/g, "&reg;")
              .replace(/©/g, "&copy;")
              .replace(/™/g, "&trade;");
          })(r);
          var o = Vs.getParentsNodes(t, e).some(function (e) {
            return "pre" === Vs.getNodeType(e);
          });
          if (
            (o || (r = r.replace(/\r\n|\r|\n/g, "<br>")),
            o && (r = r.replace(/&nbsp;/g, " ")),
            "" === r)
          ) {
            var i = Vs.getParentNode(null, e);
            if (!i || 0 !== i.children.length) return r;
            r = "<br>";
          }
          return (
            xl.forEach(function (t) {
              return (r = t(e, r));
            }),
            r
          );
        })(e, n);
  }
  function Qu(e) {
    return "w-e-element-" + e;
  }
  _n({ global: !0, wrap: !0, forced: Bu }, { Promise: Nu }),
    _r(Nu, Su, !1),
    qs(Su),
    (hu = ee(Su)),
    _n(
      { target: Su, stat: !0, forced: Bu },
      {
        reject: function (e) {
          var t = Du(this);
          return Te(t.reject, void 0, e), t.promise;
        },
      }
    ),
    _n(
      { target: Su, stat: !0, forced: Bu },
      {
        resolve: function (e) {
          return (function (e, t) {
            if ((Oe(e), me(t) && t.constructor === e)) return t;
            var n = mu.f(e);
            return (0, n.resolve)(t), n.promise;
          })(this, e);
        },
      }
    ),
    _n(
      { target: Su, stat: !0, forced: $u },
      {
        all: function (e) {
          var t = this,
            n = Du(t),
            r = n.resolve,
            o = n.reject,
            i = bu(function () {
              var n = je(t.resolve),
                i = [],
                a = 0,
                s = 1;
              ya(e, function (e) {
                var l = a++,
                  u = !1;
                s++,
                  Te(n, t, e).then(function (e) {
                    u || ((u = !0), (i[l] = e), --s || r(i));
                  }, o);
              }),
                --s || r(i);
            });
          return i.error && o(i.value), n.promise;
        },
        race: function (e) {
          var t = this,
            n = Du(t),
            r = n.reject,
            o = bu(function () {
              var o = je(t.resolve);
              ya(e, function (e) {
                Te(o, t, e).then(n.resolve, r);
              });
            });
          return o.error && r(o.value), n.promise;
        },
      }
    );
  var Zu = function (e, t) {
      var n = (t.top + t.bottom) / 2;
      return e.top <= n && e.bottom >= n;
    },
    ec = function (e, t, n) {
      var r = Vs.toDOMRange(e, t).getBoundingClientRect(),
        o = Vs.toDOMRange(e, n).getBoundingClientRect();
      return Zu(r, o) && Zu(o, r);
    },
    tc = [
      "span",
      "b",
      "strong",
      "i",
      "em",
      "s",
      "strike",
      "u",
      "font",
      "sub",
      "sup",
    ],
    nc = [];
  var rc = [];
  var oc = {};
  var ic = ze.f,
    ac = Sn.f,
    sc = ct.enforce,
    lc = he("match"),
    uc = R.RegExp,
    cc = uc.prototype,
    fc = R.SyntaxError,
    dc = W(mo),
    pc = W(cc.exec),
    hc = W("".charAt),
    gc = W("".replace),
    vc = W("".indexOf),
    yc = W("".slice),
    mc = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
    bc = /a/g,
    wc = /a/g,
    xc = new uc(bc) !== bc,
    Ec = Zo.MISSED_STICKY,
    Sc = Zo.UNSUPPORTED_Y,
    kc =
      ye &&
      (!xc ||
        Ec ||
        ti ||
        ri ||
        se(function () {
          return (
            (wc[lc] = !1), uc(bc) != bc || uc(wc) == wc || "/a/i" != uc(bc, "i")
          );
        }));
  if (jn("RegExp", kc)) {
    for (
      var Oc = function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s,
            l = Ne(cc, this),
            u = Ro(e),
            c = void 0 === t,
            f = [],
            d = e;
          if (!l && u && c && e.constructor === Oc) return e;
          if (
            ((u || Ne(cc, e)) &&
              ((e = e.source), c && (t = ("flags" in d) ? d.flags : dc(d))),
            (e = void 0 === e ? "" : sr(e)),
            (t = void 0 === t ? "" : sr(t)),
            (d = e),
            ti &&
              ("dotAll" in bc) &&
              (r = !!t && vc(t, "s") > -1) &&
              (t = gc(t, /s/g, "")),
            (n = t),
            Ec &&
              ("sticky" in bc) &&
              (o = !!t && vc(t, "y") > -1) &&
              Sc &&
              (t = gc(t, /y/g, "")),
            ri &&
              ((i = (function (e) {
                for (
                  var t,
                    n = e.length,
                    r = 0,
                    o = "",
                    i = [],
                    a = {},
                    s = !1,
                    l = !1,
                    u = 0,
                    c = "";
                  r <= n;
                  r++
                ) {
                  if ("\\" === (t = hc(e, r))) t += hc(e, ++r);
                  else if ("]" === t) s = !1;
                  else if (!s)
                    switch (!0) {
                      case "[" === t:
                        s = !0;
                        break;
                      case "(" === t:
                        pc(mc, yc(e, r + 1)) && ((r += 2), (l = !0)),
                          (o += t),
                          u++;
                        continue;
                      case ">" === t && l:
                        if ("" === c || q(a, c))
                          throw new fc("Invalid capture group name");
                        (a[c] = !0), (i[i.length] = [c, u]), (l = !1), (c = "");
                        continue;
                    }
                  l ? (c += t) : (o += t);
                }
                return [o, i];
              })(e)),
              (e = i[0]),
              (f = i[1])),
            (a = wa(uc(e, t), l ? this : cc, Oc)),
            (r || o || f.length) &&
              ((s = sc(a)),
              r &&
                ((s.dotAll = !0),
                (s.raw = Oc(
                  (function (e) {
                    for (
                      var t, n = e.length, r = 0, o = "", i = !1;
                      r <= n;
                      r++
                    )
                      "\\" !== (t = hc(e, r))
                        ? i || "." !== t
                          ? ("[" === t ? (i = !0) : "]" === t && (i = !1),
                            (o += t))
                          : (o += "[\\s\\S]")
                        : (o += t + hc(e, ++r));
                    return o;
                  })(e),
                  n
                ))),
              o && (s.sticky = !0),
              f.length && (s.groups = f)),
            e !== d)
          )
            try {
              Ue(a, "source", "" === d ? "(?:)" : d);
            } catch (e) {}
          return a;
        },
        Cc = function (e) {
          (e in Oc) ||
            ic(Oc, e, {
              configurable: !0,
              get: function () {
                return uc[e];
              },
              set: function (t) {
                uc[e] = t;
              },
            });
        },
        Tc = ac(uc),
        Nc = 0;
      Tc.length > Nc;

    )
      Cc(Tc[Nc++]);
    (cc.constructor = Oc), (Oc.prototype = cc), gt(R, "RegExp", Oc);
  }
  qs("RegExp");
  var Mc = new RegExp(String.fromCharCode(160), "g");
  function Lc(e) {
    return e.replace(Mc, " ");
  }
  function Rc(e, n) {
    var r = e.length;
    if (r) {
      var o = e[r - 1];
      if (t.Text.isText(o)) {
        var i = Object.keys(o);
        if (1 === i.length && "text" === i[0]) return (o.text = o.text + n), !0;
      }
    }
    return !1;
  }
  function Pc(e, t, n) {
    return {
      type: "paragraph",
      children: [{ text: y.default(e).text().replace(/\s+/gm, " ") }],
    };
  }
  function Dc(e, n) {
    var r = (function (e, t) {
        var n = [];
        if (null != e.attr("data-w-e-is-void")) return n;
        var r = e[0].childNodes;
        return 1 === r.length && "BR" === r[0].nodeName
          ? (n.push({ text: "" }), n)
          : (r.forEach(function (e) {
              if (e.nodeType !== Ss.ELEMENT_NODE)
                if (e.nodeType !== Ss.TEXT_NODE);
                else {
                  var r = e.textContent || "";
                  if ("" === r.trim() && r.indexOf("\n") >= 0) return;
                  r && ((r = Lc(r)), Rc(n, r) || n.push({ text: r }));
                }
              else {
                if ("BR" === e.nodeName)
                  return void (Rc(n, "\n") || n.push({ text: "\n" }));
                var o = y.default(e);
                n.push(Ac(o, t));
              }
            }),
            n);
      })(e, n),
      o = (function (e) {
        for (var t in oc) if (e[0].matches(t)) return oc[t];
        return Pc;
      })(e),
      i = o(e[0], r, n);
    return (
      t.Editor.isVoid(n, i) ||
        (0 === r.length &&
          (i.children = [{ text: e.text().replace(/\s+/gm, " ") }]),
        rc.forEach(function (t) {
          i = t(e[0], i);
        })),
      i
    );
  }
  function jc(e, t) {
    0 === e.parents("pre").length &&
      (e[0].innerHTML = e[0].innerHTML
        .replace(/\s+/gm, " ")
        .replace(/<br>/g, "\n"));
    var n = e[0].textContent || "";
    n = (function (e) {
      return e
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&reg;/g, "®")
        .replace(/&copy;/g, "©")
        .replace(/&trade;/g, "™");
    })(n);
    var r = { text: (n = Lc(n)) };
    return (
      rc.forEach(function (t) {
        r = t(e[0], r);
      }),
      r
    );
  }
  function Ac(e, t) {
    nc.forEach(function (t) {
      var n = t.selector,
        r = t.preParseHtml;
      e[0].matches(n) && (e = y.default(r(e[0])));
    });
    var n = js(e);
    return "span" === n
      ? e.attr("data-w-e-type")
        ? Dc(e, t)
        : jc(e)
      : "code" === n
      ? "pre" === js(e.parent())
        ? Dc(e, t)
        : jc(e)
      : tc.includes(n)
      ? jc(e)
      : Dc(e, t);
  }
  var _c = new Set([
      "doctype",
      "!doctype",
      "meta",
      "script",
      "style",
      "link",
      "frame",
      "iframe",
      "title",
      "svg",
    ]),
    Fc = function (e) {
      var n = e,
        r = n.onChange;
      n.insertText;
      var o = n.apply,
        i = n.deleteBackward;
      return (
        (n.apply = function (e) {
          var r,
            i,
            a,
            s,
            l,
            u,
            c,
            f,
            d = [];
          if (!n.getConfig().readOnly) {
            switch (e.type) {
              case "insert_text":
              case "remove_text":
              case "set_node":
                try {
                  for (
                    var p = qi(t.Editor.levels(n, { at: e.path })),
                      h = p.next();
                    !h.done;
                    h = p.next()
                  ) {
                    var g = Gi(h.value, 2),
                      v = g[0],
                      y = g[1],
                      m = Vs.findKey(n, v);
                    d.push([y, m]);
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    h && !h.done && (i = p.return) && i.call(p);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                break;
              case "insert_node":
              case "remove_node":
              case "merge_node":
              case "split_node":
                try {
                  for (
                    var b = qi(
                        t.Editor.levels(n, { at: t.Path.parent(e.path) })
                      ),
                      w = b.next();
                    !w.done;
                    w = b.next()
                  ) {
                    var x = Gi(w.value, 2);
                    (v = x[0]), (y = x[1]), (m = Vs.findKey(n, v));
                    d.push([y, m]);
                  }
                } catch (e) {
                  a = { error: e };
                } finally {
                  try {
                    w && !w.done && (s = b.return) && s.call(b);
                  } finally {
                    if (a) throw a.error;
                  }
                }
                break;
              case "move_node":
                try {
                  for (
                    var E = qi(
                        t.Editor.levels(n, {
                          at: t.Path.common(
                            t.Path.parent(e.path),
                            t.Path.parent(e.newPath)
                          ),
                        })
                      ),
                      S = E.next();
                    !S.done;
                    S = E.next()
                  ) {
                    var k = Gi(S.value, 2);
                    (v = k[0]), (y = k[1]), (m = Vs.findKey(n, v));
                    d.push([y, m]);
                  }
                } catch (e) {
                  l = { error: e };
                } finally {
                  try {
                    S && !S.done && (u = E.return) && u.call(E);
                  } finally {
                    if (l) throw l.error;
                  }
                }
            }
            o(e);
            try {
              for (var O = qi(d), C = O.next(); !C.done; C = O.next()) {
                var T = Gi(C.value, 2);
                (y = T[0]), (m = T[1]), (v = Gi(t.Editor.node(n, y), 1)[0]);
                ps.set(v, m);
              }
            } catch (e) {
              c = { error: e };
            } finally {
              try {
                C && !C.done && (f = O.return) && f.call(O);
              } finally {
                if (c) throw c.error;
              }
            }
          }
        }),
        (n.deleteBackward = function (r) {
          if ("line" !== r) return i(r);
          if (e.selection && t.Range.isCollapsed(e.selection)) {
            var o = t.Editor.above(e, {
              match: function (n) {
                return t.Editor.isBlock(e, n);
              },
              at: e.selection,
            });
            if (o) {
              var a = Gi(o, 2)[1],
                s = t.Editor.range(e, a, e.selection.anchor),
                l = (function (e, n) {
                  var r = t.Editor.range(e, t.Range.end(n)),
                    o = Array.from(t.Editor.positions(e, { at: n })),
                    i = 0,
                    a = o.length,
                    s = Math.floor(a / 2);
                  if (ec(e, t.Editor.range(e, o[i]), r))
                    return t.Editor.range(e, o[i], r);
                  if (o.length < 2)
                    return t.Editor.range(e, o[o.length - 1], r);
                  for (; s !== o.length && s !== i; )
                    ec(e, t.Editor.range(e, o[s]), r) ? (a = s) : (i = s),
                      (s = Math.floor((i + a) / 2));
                  return t.Editor.range(e, o[a], r);
                })(n, s);
              t.Range.isCollapsed(l) || t.Transforms.delete(e, { at: l });
            }
          }
        }),
        (n.onChange = function () {
          var e = n.selection;
          null != e && vs.set(n, e), n.emit("change"), r();
        }),
        (n.handleTab = function () {
          n.insertText("    ");
        }),
        (n.getHtml = function () {
          var e = n.children;
          return (void 0 === e ? [] : e)
            .map(function (e) {
              return Xu(e, n);
            })
            .join("");
        }),
        (n.getText = function () {
          var e = n.children;
          return (void 0 === e ? [] : e)
            .map(function (e) {
              return t.Node.string(e);
            })
            .join("\n");
        }),
        (n.getSelectionText = function () {
          var r = n.selection;
          return null == r ? "" : t.Editor.string(e, r);
        }),
        (n.getElemsByType = function (e, r) {
          var o, i;
          void 0 === r && (r = !1);
          var a = [],
            s = t.Editor.nodes(n, { at: [], universal: !0 });
          try {
            for (var l = qi(s), u = l.next(); !u.done; u = l.next()) {
              var c = Gi(u.value, 1)[0];
              if (t.Element.isElement(c))
                if (r ? c.type.indexOf(e) >= 0 : c.type === e) {
                  var f = Qu(Vs.findKey(n, c).id);
                  a.push(Ki(Ki({}, c), { id: f }));
                }
            }
          } catch (e) {
            o = { error: e };
          } finally {
            try {
              u && !u.done && (i = l.return) && i.call(l);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        }),
        (n.getElemsByTypePrefix = function (e) {
          return n.getElemsByType(e, !0);
        }),
        (n.isEmpty = function () {
          var e = n.children,
            r = void 0 === e ? [] : e;
          if (r.length > 1) return !1;
          var o = r[0];
          if (null == o) return !0;
          if (t.Element.isElement(o) && "paragraph" === o.type) {
            var i = o.children,
              a = void 0 === i ? [] : i;
            if (a.length > 1) return !1;
            var s = a[0];
            if (null == s) return !0;
            if (t.Text.isText(s) && "" === s.text) return !0;
          }
          return !1;
        }),
        (n.clear = function () {
          t.Transforms.removeNodes(n, {
            at: { anchor: t.Editor.start(n, []), focus: t.Editor.end(n, []) },
            mode: "highest",
          }),
            0 === n.children.length &&
              t.Transforms.insertNodes(n, [
                { type: "paragraph", children: [{ text: "" }] },
              ]);
        }),
        (n.getParentNode = function (e) {
          return Vs.getParentNode(n, e);
        }),
        (n.dangerouslyInsertHtml = function (e) {
          if ((void 0 === e && (e = ""), e)) {
            var t = y.default(e);
            if (
              0 !==
              (t = t.filter(function (e) {
                if (e.nodeType !== Ss.ELEMENT_NODE) return !1;
                var t = js(y.default(e));
                return !_c.has(t);
              })).length
            ) {
              var r = y.default('<div hidden="true"></div>');
              r.append(t), y.default("body").append(r);
              var o = [];
              t.forEach(function (e) {
                var t = !1;
                if (tc.includes(e.tagName.toLowerCase())) t = !0;
                else
                  for (var r in oc)
                    if (e.matches(r)) {
                      t = !0;
                      break;
                    }
                if (t) {
                  var i = y.default(e);
                  o.push(Ac(i, n));
                } else {
                  var a = Ps(e).trim();
                  if (a)
                    a.split(/\r\n|\r|\n/).forEach(function (e, t) {
                      e.trim() &&
                        o.push({ type: "paragraph", children: [{ text: e }] });
                    });
                }
              }),
                o.length && n.insertFragment(o),
                r.remove();
            }
          }
        }),
        n
      );
    },
    Ic = function (e) {
      return null != e;
    },
    Bc = { object: !0, function: !0, undefined: !0 },
    $c = function (e) {
      if (
        !(function (e) {
          return !!Ic(e) && hasOwnProperty.call(Bc, typeof e);
        })(e)
      )
        return !1;
      try {
        return !!e.constructor && e.constructor.prototype === e;
      } catch (e) {
        return !1;
      }
    },
    Wc = /^\s*class[\s{/}]/,
    Vc = Function.prototype.toString,
    zc = function (e) {
      return (
        !!(function (e) {
          if ("function" != typeof e) return !1;
          if (!hasOwnProperty.call(e, "length")) return !1;
          try {
            if ("number" != typeof e.length) return !1;
            if ("function" != typeof e.call) return !1;
            if ("function" != typeof e.apply) return !1;
          } catch (e) {
            return !1;
          }
          return !$c(e);
        })(e) && !Wc.test(Vc.call(e))
      );
    },
    Hc = function (e) {
      return null != e;
    },
    Uc = Object.keys,
    Kc = (function () {
      try {
        return Object.keys("primitive"), !0;
      } catch (e) {
        return !1;
      }
    })()
      ? Object.keys
      : function (e) {
          return Uc(Hc(e) ? Object(e) : e);
        },
    qc = function (e) {
      if (!Hc(e)) throw new TypeError("Cannot use null or undefined");
      return e;
    },
    Gc = Math.max,
    Yc = (function () {
      var e,
        t = Object.assign;
      return (
        "function" == typeof t &&
        (t((e = { foo: "raz" }), { bar: "dwa" }, { trzy: "trzy" }),
        e.foo + e.bar + e.trzy === "razdwatrzy")
      );
    })()
      ? Object.assign
      : function (e, t) {
          var n,
            r,
            o,
            i = Gc(arguments.length, 2);
          for (
            e = Object(qc(e)),
              o = function (r) {
                try {
                  e[r] = t[r];
                } catch (e) {
                  n || (n = e);
                }
              },
              r = 1;
            r < i;
            ++r
          )
            Kc((t = arguments[r])).forEach(o);
          if (void 0 !== n) throw n;
          return e;
        },
    Jc = Array.prototype.forEach,
    Xc = Object.create,
    Qc = function (e, t) {
      var n;
      for (n in e) t[n] = e[n];
    },
    Zc = function (e) {
      var t = Xc(null);
      return (
        Jc.call(arguments, function (e) {
          Hc(e) && Qc(Object(e), t);
        }),
        t
      );
    },
    ef = "razdwatrzy",
    tf = String.prototype.indexOf,
    nf =
      "function" == typeof ef.contains &&
      !0 === ef.contains("dwa") &&
      !1 === ef.contains("foo")
        ? String.prototype.contains
        : function (e) {
            return tf.call(this, e, arguments[1]) > -1;
          },
    rf = T(function (e) {
      var t = (e.exports = function (e, t) {
        var n, r, o, i, a;
        return (
          arguments.length < 2 || "string" != typeof e
            ? ((i = t), (t = e), (e = null))
            : (i = arguments[2]),
          Ic(e)
            ? ((n = nf.call(e, "c")),
              (r = nf.call(e, "e")),
              (o = nf.call(e, "w")))
            : ((n = o = !0), (r = !1)),
          (a = { value: t, configurable: n, enumerable: r, writable: o }),
          i ? Yc(Zc(i), a) : a
        );
      });
      t.gs = function (e, t, n) {
        var r, o, i, a;
        return (
          "string" != typeof e
            ? ((i = n), (n = t), (t = e), (e = null))
            : (i = arguments[3]),
          Ic(t)
            ? zc(t)
              ? Ic(n)
                ? zc(n) || ((i = n), (n = void 0))
                : (n = void 0)
              : ((i = t), (t = n = void 0))
            : (t = void 0),
          Ic(e)
            ? ((r = nf.call(e, "c")), (o = nf.call(e, "e")))
            : ((r = !0), (o = !1)),
          (a = { get: t, set: n, configurable: r, enumerable: o }),
          i ? Yc(Zc(i), a) : a
        );
      };
    }),
    of = function (e) {
      if ("function" != typeof e) throw new TypeError(e + " is not a function");
      return e;
    },
    af = T(function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        s,
        l,
        u = Function.prototype.apply,
        c = Function.prototype.call,
        f = Object.create,
        d = Object.defineProperty,
        p = Object.defineProperties,
        h = Object.prototype.hasOwnProperty,
        g = { configurable: !0, enumerable: !1, writable: !0 };
      (n = function (e, t) {
        var n;
        return (
          of(t),
          h.call(this, "__ee__")
            ? (n = this.__ee__)
            : ((n = g.value = f(null)), d(this, "__ee__", g), (g.value = null)),
          n[e]
            ? "object" == typeof n[e]
              ? n[e].push(t)
              : (n[e] = [n[e], t])
            : (n[e] = t),
          this
        );
      }),
        (r = function (e, t) {
          var r, i;
          return (
            of(t),
            (i = this),
            n.call(
              this,
              e,
              (r = function () {
                o.call(i, e, r), u.call(t, this, arguments);
              })
            ),
            (r.__eeOnceListener__ = t),
            this
          );
        }),
        (o = function (e, t) {
          var n, r, o, i;
          if ((of(t), !h.call(this, "__ee__"))) return this;
          if (!(n = this.__ee__)[e]) return this;
          if ("object" == typeof (r = n[e]))
            for (i = 0; (o = r[i]); ++i)
              (o !== t && o.__eeOnceListener__ !== t) ||
                (2 === r.length ? (n[e] = r[i ? 0 : 1]) : r.splice(i, 1));
          else (r !== t && r.__eeOnceListener__ !== t) || delete n[e];
          return this;
        }),
        (i = function (e) {
          var t, n, r, o, i;
          if (h.call(this, "__ee__") && (o = this.__ee__[e]))
            if ("object" == typeof o) {
              for (
                n = arguments.length, i = new Array(n - 1), t = 1;
                t < n;
                ++t
              )
                i[t - 1] = arguments[t];
              for (o = o.slice(), t = 0; (r = o[t]); ++t) u.call(r, this, i);
            } else
              switch (arguments.length) {
                case 1:
                  c.call(o, this);
                  break;
                case 2:
                  c.call(o, this, arguments[1]);
                  break;
                case 3:
                  c.call(o, this, arguments[1], arguments[2]);
                  break;
                default:
                  for (
                    n = arguments.length, i = new Array(n - 1), t = 1;
                    t < n;
                    ++t
                  )
                    i[t - 1] = arguments[t];
                  u.call(o, this, i);
              }
        }),
        (a = { on: n, once: r, off: o, emit: i }),
        (s = { on: rf(n), once: rf(r), off: rf(o), emit: rf(i) }),
        (l = p({}, s)),
        (e.exports = t =
          function (e) {
            return null == e ? f(l) : p(Object(e), s);
          }),
        (t.methods = a);
    });
  function sf(e) {
    var t = ys.get(e);
    return null == t && ((t = af()), ys.set(e, t)), t;
  }
  var lf = new WeakMap();
  function uf(e, t) {
    var n = lf.get(e);
    null == n && ((n = new Set()), lf.set(e, n)), n.add(t);
  }
  function cf(e) {
    return lf.get(e) || new Set();
  }
  function ff(e) {
    lf.set(e, new Set());
  }
  function df(e) {
    var t = Vs.getTextarea(e).$textAreaContainer,
      n = t.width(),
      r = t.height(),
      o = t.offset();
    return { top: o.top, left: o.left, width: n, height: r };
  }
  function pf(e) {
    var t = { top: "0", left: "0" },
      n = e.selection;
    if (null == n) return t;
    var r = df(e);
    if (null == r) return t;
    var o = r.top,
      i = r.left,
      a = r.width,
      s = r.height,
      l = Vs.toDOMRange(e, n).getClientRects()[0];
    if (null == l) return t;
    l.width;
    var u = l.height,
      c = {},
      f = l.top - o,
      d = l.left - i;
    if (d > a / 2) {
      var p = a - d;
      c.right = p + 5 + "px";
    } else c.left = d + 5 + "px";
    if (f > s / 2) {
      var h = s - f;
      c.bottom = h + 5 + "px";
    } else {
      var g = f + u;
      g < 0 && (g = 0), (c.top = g + 5 + "px");
    }
    return c;
  }
  function hf(e, n, r) {
    void 0 === r && (r = "modal");
    var o = { top: "0", left: "0" };
    if (null == e.selection) return o;
    var i = t.Element.isElement(n) && e.isVoid(n),
      a = ds.get(n);
    if (null == a) return o;
    var s = a.getBoundingClientRect(),
      l = s.top,
      u = s.left,
      c = s.height,
      f = s.width;
    if (i) {
      var d = (function (e) {
        var t = [];
        t.push(e);
        for (var n = 0; t.length > 0; ) {
          var r = t.pop();
          if (null == r) break;
          if (++n > 1e4) break;
          var o = r.nodeName;
          if (1 === r.nodeType) {
            var i = o.toLowerCase();
            if (Es.includes(i) || "iframe" === i || "video" === i) return r;
            var a = r.children || [],
              s = a.length;
            if (s) for (var l = s - 1; l >= 0; l--) t.push(a[l]);
          }
        }
        return null;
      })(a);
      if (null != d) {
        var p = d.getBoundingClientRect();
        (l = p.top), (c = p.height);
      }
    }
    var h = df(e);
    if (null == h) return o;
    var g = h.top,
      v = h.left,
      y = h.width,
      m = h.height,
      b = {},
      w = l - g,
      x = u - v;
    if ("bar" === r)
      return (
        (b.left = x + "px"),
        w > 40 ? (b.bottom = m - w + 5 + "px") : (b.top = w + c + 5 + "px"),
        b
      );
    if ("modal" === r) {
      var E;
      if (
        (i
          ? x > (y - f) / 2
            ? (b.right = y - x + 5 + "px")
            : (b.left = x + f + 5 + "px")
          : (b.left = x + "px"),
        i)
      )
        (E = w) < 0 && (E = 0), (b.top = E + "px");
      else if (w > (m - c) / 2) b.bottom = m - w + 5 + "px";
      else (E = w + c) < 0 && (E = 0), (b.top = E + 5 + "px");
      return b;
    }
    throw new Error("type '" + r + "' is invalid");
  }
  function gf(e, t) {
    Ju(function () {
      var n = df(e);
      if (null != n) {
        var r,
          o = n.top,
          i = n.left,
          a = n.width,
          s = n.height,
          l = t.offset(),
          u = l.top,
          c = l.left,
          f = t.width(),
          d = t.height(),
          p = u - o,
          h = c - i,
          g = t.attr("style");
        if (g.indexOf("top") >= 0)
          if ((r = p + d - s) > 0) {
            var v = t.css("top"),
              y = parseInt(v.toString()) - r;
            y < 0 && (y = 0), t.css("top", y + "px");
          }
        if (g.indexOf("bottom") >= 0 && u < 0) {
          var m = t.css("bottom"),
            b = parseInt(m.toString()) - Math.abs(u);
          t.css("bottom", b + "px");
        }
        if (g.indexOf("left") >= 0)
          if ((r = h + f - a) > 0) {
            var w = t.css("left"),
              x = parseInt(w.toString()) - r;
            x < 0 && (x = 0), t.css("left", x + "px");
          }
        if (g.indexOf("right") >= 0 && c < 0) {
          var E = t.css("right"),
            S = parseInt(E.toString()) - Math.abs(c);
          t.css("right", S + "px");
        }
      }
    });
  }
  var vf = In("slice"),
    yf = he("species"),
    mf = R.Array,
    bf = Math.max;
  _n(
    { target: "Array", proto: !0, forced: !vf },
    {
      slice: function (e, t) {
        var n,
          r,
          o,
          i = cn(this),
          a = It(i),
          s = gn(e, a),
          l = gn(void 0 === t ? a : t, a);
        if (
          Bt(i) &&
          ((n = i.constructor),
          ((qt(n) && (n === mf || Bt(n.prototype))) ||
            (me(n) && null === (n = n[yf]))) &&
            (n = void 0),
          n === mf || void 0 === n)
        )
          return Ll(i, s, l);
        for (
          r = new (void 0 === n ? mf : n)(bf(l - s, 0)), o = 0;
          s < l;
          s++, o++
        )
          s in i && qn(r, o, i[s]);
        return (r.length = o), r;
      },
    }
  );
  var wf = dn.f,
    xf = W("".startsWith),
    Ef = W("".slice),
    Sf = Math.min,
    kf = Ao("startsWith"),
    Of =
      !kf &&
      !!(function () {
        var e = wf(String.prototype, "startsWith");
        return e && !e.writable;
      })();
  _n(
    { target: "String", proto: !0, forced: !Of && !kf },
    {
      startsWith: function (e) {
        var t = sr(z(this));
        Do(e);
        var n = Ft(Sf(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          r = sr(e);
        return xf ? xf(t, r, n) : Ef(t, n, n + r.length) === r;
      },
    }
  );
  var Cf = Object.assign,
    Tf = Object.defineProperty,
    Nf = W([].concat),
    Mf =
      !Cf ||
      se(function () {
        if (
          ye &&
          1 !==
            Cf(
              { b: 1 },
              Cf(
                Tf({}, "a", {
                  enumerable: !0,
                  get: function () {
                    Tf(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var e = {},
          t = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 != Cf({}, e)[n] || pr(Cf({}, t)).join("") != r
        );
      })
        ? function (e, t) {
            for (
              var n = U(e), r = arguments.length, o = 1, i = kn.f, a = un.f;
              r > o;

            )
              for (
                var s,
                  l = Pt(arguments[o++]),
                  u = i ? Nf(pr(l), i(l)) : pr(l),
                  c = u.length,
                  f = 0;
                c > f;

              )
                (s = u[f++]), (ye && !Te(a, l, s)) || (n[s] = l[s]);
            return n;
          }
        : Cf;
  _n(
    { target: "Object", stat: !0, forced: Object.assign !== Mf },
    { assign: Mf }
  );
  var Lf = ["props", "attrs", "style", "dataset", "on", "hook"];
  function Rf(e) {
    var t = e.data,
      n = void 0 === t ? {} : t,
      r = e.children,
      o = void 0 === r ? [] : r;
    Object.keys(n).forEach(function (t) {
      var r,
        o,
        i = n[t];
      if ("key" !== t) {
        if (!Lf.includes(t)) {
          if (t.startsWith("data-")) {
            var a = t.slice(5);
            return (
              (a = w.default(a)),
              (function (e, t) {
                null == e.data && (e.data = {});
                var n = e.data;
                null == n.dataset && (n.dataset = {});
                Object.assign(n.dataset, t);
              })(e, (((r = {})[a] = i), r)),
              void delete n[t]
            );
          }
          !(function (e, t) {
            null == e.data && (e.data = {});
            var n = e.data;
            null == n.props && (n.props = {});
            Object.assign(n.props, t);
          })(e, ((o = {}), (o[t] = i), o)),
            delete n[t];
        }
      } else e.key = i;
    }),
      o.length > 0 &&
        o.forEach(function (e) {
          "string" != typeof e && Rf(e);
        });
  }
  var Pf = [];
  var Df = {};
  function jf(e, t, n) {
    var r = n.isInline(e) ? "span" : "div";
    return s.jsx(r, null, t);
  }
  function Af(e, n) {
    var r,
      o = Vs.findKey(n, e),
      i = n.isInline(e),
      a = t.Editor.isVoid(n, e),
      l = Qu(o.id),
      u = {
        id: l,
        key: o.id,
        "data-slate-node": "element",
        "data-slate-inline": i,
      },
      c = e.type,
      f = e.children,
      d = void 0 === f ? [] : f,
      p = (function (e) {
        return Df[e] || jf;
      })(c);
    r = a
      ? null
      : d.map(function (t, r) {
          return Bf(t, r, e, n);
        });
    var h = p(e, r, n);
    if (a) {
      u["data-slate-void"] = !0;
      var g = i ? "span" : "div",
        v = Gi(t.Node.texts(e), 1),
        y = Gi(v[0], 1)[0],
        m = Bf(y, 0, e, n),
        b = s.jsx(
          g,
          {
            "data-slate-spacer": !0,
            style: {
              height: "0",
              color: "transparent",
              outline: "none",
              position: "absolute",
            },
          },
          m
        );
      (h = s.jsx(g, { style: { position: "relative" } }, h, b)),
        ss.set(y, 0),
        ls.set(y, e);
    }
    return (
      null == h.data && (h.data = {}),
      Object.assign(h.data, u),
      a ||
        i ||
        (h = (function (e, t) {
          var n = t;
          return (
            Pf.forEach(function (r) {
              n = r(e, t);
            }),
            n
          );
        })(e, h)),
      Ju(function () {
        var t = Ms(l);
        null != t && (fs.set(o, t), ds.set(e, t), cs.set(t, e));
      }),
      h
    );
  }
  function _f(e, t) {
    return (
      void 0 === t && (t = !1),
      s.jsx("span", { "data-slate-string": !0 }, t ? e + "\n" : e)
    );
  }
  function Ff(e, t) {
    return (
      void 0 === e && (e = 0),
      void 0 === t && (t = !1),
      s.jsx(
        "span",
        { "data-slate-zero-width": t ? "n" : "z", "data-slate-length": e },
        "\ufeff",
        t ? s.jsx("br", null) : null
      )
    );
  }
  function If(e, n, r) {
    if (null == e.text)
      throw new Error("Current node is not slate Text " + JSON.stringify(e));
    var o = Vs.findKey(r, e),
      i = r.getConfig().decorate;
    if (null == i) throw new Error("Can not get config.decorate");
    var a = Vs.findPath(r, e),
      l = i([e, a]),
      u = t.Text.decorations(e, l),
      c = u.map(function (o, i) {
        var a = (function (e, n, r, o, i) {
          void 0 === n && (n = !1);
          var a = e.text,
            s = Vs.findPath(i, r),
            l = t.Path.parent(s);
          if (t.Editor.isEditor(o))
            throw new Error(
              "Text node " + JSON.stringify(r) + " parent is Editor"
            );
          return i.isVoid(o)
            ? Ff(t.Node.string(o).length)
            : "" !== a ||
              o.children[o.children.length - 1] !== r ||
              i.isInline(o) ||
              "" !== t.Editor.string(i, l)
            ? "" === a
              ? Ff()
              : n && "\n" === a.slice(-1)
              ? _f(a, !0)
              : _f(a)
            : Ff(0, !0);
        })(o, i === u.length - 1, e, n, r);
        return (
          (a = (function (e, t) {
            var n = t;
            return (
              Pf.forEach(function (t) {
                n = t(e, n);
              }),
              n
            );
          })(o, a)),
          s.jsx("span", { "data-slate-leaf": !0 }, a)
        );
      }),
      f = (function (e) {
        return "w-e-text-" + e;
      })(o.id),
      d = s.jsx("span", { "data-slate-node": "text", id: f, key: o.id }, c);
    return (
      Ju(function () {
        var t = Ms(f);
        null != t && (fs.set(o, t), ds.set(e, t), cs.set(t, e));
      }),
      d
    );
  }
  function Bf(e, n, r, o) {
    return (
      ss.set(e, n),
      ls.set(e, r),
      t.Element.isElement(e) ? Af(e, o) : If(e, r, o)
    );
  }
  function $f(e, t) {
    var n,
      r = e.$scroll,
      o = (function (e) {
        return "w-e-textarea-" + e;
      })(e.id),
      i = t.getConfig(),
      a = i.readOnly,
      l = i.autoFocus,
      u = (function (e, t) {
        return (
          void 0 === t && (t = !1),
          s.h("div#" + e, { props: { contentEditable: !t } })
        );
      })(o, a),
      c = t.children || [];
    u.children = c.map(function (e, n) {
      var r = Bf(e, n, t, t);
      return Rf(r), r;
    });
    var f = os.get(e);
    if ((null == f && (f = !0), f)) {
      var d = (function (e, t) {
        return y.default(
          '<div\n        id="' +
            e +
            '"\n        data-slate-editor\n        data-slate-node="value"\n        suppressContentEditableWarning\n        role="textarea"\n        spellCheck="true"\n        autoCorrect="true"\n        autoCapitalize="true"\n    ></div>'
        );
      })(o);
      r.append(d),
        (e.$textArea = d),
        (n = d[0]),
        (h = s.init([
          s.classModule,
          s.propsModule,
          s.styleModule,
          s.datasetModule,
          s.eventListenersModule,
        ]))(n, u),
        os.set(e, !1),
        is.set(e, h);
    } else {
      var p = as.get(e),
        h = is.get(e);
      if (null == p || null == h) return;
      (n = p.elm), h(p, u);
    }
    if (null != n || null != (n = Ms(o))) {
      if (((f ? l : t.isFocused()) && n.focus({ preventScroll: !0 }), f)) {
        var g = ks(n);
        g && hs.set(t, g);
      }
      us.set(t, n), ds.set(t, n), cs.set(n, t), as.set(e, u);
    }
  }
  function Wf(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
  }
  function Vf(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
  }
  function zf(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      var n = getComputedStyle(e, null);
      return (
        Vf(n.overflowY, t) ||
        Vf(n.overflowX, t) ||
        (function (e) {
          var t = (function (e) {
            if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
            try {
              return e.ownerDocument.defaultView.frameElement;
            } catch (e) {
              return null;
            }
          })(e);
          return (
            !!t &&
            (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth)
          );
        })(e)
      );
    }
    return !1;
  }
  function Hf(e, t, n, r, o, i, a, s) {
    return (i < e && a > t) || (i > e && a < t)
      ? 0
      : (i <= e && s <= n) || (a >= t && s >= n)
      ? i - e - r
      : (a > t && s < n) || (i < e && s > n)
      ? a - t + o
      : 0;
  }
  var Uf = function (e, t) {
      var n = window,
        r = t.scrollMode,
        o = t.block,
        i = t.inline,
        a = t.boundary,
        s = t.skipOverflowHiddenElements,
        l =
          "function" == typeof a
            ? a
            : function (e) {
                return e !== a;
              };
      if (!Wf(e)) throw new TypeError("Invalid target");
      for (
        var u = document.scrollingElement || document.documentElement,
          c = [],
          f = e;
        Wf(f) && l(f);

      ) {
        if ((f = f.parentElement) === u) {
          c.push(f);
          break;
        }
        (null != f &&
          f === document.body &&
          zf(f) &&
          !zf(document.documentElement)) ||
          (null != f && zf(f, s) && c.push(f));
      }
      for (
        var d = n.visualViewport ? n.visualViewport.width : innerWidth,
          p = n.visualViewport ? n.visualViewport.height : innerHeight,
          h = window.scrollX || pageXOffset,
          g = window.scrollY || pageYOffset,
          v = e.getBoundingClientRect(),
          y = v.height,
          m = v.width,
          b = v.top,
          w = v.right,
          x = v.bottom,
          E = v.left,
          S =
            "start" === o || "nearest" === o ? b : "end" === o ? x : b + y / 2,
          k = "center" === i ? E + m / 2 : "end" === i ? w : E,
          O = [],
          C = 0;
        C < c.length;
        C++
      ) {
        var T = c[C],
          N = T.getBoundingClientRect(),
          M = N.height,
          L = N.width,
          R = N.top,
          P = N.right,
          D = N.bottom,
          j = N.left;
        if (
          "if-needed" === r &&
          b >= 0 &&
          E >= 0 &&
          x <= p &&
          w <= d &&
          b >= R &&
          x <= D &&
          E >= j &&
          w <= P
        )
          return O;
        var A = getComputedStyle(T),
          _ = parseInt(A.borderLeftWidth, 10),
          F = parseInt(A.borderTopWidth, 10),
          I = parseInt(A.borderRightWidth, 10),
          B = parseInt(A.borderBottomWidth, 10),
          $ = 0,
          W = 0,
          V = "offsetWidth" in T ? T.offsetWidth - T.clientWidth - _ - I : 0,
          z = "offsetHeight" in T ? T.offsetHeight - T.clientHeight - F - B : 0;
        if (u === T)
          ($ =
            "start" === o
              ? S
              : "end" === o
              ? S - p
              : "nearest" === o
              ? Hf(g, g + p, p, F, B, g + S, g + S + y, y)
              : S - p / 2),
            (W =
              "start" === i
                ? k
                : "center" === i
                ? k - d / 2
                : "end" === i
                ? k - d
                : Hf(h, h + d, d, _, I, h + k, h + k + m, m)),
            ($ = Math.max(0, $ + g)),
            (W = Math.max(0, W + h));
        else {
          ($ =
            "start" === o
              ? S - R - F
              : "end" === o
              ? S - D + B + z
              : "nearest" === o
              ? Hf(R, D, M, F, B + z, S, S + y, y)
              : S - (R + M / 2) + z / 2),
            (W =
              "start" === i
                ? k - j - _
                : "center" === i
                ? k - (j + L / 2) + V / 2
                : "end" === i
                ? k - P + I + V
                : Hf(j, P, L, _, I + V, k, k + m, m));
          var H = T.scrollLeft,
            U = T.scrollTop;
          (S += U - ($ = Math.max(0, Math.min(U + $, T.scrollHeight - M + z)))),
            (k +=
              H - (W = Math.max(0, Math.min(H + W, T.scrollWidth - L + V))));
        }
        O.push({ el: T, top: $, left: W });
      }
      return O;
    },
    Kf = T(function (e, t) {
      (t.__esModule = !0), (t.default = void 0);
      var n,
        r = (n = Uf) && n.__esModule ? n : { default: n };
      function o(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      var i = function (e, t) {
        var n = !e.ownerDocument.documentElement.contains(e);
        if (o(t) && "function" == typeof t.behavior)
          return t.behavior(n ? [] : (0, r.default)(e, t));
        if (!n) {
          var i = (function (e) {
            return !1 === e
              ? { block: "end", inline: "nearest" }
              : o(e)
              ? e
              : { block: "start", inline: "nearest" };
          })(t);
          return (function (e, t) {
            void 0 === t && (t = "auto");
            var n = "scrollBehavior" in document.body.style;
            e.forEach(function (e) {
              var r = e.el,
                o = e.top,
                i = e.left;
              r.scroll && n
                ? r.scroll({ top: o, left: i, behavior: t })
                : ((r.scrollTop = o), (r.scrollLeft = i));
            });
          })((0, r.default)(e, i), i.behavior);
        }
      };
      (t.default = i), (e.exports = t.default);
    }),
    qf = C(Kf);
  function Gf(e, t) {
    return Cs(t) && Vs.hasDOMNode(e, t, { editable: !0 });
  }
  function Yf(e, n) {
    if (e.getConfig().readOnly) return !1;
    var r = Jf(e, n) && Vs.toSlateNode(e, n);
    return t.Editor.isVoid(e, r);
  }
  function Jf(e, t) {
    return Cs(t) && Vs.hasDOMNode(e, t);
  }
  var Xf = new WeakMap(),
    Qf = new WeakMap();
  var Zf = {
      bold: "mod+b",
      compose: ["down", "left", "right", "up", "backspace", "enter"],
      moveBackward: "left",
      moveForward: "right",
      moveWordBackward: "ctrl+left",
      moveWordForward: "ctrl+right",
      deleteBackward: "shift?+backspace",
      deleteForward: "shift?+delete",
      extendBackward: "shift+left",
      extendForward: "shift+right",
      italic: "mod+i",
      splitBlock: "shift?+enter",
      undo: "mod+z",
      tab: "tab",
      selectAll: "mod+a",
    },
    ed = {
      moveLineBackward: "opt+up",
      moveLineForward: "opt+down",
      moveWordBackward: "opt+left",
      moveWordForward: "opt+right",
      deleteBackward: ["ctrl+backspace", "ctrl+h"],
      deleteForward: ["ctrl+delete", "ctrl+d"],
      deleteLineBackward: "cmd+shift?+backspace",
      deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
      deleteWordBackward: "opt+shift?+backspace",
      deleteWordForward: "opt+shift?+delete",
      extendLineBackward: "opt+shift+up",
      extendLineForward: "opt+shift+down",
      redo: "cmd+shift+z",
      transposeCharacter: "ctrl+t",
    },
    td = {
      deleteWordBackward: "ctrl+shift?+backspace",
      deleteWordForward: "ctrl+shift?+delete",
      redo: ["ctrl+y", "ctrl+shift+z"],
    },
    nd = function (e) {
      var t = Zf[e],
        n = ed[e],
        r = td[e],
        o = t && isKeyHotkey(t),
        i = n && isKeyHotkey(n),
        a = r && isKeyHotkey(r);
      return function (e) {
        return !(!o || !o(e)) || !!(As && i && i(e)) || !(As || !a || !a(e));
      };
    },
    rd = {
      isBold: nd("bold"),
      isCompose: nd("compose"),
      isMoveBackward: nd("moveBackward"),
      isMoveForward: nd("moveForward"),
      isDeleteBackward: nd("deleteBackward"),
      isDeleteForward: nd("deleteForward"),
      isDeleteLineBackward: nd("deleteLineBackward"),
      isDeleteLineForward: nd("deleteLineForward"),
      isDeleteWordBackward: nd("deleteWordBackward"),
      isDeleteWordForward: nd("deleteWordForward"),
      isExtendBackward: nd("extendBackward"),
      isExtendForward: nd("extendForward"),
      isExtendLineBackward: nd("extendLineBackward"),
      isExtendLineForward: nd("extendLineForward"),
      isItalic: nd("italic"),
      isMoveLineBackward: nd("moveLineBackward"),
      isMoveLineForward: nd("moveLineForward"),
      isMoveWordBackward: nd("moveWordBackward"),
      isMoveWordForward: nd("moveWordForward"),
      isRedo: nd("redo"),
      isSplitBlock: nd("splitBlock"),
      isTransposeCharacter: nd("transposeCharacter"),
      isUndo: nd("undo"),
      isTab: nd("tab"),
      isSelectAll: nd("selectAll"),
    };
  function od(e) {
    e.preventDefault();
  }
  var id = {
      beforeinput: function (e, n, r) {
        var o = e,
          i = r.getConfig().readOnly;
        if (Ws && !i && Gf(r, o.target)) {
          var a = r.selection,
            s = o.inputType,
            l = o.dataTransfer || o.data || void 0;
          if ("insertCompositionText" !== s && "deleteCompositionText" !== s) {
            if (
              (o.preventDefault(),
              !s.startsWith("delete") || s.startsWith("deleteBy"))
            ) {
              var u = Gi(o.getTargetRanges(), 1)[0];
              if (u) {
                var c = Vs.toSlateRange(r, u, {
                  exactMatch: !1,
                  suppressThrow: !1,
                });
                (a && t.Range.equals(a, c)) || t.Transforms.select(r, c);
              }
            }
            if (a && t.Range.isExpanded(a) && s.startsWith("delete")) {
              var f = s.endsWith("Backward") ? "backward" : "forward";
              t.Editor.deleteFragment(r, { direction: f });
            } else
              switch (s) {
                case "deleteByComposition":
                case "deleteByCut":
                case "deleteByDrag":
                  t.Editor.deleteFragment(r);
                  break;
                case "deleteContent":
                case "deleteContentForward":
                  t.Editor.deleteForward(r);
                  break;
                case "deleteContentBackward":
                  t.Editor.deleteBackward(r);
                  break;
                case "deleteEntireSoftLine":
                  t.Editor.deleteBackward(r, { unit: "line" }),
                    t.Editor.deleteForward(r, { unit: "line" });
                  break;
                case "deleteHardLineBackward":
                  t.Editor.deleteBackward(r, { unit: "block" });
                  break;
                case "deleteSoftLineBackward":
                  t.Editor.deleteBackward(r, { unit: "line" });
                  break;
                case "deleteHardLineForward":
                  t.Editor.deleteForward(r, { unit: "block" });
                  break;
                case "deleteSoftLineForward":
                  t.Editor.deleteForward(r, { unit: "line" });
                  break;
                case "deleteWordBackward":
                  t.Editor.deleteBackward(r, { unit: "word" });
                  break;
                case "deleteWordForward":
                  t.Editor.deleteForward(r, { unit: "word" });
                  break;
                case "insertLineBreak":
                case "insertParagraph":
                  t.Editor.insertBreak(r);
                  break;
                case "insertFromDrop":
                case "insertFromPaste":
                case "insertFromYank":
                case "insertReplacementText":
                case "insertText":
                  if ("insertFromPaste" === s && !ms.get(r)) break;
                  l instanceof DataTransfer
                    ? r.insertData(l)
                    : "string" == typeof l && t.Editor.insertText(r, l);
              }
          }
        }
      },
      blur: function (e, n, r) {
        var o = e,
          i = n.isUpdatingSelection,
          a = n.latestElement;
        if (!r.getConfig().readOnly && !i && Gf(r, o.target)) {
          var s = Vs.findDocumentOrShadowRoot(r);
          if (a !== s.activeElement) {
            var l = o.relatedTarget;
            if (
              !(
                l === Vs.toDOMNode(r, r) ||
                (Os(l) && l.hasAttribute("data-slate-spacer"))
              )
            ) {
              if (null != l && Cs(l) && Vs.hasDOMNode(r, l)) {
                var u = Vs.toSlateNode(r, l);
                if (t.Element.isElement(u) && !r.isVoid(u)) return;
              }
              if (Fs) {
                var c = s.getSelection();
                null == c || c.removeAllRanges();
              }
              gs.delete(r);
            }
          }
        }
      },
      focus: function (e, t, n) {
        var r = Vs.toDOMNode(n, n),
          o = Vs.findDocumentOrShadowRoot(n);
        (t.latestElement = o.activeElement),
          _s && e.target !== r ? r.focus() : gs.set(n, !0);
      },
      click: function (e, n, r) {
        if (!r.getConfig().readOnly && Jf(r, e.target) && Cs(e.target)) {
          var o = Vs.toSlateNode(r, e.target),
            i = Vs.findPath(r, o);
          if (t.Editor.hasPath(r, i))
            if (t.Node.get(r, i) === o) {
              var a = t.Editor.start(r, i),
                s = t.Editor.end(r, i),
                l = t.Editor.void(r, { at: a }),
                u = t.Editor.void(r, { at: s });
              if (l && u && t.Path.equals(l[1], u[1])) {
                var c = t.Editor.range(r, a);
                t.Transforms.select(r, c);
              }
            }
        }
      },
      compositionstart: function (e, n, r) {
        if (Gf(r, e.target)) {
          var o = r.selection;
          if (
            (o && t.Range.isExpanded(o) && t.Editor.deleteFragment(r),
            o && t.Range.isCollapsed(o))
          ) {
            var i = Vs.toDOMRange(r, o).startContainer,
              a = i.textContent || "";
            Xf.set(r, a), Qf.set(r, i);
          }
          (n.isComposing = !0),
            (function (e, t) {
              var n;
              t.getConfig().placeholder &&
                t.isEmpty() &&
                e.showPlaceholder &&
                (null === (n = e.$placeholder) || void 0 === n || n.hide(),
                (e.showPlaceholder = !1));
            })(n, r);
        }
      },
      compositionend: function (e, n, r) {
        var o = e;
        if (Gf(r, o.target)) {
          n.isComposing = !1;
          var i = r.selection;
          if (null != i) {
            ($s || _s) && Vs.cleanExposedTexNodeInSelectionBlock(r);
            for (
              var a = t.Range.isBackward(i) ? i.focus : i.anchor,
                s = Gi(t.Editor.node(r, [a.path[0]]), 1)[0],
                l = 0;
              l < a.path.length;
              l++
            ) {
              var u = Gi(t.Editor.node(r, a.path.slice(0, l + 1)), 1)[0];
              if (
                t.Element.isElement(u) &&
                (((Fs || _s) && "link" === u.type) || "code" === u.type)
              ) {
                Vs.setNewKey(s);
                break;
              }
            }
            var c = o.data;
            if (c) {
              if (r.getConfig().maxLength) {
                var f = Vs.getLeftLengthOfMaxLength(r);
                if (f < c.length)
                  (Vs.toDOMRange(r, i).startContainer.textContent =
                    Xf.get(r) || ""),
                    f > 0 && t.Editor.insertText(r, c.slice(0, f)),
                    n.changeViewState();
                else t.Editor.insertText(r, c);
              } else t.Editor.insertText(r, c);
              Fs ||
                setTimeout(function () {
                  var e = r.selection;
                  if (null != e) {
                    var t = Qf.get(r);
                    if (null != t)
                      Vs.toDOMRange(r, e).startContainer !== t &&
                        (t.textContent = Xf.get(r) || "");
                  }
                });
            }
          }
        }
      },
      compositionupdate: function (e, t, n) {
        Gf(n, e.target) && (t.isComposing = !0);
      },
      keydown: function (e, n, r) {
        var o = e,
          i = r.selection;
        if (!r.getConfig().readOnly && !n.isComposing && Gf(r, o.target)) {
          if (
            ((function (e, t) {
              var n = Xa.get(e),
                r = n && n.getMenus(),
                o = Za.get(e),
                i = o && o.getMenus(),
                a = Ki(Ki({}, r), i);
              for (var s in a) {
                var l = a[s],
                  c = l.hotkey;
                if (c && u.isHotkey(c, t) && !l.isDisabled(e)) {
                  var f = l.getValue(e);
                  l.exec(e, f);
                }
              }
            })(r, o),
            rd.isTab(o))
          )
            return od(o), void r.handleTab();
          if (rd.isRedo(o))
            return od(o), void ("function" == typeof r.redo && r.redo());
          if (rd.isUndo(o))
            return od(o), void ("function" == typeof r.undo && r.undo());
          if (rd.isMoveLineBackward(o))
            return (
              od(o), void t.Transforms.move(r, { unit: "line", reverse: !0 })
            );
          if (rd.isMoveLineForward(o))
            return od(o), void t.Transforms.move(r, { unit: "line" });
          if (rd.isExtendLineBackward(o))
            return (
              od(o),
              void t.Transforms.move(r, {
                unit: "line",
                edge: "focus",
                reverse: !0,
              })
            );
          if (rd.isExtendLineForward(o))
            return (
              od(o), void t.Transforms.move(r, { unit: "line", edge: "focus" })
            );
          if (rd.isMoveBackward(o))
            return (
              od(o),
              void (i && t.Range.isCollapsed(i)
                ? t.Transforms.move(r, { reverse: !0 })
                : t.Transforms.collapse(r, { edge: "start" }))
            );
          if (rd.isMoveForward(o))
            return (
              od(o),
              void (i && t.Range.isCollapsed(i)
                ? t.Transforms.move(r)
                : t.Transforms.collapse(r, { edge: "end" }))
            );
          if (rd.isMoveWordBackward(o))
            return (
              od(o),
              i &&
                t.Range.isExpanded(i) &&
                t.Transforms.collapse(r, { edge: "focus" }),
              void t.Transforms.move(r, { unit: "word", reverse: !0 })
            );
          if (rd.isMoveWordForward(o))
            return (
              od(o),
              i &&
                t.Range.isExpanded(i) &&
                t.Transforms.collapse(r, { edge: "focus" }),
              void t.Transforms.move(r, { unit: "word" })
            );
          if (rd.isSelectAll(o)) return od(o), void r.selectAll();
          if (Ws) {
            if (
              ($s || Fs) &&
              i &&
              (rd.isDeleteBackward(o) || rd.isDeleteForward(o)) &&
              t.Range.isCollapsed(i)
            ) {
              var a = t.Node.parent(r, i.anchor.path);
              if (
                t.Element.isElement(a) &&
                t.Editor.isVoid(r, a) &&
                t.Editor.isInline(r, a)
              )
                return (
                  o.preventDefault(),
                  void t.Transforms.delete(r, { unit: "block" })
                );
            }
          } else {
            if (rd.isBold(o) || rd.isItalic(o) || rd.isTransposeCharacter(o))
              return void od(o);
            if (rd.isSplitBlock(o)) return od(o), void t.Editor.insertBreak(r);
            if (rd.isDeleteBackward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "backward" })
                  : t.Editor.deleteBackward(r))
              );
            if (rd.isDeleteForward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "forward" })
                  : t.Editor.deleteForward(r))
              );
            if (rd.isDeleteLineBackward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "backward" })
                  : t.Editor.deleteBackward(r, { unit: "line" }))
              );
            if (rd.isDeleteLineForward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "forward" })
                  : t.Editor.deleteForward(r, { unit: "line" }))
              );
            if (rd.isDeleteWordBackward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "backward" })
                  : t.Editor.deleteBackward(r, { unit: "word" }))
              );
            if (rd.isDeleteWordForward(o))
              return (
                od(o),
                void (i && t.Range.isExpanded(i)
                  ? t.Editor.deleteFragment(r, { direction: "forward" })
                  : t.Editor.deleteForward(r, { unit: "word" }))
              );
          }
        }
      },
      keypress: function (e, n, r) {
        if (!Ws && !r.getConfig().readOnly && Gf(r, e.target)) {
          e.preventDefault();
          var o = e.key;
          t.Editor.insertText(r, o);
        }
      },
      copy: function (e, t, n) {
        var r = e;
        if (Gf(n, r.target)) {
          r.preventDefault();
          var o = r.clipboardData;
          null != o && n.setFragmentData(o);
        }
      },
      cut: function (e, n, r) {
        var o = e,
          i = r.selection;
        if (!r.getConfig().readOnly && Gf(r, o.target)) {
          o.preventDefault();
          var a = o.clipboardData;
          if (null != a && (r.setFragmentData(a), i))
            if (t.Range.isExpanded(i)) t.Editor.deleteFragment(r);
            else {
              var s = t.Node.parent(r, i.anchor.path);
              t.Editor.isVoid(r, s) && t.Transforms.delete(r);
            }
        }
      },
      paste: function (e, t, n) {
        ms.set(n, !0);
        var r = e;
        if (!n.getConfig().readOnly && Gf(n, r.target)) {
          var o = n.getConfig().customPaste;
          if (o) if (!1 === o(n, r)) return void ms.set(n, !1);
          if (
            !Ws ||
            (function (e) {
              return (
                e.clipboardData &&
                "" !== e.clipboardData.getData("text/plain") &&
                1 === e.clipboardData.types.length
              );
            })(r)
          ) {
            r.preventDefault();
            var i = r.clipboardData;
            null != i && n.insertData(i);
          }
        }
      },
      dragover: function (e, n, r) {
        if (Jf(r, e.target)) {
          var o = Vs.toSlateNode(r, e.target);
          t.Editor.isVoid(r, o) && e.preventDefault();
        }
      },
      dragstart: function (e, n, r) {
        var o = e;
        if (Jf(r, o.target) && !r.getConfig().readOnly) {
          var i = Vs.toSlateNode(r, o.target),
            a = Vs.findPath(r, i);
          if (t.Editor.isVoid(r, i) || t.Editor.void(r, { at: a, voids: !0 })) {
            var s = t.Editor.range(r, a);
            t.Transforms.select(r, s);
          }
          var l = o.dataTransfer;
          null != l && ((n.isDraggingInternally = !0), r.setFragmentData(l));
        }
      },
      dragend: function (e, t, n) {
        var r = e;
        n.getConfig().readOnly ||
          (t.isDraggingInternally &&
            Jf(n, r.target) &&
            (t.isDraggingInternally = !1));
      },
      drop: function (e, n, r) {
        var o = e,
          i = o.dataTransfer;
        if (
          !r.getConfig().readOnly &&
          Jf(r, o.target) &&
          null != i &&
          !(Ws && Fs && i.files.length > 0)
        ) {
          o.preventDefault();
          var a = r.selection,
            s = Vs.findEventRange(r, o);
          t.Transforms.select(r, s),
            n.isDraggingInternally &&
              (a && t.Transforms.delete(r, { at: a }),
              (n.isDraggingInternally = !1)),
            r.insertData(i),
            r.isFocused() || r.focus();
        }
      },
    },
    ad = 1,
    sd = (function () {
      function e(e) {
        var n = this;
        (this.id = ad++),
          (this.$textArea = null),
          (this.$progressBar = y.default(
            '<div class="w-e-progress-bar"></div>'
          )),
          (this.$maxLengthInfo = y.default(
            '<div class="w-e-max-length-info"></div>'
          )),
          (this.isComposing = !1),
          (this.isUpdatingSelection = !1),
          (this.isDraggingInternally = !1),
          (this.latestElement = null),
          (this.showPlaceholder = !1),
          (this.$placeholder = null),
          (this.latestEditorSelection = null),
          (this.onDOMSelectionChange = b.default(function () {
            var e = n.editorInstance;
            !(function (e, n) {
              var r = e.isComposing,
                o = e.isUpdatingSelection,
                i = e.isDraggingInternally;
              if (!(n.getConfig().readOnly || r || o || i)) {
                var a = Vs.findDocumentOrShadowRoot(n),
                  s = a.activeElement,
                  l = Vs.toDOMNode(n, n),
                  u = a.getSelection();
                if (
                  (s === l
                    ? ((e.latestElement = s), gs.set(n, !0))
                    : gs.delete(n),
                  !u)
                )
                  return t.Transforms.deselect(n);
                var c = u.anchorNode,
                  f = u.focusNode,
                  d = Gf(n, c) || Yf(n, c),
                  p = Gf(n, f) || Yf(n, f);
                if (d && p) {
                  var h = Vs.toSlateRange(n, u, {
                    exactMatch: !1,
                    suppressThrow: !1,
                  });
                  t.Transforms.select(n, h);
                } else t.Transforms.deselect(n);
              }
            })(n, e);
          }, 100));
        var r = y.default(e);
        if (0 === r.length)
          throw new Error("Cannot find textarea DOM by selector '" + e + "'");
        this.$box = r;
        var o = y.default('<div class="w-e-text-container"></div>');
        o.append(this.$progressBar), o.append(this.$maxLengthInfo), r.append(o);
        var i = y.default('<div class="w-e-scroll"></div>');
        o.append(i),
          (this.$scroll = i),
          (this.$textAreaContainer = o),
          Ju(function () {
            var e = n.editorInstance,
              t = Vs.getWindow(e);
            t.document.addEventListener(
              "selectionchange",
              n.onDOMSelectionChange
            ),
              e.on("destroyed", function () {
                t.document.removeEventListener(
                  "selectionchange",
                  n.onDOMSelectionChange
                );
              }),
              o.on("mousedown", function () {
                return e.hidePanelOrModal();
              }),
              e.on("change", n.changeViewState.bind(n));
            var r = e.getConfig().onChange;
            r &&
              e.on("change", function () {
                return r(e);
              }),
              n.onFocusAndOnBlur(),
              e.on("change", n.changeMaxLengthInfo.bind(n)),
              n.bindEvent();
          });
      }
      return (
        Object.defineProperty(e.prototype, "editorInstance", {
          get: function () {
            var e = Ya.get(this);
            if (null == e) throw new Error("Can not get editor instance");
            return e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.bindEvent = function () {
          var e = this,
            t = this.$textArea,
            n = this.$scroll,
            r = this.editorInstance;
          null != t &&
            (m.default(id, function (n, o) {
              t.on(o, function (t) {
                n(t, e, r);
              });
            }),
            r.getConfig().scroll &&
              (n.css("overflow-y", "auto"),
              n.on(
                "scroll",
                b.default(function () {
                  r.emit("scroll");
                }, 100)
              )));
        }),
        (e.prototype.onFocusAndOnBlur = function () {
          var e = this,
            t = this.editorInstance,
            n = t.getConfig(),
            r = n.onBlur,
            o = n.onFocus;
          (this.latestEditorSelection = t.selection),
            t.on("change", function () {
              null == e.latestEditorSelection && null != t.selection
                ? o && o(t)
                : null != e.latestEditorSelection &&
                  null == t.selection &&
                  r &&
                  r(t),
                (e.latestEditorSelection = t.selection);
            });
        }),
        (e.prototype.changeMaxLengthInfo = function () {
          var e = this.editorInstance,
            t = e.getConfig().maxLength;
          if (t) {
            var n = t - Vs.getLeftLengthOfMaxLength(e);
            this.$maxLengthInfo[0].innerHTML = n + "/" + t;
          }
        }),
        (e.prototype.changeProgress = function (e) {
          var t = this.$progressBar;
          t.css("width", e + "%"),
            e >= 100 &&
              setTimeout(function () {
                t.hide(), t.css("width", "0"), t.show();
              }, 1e3);
        }),
        (e.prototype.changeViewState = function () {
          var e = this,
            n = this.editorInstance;
          $f(this, n),
            (function (e, t) {
              var n,
                r = t.getConfig().placeholder;
              if (r) {
                var o = t.isEmpty();
                if (o && !e.showPlaceholder && !e.isComposing) {
                  if (null == e.$placeholder) {
                    var i = y.default(
                      '<div class="w-e-text-placeholder">' + r + "</div>"
                    );
                    e.$textAreaContainer.append(i), (e.$placeholder = i);
                  }
                  return e.$placeholder.show(), void (e.showPlaceholder = !0);
                }
                !o &&
                  e.showPlaceholder &&
                  (null === (n = e.$placeholder) || void 0 === n || n.hide(),
                  (e.showPlaceholder = !1));
              }
            })(this, n),
            Ju(function () {
              !(function (e, n) {
                var r = n.selection,
                  o = Vs.findDocumentOrShadowRoot(n).getSelection();
                if (o && !e.isComposing && n.isFocused()) {
                  var i = "None" !== o.type;
                  if (r || i) {
                    var a = us.get(n),
                      s = !1;
                    if (
                      (a.contains(o.anchorNode) &&
                        a.contains(o.focusNode) &&
                        (s = !0),
                      i && s && r)
                    ) {
                      var l = Vs.toSlateRange(n, o, {
                        exactMatch: !0,
                        suppressThrow: !0,
                      });
                      if (l && t.Range.equals(l, r)) {
                        var u = !0;
                        if (t.Range.isCollapsed(r)) {
                          var c = o.anchorNode,
                            f = o.anchorOffset;
                          if (c === a) {
                            var d = a.childNodes,
                              p = void 0;
                            (p = d[f]) && p.matches("table") && (u = !1),
                              (p = d[f - 1]) && p.matches("table") && (u = !1);
                          }
                        }
                        if (u) return;
                      }
                    }
                    if (!r || Vs.hasRange(n, r)) {
                      e.isUpdatingSelection = !0;
                      var h = r && Vs.toDOMRange(n, r);
                      if (h) {
                        t.Range.isBackward(r)
                          ? o.setBaseAndExtent(
                              h.endContainer,
                              h.endOffset,
                              h.startContainer,
                              h.startOffset
                            )
                          : o.setBaseAndExtent(
                              h.startContainer,
                              h.startOffset,
                              h.endContainer,
                              h.endOffset
                            );
                        var g = h.startContainer.parentElement;
                        g.closest("[data-slate-spacer]") ||
                          ((g.getBoundingClientRect =
                            h.getBoundingClientRect.bind(h)),
                          qf(g, {
                            scrollMode: "if-needed",
                            boundary: a.parentElement,
                            block: "end",
                            behavior: "smooth",
                          }),
                          delete g.getBoundingClientRect);
                      } else o.removeAllRanges();
                      setTimeout(function () {
                        h && _s && a.focus(), (e.isUpdatingSelection = !1);
                      });
                    } else
                      n.selection = Vs.toSlateRange(n, o, {
                        exactMatch: !1,
                        suppressThrow: !1,
                      });
                  }
                }
              })(e, n);
            });
        }),
        (e.prototype.destroy = function () {
          this.$textAreaContainer.remove();
        }),
        e
      );
    })();
  Si("match", function (e, t, n) {
    return [
      function (t) {
        var n = z(this),
          r = null == t ? void 0 : Ae(t, e);
        return r ? Te(r, t, n) : new RegExp(t)[e](sr(n));
      },
      function (e) {
        var r = Oe(this),
          o = sr(e),
          i = n(t, r, o);
        if (i.done) return i.value;
        if (!r.global) return ji(r, o);
        var a = r.unicode;
        r.lastIndex = 0;
        for (var s, l = [], u = 0; null !== (s = ji(r, o)); ) {
          var c = sr(s[0]);
          (l[u] = c),
            "" === c && (r.lastIndex = Oi(o, Ft(r.lastIndex), a)),
            u++;
        }
        return 0 === u ? null : l;
      },
    ];
  });
  function ld(e) {
    e.removeAttr("width"),
      e.removeAttr("height"),
      e.removeAttr("fill"),
      e.removeAttr("class"),
      e.removeAttr("t"),
      e.removeAttr("p-id");
    var t = e.children();
    t.length && ld(t);
  }
  function ud() {
    return y.default(
      '<svg viewBox="0 0 1024 1024"><path d="M498.7 655.8l-197.6-268c-8.1-10.9-0.3-26.4 13.3-26.4h395.2c13.6 0 21.4 15.4 13.3 26.4l-197.6 268c-6.6 9-20 9-26.6 0z"></path></svg>'
    );
  }
  function cd() {
    return y.default('<div class="w-e-bar-divider"></div>');
  }
  function fd(e, t, n, r, o) {
    if ((void 0 === o && (o = !1), t)) {
      if (r) {
        var i = As ? "cmd" : "ctrl";
        r = r.replace("mod", i);
      }
      if (o)
        r &&
          (e.attr("data-tooltip", r),
          e.addClass("w-e-menu-tooltip-v5"),
          e.addClass("tooltip-right"));
      else {
        var a = r ? n + "\n" + r : n;
        e.attr("data-tooltip", a), e.addClass("w-e-menu-tooltip-v5");
      }
    }
  }
  var dd = (function () {
      function e(e, t) {
        var n = this;
        void 0 === t && (t = !1),
          (this.$elem = y.default('<div class="w-e-bar-item"></div>')),
          (this.$button = y.default('<button type="button"></button>')),
          (this.disabled = !1),
          (this.menu = e);
        var r = e.tag,
          o = e.width;
        if ("button" !== r)
          throw new Error("Invalid tag '" + r + "', expected 'button'");
        var i = e.title,
          a = e.hotkey,
          s = void 0 === a ? "" : a,
          l = e.iconSvg,
          u = void 0 === l ? "" : l,
          c = this.$button;
        if (u) {
          var f = y.default(u);
          ld(f), c.append(f);
        } else c.text(i);
        fd(c, u, i, s, t),
          t && u && c.append(y.default('<span class="title">' + i + "</span>")),
          o && c.css("width", o + "px"),
          this.$elem.append(c),
          Ju(function () {
            return n.init();
          });
      }
      return (
        (e.prototype.init = function () {
          var e = this;
          this.setActive(),
            this.setDisabled(),
            this.$button.on("mousedown", function (t) {
              t.preventDefault(),
                Sd(e).hidePanelOrModal(),
                e.disabled || (e.exec(), e.onButtonClick());
            });
        }),
        (e.prototype.exec = function () {
          var e = Sd(this),
            t = this.menu,
            n = t.getValue(e);
          t.exec(e, n);
        }),
        (e.prototype.setActive = function () {
          var e = Sd(this),
            t = this.$button,
            n = "active";
          this.menu.isActive(e) ? t.addClass(n) : t.removeClass(n);
        }),
        (e.prototype.setDisabled = function () {
          var e = Sd(this),
            t = this.$button,
            n = this.menu.isDisabled(e);
          (null == e.selection || e.isDisabled()) && (n = !0),
            this.menu.awaysEnable && (n = !1);
          var r = "disabled";
          n ? t.addClass(r) : t.removeClass(r), (this.disabled = n);
        }),
        (e.prototype.changeMenuState = function () {
          this.setActive(), this.setDisabled();
        }),
        e
      );
    })(),
    pd = (function (e) {
      function t(t, n) {
        return void 0 === n && (n = !1), e.call(this, t, n) || this;
      }
      return Ui(t, e), (t.prototype.onButtonClick = function () {}), t;
    })(dd),
    hd = (function () {
      function e(e) {
        (this.isShow = !1), (this.showTime = 0), this.record(e);
      }
      return (
        (e.prototype.record = function (e) {
          var t = ts.get(e);
          null == t && ((t = new Set()), ts.set(e, t)),
            t.add(this),
            ns.set(this, e);
        }),
        (e.prototype.renderContent = function (e) {
          var t = this.$elem;
          t.html(""), t.append(e);
          var n = this.genSelfElem();
          n && t.append(n);
        }),
        (e.prototype.appendTo = function (e) {
          var t = this.$elem;
          e.append(t);
        }),
        (e.prototype.show = function () {
          if (!this.isShow) {
            (this.showTime = Date.now()), this.$elem.show(), (this.isShow = !0);
            var e = ns.get(this);
            e && e.emit("modalOrPanelShow", this);
          }
        }),
        (e.prototype.hide = function () {
          if (this.isShow && !(Date.now() - this.showTime < 200)) {
            this.$elem.hide(), (this.isShow = !1);
            var e = ns.get(this);
            e && e.emit("modalOrPanelHide");
          }
        }),
        e
      );
    })(),
    gd = (function (e) {
      function t(t) {
        var n = e.call(this, t) || this;
        return (
          (n.type = "dropPanel"),
          (n.$elem = y.default('<div class="w-e-drop-panel"></div>')),
          n
        );
      }
      return (
        Ui(t, e),
        (t.prototype.genSelfElem = function () {
          return null;
        }),
        t
      );
    })(hd),
    vd = (function (e) {
      function t(t, n) {
        void 0 === n && (n = !1);
        var r = e.call(this, t, n) || this;
        if (((r.dropPanel = null), (r.menu = t), t.showDropPanel)) {
          var o = ud();
          r.$button.append(o);
        }
        return r;
      }
      return (
        Ui(t, e),
        (t.prototype.onButtonClick = function () {
          this.menu.showDropPanel && this.handleDropPanel();
        }),
        (t.prototype.handleDropPanel = function () {
          var e = this.menu;
          if (null != e.getPanelContentElem) {
            var t = Sd(this);
            if (null == this.dropPanel) {
              var n = new gd(t),
                r = e.getPanelContentElem(t);
              n.renderContent(r),
                n.appendTo(this.$elem),
                n.show(),
                (this.dropPanel = n);
            } else {
              var o = this.dropPanel;
              if (o.isShow) o.hide();
              else {
                r = e.getPanelContentElem(t);
                o.renderContent(r), o.show();
              }
            }
            var i = this.dropPanel;
            if (i.isShow) {
              var a = this.$elem,
                s = a.offset().left,
                l = a.parents(".w-e-bar");
              s - l.offset().left >= l.width() / 2
                ? i.$elem.css({ left: "none", right: "0" })
                : i.$elem.css({ left: "0", right: "none" });
            }
          }
        }),
        t
      );
    })(dd),
    yd = (function (e) {
      function t(t, n) {
        void 0 === n && (n = 0);
        var r = e.call(this, t) || this;
        (r.type = "modal"),
          (r.$elem = y.default('<div class="w-e-modal"></div>')),
          (r.width = 0),
          n && (r.width = n);
        var o = r.$elem;
        return (
          o.on("mousedown", function (e) {
            return e.stopPropagation();
          }),
          o.on("keyup", function (e) {
            "Escape" === e.code && (r.hide(), t.restoreSelection());
          }),
          r
        );
      }
      return (
        Ui(t, e),
        (t.prototype.genSelfElem = function () {
          var e = this,
            t = y.default(
              '<span class="btn-close"><svg viewBox="0 0 1024 1024"><path d="M1024 896.1024l-128 128L512 640 128 1024 0 896 384 512 0 128 128 0 512 384 896.1024 0l128 128L640 512z"></path></svg></span>'
            );
          return (
            t.on("click", function () {
              return e.hide();
            }),
            t
          );
        }),
        (t.prototype.setStyle = function (e) {
          var t = this.width,
            n = this.$elem;
          n.attr("style", ""), t && n.css("width", t + "px"), n.css(e);
        }),
        t
      );
    })(hd);
  var md = (function (e) {
    function n(t, n) {
      void 0 === n && (n = !1);
      var r = e.call(this, t, n) || this;
      return (r.$body = y.default("body")), (r.modal = null), (r.menu = t), r;
    }
    return (
      Ui(n, e),
      (n.prototype.onButtonClick = function () {
        this.menu.showModal && this.handleModal();
      }),
      (n.prototype.getPosition = function () {
        var e = Sd(this),
          n = this.menu.getModalPositionNode(e);
        return t.Element.isElement(n) ? hf(e, n, "modal") : pf(e);
      }),
      (n.prototype.handleModal = function () {
        var e = Sd(this),
          t = this.menu;
        if (null == this.modal) {
          var n = new yd(e, t.modalWidth);
          this.renderAndShowModal(n, !0), (this.modal = n);
        } else {
          (n = this.modal).isShow ? n.hide() : this.renderAndShowModal(n, !1);
        }
      }),
      (n.prototype.renderAndShowModal = function (e, t) {
        void 0 === t && (t = !1);
        var n = Sd(this),
          r = this.menu;
        if (null != r.getModalContentElem) {
          var o = Vs.getTextarea(n),
            i = Vs.getToolbar(n),
            a = ((null == i ? void 0 : i.getConfig()) || {}).modalAppendToBody,
            s = r.getModalContentElem(n);
          if ((e.renderContent(s), a)) e.setStyle({ left: "0", right: "0" });
          else {
            var l = this.getPosition();
            e.setStyle(l);
          }
          t && (a ? e.appendTo(this.$body) : e.appendTo(o.$textAreaContainer)),
            e.show(),
            a || gf(n, e.$elem),
            setTimeout(function () {
              n.blur();
            });
        }
      }),
      n
    );
  })(dd);
  var bd = (function (e) {
    function t(t, n) {
      var r = e.call(this, t) || this;
      return (
        (r.type = "selectList"),
        (r.$elem = y.default('<div class="w-e-select-list"></div>')),
        n && r.$elem.css("width", n + "px"),
        r.$elem.on("mousedown", function (e) {
          e.stopPropagation();
        }),
        r
      );
    }
    return (
      Ui(t, e),
      (t.prototype.renderList = function (e) {
        var t = this.$elem;
        t.html("");
        var n = y.default("<ul></ul>");
        e.forEach(function (e) {
          var t = e.value,
            r = e.text,
            o = e.selected,
            i = e.styleForRenderMenuList,
            a = y.default('<li data-value="' + t + '"></li>');
          if ((i && a.css(i), o)) {
            var s = y.default(
              '<svg viewBox="0 0 1446 1024"><path d="M574.116299 786.736392 1238.811249 48.517862C1272.390222 11.224635 1329.414799 7.827718 1366.75664 41.450462 1403.840015 74.840484 1406.731043 132.084741 1373.10189 169.433699L655.118888 966.834607C653.072421 969.716875 650.835807 972.514337 648.407938 975.210759 615.017957 1012.29409 558.292155 1015.652019 521.195664 982.250188L72.778218 578.493306C35.910826 545.297758 32.859041 488.584019 66.481825 451.242134 99.871807 414.158803 156.597563 410.800834 193.694055 444.202665L574.116299 786.736392Z"></path></svg>'
            );
            a.append(s), a.addClass("selected");
          }
          a.append(y.default('<span data-value="' + t + '">' + r + "</span>")),
            a.attr("title", r),
            n.append(a);
        }),
          t.append(n);
      }),
      (t.prototype.genSelfElem = function () {
        return null;
      }),
      t
    );
  })(hd);
  var wd = (function () {
      function e(e, t) {
        var n = this;
        void 0 === t && (t = !1),
          (this.$elem = y.default('<div class="w-e-bar-item"></div>')),
          (this.$button = y.default(
            '<button type="button" class="select-button"></button>'
          )),
          (this.disabled = !1),
          (this.selectList = null);
        var r = e.tag,
          o = e.title,
          i = e.width,
          a = e.iconSvg,
          s = void 0 === a ? "" : a,
          l = e.hotkey,
          u = void 0 === l ? "" : l;
        if ("select" !== r)
          throw new Error("Invalid tag '" + r + "', expected 'select'");
        var c = this.$button;
        i && c.css("width", i + "px"),
          fd(c, s, o, u, t),
          this.$elem.append(c),
          (this.menu = e),
          Ju(function () {
            return n.init();
          });
      }
      return (
        (e.prototype.init = function () {
          var e = this;
          this.setSelectedValue(),
            this.$button.on("mousedown", function (t) {
              t.preventDefault(), Sd(e).hidePanelOrModal(), e.trigger();
            });
        }),
        (e.prototype.trigger = function () {
          var e = this,
            t = Sd(this);
          if (!t.isDisabled() && !this.disabled) {
            var n = this.menu;
            if (null == this.selectList) {
              this.selectList = new bd(t, n.selectPanelWidth);
              var r = this.selectList,
                o = n.getOptions(t);
              r.renderList(o),
                r.appendTo(this.$elem),
                r.show(),
                r.$elem.on("mousedown", "li", function (t) {
                  var n = t.target;
                  if (null != n) {
                    t.preventDefault();
                    var r = y.default(n).attr("data-value");
                    e.onChange(r);
                  }
                });
            } else {
              if ((r = this.selectList).isShow) r.hide();
              else {
                o = n.getOptions(t);
                r.renderList(o), r.show();
              }
            }
          }
        }),
        (e.prototype.onChange = function (e) {
          var t = Sd(this),
            n = this.menu;
          n.exec && n.exec(t, e);
        }),
        (e.prototype.setSelectedValue = function () {
          var e = Sd(this),
            t = this.menu,
            n = t.getValue(e),
            r = (function (e, t) {
              for (var n = e.length, r = "", o = 0; o < n; o++) {
                var i = e[o];
                if (i.value === t) {
                  r = i.text;
                  break;
                }
              }
              return r;
            })(t.getOptions(e), n.toString()),
            o = this.$button,
            i = ud();
          o.html(""), o.text(r), o.append(i);
        }),
        (e.prototype.setDisabled = function () {
          var e = Sd(this),
            t = this.menu.isDisabled(e),
            n = this.$button;
          (null == e.selection || e.isDisabled()) && (t = !0);
          var r = "disabled";
          t ? n.addClass(r) : n.removeClass(r), (this.disabled = t);
        }),
        (e.prototype.changeMenuState = function () {
          this.setSelectedValue(), this.setDisabled();
        }),
        e
      );
    })(),
    xd = (function () {
      function e(e) {
        (this.$elem = y.default(
          '<div class="w-e-bar-item w-e-bar-item-group"></div>'
        )),
          (this.$container = y.default(
            '<div class="w-e-bar-item-menus-container"></div>'
          )),
          (this.$button = y.default('<button type="button"></button>'));
        var t = e.iconSvg,
          n = e.title,
          r = this.$elem,
          o = this.$button;
        if (t) {
          var i = y.default(t);
          ld(i), o.append(i);
        } else o.text(n);
        var a = ud();
        o.append(a), r.append(o);
        var s = this.$container;
        r.append(s);
        var l = this.createObserver();
        this.observe(l);
      }
      return (
        (e.prototype.appendBarItem = function (e) {
          var t = e.$elem;
          this.$container.append(t);
        }),
        (e.prototype.observe = function (e) {
          var t = this.$container;
          e.observe(t[0], { childList: !0, subtree: !0, attributes: !0 });
        }),
        (e.prototype.createObserver = function () {
          var e = this,
            t = this.$container,
            n = this.$button,
            r = new MutationObserver(function () {
              var o = t.find("button"),
                i = o.length;
              if (0 !== i) {
                var a = 0;
                o.each(function (e) {
                  y.default(e).hasClass("disabled") && a++;
                }),
                  r.disconnect(),
                  a === i ? n.addClass("disabled") : n.removeClass("disabled"),
                  e.observe(r);
              }
            });
          return r;
        }),
        e
      );
    })(),
    Ed = new WeakMap();
  function Sd(e) {
    var t = es.get(e);
    if (null == t) throw new Error("Can not get editor instance");
    return t;
  }
  function kd(e, t) {
    void 0 === t && (t = !1);
    var n = Ed.get(e);
    if (n) return n;
    var r = e.tag;
    if ("button" === r) {
      var o = e.showDropPanel,
        i = e.showModal;
      n = o ? new vd(e, t) : i ? new md(e, t) : new pd(e, t);
    }
    if (("select" === r && (n = new wd(e, t)), null == n))
      throw new Error("Invalid tag in menu " + JSON.stringify(e));
    return Ed.set(e, n), n;
  }
  function Od(e, n) {
    var r = e.selection;
    return (
      null != r &&
      !t.Range.isCollapsed(r) &&
      !Vs.getSelectedElems(e).some(function (t) {
        if (e.isVoid(t)) return !0;
        var n = t.type;
        return !!["pre", "code", "table"].includes(n) || void 0;
      }) &&
      !!t.Text.isText(n)
    );
  }
  var Cd = (function () {
    function e() {
      var e = this;
      (this.$elem = y.default(
        '<div class="w-e-bar w-e-bar-hidden w-e-hover-bar"></div>'
      )),
        (this.menus = {}),
        (this.hoverbarItems = []),
        (this.prevSelectedNode = null),
        (this.isShow = !1),
        (this.changeHoverbarState = x.default(function () {
          var n = e.isShow,
            r = e.getSelectedNodeAndMenuKeys() || {},
            o = r.node,
            i = void 0 === o ? null : o,
            a = r.menuKeys,
            s = void 0 === a ? [] : a;
          if (
            (null != i && e.changeItemsState(), i && t.Element.isElement(i)) &&
            n &&
            e.isSamePath(i, e.prevSelectedNode)
          )
            return;
          e.hideAndClean(),
            null != i && (e.registerItems(s), e.setPosition(i), e.show()),
            (e.prevSelectedNode = i);
        }, 200)),
        Ju(function () {
          var t = e.getEditorInstance(),
            n = e.$elem;
          n.on("mousedown", function (e) {
            return e.preventDefault();
          }),
            Vs.getTextarea(t).$textAreaContainer.append(n),
            t.on("change", e.changeHoverbarState);
          var r = e.hideAndClean.bind(e);
          t.on("scroll", r), t.on("fullScreen", r), t.on("unFullScreen", r);
        });
    }
    return (
      (e.prototype.getMenus = function () {
        return this.menus;
      }),
      (e.prototype.hideAndClean = function () {
        var e = this.$elem;
        e.removeClass("w-e-bar-show").addClass("w-e-bar-hidden"),
          (this.hoverbarItems = []),
          e.html(""),
          (this.isShow = !1);
      }),
      (e.prototype.show = function () {
        this.$elem.removeClass("w-e-bar-hidden").addClass("w-e-bar-show"),
          (this.isShow = !0);
      }),
      (e.prototype.changeItemsState = function () {
        var e = this;
        Ju(function () {
          e.hoverbarItems.forEach(function (e) {
            e.changeMenuState();
          });
        });
      }),
      (e.prototype.registerItems = function (e) {
        var t = this,
          n = this.$elem;
        e.forEach(function (e) {
          if ("|" !== e) t.registerSingleItem(e);
          else {
            var r = cd();
            n.append(r);
          }
        });
      }),
      (e.prototype.registerSingleItem = function (e) {
        var t = this.getEditorInstance(),
          n = this.menus,
          r = n[e];
        if (null == r) {
          var o = Us[e];
          if (null == o)
            throw new Error("Not found menu item factory by key '" + e + "'");
          if ("function" != typeof o)
            throw new Error(
              "Menu item factory (key='" + e + "') is not a function"
            );
          (r = o()), (n[e] = r);
        }
        var i = kd(r);
        this.hoverbarItems.push(i), es.set(i, t), this.$elem.append(i.$elem);
      }),
      (e.prototype.setPosition = function (e) {
        var n = this.getEditorInstance(),
          r = this.$elem;
        if ((r.attr("style", ""), t.Element.isElement(e))) {
          var o = hf(n, e, "bar");
          return r.css(o), void gf(n, r);
        }
        if (t.Text.isText(e)) {
          o = pf(n);
          return r.css(o), void gf(n, r);
        }
        throw new Error(
          "hoverbar.setPosition error, current selected node is not elem nor text"
        );
      }),
      (e.prototype.getSelectedNodeAndMenuKeys = function () {
        var e = this.getEditorInstance();
        if (null == e.selection) return null;
        var n = this.getHoverbarKeysConf(),
          r = null,
          o = [],
          i = function (i) {
            var a = n[i],
              s = a.match,
              l = a.menuKeys,
              u = void 0 === l ? [] : l,
              c =
                s ||
                function (e, t) {
                  return Vs.checkNodeType(t, i);
                },
              f = Gi(
                t.Editor.nodes(e, {
                  match: function (t) {
                    return c(e, t);
                  },
                  universal: !0,
                }),
                1
              ),
              d = f[0];
            if (null != d) return (r = d[0]), (o = u), "break";
          };
        for (var a in n) {
          if ("break" === i(a)) break;
        }
        return null == r || 0 === o.length ? null : { node: r, menuKeys: o };
      }),
      (e.prototype.getEditorInstance = function () {
        var e = Qa.get(this);
        if (null == e) throw new Error("Can not get editor instance");
        return e;
      }),
      (e.prototype.getHoverbarKeysConf = function () {
        var e = this.getEditorInstance().getConfig().hoverbarKeys,
          t = void 0 === e ? {} : e,
          n = t.text;
        return n && null == n.match && (n.match = Od), t;
      }),
      (e.prototype.isSamePath = function (e, n) {
        if (null == e || null == n) return !1;
        var r = Vs.findPath(null, e),
          o = Vs.findPath(null, n);
        return t.Path.equals(r, o);
      }),
      (e.prototype.destroy = function () {
        this.$elem.remove(),
          (this.menus = {}),
          (this.hoverbarItems = []),
          (this.prevSelectedNode = null);
      }),
      e
    );
  })();
  function Td(e, t, n) {
    var r = y.default(n);
    return (
      !!r.attr(t) ||
      (r.attr(t, "true"),
      e.on("destroyed", function () {
        r.removeAttr(t);
      }),
      !1)
    );
  }
  function Nd(e, n, r, o) {
    if ((ss.set(e, n), ls.set(e, r), t.Element.isElement(e))) {
      var i = e.children;
      if (
        ((void 0 === i ? [] : i).forEach(function (t, n) {
          return Nd(t, n, e, o);
        }),
        t.Editor.isVoid(o, e))
      ) {
        var a = Gi(t.Node.texts(e), 1),
          s = Gi(a[0], 1)[0];
        ss.set(s, 0), ls.set(s, e);
      }
    }
  }
  var Md = In("splice"),
    Ld = R.TypeError,
    Rd = Math.max,
    Pd = Math.min,
    Dd = 9007199254740991,
    jd = "Maximum allowed length exceeded";
  _n(
    { target: "Array", proto: !0, forced: !Md },
    {
      splice: function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          s,
          l = U(this),
          u = It(l),
          c = gn(e, u),
          f = arguments.length;
        if (
          (0 === f
            ? (n = r = 0)
            : 1 === f
            ? ((n = 0), (r = u - c))
            : ((n = f - 2), (r = Pd(Rd(At(t), 0), u - c))),
          u + n - r > Dd)
        )
          throw Ld(jd);
        for (o = Jt(l, r), i = 0; i < r; i++)
          (a = c + i) in l && qn(o, i, l[a]);
        if (((o.length = r), n < r)) {
          for (i = c; i < u - r; i++)
            (s = i + n), (a = i + r) in l ? (l[s] = l[a]) : delete l[s];
          for (i = u; i > u - r + n; i--) delete l[i - 1];
        } else if (n > r)
          for (i = u - r; i > c; i--)
            (s = i + n - 1), (a = i + r - 1) in l ? (l[s] = l[a]) : delete l[s];
        for (i = 0; i < n; i++) l[i + c] = arguments[i + 2];
        return (l.length = u - r + n), o;
      },
    }
  );
  var Ad = (function () {
    function e(e, t) {
      var n = this;
      (this.$toolbar = y.default(
        '<div class="w-e-bar w-e-bar-show w-e-toolbar"></div>'
      )),
        (this.menus = {}),
        (this.toolbarItems = []),
        (this.config = {}),
        (this.changeToolbarState = x.default(function () {
          n.toolbarItems.forEach(function (e) {
            e.changeMenuState();
          });
        }, 200)),
        (this.config = t);
      var r = y.default(e);
      if (0 === r.length)
        throw new Error("Cannot find toolbar DOM by selector '" + e + "'");
      this.$box = r;
      var o = this.$toolbar;
      o.on("mousedown", function (e) {
        return e.preventDefault();
      }),
        r.append(o),
        Ju(function () {
          n.registerItems(),
            n.changeToolbarState(),
            n.getEditorInstance().on("change", n.changeToolbarState);
        });
    }
    return (
      (e.prototype.getMenus = function () {
        return this.menus;
      }),
      (e.prototype.getConfig = function () {
        return this.config;
      }),
      (e.prototype.registerItems = function () {
        var e = this,
          t = "",
          n = this.$toolbar,
          r = this.config,
          o = r.toolbarKeys,
          i = void 0 === o ? [] : o,
          a = r.insertKeys,
          s = void 0 === a ? { index: 0, keys: [] } : a,
          l = r.excludeKeys,
          u = void 0 === l ? [] : l,
          c = E.default(i);
        s.keys.length > 0 &&
          ("string" == typeof s.keys && (s.keys = [s.keys]),
          s.keys.forEach(function (e, t) {
            c.splice(s.index + t, 0, e);
          }));
        var f = c.filter(function (e) {
            if ("string" == typeof e) {
              if (u.includes(e)) return !1;
            } else if (u.includes(e.key)) return !1;
            return !0;
          }),
          d = f.length;
        f.forEach(function (r, o) {
          if ("|" === r) {
            if (0 === o) return;
            if (o + 1 === d) return;
            if ("|" === t) return;
            var i = cd();
            return n.append(i), void (t = r);
          }
          if ("string" == typeof r)
            return e.registerSingleItem(r, e), void (t = r);
          e.registerGroup(r), (t = "group");
        });
      }),
      (e.prototype.registerGroup = function (e) {
        var t = this,
          n = this.$toolbar,
          r = (function (e) {
            return new xd(e);
          })(e),
          o = e.menuKeys,
          i = void 0 === o ? [] : o,
          a = this.config.excludeKeys,
          s = void 0 === a ? [] : a;
        i.forEach(function (e) {
          s.includes(e) || t.registerSingleItem(e, r);
        }),
          n.append(r.$elem);
      }),
      (e.prototype.registerSingleItem = function (e, t) {
        var n = this.getEditorInstance(),
          r = t instanceof xd,
          o = this.menus,
          i = o[e];
        if (null == i) {
          var a = Us[e];
          if (null == a)
            throw new Error("Not found menu item factory by key '" + e + "'");
          if ("function" != typeof a)
            throw new Error(
              "Menu item factory (key='" + e + "') is not a function"
            );
          (i = a()), (o[e] = i);
        } else
          console.warn(
            "Duplicated toolbar menu key '" +
              e +
              "'\n重复注册了菜单栏 menu '" +
              e +
              "'"
          );
        var s = kd(i, r);
        (this.toolbarItems.push(s), es.set(s, n), r)
          ? t.appendBarItem(s)
          : t.$toolbar.append(s.$elem);
      }),
      (e.prototype.getEditorInstance = function () {
        var e = Ja.get(this);
        if (null == e) throw new Error("Can not get editor instance");
        return e;
      }),
      (e.prototype.destroy = function () {
        this.$toolbar.remove(), (this.menus = {}), (this.toolbarItems = []);
      }),
      e
    );
  })();
  var _d = ht.EXISTS,
    Fd = ze.f,
    Id = Function.prototype,
    Bd = W(Id.toString),
    $d = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
    Wd = W($d.exec);
  ye &&
    !_d &&
    Fd(Id, "name", {
      configurable: !0,
      get: function () {
        try {
          return Wd($d, Bd(this))[1];
        } catch (e) {
          return "";
        }
      },
    });
  var Vd = T(function (e) {
      function t(n) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? ((e.exports = t =
                function (e) {
                  return typeof e;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0))
            : ((e.exports = t =
                function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
              (e.exports.default = e.exports),
              (e.exports.__esModule = !0)),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    zd = T(function (e) {
      (e.exports = function (e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Hd = T(function (e) {
      (e.exports = function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols &&
            r.push.apply(
              r,
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            ),
            r.forEach(function (t) {
              zd(e, t, n[t]);
            });
        }
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Ud = T(function (e) {
      (e.exports = function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Kd = T(function (e) {
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      (e.exports = function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    qd = T(function (e) {
      (e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Gd = T(function (e) {
      var t = Vd.default;
      (e.exports = function (e, n) {
        if (n && ("object" === t(n) || "function" == typeof n)) return n;
        if (void 0 !== n)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return qd(e);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Yd = T(function (e) {
      function t(n) {
        return (
          (e.exports = t =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(n)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Jd = T(function (e) {
      function t(n, r) {
        return (
          (e.exports = t =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          (e.exports.default = e.exports),
          (e.exports.__esModule = !0),
          t(n, r)
        );
      }
      (e.exports = t),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    }),
    Xd = T(function (e) {
      (e.exports = function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && Jd(e, t);
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    });
  function Qd(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var Zd = Qd(Vd),
    ep = Qd(Hd),
    tp = Qd(Ud),
    np = Qd(Kd),
    rp = Qd(Gd),
    op = Qd(Yd),
    ip = Qd(qd),
    ap = Qd(Xd),
    sp = {
      type: "logger",
      log: function (e) {
        this.output("log", e);
      },
      warn: function (e) {
        this.output("warn", e);
      },
      error: function (e) {
        this.output("error", e);
      },
      output: function (e, t) {
        console && console[e] && console[e].apply(console, t);
      },
    },
    lp = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        tp.default(this, e), this.init(t, n);
      }
      return (
        np.default(e, [
          {
            key: "init",
            value: function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              (this.prefix = t.prefix || "i18next:"),
                (this.logger = e || sp),
                (this.options = t),
                (this.debug = t.debug);
            },
          },
          {
            key: "setDebug",
            value: function (e) {
              this.debug = e;
            },
          },
          {
            key: "log",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "log", "", !0);
            },
          },
          {
            key: "warn",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "warn", "", !0);
            },
          },
          {
            key: "error",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "error", "");
            },
          },
          {
            key: "deprecate",
            value: function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
            },
          },
          {
            key: "forward",
            value: function (e, t, n, r) {
              return r && !this.debug
                ? null
                : ("string" == typeof e[0] &&
                    (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                  this.logger[t](e));
            },
          },
          {
            key: "create",
            value: function (t) {
              return new e(
                this.logger,
                ep.default(
                  {},
                  { prefix: "".concat(this.prefix, ":").concat(t, ":") },
                  this.options
                )
              );
            },
          },
        ]),
        e
      );
    })(),
    up = new lp(),
    cp = (function () {
      function e() {
        tp.default(this, e), (this.observers = {});
      }
      return (
        np.default(e, [
          {
            key: "on",
            value: function (e, t) {
              var n = this;
              return (
                e.split(" ").forEach(function (e) {
                  (n.observers[e] = n.observers[e] || []),
                    n.observers[e].push(t);
                }),
                this
              );
            },
          },
          {
            key: "off",
            value: function (e, t) {
              this.observers[e] &&
                (t
                  ? (this.observers[e] = this.observers[e].filter(function (e) {
                      return e !== t;
                    }))
                  : delete this.observers[e]);
            },
          },
          {
            key: "emit",
            value: function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              if (this.observers[e]) {
                var o = [].concat(this.observers[e]);
                o.forEach(function (e) {
                  e.apply(void 0, n);
                });
              }
              if (this.observers["*"]) {
                var i = [].concat(this.observers["*"]);
                i.forEach(function (t) {
                  t.apply(t, [e].concat(n));
                });
              }
            },
          },
        ]),
        e
      );
    })();
  function fp() {
    var e,
      t,
      n = new Promise(function (n, r) {
        (e = n), (t = r);
      });
    return (n.resolve = e), (n.reject = t), n;
  }
  function dp(e) {
    return null == e ? "" : "" + e;
  }
  function pp(e, t, n) {
    e.forEach(function (e) {
      t[e] && (n[e] = t[e]);
    });
  }
  function hp(e, t, n) {
    function r(e) {
      return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
    }
    function o() {
      return !e || "string" == typeof e;
    }
    for (
      var i = "string" != typeof t ? [].concat(t) : t.split(".");
      i.length > 1;

    ) {
      if (o()) return {};
      var a = r(i.shift());
      !e[a] && n && (e[a] = new n()),
        (e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {});
    }
    return o() ? {} : { obj: e, k: r(i.shift()) };
  }
  function gp(e, t, n) {
    var r = hp(e, t, Object);
    r.obj[r.k] = n;
  }
  function vp(e, t) {
    var n = hp(e, t),
      r = n.obj,
      o = n.k;
    if (r) return r[o];
  }
  function yp(e, t, n) {
    var r = vp(e, n);
    return void 0 !== r ? r : vp(t, n);
  }
  function mp(e, t, n) {
    for (var r in t)
      "__proto__" !== r &&
        "constructor" !== r &&
        (r in e
          ? "string" == typeof e[r] ||
            e[r] instanceof String ||
            "string" == typeof t[r] ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : mp(e[r], t[r], n)
          : (e[r] = t[r]));
    return e;
  }
  function bp(e) {
    return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  var wp = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
  };
  function xp(e) {
    return "string" == typeof e
      ? e.replace(/[&<>"'\/]/g, function (e) {
          return wp[e];
        })
      : e;
  }
  var Ep =
    "undefined" != typeof window &&
    window.navigator &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf("MSIE") > -1;
  function Sp(e, t) {
    var n =
      arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
    if (e) {
      if (e[t]) return e[t];
      for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
        if (!o) return;
        if ("string" == typeof o[r[i]] && i + 1 < r.length) return;
        if (void 0 === o[r[i]]) {
          for (
            var a = 2, s = r.slice(i, i + a).join(n), l = o[s];
            void 0 === l && r.length > i + a;

          )
            a++, (l = o[(s = r.slice(i, i + a).join(n))]);
          if (void 0 === l) return;
          if ("string" == typeof l) return l;
          if (s && "string" == typeof l[s]) return l[s];
          var u = r.slice(i + a).join(n);
          return u ? Sp(l, u, n) : void 0;
        }
        o = o[r[i]];
      }
      return o;
    }
  }
  var kp = (function (e) {
      function t(e) {
        var n,
          r =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { ns: ["translation"], defaultNS: "translation" };
        return (
          tp.default(this, t),
          (n = rp.default(this, op.default(t).call(this))),
          Ep && cp.call(ip.default(n)),
          (n.data = e || {}),
          (n.options = r),
          void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
          void 0 === n.options.ignoreJSONStructure &&
            (n.options.ignoreJSONStructure = !0),
          n
        );
      }
      return (
        ap.default(t, e),
        np.default(t, [
          {
            key: "addNamespaces",
            value: function (e) {
              this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
            },
          },
          {
            key: "removeNamespaces",
            value: function (e) {
              var t = this.options.ns.indexOf(e);
              t > -1 && this.options.ns.splice(t, 1);
            },
          },
          {
            key: "getResource",
            value: function (e, t, n) {
              var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {},
                o =
                  void 0 !== r.keySeparator
                    ? r.keySeparator
                    : this.options.keySeparator,
                i =
                  void 0 !== r.ignoreJSONStructure
                    ? r.ignoreJSONStructure
                    : this.options.ignoreJSONStructure,
                a = [e, t];
              n && "string" != typeof n && (a = a.concat(n)),
                n && "string" == typeof n && (a = a.concat(o ? n.split(o) : n)),
                e.indexOf(".") > -1 && (a = e.split("."));
              var s = vp(this.data, a);
              return s || !i || "string" != typeof n
                ? s
                : Sp(this.data && this.data[e] && this.data[e][t], n, o);
            },
          },
          {
            key: "addResource",
            value: function (e, t, n, r) {
              var o =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { silent: !1 },
                i = this.options.keySeparator;
              void 0 === i && (i = ".");
              var a = [e, t];
              n && (a = a.concat(i ? n.split(i) : n)),
                e.indexOf(".") > -1 && ((r = t), (t = (a = e.split("."))[1])),
                this.addNamespaces(t),
                gp(this.data, a, r),
                o.silent || this.emit("added", e, t, n, r);
            },
          },
          {
            key: "addResources",
            value: function (e, t, n) {
              var r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : { silent: !1 };
              for (var o in n)
                ("string" != typeof n[o] &&
                  "[object Array]" !== Object.prototype.toString.apply(n[o])) ||
                  this.addResource(e, t, o, n[o], { silent: !0 });
              r.silent || this.emit("added", e, t, n);
            },
          },
          {
            key: "addResourceBundle",
            value: function (e, t, n, r, o) {
              var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : { silent: !1 },
                a = [e, t];
              e.indexOf(".") > -1 &&
                ((r = n), (n = t), (t = (a = e.split("."))[1])),
                this.addNamespaces(t);
              var s = vp(this.data, a) || {};
              r ? mp(s, n, o) : (s = ep.default({}, s, n)),
                gp(this.data, a, s),
                i.silent || this.emit("added", e, t, n);
            },
          },
          {
            key: "removeResourceBundle",
            value: function (e, t) {
              this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t);
            },
          },
          {
            key: "hasResourceBundle",
            value: function (e, t) {
              return void 0 !== this.getResource(e, t);
            },
          },
          {
            key: "getResourceBundle",
            value: function (e, t) {
              return (
                t || (t = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI
                  ? ep.default({}, {}, this.getResource(e, t))
                  : this.getResource(e, t)
              );
            },
          },
          {
            key: "getDataByLanguage",
            value: function (e) {
              return this.data[e];
            },
          },
          {
            key: "toJSON",
            value: function () {
              return this.data;
            },
          },
        ]),
        t
      );
    })(cp),
    Op = {
      processors: {},
      addPostProcessor: function (e) {
        this.processors[e.name] = e;
      },
      handle: function (e, t, n, r, o) {
        var i = this;
        return (
          e.forEach(function (e) {
            i.processors[e] && (t = i.processors[e].process(t, n, r, o));
          }),
          t
        );
      },
    },
    Cp = {},
    Tp = (function (e) {
      function t(e) {
        var n,
          r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          tp.default(this, t),
          (n = rp.default(this, op.default(t).call(this))),
          Ep && cp.call(ip.default(n)),
          pp(
            [
              "resourceStore",
              "languageUtils",
              "pluralResolver",
              "interpolator",
              "backendConnector",
              "i18nFormat",
              "utils",
            ],
            e,
            ip.default(n)
          ),
          (n.options = r),
          void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
          (n.logger = up.create("translator")),
          n
        );
      }
      return (
        ap.default(t, e),
        np.default(
          t,
          [
            {
              key: "changeLanguage",
              value: function (e) {
                e && (this.language = e);
              },
            },
            {
              key: "exists",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : { interpolation: {} };
                if (null == e) return !1;
                var n = this.resolve(e, t);
                return n && void 0 !== n.res;
              },
            },
            {
              key: "extractFromKey",
              value: function (e, t) {
                var n =
                  void 0 !== t.nsSeparator
                    ? t.nsSeparator
                    : this.options.nsSeparator;
                void 0 === n && (n = ":");
                var r =
                    void 0 !== t.keySeparator
                      ? t.keySeparator
                      : this.options.keySeparator,
                  o = t.ns || this.options.defaultNS;
                if (n && e.indexOf(n) > -1) {
                  var i = e.match(this.interpolator.nestingRegexp);
                  if (i && i.length > 0) return { key: e, namespaces: o };
                  var a = e.split(n);
                  (n !== r ||
                    (n === r && this.options.ns.indexOf(a[0]) > -1)) &&
                    (o = a.shift()),
                    (e = a.join(r));
                }
                return (
                  "string" == typeof o && (o = [o]), { key: e, namespaces: o }
                );
              },
            },
            {
              key: "translate",
              value: function (e, n, r) {
                var o = this;
                if (
                  ("object" !== Zd.default(n) &&
                    this.options.overloadTranslationOptionHandler &&
                    (n =
                      this.options.overloadTranslationOptionHandler(arguments)),
                  n || (n = {}),
                  null == e)
                )
                  return "";
                Array.isArray(e) || (e = [String(e)]);
                var i =
                    void 0 !== n.keySeparator
                      ? n.keySeparator
                      : this.options.keySeparator,
                  a = this.extractFromKey(e[e.length - 1], n),
                  s = a.key,
                  l = a.namespaces,
                  u = l[l.length - 1],
                  c = n.lng || this.language,
                  f =
                    n.appendNamespaceToCIMode ||
                    this.options.appendNamespaceToCIMode;
                if (c && "cimode" === c.toLowerCase()) {
                  if (f) {
                    var d = n.nsSeparator || this.options.nsSeparator;
                    return u + d + s;
                  }
                  return s;
                }
                var p = this.resolve(e, n),
                  h = p && p.res,
                  g = (p && p.usedKey) || s,
                  v = (p && p.exactUsedKey) || s,
                  y = Object.prototype.toString.apply(h),
                  m = [
                    "[object Number]",
                    "[object Function]",
                    "[object RegExp]",
                  ],
                  b =
                    void 0 !== n.joinArrays
                      ? n.joinArrays
                      : this.options.joinArrays,
                  w = !this.i18nFormat || this.i18nFormat.handleAsObject,
                  x =
                    "string" != typeof h &&
                    "boolean" != typeof h &&
                    "number" != typeof h;
                if (
                  w &&
                  h &&
                  x &&
                  m.indexOf(y) < 0 &&
                  ("string" != typeof b || "[object Array]" !== y)
                ) {
                  if (!n.returnObjects && !this.options.returnObjects)
                    return (
                      this.options.returnedObjectHandler ||
                        this.logger.warn(
                          "accessing an object - but returnObjects options is not enabled!"
                        ),
                      this.options.returnedObjectHandler
                        ? this.options.returnedObjectHandler(
                            g,
                            h,
                            ep.default({}, n, { ns: l })
                          )
                        : "key '"
                            .concat(s, " (")
                            .concat(
                              this.language,
                              ")' returned an object instead of string."
                            )
                    );
                  if (i) {
                    var E = "[object Array]" === y,
                      S = E ? [] : {},
                      k = E ? v : g;
                    for (var O in h)
                      if (Object.prototype.hasOwnProperty.call(h, O)) {
                        var C = "".concat(k).concat(i).concat(O);
                        (S[O] = this.translate(
                          C,
                          ep.default({}, n, { joinArrays: !1, ns: l })
                        )),
                          S[O] === C && (S[O] = h[O]);
                      }
                    h = S;
                  }
                } else if (w && "string" == typeof b && "[object Array]" === y)
                  (h = h.join(b)) && (h = this.extendTranslation(h, e, n, r));
                else {
                  var T = !1,
                    N = !1,
                    M = void 0 !== n.count && "string" != typeof n.count,
                    L = t.hasDefaultValue(n),
                    R = M ? this.pluralResolver.getSuffix(c, n.count) : "",
                    P = n["defaultValue".concat(R)] || n.defaultValue;
                  !this.isValidLookup(h) && L && ((T = !0), (h = P)),
                    this.isValidLookup(h) || ((N = !0), (h = s));
                  var D =
                      n.missingKeyNoValueFallbackToKey ||
                      this.options.missingKeyNoValueFallbackToKey,
                    j = D && N ? void 0 : h,
                    A = L && P !== h && this.options.updateMissing;
                  if (N || T || A) {
                    if (
                      (this.logger.log(
                        A ? "updateKey" : "missingKey",
                        c,
                        u,
                        s,
                        A ? P : h
                      ),
                      i)
                    ) {
                      var _ = this.resolve(
                        s,
                        ep.default({}, n, { keySeparator: !1 })
                      );
                      _ &&
                        _.res &&
                        this.logger.warn(
                          "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                        );
                    }
                    var F = [],
                      I = this.languageUtils.getFallbackCodes(
                        this.options.fallbackLng,
                        n.lng || this.language
                      );
                    if ("fallback" === this.options.saveMissingTo && I && I[0])
                      for (var B = 0; B < I.length; B++) F.push(I[B]);
                    else
                      "all" === this.options.saveMissingTo
                        ? (F = this.languageUtils.toResolveHierarchy(
                            n.lng || this.language
                          ))
                        : F.push(n.lng || this.language);
                    var $ = function (e, t, r) {
                      o.options.missingKeyHandler
                        ? o.options.missingKeyHandler(e, u, t, A ? r : j, A, n)
                        : o.backendConnector &&
                          o.backendConnector.saveMissing &&
                          o.backendConnector.saveMissing(
                            e,
                            u,
                            t,
                            A ? r : j,
                            A,
                            n
                          ),
                        o.emit("missingKey", e, u, t, h);
                    };
                    this.options.saveMissing &&
                      (this.options.saveMissingPlurals && M
                        ? F.forEach(function (e) {
                            o.pluralResolver
                              .getSuffixes(e)
                              .forEach(function (t) {
                                $([e], s + t, n["defaultValue".concat(t)] || P);
                              });
                          })
                        : $(F, s, P));
                  }
                  (h = this.extendTranslation(h, e, n, p, r)),
                    N &&
                      h === s &&
                      this.options.appendNamespaceToMissingKey &&
                      (h = "".concat(u, ":").concat(s)),
                    (N || T) &&
                      this.options.parseMissingKeyHandler &&
                      (h = this.options.parseMissingKeyHandler(h));
                }
                return h;
              },
            },
            {
              key: "extendTranslation",
              value: function (e, t, n, r, o) {
                var i = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                  e = this.i18nFormat.parse(
                    e,
                    n,
                    r.usedLng,
                    r.usedNS,
                    r.usedKey,
                    { resolved: r }
                  );
                else if (!n.skipInterpolation) {
                  n.interpolation &&
                    this.interpolator.init(
                      ep.default({}, n, {
                        interpolation: ep.default(
                          {},
                          this.options.interpolation,
                          n.interpolation
                        ),
                      })
                    );
                  var a,
                    s =
                      (n.interpolation && n.interpolation.skipOnVariables) ||
                      this.options.interpolation.skipOnVariables;
                  if (s) {
                    var l = e.match(this.interpolator.nestingRegexp);
                    a = l && l.length;
                  }
                  var u =
                    n.replace && "string" != typeof n.replace ? n.replace : n;
                  if (
                    (this.options.interpolation.defaultVariables &&
                      (u = ep.default(
                        {},
                        this.options.interpolation.defaultVariables,
                        u
                      )),
                    (e = this.interpolator.interpolate(
                      e,
                      u,
                      n.lng || this.language,
                      n
                    )),
                    s)
                  ) {
                    var c = e.match(this.interpolator.nestingRegexp);
                    a < (c && c.length) && (n.nest = !1);
                  }
                  !1 !== n.nest &&
                    (e = this.interpolator.nest(
                      e,
                      function () {
                        for (
                          var e = arguments.length, r = new Array(e), a = 0;
                          a < e;
                          a++
                        )
                          r[a] = arguments[a];
                        return o && o[0] === r[0] && !n.context
                          ? (i.logger.warn(
                              "It seems you are nesting recursively key: "
                                .concat(r[0], " in key: ")
                                .concat(t[0])
                            ),
                            null)
                          : i.translate.apply(i, r.concat([t]));
                      },
                      n
                    )),
                    n.interpolation && this.interpolator.reset();
                }
                var f = n.postProcess || this.options.postProcess,
                  d = "string" == typeof f ? [f] : f;
                return (
                  null != e &&
                    d &&
                    d.length &&
                    !1 !== n.applyPostProcessor &&
                    (e = Op.handle(
                      d,
                      e,
                      t,
                      this.options && this.options.postProcessPassResolved
                        ? ep.default({ i18nResolved: r }, n)
                        : n,
                      this
                    )),
                  e
                );
              },
            },
            {
              key: "resolve",
              value: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = this,
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                return (
                  "string" == typeof e && (e = [e]),
                  e.forEach(function (e) {
                    if (!a.isValidLookup(t)) {
                      var l = a.extractFromKey(e, s),
                        u = l.key;
                      n = u;
                      var c = l.namespaces;
                      a.options.fallbackNS &&
                        (c = c.concat(a.options.fallbackNS));
                      var f = void 0 !== s.count && "string" != typeof s.count,
                        d =
                          void 0 !== s.context &&
                          ("string" == typeof s.context ||
                            "number" == typeof s.context) &&
                          "" !== s.context,
                        p = s.lngs
                          ? s.lngs
                          : a.languageUtils.toResolveHierarchy(
                              s.lng || a.language,
                              s.fallbackLng
                            );
                      c.forEach(function (e) {
                        a.isValidLookup(t) ||
                          ((i = e),
                          !Cp["".concat(p[0], "-").concat(e)] &&
                            a.utils &&
                            a.utils.hasLoadedNamespace &&
                            !a.utils.hasLoadedNamespace(i) &&
                            ((Cp["".concat(p[0], "-").concat(e)] = !0),
                            a.logger.warn(
                              'key "'
                                .concat(n, '" for languages "')
                                .concat(
                                  p.join(", "),
                                  '" won\'t get resolved as namespace "'
                                )
                                .concat(i, '" was not yet loaded'),
                              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                            )),
                          p.forEach(function (n) {
                            if (!a.isValidLookup(t)) {
                              o = n;
                              var i,
                                l,
                                c = u,
                                p = [c];
                              if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                a.i18nFormat.addLookupKeys(p, u, n, e, s);
                              else
                                f &&
                                  (i = a.pluralResolver.getSuffix(n, s.count)),
                                  f && d && p.push(c + i),
                                  d &&
                                    p.push(
                                      (c += ""
                                        .concat(a.options.contextSeparator)
                                        .concat(s.context))
                                    ),
                                  f && p.push((c += i));
                              for (; (l = p.pop()); )
                                a.isValidLookup(t) ||
                                  ((r = l), (t = a.getResource(n, e, l, s)));
                            }
                          }));
                      });
                    }
                  }),
                  { res: t, usedKey: n, exactUsedKey: r, usedLng: o, usedNS: i }
                );
              },
            },
            {
              key: "isValidLookup",
              value: function (e) {
                return !(
                  void 0 === e ||
                  (!this.options.returnNull && null === e) ||
                  (!this.options.returnEmptyString && "" === e)
                );
              },
            },
            {
              key: "getResource",
              value: function (e, t, n) {
                var r =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : {};
                return this.i18nFormat && this.i18nFormat.getResource
                  ? this.i18nFormat.getResource(e, t, n, r)
                  : this.resourceStore.getResource(e, t, n, r);
              },
            },
          ],
          [
            {
              key: "hasDefaultValue",
              value: function (e) {
                var t = "defaultValue";
                for (var n in e)
                  if (
                    Object.prototype.hasOwnProperty.call(e, n) &&
                    t === n.substring(0, t.length) &&
                    void 0 !== e[n]
                  )
                    return !0;
                return !1;
              },
            },
          ]
        ),
        t
      );
    })(cp);
  function Np(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  var Mp = (function () {
      function e(t) {
        tp.default(this, e),
          (this.options = t),
          (this.whitelist = this.options.supportedLngs || !1),
          (this.supportedLngs = this.options.supportedLngs || !1),
          (this.logger = up.create("languageUtils"));
      }
      return (
        np.default(e, [
          {
            key: "getScriptPartFromCode",
            value: function (e) {
              if (!e || e.indexOf("-") < 0) return null;
              var t = e.split("-");
              return 2 === t.length
                ? null
                : (t.pop(),
                  "x" === t[t.length - 1].toLowerCase()
                    ? null
                    : this.formatLanguageCode(t.join("-")));
            },
          },
          {
            key: "getLanguagePartFromCode",
            value: function (e) {
              if (!e || e.indexOf("-") < 0) return e;
              var t = e.split("-");
              return this.formatLanguageCode(t[0]);
            },
          },
          {
            key: "formatLanguageCode",
            value: function (e) {
              if ("string" == typeof e && e.indexOf("-") > -1) {
                var t = [
                    "hans",
                    "hant",
                    "latn",
                    "cyrl",
                    "cans",
                    "mong",
                    "arab",
                  ],
                  n = e.split("-");
                return (
                  this.options.lowerCaseLng
                    ? (n = n.map(function (e) {
                        return e.toLowerCase();
                      }))
                    : 2 === n.length
                    ? ((n[0] = n[0].toLowerCase()),
                      (n[1] = n[1].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = Np(n[1].toLowerCase())))
                    : 3 === n.length &&
                      ((n[0] = n[0].toLowerCase()),
                      2 === n[1].length && (n[1] = n[1].toUpperCase()),
                      "sgn" !== n[0] &&
                        2 === n[2].length &&
                        (n[2] = n[2].toUpperCase()),
                      t.indexOf(n[1].toLowerCase()) > -1 &&
                        (n[1] = Np(n[1].toLowerCase())),
                      t.indexOf(n[2].toLowerCase()) > -1 &&
                        (n[2] = Np(n[2].toLowerCase()))),
                  n.join("-")
                );
              }
              return this.options.cleanCode || this.options.lowerCaseLng
                ? e.toLowerCase()
                : e;
            },
          },
          {
            key: "isWhitelisted",
            value: function (e) {
              return (
                this.logger.deprecate(
                  "languageUtils.isWhitelisted",
                  'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'
                ),
                this.isSupportedCode(e)
              );
            },
          },
          {
            key: "isSupportedCode",
            value: function (e) {
              return (
                ("languageOnly" === this.options.load ||
                  this.options.nonExplicitSupportedLngs) &&
                  (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs ||
                  !this.supportedLngs.length ||
                  this.supportedLngs.indexOf(e) > -1
              );
            },
          },
          {
            key: "getBestMatchFromCodes",
            value: function (e) {
              var t,
                n = this;
              return e
                ? (e.forEach(function (e) {
                    if (!t) {
                      var r = n.formatLanguageCode(e);
                      (n.options.supportedLngs && !n.isSupportedCode(r)) ||
                        (t = r);
                    }
                  }),
                  !t &&
                    this.options.supportedLngs &&
                    e.forEach(function (e) {
                      if (!t) {
                        var r = n.getLanguagePartFromCode(e);
                        if (n.isSupportedCode(r)) return (t = r);
                        t = n.options.supportedLngs.find(function (e) {
                          if (0 === e.indexOf(r)) return e;
                        });
                      }
                    }),
                  t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                  t)
                : null;
            },
          },
          {
            key: "getFallbackCodes",
            value: function (e, t) {
              if (!e) return [];
              if (
                ("function" == typeof e && (e = e(t)),
                "string" == typeof e && (e = [e]),
                "[object Array]" === Object.prototype.toString.apply(e))
              )
                return e;
              if (!t) return e.default || [];
              var n = e[t];
              return (
                n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e[this.getLanguagePartFromCode(t)]),
                n || (n = e.default),
                n || []
              );
            },
          },
          {
            key: "toResolveHierarchy",
            value: function (e, t) {
              var n = this,
                r = this.getFallbackCodes(
                  t || this.options.fallbackLng || [],
                  e
                ),
                o = [],
                i = function (e) {
                  e &&
                    (n.isSupportedCode(e)
                      ? o.push(e)
                      : n.logger.warn(
                          "rejecting language code not found in supportedLngs: ".concat(
                            e
                          )
                        ));
                };
              return (
                "string" == typeof e && e.indexOf("-") > -1
                  ? ("languageOnly" !== this.options.load &&
                      i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load &&
                      "currentOnly" !== this.options.load &&
                      i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load &&
                      i(this.getLanguagePartFromCode(e)))
                  : "string" == typeof e && i(this.formatLanguageCode(e)),
                r.forEach(function (e) {
                  o.indexOf(e) < 0 && i(n.formatLanguageCode(e));
                }),
                o
              );
            },
          },
        ]),
        e
      );
    })(),
    Lp = [
      {
        lngs: [
          "ach",
          "ak",
          "am",
          "arn",
          "br",
          "fil",
          "gun",
          "ln",
          "mfe",
          "mg",
          "mi",
          "oc",
          "pt",
          "pt-BR",
          "tg",
          "tl",
          "ti",
          "tr",
          "uz",
          "wa",
        ],
        nr: [1, 2],
        fc: 1,
      },
      {
        lngs: [
          "af",
          "an",
          "ast",
          "az",
          "bg",
          "bn",
          "ca",
          "da",
          "de",
          "dev",
          "el",
          "en",
          "eo",
          "es",
          "et",
          "eu",
          "fi",
          "fo",
          "fur",
          "fy",
          "gl",
          "gu",
          "ha",
          "hi",
          "hu",
          "hy",
          "ia",
          "it",
          "kk",
          "kn",
          "ku",
          "lb",
          "mai",
          "ml",
          "mn",
          "mr",
          "nah",
          "nap",
          "nb",
          "ne",
          "nl",
          "nn",
          "no",
          "nso",
          "pa",
          "pap",
          "pms",
          "ps",
          "pt-PT",
          "rm",
          "sco",
          "se",
          "si",
          "so",
          "son",
          "sq",
          "sv",
          "sw",
          "ta",
          "te",
          "tk",
          "ur",
          "yo",
        ],
        nr: [1, 2],
        fc: 2,
      },
      {
        lngs: [
          "ay",
          "bo",
          "cgg",
          "fa",
          "ht",
          "id",
          "ja",
          "jbo",
          "ka",
          "km",
          "ko",
          "ky",
          "lo",
          "ms",
          "sah",
          "su",
          "th",
          "tt",
          "ug",
          "vi",
          "wo",
          "zh",
        ],
        nr: [1],
        fc: 3,
      },
      {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4,
      },
      { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
      { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
      { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
      { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
      { lngs: ["fr"], nr: [1, 2], fc: 9 },
      { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
      { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
      { lngs: ["is"], nr: [1, 2], fc: 12 },
      { lngs: ["jv"], nr: [0, 1], fc: 13 },
      { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
      { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
      { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
      { lngs: ["mk"], nr: [1, 2], fc: 17 },
      { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
      { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
      { lngs: ["or"], nr: [2, 1], fc: 2 },
      { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
      { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
      { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
    ],
    Rp = {
      1: function (e) {
        return Number(e > 1);
      },
      2: function (e) {
        return Number(1 != e);
      },
      3: function (e) {
        return 0;
      },
      4: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      5: function (e) {
        return Number(
          0 == e
            ? 0
            : 1 == e
            ? 1
            : 2 == e
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
            ? 3
            : e % 100 >= 11
            ? 4
            : 5
        );
      },
      6: function (e) {
        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
      },
      7: function (e) {
        return Number(
          1 == e
            ? 0
            : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      8: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
      },
      9: function (e) {
        return Number(e >= 2);
      },
      10: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
      },
      11: function (e) {
        return Number(
          1 == e || 11 == e
            ? 0
            : 2 == e || 12 == e
            ? 1
            : e > 2 && e < 20
            ? 2
            : 3
        );
      },
      12: function (e) {
        return Number(e % 10 != 1 || e % 100 == 11);
      },
      13: function (e) {
        return Number(0 !== e);
      },
      14: function (e) {
        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
      },
      15: function (e) {
        return Number(
          e % 10 == 1 && e % 100 != 11
            ? 0
            : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
            ? 1
            : 2
        );
      },
      16: function (e) {
        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
      },
      17: function (e) {
        return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
      },
      18: function (e) {
        return Number(0 == e ? 0 : 1 == e ? 1 : 2);
      },
      19: function (e) {
        return Number(
          1 == e
            ? 0
            : 0 == e || (e % 100 > 1 && e % 100 < 11)
            ? 1
            : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3
        );
      },
      20: function (e) {
        return Number(
          1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2
        );
      },
      21: function (e) {
        return Number(
          e % 100 == 1
            ? 1
            : e % 100 == 2
            ? 2
            : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0
        );
      },
      22: function (e) {
        return Number(
          1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3
        );
      },
    };
  function Pp() {
    var e = {};
    return (
      Lp.forEach(function (t) {
        t.lngs.forEach(function (n) {
          e[n] = { numbers: t.nr, plurals: Rp[t.fc] };
        });
      }),
      e
    );
  }
  var Dp = (function () {
      function e(t) {
        var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        tp.default(this, e),
          (this.languageUtils = t),
          (this.options = n),
          (this.logger = up.create("pluralResolver")),
          (this.rules = Pp());
      }
      return (
        np.default(e, [
          {
            key: "addRule",
            value: function (e, t) {
              this.rules[e] = t;
            },
          },
          {
            key: "getRule",
            value: function (e) {
              return (
                this.rules[e] ||
                this.rules[this.languageUtils.getLanguagePartFromCode(e)]
              );
            },
          },
          {
            key: "needsPlural",
            value: function (e) {
              var t = this.getRule(e);
              return t && t.numbers.length > 1;
            },
          },
          {
            key: "getPluralFormsOfKey",
            value: function (e, t) {
              return this.getSuffixes(e).map(function (e) {
                return t + e;
              });
            },
          },
          {
            key: "getSuffixes",
            value: function (e) {
              var t = this,
                n = this.getRule(e);
              return n
                ? n.numbers.map(function (n) {
                    return t.getSuffix(e, n);
                  })
                : [];
            },
          },
          {
            key: "getSuffix",
            value: function (e, t) {
              var n = this,
                r = this.getRule(e);
              if (r) {
                var o = r.noAbs ? r.plurals(t) : r.plurals(Math.abs(t)),
                  i = r.numbers[o];
                this.options.simplifyPluralSuffix &&
                  2 === r.numbers.length &&
                  1 === r.numbers[0] &&
                  (2 === i ? (i = "plural") : 1 === i && (i = ""));
                var a = function () {
                  return n.options.prepend && i.toString()
                    ? n.options.prepend + i.toString()
                    : i.toString();
                };
                return "v1" === this.options.compatibilityJSON
                  ? 1 === i
                    ? ""
                    : "number" == typeof i
                    ? "_plural_".concat(i.toString())
                    : a()
                  : "v2" === this.options.compatibilityJSON ||
                    (this.options.simplifyPluralSuffix &&
                      2 === r.numbers.length &&
                      1 === r.numbers[0])
                  ? a()
                  : this.options.prepend && o.toString()
                  ? this.options.prepend + o.toString()
                  : o.toString();
              }
              return (
                this.logger.warn("no plural rule found for: ".concat(e)), ""
              );
            },
          },
        ]),
        e
      );
    })(),
    jp = (function () {
      function e() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        tp.default(this, e),
          (this.logger = up.create("interpolator")),
          (this.options = t),
          (this.format =
            (t.interpolation && t.interpolation.format) ||
            function (e) {
              return e;
            }),
          this.init(t);
      }
      return (
        np.default(e, [
          {
            key: "init",
            value: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              e.interpolation || (e.interpolation = { escapeValue: !0 });
              var t = e.interpolation;
              (this.escape = void 0 !== t.escape ? t.escape : xp),
                (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                (this.useRawValueToEscape =
                  void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                (this.prefix = t.prefix
                  ? bp(t.prefix)
                  : t.prefixEscaped || "{{"),
                (this.suffix = t.suffix
                  ? bp(t.suffix)
                  : t.suffixEscaped || "}}"),
                (this.formatSeparator = t.formatSeparator
                  ? t.formatSeparator
                  : t.formatSeparator || ","),
                (this.unescapePrefix = t.unescapeSuffix
                  ? ""
                  : t.unescapePrefix || "-"),
                (this.unescapeSuffix = this.unescapePrefix
                  ? ""
                  : t.unescapeSuffix || ""),
                (this.nestingPrefix = t.nestingPrefix
                  ? bp(t.nestingPrefix)
                  : t.nestingPrefixEscaped || bp("$t(")),
                (this.nestingSuffix = t.nestingSuffix
                  ? bp(t.nestingSuffix)
                  : t.nestingSuffixEscaped || bp(")")),
                (this.nestingOptionsSeparator = t.nestingOptionsSeparator
                  ? t.nestingOptionsSeparator
                  : t.nestingOptionsSeparator || ","),
                (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                (this.alwaysFormat =
                  void 0 !== t.alwaysFormat && t.alwaysFormat),
                this.resetRegExp();
            },
          },
          {
            key: "reset",
            value: function () {
              this.options && this.init(this.options);
            },
          },
          {
            key: "resetRegExp",
            value: function () {
              var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
              this.regexp = new RegExp(e, "g");
              var t = ""
                .concat(this.prefix)
                .concat(this.unescapePrefix, "(.+?)")
                .concat(this.unescapeSuffix)
                .concat(this.suffix);
              this.regexpUnescape = new RegExp(t, "g");
              var n = ""
                .concat(this.nestingPrefix, "(.+?)")
                .concat(this.nestingSuffix);
              this.nestingRegexp = new RegExp(n, "g");
            },
          },
          {
            key: "interpolate",
            value: function (e, t, n, r) {
              var o,
                i,
                a,
                s = this,
                l =
                  (this.options &&
                    this.options.interpolation &&
                    this.options.interpolation.defaultVariables) ||
                  {};
              function u(e) {
                return e.replace(/\$/g, "$$$$");
              }
              var c = function (e) {
                if (e.indexOf(s.formatSeparator) < 0) {
                  var o = yp(t, l, e);
                  return s.alwaysFormat
                    ? s.format(
                        o,
                        void 0,
                        n,
                        ep.default({}, r, t, { interpolationkey: e })
                      )
                    : o;
                }
                var i = e.split(s.formatSeparator),
                  a = i.shift().trim(),
                  u = i.join(s.formatSeparator).trim();
                return s.format(
                  yp(t, l, a),
                  u,
                  n,
                  ep.default({}, r, t, { interpolationkey: a })
                );
              };
              this.resetRegExp();
              var f =
                  (r && r.missingInterpolationHandler) ||
                  this.options.missingInterpolationHandler,
                d =
                  (r && r.interpolation && r.interpolation.skipOnVariables) ||
                  this.options.interpolation.skipOnVariables;
              return (
                [
                  {
                    regex: this.regexpUnescape,
                    safeValue: function (e) {
                      return u(e);
                    },
                  },
                  {
                    regex: this.regexp,
                    safeValue: function (e) {
                      return s.escapeValue ? u(s.escape(e)) : u(e);
                    },
                  },
                ].forEach(function (t) {
                  for (a = 0; (o = t.regex.exec(e)); ) {
                    if (void 0 === (i = c(o[1].trim())))
                      if ("function" == typeof f) {
                        var n = f(e, o, r);
                        i = "string" == typeof n ? n : "";
                      } else {
                        if (d) {
                          i = o[0];
                          continue;
                        }
                        s.logger.warn(
                          "missed to pass in variable "
                            .concat(o[1], " for interpolating ")
                            .concat(e)
                        ),
                          (i = "");
                      }
                    else
                      "string" == typeof i ||
                        s.useRawValueToEscape ||
                        (i = dp(i));
                    var l = t.safeValue(i);
                    if (
                      ((e = e.replace(o[0], l)),
                      d
                        ? ((t.regex.lastIndex += l.length),
                          (t.regex.lastIndex -= o[0].length))
                        : (t.regex.lastIndex = 0),
                      ++a >= s.maxReplaces)
                    )
                      break;
                  }
                }),
                e
              );
            },
          },
          {
            key: "nest",
            value: function (e, t) {
              var n,
                r,
                o = this,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                a = ep.default({}, i);
              function s(e, t) {
                var n = this.nestingOptionsSeparator;
                if (e.indexOf(n) < 0) return e;
                var r = e.split(new RegExp("".concat(n, "[ ]*{"))),
                  o = "{".concat(r[1]);
                (e = r[0]),
                  (o = (o = this.interpolate(o, a)).replace(/'/g, '"'));
                try {
                  (a = JSON.parse(o)), t && (a = ep.default({}, t, a));
                } catch (t) {
                  return (
                    this.logger.warn(
                      "failed parsing options string in nesting for key ".concat(
                        e
                      ),
                      t
                    ),
                    "".concat(e).concat(n).concat(o)
                  );
                }
                return delete a.defaultValue, e;
              }
              for (
                a.applyPostProcessor = !1, delete a.defaultValue;
                (n = this.nestingRegexp.exec(e));

              ) {
                var l = [],
                  u = !1;
                if (
                  -1 !== n[0].indexOf(this.formatSeparator) &&
                  !/{.*}/.test(n[1])
                ) {
                  var c = n[1].split(this.formatSeparator).map(function (e) {
                    return e.trim();
                  });
                  (n[1] = c.shift()), (l = c), (u = !0);
                }
                if (
                  (r = t(s.call(this, n[1].trim(), a), a)) &&
                  n[0] === e &&
                  "string" != typeof r
                )
                  return r;
                "string" != typeof r && (r = dp(r)),
                  r ||
                    (this.logger.warn(
                      "missed to resolve "
                        .concat(n[1], " for nesting ")
                        .concat(e)
                    ),
                    (r = "")),
                  u &&
                    (r = l.reduce(function (e, t) {
                      return o.format(
                        e,
                        t,
                        i.lng,
                        ep.default({}, i, { interpolationkey: n[1].trim() })
                      );
                    }, r.trim())),
                  (e = e.replace(n[0], r)),
                  (this.regexp.lastIndex = 0);
              }
              return e;
            },
          },
        ]),
        e
      );
    })();
  var Ap = (function (e) {
    function t(e, n, r) {
      var o,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return (
        tp.default(this, t),
        (o = rp.default(this, op.default(t).call(this))),
        Ep && cp.call(ip.default(o)),
        (o.backend = e),
        (o.store = n),
        (o.services = r),
        (o.languageUtils = r.languageUtils),
        (o.options = i),
        (o.logger = up.create("backendConnector")),
        (o.state = {}),
        (o.queue = []),
        o.backend && o.backend.init && o.backend.init(r, i.backend, i),
        o
      );
    }
    return (
      ap.default(t, e),
      np.default(t, [
        {
          key: "queueLoad",
          value: function (e, t, n, r) {
            var o = this,
              i = [],
              a = [],
              s = [],
              l = [];
            return (
              e.forEach(function (e) {
                var r = !0;
                t.forEach(function (t) {
                  var s = "".concat(e, "|").concat(t);
                  !n.reload && o.store.hasResourceBundle(e, t)
                    ? (o.state[s] = 2)
                    : o.state[s] < 0 ||
                      (1 === o.state[s]
                        ? a.indexOf(s) < 0 && a.push(s)
                        : ((o.state[s] = 1),
                          (r = !1),
                          a.indexOf(s) < 0 && a.push(s),
                          i.indexOf(s) < 0 && i.push(s),
                          l.indexOf(t) < 0 && l.push(t)));
                }),
                  r || s.push(e);
              }),
              (i.length || a.length) &&
                this.queue.push({
                  pending: a,
                  loaded: {},
                  errors: [],
                  callback: r,
                }),
              { toLoad: i, pending: a, toLoadLanguages: s, toLoadNamespaces: l }
            );
          },
        },
        {
          key: "loaded",
          value: function (e, t, n) {
            var r = e.split("|"),
              o = r[0],
              i = r[1];
            t && this.emit("failedLoading", o, i, t),
              n && this.store.addResourceBundle(o, i, n),
              (this.state[e] = t ? -1 : 2);
            var a = {};
            this.queue.forEach(function (n) {
              !(function (e, t, n, r) {
                var o = hp(e, t, Object),
                  i = o.obj,
                  a = o.k;
                (i[a] = i[a] || []),
                  r && (i[a] = i[a].concat(n)),
                  r || i[a].push(n);
              })(n.loaded, [o], i),
                (function (e, t) {
                  for (var n = e.indexOf(t); -1 !== n; )
                    e.splice(n, 1), (n = e.indexOf(t));
                })(n.pending, e),
                t && n.errors.push(t),
                0 !== n.pending.length ||
                  n.done ||
                  (Object.keys(n.loaded).forEach(function (e) {
                    a[e] || (a[e] = []),
                      n.loaded[e].length &&
                        n.loaded[e].forEach(function (t) {
                          a[e].indexOf(t) < 0 && a[e].push(t);
                        });
                  }),
                  (n.done = !0),
                  n.errors.length ? n.callback(n.errors) : n.callback());
            }),
              this.emit("loaded", a),
              (this.queue = this.queue.filter(function (e) {
                return !e.done;
              }));
          },
        },
        {
          key: "read",
          value: function (e, t, n) {
            var r = this,
              o =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : 0,
              i =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : 350,
              a = arguments.length > 5 ? arguments[5] : void 0;
            return e.length
              ? this.backend[n](e, t, function (s, l) {
                  s && l && o < 5
                    ? setTimeout(function () {
                        r.read.call(r, e, t, n, o + 1, 2 * i, a);
                      }, i)
                    : a(s, l);
                })
              : a(null, {});
          },
        },
        {
          key: "prepareLoading",
          value: function (e, t) {
            var n = this,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              o = arguments.length > 3 ? arguments[3] : void 0;
            if (!this.backend)
              return (
                this.logger.warn(
                  "No backend was added via i18next.use. Will not load resources."
                ),
                o && o()
              );
            "string" == typeof e &&
              (e = this.languageUtils.toResolveHierarchy(e)),
              "string" == typeof t && (t = [t]);
            var i = this.queueLoad(e, t, r, o);
            if (!i.toLoad.length) return i.pending.length || o(), null;
            i.toLoad.forEach(function (e) {
              n.loadOne(e);
            });
          },
        },
        {
          key: "load",
          value: function (e, t, n) {
            this.prepareLoading(e, t, {}, n);
          },
        },
        {
          key: "reload",
          value: function (e, t, n) {
            this.prepareLoading(e, t, { reload: !0 }, n);
          },
        },
        {
          key: "loadOne",
          value: function (e) {
            var t = this,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              r = e.split("|"),
              o = r[0],
              i = r[1];
            this.read(o, i, "read", void 0, void 0, function (r, a) {
              r &&
                t.logger.warn(
                  ""
                    .concat(n, "loading namespace ")
                    .concat(i, " for language ")
                    .concat(o, " failed"),
                  r
                ),
                !r &&
                  a &&
                  t.logger.log(
                    ""
                      .concat(n, "loaded namespace ")
                      .concat(i, " for language ")
                      .concat(o),
                    a
                  ),
                t.loaded(e, r, a);
            });
          },
        },
        {
          key: "saveMissing",
          value: function (e, t, n, r, o) {
            var i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : {};
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(t)
              ? this.logger.warn(
                  'did not save key "'
                    .concat(n, '" as the namespace "')
                    .concat(t, '" was not yet loaded'),
                  "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                )
              : null != n &&
                "" !== n &&
                (this.backend &&
                  this.backend.create &&
                  this.backend.create(
                    e,
                    t,
                    n,
                    r,
                    null,
                    ep.default({}, i, { isUpdate: o })
                  ),
                e && e[0] && this.store.addResource(e[0], t, n, r));
          },
        },
      ]),
      t
    );
  })(cp);
  function _p() {
    return {
      debug: !1,
      initImmediate: !0,
      ns: ["translation"],
      defaultNS: ["translation"],
      fallbackLng: ["dev"],
      fallbackNS: !1,
      whitelist: !1,
      nonExplicitWhitelist: !1,
      supportedLngs: !1,
      nonExplicitSupportedLngs: !1,
      load: "all",
      preload: !1,
      simplifyPluralSuffix: !0,
      keySeparator: ".",
      nsSeparator: ":",
      pluralSeparator: "_",
      contextSeparator: "_",
      partialBundledLanguages: !1,
      saveMissing: !1,
      updateMissing: !1,
      saveMissingTo: "fallback",
      saveMissingPlurals: !0,
      missingKeyHandler: !1,
      missingInterpolationHandler: !1,
      postProcess: !1,
      postProcessPassResolved: !1,
      returnNull: !0,
      returnEmptyString: !0,
      returnObjects: !1,
      joinArrays: !1,
      returnedObjectHandler: !1,
      parseMissingKeyHandler: !1,
      appendNamespaceToMissingKey: !1,
      appendNamespaceToCIMode: !1,
      overloadTranslationOptionHandler: function (e) {
        var t = {};
        if (
          ("object" === Zd.default(e[1]) && (t = e[1]),
          "string" == typeof e[1] && (t.defaultValue = e[1]),
          "string" == typeof e[2] && (t.tDescription = e[2]),
          "object" === Zd.default(e[2]) || "object" === Zd.default(e[3]))
        ) {
          var n = e[3] || e[2];
          Object.keys(n).forEach(function (e) {
            t[e] = n[e];
          });
        }
        return t;
      },
      interpolation: {
        escapeValue: !0,
        format: function (e, t, n, r) {
          return e;
        },
        prefix: "{{",
        suffix: "}}",
        formatSeparator: ",",
        unescapePrefix: "-",
        nestingPrefix: "$t(",
        nestingSuffix: ")",
        nestingOptionsSeparator: ",",
        maxReplaces: 1e3,
        skipOnVariables: !1,
      },
    };
  }
  function Fp(e) {
    return (
      "string" == typeof e.ns && (e.ns = [e.ns]),
      "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
      "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
      e.whitelist &&
        (e.whitelist &&
          e.whitelist.indexOf("cimode") < 0 &&
          (e.whitelist = e.whitelist.concat(["cimode"])),
        (e.supportedLngs = e.whitelist)),
      e.nonExplicitWhitelist &&
        (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
      e.supportedLngs &&
        e.supportedLngs.indexOf("cimode") < 0 &&
        (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
      e
    );
  }
  function Ip() {}
  var Bp = (function (e) {
      function t() {
        var e,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = arguments.length > 1 ? arguments[1] : void 0;
        if (
          (tp.default(this, t),
          (e = rp.default(this, op.default(t).call(this))),
          Ep && cp.call(ip.default(e)),
          (e.options = Fp(n)),
          (e.services = {}),
          (e.logger = up),
          (e.modules = { external: [] }),
          r && !e.isInitialized && !n.isClone)
        ) {
          if (!e.options.initImmediate)
            return e.init(n, r), rp.default(e, ip.default(e));
          setTimeout(function () {
            e.init(n, r);
          }, 0);
        }
        return e;
      }
      return (
        ap.default(t, e),
        np.default(t, [
          {
            key: "init",
            value: function () {
              var e = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
              function r(e) {
                return e ? ("function" == typeof e ? new e() : e) : null;
              }
              if (
                ("function" == typeof t && ((n = t), (t = {})),
                t.whitelist &&
                  !t.supportedLngs &&
                  this.logger.deprecate(
                    "whitelist",
                    'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'
                  ),
                t.nonExplicitWhitelist &&
                  !t.nonExplicitSupportedLngs &&
                  this.logger.deprecate(
                    "whitelist",
                    'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'
                  ),
                (this.options = ep.default({}, _p(), this.options, Fp(t))),
                (this.format = this.options.interpolation.format),
                n || (n = Ip),
                !this.options.isClone)
              ) {
                this.modules.logger
                  ? up.init(r(this.modules.logger), this.options)
                  : up.init(null, this.options);
                var o = new Mp(this.options);
                this.store = new kp(this.options.resources, this.options);
                var i = this.services;
                (i.logger = up),
                  (i.resourceStore = this.store),
                  (i.languageUtils = o),
                  (i.pluralResolver = new Dp(o, {
                    prepend: this.options.pluralSeparator,
                    compatibilityJSON: this.options.compatibilityJSON,
                    simplifyPluralSuffix: this.options.simplifyPluralSuffix,
                  })),
                  (i.interpolator = new jp(this.options)),
                  (i.utils = {
                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
                  }),
                  (i.backendConnector = new Ap(
                    r(this.modules.backend),
                    i.resourceStore,
                    i,
                    this.options
                  )),
                  i.backendConnector.on("*", function (t) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    e.emit.apply(e, [t].concat(r));
                  }),
                  this.modules.languageDetector &&
                    ((i.languageDetector = r(this.modules.languageDetector)),
                    i.languageDetector.init(
                      i,
                      this.options.detection,
                      this.options
                    )),
                  this.modules.i18nFormat &&
                    ((i.i18nFormat = r(this.modules.i18nFormat)),
                    i.i18nFormat.init && i.i18nFormat.init(this)),
                  (this.translator = new Tp(this.services, this.options)),
                  this.translator.on("*", function (t) {
                    for (
                      var n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        o = 1;
                      o < n;
                      o++
                    )
                      r[o - 1] = arguments[o];
                    e.emit.apply(e, [t].concat(r));
                  }),
                  this.modules.external.forEach(function (t) {
                    t.init && t.init(e);
                  });
              }
              if (
                this.options.fallbackLng &&
                !this.services.languageDetector &&
                !this.options.lng
              ) {
                var a = this.services.languageUtils.getFallbackCodes(
                  this.options.fallbackLng
                );
                a.length > 0 && "dev" !== a[0] && (this.options.lng = a[0]);
              }
              this.services.languageDetector ||
                this.options.lng ||
                this.logger.warn(
                  "init: no languageDetector is used and no lng is defined"
                );
              var s = [
                "getResource",
                "hasResourceBundle",
                "getResourceBundle",
                "getDataByLanguage",
              ];
              s.forEach(function (t) {
                e[t] = function () {
                  var n;
                  return (n = e.store)[t].apply(n, arguments);
                };
              });
              var l = [
                "addResource",
                "addResources",
                "addResourceBundle",
                "removeResourceBundle",
              ];
              l.forEach(function (t) {
                e[t] = function () {
                  var n;
                  return (n = e.store)[t].apply(n, arguments), e;
                };
              });
              var u = fp(),
                c = function () {
                  var t = function (t, r) {
                    e.isInitialized &&
                      !e.initializedStoreOnce &&
                      e.logger.warn(
                        "init: i18next is already initialized. You should call init just once!"
                      ),
                      (e.isInitialized = !0),
                      e.options.isClone ||
                        e.logger.log("initialized", e.options),
                      e.emit("initialized", e.options),
                      u.resolve(r),
                      n(t, r);
                  };
                  if (
                    e.languages &&
                    "v1" !== e.options.compatibilityAPI &&
                    !e.isInitialized
                  )
                    return t(null, e.t.bind(e));
                  e.changeLanguage(e.options.lng, t);
                };
              return (
                this.options.resources || !this.options.initImmediate
                  ? c()
                  : setTimeout(c, 0),
                u
              );
            },
          },
          {
            key: "loadResources",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Ip,
                r = n,
                o = "string" == typeof e ? e : this.language;
              if (
                ("function" == typeof e && (r = e),
                !this.options.resources || this.options.partialBundledLanguages)
              ) {
                if (o && "cimode" === o.toLowerCase()) return r();
                var i = [],
                  a = function (e) {
                    e &&
                      t.services.languageUtils
                        .toResolveHierarchy(e)
                        .forEach(function (e) {
                          i.indexOf(e) < 0 && i.push(e);
                        });
                  };
                if (o) a(o);
                else {
                  var s = this.services.languageUtils.getFallbackCodes(
                    this.options.fallbackLng
                  );
                  s.forEach(function (e) {
                    return a(e);
                  });
                }
                this.options.preload &&
                  this.options.preload.forEach(function (e) {
                    return a(e);
                  }),
                  this.services.backendConnector.load(i, this.options.ns, r);
              } else r(null);
            },
          },
          {
            key: "reloadResources",
            value: function (e, t, n) {
              var r = fp();
              return (
                e || (e = this.languages),
                t || (t = this.options.ns),
                n || (n = Ip),
                this.services.backendConnector.reload(e, t, function (e) {
                  r.resolve(), n(e);
                }),
                r
              );
            },
          },
          {
            key: "use",
            value: function (e) {
              if (!e)
                throw new Error(
                  "You are passing an undefined module! Please check the object you are passing to i18next.use()"
                );
              if (!e.type)
                throw new Error(
                  "You are passing a wrong module! Please check the object you are passing to i18next.use()"
                );
              return (
                "backend" === e.type && (this.modules.backend = e),
                ("logger" === e.type || (e.log && e.warn && e.error)) &&
                  (this.modules.logger = e),
                "languageDetector" === e.type &&
                  (this.modules.languageDetector = e),
                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                "postProcessor" === e.type && Op.addPostProcessor(e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
              );
            },
          },
          {
            key: "changeLanguage",
            value: function (e, t) {
              var n = this;
              this.isLanguageChangingTo = e;
              var r = fp();
              this.emit("languageChanging", e);
              var o = function (o) {
                e || o || !n.services.languageDetector || (o = []);
                var i =
                  "string" == typeof o
                    ? o
                    : n.services.languageUtils.getBestMatchFromCodes(o);
                i &&
                  (n.language ||
                    ((n.language = i),
                    (n.languages =
                      n.services.languageUtils.toResolveHierarchy(i))),
                  n.translator.language || n.translator.changeLanguage(i),
                  n.services.languageDetector &&
                    n.services.languageDetector.cacheUserLanguage(i)),
                  n.loadResources(i, function (e) {
                    !(function (e, o) {
                      o
                        ? ((n.language = o),
                          (n.languages =
                            n.services.languageUtils.toResolveHierarchy(o)),
                          n.translator.changeLanguage(o),
                          (n.isLanguageChangingTo = void 0),
                          n.emit("languageChanged", o),
                          n.logger.log("languageChanged", o))
                        : (n.isLanguageChangingTo = void 0),
                        r.resolve(function () {
                          return n.t.apply(n, arguments);
                        }),
                        t &&
                          t(e, function () {
                            return n.t.apply(n, arguments);
                          });
                    })(e, i);
                  });
              };
              return (
                e ||
                !this.services.languageDetector ||
                this.services.languageDetector.async
                  ? !e &&
                    this.services.languageDetector &&
                    this.services.languageDetector.async
                    ? this.services.languageDetector.detect(o)
                    : o(e)
                  : o(this.services.languageDetector.detect()),
                r
              );
            },
          },
          {
            key: "getFixedT",
            value: function (e, t, n) {
              var r = this,
                o = function e(t, o) {
                  var i;
                  if ("object" !== Zd.default(o)) {
                    for (
                      var a = arguments.length,
                        s = new Array(a > 2 ? a - 2 : 0),
                        l = 2;
                      l < a;
                      l++
                    )
                      s[l - 2] = arguments[l];
                    i = r.options.overloadTranslationOptionHandler(
                      [t, o].concat(s)
                    );
                  } else i = ep.default({}, o);
                  (i.lng = i.lng || e.lng),
                    (i.lngs = i.lngs || e.lngs),
                    (i.ns = i.ns || e.ns);
                  var u = r.options.keySeparator || ".",
                    c = n ? "".concat(n).concat(u).concat(t) : t;
                  return r.t(c, i);
                };
              return (
                "string" == typeof e ? (o.lng = e) : (o.lngs = e),
                (o.ns = t),
                (o.keyPrefix = n),
                o
              );
            },
          },
          {
            key: "t",
            value: function () {
              var e;
              return (
                this.translator &&
                (e = this.translator).translate.apply(e, arguments)
              );
            },
          },
          {
            key: "exists",
            value: function () {
              var e;
              return (
                this.translator &&
                (e = this.translator).exists.apply(e, arguments)
              );
            },
          },
          {
            key: "setDefaultNamespace",
            value: function (e) {
              this.options.defaultNS = e;
            },
          },
          {
            key: "hasLoadedNamespace",
            value: function (e) {
              var t = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (!this.isInitialized)
                return (
                  this.logger.warn(
                    "hasLoadedNamespace: i18next was not initialized",
                    this.languages
                  ),
                  !1
                );
              if (!this.languages || !this.languages.length)
                return (
                  this.logger.warn(
                    "hasLoadedNamespace: i18n.languages were undefined or empty",
                    this.languages
                  ),
                  !1
                );
              var r = this.languages[0],
                o = !!this.options && this.options.fallbackLng,
                i = this.languages[this.languages.length - 1];
              if ("cimode" === r.toLowerCase()) return !0;
              var a = function (e, n) {
                var r =
                  t.services.backendConnector.state[
                    "".concat(e, "|").concat(n)
                  ];
                return -1 === r || 2 === r;
              };
              if (n.precheck) {
                var s = n.precheck(this, a);
                if (void 0 !== s) return s;
              }
              return (
                !!this.hasResourceBundle(r, e) ||
                !this.services.backendConnector.backend ||
                !(!a(r, e) || (o && !a(i, e)))
              );
            },
          },
          {
            key: "loadNamespaces",
            value: function (e, t) {
              var n = this,
                r = fp();
              return this.options.ns
                ? ("string" == typeof e && (e = [e]),
                  e.forEach(function (e) {
                    n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                  }),
                  this.loadResources(function (e) {
                    r.resolve(), t && t(e);
                  }),
                  r)
                : (t && t(), Promise.resolve());
            },
          },
          {
            key: "loadLanguages",
            value: function (e, t) {
              var n = fp();
              "string" == typeof e && (e = [e]);
              var r = this.options.preload || [],
                o = e.filter(function (e) {
                  return r.indexOf(e) < 0;
                });
              return o.length
                ? ((this.options.preload = r.concat(o)),
                  this.loadResources(function (e) {
                    n.resolve(), t && t(e);
                  }),
                  n)
                : (t && t(), Promise.resolve());
            },
          },
          {
            key: "dir",
            value: function (e) {
              if (
                (e ||
                  (e =
                    this.languages && this.languages.length > 0
                      ? this.languages[0]
                      : this.language),
                !e)
              )
                return "rtl";
              return [
                "ar",
                "shu",
                "sqr",
                "ssh",
                "xaa",
                "yhd",
                "yud",
                "aao",
                "abh",
                "abv",
                "acm",
                "acq",
                "acw",
                "acx",
                "acy",
                "adf",
                "ads",
                "aeb",
                "aec",
                "afb",
                "ajp",
                "apc",
                "apd",
                "arb",
                "arq",
                "ars",
                "ary",
                "arz",
                "auz",
                "avl",
                "ayh",
                "ayl",
                "ayn",
                "ayp",
                "bbz",
                "pga",
                "he",
                "iw",
                "ps",
                "pbt",
                "pbu",
                "pst",
                "prp",
                "prd",
                "ug",
                "ur",
                "ydd",
                "yds",
                "yih",
                "ji",
                "yi",
                "hbo",
                "men",
                "xmn",
                "fa",
                "jpr",
                "peo",
                "pes",
                "prs",
                "dv",
                "sam",
              ].indexOf(
                this.services.languageUtils.getLanguagePartFromCode(e)
              ) >= 0
                ? "rtl"
                : "ltr";
            },
          },
          {
            key: "createInstance",
            value: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = arguments.length > 1 ? arguments[1] : void 0;
              return new t(e, n);
            },
          },
          {
            key: "cloneInstance",
            value: function () {
              var e = this,
                n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : Ip,
                o = ep.default({}, this.options, n, { isClone: !0 }),
                i = new t(o),
                a = ["store", "services", "language"];
              return (
                a.forEach(function (t) {
                  i[t] = e[t];
                }),
                (i.services = ep.default({}, this.services)),
                (i.services.utils = {
                  hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                }),
                (i.translator = new Tp(i.services, i.options)),
                i.translator.on("*", function (e) {
                  for (
                    var t = arguments.length,
                      n = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  i.emit.apply(i, [e].concat(n));
                }),
                i.init(o, r),
                (i.translator.options = i.options),
                (i.translator.backendConnector.services.utils = {
                  hasLoadedNamespace: i.hasLoadedNamespace.bind(i),
                }),
                i
              );
            },
          },
          {
            key: "toJSON",
            value: function () {
              return {
                options: this.options,
                store: this.store,
                language: this.language,
                languages: this.languages,
              };
            },
          },
        ]),
        t
      );
    })(cp),
    $p = new Bp(),
    Wp = "translation";
  $p.init({ lng: "zh-CN", resources: {} });
  var Vp = $p.t.bind($p);
  (e.DomEditor = Vs),
    (e.ELEM_TO_HTML_CONF = El),
    (e.PARSE_ELEM_HTML_CONF = oc),
    (e.PARSE_STYLE_HTML_FN_LIST = rc),
    (e.PRE_PARSE_HTML_CONF_LIST = nc),
    (e.RENDER_ELEM_CONF = Df),
    (e.RENDER_STYLE_HANDLER_LIST = Pf),
    (e.STYLE_TO_HTML_FN_LIST = xl),
    (e.TEXT_TAGS = tc),
    (e.Toolbar = Ad),
    (e.coreCreateEditor = function (e) {
      var n = e.selector,
        r = void 0 === n ? "" : n,
        o = e.config,
        i = void 0 === o ? {} : o,
        a = e.content,
        s = e.html,
        l = e.plugins,
        u = void 0 === l ? [] : l,
        c = yo(
          (function (e) {
            var n = e,
              r = n.insertText,
              o = n.insertNode,
              i = n.insertFragment;
            return (
              (n.insertText = function (e) {
                if (n.getConfig().maxLength) {
                  var t = Vs.getLeftLengthOfMaxLength(n);
                  t <= 0 || (t < e.length ? r(e.slice(0, t)) : r(e));
                } else r(e);
              }),
              (n.insertNode = function (e) {
                if (n.getConfig().maxLength) {
                  var r = Vs.getLeftLengthOfMaxLength(n);
                  r <= 0 || r < t.Node.string(e).length || o(e);
                } else o(e);
              }),
              (n.insertFragment = function (e) {
                n.getConfig().maxLength
                  ? e.forEach(function (e) {
                      n.insertNode(e);
                    })
                  : i(e);
              }),
              n
            );
          })(
            (function (e) {
              var t = e;
              return (
                (t.on = function (e, n) {
                  var r = sf(t);
                  if (
                    (r.on(e, n),
                    "destroyed" === e && uf(t, n),
                    "destroyed" !== e)
                  ) {
                    var o = function () {
                      return r.off(e, n);
                    };
                    r.on("destroyed", o), uf(t, o);
                  }
                }),
                (t.once = function (e, n) {
                  sf(t).once(e, n);
                }),
                (t.off = function (e, n) {
                  sf(t).off(e, n);
                }),
                (t.emit = function (e) {
                  for (var n = [], r = 1; r < arguments.length; r++)
                    n[r - 1] = arguments[r];
                  var o = sf(t);
                  (o.emit.apply(o, Yi([e], Gi(n))), "destroyed" === e) &&
                    (cf(t).forEach(function (e) {
                      return o.off("destroyed", e);
                    }),
                    ff(t));
                }),
                t
              );
            })(
              (function (e) {
                var n = e;
                return (
                  (n.select = function (e) {
                    t.Transforms.select(n, e);
                  }),
                  (n.deselect = function () {
                    var r = n.selection,
                      o = Vs.findDocumentOrShadowRoot(n).getSelection();
                    o && o.rangeCount > 0 && o.removeAllRanges(),
                      r && t.Transforms.deselect(e);
                  }),
                  (n.move = function (n, r) {
                    void 0 === r && (r = !1),
                      n &&
                        (n < 0 ||
                          t.Transforms.move(e, {
                            distance: n,
                            unit: "character",
                            reverse: r,
                          }));
                  }),
                  (n.moveReverse = function (e) {
                    n.move(e, !0);
                  }),
                  (n.restoreSelection = function () {
                    var e = vs.get(n);
                    null != e && (n.focus(), t.Transforms.select(n, e));
                  }),
                  (n.getSelectionPosition = function () {
                    return pf(n);
                  }),
                  (n.getNodePosition = function (e) {
                    return hf(n, e);
                  }),
                  (n.isSelectedAll = function () {
                    var e = n.selection;
                    if (null == e) return !1;
                    var r = Gi(t.Range.edges(e), 2),
                      o = r[0],
                      i = r[1],
                      a = Gi(t.Editor.edges(n, []), 2),
                      s = a[0],
                      l = a[1];
                    return !(!t.Point.equals(o, s) || !t.Point.equals(i, l));
                  }),
                  (n.selectAll = function () {
                    var e = t.Editor.start(n, []),
                      r = t.Editor.end(n, []);
                    t.Transforms.select(n, { anchor: e, focus: r });
                  }),
                  n
                );
              })(
                Fc(
                  (function (e) {
                    var t = e;
                    return (
                      (t.getAllMenuKeys = function () {
                        var e = [];
                        for (var t in Us) e.push(t);
                        return e;
                      }),
                      (t.getConfig = function () {
                        var e = rs.get(t);
                        if (null == e)
                          throw new Error("Can not get editor config");
                        return e;
                      }),
                      (t.getMenuConfig = function (e) {
                        var n = t.getConfig().MENU_CONF;
                        return (void 0 === n ? {} : n)[e] || {};
                      }),
                      (t.alert = function (e, n) {
                        void 0 === n && (n = "info");
                        var r = t.getConfig().customAlert;
                        r && r(e, n);
                      }),
                      t
                    );
                  })(
                    (function (e) {
                      var n = e;
                      return (
                        (n.id = "wangEditor-" + zs++),
                        (n.isDestroyed = !1),
                        (n.isFullScreen = !1),
                        (n.focus = function (e) {
                          var r = Vs.toDOMNode(n, n),
                            o = Vs.findDocumentOrShadowRoot(n);
                          if ((gs.set(n, !0), e)) {
                            var i = t.Editor.end(n, []);
                            t.Transforms.select(n, i);
                          }
                          o.activeElement !== r &&
                            r.focus({ preventScroll: !0 });
                        }),
                        (n.isFocused = function () {
                          return !!gs.get(n);
                        }),
                        (n.blur = function () {
                          var e = Vs.toDOMNode(n, n),
                            r = Vs.findDocumentOrShadowRoot(n);
                          gs.set(n, !1),
                            r.activeElement === e &&
                              (e.blur(), t.Transforms.deselect(n));
                        }),
                        (n.updateView = function () {
                          Vs.getTextarea(n).changeViewState();
                          var e = Vs.getToolbar(n);
                          e && e.changeToolbarState();
                          var t = Vs.getHoverbar(n);
                          t && t.changeHoverbarState();
                        }),
                        (n.destroy = function () {
                          var e = Vs.getTextarea(n);
                          e.destroy(), Ga.delete(n), Ya.delete(e);
                          var t = Vs.getToolbar(n);
                          t && (t.destroy(), Xa.delete(n), Ja.delete(t));
                          var r = Vs.getHoverbar(n);
                          r && (r.destroy(), Za.delete(n), Qa.delete(r)),
                            (n.isDestroyed = !0),
                            n.emit("destroyed");
                        }),
                        (n.scrollToElem = function (e) {
                          if (!n.getConfig().scroll) {
                            var t =
                              "编辑器禁用了 scroll ，编辑器内容无法滚动，请自行实现该功能";
                            return (
                              (t +=
                                "\nYou has disabled editor scroll, please do this yourself"),
                              void console.warn(t)
                            );
                          }
                          var r = y.default("#" + e);
                          if (0 !== r.length) {
                            var o = r[0];
                            if (!Vs.hasDOMNode(n, o))
                              return (
                                (t =
                                  "Element (found by id is '" +
                                  e +
                                  "') is not in editor DOM"),
                                (t +=
                                  "\n 通过 id '" +
                                  e +
                                  "' 找到的 element 不在 editor DOM 之内"),
                                void console.error(t, o)
                              );
                            var i = Vs.getTextarea(n),
                              a = i.$textAreaContainer,
                              s = i.$scroll,
                              l = r.offset().top,
                              u = a.offset().top;
                            s[0].scrollBy({ top: l - u, behavior: "smooth" });
                          }
                        }),
                        (n.showProgressBar = function (e) {
                          e < 1 || Vs.getTextarea(n).changeProgress(e);
                        }),
                        (n.hidePanelOrModal = function () {
                          var e = ts.get(n);
                          null != e &&
                            e.forEach(function (e) {
                              return e.hide();
                            });
                        }),
                        (n.enable = function () {
                          (n.getConfig().readOnly = !1), n.updateView();
                        }),
                        (n.disable = function () {
                          (n.getConfig().readOnly = !0), n.updateView();
                        }),
                        (n.isDisabled = function () {
                          return n.getConfig().readOnly;
                        }),
                        (n.toDOMNode = function (e) {
                          return Vs.toDOMNode(n, e);
                        }),
                        (n.fullScreen = function () {
                          if (!n.isFullScreen) {
                            var e = null,
                              t = Vs.getToolbar(n);
                            t && (e = t.$box);
                            var r = Vs.getTextarea(n).$box.parent();
                            if (e && e.parent()[0] !== r[0])
                              throw new Error(
                                "Can not set full screen, cause toolbar DOM parent is not equal to textarea DOM parent\n不能设置全屏，因为 toolbar DOM 父节点和 textarea DOM 父节点不一致"
                              );
                            r.addClass("w-e-full-screen-container");
                            var o = r.css("z-index");
                            r.attr("data-z-index", o.toString()),
                              (n.isFullScreen = !0),
                              n.emit("fullScreen");
                          }
                        }),
                        (n.unFullScreen = function () {
                          if (n.isFullScreen) {
                            var e = Vs.getTextarea(n).$box.parent();
                            setTimeout(function () {
                              e.removeClass("w-e-full-screen-container"),
                                (n.isFullScreen = !1),
                                n.emit("unFullScreen");
                            }, 200);
                          }
                        }),
                        (n.getEditableContainer = function () {
                          return Vs.getTextarea(n).$textAreaContainer[0];
                        }),
                        n
                      );
                    })(
                      (function (e) {
                        var n = e,
                          r = n.insertText;
                        return (
                          n.insertFragment,
                          (n.setFragmentData = function (e) {
                            var r = n.selection;
                            if (r) {
                              var o = Gi(t.Range.edges(r), 2),
                                i = o[0],
                                a = o[1],
                                s = t.Editor.void(n, { at: i.path }),
                                l = t.Editor.void(n, { at: a.path });
                              if (!t.Range.isCollapsed(r) || s) {
                                var u = Vs.toDOMRange(n, r),
                                  c = u.cloneContents(),
                                  f = c.childNodes[0];
                                if (
                                  (c.childNodes.forEach(function (e) {
                                    e.textContent &&
                                      "" !== e.textContent.trim() &&
                                      (f = e);
                                  }),
                                  l)
                                ) {
                                  var d = Gi(l, 1)[0],
                                    p = u.cloneRange(),
                                    h = Vs.toDOMNode(n, d);
                                  p.setEndAfter(h), (c = p.cloneContents());
                                }
                                if (
                                  (s &&
                                    (f = c.querySelector(
                                      "[data-slate-spacer]"
                                    )),
                                  Array.from(
                                    c.querySelectorAll(
                                      "[data-slate-zero-width]"
                                    )
                                  ).forEach(function (e) {
                                    var t =
                                      "n" ===
                                      e.getAttribute("data-slate-zero-width");
                                    e.textContent = t ? "\n" : "";
                                  }),
                                  Ns(f))
                                ) {
                                  var g = f.ownerDocument.createElement("span");
                                  (g.style.whiteSpace = "pre"),
                                    g.appendChild(f),
                                    c.appendChild(g),
                                    (f = g);
                                }
                                var v = n.getFragment(),
                                  y = JSON.stringify(v),
                                  m = window.btoa(encodeURIComponent(y));
                                f.setAttribute("data-slate-fragment", m),
                                  e.setData("application/x-slate-fragment", m);
                                var b = c.ownerDocument.createElement("div");
                                return (
                                  b.appendChild(c),
                                  b.setAttribute("hidden", "true"),
                                  c.ownerDocument.body.appendChild(b),
                                  e.setData("text/html", b.innerHTML),
                                  e.setData("text/plain", Ps(b)),
                                  c.ownerDocument.body.removeChild(b),
                                  e
                                );
                              }
                            }
                          }),
                          (n.insertData = function (e) {
                            var o,
                              i,
                              a = e.getData("application/x-slate-fragment");
                            if (a) {
                              var s = decodeURIComponent(window.atob(a)),
                                l = JSON.parse(s);
                              n.insertFragment(l);
                            } else {
                              var u = e.getData("text/plain"),
                                c = e.getData("text/html");
                              if (c) n.dangerouslyInsertHtml(c);
                              else if (u) {
                                var f = u.split(/\r\n|\r|\n/),
                                  d = !1;
                                try {
                                  for (
                                    var p = qi(f), h = p.next();
                                    !h.done;
                                    h = p.next()
                                  ) {
                                    var g = h.value;
                                    d &&
                                      t.Transforms.splitNodes(n, {
                                        always: !0,
                                      }),
                                      r(g),
                                      (d = !0);
                                  }
                                } catch (e) {
                                  o = { error: e };
                                } finally {
                                  try {
                                    h && !h.done && (i = p.return) && i.call(p);
                                  } finally {
                                    if (o) throw o.error;
                                  }
                                }
                              }
                            }
                          }),
                          n
                        );
                      })(t.createEditor())
                    )
                  )
                )
              )
            )
          )
        );
      if (
        r &&
        (function (e, t) {
          return Td(e, "data-w-e-textarea", t);
        })(c, r)
      )
        throw new Error("Repeated create editor by selector '" + r + "'");
      var f = (function (e) {
        void 0 === e && (e = {});
        var t = E.default(Hs),
          n = {},
          r = e.MENU_CONF,
          o = void 0 === r ? {} : r;
        return (
          m.default(t, function (e, t) {
            n[t] = Ki(Ki({}, e), o[t] || {});
          }),
          delete e.MENU_CONF,
          Ki(
            {
              scroll: !0,
              readOnly: !1,
              autoFocus: !0,
              decorate: function () {
                return [];
              },
              maxLength: 0,
              MENU_CONF: n,
              hoverbarKeys: {},
              customAlert: function (e, t) {
                window.alert(t + ":\n" + e);
              },
            },
            e
          )
        );
      })(i);
      rs.set(c, f);
      var d = f.hoverbarKeys,
        p = void 0 === d ? {} : d;
      if (
        (u.forEach(function (e) {
          c = e(c);
        }),
        s)
      ) {
        var h = y.default("<div>" + s + "</div>");
        c.children = Array.from(h.children()).map(function (e) {
          return Ac(y.default(e), c);
        });
      }
      if (
        (a && a.length && (c.children = a),
        0 === c.children.length &&
          (c.children = [{ type: "paragraph", children: [{ text: "" }] }]),
        Vs.normalizeContent(c),
        r)
      ) {
        var g = new sd(r);
        Ga.set(c, g),
          Ya.set(g, c),
          g.changeViewState(),
          Ju(function () {
            var e = g.$scroll;
            if (null != e && e.height() < 300) {
              "\nTextarea height < 300px . This may be cause modal and hoverbar position error",
                console.warn(
                  "编辑区域高度 < 300px 这可能会导致 modal hoverbar 定位异常\nTextarea height < 300px . This may be cause modal and hoverbar position error",
                  e
                );
            }
          });
        var v = void 0;
        Object.keys(p).length > 0 &&
          ((v = new Cd()), Qa.set(v, c), Za.set(c, v)),
          c.on("change", function () {
            c.hidePanelOrModal();
          }),
          c.on("scroll", function () {
            c.hidePanelOrModal();
          });
      } else
        c.children.forEach(function (e, t) {
          return Nd(e, t, c, c);
        });
      var b = f.onCreated,
        w = f.onDestroyed;
      return (
        b &&
          c.on("created", function () {
            return b(c);
          }),
        w &&
          c.on("destroyed", function () {
            return w(c);
          }),
        Ju(function () {
          return c.emit("created");
        }),
        c
      );
    }),
    (e.coreCreateToolbar = function (e, t) {
      if (null == e)
        throw new Error("Cannot create toolbar, because editor is null");
      var n = t.selector,
        r = t.config,
        o = void 0 === r ? {} : r;
      if (
        (function (e, t) {
          return Td(e, "data-w-e-toolbar", t);
        })(e, n)
      )
        throw new Error("Repeated create toolbar by selector '" + n + "'");
      var i = Ki(
          {
            toolbarKeys: [],
            excludeKeys: [],
            insertKeys: { index: 0, keys: [] },
            modalAppendToBody: !1,
          },
          o || {}
        ),
        a = new Ad(n, i);
      return Ja.set(a, e), Xa.set(e, a), a;
    }),
    (e.createUploader = function (e) {
      var t = e.server,
        n = void 0 === t ? "" : t,
        r = e.fieldName,
        o = void 0 === r ? "" : r,
        i = e.maxFileSize,
        a = void 0 === i ? 10485760 : i,
        s = e.maxNumberOfFiles,
        l = void 0 === s ? 100 : s,
        u = e.meta,
        c = void 0 === u ? {} : u,
        f = e.metaWithUrl,
        d = void 0 !== f && f,
        p = e.headers,
        h = void 0 === p ? {} : p,
        g = e.withCredentials,
        v = void 0 !== g && g,
        y = e.timeout,
        b = void 0 === y ? 1e4 : y,
        w = e.onBeforeUpload,
        x =
          void 0 === w
            ? function (e) {
                return e;
              }
            : w,
        E = e.onSuccess,
        O = void 0 === E ? function (e, t) {} : E,
        C = e.onError,
        T =
          void 0 === C
            ? function (e, t, n) {
                console.error(e.name + " upload error", t, n);
              }
            : C,
        N = e.onProgress,
        M = void 0 === N ? function (e) {} : N;
      if (!n)
        throw new Error("Cannot get upload server address\n没有配置上传地址");
      if (!o) throw new Error("Cannot get fieldName\n没有配置 fieldName");
      var L = n;
      d &&
        (L = (function (e, t) {
          var n = Gi(e.split("#"), 2),
            r = n[0],
            o = n[1],
            i = [];
          m.default(t, function (e, t) {
            i.push(t + "=" + e);
          });
          var a = i.join("&");
          return (
            (r = r.indexOf("?") > 0 ? r + "&" + a : r + "?" + a),
            o ? r + "#" + o : r
          );
        })(L, c));
      var R = new S.default({
        onBeforeUpload: x,
        restrictions: { maxFileSize: a, maxNumberOfFiles: l },
        meta: c,
      }).use(k.default, {
        endpoint: L,
        headers: h,
        formData: !0,
        fieldName: o,
        bundle: !0,
        withCredentials: v,
        timeout: b,
      });
      return (
        R.on("upload-success", function (e, t) {
          var n = t.body;
          O(e, void 0 === n ? {} : n), R.removeFile(e.id);
        }),
        R.on("progress", function (e) {
          e < 1 || M(e);
        }),
        R.on("error", function (e) {
          console.error("wangEditor file upload error", e.stack);
        }),
        R.on("upload-error", function (e, t, n) {
          T(e, t, n), R.removeFile(e.id);
        }),
        R.on("restriction-failed", function (e, t) {
          T(e, t), R.removeFile(e.id);
        }),
        R
      );
    }),
    (e.genModalButtonElems = function (e, t) {
      var n = y.default('<div class="button-container"></div>'),
        r = y.default(
          '<button type="button" id="' + e + '">' + t + "</button>"
        );
      return n.append(r), [n[0], r[0]];
    }),
    (e.genModalInputElems = function (e, t, n) {
      var r = y.default('<label class="babel-container"></label>');
      r.append("<span>" + e + "</span>");
      var o = y.default(
        '<input type="text" id="' + t + '" placeholder="' + (n || "") + '">'
      );
      return r.append(o), [r[0], o[0]];
    }),
    (e.genModalTextareaElems = function (e, t, n) {
      var r = y.default('<label class="babel-container"></label>');
      r.append("<span>" + e + "</span>");
      var o = y.default(
        '<textarea type="text" id="' +
          t +
          '" placeholder="' +
          (n || "") +
          '"></textarea>'
      );
      return r.append(o), [r[0], o[0]];
    }),
    (e.i18nAddResources = function (e, t) {
      $p.addResourceBundle(e, Wp, t, !0, !0);
    }),
    (e.i18nChangeLanguage = function (e) {
      $p.changeLanguage(e);
    }),
    (e.i18nGetResources = function (e) {
      return $p.getResourceBundle(e, Wp);
    }),
    (e.registerElemToHtmlConf = function (e) {
      var t = e.type,
        n = e.elemToHtml;
      El[t || ""] = n;
    }),
    (e.registerMenu = function (e, t) {
      var n = e.key,
        r = e.factory,
        o = e.config,
        i = Ki(Ki({}, o), t || {});
      if (null != Us[n])
        throw new Error("Duplicated key '" + n + "' in menu items");
      (Us[n] = r),
        (function (e, t) {
          null != t && (Hs[e] = t);
        })(n, i);
    }),
    (e.registerParseElemHtmlConf = function (e) {
      var t = e.selector,
        n = e.parseElemHtml;
      oc[t] = n;
    }),
    (e.registerParseStyleHtmlHandler = function (e) {
      rc.push(e);
    }),
    (e.registerPreParseHtmlConf = function (e) {
      nc.push(e);
    }),
    (e.registerRenderElemConf = function (e) {
      var t = e.type,
        n = e.renderElem;
      Df[t || ""] = n;
    }),
    (e.registerStyleHandler = function (e) {
      Pf.push(e);
    }),
    (e.registerStyleToHtmlHandler = function (e) {
      xl.push(e);
    }),
    (e.t = Vp),
    Object.defineProperty(e, "__esModule", { value: !0 });
});
//# sourceMappingURL=index.js.map
