! function(e, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : (e = "undefined" != typeof globalThis ? globalThis : e || self).quizdownHighlight = n()
}(this, (function() {
  "use strict";

  function e(n) {
    return n instanceof Map ? n.clear = n.delete = n.set = function() {
      throw new Error("map is read-only")
    } : n instanceof Set && (n.add = n.clear = n.delete = function() {
      throw new Error("set is read-only")
    }), Object.freeze(n), Object.getOwnPropertyNames(n).forEach((function(t) {
      var i = n[t];
      "object" != typeof i || Object.isFrozen(i) || e(i)
    })), n
  }
  var n = e,
    t = e;
  n.default = t;
  class i {
    constructor(e) {
      void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
    }
    ignoreMatch() {
      this.isMatchIgnored = !0
    }
  }

  function a(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
  }

  function s(e, ...n) {
    const t = Object.create(null);
    for (const n in e) t[n] = e[n];
    return n.forEach((function(e) {
      for (const n in e) t[n] = e[n]
    })), t
  }
  const r = e => !!e.kind;
  class l {
    constructor(e, n) {
      this.buffer = "", this.classPrefix = n.classPrefix, e.walk(this)
    }
    addText(e) {
      this.buffer += a(e)
    }
    openNode(e) {
      if (!r(e)) return;
      let n = e.kind;
      e.sublanguage || (n = `${this.classPrefix}${n}`), this.span(n)
    }
    closeNode(e) {
      r(e) && (this.buffer += "</span>")
    }
    value() {
      return this.buffer
    }
    span(e) {
      this.buffer += `<span class="${e}">`
    }
  }
  class o {
    constructor() {
      this.rootNode = {
        children: []
      }, this.stack = [this.rootNode]
    }
    get top() {
      return this.stack[this.stack.length - 1]
    }
    get root() {
      return this.rootNode
    }
    add(e) {
      this.top.children.push(e)
    }
    openNode(e) {
      const n = {
        kind: e,
        children: []
      };
      this.add(n), this.stack.push(n)
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop()
    }
    closeAllNodes() {
      for (; this.closeNode(););
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4)
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode)
    }
    static _walk(e, n) {
      return "string" == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach((n => this._walk(e, n))), e.closeNode(n)), e
    }
    static _collapse(e) {
      "string" != typeof e && e.children && (e.children.every((e => "string" == typeof e)) ? e.children = [e.children.join("")] : e.children.forEach((e => {
        o._collapse(e)
      })))
    }
  }
  class c extends o {
    constructor(e) {
      super(), this.options = e
    }
    addKeyword(e, n) {
      "" !== e && (this.openNode(n), this.addText(e), this.closeNode())
    }
    addText(e) {
      "" !== e && this.add(e)
    }
    addSublanguage(e, n) {
      const t = e.root;
      t.kind = n, t.sublanguage = !0, this.add(t)
    }
    toHTML() {
      return new l(this, this.options).value()
    }
    finalize() {
      return !0
    }
  }

  function g(e) {
    return e ? "string" == typeof e ? e : e.source : null
  }
  const u = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  const d = "[a-zA-Z]\\w*",
    h = "[a-zA-Z_]\\w*",
    f = "\\b\\d+(\\.\\d+)?",
    b = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
    m = "\\b(0b[01]+)",
    p = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    },
    E = {
      className: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [p]
    },
    x = {
      className: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [p]
    },
    v = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    },
    y = function(e, n, t = {}) {
      const i = s({
        className: "comment",
        begin: e,
        end: n,
        contains: []
      }, t);
      return i.contains.push(v), i.contains.push({
        className: "doctag",
        begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
        relevance: 0
      }), i
    },
    _ = y("//", "$"),
    w = y("/\\*", "\\*/"),
    N = y("#", "$"),
    R = {
      className: "number",
      begin: f,
      relevance: 0
    },
    A = {
      className: "number",
      begin: b,
      relevance: 0
    },
    O = {
      className: "number",
      begin: m,
      relevance: 0
    },
    M = {
      className: "number",
      begin: f + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      relevance: 0
    },
    k = {
      begin: /(?=\/[^/\n]*\/)/,
      contains: [{
        className: "regexp",
        begin: /\//,
        end: /\/[gimuy]*/,
        illegal: /\n/,
        contains: [p, {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [p]
        }]
      }]
    },
    L = {
      className: "title",
      begin: d,
      relevance: 0
    },
    S = {
      className: "title",
      begin: h,
      relevance: 0
    },
    B = {
      begin: "\\.\\s*[a-zA-Z_]\\w*",
      relevance: 0
    };
  var T = Object.freeze({
    __proto__: null,
    MATCH_NOTHING_RE: /\b\B/,
    IDENT_RE: d,
    UNDERSCORE_IDENT_RE: h,
    NUMBER_RE: f,
    C_NUMBER_RE: b,
    BINARY_NUMBER_RE: m,
    RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
    SHEBANG: (e = {}) => {
      const n = /^#![ ]*\//;
      return e.binary && (e.begin = function(...e) {
        return e.map((e => g(e))).join("")
      }(n, /.*\b/, e.binary, /\b.*/)), s({
        className: "meta",
        begin: n,
        end: /$/,
        relevance: 0,
        "on:begin": (e, n) => {
          0 !== e.index && n.ignoreMatch()
        }
      }, e)
    },
    BACKSLASH_ESCAPE: p,
    APOS_STRING_MODE: E,
    QUOTE_STRING_MODE: x,
    PHRASAL_WORDS_MODE: v,
    COMMENT: y,
    C_LINE_COMMENT_MODE: _,
    C_BLOCK_COMMENT_MODE: w,
    HASH_COMMENT_MODE: N,
    NUMBER_MODE: R,
    C_NUMBER_MODE: A,
    BINARY_NUMBER_MODE: O,
    CSS_NUMBER_MODE: M,
    REGEXP_MODE: k,
    TITLE_MODE: L,
    UNDERSCORE_TITLE_MODE: S,
    METHOD_GUARD: B,
    END_SAME_AS_BEGIN: function(e) {
      return Object.assign(e, {
        "on:begin": (e, n) => {
          n.data._beginMatch = e[1]
        },
        "on:end": (e, n) => {
          n.data._beginMatch !== e[1] && n.ignoreMatch()
        }
      })
    }
  });

  function j(e, n) {
    "." === e.input[e.index - 1] && n.ignoreMatch()
  }

  function P(e, n) {
    n && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = j, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
  }

  function I(e, n) {
    Array.isArray(e.illegal) && (e.illegal = function(...e) {
      return "(" + e.map((e => g(e))).join("|") + ")"
    }(...e.illegal))
  }

  function C(e, n) {
    if (e.match) {
      if (e.begin || e.end) throw new Error("begin & end are not supported with match");
      e.begin = e.match, delete e.match
    }
  }

  function D(e, n) {
    void 0 === e.relevance && (e.relevance = 1)
  }
  const H = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"];

  function $(e, n, t = "keyword") {
    const i = {};
    return "string" == typeof e ? a(t, e.split(" ")) : Array.isArray(e) ? a(t, e) : Object.keys(e).forEach((function(t) {
      Object.assign(i, $(e[t], n, t))
    })), i;

    function a(e, t) {
      n && (t = t.map((e => e.toLowerCase()))), t.forEach((function(n) {
        const t = n.split("|");
        i[t[0]] = [e, U(t[0], t[1])]
      }))
    }
  }

  function U(e, n) {
    return n ? Number(n) : function(e) {
      return H.includes(e.toLowerCase())
    }(e) ? 0 : 1
  }

  function z(e, {
    plugins: n
  }) {
    function t(n, t) {
      return new RegExp(g(n), "m" + (e.case_insensitive ? "i" : "") + (t ? "g" : ""))
    }
    class i {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
      }
      addRule(e, n) {
        n.position = this.position++, this.matchIndexes[this.matchAt] = n, this.regexes.push([n, e]), this.matchAt += function(e) {
          return new RegExp(e.toString() + "|").exec("").length - 1
        }(e) + 1
      }
      compile() {
        0 === this.regexes.length && (this.exec = () => null);
        const e = this.regexes.map((e => e[1]));
        this.matcherRe = t(function(e, n = "|") {
          let t = 0;
          return e.map((e => {
            t += 1;
            const n = t;
            let i = g(e),
              a = "";
            for (; i.length > 0;) {
              const e = u.exec(i);
              if (!e) {
                a += i;
                break
              }
              a += i.substring(0, e.index), i = i.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? a += "\\" + String(Number(e[1]) + n) : (a += e[0], "(" === e[0] && t++)
            }
            return a
          })).map((e => `(${e})`)).join(n)
        }(e), !0), this.lastIndex = 0
      }
      exec(e) {
        this.matcherRe.lastIndex = this.lastIndex;
        const n = this.matcherRe.exec(e);
        if (!n) return null;
        const t = n.findIndex(((e, n) => n > 0 && void 0 !== e)),
          i = this.matchIndexes[t];
        return n.splice(0, t), Object.assign(n, i)
      }
    }
    class a {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const n = new i;
        return this.rules.slice(e).forEach((([e, t]) => n.addRule(e, t))), n.compile(), this.multiRegexes[e] = n, n
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex
      }
      considerAll() {
        this.regexIndex = 0
      }
      addRule(e, n) {
        this.rules.push([e, n]), "begin" === n.type && this.count++
      }
      exec(e) {
        const n = this.getMatcher(this.regexIndex);
        n.lastIndex = this.lastIndex;
        let t = n.exec(e);
        if (this.resumingScanAtSamePosition())
          if (t && t.index === this.lastIndex);
          else {
            const n = this.getMatcher(0);
            n.lastIndex = this.lastIndex + 1, t = n.exec(e)
          } return t && (this.regexIndex += t.position + 1, this.regexIndex === this.count && this.considerAll()), t
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = s(e.classNameAliases || {}),
      function n(i, r) {
        const l = i;
        if (i.isCompiled) return l;
        [C].forEach((e => e(i, r))), e.compilerExtensions.forEach((e => e(i, r))), i.__beforeBegin = null, [P, I, D].forEach((e => e(i, r))), i.isCompiled = !0;
        let o = null;
        if ("object" == typeof i.keywords && (o = i.keywords.$pattern, delete i.keywords.$pattern), i.keywords && (i.keywords = $(i.keywords, e.case_insensitive)), i.lexemes && o) throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
        return o = o || i.lexemes || /\w+/, l.keywordPatternRe = t(o, !0), r && (i.begin || (i.begin = /\B|\b/), l.beginRe = t(i.begin), i.endSameAsBegin && (i.end = i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (l.endRe = t(i.end)), l.terminatorEnd = g(i.end) || "", i.endsWithParent && r.terminatorEnd && (l.terminatorEnd += (i.end ? "|" : "") + r.terminatorEnd)), i.illegal && (l.illegalRe = t(i.illegal)), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map((function(e) {
          return function(e) {
            e.variants && !e.cachedVariants && (e.cachedVariants = e.variants.map((function(n) {
              return s(e, {
                variants: null
              }, n)
            })));
            if (e.cachedVariants) return e.cachedVariants;
            if (F(e)) return s(e, {
              starts: e.starts ? s(e.starts) : null
            });
            if (Object.isFrozen(e)) return s(e);
            return e
          }("self" === e ? i : e)
        }))), i.contains.forEach((function(e) {
          n(e, l)
        })), i.starts && n(i.starts, r), l.matcher = function(e) {
          const n = new a;
          return e.contains.forEach((e => n.addRule(e.begin, {
            rule: e,
            type: "begin"
          }))), e.terminatorEnd && n.addRule(e.terminatorEnd, {
            type: "end"
          }), e.illegal && n.addRule(e.illegal, {
            type: "illegal"
          }), n
        }(l), l
      }(e)
  }

  function F(e) {
    return !!e && (e.endsWithParent || F(e.starts))
  }

  function K(e) {
    const n = {
      props: ["language", "code", "autodetect"],
      data: function() {
        return {
          detectedLanguage: "",
          unknownLanguage: !1
        }
      },
      computed: {
        className() {
          return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
        },
        highlighted() {
          if (!this.autoDetect && !e.getLanguage(this.language)) return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, a(this.code);
          let n = {};
          return this.autoDetect ? (n = e.highlightAuto(this.code), this.detectedLanguage = n.language) : (n = e.highlight(this.language, this.code, this.ignoreIllegals), this.detectedLanguage = this.language), n.value
        },
        autoDetect() {
          return !this.language || (e = this.autodetect, Boolean(e || "" === e));
          var e
        },
        ignoreIllegals: () => !0
      },
      render(e) {
        return e("pre", {}, [e("code", {
          class: this.className,
          domProps: {
            innerHTML: this.highlighted
          }
        })])
      }
    };
    return {
      Component: n,
      VuePlugin: {
        install(e) {
          e.component("highlightjs", n)
        }
      }
    }
  }
  const G = {
    "after:highlightElement": ({
      el: e,
      result: n,
      text: t
    }) => {
      const i = Z(e);
      if (!i.length) return;
      const s = document.createElement("div");
      s.innerHTML = n.value, n.value = function(e, n, t) {
        let i = 0,
          s = "";
        const r = [];

        function l() {
          return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
        }

        function o(e) {
          function n(e) {
            return " " + e.nodeName + '="' + a(e.value) + '"'
          }
          s += "<" + W(e) + [].map.call(e.attributes, n).join("") + ">"
        }

        function c(e) {
          s += "</" + W(e) + ">"
        }

        function g(e) {
          ("start" === e.event ? o : c)(e.node)
        }
        for (; e.length || n.length;) {
          let n = l();
          if (s += a(t.substring(i, n[0].offset)), i = n[0].offset, n === e) {
            r.reverse().forEach(c);
            do {
              g(n.splice(0, 1)[0]), n = l()
            } while (n === e && n.length && n[0].offset === i);
            r.reverse().forEach(o)
          } else "start" === n[0].event ? r.push(n[0].node) : r.pop(), g(n.splice(0, 1)[0])
        }
        return s + a(t.substr(i))
      }(i, Z(s), t)
    }
  };

  function W(e) {
    return e.nodeName.toLowerCase()
  }

  function Z(e) {
    const n = [];
    return function e(t, i) {
      for (let a = t.firstChild; a; a = a.nextSibling) 3 === a.nodeType ? i += a.nodeValue.length : 1 === a.nodeType && (n.push({
        event: "start",
        offset: i,
        node: a
      }), i = e(a, i), W(a).match(/br|hr|img|input/) || n.push({
        event: "stop",
        offset: i,
        node: a
      }));
      return i
    }(e, 0), n
  }
  const q = {},
    X = e => {
      console.error(e)
    },
    V = (e, ...n) => {
      console.log(`WARN: ${e}`, ...n)
    },
    J = (e, n) => {
      q[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), q[`${e}/${n}`] = !0)
    },
    Q = a,
    Y = s,
    ee = Symbol("nomatch");
  var ne = function(e) {
    const t = Object.create(null),
      a = Object.create(null),
      s = [];
    let r = !0;
    const l = /(^(<[^>]+>|\t|)+|\n)/gm,
      o = "Could not find the language '{}', did you forget to load/include a language module?",
      g = {
        disableAutodetect: !0,
        name: "Plain text",
        contains: []
      };
    let u = {
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      tabReplace: null,
      useBR: !1,
      languages: null,
      __emitter: c
    };

    function d(e) {
      return u.noHighlightRe.test(e)
    }

    function h(e, n, t, i) {
      let a = "",
        s = "";
      "object" == typeof n ? (a = e, t = n.ignoreIllegals, s = n.language, i = void 0) : (J("10.7.0", "highlight(lang, code, ...args) has been deprecated."), J("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), s = e, a = n);
      const r = {
        code: a,
        language: s
      };
      A("before:highlight", r);
      const l = r.result ? r.result : f(r.language, r.code, t, i);
      return l.code = r.code, A("after:highlight", l), l
    }

    function f(e, n, a, l) {
      function c(e, n) {
        const t = y.case_insensitive ? n[0].toLowerCase() : n[0];
        return Object.prototype.hasOwnProperty.call(e.keywords, t) && e.keywords[t]
      }

      function g() {
        null != R.subLanguage ? function() {
          if ("" === M) return;
          let e = null;
          if ("string" == typeof R.subLanguage) {
            if (!t[R.subLanguage]) return void O.addText(M);
            e = f(R.subLanguage, M, !0, A[R.subLanguage]), A[R.subLanguage] = e.top
          } else e = b(M, R.subLanguage.length ? R.subLanguage : null);
          R.relevance > 0 && (k += e.relevance), O.addSublanguage(e.emitter, e.language)
        }() : function() {
          if (!R.keywords) return void O.addText(M);
          let e = 0;
          R.keywordPatternRe.lastIndex = 0;
          let n = R.keywordPatternRe.exec(M),
            t = "";
          for (; n;) {
            t += M.substring(e, n.index);
            const i = c(R, n);
            if (i) {
              const [e, a] = i;
              if (O.addText(t), t = "", k += a, e.startsWith("_")) t += n[0];
              else {
                const t = y.classNameAliases[e] || e;
                O.addKeyword(n[0], t)
              }
            } else t += n[0];
            e = R.keywordPatternRe.lastIndex, n = R.keywordPatternRe.exec(M)
          }
          t += M.substr(e), O.addText(t)
        }(), M = ""
      }

      function d(e) {
        return e.className && O.openNode(y.classNameAliases[e.className] || e.className), R = Object.create(e, {
          parent: {
            value: R
          }
        }), R
      }

      function h(e, n, t) {
        let a = function(e, n) {
          const t = e && e.exec(n);
          return t && 0 === t.index
        }(e.endRe, t);
        if (a) {
          if (e["on:end"]) {
            const t = new i(e);
            e["on:end"](n, t), t.isMatchIgnored && (a = !1)
          }
          if (a) {
            for (; e.endsParent && e.parent;) e = e.parent;
            return e
          }
        }
        if (e.endsWithParent) return h(e.parent, n, t)
      }

      function m(e) {
        return 0 === R.matcher.regexIndex ? (M += e[0], 1) : (B = !0, 0)
      }

      function p(e) {
        const n = e[0],
          t = e.rule,
          a = new i(t),
          s = [t.__beforeBegin, t["on:begin"]];
        for (const t of s)
          if (t && (t(e, a), a.isMatchIgnored)) return m(n);
        return t && t.endSameAsBegin && (t.endRe = new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), t.skip ? M += n : (t.excludeBegin && (M += n), g(), t.returnBegin || t.excludeBegin || (M = n)), d(t), t.returnBegin ? 0 : n.length
      }

      function E(e) {
        const t = e[0],
          i = n.substr(e.index),
          a = h(R, e, i);
        if (!a) return ee;
        const s = R;
        s.skip ? M += t : (s.returnEnd || s.excludeEnd || (M += t), g(), s.excludeEnd && (M = t));
        do {
          R.className && O.closeNode(), R.skip || R.subLanguage || (k += R.relevance), R = R.parent
        } while (R !== a.parent);
        return a.starts && (a.endSameAsBegin && (a.starts.endRe = a.endRe), d(a.starts)), s.returnEnd ? 0 : t.length
      }
      let x = {};

      function v(t, i) {
        const s = i && i[0];
        if (M += t, null == s) return g(), 0;
        if ("begin" === x.type && "end" === i.type && x.index === i.index && "" === s) {
          if (M += n.slice(i.index, i.index + 1), !r) {
            const n = new Error("0 width match regex");
            throw n.languageName = e, n.badRule = x.rule, n
          }
          return 1
        }
        if (x = i, "begin" === i.type) return p(i);
        if ("illegal" === i.type && !a) {
          const e = new Error('Illegal lexeme "' + s + '" for mode "' + (R.className || "<unnamed>") + '"');
          throw e.mode = R, e
        }
        if ("end" === i.type) {
          const e = E(i);
          if (e !== ee) return e
        }
        if ("illegal" === i.type && "" === s) return 1;
        if (S > 1e5 && S > 3 * i.index) {
          throw new Error("potential infinite loop, way more iterations than matches")
        }
        return M += s, s.length
      }
      const y = w(e);
      if (!y) throw X(o.replace("{}", e)), new Error('Unknown language: "' + e + '"');
      const _ = z(y, {
        plugins: s
      });
      let N = "",
        R = l || _;
      const A = {},
        O = new u.__emitter(u);
      ! function() {
        const e = [];
        for (let n = R; n !== y; n = n.parent) n.className && e.unshift(n.className);
        e.forEach((e => O.openNode(e)))
      }();
      let M = "",
        k = 0,
        L = 0,
        S = 0,
        B = !1;
      try {
        for (R.matcher.considerAll();;) {
          S++, B ? B = !1 : R.matcher.considerAll(), R.matcher.lastIndex = L;
          const e = R.matcher.exec(n);
          if (!e) break;
          const t = v(n.substring(L, e.index), e);
          L = e.index + t
        }
        return v(n.substr(L)), O.closeAllNodes(), O.finalize(), N = O.toHTML(), {
          relevance: Math.floor(k),
          value: N,
          language: e,
          illegal: !1,
          emitter: O,
          top: R
        }
      } catch (t) {
        if (t.message && t.message.includes("Illegal")) return {
          illegal: !0,
          illegalBy: {
            msg: t.message,
            context: n.slice(L - 100, L + 100),
            mode: t.mode
          },
          sofar: N,
          relevance: 0,
          value: Q(n),
          emitter: O
        };
        if (r) return {
          illegal: !1,
          relevance: 0,
          value: Q(n),
          emitter: O,
          language: e,
          top: R,
          errorRaised: t
        };
        throw t
      }
    }

    function b(e, n) {
      n = n || u.languages || Object.keys(t);
      const i = function(e) {
          const n = {
            relevance: 0,
            emitter: new u.__emitter(u),
            value: Q(e),
            illegal: !1,
            top: g
          };
          return n.emitter.addText(e), n
        }(e),
        a = n.filter(w).filter(R).map((n => f(n, e, !1)));
      a.unshift(i);
      const s = a.sort(((e, n) => {
          if (e.relevance !== n.relevance) return n.relevance - e.relevance;
          if (e.language && n.language) {
            if (w(e.language).supersetOf === n.language) return 1;
            if (w(n.language).supersetOf === e.language) return -1
          }
          return 0
        })),
        [r, l] = s,
        o = r;
      return o.second_best = l, o
    }
    const m = {
        "before:highlightElement": ({
          el: e
        }) => {
          u.useBR && (e.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n"))
        },
        "after:highlightElement": ({
          result: e
        }) => {
          u.useBR && (e.value = e.value.replace(/\n/g, "<br>"))
        }
      },
      p = /^(<[^>]+>|\t)+/gm,
      E = {
        "after:highlightElement": ({
          result: e
        }) => {
          u.tabReplace && (e.value = e.value.replace(p, (e => e.replace(/\t/g, u.tabReplace))))
        }
      };

    function x(e) {
      let n = null;
      const t = function(e) {
        let n = e.className + " ";
        n += e.parentNode ? e.parentNode.className : "";
        const t = u.languageDetectRe.exec(n);
        if (t) {
          const n = w(t[1]);
          return n || (V(o.replace("{}", t[1])), V("Falling back to no-highlight mode for this block.", e)), n ? t[1] : "no-highlight"
        }
        return n.split(/\s+/).find((e => d(e) || w(e)))
      }(e);
      if (d(t)) return;
      A("before:highlightElement", {
        el: e,
        language: t
      }), n = e;
      const i = n.textContent,
        s = t ? h(i, {
          language: t,
          ignoreIllegals: !0
        }) : b(i);
      A("after:highlightElement", {
          el: e,
          result: s,
          text: i
        }), e.innerHTML = s.value,
        function(e, n, t) {
          const i = n ? a[n] : t;
          e.classList.add("hljs"), i && e.classList.add(i)
        }(e, t, s.language), e.result = {
          language: s.language,
          re: s.relevance,
          relavance: s.relevance
        }, s.second_best && (e.second_best = {
          language: s.second_best.language,
          re: s.second_best.relevance,
          relavance: s.second_best.relevance
        })
    }
    const v = () => {
      if (v.called) return;
      v.called = !0, J("10.6.0", "initHighlighting() is deprecated.  Use highlightAll() instead.");
      document.querySelectorAll("pre code").forEach(x)
    };
    let y = !1;

    function _() {
      if ("loading" === document.readyState) return void(y = !0);
      document.querySelectorAll("pre code").forEach(x)
    }

    function w(e) {
      return e = (e || "").toLowerCase(), t[e] || t[a[e]]
    }

    function N(e, {
      languageName: n
    }) {
      "string" == typeof e && (e = [e]), e.forEach((e => {
        a[e.toLowerCase()] = n
      }))
    }

    function R(e) {
      const n = w(e);
      return n && !n.disableAutodetect
    }

    function A(e, n) {
      const t = e;
      s.forEach((function(e) {
        e[t] && e[t](n)
      }))
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", (function() {
      y && _()
    }), !1), Object.assign(e, {
      highlight: h,
      highlightAuto: b,
      highlightAll: _,
      fixMarkup: function(e) {
        return J("10.2.0", "fixMarkup will be removed entirely in v11.0"), J("10.2.0", "Please see https://github.com/highlightjs/highlight.js/issues/2534"), n = e, u.tabReplace || u.useBR ? n.replace(l, (e => "\n" === e ? u.useBR ? "<br>" : e : u.tabReplace ? e.replace(/\t/g, u.tabReplace) : e)) : n;
        var n
      },
      highlightElement: x,
      highlightBlock: function(e) {
        return J("10.7.0", "highlightBlock will be removed entirely in v12.0"), J("10.7.0", "Please use highlightElement now."), x(e)
      },
      configure: function(e) {
        e.useBR && (J("10.3.0", "'useBR' will be removed entirely in v11.0"), J("10.3.0", "Please see https://github.com/highlightjs/highlight.js/issues/2559")), u = Y(u, e)
      },
      initHighlighting: v,
      initHighlightingOnLoad: function() {
        J("10.6.0", "initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."), y = !0
      },
      registerLanguage: function(n, i) {
        let a = null;
        try {
          a = i(e)
        } catch (e) {
          if (X("Language definition for '{}' could not be registered.".replace("{}", n)), !r) throw e;
          X(e), a = g
        }
        a.name || (a.name = n), t[n] = a, a.rawDefinition = i.bind(null, e), a.aliases && N(a.aliases, {
          languageName: n
        })
      },
      unregisterLanguage: function(e) {
        delete t[e];
        for (const n of Object.keys(a)) a[n] === e && delete a[n]
      },
      listLanguages: function() {
        return Object.keys(t)
      },
      getLanguage: w,
      registerAliases: N,
      requireLanguage: function(e) {
        J("10.4.0", "requireLanguage will be removed entirely in v11."), J("10.4.0", "Please see https://github.com/highlightjs/highlight.js/pull/2844");
        const n = w(e);
        if (n) return n;
        throw new Error("The '{}' language is required, but not loaded.".replace("{}", e))
      },
      autoDetection: R,
      inherit: Y,
      addPlugin: function(e) {
        ! function(e) {
          e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = n => {
            e["before:highlightBlock"](Object.assign({
              block: n.el
            }, n))
          }), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = n => {
            e["after:highlightBlock"](Object.assign({
              block: n.el
            }, n))
          })
        }(e), s.push(e)
      },
      vuePlugin: K(e).VuePlugin
    }), e.debugMode = function() {
      r = !1
    }, e.safeMode = function() {
      r = !0
    }, e.versionString = "10.7.3";
    for (const e in T) "object" == typeof T[e] && n(T[e]);
    return Object.assign(e, T), e.addPlugin(m), e.addPlugin(G), e.addPlugin(E), e
  }({});

  function te(e) {
    return function(...e) {
      return e.map((e => function(e) {
        return e ? "string" == typeof e ? e : e.source : null
      }(e))).join("")
    }("(?=", e, ")")
  }
  var ie = function(e) {
    const n = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
        built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
        literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
        type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
      },
      t = {
        className: "meta",
        begin: /^(>>>|\.\.\.) /
      },
      i = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: n,
        illegal: /#/
      },
      a = {
        begin: /\{\{/,
        relevance: 0
      },
      s = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [{
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, t],
          relevance: 10
        }, {
          begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, t],
          relevance: 10
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'''/,
          end: /'''/,
          contains: [e.BACKSLASH_ESCAPE, t, a, i]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"""/,
          end: /"""/,
          contains: [e.BACKSLASH_ESCAPE, t, a, i]
        }, {
          begin: /([uU]|[rR])'/,
          end: /'/,
          relevance: 10
        }, {
          begin: /([uU]|[rR])"/,
          end: /"/,
          relevance: 10
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])'/,
          end: /'/
        }, {
          begin: /([bB]|[bB][rR]|[rR][bB])"/,
          end: /"/
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])'/,
          end: /'/,
          contains: [e.BACKSLASH_ESCAPE, a, i]
        }, {
          begin: /([fF][rR]|[rR][fF]|[fF])"/,
          end: /"/,
          contains: [e.BACKSLASH_ESCAPE, a, i]
        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
      },
      r = "[0-9](_?[0-9])*",
      l = `(\\b(${r}))?\\.(${r})|\\b(${r})\\.`,
      o = {
        className: "number",
        relevance: 0,
        variants: [{
          begin: `(\\b(${r})|(${l}))[eE][+-]?(${r})[jJ]?\\b`
        }, {
          begin: `(${l})[jJ]?`
        }, {
          begin: "\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"
        }, {
          begin: "\\b0[bB](_?[01])+[lL]?\\b"
        }, {
          begin: "\\b0[oO](_?[0-7])+[lL]?\\b"
        }, {
          begin: "\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"
        }, {
          begin: `\\b(${r})[jJ]\\b`
        }]
      },
      c = {
        className: "comment",
        begin: te(/# type:/),
        end: /$/,
        keywords: n,
        contains: [{
          begin: /# type:/
        }, {
          begin: /#/,
          end: /\b\B/,
          endsWithParent: !0
        }]
      },
      g = {
        className: "params",
        variants: [{
          className: "",
          begin: /\(\s*\)/,
          skip: !0
        }, {
          begin: /\(/,
          end: /\)/,
          excludeBegin: !0,
          excludeEnd: !0,
          keywords: n,
          contains: ["self", t, o, s, e.HASH_COMMENT_MODE]
        }]
      };
    return i.contains = [s, o, t], {
      name: "Python",
      aliases: ["py", "gyp", "ipython"],
      keywords: n,
      illegal: /(<\/|->|\?)|=>/,
      contains: [t, o, {
        begin: /\bself\b/
      }, {
        beginKeywords: "if",
        relevance: 0
      }, s, c, e.HASH_COMMENT_MODE, {
        variants: [{
          className: "function",
          beginKeywords: "def"
        }, {
          className: "class",
          beginKeywords: "class"
        }],
        end: /:/,
        illegal: /[${=;\n,]/,
        contains: [e.UNDERSCORE_TITLE_MODE, g, {
          begin: /->/,
          endsWithParent: !0,
          keywords: n
        }]
      }, {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [o, g, s]
      }]
    }
  };

  function ae(e) {
    return e ? "string" == typeof e ? e : e.source : null
  }

  function se(e) {
    return re("(?=", e, ")")
  }

  function re(...e) {
    return e.map((e => ae(e))).join("")
  }

  function le(...e) {
    return "(" + e.map((e => ae(e))).join("|") + ")"
  }
  var oe = function(e) {
    const n = re(/[A-Z_]/, re("(", /[A-Z0-9_.-]*:/, ")?"), /[A-Z0-9_.-]*/),
      t = {
        className: "symbol",
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      },
      i = {
        begin: /\s/,
        contains: [{
          className: "meta-keyword",
          begin: /#?[a-z_][a-z1-9_-]+/,
          illegal: /\n/
        }]
      },
      a = e.inherit(i, {
        begin: /\(/,
        end: /\)/
      }),
      s = e.inherit(e.APOS_STRING_MODE, {
        className: "meta-string"
      }),
      r = e.inherit(e.QUOTE_STRING_MODE, {
        className: "meta-string"
      }),
      l = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [{
          className: "attr",
          begin: /[A-Za-z0-9._:-]+/,
          relevance: 0
        }, {
          begin: /=\s*/,
          relevance: 0,
          contains: [{
            className: "string",
            endsParent: !0,
            variants: [{
              begin: /"/,
              end: /"/,
              contains: [t]
            }, {
              begin: /'/,
              end: /'/,
              contains: [t]
            }, {
              begin: /[^\s"'=<>`]+/
            }]
          }]
        }]
      };
    return {
      name: "HTML, XML",
      aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
      case_insensitive: !0,
      contains: [{
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [i, r, s, a, {
          begin: /\[/,
          end: /\]/,
          contains: [{
            className: "meta",
            begin: /<![a-z]/,
            end: />/,
            contains: [i, a, r, s]
          }]
        }]
      }, e.COMMENT(/<!--/, /-->/, {
        relevance: 10
      }), {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      }, t, {
        className: "meta",
        begin: /<\?xml/,
        end: /\?>/,
        relevance: 10
      }, {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: {
          name: "style"
        },
        contains: [l],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ["css", "xml"]
        }
      }, {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: {
          name: "script"
        },
        contains: [l],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ["javascript", "handlebars", "xml"]
        }
      }, {
        className: "tag",
        begin: /<>|<\/>/
      }, {
        className: "tag",
        begin: re(/</, se(re(n, le(/\/>/, />/, /\s/)))),
        end: /\/?>/,
        contains: [{
          className: "name",
          begin: n,
          relevance: 0,
          starts: l
        }]
      }, {
        className: "tag",
        begin: re(/<\//, se(re(n, />/))),
        contains: [{
          className: "name",
          begin: n,
          relevance: 0
        }, {
          begin: />/,
          relevance: 0,
          endsParent: !0
        }]
      }]
    }
  };
  var ce = function(e) {
    return {
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0
    }
  };

  function ge(e, n) {
    const t = ne.getLanguage(n) ? n : "plaintext";
    return ne.highlight(e, {
      language: t
    }).value
  }
  return ne.registerLanguage("python", ie), ne.registerLanguage("html", oe), ne.registerLanguage("plaintext", ce), {
    setup: function(e) {
      e.getMarkedParser().setOptions({
        highlight: ge,
        langPrefix: "hljs lang-"
      })
    }
  }
}));
