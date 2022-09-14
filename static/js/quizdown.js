! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).quizdown = t()
}(this, (function() {
  "use strict";

  function e() {}
  const t = e => e;

  function n(e, t) {
    for (const n in t) e[n] = t[n];
    return e
  }

  function i(e) {
    return e()
  }

  function s() {
    return Object.create(null)
  }

  function r(e) {
    e.forEach(i)
  }

  function o(e) {
    return "function" == typeof e
  }

  function a(e, t) {
    return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
  }

  function l(t, ...n) {
    if (null == t) return e;
    const i = t.subscribe(...n);
    return i.unsubscribe ? () => i.unsubscribe() : i
  }

  function c(e) {
    let t;
    return l(e, (e => t = e))(), t
  }

  function u(e, t, n) {
    e.$$.on_destroy.push(l(t, n))
  }

  function f(e, t, n, i) {
    if (e) {
      const s = h(e, t, n, i);
      return e[0](s)
    }
  }

  function h(e, t, i, s) {
    return e[1] && s ? n(i.ctx.slice(), e[1](s(t))) : i.ctx
  }

  function p(e, t, n, i) {
    if (e[2] && i) {
      const s = e[2](i(n));
      if (void 0 === t.dirty) return s;
      if ("object" == typeof s) {
        const e = [],
          n = Math.max(t.dirty.length, s.length);
        for (let i = 0; i < n; i += 1) e[i] = t.dirty[i] | s[i];
        return e
      }
      return t.dirty | s
    }
    return t.dirty
  }

  function m(e, t, n, i, s, r) {
    if (s) {
      const o = h(t, n, i, r);
      e.p(o, s)
    }
  }

  function d(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let e = 0; e < n; e++) t[e] = -1;
      return t
    }
    return -1
  }

  function g(e) {
    return null == e ? "" : e
  }
  const y = "undefined" != typeof window;
  let b = y ? () => window.performance.now() : () => Date.now(),
    k = y ? e => requestAnimationFrame(e) : e;
  const v = new Set;

  function w(e) {
    v.forEach((t => {
      t.c(e) || (v.delete(t), t.f())
    })), 0 !== v.size && k(w)
  }

  function x(e) {
    let t;
    return 0 === v.size && k(w), {
      promise: new Promise((n => {
        v.add(t = {
          c: e,
          f: n
        })
      })),
      abort() {
        v.delete(t)
      }
    }
  }

  function z(e, t) {
    e.appendChild(t)
  }

  function E(e, t, n) {
    const i = _(e);
    if (!i.getElementById(t)) {
      const e = N("style");
      e.id = t, e.textContent = n, T(i, e)
    }
  }

  function _(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
  }

  function T(e, t) {
    z(e.head || e, t)
  }

  function $(e, t, n) {
    e.insertBefore(t, n || null)
  }

  function S(e) {
    e.parentNode.removeChild(e)
  }

  function A(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
  }

  function N(e) {
    return document.createElement(e)
  }

  function O(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
  }

  function L(e) {
    return document.createTextNode(e)
  }

  function I() {
    return L(" ")
  }

  function C() {
    return L("")
  }

  function M(e, t, n, i) {
    return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i)
  }

  function R(e, t, n) {
    null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
  }

  function P(e, t) {
    t = "" + t, e.wholeText !== t && (e.data = t)
  }

  function D(e, t, n, i) {
    e.style.setProperty(t, n, i ? "important" : "")
  }
  let j;

  function q() {
    if (void 0 === j) {
      j = !1;
      try {
        "undefined" != typeof window && window.parent && window.parent.document
      } catch (e) {
        j = !0
      }
    }
    return j
  }
  class U {
    constructor() {
      this.e = this.n = null
    }
    c(e) {
      this.h(e)
    }
    m(e, t, n = null) {
      this.e || (this.e = N(t.nodeName), this.t = t, this.c(e)), this.i(n)
    }
    h(e) {
      this.e.innerHTML = e, this.n = Array.from(this.e.childNodes)
    }
    i(e) {
      for (let t = 0; t < this.n.length; t += 1) $(this.t, this.n[t], e)
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a)
    }
    d() {
      this.n.forEach(S)
    }
  }
  const K = new Set;
  let B, F = 0;

  function X(e, t, n, i, s, r, o, a = 0) {
    const l = 16.666 / i;
    let c = "{\n";
    for (let e = 0; e <= 1; e += l) {
      const i = t + (n - t) * r(e);
      c += 100 * e + `%{${o(i,1-i)}}\n`
    }
    const u = c + `100% {${o(n,1-n)}}\n}`,
      f = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,
      h = _(e);
    K.add(h);
    const p = h.__svelte_stylesheet || (h.__svelte_stylesheet = function(e) {
        const t = N("style");
        return T(_(e), t), t
      }(e).sheet),
      m = h.__svelte_rules || (h.__svelte_rules = {});
    m[f] || (m[f] = !0, p.insertRule(`@keyframes ${f} ${u}`, p.cssRules.length));
    const d = e.style.animation || "";
    return e.style.animation = `${d?`${d}, `:""}${f} ${i}ms linear ${s}ms 1 both`, F += 1, f
  }

  function G(e, t) {
    const n = (e.style.animation || "").split(", "),
      i = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
      s = n.length - i.length;
    s && (e.style.animation = i.join(", "), F -= s, F || k((() => {
      F || (K.forEach((e => {
        const t = e.__svelte_stylesheet;
        let n = t.cssRules.length;
        for (; n--;) t.deleteRule(n);
        e.__svelte_rules = {}
      })), K.clear())
    })))
  }

  function V(e) {
    const t = getComputedStyle(e);
    if ("absolute" !== t.position && "fixed" !== t.position) {
      const {
        width: n,
        height: i
      } = t, s = e.getBoundingClientRect();
      e.style.position = "absolute", e.style.width = n, e.style.height = i,
        function(e, t) {
          const n = e.getBoundingClientRect();
          if (t.left !== n.left || t.top !== n.top) {
            const i = getComputedStyle(e),
              s = "none" === i.transform ? "" : i.transform;
            e.style.transform = `${s} translate(${t.left-n.left}px, ${t.top-n.top}px)`
          }
        }(e, s)
    }
  }

  function H(e) {
    B = e
  }

  function W() {
    if (!B) throw new Error("Function called outside component initialization");
    return B
  }

  function Y(e) {
    W().$$.before_update.push(e)
  }

  function J(e) {
    W().$$.on_mount.push(e)
  }
  const Z = [],
    Q = [],
    ee = [],
    te = [],
    ne = Promise.resolve();
  let ie = !1;

  function se(e) {
    ee.push(e)
  }
  let re = !1;
  const oe = new Set;

  function ae() {
    if (!re) {
      re = !0;
      do {
        for (let e = 0; e < Z.length; e += 1) {
          const t = Z[e];
          H(t), le(t.$$)
        }
        for (H(null), Z.length = 0; Q.length;) Q.pop()();
        for (let e = 0; e < ee.length; e += 1) {
          const t = ee[e];
          oe.has(t) || (oe.add(t), t())
        }
        ee.length = 0
      } while (Z.length);
      for (; te.length;) te.pop()();
      ie = !1, re = !1, oe.clear()
    }
  }

  function le(e) {
    if (null !== e.fragment) {
      e.update(), r(e.before_update);
      const t = e.dirty;
      e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(se)
    }
  }
  let ce;

  function ue(e, t, n) {
    e.dispatchEvent(function(e, t, n = !1) {
      const i = document.createEvent("CustomEvent");
      return i.initCustomEvent(e, n, !1, t), i
    }(`${t?"intro":"outro"}${n}`))
  }
  const fe = new Set;
  let he;

  function pe() {
    he = {
      r: 0,
      c: [],
      p: he
    }
  }

  function me() {
    he.r || r(he.c), he = he.p
  }

  function de(e, t) {
    e && e.i && (fe.delete(e), e.i(t))
  }

  function ge(e, t, n, i) {
    if (e && e.o) {
      if (fe.has(e)) return;
      fe.add(e), he.c.push((() => {
        fe.delete(e), i && (n && e.d(1), i())
      })), e.o(t)
    }
  }
  const ye = {
    duration: 0
  };

  function be(n, i, s) {
    let r, a, l = i(n, s),
      c = !1,
      u = 0;

    function f() {
      r && G(n, r)
    }

    function h() {
      const {
        delay: i = 0,
        duration: s = 300,
        easing: o = t,
        tick: h = e,
        css: p
      } = l || ye;
      p && (r = X(n, 0, 1, s, i, o, p, u++)), h(0, 1);
      const m = b() + i,
        d = m + s;
      a && a.abort(), c = !0, se((() => ue(n, !0, "start"))), a = x((e => {
        if (c) {
          if (e >= d) return h(1, 0), ue(n, !0, "end"), f(), c = !1;
          if (e >= m) {
            const t = o((e - m) / s);
            h(t, 1 - t)
          }
        }
        return c
      }))
    }
    let p = !1;
    return {
      start() {
        p || (p = !0, G(n), o(l) ? (l = l(), (ce || (ce = Promise.resolve(), ce.then((() => {
          ce = null
        }))), ce).then(h)) : h())
      },
      invalidate() {
        p = !1
      },
      end() {
        c && (f(), c = !1)
      }
    }
  }

  function ke(e, t) {
    const n = t.token = {};

    function i(e, i, s, r) {
      if (t.token !== n) return;
      t.resolved = r;
      let o = t.ctx;
      void 0 !== s && (o = o.slice(), o[s] = r);
      const a = e && (t.current = e)(o);
      let l = !1;
      t.block && (t.blocks ? t.blocks.forEach(((e, n) => {
        n !== i && e && (pe(), ge(e, 1, 1, (() => {
          t.blocks[n] === e && (t.blocks[n] = null)
        })), me())
      })) : t.block.d(1), a.c(), de(a, 1), a.m(t.mount(), t.anchor), l = !0), t.block = a, t.blocks && (t.blocks[i] = a), l && ae()
    }
    if ((s = e) && "object" == typeof s && "function" == typeof s.then) {
      const n = W();
      if (e.then((e => {
          H(n), i(t.then, 1, t.value, e), H(null)
        }), (e => {
          if (H(n), i(t.catch, 2, t.error, e), H(null), !t.hasCatch) throw e
        })), t.current !== t.pending) return i(t.pending, 0), !0
    } else {
      if (t.current !== t.then) return i(t.then, 1, t.value, e), !0;
      t.resolved = e
    }
    var s
  }
  const ve = "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global;

  function we(e, t) {
    e.f(),
      function(e, t) {
        e.d(1), t.delete(e.key)
      }(e, t)
  }

  function xe(e) {
    e && e.c()
  }

  function ze(e, t, n, s) {
    const {
      fragment: a,
      on_mount: l,
      on_destroy: c,
      after_update: u
    } = e.$$;
    a && a.m(t, n), s || se((() => {
      const t = l.map(i).filter(o);
      c ? c.push(...t) : r(t), e.$$.on_mount = []
    })), u.forEach(se)
  }

  function Ee(e, t) {
    const n = e.$$;
    null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
  }

  function _e(e, t) {
    -1 === e.$$.dirty[0] && (Z.push(e), ie || (ie = !0, ne.then(ae)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
  }

  function Te(t, n, i, o, a, l, c, u = [-1]) {
    const f = B;
    H(t);
    const h = t.$$ = {
      fragment: null,
      ctx: null,
      props: l,
      update: e,
      not_equal: a,
      bound: s(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(n.context || (f ? f.$$.context : [])),
      callbacks: s(),
      dirty: u,
      skip_bound: !1,
      root: n.target || f.$$.root
    };
    c && c(h.root);
    let p = !1;
    if (h.ctx = i ? i(t, n.props || {}, ((e, n, ...i) => {
        const s = i.length ? i[0] : n;
        return h.ctx && a(h.ctx[e], h.ctx[e] = s) && (!h.skip_bound && h.bound[e] && h.bound[e](s), p && _e(t, e)), n
      })) : [], h.update(), p = !0, r(h.before_update), h.fragment = !!o && o(h.ctx), n.target) {
      if (n.hydrate) {
        const e = function(e) {
          return Array.from(e.childNodes)
        }(n.target);
        h.fragment && h.fragment.l(e), e.forEach(S)
      } else h.fragment && h.fragment.c();
      n.intro && de(t.$$.fragment), ze(t, n.target, n.anchor, n.customElement), ae()
    }
    H(f)
  }
  class $e {
    $destroy() {
      Ee(this, 1), this.$destroy = e
    }
    $on(e, t) {
      const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return n.push(t), () => {
        const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
      }
    }
    $set(e) {
      var t;
      this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
    }
  }
  const Se = [];

  function Ae(t, n = e) {
    let i;
    const s = new Set;

    function r(e) {
      if (a(t, e) && (t = e, i)) {
        const e = !Se.length;
        for (const e of s) e[1](), Se.push(e, t);
        if (e) {
          for (let e = 0; e < Se.length; e += 2) Se[e][0](Se[e + 1]);
          Se.length = 0
        }
      }
    }
    return {
      set: r,
      update: function(e) {
        r(e(t))
      },
      subscribe: function(o, a = e) {
        const l = [o, a];
        return s.add(l), 1 === s.size && (i = n(r) || e), o(t), () => {
          s.delete(l), 0 === s.size && (i(), i = null)
        }
      }
    }
  }

  function Ne(t, n, i) {
    const s = !Array.isArray(t),
      a = s ? [t] : t,
      c = n.length < 2;
    return {
      subscribe: Ae(i, (t => {
        let i = !1;
        const u = [];
        let f = 0,
          h = e;
        const p = () => {
            if (f) return;
            h();
            const i = n(s ? u[0] : u, t);
            c ? t(i) : h = o(i) ? i : e
          },
          m = a.map(((e, t) => l(e, (e => {
            u[t] = e, f &= ~(1 << t), i && p()
          }), (() => {
            f |= 1 << t
          }))));
        return i = !0, p(),
          function() {
            r(m), h()
          }
      })).subscribe
    }
  }

  function Oe(e) {
    const t = e - 1;
    return t * t * t + 1
  }

  function Le(e) {
    return "[object Date]" === Object.prototype.toString.call(e)
  }

  function Ie(e, t) {
    if (e === t || e != e) return () => e;
    const n = typeof e;
    if (n !== typeof t || Array.isArray(e) !== Array.isArray(t)) throw new Error("Cannot interpolate values of different type");
    if (Array.isArray(e)) {
      const n = t.map(((t, n) => Ie(e[n], t)));
      return e => n.map((t => t(e)))
    }
    if ("object" === n) {
      if (!e || !t) throw new Error("Object cannot be null");
      if (Le(e) && Le(t)) {
        e = e.getTime();
        const n = (t = t.getTime()) - e;
        return t => new Date(e + t * n)
      }
      const n = Object.keys(t),
        i = {};
      return n.forEach((n => {
        i[n] = Ie(e[n], t[n])
      })), e => {
        const t = {};
        return n.forEach((n => {
          t[n] = i[n](e)
        })), t
      }
    }
    if ("number" === n) {
      const n = t - e;
      return t => e + t * n
    }
    throw new Error(`Cannot interpolate ${n} values`)
  }

  function Ce(e, i = {}) {
    const s = Ae(e);
    let r, o = e;

    function a(a, l) {
      if (null == e) return s.set(e = a), Promise.resolve();
      o = a;
      let c = r,
        u = !1,
        {
          delay: f = 0,
          duration: h = 400,
          easing: p = t,
          interpolate: m = Ie
        } = n(n({}, i), l);
      if (0 === h) return c && (c.abort(), c = null), s.set(e = o), Promise.resolve();
      const d = b() + f;
      let g;
      return r = x((t => {
        if (t < d) return !0;
        u || (g = m(e, a), "function" == typeof h && (h = h(e, a)), u = !0), c && (c.abort(), c = null);
        const n = t - d;
        return n > h ? (s.set(e = a), !1) : (s.set(e = g(p(n / h))), !0)
      })), r.promise
    }
    return {
      set: a,
      update: (t, n) => a(t(o, e), n),
      subscribe: s.subscribe
    }
  }

  function Me(e) {
    E(e, "svelte-1po3g9q", ".progress.svelte-1po3g9q.svelte-1po3g9q{grid-area:auto;height:0.4em;width:100%;position:relative}.progress.svelte-1po3g9q .progress-slider.svelte-1po3g9q{background-color:var(--quizdown-color-primary);height:100%;display:block}")
  }

  function Re(t) {
    let n, i;
    return {
      c() {
        n = N("div"), i = N("div"), R(i, "class", "progress-slider svelte-1po3g9q"), D(i, "width", t[0]), R(n, "class", "progress svelte-1po3g9q"), R(n, "data-label", "")
      },
      m(e, t) {
        $(e, n, t), z(n, i)
      },
      p(e, [t]) {
        1 & t && D(i, "width", e[0])
      },
      i: e,
      o: e,
      d(e) {
        e && S(n)
      }
    }
  }

  function Pe(e, t, n) {
    let i, s, {
        value: r
      } = t,
      {
        max: o
      } = t;
    const a = Ce(0, {
      duration: 400,
      easing: Oe
    });
    return u(e, a, (e => n(4, s = e))), e.$$set = e => {
      "value" in e && n(2, r = e.value), "max" in e && n(3, o = e.max)
    }, e.$$.update = () => {
      12 & e.$$.dirty && a.set(Math.min(o, r) + .5), 24 & e.$$.dirty && n(0, i = String(s / (o + .5) * 100) + "%")
    }, [i, a, r, o, s]
  }
  class De extends $e {
    constructor(e) {
      super(), Te(this, e, Pe, Re, a, {
        value: 2,
        max: 3
      }, Me)
    }
  }
  var je = function(e) {
    return function(e) {
      return !!e && "object" == typeof e
    }(e) && ! function(e) {
      var t = Object.prototype.toString.call(e);
      return "[object RegExp]" === t || "[object Date]" === t || function(e) {
        return e.$$typeof === qe
      }(e)
    }(e)
  };
  var qe = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

  function Ue(e, t) {
    return !1 !== t.clone && t.isMergeableObject(e) ? Ge((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
    var n
  }

  function Ke(e, t, n) {
    return e.concat(t).map((function(e) {
      return Ue(e, n)
    }))
  }

  function Be(e) {
    return Object.keys(e).concat(function(e) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(t) {
        return e.propertyIsEnumerable(t)
      })) : []
    }(e))
  }

  function Fe(e, t) {
    try {
      return t in e
    } catch (e) {
      return !1
    }
  }

  function Xe(e, t, n) {
    var i = {};
    return n.isMergeableObject(e) && Be(e).forEach((function(t) {
      i[t] = Ue(e[t], n)
    })), Be(t).forEach((function(s) {
      (function(e, t) {
        return Fe(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
      })(e, s) || (Fe(e, s) && n.isMergeableObject(t[s]) ? i[s] = function(e, t) {
        if (!t.customMerge) return Ge;
        var n = t.customMerge(e);
        return "function" == typeof n ? n : Ge
      }(s, n)(e[s], t[s], n) : i[s] = Ue(t[s], n))
    })), i
  }

  function Ge(e, t, n) {
    (n = n || {}).arrayMerge = n.arrayMerge || Ke, n.isMergeableObject = n.isMergeableObject || je, n.cloneUnlessOtherwiseSpecified = Ue;
    var i = Array.isArray(t);
    return i === Array.isArray(e) ? i ? n.arrayMerge(e, t, n) : Xe(e, t, n) : Ue(t, n)
  }
  Ge.all = function(e, t) {
    if (!Array.isArray(e)) throw new Error("first argument should be an array");
    return e.reduce((function(e, n) {
      return Ge(e, n, t)
    }), {})
  };
  var Ve = Ge,
    He = function(e, t) {
      return (He = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        })(e, t)
    };

  function We(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

    function n() {
      this.constructor = e
    }
    He(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
  }
  var Ye, Je, Ze, Qe = function() {
    return (Qe = Object.assign || function(e) {
      for (var t, n = 1, i = arguments.length; n < i; n++)
        for (var s in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
      return e
    }).apply(this, arguments)
  };

  function et(e, t, n) {
    if (n || 2 === arguments.length)
      for (var i, s = 0, r = t.length; s < r; s++) !i && s in t || (i || (i = Array.prototype.slice.call(t, 0, s)), i[s] = t[s]);
    return e.concat(i || t)
  }

  function tt(e) {
    return e.type === Je.literal
  }

  function nt(e) {
    return e.type === Je.argument
  }

  function it(e) {
    return e.type === Je.number
  }

  function st(e) {
    return e.type === Je.date
  }

  function rt(e) {
    return e.type === Je.time
  }

  function ot(e) {
    return e.type === Je.select
  }

  function at(e) {
    return e.type === Je.plural
  }

  function lt(e) {
    return e.type === Je.pound
  }

  function ct(e) {
    return e.type === Je.tag
  }

  function ut(e) {
    return !(!e || "object" != typeof e || e.type !== Ze.number)
  }

  function ft(e) {
    return !(!e || "object" != typeof e || e.type !== Ze.dateTime)
  }! function(e) {
    e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
  }(Ye || (Ye = {})),
  function(e) {
    e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
  }(Je || (Je = {})),
  function(e) {
    e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
  }(Ze || (Ze = {}));
  var ht = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
    pt = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

  function mt(e) {
    var t = {};
    return e.replace(pt, (function(e) {
      var n = e.length;
      switch (e[0]) {
        case "G":
          t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
          break;
        case "y":
          t.year = 2 === n ? "2-digit" : "numeric";
          break;
        case "Y":
        case "u":
        case "U":
        case "r":
          throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
        case "q":
        case "Q":
          throw new RangeError("`q/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
          t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
          break;
        case "w":
        case "W":
          throw new RangeError("`w/W` (week) patterns are not supported");
        case "d":
          t.day = ["numeric", "2-digit"][n - 1];
          break;
        case "D":
        case "F":
        case "g":
          throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
        case "E":
          t.weekday = 4 === n ? "short" : 5 === n ? "narrow" : "short";
          break;
        case "e":
          if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
          t.weekday = ["short", "long", "narrow", "short"][n - 4];
          break;
        case "c":
          if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
          t.weekday = ["short", "long", "narrow", "short"][n - 4];
          break;
        case "a":
          t.hour12 = !0;
          break;
        case "b":
        case "B":
          throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
        case "h":
          t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
          break;
        case "H":
          t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
          break;
        case "K":
          t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
          break;
        case "k":
          t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
          break;
        case "j":
        case "J":
        case "C":
          throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        case "m":
          t.minute = ["numeric", "2-digit"][n - 1];
          break;
        case "s":
          t.second = ["numeric", "2-digit"][n - 1];
          break;
        case "S":
        case "A":
          throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
        case "z":
          t.timeZoneName = n < 4 ? "short" : "long";
          break;
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
          throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
      }
      return ""
    })), t
  }
  var dt = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
  var gt, yt = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
    bt = /^(@+)?(\+|#+)?$/g,
    kt = /(\*)(0+)|(#+)(0+)|(0+)/g,
    vt = /^(0+)$/;

  function wt(e) {
    var t = {};
    return e.replace(bt, (function(e, n, i) {
      return "string" != typeof i ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === i ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof i ? i.length : 0)), ""
    })), t
  }

  function xt(e) {
    switch (e) {
      case "sign-auto":
        return {
          signDisplay: "auto"
        };
      case "sign-accounting":
      case "()":
        return {
          currencySign: "accounting"
        };
      case "sign-always":
      case "+!":
        return {
          signDisplay: "always"
        };
      case "sign-accounting-always":
      case "()!":
        return {
          signDisplay: "always", currencySign: "accounting"
        };
      case "sign-except-zero":
      case "+?":
        return {
          signDisplay: "exceptZero"
        };
      case "sign-accounting-except-zero":
      case "()?":
        return {
          signDisplay: "exceptZero", currencySign: "accounting"
        };
      case "sign-never":
      case "+_":
        return {
          signDisplay: "never"
        }
    }
  }

  function zt(e) {
    var t;
    if ("E" === e[0] && "E" === e[1] ? (t = {
        notation: "engineering"
      }, e = e.slice(2)) : "E" === e[0] && (t = {
        notation: "scientific"
      }, e = e.slice(1)), t) {
      var n = e.slice(0, 2);
      if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !vt.test(e)) throw new Error("Malformed concise eng/scientific notation");
      t.minimumIntegerDigits = e.length
    }
    return t
  }

  function Et(e) {
    var t = xt(e);
    return t || {}
  }

  function _t(e) {
    for (var t = {}, n = 0, i = e; n < i.length; n++) {
      var s = i[n];
      switch (s.stem) {
        case "percent":
        case "%":
          t.style = "percent";
          continue;
        case "%x100":
          t.style = "percent", t.scale = 100;
          continue;
        case "currency":
          t.style = "currency", t.currency = s.options[0];
          continue;
        case "group-off":
        case ",_":
          t.useGrouping = !1;
          continue;
        case "precision-integer":
        case ".":
          t.maximumFractionDigits = 0;
          continue;
        case "measure-unit":
        case "unit":
          t.style = "unit", t.unit = s.options[0].replace(/^(.*?)-/, "");
          continue;
        case "compact-short":
        case "K":
          t.notation = "compact", t.compactDisplay = "short";
          continue;
        case "compact-long":
        case "KK":
          t.notation = "compact", t.compactDisplay = "long";
          continue;
        case "scientific":
          t = Qe(Qe(Qe({}, t), {
            notation: "scientific"
          }), s.options.reduce((function(e, t) {
            return Qe(Qe({}, e), Et(t))
          }), {}));
          continue;
        case "engineering":
          t = Qe(Qe(Qe({}, t), {
            notation: "engineering"
          }), s.options.reduce((function(e, t) {
            return Qe(Qe({}, e), Et(t))
          }), {}));
          continue;
        case "notation-simple":
          t.notation = "standard";
          continue;
        case "unit-width-narrow":
          t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
          continue;
        case "unit-width-short":
          t.currencyDisplay = "code", t.unitDisplay = "short";
          continue;
        case "unit-width-full-name":
          t.currencyDisplay = "name", t.unitDisplay = "long";
          continue;
        case "unit-width-iso-code":
          t.currencyDisplay = "symbol";
          continue;
        case "scale":
          t.scale = parseFloat(s.options[0]);
          continue;
        case "integer-width":
          if (s.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
          s.options[0].replace(kt, (function(e, n, i, s, r, o) {
            if (n) t.minimumIntegerDigits = i.length;
            else {
              if (s && r) throw new Error("We currently do not support maximum integer digits");
              if (o) throw new Error("We currently do not support exact integer digits")
            }
            return ""
          }));
          continue
      }
      if (vt.test(s.stem)) t.minimumIntegerDigits = s.stem.length;
      else if (yt.test(s.stem)) {
        if (s.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
        s.stem.replace(yt, (function(e, n, i, s, r, o) {
          return "*" === i ? t.minimumFractionDigits = n.length : s && "#" === s[0] ? t.maximumFractionDigits = s.length : r && o ? (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length + o.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
        })), s.options.length && (t = Qe(Qe({}, t), wt(s.options[0])))
      } else if (bt.test(s.stem)) t = Qe(Qe({}, t), wt(s.stem));
      else {
        var r = xt(s.stem);
        r && (t = Qe(Qe({}, t), r));
        var o = zt(s.stem);
        o && (t = Qe(Qe({}, t), o))
      }
    }
    return t
  }
  var Tt = new RegExp("^" + ht.source + "*"),
    $t = new RegExp(ht.source + "*$");

  function St(e, t) {
    return {
      start: e,
      end: t
    }
  }
  var At = !!String.prototype.startsWith,
    Nt = !!String.fromCodePoint,
    Ot = !!Object.fromEntries,
    Lt = !!String.prototype.codePointAt,
    It = !!String.prototype.trimStart,
    Ct = !!String.prototype.trimEnd,
    Mt = !!Number.isSafeInteger ? Number.isSafeInteger : function(e) {
      return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
    },
    Rt = !0;
  try {
    Rt = "a" === (null === (gt = Ft("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === gt ? void 0 : gt[0])
  } catch (e) {
    Rt = !1
  }
  var Pt, Dt = At ? function(e, t, n) {
      return e.startsWith(t, n)
    } : function(e, t, n) {
      return e.slice(n, n + t.length) === t
    },
    jt = Nt ? String.fromCodePoint : function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n, i = "", s = e.length, r = 0; s > r;) {
        if ((n = e[r++]) > 1114111) throw RangeError(n + " is not a valid code point");
        i += n < 65536 ? String.fromCharCode(n) : String.fromCharCode(55296 + ((n -= 65536) >> 10), n % 1024 + 56320)
      }
      return i
    },
    qt = Ot ? Object.fromEntries : function(e) {
      for (var t = {}, n = 0, i = e; n < i.length; n++) {
        var s = i[n],
          r = s[0],
          o = s[1];
        t[r] = o
      }
      return t
    },
    Ut = Lt ? function(e, t) {
      return e.codePointAt(t)
    } : function(e, t) {
      var n = e.length;
      if (!(t < 0 || t >= n)) {
        var i, s = e.charCodeAt(t);
        return s < 55296 || s > 56319 || t + 1 === n || (i = e.charCodeAt(t + 1)) < 56320 || i > 57343 ? s : i - 56320 + (s - 55296 << 10) + 65536
      }
    },
    Kt = It ? function(e) {
      return e.trimStart()
    } : function(e) {
      return e.replace(Tt, "")
    },
    Bt = Ct ? function(e) {
      return e.trimEnd()
    } : function(e) {
      return e.replace($t, "")
    };

  function Ft(e, t) {
    return new RegExp(e, t)
  }
  if (Rt) {
    var Xt = Ft("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
    Pt = function(e, t) {
      var n;
      return Xt.lastIndex = t, null !== (n = Xt.exec(e)[1]) && void 0 !== n ? n : ""
    }
  } else Pt = function(e, t) {
    for (var n = [];;) {
      var i = Ut(e, t);
      if (void 0 === i || Wt(i) || Yt(i)) break;
      n.push(i), t += i >= 65536 ? 2 : 1
    }
    return jt.apply(void 0, n)
  };
  var Gt = function() {
    function e(e, t) {
      void 0 === t && (t = {}), this.message = e, this.position = {
        offset: 0,
        line: 1,
        column: 1
      }, this.ignoreTag = !!t.ignoreTag, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
    }
    return e.prototype.parse = function() {
      if (0 !== this.offset()) throw Error("parser can only be used once");
      return this.parseMessage(0, "", !1)
    }, e.prototype.parseMessage = function(e, t, n) {
      for (var i = []; !this.isEOF();) {
        var s = this.char();
        if (123 === s) {
          if ((r = this.parseArgument(e, n)).err) return r;
          i.push(r.val)
        } else {
          if (125 === s && e > 0) break;
          if (35 !== s || "plural" !== t && "selectordinal" !== t) {
            if (60 === s && !this.ignoreTag && 47 === this.peek()) {
              if (n) break;
              return this.error(Ye.UNMATCHED_CLOSING_TAG, St(this.clonePosition(), this.clonePosition()))
            }
            if (60 === s && !this.ignoreTag && Vt(this.peek() || 0)) {
              if ((r = this.parseTag(e, t)).err) return r;
              i.push(r.val)
            } else {
              var r;
              if ((r = this.parseLiteral(e, t)).err) return r;
              i.push(r.val)
            }
          } else {
            var o = this.clonePosition();
            this.bump(), i.push({
              type: Je.pound,
              location: St(o, this.clonePosition())
            })
          }
        }
      }
      return {
        val: i,
        err: null
      }
    }, e.prototype.parseTag = function(e, t) {
      var n = this.clonePosition();
      this.bump();
      var i = this.parseTagName();
      if (this.bumpSpace(), this.bumpIf("/>")) return {
        val: {
          type: Je.literal,
          value: "<" + i + "/>",
          location: St(n, this.clonePosition())
        },
        err: null
      };
      if (this.bumpIf(">")) {
        var s = this.parseMessage(e + 1, t, !0);
        if (s.err) return s;
        var r = s.val,
          o = this.clonePosition();
        if (this.bumpIf("</")) {
          if (this.isEOF() || !Vt(this.char())) return this.error(Ye.INVALID_TAG, St(o, this.clonePosition()));
          var a = this.clonePosition();
          return i !== this.parseTagName() ? this.error(Ye.UNMATCHED_CLOSING_TAG, St(a, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Je.tag,
              value: i,
              children: r,
              location: St(n, this.clonePosition())
            },
            err: null
          } : this.error(Ye.INVALID_TAG, St(o, this.clonePosition())))
        }
        return this.error(Ye.UNCLOSED_TAG, St(n, this.clonePosition()))
      }
      return this.error(Ye.INVALID_TAG, St(n, this.clonePosition()))
    }, e.prototype.parseTagName = function() {
      var e = this.offset();
      for (this.bump(); !this.isEOF() && Ht(this.char());) this.bump();
      return this.message.slice(e, this.offset())
    }, e.prototype.parseLiteral = function(e, t) {
      for (var n = this.clonePosition(), i = "";;) {
        var s = this.tryParseQuote(t);
        if (s) i += s;
        else {
          var r = this.tryParseUnquoted(e, t);
          if (r) i += r;
          else {
            var o = this.tryParseLeftAngleBracket();
            if (!o) break;
            i += o
          }
        }
      }
      var a = St(n, this.clonePosition());
      return {
        val: {
          type: Je.literal,
          value: i,
          location: a
        },
        err: null
      }
    }, e.prototype.tryParseLeftAngleBracket = function() {
      return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Vt(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
      var e
    }, e.prototype.tryParseQuote = function(e) {
      if (this.isEOF() || 39 !== this.char()) return null;
      switch (this.peek()) {
        case 39:
          return this.bump(), this.bump(), "'";
        case 123:
        case 60:
        case 62:
        case 125:
          break;
        case 35:
          if ("plural" === e || "selectordinal" === e) break;
          return null;
        default:
          return null
      }
      this.bump();
      var t = [this.char()];
      for (this.bump(); !this.isEOF();) {
        var n = this.char();
        if (39 === n) {
          if (39 !== this.peek()) {
            this.bump();
            break
          }
          t.push(39), this.bump()
        } else t.push(n);
        this.bump()
      }
      return jt.apply(void 0, t)
    }, e.prototype.tryParseUnquoted = function(e, t) {
      if (this.isEOF()) return null;
      var n = this.char();
      return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), jt(n))
    }, e.prototype.parseArgument = function(e, t) {
      var n = this.clonePosition();
      if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, St(n, this.clonePosition()));
      if (125 === this.char()) return this.bump(), this.error(Ye.EMPTY_ARGUMENT, St(n, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i) return this.error(Ye.MALFORMED_ARGUMENT, St(n, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF()) return this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, St(n, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Je.argument,
              value: i,
              location: St(n, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, St(n, this.clonePosition())) : this.parseArgumentOptions(e, t, i, n);
        default:
          return this.error(Ye.MALFORMED_ARGUMENT, St(n, this.clonePosition()))
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var e = this.clonePosition(),
        t = this.offset(),
        n = Pt(this.message, t),
        i = t + n.length;
      return this.bumpTo(i), {
        value: n,
        location: St(e, this.clonePosition())
      }
    }, e.prototype.parseArgumentOptions = function(e, t, n, i) {
      var s, r = this.clonePosition(),
        o = this.parseIdentifierIfPossible().value,
        a = this.clonePosition();
      switch (o) {
        case "":
          return this.error(Ye.EXPECT_ARGUMENT_TYPE, St(r, a));
        case "number":
        case "date":
        case "time":
          this.bumpSpace();
          var l = null;
          if (this.bumpIf(",")) {
            this.bumpSpace();
            var c = this.clonePosition();
            if ((g = this.parseSimpleArgStyleIfPossible()).err) return g;
            if (0 === (h = Bt(g.val)).length) return this.error(Ye.EXPECT_ARGUMENT_STYLE, St(this.clonePosition(), this.clonePosition()));
            l = {
              style: h,
              styleLocation: St(c, this.clonePosition())
            }
          }
          if ((y = this.tryParseArgumentClose(i)).err) return y;
          var u = St(i, this.clonePosition());
          if (l && Dt(null == l ? void 0 : l.style, "::", 0)) {
            var f = Kt(l.style.slice(2));
            if ("number" === o) return (g = this.parseNumberSkeletonFromString(f, l.styleLocation)).err ? g : {
              val: {
                type: Je.number,
                value: n,
                location: u,
                style: g.val
              },
              err: null
            };
            if (0 === f.length) return this.error(Ye.EXPECT_DATE_TIME_SKELETON, u);
            var h = {
              type: Ze.dateTime,
              pattern: f,
              location: l.styleLocation,
              parsedOptions: this.shouldParseSkeletons ? mt(f) : {}
            };
            return {
              val: {
                type: "date" === o ? Je.date : Je.time,
                value: n,
                location: u,
                style: h
              },
              err: null
            }
          }
          return {
            val: {
              type: "number" === o ? Je.number : "date" === o ? Je.date : Je.time,
              value: n,
              location: u,
              style: null !== (s = null == l ? void 0 : l.style) && void 0 !== s ? s : null
            }, err: null
          };
        case "plural":
        case "selectordinal":
        case "select":
          var p = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(",")) return this.error(Ye.EXPECT_SELECT_ARGUMENT_OPTIONS, St(p, Qe({}, p)));
          this.bumpSpace();
          var m = this.parseIdentifierIfPossible(),
            d = 0;
          if ("select" !== o && "offset" === m.value) {
            if (!this.bumpIf(":")) return this.error(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, St(this.clonePosition(), this.clonePosition()));
            var g;
            if (this.bumpSpace(), (g = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Ye.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return g;
            this.bumpSpace(), m = this.parseIdentifierIfPossible(), d = g.val
          }
          var y, b = this.tryParsePluralOrSelectOptions(e, o, t, m);
          if (b.err) return b;
          if ((y = this.tryParseArgumentClose(i)).err) return y;
          var k = St(i, this.clonePosition());
          return "select" === o ? {
            val: {
              type: Je.select,
              value: n,
              options: qt(b.val),
              location: k
            },
            err: null
          } : {
            val: {
              type: Je.plural,
              value: n,
              options: qt(b.val),
              offset: d,
              pluralType: "plural" === o ? "cardinal" : "ordinal",
              location: k
            },
            err: null
          };
        default:
          return this.error(Ye.INVALID_ARGUMENT_TYPE, St(r, a))
      }
    }, e.prototype.tryParseArgumentClose = function(e) {
      return this.isEOF() || 125 !== this.char() ? this.error(Ye.EXPECT_ARGUMENT_CLOSING_BRACE, St(e, this.clonePosition())) : (this.bump(), {
        val: !0,
        err: null
      })
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var e = 0, t = this.clonePosition(); !this.isEOF();) {
        switch (this.char()) {
          case 39:
            this.bump();
            var n = this.clonePosition();
            if (!this.bumpUntil("'")) return this.error(Ye.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, St(n, this.clonePosition()));
            this.bump();
            break;
          case 123:
            e += 1, this.bump();
            break;
          case 125:
            if (!(e > 0)) return {
              val: this.message.slice(t.offset, this.offset()),
              err: null
            };
            e -= 1;
            break;
          default:
            this.bump()
        }
      }
      return {
        val: this.message.slice(t.offset, this.offset()),
        err: null
      }
    }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
      var n = [];
      try {
        n = function(e) {
          if (0 === e.length) throw new Error("Number skeleton cannot be empty");
          for (var t = [], n = 0, i = e.split(dt).filter((function(e) {
              return e.length > 0
            })); n < i.length; n++) {
            var s = i[n].split("/");
            if (0 === s.length) throw new Error("Invalid number skeleton");
            for (var r = s[0], o = s.slice(1), a = 0, l = o; a < l.length; a++)
              if (0 === l[a].length) throw new Error("Invalid number skeleton");
            t.push({
              stem: r,
              options: o
            })
          }
          return t
        }(e)
      } catch (e) {
        return this.error(Ye.INVALID_NUMBER_SKELETON, t)
      }
      return {
        val: {
          type: Ze.number,
          tokens: n,
          location: t,
          parsedOptions: this.shouldParseSkeletons ? _t(n) : {}
        },
        err: null
      }
    }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, n, i) {
      for (var s, r = !1, o = [], a = new Set, l = i.value, c = i.location;;) {
        if (0 === l.length) {
          var u = this.clonePosition();
          if ("select" === t || !this.bumpIf("=")) break;
          var f = this.tryParseDecimalInteger(Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, Ye.INVALID_PLURAL_ARGUMENT_SELECTOR);
          if (f.err) return f;
          c = St(u, this.clonePosition()), l = this.message.slice(u.offset, this.offset())
        }
        if (a.has(l)) return this.error("select" === t ? Ye.DUPLICATE_SELECT_ARGUMENT_SELECTOR : Ye.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, c);
        "other" === l && (r = !0), this.bumpSpace();
        var h = this.clonePosition();
        if (!this.bumpIf("{")) return this.error("select" === t ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, St(this.clonePosition(), this.clonePosition()));
        var p = this.parseMessage(e + 1, t, n);
        if (p.err) return p;
        var m = this.tryParseArgumentClose(h);
        if (m.err) return m;
        o.push([l, {
          value: p.val,
          location: St(h, this.clonePosition())
        }]), a.add(l), this.bumpSpace(), l = (s = this.parseIdentifierIfPossible()).value, c = s.location
      }
      return 0 === o.length ? this.error("select" === t ? Ye.EXPECT_SELECT_ARGUMENT_SELECTOR : Ye.EXPECT_PLURAL_ARGUMENT_SELECTOR, St(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !r ? this.error(Ye.MISSING_OTHER_CLAUSE, St(this.clonePosition(), this.clonePosition())) : {
        val: o,
        err: null
      }
    }, e.prototype.tryParseDecimalInteger = function(e, t) {
      var n = 1,
        i = this.clonePosition();
      this.bumpIf("+") || this.bumpIf("-") && (n = -1);
      for (var s = !1, r = 0; !this.isEOF();) {
        var o = this.char();
        if (!(o >= 48 && o <= 57)) break;
        s = !0, r = 10 * r + (o - 48), this.bump()
      }
      var a = St(i, this.clonePosition());
      return s ? Mt(r *= n) ? {
        val: r,
        err: null
      } : this.error(t, a) : this.error(e, a)
    }, e.prototype.offset = function() {
      return this.position.offset
    }, e.prototype.isEOF = function() {
      return this.offset() === this.message.length
    }, e.prototype.clonePosition = function() {
      return {
        offset: this.position.offset,
        line: this.position.line,
        column: this.position.column
      }
    }, e.prototype.char = function() {
      var e = this.position.offset;
      if (e >= this.message.length) throw Error("out of bound");
      var t = Ut(this.message, e);
      if (void 0 === t) throw Error("Offset " + e + " is at invalid UTF-16 code unit boundary");
      return t
    }, e.prototype.error = function(e, t) {
      return {
        val: null,
        err: {
          kind: e,
          message: this.message,
          location: t
        }
      }
    }, e.prototype.bump = function() {
      if (!this.isEOF()) {
        var e = this.char();
        10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
      }
    }, e.prototype.bumpIf = function(e) {
      if (Dt(this.message, e, this.offset())) {
        for (var t = 0; t < e.length; t++) this.bump();
        return !0
      }
      return !1
    }, e.prototype.bumpUntil = function(e) {
      var t = this.offset(),
        n = this.message.indexOf(e, t);
      return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
    }, e.prototype.bumpTo = function(e) {
      if (this.offset() > e) throw Error("targetOffset " + e + " must be greater than or equal to the current offset " + this.offset());
      for (e = Math.min(e, this.message.length);;) {
        var t = this.offset();
        if (t === e) break;
        if (t > e) throw Error("targetOffset " + e + " is at invalid UTF-16 code unit boundary");
        if (this.bump(), this.isEOF()) break
      }
    }, e.prototype.bumpSpace = function() {
      for (; !this.isEOF() && Wt(this.char());) this.bump()
    }, e.prototype.peek = function() {
      if (this.isEOF()) return null;
      var e = this.char(),
        t = this.offset(),
        n = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
      return null != n ? n : null
    }, e
  }();

  function Vt(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
  }

  function Ht(e) {
    return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
  }

  function Wt(e) {
    return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
  }

  function Yt(e) {
    return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
  }

  function Jt(e) {
    e.forEach((function(e) {
      if (delete e.location, ot(e) || at(e))
        for (var t in e.options) delete e.options[t].location, Jt(e.options[t].value);
      else it(e) && ut(e.style) || (st(e) || rt(e)) && ft(e.style) ? delete e.style.location : ct(e) && Jt(e.children)
    }))
  }

  function Zt(e, t) {
    void 0 === t && (t = {}), t = Qe({
      shouldParseSkeletons: !0,
      requiresOtherClause: !0
    }, t);
    var n = new Gt(e, t).parse();
    if (n.err) {
      var i = SyntaxError(Ye[n.err.kind]);
      throw i.location = n.err.location, i.originalMessage = n.err.message, i
    }
    return (null == t ? void 0 : t.captureLocation) || Jt(n.val), n.val
  }

  function Qt(e, t) {
    var n = t && t.cache ? t.cache : ln,
      i = t && t.serializer ? t.serializer : rn;
    return (t && t.strategy ? t.strategy : sn)(e, {
      cache: n,
      serializer: i
    })
  }

  function en(e, t, n, i) {
    var s, r = null == (s = i) || "number" == typeof s || "boolean" == typeof s ? i : n(i),
      o = t.get(r);
    return void 0 === o && (o = e.call(this, i), t.set(r, o)), o
  }

  function tn(e, t, n) {
    var i = Array.prototype.slice.call(arguments, 3),
      s = n(i),
      r = t.get(s);
    return void 0 === r && (r = e.apply(this, i), t.set(s, r)), r
  }

  function nn(e, t, n, i, s) {
    return n.bind(t, e, i, s)
  }

  function sn(e, t) {
    return nn(e, this, 1 === e.length ? en : tn, t.cache.create(), t.serializer)
  }
  var rn = function() {
    return JSON.stringify(arguments)
  };

  function on() {
    this.cache = Object.create(null)
  }
  on.prototype.has = function(e) {
    return e in this.cache
  }, on.prototype.get = function(e) {
    return this.cache[e]
  }, on.prototype.set = function(e, t) {
    this.cache[e] = t
  };
  var an, ln = {
      create: function() {
        return new on
      }
    },
    cn = {
      variadic: function(e, t) {
        return nn(e, this, tn, t.cache.create(), t.serializer)
      },
      monadic: function(e, t) {
        return nn(e, this, en, t.cache.create(), t.serializer)
      }
    };
  ! function(e) {
    e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
  }(an || (an = {}));
  var un, fn = function(e) {
      function t(t, n, i) {
        var s = e.call(this, t) || this;
        return s.code = n, s.originalMessage = i, s
      }
      return We(t, e), t.prototype.toString = function() {
        return "[formatjs Error: " + this.code + "] " + this.message
      }, t
    }(Error),
    hn = function(e) {
      function t(t, n, i, s) {
        return e.call(this, 'Invalid values for "' + t + '": "' + n + '". Options are "' + Object.keys(i).join('", "') + '"', an.INVALID_VALUE, s) || this
      }
      return We(t, e), t
    }(fn),
    pn = function(e) {
      function t(t, n, i) {
        return e.call(this, 'Value for "' + t + '" must be of type ' + n, an.INVALID_VALUE, i) || this
      }
      return We(t, e), t
    }(fn),
    mn = function(e) {
      function t(t, n) {
        return e.call(this, 'The intl string context variable "' + t + '" was not provided to the string "' + n + '"', an.MISSING_VALUE, n) || this
      }
      return We(t, e), t
    }(fn);

  function dn(e) {
    return "function" == typeof e
  }

  function gn(e, t, n, i, s, r, o) {
    if (1 === e.length && tt(e[0])) return [{
      type: un.literal,
      value: e[0].value
    }];
    for (var a = [], l = 0, c = e; l < c.length; l++) {
      var u = c[l];
      if (tt(u)) a.push({
        type: un.literal,
        value: u.value
      });
      else if (lt(u)) "number" == typeof r && a.push({
        type: un.literal,
        value: n.getNumberFormat(t).format(r)
      });
      else {
        var f = u.value;
        if (!s || !(f in s)) throw new mn(f, o);
        var h = s[f];
        if (nt(u)) h && "string" != typeof h && "number" != typeof h || (h = "string" == typeof h || "number" == typeof h ? String(h) : ""), a.push({
          type: "string" == typeof h ? un.literal : un.object,
          value: h
        });
        else if (st(u)) {
          var p = "string" == typeof u.style ? i.date[u.style] : ft(u.style) ? u.style.parsedOptions : void 0;
          a.push({
            type: un.literal,
            value: n.getDateTimeFormat(t, p).format(h)
          })
        } else if (rt(u)) {
          p = "string" == typeof u.style ? i.time[u.style] : ft(u.style) ? u.style.parsedOptions : void 0;
          a.push({
            type: un.literal,
            value: n.getDateTimeFormat(t, p).format(h)
          })
        } else if (it(u)) {
          (p = "string" == typeof u.style ? i.number[u.style] : ut(u.style) ? u.style.parsedOptions : void 0) && p.scale && (h *= p.scale || 1), a.push({
            type: un.literal,
            value: n.getNumberFormat(t, p).format(h)
          })
        } else {
          if (ct(u)) {
            var m = u.children,
              d = u.value,
              g = s[d];
            if (!dn(g)) throw new pn(d, "function", o);
            var y = g(gn(m, t, n, i, s, r).map((function(e) {
              return e.value
            })));
            Array.isArray(y) || (y = [y]), a.push.apply(a, y.map((function(e) {
              return {
                type: "string" == typeof e ? un.literal : un.object,
                value: e
              }
            })))
          }
          if (ot(u)) {
            if (!(b = u.options[h] || u.options.other)) throw new hn(u.value, h, Object.keys(u.options), o);
            a.push.apply(a, gn(b.value, t, n, i, s))
          } else if (at(u)) {
            var b;
            if (!(b = u.options["=" + h])) {
              if (!Intl.PluralRules) throw new fn('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', an.MISSING_INTL_API, o);
              var k = n.getPluralRules(t, {
                type: u.pluralType
              }).select(h - (u.offset || 0));
              b = u.options[k] || u.options.other
            }
            if (!b) throw new hn(u.value, h, Object.keys(u.options), o);
            a.push.apply(a, gn(b.value, t, n, i, s, h - (u.offset || 0)))
          } else;
        }
      }
    }
    return function(e) {
      return e.length < 2 ? e : e.reduce((function(e, t) {
        var n = e[e.length - 1];
        return n && n.type === un.literal && t.type === un.literal ? n.value += t.value : e.push(t), e
      }), [])
    }(a)
  }

  function yn(e, t) {
    return t ? Object.keys(e).reduce((function(n, i) {
      var s, r;
      return n[i] = (s = e[i], (r = t[i]) ? Qe(Qe(Qe({}, s || {}), r || {}), Object.keys(s).reduce((function(e, t) {
        return e[t] = Qe(Qe({}, s[t]), r[t] || {}), e
      }), {})) : s), n
    }), Qe({}, e)) : e
  }

  function bn(e) {
    return {
      create: function() {
        return {
          has: function(t) {
            return t in e
          },
          get: function(t) {
            return e[t]
          },
          set: function(t, n) {
            e[t] = n
          }
        }
      }
    }
  }! function(e) {
    e[e.literal = 0] = "literal", e[e.object = 1] = "object"
  }(un || (un = {}));
  var kn = function() {
    function e(t, n, i, s) {
      var r, o = this;
      if (void 0 === n && (n = e.defaultLocale), this.formatterCache = {
          number: {},
          dateTime: {},
          pluralRules: {}
        }, this.format = function(e) {
          var t = o.formatToParts(e);
          if (1 === t.length) return t[0].value;
          var n = t.reduce((function(e, t) {
            return e.length && t.type === un.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
          }), []);
          return n.length <= 1 ? n[0] || "" : n
        }, this.formatToParts = function(e) {
          return gn(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message)
        }, this.resolvedOptions = function() {
          return {
            locale: Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
          }
        }, this.getAst = function() {
          return o.ast
        }, "string" == typeof t) {
        if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
        this.ast = e.__parse(t, {
          ignoreTag: null == s ? void 0 : s.ignoreTag
        })
      } else this.ast = t;
      if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
      this.formats = yn(e.formats, i), this.locales = n, this.formatters = s && s.formatters || (void 0 === (r = this.formatterCache) && (r = {
        number: {},
        dateTime: {},
        pluralRules: {}
      }), {
        getNumberFormat: Qt((function() {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new((e = Intl.NumberFormat).bind.apply(e, et([void 0], t)))
        }), {
          cache: bn(r.number),
          strategy: cn.variadic
        }),
        getDateTimeFormat: Qt((function() {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new((e = Intl.DateTimeFormat).bind.apply(e, et([void 0], t)))
        }), {
          cache: bn(r.dateTime),
          strategy: cn.variadic
        }),
        getPluralRules: Qt((function() {
          for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return new((e = Intl.PluralRules).bind.apply(e, et([void 0], t)))
        }), {
          cache: bn(r.pluralRules),
          strategy: cn.variadic
        })
      })
    }
    return Object.defineProperty(e, "defaultLocale", {
      get: function() {
        return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
      },
      enumerable: !1,
      configurable: !0
    }), e.memoizedDefaultLocale = null, e.__parse = Zt, e.formats = {
      number: {
        integer: {
          maximumFractionDigits: 0
        },
        currency: {
          style: "currency"
        },
        percent: {
          style: "percent"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    }, e
  }();
  const vn = {},
    wn = (e, t, n) => n ? (t in vn || (vn[t] = {}), e in vn[t] || (vn[t][e] = n), n) : n,
    xn = (e, t) => {
      if (null == t) return;
      if (t in vn && e in vn[t]) return vn[t][e];
      const n = qn(t);
      for (let i = 0; i < n.length; i++) {
        const s = Tn(n[i], e);
        if (s) return wn(e, t, s)
      }
    };
  let zn;
  const En = Ae({});

  function _n(e) {
    return e in zn
  }

  function Tn(e, t) {
    return _n(e) ? function(e, t) {
      if (t in e) return e[t];
      const n = t.split(".");
      let i = e;
      for (let e = 0; e < n.length; e++)
        if ("object" == typeof i) {
          if (e > 0) {
            const t = n.slice(e, n.length).join(".");
            if (t in i) {
              i = i[t];
              break
            }
          }
          i = i[n[e]]
        } else i = void 0;
      return i
    }(function(e) {
      return zn[e] || null
    }(e), t) : null
  }

  function $n(e, ...t) {
    delete vn[e], En.update((n => (n[e] = Ve.all([n[e] || {}, ...t]), n)))
  }
  Ne([En], (([e]) => Object.keys(e))), En.subscribe((e => zn = e));
  const Sn = {};

  function An(e) {
    return Sn[e]
  }

  function Nn(e) {
    return qn(e).some((e => {
      var t;
      return null === (t = An(e)) || void 0 === t ? void 0 : t.size
    }))
  }
  const On = {};

  function Ln(e) {
    if (!Nn(e)) return e in On ? On[e] : void 0;
    const t = function(e) {
      return qn(e).map((e => {
        const t = An(e);
        return [e, t ? [...t] : []]
      })).filter((([, e]) => e.length > 0))
    }(e);
    return On[e] = Promise.all(t.map((([e, t]) => function(e, t) {
      return Promise.all(t.map((t => (function(e, t) {
        Sn[e].delete(t), 0 === Sn[e].size && delete Sn[e]
      }(e, t), t().then((e => e.default || e)))))).then((t => $n(e, ...t)))
    }(e, t)))).then((() => {
      if (Nn(e)) return Ln(e);
      delete On[e]
    })), On[e]
  }
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
  function In(e, t) {
    var n = {};
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
      var s = 0;
      for (i = Object.getOwnPropertySymbols(e); s < i.length; s++) t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (n[i[s]] = e[i[s]])
    }
    return n
  }
  const Cn = {
    fallbackLocale: null,
    initialLocale: null,
    loadingDelay: 200,
    formats: {
      number: {
        scientific: {
          notation: "scientific"
        },
        engineering: {
          notation: "engineering"
        },
        compactLong: {
          notation: "compact",
          compactDisplay: "long"
        },
        compactShort: {
          notation: "compact",
          compactDisplay: "short"
        }
      },
      date: {
        short: {
          month: "numeric",
          day: "numeric",
          year: "2-digit"
        },
        medium: {
          month: "short",
          day: "numeric",
          year: "numeric"
        },
        long: {
          month: "long",
          day: "numeric",
          year: "numeric"
        },
        full: {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      time: {
        short: {
          hour: "numeric",
          minute: "numeric"
        },
        medium: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        },
        long: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        },
        full: {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short"
        }
      }
    },
    warnOnMissingMessages: !0,
    ignoreTag: !0
  };

  function Mn() {
    return Cn
  }
  const Rn = Ae(!1);
  let Pn;
  const Dn = Ae(null);

  function jn(e) {
    return e.split("-").map(((e, t, n) => n.slice(0, t + 1).join("-"))).reverse()
  }

  function qn(e, t = Mn().fallbackLocale) {
    const n = jn(e);
    return t ? [...new Set([...n, ...jn(t)])] : n
  }

  function Un() {
    return Pn
  }
  Dn.subscribe((e => {
    Pn = e, "undefined" != typeof window && null !== e && document.documentElement.setAttribute("lang", e)
  }));
  const Kn = Dn.set;
  Dn.set = e => {
    if (function(e) {
        if (null == e) return;
        const t = qn(e);
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          if (_n(n)) return n
        }
      }(e) && Nn(e)) {
      const {
        loadingDelay: t
      } = Mn();
      let n;
      return "undefined" != typeof window && null != Un() && t ? n = window.setTimeout((() => Rn.set(!0)), t) : Rn.set(!0), Ln(e).then((() => {
        Kn(e)
      })).finally((() => {
        clearTimeout(n), Rn.set(!1)
      }))
    }
    return Kn(e)
  }, Dn.update = e => Kn(e(Pn));
  const Bn = e => {
      const t = Object.create(null);
      return n => {
        const i = JSON.stringify(n);
        return i in t ? t[i] : t[i] = e(n)
      }
    },
    Fn = (e, t) => {
      const {
        formats: n
      } = Mn();
      if (e in n && t in n[e]) return n[e][t];
      throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`)
    },
    Xn = Bn((e => {
      var {
        locale: t,
        format: n
      } = e, i = In(e, ["locale", "format"]);
      if (null == t) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
      return n && (i = Fn("number", n)), new Intl.NumberFormat(t, i)
    })),
    Gn = Bn((e => {
      var {
        locale: t,
        format: n
      } = e, i = In(e, ["locale", "format"]);
      if (null == t) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
      return n ? i = Fn("date", n) : 0 === Object.keys(i).length && (i = Fn("date", "short")), new Intl.DateTimeFormat(t, i)
    })),
    Vn = Bn((e => {
      var {
        locale: t,
        format: n
      } = e, i = In(e, ["locale", "format"]);
      if (null == t) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
      return n ? i = Fn("time", n) : 0 === Object.keys(i).length && (i = Fn("time", "short")), new Intl.DateTimeFormat(t, i)
    })),
    Hn = Bn(((e, t = Un()) => new kn(e, t, Mn().formats, {
      ignoreTag: Mn().ignoreTag
    }))),
    Wn = (e, t = {}) => {
      "object" == typeof e && (e = (t = e).id);
      const {
        values: n,
        locale: i = Un(),
        default: s
      } = t;
      if (null == i) throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
      let r = xn(e, i);
      if (r) {
        if ("string" != typeof r) return console.warn(`[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof r}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`), r
      } else Mn().warnOnMissingMessages && console.warn(`[svelte-i18n] The message "${e}" was not found in "${qn(i).join('", "')}".${Nn(Un())?"\n\nNote: there are at least one loader still registered to this locale that wasn't executed.":""}`), r = s || e;
      if (!n) return r;
      let o = r;
      try {
        o = Hn(r, i).format(n)
      } catch (t) {
        console.warn(`[svelte-i18n] Message "${e}" has syntax error:`, t.message)
      }
      return o
    },
    Yn = (e, t) => ((e = {}) => {
      var {
        locale: t = Un()
      } = e, n = In(e, ["locale"]);
      return Vn(Object.assign({
        locale: t
      }, n))
    })(t).format(e),
    Jn = (e, t) => ((e = {}) => {
      var {
        locale: t = Un()
      } = e, n = In(e, ["locale"]);
      return Gn(Object.assign({
        locale: t
      }, n))
    })(t).format(e),
    Zn = (e, t) => ((e = {}) => {
      var {
        locale: t = Un()
      } = e, n = In(e, ["locale"]);
      return Xn(Object.assign({
        locale: t
      }, n))
    })(t).format(e),
    Qn = (e, t = Un()) => xn(e, t),
    ei = Ne([Dn, En], (() => Wn));
  Ne([Dn], (() => Yn)), Ne([Dn], (() => Jn)), Ne([Dn], (() => Zn)), Ne([Dn, En], (() => Qn));
  var ti = {
      next: "Next",
      previous: "Previous",
      evaluate: "Evaluate",
      reset: "One more time!",
      hint: "Show hint",
      resultsTitle: "Your quiz results",
      resultsText: "You have answered {points} out of {total} questions correctly!"
    },
    ni = {
      next: "Weiter",
      previous: "Zurück",
      evaluate: "Zum Ergebnis",
      reset: "Noch einmal!",
      hint: "Tipp anzeigen",
      resultsTitle: "Ihr Ergebnis",
      resultsText: "Sie haben {points} von {total} Fragen richtig beantwortet!"
    },
    ii = {
      next: "Suivant",
      previous: "Précédent",
      evaluate: "Réponse",
      reset: "Recommencer!",
      hint: "Indice",
      resultsTitle: "Vos résultats",
      resultsText: "Vous avez répondu correctement à {points} questions sur {total}!"
    },
    si = {
      next: "Siguiente",
      previous: "Anterior",
      evaluate: "Respuesta",
      reset: "Otra vez!",
      hint: "Pista",
      resultsTitle: "Resultados",
      resultsText: "Ha acertado a {points} preguntas de {total}!"
    };

  function ri(e) {
    $n("de", ni), $n("en", ti), $n("fr", ii), $n("es", si),
      function(e) {
        const {
          formats: t
        } = e, n = In(e, ["formats"]), i = e.initialLocale || e.fallbackLocale;
        Object.assign(Cn, n, {
          initialLocale: i
        }), t && ("number" in t && Object.assign(Cn.formats.number, t.number), "date" in t && Object.assign(Cn.formats.date, t.date), "time" in t && Object.assign(Cn.formats.time, t.time)), Dn.set(i)
      }({
        fallbackLocale: "en",
        initialLocale: null === e ? "undefined" == typeof window ? null : window.navigator.language || window.navigator.languages[0] : e
      })
  }

  function oi(e) {
    E(e, "svelte-najif3", ".card.svelte-najif3{box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2);border-radius:0 0 4px 4px}")
  }

  function ai(e) {
    let t, n;
    const i = e[1].default,
      s = f(i, e, e[0], null);
    return {
      c() {
        t = N("div"), s && s.c(), R(t, "class", "card svelte-najif3")
      },
      m(e, i) {
        $(e, t, i), s && s.m(t, null), n = !0
      },
      p(e, [t]) {
        s && s.p && (!n || 1 & t) && m(s, i, e, e[0], n ? p(i, e[0], t, null) : d(e[0]), null)
      },
      i(e) {
        n || (de(s, e), n = !0)
      },
      o(e) {
        ge(s, e), n = !1
      },
      d(e) {
        e && S(t), s && s.d(e)
      }
    }
  }

  function li(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t;
    return e.$$set = e => {
      "$$scope" in e && n(0, s = e.$$scope)
    }, [s, i]
  }
  class ci extends $e {
    constructor(e) {
      super(), Te(this, e, li, ai, a, {}, oi)
    }
  }

  function ui(e) {
    E(e, "svelte-15b7mrd", ".credits.svelte-15b7mrd a.svelte-15b7mrd{color:gray;text-decoration:none}.credits.svelte-15b7mrd a.svelte-15b7mrd:hover{text-decoration:underline}.credits.svelte-15b7mrd.svelte-15b7mrd{margin-top:1rem;font-size:small;text-align:end;color:lightgray}")
  }

  function fi(t) {
    let n, i;
    return {
      c() {
        n = N("div"), i = N("a"), i.textContent = "Padips", R(i, "href", "https://github.com/bonartm/quizdown-js"), R(i, "class", "svelte-15b7mrd"), R(n, "class", "credits svelte-15b7mrd")
      },
      m(e, t) {
        $(e, n, t), z(n, i)
      },
      p: e,
      i: e,
      o: e,
      d(e) {
        e && S(n)
      }
    }
  }
  class hi extends $e {
    constructor(e) {
      super(), Te(this, e, null, fi, a, {}, ui)
    }
  }

  function pi(e) {
    let t, n, i, s;
    const r = e[6].default,
      o = f(r, e, e[5], null);
    return {
      c() {
        t = N("div"), n = N("div"), o && o.c(), se((() => e[7].call(n))), D(t, "height", e[1] + "px")
      },
      m(r, a) {
        $(r, t, a), z(t, n), o && o.m(n, null), i = function(e, t) {
          "static" === getComputedStyle(e).position && (e.style.position = "relative");
          const n = N("iframe");
          n.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), n.setAttribute("aria-hidden", "true"), n.tabIndex = -1;
          const i = q();
          let s;
          return i ? (n.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = M(window, "message", (e => {
            e.source === n.contentWindow && t()
          }))) : (n.src = "about:blank", n.onload = () => {
            s = M(n.contentWindow, "resize", t)
          }), z(e, n), () => {
            (i || s && n.contentWindow) && s(), S(n)
          }
        }(n, e[7].bind(n)), s = !0
      },
      p(e, [n]) {
        o && o.p && (!s || 32 & n) && m(o, r, e, e[5], s ? p(r, e[5], n, null) : d(e[5]), null), (!s || 2 & n) && D(t, "height", e[1] + "px")
      },
      i(e) {
        s || (de(o, e), s = !0)
      },
      o(e) {
        ge(o, e), s = !1
      },
      d(e) {
        e && S(t), o && o.d(e), i()
      }
    }
  }

  function mi(e, t, n) {
    let i, s, {
        $$slots: r = {},
        $$scope: o
      } = t,
      {
        minHeight: a = 0
      } = t;
    const l = Ce(s, {
      duration: 100
    });
    u(e, l, (e => n(1, i = e)));
    let c = !1;
    return J((() => n(4, c = !0))), e.$$set = e => {
      "minHeight" in e && n(3, a = e.minHeight), "$$scope" in e && n(5, o = e.$$scope)
    }, e.$$.update = () => {
      25 & e.$$.dirty && c && l.set(Math.max(a, s))
    }, [s, i, l, a, c, o, r, function() {
      s = this.clientHeight, n(0, s)
    }]
  }
  class di extends $e {
    constructor(e) {
      super(), Te(this, e, mi, pi, a, {
        minHeight: 3
      })
    }
  }

  function gi(e, {
    from: t,
    to: n
  }, i = {}) {
    const s = getComputedStyle(e),
      r = "none" === s.transform ? "" : s.transform,
      [a, l] = s.transformOrigin.split(" ").map(parseFloat),
      c = t.left + t.width * a / n.width - (n.left + a),
      u = t.top + t.height * l / n.height - (n.top + l),
      {
        delay: f = 0,
        duration: h = (e => 120 * Math.sqrt(e)),
        easing: p = Oe
      } = i;
    return {
      delay: f,
      duration: o(h) ? h(Math.sqrt(c * c + u * u)) : h,
      easing: p,
      css: (e, i) => {
        const s = i * c,
          o = i * u,
          a = e + i * t.width / n.width,
          l = e + i * t.height / n.height;
        return `transform: ${r} translate(${s}px, ${o}px) scale(${a}, ${l});`
      }
    }
  }
  const {
    Map: yi
  } = ve;

  function bi(e) {
    E(e, "svelte-1imq117", ".dragdroplist.svelte-1imq117.svelte-1imq117{position:relative;padding:0}.list.svelte-1imq117.svelte-1imq117{cursor:grab;z-index:5;display:flex;flex-direction:column}.item.svelte-1imq117.svelte-1imq117{box-sizing:border-box;display:inline-flex;width:100%;margin-bottom:0.5em;border-radius:2px;user-select:none;margin:5px;padding:0;background-color:var(--quizdown-color-secondary);border:3px solid transparent;color:var(--quizdown-color-text)}.item.svelte-1imq117.svelte-1imq117:last-child{margin-bottom:0}.item.svelte-1imq117.svelte-1imq117:not(#grabbed):not(#ghost){z-index:10}.item.svelte-1imq117>.svelte-1imq117{margin:auto auto auto 0}.buttons.svelte-1imq117.svelte-1imq117{width:32px;min-width:32px;margin:auto 0;display:flex;flex-direction:column}.buttons.svelte-1imq117 button.svelte-1imq117{cursor:pointer;width:18px;height:18px;margin:0 auto;padding:0;border:1px solid rgba(0, 0, 0, 0);background-color:inherit}.buttons.svelte-1imq117 button.svelte-1imq117:focus{border:1px solid black}.delete.svelte-1imq117.svelte-1imq117{width:32px}#grabbed.svelte-1imq117.svelte-1imq117{opacity:0}#ghost.svelte-1imq117.svelte-1imq117{pointer-events:none;z-index:-5;position:absolute;top:0;left:0;opacity:0;border:3px solid var(--quizdown-color-primary);background-color:var(--quizdown-color-secondary)}#ghost.svelte-1imq117 .svelte-1imq117{pointer-events:none}#ghost.haunting.svelte-1imq117.svelte-1imq117{z-index:20;opacity:1}")
  }

  function ki(e, t, n) {
    const i = e.slice();
    return i[28] = t[n], i[30] = n, i
  }

  function vi(e) {
    let t, n, i = e[28] + "";
    return {
      c() {
        t = N("p"), n = L(i)
      },
      m(e, i) {
        $(e, t, i), z(t, n)
      },
      p(e, t) {
        1 & t && i !== (i = e[28] + "") && P(n, i)
      },
      d(e) {
        e && S(t)
      }
    }
  }

  function wi(e) {
    let t, n, i = e[28].text + "";
    return {
      c() {
        t = N("p"), n = L(i)
      },
      m(e, i) {
        $(e, t, i), z(t, n)
      },
      p(e, t) {
        1 & t && i !== (i = e[28].text + "") && P(n, i)
      },
      d(e) {
        e && S(t)
      }
    }
  }

  function xi(e) {
    let t, n, i = e[28].html + "";
    return {
      c() {
        t = new U, n = C(), t.a = n
      },
      m(e, s) {
        t.m(i, e, s), $(e, n, s)
      },
      p(e, n) {
        1 & n && i !== (i = e[28].html + "") && t.p(i)
      },
      d(e) {
        e && S(n), e && t.d()
      }
    }
  }

  function zi(e) {
    let t, n, i;

    function s(...t) {
      return e[17](e[30], ...t)
    }
    return {
      c() {
        t = N("button"), t.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>', R(t, "class", "svelte-1imq117")
      },
      m(e, r) {
        $(e, t, r), n || (i = M(t, "click", s), n = !0)
      },
      p(t, n) {
        e = t
      },
      d(e) {
        e && S(t), n = !1, i()
      }
    }
  }

  function Ei(n, i) {
    let s, o, a, l, c, u, f, h, p, m, d, g, y, k, v, w, E, _, T, A, L, C, P, D, j = e;

    function q(...e) {
      return i[15](i[30], ...e)
    }

    function U(...e) {
      return i[16](i[30], ...e)
    }

    function K(e, t) {
      return e[28].html ? xi : e[28].text ? wi : vi
    }
    let B = K(i),
      F = B(i),
      H = i[1] && zi(i);
    return {
      key: n,
      first: null,
      c() {
        s = N("div"), o = N("div"), a = N("button"), l = O("svg"), c = O("path"), u = O("path"), h = I(), p = N("button"), m = O("svg"), d = O("path"), g = O("path"), k = I(), v = N("div"), F.c(), w = I(), E = N("div"), H && H.c(), _ = I(), R(c, "d", "M0 0h24v24H0V0z"), R(c, "fill", "none"), R(u, "d", "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"), R(l, "xmlns", "http://www.w3.org/2000/svg"), R(l, "viewBox", "0 0 24 24"), R(l, "width", "16px"), R(l, "height", "16px"), R(a, "class", "up svelte-1imq117"), R(a, "style", f = "visibility: " + (i[30] > 0 ? "" : "hidden") + ";"), R(d, "d", "M0 0h24v24H0V0z"), R(d, "fill", "none"), R(g, "d", "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"), R(m, "xmlns", "http://www.w3.org/2000/svg"), R(m, "viewBox", "0 0 24 24"), R(m, "width", "16px"), R(m, "height", "16px"), R(p, "class", "down svelte-1imq117"), R(p, "style", y = "visibility: " + (i[30] < i[0].length - 1 ? "" : "hidden") + ";"), R(o, "class", "buttons svelte-1imq117"), R(v, "class", "content svelte-1imq117"), R(E, "class", "buttons delete svelte-1imq117"), R(s, "id", T = i[3] && (i[28].id ? i[28].id : JSON.stringify(i[28])) == i[3].dataset.id ? "grabbed" : ""), R(s, "class", "item svelte-1imq117"), R(s, "data-index", A = i[30]), R(s, "data-id", L = i[28].id ? i[28].id : JSON.stringify(i[28])), R(s, "data-graby", "0"), this.first = s
      },
      m(e, t) {
        $(e, s, t), z(s, o), z(o, a), z(a, l), z(l, c), z(l, u), z(o, h), z(o, p), z(p, m), z(m, d), z(m, g), z(s, k), z(s, v), F.m(v, null), z(s, w), z(s, E), H && H.m(E, null), z(s, _), P || (D = [M(a, "click", q), M(p, "click", U), M(s, "mousedown", i[18]), M(s, "touchstart", i[19]), M(s, "mouseenter", i[20]), M(s, "touchmove", i[21])], P = !0)
      },
      p(e, t) {
        i = e, 1 & t && f !== (f = "visibility: " + (i[30] > 0 ? "" : "hidden") + ";") && R(a, "style", f), 1 & t && y !== (y = "visibility: " + (i[30] < i[0].length - 1 ? "" : "hidden") + ";") && R(p, "style", y), B === (B = K(i)) && F ? F.p(i, t) : (F.d(1), F = B(i), F && (F.c(), F.m(v, null))), i[1] ? H ? H.p(i, t) : (H = zi(i), H.c(), H.m(E, null)) : H && (H.d(1), H = null), 9 & t && T !== (T = i[3] && (i[28].id ? i[28].id : JSON.stringify(i[28])) == i[3].dataset.id ? "grabbed" : "") && R(s, "id", T), 1 & t && A !== (A = i[30]) && R(s, "data-index", A), 1 & t && L !== (L = i[28].id ? i[28].id : JSON.stringify(i[28])) && R(s, "data-id", L)
      },
      r() {
        C = s.getBoundingClientRect()
      },
      f() {
        V(s), j()
      },
      a() {
        j(), j = function(n, i, s, r) {
          if (!i) return e;
          const o = n.getBoundingClientRect();
          if (i.left === o.left && i.right === o.right && i.top === o.top && i.bottom === o.bottom) return e;
          const {
            delay: a = 0,
            duration: l = 300,
            easing: c = t,
            start: u = b() + a,
            end: f = u + l,
            tick: h = e,
            css: p
          } = s(n, {
            from: i,
            to: o
          }, r);
          let m, d = !0,
            g = !1;

          function y() {
            p && G(n, m), d = !1
          }
          return x((e => {
            if (!g && e >= u && (g = !0), g && e >= f && (h(1, 0), y()), !d) return !1;
            if (g) {
              const t = 0 + 1 * c((e - u) / l);
              h(t, 1 - t)
            }
            return !0
          })), p && (m = X(n, 0, 1, l, a, c, p)), a || (g = !0), h(0, 1), y
        }(s, C, gi, {
          duration: 200
        })
      },
      d(e) {
        e && S(s), F.d(), H && H.d(), P = !1, r(D)
      }
    }
  }

  function _i(t) {
    let n, i, s, o, a, l, c, u, f, h = [],
      p = new yi,
      m = t[0];
    const d = e => e[28].id ? e[28].id : JSON.stringify(e[28]);
    for (let e = 0; e < m.length; e += 1) {
      let n = ki(t, m, e),
        i = d(n);
      p.set(i, h[e] = Ei(i, n))
    }
    return {
      c() {
        n = N("div"), i = N("div"), s = N("p"), l = I(), c = N("div");
        for (let e = 0; e < h.length; e += 1) h[e].c();
        R(s, "class", "svelte-1imq117"), R(i, "id", "ghost"), R(i, "class", o = g(t[3] ? "item haunting" : "item") + " svelte-1imq117"), R(i, "style", a = "top: " + (t[4] + t[5] - t[6]) + "px"), R(c, "class", "list svelte-1imq117"), R(n, "class", "dragdroplist svelte-1imq117")
      },
      m(e, r) {
        $(e, n, r), z(n, i), z(i, s), t[14](i), z(n, l), z(n, c);
        for (let e = 0; e < h.length; e += 1) h[e].m(c, null);
        u || (f = [M(c, "mousemove", t[22]), M(c, "touchmove", t[23]), M(c, "mouseup", t[24]), M(c, "mouseleave", t[25]), M(c, "touchend", t[26])], u = !0)
      },
      p(e, [t]) {
        if (8 & t && o !== (o = g(e[3] ? "item haunting" : "item") + " svelte-1imq117") && R(i, "class", o), 112 & t && a !== (a = "top: " + (e[4] + e[5] - e[6]) + "px") && R(i, "style", a), 11915 & t) {
          m = e[0];
          for (let e = 0; e < h.length; e += 1) h[e].r();
          h = function(e, t, n, i, s, r, o, a, l, c, u, f) {
            let h = e.length,
              p = r.length,
              m = h;
            const d = {};
            for (; m--;) d[e[m].key] = m;
            const g = [],
              y = new Map,
              b = new Map;
            for (m = p; m--;) {
              const e = f(s, r, m),
                a = n(e);
              let l = o.get(a);
              l ? i && l.p(e, t) : (l = c(a, e), l.c()), y.set(a, g[m] = l), a in d && b.set(a, Math.abs(m - d[a]))
            }
            const k = new Set,
              v = new Set;

            function w(e) {
              de(e, 1), e.m(a, u), o.set(e.key, e), u = e.first, p--
            }
            for (; h && p;) {
              const t = g[p - 1],
                n = e[h - 1],
                i = t.key,
                s = n.key;
              t === n ? (u = t.first, h--, p--) : y.has(s) ? !o.has(i) || k.has(i) ? w(t) : v.has(s) ? h-- : b.get(i) > b.get(s) ? (v.add(i), w(t)) : (k.add(s), h--) : (l(n, o), h--)
            }
            for (; h--;) {
              const t = e[h];
              y.has(t.key) || l(t, o)
            }
            for (; p;) w(g[p - 1]);
            return g
          }(h, t, d, 1, e, m, p, c, we, Ei, null, ki);
          for (let e = 0; e < h.length; e += 1) h[e].a()
        }
      },
      i: e,
      o: e,
      d(e) {
        e && S(n), t[14](null);
        for (let e = 0; e < h.length; e += 1) h[e].d();
        u = !1, r(f)
      }
    }
  }

  function Ti(e, t, n) {
    let i, s, r, {
        data: o = []
      } = t,
      {
        removesItems: a = !1
      } = t,
      l = 0,
      c = 0,
      u = 0;

    function f(e, t) {
      n(3, s = t), n(3, s.dataset.grabY = String(e), s), n(2, i.innerHTML = s.innerHTML, i), n(5, c = s.getBoundingClientRect().y - e), h(e)
    }

    function h(e) {
      s && (n(4, l = e), n(6, u = i.parentElement.getBoundingClientRect().y))
    }

    function p(e) {
      h(e.clientY);
      let t = i.getRootNode().elementFromPoint(e.clientX, e.clientY);
      t && (t = t.closest(".item"), t && t != r && (r = t, m(e, t)))
    }

    function m(e, t) {
      let n = t;
      s && t != s && n.classList.contains("item") && d(parseInt(s.dataset.index), parseInt(n.dataset.index))
    }

    function d(e, t) {
      let i = o[e];
      n(0, o = [...o.slice(0, e), ...o.slice(e + 1)]), n(0, o = [...o.slice(0, t), i, ...o.slice(t)])
    }

    function g(e) {
      n(3, s = null)
    }

    function y(e) {
      n(0, o = [...o.slice(0, e), ...o.slice(e + 1)])
    }
    return e.$$set = e => {
      "data" in e && n(0, o = e.data), "removesItems" in e && n(1, a = e.removesItems)
    }, [o, a, i, s, l, c, u, f, h, p, m, d, g, y, function(e) {
      Q[e ? "unshift" : "push"]((() => {
        i = e, n(2, i)
      }))
    }, function(e, t) {
      d(e, e - 1)
    }, function(e, t) {
      d(e, e + 1)
    }, function(e, t) {
      y(e)
    }, function(e) {
      f(e.clientY, this)
    }, function(e) {
      f(e.touches[0].clientY, this)
    }, function(e) {
      e.stopPropagation(), m(0, e.target)
    }, function(e) {
      e.stopPropagation(), e.preventDefault(), p(e.touches[0])
    }, function(e) {
      e.stopPropagation(), h(e.clientY)
    }, function(e) {
      e.stopPropagation(), h(e.touches[0].clientY)
    }, function(e) {
      e.stopPropagation(), g()
    }, function(e) {
      e.stopPropagation(), g()
    }, function(e) {
      e.stopPropagation(), g(e.touches[0])
    }]
  }
  class $i extends $e {
    constructor(e) {
      super(), Te(this, e, Ti, _i, a, {
        data: 0,
        removesItems: 1
      }, bi)
    }
  }

  function Si(e) {
    let t, n, i;

    function s(t) {
      e[1](t)
    }
    let r = {};
    return void 0 !== e[0].answers && (r.data = e[0].answers), t = new $i({
      props: r
    }), Q.push((() => function(e, t, n) {
      const i = e.$$.props[t];
      void 0 !== i && (e.$$.bound[i] = n, n(e.$$.ctx[i]))
    }(t, "data", s))), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, n) {
        ze(t, e, n), i = !0
      },
      p(e, [i]) {
        const s = {};
        var r;
        !n && 1 & i && (n = !0, s.data = e[0].answers, r = () => n = !1, te.push(r)), t.$set(s)
      },
      i(e) {
        i || (de(t.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function Ai(e, t, n) {
    let {
      question: i
    } = t;
    return e.$$set = e => {
      "question" in e && n(0, i = e.question)
    }, e.$$.update = () => {
      1 & e.$$.dirty && n(0, i.selected = i.answers.map((e => e.id)), i)
    }, [i, function(t) {
      e.$$.not_equal(i.answers, t) && (i.answers = t, n(0, i))
    }]
  }
  class Ni extends $e {
    constructor(e) {
      super(), Te(this, e, Ai, Si, a, {
        question: 0
      })
    }
  }

  function Oi(e) {
    E(e, "svelte-1m16lsk", "fieldset.svelte-1m16lsk.svelte-1m16lsk{border:0}[type='checkbox'].svelte-1m16lsk.svelte-1m16lsk,[type='radio'].svelte-1m16lsk.svelte-1m16lsk{position:absolute;opacity:0}[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:0.5em}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk{border-radius:2px}[type='checkbox'].svelte-1m16lsk+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk+span.svelte-1m16lsk{transition-duration:0.3s;background-color:var(--quizdown-color-secondary);color:var(--quizdown-color-text);display:block;padding:0.5rem;margin:5px;border:3px solid transparent;cursor:pointer}[type='checkbox'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='checkbox'].svelte-1m16lsk:focus+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:hover+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:focus+span.svelte-1m16lsk{filter:brightness(0.9)}[type='checkbox'].svelte-1m16lsk:checked+span.svelte-1m16lsk,[type='radio'].svelte-1m16lsk:checked+span.svelte-1m16lsk{border:3px solid var(--quizdown-color-primary)}")
  }

  function Li(e, t, n) {
    const i = e.slice();
    return i[4] = t[n], i[6] = n, i
  }

  function Ii(e, t, n) {
    const i = e.slice();
    return i[4] = t[n], i[6] = n, i
  }

  function Ci(e) {
    let t, n = e[0].answers,
      i = [];
    for (let t = 0; t < n.length; t += 1) i[t] = Ri(Li(e, n, t));
    return {
      c() {
        for (let e = 0; e < i.length; e += 1) i[e].c();
        t = C()
      },
      m(e, n) {
        for (let t = 0; t < i.length; t += 1) i[t].m(e, n);
        $(e, t, n)
      },
      p(e, s) {
        if (1 & s) {
          let r;
          for (n = e[0].answers, r = 0; r < n.length; r += 1) {
            const o = Li(e, n, r);
            i[r] ? i[r].p(o, s) : (i[r] = Ri(o), i[r].c(), i[r].m(t.parentNode, t))
          }
          for (; r < i.length; r += 1) i[r].d(1);
          i.length = n.length
        }
      },
      d(e) {
        A(i, e), e && S(t)
      }
    }
  }

  function Mi(e) {
    let t, n = e[0].answers,
      i = [];
    for (let t = 0; t < n.length; t += 1) i[t] = Pi(Ii(e, n, t));
    return {
      c() {
        for (let e = 0; e < i.length; e += 1) i[e].c();
        t = C()
      },
      m(e, n) {
        for (let t = 0; t < i.length; t += 1) i[t].m(e, n);
        $(e, t, n)
      },
      p(e, s) {
        if (1 & s) {
          let r;
          for (n = e[0].answers, r = 0; r < n.length; r += 1) {
            const o = Ii(e, n, r);
            i[r] ? i[r].p(o, s) : (i[r] = Pi(o), i[r].c(), i[r].m(t.parentNode, t))
          }
          for (; r < i.length; r += 1) i[r].d(1);
          i.length = n.length
        }
      },
      d(e) {
        A(i, e), e && S(t)
      }
    }
  }

  function Ri(e) {
    let t, n, i, s, r, o, a, l, c = e[4].html + "";
    return {
      c() {
        t = N("label"), n = N("input"), s = I(), r = N("span"), o = I(), R(n, "type", "radio"), n.__value = i = e[6], n.value = n.__value, R(n, "class", "svelte-1m16lsk"), e[2][1].push(n), R(r, "class", "svelte-1m16lsk")
      },
      m(i, u) {
        $(i, t, u), z(t, n), n.checked = n.__value === e[0].selected[0], z(t, s), z(t, r), r.innerHTML = c, z(t, o), a || (l = M(n, "change", e[3]), a = !0)
      },
      p(e, t) {
        1 & t && (n.checked = n.__value === e[0].selected[0]), 1 & t && c !== (c = e[4].html + "") && (r.innerHTML = c)
      },
      d(i) {
        i && S(t), e[2][1].splice(e[2][1].indexOf(n), 1), a = !1, l()
      }
    }
  }

  function Pi(e) {
    let t, n, i, s, r, o, a, l, c = e[4].html + "";
    return {
      c() {
        t = N("label"), n = N("input"), s = I(), r = N("span"), o = I(), R(n, "type", "checkbox"), n.__value = i = e[6], n.value = n.__value, R(n, "class", "svelte-1m16lsk"), e[2][0].push(n), R(r, "class", "svelte-1m16lsk")
      },
      m(i, u) {
        $(i, t, u), z(t, n), n.checked = ~e[0].selected.indexOf(n.__value), z(t, s), z(t, r), r.innerHTML = c, z(t, o), a || (l = M(n, "change", e[1]), a = !0)
      },
      p(e, t) {
        1 & t && (n.checked = ~e[0].selected.indexOf(n.__value)), 1 & t && c !== (c = e[4].html + "") && (r.innerHTML = c)
      },
      d(i) {
        i && S(t), e[2][0].splice(e[2][0].indexOf(n), 1), a = !1, l()
      }
    }
  }

  function Di(t) {
    let n;

    function i(e, t) {
      return "MultipleChoice" === e[0].questionType ? Mi : Ci
    }
    let s = i(t),
      r = s(t);
    return {
      c() {
        n = N("fieldset"), r.c(), R(n, "class", "svelte-1m16lsk")
      },
      m(e, t) {
        $(e, n, t), r.m(n, null)
      },
      p(e, [t]) {
        s === (s = i(e)) && r ? r.p(e, t) : (r.d(1), r = s(e), r && (r.c(), r.m(n, null)))
      },
      i: e,
      o: e,
      d(e) {
        e && S(n), r.d()
      }
    }
  }

  function ji(e, t, n) {
    let {
      question: i
    } = t;
    const s = [
      [],
      []
    ];
    return e.$$set = e => {
      "question" in e && n(0, i = e.question)
    }, [i, function() {
      i.selected = function(e, t, n) {
        const i = new Set;
        for (let t = 0; t < e.length; t += 1) e[t].checked && i.add(e[t].__value);
        return n || i.delete(t), Array.from(i)
      }(s[0], this.__value, this.checked), n(0, i)
    }, s, function() {
      i.selected[0] = this.__value, n(0, i)
    }]
  }
  class qi extends $e {
    constructor(e) {
      super(), Te(this, e, ji, Di, a, {
        question: 0
      }, Oi)
    }
  }

  function Ui(e) {
    let t, n = e[0].explanation + "";
    return {
      c() {
        t = N("p")
      },
      m(e, i) {
        $(e, t, i), t.innerHTML = n
      },
      p(e, i) {
        1 & i && n !== (n = e[0].explanation + "") && (t.innerHTML = n)
      },
      d(e) {
        e && S(t)
      }
    }
  }

  function Ki(e) {
    let t, n, i, s, r, o, a, l, c, u, f = e[0].text + "",
      h = e[0].explanation && Ui(e);
    var p = e[2][e[0].questionType];

    function m(e) {
      return {
        props: {
          question: e[0]
        }
      }
    }
    return p && (l = new p(m(e))), {
      c() {
        t = N("h3"), n = L("Q"), i = L(e[1]), s = L(": "), r = new U, o = I(), h && h.c(), a = I(), l && xe(l.$$.fragment), c = C(), r.a = null
      },
      m(e, p) {
        $(e, t, p), z(t, n), z(t, i), z(t, s), r.m(f, t), $(e, o, p), h && h.m(e, p), $(e, a, p), l && ze(l, e, p), $(e, c, p), u = !0
      },
      p(e, [t]) {
        (!u || 2 & t) && P(i, e[1]), (!u || 1 & t) && f !== (f = e[0].text + "") && r.p(f), e[0].explanation ? h ? h.p(e, t) : (h = Ui(e), h.c(), h.m(a.parentNode, a)) : h && (h.d(1), h = null);
        const n = {};
        if (1 & t && (n.question = e[0]), p !== (p = e[2][e[0].questionType])) {
          if (l) {
            pe();
            const e = l;
            ge(e.$$.fragment, 1, 0, (() => {
              Ee(e, 1)
            })), me()
          }
          p ? (l = new p(m(e)), xe(l.$$.fragment), de(l.$$.fragment, 1), ze(l, c.parentNode, c)) : l = null
        } else p && l.$set(n)
      },
      i(e) {
        u || (l && de(l.$$.fragment, e), u = !0)
      },
      o(e) {
        l && ge(l.$$.fragment, e), u = !1
      },
      d(e) {
        e && S(t), e && S(o), h && h.d(e), e && S(a), e && S(c), l && Ee(l, e)
      }
    }
  }

  function Bi(e, t, n) {
    let {
      question: i
    } = t, {
      n: s
    } = t, r = {
      Sequence: Ni,
      MultipleChoice: qi,
      SingleChoice: qi
    };
    return e.$$set = e => {
      "question" in e && n(0, i = e.question), "n" in e && n(1, s = e.n)
    }, [i, s, r]
  }
  class Fi extends $e {
    constructor(e) {
      super(), Te(this, e, Bi, Ki, a, {
        question: 0,
        n: 1
      })
    }
  }

  function Xi(e) {
    E(e, "svelte-s6fim0", ".row.svelte-s6fim0{padding-top:2em;display:flex}.left.svelte-s6fim0{flex:1;display:flex;justify-content:flex-start}.center.svelte-s6fim0{display:flex;justify-content:center}.right.svelte-s6fim0{flex:1;display:flex;justify-content:flex-end}")
  }
  const Gi = e => ({}),
    Vi = e => ({}),
    Hi = e => ({}),
    Wi = e => ({
      class: "center svelte-s6fim0"
    }),
    Yi = e => ({}),
    Ji = e => ({});

  function Zi(e) {
    let t, n, i, s, r, o, a;
    const l = e[1].left,
      c = f(l, e, e[0], Ji),
      u = e[1].center,
      h = f(u, e, e[0], Wi),
      g = e[1].right,
      y = f(g, e, e[0], Vi);
    return {
      c() {
        t = N("div"), n = N("div"), c && c.c(), i = I(), s = N("div"), h && h.c(), r = I(), o = N("div"), y && y.c(), R(n, "class", "left svelte-s6fim0"), R(s, "class", "center svelte-s6fim0"), R(o, "class", "right svelte-s6fim0"), R(t, "class", "row svelte-s6fim0")
      },
      m(e, l) {
        $(e, t, l), z(t, n), c && c.m(n, null), z(t, i), z(t, s), h && h.m(s, null), z(t, r), z(t, o), y && y.m(o, null), a = !0
      },
      p(e, [t]) {
        c && c.p && (!a || 1 & t) && m(c, l, e, e[0], a ? p(l, e[0], t, Yi) : d(e[0]), Ji), h && h.p && (!a || 1 & t) && m(h, u, e, e[0], a ? p(u, e[0], t, Hi) : d(e[0]), Wi), y && y.p && (!a || 1 & t) && m(y, g, e, e[0], a ? p(g, e[0], t, Gi) : d(e[0]), Vi)
      },
      i(e) {
        a || (de(c, e), de(h, e), de(y, e), a = !0)
      },
      o(e) {
        ge(c, e), ge(h, e), ge(y, e), a = !1
      },
      d(e) {
        e && S(t), c && c.d(e), h && h.d(e), y && y.d(e)
      }
    }
  }

  function Qi(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t;
    return e.$$set = e => {
      "$$scope" in e && n(0, s = e.$$scope)
    }, [s, i]
  }
  class es extends $e {
    constructor(e) {
      super(), Te(this, e, Qi, Zi, a, {}, Xi)
    }
  }

  function ts(e) {
    E(e, "svelte-14ro1nj", "button.svelte-14ro1nj:disabled{background-color:white;filter:grayscale(100%);color:gray;cursor:initial;opacity:50%}button.svelte-14ro1nj{background-color:white;color:var(--quizdown-color-text);padding:0.5rem 1rem;border-radius:4px;border:1px solid transparent;line-height:1;text-align:center;transition:opacity 0.2s ease;text-decoration:none;display:inline-block;cursor:pointer;margin:0.2rem;font-size:1em}button.svelte-14ro1nj:hover:not(:checked):not(:active):not(:disabled){filter:brightness(0.9)}")
  }

  function ns(e) {
    let t, n, i, s;
    const r = e[4].default,
      a = f(r, e, e[3], null);
    return {
      c() {
        t = N("button"), a && a.c(), R(t, "title", e[2]), t.disabled = e[1], R(t, "class", "svelte-14ro1nj")
      },
      m(r, l) {
        $(r, t, l), a && a.m(t, null), n = !0, i || (s = M(t, "click", (function() {
          o(e[0]) && e[0].apply(this, arguments)
        })), i = !0)
      },
      p(i, [s]) {
        e = i, a && a.p && (!n || 8 & s) && m(a, r, e, e[3], n ? p(r, e[3], s, null) : d(e[3]), null), (!n || 4 & s) && R(t, "title", e[2]), (!n || 2 & s) && (t.disabled = e[1])
      },
      i(e) {
        n || (de(a, e), n = !0)
      },
      o(e) {
        ge(a, e), n = !1
      },
      d(e) {
        e && S(t), a && a.d(e), i = !1, s()
      }
    }
  }

  function is(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t, {
      buttonAction: r = (() => alert("Life has never Svelte better"))
    } = t, {
      disabled: o = !1
    } = t, {
      title: a = ""
    } = t;
    return e.$$set = e => {
      "buttonAction" in e && n(0, r = e.buttonAction), "disabled" in e && n(1, o = e.disabled), "title" in e && n(2, a = e.title), "$$scope" in e && n(3, s = e.$$scope)
    }, [r, o, a, s, i]
  }
  class ss extends $e {
    constructor(e) {
      super(), Te(this, e, is, ns, a, {
        buttonAction: 0,
        disabled: 1,
        title: 2
      }, ts)
    }
  }

  function rs(e, {
    delay: n = 0,
    duration: i = 400,
    easing: s = t
  } = {}) {
    const r = +getComputedStyle(e).opacity;
    return {
      delay: n,
      duration: i,
      easing: s,
      css: e => "opacity: " + e * r
    }
  }

  function os(e, {
    delay: t = 0,
    duration: n = 400,
    easing: i = Oe,
    x: s = 0,
    y: r = 0,
    opacity: o = 0
  } = {}) {
    const a = getComputedStyle(e),
      l = +a.opacity,
      c = "none" === a.transform ? "" : a.transform,
      u = l * (1 - o);
    return {
      delay: t,
      duration: n,
      easing: i,
      css: (e, t) => `\n\t\t\ttransform: ${c} translate(${(1-e)*s}px, ${(1-e)*r}px);\n\t\t\topacity: ${l-u*t}`
    }
  }
  /*!
   * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */
  function as(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
  }

  function ls(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e
  }

  function cs(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      })))), i.forEach((function(t) {
        ls(e, t, n[t])
      }))
    }
    return e
  }

  function us(e, t) {
    return function(e) {
      if (Array.isArray(e)) return e
    }(e) || function(e, t) {
      var n = [],
        i = !0,
        s = !1,
        r = void 0;
      try {
        for (var o, a = e[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
      } catch (e) {
        s = !0, r = e
      } finally {
        try {
          i || null == a.return || a.return()
        } finally {
          if (s) throw r
        }
      }
      return n
    }(e, t) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var fs = function() {},
    hs = {},
    ps = {},
    ms = {
      mark: fs,
      measure: fs
    };
  try {
    "undefined" != typeof window && (hs = window), "undefined" != typeof document && (ps = document), "undefined" != typeof MutationObserver && MutationObserver, "undefined" != typeof performance && (ms = performance)
  } catch (e) {}
  var ds = (hs.navigator || {}).userAgent,
    gs = void 0 === ds ? "" : ds,
    ys = hs,
    bs = ps,
    ks = ms;
  ys.document;
  var vs = !!bs.documentElement && !!bs.head && "function" == typeof bs.addEventListener && "function" == typeof bs.createElement;
  ~gs.indexOf("MSIE") || gs.indexOf("Trident/");
  var ws = "svg-inline--fa";
  ! function() {
    try {
      process.env.NODE_ENV
    } catch (e) {
      return !1
    }
  }();
  var xs = "group",
    zs = "primary",
    Es = "secondary",
    _s = ys.FontAwesomeConfig || {};
  if (bs && "function" == typeof bs.querySelector) {
    [
      ["data-family-prefix", "familyPrefix"],
      ["data-replacement-class", "replacementClass"],
      ["data-auto-replace-svg", "autoReplaceSvg"],
      ["data-auto-add-css", "autoAddCss"],
      ["data-auto-a11y", "autoA11y"],
      ["data-search-pseudo-elements", "searchPseudoElements"],
      ["data-observe-mutations", "observeMutations"],
      ["data-mutate-approach", "mutateApproach"],
      ["data-keep-original-source", "keepOriginalSource"],
      ["data-measure-performance", "measurePerformance"],
      ["data-show-missing-icons", "showMissingIcons"]
    ].forEach((function(e) {
      var t = us(e, 2),
        n = t[0],
        i = t[1],
        s = function(e) {
          return "" === e || "false" !== e && ("true" === e || e)
        }(function(e) {
          var t = bs.querySelector("script[" + e + "]");
          if (t) return t.getAttribute(e)
        }(n));
      null != s && (_s[i] = s)
    }))
  }
  var Ts = cs({}, {
    familyPrefix: "fa",
    replacementClass: ws,
    autoReplaceSvg: !0,
    autoAddCss: !0,
    autoA11y: !0,
    searchPseudoElements: !1,
    observeMutations: !0,
    mutateApproach: "async",
    keepOriginalSource: !0,
    measurePerformance: !1,
    showMissingIcons: !0
  }, _s);
  Ts.autoReplaceSvg || (Ts.observeMutations = !1);
  var $s = cs({}, Ts);
  ys.FontAwesomeConfig = $s;
  var Ss = ys || {};
  Ss.___FONT_AWESOME___ || (Ss.___FONT_AWESOME___ = {}), Ss.___FONT_AWESOME___.styles || (Ss.___FONT_AWESOME___.styles = {}), Ss.___FONT_AWESOME___.hooks || (Ss.___FONT_AWESOME___.hooks = {}), Ss.___FONT_AWESOME___.shims || (Ss.___FONT_AWESOME___.shims = []);
  var As = Ss.___FONT_AWESOME___,
    Ns = [];
  vs && ((bs.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(bs.readyState) || bs.addEventListener("DOMContentLoaded", (function e() {
    bs.removeEventListener("DOMContentLoaded", e), 1, Ns.map((function(e) {
      return e()
    }))
  }))), "undefined" != typeof global && void 0 !== global.process && global.process.emit, "undefined" == typeof setImmediate ? setTimeout : setImmediate;
  var Os = {
    size: 16,
    x: 0,
    y: 0,
    rotate: 0,
    flipX: !1,
    flipY: !1
  };

  function Ls() {
    for (var e = 12, t = ""; e-- > 0;) t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" [62 * Math.random() | 0];
    return t
  }

  function Is(e) {
    return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function Cs(e) {
    return Object.keys(e || {}).reduce((function(t, n) {
      return t + "".concat(n, ": ").concat(e[n], ";")
    }), "")
  }

  function Ms(e) {
    return e.size !== Os.size || e.x !== Os.x || e.y !== Os.y || e.rotate !== Os.rotate || e.flipX || e.flipY
  }

  function Rs(e) {
    var t = e.transform,
      n = e.containerWidth,
      i = e.iconWidth,
      s = {
        transform: "translate(".concat(n / 2, " 256)")
      },
      r = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
      o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "),
      a = "rotate(".concat(t.rotate, " 0 0)");
    return {
      outer: s,
      inner: {
        transform: "".concat(r, " ").concat(o, " ").concat(a)
      },
      path: {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }
    }
  }
  var Ps = {
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };

  function Ds(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  }

  function js(e) {
    var t = e.icons,
      n = t.main,
      i = t.mask,
      s = e.prefix,
      r = e.iconName,
      o = e.transform,
      a = e.symbol,
      l = e.title,
      c = e.maskId,
      u = e.titleId,
      f = e.extra,
      h = e.watchable,
      p = void 0 !== h && h,
      m = i.found ? i : n,
      d = m.width,
      g = m.height,
      y = "fak" === s,
      b = y ? "" : "fa-w-".concat(Math.ceil(d / g * 16)),
      k = [$s.replacementClass, r ? "".concat($s.familyPrefix, "-").concat(r) : "", b].filter((function(e) {
        return -1 === f.classes.indexOf(e)
      })).filter((function(e) {
        return "" !== e || !!e
      })).concat(f.classes).join(" "),
      v = {
        children: [],
        attributes: cs({}, f.attributes, {
          "data-prefix": s,
          "data-icon": r,
          class: k,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(d, " ").concat(g)
        })
      },
      w = y && !~f.classes.indexOf("fa-fw") ? {
        width: "".concat(d / g * 16 * .0625, "em")
      } : {};
    p && (v.attributes["data-fa-i2svg"] = ""), l && v.children.push({
      tag: "title",
      attributes: {
        id: v.attributes["aria-labelledby"] || "title-".concat(u || Ls())
      },
      children: [l]
    });
    var x = cs({}, v, {
        prefix: s,
        iconName: r,
        main: n,
        mask: i,
        maskId: c,
        transform: o,
        symbol: a,
        styles: cs({}, w, f.styles)
      }),
      z = i.found && n.found ? function(e) {
        var t, n = e.children,
          i = e.attributes,
          s = e.main,
          r = e.mask,
          o = e.maskId,
          a = e.transform,
          l = s.width,
          c = s.icon,
          u = r.width,
          f = r.icon,
          h = Rs({
            transform: a,
            containerWidth: u,
            iconWidth: l
          }),
          p = {
            tag: "rect",
            attributes: cs({}, Ps, {
              fill: "white"
            })
          },
          m = c.children ? {
            children: c.children.map(Ds)
          } : {},
          d = {
            tag: "g",
            attributes: cs({}, h.inner),
            children: [Ds(cs({
              tag: c.tag,
              attributes: cs({}, c.attributes, h.path)
            }, m))]
          },
          g = {
            tag: "g",
            attributes: cs({}, h.outer),
            children: [d]
          },
          y = "mask-".concat(o || Ls()),
          b = "clip-".concat(o || Ls()),
          k = {
            tag: "mask",
            attributes: cs({}, Ps, {
              id: y,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse"
            }),
            children: [p, g]
          },
          v = {
            tag: "defs",
            children: [{
              tag: "clipPath",
              attributes: {
                id: b
              },
              children: (t = f, "g" === t.tag ? t.children : [t])
            }, k]
          };
        return n.push(v, {
          tag: "rect",
          attributes: cs({
            fill: "currentColor",
            "clip-path": "url(#".concat(b, ")"),
            mask: "url(#".concat(y, ")")
          }, Ps)
        }), {
          children: n,
          attributes: i
        }
      }(x) : function(e) {
        var t = e.children,
          n = e.attributes,
          i = e.main,
          s = e.transform,
          r = Cs(e.styles);
        if (r.length > 0 && (n.style = r), Ms(s)) {
          var o = Rs({
            transform: s,
            containerWidth: i.width,
            iconWidth: i.width
          });
          t.push({
            tag: "g",
            attributes: cs({}, o.outer),
            children: [{
              tag: "g",
              attributes: cs({}, o.inner),
              children: [{
                tag: i.icon.tag,
                children: i.icon.children,
                attributes: cs({}, i.icon.attributes, o.path)
              }]
            }]
          })
        } else t.push(i.icon);
        return {
          children: t,
          attributes: n
        }
      }(x),
      E = z.children,
      _ = z.attributes;
    return x.children = E, x.attributes = _, a ? function(e) {
      var t = e.prefix,
        n = e.iconName,
        i = e.children,
        s = e.attributes,
        r = e.symbol;
      return [{
        tag: "svg",
        attributes: {
          style: "display: none;"
        },
        children: [{
          tag: "symbol",
          attributes: cs({}, s, {
            id: !0 === r ? "".concat(t, "-").concat($s.familyPrefix, "-").concat(n) : r
          }),
          children: i
        }]
      }]
    }(x) : function(e) {
      var t = e.children,
        n = e.main,
        i = e.mask,
        s = e.attributes,
        r = e.styles,
        o = e.transform;
      if (Ms(o) && n.found && !i.found) {
        var a = {
          x: n.width / n.height / 2,
          y: .5
        };
        s.style = Cs(cs({}, r, {
          "transform-origin": "".concat(a.x + o.x / 16, "em ").concat(a.y + o.y / 16, "em")
        }))
      }
      return [{
        tag: "svg",
        attributes: s,
        children: t
      }]
    }(x)
  }
  $s.measurePerformance && ks && ks.mark && ks.measure;
  var qs = function(e, t, n, i) {
    var s, r, o, a = Object.keys(e),
      l = a.length,
      c = void 0 !== i ? function(e, t) {
        return function(n, i, s, r) {
          return e.call(t, n, i, s, r)
        }
      }(t, i) : t;
    for (void 0 === n ? (s = 1, o = e[a[0]]) : (s = 0, o = n); s < l; s++) o = c(o, e[r = a[s]], r, e);
    return o
  };

  function Us(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = n.skipHooks,
      s = void 0 !== i && i,
      r = Object.keys(t).reduce((function(e, n) {
        var i = t[n];
        return !!i.icon ? e[i.iconName] = i.icon : e[n] = i, e
      }), {});
    "function" != typeof As.hooks.addPack || s ? As.styles[e] = cs({}, As.styles[e] || {}, r) : As.hooks.addPack(e, r), "fas" === e && Us("fa", t)
  }
  var Ks = As.styles,
    Bs = As.shims,
    Fs = function() {
      var e = function(e) {
        return qs(Ks, (function(t, n, i) {
          return t[i] = qs(n, e, {}), t
        }), {})
      };
      e((function(e, t, n) {
        return t[3] && (e[t[3]] = n), e
      })), e((function(e, t, n) {
        var i = t[2];
        return e[n] = n, i.forEach((function(t) {
          e[t] = n
        })), e
      }));
      var t = "far" in Ks;
      qs(Bs, (function(e, n) {
        var i = n[0],
          s = n[1],
          r = n[2];
        return "far" !== s || t || (s = "fas"), e[i] = {
          prefix: s,
          iconName: r
        }, e
      }), {})
    };

  function Xs(e, t, n) {
    if (e && e[t] && e[t][n]) return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    }
  }

  function Gs(e) {
    var t = e.tag,
      n = e.attributes,
      i = void 0 === n ? {} : n,
      s = e.children,
      r = void 0 === s ? [] : s;
    return "string" == typeof e ? Is(e) : "<".concat(t, " ").concat(function(e) {
      return Object.keys(e || {}).reduce((function(t, n) {
        return t + "".concat(n, '="').concat(Is(e[n]), '" ')
      }), "").trim()
    }(i), ">").concat(r.map(Gs).join(""), "</").concat(t, ">")
  }

  function Vs(e) {
    this.name = "MissingIcon", this.message = e || "Icon unavailable", this.stack = (new Error).stack
  }
  Fs(), As.styles, Vs.prototype = Object.create(Error.prototype), Vs.prototype.constructor = Vs;
  var Hs = {
      fill: "currentColor"
    },
    Ws = {
      attributeType: "XML",
      repeatCount: "indefinite",
      dur: "2s"
    };
  cs({}, Hs, {
    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
  });
  var Ys = cs({}, Ws, {
    attributeName: "opacity"
  });

  function Js(e) {
    var t = e[0],
      n = e[1],
      i = us(e.slice(4), 1)[0];
    return {
      found: !0,
      width: t,
      height: n,
      icon: Array.isArray(i) ? {
        tag: "g",
        attributes: {
          class: "".concat($s.familyPrefix, "-").concat(xs)
        },
        children: [{
          tag: "path",
          attributes: {
            class: "".concat($s.familyPrefix, "-").concat(Es),
            fill: "currentColor",
            d: i[0]
          }
        }, {
          tag: "path",
          attributes: {
            class: "".concat($s.familyPrefix, "-").concat(zs),
            fill: "currentColor",
            d: i[1]
          }
        }]
      } : {
        tag: "path",
        attributes: {
          fill: "currentColor",
          d: i
        }
      }
    }
  }
  cs({}, Hs, {
    cx: "256",
    cy: "364",
    r: "28"
  }), cs({}, Ws, {
    attributeName: "r",
    values: "28;14;28;28;14;28;"
  }), cs({}, Ys, {
    values: "1;0;1;1;0;1;"
  }), cs({}, Hs, {
    opacity: "1",
    d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
  }), cs({}, Ys, {
    values: "1;0;0;0;0;1;"
  }), cs({}, Hs, {
    opacity: "0",
    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
  }), cs({}, Ys, {
    values: "0;0;1;1;0;0;"
  }), As.styles, As.styles;

  function Zs() {
    $s.autoAddCss && !nr && (! function(e) {
      if (e && vs) {
        var t = bs.createElement("style");
        t.setAttribute("type", "text/css"), t.innerHTML = e;
        for (var n = bs.head.childNodes, i = null, s = n.length - 1; s > -1; s--) {
          var r = n[s],
            o = (r.tagName || "").toUpperCase();
          ["STYLE", "LINK"].indexOf(o) > -1 && (i = r)
        }
        bs.head.insertBefore(t, i)
      }
    }(function() {
      var e = "fa",
        t = ws,
        n = $s.familyPrefix,
        i = $s.replacementClass,
        s = 'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
      if (n !== e || i !== t) {
        var r = new RegExp("\\.".concat(e, "\\-"), "g"),
          o = new RegExp("\\--".concat(e, "\\-"), "g"),
          a = new RegExp("\\.".concat(t), "g");
        s = s.replace(r, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(a, ".".concat(i))
      }
      return s
    }()), nr = !0)
  }

  function Qs(e, t) {
    return Object.defineProperty(e, "abstract", {
      get: t
    }), Object.defineProperty(e, "html", {
      get: function() {
        return e.abstract.map((function(e) {
          return Gs(e)
        }))
      }
    }), Object.defineProperty(e, "node", {
      get: function() {
        if (vs) {
          var t = bs.createElement("div");
          return t.innerHTML = e.html, t.children
        }
      }
    }), e
  }

  function er(e) {
    var t = e.prefix,
      n = void 0 === t ? "fa" : t,
      i = e.iconName;
    if (i) return Xs(tr.definitions, n, i) || Xs(As.styles, n, i)
  }
  var tr = new(function() {
      function e() {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e), this.definitions = {}
      }
      var t, n, i;
      return t = e, (n = [{
        key: "add",
        value: function() {
          for (var e = this, t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
          var s = n.reduce(this._pullDefinitions, {});
          Object.keys(s).forEach((function(t) {
            e.definitions[t] = cs({}, e.definitions[t] || {}, s[t]), Us(t, s[t]), Fs()
          }))
        }
      }, {
        key: "reset",
        value: function() {
          this.definitions = {}
        }
      }, {
        key: "_pullDefinitions",
        value: function(e, t) {
          var n = t.prefix && t.iconName && t.icon ? {
            0: t
          } : t;
          return Object.keys(n).map((function(t) {
            var i = n[t],
              s = i.prefix,
              r = i.iconName,
              o = i.icon;
            e[s] || (e[s] = {}), e[s][r] = o
          })), e
        }
      }]) && as(t.prototype, n), i && as(t, i), e
    }()),
    nr = !1,
    ir = function(e) {
      return function(t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = (t || {}).icon ? t : er(t || {}),
          s = n.mask;
        return s && (s = (s || {}).icon ? s : er(s || {})), e(i, cs({}, n, {
          mask: s
        }))
      }
    }((function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = t.transform,
        i = void 0 === n ? Os : n,
        s = t.symbol,
        r = void 0 !== s && s,
        o = t.mask,
        a = void 0 === o ? null : o,
        l = t.maskId,
        c = void 0 === l ? null : l,
        u = t.title,
        f = void 0 === u ? null : u,
        h = t.titleId,
        p = void 0 === h ? null : h,
        m = t.classes,
        d = void 0 === m ? [] : m,
        g = t.attributes,
        y = void 0 === g ? {} : g,
        b = t.styles,
        k = void 0 === b ? {} : b;
      if (e) {
        var v = e.prefix,
          w = e.iconName,
          x = e.icon;
        return Qs(cs({
          type: "icon"
        }, e), (function() {
          return Zs(), $s.autoA11y && (f ? y["aria-labelledby"] = "".concat($s.replacementClass, "-title-").concat(p || Ls()) : (y["aria-hidden"] = "true", y.focusable = "false")), js({
            icons: {
              main: Js(x),
              mask: a ? Js(a.icon) : {
                found: !1,
                width: null,
                height: null,
                icon: {}
              }
            },
            prefix: v,
            iconName: w,
            transform: cs({}, Os, i),
            symbol: r,
            title: f,
            maskId: c,
            titleId: p,
            extra: {
              attributes: y,
              styles: k,
              classes: d
            }
          })
        }))
      }
    }));

  function sr(t) {
    let n, i;
    return {
      c() {
        n = new U, i = C(), n.a = i
      },
      m(e, s) {
        n.m(t[0], e, s), $(e, i, s)
      },
      p(e, [t]) {
        1 & t && n.p(e[0])
      },
      i: e,
      o: e,
      d(e) {
        e && S(i), e && n.d()
      }
    }
  }

  function rr(e, t, n) {
    let {
      size: i
    } = t, {
      spin: s = !1
    } = t, {
      name: r
    } = t, {
      solid: o = !0
    } = t, a = o ? "fas" : "far", l = {
      classes: [i ? `fa-${i}` : void 0, s ? "fa-spin" : void 0]
    }, c = "";
    return Y((() => {
      const e = ir({
        prefix: a,
        iconName: r
      }, l);
      n(0, c = e.html[0])
    })), e.$$set = e => {
      "size" in e && n(1, i = e.size), "spin" in e && n(2, s = e.spin), "name" in e && n(3, r = e.name), "solid" in e && n(4, o = e.solid)
    }, [c, i, s, r, o]
  }
  class or extends $e {
    constructor(e) {
      super(), Te(this, e, rr, sr, a, {
        size: 1,
        spin: 2,
        name: 3,
        solid: 4
      })
    }
  }

  function ar(e) {
    E(e, "svelte-1nkw7cw", ".loading.svelte-1nkw7cw{vertical-align:middle;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}")
  }

  function lr(t) {
    return {
      c: e,
      m: e,
      p: e,
      i: e,
      o: e,
      d: e
    }
  }

  function cr(e) {
    let t;
    const n = e[6].default,
      i = f(n, e, e[5], null);
    return {
      c() {
        i && i.c()
      },
      m(e, n) {
        i && i.m(e, n), t = !0
      },
      p(e, s) {
        i && i.p && (!t || 32 & s) && m(i, n, e, e[5], t ? p(n, e[5], s, null) : d(e[5]), null)
      },
      i(e) {
        t || (de(i, e), t = !0)
      },
      o(e) {
        ge(i, e), t = !1
      },
      d(e) {
        i && i.d(e)
      }
    }
  }

  function ur(e) {
    let t, n, i;
    return n = new or({
      props: {
        name: "circle-notch",
        spin: !0,
        size: "2x"
      }
    }), {
      c() {
        t = N("div"), xe(n.$$.fragment), R(t, "class", "loading svelte-1nkw7cw"), D(t, "min-height", e[1] + "px")
      },
      m(s, r) {
        $(s, t, r), ze(n, t, null), e[7](t), i = !0
      },
      p(e, n) {
        (!i || 2 & n) && D(t, "min-height", e[1] + "px")
      },
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(i) {
        i && S(t), Ee(n), e[7](null)
      }
    }
  }

  function fr(e) {
    let t, n, i, s = {
      ctx: e,
      current: null,
      token: null,
      hasCatch: !1,
      pending: ur,
      then: cr,
      catch: lr,
      value: 9,
      blocks: [, , , ]
    };
    return ke(n = e[4](e[0]), s), {
      c() {
        t = C(), s.block.c()
      },
      m(e, n) {
        $(e, t, n), s.block.m(e, s.anchor = n), s.mount = () => t.parentNode, s.anchor = t, i = !0
      },
      p(t, i) {
        e = t, s.ctx = e, 1 & i && n !== (n = e[4](e[0])) && ke(n, s) || function(e, t, n) {
          const i = t.slice(),
            {
              resolved: s
            } = e;
          e.current === e.then && (i[e.value] = s), e.current === e.catch && (i[e.error] = s), e.block.p(i, n)
        }(s, e, i)
      },
      i(e) {
        i || (de(s.block), i = !0)
      },
      o(e) {
        for (let e = 0; e < 3; e += 1) {
          ge(s.blocks[e])
        }
        i = !1
      },
      d(e) {
        e && S(t), s.block.d(e), s.token = null, s = null
      }
    }
  }

  function hr(t) {
    let n, i, s = t[2],
      r = fr(t);
    return {
      c() {
        r.c(), n = C()
      },
      m(e, t) {
        r.m(e, t), $(e, n, t), i = !0
      },
      p(t, [i]) {
        4 & i && a(s, s = t[2]) ? (pe(), ge(r, 1, 1, e), me(), r = fr(t), r.c(), de(r), r.m(n.parentNode, n)) : r.p(t, i)
      },
      i(e) {
        i || (de(r), i = !0)
      },
      o(e) {
        ge(r), i = !1
      },
      d(e) {
        e && S(n), r.d(e)
      }
    }
  }

  function pr(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t;
    var r = this && this.__awaiter || function(e, t, n, i) {
      return new(n || (n = Promise))((function(s, r) {
        function o(e) {
          try {
            l(i.next(e))
          } catch (e) {
            r(e)
          }
        }

        function a(e) {
          try {
            l(i.throw(e))
          } catch (e) {
            r(e)
          }
        }

        function l(e) {
          var t;
          e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(o, a)
        }
        l((i = i.apply(e, t || [])).next())
      }))
    };
    let o, {
        ms: a
      } = t,
      {
        minHeight: l = 0
      } = t,
      {
        update: c = !1
      } = t;
    return e.$$set = e => {
      "ms" in e && n(0, a = e.ms), "minHeight" in e && n(1, l = e.minHeight), "update" in e && n(2, c = e.update), "$$scope" in e && n(5, s = e.$$scope)
    }, [a, l, c, o, function(e) {
      return r(this, void 0, void 0, (function*() {
        yield new Promise((t => setTimeout(t, e)))
      }))
    }, s, i, function(e) {
      Q[e ? "unshift" : "push"]((() => {
        o = e, n(3, o)
      }))
    }]
  }
  class mr extends $e {
    constructor(e) {
      super(), Te(this, e, pr, hr, a, {
        ms: 0,
        minHeight: 1,
        update: 2
      }, ar)
    }
  }

  function dr(e) {
    E(e, "svelte-1sz4kvi", "ol.svelte-1sz4kvi.svelte-1sz4kvi{padding-left:0;display:inline-block}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi{margin-bottom:0.2rem;list-style-type:none;list-style:none}.top-list-item.svelte-1sz4kvi.svelte-1sz4kvi:hover{cursor:pointer;background-color:var(--quizdown-color-secondary)}.top-list-item.svelte-1sz4kvi:hover .list-question.svelte-1sz4kvi{text-decoration:underline}.list-comment.svelte-1sz4kvi.svelte-1sz4kvi{margin-left:2em;list-style-type:initial}")
  }

  function gr(e, t, n) {
    const i = e.slice();
    return i[6] = t[n], i[8] = n, i
  }

  function yr(e, t, n) {
    const i = e.slice();
    return i[9] = t[n], i
  }

  function br(e) {
    let t, n, i, s, r, o = e[6].answers[e[9]].html + "",
      a = e[6].answers[e[9]].comment + "";
    return {
      c() {
        t = N("li"), n = N("i"), i = L(":\n                                    "), s = new U, r = I(), s.a = r, R(t, "class", "list-comment svelte-1sz4kvi")
      },
      m(e, l) {
        $(e, t, l), z(t, n), n.innerHTML = o, z(t, i), s.m(a, t), z(t, r)
      },
      p(e, t) {
        1 & t && o !== (o = e[6].answers[e[9]].html + "") && (n.innerHTML = o), 1 & t && a !== (a = e[6].answers[e[9]].comment + "") && s.p(a)
      },
      d(e) {
        e && S(t)
      }
    }
  }

  function kr(e) {
    let t, n = "" !== e[6].answers[e[9]].comment && br(e);
    return {
      c() {
        n && n.c(), t = C()
      },
      m(e, i) {
        n && n.m(e, i), $(e, t, i)
      },
      p(e, i) {
        "" !== e[6].answers[e[9]].comment ? n ? n.p(e, i) : (n = br(e), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null)
      },
      d(e) {
        n && n.d(e), e && S(t)
      }
    }
  }

  function vr(e) {
    let t, n, i, s, r, o, a, l, c, u, f = e[4][+e[6].solved] + "",
      h = e[6].text + "",
      p = e[6].selected,
      m = [];
    for (let t = 0; t < p.length; t += 1) m[t] = kr(yr(e, p, t));

    function d() {
      return e[5](e[8])
    }
    return {
      c() {
        t = N("li"), n = N("span"), i = L(f), s = I(), r = new U, o = I(), a = N("ol");
        for (let e = 0; e < m.length; e += 1) m[e].c();
        l = I(), r.a = null, R(n, "class", "list-question svelte-1sz4kvi"), R(a, "class", "svelte-1sz4kvi"), R(t, "class", "top-list-item svelte-1sz4kvi")
      },
      m(e, f) {
        $(e, t, f), z(t, n), z(n, i), z(n, s), r.m(h, n), z(t, o), z(t, a);
        for (let e = 0; e < m.length; e += 1) m[e].m(a, null);
        z(t, l), c || (u = M(t, "click", d), c = !0)
      },
      p(t, n) {
        if (e = t, 1 & n && f !== (f = e[4][+e[6].solved] + "") && P(i, f), 1 & n && h !== (h = e[6].text + "") && r.p(h), 1 & n) {
          let t;
          for (p = e[6].selected, t = 0; t < p.length; t += 1) {
            const i = yr(e, p, t);
            m[t] ? m[t].p(i, n) : (m[t] = kr(i), m[t].c(), m[t].m(a, null))
          }
          for (; t < m.length; t += 1) m[t].d(1);
          m.length = p.length
        }
      },
      d(e) {
        e && S(t), A(m, e), c = !1, u()
      }
    }
  }

  function wr(e) {
    let t, n, i, s, r, o, a, l, c, u, f, h = zr(e[2]) + "",
      p = zr(e[0].questions.length) + "";
    i = new or({
      props: {
        name: "check-double"
      }
    });
    let m = e[0].questions,
      d = [];
    for (let t = 0; t < m.length; t += 1) d[t] = vr(gr(e, m, t));
    return {
      c() {
        t = N("div"), n = N("h1"), xe(i.$$.fragment), s = I(), r = L(h), o = L("/"), a = L(p), l = I(), c = N("ol");
        for (let e = 0; e < d.length; e += 1) d[e].c();
        R(c, "class", "svelte-1sz4kvi")
      },
      m(e, u) {
        $(e, t, u), z(t, n), ze(i, n, null), z(n, s), z(n, r), z(n, o), z(n, a), z(t, l), z(t, c);
        for (let e = 0; e < d.length; e += 1) d[e].m(c, null);
        f = !0
      },
      p(e, t) {
        if ((!f || 4 & t) && h !== (h = zr(e[2]) + "") && P(r, h), (!f || 1 & t) && p !== (p = zr(e[0].questions.length) + "") && P(a, p), 17 & t) {
          let n;
          for (m = e[0].questions, n = 0; n < m.length; n += 1) {
            const i = gr(e, m, n);
            d[n] ? d[n].p(i, t) : (d[n] = vr(i), d[n].c(), d[n].m(c, null))
          }
          for (; n < d.length; n += 1) d[n].d(1);
          d.length = m.length
        }
      },
      i(e) {
        f || (de(i.$$.fragment, e), u || se((() => {
          u = be(t, rs, {
            duration: 1e3
          }), u.start()
        })), f = !0)
      },
      o(e) {
        ge(i.$$.fragment, e), f = !1
      },
      d(e) {
        e && S(t), Ee(i), A(d, e)
      }
    }
  }

  function xr(e) {
    let t, n, i, s, r, o = e[3]("resultsTitle") + "";
    return s = new mr({
      props: {
        ms: e[1],
        minHeight: 150,
        $$slots: {
          default: [wr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        t = N("h3"), n = L(o), i = I(), xe(s.$$.fragment)
      },
      m(e, o) {
        $(e, t, o), z(t, n), $(e, i, o), ze(s, e, o), r = !0
      },
      p(e, [t]) {
        (!r || 8 & t) && o !== (o = e[3]("resultsTitle") + "") && P(n, o);
        const i = {};
        2 & t && (i.ms = e[1]), 4101 & t && (i.$$scope = {
          dirty: t,
          ctx: e
        }), s.$set(i)
      },
      i(e) {
        r || (de(s.$$.fragment, e), r = !0)
      },
      o(e) {
        ge(s.$$.fragment, e), r = !1
      },
      d(e) {
        e && S(t), e && S(i), Ee(s, e)
      }
    }
  }

  function zr(e) {
    return e.toLocaleString("en-US", {
      minimumIntegerDigits: 2
    })
  }

  function Er(e, t, n) {
    let i;
    u(e, ei, (e => n(3, i = e)));
    let {
      quiz: s
    } = t, r = 800;
    c(s.isEvaluated) && (r = 300);
    let o = 0;
    Y((() => n(2, o = s.evaluate())));
    return e.$$set = e => {
      "quiz" in e && n(0, s = e.quiz)
    }, [s, r, o, i, ["❌", "✅"], e => s.jump(e)]
  }
  class _r extends $e {
    constructor(e) {
      super(), Te(this, e, Er, xr, a, {
        quiz: 0
      }, dr)
    }
  }

  function Tr(e) {
    let t, n, i;
    const s = e[2].default,
      r = f(s, e, e[1], null);
    return {
      c() {
        t = N("div"), r && r.c(), R(t, "class", "animated")
      },
      m(e, n) {
        $(e, t, n), r && r.m(t, null), i = !0
      },
      p(e, t) {
        r && r.p && (!i || 2 & t) && m(r, s, e, e[1], i ? p(s, e[1], t, null) : d(e[1]), null)
      },
      i(e) {
        i || (de(r, e), n || se((() => {
          n = be(t, rs, {
            duration: 400
          }), n.start()
        })), i = !0)
      },
      o(e) {
        ge(r, e), i = !1
      },
      d(e) {
        e && S(t), r && r.d(e)
      }
    }
  }

  function $r(t) {
    let n, i, s = t[0],
      r = Tr(t);
    return {
      c() {
        r.c(), n = C()
      },
      m(e, t) {
        r.m(e, t), $(e, n, t), i = !0
      },
      p(t, [i]) {
        1 & i && a(s, s = t[0]) ? (pe(), ge(r, 1, 1, e), me(), r = Tr(t), r.c(), de(r), r.m(n.parentNode, n)) : r.p(t, i)
      },
      i(e) {
        i || (de(r), i = !0)
      },
      o(e) {
        ge(r), i = !1
      },
      d(e) {
        e && S(n), r.d(e)
      }
    }
  }

  function Sr(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t, {
      update: r
    } = t;
    return e.$$set = e => {
      "update" in e && n(0, r = e.update), "$$scope" in e && n(1, s = e.$$scope)
    }, [r, s, i]
  }
  class Ar extends $e {
    constructor(e) {
      super(), Te(this, e, Sr, $r, a, {
        update: 0
      })
    }
  }
  /*!
   * Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com
   * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
   */
  var Nr = {
      prefix: "fas",
      iconName: "arrow-left",
      icon: [448, 512, [], "f060", "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]
    },
    Or = {
      prefix: "fas",
      iconName: "arrow-right",
      icon: [448, 512, [], "f061", "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"]
    },
    Lr = {
      prefix: "fas",
      iconName: "check-double",
      icon: [512, 512, [], "f560", "M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z"]
    },
    Ir = {
      prefix: "fas",
      iconName: "circle-notch",
      icon: [512, 512, [], "f1ce", "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"]
    },
    Cr = {
      prefix: "fas",
      iconName: "redo",
      icon: [512, 512, [], "f01e", "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"]
    },
    Mr = {
      prefix: "far",
      iconName: "lightbulb",
      icon: [352, 512, [], "f0eb", "M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]
    };

  function Rr(t) {
    let n, i, s, r;
    return {
      c() {
        n = N("p"), i = L("💡 "), s = new U, s.a = null, R(n, "class", "hint")
      },
      m(e, r) {
        $(e, n, r), z(n, i), s.m(t[1], n)
      },
      p(e, t) {
        2 & t && s.p(e[1])
      },
      i(e) {
        e && (r || se((() => {
          r = be(n, rs, {
            duration: 400
          }), r.start()
        })))
      },
      o: e,
      d(e) {
        e && S(n)
      }
    }
  }

  function Pr(t) {
    let n, i = t[0] && Rr(t);
    return {
      c() {
        i && i.c(), n = C()
      },
      m(e, t) {
        i && i.m(e, t), $(e, n, t)
      },
      p(e, [t]) {
        e[0] ? i ? (i.p(e, t), 1 & t && de(i, 1)) : (i = Rr(e), i.c(), de(i, 1), i.m(n.parentNode, n)) : i && (i.d(1), i = null)
      },
      i(e) {
        de(i)
      },
      o: e,
      d(e) {
        i && i.d(e), e && S(n)
      }
    }
  }

  function Dr(e, t, n) {
    let {
      show: i
    } = t, {
      hint: s
    } = t;
    return e.$$set = e => {
      "show" in e && n(0, i = e.show), "hint" in e && n(1, s = e.hint)
    }, [i, s]
  }
  class jr extends $e {
    constructor(e) {
      super(), Te(this, e, Dr, Pr, a, {
        show: 0,
        hint: 1
      })
    }
  }

  function qr(e) {
    E(e, "svelte-1s4z0g", ".container.svelte-1s4z0g{padding:2px 16px;display:grid;align-items:start;overflow:hidden}")
  }

  function Ur(e) {
    let t, n;
    const i = e[1].default,
      s = f(i, e, e[0], null);
    return {
      c() {
        t = N("div"), s && s.c(), R(t, "class", "container svelte-1s4z0g")
      },
      m(e, i) {
        $(e, t, i), s && s.m(t, null), n = !0
      },
      p(e, [t]) {
        s && s.p && (!n || 1 & t) && m(s, i, e, e[0], n ? p(i, e[0], t, null) : d(e[0]), null)
      },
      i(e) {
        n || (de(s, e), n = !0)
      },
      o(e) {
        ge(s, e), n = !1
      },
      d(e) {
        e && S(t), s && s.d(e)
      }
    }
  }

  function Kr(e, t, n) {
    let {
      $$slots: i = {},
      $$scope: s
    } = t;
    return e.$$set = e => {
      "$$scope" in e && n(0, s = e.$$scope)
    }, [s, i]
  }
  class Br extends $e {
    constructor(e) {
      super(), Te(this, e, Kr, Ur, a, {}, qr)
    }
  }

  function Fr(e) {
    E(e, "svelte-k2exh3", '.hljs{display:block;overflow-x:auto;padding:0.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:bold}.hljs-number,.hljs-literal,.hljs-variable,.hljs-template-variable,.hljs-tag .hljs-attr{color:#008080}.hljs-string,.hljs-doctag{color:#d14}.hljs-title,.hljs-section,.hljs-selector-id{color:#900;font-weight:bold}.hljs-subst{font-weight:normal}.hljs-type,.hljs-class .hljs-title{color:#458;font-weight:bold}.hljs-tag,.hljs-name,.hljs-attribute{color:#000080;font-weight:normal}.hljs-regexp,.hljs-link{color:#009926}.hljs-symbol,.hljs-bullet{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:bold}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@font-face{font-family:"KaTeX_AMS";src:url(fonts/KaTeX_AMS-Regular.woff2) format("woff2"), url(fonts/KaTeX_AMS-Regular.woff) format("woff"), url(fonts/KaTeX_AMS-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Bold.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Bold.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Caligraphic";src:url(fonts/KaTeX_Caligraphic-Regular.woff2) format("woff2"), url(fonts/KaTeX_Caligraphic-Regular.woff) format("woff"), url(fonts/KaTeX_Caligraphic-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Bold.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Bold.woff) format("woff"), url(fonts/KaTeX_Fraktur-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Fraktur";src:url(fonts/KaTeX_Fraktur-Regular.woff2) format("woff2"), url(fonts/KaTeX_Fraktur-Regular.woff) format("woff"), url(fonts/KaTeX_Fraktur-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Bold.woff2) format("woff2"), url(fonts/KaTeX_Main-Bold.woff) format("woff"), url(fonts/KaTeX_Main-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Main-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Main-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Italic.woff2) format("woff2"), url(fonts/KaTeX_Main-Italic.woff) format("woff"), url(fonts/KaTeX_Main-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_Main";src:url(fonts/KaTeX_Main-Regular.woff2) format("woff2"), url(fonts/KaTeX_Main-Regular.woff) format("woff"), url(fonts/KaTeX_Main-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-BoldItalic.woff2) format("woff2"), url(fonts/KaTeX_Math-BoldItalic.woff) format("woff"), url(fonts/KaTeX_Math-BoldItalic.ttf) format("truetype");font-weight:bold;font-style:italic}@font-face{font-family:"KaTeX_Math";src:url(fonts/KaTeX_Math-Italic.woff2) format("woff2"), url(fonts/KaTeX_Math-Italic.woff) format("woff"), url(fonts/KaTeX_Math-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Bold.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Bold.woff) format("woff"), url(fonts/KaTeX_SansSerif-Bold.ttf) format("truetype");font-weight:bold;font-style:normal}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Italic.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Italic.woff) format("woff"), url(fonts/KaTeX_SansSerif-Italic.ttf) format("truetype");font-weight:normal;font-style:italic}@font-face{font-family:"KaTeX_SansSerif";src:url(fonts/KaTeX_SansSerif-Regular.woff2) format("woff2"), url(fonts/KaTeX_SansSerif-Regular.woff) format("woff"), url(fonts/KaTeX_SansSerif-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Script";src:url(fonts/KaTeX_Script-Regular.woff2) format("woff2"), url(fonts/KaTeX_Script-Regular.woff) format("woff"), url(fonts/KaTeX_Script-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size1";src:url(fonts/KaTeX_Size1-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size1-Regular.woff) format("woff"), url(fonts/KaTeX_Size1-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size2";src:url(fonts/KaTeX_Size2-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size2-Regular.woff) format("woff"), url(fonts/KaTeX_Size2-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size3";src:url(fonts/KaTeX_Size3-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size3-Regular.woff) format("woff"), url(fonts/KaTeX_Size3-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Size4";src:url(fonts/KaTeX_Size4-Regular.woff2) format("woff2"), url(fonts/KaTeX_Size4-Regular.woff) format("woff"), url(fonts/KaTeX_Size4-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}@font-face{font-family:"KaTeX_Typewriter";src:url(fonts/KaTeX_Typewriter-Regular.woff2) format("woff2"), url(fonts/KaTeX_Typewriter-Regular.woff) format("woff"), url(fonts/KaTeX_Typewriter-Regular.ttf) format("truetype");font-weight:normal;font-style:normal}.katex{font:normal 1.21em KaTeX_Main, Times New Roman, serif;line-height:1.2;text-indent:0;text-rendering:auto}.katex *{-ms-high-contrast-adjust:none !important;border-color:currentColor}.katex .katex-version::after{content:"0.13.11"}.katex .katex-mathml{position:absolute;clip:rect(1px, 1px, 1px, 1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;display:inline-block;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .strut{display:inline-block}.katex .textbf{font-weight:bold}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:bold}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:bold;font-style:italic}.katex .amsrm{font-family:KaTeX_AMS}.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:bold}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:baseline;align-items:baseline}.katex .hbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:100%}.katex .thinbox{display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline,.katex .hdashline,.katex .rule{min-height:1px}.katex .mspace{display:inline-block}.katex .llap,.katex .rlap,.katex .clap{width:0;position:relative}.katex .llap>.inner,.katex .rlap>.inner,.katex .clap>.inner{position:absolute}.katex .llap>.fix,.katex .rlap>.fix,.katex .clap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .rlap>.inner,.katex .clap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:solid 0;position:relative}.katex .overline .overline-line,.katex .underline .underline-line,.katex .hline{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:0.27777778em;margin-right:-0.55555556em}.katex .sizing.reset-size1.size1,.katex .fontsize-ensurer.reset-size1.size1{font-size:1em}.katex .sizing.reset-size1.size2,.katex .fontsize-ensurer.reset-size1.size2{font-size:1.2em}.katex .sizing.reset-size1.size3,.katex .fontsize-ensurer.reset-size1.size3{font-size:1.4em}.katex .sizing.reset-size1.size4,.katex .fontsize-ensurer.reset-size1.size4{font-size:1.6em}.katex .sizing.reset-size1.size5,.katex .fontsize-ensurer.reset-size1.size5{font-size:1.8em}.katex .sizing.reset-size1.size6,.katex .fontsize-ensurer.reset-size1.size6{font-size:2em}.katex .sizing.reset-size1.size7,.katex .fontsize-ensurer.reset-size1.size7{font-size:2.4em}.katex .sizing.reset-size1.size8,.katex .fontsize-ensurer.reset-size1.size8{font-size:2.88em}.katex .sizing.reset-size1.size9,.katex .fontsize-ensurer.reset-size1.size9{font-size:3.456em}.katex .sizing.reset-size1.size10,.katex .fontsize-ensurer.reset-size1.size10{font-size:4.148em}.katex .sizing.reset-size1.size11,.katex .fontsize-ensurer.reset-size1.size11{font-size:4.976em}.katex .sizing.reset-size2.size1,.katex .fontsize-ensurer.reset-size2.size1{font-size:0.83333333em}.katex .sizing.reset-size2.size2,.katex .fontsize-ensurer.reset-size2.size2{font-size:1em}.katex .sizing.reset-size2.size3,.katex .fontsize-ensurer.reset-size2.size3{font-size:1.16666667em}.katex .sizing.reset-size2.size4,.katex .fontsize-ensurer.reset-size2.size4{font-size:1.33333333em}.katex .sizing.reset-size2.size5,.katex .fontsize-ensurer.reset-size2.size5{font-size:1.5em}.katex .sizing.reset-size2.size6,.katex .fontsize-ensurer.reset-size2.size6{font-size:1.66666667em}.katex .sizing.reset-size2.size7,.katex .fontsize-ensurer.reset-size2.size7{font-size:2em}.katex .sizing.reset-size2.size8,.katex .fontsize-ensurer.reset-size2.size8{font-size:2.4em}.katex .sizing.reset-size2.size9,.katex .fontsize-ensurer.reset-size2.size9{font-size:2.88em}.katex .sizing.reset-size2.size10,.katex .fontsize-ensurer.reset-size2.size10{font-size:3.45666667em}.katex .sizing.reset-size2.size11,.katex .fontsize-ensurer.reset-size2.size11{font-size:4.14666667em}.katex .sizing.reset-size3.size1,.katex .fontsize-ensurer.reset-size3.size1{font-size:0.71428571em}.katex .sizing.reset-size3.size2,.katex .fontsize-ensurer.reset-size3.size2{font-size:0.85714286em}.katex .sizing.reset-size3.size3,.katex .fontsize-ensurer.reset-size3.size3{font-size:1em}.katex .sizing.reset-size3.size4,.katex .fontsize-ensurer.reset-size3.size4{font-size:1.14285714em}.katex .sizing.reset-size3.size5,.katex .fontsize-ensurer.reset-size3.size5{font-size:1.28571429em}.katex .sizing.reset-size3.size6,.katex .fontsize-ensurer.reset-size3.size6{font-size:1.42857143em}.katex .sizing.reset-size3.size7,.katex .fontsize-ensurer.reset-size3.size7{font-size:1.71428571em}.katex .sizing.reset-size3.size8,.katex .fontsize-ensurer.reset-size3.size8{font-size:2.05714286em}.katex .sizing.reset-size3.size9,.katex .fontsize-ensurer.reset-size3.size9{font-size:2.46857143em}.katex .sizing.reset-size3.size10,.katex .fontsize-ensurer.reset-size3.size10{font-size:2.96285714em}.katex .sizing.reset-size3.size11,.katex .fontsize-ensurer.reset-size3.size11{font-size:3.55428571em}.katex .sizing.reset-size4.size1,.katex .fontsize-ensurer.reset-size4.size1{font-size:0.625em}.katex .sizing.reset-size4.size2,.katex .fontsize-ensurer.reset-size4.size2{font-size:0.75em}.katex .sizing.reset-size4.size3,.katex .fontsize-ensurer.reset-size4.size3{font-size:0.875em}.katex .sizing.reset-size4.size4,.katex .fontsize-ensurer.reset-size4.size4{font-size:1em}.katex .sizing.reset-size4.size5,.katex .fontsize-ensurer.reset-size4.size5{font-size:1.125em}.katex .sizing.reset-size4.size6,.katex .fontsize-ensurer.reset-size4.size6{font-size:1.25em}.katex .sizing.reset-size4.size7,.katex .fontsize-ensurer.reset-size4.size7{font-size:1.5em}.katex .sizing.reset-size4.size8,.katex .fontsize-ensurer.reset-size4.size8{font-size:1.8em}.katex .sizing.reset-size4.size9,.katex .fontsize-ensurer.reset-size4.size9{font-size:2.16em}.katex .sizing.reset-size4.size10,.katex .fontsize-ensurer.reset-size4.size10{font-size:2.5925em}.katex .sizing.reset-size4.size11,.katex .fontsize-ensurer.reset-size4.size11{font-size:3.11em}.katex .sizing.reset-size5.size1,.katex .fontsize-ensurer.reset-size5.size1{font-size:0.55555556em}.katex .sizing.reset-size5.size2,.katex .fontsize-ensurer.reset-size5.size2{font-size:0.66666667em}.katex .sizing.reset-size5.size3,.katex .fontsize-ensurer.reset-size5.size3{font-size:0.77777778em}.katex .sizing.reset-size5.size4,.katex .fontsize-ensurer.reset-size5.size4{font-size:0.88888889em}.katex .sizing.reset-size5.size5,.katex .fontsize-ensurer.reset-size5.size5{font-size:1em}.katex .sizing.reset-size5.size6,.katex .fontsize-ensurer.reset-size5.size6{font-size:1.11111111em}.katex .sizing.reset-size5.size7,.katex .fontsize-ensurer.reset-size5.size7{font-size:1.33333333em}.katex .sizing.reset-size5.size8,.katex .fontsize-ensurer.reset-size5.size8{font-size:1.6em}.katex .sizing.reset-size5.size9,.katex .fontsize-ensurer.reset-size5.size9{font-size:1.92em}.katex .sizing.reset-size5.size10,.katex .fontsize-ensurer.reset-size5.size10{font-size:2.30444444em}.katex .sizing.reset-size5.size11,.katex .fontsize-ensurer.reset-size5.size11{font-size:2.76444444em}.katex .sizing.reset-size6.size1,.katex .fontsize-ensurer.reset-size6.size1{font-size:0.5em}.katex .sizing.reset-size6.size2,.katex .fontsize-ensurer.reset-size6.size2{font-size:0.6em}.katex .sizing.reset-size6.size3,.katex .fontsize-ensurer.reset-size6.size3{font-size:0.7em}.katex .sizing.reset-size6.size4,.katex .fontsize-ensurer.reset-size6.size4{font-size:0.8em}.katex .sizing.reset-size6.size5,.katex .fontsize-ensurer.reset-size6.size5{font-size:0.9em}.katex .sizing.reset-size6.size6,.katex .fontsize-ensurer.reset-size6.size6{font-size:1em}.katex .sizing.reset-size6.size7,.katex .fontsize-ensurer.reset-size6.size7{font-size:1.2em}.katex .sizing.reset-size6.size8,.katex .fontsize-ensurer.reset-size6.size8{font-size:1.44em}.katex .sizing.reset-size6.size9,.katex .fontsize-ensurer.reset-size6.size9{font-size:1.728em}.katex .sizing.reset-size6.size10,.katex .fontsize-ensurer.reset-size6.size10{font-size:2.074em}.katex .sizing.reset-size6.size11,.katex .fontsize-ensurer.reset-size6.size11{font-size:2.488em}.katex .sizing.reset-size7.size1,.katex .fontsize-ensurer.reset-size7.size1{font-size:0.41666667em}.katex .sizing.reset-size7.size2,.katex .fontsize-ensurer.reset-size7.size2{font-size:0.5em}.katex .sizing.reset-size7.size3,.katex .fontsize-ensurer.reset-size7.size3{font-size:0.58333333em}.katex .sizing.reset-size7.size4,.katex .fontsize-ensurer.reset-size7.size4{font-size:0.66666667em}.katex .sizing.reset-size7.size5,.katex .fontsize-ensurer.reset-size7.size5{font-size:0.75em}.katex .sizing.reset-size7.size6,.katex .fontsize-ensurer.reset-size7.size6{font-size:0.83333333em}.katex .sizing.reset-size7.size7,.katex .fontsize-ensurer.reset-size7.size7{font-size:1em}.katex .sizing.reset-size7.size8,.katex .fontsize-ensurer.reset-size7.size8{font-size:1.2em}.katex .sizing.reset-size7.size9,.katex .fontsize-ensurer.reset-size7.size9{font-size:1.44em}.katex .sizing.reset-size7.size10,.katex .fontsize-ensurer.reset-size7.size10{font-size:1.72833333em}.katex .sizing.reset-size7.size11,.katex .fontsize-ensurer.reset-size7.size11{font-size:2.07333333em}.katex .sizing.reset-size8.size1,.katex .fontsize-ensurer.reset-size8.size1{font-size:0.34722222em}.katex .sizing.reset-size8.size2,.katex .fontsize-ensurer.reset-size8.size2{font-size:0.41666667em}.katex .sizing.reset-size8.size3,.katex .fontsize-ensurer.reset-size8.size3{font-size:0.48611111em}.katex .sizing.reset-size8.size4,.katex .fontsize-ensurer.reset-size8.size4{font-size:0.55555556em}.katex .sizing.reset-size8.size5,.katex .fontsize-ensurer.reset-size8.size5{font-size:0.625em}.katex .sizing.reset-size8.size6,.katex .fontsize-ensurer.reset-size8.size6{font-size:0.69444444em}.katex .sizing.reset-size8.size7,.katex .fontsize-ensurer.reset-size8.size7{font-size:0.83333333em}.katex .sizing.reset-size8.size8,.katex .fontsize-ensurer.reset-size8.size8{font-size:1em}.katex .sizing.reset-size8.size9,.katex .fontsize-ensurer.reset-size8.size9{font-size:1.2em}.katex .sizing.reset-size8.size10,.katex .fontsize-ensurer.reset-size8.size10{font-size:1.44027778em}.katex .sizing.reset-size8.size11,.katex .fontsize-ensurer.reset-size8.size11{font-size:1.72777778em}.katex .sizing.reset-size9.size1,.katex .fontsize-ensurer.reset-size9.size1{font-size:0.28935185em}.katex .sizing.reset-size9.size2,.katex .fontsize-ensurer.reset-size9.size2{font-size:0.34722222em}.katex .sizing.reset-size9.size3,.katex .fontsize-ensurer.reset-size9.size3{font-size:0.40509259em}.katex .sizing.reset-size9.size4,.katex .fontsize-ensurer.reset-size9.size4{font-size:0.46296296em}.katex .sizing.reset-size9.size5,.katex .fontsize-ensurer.reset-size9.size5{font-size:0.52083333em}.katex .sizing.reset-size9.size6,.katex .fontsize-ensurer.reset-size9.size6{font-size:0.5787037em}.katex .sizing.reset-size9.size7,.katex .fontsize-ensurer.reset-size9.size7{font-size:0.69444444em}.katex .sizing.reset-size9.size8,.katex .fontsize-ensurer.reset-size9.size8{font-size:0.83333333em}.katex .sizing.reset-size9.size9,.katex .fontsize-ensurer.reset-size9.size9{font-size:1em}.katex .sizing.reset-size9.size10,.katex .fontsize-ensurer.reset-size9.size10{font-size:1.20023148em}.katex .sizing.reset-size9.size11,.katex .fontsize-ensurer.reset-size9.size11{font-size:1.43981481em}.katex .sizing.reset-size10.size1,.katex .fontsize-ensurer.reset-size10.size1{font-size:0.24108004em}.katex .sizing.reset-size10.size2,.katex .fontsize-ensurer.reset-size10.size2{font-size:0.28929605em}.katex .sizing.reset-size10.size3,.katex .fontsize-ensurer.reset-size10.size3{font-size:0.33751205em}.katex .sizing.reset-size10.size4,.katex .fontsize-ensurer.reset-size10.size4{font-size:0.38572806em}.katex .sizing.reset-size10.size5,.katex .fontsize-ensurer.reset-size10.size5{font-size:0.43394407em}.katex .sizing.reset-size10.size6,.katex .fontsize-ensurer.reset-size10.size6{font-size:0.48216008em}.katex .sizing.reset-size10.size7,.katex .fontsize-ensurer.reset-size10.size7{font-size:0.57859209em}.katex .sizing.reset-size10.size8,.katex .fontsize-ensurer.reset-size10.size8{font-size:0.69431051em}.katex .sizing.reset-size10.size9,.katex .fontsize-ensurer.reset-size10.size9{font-size:0.83317261em}.katex .sizing.reset-size10.size10,.katex .fontsize-ensurer.reset-size10.size10{font-size:1em}.katex .sizing.reset-size10.size11,.katex .fontsize-ensurer.reset-size10.size11{font-size:1.19961427em}.katex .sizing.reset-size11.size1,.katex .fontsize-ensurer.reset-size11.size1{font-size:0.20096463em}.katex .sizing.reset-size11.size2,.katex .fontsize-ensurer.reset-size11.size2{font-size:0.24115756em}.katex .sizing.reset-size11.size3,.katex .fontsize-ensurer.reset-size11.size3{font-size:0.28135048em}.katex .sizing.reset-size11.size4,.katex .fontsize-ensurer.reset-size11.size4{font-size:0.32154341em}.katex .sizing.reset-size11.size5,.katex .fontsize-ensurer.reset-size11.size5{font-size:0.36173633em}.katex .sizing.reset-size11.size6,.katex .fontsize-ensurer.reset-size11.size6{font-size:0.40192926em}.katex .sizing.reset-size11.size7,.katex .fontsize-ensurer.reset-size11.size7{font-size:0.48231511em}.katex .sizing.reset-size11.size8,.katex .fontsize-ensurer.reset-size11.size8{font-size:0.57877814em}.katex .sizing.reset-size11.size9,.katex .fontsize-ensurer.reset-size11.size9{font-size:0.69453376em}.katex .sizing.reset-size11.size10,.katex .fontsize-ensurer.reset-size11.size10{font-size:0.83360129em}.katex .sizing.reset-size11.size11,.katex .fontsize-ensurer.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:0.12em}.katex .delimcenter{position:relative}.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .op-limits>.vlist-t{text-align:center}.katex .accent>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy::before,.katex .stretchy::after{content:""}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 0.5em}.katex .cd-arrow-pad{padding:0 0.55556em 0 0.27778em}.katex .x-arrow,.katex .mover,.katex .munder{text-align:center}.katex .boxpad{padding:0 0.3em 0 0.3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:0.04em solid}.katex .cancel-pad{padding:0 0.2em 0 0.2em}.katex .cancel-lap{margin-left:-0.2em;margin-right:-0.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:0.08em}.katex .angl{box-sizing:border-content;border-top:0.049em solid;border-right:0.049em solid;margin-right:0.03889em}.katex .anglpad{padding:0 0.03889em 0 0.03889em}.katex .eqn-num::before{counter-increment:katexEqnNo;content:"(" counter(katexEqnNo) ")"}.katex .mml-eqn-num::before{counter-increment:mmlEqnNo;content:"(" counter(mmlEqnNo) ")"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:-webkit-calc(50% + 0.3em);right:calc(50% + 0.3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:-webkit-calc(50% + 0.3em);left:calc(50% + 0.3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-0.125em}.svg-inline--fa.fa-lg{vertical-align:-0.225em}.svg-inline--fa.fa-w-1{width:0.0625em}.svg-inline--fa.fa-w-2{width:0.125em}.svg-inline--fa.fa-w-3{width:0.1875em}.svg-inline--fa.fa-w-4{width:0.25em}.svg-inline--fa.fa-w-5{width:0.3125em}.svg-inline--fa.fa-w-6{width:0.375em}.svg-inline--fa.fa-w-7{width:0.4375em}.svg-inline--fa.fa-w-8{width:0.5em}.svg-inline--fa.fa-w-9{width:0.5625em}.svg-inline--fa.fa-w-10{width:0.625em}.svg-inline--fa.fa-w-11{width:0.6875em}.svg-inline--fa.fa-w-12{width:0.75em}.svg-inline--fa.fa-w-13{width:0.8125em}.svg-inline--fa.fa-w-14{width:0.875em}.svg-inline--fa.fa-w-15{width:0.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:0.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:0.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-0.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-text,.fa-layers-counter{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:0.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(0.25);transform:scale(0.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:0.75em;vertical-align:-0.0667em}.fa-xs{font-size:0.75em}.fa-sm{font-size:0.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid 0.08em #eee;border-radius:0.1em;padding:0.2em 0.25em 0.15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fas.fa-pull-left,.far.fa-pull-left,.fal.fa-pull-left,.fab.fa-pull-left{margin-right:0.3em}.fa.fa-pull-right,.fas.fa-pull-right,.far.fa-pull-right,.fal.fa-pull-right,.fab.fa-pull-right{margin-left:0.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(1, -1);transform:scale(1, -1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";-webkit-transform:scale(-1, -1);transform:scale(-1, -1)}:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-flip-both{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0, 0, 0, 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color, currentColor);opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color, currentColor);opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:0.4;opacity:var(--fa-secondary-opacity, 0.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity, 1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:black}.fad.fa-inverse{color:#fff}img{max-height:400px;border-radius:4px;max-width:100%;height:auto}code{padding:0 0.4rem;font-size:85%;color:#333;white-space:pre-wrap;border-radius:4px;padding:0.2em 0.4em;background-color:#f8f8f8;font-family:Consolas, Monaco, monospace}a{color:var(--quizdown-color-primary)}.quizdown-content{padding:1rem;max-width:900px;margin:auto}')
  }

  function Xr(e) {
    let t, n, i, s;
    return t = new Fi({
      props: {
        question: e[1],
        n: e[12] + 1
      }
    }), i = new jr({
      props: {
        hint: e[1].hint,
        show: e[14]
      }
    }), {
      c() {
        xe(t.$$.fragment), n = I(), xe(i.$$.fragment)
      },
      m(e, r) {
        ze(t, e, r), $(e, n, r), ze(i, e, r), s = !0
      },
      p(e, n) {
        const s = {};
        2 & n && (s.question = e[1]), 4096 & n && (s.n = e[12] + 1), t.$set(s);
        const r = {};
        2 & n && (r.hint = e[1].hint), 16384 & n && (r.show = e[14]), i.$set(r)
      },
      i(e) {
        s || (de(t.$$.fragment, e), de(i.$$.fragment, e), s = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), ge(i.$$.fragment, e), s = !1
      },
      d(e) {
        Ee(t, e), e && S(n), Ee(i, e)
      }
    }
  }

  function Gr(e) {
    let t, n;
    return t = new _r({
      props: {
        quiz: e[0]
      }
    }), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, i) {
        ze(t, e, i), n = !0
      },
      p(e, n) {
        const i = {};
        1 & n && (i.quiz = e[0]), t.$set(i)
      },
      i(e) {
        n || (de(t.$$.fragment, e), n = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), n = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function Vr(e) {
    let t, n, i, s;
    const r = [Gr, Xr],
      o = [];

    function a(e, t) {
      return e[13] ? 0 : 1
    }
    return t = a(e), n = o[t] = r[t](e), {
      c() {
        n.c(), i = C()
      },
      m(e, n) {
        o[t].m(e, n), $(e, i, n), s = !0
      },
      p(e, s) {
        let l = t;
        t = a(e), t === l ? o[t].p(e, s) : (pe(), ge(o[l], 1, 1, (() => {
          o[l] = null
        })), me(), n = o[t], n ? n.p(e, s) : (n = o[t] = r[t](e), n.c()), de(n, 1), n.m(i.parentNode, i))
      },
      i(e) {
        s || (de(n), s = !0)
      },
      o(e) {
        ge(n), s = !1
      },
      d(e) {
        o[t].d(e), e && S(i)
      }
    }
  }

  function Hr(e) {
    let t, n;
    return t = new Ar({
      props: {
        update: e[12],
        $$slots: {
          default: [Vr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, i) {
        ze(t, e, i), n = !0
      },
      p(e, n) {
        const i = {};
        4096 & n && (i.update = e[12]), 16805891 & n && (i.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(i)
      },
      i(e) {
        n || (de(t.$$.fragment, e), n = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), n = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function Wr(t) {
    let n, i;
    return n = new or({
      props: {
        name: "lightbulb",
        solid: !1
      }
    }), {
      c() {
        xe(n.$$.fragment)
      },
      m(e, t) {
        ze(n, e, t), i = !0
      },
      p: e,
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(n, e)
      }
    }
  }

  function Yr(e) {
    let t, n;
    return t = new ss({
      props: {
        slot: "left",
        title: e[15]("hint"),
        disabled: !e[1].hint || e[14] || e[13],
        buttonAction: e[1].enableHint,
        $$slots: {
          default: [Wr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, i) {
        ze(t, e, i), n = !0
      },
      p(e, n) {
        const i = {};
        32768 & n && (i.title = e[15]("hint")), 24578 & n && (i.disabled = !e[1].hint || e[14] || e[13]), 2 & n && (i.buttonAction = e[1].enableHint), 16777216 & n && (i.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(i)
      },
      i(e) {
        n || (de(t.$$.fragment, e), n = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), n = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function Jr(t) {
    let n, i;
    return n = new or({
      props: {
        name: "arrow-left",
        size: "lg"
      }
    }), {
      c() {
        xe(n.$$.fragment)
      },
      m(e, t) {
        ze(n, e, t), i = !0
      },
      p: e,
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(n, e)
      }
    }
  }

  function Zr(t) {
    let n, i;
    return n = new or({
      props: {
        name: "arrow-right",
        size: "lg"
      }
    }), {
      c() {
        xe(n.$$.fragment)
      },
      m(e, t) {
        ze(n, e, t), i = !0
      },
      p: e,
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(n, e)
      }
    }
  }

  function Qr(e) {
    let t, n, i, s;
    return n = new ss({
      props: {
        disabled: !(e[18] || e[19]) || e[13],
        title: e[15]("evaluate"),
        buttonAction: e[21],
        $$slots: {
          default: [eo]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        t = N("div"), xe(n.$$.fragment)
      },
      m(e, i) {
        $(e, t, i), ze(n, t, null), s = !0
      },
      p(e, t) {
        const i = {};
        794624 & t && (i.disabled = !(e[18] || e[19]) || e[13]), 32768 & t && (i.title = e[15]("evaluate")), 1 & t && (i.buttonAction = e[21]), 16777216 & t && (i.$$scope = {
          dirty: t,
          ctx: e
        }), n.$set(i)
      },
      i(e) {
        s || (de(n.$$.fragment, e), i || se((() => {
          i = be(t, os, {
            x: 200,
            duration: 500
          }), i.start()
        })), s = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), s = !1
      },
      d(e) {
        e && S(t), Ee(n)
      }
    }
  }

  function eo(t) {
    let n, i;
    return n = new or({
      props: {
        name: "check-double",
        size: "lg"
      }
    }), {
      c() {
        xe(n.$$.fragment)
      },
      m(e, t) {
        ze(n, e, t), i = !0
      },
      p: e,
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(n, e)
      }
    }
  }

  function to(e) {
    let t, n, i, s, r, o;
    t = new ss({
      props: {
        title: e[15]("previous"),
        disabled: e[16] || e[13] || e[17],
        buttonAction: e[0].previous,
        $$slots: {
          default: [Jr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), i = new ss({
      props: {
        disabled: e[18] || e[13] || e[17],
        buttonAction: e[0].next,
        title: e[15]("next"),
        $$slots: {
          default: [Zr]
        },
        $$scope: {
          ctx: e
        }
      }
    });
    let a = (e[18] || e[19]) && Qr(e);
    return {
      c() {
        xe(t.$$.fragment), n = I(), xe(i.$$.fragment), s = I(), a && a.c(), r = C()
      },
      m(e, l) {
        ze(t, e, l), $(e, n, l), ze(i, e, l), $(e, s, l), a && a.m(e, l), $(e, r, l), o = !0
      },
      p(e, n) {
        const s = {};
        32768 & n && (s.title = e[15]("previous")), 204800 & n && (s.disabled = e[16] || e[13] || e[17]), 1 & n && (s.buttonAction = e[0].previous), 16777216 & n && (s.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(s);
        const o = {};
        401408 & n && (o.disabled = e[18] || e[13] || e[17]), 1 & n && (o.buttonAction = e[0].next), 32768 & n && (o.title = e[15]("next")), 16777216 & n && (o.$$scope = {
          dirty: n,
          ctx: e
        }), i.$set(o), e[18] || e[19] ? a ? (a.p(e, n), 786432 & n && de(a, 1)) : (a = Qr(e), a.c(), de(a, 1), a.m(r.parentNode, r)) : a && (pe(), ge(a, 1, 1, (() => {
          a = null
        })), me())
      },
      i(e) {
        o || (de(t.$$.fragment, e), de(i.$$.fragment, e), de(a), o = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), ge(i.$$.fragment, e), ge(a), o = !1
      },
      d(e) {
        Ee(t, e), e && S(n), Ee(i, e), e && S(s), a && a.d(e), e && S(r)
      }
    }
  }

  function no(t) {
    let n, i;
    return n = new or({
      props: {
        name: "redo"
      }
    }), {
      c() {
        xe(n.$$.fragment)
      },
      m(e, t) {
        ze(n, e, t), i = !0
      },
      p: e,
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(e) {
        Ee(n, e)
      }
    }
  }

  function io(e) {
    let t, n;
    return t = new ss({
      props: {
        slot: "right",
        title: e[15]("reset"),
        buttonAction: e[20],
        $$slots: {
          default: [no]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, i) {
        ze(t, e, i), n = !0
      },
      p(e, n) {
        const i = {};
        32768 & n && (i.title = e[15]("reset")), 9 & n && (i.buttonAction = e[20]), 16777216 & n && (i.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(i)
      },
      i(e) {
        n || (de(t.$$.fragment, e), n = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), n = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function so(e) {
    let t, n, i, s, r, o;
    return t = new di({
      props: {
        minHeight: lo,
        $$slots: {
          default: [Hr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), i = new es({
      props: {
        $$slots: {
          right: [io],
          center: [to],
          left: [Yr]
        },
        $$scope: {
          ctx: e
        }
      }
    }), r = new hi({}), {
      c() {
        xe(t.$$.fragment), n = I(), xe(i.$$.fragment), s = I(), xe(r.$$.fragment)
      },
      m(e, a) {
        ze(t, e, a), $(e, n, a), ze(i, e, a), $(e, s, a), ze(r, e, a), o = !0
      },
      p(e, n) {
        const s = {};
        16805891 & n && (s.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(s);
        const r = {};
        17817611 & n && (r.$$scope = {
          dirty: n,
          ctx: e
        }), i.$set(r)
      },
      i(e) {
        o || (de(t.$$.fragment, e), de(i.$$.fragment, e), de(r.$$.fragment, e), o = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), ge(i.$$.fragment, e), ge(r.$$.fragment, e), o = !1
      },
      d(e) {
        Ee(t, e), e && S(n), Ee(i, e), e && S(s), Ee(r, e)
      }
    }
  }

  function ro(e) {
    let t, n;
    return t = new Br({
      props: {
        $$slots: {
          default: [so]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        xe(t.$$.fragment)
      },
      m(e, i) {
        ze(t, e, i), n = !0
      },
      p(e, n) {
        const i = {};
        17821707 & n && (i.$$scope = {
          dirty: n,
          ctx: e
        }), t.$set(i)
      },
      i(e) {
        n || (de(t.$$.fragment, e), n = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), n = !1
      },
      d(e) {
        Ee(t, e)
      }
    }
  }

  function oo(e) {
    let t, n, i, s;
    return t = new De({
      props: {
        value: e[12],
        max: e[0].questions.length - 1
      }
    }), i = new mr({
      props: {
        update: e[3],
        ms: 800,
        minHeight: lo,
        $$slots: {
          default: [ro]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        xe(t.$$.fragment), n = I(), xe(i.$$.fragment)
      },
      m(e, r) {
        ze(t, e, r), $(e, n, r), ze(i, e, r), s = !0
      },
      p(e, n) {
        const s = {};
        4096 & n && (s.value = e[12]), 1 & n && (s.max = e[0].questions.length - 1), t.$set(s);
        const r = {};
        8 & n && (r.update = e[3]), 17821707 & n && (r.$$scope = {
          dirty: n,
          ctx: e
        }), i.$set(r)
      },
      i(e) {
        s || (de(t.$$.fragment, e), de(i.$$.fragment, e), s = !0)
      },
      o(e) {
        ge(t.$$.fragment, e), ge(i.$$.fragment, e), s = !1
      },
      d(e) {
        Ee(t, e), e && S(n), Ee(i, e)
      }
    }
  }

  function ao(e) {
    let t, n, i;
    return n = new ci({
      props: {
        $$slots: {
          default: [oo]
        },
        $$scope: {
          ctx: e
        }
      }
    }), {
      c() {
        t = N("div"), xe(n.$$.fragment), R(t, "class", "quizdown-content")
      },
      m(s, r) {
        $(s, t, r), ze(n, t, null), e[22](t), i = !0
      },
      p(e, [t]) {
        const i = {};
        17821707 & t && (i.$$scope = {
          dirty: t,
          ctx: e
        }), n.$set(i)
      },
      i(e) {
        i || (de(n.$$.fragment, e), i = !0)
      },
      o(e) {
        ge(n.$$.fragment, e), i = !1
      },
      d(i) {
        i && S(t), Ee(n), e[22](null)
      }
    }
  }
  let lo = 150;

  function co(t, n, i) {
    let s, r, o, a, c, f, h, p, m, d, g, y, b, k, v, w, x, z = e,
      E = e,
      _ = e,
      T = e,
      $ = e,
      S = e,
      A = e,
      N = e;
    u(t, ei, (e => i(15, b = e))), t.$$.on_destroy.push((() => z())), t.$$.on_destroy.push((() => E())), t.$$.on_destroy.push((() => _())), t.$$.on_destroy.push((() => T())), t.$$.on_destroy.push((() => $())), t.$$.on_destroy.push((() => S())), t.$$.on_destroy.push((() => A())), t.$$.on_destroy.push((() => N()));
    var O = this && this.__awaiter || function(e, t, n, i) {
      return new(n || (n = Promise))((function(s, r) {
        function o(e) {
          try {
            l(i.next(e))
          } catch (e) {
            r(e)
          }
        }

        function a(e) {
          try {
            l(i.throw(e))
          } catch (e) {
            r(e)
          }
        }

        function l(e) {
          var t;
          e.done ? s(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
            e(t)
          }))).then(o, a)
        }
        l((i = i.apply(e, t || [])).next())
      }))
    };
    let L, {
      quiz: I
    } = n;
    ri(I.config.locale), $s.autoAddCss = !1, tr.add(Nr, Or, Cr, Mr, Lr, Ir);
    let C = !1;
    J((() => O(void 0, void 0, void 0, (function*() {
      let e = I.config.primaryColor,
        t = I.config.secondaryColor,
        n = I.config.textColor;
      L.style.setProperty("--quizdown-color-primary", e), L.style.setProperty("--quizdown-color-secondary", t), L.style.setProperty("--quizdown-color-text", n), i(2, L.style.minHeight = `${lo}px`, L)
    }))));
    return t.$$set = e => {
      "quiz" in e && i(0, I = e.quiz)
    }, t.$$.update = () => {
      1 & t.$$.dirty && (i(11, s = I.active), z(), z = l(s, (e => i(1, m = e)))), 2 & t.$$.dirty && (i(10, r = m.showHint), T(), T = l(r, (e => i(14, y = e)))), 1 & t.$$.dirty && (i(9, o = I.index), E(), E = l(o, (e => i(12, d = e)))), 1 & t.$$.dirty && (i(8, a = I.onLast), A(), A = l(a, (e => i(18, w = e)))), 1 & t.$$.dirty && (i(7, c = I.onFirst), $(), $ = l(c, (e => i(16, k = e)))), 1 & t.$$.dirty && (i(6, f = I.onResults), _(), _ = l(f, (e => i(13, g = e)))), 1 & t.$$.dirty && (i(5, h = I.isEvaluated), S(), S = l(h, (e => i(17, v = e)))), 1 & t.$$.dirty && (i(4, p = I.allVisited), N(), N = l(p, (e => i(19, x = e))))
    }, [I, m, L, C, p, h, f, c, a, o, r, s, d, g, y, b, k, v, w, x, () => {
      i(3, C = !C), I.reset()
    }, () => I.jump(I.questions.length), function(e) {
      Q[e ? "unshift" : "push"]((() => {
        L = e, i(2, L)
      }))
    }]
  }
  class uo extends $e {
    constructor(e) {
      super(), Te(this, e, co, ao, a, {
        quiz: 0
      }, Fr)
    }
  }
  /*! @license DOMPurify 2.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.0/LICENSE */
  var fo = Object.hasOwnProperty,
    ho = Object.setPrototypeOf,
    po = Object.isFrozen,
    mo = Object.getPrototypeOf,
    go = Object.getOwnPropertyDescriptor,
    yo = Object.freeze,
    bo = Object.seal,
    ko = Object.create,
    vo = "undefined" != typeof Reflect && Reflect,
    wo = vo.apply,
    xo = vo.construct;
  wo || (wo = function(e, t, n) {
    return e.apply(t, n)
  }), yo || (yo = function(e) {
    return e
  }), bo || (bo = function(e) {
    return e
  }), xo || (xo = function(e, t) {
    return new(Function.prototype.bind.apply(e, [null].concat(function(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n
      }
      return Array.from(e)
    }(t))))
  });
  var zo, Eo = Co(Array.prototype.forEach),
    _o = Co(Array.prototype.pop),
    To = Co(Array.prototype.push),
    $o = Co(String.prototype.toLowerCase),
    So = Co(String.prototype.match),
    Ao = Co(String.prototype.replace),
    No = Co(String.prototype.indexOf),
    Oo = Co(String.prototype.trim),
    Lo = Co(RegExp.prototype.test),
    Io = (zo = TypeError, function() {
      for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
      return xo(zo, t)
    });

  function Co(e) {
    return function(t) {
      for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) i[s - 1] = arguments[s];
      return wo(e, t, i)
    }
  }

  function Mo(e, t) {
    ho && ho(e, null);
    for (var n = t.length; n--;) {
      var i = t[n];
      if ("string" == typeof i) {
        var s = $o(i);
        s !== i && (po(t) || (t[n] = s), i = s)
      }
      e[i] = !0
    }
    return e
  }

  function Ro(e) {
    var t = ko(null),
      n = void 0;
    for (n in e) wo(fo, e, [n]) && (t[n] = e[n]);
    return t
  }

  function Po(e, t) {
    for (; null !== e;) {
      var n = go(e, t);
      if (n) {
        if (n.get) return Co(n.get);
        if ("function" == typeof n.value) return Co(n.value)
      }
      e = mo(e)
    }
    return function(e) {
      return console.warn("fallback value for", e), null
    }
  }
  var Do = yo(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    jo = yo(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    qo = yo(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    Uo = yo(["animate", "color-profile", "cursor", "discard", "fedropshadow", "feimage", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    Ko = yo(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
    Bo = yo(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    Fo = yo(["#text"]),
    Xo = yo(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
    Go = yo(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    Vo = yo(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    Ho = yo(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Wo = bo(/\{\{[\s\S]*|[\s\S]*\}\}/gm),
    Yo = bo(/<%[\s\S]*|[\s\S]*%>/gm),
    Jo = bo(/^data-[\-\w.\u00B7-\uFFFF]/),
    Zo = bo(/^aria-[\-\w]+$/),
    Qo = bo(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    ea = bo(/^(?:\w+script|data):/i),
    ta = bo(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    na = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };

  function ia(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return Array.from(e)
  }
  var sa = function() {
      return "undefined" == typeof window ? null : window
    },
    ra = function(e, t) {
      if ("object" !== (void 0 === e ? "undefined" : na(e)) || "function" != typeof e.createPolicy) return null;
      var n = null,
        i = "data-tt-policy-suffix";
      t.currentScript && t.currentScript.hasAttribute(i) && (n = t.currentScript.getAttribute(i));
      var s = "dompurify" + (n ? "#" + n : "");
      try {
        return e.createPolicy(s, {
          createHTML: function(e) {
            return e
          }
        })
      } catch (e) {
        return console.warn("TrustedTypes policy " + s + " could not be created."), null
      }
    };
  var oa = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : sa(),
      n = function(t) {
        return e(t)
      };
    if (n.version = "2.3.0", n.removed = [], !t || !t.document || 9 !== t.document.nodeType) return n.isSupported = !1, n;
    var i = t.document,
      s = t.document,
      r = t.DocumentFragment,
      o = t.HTMLTemplateElement,
      a = t.Node,
      l = t.Element,
      c = t.NodeFilter,
      u = t.NamedNodeMap,
      f = void 0 === u ? t.NamedNodeMap || t.MozNamedAttrMap : u,
      h = t.Text,
      p = t.Comment,
      m = t.DOMParser,
      d = t.trustedTypes,
      g = l.prototype,
      y = Po(g, "cloneNode"),
      b = Po(g, "nextSibling"),
      k = Po(g, "childNodes"),
      v = Po(g, "parentNode");
    if ("function" == typeof o) {
      var w = s.createElement("template");
      w.content && w.content.ownerDocument && (s = w.content.ownerDocument)
    }
    var x = ra(d, i),
      z = x && te ? x.createHTML("") : "",
      E = s,
      _ = E.implementation,
      T = E.createNodeIterator,
      $ = E.createDocumentFragment,
      S = E.getElementsByTagName,
      A = i.importNode,
      N = {};
    try {
      N = Ro(s).documentMode ? s.documentMode : {}
    } catch (e) {}
    var O = {};
    n.isSupported = "function" == typeof v && _ && void 0 !== _.createHTMLDocument && 9 !== N;
    var L = Wo,
      I = Yo,
      C = Jo,
      M = Zo,
      R = ea,
      P = ta,
      D = Qo,
      j = null,
      q = Mo({}, [].concat(ia(Do), ia(jo), ia(qo), ia(Ko), ia(Fo))),
      U = null,
      K = Mo({}, [].concat(ia(Xo), ia(Go), ia(Vo), ia(Ho))),
      B = null,
      F = null,
      X = !0,
      G = !0,
      V = !1,
      H = !1,
      W = !1,
      Y = !1,
      J = !1,
      Z = !1,
      Q = !1,
      ee = !0,
      te = !1,
      ne = !0,
      ie = !0,
      se = !1,
      re = {},
      oe = Mo({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
      ae = null,
      le = Mo({}, ["audio", "video", "img", "source", "image", "track"]),
      ce = null,
      ue = Mo({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "summary", "title", "value", "style", "xmlns"]),
      fe = "http://www.w3.org/1998/Math/MathML",
      he = "http://www.w3.org/2000/svg",
      pe = "http://www.w3.org/1999/xhtml",
      me = pe,
      de = !1,
      ge = null,
      ye = s.createElement("form"),
      be = function(e) {
        ge && ge === e || (e && "object" === (void 0 === e ? "undefined" : na(e)) || (e = {}), e = Ro(e), j = "ALLOWED_TAGS" in e ? Mo({}, e.ALLOWED_TAGS) : q, U = "ALLOWED_ATTR" in e ? Mo({}, e.ALLOWED_ATTR) : K, ce = "ADD_URI_SAFE_ATTR" in e ? Mo(Ro(ue), e.ADD_URI_SAFE_ATTR) : ue, ae = "ADD_DATA_URI_TAGS" in e ? Mo(Ro(le), e.ADD_DATA_URI_TAGS) : le, B = "FORBID_TAGS" in e ? Mo({}, e.FORBID_TAGS) : {}, F = "FORBID_ATTR" in e ? Mo({}, e.FORBID_ATTR) : {}, re = "USE_PROFILES" in e && e.USE_PROFILES, X = !1 !== e.ALLOW_ARIA_ATTR, G = !1 !== e.ALLOW_DATA_ATTR, V = e.ALLOW_UNKNOWN_PROTOCOLS || !1, H = e.SAFE_FOR_TEMPLATES || !1, W = e.WHOLE_DOCUMENT || !1, Z = e.RETURN_DOM || !1, Q = e.RETURN_DOM_FRAGMENT || !1, ee = !1 !== e.RETURN_DOM_IMPORT, te = e.RETURN_TRUSTED_TYPE || !1, J = e.FORCE_BODY || !1, ne = !1 !== e.SANITIZE_DOM, ie = !1 !== e.KEEP_CONTENT, se = e.IN_PLACE || !1, D = e.ALLOWED_URI_REGEXP || D, me = e.NAMESPACE || pe, H && (G = !1), Q && (Z = !0), re && (j = Mo({}, [].concat(ia(Fo))), U = [], !0 === re.html && (Mo(j, Do), Mo(U, Xo)), !0 === re.svg && (Mo(j, jo), Mo(U, Go), Mo(U, Ho)), !0 === re.svgFilters && (Mo(j, qo), Mo(U, Go), Mo(U, Ho)), !0 === re.mathMl && (Mo(j, Ko), Mo(U, Vo), Mo(U, Ho))), e.ADD_TAGS && (j === q && (j = Ro(j)), Mo(j, e.ADD_TAGS)), e.ADD_ATTR && (U === K && (U = Ro(U)), Mo(U, e.ADD_ATTR)), e.ADD_URI_SAFE_ATTR && Mo(ce, e.ADD_URI_SAFE_ATTR), ie && (j["#text"] = !0), W && Mo(j, ["html", "head", "body"]), j.table && (Mo(j, ["tbody"]), delete B.tbody), yo && yo(e), ge = e)
      },
      ke = Mo({}, ["mi", "mo", "mn", "ms", "mtext"]),
      ve = Mo({}, ["foreignobject", "desc", "title", "annotation-xml"]),
      we = Mo({}, jo);
    Mo(we, qo), Mo(we, Uo);
    var xe = Mo({}, Ko);
    Mo(xe, Bo);
    var ze = function(e) {
        var t = v(e);
        t && t.tagName || (t = {
          namespaceURI: pe,
          tagName: "template"
        });
        var n = $o(e.tagName),
          i = $o(t.tagName);
        if (e.namespaceURI === he) return t.namespaceURI === pe ? "svg" === n : t.namespaceURI === fe ? "svg" === n && ("annotation-xml" === i || ke[i]) : Boolean(we[n]);
        if (e.namespaceURI === fe) return t.namespaceURI === pe ? "math" === n : t.namespaceURI === he ? "math" === n && ve[i] : Boolean(xe[n]);
        if (e.namespaceURI === pe) {
          if (t.namespaceURI === he && !ve[i]) return !1;
          if (t.namespaceURI === fe && !ke[i]) return !1;
          var s = Mo({}, ["title", "style", "font", "a", "script"]);
          return !xe[n] && (s[n] || !we[n])
        }
        return !1
      },
      Ee = function(e) {
        To(n.removed, {
          element: e
        });
        try {
          e.parentNode.removeChild(e)
        } catch (t) {
          try {
            e.outerHTML = z
          } catch (t) {
            e.remove()
          }
        }
      },
      _e = function(e, t) {
        try {
          To(n.removed, {
            attribute: t.getAttributeNode(e),
            from: t
          })
        } catch (e) {
          To(n.removed, {
            attribute: null,
            from: t
          })
        }
        if (t.removeAttribute(e), "is" === e && !U[e])
          if (Z || Q) try {
            Ee(t)
          } catch (e) {} else try {
            t.setAttribute(e, "")
          } catch (e) {}
      },
      Te = function(e) {
        var t = void 0,
          n = void 0;
        if (J) e = "<remove></remove>" + e;
        else {
          var i = So(e, /^[\r\n\t ]+/);
          n = i && i[0]
        }
        var r = x ? x.createHTML(e) : e;
        if (me === pe) try {
          t = (new m).parseFromString(r, "text/html")
        } catch (e) {}
        if (!t || !t.documentElement) {
          t = _.createDocument(me, "template", null);
          try {
            t.documentElement.innerHTML = de ? "" : r
          } catch (e) {}
        }
        var o = t.body || t.documentElement;
        return e && n && o.insertBefore(s.createTextNode(n), o.childNodes[0] || null), me === pe ? S.call(t, W ? "html" : "body")[0] : W ? t.documentElement : o
      },
      $e = function(e) {
        return T.call(e.ownerDocument || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null, !1)
      },
      Se = function(e) {
        return !(e instanceof h || e instanceof p) && !("string" == typeof e.nodeName && "string" == typeof e.textContent && "function" == typeof e.removeChild && e.attributes instanceof f && "function" == typeof e.removeAttribute && "function" == typeof e.setAttribute && "string" == typeof e.namespaceURI && "function" == typeof e.insertBefore)
      },
      Ae = function(e) {
        return "object" === (void 0 === a ? "undefined" : na(a)) ? e instanceof a : e && "object" === (void 0 === e ? "undefined" : na(e)) && "number" == typeof e.nodeType && "string" == typeof e.nodeName
      },
      Ne = function(e, t, i) {
        O[e] && Eo(O[e], (function(e) {
          e.call(n, t, i, ge)
        }))
      },
      Oe = function(e) {
        var t = void 0;
        if (Ne("beforeSanitizeElements", e, null), Se(e)) return Ee(e), !0;
        if (So(e.nodeName, /[\u0080-\uFFFF]/)) return Ee(e), !0;
        var i = $o(e.nodeName);
        if (Ne("uponSanitizeElement", e, {
            tagName: i,
            allowedTags: j
          }), !Ae(e.firstElementChild) && (!Ae(e.content) || !Ae(e.content.firstElementChild)) && Lo(/<[/\w]/g, e.innerHTML) && Lo(/<[/\w]/g, e.textContent)) return Ee(e), !0;
        if (!j[i] || B[i]) {
          if (ie && !oe[i]) {
            var s = v(e) || e.parentNode,
              r = k(e) || e.childNodes;
            if (r && s)
              for (var o = r.length - 1; o >= 0; --o) s.insertBefore(y(r[o], !0), b(e))
          }
          return Ee(e), !0
        }
        return e instanceof l && !ze(e) ? (Ee(e), !0) : "noscript" !== i && "noembed" !== i || !Lo(/<\/no(script|embed)/i, e.innerHTML) ? (H && 3 === e.nodeType && (t = e.textContent, t = Ao(t, L, " "), t = Ao(t, I, " "), e.textContent !== t && (To(n.removed, {
          element: e.cloneNode()
        }), e.textContent = t)), Ne("afterSanitizeElements", e, null), !1) : (Ee(e), !0)
      },
      Le = function(e, t, n) {
        if (ne && ("id" === t || "name" === t) && (n in s || n in ye)) return !1;
        if (G && !F[t] && Lo(C, t));
        else if (X && Lo(M, t));
        else {
          if (!U[t] || F[t]) return !1;
          if (ce[t]);
          else if (Lo(D, Ao(n, P, "")));
          else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== No(n, "data:") || !ae[e]) {
            if (V && !Lo(R, Ao(n, P, "")));
            else if (n) return !1
          } else;
        }
        return !0
      },
      Ie = function(e) {
        var t = void 0,
          i = void 0,
          s = void 0,
          r = void 0;
        Ne("beforeSanitizeAttributes", e, null);
        var o = e.attributes;
        if (o) {
          var a = {
            attrName: "",
            attrValue: "",
            keepAttr: !0,
            allowedAttributes: U
          };
          for (r = o.length; r--;) {
            var l = t = o[r],
              c = l.name,
              u = l.namespaceURI;
            if (i = Oo(t.value), s = $o(c), a.attrName = s, a.attrValue = i, a.keepAttr = !0, a.forceKeepAttr = void 0, Ne("uponSanitizeAttribute", e, a), i = a.attrValue, !a.forceKeepAttr && (_e(c, e), a.keepAttr))
              if (Lo(/\/>/i, i)) _e(c, e);
              else {
                H && (i = Ao(i, L, " "), i = Ao(i, I, " "));
                var f = e.nodeName.toLowerCase();
                if (Le(f, s, i)) try {
                  u ? e.setAttributeNS(u, c, i) : e.setAttribute(c, i), _o(n.removed)
                } catch (e) {}
              }
          }
          Ne("afterSanitizeAttributes", e, null)
        }
      },
      Ce = function e(t) {
        var n = void 0,
          i = $e(t);
        for (Ne("beforeSanitizeShadowDOM", t, null); n = i.nextNode();) Ne("uponSanitizeShadowNode", n, null), Oe(n) || (n.content instanceof r && e(n.content), Ie(n));
        Ne("afterSanitizeShadowDOM", t, null)
      };
    return n.sanitize = function(e, s) {
      var o = void 0,
        l = void 0,
        c = void 0,
        u = void 0,
        f = void 0;
      if ((de = !e) && (e = "\x3c!--\x3e"), "string" != typeof e && !Ae(e)) {
        if ("function" != typeof e.toString) throw Io("toString is not a function");
        if ("string" != typeof(e = e.toString())) throw Io("dirty is not a string, aborting")
      }
      if (!n.isSupported) {
        if ("object" === na(t.toStaticHTML) || "function" == typeof t.toStaticHTML) {
          if ("string" == typeof e) return t.toStaticHTML(e);
          if (Ae(e)) return t.toStaticHTML(e.outerHTML)
        }
        return e
      }
      if (Y || be(s), n.removed = [], "string" == typeof e && (se = !1), se);
      else if (e instanceof a) 1 === (l = (o = Te("\x3c!----\x3e")).ownerDocument.importNode(e, !0)).nodeType && "BODY" === l.nodeName || "HTML" === l.nodeName ? o = l : o.appendChild(l);
      else {
        if (!Z && !H && !W && -1 === e.indexOf("<")) return x && te ? x.createHTML(e) : e;
        if (!(o = Te(e))) return Z ? null : z
      }
      o && J && Ee(o.firstChild);
      for (var h = $e(se ? e : o); c = h.nextNode();) 3 === c.nodeType && c === u || Oe(c) || (c.content instanceof r && Ce(c.content), Ie(c), u = c);
      if (u = null, se) return e;
      if (Z) {
        if (Q)
          for (f = $.call(o.ownerDocument); o.firstChild;) f.appendChild(o.firstChild);
        else f = o;
        return ee && (f = A.call(i, f, !0)), f
      }
      var p = W ? o.outerHTML : o.innerHTML;
      return H && (p = Ao(p, L, " "), p = Ao(p, I, " ")), x && te ? x.createHTML(p) : p
    }, n.setConfig = function(e) {
      be(e), Y = !0
    }, n.clearConfig = function() {
      ge = null, Y = !1
    }, n.isValidAttribute = function(e, t, n) {
      ge || be({});
      var i = $o(e),
        s = $o(t);
      return Le(i, s, n)
    }, n.addHook = function(e, t) {
      "function" == typeof t && (O[e] = O[e] || [], To(O[e], t))
    }, n.removeHook = function(e) {
      O[e] && _o(O[e])
    }, n.removeHooks = function(e) {
      O[e] && (O[e] = [])
    }, n.removeAllHooks = function() {
      O = {}
    }, n
  }();
  const aa = e => {
    const t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce(((e, t) => Math.min(e, t.length)), 1 / 0) : 0
  };
  var la = (e, {
    include: t,
    exclude: n
  } = {}) => {
    const i = e => {
      const i = t => "string" == typeof t ? e === t : t.test(e);
      return t ? t.some(i) : !n || !n.some(i)
    };
    for (const [t, n] of (e => {
        const t = new Set;
        do {
          for (const n of Reflect.ownKeys(e)) t.add([e, n])
        } while ((e = Reflect.getPrototypeOf(e)) && e !== Object.prototype);
        return t
      })(e.constructor.prototype)) {
      if ("constructor" === n || !i(n)) continue;
      const s = Reflect.getOwnPropertyDescriptor(t, n);
      s && "function" == typeof s.value && (e[n] = e[n].bind(e))
    }
    return e
  };

  function ca(e, t) {
    return JSON.stringify(e) === JSON.stringify(t)
  }

  function ua(e, t) {
    let n, i, s = e.length;
    for (; 0 !== s;) i = Math.floor(Math.random() * s), s -= 1, n = e[s], e[s] = e[i], e[i] = n;
    return e.slice(0, t)
  }
  class fa {
    constructor(e, t, n, i, s, r) {
      if (0 === i.length) throw "no answers for question provided";
      this.text = e, this.explanation = t, this.hint = n, this.solved = !1, this.showHint = Ae(!1), this.options = r, this.answers = i, this.questionType = s, this.visited = !1, la(this), this.reset()
    }
    enableHint() {
      this.showHint.update((e => !0))
    }
    reset() {
      this.selected = [], this.solved = !1, this.visited = !1, this.showHint.set(!1), this.options.shuffleAnswers && (this.answers = ua(this.answers, this.answers.length))
    }
  }
  class ha extends fa {
    constructor(e, t, n, i, s) {
      s.shuffleAnswers = !0, super(e, t, n, i, "Sequence", s)
    }
    isCorrect() {
      let e = this.answers.map((e => e.id));
      return this.solved = ca(e.sort(), this.selected), this.solved
    }
  }
  class pa extends fa {
    isCorrect() {
      let e = this.answers.filter((e => e.correct)).map((e => e.id)),
        t = this.selected.map((e => this.answers[e].id));
      return this.solved = ca(e.sort(), t.sort()), this.solved
    }
  }
  class ma extends pa {
    constructor(e, t, n, i, s) {
      super(e, t, n, i, "MultipleChoice", s)
    }
  }
  class da extends pa {
    constructor(e, t, n, i, s) {
      if (super(e, t, n, i, "SingleChoice", s), this.answers.filter((e => e.correct)).length > 1) throw "Single Choice questions can not have more than one correct answer."
    }
  }
  class ga {
    constructor(e, t, n, i) {
      this.html = t, this.correct = n, this.id = e, this.comment = i, la(this)
    }
  }
  class ya {
    constructor(e, t) {
      if (this.index = Ae(0), this.questions = e, this.config = t, this.config.shuffleQuestions && (this.questions = ua(this.questions, this.config.nQuestions)), 0 == this.questions.length) throw "No questions for quiz provided";
      this.active = Ae(this.questions[0]), this.questions[0].visited = !0, this.onLast = Ae(1 == this.questions.length), this.onResults = Ae(!1), this.onFirst = Ae(!0), this.allVisited = Ae(1 == this.questions.length), this.isEvaluated = Ae(!1), la(this)
    }
    setActive() {
      let e = c(this.index);
      this.active.update((t => this.questions[e])), this.questions[e].visited = !0
    }
    checkAllVisited() {
      for (let e of this.questions)
        if (!e.visited) return !1;
      return !0
    }
    jump(e) {
      return e <= this.questions.length - 1 && e >= 0 ? (this.index.set(e), this.setActive(), this.allVisited.set(this.checkAllVisited()), this.onResults.set(!1), this.onLast.set(e == this.questions.length - 1), this.onFirst.set(0 == e), !0) : e == this.questions.length && (this.onResults.set(!0), this.onLast.set(!1), this.index.set(e), !0)
    }
    next() {
      return this.jump(c(this.index) + 1)
    }
    previous() {
      return this.jump(c(this.index) - 1)
    }
    reset() {
      return this.onLast.set(!1), this.onResults.set(!1), this.allVisited.set(!1), this.isEvaluated.set(!1), this.questions.forEach((e => e.reset())), this.jump(0)
    }
    evaluate() {
      var e = 0;
      for (var t of this.questions) t.isCorrect() && (e += 1);
      return this.isEvaluated.set(!0), e
    }
  }

  function ba(e, t) {
    return void 0 !== e ? e : t
  }
  const ka = {
    start_on_load: "startOnLoad",
    shuffle_answers: "shuffleAnswers",
    shuffle_questions: "shuffleQuestions",
    primary_color: "primaryColor",
    secondary_color: "secondaryColor",
    text_color: "textColor"
  };
  class va {
    constructor(e) {
      for (const s in ka) n = ka[s], (t = s) in (i = e) && (i[n] = i[t]);
      var t, n, i;
      this.startOnLoad = ba(e.startOnLoad, !0), this.shuffleAnswers = ba(e.shuffleAnswers, !0), this.shuffleQuestions = ba(e.shuffleQuestions, !1), this.nQuestions = ba(e.nQuestions, void 0), this.primaryColor = ba(e.primaryColor, "steelblue"), this.secondaryColor = ba(e.secondaryColor, "#f2f2f2"), this.textColor = ba(e.textColor, "black"), this.locale = ba(e.locale, null)
    }
  }
  var wa = {
    exports: {}
  };

  function xa() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1
    }
  }
  wa.exports = {
    defaults: {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1
    },
    getDefaults: xa,
    changeDefaults: function(e) {
      wa.exports.defaults = e
    }
  };
  const za = /[&<>"']/,
    Ea = /[&<>"']/g,
    _a = /[<>"']|&(?!#?\w+;)/,
    Ta = /[<>"']|&(?!#?\w+;)/g,
    $a = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    },
    Sa = e => $a[e];
  const Aa = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

  function Na(e) {
    return e.replace(Aa, ((e, t) => "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""))
  }
  const Oa = /(^|[^\[])\^/g;
  const La = /[^\w:]/g,
    Ia = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  const Ca = {},
    Ma = /^[^:]+:\/*[^/]*$/,
    Ra = /^([^:]+:)[\s\S]*$/,
    Pa = /^([^:]+:\/*[^/]*)[\s\S]*$/;

  function Da(e, t) {
    Ca[" " + e] || (Ma.test(e) ? Ca[" " + e] = e + "/" : Ca[" " + e] = ja(e, "/", !0));
    const n = -1 === (e = Ca[" " + e]).indexOf(":");
    return "//" === t.substring(0, 2) ? n ? t : e.replace(Ra, "$1") + t : "/" === t.charAt(0) ? n ? t : e.replace(Pa, "$1") + t : e + t
  }

  function ja(e, t, n) {
    const i = e.length;
    if (0 === i) return "";
    let s = 0;
    for (; s < i;) {
      const r = e.charAt(i - s - 1);
      if (r !== t || n) {
        if (r === t || !n) break;
        s++
      } else s++
    }
    return e.substr(0, i - s)
  }
  var qa = {
    escape: function(e, t) {
      if (t) {
        if (za.test(e)) return e.replace(Ea, Sa)
      } else if (_a.test(e)) return e.replace(Ta, Sa);
      return e
    },
    unescape: Na,
    edit: function(e, t) {
      e = e.source || e, t = t || "";
      const n = {
        replace: (t, i) => (i = (i = i.source || i).replace(Oa, "$1"), e = e.replace(t, i), n),
        getRegex: () => new RegExp(e, t)
      };
      return n
    },
    cleanUrl: function(e, t, n) {
      if (e) {
        let e;
        try {
          e = decodeURIComponent(Na(n)).replace(La, "").toLowerCase()
        } catch (e) {
          return null
        }
        if (0 === e.indexOf("javascript:") || 0 === e.indexOf("vbscript:") || 0 === e.indexOf("data:")) return null
      }
      t && !Ia.test(n) && (n = Da(t, n));
      try {
        n = encodeURI(n).replace(/%25/g, "%")
      } catch (e) {
        return null
      }
      return n
    },
    resolveUrl: Da,
    noopTest: {
      exec: function() {}
    },
    merge: function(e) {
      let t, n, i = 1;
      for (; i < arguments.length; i++)
        for (n in t = arguments[i], t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      return e
    },
    splitCells: function(e, t) {
      const n = e.replace(/\|/g, ((e, t, n) => {
        let i = !1,
          s = t;
        for (; --s >= 0 && "\\" === n[s];) i = !i;
        return i ? "|" : " |"
      })).split(/ \|/);
      let i = 0;
      if (n.length > t) n.splice(t);
      else
        for (; n.length < t;) n.push("");
      for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, "|");
      return n
    },
    rtrim: ja,
    findClosingBracket: function(e, t) {
      if (-1 === e.indexOf(t[1])) return -1;
      const n = e.length;
      let i = 0,
        s = 0;
      for (; s < n; s++)
        if ("\\" === e[s]) s++;
        else if (e[s] === t[0]) i++;
      else if (e[s] === t[1] && (i--, i < 0)) return s;
      return -1
    },
    checkSanitizeDeprecation: function(e) {
      e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
    },
    repeatString: function(e, t) {
      if (t < 1) return "";
      let n = "";
      for (; t > 1;) 1 & t && (n += e), t >>= 1, e += e;
      return n + e
    }
  };
  const {
    defaults: Ua
  } = wa.exports, {
    rtrim: Ka,
    splitCells: Ba,
    escape: Fa,
    findClosingBracket: Xa
  } = qa;

  function Ga(e, t, n) {
    const i = t.href,
      s = t.title ? Fa(t.title) : null,
      r = e[1].replace(/\\([\[\]])/g, "$1");
    return "!" !== e[0].charAt(0) ? {
      type: "link",
      raw: n,
      href: i,
      title: s,
      text: r
    } : {
      type: "image",
      raw: n,
      href: i,
      title: s,
      text: Fa(r)
    }
  }
  var Va = class {
    constructor(e) {
      this.options = e || Ua
    }
    space(e) {
      const t = this.rules.block.newline.exec(e);
      if (t) return t[0].length > 1 ? {
        type: "space",
        raw: t[0]
      } : {
        raw: "\n"
      }
    }
    code(e) {
      const t = this.rules.block.code.exec(e);
      if (t) {
        const e = t[0].replace(/^ {1,4}/gm, "");
        return {
          type: "code",
          raw: t[0],
          codeBlockStyle: "indented",
          text: this.options.pedantic ? e : Ka(e, "\n")
        }
      }
    }
    fences(e) {
      const t = this.rules.block.fences.exec(e);
      if (t) {
        const e = t[0],
          n = function(e, t) {
            const n = e.match(/^(\s+)(?:```)/);
            if (null === n) return t;
            const i = n[1];
            return t.split("\n").map((e => {
              const t = e.match(/^\s+/);
              if (null === t) return e;
              const [n] = t;
              return n.length >= i.length ? e.slice(i.length) : e
            })).join("\n")
          }(e, t[3] || "");
        return {
          type: "code",
          raw: e,
          lang: t[2] ? t[2].trim() : t[2],
          text: n
        }
      }
    }
    heading(e) {
      const t = this.rules.block.heading.exec(e);
      if (t) {
        let e = t[2].trim();
        if (/#$/.test(e)) {
          const t = Ka(e, "#");
          this.options.pedantic ? e = t.trim() : t && !/ $/.test(t) || (e = t.trim())
        }
        return {
          type: "heading",
          raw: t[0],
          depth: t[1].length,
          text: e
        }
      }
    }
    nptable(e) {
      const t = this.rules.block.nptable.exec(e);
      if (t) {
        const e = {
          type: "table",
          header: Ba(t[1].replace(/^ *| *\| *$/g, "")),
          align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : [],
          raw: t[0]
        };
        if (e.header.length === e.align.length) {
          let t, n = e.align.length;
          for (t = 0; t < n; t++) /^ *-+: *$/.test(e.align[t]) ? e.align[t] = "right" : /^ *:-+: *$/.test(e.align[t]) ? e.align[t] = "center" : /^ *:-+ *$/.test(e.align[t]) ? e.align[t] = "left" : e.align[t] = null;
          for (n = e.cells.length, t = 0; t < n; t++) e.cells[t] = Ba(e.cells[t], e.header.length);
          return e
        }
      }
    }
    hr(e) {
      const t = this.rules.block.hr.exec(e);
      if (t) return {
        type: "hr",
        raw: t[0]
      }
    }
    blockquote(e) {
      const t = this.rules.block.blockquote.exec(e);
      if (t) {
        const e = t[0].replace(/^ *> ?/gm, "");
        return {
          type: "blockquote",
          raw: t[0],
          text: e
        }
      }
    }
    list(e) {
      const t = this.rules.block.list.exec(e);
      if (t) {
        let e = t[0];
        const n = t[2],
          i = n.length > 1,
          s = {
            type: "list",
            raw: e,
            ordered: i,
            start: i ? +n.slice(0, -1) : "",
            loose: !1,
            items: []
          },
          r = t[0].match(this.rules.block.item);
        let o, a, l, c, u, f, h, p, m, d = !1,
          g = r.length;
        l = this.rules.block.listItemStart.exec(r[0]);
        for (let t = 0; t < g; t++) {
          if (o = r[t], e = o, this.options.pedantic || (m = o.match(new RegExp("\\n\\s*\\n {0," + (l[0].length - 1) + "}\\S")), m && (u = o.length - m.index + r.slice(t + 1).join("\n").length, s.raw = s.raw.substring(0, s.raw.length - u), o = o.substring(0, m.index), e = o, g = t + 1)), t !== g - 1) {
            if (c = this.rules.block.listItemStart.exec(r[t + 1]), this.options.pedantic ? c[1].length > l[1].length : c[1].length >= l[0].length || c[1].length > 3) {
              r.splice(t, 2, r[t] + (!this.options.pedantic && c[1].length < l[0].length && !r[t].match(/\n$/) ? "" : "\n") + r[t + 1]), t--, g--;
              continue
            }(!this.options.pedantic || this.options.smartLists ? c[2][c[2].length - 1] !== n[n.length - 1] : i === (1 === c[2].length)) && (u = r.slice(t + 1).join("\n").length, s.raw = s.raw.substring(0, s.raw.length - u), t = g - 1), l = c
          }
          a = o.length, o = o.replace(/^ *([*+-]|\d+[.)]) ?/, ""), ~o.indexOf("\n ") && (a -= o.length, o = this.options.pedantic ? o.replace(/^ {1,4}/gm, "") : o.replace(new RegExp("^ {1," + a + "}", "gm"), "")), o = Ka(o, "\n"), t !== g - 1 && (e += "\n"), f = d || /\n\n(?!\s*$)/.test(e), t !== g - 1 && (d = "\n\n" === e.slice(-2), f || (f = d)), f && (s.loose = !0), this.options.gfm && (h = /^\[[ xX]\] /.test(o), p = void 0, h && (p = " " !== o[1], o = o.replace(/^\[[ xX]\] +/, ""))), s.items.push({
            type: "list_item",
            raw: e,
            task: h,
            checked: p,
            loose: f,
            text: o
          })
        }
        return s
      }
    }
    html(e) {
      const t = this.rules.block.html.exec(e);
      if (t) return {
        type: this.options.sanitize ? "paragraph" : "html",
        raw: t[0],
        pre: !this.options.sanitizer && ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(t[0]) : Fa(t[0]) : t[0]
      }
    }
    def(e) {
      const t = this.rules.block.def.exec(e);
      if (t) {
        t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
        return {
          type: "def",
          tag: t[1].toLowerCase().replace(/\s+/g, " "),
          raw: t[0],
          href: t[2],
          title: t[3]
        }
      }
    }
    table(e) {
      const t = this.rules.block.table.exec(e);
      if (t) {
        const e = {
          type: "table",
          header: Ba(t[1].replace(/^ *| *\| *$/g, "")),
          align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
          cells: t[3] ? t[3].replace(/\n$/, "").split("\n") : []
        };
        if (e.header.length === e.align.length) {
          e.raw = t[0];
          let n, i = e.align.length;
          for (n = 0; n < i; n++) /^ *-+: *$/.test(e.align[n]) ? e.align[n] = "right" : /^ *:-+: *$/.test(e.align[n]) ? e.align[n] = "center" : /^ *:-+ *$/.test(e.align[n]) ? e.align[n] = "left" : e.align[n] = null;
          for (i = e.cells.length, n = 0; n < i; n++) e.cells[n] = Ba(e.cells[n].replace(/^ *\| *| *\| *$/g, ""), e.header.length);
          return e
        }
      }
    }
    lheading(e) {
      const t = this.rules.block.lheading.exec(e);
      if (t) return {
        type: "heading",
        raw: t[0],
        depth: "=" === t[2].charAt(0) ? 1 : 2,
        text: t[1]
      }
    }
    paragraph(e) {
      const t = this.rules.block.paragraph.exec(e);
      if (t) return {
        type: "paragraph",
        raw: t[0],
        text: "\n" === t[1].charAt(t[1].length - 1) ? t[1].slice(0, -1) : t[1]
      }
    }
    text(e) {
      const t = this.rules.block.text.exec(e);
      if (t) return {
        type: "text",
        raw: t[0],
        text: t[0]
      }
    }
    escape(e) {
      const t = this.rules.inline.escape.exec(e);
      if (t) return {
        type: "escape",
        raw: t[0],
        text: Fa(t[1])
      }
    }
    tag(e, t, n) {
      const i = this.rules.inline.tag.exec(e);
      if (i) return !t && /^<a /i.test(i[0]) ? t = !0 : t && /^<\/a>/i.test(i[0]) && (t = !1), !n && /^<(pre|code|kbd|script)(\s|>)/i.test(i[0]) ? n = !0 : n && /^<\/(pre|code|kbd|script)(\s|>)/i.test(i[0]) && (n = !1), {
        type: this.options.sanitize ? "text" : "html",
        raw: i[0],
        inLink: t,
        inRawBlock: n,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : Fa(i[0]) : i[0]
      }
    }
    link(e) {
      const t = this.rules.inline.link.exec(e);
      if (t) {
        const e = t[2].trim();
        if (!this.options.pedantic && /^</.test(e)) {
          if (!/>$/.test(e)) return;
          const t = Ka(e.slice(0, -1), "\\");
          if ((e.length - t.length) % 2 == 0) return
        } else {
          const e = Xa(t[2], "()");
          if (e > -1) {
            const n = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + e;
            t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = ""
          }
        }
        let n = t[2],
          i = "";
        if (this.options.pedantic) {
          const e = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(n);
          e && (n = e[1], i = e[3])
        } else i = t[3] ? t[3].slice(1, -1) : "";
        return n = n.trim(), /^</.test(n) && (n = this.options.pedantic && !/>$/.test(e) ? n.slice(1) : n.slice(1, -1)), Ga(t, {
          href: n ? n.replace(this.rules.inline._escapes, "$1") : n,
          title: i ? i.replace(this.rules.inline._escapes, "$1") : i
        }, t[0])
      }
    }
    reflink(e, t) {
      let n;
      if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
        let e = (n[2] || n[1]).replace(/\s+/g, " ");
        if (e = t[e.toLowerCase()], !e || !e.href) {
          const e = n[0].charAt(0);
          return {
            type: "text",
            raw: e,
            text: e
          }
        }
        return Ga(n, e, n[0])
      }
    }
    emStrong(e, t, n = "") {
      let i = this.rules.inline.emStrong.lDelim.exec(e);
      if (!i) return;
      if (i[3] && n.match(/[\p{L}\p{N}]/u)) return;
      const s = i[1] || i[2] || "";
      if (!s || s && ("" === n || this.rules.inline.punctuation.exec(n))) {
        const n = i[0].length - 1;
        let s, r, o = n,
          a = 0;
        const l = "*" === i[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
        for (l.lastIndex = 0, t = t.slice(-1 * e.length + n); null != (i = l.exec(t));)
          if (s = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], s)
            if (r = s.length, i[3] || i[4]) o += r;
            else if (!((i[5] || i[6]) && n % 3) || (n + r) % 3) {
          if (o -= r, !(o > 0)) return r = Math.min(r, r + o + a), Math.min(n, r) % 2 ? {
            type: "em",
            raw: e.slice(0, n + i.index + r + 1),
            text: e.slice(1, n + i.index + r)
          } : {
            type: "strong",
            raw: e.slice(0, n + i.index + r + 1),
            text: e.slice(2, n + i.index + r - 1)
          }
        } else a += r
      }
    }
    codespan(e) {
      const t = this.rules.inline.code.exec(e);
      if (t) {
        let e = t[2].replace(/\n/g, " ");
        const n = /[^ ]/.test(e),
          i = /^ /.test(e) && / $/.test(e);
        return n && i && (e = e.substring(1, e.length - 1)), e = Fa(e, !0), {
          type: "codespan",
          raw: t[0],
          text: e
        }
      }
    }
    br(e) {
      const t = this.rules.inline.br.exec(e);
      if (t) return {
        type: "br",
        raw: t[0]
      }
    }
    del(e) {
      const t = this.rules.inline.del.exec(e);
      if (t) return {
        type: "del",
        raw: t[0],
        text: t[2]
      }
    }
    autolink(e, t) {
      const n = this.rules.inline.autolink.exec(e);
      if (n) {
        let e, i;
        return "@" === n[2] ? (e = Fa(this.options.mangle ? t(n[1]) : n[1]), i = "mailto:" + e) : (e = Fa(n[1]), i = e), {
          type: "link",
          raw: n[0],
          text: e,
          href: i,
          tokens: [{
            type: "text",
            raw: e,
            text: e
          }]
        }
      }
    }
    url(e, t) {
      let n;
      if (n = this.rules.inline.url.exec(e)) {
        let e, i;
        if ("@" === n[2]) e = Fa(this.options.mangle ? t(n[0]) : n[0]), i = "mailto:" + e;
        else {
          let t;
          do {
            t = n[0], n[0] = this.rules.inline._backpedal.exec(n[0])[0]
          } while (t !== n[0]);
          e = Fa(n[0]), i = "www." === n[1] ? "http://" + e : e
        }
        return {
          type: "link",
          raw: n[0],
          text: e,
          href: i,
          tokens: [{
            type: "text",
            raw: e,
            text: e
          }]
        }
      }
    }
    inlineText(e, t, n) {
      const i = this.rules.inline.text.exec(e);
      if (i) {
        let e;
        return e = t ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : Fa(i[0]) : i[0] : Fa(this.options.smartypants ? n(i[0]) : i[0]), {
          type: "text",
          raw: i[0],
          text: e
        }
      }
    }
  };
  const {
    noopTest: Ha,
    edit: Wa,
    merge: Ya
  } = qa, Ja = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: Ha,
    table: Ha,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
  };
  Ja.def = Wa(Ja.def).replace("label", Ja._label).replace("title", Ja._title).getRegex(), Ja.bullet = /(?:[*+-]|\d{1,9}[.)])/, Ja.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/, Ja.item = Wa(Ja.item, "gm").replace(/bull/g, Ja.bullet).getRegex(), Ja.listItemStart = Wa(/^( *)(bull) */).replace("bull", Ja.bullet).getRegex(), Ja.list = Wa(Ja.list).replace(/bull/g, Ja.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Ja.def.source + ")").getRegex(), Ja._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ja._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, Ja.html = Wa(Ja.html, "i").replace("comment", Ja._comment).replace("tag", Ja._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ja.paragraph = Wa(Ja._paragraph).replace("hr", Ja.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja._tag).getRegex(), Ja.blockquote = Wa(Ja.blockquote).replace("paragraph", Ja.paragraph).getRegex(), Ja.normal = Ya({}, Ja), Ja.gfm = Ya({}, Ja.normal, {
    nptable: "^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    table: "^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
  }), Ja.gfm.nptable = Wa(Ja.gfm.nptable).replace("hr", Ja.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja._tag).getRegex(), Ja.gfm.table = Wa(Ja.gfm.table).replace("hr", Ja.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja._tag).getRegex(), Ja.pedantic = Ya({}, Ja.normal, {
    html: Wa("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Ja._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: Ha,
    paragraph: Wa(Ja.normal._paragraph).replace("hr", Ja.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Ja.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
  });
  const Za = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: Ha,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst: /\_\_[^_*]*?\*[^_*]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd: /\*\*[^_*]*?\_[^_*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: Ha,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
    _punctuation: "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"
  };
  Za.punctuation = Wa(Za.punctuation).replace(/punctuation/g, Za._punctuation).getRegex(), Za.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, Za.escapedEmSt = /\\\*|\\_/g, Za._comment = Wa(Ja._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), Za.emStrong.lDelim = Wa(Za.emStrong.lDelim).replace(/punct/g, Za._punctuation).getRegex(), Za.emStrong.rDelimAst = Wa(Za.emStrong.rDelimAst, "g").replace(/punct/g, Za._punctuation).getRegex(), Za.emStrong.rDelimUnd = Wa(Za.emStrong.rDelimUnd, "g").replace(/punct/g, Za._punctuation).getRegex(), Za._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, Za._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, Za._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, Za.autolink = Wa(Za.autolink).replace("scheme", Za._scheme).replace("email", Za._email).getRegex(), Za._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, Za.tag = Wa(Za.tag).replace("comment", Za._comment).replace("attribute", Za._attribute).getRegex(), Za._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, Za._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, Za._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, Za.link = Wa(Za.link).replace("label", Za._label).replace("href", Za._href).replace("title", Za._title).getRegex(), Za.reflink = Wa(Za.reflink).replace("label", Za._label).getRegex(), Za.reflinkSearch = Wa(Za.reflinkSearch, "g").replace("reflink", Za.reflink).replace("nolink", Za.nolink).getRegex(), Za.normal = Ya({}, Za), Za.pedantic = Ya({}, Za.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: Wa(/^!?\[(label)\]\((.*?)\)/).replace("label", Za._label).getRegex(),
    reflink: Wa(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Za._label).getRegex()
  }), Za.gfm = Ya({}, Za.normal, {
    escape: Wa(Za.escape).replace("])", "~|])").getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
  }), Za.gfm.url = Wa(Za.gfm.url, "i").replace("email", Za.gfm._extended_email).getRegex(), Za.breaks = Ya({}, Za.gfm, {
    br: Wa(Za.br).replace("{2,}", "*").getRegex(),
    text: Wa(Za.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
  });
  var Qa = {
    block: Ja,
    inline: Za
  };
  const el = Va,
    {
      defaults: tl
    } = wa.exports,
    {
      block: nl,
      inline: il
    } = Qa,
    {
      repeatString: sl
    } = qa;

  function rl(e) {
    return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
  }

  function ol(e) {
    let t, n, i = "";
    const s = e.length;
    for (t = 0; t < s; t++) n = e.charCodeAt(t), Math.random() > .5 && (n = "x" + n.toString(16)), i += "&#" + n + ";";
    return i
  }
  const {
    defaults: al
  } = wa.exports, {
    cleanUrl: ll,
    escape: cl
  } = qa;
  var ul = class {
      constructor(e) {
        this.options = e || al
      }
      code(e, t, n) {
        const i = (t || "").match(/\S*/)[0];
        if (this.options.highlight) {
          const t = this.options.highlight(e, i);
          null != t && t !== e && (n = !0, e = t)
        }
        return e = e.replace(/\n$/, "") + "\n", i ? '<pre><code class="' + this.options.langPrefix + cl(i, !0) + '">' + (n ? e : cl(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : cl(e, !0)) + "</code></pre>\n"
      }
      blockquote(e) {
        return "<blockquote>\n" + e + "</blockquote>\n"
      }
      html(e) {
        return e
      }
      heading(e, t, n, i) {
        return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + i.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n"
      }
      hr() {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
      }
      list(e, t, n) {
        const i = t ? "ol" : "ul";
        return "<" + i + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + i + ">\n"
      }
      listitem(e) {
        return "<li>" + e + "</li>\n"
      }
      checkbox(e) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
      }
      paragraph(e) {
        return "<p>" + e + "</p>\n"
      }
      table(e, t) {
        return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
      }
      tablerow(e) {
        return "<tr>\n" + e + "</tr>\n"
      }
      tablecell(e, t) {
        const n = t.header ? "th" : "td";
        return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n"
      }
      strong(e) {
        return "<strong>" + e + "</strong>"
      }
      em(e) {
        return "<em>" + e + "</em>"
      }
      codespan(e) {
        return "<code>" + e + "</code>"
      }
      br() {
        return this.options.xhtml ? "<br/>" : "<br>"
      }
      del(e) {
        return "<del>" + e + "</del>"
      }
      link(e, t, n) {
        if (null === (e = ll(this.options.sanitize, this.options.baseUrl, e))) return n;
        let i = '<a href="' + cl(e) + '"';
        return t && (i += ' title="' + t + '"'), i += ">" + n + "</a>", i
      }
      image(e, t, n) {
        if (null === (e = ll(this.options.sanitize, this.options.baseUrl, e))) return n;
        let i = '<img src="' + e + '" alt="' + n + '"';
        return t && (i += ' title="' + t + '"'), i += this.options.xhtml ? "/>" : ">", i
      }
      text(e) {
        return e
      }
    },
    fl = class {
      strong(e) {
        return e
      }
      em(e) {
        return e
      }
      codespan(e) {
        return e
      }
      del(e) {
        return e
      }
      html(e) {
        return e
      }
      text(e) {
        return e
      }
      link(e, t, n) {
        return "" + n
      }
      image(e, t, n) {
        return "" + n
      }
      br() {
        return ""
      }
    },
    hl = class {
      constructor() {
        this.seen = {}
      }
      serialize(e) {
        return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
      }
      getNextSafeSlug(e, t) {
        let n = e,
          i = 0;
        if (this.seen.hasOwnProperty(n)) {
          i = this.seen[e];
          do {
            i++, n = e + "-" + i
          } while (this.seen.hasOwnProperty(n))
        }
        return t || (this.seen[e] = i, this.seen[n] = 0), n
      }
      slug(e, t = {}) {
        const n = this.serialize(e);
        return this.getNextSafeSlug(n, t.dryrun)
      }
    };
  const pl = ul,
    ml = fl,
    dl = hl,
    {
      defaults: gl
    } = wa.exports,
    {
      unescape: yl
    } = qa;
  const bl = class e {
      constructor(e) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || tl, this.options.tokenizer = this.options.tokenizer || new el, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options;
        const t = {
          block: nl.normal,
          inline: il.normal
        };
        this.options.pedantic ? (t.block = nl.pedantic, t.inline = il.pedantic) : this.options.gfm && (t.block = nl.gfm, this.options.breaks ? t.inline = il.breaks : t.inline = il.gfm), this.tokenizer.rules = t
      }
      static get rules() {
        return {
          block: nl,
          inline: il
        }
      }
      static lex(t, n) {
        return new e(n).lex(t)
      }
      static lexInline(t, n) {
        return new e(n).inlineTokens(t)
      }
      lex(e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "), this.blockTokens(e, this.tokens, !0), this.inline(this.tokens), this.tokens
      }
      blockTokens(e, t = [], n = !0) {
        let i, s, r, o, a, l;
        for (this.options.pedantic && (e = e.replace(/^ +$/gm, "")); e;)
          if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((n => !!(i = n.call(this, e, t)) && (e = e.substring(i.raw.length), t.push(i), !0)))))
            if (i = this.tokenizer.space(e)) e = e.substring(i.raw.length), i.type && t.push(i);
            else if (i = this.tokenizer.code(e)) e = e.substring(i.raw.length), o = t[t.length - 1], o && "paragraph" === o.type ? (o.raw += "\n" + i.raw, o.text += "\n" + i.text) : t.push(i);
        else if (i = this.tokenizer.fences(e)) e = e.substring(i.raw.length), t.push(i);
        else if (i = this.tokenizer.heading(e)) e = e.substring(i.raw.length), t.push(i);
        else if (i = this.tokenizer.nptable(e)) e = e.substring(i.raw.length), t.push(i);
        else if (i = this.tokenizer.hr(e)) e = e.substring(i.raw.length), t.push(i);
        else if (i = this.tokenizer.blockquote(e)) e = e.substring(i.raw.length), i.tokens = this.blockTokens(i.text, [], n), t.push(i);
        else if (i = this.tokenizer.list(e)) {
          for (e = e.substring(i.raw.length), r = i.items.length, s = 0; s < r; s++) i.items[s].tokens = this.blockTokens(i.items[s].text, [], !1);
          t.push(i)
        } else if (i = this.tokenizer.html(e)) e = e.substring(i.raw.length), t.push(i);
        else if (n && (i = this.tokenizer.def(e))) e = e.substring(i.raw.length), this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
          href: i.href,
          title: i.title
        });
        else if (i = this.tokenizer.table(e)) e = e.substring(i.raw.length), t.push(i);
        else if (i = this.tokenizer.lheading(e)) e = e.substring(i.raw.length), t.push(i);
        else {
          if (a = e, this.options.extensions && this.options.extensions.startBlock) {
            let t = 1 / 0;
            const n = e.slice(1);
            let i;
            this.options.extensions.startBlock.forEach((function(e) {
              i = e.call(this, n), "number" == typeof i && i >= 0 && (t = Math.min(t, i))
            })), t < 1 / 0 && t >= 0 && (a = e.substring(0, t + 1))
          }
          if (n && (i = this.tokenizer.paragraph(a))) o = t[t.length - 1], l && "paragraph" === o.type ? (o.raw += "\n" + i.raw, o.text += "\n" + i.text) : t.push(i), l = a.length !== e.length, e = e.substring(i.raw.length);
          else if (i = this.tokenizer.text(e)) e = e.substring(i.raw.length), o = t[t.length - 1], o && "text" === o.type ? (o.raw += "\n" + i.raw, o.text += "\n" + i.text) : t.push(i);
          else if (e) {
            const t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break
            }
            throw new Error(t)
          }
        }
        return t
      }
      inline(e) {
        let t, n, i, s, r, o;
        const a = e.length;
        for (t = 0; t < a; t++) switch (o = e[t], o.type) {
          case "paragraph":
          case "text":
          case "heading":
            o.tokens = [], this.inlineTokens(o.text, o.tokens);
            break;
          case "table":
            for (o.tokens = {
                header: [],
                cells: []
              }, s = o.header.length, n = 0; n < s; n++) o.tokens.header[n] = [], this.inlineTokens(o.header[n], o.tokens.header[n]);
            for (s = o.cells.length, n = 0; n < s; n++)
              for (r = o.cells[n], o.tokens.cells[n] = [], i = 0; i < r.length; i++) o.tokens.cells[n][i] = [], this.inlineTokens(r[i], o.tokens.cells[n][i]);
            break;
          case "blockquote":
            this.inline(o.tokens);
            break;
          case "list":
            for (s = o.items.length, n = 0; n < s; n++) this.inline(o.items[n].tokens)
        }
        return e
      }
      inlineTokens(e, t = [], n = !1, i = !1) {
        let s, r, o, a, l, c, u = e;
        if (this.tokens.links) {
          const e = Object.keys(this.tokens.links);
          if (e.length > 0)
            for (; null != (a = this.tokenizer.rules.inline.reflinkSearch.exec(u));) e.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (u = u.slice(0, a.index) + "[" + sl("a", a[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
        }
        for (; null != (a = this.tokenizer.rules.inline.blockSkip.exec(u));) u = u.slice(0, a.index) + "[" + sl("a", a[0].length - 2) + "]" + u.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; null != (a = this.tokenizer.rules.inline.escapedEmSt.exec(u));) u = u.slice(0, a.index) + "++" + u.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
        for (; e;)
          if (l || (c = ""), l = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((n => !!(s = n.call(this, e, t)) && (e = e.substring(s.raw.length), t.push(s), !0)))))
            if (s = this.tokenizer.escape(e)) e = e.substring(s.raw.length), t.push(s);
            else if (s = this.tokenizer.tag(e, n, i)) e = e.substring(s.raw.length), n = s.inLink, i = s.inRawBlock, r = t[t.length - 1], r && "text" === s.type && "text" === r.type ? (r.raw += s.raw, r.text += s.text) : t.push(s);
        else if (s = this.tokenizer.link(e)) e = e.substring(s.raw.length), "link" === s.type && (s.tokens = this.inlineTokens(s.text, [], !0, i)), t.push(s);
        else if (s = this.tokenizer.reflink(e, this.tokens.links)) e = e.substring(s.raw.length), r = t[t.length - 1], "link" === s.type ? (s.tokens = this.inlineTokens(s.text, [], !0, i), t.push(s)) : r && "text" === s.type && "text" === r.type ? (r.raw += s.raw, r.text += s.text) : t.push(s);
        else if (s = this.tokenizer.emStrong(e, u, c)) e = e.substring(s.raw.length), s.tokens = this.inlineTokens(s.text, [], n, i), t.push(s);
        else if (s = this.tokenizer.codespan(e)) e = e.substring(s.raw.length), t.push(s);
        else if (s = this.tokenizer.br(e)) e = e.substring(s.raw.length), t.push(s);
        else if (s = this.tokenizer.del(e)) e = e.substring(s.raw.length), s.tokens = this.inlineTokens(s.text, [], n, i), t.push(s);
        else if (s = this.tokenizer.autolink(e, ol)) e = e.substring(s.raw.length), t.push(s);
        else if (n || !(s = this.tokenizer.url(e, ol))) {
          if (o = e, this.options.extensions && this.options.extensions.startInline) {
            let t = 1 / 0;
            const n = e.slice(1);
            let i;
            this.options.extensions.startInline.forEach((function(e) {
              i = e.call(this, n), "number" == typeof i && i >= 0 && (t = Math.min(t, i))
            })), t < 1 / 0 && t >= 0 && (o = e.substring(0, t + 1))
          }
          if (s = this.tokenizer.inlineText(o, i, rl)) e = e.substring(s.raw.length), "_" !== s.raw.slice(-1) && (c = s.raw.slice(-1)), l = !0, r = t[t.length - 1], r && "text" === r.type ? (r.raw += s.raw, r.text += s.text) : t.push(s);
          else if (e) {
            const t = "Infinite loop on byte: " + e.charCodeAt(0);
            if (this.options.silent) {
              console.error(t);
              break
            }
            throw new Error(t)
          }
        } else e = e.substring(s.raw.length), t.push(s);
        return t
      }
    },
    kl = class e {
      constructor(e) {
        this.options = e || gl, this.options.renderer = this.options.renderer || new pl, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new ml, this.slugger = new dl
      }
      static parse(t, n) {
        return new e(n).parse(t)
      }
      static parseInline(t, n) {
        return new e(n).parseInline(t)
      }
      parse(e, t = !0) {
        let n, i, s, r, o, a, l, c, u, f, h, p, m, d, g, y, b, k, v, w = "";
        const x = e.length;
        for (n = 0; n < x; n++)
          if (f = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[f.type] && (v = this.options.extensions.renderers[f.type].call(this, f), !1 !== v || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(f.type))) w += v || "";
          else switch (f.type) {
            case "space":
              continue;
            case "hr":
              w += this.renderer.hr();
              continue;
            case "heading":
              w += this.renderer.heading(this.parseInline(f.tokens), f.depth, yl(this.parseInline(f.tokens, this.textRenderer)), this.slugger);
              continue;
            case "code":
              w += this.renderer.code(f.text, f.lang, f.escaped);
              continue;
            case "table":
              for (c = "", l = "", r = f.header.length, i = 0; i < r; i++) l += this.renderer.tablecell(this.parseInline(f.tokens.header[i]), {
                header: !0,
                align: f.align[i]
              });
              for (c += this.renderer.tablerow(l), u = "", r = f.cells.length, i = 0; i < r; i++) {
                for (a = f.tokens.cells[i], l = "", o = a.length, s = 0; s < o; s++) l += this.renderer.tablecell(this.parseInline(a[s]), {
                  header: !1,
                  align: f.align[s]
                });
                u += this.renderer.tablerow(l)
              }
              w += this.renderer.table(c, u);
              continue;
            case "blockquote":
              u = this.parse(f.tokens), w += this.renderer.blockquote(u);
              continue;
            case "list":
              for (h = f.ordered, p = f.start, m = f.loose, r = f.items.length, u = "", i = 0; i < r; i++) g = f.items[i], y = g.checked, b = g.task, d = "", g.task && (k = this.renderer.checkbox(y), m ? g.tokens.length > 0 && "text" === g.tokens[0].type ? (g.tokens[0].text = k + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = k + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
                type: "text",
                text: k
              }) : d += k), d += this.parse(g.tokens, m), u += this.renderer.listitem(d, b, y);
              w += this.renderer.list(u, h, p);
              continue;
            case "html":
              w += this.renderer.html(f.text);
              continue;
            case "paragraph":
              w += this.renderer.paragraph(this.parseInline(f.tokens));
              continue;
            case "text":
              for (u = f.tokens ? this.parseInline(f.tokens) : f.text; n + 1 < x && "text" === e[n + 1].type;) f = e[++n], u += "\n" + (f.tokens ? this.parseInline(f.tokens) : f.text);
              w += t ? this.renderer.paragraph(u) : u;
              continue;
            default: {
              const e = 'Token with "' + f.type + '" type was not found.';
              if (this.options.silent) return void console.error(e);
              throw new Error(e)
            }
          }
        return w
      }
      parseInline(e, t) {
        t = t || this.renderer;
        let n, i, s, r = "";
        const o = e.length;
        for (n = 0; n < o; n++)
          if (i = e[n], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[i.type] && (s = this.options.extensions.renderers[i.type].call(this, i), !1 !== s || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type))) r += s || "";
          else switch (i.type) {
            case "escape":
              r += t.text(i.text);
              break;
            case "html":
              r += t.html(i.text);
              break;
            case "link":
              r += t.link(i.href, i.title, this.parseInline(i.tokens, t));
              break;
            case "image":
              r += t.image(i.href, i.title, i.text);
              break;
            case "strong":
              r += t.strong(this.parseInline(i.tokens, t));
              break;
            case "em":
              r += t.em(this.parseInline(i.tokens, t));
              break;
            case "codespan":
              r += t.codespan(i.text);
              break;
            case "br":
              r += t.br();
              break;
            case "del":
              r += t.del(this.parseInline(i.tokens, t));
              break;
            case "text":
              r += t.text(i.text);
              break;
            default: {
              const e = 'Token with "' + i.type + '" type was not found.';
              if (this.options.silent) return void console.error(e);
              throw new Error(e)
            }
          }
        return r
      }
    },
    vl = Va,
    wl = ul,
    xl = fl,
    zl = hl,
    {
      merge: El,
      checkSanitizeDeprecation: _l,
      escape: Tl
    } = qa,
    {
      getDefaults: $l,
      changeDefaults: Sl,
      defaults: Al
    } = wa.exports;

  function Nl(e, t, n) {
    if (null == e) throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    if ("function" == typeof t && (n = t, t = null), t = El({}, Nl.defaults, t || {}), _l(t), n) {
      const i = t.highlight;
      let s;
      try {
        s = bl.lex(e, t)
      } catch (e) {
        return n(e)
      }
      const r = function(e) {
        let r;
        if (!e) try {
          t.walkTokens && Nl.walkTokens(s, t.walkTokens), r = kl.parse(s, t)
        } catch (t) {
          e = t
        }
        return t.highlight = i, e ? n(e) : n(null, r)
      };
      if (!i || i.length < 3) return r();
      if (delete t.highlight, !s.length) return r();
      let o = 0;
      return Nl.walkTokens(s, (function(e) {
        "code" === e.type && (o++, setTimeout((() => {
          i(e.text, e.lang, (function(t, n) {
            if (t) return r(t);
            null != n && n !== e.text && (e.text = n, e.escaped = !0), o--, 0 === o && r()
          }))
        }), 0))
      })), void(0 === o && r())
    }
    try {
      const n = bl.lex(e, t);
      return t.walkTokens && Nl.walkTokens(n, t.walkTokens), kl.parse(n, t)
    } catch (e) {
      if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Tl(e.message + "", !0) + "</pre>";
      throw e
    }
  }
  Nl.options = Nl.setOptions = function(e) {
    return El(Nl.defaults, e), Sl(Nl.defaults), Nl
  }, Nl.getDefaults = $l, Nl.defaults = Al, Nl.use = function(...e) {
    const t = El({}, ...e),
      n = Nl.defaults.extensions || {
        renderers: {},
        childTokens: {}
      };
    let i;
    e.forEach((e => {
      if (e.extensions && (i = !0, e.extensions.forEach((e => {
          if (!e.name) throw new Error("extension name required");
          if (e.renderer) {
            const t = n.renderers ? n.renderers[e.name] : null;
            n.renderers[e.name] = t ? function(...n) {
              let i = e.renderer.apply(this, n);
              return !1 === i && (i = t.apply(this, n)), i
            } : e.renderer
          }
          if (e.tokenizer) {
            if (!e.level || "block" !== e.level && "inline" !== e.level) throw new Error("extension level must be 'block' or 'inline'");
            n[e.level] ? n[e.level].unshift(e.tokenizer) : n[e.level] = [e.tokenizer], e.start && ("block" === e.level ? n.startBlock ? n.startBlock.push(e.start) : n.startBlock = [e.start] : "inline" === e.level && (n.startInline ? n.startInline.push(e.start) : n.startInline = [e.start]))
          }
          e.childTokens && (n.childTokens[e.name] = e.childTokens)
        }))), e.renderer) {
        const n = Nl.defaults.renderer || new wl;
        for (const t in e.renderer) {
          const i = n[t];
          n[t] = (...s) => {
            let r = e.renderer[t].apply(n, s);
            return !1 === r && (r = i.apply(n, s)), r
          }
        }
        t.renderer = n
      }
      if (e.tokenizer) {
        const n = Nl.defaults.tokenizer || new vl;
        for (const t in e.tokenizer) {
          const i = n[t];
          n[t] = (...s) => {
            let r = e.tokenizer[t].apply(n, s);
            return !1 === r && (r = i.apply(n, s)), r
          }
        }
        t.tokenizer = n
      }
      if (e.walkTokens) {
        const n = Nl.defaults.walkTokens;
        t.walkTokens = t => {
          e.walkTokens.call(this, t), n && n(t)
        }
      }
      i && (t.extensions = n), Nl.setOptions(t)
    }))
  }, Nl.walkTokens = function(e, t) {
    for (const n of e) switch (t(n), n.type) {
      case "table":
        for (const e of n.tokens.header) Nl.walkTokens(e, t);
        for (const e of n.tokens.cells)
          for (const n of e) Nl.walkTokens(n, t);
        break;
      case "list":
        Nl.walkTokens(n.items, t);
        break;
      default:
        Nl.defaults.extensions && Nl.defaults.extensions.childTokens && Nl.defaults.extensions.childTokens[n.type] ? Nl.defaults.extensions.childTokens[n.type].forEach((function(e) {
          Nl.walkTokens(n[e], t)
        })) : n.tokens && Nl.walkTokens(n.tokens, t)
    }
  }, Nl.parseInline = function(e, t) {
    if (null == e) throw new Error("marked.parseInline(): input parameter is undefined or null");
    if ("string" != typeof e) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");
    t = El({}, Nl.defaults, t || {}), _l(t);
    try {
      const n = bl.lexInline(e, t);
      return t.walkTokens && Nl.walkTokens(n, t.walkTokens), kl.parseInline(n, t)
    } catch (e) {
      if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", t.silent) return "<p>An error occurred:</p><pre>" + Tl(e.message + "", !0) + "</pre>";
      throw e
    }
  }, Nl.Parser = kl, Nl.parser = kl.parse, Nl.Renderer = wl, Nl.TextRenderer = xl, Nl.Lexer = bl, Nl.lexer = bl.lex, Nl.Tokenizer = vl, Nl.Slugger = zl, Nl.parse = Nl;
  var Ol = Nl;
  const Ll = Symbol.for("yaml.alias"),
    Il = Symbol.for("yaml.document"),
    Cl = Symbol.for("yaml.map"),
    Ml = Symbol.for("yaml.pair"),
    Rl = Symbol.for("yaml.scalar"),
    Pl = Symbol.for("yaml.seq"),
    Dl = Symbol.for("yaml.node.type"),
    jl = e => !!e && "object" == typeof e && e[Dl] === Ll,
    ql = e => !!e && "object" == typeof e && e[Dl] === Il,
    Ul = e => !!e && "object" == typeof e && e[Dl] === Cl,
    Kl = e => !!e && "object" == typeof e && e[Dl] === Ml,
    Bl = e => !!e && "object" == typeof e && e[Dl] === Rl,
    Fl = e => !!e && "object" == typeof e && e[Dl] === Pl;

  function Xl(e) {
    if (e && "object" == typeof e) switch (e[Dl]) {
      case Cl:
      case Pl:
        return !0
    }
    return !1
  }

  function Gl(e) {
    if (e && "object" == typeof e) switch (e[Dl]) {
      case Ll:
      case Cl:
      case Rl:
      case Pl:
        return !0
    }
    return !1
  }
  class Vl {
    constructor(e) {
      Object.defineProperty(this, Dl, {
        value: e
      })
    }
  }
  const Hl = Symbol("break visit"),
    Wl = Symbol("skip children"),
    Yl = Symbol("remove node");

  function Jl(e, t) {
    if ("object" == typeof t && (t.Collection || t.Node || t.Value) && (t = Object.assign({
        Alias: t.Node,
        Map: t.Node,
        Scalar: t.Node,
        Seq: t.Node
      }, t.Value && {
        Map: t.Value,
        Scalar: t.Value,
        Seq: t.Value
      }, t.Collection && {
        Map: t.Collection,
        Seq: t.Collection
      }, t)), ql(e)) {
      Zl(null, e.contents, t, Object.freeze([e])) === Yl && (e.contents = null)
    } else Zl(null, e, t, Object.freeze([]))
  }

  function Zl(e, t, n, i) {
    let s;
    if ("function" == typeof n ? s = n(e, t, i) : Ul(t) ? n.Map && (s = n.Map(e, t, i)) : Fl(t) ? n.Seq && (s = n.Seq(e, t, i)) : Kl(t) ? n.Pair && (s = n.Pair(e, t, i)) : Bl(t) ? n.Scalar && (s = n.Scalar(e, t, i)) : jl(t) && n.Alias && (s = n.Alias(e, t, i)), Gl(s) || Kl(s)) {
      const t = i[i.length - 1];
      if (Xl(t)) t.items[e] = s;
      else if (Kl(t)) "key" === e ? t.key = s : t.value = s;
      else {
        if (!ql(t)) {
          const e = jl(t) ? "alias" : "scalar";
          throw new Error(`Cannot replace node with ${e} parent`)
        }
        t.contents = s
      }
      return Zl(e, s, n, i)
    }
    if ("symbol" != typeof s)
      if (Xl(t)) {
        i = Object.freeze(i.concat(t));
        for (let e = 0; e < t.items.length; ++e) {
          const s = Zl(e, t.items[e], n, i);
          if ("number" == typeof s) e = s - 1;
          else {
            if (s === Hl) return Hl;
            s === Yl && (t.items.splice(e, 1), e -= 1)
          }
        }
      } else if (Kl(t)) {
      i = Object.freeze(i.concat(t));
      const e = Zl("key", t.key, n, i);
      if (e === Hl) return Hl;
      e === Yl && (t.key = null);
      const s = Zl("value", t.value, n, i);
      if (s === Hl) return Hl;
      s === Yl && (t.value = null)
    }
    return s
  }
  Jl.BREAK = Hl, Jl.SKIP = Wl, Jl.REMOVE = Yl;
  const Ql = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
  };
  class ec {
    constructor(e, t) {
      this.marker = null, this.yaml = Object.assign({}, ec.defaultYaml, e), this.tags = Object.assign({}, ec.defaultTags, t)
    }
    atDocument() {
      const e = new ec(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = !0;
          break;
        case "1.2":
          this.atNextDocument = !1, this.yaml = {
            explicit: ec.defaultYaml.explicit,
            version: "1.2"
          }, this.tags = Object.assign({}, ec.defaultTags)
      }
      return e
    }
    add(e, t) {
      this.atNextDocument && (this.yaml = {
        explicit: ec.defaultYaml.explicit,
        version: "1.1"
      }, this.tags = Object.assign({}, ec.defaultTags), this.atNextDocument = !1);
      const n = e.trim().split(/[ \t]+/),
        i = n.shift();
      switch (i) {
        case "%TAG": {
          if (2 !== n.length && (t(0, "%TAG directive should contain exactly two parts"), n.length < 2)) return !1;
          const [e, i] = n;
          return this.tags[e] = i, !0
        }
        case "%YAML": {
          if (this.yaml.explicit = !0, n.length < 1) return t(0, "%YAML directive should contain exactly one part"), !1;
          const [e] = n;
          return "1.1" === e || "1.2" === e ? (this.yaml.version = e, !0) : (t(6, `Unsupported YAML version ${e}`, !0), !1)
        }
        default:
          return t(0, `Unknown directive ${i}`, !0), !1
      }
    }
    tagName(e, t) {
      if ("!" === e) return "!";
      if ("!" !== e[0]) return t(`Not a valid tag: ${e}`), null;
      if ("<" === e[1]) {
        const n = e.slice(2, -1);
        return "!" === n || "!!" === n ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null) : (">" !== e[e.length - 1] && t("Verbatim tags must end with a >"), n)
      }
      const [, n, i] = e.match(/^(.*!)([^!]*)$/);
      i || t(`The ${e} tag has no suffix`);
      const s = this.tags[n];
      return s ? s + decodeURIComponent(i) : "!" === n ? e : (t(`Could not resolve tag: ${e}`), null)
    }
    tagString(e) {
      for (const [t, n] of Object.entries(this.tags))
        if (e.startsWith(n)) return t + e.substring(n.length).replace(/[!,[\]{}]/g, (e => Ql[e]));
      return "!" === e[0] ? e : `!<${e}>`
    }
    toString(e) {
      const t = this.yaml.explicit ? [`%YAML ${this.yaml.version||"1.2"}`] : [],
        n = Object.entries(this.tags);
      let i;
      if (e && n.length > 0 && Gl(e.contents)) {
        const t = {};
        Jl(e.contents, ((e, n) => {
          Gl(n) && n.tag && (t[n.tag] = !0)
        })), i = Object.keys(t)
      } else i = [];
      for (const [s, r] of n) "!!" === s && "tag:yaml.org,2002:" === r || e && !i.some((e => e.startsWith(r))) || t.push(`%TAG ${s} ${r}`);
      return t.join("\n")
    }
  }

  function tc(e) {
    if (/[\x00-\x19\s,[\]{}]/.test(e)) {
      const t = JSON.stringify(e);
      throw new Error(`Anchor must not contain whitespace or control characters: ${t}`)
    }
    return !0
  }

  function nc(e) {
    const t = new Set;
    return Jl(e, {
      Value(e, n) {
        n.anchor && t.add(n.anchor)
      }
    }), t
  }

  function ic(e, t) {
    for (let n = 1;; ++n) {
      const i = `${e}${n}`;
      if (!t.has(i)) return i
    }
  }
  ec.defaultYaml = {
    explicit: !1,
    version: "1.2"
  }, ec.defaultTags = {
    "!!": "tag:yaml.org,2002:"
  };
  class sc extends Vl {
    constructor(e) {
      super(Ll), this.source = e, Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags")
        }
      })
    }
    resolve(e) {
      let t;
      return Jl(e, {
        Node: (e, n) => {
          if (n === this) return Jl.BREAK;
          n.anchor === this.source && (t = n)
        }
      }), t
    }
    toJSON(e, t) {
      if (!t) return {
        source: this.source
      };
      const {
        anchors: n,
        doc: i,
        maxAliasCount: s
      } = t, r = this.resolve(i);
      if (!r) {
        const e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(e)
      }
      const o = n.get(r);
      if (!o || void 0 === o.res) {
        throw new ReferenceError("This should not happen: Alias anchor was not resolved?")
      }
      if (s >= 0 && (o.count += 1, 0 === o.aliasCount && (o.aliasCount = rc(i, r, n)), o.count * o.aliasCount > s)) {
        throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack")
      }
      return o.res
    }
    toString(e, t, n) {
      const i = `*${this.source}`;
      if (e) {
        if (tc(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
          const e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(e)
        }
        if (e.implicitKey) return `${i} `
      }
      return i
    }
  }

  function rc(e, t, n) {
    if (jl(t)) {
      const i = t.resolve(e),
        s = n && i && n.get(i);
      return s ? s.count * s.aliasCount : 0
    }
    if (Xl(t)) {
      let i = 0;
      for (const s of t.items) {
        const t = rc(e, s, n);
        t > i && (i = t)
      }
      return i
    }
    if (Kl(t)) {
      const i = rc(e, t.key, n),
        s = rc(e, t.value, n);
      return Math.max(i, s)
    }
    return 1
  }

  function oc(e, t, n) {
    if (Array.isArray(e)) return e.map(((e, t) => oc(e, String(t), n)));
    if (e && "function" == typeof e.toJSON) {
      if (!n || (!Bl(i = e) && !Xl(i) || !i.anchor)) return e.toJSON(t, n);
      const s = {
        aliasCount: 0,
        count: 1,
        res: void 0
      };
      n.anchors.set(e, s), n.onCreate = e => {
        s.res = e, delete n.onCreate
      };
      const r = e.toJSON(t, n);
      return n.onCreate && n.onCreate(r), r
    }
    var i;
    return "bigint" != typeof e || n && n.keep ? e : Number(e)
  }
  const ac = e => !e || "function" != typeof e && "object" != typeof e;
  class lc extends Vl {
    constructor(e) {
      super(Rl), this.value = e
    }
    toJSON(e, t) {
      return t && t.keep ? this.value : oc(this.value, e, t)
    }
    toString() {
      return String(this.value)
    }
  }
  lc.BLOCK_FOLDED = "BLOCK_FOLDED", lc.BLOCK_LITERAL = "BLOCK_LITERAL", lc.PLAIN = "PLAIN", lc.QUOTE_DOUBLE = "QUOTE_DOUBLE", lc.QUOTE_SINGLE = "QUOTE_SINGLE";

  function cc(e, t, n) {
    var i, s;
    if (Gl(e)) return e;
    if (Kl(e)) {
      const t = null === (s = (i = n.schema[Cl]).createNode) || void 0 === s ? void 0 : s.call(i, n.schema, null, n);
      return t.items.push(e), t
    }(e instanceof String || e instanceof Number || e instanceof Boolean || "function" == typeof BigInt && e instanceof BigInt) && (e = e.valueOf());
    const {
      onAnchor: r,
      onTagObj: o,
      schema: a,
      sourceObjects: l
    } = n;
    let c;
    if (e && "object" == typeof e) {
      if (c = l.get(e), c) return c.anchor || (c.anchor = r(e)), new sc(c.anchor);
      c = {
        anchor: null,
        node: null
      }, l.set(e, c)
    }
    t && t.startsWith("!!") && (t = "tag:yaml.org,2002:" + t.slice(2));
    let u = function(e, t, n) {
      if (t) {
        const e = n.filter((e => e.tag === t)),
          i = e.find((e => !e.format)) || e[0];
        if (!i) throw new Error(`Tag ${t} not found`);
        return i
      }
      return n.find((t => t.identify && t.identify(e) && !t.format))
    }(e, t, a.tags);
    if (!u) {
      if (e && "function" == typeof e.toJSON && (e = e.toJSON()), !e || "object" != typeof e) return new lc(e);
      u = e instanceof Map ? a[Cl] : Symbol.iterator in Object(e) ? a[Pl] : a[Cl]
    }
    o && (o(u), delete n.onTagObj);
    const f = (null == u ? void 0 : u.createNode) ? u.createNode(n.schema, e, n) : new lc(e);
    return t && (f.tag = t), c && (c.node = f), f
  }

  function uc(e, t, n) {
    let i = n;
    for (let e = t.length - 1; e >= 0; --e) {
      const n = t[e];
      if ("number" == typeof n && Number.isInteger(n) && n >= 0) {
        const e = [];
        e[n] = i, i = e
      } else {
        const e = {};
        Object.defineProperty(e, "symbol" == typeof n ? n : String(n), {
          value: i,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }), i = e
      }
    }
    return cc(i, void 0, {
      onAnchor() {
        throw new Error("Repeated objects are not supported here")
      },
      schema: e,
      sourceObjects: new Map
    })
  }
  const fc = e => null == e || "object" == typeof e && !!e[Symbol.iterator]().next().done;
  class hc extends Vl {
    constructor(e, t) {
      super(e), Object.defineProperty(this, "schema", {
        value: t,
        configurable: !0,
        enumerable: !1,
        writable: !0
      })
    }
    addIn(e, t) {
      if (fc(e)) this.add(t);
      else {
        const [n, ...i] = e, s = this.get(n, !0);
        if (Xl(s)) s.addIn(i, t);
        else {
          if (void 0 !== s || !this.schema) throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
          this.set(n, uc(this.schema, i, t))
        }
      }
    }
    deleteIn([e, ...t]) {
      if (0 === t.length) return this.delete(e);
      const n = this.get(e, !0);
      if (Xl(n)) return n.deleteIn(t);
      throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`)
    }
    getIn([e, ...t], n) {
      const i = this.get(e, !0);
      return 0 === t.length ? !n && Bl(i) ? i.value : i : Xl(i) ? i.getIn(t, n) : void 0
    }
    hasAllNullValues(e) {
      return this.items.every((t => {
        if (!Kl(t)) return !1;
        const n = t.value;
        return null == n || e && Bl(n) && null == n.value && !n.commentBefore && !n.comment && !n.tag
      }))
    }
    hasIn([e, ...t]) {
      if (0 === t.length) return this.has(e);
      const n = this.get(e, !0);
      return !!Xl(n) && n.hasIn(t)
    }
    setIn([e, ...t], n) {
      if (0 === t.length) this.set(e, n);
      else {
        const i = this.get(e, !0);
        if (Xl(i)) i.setIn(t, n);
        else {
          if (void 0 !== i || !this.schema) throw new Error(`Expected YAML collection at ${e}. Remaining path: ${t}`);
          this.set(e, uc(this.schema, t, n))
        }
      }
    }
  }

  function pc(e, t, n) {
    return n ? n.includes("\n") ? `${e}\n` + n.replace(/^/gm, `${t||""}#`) : e.endsWith(" ") ? `${e}#${n}` : `${e} #${n}` : e
  }
  hc.maxFlowStringSingleLineLength = 60;
  const mc = "flow",
    dc = "block",
    gc = "quoted";

  function yc(e, t, n = "flow", {
    indentAtStart: i,
    lineWidth: s = 80,
    minContentWidth: r = 20,
    onFold: o,
    onOverflow: a
  } = {}) {
    if (!s || s < 0) return e;
    const l = Math.max(1 + r, 1 + s - t.length);
    if (e.length <= l) return e;
    const c = [],
      u = {};
    let f, h, p = s - t.length;
    "number" == typeof i && (i > s - Math.max(2, r) ? c.push(0) : p = s - i);
    let m, d = !1,
      g = -1,
      y = -1,
      b = -1;
    for (n === dc && (g = bc(e, g), -1 !== g && (p = g + l)); m = e[g += 1];) {
      if (n === gc && "\\" === m) {
        switch (y = g, e[g + 1]) {
          case "x":
            g += 3;
            break;
          case "u":
            g += 5;
            break;
          case "U":
            g += 9;
            break;
          default:
            g += 1
        }
        b = g
      }
      if ("\n" === m) n === dc && (g = bc(e, g)), p = g + l, f = void 0;
      else {
        if (" " === m && h && " " !== h && "\n" !== h && "\t" !== h) {
          const t = e[g + 1];
          t && " " !== t && "\n" !== t && "\t" !== t && (f = g)
        }
        if (g >= p)
          if (f) c.push(f), p = f + l, f = void 0;
          else if (n === gc) {
          for (;
            " " === h || "\t" === h;) h = m, m = e[g += 1], d = !0;
          const t = g > b + 1 ? g - 2 : y - 1;
          if (u[t]) return e;
          c.push(t), u[t] = !0, p = t + l, f = void 0
        } else d = !0
      }
      h = m
    }
    if (d && a && a(), 0 === c.length) return e;
    o && o();
    let k = e.slice(0, c[0]);
    for (let i = 0; i < c.length; ++i) {
      const s = c[i],
        r = c[i + 1] || e.length;
      0 === s ? k = `\n${t}${e.slice(0,r)}` : (n === gc && u[s] && (k += `${e[s]}\\`), k += `\n${t}${e.slice(s+1,r)}`)
    }
    return k
  }

  function bc(e, t) {
    let n = e[t + 1];
    for (;
      " " === n || "\t" === n;) {
      do {
        n = e[t += 1]
      } while (n && "\n" !== n);
      n = e[t + 1]
    }
    return t
  }
  const kc = e => ({
      indentAtStart: e.indentAtStart,
      lineWidth: e.options.lineWidth,
      minContentWidth: e.options.minContentWidth
    }),
    vc = e => /^(%|---|\.\.\.)/m.test(e);

  function wc(e, t) {
    const n = JSON.stringify(e);
    if (t.options.doubleQuotedAsJSON) return n;
    const {
      implicitKey: i
    } = t, s = t.options.doubleQuotedMinMultiLineLength, r = t.indent || (vc(e) ? "  " : "");
    let o = "",
      a = 0;
    for (let e = 0, t = n[e]; t; t = n[++e])
      if (" " === t && "\\" === n[e + 1] && "n" === n[e + 2] && (o += n.slice(a, e) + "\\ ", e += 1, a = e, t = "\\"), "\\" === t) switch (n[e + 1]) {
        case "u": {
          o += n.slice(a, e);
          const t = n.substr(e + 2, 4);
          switch (t) {
            case "0000":
              o += "\\0";
              break;
            case "0007":
              o += "\\a";
              break;
            case "000b":
              o += "\\v";
              break;
            case "001b":
              o += "\\e";
              break;
            case "0085":
              o += "\\N";
              break;
            case "00a0":
              o += "\\_";
              break;
            case "2028":
              o += "\\L";
              break;
            case "2029":
              o += "\\P";
              break;
            default:
              "00" === t.substr(0, 2) ? o += "\\x" + t.substr(2) : o += n.substr(e, 6)
          }
          e += 5, a = e + 1
        }
        break;
        case "n":
          if (i || '"' === n[e + 2] || n.length < s) e += 1;
          else {
            for (o += n.slice(a, e) + "\n\n";
              "\\" === n[e + 2] && "n" === n[e + 3] && '"' !== n[e + 4];) o += "\n", e += 2;
            o += r, " " === n[e + 2] && (o += "\\"), e += 1, a = e + 1
          }
          break;
        default:
          e += 1
      }
    return o = a ? o + n.slice(a) : n, i ? o : yc(o, r, gc, kc(t))
  }

  function xc(e, t) {
    if (t.implicitKey) {
      if (/\n/.test(e)) return wc(e, t)
    } else if (/[ \t]\n|\n[ \t]/.test(e)) return wc(e, t);
    const n = t.indent || (vc(e) ? "  " : ""),
      i = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'";
    return t.implicitKey ? i : yc(i, n, mc, kc(t))
  }

  function zc({
    comment: e,
    type: t,
    value: n
  }, i, s, r) {
    if (/\n[\t ]+$/.test(n) || /^\s*$/.test(n)) return wc(n, i);
    const o = i.indent || (i.forceBlockIndent || vc(n) ? "  " : ""),
      a = t !== lc.BLOCK_FOLDED && (t === lc.BLOCK_LITERAL || ! function(e, t, n) {
        if (!t || t < 0) return !1;
        const i = t - n,
          s = e.length;
        if (s <= i) return !1;
        for (let t = 0, n = 0; t < s; ++t)
          if ("\n" === e[t]) {
            if (t - n > i) return !0;
            if (n = t + 1, s - n <= i) return !1
          } return !0
      }(n, i.options.lineWidth, o.length));
    if (!n) return a ? "|\n" : ">\n";
    let l, c;
    for (c = n.length; c > 0; --c) {
      const e = n[c - 1];
      if ("\n" !== e && "\t" !== e && " " !== e) break
    }
    let u = n.substring(c);
    const f = u.indexOf("\n"); - 1 === f ? l = "-" : n === u || f !== u.length - 1 ? (l = "+", r && r()) : l = "", u && (n = n.slice(0, -u.length), "\n" === u[u.length - 1] && (u = u.slice(0, -1)), u = u.replace(/\n+(?!\n|$)/g, `$&${o}`));
    let h, p = !1,
      m = -1;
    for (h = 0; h < n.length; ++h) {
      const e = n[h];
      if (" " === e) p = !0;
      else {
        if ("\n" !== e) break;
        m = h
      }
    }
    let d = n.substring(0, m < h ? m + 1 : h);
    d && (n = n.substring(d.length), d = d.replace(/\n+/g, `$&${o}`));
    let g = (a ? "|" : ">") + (p ? o ? "2" : "1" : "") + l;
    if (e && (g += " #" + e.replace(/ ?[\r\n]+/g, " "), s && s()), a) return `${g}\n${o}${d}${n=n.replace(/\n+/g,`$&${o}`)}${u}`;
    return `${g}\n${o}${yc(`${d}${n=n.replace(/\n+/g,"\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g,"$1$2").replace(/\n+/g,`$&${o}`)}${u}`,o,dc,kc(i))}`
  }

  function Ec(e, t, n, i) {
    const {
      implicitKey: s,
      inFlow: r
    } = t, o = "string" == typeof e.value ? e : Object.assign({}, e, {
      value: String(e.value)
    });
    let {
      type: a
    } = e;
    a !== lc.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (a = lc.QUOTE_DOUBLE);
    const l = e => {
      switch (e) {
        case lc.BLOCK_FOLDED:
        case lc.BLOCK_LITERAL:
          return s || r ? wc(o.value, t) : zc(o, t, n, i);
        case lc.QUOTE_DOUBLE:
          return wc(o.value, t);
        case lc.QUOTE_SINGLE:
          return xc(o.value, t);
        case lc.PLAIN:
          return function(e, t, n, i) {
            var s;
            const {
              type: r,
              value: o
            } = e, {
              actualString: a,
              implicitKey: l,
              indent: c,
              inFlow: u
            } = t;
            if (l && /[\n[\]{},]/.test(o) || u && /[[\]{},]/.test(o)) return wc(o, t);
            if (!o || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o)) {
              const s = -1 !== o.indexOf('"'),
                r = -1 !== o.indexOf("'");
              let a;
              return a = s && !r ? xc : r && !s ? wc : t.options.singleQuote ? xc : wc, l || u || -1 === o.indexOf("\n") ? a(o, t) : zc(e, t, n, i)
            }
            if (!l && !u && r !== lc.PLAIN && -1 !== o.indexOf("\n")) return zc(e, t, n, i);
            if ("" === c && vc(o)) return t.forceBlockIndent = !0, zc(e, t, n, i);
            const f = o.replace(/\n+/g, `$&\n${c}`);
            if (a)
              for (const e of t.doc.schema.tags)
                if (e.default && "tag:yaml.org,2002:str" !== e.tag && (null === (s = e.test) || void 0 === s ? void 0 : s.test(f))) return wc(o, t);
            return l ? f : yc(f, c, mc, kc(t))
          }(o, t, n, i);
        default:
          return null
      }
    };
    let c = l(a);
    if (null === c) {
      const {
        defaultKeyType: e,
        defaultStringType: n
      } = t.options, i = s && e || n;
      if (c = l(i), null === c) throw new Error(`Unsupported default string type ${i}`)
    }
    return c
  }
  const _c = (e, t) => ({
    anchors: new Set,
    doc: e,
    indent: "",
    indentStep: "number" == typeof t.indent ? " ".repeat(t.indent) : "  ",
    options: Object.assign({
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: !1,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      indentSeq: !0,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: !1,
      singleQuote: !1,
      trueStr: "true",
      verifyAliasOrder: !0
    }, t)
  });

  function Tc(e, t, n, i) {
    if (Kl(e)) return e.toString(t, n, i);
    if (jl(e)) return e.toString(t);
    let s;
    const r = Gl(e) ? e : t.doc.createNode(e, {
      onTagObj: e => s = e
    });
    s || (s = function(e, t) {
      if (t.tag) {
        const n = e.filter((e => e.tag === t.tag));
        if (n.length > 0) return n.find((e => e.format === t.format)) || n[0]
      }
      let n, i;
      if (Bl(t)) {
        i = t.value;
        const s = e.filter((e => e.identify && e.identify(i)));
        n = s.find((e => e.format === t.format)) || s.find((e => !e.format))
      } else i = t, n = e.find((e => e.nodeClass && i instanceof e.nodeClass));
      if (!n) {
        const e = i && i.constructor ? i.constructor.name : typeof i;
        throw new Error(`Tag not resolved for ${e} value`)
      }
      return n
    }(t.doc.schema.tags, r));
    const o = function(e, t, {
      anchors: n,
      doc: i
    }) {
      const s = [],
        r = (Bl(e) || Xl(e)) && e.anchor;
      return r && tc(r) && (n.add(r), s.push(`&${r}`)), e.tag ? s.push(i.directives.tagString(e.tag)) : t.default || s.push(i.directives.tagString(t.tag)), s.join(" ")
    }(r, s, t);
    o.length > 0 && (t.indentAtStart = (t.indentAtStart || 0) + o.length + 1);
    const a = "function" == typeof s.stringify ? s.stringify(r, t, n, i) : Bl(r) ? Ec(r, t, n, i) : r.toString(t, n, i);
    return o ? Bl(r) || "{" === a[0] || "[" === a[0] ? `${o} ${a}` : `${o}\n${t.indent}${a}` : a
  }

  function $c(e, t) {
    "debug" !== e && "warn" !== e || ("undefined" != typeof process && process.emitWarning ? process.emitWarning(t) : console.warn(t))
  }

  function Sc(e, t, {
    key: n,
    value: i
  }) {
    if (e && e.doc.schema.merge && Ac(n))
      if (Fl(i))
        for (const n of i.items) Nc(e, t, n);
      else if (Array.isArray(i))
      for (const n of i) Nc(e, t, n);
    else Nc(e, t, i);
    else {
      const s = oc(n, "", e);
      if (t instanceof Map) t.set(s, oc(i, s, e));
      else if (t instanceof Set) t.add(s);
      else {
        const r = function(e, t, n) {
            if (null === t) return "";
            if ("object" != typeof t) return String(t);
            if (Gl(e) && n && n.doc) {
              const t = _c(n.doc, {});
              t.anchors = new Set;
              for (const e of n.anchors.keys()) t.anchors.add(e.anchor);
              t.inFlow = !0, t.inStringifyKey = !0;
              const i = e.toString(t);
              if (!n.mapKeyWarned) {
                let e = JSON.stringify(i);
                e.length > 40 && (e = e.substring(0, 36) + '..."'), $c(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0
              }
              return i
            }
            return JSON.stringify(t)
          }(n, s, e),
          o = oc(i, r, e);
        r in t ? Object.defineProperty(t, r, {
          value: o,
          writable: !0,
          enumerable: !0,
          configurable: !0
        }) : t[r] = o
      }
    }
    return t
  }
  const Ac = e => "<<" === e || Bl(e) && "<<" === e.value && (!e.type || e.type === lc.PLAIN);

  function Nc(e, t, n) {
    const i = e && jl(n) ? n.resolve(e.doc) : null;
    if (!Ul(i)) throw new Error("Merge sources must be map aliases");
    const s = i.toJSON(null, e, Map);
    for (const [e, n] of s) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
      value: n,
      writable: !0,
      enumerable: !0,
      configurable: !0
    });
    return t
  }

  function Oc(e, t, n) {
    const i = cc(e, void 0, n),
      s = cc(t, void 0, n);
    return new Lc(i, s)
  }
  class Lc {
    constructor(e, t = null) {
      Object.defineProperty(this, Dl, {
        value: Ml
      }), this.key = e, this.value = t
    }
    toJSON(e, t) {
      return Sc(t, t && t.mapAsMap ? new Map : {}, this)
    }
    toString(e, t, n) {
      return e && e.doc ? function({
        key: e,
        value: t
      }, n, i, s) {
        const {
          allNullValues: r,
          doc: o,
          indent: a,
          indentStep: l,
          options: {
            indentSeq: c,
            simpleKeys: u
          }
        } = n;
        let f = Gl(e) && e.comment || null;
        if (u) {
          if (f) throw new Error("With simple keys, key nodes cannot have comments");
          if (Xl(e)) throw new Error("With simple keys, collection cannot be used as a key value")
        }
        let h = !u && (!e || f && null == t && !n.inFlow || Xl(e) || (Bl(e) ? e.type === lc.BLOCK_FOLDED || e.type === lc.BLOCK_LITERAL : "object" == typeof e));
        n = Object.assign({}, n, {
          allNullValues: !1,
          implicitKey: !h && (u || !r),
          indent: a + l
        });
        let p = !1,
          m = !1,
          d = Tc(e, n, (() => p = !0), (() => m = !0));
        if (!h && !n.inFlow && d.length > 1024) {
          if (u) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
          h = !0
        }
        if (n.inFlow) {
          if (r || null == t) return p && i && i(), h ? `? ${d}` : d
        } else if (r && !u || null == t && h) return p && (f = null), m && !f && s && s(), pc(`? ${d}`, n.indent, f);
        p && (f = null), d = h ? `? ${pc(d,n.indent,f)}\n${a}:` : pc(`${d}:`, n.indent, f);
        let g = "",
          y = null;
        Gl(t) ? (t.spaceBefore && (g = "\n"), t.commentBefore && (g += `\n${t.commentBefore.replace(/^/gm,`${n.indent}#`)}`), y = t.comment) : t && "object" == typeof t && (t = o.createNode(t));
        n.implicitKey = !1, h || f || !Bl(t) || (n.indentAtStart = d.length + 1), m = !1, c || !(l.length >= 2) || n.inFlow || h || !Fl(t) || t.flow || t.tag || t.anchor || (n.indent = n.indent.substr(2));
        let b = !1;
        const k = Tc(t, n, (() => b = !0), (() => m = !0));
        let v = " ";
        g || f ? v = `${g}\n${n.indent}` : !h && Xl(t) ? ("[" === k[0] || "{" === k[0]) && !k.includes("\n") || (v = `\n${n.indent}`) : "\n" === k[0] && (v = "");
        return n.inFlow ? (b && i && i(), d + v + k) : (b && (y = null), m && !y && s && s(), pc(d + v + k, n.indent, y))
      }(this, e, t, n) : JSON.stringify(this)
    }
  }
  const Ic = {
    intAsBigInt: !1,
    logLevel: "warn",
    prettyErrors: !0,
    strict: !0,
    version: "1.2"
  };

  function Cc({
    comment: e,
    flow: t,
    items: n
  }, i, {
    blockItem: s,
    flowChars: r,
    itemIndent: o,
    onChompKeep: a,
    onComment: l
  }) {
    const {
      indent: c,
      indentStep: u
    } = i, f = t || i.inFlow;
    f && (o += u), i = Object.assign({}, i, {
      indent: o,
      inFlow: f,
      type: null
    });
    let h = !0,
      p = !1;
    const m = n.reduce(((e, t, s) => {
      let r = null;
      if (Gl(t)) {
        if (!p && t.spaceBefore && e.push({
            comment: !0,
            str: ""
          }), t.commentBefore)
          for (const n of t.commentBefore.match(/^.*$/gm)) e.push({
            comment: !0,
            str: `#${n}`
          });
        t.comment && (r = t.comment, h = !1)
      } else if (Kl(t)) {
        const n = Gl(t.key) ? t.key : null;
        if (n) {
          if (!p && n.spaceBefore && e.push({
              comment: !0,
              str: ""
            }), n.commentBefore)
            for (const t of n.commentBefore.match(/^.*$/gm)) e.push({
              comment: !0,
              str: `#${t}`
            });
          n.comment && (h = !1)
        }
        if (f) {
          const e = Gl(t.value) ? t.value : null;
          e ? (e.comment && (r = e.comment), (e.comment || e.commentBefore) && (h = !1)) : null == t.value && n && n.comment && (r = n.comment)
        }
      }
      p = !1;
      let a = Tc(t, i, (() => r = null), (() => p = !0));
      return f && s < n.length - 1 && (a += ","), a = pc(a, o, r), p && (r || f) && (p = !1), e.push({
        comment: !1,
        str: a
      }), e
    }), []);
    let d;
    if (0 === m.length) d = r.start + r.end;
    else if (f) {
      const {
        start: e,
        end: t
      } = r, n = m.map((e => e.str));
      let i = 2;
      for (const e of m) {
        if (e.comment || e.str.includes("\n")) {
          h = !1;
          break
        }
        i += e.str.length + 2
      }
      if (!h || i > hc.maxFlowStringSingleLineLength) {
        d = e;
        for (const e of n) d += e ? `\n${u}${c}${e}` : "\n";
        d += `\n${c}${t}`
      } else d = `${e} ${n.join(" ")} ${t}`
    } else {
      const e = m.map(s);
      d = e.shift() || "";
      for (const t of e) d += t ? `\n${c}${t}` : "\n"
    }
    return e ? (d += "\n" + e.replace(/^/gm, `${c}#`), l && l()) : p && a && a(), d
  }

  function Mc(e, t) {
    const n = Bl(t) ? t.value : t;
    for (const i of e)
      if (Kl(i)) {
        if (i.key === t || i.key === n) return i;
        if (Bl(i.key) && i.key.value === n) return i
      }
  }
  class Rc extends hc {
    constructor(e) {
      super(Cl, e), this.items = []
    }
    static get tagName() {
      return "tag:yaml.org,2002:map"
    }
    add(e, t) {
      let n;
      n = Kl(e) ? e : new Lc(e && "object" == typeof e && "key" in e ? e.key : e, e.value);
      const i = Mc(this.items, n.key),
        s = this.schema && this.schema.sortMapEntries;
      if (i) {
        if (!t) throw new Error(`Key ${n.key} already set`);
        Bl(i.value) && ac(n.value) ? i.value.value = n.value : i.value = n.value
      } else if (s) {
        const e = this.items.findIndex((e => s(n, e) < 0)); - 1 === e ? this.items.push(n) : this.items.splice(e, 0, n)
      } else this.items.push(n)
    }
    delete(e) {
      const t = Mc(this.items, e);
      if (!t) return !1;
      return this.items.splice(this.items.indexOf(t), 1).length > 0
    }
    get(e, t) {
      const n = Mc(this.items, e),
        i = n && n.value;
      return !t && Bl(i) ? i.value : i
    }
    has(e) {
      return !!Mc(this.items, e)
    }
    set(e, t) {
      this.add(new Lc(e, t), !0)
    }
    toJSON(e, t, n) {
      const i = n ? new n : t && t.mapAsMap ? new Map : {};
      t && t.onCreate && t.onCreate(i);
      for (const e of this.items) Sc(t, i, e);
      return i
    }
    toString(e, t, n) {
      if (!e) return JSON.stringify(this);
      for (const e of this.items)
        if (!Kl(e)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
      return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, {
        allNullValues: !0
      })), Cc(this, e, {
        blockItem: e => e.str,
        flowChars: {
          start: "{",
          end: "}"
        },
        itemIndent: e.indent || "",
        onChompKeep: n,
        onComment: t
      })
    }
  }
  const Pc = {
    collection: "map",
    createNode: function(e, t, n) {
      const {
        keepUndefined: i,
        replacer: s
      } = n, r = new Rc(e), o = (e, o) => {
        if ("function" == typeof s) o = s.call(t, e, o);
        else if (Array.isArray(s) && !s.includes(e)) return;
        (void 0 !== o || i) && r.items.push(Oc(e, o, n))
      };
      if (t instanceof Map)
        for (const [e, n] of t) o(e, n);
      else if (t && "object" == typeof t)
        for (const e of Object.keys(t)) o(e, t[e]);
      return "function" == typeof e.sortMapEntries && r.items.sort(e.sortMapEntries), r
    },
    default: !0,
    nodeClass: Rc,
    tag: "tag:yaml.org,2002:map",
    resolve: (e, t) => (Ul(e) || t("Expected a mapping for this tag"), e)
  };
  class Dc extends hc {
    constructor(e) {
      super(Pl, e), this.items = []
    }
    static get tagName() {
      return "tag:yaml.org,2002:seq"
    }
    add(e) {
      this.items.push(e)
    }
    delete(e) {
      const t = jc(e);
      if ("number" != typeof t) return !1;
      return this.items.splice(t, 1).length > 0
    }
    get(e, t) {
      const n = jc(e);
      if ("number" != typeof n) return;
      const i = this.items[n];
      return !t && Bl(i) ? i.value : i
    }
    has(e) {
      const t = jc(e);
      return "number" == typeof t && t < this.items.length
    }
    set(e, t) {
      const n = jc(e);
      if ("number" != typeof n) throw new Error(`Expected a valid index, not ${e}.`);
      const i = this.items[n];
      Bl(i) && ac(t) ? i.value = t : this.items[n] = t
    }
    toJSON(e, t) {
      const n = [];
      t && t.onCreate && t.onCreate(n);
      let i = 0;
      for (const e of this.items) n.push(oc(e, String(i++), t));
      return n
    }
    toString(e, t, n) {
      return e ? Cc(this, e, {
        blockItem: e => e.comment ? e.str : `- ${e.str}`,
        flowChars: {
          start: "[",
          end: "]"
        },
        itemIndent: (e.indent || "") + "  ",
        onChompKeep: n,
        onComment: t
      }) : JSON.stringify(this)
    }
  }

  function jc(e) {
    let t = Bl(e) ? e.value : e;
    return t && "string" == typeof t && (t = Number(t)), "number" == typeof t && Number.isInteger(t) && t >= 0 ? t : null
  }
  const qc = {
      collection: "seq",
      createNode: function(e, t, n) {
        const {
          replacer: i
        } = n, s = new Dc(e);
        if (t && Symbol.iterator in Object(t)) {
          let e = 0;
          for (let r of t) {
            if ("function" == typeof i) {
              const n = t instanceof Set ? r : String(e++);
              r = i.call(t, n, r)
            }
            s.items.push(cc(r, void 0, n))
          }
        }
        return s
      },
      default: !0,
      nodeClass: Dc,
      tag: "tag:yaml.org,2002:seq",
      resolve: (e, t) => (Fl(e) || t("Expected a sequence for this tag"), e)
    },
    Uc = {
      identify: e => "string" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:str",
      resolve: e => e,
      stringify: (e, t, n, i) => Ec(e, t = Object.assign({
        actualString: !0
      }, t), n, i)
    },
    Kc = {
      identify: e => null == e,
      createNode: () => new lc(null),
      default: !0,
      tag: "tag:yaml.org,2002:null",
      test: /^(?:~|[Nn]ull|NULL)?$/,
      resolve: () => new lc(null),
      stringify: ({
        source: e
      }, t) => e && Kc.test.test(e) ? e : t.options.nullStr
    },
    Bc = {
      identify: e => "boolean" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
      resolve: e => new lc("t" === e[0] || "T" === e[0]),
      stringify({
        source: e,
        value: t
      }, n) {
        if (e && Bc.test.test(e)) {
          if (t === ("t" === e[0] || "T" === e[0])) return e
        }
        return t ? n.options.trueStr : n.options.falseStr
      }
    };

  function Fc({
    format: e,
    minFractionDigits: t,
    tag: n,
    value: i
  }) {
    if ("bigint" == typeof i) return String(i);
    const s = "number" == typeof i ? i : Number(i);
    if (!isFinite(s)) return isNaN(s) ? ".nan" : s < 0 ? "-.inf" : ".inf";
    let r = JSON.stringify(i);
    if (!e && t && (!n || "tag:yaml.org,2002:float" === n) && /^\d/.test(r)) {
      let e = r.indexOf(".");
      e < 0 && (e = r.length, r += ".");
      let n = t - (r.length - e - 1);
      for (; n-- > 0;) r += "0"
    }
    return r
  }
  const Xc = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
      resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: Fc
    },
    Gc = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
      resolve: e => parseFloat(e),
      stringify: ({
        value: e
      }) => Number(e).toExponential()
    },
    Vc = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
      resolve(e) {
        const t = new lc(parseFloat(e)),
          n = e.indexOf(".");
        return -1 !== n && "0" === e[e.length - 1] && (t.minFractionDigits = e.length - n - 1), t
      },
      stringify: Fc
    },
    Hc = e => "bigint" == typeof e || Number.isInteger(e),
    Wc = (e, t, n, {
      intAsBigInt: i
    }) => i ? BigInt(e) : parseInt(e.substring(t), n);

  function Yc(e, t, n) {
    const {
      value: i
    } = e;
    return Hc(i) && i >= 0 ? n + i.toString(t) : Fc(e)
  }
  const Jc = {
      identify: e => Hc(e) && e >= 0,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^0o[0-7]+$/,
      resolve: (e, t, n) => Wc(e, 2, 8, n),
      stringify: e => Yc(e, 8, "0o")
    },
    Zc = {
      identify: Hc,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9]+$/,
      resolve: (e, t, n) => Wc(e, 0, 10, n),
      stringify: Fc
    },
    Qc = {
      identify: e => Hc(e) && e >= 0,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^0x[0-9a-fA-F]+$/,
      resolve: (e, t, n) => Wc(e, 2, 16, n),
      stringify: e => Yc(e, 16, "0x")
    },
    eu = [Pc, qc, Uc, Kc, Bc, Jc, Zc, Qc, Xc, Gc, Vc];

  function tu(e) {
    return "bigint" == typeof e || Number.isInteger(e)
  }
  const nu = ({
      value: e
    }) => JSON.stringify(e),
    iu = [Pc, qc].concat([{
      identify: e => "string" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:str",
      resolve: e => e,
      stringify: nu
    }, {
      identify: e => null == e,
      createNode: () => new lc(null),
      default: !0,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: nu
    }, {
      identify: e => "boolean" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^true|false$/,
      resolve: e => "true" === e,
      stringify: nu
    }, {
      identify: tu,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (e, t, {
        intAsBigInt: n
      }) => n ? BigInt(e) : parseInt(e, 10),
      stringify: ({
        value: e
      }) => tu(e) ? e.toString() : JSON.stringify(e)
    }, {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: e => parseFloat(e),
      stringify: nu
    }], {
      default: !0,
      tag: "",
      test: /^/,
      resolve: (e, t) => (t(`Unresolved plain scalar ${JSON.stringify(e)}`), e)
    }),
    su = {
      identify: e => e instanceof Uint8Array,
      default: !1,
      tag: "tag:yaml.org,2002:binary",
      resolve(e, t) {
        if ("function" == typeof Buffer) return Buffer.from(e, "base64");
        if ("function" == typeof atob) {
          const t = atob(e.replace(/[\n\r]/g, "")),
            n = new Uint8Array(t.length);
          for (let e = 0; e < t.length; ++e) n[e] = t.charCodeAt(e);
          return n
        }
        return t("This environment does not support reading binary tags; either Buffer or atob is required"), e
      },
      stringify({
        comment: e,
        type: t,
        value: n
      }, i, s, r) {
        const o = n;
        let a;
        if ("function" == typeof Buffer) a = o instanceof Buffer ? o.toString("base64") : Buffer.from(o.buffer).toString("base64");
        else {
          if ("function" != typeof btoa) throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required"); {
            let e = "";
            for (let t = 0; t < o.length; ++t) e += String.fromCharCode(o[t]);
            a = btoa(e)
          }
        }
        if (t || (t = lc.BLOCK_LITERAL), t !== lc.QUOTE_DOUBLE) {
          const e = Math.max(i.options.lineWidth - i.indent.length, i.options.minContentWidth),
            n = Math.ceil(a.length / e),
            s = new Array(n);
          for (let t = 0, i = 0; t < n; ++t, i += e) s[t] = a.substr(i, e);
          a = s.join(t === lc.BLOCK_LITERAL ? "\n" : " ")
        }
        return Ec({
          comment: e,
          type: t,
          value: a
        }, i, s, r)
      }
    };

  function ru(e, t) {
    if (Fl(e))
      for (let n = 0; n < e.items.length; ++n) {
        let i = e.items[n];
        if (!Kl(i)) {
          if (Ul(i)) {
            i.items.length > 1 && t("Each pair must have its own sequence indicator");
            const e = i.items[0] || new Lc(new lc(null));
            if (i.commentBefore && (e.key.commentBefore = e.key.commentBefore ? `${i.commentBefore}\n${e.key.commentBefore}` : i.commentBefore), i.comment) {
              const t = e.value || e.key;
              t.comment = t.comment ? `${i.comment}\n${t.comment}` : i.comment
            }
            i = e
          }
          e.items[n] = Kl(i) ? i : new Lc(i)
        }
      } else t("Expected a sequence for this tag");
    return e
  }

  function ou(e, t, n) {
    const {
      replacer: i
    } = n, s = new Dc(e);
    s.tag = "tag:yaml.org,2002:pairs";
    let r = 0;
    if (t && Symbol.iterator in Object(t))
      for (let e of t) {
        let o, a;
        if ("function" == typeof i && (e = i.call(t, String(r++), e)), Array.isArray(e)) {
          if (2 !== e.length) throw new TypeError(`Expected [key, value] tuple: ${e}`);
          o = e[0], a = e[1]
        } else if (e && e instanceof Object) {
          const t = Object.keys(e);
          if (1 !== t.length) throw new TypeError(`Expected { key: value } tuple: ${e}`);
          o = t[0], a = e[o]
        } else o = e;
        s.items.push(Oc(o, a, n))
      }
    return s
  }
  const au = {
    collection: "seq",
    default: !1,
    tag: "tag:yaml.org,2002:pairs",
    resolve: ru,
    createNode: ou
  };
  class lu extends Dc {
    constructor() {
      super(), this.add = Rc.prototype.add.bind(this), this.delete = Rc.prototype.delete.bind(this), this.get = Rc.prototype.get.bind(this), this.has = Rc.prototype.has.bind(this), this.set = Rc.prototype.set.bind(this), this.tag = lu.tag
    }
    toJSON(e, t) {
      if (!t) return super.toJSON(e);
      const n = new Map;
      t && t.onCreate && t.onCreate(n);
      for (const e of this.items) {
        let i, s;
        if (Kl(e) ? (i = oc(e.key, "", t), s = oc(e.value, i, t)) : i = oc(e, "", t), n.has(i)) throw new Error("Ordered maps must not include duplicate keys");
        n.set(i, s)
      }
      return n
    }
  }
  lu.tag = "tag:yaml.org,2002:omap";
  const cu = {
    collection: "seq",
    identify: e => e instanceof Map,
    nodeClass: lu,
    default: !1,
    tag: "tag:yaml.org,2002:omap",
    resolve(e, t) {
      const n = ru(e, t),
        i = [];
      for (const {
          key: e
        } of n.items) Bl(e) && (i.includes(e.value) ? t(`Ordered maps must not include duplicate keys: ${e.value}`) : i.push(e.value));
      return Object.assign(new lu, n)
    },
    createNode(e, t, n) {
      const i = ou(e, t, n),
        s = new lu;
      return s.items = i.items, s
    }
  };

  function uu({
    value: e,
    source: t
  }, n) {
    return t && (e ? fu : hu).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr
  }
  const fu = {
      identify: e => !0 === e,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
      resolve: () => new lc(!0),
      stringify: uu
    },
    hu = {
      identify: e => !1 === e,
      default: !0,
      tag: "tag:yaml.org,2002:bool",
      test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
      resolve: () => new lc(!1),
      stringify: uu
    },
    pu = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
      resolve: e => "nan" === e.slice(-3).toLowerCase() ? NaN : "-" === e[0] ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
      stringify: Fc
    },
    mu = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "EXP",
      test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
      resolve: e => parseFloat(e.replace(/_/g, "")),
      stringify: ({
        value: e
      }) => Number(e).toExponential()
    },
    du = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
      resolve(e) {
        const t = new lc(parseFloat(e.replace(/_/g, ""))),
          n = e.indexOf(".");
        if (-1 !== n) {
          const i = e.substring(n + 1).replace(/_/g, "");
          "0" === i[i.length - 1] && (t.minFractionDigits = i.length)
        }
        return t
      },
      stringify: Fc
    },
    gu = e => "bigint" == typeof e || Number.isInteger(e);

  function yu(e, t, n, {
    intAsBigInt: i
  }) {
    const s = e[0];
    if ("-" !== s && "+" !== s || (t += 1), e = e.substring(t).replace(/_/g, ""), i) {
      switch (n) {
        case 2:
          e = `0b${e}`;
          break;
        case 8:
          e = `0o${e}`;
          break;
        case 16:
          e = `0x${e}`
      }
      const t = BigInt(e);
      return "-" === s ? BigInt(-1) * t : t
    }
    const r = parseInt(e, n);
    return "-" === s ? -1 * r : r
  }

  function bu(e, t, n) {
    const {
      value: i
    } = e;
    if (gu(i)) {
      const e = i.toString(t);
      return i < 0 ? "-" + n + e.substr(1) : n + e
    }
    return Fc(e)
  }
  const ku = {
      identify: gu,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "BIN",
      test: /^[-+]?0b[0-1_]+$/,
      resolve: (e, t, n) => yu(e, 2, 2, n),
      stringify: e => bu(e, 2, "0b")
    },
    vu = {
      identify: gu,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "OCT",
      test: /^[-+]?0[0-7_]+$/,
      resolve: (e, t, n) => yu(e, 1, 8, n),
      stringify: e => bu(e, 8, "0")
    },
    wu = {
      identify: gu,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      test: /^[-+]?[0-9][0-9_]*$/,
      resolve: (e, t, n) => yu(e, 0, 10, n),
      stringify: Fc
    },
    xu = {
      identify: gu,
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "HEX",
      test: /^[-+]?0x[0-9a-fA-F_]+$/,
      resolve: (e, t, n) => yu(e, 2, 16, n),
      stringify: e => bu(e, 16, "0x")
    };
  class zu extends Rc {
    constructor(e) {
      super(e), this.tag = zu.tag
    }
    add(e) {
      let t;
      t = Kl(e) ? e : "object" == typeof e && "key" in e && "value" in e && null === e.value ? new Lc(e.key, null) : new Lc(e, null);
      Mc(this.items, t.key) || this.items.push(t)
    }
    get(e, t) {
      const n = Mc(this.items, e);
      return !t && Kl(n) ? Bl(n.key) ? n.key.value : n.key : n
    }
    set(e, t) {
      if ("boolean" != typeof t) throw new Error("Expected boolean value for set(key, value) in a YAML set, not " + typeof t);
      const n = Mc(this.items, e);
      n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new Lc(e))
    }
    toJSON(e, t) {
      return super.toJSON(e, t, Set)
    }
    toString(e, t, n) {
      if (!e) return JSON.stringify(this);
      if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, {
        allNullValues: !0
      }), t, n);
      throw new Error("Set items must all have null values")
    }
  }
  zu.tag = "tag:yaml.org,2002:set";
  const Eu = {
    collection: "map",
    identify: e => e instanceof Set,
    nodeClass: zu,
    default: !1,
    tag: "tag:yaml.org,2002:set",
    resolve(e, t) {
      if (Ul(e)) {
        if (e.hasAllNullValues(!0)) return Object.assign(new zu, e);
        t("Set items must all have null values")
      } else t("Expected a mapping for this tag");
      return e
    },
    createNode(e, t, n) {
      const {
        replacer: i
      } = n, s = new zu(e);
      if (t && Symbol.iterator in Object(t))
        for (let e of t) "function" == typeof i && (e = i.call(t, e, e)), s.items.push(Oc(e, null, n));
      return s
    }
  };

  function _u(e, t) {
    const n = e[0],
      i = "-" === n || "+" === n ? e.substring(1) : e,
      s = e => t ? BigInt(e) : Number(e),
      r = i.replace(/_/g, "").split(":").reduce(((e, t) => e * s(60) + s(t)), s(0));
    return "-" === n ? s(-1) * r : r
  }

  function Tu(e) {
    let {
      value: t
    } = e, n = e => e;
    if ("bigint" == typeof t) n = e => BigInt(e);
    else if (isNaN(t) || !isFinite(t)) return Fc(e);
    let i = "";
    t < 0 && (i = "-", t *= n(-1));
    const s = n(60),
      r = [t % s];
    return t < 60 ? r.unshift(0) : (t = (t - r[0]) / s, r.unshift(t % s), t >= 60 && (t = (t - r[0]) / s, r.unshift(t))), i + r.map((e => e < 10 ? "0" + String(e) : String(e))).join(":").replace(/000000\d*$/, "")
  }
  const $u = {
      identify: e => "bigint" == typeof e || Number.isInteger(e),
      default: !0,
      tag: "tag:yaml.org,2002:int",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
      resolve: (e, t, {
        intAsBigInt: n
      }) => _u(e, n),
      stringify: Tu
    },
    Su = {
      identify: e => "number" == typeof e,
      default: !0,
      tag: "tag:yaml.org,2002:float",
      format: "TIME",
      test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
      resolve: e => _u(e, !1),
      stringify: Tu
    },
    Au = {
      identify: e => e instanceof Date,
      default: !0,
      tag: "tag:yaml.org,2002:timestamp",
      test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
      resolve(e) {
        const t = e.match(Au.test);
        if (!t) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
        const [, n, i, s, r, o, a] = t.map(Number), l = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
        let c = Date.UTC(n, i - 1, s, r || 0, o || 0, a || 0, l);
        const u = t[8];
        if (u && "Z" !== u) {
          let e = _u(u, !1);
          Math.abs(e) < 30 && (e *= 60), c -= 6e4 * e
        }
        return new Date(c)
      },
      stringify: ({
        value: e
      }) => e.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "")
    },
    Nu = [Pc, qc, Uc, Kc, fu, hu, ku, vu, wu, xu, pu, mu, du, su, cu, au, Eu, $u, Su, Au],
    Ou = {
      core: eu,
      failsafe: [Pc, qc, Uc],
      json: iu,
      yaml11: Nu,
      "yaml-1.1": Nu
    },
    Lu = {
      binary: su,
      bool: Bc,
      float: Vc,
      floatExp: Gc,
      floatNaN: Xc,
      floatTime: Su,
      int: Zc,
      intHex: Qc,
      intOct: Jc,
      intTime: $u,
      map: Pc,
      null: Kc,
      omap: cu,
      pairs: au,
      seq: qc,
      set: Eu,
      timestamp: Au
    },
    Iu = {
      "tag:yaml.org,2002:binary": su,
      "tag:yaml.org,2002:omap": cu,
      "tag:yaml.org,2002:pairs": au,
      "tag:yaml.org,2002:set": Eu,
      "tag:yaml.org,2002:timestamp": Au
    };
  const Cu = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
  class Mu {
    constructor({
      customTags: e,
      merge: t,
      resolveKnownTags: n,
      schema: i,
      sortMapEntries: s
    }) {
      this.merge = !!t, this.name = i || "core", this.knownTags = n ? Iu : {}, this.tags = function(e, t) {
        let n = Ou[t];
        if (!n) {
          const e = Object.keys(Ou).filter((e => "yaml11" !== e)).map((e => JSON.stringify(e))).join(", ");
          throw new Error(`Unknown schema "${t}"; use one of ${e}`)
        }
        if (Array.isArray(e))
          for (const t of e) n = n.concat(t);
        else "function" == typeof e && (n = e(n.slice()));
        return n.map((e => {
          if ("string" != typeof e) return e;
          const t = Lu[e];
          if (t) return t;
          const n = Object.keys(Lu).map((e => JSON.stringify(e))).join(", ");
          throw new Error(`Unknown custom tag "${e}"; use one of ${n}`)
        }))
      }(e, this.name), Object.defineProperty(this, Cl, {
        value: Pc
      }), Object.defineProperty(this, Rl, {
        value: Uc
      }), Object.defineProperty(this, Pl, {
        value: qc
      }), this.sortMapEntries = !0 === s ? Cu : s || null
    }
  }

  function Ru(e, t, n, i) {
    if (i && "object" == typeof i)
      if (Array.isArray(i))
        for (let t = 0, n = i.length; t < n; ++t) {
          const n = i[t],
            s = Ru(e, i, String(t), n);
          void 0 === s ? delete i[t] : s !== n && (i[t] = s)
        } else if (i instanceof Map)
          for (const t of Array.from(i.keys())) {
            const n = i.get(t),
              s = Ru(e, i, t, n);
            void 0 === s ? i.delete(t) : s !== n && i.set(t, s)
          } else if (i instanceof Set)
            for (const t of Array.from(i)) {
              const n = Ru(e, i, t, t);
              void 0 === n ? i.delete(t) : n !== t && (i.delete(t), i.add(n))
            } else
              for (const [t, n] of Object.entries(i)) {
                const s = Ru(e, i, t, n);
                void 0 === s ? delete i[t] : s !== n && (i[t] = s)
              }
    return e.call(t, n, i)
  }
  class Pu {
    constructor(e, t, n) {
      this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Dl, {
        value: Il
      });
      let i = null;
      "function" == typeof t || Array.isArray(t) ? i = t : void 0 === n && t && (n = t, t = void 0);
      const s = Object.assign({}, Ic, n);
      this.options = s;
      let {
        version: r
      } = s;
      (null == n ? void 0 : n.directives) ? (this.directives = n.directives.atDocument(), this.directives.yaml.explicit && (r = this.directives.yaml.version)) : this.directives = new ec({
        version: r
      }), this.setSchema(r, n), this.contents = void 0 === e ? null : this.createNode(e, i, n)
    }
    add(e) {
      Du(this.contents) && this.contents.add(e)
    }
    addIn(e, t) {
      Du(this.contents) && this.contents.addIn(e, t)
    }
    createAlias(e, t) {
      if (!e.anchor) {
        const n = nc(this);
        e.anchor = !t || n.has(t) ? ic(t || "a", n) : t
      }
      return new sc(e.anchor)
    }
    createNode(e, t, n) {
      let i;
      if ("function" == typeof t) e = t.call({
        "": e
      }, "", e), i = t;
      else if (Array.isArray(t)) {
        const e = e => "number" == typeof e || e instanceof String || e instanceof Number,
          n = t.filter(e).map(String);
        n.length > 0 && (t = t.concat(n)), i = t
      } else void 0 === n && t && (n = t, t = void 0);
      const {
        anchorPrefix: s,
        flow: r,
        keepUndefined: o,
        onTagObj: a,
        tag: l
      } = n || {}, {
        onAnchor: c,
        setAnchors: u,
        sourceObjects: f
      } = function(e, t) {
        const n = [],
          i = new Map;
        let s = null;
        return {
          onAnchor(i) {
            n.push(i), s || (s = nc(e));
            const r = ic(t, s);
            return s.add(r), r
          },
          setAnchors() {
            for (const e of n) {
              const t = i.get(e);
              if ("object" != typeof t || !t.anchor || !Bl(t.node) && !Xl(t.node)) {
                const t = new Error("Failed to resolve repeated object (this should not happen)");
                throw t.source = e, t
              }
              t.node.anchor = t.anchor
            }
          },
          sourceObjects: i
        }
      }(this, s || "a"), h = cc(e, l, {
        keepUndefined: null != o && o,
        onAnchor: c,
        onTagObj: a,
        replacer: i,
        schema: this.schema,
        sourceObjects: f
      });
      return r && Xl(h) && (h.flow = !0), u(), h
    }
    createPair(e, t, n = {}) {
      const i = this.createNode(e, null, n),
        s = this.createNode(t, null, n);
      return new Lc(i, s)
    }
    delete(e) {
      return !!Du(this.contents) && this.contents.delete(e)
    }
    deleteIn(e) {
      return fc(e) ? null != this.contents && (this.contents = null, !0) : !!Du(this.contents) && this.contents.deleteIn(e)
    }
    get(e, t) {
      return Xl(this.contents) ? this.contents.get(e, t) : void 0
    }
    getIn(e, t) {
      return fc(e) ? !t && Bl(this.contents) ? this.contents.value : this.contents : Xl(this.contents) ? this.contents.getIn(e, t) : void 0
    }
    has(e) {
      return !!Xl(this.contents) && this.contents.has(e)
    }
    hasIn(e) {
      return fc(e) ? void 0 !== this.contents : !!Xl(this.contents) && this.contents.hasIn(e)
    }
    set(e, t) {
      null == this.contents ? this.contents = uc(this.schema, [e], t) : Du(this.contents) && this.contents.set(e, t)
    }
    setIn(e, t) {
      fc(e) ? this.contents = t : null == this.contents ? this.contents = uc(this.schema, Array.from(e), t) : Du(this.contents) && this.contents.setIn(e, t)
    }
    setSchema(e, t) {
      let n;
      switch (String(e)) {
        case "1.1":
          this.directives.yaml.version = "1.1", n = Object.assign({
            merge: !0,
            resolveKnownTags: !1,
            schema: "yaml-1.1"
          }, t);
          break;
        case "1.2":
          this.directives.yaml.version = "1.2", n = Object.assign({
            merge: !1,
            resolveKnownTags: !0,
            schema: "core"
          }, t);
          break;
        default: {
          const t = JSON.stringify(e);
          throw new Error(`Expected '1.1' or '1.2' as version, but found: ${t}`)
        }
      }
      this.schema = new Mu(n)
    }
    toJS({
      json: e,
      jsonArg: t,
      mapAsMap: n,
      maxAliasCount: i,
      onAnchor: s,
      reviver: r
    } = {}) {
      const o = {
          anchors: new Map,
          doc: this,
          keep: !e,
          mapAsMap: !0 === n,
          mapKeyWarned: !1,
          maxAliasCount: "number" == typeof i ? i : 100,
          stringify: Tc
        },
        a = oc(this.contents, t || "", o);
      if ("function" == typeof s)
        for (const {
            count: e,
            res: t
          } of o.anchors.values()) s(t, e);
      return "function" == typeof r ? Ru(r, {
        "": a
      }, "", a) : a
    }
    toJSON(e, t) {
      return this.toJS({
        json: !0,
        jsonArg: e,
        mapAsMap: !1,
        onAnchor: t
      })
    }
    toString(e = {}) {
      if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
      if ("indent" in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
        const t = JSON.stringify(e.indent);
        throw new Error(`"indent" option must be a positive integer, not ${t}`)
      }
      return function(e, t) {
        const n = [];
        let i = !0 === t.directives;
        if (!1 !== t.directives) {
          const t = e.directives.toString(e);
          t ? (n.push(t), i = !0) : e.directives.marker && (i = !0)
        }
        i && n.push("---"), e.commentBefore && (1 !== n.length && n.unshift(""), n.unshift(e.commentBefore.replace(/^/gm, "#")));
        const s = _c(e, t);
        let r = !1,
          o = null;
        if (e.contents) {
          Gl(e.contents) && (e.contents.spaceBefore && i && n.push(""), e.contents.commentBefore && n.push(e.contents.commentBefore.replace(/^/gm, "#")), s.forceBlockIndent = !!e.comment, o = e.contents.comment);
          const t = o ? void 0 : () => r = !0;
          let a = Tc(e.contents, s, (() => o = null), t);
          o && (a = pc(a, "", o)), "|" !== a[0] && ">" !== a[0] || "---" !== n[n.length - 1] ? n.push(a) : n[n.length - 1] = `--- ${a}`
        } else n.push(Tc(e.contents, s));
        return e.comment && (r && !o || "" === n[n.length - 1] || n.push(""), n.push(e.comment.replace(/^/gm, "#"))), n.join("\n") + "\n"
      }(this, e)
    }
  }

  function Du(e) {
    if (Xl(e)) return !0;
    throw new Error("Expected a YAML collection as document contents")
  }
  class ju extends Error {
    constructor(e, t, n, i) {
      super(), this.name = e, this.code = n, this.message = i, this.pos = t
    }
  }
  class qu extends ju {
    constructor(e, t, n) {
      super("YAMLParseError", e, t, n)
    }
  }
  class Uu extends ju {
    constructor(e, t, n) {
      super("YAMLWarning", e, t, n)
    }
  }
  const Ku = (e, t) => n => {
    if (-1 === n.pos[0]) return;
    n.linePos = n.pos.map((e => t.linePos(e)));
    const {
      line: i,
      col: s
    } = n.linePos[0];
    n.message += ` at line ${i}, column ${s}`;
    let r = s - 1,
      o = e.substring(t.lineStarts[i - 1], t.lineStarts[i]).replace(/[\n\r]+$/, "");
    if (r >= 60 && o.length > 80) {
      const e = Math.min(r - 39, o.length - 79);
      o = "…" + o.substring(e), r -= e - 1
    }
    if (o.length > 80 && (o = o.substring(0, 79) + "…"), i > 1 && /^ *$/.test(o.substring(0, r))) {
      let n = e.substring(t.lineStarts[i - 2], t.lineStarts[i - 1]);
      n.length > 80 && (n = n.substring(0, 79) + "…\n"), o = n + o
    }
    if (/[^ ]/.test(o)) {
      let e = 1;
      const t = n.linePos[1];
      t && t.line === i && t.col > s && (e = Math.min(t.col - s, 80 - r));
      const a = " ".repeat(r) + "^".repeat(e);
      n.message += `:\n\n${o}\n${a}\n`
    }
  };

  function Bu(e, {
    ctx: t,
    flow: n,
    indicator: i,
    offset: s,
    onError: r,
    startOnNewline: o
  }) {
    let a = !1,
      l = o,
      c = o,
      u = "",
      f = "",
      h = !1,
      p = null,
      m = null,
      d = null,
      g = null,
      y = null;
    for (const s of e) switch (s.type) {
      case "space":
        !n && l && "doc-start" !== i && "\t" === s.source[0] && r(s, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), c = !0;
        break;
      case "comment": {
        t.options.strict && !c && r(s, "COMMENT_SPACE", "Comments must be separated from other tokens by white space characters");
        const e = s.source.substring(1);
        u ? u += f + e : u = e, f = "";
        break
      }
      case "newline":
        l && !u && (a = !0), l = !0, h = !0, c = !0, f += s.source;
        break;
      case "anchor":
        p && r(s, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), p = s, null === y && (y = s.offset), l = !1, c = !1;
        break;
      case "tag":
        m && r(s, "MULTIPLE_TAGS", "A node can have at most one tag"), m = s, null === y && (y = s.offset), l = !1, c = !1;
        break;
      case i:
        (p || m) && r(s, "BAD_PROP_ORDER", `Anchors and tags must be after the ${s.source} indicator`), g = s, l = !1, c = !1;
        break;
      case "comma":
        if (n) {
          d && r(s, "UNEXPECTED_TOKEN", `Unexpected , in ${n}`), d = s, l = !1, c = !1;
          break
        }
      default:
        r(s, "UNEXPECTED_TOKEN", `Unexpected ${s.type} token`), l = !1, c = !1
    }
    const b = e[e.length - 1],
      k = b ? b.offset + b.source.length : s;
    return {
      comma: d,
      found: g,
      spaceBefore: a,
      comment: u,
      hasNewline: h,
      anchor: p,
      tag: m,
      end: k,
      start: null != y ? y : k
    }
  }

  function Fu(e) {
    if (!e) return null;
    switch (e.type) {
      case "alias":
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        if (e.source.includes("\n")) return !0;
        if (e.end)
          for (const t of e.end)
            if ("newline" === t.type) return !0;
        return !1;
      case "flow-collection":
        for (const t of e.items) {
          for (const e of t.start)
            if ("newline" === e.type) return !0;
          if (t.sep)
            for (const e of t.sep)
              if ("newline" === e.type) return !0;
          if (Fu(t.key) || Fu(t.value)) return !0
        }
        return !1;
      default:
        return !0
    }
  }
  const Xu = "All mapping items must start at the same column";

  function Gu(e, t, n, i) {
    let s = "";
    if (e) {
      let r = !1,
        o = "";
      for (const a of e) {
        const {
          source: e,
          type: l
        } = a;
        switch (l) {
          case "space":
            r = !0;
            break;
          case "comment": {
            n && !r && i(a, "COMMENT_SPACE", "Comments must be separated from other tokens by white space characters");
            const t = e.substring(1);
            s ? s += o + t : s = t, o = "";
            break
          }
          case "newline":
            s && (o += e), r = !0;
            break;
          default:
            i(a, "UNEXPECTED_TOKEN", `Unexpected ${l} at node end`)
        }
        t += e.length
      }
    }
    return {
      comment: s,
      offset: t
    }
  }
  const Vu = "Block collections are not allowed within flow collections",
    Hu = e => e && ("block-map" === e.type || "block-seq" === e.type);

  function Wu(e, t, n, i, s) {
    let r;
    switch (n.type) {
      case "block-map":
        r = function({
          composeNode: e,
          composeEmptyNode: t
        }, n, i, s) {
          var r;
          const o = new Rc(n.schema);
          let a = i.offset;
          for (const {
              start: l,
              key: c,
              sep: u,
              value: f
            } of i.items) {
            const h = Bu(l, {
                ctx: n,
                indicator: "explicit-key-ind",
                offset: a,
                onError: s,
                startOnNewline: !0
              }),
              p = !h.found;
            if (p) {
              if (c && ("block-seq" === c.type ? s(a, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in c && c.indent !== i.indent && s(a, "BAD_INDENT", Xu)), !h.anchor && !h.tag && !u) {
                h.comment && (o.comment ? o.comment += "\n" + h.comment : o.comment = h.comment);
                continue
              }
            } else(null === (r = h.found) || void 0 === r ? void 0 : r.indent) !== i.indent && s(a, "BAD_INDENT", Xu);
            p && Fu(c) && s(c, "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
            const m = h.end,
              d = c ? e(n, c, h, s) : t(n, m, l, null, h, s),
              g = Bu(u || [], {
                ctx: n,
                indicator: "map-value-ind",
                offset: d.range[2],
                onError: s,
                startOnNewline: !c || "block-scalar" === c.type
              });
            if (a = g.end, g.found) {
              p && ("block-map" !== (null == f ? void 0 : f.type) || g.hasNewline || s(a, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && h.start < g.found.offset - 1024 && s(d.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
              const i = f ? e(n, f, g, s) : t(n, a, u, null, g, s);
              a = i.range[2], o.items.push(new Lc(d, i))
            } else p && s(d.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), g.comment && (d.comment ? d.comment += "\n" + g.comment : d.comment = g.comment), o.items.push(new Lc(d))
          }
          return o.range = [i.offset, a, a], o
        }(e, t, n, s);
        break;
      case "block-seq":
        r = function({
          composeNode: e,
          composeEmptyNode: t
        }, n, i, s) {
          const r = new Dc(n.schema);
          let o = i.offset;
          for (const {
              start: a,
              value: l
            } of i.items) {
            const i = Bu(a, {
              ctx: n,
              indicator: "seq-item-ind",
              offset: o,
              onError: s,
              startOnNewline: !0
            });
            if (o = i.end, !i.found) {
              if (!(i.anchor || i.tag || l)) {
                i.comment && (r.comment = i.comment);
                continue
              }
              l && "block-seq" === l.type ? s(o, "BAD_INDENT", "All sequence items must start at the same column") : s(o, "MISSING_CHAR", "Sequence item without - indicator")
            }
            const c = l ? e(n, l, i, s) : t(n, o, a, null, i, s);
            o = c.range[2], r.items.push(c)
          }
          return r.range = [i.offset, o, o], r
        }(e, t, n, s);
        break;
      case "flow-collection":
        r = function({
          composeNode: e,
          composeEmptyNode: t
        }, n, i, s) {
          const r = "{" === i.start.source,
            o = r ? "flow map" : "flow sequence",
            a = r ? new Rc(n.schema) : new Dc(n.schema);
          a.flow = !0;
          let l = i.offset;
          for (let c = 0; c < i.items.length; ++c) {
            const {
              start: u,
              key: f,
              sep: h,
              value: p
            } = i.items[c], m = Bu(u, {
              ctx: n,
              flow: o,
              indicator: "explicit-key-ind",
              offset: l,
              onError: s,
              startOnNewline: !1
            });
            if (!m.found) {
              if (!(m.anchor || m.tag || h || p)) {
                0 === c && m.comma ? s(m.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${o}`) : c < i.items.length - 1 && s(m.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${o}`), m.comment && (a.comment ? a.comment += "\n" + m.comment : a.comment = m.comment);
                continue
              }!r && n.options.strict && Fu(f) && s(f, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line")
            }
            if (0 === c) m.comma && s(m.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${o}`);
            else if (m.comma || s(m.start, "MISSING_CHAR", `Missing , between ${o} items`), m.comment) {
              let e = "";
              e: for (const t of u) switch (t.type) {
                case "comma":
                case "space":
                  break;
                case "comment":
                  e = t.source.substring(1);
                  break e;
                default:
                  break e
              }
              if (e) {
                let t = a.items[a.items.length - 1];
                Kl(t) && (t = t.value || t.key), t.comment ? t.comment += "\n" + e : t.comment = e, m.comment = m.comment.substring(e.length + 1)
              }
            }
            if (r || h || m.found) {
              const i = m.end,
                c = f ? e(n, f, m, s) : t(n, i, u, null, m, s);
              Hu(f) && s(c.range, "BLOCK_IN_FLOW", Vu);
              const d = Bu(h || [], {
                ctx: n,
                flow: o,
                indicator: "map-value-ind",
                offset: c.range[2],
                onError: s,
                startOnNewline: !1
              });
              if (d.found) {
                if (!r && !m.found && n.options.strict) {
                  if (h)
                    for (const e of h) {
                      if (e === d.found) break;
                      if ("newline" === e.type) {
                        s(e, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                        break
                      }
                    }
                  m.start < d.found.offset - 1024 && s(d.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key")
                }
              } else p && ("source" in p && p.source && ":" === p.source[0] ? s(p, "MISSING_CHAR", `Missing space after : in ${o}`) : s(d.start, "MISSING_CHAR", `Missing , or : between ${o} items`));
              const g = p ? e(n, p, d, s) : d.found ? t(n, d.end, h, null, d, s) : null;
              g ? Hu(p) && s(g.range, "BLOCK_IN_FLOW", Vu) : d.comment && (c.comment ? c.comment += "\n" + d.comment : c.comment = d.comment);
              const y = new Lc(c, g);
              if (r) a.items.push(y);
              else {
                const e = new Rc(n.schema);
                e.flow = !0, e.items.push(y), a.items.push(e)
              }
              l = g ? g.range[2] : d.end
            } else {
              const i = p ? e(n, p, m, s) : t(n, m.end, h, null, m, s);
              a.items.push(i), l = i.range[2], Hu(p) && s(i.range, "BLOCK_IN_FLOW", Vu)
            }
          }
          const c = r ? "}" : "]",
            [u, ...f] = i.end;
          let h = l;
          if (u && u.source === c ? h += u.source.length : (s(l + 1, "MISSING_CHAR", `Expected ${o} to end with ${c}`), u && 1 !== u.source.length && f.unshift(u)), f.length > 0) {
            const e = Gu(f, h, n.options.strict, s);
            e.comment && (a.comment ? a.comment += "\n" + e.comment : a.comment = e.comment), a.range = [i.offset, h, e.offset]
          } else a.range = [i.offset, h, h];
          return a
        }(e, t, n, s)
    }
    if (!i) return r;
    const o = t.directives.tagName(i.source, (e => s(i, "TAG_RESOLVE_FAILED", e)));
    if (!o) return r;
    const a = r.constructor;
    if ("!" === o || o === a.tagName) return r.tag = a.tagName, r;
    const l = Ul(r) ? "map" : "seq";
    let c = t.schema.tags.find((e => e.collection === l && e.tag === o));
    if (!c) {
      const e = t.schema.knownTags[o];
      if (!e || e.collection !== l) return s(i, "TAG_RESOLVE_FAILED", `Unresolved tag: ${o}`, !0), r.tag = o, r;
      t.schema.tags.push(Object.assign({}, e, {
        default: !1
      })), c = e
    }
    const u = c.resolve(r, (e => s(i, "TAG_RESOLVE_FAILED", e)), t.options),
      f = Gl(u) ? u : new lc(u);
    return f.range = r.range, f.tag = o, (null == c ? void 0 : c.format) && (f.format = c.format), f
  }

  function Yu(e, t, n) {
    const i = e.offset,
      s = function({
        offset: e,
        props: t
      }, n, i) {
        if ("block-scalar-header" !== t[0].type) return i(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
        const {
          source: s
        } = t[0], r = s[0];
        let o = 0,
          a = "",
          l = -1;
        for (let t = 1; t < s.length; ++t) {
          const n = s[t];
          if (a || "-" !== n && "+" !== n) {
            const i = Number(n);
            !o && i ? o = i : -1 === l && (l = e + t)
          } else a = n
        } - 1 !== l && i(l, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${s}`);
        let c = !1,
          u = "",
          f = s.length;
        for (let e = 1; e < t.length; ++e) {
          const s = t[e];
          switch (s.type) {
            case "space":
              c = !0;
            case "newline":
              f += s.source.length;
              break;
            case "comment":
              if (n && !c) {
                i(s, "COMMENT_SPACE", "Comments must be separated from other tokens by white space characters")
              }
              f += s.source.length, u = s.source.substring(1);
              break;
            case "error":
              i(s, "UNEXPECTED_TOKEN", s.message), f += s.source.length;
              break;
            default: {
              i(s, "UNEXPECTED_TOKEN", `Unexpected token in block scalar header: ${s.type}`);
              const e = s.source;
              e && "string" == typeof e && (f += e.length)
            }
          }
        }
        return {
          mode: r,
          indent: o,
          chomp: a,
          comment: u,
          length: f
        }
      }(e, t, n);
    if (!s) return {
      value: "",
      type: null,
      comment: "",
      range: [i, i, i]
    };
    const r = ">" === s.mode ? lc.BLOCK_FOLDED : lc.BLOCK_LITERAL,
      o = e.source ? function(e) {
        const t = e.split(/\n( *)/),
          n = t[0],
          i = n.match(/^( *)/),
          s = [i && i[1] ? [i[1], n.slice(i[1].length)] : ["", n]];
        for (let e = 1; e < t.length; e += 2) s.push([t[e], t[e + 1]]);
        return s
      }(e.source) : [];
    let a = o.length;
    for (let e = o.length - 1; e >= 0; --e) {
      const t = o[e][1];
      if ("" !== t && "\r" !== t) break;
      a = e
    }
    if (!e.source || 0 === a) {
      const t = "+" === s.chomp ? o.map((e => e[0])).join("\n") : "";
      let n = i + s.length;
      return e.source && (n += e.source.length), {
        value: t,
        type: r,
        comment: s.comment,
        range: [i, n, n]
      }
    }
    let l = e.indent + s.indent,
      c = e.offset + s.length,
      u = 0;
    for (let e = 0; e < a; ++e) {
      const [t, i] = o[e];
      if ("" !== i && "\r" !== i) {
        if (t.length < l) {
          const e = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
          n(c + t.length, "MISSING_CHAR", e)
        }
        0 === s.indent && (l = t.length), u = e;
        break
      }
      0 === s.indent && t.length > l && (l = t.length), c += t.length + i.length + 1
    }
    let f = "",
      h = "",
      p = !1;
    for (let e = 0; e < u; ++e) f += o[e][0].slice(l) + "\n";
    for (let e = u; e < a; ++e) {
      let [t, i] = o[e];
      c += t.length + i.length + 1;
      const a = "\r" === i[i.length - 1];
      if (a && (i = i.slice(0, -1)), i && t.length < l) {
        const e = `Block scalar lines must not be less indented than their ${s.indent?"explicit indentation indicator":"first line"}`;
        n(c - i.length - (a ? 2 : 1), "BAD_INDENT", e), t = ""
      }
      r === lc.BLOCK_LITERAL ? (f += h + t.slice(l) + i, h = "\n") : t.length > l || "\t" === i[0] ? (" " === h ? h = "\n" : p || "\n" !== h || (h = "\n\n"), f += h + t.slice(l) + i, h = "\n", p = !0) : "" === i ? "\n" === h ? f += "\n" : h = "\n" : (f += h + i, h = " ", p = !1)
    }
    switch (s.chomp) {
      case "-":
        break;
      case "+":
        for (let e = a; e < o.length; ++e) f += "\n" + o[e][0].slice(l);
        "\n" !== f[f.length - 1] && (f += "\n");
        break;
      default:
        f += "\n"
    }
    const m = i + s.length + e.source.length;
    return {
      value: f,
      type: r,
      comment: s.comment,
      range: [i, m, m]
    }
  }

  function Ju(e, t, n) {
    const {
      offset: i,
      type: s,
      source: r,
      end: o
    } = e;
    let a, l;
    const c = (e, t, s) => n(i + e, t, s);
    switch (s) {
      case "scalar":
        a = lc.PLAIN, l = function(e, t) {
          let n = "";
          switch (e[0]) {
            case "\t":
              n = "Plain value cannot start with a tab character";
              break;
            case "|":
            case ">":
              n = `Plain value cannot start with block scalar indicator ${e[0]}`;
              break;
            case "@":
            case "`":
              n = `Plain value cannot start with reserved character ${e[0]}`
          }
          n && t(0, "BAD_SCALAR_START", n);
          return Zu(e)
        }(r, c);
        break;
      case "single-quoted-scalar":
        a = lc.QUOTE_SINGLE, l = function(e, t) {
          "'" === e[e.length - 1] && 1 !== e.length || t(e.length, "MISSING_CHAR", "Missing closing 'quote");
          return Zu(e.slice(1, -1)).replace(/''/g, "'")
        }(r, c);
        break;
      case "double-quoted-scalar":
        a = lc.QUOTE_DOUBLE, l = function(e, t) {
          let n = "";
          for (let i = 1; i < e.length - 1; ++i) {
            const s = e[i];
            if ("\r" !== s || "\n" !== e[i + 1])
              if ("\n" === s) {
                const {
                  fold: t,
                  offset: s
                } = Qu(e, i);
                n += t, i = s
              } else if ("\\" === s) {
              let s = e[++i];
              const r = ef[s];
              if (r) n += r;
              else if ("\n" === s)
                for (s = e[i + 1];
                  " " === s || "\t" === s;) s = e[1 + ++i];
              else if ("x" === s || "u" === s || "U" === s) {
                const r = {
                  x: 2,
                  u: 4,
                  U: 8
                } [s];
                n += tf(e, i + 1, r, t), i += r
              } else {
                const s = e.substr(i - 1, 2);
                t(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${s}`), n += s
              }
            } else if (" " === s || "\t" === s) {
              const t = i;
              let r = e[i + 1];
              for (;
                " " === r || "\t" === r;) r = e[1 + ++i];
              "\n" !== r && (n += i > t ? e.slice(t, i + 1) : s)
            } else n += s
          }
          '"' === e[e.length - 1] && 1 !== e.length || t(e.length, "MISSING_CHAR", 'Missing closing "quote');
          return n
        }(r, c);
        break;
      default:
        return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${s}`), {
          value: "",
          type: null,
          comment: "",
          range: [i, i + r.length, i + r.length]
        }
    }
    const u = i + r.length,
      f = Gu(o, u, t, n);
    return {
      value: l,
      type: a,
      comment: f.comment,
      range: [i, u, f.offset]
    }
  }

  function Zu(e) {
    let t, n;
    try {
      t = new RegExp("(.*?)(?<![ \t])[ \t]*\r?\n", "sy"), n = new RegExp("[ \t]*(.*?)(?:(?<![ \t])[ \t]*)?\r?\n", "sy")
    } catch (e) {
      t = /(.*?)[ \t]*\r?\n/ys, n = /[ \t]*(.*?)[ \t]*\r?\n/ys
    }
    let i = t.exec(e);
    if (!i) return e;
    let s = i[1],
      r = " ",
      o = t.lastIndex;
    for (n.lastIndex = o; i = n.exec(e);) "" === i[1] ? "\n" === r ? s += r : r = "\n" : (s += r + i[1], r = " "), o = n.lastIndex;
    const a = /[ \t]*(.*)/ys;
    return a.lastIndex = o, i = a.exec(e), s + r + (i && i[1] || "")
  }

  function Qu(e, t) {
    let n = "",
      i = e[t + 1];
    for (; !(" " !== i && "\t" !== i && "\n" !== i && "\r" !== i || "\r" === i && "\n" !== e[t + 2]);) "\n" === i && (n += "\n"), i = e[(t += 1) + 1];
    return n || (n = " "), {
      fold: n,
      offset: t
    }
  }
  const ef = {
    0: "\0",
    a: "",
    b: "\b",
    e: "",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "\t",
    v: "\v",
    N: "",
    _: " ",
    L: "\u2028",
    P: "\u2029",
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    "\t": "\t"
  };

  function tf(e, t, n, i) {
    const s = e.substr(t, n),
      r = s.length === n && /^[0-9a-fA-F]+$/.test(s) ? parseInt(s, 16) : NaN;
    if (isNaN(r)) {
      const s = e.substr(t - 2, n + 2);
      return i(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${s}`), s
    }
    return String.fromCodePoint(r)
  }

  function nf(e, t, n, i) {
    const {
      value: s,
      type: r,
      comment: o,
      range: a
    } = "block-scalar" === t.type ? Yu(t, e.options.strict, i) : Ju(t, e.options.strict, i), l = n ? e.directives.tagName(n.source, (e => i(n, "TAG_RESOLVE_FAILED", e))) : null, c = n && l ? function(e, t, n, i, s) {
      var r;
      if ("!" === n) return e[Rl];
      const o = [];
      for (const t of e.tags)
        if (!t.collection && t.tag === n) {
          if (!t.default || !t.test) return t;
          o.push(t)
        } for (const e of o)
        if (null === (r = e.test) || void 0 === r ? void 0 : r.test(t)) return e;
      const a = e.knownTags[n];
      if (a && !a.collection) return e.tags.push(Object.assign({}, a, {
        default: !1,
        test: void 0
      })), a;
      return s(i, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, "tag:yaml.org,2002:str" !== n), e[Rl]
    }(e.schema, s, l, n, i) : function(e, t, n) {
      var i;
      if (n)
        for (const n of e.tags)
          if (n.default && (null === (i = n.test) || void 0 === i ? void 0 : i.test(t))) return n;
      return e[Rl]
    }(e.schema, s, "scalar" === t.type);
    let u;
    try {
      const r = c.resolve(s, (e => i(n || t, "TAG_RESOLVE_FAILED", e)), e.options);
      u = Bl(r) ? r : new lc(r)
    } catch (e) {
      i(n || t, "TAG_RESOLVE_FAILED", e.message), u = new lc(s)
    }
    return u.range = a, u.source = s, r && (u.type = r), l && (u.tag = l), c.format && (u.format = c.format), o && (u.comment = o), u
  }

  function sf(e, t, n) {
    if (t) {
      null === n && (n = t.length);
      for (let i = n - 1; i >= 0; --i) {
        let n = t[i];
        switch (n.type) {
          case "space":
          case "comment":
          case "newline":
            e -= n.source.length;
            continue
        }
        for (n = t[++i];
          "space" === (null == n ? void 0 : n.type);) e += n.source.length, n = t[++i];
        break
      }
    }
    return e
  }
  const rf = {
    composeNode: of ,
    composeEmptyNode: af
  };

  function of (e, t, n, i) {
    const {
      spaceBefore: s,
      comment: r,
      anchor: o,
      tag: a
    } = n;
    let l;
    switch (t.type) {
      case "alias":
        l = function({
          options: e
        }, {
          offset: t,
          source: n,
          end: i
        }, s) {
          const r = new sc(n.substring(1)),
            o = t + n.length,
            a = Gu(i, o, e.strict, s);
          r.range = [t, o, a.offset], a.comment && (r.comment = a.comment);
          return r
        }(e, t, i), (o || a) && i(t, "ALIAS_PROPS", "An alias node must not specify any properties");
        break;
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "block-scalar":
        l = nf(e, t, a, i), o && (l.anchor = o.source.substring(1));
        break;
      case "block-map":
      case "block-seq":
      case "flow-collection":
        l = Wu(rf, e, t, a, i), o && (l.anchor = o.source.substring(1));
        break;
      default:
        throw console.log(t), new Error(`Unsupporten token type: ${t.type}`)
    }
    return s && (l.spaceBefore = !0), r && ("scalar" === t.type && "" === t.source ? l.comment = r : l.commentBefore = r), l
  }

  function af(e, t, n, i, {
    spaceBefore: s,
    comment: r,
    anchor: o,
    tag: a
  }, l) {
    const c = nf(e, {
      type: "scalar",
      offset: sf(t, n, i),
      indent: -1,
      source: ""
    }, a, l);
    return o && (c.anchor = o.source.substring(1)), s && (c.spaceBefore = !0), r && (c.comment = r), c
  }

  function lf(e) {
    if ("number" == typeof e) return [e, e + 1];
    if (Array.isArray(e)) return 2 === e.length ? e : [e[0], e[1]];
    const {
      offset: t,
      source: n
    } = e;
    return [t, t + ("string" == typeof n ? n.length : 1)]
  }

  function cf(e) {
    let t = "",
      n = !1,
      i = !1;
    for (let s = 0; s < e.length; ++s) {
      const r = e[s];
      switch (r[0]) {
        case "#":
          t += ("" === t ? "" : i ? "\n\n" : "\n") + r.substring(1), n = !0, i = !1;
          break;
        case "%":
          "#" !== e[s + 1][0] && (s += 1), n = !1;
          break;
        default:
          n || (i = !0), n = !1
      }
    }
    return {
      comment: t,
      afterEmptyLine: i
    }
  }
  class uf {
    constructor(e = {}) {
      this.doc = null, this.atDirectives = !1, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (e, t, n, i) => {
        const s = lf(e);
        i ? this.warnings.push(new Uu(s, t, n)) : this.errors.push(new qu(s, t, n))
      }, this.directives = new ec({
        version: e.version || Ic.version
      }), this.options = e
    }
    decorate(e, t) {
      const {
        comment: n,
        afterEmptyLine: i
      } = cf(this.prelude);
      if (n) {
        const s = e.contents;
        if (t) e.comment = e.comment ? `${e.comment}\n${n}` : n;
        else if (i || e.directives.marker || !s) e.commentBefore = n;
        else if (Xl(s) && !s.flow && s.items.length > 0) {
          let e = s.items[0];
          Kl(e) && (e = e.key);
          const t = e.commentBefore;
          e.commentBefore = t ? `${n}\n${t}` : n
        } else {
          const e = s.commentBefore;
          s.commentBefore = e ? `${n}\n${e}` : n
        }
      }
      t ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings)) : (e.errors = this.errors, e.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = []
    }
    streamInfo() {
      return {
        comment: cf(this.prelude).comment,
        directives: this.directives,
        errors: this.errors,
        warnings: this.warnings
      }
    }* compose(e, t = !1, n = -1) {
      for (const t of e) yield* this.next(t);
      yield* this.end(t, n)
    }* next(e) {
      switch (e.type) {
        case "directive":
          this.directives.add(e.source, ((t, n, i) => {
            const s = lf(e);
            s[0] += t, this.onError(s, "BAD_DIRECTIVE", n, i)
          })), this.prelude.push(e.source), this.atDirectives = !0;
          break;
        case "document": {
          const t = function(e, t, {
            offset: n,
            start: i,
            value: s,
            end: r
          }, o) {
            const a = Object.assign({
                directives: t
              }, e),
              l = new Pu(void 0, a),
              c = {
                directives: l.directives,
                options: l.options,
                schema: l.schema
              },
              u = Bu(i, {
                ctx: c,
                indicator: "doc-start",
                offset: n,
                onError: o,
                startOnNewline: !0
              });
            u.found && (l.directives.marker = !0, !s || "block-map" !== s.type && "block-seq" !== s.type || u.hasNewline || o(u.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), l.contents = s ? of (c, s, u, o) : af(c, u.end, i, null, u, o);
            const f = l.contents.range[2],
              h = Gu(r, f, !1, o);
            return h.comment && (l.comment = h.comment), l.range = [n, f, h.offset], l
          }(this.options, this.directives, e, this.onError);
          this.atDirectives && !t.directives.marker && this.onError(e, "MISSING_CHAR", "Missing directives-end indicator line"), this.decorate(t, !1), this.doc && (yield this.doc), this.doc = t, this.atDirectives = !1;
          break
        }
        case "byte-order-mark":
        case "space":
          break;
        case "comment":
        case "newline":
          this.prelude.push(e.source);
          break;
        case "error": {
          const t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message,
            n = new qu(lf(e), "UNEXPECTED_TOKEN", t);
          this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
          break
        }
        case "doc-end": {
          if (!this.doc) {
            const t = "Unexpected doc-end without preceding document";
            this.errors.push(new qu(lf(e), "UNEXPECTED_TOKEN", t));
            break
          }
          const t = Gu(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
          if (this.decorate(this.doc, !0), t.comment) {
            const e = this.doc.comment;
            this.doc.comment = e ? `${e}\n${t.comment}` : t.comment
          }
          this.doc.range[2] = t.offset;
          break
        }
        default:
          this.errors.push(new qu(lf(e), "UNEXPECTED_TOKEN", `Unsupported token ${e.type}`))
      }
    }* end(e = !1, t = -1) {
      if (this.doc) this.decorate(this.doc, !0), yield this.doc, this.doc = null;
      else if (e) {
        const e = Object.assign({
            directives: this.directives
          }, this.options),
          n = new Pu(void 0, e);
        this.atDirectives && this.onError(t, "MISSING_CHAR", "Missing directives-end indicator line"), n.range = [0, t, t], this.decorate(n, !1), yield n
      }
    }
  }

  function ff(e) {
    switch (e) {
      case void 0:
      case " ":
      case "\n":
      case "\r":
      case "\t":
        return !0;
      default:
        return !1
    }
  }
  const hf = [",", "[", "]", "{", "}"],
    pf = [" ", ",", "[", "]", "{", "}", "\n", "\r", "\t"],
    mf = e => !e || pf.includes(e);
  class df {
    constructor() {
      this.atEnd = !1, this.blockScalarIndent = -1, this.blockScalarKeep = !1, this.buffer = "", this.flowKey = !1, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.next = null, this.pos = 0
    }* lex(e, t = !1) {
      e && (this.buffer = this.buffer ? this.buffer + e : e), this.atEnd = !t;
      let n = this.next || "stream";
      for (; n && (t || this.hasChars(1));) n = yield* this.parseNext(n)
    }
    atLineEnd() {
      let e = this.pos,
        t = this.buffer[e];
      for (;
        " " === t || "\t" === t;) t = this.buffer[++e];
      return !t || "#" === t || "\n" === t || "\r" === t && "\n" === this.buffer[e + 1]
    }
    charAt(e) {
      return this.buffer[this.pos + e]
    }
    continueScalar(e) {
      let t = this.buffer[e];
      if (this.indentNext > 0) {
        let n = 0;
        for (;
          " " === t;) t = this.buffer[++n + e];
        if ("\r" === t) {
          const t = this.buffer[n + e + 1];
          if ("\n" === t || !t && !this.atEnd) return e + n + 1
        }
        return "\n" === t || n >= this.indentNext || !t && !this.atEnd ? e + n : -1
      }
      if ("-" === t || "." === t) {
        const t = this.buffer.substr(e, 3);
        if (("---" === t || "..." === t) && ff(this.buffer[e + 3])) return -1
      }
      return e
    }
    getLine() {
      let e = this.buffer.indexOf("\n", this.pos);
      return -1 === e ? this.atEnd ? this.buffer.substring(this.pos) : null : ("\r" === this.buffer[e - 1] && (e -= 1), this.buffer.substring(this.pos, e))
    }
    hasChars(e) {
      return this.pos + e <= this.buffer.length
    }
    setNext(e) {
      return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.next = e, null
    }
    peek(e) {
      return this.buffer.substr(this.pos, e)
    }* parseNext(e) {
      switch (e) {
        case "stream":
          return yield* this.parseStream();
        case "line-start":
          return yield* this.parseLineStart();
        case "block-start":
          return yield* this.parseBlockStart();
        case "doc":
          return yield* this.parseDocument();
        case "flow":
          return yield* this.parseFlowCollection();
        case "quoted-scalar":
          return yield* this.parseQuotedScalar();
        case "block-scalar":
          return yield* this.parseBlockScalar();
        case "plain-scalar":
          return yield* this.parsePlainScalar()
      }
    }* parseStream() {
      let e = this.getLine();
      if (null === e) return this.setNext("stream");
      if ("\ufeff" === e[0] && (yield* this.pushCount(1), e = e.substring(1)), "%" === e[0]) {
        let t = e.length;
        const n = e.indexOf("#");
        if (-1 !== n) {
          const i = e[n - 1];
          " " !== i && "\t" !== i || (t = n - 1)
        }
        for (;;) {
          const n = e[t - 1];
          if (" " !== n && "\t" !== n) break;
          t -= 1
        }
        const i = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
        return yield* this.pushCount(e.length - i), this.pushNewline(), "stream"
      }
      if (this.atLineEnd()) {
        const t = yield* this.pushSpaces(!0);
        return yield* this.pushCount(e.length - t), yield* this.pushNewline(), "stream"
      }
      return yield "", yield* this.parseLineStart()
    }* parseLineStart() {
      const e = this.charAt(0);
      if (!e && !this.atEnd) return this.setNext("line-start");
      if ("-" === e || "." === e) {
        if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
        const e = this.peek(3);
        if ("---" === e && ff(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, "doc";
        if ("..." === e && ff(this.charAt(3))) return yield* this.pushCount(3), "stream"
      }
      return this.indentValue = yield* this.pushSpaces(!1), this.indentNext > this.indentValue && !ff(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart()
    }* parseBlockStart() {
      const [e, t] = this.peek(2);
      if (!t && !this.atEnd) return this.setNext("block-start");
      if (("-" === e || "?" === e || ":" === e) && ff(t)) {
        const e = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
        return this.indentNext = this.indentValue + 1, this.indentValue += e, yield* this.parseBlockStart()
      }
      return "doc"
    }* parseDocument() {
      yield* this.pushSpaces(!0);
      const e = this.getLine();
      if (null === e) return this.setNext("doc");
      let t = yield* this.pushIndicators();
      switch (e[t]) {
        case "#":
          yield* this.pushCount(e.length - t);
        case void 0:
          return yield* this.pushNewline(), yield* this.parseLineStart();
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel = 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), "doc";
        case "*":
          return yield* this.pushUntil(mf), "doc";
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case "|":
        case ">":
          return t += (yield* this.parseBlockScalarHeader()), t += (yield* this.pushSpaces(!0)), yield* this.pushCount(e.length - t), yield* this.pushNewline(), yield* this.parseBlockScalar();
        default:
          return yield* this.parsePlainScalar()
      }
    }* parseFlowCollection() {
      let e, t, n = -1;
      do {
        e = yield* this.pushNewline(), t = yield* this.pushSpaces(!0), e > 0 && (this.indentValue = n = t)
      } while (e + t > 0);
      const i = this.getLine();
      if (null === i) return this.setNext("flow");
      if (-1 !== n && n < this.indentNext || 0 === n && (i.startsWith("---") || i.startsWith("...")) && ff(i[3])) {
        if (!(n === this.indentNext - 1 && 1 === this.flowLevel && ("]" === i[0] || "}" === i[0]))) return this.flowLevel = 0, yield "", yield* this.parseLineStart()
      }
      let s = 0;
      for (;
        "," === i[s];) s += (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
      switch (s += (yield* this.pushIndicators()), i[s]) {
        case void 0:
          return "flow";
        case "#":
          return yield* this.pushCount(i.length - s), "flow";
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = !1, this.flowLevel += 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), this.flowKey = !0, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
        case "*":
          return yield* this.pushUntil(mf), "flow";
        case '"':
        case "'":
          return this.flowKey = !0, yield* this.parseQuotedScalar();
        case ":": {
          const e = this.charAt(1);
          if (this.flowKey || ff(e) || "," === e) return yield* this.pushCount(1), yield* this.pushSpaces(!0), "flow"
        }
        default:
          return this.flowKey = !1, yield* this.parsePlainScalar()
      }
    }* parseQuotedScalar() {
      const e = this.charAt(0);
      let t = this.buffer.indexOf(e, this.pos + 1);
      if ("'" === e)
        for (; - 1 !== t && "'" === this.buffer[t + 1];) t = this.buffer.indexOf("'", t + 2);
      else
        for (; - 1 !== t;) {
          let e = 0;
          for (;
            "\\" === this.buffer[t - 1 - e];) e += 1;
          if (e % 2 == 0) break;
          t = this.buffer.indexOf('"', t + 1)
        }
      let n = this.buffer.indexOf("\n", this.pos);
      if (-1 !== n && n < t) {
        for (; - 1 !== n && n < t;) {
          const e = this.continueScalar(n + 1);
          if (-1 === e) break;
          n = this.buffer.indexOf("\n", e)
        } - 1 !== n && n < t && (t = n - 1)
      }
      if (-1 === t) {
        if (!this.atEnd) return this.setNext("quoted-scalar");
        t = this.buffer.length
      }
      return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? "flow" : "doc"
    }* parseBlockScalarHeader() {
      this.blockScalarIndent = -1, this.blockScalarKeep = !1;
      let e = this.pos;
      for (;;) {
        const t = this.buffer[++e];
        if ("+" === t) this.blockScalarKeep = !0;
        else if (t > "0" && t <= "9") this.blockScalarIndent = Number(t) - 1;
        else if ("-" !== t) break
      }
      return yield* this.pushUntil((e => ff(e) || "#" === e))
    }* parseBlockScalar() {
      let e, t = this.pos - 1,
        n = 0;
      e: for (let i = this.pos; e = this.buffer[i]; ++i) switch (e) {
        case " ":
          n += 1;
          break;
        case "\n":
          t = i, n = 0;
          break;
        case "\r": {
          const e = this.buffer[i + 1];
          if (!e && !this.atEnd) return this.setNext("block-scalar");
          if ("\n" === e) break
        }
        default:
          break e
      }
      if (!e && !this.atEnd) return this.setNext("block-scalar");
      if (n >= this.indentNext) {
        -1 === this.blockScalarIndent ? this.indentNext = n : this.indentNext += this.blockScalarIndent;
        do {
          const e = this.continueScalar(t + 1);
          if (-1 === e) break;
          t = this.buffer.indexOf("\n", e)
        } while (-1 !== t);
        if (-1 === t) {
          if (!this.atEnd) return this.setNext("block-scalar");
          t = this.buffer.length
        }
      }
      if (!this.blockScalarKeep)
        for (;;) {
          let e = t - 1,
            n = this.buffer[e];
          for ("\r" === n && (n = this.buffer[--e]);
            " " === n || "\t" === n;) n = this.buffer[--e];
          if (!("\n" === n && e >= this.pos)) break;
          t = e
        }
      return yield "", yield* this.pushToIndex(t + 1, !0), yield* this.parseLineStart()
    }* parsePlainScalar() {
      const e = this.flowLevel > 0;
      let t, n = this.pos - 1,
        i = this.pos - 1;
      for (; t = this.buffer[++i];)
        if (":" === t) {
          const t = this.buffer[i + 1];
          if (ff(t) || e && "," === t) break;
          n = i
        } else if (ff(t)) {
        const s = this.buffer[i + 1];
        if ("#" === s || e && hf.includes(s)) break;
        if ("\r" === t && ("\n" === s ? (i += 1, t = "\n") : n = i), "\n" === t) {
          const e = this.continueScalar(i + 1);
          if (-1 === e) break;
          i = Math.max(i, e - 2)
        }
      } else {
        if (e && hf.includes(t)) break;
        n = i
      }
      return t || this.atEnd ? (yield "", yield* this.pushToIndex(n + 1, !0), e ? "flow" : "doc") : this.setNext("plain-scalar")
    }* pushCount(e) {
      return e > 0 ? (yield this.buffer.substr(this.pos, e), this.pos += e, e) : 0
    }* pushToIndex(e, t) {
      const n = this.buffer.slice(this.pos, e);
      return n ? (yield n, this.pos += n.length, n.length) : (t && (yield ""), 0)
    }* pushIndicators() {
      switch (this.charAt(0)) {
        case "!":
          if ("<" === this.charAt(1)) return (yield* this.pushVerbatimTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case "&":
          return (yield* this.pushUntil(mf)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case ":":
        case "?":
        case "-":
          if (ff(this.charAt(1))) return 0 === this.flowLevel && (this.indentNext = this.indentValue + 1), (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators())
      }
      return 0
    }* pushVerbatimTag() {
      let e = this.pos + 2,
        t = this.buffer[e];
      for (; !ff(t) && ">" !== t;) t = this.buffer[++e];
      return yield* this.pushToIndex(">" === t ? e + 1 : e, !1)
    }* pushNewline() {
      const e = this.buffer[this.pos];
      return "\n" === e ? yield* this.pushCount(1): "\r" === e && "\n" === this.charAt(1) ? yield* this.pushCount(2): 0
    }* pushSpaces(e) {
      let t, n = this.pos - 1;
      do {
        t = this.buffer[++n]
      } while (" " === t || e && "\t" === t);
      const i = n - this.pos;
      return i > 0 && (yield this.buffer.substr(this.pos, i), this.pos = n), i
    }* pushUntil(e) {
      let t = this.pos,
        n = this.buffer[t];
      for (; !e(n);) n = this.buffer[++t];
      return yield* this.pushToIndex(t, !1)
    }
  }
  class gf {
    constructor() {
      this.lineStarts = [], this.addNewLine = e => this.lineStarts.push(e), this.linePos = e => {
        let t = 0,
          n = this.lineStarts.length;
        for (; t < n;) {
          const i = t + n >> 1;
          this.lineStarts[i] < e ? t = i + 1 : n = i
        }
        if (this.lineStarts[t] === e) return {
          line: t + 1,
          col: 1
        };
        if (0 === t) return {
          line: 0,
          col: e
        };
        return {
          line: t,
          col: e - this.lineStarts[t - 1] + 1
        }
      }
    }
  }

  function yf(e, t) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].type === t) return !0;
    return !1
  }

  function bf(e) {
    for (let t = 0; t < e.length; ++t) switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return !0
    }
    return !1
  }

  function kf(e) {
    let t = !1;
    for (let n = 0; n < e.length; ++n) switch (e[n].type) {
      case "space":
        break;
      case "comment":
        t = !0;
        break;
      case "newline":
        if (!t) return !1;
        break;
      default:
        return !1
    }
    if (t)
      for (let t = e.length - 1; t >= 0; --t) switch (e[t].type) {
        case "space":
          break;
        case "newline":
          return !0;
        default:
          return !1
      }
    return !1
  }

  function vf(e) {
    switch (null == e ? void 0 : e.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return !0;
      default:
        return !1
    }
  }

  function wf(e) {
    switch (e.type) {
      case "document":
        return e.start;
      case "block-map": {
        const t = e.items[e.items.length - 1];
        return t.sep || t.start
      }
      case "block-seq":
        return e.items[e.items.length - 1].start;
      default:
        return []
    }
  }

  function xf(e) {
    var t;
    if (0 === e.length) return [];
    let n = e.length;
    e: for (; --n >= 0;) switch (e[n].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e
    }
    for (;
      "space" === (null === (t = e[++n]) || void 0 === t ? void 0 : t.type););
    return e.splice(n, e.length)
  }

  function zf(e) {
    if ("flow-seq-start" === e.start.type)
      for (const t of e.items) !t.sep || t.value || yf(t.start, "explicit-key-ind") || yf(t.sep, "map-value-ind") || (t.key && (t.value = t.key), delete t.key, vf(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep)
  }
  class Ef {
    constructor(e) {
      this.atNewLine = !0, this.atScalar = !1, this.indent = 0, this.offset = 0, this.onKeyLine = !1, this.stack = [], this.source = "", this.type = "", this.lexer = new df, this.onNewLine = e
    }* parse(e, t = !1) {
      this.onNewLine && 0 === this.offset && this.onNewLine(0);
      for (const n of this.lexer.lex(e, t)) yield* this.next(n);
      t || (yield* this.end())
    }* next(e) {
      if (this.source = e, this.atScalar) return this.atScalar = !1, yield* this.step(), void(this.offset += e.length);
      const t = function(e) {
        switch (e) {
          case "\ufeff":
            return "byte-order-mark";
          case "":
            return "doc-mode";
          case "":
            return "flow-error-end";
          case "":
            return "scalar";
          case "---":
            return "doc-start";
          case "...":
            return "doc-end";
          case "":
          case "\n":
          case "\r\n":
            return "newline";
          case "-":
            return "seq-item-ind";
          case "?":
            return "explicit-key-ind";
          case ":":
            return "map-value-ind";
          case "{":
            return "flow-map-start";
          case "}":
            return "flow-map-end";
          case "[":
            return "flow-seq-start";
          case "]":
            return "flow-seq-end";
          case ",":
            return "comma"
        }
        switch (e[0]) {
          case " ":
          case "\t":
            return "space";
          case "#":
            return "comment";
          case "%":
            return "directive-line";
          case "*":
            return "alias";
          case "&":
            return "anchor";
          case "!":
            return "tag";
          case "'":
            return "single-quoted-scalar";
          case '"':
            return "double-quoted-scalar";
          case "|":
          case ">":
            return "block-scalar-header"
        }
        return null
      }(e);
      if (t)
        if ("scalar" === t) this.atNewLine = !1, this.atScalar = !0, this.type = "scalar";
        else {
          switch (this.type = t, yield* this.step(), t) {
            case "newline":
              this.atNewLine = !0, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + e.length);
              break;
            case "space":
              this.atNewLine && " " === e[0] && (this.indent += e.length);
              break;
            case "explicit-key-ind":
            case "map-value-ind":
            case "seq-item-ind":
              this.atNewLine && (this.indent += e.length);
              break;
            case "doc-mode":
              return;
            default:
              this.atNewLine = !1
          }
          this.offset += e.length
        }
      else {
        const t = `Not a YAML token: ${e}`;
        yield* this.pop({
          type: "error",
          offset: this.offset,
          message: t,
          source: e
        }), this.offset += e.length
      }
    }* end() {
      for (; this.stack.length > 0;) yield* this.pop()
    }
    get sourceToken() {
      return {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      }
    }* step() {
      const e = this.peek(1);
      if ("doc-end" !== this.type || e && "doc-end" === e.type) {
        if (!e) return yield* this.stream();
        switch (e.type) {
          case "document":
            return yield* this.document(e);
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar":
            return yield* this.scalar(e);
          case "block-scalar":
            return yield* this.blockScalar(e);
          case "block-map":
            return yield* this.blockMap(e);
          case "block-seq":
            return yield* this.blockSequence(e);
          case "flow-collection":
            return yield* this.flowCollection(e);
          case "doc-end":
            return yield* this.documentEnd(e)
        }
        yield* this.pop()
      } else {
        for (; this.stack.length > 0;) yield* this.pop();
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source
        })
      }
    }
    peek(e) {
      return this.stack[this.stack.length - e]
    }* pop(e) {
      const t = e || this.stack.pop();
      if (t)
        if (0 === this.stack.length) yield t;
        else {
          const e = this.peek(1);
          switch ("block-scalar" !== t.type && "flow-collection" !== t.type || (t.indent = "indent" in e ? e.indent : -1), "flow-collection" === t.type && zf(t), e.type) {
            case "document":
              e.value = t;
              break;
            case "block-scalar":
              e.props.push(t);
              break;
            case "block-map": {
              const n = e.items[e.items.length - 1];
              if (n.value) return e.items.push({
                start: [],
                key: t,
                sep: []
              }), void(this.onKeyLine = !0);
              if (!n.sep) return Object.assign(n, {
                key: t,
                sep: []
              }), void(this.onKeyLine = !yf(n.start, "explicit-key-ind"));
              n.value = t;
              break
            }
            case "block-seq": {
              const n = e.items[e.items.length - 1];
              n.value ? e.items.push({
                start: [],
                value: t
              }) : n.value = t;
              break
            }
            case "flow-collection": {
              const n = e.items[e.items.length - 1];
              return void(!n || n.value ? e.items.push({
                start: [],
                key: t,
                sep: []
              }) : n.sep ? n.value = t : Object.assign(n, {
                key: t,
                sep: []
              }))
            }
            default:
              yield* this.pop(), yield* this.pop(t)
          }
          if (!("document" !== e.type && "block-map" !== e.type && "block-seq" !== e.type || "block-map" !== t.type && "block-seq" !== t.type)) {
            const n = t.items[t.items.length - 1];
            n && !n.sep && !n.value && n.start.length > 0 && !bf(n.start) && (0 === t.indent || n.start.every((e => "comment" !== e.type || e.indent < t.indent))) && ("document" === e.type ? e.end = n.start : e.items.push({
              start: n.start
            }), t.items.splice(-1, 1))
          }
        }
      else {
        const e = "Tried to pop an empty stack";
        yield {
          type: "error",
          offset: this.offset,
          source: "",
          message: e
        }
      }
    }* stream() {
      switch (this.type) {
        case "directive-line":
          return void(yield {
            type: "directive",
            offset: this.offset,
            source: this.source
          });
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          return void(yield this.sourceToken);
        case "doc-mode":
        case "doc-start": {
          const e = {
            type: "document",
            offset: this.offset,
            start: []
          };
          return "doc-start" === this.type && e.start.push(this.sourceToken), void this.stack.push(e)
        }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source
      }
    }* document(e) {
      if (e.value) return yield* this.lineEnd(e);
      switch (this.type) {
        case "doc-start":
          return void(bf(e.start) ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken));
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          return void e.start.push(this.sourceToken)
      }
      const t = this.startBlockValue(e);
      t ? this.stack.push(t) : yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML document`,
        source: this.source
      }
    }* scalar(e) {
      if ("map-value-ind" === this.type) {
        const t = xf(wf(this.peek(2)));
        let n;
        e.end ? (n = e.end, n.push(this.sourceToken), delete e.end) : n = [this.sourceToken];
        const i = {
          type: "block-map",
          offset: e.offset,
          indent: e.indent,
          items: [{
            start: t,
            key: e,
            sep: n
          }]
        };
        this.onKeyLine = !0, this.stack[this.stack.length - 1] = i
      } else yield* this.lineEnd(e)
    }* blockScalar(e) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          return void e.props.push(this.sourceToken);
        case "scalar":
          if (e.source = this.source, this.atNewLine = !0, this.indent = 0, this.onNewLine) {
            let e = this.source.indexOf("\n") + 1;
            for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
          }
          yield* this.pop();
          break;
        default:
          yield* this.pop(), yield* this.step()
      }
    }* blockMap(e) {
      var t;
      const n = e.items[e.items.length - 1];
      switch (this.type) {
        case "newline":
          if (this.onKeyLine = !1, !n.sep && kf(n.start)) {
            const i = e.items[e.items.length - 2],
              s = null === (t = null == i ? void 0 : i.value) || void 0 === t ? void 0 : t.end;
            if (Array.isArray(s)) return Array.prototype.push.apply(s, n.start), void(n.start = [this.sourceToken])
          }
        case "space":
        case "comment":
          return void(n.value ? e.items.push({
            start: [this.sourceToken]
          }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken))
      }
      if (this.indent >= e.indent) {
        const t = !this.onKeyLine && this.indent === e.indent && (n.sep || bf(n.start));
        switch (this.type) {
          case "anchor":
          case "tag":
            return void(t || n.value ? (e.items.push({
              start: [this.sourceToken]
            }), this.onKeyLine = !0) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken));
          case "explicit-key-ind":
            return n.sep || yf(n.start, "explicit-key-ind") ? t || n.value ? e.items.push({
              start: [this.sourceToken]
            }) : this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: [this.sourceToken]
              }]
            }) : n.start.push(this.sourceToken), void(this.onKeyLine = !0);
          case "map-value-ind":
            if (n.sep)
              if (n.value || t && !yf(n.start, "explicit-key-ind")) e.items.push({
                start: [],
                key: null,
                sep: [this.sourceToken]
              });
              else if (yf(n.sep, "map-value-ind")) this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [{
                start: [],
                key: null,
                sep: [this.sourceToken]
              }]
            });
            else if (yf(n.start, "explicit-key-ind") && vf(n.key) && !yf(n.sep, "newline")) {
              const e = xf(n.start),
                t = n.key,
                i = n.sep;
              i.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [{
                  start: e,
                  key: t,
                  sep: i
                }]
              })
            } else n.sep.push(this.sourceToken);
            else Object.assign(n, {
              key: null,
              sep: [this.sourceToken]
            });
            return void(this.onKeyLine = !0);
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const i = this.flowScalar(this.type);
            return void(t || n.value ? (e.items.push({
              start: [],
              key: i,
              sep: []
            }), this.onKeyLine = !0) : n.sep ? this.stack.push(i) : (Object.assign(n, {
              key: i,
              sep: []
            }), this.onKeyLine = !0))
          }
          default: {
            const i = this.startBlockValue(e);
            if (i) return t && "block-seq" !== i.type && yf(n.start, "explicit-key-ind") && e.items.push({
              start: []
            }), void this.stack.push(i)
          }
        }
      }
      yield* this.pop(), yield* this.step()
    }* blockSequence(e) {
      var t;
      const n = e.items[e.items.length - 1];
      switch (this.type) {
        case "newline":
          if (!n.value && kf(n.start)) {
            const i = e.items[e.items.length - 2],
              s = null === (t = null == i ? void 0 : i.value) || void 0 === t ? void 0 : t.end;
            if (Array.isArray(s)) return Array.prototype.push.apply(s, n.start), void(n.start = [this.sourceToken])
          }
        case "space":
        case "comment":
          return void(n.value ? e.items.push({
            start: [this.sourceToken]
          }) : n.start.push(this.sourceToken));
        case "anchor":
        case "tag":
          if (n.value || this.indent <= e.indent) break;
          return void n.start.push(this.sourceToken);
        case "seq-item-ind":
          if (this.indent !== e.indent) break;
          return void(n.value || yf(n.start, "seq-item-ind") ? e.items.push({
            start: [this.sourceToken]
          }) : n.start.push(this.sourceToken))
      }
      if (this.indent > e.indent) {
        const t = this.startBlockValue(e);
        if (t) return void this.stack.push(t)
      }
      yield* this.pop(), yield* this.step()
    }* flowCollection(e) {
      const t = e.items[e.items.length - 1];
      if ("flow-error-end" === this.type) {
        let e;
        do {
          yield* this.pop(), e = this.peek(1)
        } while (e && "flow-collection" === e.type)
      } else if (0 === e.end.length) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            return void(!t || t.sep ? e.items.push({
              start: [this.sourceToken]
            }) : t.start.push(this.sourceToken));
          case "map-value-ind":
            return void(!t || t.value ? e.items.push({
              start: [],
              key: null,
              sep: [this.sourceToken]
            }) : t.sep ? t.sep.push(this.sourceToken) : Object.assign(t, {
              key: null,
              sep: [this.sourceToken]
            }));
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            return void(!t || t.value ? e.items.push({
              start: [this.sourceToken]
            }) : t.sep ? t.sep.push(this.sourceToken) : t.start.push(this.sourceToken));
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const n = this.flowScalar(this.type);
            return void(!t || t.value ? e.items.push({
              start: [],
              key: n,
              sep: []
            }) : t.sep ? this.stack.push(n) : Object.assign(t, {
              key: n,
              sep: []
            }))
          }
          case "flow-map-end":
          case "flow-seq-end":
            return void e.end.push(this.sourceToken)
        }
        const n = this.startBlockValue(e);
        n ? this.stack.push(n) : (yield* this.pop(), yield* this.step())
      } else {
        const t = this.peek(2);
        if ("block-map" !== t.type || "map-value-ind" !== this.type && ("newline" !== this.type || t.items[t.items.length - 1].sep))
          if ("map-value-ind" === this.type && "flow-collection" !== t.type) {
            const n = xf(wf(t));
            zf(e);
            const i = e.end.splice(1, e.end.length);
            i.push(this.sourceToken);
            const s = {
              type: "block-map",
              offset: e.offset,
              indent: e.indent,
              items: [{
                start: n,
                key: e,
                sep: i
              }]
            };
            this.onKeyLine = !0, this.stack[this.stack.length - 1] = s
          } else yield* this.lineEnd(e);
        else yield* this.pop(), yield* this.step()
      }
    }
    flowScalar(e) {
      if (this.onNewLine) {
        let e = this.source.indexOf("\n") + 1;
        for (; 0 !== e;) this.onNewLine(this.offset + e), e = this.source.indexOf("\n", e) + 1
      }
      return {
        type: e,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      }
    }
    startBlockValue(e) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar", offset: this.offset, indent: this.indent, props: [this.sourceToken], source: ""
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection", offset: this.offset, indent: this.indent, start: this.sourceToken, items: [], end: []
          };
        case "seq-item-ind":
          return {
            type: "block-seq", offset: this.offset, indent: this.indent, items: [{
              start: [this.sourceToken]
            }]
          };
        case "explicit-key-ind": {
          this.onKeyLine = !0;
          const t = xf(wf(e));
          return t.push(this.sourceToken), {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{
              start: t
            }]
          }
        }
        case "map-value-ind": {
          this.onKeyLine = !0;
          const t = xf(wf(e));
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [{
              start: t,
              key: null,
              sep: [this.sourceToken]
            }]
          }
        }
      }
      return null
    }* documentEnd(e) {
      "doc-mode" !== this.type && (e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && (yield* this.pop()))
    }* lineEnd(e) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          yield* this.pop(), yield* this.step();
          break;
        case "newline":
          this.onKeyLine = !1;
        case "space":
        case "comment":
        default:
          e.end ? e.end.push(this.sourceToken) : e.end = [this.sourceToken], "newline" === this.type && (yield* this.pop())
      }
    }
  }

  function _f(e, t = {}) {
    const {
      lineCounter: n,
      prettyErrors: i
    } = function(e) {
      const t = !e || !1 !== e.prettyErrors;
      return {
        lineCounter: e && e.lineCounter || t && new gf || null,
        prettyErrors: t
      }
    }(t), s = new Ef(null == n ? void 0 : n.addNewLine), r = new uf(t);
    let o = null;
    for (const t of r.compose(s.parse(e), !0, e.length))
      if (o) {
        if ("silent" !== o.options.logLevel) {
          o.errors.push(new qu(t.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
          break
        }
      } else o = t;
    return i && n && (o.errors.forEach(Ku(e, n)), o.warnings.forEach(Ku(e, n))), o
  }

  function Tf(e, t, n) {
    let i;
    "function" == typeof t ? i = t : void 0 === n && t && "object" == typeof t && (n = t);
    const s = _f(e, n);
    if (!s) return null;
    if (s.warnings.forEach((e => $c(s.options.logLevel, e))), s.errors.length > 0) {
      if ("silent" !== s.options.logLevel) throw s.errors[0];
      s.errors = []
    }
    return s.toJS(Object.assign({
      reviver: i
    }, n))
  }
  const $f = {
      hr(e) {
        const t = RegExp(/^ {0,3}(-{3,}(?=[^-\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~-]* *(?:\n+|$)|$)/).exec(e);
        if (t) return {
          type: "options",
          raw: t[0],
          data: Tf(t[3], {})
        }
      }
    },
    Sf = {
      paragraph: e => e,
      blockquote: e => e,
      heading: e => e
    };

  function Af(e, t) {
    let n = function(e) {
        return Ol.lexer(function(e) {
          return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
        }((e => {
          const t = aa(e);
          if (0 === t) return e;
          const n = new RegExp(`^[ \\t]{${t}}`, "gm");
          return e.replace(n, "")
        })(e)))
      }(e),
      i = new va(t);
    (function(e) {
      let t = e.findIndex((e => "options" == e.type)),
        n = e.findIndex((e => "heading" == e.type));
      return -1 !== t && n > t
    })(n) && (i = function(e, t) {
      let n = e.find((e => "options" == e.type));
      return function(e, t) {
        let n = new va(e);
        for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
        return n
      }(t, n.data)
    }(n, i));
    let s = Of(n),
      r = function(e, t) {
        let n = [],
          i = 0;
        for (; 0 !== e.length;) {
          i = Of(e.slice(1)), -1 === i && (i = e.length);
          let s = Nf(e.splice(0, i + 1), t);
          n.push(s)
        }
        return n
      }(n.slice(s), i);
    return new ya(r, i)
  }

  function Nf(e, t) {
    let n = function(e) {
        return Lf(e.filter((e => "paragraph" == e.type || "code" == e.type)))
      }(e),
      i = function(e) {
        return Lf(e.filter((e => "blockquote" == e.type)))
      }(e),
      s = function(e) {
        return Lf(e.filter((e => "heading" == e.type)))
      }(e),
      r = function(e) {
        let t = e.find((e => "list" == e.type)),
          n = [];
        return t.items.forEach((function(e, t) {
          let i = function(e) {
            let t = e.tokens.filter((e => "blockquote" == e.type));
            return {
              text: Lf(e.tokens.filter((e => "blockquote" != e.type))),
              comment: Lf(t)
            }
          }(e);
          n.push(new ga(t, i.text, e.checked, i.comment))
        })), n
      }(e),
      o = function(e) {
        let t = e.find((e => "list" == e.type));
        return t.ordered ? t.items[0].task ? "SingleChoice" : "Sequence" : "MultipleChoice"
      }(e);
    const a = [s, n, i, r, new va(t)];
    switch (o) {
      case "SingleChoice":
        return new da(...a);
      case "MultipleChoice":
        return new ma(...a);
      case "Sequence":
        return new ha(...a)
    }
  }

  function Of(e) {
    return e.findIndex((e => "heading" == e.type))
  }

  function Lf(e) {
    return oa.sanitize(Ol.parser(e))
  }

  function If(e, t, n) {
    let i;
    t.innerHTML = "", t.shadowRoot ? (i = t.shadowRoot, i.innerHTML = "") : i = t.attachShadow({
      mode: "open"
    });
    try {
      let t = Af(e, n);
      return new uo({
        target: i,
        intro: !1,
        props: {
          quiz: t
        }
      })
    } catch (e) {
      i.innerHTML = `${e}. App could not render. Please check your quizdown syntax.`
    }
  }
  return Ol.use({
    renderer: Sf,
    tokenizer: $f
  }), {
    init: function(e = {}) {
      let t = new va(e);
      t.startOnLoad && "undefined" != typeof document && window.addEventListener("load", (function() {
        let e = document.querySelectorAll(".quizdown");
        for (let n of e) If(n.innerHTML, n, t)
      }), !1)
    },
    register: function(e) {
      return e.setup(this), this
    },
    parseQuizdown: Af,
    createApp: If,
    getMarkedParser: function() {
      return Ol
    }
  }
}));
