! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).quizdownKatex = t()
}(this, (function() {
  "use strict";
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var e = {
    exports: {}
  };
  ! function(e, t) {
    var r;
    "undefined" != typeof self && self, r = function() {
      return function() {
        var e = {
            d: function(t, r) {
              for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                enumerable: !0,
                get: r[n]
              })
            },
            o: function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }
          },
          t = {};
        e.d(t, {
          default: function() {
            return jn
          }
        });
        var r = function e(t, r) {
          this.position = void 0;
          var n, a = "KaTeX parse error: " + t,
            i = r && r.loc;
          if (i && i.start <= i.end) {
            var o = i.lexer.input;
            n = i.start;
            var s = i.end;
            n === o.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
            var l = o.slice(n, s).replace(/[^]/g, "$&̲");
            a += (n > 15 ? "…" + o.slice(n - 15, n) : o.slice(0, n)) + l + (s + 15 < o.length ? o.slice(s, s + 15) + "…" : o.slice(s))
          }
          var h = new Error(a);
          return h.name = "ParseError", h.__proto__ = e.prototype, h.position = n, h
        };
        r.prototype.__proto__ = Error.prototype;
        var n = r,
          a = /([A-Z])/g,
          i = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
          },
          o = /[&><"']/g,
          s = function e(t) {
            return "ordgroup" === t.type || "color" === t.type ? 1 === t.body.length ? e(t.body[0]) : t : "font" === t.type ? e(t.body) : t
          },
          l = {
            contains: function(e, t) {
              return -1 !== e.indexOf(t)
            },
            deflt: function(e, t) {
              return void 0 === e ? t : e
            },
            escape: function(e) {
              return String(e).replace(o, (function(e) {
                return i[e]
              }))
            },
            hyphenate: function(e) {
              return e.replace(a, "-$1").toLowerCase()
            },
            getBaseElem: s,
            isCharacterBox: function(e) {
              var t = s(e);
              return "mathord" === t.type || "textord" === t.type || "atom" === t.type
            },
            protocolFromUrl: function(e) {
              var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
              return null != t ? t[1] : "_relative"
            }
          },
          h = function() {
            function e(e) {
              this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {}, this.displayMode = l.deflt(e.displayMode, !1), this.output = l.deflt(e.output, "htmlAndMathml"), this.leqno = l.deflt(e.leqno, !1), this.fleqn = l.deflt(e.fleqn, !1), this.throwOnError = l.deflt(e.throwOnError, !0), this.errorColor = l.deflt(e.errorColor, "#cc0000"), this.macros = e.macros || {}, this.minRuleThickness = Math.max(0, l.deflt(e.minRuleThickness, 0)), this.colorIsTextColor = l.deflt(e.colorIsTextColor, !1), this.strict = l.deflt(e.strict, "warn"), this.trust = l.deflt(e.trust, !1), this.maxSize = Math.max(0, l.deflt(e.maxSize, 1 / 0)), this.maxExpand = Math.max(0, l.deflt(e.maxExpand, 1e3)), this.globalGroup = l.deflt(e.globalGroup, !1)
            }
            var t = e.prototype;
            return t.reportNonstrict = function(e, t, r) {
              var a = this.strict;
              if ("function" == typeof a && (a = a(e, t, r)), a && "ignore" !== a) {
                if (!0 === a || "error" === a) throw new n("LaTeX-incompatible input and strict mode is set to 'error': " + t + " [" + e + "]", r);
                "warn" === a ? "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]") : "undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + a + "': " + t + " [" + e + "]")
              }
            }, t.useStrictBehavior = function(e, t, r) {
              var n = this.strict;
              if ("function" == typeof n) try {
                n = n(e, t, r)
              } catch (e) {
                n = "error"
              }
              return !(!n || "ignore" === n || !0 !== n && "error" !== n && ("warn" === n ? ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]"), 1) : ("undefined" != typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]"), 1)))
            }, t.isTrusted = function(e) {
              e.url && !e.protocol && (e.protocol = l.protocolFromUrl(e.url));
              var t = "function" == typeof this.trust ? this.trust(e) : this.trust;
              return Boolean(t)
            }, e
          }(),
          m = function() {
            function e(e, t, r) {
              this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r
            }
            var t = e.prototype;
            return t.sup = function() {
              return c[u[this.id]]
            }, t.sub = function() {
              return c[p[this.id]]
            }, t.fracNum = function() {
              return c[d[this.id]]
            }, t.fracDen = function() {
              return c[f[this.id]]
            }, t.cramp = function() {
              return c[g[this.id]]
            }, t.text = function() {
              return c[v[this.id]]
            }, t.isTight = function() {
              return this.size >= 2
            }, e
          }(),
          c = [new m(0, 0, !1), new m(1, 0, !0), new m(2, 1, !1), new m(3, 1, !0), new m(4, 2, !1), new m(5, 2, !0), new m(6, 3, !1), new m(7, 3, !0)],
          u = [4, 5, 4, 5, 6, 7, 6, 7],
          p = [5, 5, 5, 5, 7, 7, 7, 7],
          d = [2, 3, 4, 5, 6, 7, 6, 7],
          f = [3, 3, 5, 5, 7, 7, 7, 7],
          g = [1, 1, 3, 3, 5, 5, 7, 7],
          v = [0, 1, 2, 3, 2, 3, 2, 3],
          y = {
            DISPLAY: c[0],
            TEXT: c[2],
            SCRIPT: c[4],
            SCRIPTSCRIPT: c[6]
          },
          b = [{
            name: "latin",
            blocks: [
              [256, 591],
              [768, 879]
            ]
          }, {
            name: "cyrillic",
            blocks: [
              [1024, 1279]
            ]
          }, {
            name: "armenian",
            blocks: [
              [1328, 1423]
            ]
          }, {
            name: "brahmic",
            blocks: [
              [2304, 4255]
            ]
          }, {
            name: "georgian",
            blocks: [
              [4256, 4351]
            ]
          }, {
            name: "cjk",
            blocks: [
              [12288, 12543],
              [19968, 40879],
              [65280, 65376]
            ]
          }, {
            name: "hangul",
            blocks: [
              [44032, 55215]
            ]
          }],
          x = [];

        function w(e) {
          for (var t = 0; t < x.length; t += 2)
            if (e >= x[t] && e <= x[t + 1]) return !0;
          return !1
        }
        b.forEach((function(e) {
          return e.blocks.forEach((function(e) {
            return x.push.apply(x, e)
          }))
        }));
        var k = 80,
          S = {
            doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
            doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
            leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
            leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
            leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
            leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
            leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
            leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
            leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
            leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
            leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
            lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
            leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
            leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
            leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
            longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
            midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
            midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
            oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
            oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
            oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
            oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
            rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
            rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
            rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
            rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
            rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
            rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
            rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
            rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
            rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
            righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
            rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
            rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
            twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
            twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
            tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
            tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
            tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
            tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
            vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
            widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
            widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
            widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
            widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
            baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
            rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
            baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
            rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
            shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
            shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
          },
          M = function() {
            function e(e) {
              this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}
            }
            var t = e.prototype;
            return t.hasClass = function(e) {
              return l.contains(this.classes, e)
            }, t.toNode = function() {
              for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
              return e
            }, t.toMarkup = function() {
              for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
              return e
            }, t.toText = function() {
              var e = function(e) {
                return e.toText()
              };
              return this.children.map(e).join("")
            }, e
          }(),
          z = function(e) {
            return e.filter((function(e) {
              return e
            })).join(" ")
          },
          A = function(e, t, r) {
            if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
              t.style.isTight() && this.classes.push("mtight");
              var n = t.getColor();
              n && (this.style.color = n)
            }
          },
          T = function(e) {
            var t = document.createElement(e);
            for (var r in t.className = z(this.classes), this.style) this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
            for (var n in this.attributes) this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
            for (var a = 0; a < this.children.length; a++) t.appendChild(this.children[a].toNode());
            return t
          },
          B = function(e) {
            var t = "<" + e;
            this.classes.length && (t += ' class="' + l.escape(z(this.classes)) + '"');
            var r = "";
            for (var n in this.style) this.style.hasOwnProperty(n) && (r += l.hyphenate(n) + ":" + this.style[n] + ";");
            for (var a in r && (t += ' style="' + l.escape(r) + '"'), this.attributes) this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + l.escape(this.attributes[a]) + '"');
            t += ">";
            for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup();
            return t += "</" + e + ">"
          },
          N = function() {
            function e(e, t, r, n) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, A.call(this, e, r, n), this.children = t || []
            }
            var t = e.prototype;
            return t.setAttribute = function(e, t) {
              this.attributes[e] = t
            }, t.hasClass = function(e) {
              return l.contains(this.classes, e)
            }, t.toNode = function() {
              return T.call(this, "span")
            }, t.toMarkup = function() {
              return B.call(this, "span")
            }, e
          }(),
          q = function() {
            function e(e, t, r, n) {
              this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, A.call(this, t, n), this.children = r || [], this.setAttribute("href", e)
            }
            var t = e.prototype;
            return t.setAttribute = function(e, t) {
              this.attributes[e] = t
            }, t.hasClass = function(e) {
              return l.contains(this.classes, e)
            }, t.toNode = function() {
              return T.call(this, "a")
            }, t.toMarkup = function() {
              return B.call(this, "a")
            }, e
          }(),
          C = function() {
            function e(e, t, r) {
              this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r
            }
            var t = e.prototype;
            return t.hasClass = function(e) {
              return l.contains(this.classes, e)
            }, t.toNode = function() {
              var e = document.createElement("img");
              for (var t in e.src = this.src, e.alt = this.alt, e.className = "mord", this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
              return e
            }, t.toMarkup = function() {
              var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ",
                t = "";
              for (var r in this.style) this.style.hasOwnProperty(r) && (t += l.hyphenate(r) + ":" + this.style[r] + ";");
              return t && (e += ' style="' + l.escape(t) + '"'), e += "'/>"
            }, e
          }(),
          I = {
            "î": "ı̂",
            "ï": "ı̈",
            "í": "ı́",
            "ì": "ı̀"
          },
          R = function() {
            function e(e, t, r, n, a, i, o, s) {
              this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = a || 0, this.width = i || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
              var l = function(e) {
                for (var t = 0; t < b.length; t++)
                  for (var r = b[t], n = 0; n < r.blocks.length; n++) {
                    var a = r.blocks[n];
                    if (e >= a[0] && e <= a[1]) return r.name
                  }
                return null
              }(this.text.charCodeAt(0));
              l && this.classes.push(l + "_fallback"), /[îïíì]/.test(this.text) && (this.text = I[this.text])
            }
            var t = e.prototype;
            return t.hasClass = function(e) {
              return l.contains(this.classes, e)
            }, t.toNode = function() {
              var e = document.createTextNode(this.text),
                t = null;
              for (var r in this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = z(this.classes)), this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
              return t ? (t.appendChild(e), t) : e
            }, t.toMarkup = function() {
              var e = !1,
                t = "<span";
              this.classes.length && (e = !0, t += ' class="', t += l.escape(z(this.classes)), t += '"');
              var r = "";
              for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(n) && (r += l.hyphenate(n) + ":" + this.style[n] + ";");
              r && (e = !0, t += ' style="' + l.escape(r) + '"');
              var a = l.escape(this.text);
              return e ? (t += ">", t += a, t += "</span>") : a
            }, e
          }(),
          O = function() {
            function e(e, t) {
              this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {}
            }
            var t = e.prototype;
            return t.toNode = function() {
              var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
              for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
              return e
            }, t.toMarkup = function() {
              var e = "<svg";
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
              e += ">";
              for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
              return e += "</svg>"
            }, e
          }(),
          E = function() {
            function e(e, t) {
              this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t
            }
            var t = e.prototype;
            return t.toNode = function() {
              var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
              return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", S[this.pathName]), e
            }, t.toMarkup = function() {
              return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + S[this.pathName] + "'/>"
            }, e
          }(),
          H = function() {
            function e(e) {
              this.attributes = void 0, this.attributes = e || {}
            }
            var t = e.prototype;
            return t.toNode = function() {
              var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
              return e
            }, t.toMarkup = function() {
              var e = "<line";
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
              return e += "/>"
            }, e
          }();

        function L(e) {
          if (e instanceof R) return e;
          throw new Error("Expected symbolNode but got " + String(e) + ".")
        }
        var D = {
            "AMS-Regular": {
              32: [0, 0, 0, 0, .25],
              65: [0, .68889, 0, 0, .72222],
              66: [0, .68889, 0, 0, .66667],
              67: [0, .68889, 0, 0, .72222],
              68: [0, .68889, 0, 0, .72222],
              69: [0, .68889, 0, 0, .66667],
              70: [0, .68889, 0, 0, .61111],
              71: [0, .68889, 0, 0, .77778],
              72: [0, .68889, 0, 0, .77778],
              73: [0, .68889, 0, 0, .38889],
              74: [.16667, .68889, 0, 0, .5],
              75: [0, .68889, 0, 0, .77778],
              76: [0, .68889, 0, 0, .66667],
              77: [0, .68889, 0, 0, .94445],
              78: [0, .68889, 0, 0, .72222],
              79: [.16667, .68889, 0, 0, .77778],
              80: [0, .68889, 0, 0, .61111],
              81: [.16667, .68889, 0, 0, .77778],
              82: [0, .68889, 0, 0, .72222],
              83: [0, .68889, 0, 0, .55556],
              84: [0, .68889, 0, 0, .66667],
              85: [0, .68889, 0, 0, .72222],
              86: [0, .68889, 0, 0, .72222],
              87: [0, .68889, 0, 0, 1],
              88: [0, .68889, 0, 0, .72222],
              89: [0, .68889, 0, 0, .72222],
              90: [0, .68889, 0, 0, .66667],
              107: [0, .68889, 0, 0, .55556],
              160: [0, 0, 0, 0, .25],
              165: [0, .675, .025, 0, .75],
              174: [.15559, .69224, 0, 0, .94666],
              240: [0, .68889, 0, 0, .55556],
              295: [0, .68889, 0, 0, .54028],
              710: [0, .825, 0, 0, 2.33334],
              732: [0, .9, 0, 0, 2.33334],
              770: [0, .825, 0, 0, 2.33334],
              771: [0, .9, 0, 0, 2.33334],
              989: [.08167, .58167, 0, 0, .77778],
              1008: [0, .43056, .04028, 0, .66667],
              8245: [0, .54986, 0, 0, .275],
              8463: [0, .68889, 0, 0, .54028],
              8487: [0, .68889, 0, 0, .72222],
              8498: [0, .68889, 0, 0, .55556],
              8502: [0, .68889, 0, 0, .66667],
              8503: [0, .68889, 0, 0, .44445],
              8504: [0, .68889, 0, 0, .66667],
              8513: [0, .68889, 0, 0, .63889],
              8592: [-.03598, .46402, 0, 0, .5],
              8594: [-.03598, .46402, 0, 0, .5],
              8602: [-.13313, .36687, 0, 0, 1],
              8603: [-.13313, .36687, 0, 0, 1],
              8606: [.01354, .52239, 0, 0, 1],
              8608: [.01354, .52239, 0, 0, 1],
              8610: [.01354, .52239, 0, 0, 1.11111],
              8611: [.01354, .52239, 0, 0, 1.11111],
              8619: [0, .54986, 0, 0, 1],
              8620: [0, .54986, 0, 0, 1],
              8621: [-.13313, .37788, 0, 0, 1.38889],
              8622: [-.13313, .36687, 0, 0, 1],
              8624: [0, .69224, 0, 0, .5],
              8625: [0, .69224, 0, 0, .5],
              8630: [0, .43056, 0, 0, 1],
              8631: [0, .43056, 0, 0, 1],
              8634: [.08198, .58198, 0, 0, .77778],
              8635: [.08198, .58198, 0, 0, .77778],
              8638: [.19444, .69224, 0, 0, .41667],
              8639: [.19444, .69224, 0, 0, .41667],
              8642: [.19444, .69224, 0, 0, .41667],
              8643: [.19444, .69224, 0, 0, .41667],
              8644: [.1808, .675, 0, 0, 1],
              8646: [.1808, .675, 0, 0, 1],
              8647: [.1808, .675, 0, 0, 1],
              8648: [.19444, .69224, 0, 0, .83334],
              8649: [.1808, .675, 0, 0, 1],
              8650: [.19444, .69224, 0, 0, .83334],
              8651: [.01354, .52239, 0, 0, 1],
              8652: [.01354, .52239, 0, 0, 1],
              8653: [-.13313, .36687, 0, 0, 1],
              8654: [-.13313, .36687, 0, 0, 1],
              8655: [-.13313, .36687, 0, 0, 1],
              8666: [.13667, .63667, 0, 0, 1],
              8667: [.13667, .63667, 0, 0, 1],
              8669: [-.13313, .37788, 0, 0, 1],
              8672: [-.064, .437, 0, 0, 1.334],
              8674: [-.064, .437, 0, 0, 1.334],
              8705: [0, .825, 0, 0, .5],
              8708: [0, .68889, 0, 0, .55556],
              8709: [.08167, .58167, 0, 0, .77778],
              8717: [0, .43056, 0, 0, .42917],
              8722: [-.03598, .46402, 0, 0, .5],
              8724: [.08198, .69224, 0, 0, .77778],
              8726: [.08167, .58167, 0, 0, .77778],
              8733: [0, .69224, 0, 0, .77778],
              8736: [0, .69224, 0, 0, .72222],
              8737: [0, .69224, 0, 0, .72222],
              8738: [.03517, .52239, 0, 0, .72222],
              8739: [.08167, .58167, 0, 0, .22222],
              8740: [.25142, .74111, 0, 0, .27778],
              8741: [.08167, .58167, 0, 0, .38889],
              8742: [.25142, .74111, 0, 0, .5],
              8756: [0, .69224, 0, 0, .66667],
              8757: [0, .69224, 0, 0, .66667],
              8764: [-.13313, .36687, 0, 0, .77778],
              8765: [-.13313, .37788, 0, 0, .77778],
              8769: [-.13313, .36687, 0, 0, .77778],
              8770: [-.03625, .46375, 0, 0, .77778],
              8774: [.30274, .79383, 0, 0, .77778],
              8776: [-.01688, .48312, 0, 0, .77778],
              8778: [.08167, .58167, 0, 0, .77778],
              8782: [.06062, .54986, 0, 0, .77778],
              8783: [.06062, .54986, 0, 0, .77778],
              8785: [.08198, .58198, 0, 0, .77778],
              8786: [.08198, .58198, 0, 0, .77778],
              8787: [.08198, .58198, 0, 0, .77778],
              8790: [0, .69224, 0, 0, .77778],
              8791: [.22958, .72958, 0, 0, .77778],
              8796: [.08198, .91667, 0, 0, .77778],
              8806: [.25583, .75583, 0, 0, .77778],
              8807: [.25583, .75583, 0, 0, .77778],
              8808: [.25142, .75726, 0, 0, .77778],
              8809: [.25142, .75726, 0, 0, .77778],
              8812: [.25583, .75583, 0, 0, .5],
              8814: [.20576, .70576, 0, 0, .77778],
              8815: [.20576, .70576, 0, 0, .77778],
              8816: [.30274, .79383, 0, 0, .77778],
              8817: [.30274, .79383, 0, 0, .77778],
              8818: [.22958, .72958, 0, 0, .77778],
              8819: [.22958, .72958, 0, 0, .77778],
              8822: [.1808, .675, 0, 0, .77778],
              8823: [.1808, .675, 0, 0, .77778],
              8828: [.13667, .63667, 0, 0, .77778],
              8829: [.13667, .63667, 0, 0, .77778],
              8830: [.22958, .72958, 0, 0, .77778],
              8831: [.22958, .72958, 0, 0, .77778],
              8832: [.20576, .70576, 0, 0, .77778],
              8833: [.20576, .70576, 0, 0, .77778],
              8840: [.30274, .79383, 0, 0, .77778],
              8841: [.30274, .79383, 0, 0, .77778],
              8842: [.13597, .63597, 0, 0, .77778],
              8843: [.13597, .63597, 0, 0, .77778],
              8847: [.03517, .54986, 0, 0, .77778],
              8848: [.03517, .54986, 0, 0, .77778],
              8858: [.08198, .58198, 0, 0, .77778],
              8859: [.08198, .58198, 0, 0, .77778],
              8861: [.08198, .58198, 0, 0, .77778],
              8862: [0, .675, 0, 0, .77778],
              8863: [0, .675, 0, 0, .77778],
              8864: [0, .675, 0, 0, .77778],
              8865: [0, .675, 0, 0, .77778],
              8872: [0, .69224, 0, 0, .61111],
              8873: [0, .69224, 0, 0, .72222],
              8874: [0, .69224, 0, 0, .88889],
              8876: [0, .68889, 0, 0, .61111],
              8877: [0, .68889, 0, 0, .61111],
              8878: [0, .68889, 0, 0, .72222],
              8879: [0, .68889, 0, 0, .72222],
              8882: [.03517, .54986, 0, 0, .77778],
              8883: [.03517, .54986, 0, 0, .77778],
              8884: [.13667, .63667, 0, 0, .77778],
              8885: [.13667, .63667, 0, 0, .77778],
              8888: [0, .54986, 0, 0, 1.11111],
              8890: [.19444, .43056, 0, 0, .55556],
              8891: [.19444, .69224, 0, 0, .61111],
              8892: [.19444, .69224, 0, 0, .61111],
              8901: [0, .54986, 0, 0, .27778],
              8903: [.08167, .58167, 0, 0, .77778],
              8905: [.08167, .58167, 0, 0, .77778],
              8906: [.08167, .58167, 0, 0, .77778],
              8907: [0, .69224, 0, 0, .77778],
              8908: [0, .69224, 0, 0, .77778],
              8909: [-.03598, .46402, 0, 0, .77778],
              8910: [0, .54986, 0, 0, .76042],
              8911: [0, .54986, 0, 0, .76042],
              8912: [.03517, .54986, 0, 0, .77778],
              8913: [.03517, .54986, 0, 0, .77778],
              8914: [0, .54986, 0, 0, .66667],
              8915: [0, .54986, 0, 0, .66667],
              8916: [0, .69224, 0, 0, .66667],
              8918: [.0391, .5391, 0, 0, .77778],
              8919: [.0391, .5391, 0, 0, .77778],
              8920: [.03517, .54986, 0, 0, 1.33334],
              8921: [.03517, .54986, 0, 0, 1.33334],
              8922: [.38569, .88569, 0, 0, .77778],
              8923: [.38569, .88569, 0, 0, .77778],
              8926: [.13667, .63667, 0, 0, .77778],
              8927: [.13667, .63667, 0, 0, .77778],
              8928: [.30274, .79383, 0, 0, .77778],
              8929: [.30274, .79383, 0, 0, .77778],
              8934: [.23222, .74111, 0, 0, .77778],
              8935: [.23222, .74111, 0, 0, .77778],
              8936: [.23222, .74111, 0, 0, .77778],
              8937: [.23222, .74111, 0, 0, .77778],
              8938: [.20576, .70576, 0, 0, .77778],
              8939: [.20576, .70576, 0, 0, .77778],
              8940: [.30274, .79383, 0, 0, .77778],
              8941: [.30274, .79383, 0, 0, .77778],
              8994: [.19444, .69224, 0, 0, .77778],
              8995: [.19444, .69224, 0, 0, .77778],
              9416: [.15559, .69224, 0, 0, .90222],
              9484: [0, .69224, 0, 0, .5],
              9488: [0, .69224, 0, 0, .5],
              9492: [0, .37788, 0, 0, .5],
              9496: [0, .37788, 0, 0, .5],
              9585: [.19444, .68889, 0, 0, .88889],
              9586: [.19444, .74111, 0, 0, .88889],
              9632: [0, .675, 0, 0, .77778],
              9633: [0, .675, 0, 0, .77778],
              9650: [0, .54986, 0, 0, .72222],
              9651: [0, .54986, 0, 0, .72222],
              9654: [.03517, .54986, 0, 0, .77778],
              9660: [0, .54986, 0, 0, .72222],
              9661: [0, .54986, 0, 0, .72222],
              9664: [.03517, .54986, 0, 0, .77778],
              9674: [.11111, .69224, 0, 0, .66667],
              9733: [.19444, .69224, 0, 0, .94445],
              10003: [0, .69224, 0, 0, .83334],
              10016: [0, .69224, 0, 0, .83334],
              10731: [.11111, .69224, 0, 0, .66667],
              10846: [.19444, .75583, 0, 0, .61111],
              10877: [.13667, .63667, 0, 0, .77778],
              10878: [.13667, .63667, 0, 0, .77778],
              10885: [.25583, .75583, 0, 0, .77778],
              10886: [.25583, .75583, 0, 0, .77778],
              10887: [.13597, .63597, 0, 0, .77778],
              10888: [.13597, .63597, 0, 0, .77778],
              10889: [.26167, .75726, 0, 0, .77778],
              10890: [.26167, .75726, 0, 0, .77778],
              10891: [.48256, .98256, 0, 0, .77778],
              10892: [.48256, .98256, 0, 0, .77778],
              10901: [.13667, .63667, 0, 0, .77778],
              10902: [.13667, .63667, 0, 0, .77778],
              10933: [.25142, .75726, 0, 0, .77778],
              10934: [.25142, .75726, 0, 0, .77778],
              10935: [.26167, .75726, 0, 0, .77778],
              10936: [.26167, .75726, 0, 0, .77778],
              10937: [.26167, .75726, 0, 0, .77778],
              10938: [.26167, .75726, 0, 0, .77778],
              10949: [.25583, .75583, 0, 0, .77778],
              10950: [.25583, .75583, 0, 0, .77778],
              10955: [.28481, .79383, 0, 0, .77778],
              10956: [.28481, .79383, 0, 0, .77778],
              57350: [.08167, .58167, 0, 0, .22222],
              57351: [.08167, .58167, 0, 0, .38889],
              57352: [.08167, .58167, 0, 0, .77778],
              57353: [0, .43056, .04028, 0, .66667],
              57356: [.25142, .75726, 0, 0, .77778],
              57357: [.25142, .75726, 0, 0, .77778],
              57358: [.41951, .91951, 0, 0, .77778],
              57359: [.30274, .79383, 0, 0, .77778],
              57360: [.30274, .79383, 0, 0, .77778],
              57361: [.41951, .91951, 0, 0, .77778],
              57366: [.25142, .75726, 0, 0, .77778],
              57367: [.25142, .75726, 0, 0, .77778],
              57368: [.25142, .75726, 0, 0, .77778],
              57369: [.25142, .75726, 0, 0, .77778],
              57370: [.13597, .63597, 0, 0, .77778],
              57371: [.13597, .63597, 0, 0, .77778]
            },
            "Caligraphic-Regular": {
              32: [0, 0, 0, 0, .25],
              65: [0, .68333, 0, .19445, .79847],
              66: [0, .68333, .03041, .13889, .65681],
              67: [0, .68333, .05834, .13889, .52653],
              68: [0, .68333, .02778, .08334, .77139],
              69: [0, .68333, .08944, .11111, .52778],
              70: [0, .68333, .09931, .11111, .71875],
              71: [.09722, .68333, .0593, .11111, .59487],
              72: [0, .68333, .00965, .11111, .84452],
              73: [0, .68333, .07382, 0, .54452],
              74: [.09722, .68333, .18472, .16667, .67778],
              75: [0, .68333, .01445, .05556, .76195],
              76: [0, .68333, 0, .13889, .68972],
              77: [0, .68333, 0, .13889, 1.2009],
              78: [0, .68333, .14736, .08334, .82049],
              79: [0, .68333, .02778, .11111, .79611],
              80: [0, .68333, .08222, .08334, .69556],
              81: [.09722, .68333, 0, .11111, .81667],
              82: [0, .68333, 0, .08334, .8475],
              83: [0, .68333, .075, .13889, .60556],
              84: [0, .68333, .25417, 0, .54464],
              85: [0, .68333, .09931, .08334, .62583],
              86: [0, .68333, .08222, 0, .61278],
              87: [0, .68333, .08222, .08334, .98778],
              88: [0, .68333, .14643, .13889, .7133],
              89: [.09722, .68333, .08222, .08334, .66834],
              90: [0, .68333, .07944, .13889, .72473],
              160: [0, 0, 0, 0, .25]
            },
            "Fraktur-Regular": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69141, 0, 0, .29574],
              34: [0, .69141, 0, 0, .21471],
              38: [0, .69141, 0, 0, .73786],
              39: [0, .69141, 0, 0, .21201],
              40: [.24982, .74947, 0, 0, .38865],
              41: [.24982, .74947, 0, 0, .38865],
              42: [0, .62119, 0, 0, .27764],
              43: [.08319, .58283, 0, 0, .75623],
              44: [0, .10803, 0, 0, .27764],
              45: [.08319, .58283, 0, 0, .75623],
              46: [0, .10803, 0, 0, .27764],
              47: [.24982, .74947, 0, 0, .50181],
              48: [0, .47534, 0, 0, .50181],
              49: [0, .47534, 0, 0, .50181],
              50: [0, .47534, 0, 0, .50181],
              51: [.18906, .47534, 0, 0, .50181],
              52: [.18906, .47534, 0, 0, .50181],
              53: [.18906, .47534, 0, 0, .50181],
              54: [0, .69141, 0, 0, .50181],
              55: [.18906, .47534, 0, 0, .50181],
              56: [0, .69141, 0, 0, .50181],
              57: [.18906, .47534, 0, 0, .50181],
              58: [0, .47534, 0, 0, .21606],
              59: [.12604, .47534, 0, 0, .21606],
              61: [-.13099, .36866, 0, 0, .75623],
              63: [0, .69141, 0, 0, .36245],
              65: [0, .69141, 0, 0, .7176],
              66: [0, .69141, 0, 0, .88397],
              67: [0, .69141, 0, 0, .61254],
              68: [0, .69141, 0, 0, .83158],
              69: [0, .69141, 0, 0, .66278],
              70: [.12604, .69141, 0, 0, .61119],
              71: [0, .69141, 0, 0, .78539],
              72: [.06302, .69141, 0, 0, .7203],
              73: [0, .69141, 0, 0, .55448],
              74: [.12604, .69141, 0, 0, .55231],
              75: [0, .69141, 0, 0, .66845],
              76: [0, .69141, 0, 0, .66602],
              77: [0, .69141, 0, 0, 1.04953],
              78: [0, .69141, 0, 0, .83212],
              79: [0, .69141, 0, 0, .82699],
              80: [.18906, .69141, 0, 0, .82753],
              81: [.03781, .69141, 0, 0, .82699],
              82: [0, .69141, 0, 0, .82807],
              83: [0, .69141, 0, 0, .82861],
              84: [0, .69141, 0, 0, .66899],
              85: [0, .69141, 0, 0, .64576],
              86: [0, .69141, 0, 0, .83131],
              87: [0, .69141, 0, 0, 1.04602],
              88: [0, .69141, 0, 0, .71922],
              89: [.18906, .69141, 0, 0, .83293],
              90: [.12604, .69141, 0, 0, .60201],
              91: [.24982, .74947, 0, 0, .27764],
              93: [.24982, .74947, 0, 0, .27764],
              94: [0, .69141, 0, 0, .49965],
              97: [0, .47534, 0, 0, .50046],
              98: [0, .69141, 0, 0, .51315],
              99: [0, .47534, 0, 0, .38946],
              100: [0, .62119, 0, 0, .49857],
              101: [0, .47534, 0, 0, .40053],
              102: [.18906, .69141, 0, 0, .32626],
              103: [.18906, .47534, 0, 0, .5037],
              104: [.18906, .69141, 0, 0, .52126],
              105: [0, .69141, 0, 0, .27899],
              106: [0, .69141, 0, 0, .28088],
              107: [0, .69141, 0, 0, .38946],
              108: [0, .69141, 0, 0, .27953],
              109: [0, .47534, 0, 0, .76676],
              110: [0, .47534, 0, 0, .52666],
              111: [0, .47534, 0, 0, .48885],
              112: [.18906, .52396, 0, 0, .50046],
              113: [.18906, .47534, 0, 0, .48912],
              114: [0, .47534, 0, 0, .38919],
              115: [0, .47534, 0, 0, .44266],
              116: [0, .62119, 0, 0, .33301],
              117: [0, .47534, 0, 0, .5172],
              118: [0, .52396, 0, 0, .5118],
              119: [0, .52396, 0, 0, .77351],
              120: [.18906, .47534, 0, 0, .38865],
              121: [.18906, .47534, 0, 0, .49884],
              122: [.18906, .47534, 0, 0, .39054],
              160: [0, 0, 0, 0, .25],
              8216: [0, .69141, 0, 0, .21471],
              8217: [0, .69141, 0, 0, .21471],
              58112: [0, .62119, 0, 0, .49749],
              58113: [0, .62119, 0, 0, .4983],
              58114: [.18906, .69141, 0, 0, .33328],
              58115: [.18906, .69141, 0, 0, .32923],
              58116: [.18906, .47534, 0, 0, .50343],
              58117: [0, .69141, 0, 0, .33301],
              58118: [0, .62119, 0, 0, .33409],
              58119: [0, .47534, 0, 0, .50073]
            },
            "Main-Bold": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, 0, 0, .35],
              34: [0, .69444, 0, 0, .60278],
              35: [.19444, .69444, 0, 0, .95833],
              36: [.05556, .75, 0, 0, .575],
              37: [.05556, .75, 0, 0, .95833],
              38: [0, .69444, 0, 0, .89444],
              39: [0, .69444, 0, 0, .31944],
              40: [.25, .75, 0, 0, .44722],
              41: [.25, .75, 0, 0, .44722],
              42: [0, .75, 0, 0, .575],
              43: [.13333, .63333, 0, 0, .89444],
              44: [.19444, .15556, 0, 0, .31944],
              45: [0, .44444, 0, 0, .38333],
              46: [0, .15556, 0, 0, .31944],
              47: [.25, .75, 0, 0, .575],
              48: [0, .64444, 0, 0, .575],
              49: [0, .64444, 0, 0, .575],
              50: [0, .64444, 0, 0, .575],
              51: [0, .64444, 0, 0, .575],
              52: [0, .64444, 0, 0, .575],
              53: [0, .64444, 0, 0, .575],
              54: [0, .64444, 0, 0, .575],
              55: [0, .64444, 0, 0, .575],
              56: [0, .64444, 0, 0, .575],
              57: [0, .64444, 0, 0, .575],
              58: [0, .44444, 0, 0, .31944],
              59: [.19444, .44444, 0, 0, .31944],
              60: [.08556, .58556, 0, 0, .89444],
              61: [-.10889, .39111, 0, 0, .89444],
              62: [.08556, .58556, 0, 0, .89444],
              63: [0, .69444, 0, 0, .54305],
              64: [0, .69444, 0, 0, .89444],
              65: [0, .68611, 0, 0, .86944],
              66: [0, .68611, 0, 0, .81805],
              67: [0, .68611, 0, 0, .83055],
              68: [0, .68611, 0, 0, .88194],
              69: [0, .68611, 0, 0, .75555],
              70: [0, .68611, 0, 0, .72361],
              71: [0, .68611, 0, 0, .90416],
              72: [0, .68611, 0, 0, .9],
              73: [0, .68611, 0, 0, .43611],
              74: [0, .68611, 0, 0, .59444],
              75: [0, .68611, 0, 0, .90138],
              76: [0, .68611, 0, 0, .69166],
              77: [0, .68611, 0, 0, 1.09166],
              78: [0, .68611, 0, 0, .9],
              79: [0, .68611, 0, 0, .86388],
              80: [0, .68611, 0, 0, .78611],
              81: [.19444, .68611, 0, 0, .86388],
              82: [0, .68611, 0, 0, .8625],
              83: [0, .68611, 0, 0, .63889],
              84: [0, .68611, 0, 0, .8],
              85: [0, .68611, 0, 0, .88472],
              86: [0, .68611, .01597, 0, .86944],
              87: [0, .68611, .01597, 0, 1.18888],
              88: [0, .68611, 0, 0, .86944],
              89: [0, .68611, .02875, 0, .86944],
              90: [0, .68611, 0, 0, .70277],
              91: [.25, .75, 0, 0, .31944],
              92: [.25, .75, 0, 0, .575],
              93: [.25, .75, 0, 0, .31944],
              94: [0, .69444, 0, 0, .575],
              95: [.31, .13444, .03194, 0, .575],
              97: [0, .44444, 0, 0, .55902],
              98: [0, .69444, 0, 0, .63889],
              99: [0, .44444, 0, 0, .51111],
              100: [0, .69444, 0, 0, .63889],
              101: [0, .44444, 0, 0, .52708],
              102: [0, .69444, .10903, 0, .35139],
              103: [.19444, .44444, .01597, 0, .575],
              104: [0, .69444, 0, 0, .63889],
              105: [0, .69444, 0, 0, .31944],
              106: [.19444, .69444, 0, 0, .35139],
              107: [0, .69444, 0, 0, .60694],
              108: [0, .69444, 0, 0, .31944],
              109: [0, .44444, 0, 0, .95833],
              110: [0, .44444, 0, 0, .63889],
              111: [0, .44444, 0, 0, .575],
              112: [.19444, .44444, 0, 0, .63889],
              113: [.19444, .44444, 0, 0, .60694],
              114: [0, .44444, 0, 0, .47361],
              115: [0, .44444, 0, 0, .45361],
              116: [0, .63492, 0, 0, .44722],
              117: [0, .44444, 0, 0, .63889],
              118: [0, .44444, .01597, 0, .60694],
              119: [0, .44444, .01597, 0, .83055],
              120: [0, .44444, 0, 0, .60694],
              121: [.19444, .44444, .01597, 0, .60694],
              122: [0, .44444, 0, 0, .51111],
              123: [.25, .75, 0, 0, .575],
              124: [.25, .75, 0, 0, .31944],
              125: [.25, .75, 0, 0, .575],
              126: [.35, .34444, 0, 0, .575],
              160: [0, 0, 0, 0, .25],
              163: [0, .69444, 0, 0, .86853],
              168: [0, .69444, 0, 0, .575],
              172: [0, .44444, 0, 0, .76666],
              176: [0, .69444, 0, 0, .86944],
              177: [.13333, .63333, 0, 0, .89444],
              184: [.17014, 0, 0, 0, .51111],
              198: [0, .68611, 0, 0, 1.04166],
              215: [.13333, .63333, 0, 0, .89444],
              216: [.04861, .73472, 0, 0, .89444],
              223: [0, .69444, 0, 0, .59722],
              230: [0, .44444, 0, 0, .83055],
              247: [.13333, .63333, 0, 0, .89444],
              248: [.09722, .54167, 0, 0, .575],
              305: [0, .44444, 0, 0, .31944],
              338: [0, .68611, 0, 0, 1.16944],
              339: [0, .44444, 0, 0, .89444],
              567: [.19444, .44444, 0, 0, .35139],
              710: [0, .69444, 0, 0, .575],
              711: [0, .63194, 0, 0, .575],
              713: [0, .59611, 0, 0, .575],
              714: [0, .69444, 0, 0, .575],
              715: [0, .69444, 0, 0, .575],
              728: [0, .69444, 0, 0, .575],
              729: [0, .69444, 0, 0, .31944],
              730: [0, .69444, 0, 0, .86944],
              732: [0, .69444, 0, 0, .575],
              733: [0, .69444, 0, 0, .575],
              915: [0, .68611, 0, 0, .69166],
              916: [0, .68611, 0, 0, .95833],
              920: [0, .68611, 0, 0, .89444],
              923: [0, .68611, 0, 0, .80555],
              926: [0, .68611, 0, 0, .76666],
              928: [0, .68611, 0, 0, .9],
              931: [0, .68611, 0, 0, .83055],
              933: [0, .68611, 0, 0, .89444],
              934: [0, .68611, 0, 0, .83055],
              936: [0, .68611, 0, 0, .89444],
              937: [0, .68611, 0, 0, .83055],
              8211: [0, .44444, .03194, 0, .575],
              8212: [0, .44444, .03194, 0, 1.14999],
              8216: [0, .69444, 0, 0, .31944],
              8217: [0, .69444, 0, 0, .31944],
              8220: [0, .69444, 0, 0, .60278],
              8221: [0, .69444, 0, 0, .60278],
              8224: [.19444, .69444, 0, 0, .51111],
              8225: [.19444, .69444, 0, 0, .51111],
              8242: [0, .55556, 0, 0, .34444],
              8407: [0, .72444, .15486, 0, .575],
              8463: [0, .69444, 0, 0, .66759],
              8465: [0, .69444, 0, 0, .83055],
              8467: [0, .69444, 0, 0, .47361],
              8472: [.19444, .44444, 0, 0, .74027],
              8476: [0, .69444, 0, 0, .83055],
              8501: [0, .69444, 0, 0, .70277],
              8592: [-.10889, .39111, 0, 0, 1.14999],
              8593: [.19444, .69444, 0, 0, .575],
              8594: [-.10889, .39111, 0, 0, 1.14999],
              8595: [.19444, .69444, 0, 0, .575],
              8596: [-.10889, .39111, 0, 0, 1.14999],
              8597: [.25, .75, 0, 0, .575],
              8598: [.19444, .69444, 0, 0, 1.14999],
              8599: [.19444, .69444, 0, 0, 1.14999],
              8600: [.19444, .69444, 0, 0, 1.14999],
              8601: [.19444, .69444, 0, 0, 1.14999],
              8636: [-.10889, .39111, 0, 0, 1.14999],
              8637: [-.10889, .39111, 0, 0, 1.14999],
              8640: [-.10889, .39111, 0, 0, 1.14999],
              8641: [-.10889, .39111, 0, 0, 1.14999],
              8656: [-.10889, .39111, 0, 0, 1.14999],
              8657: [.19444, .69444, 0, 0, .70277],
              8658: [-.10889, .39111, 0, 0, 1.14999],
              8659: [.19444, .69444, 0, 0, .70277],
              8660: [-.10889, .39111, 0, 0, 1.14999],
              8661: [.25, .75, 0, 0, .70277],
              8704: [0, .69444, 0, 0, .63889],
              8706: [0, .69444, .06389, 0, .62847],
              8707: [0, .69444, 0, 0, .63889],
              8709: [.05556, .75, 0, 0, .575],
              8711: [0, .68611, 0, 0, .95833],
              8712: [.08556, .58556, 0, 0, .76666],
              8715: [.08556, .58556, 0, 0, .76666],
              8722: [.13333, .63333, 0, 0, .89444],
              8723: [.13333, .63333, 0, 0, .89444],
              8725: [.25, .75, 0, 0, .575],
              8726: [.25, .75, 0, 0, .575],
              8727: [-.02778, .47222, 0, 0, .575],
              8728: [-.02639, .47361, 0, 0, .575],
              8729: [-.02639, .47361, 0, 0, .575],
              8730: [.18, .82, 0, 0, .95833],
              8733: [0, .44444, 0, 0, .89444],
              8734: [0, .44444, 0, 0, 1.14999],
              8736: [0, .69224, 0, 0, .72222],
              8739: [.25, .75, 0, 0, .31944],
              8741: [.25, .75, 0, 0, .575],
              8743: [0, .55556, 0, 0, .76666],
              8744: [0, .55556, 0, 0, .76666],
              8745: [0, .55556, 0, 0, .76666],
              8746: [0, .55556, 0, 0, .76666],
              8747: [.19444, .69444, .12778, 0, .56875],
              8764: [-.10889, .39111, 0, 0, .89444],
              8768: [.19444, .69444, 0, 0, .31944],
              8771: [.00222, .50222, 0, 0, .89444],
              8776: [.02444, .52444, 0, 0, .89444],
              8781: [.00222, .50222, 0, 0, .89444],
              8801: [.00222, .50222, 0, 0, .89444],
              8804: [.19667, .69667, 0, 0, .89444],
              8805: [.19667, .69667, 0, 0, .89444],
              8810: [.08556, .58556, 0, 0, 1.14999],
              8811: [.08556, .58556, 0, 0, 1.14999],
              8826: [.08556, .58556, 0, 0, .89444],
              8827: [.08556, .58556, 0, 0, .89444],
              8834: [.08556, .58556, 0, 0, .89444],
              8835: [.08556, .58556, 0, 0, .89444],
              8838: [.19667, .69667, 0, 0, .89444],
              8839: [.19667, .69667, 0, 0, .89444],
              8846: [0, .55556, 0, 0, .76666],
              8849: [.19667, .69667, 0, 0, .89444],
              8850: [.19667, .69667, 0, 0, .89444],
              8851: [0, .55556, 0, 0, .76666],
              8852: [0, .55556, 0, 0, .76666],
              8853: [.13333, .63333, 0, 0, .89444],
              8854: [.13333, .63333, 0, 0, .89444],
              8855: [.13333, .63333, 0, 0, .89444],
              8856: [.13333, .63333, 0, 0, .89444],
              8857: [.13333, .63333, 0, 0, .89444],
              8866: [0, .69444, 0, 0, .70277],
              8867: [0, .69444, 0, 0, .70277],
              8868: [0, .69444, 0, 0, .89444],
              8869: [0, .69444, 0, 0, .89444],
              8900: [-.02639, .47361, 0, 0, .575],
              8901: [-.02639, .47361, 0, 0, .31944],
              8902: [-.02778, .47222, 0, 0, .575],
              8968: [.25, .75, 0, 0, .51111],
              8969: [.25, .75, 0, 0, .51111],
              8970: [.25, .75, 0, 0, .51111],
              8971: [.25, .75, 0, 0, .51111],
              8994: [-.13889, .36111, 0, 0, 1.14999],
              8995: [-.13889, .36111, 0, 0, 1.14999],
              9651: [.19444, .69444, 0, 0, 1.02222],
              9657: [-.02778, .47222, 0, 0, .575],
              9661: [.19444, .69444, 0, 0, 1.02222],
              9667: [-.02778, .47222, 0, 0, .575],
              9711: [.19444, .69444, 0, 0, 1.14999],
              9824: [.12963, .69444, 0, 0, .89444],
              9825: [.12963, .69444, 0, 0, .89444],
              9826: [.12963, .69444, 0, 0, .89444],
              9827: [.12963, .69444, 0, 0, .89444],
              9837: [0, .75, 0, 0, .44722],
              9838: [.19444, .69444, 0, 0, .44722],
              9839: [.19444, .69444, 0, 0, .44722],
              10216: [.25, .75, 0, 0, .44722],
              10217: [.25, .75, 0, 0, .44722],
              10815: [0, .68611, 0, 0, .9],
              10927: [.19667, .69667, 0, 0, .89444],
              10928: [.19667, .69667, 0, 0, .89444],
              57376: [.19444, .69444, 0, 0, 0]
            },
            "Main-BoldItalic": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, .11417, 0, .38611],
              34: [0, .69444, .07939, 0, .62055],
              35: [.19444, .69444, .06833, 0, .94444],
              37: [.05556, .75, .12861, 0, .94444],
              38: [0, .69444, .08528, 0, .88555],
              39: [0, .69444, .12945, 0, .35555],
              40: [.25, .75, .15806, 0, .47333],
              41: [.25, .75, .03306, 0, .47333],
              42: [0, .75, .14333, 0, .59111],
              43: [.10333, .60333, .03306, 0, .88555],
              44: [.19444, .14722, 0, 0, .35555],
              45: [0, .44444, .02611, 0, .41444],
              46: [0, .14722, 0, 0, .35555],
              47: [.25, .75, .15806, 0, .59111],
              48: [0, .64444, .13167, 0, .59111],
              49: [0, .64444, .13167, 0, .59111],
              50: [0, .64444, .13167, 0, .59111],
              51: [0, .64444, .13167, 0, .59111],
              52: [.19444, .64444, .13167, 0, .59111],
              53: [0, .64444, .13167, 0, .59111],
              54: [0, .64444, .13167, 0, .59111],
              55: [.19444, .64444, .13167, 0, .59111],
              56: [0, .64444, .13167, 0, .59111],
              57: [0, .64444, .13167, 0, .59111],
              58: [0, .44444, .06695, 0, .35555],
              59: [.19444, .44444, .06695, 0, .35555],
              61: [-.10889, .39111, .06833, 0, .88555],
              63: [0, .69444, .11472, 0, .59111],
              64: [0, .69444, .09208, 0, .88555],
              65: [0, .68611, 0, 0, .86555],
              66: [0, .68611, .0992, 0, .81666],
              67: [0, .68611, .14208, 0, .82666],
              68: [0, .68611, .09062, 0, .87555],
              69: [0, .68611, .11431, 0, .75666],
              70: [0, .68611, .12903, 0, .72722],
              71: [0, .68611, .07347, 0, .89527],
              72: [0, .68611, .17208, 0, .8961],
              73: [0, .68611, .15681, 0, .47166],
              74: [0, .68611, .145, 0, .61055],
              75: [0, .68611, .14208, 0, .89499],
              76: [0, .68611, 0, 0, .69777],
              77: [0, .68611, .17208, 0, 1.07277],
              78: [0, .68611, .17208, 0, .8961],
              79: [0, .68611, .09062, 0, .85499],
              80: [0, .68611, .0992, 0, .78721],
              81: [.19444, .68611, .09062, 0, .85499],
              82: [0, .68611, .02559, 0, .85944],
              83: [0, .68611, .11264, 0, .64999],
              84: [0, .68611, .12903, 0, .7961],
              85: [0, .68611, .17208, 0, .88083],
              86: [0, .68611, .18625, 0, .86555],
              87: [0, .68611, .18625, 0, 1.15999],
              88: [0, .68611, .15681, 0, .86555],
              89: [0, .68611, .19803, 0, .86555],
              90: [0, .68611, .14208, 0, .70888],
              91: [.25, .75, .1875, 0, .35611],
              93: [.25, .75, .09972, 0, .35611],
              94: [0, .69444, .06709, 0, .59111],
              95: [.31, .13444, .09811, 0, .59111],
              97: [0, .44444, .09426, 0, .59111],
              98: [0, .69444, .07861, 0, .53222],
              99: [0, .44444, .05222, 0, .53222],
              100: [0, .69444, .10861, 0, .59111],
              101: [0, .44444, .085, 0, .53222],
              102: [.19444, .69444, .21778, 0, .4],
              103: [.19444, .44444, .105, 0, .53222],
              104: [0, .69444, .09426, 0, .59111],
              105: [0, .69326, .11387, 0, .35555],
              106: [.19444, .69326, .1672, 0, .35555],
              107: [0, .69444, .11111, 0, .53222],
              108: [0, .69444, .10861, 0, .29666],
              109: [0, .44444, .09426, 0, .94444],
              110: [0, .44444, .09426, 0, .64999],
              111: [0, .44444, .07861, 0, .59111],
              112: [.19444, .44444, .07861, 0, .59111],
              113: [.19444, .44444, .105, 0, .53222],
              114: [0, .44444, .11111, 0, .50167],
              115: [0, .44444, .08167, 0, .48694],
              116: [0, .63492, .09639, 0, .385],
              117: [0, .44444, .09426, 0, .62055],
              118: [0, .44444, .11111, 0, .53222],
              119: [0, .44444, .11111, 0, .76777],
              120: [0, .44444, .12583, 0, .56055],
              121: [.19444, .44444, .105, 0, .56166],
              122: [0, .44444, .13889, 0, .49055],
              126: [.35, .34444, .11472, 0, .59111],
              160: [0, 0, 0, 0, .25],
              168: [0, .69444, .11473, 0, .59111],
              176: [0, .69444, 0, 0, .94888],
              184: [.17014, 0, 0, 0, .53222],
              198: [0, .68611, .11431, 0, 1.02277],
              216: [.04861, .73472, .09062, 0, .88555],
              223: [.19444, .69444, .09736, 0, .665],
              230: [0, .44444, .085, 0, .82666],
              248: [.09722, .54167, .09458, 0, .59111],
              305: [0, .44444, .09426, 0, .35555],
              338: [0, .68611, .11431, 0, 1.14054],
              339: [0, .44444, .085, 0, .82666],
              567: [.19444, .44444, .04611, 0, .385],
              710: [0, .69444, .06709, 0, .59111],
              711: [0, .63194, .08271, 0, .59111],
              713: [0, .59444, .10444, 0, .59111],
              714: [0, .69444, .08528, 0, .59111],
              715: [0, .69444, 0, 0, .59111],
              728: [0, .69444, .10333, 0, .59111],
              729: [0, .69444, .12945, 0, .35555],
              730: [0, .69444, 0, 0, .94888],
              732: [0, .69444, .11472, 0, .59111],
              733: [0, .69444, .11472, 0, .59111],
              915: [0, .68611, .12903, 0, .69777],
              916: [0, .68611, 0, 0, .94444],
              920: [0, .68611, .09062, 0, .88555],
              923: [0, .68611, 0, 0, .80666],
              926: [0, .68611, .15092, 0, .76777],
              928: [0, .68611, .17208, 0, .8961],
              931: [0, .68611, .11431, 0, .82666],
              933: [0, .68611, .10778, 0, .88555],
              934: [0, .68611, .05632, 0, .82666],
              936: [0, .68611, .10778, 0, .88555],
              937: [0, .68611, .0992, 0, .82666],
              8211: [0, .44444, .09811, 0, .59111],
              8212: [0, .44444, .09811, 0, 1.18221],
              8216: [0, .69444, .12945, 0, .35555],
              8217: [0, .69444, .12945, 0, .35555],
              8220: [0, .69444, .16772, 0, .62055],
              8221: [0, .69444, .07939, 0, .62055]
            },
            "Main-Italic": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, .12417, 0, .30667],
              34: [0, .69444, .06961, 0, .51444],
              35: [.19444, .69444, .06616, 0, .81777],
              37: [.05556, .75, .13639, 0, .81777],
              38: [0, .69444, .09694, 0, .76666],
              39: [0, .69444, .12417, 0, .30667],
              40: [.25, .75, .16194, 0, .40889],
              41: [.25, .75, .03694, 0, .40889],
              42: [0, .75, .14917, 0, .51111],
              43: [.05667, .56167, .03694, 0, .76666],
              44: [.19444, .10556, 0, 0, .30667],
              45: [0, .43056, .02826, 0, .35778],
              46: [0, .10556, 0, 0, .30667],
              47: [.25, .75, .16194, 0, .51111],
              48: [0, .64444, .13556, 0, .51111],
              49: [0, .64444, .13556, 0, .51111],
              50: [0, .64444, .13556, 0, .51111],
              51: [0, .64444, .13556, 0, .51111],
              52: [.19444, .64444, .13556, 0, .51111],
              53: [0, .64444, .13556, 0, .51111],
              54: [0, .64444, .13556, 0, .51111],
              55: [.19444, .64444, .13556, 0, .51111],
              56: [0, .64444, .13556, 0, .51111],
              57: [0, .64444, .13556, 0, .51111],
              58: [0, .43056, .0582, 0, .30667],
              59: [.19444, .43056, .0582, 0, .30667],
              61: [-.13313, .36687, .06616, 0, .76666],
              63: [0, .69444, .1225, 0, .51111],
              64: [0, .69444, .09597, 0, .76666],
              65: [0, .68333, 0, 0, .74333],
              66: [0, .68333, .10257, 0, .70389],
              67: [0, .68333, .14528, 0, .71555],
              68: [0, .68333, .09403, 0, .755],
              69: [0, .68333, .12028, 0, .67833],
              70: [0, .68333, .13305, 0, .65277],
              71: [0, .68333, .08722, 0, .77361],
              72: [0, .68333, .16389, 0, .74333],
              73: [0, .68333, .15806, 0, .38555],
              74: [0, .68333, .14028, 0, .525],
              75: [0, .68333, .14528, 0, .76888],
              76: [0, .68333, 0, 0, .62722],
              77: [0, .68333, .16389, 0, .89666],
              78: [0, .68333, .16389, 0, .74333],
              79: [0, .68333, .09403, 0, .76666],
              80: [0, .68333, .10257, 0, .67833],
              81: [.19444, .68333, .09403, 0, .76666],
              82: [0, .68333, .03868, 0, .72944],
              83: [0, .68333, .11972, 0, .56222],
              84: [0, .68333, .13305, 0, .71555],
              85: [0, .68333, .16389, 0, .74333],
              86: [0, .68333, .18361, 0, .74333],
              87: [0, .68333, .18361, 0, .99888],
              88: [0, .68333, .15806, 0, .74333],
              89: [0, .68333, .19383, 0, .74333],
              90: [0, .68333, .14528, 0, .61333],
              91: [.25, .75, .1875, 0, .30667],
              93: [.25, .75, .10528, 0, .30667],
              94: [0, .69444, .06646, 0, .51111],
              95: [.31, .12056, .09208, 0, .51111],
              97: [0, .43056, .07671, 0, .51111],
              98: [0, .69444, .06312, 0, .46],
              99: [0, .43056, .05653, 0, .46],
              100: [0, .69444, .10333, 0, .51111],
              101: [0, .43056, .07514, 0, .46],
              102: [.19444, .69444, .21194, 0, .30667],
              103: [.19444, .43056, .08847, 0, .46],
              104: [0, .69444, .07671, 0, .51111],
              105: [0, .65536, .1019, 0, .30667],
              106: [.19444, .65536, .14467, 0, .30667],
              107: [0, .69444, .10764, 0, .46],
              108: [0, .69444, .10333, 0, .25555],
              109: [0, .43056, .07671, 0, .81777],
              110: [0, .43056, .07671, 0, .56222],
              111: [0, .43056, .06312, 0, .51111],
              112: [.19444, .43056, .06312, 0, .51111],
              113: [.19444, .43056, .08847, 0, .46],
              114: [0, .43056, .10764, 0, .42166],
              115: [0, .43056, .08208, 0, .40889],
              116: [0, .61508, .09486, 0, .33222],
              117: [0, .43056, .07671, 0, .53666],
              118: [0, .43056, .10764, 0, .46],
              119: [0, .43056, .10764, 0, .66444],
              120: [0, .43056, .12042, 0, .46389],
              121: [.19444, .43056, .08847, 0, .48555],
              122: [0, .43056, .12292, 0, .40889],
              126: [.35, .31786, .11585, 0, .51111],
              160: [0, 0, 0, 0, .25],
              168: [0, .66786, .10474, 0, .51111],
              176: [0, .69444, 0, 0, .83129],
              184: [.17014, 0, 0, 0, .46],
              198: [0, .68333, .12028, 0, .88277],
              216: [.04861, .73194, .09403, 0, .76666],
              223: [.19444, .69444, .10514, 0, .53666],
              230: [0, .43056, .07514, 0, .71555],
              248: [.09722, .52778, .09194, 0, .51111],
              338: [0, .68333, .12028, 0, .98499],
              339: [0, .43056, .07514, 0, .71555],
              710: [0, .69444, .06646, 0, .51111],
              711: [0, .62847, .08295, 0, .51111],
              713: [0, .56167, .10333, 0, .51111],
              714: [0, .69444, .09694, 0, .51111],
              715: [0, .69444, 0, 0, .51111],
              728: [0, .69444, .10806, 0, .51111],
              729: [0, .66786, .11752, 0, .30667],
              730: [0, .69444, 0, 0, .83129],
              732: [0, .66786, .11585, 0, .51111],
              733: [0, .69444, .1225, 0, .51111],
              915: [0, .68333, .13305, 0, .62722],
              916: [0, .68333, 0, 0, .81777],
              920: [0, .68333, .09403, 0, .76666],
              923: [0, .68333, 0, 0, .69222],
              926: [0, .68333, .15294, 0, .66444],
              928: [0, .68333, .16389, 0, .74333],
              931: [0, .68333, .12028, 0, .71555],
              933: [0, .68333, .11111, 0, .76666],
              934: [0, .68333, .05986, 0, .71555],
              936: [0, .68333, .11111, 0, .76666],
              937: [0, .68333, .10257, 0, .71555],
              8211: [0, .43056, .09208, 0, .51111],
              8212: [0, .43056, .09208, 0, 1.02222],
              8216: [0, .69444, .12417, 0, .30667],
              8217: [0, .69444, .12417, 0, .30667],
              8220: [0, .69444, .1685, 0, .51444],
              8221: [0, .69444, .06961, 0, .51444],
              8463: [0, .68889, 0, 0, .54028]
            },
            "Main-Regular": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, 0, 0, .27778],
              34: [0, .69444, 0, 0, .5],
              35: [.19444, .69444, 0, 0, .83334],
              36: [.05556, .75, 0, 0, .5],
              37: [.05556, .75, 0, 0, .83334],
              38: [0, .69444, 0, 0, .77778],
              39: [0, .69444, 0, 0, .27778],
              40: [.25, .75, 0, 0, .38889],
              41: [.25, .75, 0, 0, .38889],
              42: [0, .75, 0, 0, .5],
              43: [.08333, .58333, 0, 0, .77778],
              44: [.19444, .10556, 0, 0, .27778],
              45: [0, .43056, 0, 0, .33333],
              46: [0, .10556, 0, 0, .27778],
              47: [.25, .75, 0, 0, .5],
              48: [0, .64444, 0, 0, .5],
              49: [0, .64444, 0, 0, .5],
              50: [0, .64444, 0, 0, .5],
              51: [0, .64444, 0, 0, .5],
              52: [0, .64444, 0, 0, .5],
              53: [0, .64444, 0, 0, .5],
              54: [0, .64444, 0, 0, .5],
              55: [0, .64444, 0, 0, .5],
              56: [0, .64444, 0, 0, .5],
              57: [0, .64444, 0, 0, .5],
              58: [0, .43056, 0, 0, .27778],
              59: [.19444, .43056, 0, 0, .27778],
              60: [.0391, .5391, 0, 0, .77778],
              61: [-.13313, .36687, 0, 0, .77778],
              62: [.0391, .5391, 0, 0, .77778],
              63: [0, .69444, 0, 0, .47222],
              64: [0, .69444, 0, 0, .77778],
              65: [0, .68333, 0, 0, .75],
              66: [0, .68333, 0, 0, .70834],
              67: [0, .68333, 0, 0, .72222],
              68: [0, .68333, 0, 0, .76389],
              69: [0, .68333, 0, 0, .68056],
              70: [0, .68333, 0, 0, .65278],
              71: [0, .68333, 0, 0, .78472],
              72: [0, .68333, 0, 0, .75],
              73: [0, .68333, 0, 0, .36111],
              74: [0, .68333, 0, 0, .51389],
              75: [0, .68333, 0, 0, .77778],
              76: [0, .68333, 0, 0, .625],
              77: [0, .68333, 0, 0, .91667],
              78: [0, .68333, 0, 0, .75],
              79: [0, .68333, 0, 0, .77778],
              80: [0, .68333, 0, 0, .68056],
              81: [.19444, .68333, 0, 0, .77778],
              82: [0, .68333, 0, 0, .73611],
              83: [0, .68333, 0, 0, .55556],
              84: [0, .68333, 0, 0, .72222],
              85: [0, .68333, 0, 0, .75],
              86: [0, .68333, .01389, 0, .75],
              87: [0, .68333, .01389, 0, 1.02778],
              88: [0, .68333, 0, 0, .75],
              89: [0, .68333, .025, 0, .75],
              90: [0, .68333, 0, 0, .61111],
              91: [.25, .75, 0, 0, .27778],
              92: [.25, .75, 0, 0, .5],
              93: [.25, .75, 0, 0, .27778],
              94: [0, .69444, 0, 0, .5],
              95: [.31, .12056, .02778, 0, .5],
              97: [0, .43056, 0, 0, .5],
              98: [0, .69444, 0, 0, .55556],
              99: [0, .43056, 0, 0, .44445],
              100: [0, .69444, 0, 0, .55556],
              101: [0, .43056, 0, 0, .44445],
              102: [0, .69444, .07778, 0, .30556],
              103: [.19444, .43056, .01389, 0, .5],
              104: [0, .69444, 0, 0, .55556],
              105: [0, .66786, 0, 0, .27778],
              106: [.19444, .66786, 0, 0, .30556],
              107: [0, .69444, 0, 0, .52778],
              108: [0, .69444, 0, 0, .27778],
              109: [0, .43056, 0, 0, .83334],
              110: [0, .43056, 0, 0, .55556],
              111: [0, .43056, 0, 0, .5],
              112: [.19444, .43056, 0, 0, .55556],
              113: [.19444, .43056, 0, 0, .52778],
              114: [0, .43056, 0, 0, .39167],
              115: [0, .43056, 0, 0, .39445],
              116: [0, .61508, 0, 0, .38889],
              117: [0, .43056, 0, 0, .55556],
              118: [0, .43056, .01389, 0, .52778],
              119: [0, .43056, .01389, 0, .72222],
              120: [0, .43056, 0, 0, .52778],
              121: [.19444, .43056, .01389, 0, .52778],
              122: [0, .43056, 0, 0, .44445],
              123: [.25, .75, 0, 0, .5],
              124: [.25, .75, 0, 0, .27778],
              125: [.25, .75, 0, 0, .5],
              126: [.35, .31786, 0, 0, .5],
              160: [0, 0, 0, 0, .25],
              163: [0, .69444, 0, 0, .76909],
              167: [.19444, .69444, 0, 0, .44445],
              168: [0, .66786, 0, 0, .5],
              172: [0, .43056, 0, 0, .66667],
              176: [0, .69444, 0, 0, .75],
              177: [.08333, .58333, 0, 0, .77778],
              182: [.19444, .69444, 0, 0, .61111],
              184: [.17014, 0, 0, 0, .44445],
              198: [0, .68333, 0, 0, .90278],
              215: [.08333, .58333, 0, 0, .77778],
              216: [.04861, .73194, 0, 0, .77778],
              223: [0, .69444, 0, 0, .5],
              230: [0, .43056, 0, 0, .72222],
              247: [.08333, .58333, 0, 0, .77778],
              248: [.09722, .52778, 0, 0, .5],
              305: [0, .43056, 0, 0, .27778],
              338: [0, .68333, 0, 0, 1.01389],
              339: [0, .43056, 0, 0, .77778],
              567: [.19444, .43056, 0, 0, .30556],
              710: [0, .69444, 0, 0, .5],
              711: [0, .62847, 0, 0, .5],
              713: [0, .56778, 0, 0, .5],
              714: [0, .69444, 0, 0, .5],
              715: [0, .69444, 0, 0, .5],
              728: [0, .69444, 0, 0, .5],
              729: [0, .66786, 0, 0, .27778],
              730: [0, .69444, 0, 0, .75],
              732: [0, .66786, 0, 0, .5],
              733: [0, .69444, 0, 0, .5],
              915: [0, .68333, 0, 0, .625],
              916: [0, .68333, 0, 0, .83334],
              920: [0, .68333, 0, 0, .77778],
              923: [0, .68333, 0, 0, .69445],
              926: [0, .68333, 0, 0, .66667],
              928: [0, .68333, 0, 0, .75],
              931: [0, .68333, 0, 0, .72222],
              933: [0, .68333, 0, 0, .77778],
              934: [0, .68333, 0, 0, .72222],
              936: [0, .68333, 0, 0, .77778],
              937: [0, .68333, 0, 0, .72222],
              8211: [0, .43056, .02778, 0, .5],
              8212: [0, .43056, .02778, 0, 1],
              8216: [0, .69444, 0, 0, .27778],
              8217: [0, .69444, 0, 0, .27778],
              8220: [0, .69444, 0, 0, .5],
              8221: [0, .69444, 0, 0, .5],
              8224: [.19444, .69444, 0, 0, .44445],
              8225: [.19444, .69444, 0, 0, .44445],
              8230: [0, .12, 0, 0, 1.172],
              8242: [0, .55556, 0, 0, .275],
              8407: [0, .71444, .15382, 0, .5],
              8463: [0, .68889, 0, 0, .54028],
              8465: [0, .69444, 0, 0, .72222],
              8467: [0, .69444, 0, .11111, .41667],
              8472: [.19444, .43056, 0, .11111, .63646],
              8476: [0, .69444, 0, 0, .72222],
              8501: [0, .69444, 0, 0, .61111],
              8592: [-.13313, .36687, 0, 0, 1],
              8593: [.19444, .69444, 0, 0, .5],
              8594: [-.13313, .36687, 0, 0, 1],
              8595: [.19444, .69444, 0, 0, .5],
              8596: [-.13313, .36687, 0, 0, 1],
              8597: [.25, .75, 0, 0, .5],
              8598: [.19444, .69444, 0, 0, 1],
              8599: [.19444, .69444, 0, 0, 1],
              8600: [.19444, .69444, 0, 0, 1],
              8601: [.19444, .69444, 0, 0, 1],
              8614: [.011, .511, 0, 0, 1],
              8617: [.011, .511, 0, 0, 1.126],
              8618: [.011, .511, 0, 0, 1.126],
              8636: [-.13313, .36687, 0, 0, 1],
              8637: [-.13313, .36687, 0, 0, 1],
              8640: [-.13313, .36687, 0, 0, 1],
              8641: [-.13313, .36687, 0, 0, 1],
              8652: [.011, .671, 0, 0, 1],
              8656: [-.13313, .36687, 0, 0, 1],
              8657: [.19444, .69444, 0, 0, .61111],
              8658: [-.13313, .36687, 0, 0, 1],
              8659: [.19444, .69444, 0, 0, .61111],
              8660: [-.13313, .36687, 0, 0, 1],
              8661: [.25, .75, 0, 0, .61111],
              8704: [0, .69444, 0, 0, .55556],
              8706: [0, .69444, .05556, .08334, .5309],
              8707: [0, .69444, 0, 0, .55556],
              8709: [.05556, .75, 0, 0, .5],
              8711: [0, .68333, 0, 0, .83334],
              8712: [.0391, .5391, 0, 0, .66667],
              8715: [.0391, .5391, 0, 0, .66667],
              8722: [.08333, .58333, 0, 0, .77778],
              8723: [.08333, .58333, 0, 0, .77778],
              8725: [.25, .75, 0, 0, .5],
              8726: [.25, .75, 0, 0, .5],
              8727: [-.03472, .46528, 0, 0, .5],
              8728: [-.05555, .44445, 0, 0, .5],
              8729: [-.05555, .44445, 0, 0, .5],
              8730: [.2, .8, 0, 0, .83334],
              8733: [0, .43056, 0, 0, .77778],
              8734: [0, .43056, 0, 0, 1],
              8736: [0, .69224, 0, 0, .72222],
              8739: [.25, .75, 0, 0, .27778],
              8741: [.25, .75, 0, 0, .5],
              8743: [0, .55556, 0, 0, .66667],
              8744: [0, .55556, 0, 0, .66667],
              8745: [0, .55556, 0, 0, .66667],
              8746: [0, .55556, 0, 0, .66667],
              8747: [.19444, .69444, .11111, 0, .41667],
              8764: [-.13313, .36687, 0, 0, .77778],
              8768: [.19444, .69444, 0, 0, .27778],
              8771: [-.03625, .46375, 0, 0, .77778],
              8773: [-.022, .589, 0, 0, 1],
              8776: [-.01688, .48312, 0, 0, .77778],
              8781: [-.03625, .46375, 0, 0, .77778],
              8784: [-.133, .67, 0, 0, .778],
              8801: [-.03625, .46375, 0, 0, .77778],
              8804: [.13597, .63597, 0, 0, .77778],
              8805: [.13597, .63597, 0, 0, .77778],
              8810: [.0391, .5391, 0, 0, 1],
              8811: [.0391, .5391, 0, 0, 1],
              8826: [.0391, .5391, 0, 0, .77778],
              8827: [.0391, .5391, 0, 0, .77778],
              8834: [.0391, .5391, 0, 0, .77778],
              8835: [.0391, .5391, 0, 0, .77778],
              8838: [.13597, .63597, 0, 0, .77778],
              8839: [.13597, .63597, 0, 0, .77778],
              8846: [0, .55556, 0, 0, .66667],
              8849: [.13597, .63597, 0, 0, .77778],
              8850: [.13597, .63597, 0, 0, .77778],
              8851: [0, .55556, 0, 0, .66667],
              8852: [0, .55556, 0, 0, .66667],
              8853: [.08333, .58333, 0, 0, .77778],
              8854: [.08333, .58333, 0, 0, .77778],
              8855: [.08333, .58333, 0, 0, .77778],
              8856: [.08333, .58333, 0, 0, .77778],
              8857: [.08333, .58333, 0, 0, .77778],
              8866: [0, .69444, 0, 0, .61111],
              8867: [0, .69444, 0, 0, .61111],
              8868: [0, .69444, 0, 0, .77778],
              8869: [0, .69444, 0, 0, .77778],
              8872: [.249, .75, 0, 0, .867],
              8900: [-.05555, .44445, 0, 0, .5],
              8901: [-.05555, .44445, 0, 0, .27778],
              8902: [-.03472, .46528, 0, 0, .5],
              8904: [.005, .505, 0, 0, .9],
              8942: [.03, .9, 0, 0, .278],
              8943: [-.19, .31, 0, 0, 1.172],
              8945: [-.1, .82, 0, 0, 1.282],
              8968: [.25, .75, 0, 0, .44445],
              8969: [.25, .75, 0, 0, .44445],
              8970: [.25, .75, 0, 0, .44445],
              8971: [.25, .75, 0, 0, .44445],
              8994: [-.14236, .35764, 0, 0, 1],
              8995: [-.14236, .35764, 0, 0, 1],
              9136: [.244, .744, 0, 0, .412],
              9137: [.244, .744, 0, 0, .412],
              9651: [.19444, .69444, 0, 0, .88889],
              9657: [-.03472, .46528, 0, 0, .5],
              9661: [.19444, .69444, 0, 0, .88889],
              9667: [-.03472, .46528, 0, 0, .5],
              9711: [.19444, .69444, 0, 0, 1],
              9824: [.12963, .69444, 0, 0, .77778],
              9825: [.12963, .69444, 0, 0, .77778],
              9826: [.12963, .69444, 0, 0, .77778],
              9827: [.12963, .69444, 0, 0, .77778],
              9837: [0, .75, 0, 0, .38889],
              9838: [.19444, .69444, 0, 0, .38889],
              9839: [.19444, .69444, 0, 0, .38889],
              10216: [.25, .75, 0, 0, .38889],
              10217: [.25, .75, 0, 0, .38889],
              10222: [.244, .744, 0, 0, .412],
              10223: [.244, .744, 0, 0, .412],
              10229: [.011, .511, 0, 0, 1.609],
              10230: [.011, .511, 0, 0, 1.638],
              10231: [.011, .511, 0, 0, 1.859],
              10232: [.024, .525, 0, 0, 1.609],
              10233: [.024, .525, 0, 0, 1.638],
              10234: [.024, .525, 0, 0, 1.858],
              10236: [.011, .511, 0, 0, 1.638],
              10815: [0, .68333, 0, 0, .75],
              10927: [.13597, .63597, 0, 0, .77778],
              10928: [.13597, .63597, 0, 0, .77778],
              57376: [.19444, .69444, 0, 0, 0]
            },
            "Math-BoldItalic": {
              32: [0, 0, 0, 0, .25],
              48: [0, .44444, 0, 0, .575],
              49: [0, .44444, 0, 0, .575],
              50: [0, .44444, 0, 0, .575],
              51: [.19444, .44444, 0, 0, .575],
              52: [.19444, .44444, 0, 0, .575],
              53: [.19444, .44444, 0, 0, .575],
              54: [0, .64444, 0, 0, .575],
              55: [.19444, .44444, 0, 0, .575],
              56: [0, .64444, 0, 0, .575],
              57: [.19444, .44444, 0, 0, .575],
              65: [0, .68611, 0, 0, .86944],
              66: [0, .68611, .04835, 0, .8664],
              67: [0, .68611, .06979, 0, .81694],
              68: [0, .68611, .03194, 0, .93812],
              69: [0, .68611, .05451, 0, .81007],
              70: [0, .68611, .15972, 0, .68889],
              71: [0, .68611, 0, 0, .88673],
              72: [0, .68611, .08229, 0, .98229],
              73: [0, .68611, .07778, 0, .51111],
              74: [0, .68611, .10069, 0, .63125],
              75: [0, .68611, .06979, 0, .97118],
              76: [0, .68611, 0, 0, .75555],
              77: [0, .68611, .11424, 0, 1.14201],
              78: [0, .68611, .11424, 0, .95034],
              79: [0, .68611, .03194, 0, .83666],
              80: [0, .68611, .15972, 0, .72309],
              81: [.19444, .68611, 0, 0, .86861],
              82: [0, .68611, .00421, 0, .87235],
              83: [0, .68611, .05382, 0, .69271],
              84: [0, .68611, .15972, 0, .63663],
              85: [0, .68611, .11424, 0, .80027],
              86: [0, .68611, .25555, 0, .67778],
              87: [0, .68611, .15972, 0, 1.09305],
              88: [0, .68611, .07778, 0, .94722],
              89: [0, .68611, .25555, 0, .67458],
              90: [0, .68611, .06979, 0, .77257],
              97: [0, .44444, 0, 0, .63287],
              98: [0, .69444, 0, 0, .52083],
              99: [0, .44444, 0, 0, .51342],
              100: [0, .69444, 0, 0, .60972],
              101: [0, .44444, 0, 0, .55361],
              102: [.19444, .69444, .11042, 0, .56806],
              103: [.19444, .44444, .03704, 0, .5449],
              104: [0, .69444, 0, 0, .66759],
              105: [0, .69326, 0, 0, .4048],
              106: [.19444, .69326, .0622, 0, .47083],
              107: [0, .69444, .01852, 0, .6037],
              108: [0, .69444, .0088, 0, .34815],
              109: [0, .44444, 0, 0, 1.0324],
              110: [0, .44444, 0, 0, .71296],
              111: [0, .44444, 0, 0, .58472],
              112: [.19444, .44444, 0, 0, .60092],
              113: [.19444, .44444, .03704, 0, .54213],
              114: [0, .44444, .03194, 0, .5287],
              115: [0, .44444, 0, 0, .53125],
              116: [0, .63492, 0, 0, .41528],
              117: [0, .44444, 0, 0, .68102],
              118: [0, .44444, .03704, 0, .56666],
              119: [0, .44444, .02778, 0, .83148],
              120: [0, .44444, 0, 0, .65903],
              121: [.19444, .44444, .03704, 0, .59028],
              122: [0, .44444, .04213, 0, .55509],
              160: [0, 0, 0, 0, .25],
              915: [0, .68611, .15972, 0, .65694],
              916: [0, .68611, 0, 0, .95833],
              920: [0, .68611, .03194, 0, .86722],
              923: [0, .68611, 0, 0, .80555],
              926: [0, .68611, .07458, 0, .84125],
              928: [0, .68611, .08229, 0, .98229],
              931: [0, .68611, .05451, 0, .88507],
              933: [0, .68611, .15972, 0, .67083],
              934: [0, .68611, 0, 0, .76666],
              936: [0, .68611, .11653, 0, .71402],
              937: [0, .68611, .04835, 0, .8789],
              945: [0, .44444, 0, 0, .76064],
              946: [.19444, .69444, .03403, 0, .65972],
              947: [.19444, .44444, .06389, 0, .59003],
              948: [0, .69444, .03819, 0, .52222],
              949: [0, .44444, 0, 0, .52882],
              950: [.19444, .69444, .06215, 0, .50833],
              951: [.19444, .44444, .03704, 0, .6],
              952: [0, .69444, .03194, 0, .5618],
              953: [0, .44444, 0, 0, .41204],
              954: [0, .44444, 0, 0, .66759],
              955: [0, .69444, 0, 0, .67083],
              956: [.19444, .44444, 0, 0, .70787],
              957: [0, .44444, .06898, 0, .57685],
              958: [.19444, .69444, .03021, 0, .50833],
              959: [0, .44444, 0, 0, .58472],
              960: [0, .44444, .03704, 0, .68241],
              961: [.19444, .44444, 0, 0, .6118],
              962: [.09722, .44444, .07917, 0, .42361],
              963: [0, .44444, .03704, 0, .68588],
              964: [0, .44444, .13472, 0, .52083],
              965: [0, .44444, .03704, 0, .63055],
              966: [.19444, .44444, 0, 0, .74722],
              967: [.19444, .44444, 0, 0, .71805],
              968: [.19444, .69444, .03704, 0, .75833],
              969: [0, .44444, .03704, 0, .71782],
              977: [0, .69444, 0, 0, .69155],
              981: [.19444, .69444, 0, 0, .7125],
              982: [0, .44444, .03194, 0, .975],
              1009: [.19444, .44444, 0, 0, .6118],
              1013: [0, .44444, 0, 0, .48333],
              57649: [0, .44444, 0, 0, .39352],
              57911: [.19444, .44444, 0, 0, .43889]
            },
            "Math-Italic": {
              32: [0, 0, 0, 0, .25],
              48: [0, .43056, 0, 0, .5],
              49: [0, .43056, 0, 0, .5],
              50: [0, .43056, 0, 0, .5],
              51: [.19444, .43056, 0, 0, .5],
              52: [.19444, .43056, 0, 0, .5],
              53: [.19444, .43056, 0, 0, .5],
              54: [0, .64444, 0, 0, .5],
              55: [.19444, .43056, 0, 0, .5],
              56: [0, .64444, 0, 0, .5],
              57: [.19444, .43056, 0, 0, .5],
              65: [0, .68333, 0, .13889, .75],
              66: [0, .68333, .05017, .08334, .75851],
              67: [0, .68333, .07153, .08334, .71472],
              68: [0, .68333, .02778, .05556, .82792],
              69: [0, .68333, .05764, .08334, .7382],
              70: [0, .68333, .13889, .08334, .64306],
              71: [0, .68333, 0, .08334, .78625],
              72: [0, .68333, .08125, .05556, .83125],
              73: [0, .68333, .07847, .11111, .43958],
              74: [0, .68333, .09618, .16667, .55451],
              75: [0, .68333, .07153, .05556, .84931],
              76: [0, .68333, 0, .02778, .68056],
              77: [0, .68333, .10903, .08334, .97014],
              78: [0, .68333, .10903, .08334, .80347],
              79: [0, .68333, .02778, .08334, .76278],
              80: [0, .68333, .13889, .08334, .64201],
              81: [.19444, .68333, 0, .08334, .79056],
              82: [0, .68333, .00773, .08334, .75929],
              83: [0, .68333, .05764, .08334, .6132],
              84: [0, .68333, .13889, .08334, .58438],
              85: [0, .68333, .10903, .02778, .68278],
              86: [0, .68333, .22222, 0, .58333],
              87: [0, .68333, .13889, 0, .94445],
              88: [0, .68333, .07847, .08334, .82847],
              89: [0, .68333, .22222, 0, .58056],
              90: [0, .68333, .07153, .08334, .68264],
              97: [0, .43056, 0, 0, .52859],
              98: [0, .69444, 0, 0, .42917],
              99: [0, .43056, 0, .05556, .43276],
              100: [0, .69444, 0, .16667, .52049],
              101: [0, .43056, 0, .05556, .46563],
              102: [.19444, .69444, .10764, .16667, .48959],
              103: [.19444, .43056, .03588, .02778, .47697],
              104: [0, .69444, 0, 0, .57616],
              105: [0, .65952, 0, 0, .34451],
              106: [.19444, .65952, .05724, 0, .41181],
              107: [0, .69444, .03148, 0, .5206],
              108: [0, .69444, .01968, .08334, .29838],
              109: [0, .43056, 0, 0, .87801],
              110: [0, .43056, 0, 0, .60023],
              111: [0, .43056, 0, .05556, .48472],
              112: [.19444, .43056, 0, .08334, .50313],
              113: [.19444, .43056, .03588, .08334, .44641],
              114: [0, .43056, .02778, .05556, .45116],
              115: [0, .43056, 0, .05556, .46875],
              116: [0, .61508, 0, .08334, .36111],
              117: [0, .43056, 0, .02778, .57246],
              118: [0, .43056, .03588, .02778, .48472],
              119: [0, .43056, .02691, .08334, .71592],
              120: [0, .43056, 0, .02778, .57153],
              121: [.19444, .43056, .03588, .05556, .49028],
              122: [0, .43056, .04398, .05556, .46505],
              160: [0, 0, 0, 0, .25],
              915: [0, .68333, .13889, .08334, .61528],
              916: [0, .68333, 0, .16667, .83334],
              920: [0, .68333, .02778, .08334, .76278],
              923: [0, .68333, 0, .16667, .69445],
              926: [0, .68333, .07569, .08334, .74236],
              928: [0, .68333, .08125, .05556, .83125],
              931: [0, .68333, .05764, .08334, .77986],
              933: [0, .68333, .13889, .05556, .58333],
              934: [0, .68333, 0, .08334, .66667],
              936: [0, .68333, .11, .05556, .61222],
              937: [0, .68333, .05017, .08334, .7724],
              945: [0, .43056, .0037, .02778, .6397],
              946: [.19444, .69444, .05278, .08334, .56563],
              947: [.19444, .43056, .05556, 0, .51773],
              948: [0, .69444, .03785, .05556, .44444],
              949: [0, .43056, 0, .08334, .46632],
              950: [.19444, .69444, .07378, .08334, .4375],
              951: [.19444, .43056, .03588, .05556, .49653],
              952: [0, .69444, .02778, .08334, .46944],
              953: [0, .43056, 0, .05556, .35394],
              954: [0, .43056, 0, 0, .57616],
              955: [0, .69444, 0, 0, .58334],
              956: [.19444, .43056, 0, .02778, .60255],
              957: [0, .43056, .06366, .02778, .49398],
              958: [.19444, .69444, .04601, .11111, .4375],
              959: [0, .43056, 0, .05556, .48472],
              960: [0, .43056, .03588, 0, .57003],
              961: [.19444, .43056, 0, .08334, .51702],
              962: [.09722, .43056, .07986, .08334, .36285],
              963: [0, .43056, .03588, 0, .57141],
              964: [0, .43056, .1132, .02778, .43715],
              965: [0, .43056, .03588, .02778, .54028],
              966: [.19444, .43056, 0, .08334, .65417],
              967: [.19444, .43056, 0, .05556, .62569],
              968: [.19444, .69444, .03588, .11111, .65139],
              969: [0, .43056, .03588, 0, .62245],
              977: [0, .69444, 0, .08334, .59144],
              981: [.19444, .69444, 0, .08334, .59583],
              982: [0, .43056, .02778, 0, .82813],
              1009: [.19444, .43056, 0, .08334, .51702],
              1013: [0, .43056, 0, .05556, .4059],
              57649: [0, .43056, 0, .02778, .32246],
              57911: [.19444, .43056, 0, .08334, .38403]
            },
            "SansSerif-Bold": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, 0, 0, .36667],
              34: [0, .69444, 0, 0, .55834],
              35: [.19444, .69444, 0, 0, .91667],
              36: [.05556, .75, 0, 0, .55],
              37: [.05556, .75, 0, 0, 1.02912],
              38: [0, .69444, 0, 0, .83056],
              39: [0, .69444, 0, 0, .30556],
              40: [.25, .75, 0, 0, .42778],
              41: [.25, .75, 0, 0, .42778],
              42: [0, .75, 0, 0, .55],
              43: [.11667, .61667, 0, 0, .85556],
              44: [.10556, .13056, 0, 0, .30556],
              45: [0, .45833, 0, 0, .36667],
              46: [0, .13056, 0, 0, .30556],
              47: [.25, .75, 0, 0, .55],
              48: [0, .69444, 0, 0, .55],
              49: [0, .69444, 0, 0, .55],
              50: [0, .69444, 0, 0, .55],
              51: [0, .69444, 0, 0, .55],
              52: [0, .69444, 0, 0, .55],
              53: [0, .69444, 0, 0, .55],
              54: [0, .69444, 0, 0, .55],
              55: [0, .69444, 0, 0, .55],
              56: [0, .69444, 0, 0, .55],
              57: [0, .69444, 0, 0, .55],
              58: [0, .45833, 0, 0, .30556],
              59: [.10556, .45833, 0, 0, .30556],
              61: [-.09375, .40625, 0, 0, .85556],
              63: [0, .69444, 0, 0, .51945],
              64: [0, .69444, 0, 0, .73334],
              65: [0, .69444, 0, 0, .73334],
              66: [0, .69444, 0, 0, .73334],
              67: [0, .69444, 0, 0, .70278],
              68: [0, .69444, 0, 0, .79445],
              69: [0, .69444, 0, 0, .64167],
              70: [0, .69444, 0, 0, .61111],
              71: [0, .69444, 0, 0, .73334],
              72: [0, .69444, 0, 0, .79445],
              73: [0, .69444, 0, 0, .33056],
              74: [0, .69444, 0, 0, .51945],
              75: [0, .69444, 0, 0, .76389],
              76: [0, .69444, 0, 0, .58056],
              77: [0, .69444, 0, 0, .97778],
              78: [0, .69444, 0, 0, .79445],
              79: [0, .69444, 0, 0, .79445],
              80: [0, .69444, 0, 0, .70278],
              81: [.10556, .69444, 0, 0, .79445],
              82: [0, .69444, 0, 0, .70278],
              83: [0, .69444, 0, 0, .61111],
              84: [0, .69444, 0, 0, .73334],
              85: [0, .69444, 0, 0, .76389],
              86: [0, .69444, .01528, 0, .73334],
              87: [0, .69444, .01528, 0, 1.03889],
              88: [0, .69444, 0, 0, .73334],
              89: [0, .69444, .0275, 0, .73334],
              90: [0, .69444, 0, 0, .67223],
              91: [.25, .75, 0, 0, .34306],
              93: [.25, .75, 0, 0, .34306],
              94: [0, .69444, 0, 0, .55],
              95: [.35, .10833, .03056, 0, .55],
              97: [0, .45833, 0, 0, .525],
              98: [0, .69444, 0, 0, .56111],
              99: [0, .45833, 0, 0, .48889],
              100: [0, .69444, 0, 0, .56111],
              101: [0, .45833, 0, 0, .51111],
              102: [0, .69444, .07639, 0, .33611],
              103: [.19444, .45833, .01528, 0, .55],
              104: [0, .69444, 0, 0, .56111],
              105: [0, .69444, 0, 0, .25556],
              106: [.19444, .69444, 0, 0, .28611],
              107: [0, .69444, 0, 0, .53056],
              108: [0, .69444, 0, 0, .25556],
              109: [0, .45833, 0, 0, .86667],
              110: [0, .45833, 0, 0, .56111],
              111: [0, .45833, 0, 0, .55],
              112: [.19444, .45833, 0, 0, .56111],
              113: [.19444, .45833, 0, 0, .56111],
              114: [0, .45833, .01528, 0, .37222],
              115: [0, .45833, 0, 0, .42167],
              116: [0, .58929, 0, 0, .40417],
              117: [0, .45833, 0, 0, .56111],
              118: [0, .45833, .01528, 0, .5],
              119: [0, .45833, .01528, 0, .74445],
              120: [0, .45833, 0, 0, .5],
              121: [.19444, .45833, .01528, 0, .5],
              122: [0, .45833, 0, 0, .47639],
              126: [.35, .34444, 0, 0, .55],
              160: [0, 0, 0, 0, .25],
              168: [0, .69444, 0, 0, .55],
              176: [0, .69444, 0, 0, .73334],
              180: [0, .69444, 0, 0, .55],
              184: [.17014, 0, 0, 0, .48889],
              305: [0, .45833, 0, 0, .25556],
              567: [.19444, .45833, 0, 0, .28611],
              710: [0, .69444, 0, 0, .55],
              711: [0, .63542, 0, 0, .55],
              713: [0, .63778, 0, 0, .55],
              728: [0, .69444, 0, 0, .55],
              729: [0, .69444, 0, 0, .30556],
              730: [0, .69444, 0, 0, .73334],
              732: [0, .69444, 0, 0, .55],
              733: [0, .69444, 0, 0, .55],
              915: [0, .69444, 0, 0, .58056],
              916: [0, .69444, 0, 0, .91667],
              920: [0, .69444, 0, 0, .85556],
              923: [0, .69444, 0, 0, .67223],
              926: [0, .69444, 0, 0, .73334],
              928: [0, .69444, 0, 0, .79445],
              931: [0, .69444, 0, 0, .79445],
              933: [0, .69444, 0, 0, .85556],
              934: [0, .69444, 0, 0, .79445],
              936: [0, .69444, 0, 0, .85556],
              937: [0, .69444, 0, 0, .79445],
              8211: [0, .45833, .03056, 0, .55],
              8212: [0, .45833, .03056, 0, 1.10001],
              8216: [0, .69444, 0, 0, .30556],
              8217: [0, .69444, 0, 0, .30556],
              8220: [0, .69444, 0, 0, .55834],
              8221: [0, .69444, 0, 0, .55834]
            },
            "SansSerif-Italic": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, .05733, 0, .31945],
              34: [0, .69444, .00316, 0, .5],
              35: [.19444, .69444, .05087, 0, .83334],
              36: [.05556, .75, .11156, 0, .5],
              37: [.05556, .75, .03126, 0, .83334],
              38: [0, .69444, .03058, 0, .75834],
              39: [0, .69444, .07816, 0, .27778],
              40: [.25, .75, .13164, 0, .38889],
              41: [.25, .75, .02536, 0, .38889],
              42: [0, .75, .11775, 0, .5],
              43: [.08333, .58333, .02536, 0, .77778],
              44: [.125, .08333, 0, 0, .27778],
              45: [0, .44444, .01946, 0, .33333],
              46: [0, .08333, 0, 0, .27778],
              47: [.25, .75, .13164, 0, .5],
              48: [0, .65556, .11156, 0, .5],
              49: [0, .65556, .11156, 0, .5],
              50: [0, .65556, .11156, 0, .5],
              51: [0, .65556, .11156, 0, .5],
              52: [0, .65556, .11156, 0, .5],
              53: [0, .65556, .11156, 0, .5],
              54: [0, .65556, .11156, 0, .5],
              55: [0, .65556, .11156, 0, .5],
              56: [0, .65556, .11156, 0, .5],
              57: [0, .65556, .11156, 0, .5],
              58: [0, .44444, .02502, 0, .27778],
              59: [.125, .44444, .02502, 0, .27778],
              61: [-.13, .37, .05087, 0, .77778],
              63: [0, .69444, .11809, 0, .47222],
              64: [0, .69444, .07555, 0, .66667],
              65: [0, .69444, 0, 0, .66667],
              66: [0, .69444, .08293, 0, .66667],
              67: [0, .69444, .11983, 0, .63889],
              68: [0, .69444, .07555, 0, .72223],
              69: [0, .69444, .11983, 0, .59722],
              70: [0, .69444, .13372, 0, .56945],
              71: [0, .69444, .11983, 0, .66667],
              72: [0, .69444, .08094, 0, .70834],
              73: [0, .69444, .13372, 0, .27778],
              74: [0, .69444, .08094, 0, .47222],
              75: [0, .69444, .11983, 0, .69445],
              76: [0, .69444, 0, 0, .54167],
              77: [0, .69444, .08094, 0, .875],
              78: [0, .69444, .08094, 0, .70834],
              79: [0, .69444, .07555, 0, .73611],
              80: [0, .69444, .08293, 0, .63889],
              81: [.125, .69444, .07555, 0, .73611],
              82: [0, .69444, .08293, 0, .64584],
              83: [0, .69444, .09205, 0, .55556],
              84: [0, .69444, .13372, 0, .68056],
              85: [0, .69444, .08094, 0, .6875],
              86: [0, .69444, .1615, 0, .66667],
              87: [0, .69444, .1615, 0, .94445],
              88: [0, .69444, .13372, 0, .66667],
              89: [0, .69444, .17261, 0, .66667],
              90: [0, .69444, .11983, 0, .61111],
              91: [.25, .75, .15942, 0, .28889],
              93: [.25, .75, .08719, 0, .28889],
              94: [0, .69444, .0799, 0, .5],
              95: [.35, .09444, .08616, 0, .5],
              97: [0, .44444, .00981, 0, .48056],
              98: [0, .69444, .03057, 0, .51667],
              99: [0, .44444, .08336, 0, .44445],
              100: [0, .69444, .09483, 0, .51667],
              101: [0, .44444, .06778, 0, .44445],
              102: [0, .69444, .21705, 0, .30556],
              103: [.19444, .44444, .10836, 0, .5],
              104: [0, .69444, .01778, 0, .51667],
              105: [0, .67937, .09718, 0, .23889],
              106: [.19444, .67937, .09162, 0, .26667],
              107: [0, .69444, .08336, 0, .48889],
              108: [0, .69444, .09483, 0, .23889],
              109: [0, .44444, .01778, 0, .79445],
              110: [0, .44444, .01778, 0, .51667],
              111: [0, .44444, .06613, 0, .5],
              112: [.19444, .44444, .0389, 0, .51667],
              113: [.19444, .44444, .04169, 0, .51667],
              114: [0, .44444, .10836, 0, .34167],
              115: [0, .44444, .0778, 0, .38333],
              116: [0, .57143, .07225, 0, .36111],
              117: [0, .44444, .04169, 0, .51667],
              118: [0, .44444, .10836, 0, .46111],
              119: [0, .44444, .10836, 0, .68334],
              120: [0, .44444, .09169, 0, .46111],
              121: [.19444, .44444, .10836, 0, .46111],
              122: [0, .44444, .08752, 0, .43472],
              126: [.35, .32659, .08826, 0, .5],
              160: [0, 0, 0, 0, .25],
              168: [0, .67937, .06385, 0, .5],
              176: [0, .69444, 0, 0, .73752],
              184: [.17014, 0, 0, 0, .44445],
              305: [0, .44444, .04169, 0, .23889],
              567: [.19444, .44444, .04169, 0, .26667],
              710: [0, .69444, .0799, 0, .5],
              711: [0, .63194, .08432, 0, .5],
              713: [0, .60889, .08776, 0, .5],
              714: [0, .69444, .09205, 0, .5],
              715: [0, .69444, 0, 0, .5],
              728: [0, .69444, .09483, 0, .5],
              729: [0, .67937, .07774, 0, .27778],
              730: [0, .69444, 0, 0, .73752],
              732: [0, .67659, .08826, 0, .5],
              733: [0, .69444, .09205, 0, .5],
              915: [0, .69444, .13372, 0, .54167],
              916: [0, .69444, 0, 0, .83334],
              920: [0, .69444, .07555, 0, .77778],
              923: [0, .69444, 0, 0, .61111],
              926: [0, .69444, .12816, 0, .66667],
              928: [0, .69444, .08094, 0, .70834],
              931: [0, .69444, .11983, 0, .72222],
              933: [0, .69444, .09031, 0, .77778],
              934: [0, .69444, .04603, 0, .72222],
              936: [0, .69444, .09031, 0, .77778],
              937: [0, .69444, .08293, 0, .72222],
              8211: [0, .44444, .08616, 0, .5],
              8212: [0, .44444, .08616, 0, 1],
              8216: [0, .69444, .07816, 0, .27778],
              8217: [0, .69444, .07816, 0, .27778],
              8220: [0, .69444, .14205, 0, .5],
              8221: [0, .69444, .00316, 0, .5]
            },
            "SansSerif-Regular": {
              32: [0, 0, 0, 0, .25],
              33: [0, .69444, 0, 0, .31945],
              34: [0, .69444, 0, 0, .5],
              35: [.19444, .69444, 0, 0, .83334],
              36: [.05556, .75, 0, 0, .5],
              37: [.05556, .75, 0, 0, .83334],
              38: [0, .69444, 0, 0, .75834],
              39: [0, .69444, 0, 0, .27778],
              40: [.25, .75, 0, 0, .38889],
              41: [.25, .75, 0, 0, .38889],
              42: [0, .75, 0, 0, .5],
              43: [.08333, .58333, 0, 0, .77778],
              44: [.125, .08333, 0, 0, .27778],
              45: [0, .44444, 0, 0, .33333],
              46: [0, .08333, 0, 0, .27778],
              47: [.25, .75, 0, 0, .5],
              48: [0, .65556, 0, 0, .5],
              49: [0, .65556, 0, 0, .5],
              50: [0, .65556, 0, 0, .5],
              51: [0, .65556, 0, 0, .5],
              52: [0, .65556, 0, 0, .5],
              53: [0, .65556, 0, 0, .5],
              54: [0, .65556, 0, 0, .5],
              55: [0, .65556, 0, 0, .5],
              56: [0, .65556, 0, 0, .5],
              57: [0, .65556, 0, 0, .5],
              58: [0, .44444, 0, 0, .27778],
              59: [.125, .44444, 0, 0, .27778],
              61: [-.13, .37, 0, 0, .77778],
              63: [0, .69444, 0, 0, .47222],
              64: [0, .69444, 0, 0, .66667],
              65: [0, .69444, 0, 0, .66667],
              66: [0, .69444, 0, 0, .66667],
              67: [0, .69444, 0, 0, .63889],
              68: [0, .69444, 0, 0, .72223],
              69: [0, .69444, 0, 0, .59722],
              70: [0, .69444, 0, 0, .56945],
              71: [0, .69444, 0, 0, .66667],
              72: [0, .69444, 0, 0, .70834],
              73: [0, .69444, 0, 0, .27778],
              74: [0, .69444, 0, 0, .47222],
              75: [0, .69444, 0, 0, .69445],
              76: [0, .69444, 0, 0, .54167],
              77: [0, .69444, 0, 0, .875],
              78: [0, .69444, 0, 0, .70834],
              79: [0, .69444, 0, 0, .73611],
              80: [0, .69444, 0, 0, .63889],
              81: [.125, .69444, 0, 0, .73611],
              82: [0, .69444, 0, 0, .64584],
              83: [0, .69444, 0, 0, .55556],
              84: [0, .69444, 0, 0, .68056],
              85: [0, .69444, 0, 0, .6875],
              86: [0, .69444, .01389, 0, .66667],
              87: [0, .69444, .01389, 0, .94445],
              88: [0, .69444, 0, 0, .66667],
              89: [0, .69444, .025, 0, .66667],
              90: [0, .69444, 0, 0, .61111],
              91: [.25, .75, 0, 0, .28889],
              93: [.25, .75, 0, 0, .28889],
              94: [0, .69444, 0, 0, .5],
              95: [.35, .09444, .02778, 0, .5],
              97: [0, .44444, 0, 0, .48056],
              98: [0, .69444, 0, 0, .51667],
              99: [0, .44444, 0, 0, .44445],
              100: [0, .69444, 0, 0, .51667],
              101: [0, .44444, 0, 0, .44445],
              102: [0, .69444, .06944, 0, .30556],
              103: [.19444, .44444, .01389, 0, .5],
              104: [0, .69444, 0, 0, .51667],
              105: [0, .67937, 0, 0, .23889],
              106: [.19444, .67937, 0, 0, .26667],
              107: [0, .69444, 0, 0, .48889],
              108: [0, .69444, 0, 0, .23889],
              109: [0, .44444, 0, 0, .79445],
              110: [0, .44444, 0, 0, .51667],
              111: [0, .44444, 0, 0, .5],
              112: [.19444, .44444, 0, 0, .51667],
              113: [.19444, .44444, 0, 0, .51667],
              114: [0, .44444, .01389, 0, .34167],
              115: [0, .44444, 0, 0, .38333],
              116: [0, .57143, 0, 0, .36111],
              117: [0, .44444, 0, 0, .51667],
              118: [0, .44444, .01389, 0, .46111],
              119: [0, .44444, .01389, 0, .68334],
              120: [0, .44444, 0, 0, .46111],
              121: [.19444, .44444, .01389, 0, .46111],
              122: [0, .44444, 0, 0, .43472],
              126: [.35, .32659, 0, 0, .5],
              160: [0, 0, 0, 0, .25],
              168: [0, .67937, 0, 0, .5],
              176: [0, .69444, 0, 0, .66667],
              184: [.17014, 0, 0, 0, .44445],
              305: [0, .44444, 0, 0, .23889],
              567: [.19444, .44444, 0, 0, .26667],
              710: [0, .69444, 0, 0, .5],
              711: [0, .63194, 0, 0, .5],
              713: [0, .60889, 0, 0, .5],
              714: [0, .69444, 0, 0, .5],
              715: [0, .69444, 0, 0, .5],
              728: [0, .69444, 0, 0, .5],
              729: [0, .67937, 0, 0, .27778],
              730: [0, .69444, 0, 0, .66667],
              732: [0, .67659, 0, 0, .5],
              733: [0, .69444, 0, 0, .5],
              915: [0, .69444, 0, 0, .54167],
              916: [0, .69444, 0, 0, .83334],
              920: [0, .69444, 0, 0, .77778],
              923: [0, .69444, 0, 0, .61111],
              926: [0, .69444, 0, 0, .66667],
              928: [0, .69444, 0, 0, .70834],
              931: [0, .69444, 0, 0, .72222],
              933: [0, .69444, 0, 0, .77778],
              934: [0, .69444, 0, 0, .72222],
              936: [0, .69444, 0, 0, .77778],
              937: [0, .69444, 0, 0, .72222],
              8211: [0, .44444, .02778, 0, .5],
              8212: [0, .44444, .02778, 0, 1],
              8216: [0, .69444, 0, 0, .27778],
              8217: [0, .69444, 0, 0, .27778],
              8220: [0, .69444, 0, 0, .5],
              8221: [0, .69444, 0, 0, .5]
            },
            "Script-Regular": {
              32: [0, 0, 0, 0, .25],
              65: [0, .7, .22925, 0, .80253],
              66: [0, .7, .04087, 0, .90757],
              67: [0, .7, .1689, 0, .66619],
              68: [0, .7, .09371, 0, .77443],
              69: [0, .7, .18583, 0, .56162],
              70: [0, .7, .13634, 0, .89544],
              71: [0, .7, .17322, 0, .60961],
              72: [0, .7, .29694, 0, .96919],
              73: [0, .7, .19189, 0, .80907],
              74: [.27778, .7, .19189, 0, 1.05159],
              75: [0, .7, .31259, 0, .91364],
              76: [0, .7, .19189, 0, .87373],
              77: [0, .7, .15981, 0, 1.08031],
              78: [0, .7, .3525, 0, .9015],
              79: [0, .7, .08078, 0, .73787],
              80: [0, .7, .08078, 0, 1.01262],
              81: [0, .7, .03305, 0, .88282],
              82: [0, .7, .06259, 0, .85],
              83: [0, .7, .19189, 0, .86767],
              84: [0, .7, .29087, 0, .74697],
              85: [0, .7, .25815, 0, .79996],
              86: [0, .7, .27523, 0, .62204],
              87: [0, .7, .27523, 0, .80532],
              88: [0, .7, .26006, 0, .94445],
              89: [0, .7, .2939, 0, .70961],
              90: [0, .7, .24037, 0, .8212],
              160: [0, 0, 0, 0, .25]
            },
            "Size1-Regular": {
              32: [0, 0, 0, 0, .25],
              40: [.35001, .85, 0, 0, .45834],
              41: [.35001, .85, 0, 0, .45834],
              47: [.35001, .85, 0, 0, .57778],
              91: [.35001, .85, 0, 0, .41667],
              92: [.35001, .85, 0, 0, .57778],
              93: [.35001, .85, 0, 0, .41667],
              123: [.35001, .85, 0, 0, .58334],
              125: [.35001, .85, 0, 0, .58334],
              160: [0, 0, 0, 0, .25],
              710: [0, .72222, 0, 0, .55556],
              732: [0, .72222, 0, 0, .55556],
              770: [0, .72222, 0, 0, .55556],
              771: [0, .72222, 0, 0, .55556],
              8214: [-99e-5, .601, 0, 0, .77778],
              8593: [1e-5, .6, 0, 0, .66667],
              8595: [1e-5, .6, 0, 0, .66667],
              8657: [1e-5, .6, 0, 0, .77778],
              8659: [1e-5, .6, 0, 0, .77778],
              8719: [.25001, .75, 0, 0, .94445],
              8720: [.25001, .75, 0, 0, .94445],
              8721: [.25001, .75, 0, 0, 1.05556],
              8730: [.35001, .85, 0, 0, 1],
              8739: [-.00599, .606, 0, 0, .33333],
              8741: [-.00599, .606, 0, 0, .55556],
              8747: [.30612, .805, .19445, 0, .47222],
              8748: [.306, .805, .19445, 0, .47222],
              8749: [.306, .805, .19445, 0, .47222],
              8750: [.30612, .805, .19445, 0, .47222],
              8896: [.25001, .75, 0, 0, .83334],
              8897: [.25001, .75, 0, 0, .83334],
              8898: [.25001, .75, 0, 0, .83334],
              8899: [.25001, .75, 0, 0, .83334],
              8968: [.35001, .85, 0, 0, .47222],
              8969: [.35001, .85, 0, 0, .47222],
              8970: [.35001, .85, 0, 0, .47222],
              8971: [.35001, .85, 0, 0, .47222],
              9168: [-99e-5, .601, 0, 0, .66667],
              10216: [.35001, .85, 0, 0, .47222],
              10217: [.35001, .85, 0, 0, .47222],
              10752: [.25001, .75, 0, 0, 1.11111],
              10753: [.25001, .75, 0, 0, 1.11111],
              10754: [.25001, .75, 0, 0, 1.11111],
              10756: [.25001, .75, 0, 0, .83334],
              10758: [.25001, .75, 0, 0, .83334]
            },
            "Size2-Regular": {
              32: [0, 0, 0, 0, .25],
              40: [.65002, 1.15, 0, 0, .59722],
              41: [.65002, 1.15, 0, 0, .59722],
              47: [.65002, 1.15, 0, 0, .81111],
              91: [.65002, 1.15, 0, 0, .47222],
              92: [.65002, 1.15, 0, 0, .81111],
              93: [.65002, 1.15, 0, 0, .47222],
              123: [.65002, 1.15, 0, 0, .66667],
              125: [.65002, 1.15, 0, 0, .66667],
              160: [0, 0, 0, 0, .25],
              710: [0, .75, 0, 0, 1],
              732: [0, .75, 0, 0, 1],
              770: [0, .75, 0, 0, 1],
              771: [0, .75, 0, 0, 1],
              8719: [.55001, 1.05, 0, 0, 1.27778],
              8720: [.55001, 1.05, 0, 0, 1.27778],
              8721: [.55001, 1.05, 0, 0, 1.44445],
              8730: [.65002, 1.15, 0, 0, 1],
              8747: [.86225, 1.36, .44445, 0, .55556],
              8748: [.862, 1.36, .44445, 0, .55556],
              8749: [.862, 1.36, .44445, 0, .55556],
              8750: [.86225, 1.36, .44445, 0, .55556],
              8896: [.55001, 1.05, 0, 0, 1.11111],
              8897: [.55001, 1.05, 0, 0, 1.11111],
              8898: [.55001, 1.05, 0, 0, 1.11111],
              8899: [.55001, 1.05, 0, 0, 1.11111],
              8968: [.65002, 1.15, 0, 0, .52778],
              8969: [.65002, 1.15, 0, 0, .52778],
              8970: [.65002, 1.15, 0, 0, .52778],
              8971: [.65002, 1.15, 0, 0, .52778],
              10216: [.65002, 1.15, 0, 0, .61111],
              10217: [.65002, 1.15, 0, 0, .61111],
              10752: [.55001, 1.05, 0, 0, 1.51112],
              10753: [.55001, 1.05, 0, 0, 1.51112],
              10754: [.55001, 1.05, 0, 0, 1.51112],
              10756: [.55001, 1.05, 0, 0, 1.11111],
              10758: [.55001, 1.05, 0, 0, 1.11111]
            },
            "Size3-Regular": {
              32: [0, 0, 0, 0, .25],
              40: [.95003, 1.45, 0, 0, .73611],
              41: [.95003, 1.45, 0, 0, .73611],
              47: [.95003, 1.45, 0, 0, 1.04445],
              91: [.95003, 1.45, 0, 0, .52778],
              92: [.95003, 1.45, 0, 0, 1.04445],
              93: [.95003, 1.45, 0, 0, .52778],
              123: [.95003, 1.45, 0, 0, .75],
              125: [.95003, 1.45, 0, 0, .75],
              160: [0, 0, 0, 0, .25],
              710: [0, .75, 0, 0, 1.44445],
              732: [0, .75, 0, 0, 1.44445],
              770: [0, .75, 0, 0, 1.44445],
              771: [0, .75, 0, 0, 1.44445],
              8730: [.95003, 1.45, 0, 0, 1],
              8968: [.95003, 1.45, 0, 0, .58334],
              8969: [.95003, 1.45, 0, 0, .58334],
              8970: [.95003, 1.45, 0, 0, .58334],
              8971: [.95003, 1.45, 0, 0, .58334],
              10216: [.95003, 1.45, 0, 0, .75],
              10217: [.95003, 1.45, 0, 0, .75]
            },
            "Size4-Regular": {
              32: [0, 0, 0, 0, .25],
              40: [1.25003, 1.75, 0, 0, .79167],
              41: [1.25003, 1.75, 0, 0, .79167],
              47: [1.25003, 1.75, 0, 0, 1.27778],
              91: [1.25003, 1.75, 0, 0, .58334],
              92: [1.25003, 1.75, 0, 0, 1.27778],
              93: [1.25003, 1.75, 0, 0, .58334],
              123: [1.25003, 1.75, 0, 0, .80556],
              125: [1.25003, 1.75, 0, 0, .80556],
              160: [0, 0, 0, 0, .25],
              710: [0, .825, 0, 0, 1.8889],
              732: [0, .825, 0, 0, 1.8889],
              770: [0, .825, 0, 0, 1.8889],
              771: [0, .825, 0, 0, 1.8889],
              8730: [1.25003, 1.75, 0, 0, 1],
              8968: [1.25003, 1.75, 0, 0, .63889],
              8969: [1.25003, 1.75, 0, 0, .63889],
              8970: [1.25003, 1.75, 0, 0, .63889],
              8971: [1.25003, 1.75, 0, 0, .63889],
              9115: [.64502, 1.155, 0, 0, .875],
              9116: [1e-5, .6, 0, 0, .875],
              9117: [.64502, 1.155, 0, 0, .875],
              9118: [.64502, 1.155, 0, 0, .875],
              9119: [1e-5, .6, 0, 0, .875],
              9120: [.64502, 1.155, 0, 0, .875],
              9121: [.64502, 1.155, 0, 0, .66667],
              9122: [-99e-5, .601, 0, 0, .66667],
              9123: [.64502, 1.155, 0, 0, .66667],
              9124: [.64502, 1.155, 0, 0, .66667],
              9125: [-99e-5, .601, 0, 0, .66667],
              9126: [.64502, 1.155, 0, 0, .66667],
              9127: [1e-5, .9, 0, 0, .88889],
              9128: [.65002, 1.15, 0, 0, .88889],
              9129: [.90001, 0, 0, 0, .88889],
              9130: [0, .3, 0, 0, .88889],
              9131: [1e-5, .9, 0, 0, .88889],
              9132: [.65002, 1.15, 0, 0, .88889],
              9133: [.90001, 0, 0, 0, .88889],
              9143: [.88502, .915, 0, 0, 1.05556],
              10216: [1.25003, 1.75, 0, 0, .80556],
              10217: [1.25003, 1.75, 0, 0, .80556],
              57344: [-.00499, .605, 0, 0, 1.05556],
              57345: [-.00499, .605, 0, 0, 1.05556],
              57680: [0, .12, 0, 0, .45],
              57681: [0, .12, 0, 0, .45],
              57682: [0, .12, 0, 0, .45],
              57683: [0, .12, 0, 0, .45]
            },
            "Typewriter-Regular": {
              32: [0, 0, 0, 0, .525],
              33: [0, .61111, 0, 0, .525],
              34: [0, .61111, 0, 0, .525],
              35: [0, .61111, 0, 0, .525],
              36: [.08333, .69444, 0, 0, .525],
              37: [.08333, .69444, 0, 0, .525],
              38: [0, .61111, 0, 0, .525],
              39: [0, .61111, 0, 0, .525],
              40: [.08333, .69444, 0, 0, .525],
              41: [.08333, .69444, 0, 0, .525],
              42: [0, .52083, 0, 0, .525],
              43: [-.08056, .53055, 0, 0, .525],
              44: [.13889, .125, 0, 0, .525],
              45: [-.08056, .53055, 0, 0, .525],
              46: [0, .125, 0, 0, .525],
              47: [.08333, .69444, 0, 0, .525],
              48: [0, .61111, 0, 0, .525],
              49: [0, .61111, 0, 0, .525],
              50: [0, .61111, 0, 0, .525],
              51: [0, .61111, 0, 0, .525],
              52: [0, .61111, 0, 0, .525],
              53: [0, .61111, 0, 0, .525],
              54: [0, .61111, 0, 0, .525],
              55: [0, .61111, 0, 0, .525],
              56: [0, .61111, 0, 0, .525],
              57: [0, .61111, 0, 0, .525],
              58: [0, .43056, 0, 0, .525],
              59: [.13889, .43056, 0, 0, .525],
              60: [-.05556, .55556, 0, 0, .525],
              61: [-.19549, .41562, 0, 0, .525],
              62: [-.05556, .55556, 0, 0, .525],
              63: [0, .61111, 0, 0, .525],
              64: [0, .61111, 0, 0, .525],
              65: [0, .61111, 0, 0, .525],
              66: [0, .61111, 0, 0, .525],
              67: [0, .61111, 0, 0, .525],
              68: [0, .61111, 0, 0, .525],
              69: [0, .61111, 0, 0, .525],
              70: [0, .61111, 0, 0, .525],
              71: [0, .61111, 0, 0, .525],
              72: [0, .61111, 0, 0, .525],
              73: [0, .61111, 0, 0, .525],
              74: [0, .61111, 0, 0, .525],
              75: [0, .61111, 0, 0, .525],
              76: [0, .61111, 0, 0, .525],
              77: [0, .61111, 0, 0, .525],
              78: [0, .61111, 0, 0, .525],
              79: [0, .61111, 0, 0, .525],
              80: [0, .61111, 0, 0, .525],
              81: [.13889, .61111, 0, 0, .525],
              82: [0, .61111, 0, 0, .525],
              83: [0, .61111, 0, 0, .525],
              84: [0, .61111, 0, 0, .525],
              85: [0, .61111, 0, 0, .525],
              86: [0, .61111, 0, 0, .525],
              87: [0, .61111, 0, 0, .525],
              88: [0, .61111, 0, 0, .525],
              89: [0, .61111, 0, 0, .525],
              90: [0, .61111, 0, 0, .525],
              91: [.08333, .69444, 0, 0, .525],
              92: [.08333, .69444, 0, 0, .525],
              93: [.08333, .69444, 0, 0, .525],
              94: [0, .61111, 0, 0, .525],
              95: [.09514, 0, 0, 0, .525],
              96: [0, .61111, 0, 0, .525],
              97: [0, .43056, 0, 0, .525],
              98: [0, .61111, 0, 0, .525],
              99: [0, .43056, 0, 0, .525],
              100: [0, .61111, 0, 0, .525],
              101: [0, .43056, 0, 0, .525],
              102: [0, .61111, 0, 0, .525],
              103: [.22222, .43056, 0, 0, .525],
              104: [0, .61111, 0, 0, .525],
              105: [0, .61111, 0, 0, .525],
              106: [.22222, .61111, 0, 0, .525],
              107: [0, .61111, 0, 0, .525],
              108: [0, .61111, 0, 0, .525],
              109: [0, .43056, 0, 0, .525],
              110: [0, .43056, 0, 0, .525],
              111: [0, .43056, 0, 0, .525],
              112: [.22222, .43056, 0, 0, .525],
              113: [.22222, .43056, 0, 0, .525],
              114: [0, .43056, 0, 0, .525],
              115: [0, .43056, 0, 0, .525],
              116: [0, .55358, 0, 0, .525],
              117: [0, .43056, 0, 0, .525],
              118: [0, .43056, 0, 0, .525],
              119: [0, .43056, 0, 0, .525],
              120: [0, .43056, 0, 0, .525],
              121: [.22222, .43056, 0, 0, .525],
              122: [0, .43056, 0, 0, .525],
              123: [.08333, .69444, 0, 0, .525],
              124: [.08333, .69444, 0, 0, .525],
              125: [.08333, .69444, 0, 0, .525],
              126: [0, .61111, 0, 0, .525],
              127: [0, .61111, 0, 0, .525],
              160: [0, 0, 0, 0, .525],
              176: [0, .61111, 0, 0, .525],
              184: [.19445, 0, 0, 0, .525],
              305: [0, .43056, 0, 0, .525],
              567: [.22222, .43056, 0, 0, .525],
              711: [0, .56597, 0, 0, .525],
              713: [0, .56555, 0, 0, .525],
              714: [0, .61111, 0, 0, .525],
              715: [0, .61111, 0, 0, .525],
              728: [0, .61111, 0, 0, .525],
              730: [0, .61111, 0, 0, .525],
              770: [0, .61111, 0, 0, .525],
              771: [0, .61111, 0, 0, .525],
              776: [0, .61111, 0, 0, .525],
              915: [0, .61111, 0, 0, .525],
              916: [0, .61111, 0, 0, .525],
              920: [0, .61111, 0, 0, .525],
              923: [0, .61111, 0, 0, .525],
              926: [0, .61111, 0, 0, .525],
              928: [0, .61111, 0, 0, .525],
              931: [0, .61111, 0, 0, .525],
              933: [0, .61111, 0, 0, .525],
              934: [0, .61111, 0, 0, .525],
              936: [0, .61111, 0, 0, .525],
              937: [0, .61111, 0, 0, .525],
              8216: [0, .61111, 0, 0, .525],
              8217: [0, .61111, 0, 0, .525],
              8242: [0, .61111, 0, 0, .525],
              9251: [.11111, .21944, 0, 0, .525]
            }
          },
          P = {
            slant: [.25, .25, .25],
            space: [0, 0, 0],
            stretch: [0, 0, 0],
            shrink: [0, 0, 0],
            xHeight: [.431, .431, .431],
            quad: [1, 1.171, 1.472],
            extraSpace: [0, 0, 0],
            num1: [.677, .732, .925],
            num2: [.394, .384, .387],
            num3: [.444, .471, .504],
            denom1: [.686, .752, 1.025],
            denom2: [.345, .344, .532],
            sup1: [.413, .503, .504],
            sup2: [.363, .431, .404],
            sup3: [.289, .286, .294],
            sub1: [.15, .143, .2],
            sub2: [.247, .286, .4],
            supDrop: [.386, .353, .494],
            subDrop: [.05, .071, .1],
            delim1: [2.39, 1.7, 1.98],
            delim2: [1.01, 1.157, 1.42],
            axisHeight: [.25, .25, .25],
            defaultRuleThickness: [.04, .049, .049],
            bigOpSpacing1: [.111, .111, .111],
            bigOpSpacing2: [.166, .166, .166],
            bigOpSpacing3: [.2, .2, .2],
            bigOpSpacing4: [.6, .611, .611],
            bigOpSpacing5: [.1, .143, .143],
            sqrtRuleThickness: [.04, .04, .04],
            ptPerEm: [10, 10, 10],
            doubleRuleSep: [.2, .2, .2],
            arrayRuleWidth: [.04, .04, .04],
            fboxsep: [.3, .3, .3],
            fboxrule: [.04, .04, .04]
          },
          F = {
            "Å": "A",
            "Ç": "C",
            "Ð": "D",
            "Þ": "o",
            "å": "a",
            "ç": "c",
            "ð": "d",
            "þ": "o",
            "А": "A",
            "Б": "B",
            "В": "B",
            "Г": "F",
            "Д": "A",
            "Е": "E",
            "Ж": "K",
            "З": "3",
            "И": "N",
            "Й": "N",
            "К": "K",
            "Л": "N",
            "М": "M",
            "Н": "H",
            "О": "O",
            "П": "N",
            "Р": "P",
            "С": "C",
            "Т": "T",
            "У": "y",
            "Ф": "O",
            "Х": "X",
            "Ц": "U",
            "Ч": "h",
            "Ш": "W",
            "Щ": "W",
            "Ъ": "B",
            "Ы": "X",
            "Ь": "B",
            "Э": "3",
            "Ю": "X",
            "Я": "R",
            "а": "a",
            "б": "b",
            "в": "a",
            "г": "r",
            "д": "y",
            "е": "e",
            "ж": "m",
            "з": "e",
            "и": "n",
            "й": "n",
            "к": "n",
            "л": "n",
            "м": "m",
            "н": "n",
            "о": "o",
            "п": "n",
            "р": "p",
            "с": "c",
            "т": "o",
            "у": "y",
            "ф": "b",
            "х": "x",
            "ц": "n",
            "ч": "n",
            "ш": "w",
            "щ": "w",
            "ъ": "a",
            "ы": "m",
            "ь": "a",
            "э": "e",
            "ю": "m",
            "я": "r"
          };

        function V(e, t, r) {
          if (!D[t]) throw new Error("Font metrics not found for font: " + t + ".");
          var n = e.charCodeAt(0),
            a = D[t][n];
          if (!a && e[0] in F && (n = F[e[0]].charCodeAt(0), a = D[t][n]), a || "text" !== r || w(n) && (a = D[t][77]), a) return {
            depth: a[0],
            height: a[1],
            italic: a[2],
            skew: a[3],
            width: a[4]
          }
        }
        var G = {},
          U = {
            bin: 1,
            close: 1,
            inner: 1,
            open: 1,
            punct: 1,
            rel: 1
          },
          Y = {
            "accent-token": 1,
            mathord: 1,
            "op-token": 1,
            spacing: 1,
            textord: 1
          },
          W = {
            math: {},
            text: {}
          },
          X = W;

        function _(e, t, r, n, a, i) {
          W[e][a] = {
            font: t,
            group: r,
            replace: n
          }, i && n && (W[e][n] = W[e][a])
        }
        var $ = "math",
          j = "text",
          Z = "main",
          K = "ams",
          J = "accent-token",
          Q = "bin",
          ee = "close",
          te = "inner",
          re = "mathord",
          ne = "op-token",
          ae = "open",
          ie = "punct",
          oe = "rel",
          se = "spacing",
          le = "textord";
        _($, Z, oe, "≡", "\\equiv", !0), _($, Z, oe, "≺", "\\prec", !0), _($, Z, oe, "≻", "\\succ", !0), _($, Z, oe, "∼", "\\sim", !0), _($, Z, oe, "⊥", "\\perp"), _($, Z, oe, "⪯", "\\preceq", !0), _($, Z, oe, "⪰", "\\succeq", !0), _($, Z, oe, "≃", "\\simeq", !0), _($, Z, oe, "∣", "\\mid", !0), _($, Z, oe, "≪", "\\ll", !0), _($, Z, oe, "≫", "\\gg", !0), _($, Z, oe, "≍", "\\asymp", !0), _($, Z, oe, "∥", "\\parallel"), _($, Z, oe, "⋈", "\\bowtie", !0), _($, Z, oe, "⌣", "\\smile", !0), _($, Z, oe, "⊑", "\\sqsubseteq", !0), _($, Z, oe, "⊒", "\\sqsupseteq", !0), _($, Z, oe, "≐", "\\doteq", !0), _($, Z, oe, "⌢", "\\frown", !0), _($, Z, oe, "∋", "\\ni", !0), _($, Z, oe, "∝", "\\propto", !0), _($, Z, oe, "⊢", "\\vdash", !0), _($, Z, oe, "⊣", "\\dashv", !0), _($, Z, oe, "∋", "\\owns"), _($, Z, ie, ".", "\\ldotp"), _($, Z, ie, "⋅", "\\cdotp"), _($, Z, le, "#", "\\#"), _(j, Z, le, "#", "\\#"), _($, Z, le, "&", "\\&"), _(j, Z, le, "&", "\\&"), _($, Z, le, "ℵ", "\\aleph", !0), _($, Z, le, "∀", "\\forall", !0), _($, Z, le, "ℏ", "\\hbar", !0), _($, Z, le, "∃", "\\exists", !0), _($, Z, le, "∇", "\\nabla", !0), _($, Z, le, "♭", "\\flat", !0), _($, Z, le, "ℓ", "\\ell", !0), _($, Z, le, "♮", "\\natural", !0), _($, Z, le, "♣", "\\clubsuit", !0), _($, Z, le, "℘", "\\wp", !0), _($, Z, le, "♯", "\\sharp", !0), _($, Z, le, "♢", "\\diamondsuit", !0), _($, Z, le, "ℜ", "\\Re", !0), _($, Z, le, "♡", "\\heartsuit", !0), _($, Z, le, "ℑ", "\\Im", !0), _($, Z, le, "♠", "\\spadesuit", !0), _($, Z, le, "§", "\\S", !0), _(j, Z, le, "§", "\\S"), _($, Z, le, "¶", "\\P", !0), _(j, Z, le, "¶", "\\P"), _($, Z, le, "†", "\\dag"), _(j, Z, le, "†", "\\dag"), _(j, Z, le, "†", "\\textdagger"), _($, Z, le, "‡", "\\ddag"), _(j, Z, le, "‡", "\\ddag"), _(j, Z, le, "‡", "\\textdaggerdbl"), _($, Z, ee, "⎱", "\\rmoustache", !0), _($, Z, ae, "⎰", "\\lmoustache", !0), _($, Z, ee, "⟯", "\\rgroup", !0), _($, Z, ae, "⟮", "\\lgroup", !0), _($, Z, Q, "∓", "\\mp", !0), _($, Z, Q, "⊖", "\\ominus", !0), _($, Z, Q, "⊎", "\\uplus", !0), _($, Z, Q, "⊓", "\\sqcap", !0), _($, Z, Q, "∗", "\\ast"), _($, Z, Q, "⊔", "\\sqcup", !0), _($, Z, Q, "◯", "\\bigcirc", !0), _($, Z, Q, "∙", "\\bullet"), _($, Z, Q, "‡", "\\ddagger"), _($, Z, Q, "≀", "\\wr", !0), _($, Z, Q, "⨿", "\\amalg"), _($, Z, Q, "&", "\\And"), _($, Z, oe, "⟵", "\\longleftarrow", !0), _($, Z, oe, "⇐", "\\Leftarrow", !0), _($, Z, oe, "⟸", "\\Longleftarrow", !0), _($, Z, oe, "⟶", "\\longrightarrow", !0), _($, Z, oe, "⇒", "\\Rightarrow", !0), _($, Z, oe, "⟹", "\\Longrightarrow", !0), _($, Z, oe, "↔", "\\leftrightarrow", !0), _($, Z, oe, "⟷", "\\longleftrightarrow", !0), _($, Z, oe, "⇔", "\\Leftrightarrow", !0), _($, Z, oe, "⟺", "\\Longleftrightarrow", !0), _($, Z, oe, "↦", "\\mapsto", !0), _($, Z, oe, "⟼", "\\longmapsto", !0), _($, Z, oe, "↗", "\\nearrow", !0), _($, Z, oe, "↩", "\\hookleftarrow", !0), _($, Z, oe, "↪", "\\hookrightarrow", !0), _($, Z, oe, "↘", "\\searrow", !0), _($, Z, oe, "↼", "\\leftharpoonup", !0), _($, Z, oe, "⇀", "\\rightharpoonup", !0), _($, Z, oe, "↙", "\\swarrow", !0), _($, Z, oe, "↽", "\\leftharpoondown", !0), _($, Z, oe, "⇁", "\\rightharpoondown", !0), _($, Z, oe, "↖", "\\nwarrow", !0), _($, Z, oe, "⇌", "\\rightleftharpoons", !0), _($, K, oe, "≮", "\\nless", !0), _($, K, oe, "", "\\@nleqslant"), _($, K, oe, "", "\\@nleqq"), _($, K, oe, "⪇", "\\lneq", !0), _($, K, oe, "≨", "\\lneqq", !0), _($, K, oe, "", "\\@lvertneqq"), _($, K, oe, "⋦", "\\lnsim", !0), _($, K, oe, "⪉", "\\lnapprox", !0), _($, K, oe, "⊀", "\\nprec", !0), _($, K, oe, "⋠", "\\npreceq", !0), _($, K, oe, "⋨", "\\precnsim", !0), _($, K, oe, "⪹", "\\precnapprox", !0), _($, K, oe, "≁", "\\nsim", !0), _($, K, oe, "", "\\@nshortmid"), _($, K, oe, "∤", "\\nmid", !0), _($, K, oe, "⊬", "\\nvdash", !0), _($, K, oe, "⊭", "\\nvDash", !0), _($, K, oe, "⋪", "\\ntriangleleft"), _($, K, oe, "⋬", "\\ntrianglelefteq", !0), _($, K, oe, "⊊", "\\subsetneq", !0), _($, K, oe, "", "\\@varsubsetneq"), _($, K, oe, "⫋", "\\subsetneqq", !0), _($, K, oe, "", "\\@varsubsetneqq"), _($, K, oe, "≯", "\\ngtr", !0), _($, K, oe, "", "\\@ngeqslant"), _($, K, oe, "", "\\@ngeqq"), _($, K, oe, "⪈", "\\gneq", !0), _($, K, oe, "≩", "\\gneqq", !0), _($, K, oe, "", "\\@gvertneqq"), _($, K, oe, "⋧", "\\gnsim", !0), _($, K, oe, "⪊", "\\gnapprox", !0), _($, K, oe, "⊁", "\\nsucc", !0), _($, K, oe, "⋡", "\\nsucceq", !0), _($, K, oe, "⋩", "\\succnsim", !0), _($, K, oe, "⪺", "\\succnapprox", !0), _($, K, oe, "≆", "\\ncong", !0), _($, K, oe, "", "\\@nshortparallel"), _($, K, oe, "∦", "\\nparallel", !0), _($, K, oe, "⊯", "\\nVDash", !0), _($, K, oe, "⋫", "\\ntriangleright"), _($, K, oe, "⋭", "\\ntrianglerighteq", !0), _($, K, oe, "", "\\@nsupseteqq"), _($, K, oe, "⊋", "\\supsetneq", !0), _($, K, oe, "", "\\@varsupsetneq"), _($, K, oe, "⫌", "\\supsetneqq", !0), _($, K, oe, "", "\\@varsupsetneqq"), _($, K, oe, "⊮", "\\nVdash", !0), _($, K, oe, "⪵", "\\precneqq", !0), _($, K, oe, "⪶", "\\succneqq", !0), _($, K, oe, "", "\\@nsubseteqq"), _($, K, Q, "⊴", "\\unlhd"), _($, K, Q, "⊵", "\\unrhd"), _($, K, oe, "↚", "\\nleftarrow", !0), _($, K, oe, "↛", "\\nrightarrow", !0), _($, K, oe, "⇍", "\\nLeftarrow", !0), _($, K, oe, "⇏", "\\nRightarrow", !0), _($, K, oe, "↮", "\\nleftrightarrow", !0), _($, K, oe, "⇎", "\\nLeftrightarrow", !0), _($, K, oe, "△", "\\vartriangle"), _($, K, le, "ℏ", "\\hslash"), _($, K, le, "▽", "\\triangledown"), _($, K, le, "◊", "\\lozenge"), _($, K, le, "Ⓢ", "\\circledS"), _($, K, le, "®", "\\circledR"), _(j, K, le, "®", "\\circledR"), _($, K, le, "∡", "\\measuredangle", !0), _($, K, le, "∄", "\\nexists"), _($, K, le, "℧", "\\mho"), _($, K, le, "Ⅎ", "\\Finv", !0), _($, K, le, "⅁", "\\Game", !0), _($, K, le, "‵", "\\backprime"), _($, K, le, "▲", "\\blacktriangle"), _($, K, le, "▼", "\\blacktriangledown"), _($, K, le, "■", "\\blacksquare"), _($, K, le, "⧫", "\\blacklozenge"), _($, K, le, "★", "\\bigstar"), _($, K, le, "∢", "\\sphericalangle", !0), _($, K, le, "∁", "\\complement", !0), _($, K, le, "ð", "\\eth", !0), _(j, Z, le, "ð", "ð"), _($, K, le, "╱", "\\diagup"), _($, K, le, "╲", "\\diagdown"), _($, K, le, "□", "\\square"), _($, K, le, "□", "\\Box"), _($, K, le, "◊", "\\Diamond"), _($, K, le, "¥", "\\yen", !0), _(j, K, le, "¥", "\\yen", !0), _($, K, le, "✓", "\\checkmark", !0), _(j, K, le, "✓", "\\checkmark"), _($, K, le, "ℶ", "\\beth", !0), _($, K, le, "ℸ", "\\daleth", !0), _($, K, le, "ℷ", "\\gimel", !0), _($, K, le, "ϝ", "\\digamma", !0), _($, K, le, "ϰ", "\\varkappa"), _($, K, ae, "┌", "\\@ulcorner", !0), _($, K, ee, "┐", "\\@urcorner", !0), _($, K, ae, "└", "\\@llcorner", !0), _($, K, ee, "┘", "\\@lrcorner", !0), _($, K, oe, "≦", "\\leqq", !0), _($, K, oe, "⩽", "\\leqslant", !0), _($, K, oe, "⪕", "\\eqslantless", !0), _($, K, oe, "≲", "\\lesssim", !0), _($, K, oe, "⪅", "\\lessapprox", !0), _($, K, oe, "≊", "\\approxeq", !0), _($, K, Q, "⋖", "\\lessdot"), _($, K, oe, "⋘", "\\lll", !0), _($, K, oe, "≶", "\\lessgtr", !0), _($, K, oe, "⋚", "\\lesseqgtr", !0), _($, K, oe, "⪋", "\\lesseqqgtr", !0), _($, K, oe, "≑", "\\doteqdot"), _($, K, oe, "≓", "\\risingdotseq", !0), _($, K, oe, "≒", "\\fallingdotseq", !0), _($, K, oe, "∽", "\\backsim", !0), _($, K, oe, "⋍", "\\backsimeq", !0), _($, K, oe, "⫅", "\\subseteqq", !0), _($, K, oe, "⋐", "\\Subset", !0), _($, K, oe, "⊏", "\\sqsubset", !0), _($, K, oe, "≼", "\\preccurlyeq", !0), _($, K, oe, "⋞", "\\curlyeqprec", !0), _($, K, oe, "≾", "\\precsim", !0), _($, K, oe, "⪷", "\\precapprox", !0), _($, K, oe, "⊲", "\\vartriangleleft"), _($, K, oe, "⊴", "\\trianglelefteq"), _($, K, oe, "⊨", "\\vDash", !0), _($, K, oe, "⊪", "\\Vvdash", !0), _($, K, oe, "⌣", "\\smallsmile"), _($, K, oe, "⌢", "\\smallfrown"), _($, K, oe, "≏", "\\bumpeq", !0), _($, K, oe, "≎", "\\Bumpeq", !0), _($, K, oe, "≧", "\\geqq", !0), _($, K, oe, "⩾", "\\geqslant", !0), _($, K, oe, "⪖", "\\eqslantgtr", !0), _($, K, oe, "≳", "\\gtrsim", !0), _($, K, oe, "⪆", "\\gtrapprox", !0), _($, K, Q, "⋗", "\\gtrdot"), _($, K, oe, "⋙", "\\ggg", !0), _($, K, oe, "≷", "\\gtrless", !0), _($, K, oe, "⋛", "\\gtreqless", !0), _($, K, oe, "⪌", "\\gtreqqless", !0), _($, K, oe, "≖", "\\eqcirc", !0), _($, K, oe, "≗", "\\circeq", !0), _($, K, oe, "≜", "\\triangleq", !0), _($, K, oe, "∼", "\\thicksim"), _($, K, oe, "≈", "\\thickapprox"), _($, K, oe, "⫆", "\\supseteqq", !0), _($, K, oe, "⋑", "\\Supset", !0), _($, K, oe, "⊐", "\\sqsupset", !0), _($, K, oe, "≽", "\\succcurlyeq", !0), _($, K, oe, "⋟", "\\curlyeqsucc", !0), _($, K, oe, "≿", "\\succsim", !0), _($, K, oe, "⪸", "\\succapprox", !0), _($, K, oe, "⊳", "\\vartriangleright"), _($, K, oe, "⊵", "\\trianglerighteq"), _($, K, oe, "⊩", "\\Vdash", !0), _($, K, oe, "∣", "\\shortmid"), _($, K, oe, "∥", "\\shortparallel"), _($, K, oe, "≬", "\\between", !0), _($, K, oe, "⋔", "\\pitchfork", !0), _($, K, oe, "∝", "\\varpropto"), _($, K, oe, "◀", "\\blacktriangleleft"), _($, K, oe, "∴", "\\therefore", !0), _($, K, oe, "∍", "\\backepsilon"), _($, K, oe, "▶", "\\blacktriangleright"), _($, K, oe, "∵", "\\because", !0), _($, K, oe, "⋘", "\\llless"), _($, K, oe, "⋙", "\\gggtr"), _($, K, Q, "⊲", "\\lhd"), _($, K, Q, "⊳", "\\rhd"), _($, K, oe, "≂", "\\eqsim", !0), _($, Z, oe, "⋈", "\\Join"), _($, K, oe, "≑", "\\Doteq", !0), _($, K, Q, "∔", "\\dotplus", !0), _($, K, Q, "∖", "\\smallsetminus"), _($, K, Q, "⋒", "\\Cap", !0), _($, K, Q, "⋓", "\\Cup", !0), _($, K, Q, "⩞", "\\doublebarwedge", !0), _($, K, Q, "⊟", "\\boxminus", !0), _($, K, Q, "⊞", "\\boxplus", !0), _($, K, Q, "⋇", "\\divideontimes", !0), _($, K, Q, "⋉", "\\ltimes", !0), _($, K, Q, "⋊", "\\rtimes", !0), _($, K, Q, "⋋", "\\leftthreetimes", !0), _($, K, Q, "⋌", "\\rightthreetimes", !0), _($, K, Q, "⋏", "\\curlywedge", !0), _($, K, Q, "⋎", "\\curlyvee", !0), _($, K, Q, "⊝", "\\circleddash", !0), _($, K, Q, "⊛", "\\circledast", !0), _($, K, Q, "⋅", "\\centerdot"), _($, K, Q, "⊺", "\\intercal", !0), _($, K, Q, "⋒", "\\doublecap"), _($, K, Q, "⋓", "\\doublecup"), _($, K, Q, "⊠", "\\boxtimes", !0), _($, K, oe, "⇢", "\\dashrightarrow", !0), _($, K, oe, "⇠", "\\dashleftarrow", !0), _($, K, oe, "⇇", "\\leftleftarrows", !0), _($, K, oe, "⇆", "\\leftrightarrows", !0), _($, K, oe, "⇚", "\\Lleftarrow", !0), _($, K, oe, "↞", "\\twoheadleftarrow", !0), _($, K, oe, "↢", "\\leftarrowtail", !0), _($, K, oe, "↫", "\\looparrowleft", !0), _($, K, oe, "⇋", "\\leftrightharpoons", !0), _($, K, oe, "↶", "\\curvearrowleft", !0), _($, K, oe, "↺", "\\circlearrowleft", !0), _($, K, oe, "↰", "\\Lsh", !0), _($, K, oe, "⇈", "\\upuparrows", !0), _($, K, oe, "↿", "\\upharpoonleft", !0), _($, K, oe, "⇃", "\\downharpoonleft", !0), _($, Z, oe, "⊶", "\\origof", !0), _($, Z, oe, "⊷", "\\imageof", !0), _($, K, oe, "⊸", "\\multimap", !0), _($, K, oe, "↭", "\\leftrightsquigarrow", !0), _($, K, oe, "⇉", "\\rightrightarrows", !0), _($, K, oe, "⇄", "\\rightleftarrows", !0), _($, K, oe, "↠", "\\twoheadrightarrow", !0), _($, K, oe, "↣", "\\rightarrowtail", !0), _($, K, oe, "↬", "\\looparrowright", !0), _($, K, oe, "↷", "\\curvearrowright", !0), _($, K, oe, "↻", "\\circlearrowright", !0), _($, K, oe, "↱", "\\Rsh", !0), _($, K, oe, "⇊", "\\downdownarrows", !0), _($, K, oe, "↾", "\\upharpoonright", !0), _($, K, oe, "⇂", "\\downharpoonright", !0), _($, K, oe, "⇝", "\\rightsquigarrow", !0), _($, K, oe, "⇝", "\\leadsto"), _($, K, oe, "⇛", "\\Rrightarrow", !0), _($, K, oe, "↾", "\\restriction"), _($, Z, le, "‘", "`"), _($, Z, le, "$", "\\$"), _(j, Z, le, "$", "\\$"), _(j, Z, le, "$", "\\textdollar"), _($, Z, le, "%", "\\%"), _(j, Z, le, "%", "\\%"), _($, Z, le, "_", "\\_"), _(j, Z, le, "_", "\\_"), _(j, Z, le, "_", "\\textunderscore"), _($, Z, le, "∠", "\\angle", !0), _($, Z, le, "∞", "\\infty", !0), _($, Z, le, "′", "\\prime"), _($, Z, le, "△", "\\triangle"), _($, Z, le, "Γ", "\\Gamma", !0), _($, Z, le, "Δ", "\\Delta", !0), _($, Z, le, "Θ", "\\Theta", !0), _($, Z, le, "Λ", "\\Lambda", !0), _($, Z, le, "Ξ", "\\Xi", !0), _($, Z, le, "Π", "\\Pi", !0), _($, Z, le, "Σ", "\\Sigma", !0), _($, Z, le, "Υ", "\\Upsilon", !0), _($, Z, le, "Φ", "\\Phi", !0), _($, Z, le, "Ψ", "\\Psi", !0), _($, Z, le, "Ω", "\\Omega", !0), _($, Z, le, "A", "Α"), _($, Z, le, "B", "Β"), _($, Z, le, "E", "Ε"), _($, Z, le, "Z", "Ζ"), _($, Z, le, "H", "Η"), _($, Z, le, "I", "Ι"), _($, Z, le, "K", "Κ"), _($, Z, le, "M", "Μ"), _($, Z, le, "N", "Ν"), _($, Z, le, "O", "Ο"), _($, Z, le, "P", "Ρ"), _($, Z, le, "T", "Τ"), _($, Z, le, "X", "Χ"), _($, Z, le, "¬", "\\neg", !0), _($, Z, le, "¬", "\\lnot"), _($, Z, le, "⊤", "\\top"), _($, Z, le, "⊥", "\\bot"), _($, Z, le, "∅", "\\emptyset"), _($, K, le, "∅", "\\varnothing"), _($, Z, re, "α", "\\alpha", !0), _($, Z, re, "β", "\\beta", !0), _($, Z, re, "γ", "\\gamma", !0), _($, Z, re, "δ", "\\delta", !0), _($, Z, re, "ϵ", "\\epsilon", !0), _($, Z, re, "ζ", "\\zeta", !0), _($, Z, re, "η", "\\eta", !0), _($, Z, re, "θ", "\\theta", !0), _($, Z, re, "ι", "\\iota", !0), _($, Z, re, "κ", "\\kappa", !0), _($, Z, re, "λ", "\\lambda", !0), _($, Z, re, "μ", "\\mu", !0), _($, Z, re, "ν", "\\nu", !0), _($, Z, re, "ξ", "\\xi", !0), _($, Z, re, "ο", "\\omicron", !0), _($, Z, re, "π", "\\pi", !0), _($, Z, re, "ρ", "\\rho", !0), _($, Z, re, "σ", "\\sigma", !0), _($, Z, re, "τ", "\\tau", !0), _($, Z, re, "υ", "\\upsilon", !0), _($, Z, re, "ϕ", "\\phi", !0), _($, Z, re, "χ", "\\chi", !0), _($, Z, re, "ψ", "\\psi", !0), _($, Z, re, "ω", "\\omega", !0), _($, Z, re, "ε", "\\varepsilon", !0), _($, Z, re, "ϑ", "\\vartheta", !0), _($, Z, re, "ϖ", "\\varpi", !0), _($, Z, re, "ϱ", "\\varrho", !0), _($, Z, re, "ς", "\\varsigma", !0), _($, Z, re, "φ", "\\varphi", !0), _($, Z, Q, "∗", "*"), _($, Z, Q, "+", "+"), _($, Z, Q, "−", "-"), _($, Z, Q, "⋅", "\\cdot", !0), _($, Z, Q, "∘", "\\circ"), _($, Z, Q, "÷", "\\div", !0), _($, Z, Q, "±", "\\pm", !0), _($, Z, Q, "×", "\\times", !0), _($, Z, Q, "∩", "\\cap", !0), _($, Z, Q, "∪", "\\cup", !0), _($, Z, Q, "∖", "\\setminus"), _($, Z, Q, "∧", "\\land"), _($, Z, Q, "∨", "\\lor"), _($, Z, Q, "∧", "\\wedge", !0), _($, Z, Q, "∨", "\\vee", !0), _($, Z, le, "√", "\\surd"), _($, Z, ae, "⟨", "\\langle", !0), _($, Z, ae, "∣", "\\lvert"), _($, Z, ae, "∥", "\\lVert"), _($, Z, ee, "?", "?"), _($, Z, ee, "!", "!"), _($, Z, ee, "⟩", "\\rangle", !0), _($, Z, ee, "∣", "\\rvert"), _($, Z, ee, "∥", "\\rVert"), _($, Z, oe, "=", "="), _($, Z, oe, ":", ":"), _($, Z, oe, "≈", "\\approx", !0), _($, Z, oe, "≅", "\\cong", !0), _($, Z, oe, "≥", "\\ge"), _($, Z, oe, "≥", "\\geq", !0), _($, Z, oe, "←", "\\gets"), _($, Z, oe, ">", "\\gt", !0), _($, Z, oe, "∈", "\\in", !0), _($, Z, oe, "", "\\@not"), _($, Z, oe, "⊂", "\\subset", !0), _($, Z, oe, "⊃", "\\supset", !0), _($, Z, oe, "⊆", "\\subseteq", !0), _($, Z, oe, "⊇", "\\supseteq", !0), _($, K, oe, "⊈", "\\nsubseteq", !0), _($, K, oe, "⊉", "\\nsupseteq", !0), _($, Z, oe, "⊨", "\\models"), _($, Z, oe, "←", "\\leftarrow", !0), _($, Z, oe, "≤", "\\le"), _($, Z, oe, "≤", "\\leq", !0), _($, Z, oe, "<", "\\lt", !0), _($, Z, oe, "→", "\\rightarrow", !0), _($, Z, oe, "→", "\\to"), _($, K, oe, "≱", "\\ngeq", !0), _($, K, oe, "≰", "\\nleq", !0), _($, Z, se, " ", "\\ "), _($, Z, se, " ", "\\space"), _($, Z, se, " ", "\\nobreakspace"), _(j, Z, se, " ", "\\ "), _(j, Z, se, " ", " "), _(j, Z, se, " ", "\\space"), _(j, Z, se, " ", "\\nobreakspace"), _($, Z, se, null, "\\nobreak"), _($, Z, se, null, "\\allowbreak"), _($, Z, ie, ",", ","), _($, Z, ie, ";", ";"), _($, K, Q, "⊼", "\\barwedge", !0), _($, K, Q, "⊻", "\\veebar", !0), _($, Z, Q, "⊙", "\\odot", !0), _($, Z, Q, "⊕", "\\oplus", !0), _($, Z, Q, "⊗", "\\otimes", !0), _($, Z, le, "∂", "\\partial", !0), _($, Z, Q, "⊘", "\\oslash", !0), _($, K, Q, "⊚", "\\circledcirc", !0), _($, K, Q, "⊡", "\\boxdot", !0), _($, Z, Q, "△", "\\bigtriangleup"), _($, Z, Q, "▽", "\\bigtriangledown"), _($, Z, Q, "†", "\\dagger"), _($, Z, Q, "⋄", "\\diamond"), _($, Z, Q, "⋆", "\\star"), _($, Z, Q, "◃", "\\triangleleft"), _($, Z, Q, "▹", "\\triangleright"), _($, Z, ae, "{", "\\{"), _(j, Z, le, "{", "\\{"), _(j, Z, le, "{", "\\textbraceleft"), _($, Z, ee, "}", "\\}"), _(j, Z, le, "}", "\\}"), _(j, Z, le, "}", "\\textbraceright"), _($, Z, ae, "{", "\\lbrace"), _($, Z, ee, "}", "\\rbrace"), _($, Z, ae, "[", "\\lbrack", !0), _(j, Z, le, "[", "\\lbrack", !0), _($, Z, ee, "]", "\\rbrack", !0), _(j, Z, le, "]", "\\rbrack", !0), _($, Z, ae, "(", "\\lparen", !0), _($, Z, ee, ")", "\\rparen", !0), _(j, Z, le, "<", "\\textless", !0), _(j, Z, le, ">", "\\textgreater", !0), _($, Z, ae, "⌊", "\\lfloor", !0), _($, Z, ee, "⌋", "\\rfloor", !0), _($, Z, ae, "⌈", "\\lceil", !0), _($, Z, ee, "⌉", "\\rceil", !0), _($, Z, le, "\\", "\\backslash"), _($, Z, le, "∣", "|"), _($, Z, le, "∣", "\\vert"), _(j, Z, le, "|", "\\textbar", !0), _($, Z, le, "∥", "\\|"), _($, Z, le, "∥", "\\Vert"), _(j, Z, le, "∥", "\\textbardbl"), _(j, Z, le, "~", "\\textasciitilde"), _(j, Z, le, "\\", "\\textbackslash"), _(j, Z, le, "^", "\\textasciicircum"), _($, Z, oe, "↑", "\\uparrow", !0), _($, Z, oe, "⇑", "\\Uparrow", !0), _($, Z, oe, "↓", "\\downarrow", !0), _($, Z, oe, "⇓", "\\Downarrow", !0), _($, Z, oe, "↕", "\\updownarrow", !0), _($, Z, oe, "⇕", "\\Updownarrow", !0), _($, Z, ne, "∐", "\\coprod"), _($, Z, ne, "⋁", "\\bigvee"), _($, Z, ne, "⋀", "\\bigwedge"), _($, Z, ne, "⨄", "\\biguplus"), _($, Z, ne, "⋂", "\\bigcap"), _($, Z, ne, "⋃", "\\bigcup"), _($, Z, ne, "∫", "\\int"), _($, Z, ne, "∫", "\\intop"), _($, Z, ne, "∬", "\\iint"), _($, Z, ne, "∭", "\\iiint"), _($, Z, ne, "∏", "\\prod"), _($, Z, ne, "∑", "\\sum"), _($, Z, ne, "⨂", "\\bigotimes"), _($, Z, ne, "⨁", "\\bigoplus"), _($, Z, ne, "⨀", "\\bigodot"), _($, Z, ne, "∮", "\\oint"), _($, Z, ne, "∯", "\\oiint"), _($, Z, ne, "∰", "\\oiiint"), _($, Z, ne, "⨆", "\\bigsqcup"), _($, Z, ne, "∫", "\\smallint"), _(j, Z, te, "…", "\\textellipsis"), _($, Z, te, "…", "\\mathellipsis"), _(j, Z, te, "…", "\\ldots", !0), _($, Z, te, "…", "\\ldots", !0), _($, Z, te, "⋯", "\\@cdots", !0), _($, Z, te, "⋱", "\\ddots", !0), _($, Z, le, "⋮", "\\varvdots"), _($, Z, J, "ˊ", "\\acute"), _($, Z, J, "ˋ", "\\grave"), _($, Z, J, "¨", "\\ddot"), _($, Z, J, "~", "\\tilde"), _($, Z, J, "ˉ", "\\bar"), _($, Z, J, "˘", "\\breve"), _($, Z, J, "ˇ", "\\check"), _($, Z, J, "^", "\\hat"), _($, Z, J, "⃗", "\\vec"), _($, Z, J, "˙", "\\dot"), _($, Z, J, "˚", "\\mathring"), _($, Z, re, "", "\\@imath"), _($, Z, re, "", "\\@jmath"), _($, Z, le, "ı", "ı"), _($, Z, le, "ȷ", "ȷ"), _(j, Z, le, "ı", "\\i", !0), _(j, Z, le, "ȷ", "\\j", !0), _(j, Z, le, "ß", "\\ss", !0), _(j, Z, le, "æ", "\\ae", !0), _(j, Z, le, "œ", "\\oe", !0), _(j, Z, le, "ø", "\\o", !0), _(j, Z, le, "Æ", "\\AE", !0), _(j, Z, le, "Œ", "\\OE", !0), _(j, Z, le, "Ø", "\\O", !0), _(j, Z, J, "ˊ", "\\'"), _(j, Z, J, "ˋ", "\\`"), _(j, Z, J, "ˆ", "\\^"), _(j, Z, J, "˜", "\\~"), _(j, Z, J, "ˉ", "\\="), _(j, Z, J, "˘", "\\u"), _(j, Z, J, "˙", "\\."), _(j, Z, J, "˚", "\\r"), _(j, Z, J, "ˇ", "\\v"), _(j, Z, J, "¨", '\\"'), _(j, Z, J, "˝", "\\H"), _(j, Z, J, "◯", "\\textcircled");
        var he = {
          "--": !0,
          "---": !0,
          "``": !0,
          "''": !0
        };
        _(j, Z, le, "–", "--", !0), _(j, Z, le, "–", "\\textendash"), _(j, Z, le, "—", "---", !0), _(j, Z, le, "—", "\\textemdash"), _(j, Z, le, "‘", "`", !0), _(j, Z, le, "‘", "\\textquoteleft"), _(j, Z, le, "’", "'", !0), _(j, Z, le, "’", "\\textquoteright"), _(j, Z, le, "“", "``", !0), _(j, Z, le, "“", "\\textquotedblleft"), _(j, Z, le, "”", "''", !0), _(j, Z, le, "”", "\\textquotedblright"), _($, Z, le, "°", "\\degree", !0), _(j, Z, le, "°", "\\degree"), _(j, Z, le, "°", "\\textdegree", !0), _($, Z, le, "£", "\\pounds"), _($, Z, le, "£", "\\mathsterling", !0), _(j, Z, le, "£", "\\pounds"), _(j, Z, le, "£", "\\textsterling", !0), _($, K, le, "✠", "\\maltese"), _(j, K, le, "✠", "\\maltese");
        for (var me = '0123456789/@."', ce = 0; ce < me.length; ce++) {
          var ue = me.charAt(ce);
          _($, Z, le, ue, ue)
        }
        for (var pe = '0123456789!@*()-=+";:?/.,', de = 0; de < pe.length; de++) {
          var fe = pe.charAt(de);
          _(j, Z, le, fe, fe)
        }
        for (var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", ve = 0; ve < ge.length; ve++) {
          var ye = ge.charAt(ve);
          _($, Z, re, ye, ye), _(j, Z, le, ye, ye)
        }
        _($, K, le, "C", "ℂ"), _(j, K, le, "C", "ℂ"), _($, K, le, "H", "ℍ"), _(j, K, le, "H", "ℍ"), _($, K, le, "N", "ℕ"), _(j, K, le, "N", "ℕ"), _($, K, le, "P", "ℙ"), _(j, K, le, "P", "ℙ"), _($, K, le, "Q", "ℚ"), _(j, K, le, "Q", "ℚ"), _($, K, le, "R", "ℝ"), _(j, K, le, "R", "ℝ"), _($, K, le, "Z", "ℤ"), _(j, K, le, "Z", "ℤ"), _($, Z, re, "h", "ℎ"), _(j, Z, re, "h", "ℎ");
        for (var be = "", xe = 0; xe < ge.length; xe++) {
          var we = ge.charAt(xe);
          _($, Z, re, we, be = String.fromCharCode(55349, 56320 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56372 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56424 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56580 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56736 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56788 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56840 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56944 + xe)), _(j, Z, le, we, be), xe < 26 && (_($, Z, re, we, be = String.fromCharCode(55349, 56632 + xe)), _(j, Z, le, we, be), _($, Z, re, we, be = String.fromCharCode(55349, 56476 + xe)), _(j, Z, le, we, be))
        }
        _($, Z, re, "k", be = String.fromCharCode(55349, 56668)), _(j, Z, le, "k", be);
        for (var ke = 0; ke < 10; ke++) {
          var Se = ke.toString();
          _($, Z, re, Se, be = String.fromCharCode(55349, 57294 + ke)), _(j, Z, le, Se, be), _($, Z, re, Se, be = String.fromCharCode(55349, 57314 + ke)), _(j, Z, le, Se, be), _($, Z, re, Se, be = String.fromCharCode(55349, 57324 + ke)), _(j, Z, le, Se, be), _($, Z, re, Se, be = String.fromCharCode(55349, 57334 + ke)), _(j, Z, le, Se, be)
        }
        for (var Me = "ÇÐÞçþ", ze = 0; ze < Me.length; ze++) {
          var Ae = Me.charAt(ze);
          _($, Z, re, Ae, Ae), _(j, Z, le, Ae, Ae)
        }
        var Te = [
            ["mathbf", "textbf", "Main-Bold"],
            ["mathbf", "textbf", "Main-Bold"],
            ["mathnormal", "textit", "Math-Italic"],
            ["mathnormal", "textit", "Math-Italic"],
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
            ["mathscr", "textscr", "Script-Regular"],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            ["mathfrak", "textfrak", "Fraktur-Regular"],
            ["mathbb", "textbb", "AMS-Regular"],
            ["mathbb", "textbb", "AMS-Regular"],
            ["", "", ""],
            ["", "", ""],
            ["mathsf", "textsf", "SansSerif-Regular"],
            ["mathsf", "textsf", "SansSerif-Regular"],
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            ["mathitsf", "textitsf", "SansSerif-Italic"],
            ["", "", ""],
            ["", "", ""],
            ["mathtt", "texttt", "Typewriter-Regular"],
            ["mathtt", "texttt", "Typewriter-Regular"]
          ],
          Be = [
            ["mathbf", "textbf", "Main-Bold"],
            ["", "", ""],
            ["mathsf", "textsf", "SansSerif-Regular"],
            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
            ["mathtt", "texttt", "Typewriter-Regular"]
          ],
          Ne = [
            [1, 1, 1],
            [2, 1, 1],
            [3, 1, 1],
            [4, 2, 1],
            [5, 2, 1],
            [6, 3, 1],
            [7, 4, 2],
            [8, 6, 3],
            [9, 7, 6],
            [10, 8, 7],
            [11, 10, 9]
          ],
          qe = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
          Ce = function(e, t) {
            return t.size < 2 ? e : Ne[e - 1][t.size - 1]
          },
          Ie = function() {
            function e(t) {
              this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = qe[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0
            }
            var t = e.prototype;
            return t.extend = function(t) {
              var r = {
                style: this.style,
                size: this.size,
                textSize: this.textSize,
                color: this.color,
                phantom: this.phantom,
                font: this.font,
                fontFamily: this.fontFamily,
                fontWeight: this.fontWeight,
                fontShape: this.fontShape,
                maxSize: this.maxSize,
                minRuleThickness: this.minRuleThickness
              };
              for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
              return new e(r)
            }, t.havingStyle = function(e) {
              return this.style === e ? this : this.extend({
                style: e,
                size: Ce(this.textSize, e)
              })
            }, t.havingCrampedStyle = function() {
              return this.havingStyle(this.style.cramp())
            }, t.havingSize = function(e) {
              return this.size === e && this.textSize === e ? this : this.extend({
                style: this.style.text(),
                size: e,
                textSize: e,
                sizeMultiplier: qe[e - 1]
              })
            }, t.havingBaseStyle = function(t) {
              t = t || this.style.text();
              var r = Ce(e.BASESIZE, t);
              return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
                style: t,
                size: r
              })
            }, t.havingBaseSizing = function() {
              var e;
              switch (this.style.id) {
                case 4:
                case 5:
                  e = 3;
                  break;
                case 6:
                case 7:
                  e = 1;
                  break;
                default:
                  e = 6
              }
              return this.extend({
                style: this.style.text(),
                size: e
              })
            }, t.withColor = function(e) {
              return this.extend({
                color: e
              })
            }, t.withPhantom = function() {
              return this.extend({
                phantom: !0
              })
            }, t.withFont = function(e) {
              return this.extend({
                font: e
              })
            }, t.withTextFontFamily = function(e) {
              return this.extend({
                fontFamily: e,
                font: ""
              })
            }, t.withTextFontWeight = function(e) {
              return this.extend({
                fontWeight: e,
                font: ""
              })
            }, t.withTextFontShape = function(e) {
              return this.extend({
                fontShape: e,
                font: ""
              })
            }, t.sizingClasses = function(e) {
              return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
            }, t.baseSizingClasses = function() {
              return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : []
            }, t.fontMetrics = function() {
              return this._fontMetrics || (this._fontMetrics = function(e) {
                var t;
                if (!G[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
                  var r = G[t] = {
                    cssEmPerMu: P.quad[t] / 18
                  };
                  for (var n in P) P.hasOwnProperty(n) && (r[n] = P[n][t])
                }
                return G[t]
              }(this.size)), this._fontMetrics
            }, t.getColor = function() {
              return this.phantom ? "transparent" : this.color
            }, e
          }();
        Ie.BASESIZE = 6;
        var Re = Ie,
          Oe = {
            pt: 1,
            mm: 7227 / 2540,
            cm: 7227 / 254,
            in: 72.27,
            bp: 1.00375,
            pc: 12,
            dd: 1238 / 1157,
            cc: 14856 / 1157,
            nd: 685 / 642,
            nc: 1370 / 107,
            sp: 1 / 65536,
            px: 1.00375
          },
          Ee = {
            ex: !0,
            em: !0,
            mu: !0
          },
          He = function(e) {
            return "string" != typeof e && (e = e.unit), e in Oe || e in Ee || "ex" === e
          },
          Le = function(e, t) {
            var r;
            if (e.unit in Oe) r = Oe[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
            else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
            else {
              var a;
              if (a = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = a.fontMetrics().xHeight;
              else {
                if ("em" !== e.unit) throw new n("Invalid unit: '" + e.unit + "'");
                r = a.fontMetrics().quad
              }
              a !== t && (r *= a.sizeMultiplier / t.sizeMultiplier)
            }
            return Math.min(e.number * r, t.maxSize)
          },
          De = function(e, t, r) {
            return X[r][e] && X[r][e].replace && (e = X[r][e].replace), {
              value: e,
              metrics: V(e, t, r)
            }
          },
          Pe = function(e, t, r, n, a) {
            var i, o = De(e, t, r),
              s = o.metrics;
            if (e = o.value, s) {
              var l = s.italic;
              ("text" === r || n && "mathit" === n.font) && (l = 0), i = new R(e, s.height, s.depth, l, s.skew, s.width, a)
            } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "' and mode '" + r + "'"), i = new R(e, 0, 0, 0, 0, 0, a);
            if (n) {
              i.maxFontSize = n.sizeMultiplier, n.style.isTight() && i.classes.push("mtight");
              var h = n.getColor();
              h && (i.style.color = h)
            }
            return i
          },
          Fe = function(e, t) {
            if (z(e.classes) !== z(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1;
            if (1 === e.classes.length) {
              var r = e.classes[0];
              if ("mbin" === r || "mord" === r) return !1
            }
            for (var n in e.style)
              if (e.style.hasOwnProperty(n) && e.style[n] !== t.style[n]) return !1;
            for (var a in t.style)
              if (t.style.hasOwnProperty(a) && e.style[a] !== t.style[a]) return !1;
            return !0
          },
          Ve = function(e) {
            for (var t = 0, r = 0, n = 0, a = 0; a < e.children.length; a++) {
              var i = e.children[a];
              i.height > t && (t = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize)
            }
            e.height = t, e.depth = r, e.maxFontSize = n
          },
          Ge = function(e, t, r, n) {
            var a = new N(e, t, r, n);
            return Ve(a), a
          },
          Ue = function(e, t, r, n) {
            return new N(e, t, r, n)
          },
          Ye = function(e) {
            var t = new M(e);
            return Ve(t), t
          },
          We = function(e, t, r) {
            var n = "";
            switch (e) {
              case "amsrm":
                n = "AMS";
                break;
              case "textrm":
                n = "Main";
                break;
              case "textsf":
                n = "SansSerif";
                break;
              case "texttt":
                n = "Typewriter";
                break;
              default:
                n = e
            }
            return n + "-" + ("textbf" === t && "textit" === r ? "BoldItalic" : "textbf" === t ? "Bold" : "textit" === t ? "Italic" : "Regular")
          },
          Xe = {
            mathbf: {
              variant: "bold",
              fontName: "Main-Bold"
            },
            mathrm: {
              variant: "normal",
              fontName: "Main-Regular"
            },
            textit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathit: {
              variant: "italic",
              fontName: "Main-Italic"
            },
            mathnormal: {
              variant: "italic",
              fontName: "Math-Italic"
            },
            mathbb: {
              variant: "double-struck",
              fontName: "AMS-Regular"
            },
            mathcal: {
              variant: "script",
              fontName: "Caligraphic-Regular"
            },
            mathfrak: {
              variant: "fraktur",
              fontName: "Fraktur-Regular"
            },
            mathscr: {
              variant: "script",
              fontName: "Script-Regular"
            },
            mathsf: {
              variant: "sans-serif",
              fontName: "SansSerif-Regular"
            },
            mathtt: {
              variant: "monospace",
              fontName: "Typewriter-Regular"
            }
          },
          _e = {
            vec: ["vec", .471, .714],
            oiintSize1: ["oiintSize1", .957, .499],
            oiintSize2: ["oiintSize2", 1.472, .659],
            oiiintSize1: ["oiiintSize1", 1.304, .499],
            oiiintSize2: ["oiiintSize2", 1.98, .659]
          },
          $e = {
            fontMap: Xe,
            makeSymbol: Pe,
            mathsym: function(e, t, r, n) {
              return void 0 === n && (n = []), "boldsymbol" === r.font && De(e, "Main-Bold", t).metrics ? Pe(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === X[t][e].font ? Pe(e, "Main-Regular", t, r, n) : Pe(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
            },
            makeSpan: Ge,
            makeSvgSpan: Ue,
            makeLineSpan: function(e, t, r) {
              var n = Ge([e], [], t);
              return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = n.height + "em", n.maxFontSize = 1, n
            },
            makeAnchor: function(e, t, r, n) {
              var a = new q(e, t, r, n);
              return Ve(a), a
            },
            makeFragment: Ye,
            wrapFragment: function(e, t) {
              return e instanceof M ? Ge([], [e], t) : e
            },
            makeVList: function(e, t) {
              for (var r = function(e) {
                  if ("individualShift" === e.positionType) {
                    for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                      var o = -t[i].shift - a - t[i].elem.depth,
                        s = o - (t[i - 1].elem.height + t[i - 1].elem.depth);
                      a += o, r.push({
                        type: "kern",
                        size: s
                      }), r.push(t[i])
                    }
                    return {
                      children: r,
                      depth: n
                    }
                  }
                  var l;
                  if ("top" === e.positionType) {
                    for (var h = e.positionData, m = 0; m < e.children.length; m++) {
                      var c = e.children[m];
                      h -= "kern" === c.type ? c.size : c.elem.height + c.elem.depth
                    }
                    l = h
                  } else if ("bottom" === e.positionType) l = -e.positionData;
                  else {
                    var u = e.children[0];
                    if ("elem" !== u.type) throw new Error('First child must have type "elem".');
                    if ("shift" === e.positionType) l = -u.elem.depth - e.positionData;
                    else {
                      if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                      l = -u.elem.depth
                    }
                  }
                  return {
                    children: e.children,
                    depth: l
                  }
                }(e), n = r.children, a = r.depth, i = 0, o = 0; o < n.length; o++) {
                var s = n[o];
                if ("elem" === s.type) {
                  var l = s.elem;
                  i = Math.max(i, l.maxFontSize, l.height)
                }
              }
              i += 2;
              var h = Ge(["pstrut"], []);
              h.style.height = i + "em";
              for (var m = [], c = a, u = a, p = a, d = 0; d < n.length; d++) {
                var f = n[d];
                if ("kern" === f.type) p += f.size;
                else {
                  var g = f.elem,
                    v = f.wrapperClasses || [],
                    y = f.wrapperStyle || {},
                    b = Ge(v, [h, g], void 0, y);
                  b.style.top = -i - p - g.depth + "em", f.marginLeft && (b.style.marginLeft = f.marginLeft), f.marginRight && (b.style.marginRight = f.marginRight), m.push(b), p += g.height + g.depth
                }
                c = Math.min(c, p), u = Math.max(u, p)
              }
              var x, w = Ge(["vlist"], m);
              if (w.style.height = u + "em", c < 0) {
                var k = Ge([], []),
                  S = Ge(["vlist"], [k]);
                S.style.height = -c + "em";
                var M = Ge(["vlist-s"], [new R("​")]);
                x = [Ge(["vlist-r"], [w, M]), Ge(["vlist-r"], [S])]
              } else x = [Ge(["vlist-r"], [w])];
              var z = Ge(["vlist-t"], x);
              return 2 === x.length && z.classes.push("vlist-t2"), z.height = u, z.depth = -c, z
            },
            makeOrd: function(e, t, r) {
              var a = e.mode,
                i = e.text,
                o = ["mord"],
                s = "math" === a || "text" === a && t.font,
                l = s ? t.font : t.fontFamily;
              if (55349 === i.charCodeAt(0)) {
                var h = function(e, t) {
                    var r = 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536,
                      a = "math" === t ? 0 : 1;
                    if (119808 <= r && r < 120484) {
                      var i = Math.floor((r - 119808) / 26);
                      return [Te[i][2], Te[i][a]]
                    }
                    if (120782 <= r && r <= 120831) {
                      var o = Math.floor((r - 120782) / 10);
                      return [Be[o][2], Be[o][a]]
                    }
                    if (120485 === r || 120486 === r) return [Te[0][2], Te[0][a]];
                    if (120486 < r && r < 120782) return ["", ""];
                    throw new n("Unsupported character: " + e)
                  }(i, a),
                  m = h[0],
                  c = h[1];
                return Pe(i, m, a, t, o.concat(c))
              }
              if (l) {
                var u, p;
                if ("boldsymbol" === l) {
                  var d = function(e, t, r, n, a) {
                    return "textord" !== a && De(e, "Math-BoldItalic", t).metrics ? {
                      fontName: "Math-BoldItalic",
                      fontClass: "boldsymbol"
                    } : {
                      fontName: "Main-Bold",
                      fontClass: "mathbf"
                    }
                  }(i, a, 0, 0, r);
                  u = d.fontName, p = [d.fontClass]
                } else s ? (u = Xe[l].fontName, p = [l]) : (u = We(l, t.fontWeight, t.fontShape), p = [l, t.fontWeight, t.fontShape]);
                if (De(i, u, a).metrics) return Pe(i, u, a, t, o.concat(p));
                if (he.hasOwnProperty(i) && "Typewriter" === u.substr(0, 10)) {
                  for (var f = [], g = 0; g < i.length; g++) f.push(Pe(i[g], u, a, t, o.concat(p)));
                  return Ye(f)
                }
              }
              if ("mathord" === r) return Pe(i, "Math-Italic", a, t, o.concat(["mathnormal"]));
              if ("textord" === r) {
                var v = X[a][i] && X[a][i].font;
                if ("ams" === v) {
                  var y = We("amsrm", t.fontWeight, t.fontShape);
                  return Pe(i, y, a, t, o.concat("amsrm", t.fontWeight, t.fontShape))
                }
                if ("main" !== v && v) {
                  var b = We(v, t.fontWeight, t.fontShape);
                  return Pe(i, b, a, t, o.concat(b, t.fontWeight, t.fontShape))
                }
                var x = We("textrm", t.fontWeight, t.fontShape);
                return Pe(i, x, a, t, o.concat(t.fontWeight, t.fontShape))
              }
              throw new Error("unexpected type: " + r + " in makeOrd")
            },
            makeGlue: function(e, t) {
              var r = Ge(["mspace"], [], t),
                n = Le(e, t);
              return r.style.marginRight = n + "em", r
            },
            staticSvg: function(e, t) {
              var r = _e[e],
                n = r[0],
                a = r[1],
                i = r[2],
                o = new E(n),
                s = new O([o], {
                  width: a + "em",
                  height: i + "em",
                  style: "width:" + a + "em",
                  viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
                  preserveAspectRatio: "xMinYMin"
                }),
                l = Ue(["overlay"], [s], t);
              return l.height = i, l.style.height = i + "em", l.style.width = a + "em", l
            },
            svgData: _e,
            tryCombineChars: function(e) {
              for (var t = 0; t < e.length - 1; t++) {
                var r = e[t],
                  n = e[t + 1];
                r instanceof R && n instanceof R && Fe(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, e.splice(t + 1, 1), t--)
              }
              return e
            }
          },
          je = {
            number: 3,
            unit: "mu"
          },
          Ze = {
            number: 4,
            unit: "mu"
          },
          Ke = {
            number: 5,
            unit: "mu"
          },
          Je = {
            mord: {
              mop: je,
              mbin: Ze,
              mrel: Ke,
              minner: je
            },
            mop: {
              mord: je,
              mop: je,
              mrel: Ke,
              minner: je
            },
            mbin: {
              mord: Ze,
              mop: Ze,
              mopen: Ze,
              minner: Ze
            },
            mrel: {
              mord: Ke,
              mop: Ke,
              mopen: Ke,
              minner: Ke
            },
            mopen: {},
            mclose: {
              mop: je,
              mbin: Ze,
              mrel: Ke,
              minner: je
            },
            mpunct: {
              mord: je,
              mop: je,
              mrel: Ke,
              mopen: je,
              mclose: je,
              mpunct: je,
              minner: je
            },
            minner: {
              mord: je,
              mop: je,
              mbin: Ze,
              mrel: Ke,
              mopen: je,
              mpunct: je,
              minner: je
            }
          },
          Qe = {
            mord: {
              mop: je
            },
            mop: {
              mord: je,
              mop: je
            },
            mbin: {},
            mrel: {},
            mopen: {},
            mclose: {
              mop: je
            },
            mpunct: {},
            minner: {
              mop: je
            }
          },
          et = {},
          tt = {},
          rt = {};

        function nt(e) {
          for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
              type: t,
              numArgs: n.numArgs,
              argTypes: n.argTypes,
              allowedInArgument: !!n.allowedInArgument,
              allowedInText: !!n.allowedInText,
              allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
              numOptionalArgs: n.numOptionalArgs || 0,
              infix: !!n.infix,
              primitive: !!n.primitive,
              handler: a
            }, l = 0; l < r.length; ++l) et[r[l]] = s;
          t && (i && (tt[t] = i), o && (rt[t] = o))
        }

        function at(e) {
          nt({
            type: e.type,
            names: [],
            props: {
              numArgs: 0
            },
            handler: function() {
              throw new Error("Should never be called.")
            },
            htmlBuilder: e.htmlBuilder,
            mathmlBuilder: e.mathmlBuilder
          })
        }
        var it = function(e) {
            return "ordgroup" === e.type && 1 === e.body.length ? e.body[0] : e
          },
          ot = function(e) {
            return "ordgroup" === e.type ? e.body : [e]
          },
          st = $e.makeSpan,
          lt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
          ht = ["rightmost", "mrel", "mclose", "mpunct"],
          mt = {
            display: y.DISPLAY,
            text: y.TEXT,
            script: y.SCRIPT,
            scriptscript: y.SCRIPTSCRIPT
          },
          ct = {
            mord: "mord",
            mop: "mop",
            mbin: "mbin",
            mrel: "mrel",
            mopen: "mopen",
            mclose: "mclose",
            mpunct: "mpunct",
            minner: "minner"
          },
          ut = function(e, t, r, n) {
            void 0 === n && (n = [null, null]);
            for (var a = [], i = 0; i < e.length; i++) {
              var o = yt(e[i], t);
              if (o instanceof M) {
                var s = o.children;
                a.push.apply(a, s)
              } else a.push(o)
            }
            if ($e.tryCombineChars(a), !r) return a;
            var h = t;
            if (1 === e.length) {
              var m = e[0];
              "sizing" === m.type ? h = t.havingSize(m.size) : "styling" === m.type && (h = t.havingStyle(mt[m.style]))
            }
            var c = st([n[0] || "leftmost"], [], t),
              u = st([n[1] || "rightmost"], [], t),
              p = "root" === r;
            return pt(a, (function(e, t) {
              var r = t.classes[0],
                n = e.classes[0];
              "mbin" === r && l.contains(ht, n) ? t.classes[0] = "mord" : "mbin" === n && l.contains(lt, r) && (e.classes[0] = "mord")
            }), {
              node: c
            }, u, p), pt(a, (function(e, t) {
              var r = gt(t),
                n = gt(e),
                a = r && n ? e.hasClass("mtight") ? Qe[r][n] : Je[r][n] : null;
              if (a) return $e.makeGlue(a, h)
            }), {
              node: c
            }, u, p), a
          },
          pt = function e(t, r, n, a, i) {
            a && t.push(a);
            for (var o = 0; o < t.length; o++) {
              var s = t[o],
                l = dt(s);
              if (l) e(l.children, r, n, null, i);
              else {
                var h = !s.hasClass("mspace");
                if (h) {
                  var m = r(s, n.node);
                  m && (n.insertAfter ? n.insertAfter(m) : (t.unshift(m), o++))
                }
                h ? n.node = s : i && s.hasClass("newline") && (n.node = st(["leftmost"])), n.insertAfter = function(e) {
                  return function(r) {
                    t.splice(e + 1, 0, r), o++
                  }
                }(o)
              }
            }
            a && t.pop()
          },
          dt = function(e) {
            return e instanceof M || e instanceof q || e instanceof N && e.hasClass("enclosing") ? e : null
          },
          ft = function e(t, r) {
            var n = dt(t);
            if (n) {
              var a = n.children;
              if (a.length) {
                if ("right" === r) return e(a[a.length - 1], "right");
                if ("left" === r) return e(a[0], "left")
              }
            }
            return t
          },
          gt = function(e, t) {
            return e ? (t && (e = ft(e, t)), ct[e.classes[0]] || null) : null
          },
          vt = function(e, t) {
            var r = ["nulldelimiter"].concat(e.baseSizingClasses());
            return st(t.concat(r))
          },
          yt = function(e, t, r) {
            if (!e) return st();
            if (tt[e.type]) {
              var a = tt[e.type](e, t);
              if (r && t.size !== r.size) {
                a = st(t.sizingClasses(r), [a], t);
                var i = t.sizeMultiplier / r.sizeMultiplier;
                a.height *= i, a.depth *= i
              }
              return a
            }
            throw new n("Got group of unknown type: '" + e.type + "'")
          };

        function bt(e, t) {
          var r = st(["base"], e, t),
            n = st(["strut"]);
          return n.style.height = r.height + r.depth + "em", n.style.verticalAlign = -r.depth + "em", r.children.unshift(n), r
        }

        function xt(e, t) {
          var r = null;
          1 === e.length && "tag" === e[0].type && (r = e[0].tag, e = e[0].body);
          var n, a = ut(e, t, "root");
          2 === a.length && a[1].hasClass("tag") && (n = a.pop());
          for (var i, o = [], s = [], l = 0; l < a.length; l++)
            if (s.push(a[l]), a[l].hasClass("mbin") || a[l].hasClass("mrel") || a[l].hasClass("allowbreak")) {
              for (var h = !1; l < a.length - 1 && a[l + 1].hasClass("mspace") && !a[l + 1].hasClass("newline");) l++, s.push(a[l]), a[l].hasClass("nobreak") && (h = !0);
              h || (o.push(bt(s, t)), s = [])
            } else a[l].hasClass("newline") && (s.pop(), s.length > 0 && (o.push(bt(s, t)), s = []), o.push(a[l]));
          s.length > 0 && o.push(bt(s, t)), r ? ((i = bt(ut(r, t, !0))).classes = ["tag"], o.push(i)) : n && o.push(n);
          var m = st(["katex-html"], o);
          if (m.setAttribute("aria-hidden", "true"), i) {
            var c = i.children[0];
            c.style.height = m.height + m.depth + "em", c.style.verticalAlign = -m.depth + "em"
          }
          return m
        }

        function wt(e) {
          return new M(e)
        }
        var kt = function() {
            function e(e, t, r) {
              this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = r || []
            }
            var t = e.prototype;
            return t.setAttribute = function(e, t) {
              this.attributes[e] = t
            }, t.getAttribute = function(e) {
              return this.attributes[e]
            }, t.toNode = function() {
              var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
              this.classes.length > 0 && (e.className = z(this.classes));
              for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
              return e
            }, t.toMarkup = function() {
              var e = "<" + this.type;
              for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += l.escape(this.attributes[t]), e += '"');
              this.classes.length > 0 && (e += ' class ="' + l.escape(z(this.classes)) + '"'), e += ">";
              for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
              return e += "</" + this.type + ">"
            }, t.toText = function() {
              return this.children.map((function(e) {
                return e.toText()
              })).join("")
            }, e
          }(),
          St = function() {
            function e(e) {
              this.text = void 0, this.text = e
            }
            var t = e.prototype;
            return t.toNode = function() {
              return document.createTextNode(this.text)
            }, t.toMarkup = function() {
              return l.escape(this.toText())
            }, t.toText = function() {
              return this.text
            }, e
          }(),
          Mt = {
            MathNode: kt,
            TextNode: St,
            SpaceNode: function() {
              function e(e) {
                this.width = void 0, this.character = void 0, this.width = e, this.character = e >= .05555 && e <= .05556 ? " " : e >= .1666 && e <= .1667 ? " " : e >= .2222 && e <= .2223 ? " " : e >= .2777 && e <= .2778 ? "  " : e >= -.05556 && e <= -.05555 ? " ⁣" : e >= -.1667 && e <= -.1666 ? " ⁣" : e >= -.2223 && e <= -.2222 ? " ⁣" : e >= -.2778 && e <= -.2777 ? " ⁣" : null
              }
              var t = e.prototype;
              return t.toNode = function() {
                if (this.character) return document.createTextNode(this.character);
                var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                return e.setAttribute("width", this.width + "em"), e
              }, t.toMarkup = function() {
                return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>'
              }, t.toText = function() {
                return this.character ? this.character : " "
              }, e
            }(),
            newDocumentFragment: wt
          },
          zt = function(e, t, r) {
            return !X[t][e] || !X[t][e].replace || 55349 === e.charCodeAt(0) || he.hasOwnProperty(e) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (e = X[t][e].replace), new Mt.TextNode(e)
          },
          At = function(e) {
            return 1 === e.length ? e[0] : new Mt.MathNode("mrow", e)
          },
          Tt = function(e, t) {
            if ("texttt" === t.fontFamily) return "monospace";
            if ("textsf" === t.fontFamily) return "textit" === t.fontShape && "textbf" === t.fontWeight ? "sans-serif-bold-italic" : "textit" === t.fontShape ? "sans-serif-italic" : "textbf" === t.fontWeight ? "bold-sans-serif" : "sans-serif";
            if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "bold-italic";
            if ("textit" === t.fontShape) return "italic";
            if ("textbf" === t.fontWeight) return "bold";
            var r = t.font;
            if (!r || "mathnormal" === r) return null;
            var n = e.mode;
            if ("mathit" === r) return "italic";
            if ("boldsymbol" === r) return "textord" === e.type ? "bold" : "bold-italic";
            if ("mathbf" === r) return "bold";
            if ("mathbb" === r) return "double-struck";
            if ("mathfrak" === r) return "fraktur";
            if ("mathscr" === r || "mathcal" === r) return "script";
            if ("mathsf" === r) return "sans-serif";
            if ("mathtt" === r) return "monospace";
            var a = e.text;
            return l.contains(["\\imath", "\\jmath"], a) ? null : (X[n][a] && X[n][a].replace && (a = X[n][a].replace), V(a, $e.fontMap[r].fontName, n) ? $e.fontMap[r].variant : null)
          },
          Bt = function(e, t, r) {
            if (1 === e.length) {
              var n = qt(e[0], t);
              return r && n instanceof kt && "mo" === n.type && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n]
            }
            for (var a, i = [], o = 0; o < e.length; o++) {
              var s = qt(e[o], t);
              if (s instanceof kt && a instanceof kt) {
                if ("mtext" === s.type && "mtext" === a.type && s.getAttribute("mathvariant") === a.getAttribute("mathvariant")) {
                  var l;
                  (l = a.children).push.apply(l, s.children);
                  continue
                }
                if ("mn" === s.type && "mn" === a.type) {
                  var h;
                  (h = a.children).push.apply(h, s.children);
                  continue
                }
                if ("mi" === s.type && 1 === s.children.length && "mn" === a.type) {
                  var m = s.children[0];
                  if (m instanceof St && "." === m.text) {
                    var c;
                    (c = a.children).push.apply(c, s.children);
                    continue
                  }
                } else if ("mi" === a.type && 1 === a.children.length) {
                  var u = a.children[0];
                  if (u instanceof St && "̸" === u.text && ("mo" === s.type || "mi" === s.type || "mn" === s.type)) {
                    var p = s.children[0];
                    p instanceof St && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), i.pop())
                  }
                }
              }
              i.push(s), a = s
            }
            return i
          },
          Nt = function(e, t, r) {
            return At(Bt(e, t, r))
          },
          qt = function(e, t) {
            if (!e) return new Mt.MathNode("mrow");
            if (rt[e.type]) return rt[e.type](e, t);
            throw new n("Got group of unknown type: '" + e.type + "'")
          };

        function Ct(e, t, r, n, a) {
          var i, o = Bt(e, r);
          i = 1 === o.length && o[0] instanceof kt && l.contains(["mrow", "mtable"], o[0].type) ? o[0] : new Mt.MathNode("mrow", o);
          var s = new Mt.MathNode("annotation", [new Mt.TextNode(t)]);
          s.setAttribute("encoding", "application/x-tex");
          var h = new Mt.MathNode("semantics", [i, s]),
            m = new Mt.MathNode("math", [h]);
          m.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && m.setAttribute("display", "block");
          var c = a ? "katex" : "katex-mathml";
          return $e.makeSpan([c], [m])
        }
        var It = function(e) {
            return new Re({
              style: e.displayMode ? y.DISPLAY : y.TEXT,
              maxSize: e.maxSize,
              minRuleThickness: e.minRuleThickness
            })
          },
          Rt = function(e, t) {
            if (t.displayMode) {
              var r = ["katex-display"];
              t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = $e.makeSpan(r, [e])
            }
            return e
          },
          Ot = {
            widehat: "^",
            widecheck: "ˇ",
            widetilde: "~",
            utilde: "~",
            overleftarrow: "←",
            underleftarrow: "←",
            xleftarrow: "←",
            overrightarrow: "→",
            underrightarrow: "→",
            xrightarrow: "→",
            underbrace: "⏟",
            overbrace: "⏞",
            overgroup: "⏠",
            undergroup: "⏡",
            overleftrightarrow: "↔",
            underleftrightarrow: "↔",
            xleftrightarrow: "↔",
            Overrightarrow: "⇒",
            xRightarrow: "⇒",
            overleftharpoon: "↼",
            xleftharpoonup: "↼",
            overrightharpoon: "⇀",
            xrightharpoonup: "⇀",
            xLeftarrow: "⇐",
            xLeftrightarrow: "⇔",
            xhookleftarrow: "↩",
            xhookrightarrow: "↪",
            xmapsto: "↦",
            xrightharpoondown: "⇁",
            xleftharpoondown: "↽",
            xrightleftharpoons: "⇌",
            xleftrightharpoons: "⇋",
            xtwoheadleftarrow: "↞",
            xtwoheadrightarrow: "↠",
            xlongequal: "=",
            xtofrom: "⇄",
            xrightleftarrows: "⇄",
            xrightequilibrium: "⇌",
            xleftequilibrium: "⇋",
            "\\cdrightarrow": "→",
            "\\cdleftarrow": "←",
            "\\cdlongequal": "="
          },
          Et = {
            overrightarrow: [
              ["rightarrow"], .888, 522, "xMaxYMin"
            ],
            overleftarrow: [
              ["leftarrow"], .888, 522, "xMinYMin"
            ],
            underrightarrow: [
              ["rightarrow"], .888, 522, "xMaxYMin"
            ],
            underleftarrow: [
              ["leftarrow"], .888, 522, "xMinYMin"
            ],
            xrightarrow: [
              ["rightarrow"], 1.469, 522, "xMaxYMin"
            ],
            "\\cdrightarrow": [
              ["rightarrow"], 3, 522, "xMaxYMin"
            ],
            xleftarrow: [
              ["leftarrow"], 1.469, 522, "xMinYMin"
            ],
            "\\cdleftarrow": [
              ["leftarrow"], 3, 522, "xMinYMin"
            ],
            Overrightarrow: [
              ["doublerightarrow"], .888, 560, "xMaxYMin"
            ],
            xRightarrow: [
              ["doublerightarrow"], 1.526, 560, "xMaxYMin"
            ],
            xLeftarrow: [
              ["doubleleftarrow"], 1.526, 560, "xMinYMin"
            ],
            overleftharpoon: [
              ["leftharpoon"], .888, 522, "xMinYMin"
            ],
            xleftharpoonup: [
              ["leftharpoon"], .888, 522, "xMinYMin"
            ],
            xleftharpoondown: [
              ["leftharpoondown"], .888, 522, "xMinYMin"
            ],
            overrightharpoon: [
              ["rightharpoon"], .888, 522, "xMaxYMin"
            ],
            xrightharpoonup: [
              ["rightharpoon"], .888, 522, "xMaxYMin"
            ],
            xrightharpoondown: [
              ["rightharpoondown"], .888, 522, "xMaxYMin"
            ],
            xlongequal: [
              ["longequal"], .888, 334, "xMinYMin"
            ],
            "\\cdlongequal": [
              ["longequal"], 3, 334, "xMinYMin"
            ],
            xtwoheadleftarrow: [
              ["twoheadleftarrow"], .888, 334, "xMinYMin"
            ],
            xtwoheadrightarrow: [
              ["twoheadrightarrow"], .888, 334, "xMaxYMin"
            ],
            overleftrightarrow: [
              ["leftarrow", "rightarrow"], .888, 522
            ],
            overbrace: [
              ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
            ],
            underbrace: [
              ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
            ],
            underleftrightarrow: [
              ["leftarrow", "rightarrow"], .888, 522
            ],
            xleftrightarrow: [
              ["leftarrow", "rightarrow"], 1.75, 522
            ],
            xLeftrightarrow: [
              ["doubleleftarrow", "doublerightarrow"], 1.75, 560
            ],
            xrightleftharpoons: [
              ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
            ],
            xleftrightharpoons: [
              ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
            ],
            xhookleftarrow: [
              ["leftarrow", "righthook"], 1.08, 522
            ],
            xhookrightarrow: [
              ["lefthook", "rightarrow"], 1.08, 522
            ],
            overlinesegment: [
              ["leftlinesegment", "rightlinesegment"], .888, 522
            ],
            underlinesegment: [
              ["leftlinesegment", "rightlinesegment"], .888, 522
            ],
            overgroup: [
              ["leftgroup", "rightgroup"], .888, 342
            ],
            undergroup: [
              ["leftgroupunder", "rightgroupunder"], .888, 342
            ],
            xmapsto: [
              ["leftmapsto", "rightarrow"], 1.5, 522
            ],
            xtofrom: [
              ["leftToFrom", "rightToFrom"], 1.75, 528
            ],
            xrightleftarrows: [
              ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
            ],
            xrightequilibrium: [
              ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
            ],
            xleftequilibrium: [
              ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
            ]
          },
          Ht = function(e, t, r, n, a) {
            var i, o = e.height + e.depth + r + n;
            if (/fbox|color|angl/.test(t)) {
              if (i = $e.makeSpan(["stretchy", t], [], a), "fbox" === t) {
                var s = a.color && a.getColor();
                s && (i.style.borderColor = s)
              }
            } else {
              var l = [];
              /^[bx]cancel$/.test(t) && l.push(new H({
                x1: "0",
                y1: "0",
                x2: "100%",
                y2: "100%",
                "stroke-width": "0.046em"
              })), /^x?cancel$/.test(t) && l.push(new H({
                x1: "0",
                y1: "100%",
                x2: "100%",
                y2: "0",
                "stroke-width": "0.046em"
              }));
              var h = new O(l, {
                width: "100%",
                height: o + "em"
              });
              i = $e.makeSvgSpan([], [h], a)
            }
            return i.height = o, i.style.height = o + "em", i
          },
          Lt = function(e) {
            var t = new Mt.MathNode("mo", [new Mt.TextNode(Ot[e.replace(/^\\/, "")])]);
            return t.setAttribute("stretchy", "true"), t
          },
          Dt = function(e, t) {
            var r = function() {
                var r = 4e5,
                  n = e.label.substr(1);
                if (l.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                  var a, i, o, s = "ordgroup" === (d = e.base).type ? d.body.length : 1;
                  if (s > 5) "widehat" === n || "widecheck" === n ? (a = 420, r = 2364, o = .42, i = n + "4") : (a = 312, r = 2340, o = .34, i = "tilde4");
                  else {
                    var h = [1, 1, 2, 2, 3, 3][s];
                    "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][h], a = [0, 239, 300, 360, 420][h], o = [0, .24, .3, .3, .36, .42][h], i = n + h) : (r = [0, 600, 1033, 2339, 2340][h], a = [0, 260, 286, 306, 312][h], o = [0, .26, .286, .3, .306, .34][h], i = "tilde" + h)
                  }
                  var m = new E(i),
                    c = new O([m], {
                      width: "100%",
                      height: o + "em",
                      viewBox: "0 0 " + r + " " + a,
                      preserveAspectRatio: "none"
                    });
                  return {
                    span: $e.makeSvgSpan([], [c], t),
                    minWidth: 0,
                    height: o
                  }
                }
                var u, p, d, f = [],
                  g = Et[n],
                  v = g[0],
                  y = g[1],
                  b = g[2],
                  x = b / 1e3,
                  w = v.length;
                if (1 === w) u = ["hide-tail"], p = [g[3]];
                else if (2 === w) u = ["halfarrow-left", "halfarrow-right"], p = ["xMinYMin", "xMaxYMin"];
                else {
                  if (3 !== w) throw new Error("Correct katexImagesData or update code here to support\n                    " + w + " children.");
                  u = ["brace-left", "brace-center", "brace-right"], p = ["xMinYMin", "xMidYMin", "xMaxYMin"]
                }
                for (var k = 0; k < w; k++) {
                  var S = new E(v[k]),
                    M = new O([S], {
                      width: "400em",
                      height: x + "em",
                      viewBox: "0 0 " + r + " " + b,
                      preserveAspectRatio: p[k] + " slice"
                    }),
                    z = $e.makeSvgSpan([u[k]], [M], t);
                  if (1 === w) return {
                    span: z,
                    minWidth: y,
                    height: x
                  };
                  z.style.height = x + "em", f.push(z)
                }
                return {
                  span: $e.makeSpan(["stretchy"], f, t),
                  minWidth: y,
                  height: x
                }
              }(),
              n = r.span,
              a = r.minWidth,
              i = r.height;
            return n.height = i, n.style.height = i + "em", a > 0 && (n.style.minWidth = a + "em"), n
          };

        function Pt(e, t) {
          if (!e || e.type !== t) throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
          return e
        }

        function Ft(e) {
          var t = Vt(e);
          if (!t) throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
          return t
        }

        function Vt(e) {
          return e && ("atom" === e.type || Y.hasOwnProperty(e.type)) ? e : null
        }
        var Gt = function(e, t) {
            var r, n, a;
            e && "supsub" === e.type ? (r = (n = Pt(e.base, "accent")).base, e.base = r, a = function(e) {
              if (e instanceof N) return e;
              throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".")
            }(yt(e, t)), e.base = n) : r = (n = Pt(e, "accent")).base;
            var i = yt(r, t.havingCrampedStyle()),
              o = 0;
            if (n.isShifty && l.isCharacterBox(r)) {
              var s = l.getBaseElem(r);
              o = L(yt(s, t.havingCrampedStyle())).skew
            }
            var h, m = Math.min(i.height, t.fontMetrics().xHeight);
            if (n.isStretchy) h = Dt(n, t), h = $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: i
              }, {
                type: "elem",
                elem: h,
                wrapperClasses: ["svg-align"],
                wrapperStyle: o > 0 ? {
                  width: "calc(100% - " + 2 * o + "em)",
                  marginLeft: 2 * o + "em"
                } : void 0
              }]
            }, t);
            else {
              var c, u;
              "\\vec" === n.label ? (c = $e.staticSvg("vec", t), u = $e.svgData.vec[1]) : ((c = L(c = $e.makeOrd({
                mode: n.mode,
                text: n.label
              }, t, "textord"))).italic = 0, u = c.width), h = $e.makeSpan(["accent-body"], [c]);
              var p = "\\textcircled" === n.label;
              p && (h.classes.push("accent-full"), m = i.height);
              var d = o;
              p || (d -= u / 2), h.style.left = d + "em", "\\textcircled" === n.label && (h.style.top = ".2em"), h = $e.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: i
                }, {
                  type: "kern",
                  size: -m
                }, {
                  type: "elem",
                  elem: h
                }]
              }, t)
            }
            var f = $e.makeSpan(["mord", "accent"], [h], t);
            return a ? (a.children[0] = f, a.height = Math.max(f.height, a.height), a.classes[0] = "mord", a) : f
          },
          Ut = function(e, t) {
            var r = e.isStretchy ? Lt(e.label) : new Mt.MathNode("mo", [zt(e.label, e.mode)]),
              n = new Mt.MathNode("mover", [qt(e.base, t), r]);
            return n.setAttribute("accent", "true"), n
          },
          Yt = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((function(e) {
            return "\\" + e
          })).join("|"));
        nt({
          type: "accent",
          names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = it(t[0]),
              n = !Yt.test(e.funcName),
              a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName || "\\widecheck" === e.funcName;
            return {
              type: "accent",
              mode: e.parser.mode,
              label: e.funcName,
              isStretchy: n,
              isShifty: a,
              base: r
            }
          },
          htmlBuilder: Gt,
          mathmlBuilder: Ut
        }), nt({
          type: "accent",
          names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
          props: {
            numArgs: 1,
            allowedInText: !0,
            allowedInMath: !0,
            argTypes: ["primitive"]
          },
          handler: function(e, t) {
            var r = t[0],
              n = e.parser.mode;
            return "math" === n && (e.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + e.funcName + " works only in text mode"), n = "text"), {
              type: "accent",
              mode: n,
              label: e.funcName,
              isStretchy: !1,
              isShifty: !0,
              base: r
            }
          },
          htmlBuilder: Gt,
          mathmlBuilder: Ut
        }), nt({
          type: "accentUnder",
          names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "accentUnder",
              mode: r.mode,
              label: n,
              base: a
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.base, t),
              n = Dt(e, t),
              a = "\\utilde" === e.label ? .12 : 0,
              i = $e.makeVList({
                positionType: "top",
                positionData: r.height,
                children: [{
                  type: "elem",
                  elem: n,
                  wrapperClasses: ["svg-align"]
                }, {
                  type: "kern",
                  size: a
                }, {
                  type: "elem",
                  elem: r
                }]
              }, t);
            return $e.makeSpan(["mord", "accentunder"], [i], t)
          },
          mathmlBuilder: function(e, t) {
            var r = Lt(e.label),
              n = new Mt.MathNode("munder", [qt(e.base, t), r]);
            return n.setAttribute("accentunder", "true"), n
          }
        });
        var Wt = function(e) {
          var t = new Mt.MathNode("mpadded", e ? [e] : []);
          return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t
        };
        nt({
          type: "xArrow",
          names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium", "\\\\cdrightarrow", "\\\\cdleftarrow", "\\\\cdlongequal"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = e.funcName;
            return {
              type: "xArrow",
              mode: n.mode,
              label: a,
              body: t[0],
              below: r[0]
            }
          },
          htmlBuilder: function(e, t) {
            var r, n = t.style,
              a = t.havingStyle(n.sup()),
              i = $e.wrapFragment(yt(e.body, a, t), t),
              o = "\\x" === e.label.slice(0, 2) ? "x" : "cd";
            i.classes.push(o + "-arrow-pad"), e.below && (a = t.havingStyle(n.sub()), (r = $e.wrapFragment(yt(e.below, a, t), t)).classes.push(o + "-arrow-pad"));
            var s, l = Dt(e, t),
              h = -t.fontMetrics().axisHeight + .5 * l.height,
              m = -t.fontMetrics().axisHeight - .5 * l.height - .111;
            if ((i.depth > .25 || "\\xleftequilibrium" === e.label) && (m -= i.depth), r) {
              var c = -t.fontMetrics().axisHeight + r.height + .5 * l.height + .111;
              s = $e.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: i,
                  shift: m
                }, {
                  type: "elem",
                  elem: l,
                  shift: h
                }, {
                  type: "elem",
                  elem: r,
                  shift: c
                }]
              }, t)
            } else s = $e.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: i,
                shift: m
              }, {
                type: "elem",
                elem: l,
                shift: h
              }]
            }, t);
            return s.children[0].children[0].children[1].classes.push("svg-align"), $e.makeSpan(["mrel", "x-arrow"], [s], t)
          },
          mathmlBuilder: function(e, t) {
            var r, n = Lt(e.label);
            if (n.setAttribute("minsize", "x" === e.label.charAt(0) ? "1.75em" : "3.0em"), e.body) {
              var a = Wt(qt(e.body, t));
              if (e.below) {
                var i = Wt(qt(e.below, t));
                r = new Mt.MathNode("munderover", [n, i, a])
              } else r = new Mt.MathNode("mover", [n, a])
            } else if (e.below) {
              var o = Wt(qt(e.below, t));
              r = new Mt.MathNode("munder", [n, o])
            } else r = Wt(), r = new Mt.MathNode("mover", [n, r]);
            return r
          }
        });
        var Xt = {
            ">": "\\\\cdrightarrow",
            "<": "\\\\cdleftarrow",
            "=": "\\\\cdlongequal",
            A: "\\uparrow",
            V: "\\downarrow",
            "|": "\\Vert",
            ".": "no arrow"
          },
          _t = function(e) {
            return "textord" === e.type && "@" === e.text
          };

        function $t(e, t, r) {
          var n = Xt[e];
          switch (n) {
            case "\\\\cdrightarrow":
            case "\\\\cdleftarrow":
              return r.callFunction(n, [t[0]], [t[1]]);
            case "\\uparrow":
            case "\\downarrow":
              var a = {
                  type: "atom",
                  text: n,
                  mode: "math",
                  family: "rel"
                },
                i = {
                  type: "ordgroup",
                  mode: "math",
                  body: [r.callFunction("\\\\cdleft", [t[0]], []), r.callFunction("\\Big", [a], []), r.callFunction("\\\\cdright", [t[1]], [])]
                };
              return r.callFunction("\\\\cdparent", [i], []);
            case "\\\\cdlongequal":
              return r.callFunction("\\\\cdlongequal", [], []);
            case "\\Vert":
              return r.callFunction("\\Big", [{
                type: "textord",
                text: "\\Vert",
                mode: "math"
              }], []);
            default:
              return {
                type: "textord", text: " ", mode: "math"
              }
          }
        }
        nt({
          type: "cdlabel",
          names: ["\\\\cdleft", "\\\\cdright"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName;
            return {
              type: "cdlabel",
              mode: r.mode,
              side: n.slice(4),
              label: t[0]
            }
          },
          htmlBuilder: function(e, t) {
            var r = t.havingStyle(t.style.sup()),
              n = $e.wrapFragment(yt(e.label, r, t), t);
            return n.classes.push("cd-label-" + e.side), n.style.bottom = .8 - n.depth + "em", n.height = 0, n.depth = 0, n
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mrow", [qt(e.label, t)]);
            return (r = new Mt.MathNode("mpadded", [r])).setAttribute("width", "0"), "left" === e.side && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), (r = new Mt.MathNode("mstyle", [r])).setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r
          }
        }), nt({
          type: "cdlabelparent",
          names: ["\\\\cdparent"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            return {
              type: "cdlabelparent",
              mode: e.parser.mode,
              fragment: t[0]
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.wrapFragment(yt(e.fragment, t), t);
            return r.classes.push("cd-vert-arrow"), r
          },
          mathmlBuilder: function(e, t) {
            return new Mt.MathNode("mrow", [qt(e.fragment, t)])
          }
        }), nt({
          type: "textord",
          names: ["\\@char"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            for (var r = e.parser, a = Pt(t[0], "ordgroup").body, i = "", o = 0; o < a.length; o++) i += Pt(a[o], "textord").text;
            var s = parseInt(i);
            if (isNaN(s)) throw new n("\\@char has non-numeric argument " + i);
            return {
              type: "textord",
              mode: r.mode,
              text: String.fromCharCode(s)
            }
          }
        });
        var jt = function(e, t) {
            var r = ut(e.body, t.withColor(e.color), !1);
            return $e.makeFragment(r)
          },
          Zt = function(e, t) {
            var r = Bt(e.body, t.withColor(e.color)),
              n = new Mt.MathNode("mstyle", r);
            return n.setAttribute("mathcolor", e.color), n
          };
        nt({
          type: "color",
          names: ["\\textcolor"],
          props: {
            numArgs: 2,
            allowedInText: !0,
            argTypes: ["color", "original"]
          },
          handler: function(e, t) {
            var r = e.parser,
              n = Pt(t[0], "color-token").color,
              a = t[1];
            return {
              type: "color",
              mode: r.mode,
              color: n,
              body: ot(a)
            }
          },
          htmlBuilder: jt,
          mathmlBuilder: Zt
        }), nt({
          type: "color",
          names: ["\\color"],
          props: {
            numArgs: 1,
            allowedInText: !0,
            argTypes: ["color"]
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.breakOnTokenText,
              a = Pt(t[0], "color-token").color;
            r.gullet.macros.set("\\current@color", a);
            var i = r.parseExpression(!0, n);
            return {
              type: "color",
              mode: r.mode,
              color: a,
              body: i
            }
          },
          htmlBuilder: jt,
          mathmlBuilder: Zt
        }), nt({
          type: "cr",
          names: ["\\\\"],
          props: {
            numArgs: 0,
            numOptionalArgs: 1,
            argTypes: ["size"],
            allowedInText: !0
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = r[0],
              i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
            return {
              type: "cr",
              mode: n.mode,
              newLine: i,
              size: a && Pt(a, "size").value
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.makeSpan(["mspace"], [], t);
            return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = Le(e.size, t) + "em")), r
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mspace");
            return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", Le(e.size, t) + "em")), r
          }
        });
        var Kt = {
            "\\global": "\\global",
            "\\long": "\\\\globallong",
            "\\\\globallong": "\\\\globallong",
            "\\def": "\\gdef",
            "\\gdef": "\\gdef",
            "\\edef": "\\xdef",
            "\\xdef": "\\xdef",
            "\\let": "\\\\globallet",
            "\\futurelet": "\\\\globalfuture"
          },
          Jt = function(e) {
            var t = e.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new n("Expected a control sequence", e);
            return t
          },
          Qt = function(e, t, r, n) {
            var a = e.gullet.macros.get(r.text);
            null == a && (r.noexpand = !0, a = {
              tokens: [r],
              numArgs: 0,
              unexpandable: !e.gullet.isExpandable(r.text)
            }), e.gullet.macros.set(t, a, n)
          };
        nt({
          type: "internal",
          names: ["\\global", "\\long", "\\\\globallong"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName;
            t.consumeSpaces();
            var a = t.fetch();
            if (Kt[a.text]) return "\\global" !== r && "\\\\globallong" !== r || (a.text = Kt[a.text]), Pt(t.parseFunction(), "internal");
            throw new n("Invalid token after macro prefix", a)
          }
        }), nt({
          type: "internal",
          names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName,
              a = t.gullet.popToken(),
              i = a.text;
            if (/^(?:[\\{}$&#^_]|EOF)$/.test(i)) throw new n("Expected a control sequence", a);
            for (var o, s = 0, l = [
                []
              ];
              "{" !== t.gullet.future().text;)
              if ("#" === (a = t.gullet.popToken()).text) {
                if ("{" === t.gullet.future().text) {
                  o = t.gullet.future(), l[s].push("{");
                  break
                }
                if (a = t.gullet.popToken(), !/^[1-9]$/.test(a.text)) throw new n('Invalid argument number "' + a.text + '"');
                if (parseInt(a.text) !== s + 1) throw new n('Argument number "' + a.text + '" out of order');
                s++, l.push([])
              } else {
                if ("EOF" === a.text) throw new n("Expected a macro definition");
                l[s].push(a.text)
              } var h = t.gullet.consumeArg().tokens;
            return o && h.unshift(o), "\\edef" !== r && "\\xdef" !== r || (h = t.gullet.expandTokens(h)).reverse(), t.gullet.macros.set(i, {
              tokens: h,
              numArgs: s,
              delimiters: l
            }, r === Kt[r]), {
              type: "internal",
              mode: t.mode
            }
          }
        }), nt({
          type: "internal",
          names: ["\\let", "\\\\globallet"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName,
              n = Jt(t.gullet.popToken());
            t.gullet.consumeSpaces();
            var a = function(e) {
              var t = e.gullet.popToken();
              return "=" === t.text && " " === (t = e.gullet.popToken()).text && (t = e.gullet.popToken()), t
            }(t);
            return Qt(t, n, a, "\\\\globallet" === r), {
              type: "internal",
              mode: t.mode
            }
          }
        }), nt({
          type: "internal",
          names: ["\\futurelet", "\\\\globalfuture"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName,
              n = Jt(t.gullet.popToken()),
              a = t.gullet.popToken(),
              i = t.gullet.popToken();
            return Qt(t, n, i, "\\\\globalfuture" === r), t.gullet.pushToken(i), t.gullet.pushToken(a), {
              type: "internal",
              mode: t.mode
            }
          }
        });
        var er = function(e, t, r) {
            var n = V(X.math[e] && X.math[e].replace || e, t, r);
            if (!n) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
            return n
          },
          tr = function(e, t, r, n) {
            var a = r.havingBaseStyle(t),
              i = $e.makeSpan(n.concat(a.sizingClasses(r)), [e], r),
              o = a.sizeMultiplier / r.sizeMultiplier;
            return i.height *= o, i.depth *= o, i.maxFontSize = a.sizeMultiplier, i
          },
          rr = function(e, t, r) {
            var n = t.havingBaseStyle(r),
              a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
            e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a
          },
          nr = function(e, t, r, n, a, i) {
            var o = function(e, t, r, n) {
                return $e.makeSymbol(e, "Size" + t + "-Regular", r, n)
              }(e, t, a, n),
              s = tr($e.makeSpan(["delimsizing", "size" + t], [o], n), y.TEXT, n, i);
            return r && rr(s, n, y.TEXT), s
          },
          ar = function(e, t, r) {
            var n;
            return n = "Size1-Regular" === t ? "delim-size1" : "delim-size4", {
              type: "elem",
              elem: $e.makeSpan(["delimsizinginner", n], [$e.makeSpan([], [$e.makeSymbol(e, t, r)])])
            }
          },
          ir = function(e, t, r) {
            var n = D["Size4-Regular"][e.charCodeAt(0)] ? D["Size4-Regular"][e.charCodeAt(0)][4].toFixed(3) : D["Size1-Regular"][e.charCodeAt(0)][4].toFixed(3),
              a = new E("inner", function(e, t) {
                switch (e) {
                  case "⎜":
                    return "M291 0 H417 V" + t + " H291z M291 0 H417 V" + t + " H291z";
                  case "∣":
                    return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145z";
                  case "∥":
                    return "M145 0 H188 V" + t + " H145z M145 0 H188 V" + t + " H145zM367 0 H410 V" + t + " H367z M367 0 H410 V" + t + " H367z";
                  case "⎟":
                    return "M457 0 H583 V" + t + " H457z M457 0 H583 V" + t + " H457z";
                  case "⎢":
                    return "M319 0 H403 V" + t + " H319z M319 0 H403 V" + t + " H319z";
                  case "⎥":
                    return "M263 0 H347 V" + t + " H263z M263 0 H347 V" + t + " H263z";
                  case "⎪":
                    return "M384 0 H504 V" + t + " H384z M384 0 H504 V" + t + " H384z";
                  case "⏐":
                    return "M312 0 H355 V" + t + " H312z M312 0 H355 V" + t + " H312z";
                  case "‖":
                    return "M257 0 H300 V" + t + " H257z M257 0 H300 V" + t + " H257zM478 0 H521 V" + t + " H478z M478 0 H521 V" + t + " H478z";
                  default:
                    return ""
                }
              }(e, Math.round(1e3 * t))),
              i = new O([a], {
                width: n + "em",
                height: t + "em",
                style: "width:" + n + "em",
                viewBox: "0 0 " + 1e3 * n + " " + Math.round(1e3 * t),
                preserveAspectRatio: "xMinYMin"
              }),
              o = $e.makeSvgSpan([], [i], r);
            return o.height = t, o.style.height = t + "em", o.style.width = n + "em", {
              type: "elem",
              elem: o
            }
          },
          or = {
            type: "kern",
            size: -.008
          },
          sr = ["|", "\\lvert", "\\rvert", "\\vert"],
          lr = ["\\|", "\\lVert", "\\rVert", "\\Vert"],
          hr = function(e, t, r, n, a, i) {
            var o, s, h, m;
            o = h = m = e, s = null;
            var c = "Size1-Regular";
            "\\uparrow" === e ? h = m = "⏐" : "\\Uparrow" === e ? h = m = "‖" : "\\downarrow" === e ? o = h = "⏐" : "\\Downarrow" === e ? o = h = "‖" : "\\updownarrow" === e ? (o = "\\uparrow", h = "⏐", m = "\\downarrow") : "\\Updownarrow" === e ? (o = "\\Uparrow", h = "‖", m = "\\Downarrow") : l.contains(sr, e) ? h = "∣" : l.contains(lr, e) ? h = "∥" : "[" === e || "\\lbrack" === e ? (o = "⎡", h = "⎢", m = "⎣", c = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (o = "⎤", h = "⎥", m = "⎦", c = "Size4-Regular") : "\\lfloor" === e || "⌊" === e ? (h = o = "⎢", m = "⎣", c = "Size4-Regular") : "\\lceil" === e || "⌈" === e ? (o = "⎡", h = m = "⎢", c = "Size4-Regular") : "\\rfloor" === e || "⌋" === e ? (h = o = "⎥", m = "⎦", c = "Size4-Regular") : "\\rceil" === e || "⌉" === e ? (o = "⎤", h = m = "⎥", c = "Size4-Regular") : "(" === e || "\\lparen" === e ? (o = "⎛", h = "⎜", m = "⎝", c = "Size4-Regular") : ")" === e || "\\rparen" === e ? (o = "⎞", h = "⎟", m = "⎠", c = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (o = "⎧", s = "⎨", m = "⎩", h = "⎪", c = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (o = "⎫", s = "⎬", m = "⎭", h = "⎪", c = "Size4-Regular") : "\\lgroup" === e || "⟮" === e ? (o = "⎧", m = "⎩", h = "⎪", c = "Size4-Regular") : "\\rgroup" === e || "⟯" === e ? (o = "⎫", m = "⎭", h = "⎪", c = "Size4-Regular") : "\\lmoustache" === e || "⎰" === e ? (o = "⎧", m = "⎭", h = "⎪", c = "Size4-Regular") : "\\rmoustache" !== e && "⎱" !== e || (o = "⎫", m = "⎩", h = "⎪", c = "Size4-Regular");
            var u = er(o, c, a),
              p = u.height + u.depth,
              d = er(h, c, a),
              f = d.height + d.depth,
              g = er(m, c, a),
              v = g.height + g.depth,
              b = 0,
              x = 1;
            if (null !== s) {
              var w = er(s, c, a);
              b = w.height + w.depth, x = 2
            }
            var k = p + v + b,
              S = k + Math.max(0, Math.ceil((t - k) / (x * f))) * x * f,
              M = n.fontMetrics().axisHeight;
            r && (M *= n.sizeMultiplier);
            var z = S / 2 - M,
              A = [];
            if (A.push(ar(m, c, a)), A.push(or), null === s) {
              var T = S - p - v + .016;
              A.push(ir(h, T, n))
            } else {
              var B = (S - p - v - b) / 2 + .016;
              A.push(ir(h, B, n)), A.push(or), A.push(ar(s, c, a)), A.push(or), A.push(ir(h, B, n))
            }
            A.push(or), A.push(ar(o, c, a));
            var N = n.havingBaseStyle(y.TEXT),
              q = $e.makeVList({
                positionType: "bottom",
                positionData: z,
                children: A
              }, N);
            return tr($e.makeSpan(["delimsizing", "mult"], [q], N), y.TEXT, n, i)
          },
          mr = .08,
          cr = function(e, t, r, n, a) {
            var i = function(e, t, r) {
                t *= 1e3;
                var n = "";
                switch (e) {
                  case "sqrtMain":
                    n = function(e, t) {
                      return "M95," + (622 + e + t) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + e / 2.075 + " -" + e + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + e) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                    }(t, k);
                    break;
                  case "sqrtSize1":
                    n = function(e, t) {
                      return "M263," + (601 + e + t) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + e / 2.084 + " -" + e + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + e) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                    }(t, k);
                    break;
                  case "sqrtSize2":
                    n = function(e, t) {
                      return "M983 " + (10 + e + t) + "\nl" + e / 3.13 + " -" + e + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + e) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                    }(t, k);
                    break;
                  case "sqrtSize3":
                    n = function(e, t) {
                      return "M424," + (2398 + e + t) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + e / 4.223 + " -" + e + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + e) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + e) + " " + t + "\nh400000v" + (40 + e) + "h-400000z"
                    }(t, k);
                    break;
                  case "sqrtSize4":
                    n = function(e, t) {
                      return "M473," + (2713 + e + t) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + e / 5.298 + " -" + e + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + e) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z"
                    }(t, k);
                    break;
                  case "sqrtTall":
                    n = function(e, t, r) {
                      return "M702 " + (e + t) + "H400000" + (40 + e) + "\nH742v" + (r - 54 - t - e) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + t + "H400000v" + (40 + e) + "H742z"
                    }(t, k, r)
                }
                return n
              }(e, n, r),
              o = new E(e, i),
              s = new O([o], {
                width: "400em",
                height: t + "em",
                viewBox: "0 0 400000 " + r,
                preserveAspectRatio: "xMinYMin slice"
              });
            return $e.makeSvgSpan(["hide-tail"], [s], a)
          },
          ur = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"],
          pr = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"],
          dr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
          fr = [0, 1.2, 1.8, 2.4, 3],
          gr = [{
            type: "small",
            style: y.SCRIPTSCRIPT
          }, {
            type: "small",
            style: y.SCRIPT
          }, {
            type: "small",
            style: y.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }],
          vr = [{
            type: "small",
            style: y.SCRIPTSCRIPT
          }, {
            type: "small",
            style: y.SCRIPT
          }, {
            type: "small",
            style: y.TEXT
          }, {
            type: "stack"
          }],
          yr = [{
            type: "small",
            style: y.SCRIPTSCRIPT
          }, {
            type: "small",
            style: y.SCRIPT
          }, {
            type: "small",
            style: y.TEXT
          }, {
            type: "large",
            size: 1
          }, {
            type: "large",
            size: 2
          }, {
            type: "large",
            size: 3
          }, {
            type: "large",
            size: 4
          }, {
            type: "stack"
          }],
          br = function(e) {
            if ("small" === e.type) return "Main-Regular";
            if ("large" === e.type) return "Size" + e.size + "-Regular";
            if ("stack" === e.type) return "Size4-Regular";
            throw new Error("Add support for delim type '" + e.type + "' here.")
          },
          xr = function(e, t, r, n) {
            for (var a = Math.min(2, 3 - n.style.size); a < r.length && "stack" !== r[a].type; a++) {
              var i = er(e, br(r[a]), "math"),
                o = i.height + i.depth;
              if ("small" === r[a].type && (o *= n.havingBaseStyle(r[a].style).sizeMultiplier), o > t) return r[a]
            }
            return r[r.length - 1]
          },
          wr = function(e, t, r, n, a, i) {
            var o;
            "<" === e || "\\lt" === e || "⟨" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "⟩" !== e || (e = "\\rangle"), o = l.contains(dr, e) ? gr : l.contains(ur, e) ? yr : vr;
            var s = xr(e, t, o, n);
            return "small" === s.type ? function(e, t, r, n, a, i) {
              var o = $e.makeSymbol(e, "Main-Regular", a, n),
                s = tr(o, t, n, i);
              return r && rr(s, n, t), s
            }(e, s.style, r, n, a, i) : "large" === s.type ? nr(e, s.size, r, n, a, i) : hr(e, t, r, n, a, i)
          },
          kr = function(e, t) {
            var r, n, a = t.havingBaseSizing(),
              i = xr("\\surd", e * a.sizeMultiplier, yr, a),
              o = a.sizeMultiplier,
              s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
              l = 0,
              h = 0,
              m = 0;
            return "small" === i.type ? (e < 1 ? o = 1 : e < 1.4 && (o = .7), h = (1 + s) / o, (r = cr("sqrtMain", l = (1 + s + mr) / o, m = 1e3 + 1e3 * s + 80, s, t)).style.minWidth = "0.853em", n = .833 / o) : "large" === i.type ? (m = 1080 * fr[i.size], h = (fr[i.size] + s) / o, l = (fr[i.size] + s + mr) / o, (r = cr("sqrtSize" + i.size, l, m, s, t)).style.minWidth = "1.02em", n = 1 / o) : (l = e + s + mr, h = e + s, m = Math.floor(1e3 * e + s) + 80, (r = cr("sqrtTall", l, m, s, t)).style.minWidth = "0.742em", n = 1.056), r.height = h, r.style.height = l + "em", {
              span: r,
              advanceWidth: n,
              ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * o
            }
          },
          Sr = function(e, t, r, a, i) {
            if ("<" === e || "\\lt" === e || "⟨" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "⟩" !== e || (e = "\\rangle"), l.contains(ur, e) || l.contains(dr, e)) return nr(e, t, !1, r, a, i);
            if (l.contains(pr, e)) return hr(e, fr[t], !1, r, a, i);
            throw new n("Illegal delimiter: '" + e + "'")
          },
          Mr = fr,
          zr = wr,
          Ar = function(e, t, r, n, a, i) {
            var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
              s = 5 / n.fontMetrics().ptPerEm,
              l = Math.max(t - o, r + o),
              h = Math.max(l / 500 * 901, 2 * l - s);
            return wr(e, h, !0, n, a, i)
          },
          Tr = {
            "\\bigl": {
              mclass: "mopen",
              size: 1
            },
            "\\Bigl": {
              mclass: "mopen",
              size: 2
            },
            "\\biggl": {
              mclass: "mopen",
              size: 3
            },
            "\\Biggl": {
              mclass: "mopen",
              size: 4
            },
            "\\bigr": {
              mclass: "mclose",
              size: 1
            },
            "\\Bigr": {
              mclass: "mclose",
              size: 2
            },
            "\\biggr": {
              mclass: "mclose",
              size: 3
            },
            "\\Biggr": {
              mclass: "mclose",
              size: 4
            },
            "\\bigm": {
              mclass: "mrel",
              size: 1
            },
            "\\Bigm": {
              mclass: "mrel",
              size: 2
            },
            "\\biggm": {
              mclass: "mrel",
              size: 3
            },
            "\\Biggm": {
              mclass: "mrel",
              size: 4
            },
            "\\big": {
              mclass: "mord",
              size: 1
            },
            "\\Big": {
              mclass: "mord",
              size: 2
            },
            "\\bigg": {
              mclass: "mord",
              size: 3
            },
            "\\Bigg": {
              mclass: "mord",
              size: 4
            }
          },
          Br = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

        function Nr(e, t) {
          var r = Vt(e);
          if (r && l.contains(Br, r.text)) return r;
          throw new n(r ? "Invalid delimiter '" + r.text + "' after '" + t.funcName + "'" : "Invalid delimiter type '" + e.type + "'", e)
        }

        function qr(e) {
          if (!e.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
        }
        nt({
          type: "delimsizing",
          names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
          props: {
            numArgs: 1,
            argTypes: ["primitive"]
          },
          handler: function(e, t) {
            var r = Nr(t[0], e);
            return {
              type: "delimsizing",
              mode: e.parser.mode,
              size: Tr[e.funcName].size,
              mclass: Tr[e.funcName].mclass,
              delim: r.text
            }
          },
          htmlBuilder: function(e, t) {
            return "." === e.delim ? $e.makeSpan([e.mclass]) : Sr(e.delim, e.size, t, e.mode, [e.mclass])
          },
          mathmlBuilder: function(e) {
            var t = [];
            "." !== e.delim && t.push(zt(e.delim, e.mode));
            var r = new Mt.MathNode("mo", t);
            return "mopen" === e.mclass || "mclose" === e.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true"), r.setAttribute("minsize", Mr[e.size] + "em"), r.setAttribute("maxsize", Mr[e.size] + "em"), r
          }
        }), nt({
          type: "leftright-right",
          names: ["\\right"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: function(e, t) {
            var r = e.parser.gullet.macros.get("\\current@color");
            if (r && "string" != typeof r) throw new n("\\current@color set to non-string in \\right");
            return {
              type: "leftright-right",
              mode: e.parser.mode,
              delim: Nr(t[0], e).text,
              color: r
            }
          }
        }), nt({
          type: "leftright",
          names: ["\\left"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: function(e, t) {
            var r = Nr(t[0], e),
              n = e.parser;
            ++n.leftrightDepth;
            var a = n.parseExpression(!1);
            --n.leftrightDepth, n.expect("\\right", !1);
            var i = Pt(n.parseFunction(), "leftright-right");
            return {
              type: "leftright",
              mode: n.mode,
              body: a,
              left: r.text,
              right: i.delim,
              rightColor: i.color
            }
          },
          htmlBuilder: function(e, t) {
            qr(e);
            for (var r, n, a = ut(e.body, t, !0, ["mopen", "mclose"]), i = 0, o = 0, s = !1, l = 0; l < a.length; l++) a[l].isMiddle ? s = !0 : (i = Math.max(a[l].height, i), o = Math.max(a[l].depth, o));
            if (i *= t.sizeMultiplier, o *= t.sizeMultiplier, r = "." === e.left ? vt(t, ["mopen"]) : Ar(e.left, i, o, t, e.mode, ["mopen"]), a.unshift(r), s)
              for (var h = 1; h < a.length; h++) {
                var m = a[h].isMiddle;
                m && (a[h] = Ar(m.delim, i, o, m.options, e.mode, []))
              }
            if ("." === e.right) n = vt(t, ["mclose"]);
            else {
              var c = e.rightColor ? t.withColor(e.rightColor) : t;
              n = Ar(e.right, i, o, c, e.mode, ["mclose"])
            }
            return a.push(n), $e.makeSpan(["minner"], a, t)
          },
          mathmlBuilder: function(e, t) {
            qr(e);
            var r = Bt(e.body, t);
            if ("." !== e.left) {
              var n = new Mt.MathNode("mo", [zt(e.left, e.mode)]);
              n.setAttribute("fence", "true"), r.unshift(n)
            }
            if ("." !== e.right) {
              var a = new Mt.MathNode("mo", [zt(e.right, e.mode)]);
              a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a)
            }
            return At(r)
          }
        }), nt({
          type: "middle",
          names: ["\\middle"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: function(e, t) {
            var r = Nr(t[0], e);
            if (!e.parser.leftrightDepth) throw new n("\\middle without preceding \\left", r);
            return {
              type: "middle",
              mode: e.parser.mode,
              delim: r.text
            }
          },
          htmlBuilder: function(e, t) {
            var r;
            if ("." === e.delim) r = vt(t, []);
            else {
              r = Sr(e.delim, 1, t, e.mode, []);
              var n = {
                delim: e.delim,
                options: t
              };
              r.isMiddle = n
            }
            return r
          },
          mathmlBuilder: function(e, t) {
            var r = "\\vert" === e.delim || "|" === e.delim ? zt("|", "text") : zt(e.delim, e.mode),
              n = new Mt.MathNode("mo", [r]);
            return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n
          }
        });
        var Cr = function(e, t) {
            var r, n, a, i = $e.wrapFragment(yt(e.body, t), t),
              o = e.label.substr(1),
              s = t.sizeMultiplier,
              h = 0,
              m = l.isCharacterBox(e.body);
            if ("sout" === o)(r = $e.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / s, h = -.5 * t.fontMetrics().xHeight;
            else if ("phase" === o) {
              var c = Le({
                  number: .6,
                  unit: "pt"
                }, t),
                u = Le({
                  number: .35,
                  unit: "ex"
                }, t);
              s /= t.havingBaseSizing().sizeMultiplier;
              var p = i.height + i.depth + c + u;
              i.style.paddingLeft = p / 2 + c + "em";
              var d = Math.floor(1e3 * p * s),
                f = "M400000 " + (n = d) + " H0 L" + n / 2 + " 0 l65 45 L145 " + (n - 80) + " H400000z",
                g = new O([new E("phase", f)], {
                  width: "400em",
                  height: d / 1e3 + "em",
                  viewBox: "0 0 400000 " + d,
                  preserveAspectRatio: "xMinYMin slice"
                });
              (r = $e.makeSvgSpan(["hide-tail"], [g], t)).style.height = p + "em", h = i.depth + c + u
            } else {
              /cancel/.test(o) ? m || i.classes.push("cancel-pad") : "angl" === o ? i.classes.push("anglpad") : i.classes.push("boxpad");
              var v = 0,
                y = 0,
                b = 0;
              /box/.test(o) ? (b = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), y = v = t.fontMetrics().fboxsep + ("colorbox" === o ? 0 : b)) : "angl" === o ? (v = 4 * (b = Math.max(t.fontMetrics().defaultRuleThickness, t.minRuleThickness)), y = Math.max(0, .25 - i.depth)) : y = v = m ? .2 : 0, r = Ht(i, o, v, y, t), /fbox|boxed|fcolorbox/.test(o) ? (r.style.borderStyle = "solid", r.style.borderWidth = b + "em") : "angl" === o && .049 !== b && (r.style.borderTopWidth = b + "em", r.style.borderRightWidth = b + "em"), h = i.depth + y, e.backgroundColor && (r.style.backgroundColor = e.backgroundColor, e.borderColor && (r.style.borderColor = e.borderColor))
            }
            if (e.backgroundColor) a = $e.makeVList({
              positionType: "individualShift",
              children: [{
                type: "elem",
                elem: r,
                shift: h
              }, {
                type: "elem",
                elem: i,
                shift: 0
              }]
            }, t);
            else {
              var x = /cancel|phase/.test(o) ? ["svg-align"] : [];
              a = $e.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: i,
                  shift: 0
                }, {
                  type: "elem",
                  elem: r,
                  shift: h,
                  wrapperClasses: x
                }]
              }, t)
            }
            return /cancel/.test(o) && (a.height = i.height, a.depth = i.depth), /cancel/.test(o) && !m ? $e.makeSpan(["mord", "cancel-lap"], [a], t) : $e.makeSpan(["mord"], [a], t)
          },
          Ir = function(e, t) {
            var r = 0,
              n = new Mt.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [qt(e.body, t)]);
            switch (e.label) {
              case "\\cancel":
                n.setAttribute("notation", "updiagonalstrike");
                break;
              case "\\bcancel":
                n.setAttribute("notation", "downdiagonalstrike");
                break;
              case "\\phase":
                n.setAttribute("notation", "phasorangle");
                break;
              case "\\sout":
                n.setAttribute("notation", "horizontalstrike");
                break;
              case "\\fbox":
                n.setAttribute("notation", "box");
                break;
              case "\\angl":
                n.setAttribute("notation", "actuarial");
                break;
              case "\\fcolorbox":
              case "\\colorbox":
                if (r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), "\\fcolorbox" === e.label) {
                  var a = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
                  n.setAttribute("style", "border: " + a + "em solid " + String(e.borderColor))
                }
                break;
              case "\\xcancel":
                n.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
            }
            return e.backgroundColor && n.setAttribute("mathbackground", e.backgroundColor), n
          };
        nt({
          type: "enclose",
          names: ["\\colorbox"],
          props: {
            numArgs: 2,
            allowedInText: !0,
            argTypes: ["color", "text"]
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = e.funcName,
              i = Pt(t[0], "color-token").color,
              o = t[1];
            return {
              type: "enclose",
              mode: n.mode,
              label: a,
              backgroundColor: i,
              body: o
            }
          },
          htmlBuilder: Cr,
          mathmlBuilder: Ir
        }), nt({
          type: "enclose",
          names: ["\\fcolorbox"],
          props: {
            numArgs: 3,
            allowedInText: !0,
            argTypes: ["color", "color", "text"]
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = e.funcName,
              i = Pt(t[0], "color-token").color,
              o = Pt(t[1], "color-token").color,
              s = t[2];
            return {
              type: "enclose",
              mode: n.mode,
              label: a,
              backgroundColor: o,
              borderColor: i,
              body: s
            }
          },
          htmlBuilder: Cr,
          mathmlBuilder: Ir
        }), nt({
          type: "enclose",
          names: ["\\fbox"],
          props: {
            numArgs: 1,
            argTypes: ["hbox"],
            allowedInText: !0
          },
          handler: function(e, t) {
            return {
              type: "enclose",
              mode: e.parser.mode,
              label: "\\fbox",
              body: t[0]
            }
          }
        }), nt({
          type: "enclose",
          names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\phase"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "enclose",
              mode: r.mode,
              label: n,
              body: a
            }
          },
          htmlBuilder: Cr,
          mathmlBuilder: Ir
        }), nt({
          type: "enclose",
          names: ["\\angl"],
          props: {
            numArgs: 1,
            argTypes: ["hbox"],
            allowedInText: !1
          },
          handler: function(e, t) {
            return {
              type: "enclose",
              mode: e.parser.mode,
              label: "\\angl",
              body: t[0]
            }
          }
        });
        var Rr = {};

        function Or(e) {
          for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
              type: t,
              numArgs: n.numArgs || 0,
              allowedInText: !1,
              numOptionalArgs: 0,
              handler: a
            }, l = 0; l < r.length; ++l) Rr[r[l]] = s;
          i && (tt[t] = i), o && (rt[t] = o)
        }

        function Er(e) {
          var t = [];
          e.consumeSpaces();
          for (var r = e.fetch().text;
            "\\hline" === r || "\\hdashline" === r;) e.consume(), t.push("\\hdashline" === r), e.consumeSpaces(), r = e.fetch().text;
          return t
        }
        var Hr = function(e) {
          if (!e.parser.settings.displayMode) throw new n("{" + e.envName + "} can be used only in display mode.")
        };

        function Lr(e, t, r) {
          var a = t.hskipBeforeAndAfter,
            i = t.addJot,
            o = t.cols,
            s = t.arraystretch,
            l = t.colSeparationType,
            h = t.addEqnNum,
            m = t.singleRow,
            c = t.emptySingleRow,
            u = t.maxNumCols,
            p = t.leqno;
          if (e.gullet.beginGroup(), m || e.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
            var d = e.gullet.expandMacroAsText("\\arraystretch");
            if (null == d) s = 1;
            else if (!(s = parseFloat(d)) || s < 0) throw new n("Invalid \\arraystretch: " + d)
          }
          e.gullet.beginGroup();
          var f = [],
            g = [f],
            v = [],
            y = [];
          for (y.push(Er(e));;) {
            var b = e.parseExpression(!1, m ? "\\end" : "\\\\");
            e.gullet.endGroup(), e.gullet.beginGroup(), b = {
              type: "ordgroup",
              mode: e.mode,
              body: b
            }, r && (b = {
              type: "styling",
              mode: e.mode,
              style: r,
              body: [b]
            }), f.push(b);
            var x = e.fetch().text;
            if ("&" === x) {
              if (u && f.length === u) {
                if (m || l) throw new n("Too many tab characters: &", e.nextToken);
                e.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.")
              }
              e.consume()
            } else {
              if ("\\end" === x) {
                1 === f.length && "styling" === b.type && 0 === b.body[0].body.length && (g.length > 1 || !c) && g.pop(), y.length < g.length + 1 && y.push([]);
                break
              }
              if ("\\\\" !== x) throw new n("Expected & or \\\\ or \\cr or \\end", e.nextToken);
              e.consume();
              var w = void 0;
              " " !== e.gullet.future().text && (w = e.parseSizeGroup(!0)), v.push(w ? w.value : null), y.push(Er(e)), f = [], g.push(f)
            }
          }
          return e.gullet.endGroup(), e.gullet.endGroup(), {
            type: "array",
            mode: e.mode,
            addJot: i,
            arraystretch: s,
            body: g,
            cols: o,
            rowGaps: v,
            hskipBeforeAndAfter: a,
            hLinesBeforeRow: y,
            colSeparationType: l,
            addEqnNum: h,
            leqno: p
          }
        }

        function Dr(e) {
          return "d" === e.substr(0, 1) ? "display" : "text"
        }
        var Pr = function(e, t) {
            var r, a, i = e.body.length,
              o = e.hLinesBeforeRow,
              s = 0,
              h = new Array(i),
              m = [],
              c = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
              u = 1 / t.fontMetrics().ptPerEm,
              p = 5 * u;
            e.colSeparationType && "small" === e.colSeparationType && (p = t.havingStyle(y.SCRIPT).sizeMultiplier / t.sizeMultiplier * .2778);
            var d = "CD" === e.colSeparationType ? Le({
                number: 3,
                unit: "ex"
              }, t) : 12 * u,
              f = 3 * u,
              g = e.arraystretch * d,
              v = .7 * g,
              b = .3 * g,
              x = 0;

            function w(e) {
              for (var t = 0; t < e.length; ++t) t > 0 && (x += .25), m.push({
                pos: x,
                isDashed: e[t]
              })
            }
            for (w(o[0]), r = 0; r < e.body.length; ++r) {
              var k = e.body[r],
                S = v,
                M = b;
              s < k.length && (s = k.length);
              var z = new Array(k.length);
              for (a = 0; a < k.length; ++a) {
                var A = yt(k[a], t);
                M < A.depth && (M = A.depth), S < A.height && (S = A.height), z[a] = A
              }
              var T = e.rowGaps[r],
                B = 0;
              T && (B = Le(T, t)) > 0 && (M < (B += b) && (M = B), B = 0), e.addJot && (M += f), z.height = S, z.depth = M, x += S, z.pos = x, x += M + B, h[r] = z, w(o[r + 1])
            }
            var N, q, C = x / 2 + t.fontMetrics().axisHeight,
              I = e.cols || [],
              R = [],
              O = [];
            if (e.addEqnNum)
              for (r = 0; r < i; ++r) {
                var E = h[r],
                  H = E.pos - C,
                  L = $e.makeSpan(["eqn-num"], [], t);
                L.depth = E.depth, L.height = E.height, O.push({
                  type: "elem",
                  elem: L,
                  shift: H
                })
              }
            for (a = 0, q = 0; a < s || q < I.length; ++a, ++q) {
              for (var D = I[q] || {}, P = !0;
                "separator" === D.type;) {
                if (P || ((N = $e.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", R.push(N)), "|" !== D.separator && ":" !== D.separator) throw new n("Invalid separator type: " + D.separator);
                var F = "|" === D.separator ? "solid" : "dashed",
                  V = $e.makeSpan(["vertical-separator"], [], t);
                V.style.height = x + "em", V.style.borderRightWidth = c + "em", V.style.borderRightStyle = F, V.style.margin = "0 -" + c / 2 + "em", V.style.verticalAlign = -(x - C) + "em", R.push(V), D = I[++q] || {}, P = !1
              }
              if (!(a >= s)) {
                var G = void 0;
                (a > 0 || e.hskipBeforeAndAfter) && 0 !== (G = l.deflt(D.pregap, p)) && ((N = $e.makeSpan(["arraycolsep"], [])).style.width = G + "em", R.push(N));
                var U = [];
                for (r = 0; r < i; ++r) {
                  var Y = h[r],
                    W = Y[a];
                  if (W) {
                    var X = Y.pos - C;
                    W.depth = Y.depth, W.height = Y.height, U.push({
                      type: "elem",
                      elem: W,
                      shift: X
                    })
                  }
                }
                U = $e.makeVList({
                  positionType: "individualShift",
                  children: U
                }, t), U = $e.makeSpan(["col-align-" + (D.align || "c")], [U]), R.push(U), (a < s - 1 || e.hskipBeforeAndAfter) && 0 !== (G = l.deflt(D.postgap, p)) && ((N = $e.makeSpan(["arraycolsep"], [])).style.width = G + "em", R.push(N))
              }
            }
            if (h = $e.makeSpan(["mtable"], R), m.length > 0) {
              for (var _ = $e.makeLineSpan("hline", t, c), $ = $e.makeLineSpan("hdashline", t, c), j = [{
                  type: "elem",
                  elem: h,
                  shift: 0
                }]; m.length > 0;) {
                var Z = m.pop(),
                  K = Z.pos - C;
                Z.isDashed ? j.push({
                  type: "elem",
                  elem: $,
                  shift: K
                }) : j.push({
                  type: "elem",
                  elem: _,
                  shift: K
                })
              }
              h = $e.makeVList({
                positionType: "individualShift",
                children: j
              }, t)
            }
            if (e.addEqnNum) {
              var J = $e.makeVList({
                positionType: "individualShift",
                children: O
              }, t);
              return J = $e.makeSpan(["tag"], [J], t), $e.makeFragment([h, J])
            }
            return $e.makeSpan(["mord"], [h], t)
          },
          Fr = {
            c: "center ",
            l: "left ",
            r: "right "
          },
          Vr = function(e, t) {
            for (var r = [], n = new Mt.MathNode("mtd", [], ["mtr-glue"]), a = new Mt.MathNode("mtd", [], ["mml-eqn-num"]), i = 0; i < e.body.length; i++) {
              for (var o = e.body[i], s = [], l = 0; l < o.length; l++) s.push(new Mt.MathNode("mtd", [qt(o[l], t)]));
              e.addEqnNum && (s.unshift(n), s.push(n), e.leqno ? s.unshift(a) : s.push(a)), r.push(new Mt.MathNode("mtr", s))
            }
            var h = new Mt.MathNode("mtable", r),
              m = .5 === e.arraystretch ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
            h.setAttribute("rowspacing", m.toFixed(4) + "em");
            var c = "",
              u = "";
            if (e.cols && e.cols.length > 0) {
              var p = e.cols,
                d = "",
                f = !1,
                g = 0,
                v = p.length;
              "separator" === p[0].type && (c += "top ", g = 1), "separator" === p[p.length - 1].type && (c += "bottom ", v -= 1);
              for (var y = g; y < v; y++) "align" === p[y].type ? (u += Fr[p[y].align], f && (d += "none "), f = !0) : "separator" === p[y].type && f && (d += "|" === p[y].separator ? "solid " : "dashed ", f = !1);
              h.setAttribute("columnalign", u.trim()), /[sd]/.test(d) && h.setAttribute("columnlines", d.trim())
            }
            if ("align" === e.colSeparationType) {
              for (var b = e.cols || [], x = "", w = 1; w < b.length; w++) x += w % 2 ? "0em " : "1em ";
              h.setAttribute("columnspacing", x.trim())
            } else "alignat" === e.colSeparationType || "gather" === e.colSeparationType ? h.setAttribute("columnspacing", "0em") : "small" === e.colSeparationType ? h.setAttribute("columnspacing", "0.2778em") : "CD" === e.colSeparationType ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
            var k = "",
              S = e.hLinesBeforeRow;
            c += S[0].length > 0 ? "left " : "", c += S[S.length - 1].length > 0 ? "right " : "";
            for (var M = 1; M < S.length - 1; M++) k += 0 === S[M].length ? "none " : S[M][0] ? "dashed " : "solid ";
            return /[sd]/.test(k) && h.setAttribute("rowlines", k.trim()), "" !== c && (h = new Mt.MathNode("menclose", [h])).setAttribute("notation", c.trim()), e.arraystretch && e.arraystretch < 1 && (h = new Mt.MathNode("mstyle", [h])).setAttribute("scriptlevel", "1"), h
          },
          Gr = function(e, t) {
            -1 === e.envName.indexOf("ed") && Hr(e);
            var r, a = [],
              i = e.envName.indexOf("at") > -1 ? "alignat" : "align",
              o = Lr(e.parser, {
                cols: a,
                addJot: !0,
                addEqnNum: "align" === e.envName || "alignat" === e.envName,
                emptySingleRow: !0,
                colSeparationType: i,
                maxNumCols: "split" === e.envName ? 2 : void 0,
                leqno: e.parser.settings.leqno
              }, "display"),
              s = 0,
              l = {
                type: "ordgroup",
                mode: e.mode,
                body: []
              };
            if (t[0] && "ordgroup" === t[0].type) {
              for (var h = "", m = 0; m < t[0].body.length; m++) h += Pt(t[0].body[m], "textord").text;
              r = Number(h), s = 2 * r
            }
            var c = !s;
            o.body.forEach((function(e) {
              for (var t = 1; t < e.length; t += 2) {
                var a = Pt(e[t], "styling");
                Pt(a.body[0], "ordgroup").body.unshift(l)
              }
              if (c) s < e.length && (s = e.length);
              else {
                var i = e.length / 2;
                if (r < i) throw new n("Too many math in a row: expected " + r + ", but got " + i, e[0])
              }
            }));
            for (var u = 0; u < s; ++u) {
              var p = "r",
                d = 0;
              u % 2 == 1 ? p = "l" : u > 0 && c && (d = 1), a[u] = {
                type: "align",
                align: p,
                pregap: d,
                postgap: 0
              }
            }
            return o.colSeparationType = c ? "align" : "alignat", o
          };
        Or({
          type: "array",
          names: ["array", "darray"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = (Vt(t[0]) ? [t[0]] : Pt(t[0], "ordgroup").body).map((function(e) {
                var t = Ft(e).text;
                if (-1 !== "lcr".indexOf(t)) return {
                  type: "align",
                  align: t
                };
                if ("|" === t) return {
                  type: "separator",
                  separator: "|"
                };
                if (":" === t) return {
                  type: "separator",
                  separator: ":"
                };
                throw new n("Unknown column alignment: " + t, e)
              })),
              a = {
                cols: r,
                hskipBeforeAndAfter: !0,
                maxNumCols: r.length
              };
            return Lr(e.parser, a, Dr(e.envName))
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = {
                matrix: null,
                pmatrix: ["(", ")"],
                bmatrix: ["[", "]"],
                Bmatrix: ["\\{", "\\}"],
                vmatrix: ["|", "|"],
                Vmatrix: ["\\Vert", "\\Vert"]
              } [e.envName.replace("*", "")],
              r = "c",
              a = {
                hskipBeforeAndAfter: !1,
                cols: [{
                  type: "align",
                  align: r
                }]
              };
            if ("*" === e.envName.charAt(e.envName.length - 1)) {
              var i = e.parser;
              if (i.consumeSpaces(), "[" === i.fetch().text) {
                if (i.consume(), i.consumeSpaces(), r = i.fetch().text, -1 === "lcr".indexOf(r)) throw new n("Expected l or c or r", i.nextToken);
                i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), a.cols = [{
                  type: "align",
                  align: r
                }]
              }
            }
            var o = Lr(e.parser, a, Dr(e.envName)),
              s = Math.max.apply(Math, [0].concat(o.body.map((function(e) {
                return e.length
              }))));
            return o.cols = new Array(s).fill({
              type: "align",
              align: r
            }), t ? {
              type: "leftright",
              mode: e.mode,
              body: [o],
              left: t[0],
              right: t[1],
              rightColor: void 0
            } : o
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["smallmatrix"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = Lr(e.parser, {
              arraystretch: .5
            }, "script");
            return t.colSeparationType = "small", t
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["subarray"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = (Vt(t[0]) ? [t[0]] : Pt(t[0], "ordgroup").body).map((function(e) {
              var t = Ft(e).text;
              if (-1 !== "lc".indexOf(t)) return {
                type: "align",
                align: t
              };
              throw new n("Unknown column alignment: " + t, e)
            }));
            if (r.length > 1) throw new n("{subarray} can contain only one column");
            var a = {
              cols: r,
              hskipBeforeAndAfter: !1,
              arraystretch: .5
            };
            if ((a = Lr(e.parser, a, "script")).body.length > 0 && a.body[0].length > 1) throw new n("{subarray} can contain only one column");
            return a
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["cases", "dcases", "rcases", "drcases"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = Lr(e.parser, {
              arraystretch: 1.2,
              cols: [{
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 1
              }, {
                type: "align",
                align: "l",
                pregap: 0,
                postgap: 0
              }]
            }, Dr(e.envName));
            return {
              type: "leftright",
              mode: e.mode,
              body: [t],
              left: e.envName.indexOf("r") > -1 ? "." : "\\{",
              right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
              rightColor: void 0
            }
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["align", "align*", "aligned", "split"],
          props: {
            numArgs: 0
          },
          handler: Gr,
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["gathered", "gather", "gather*"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            l.contains(["gather", "gather*"], e.envName) && Hr(e);
            var t = {
              cols: [{
                type: "align",
                align: "c"
              }],
              addJot: !0,
              colSeparationType: "gather",
              addEqnNum: "gather" === e.envName,
              emptySingleRow: !0,
              leqno: e.parser.settings.leqno
            };
            return Lr(e.parser, t, "display")
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["alignat", "alignat*", "alignedat"],
          props: {
            numArgs: 1
          },
          handler: Gr,
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["equation", "equation*"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            Hr(e);
            var t = {
              addEqnNum: "equation" === e.envName,
              emptySingleRow: !0,
              singleRow: !0,
              maxNumCols: 1,
              leqno: e.parser.settings.leqno
            };
            return Lr(e.parser, t, "display")
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), Or({
          type: "array",
          names: ["CD"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            return Hr(e),
              function(e) {
                var t = [];
                for (e.gullet.beginGroup(), e.gullet.macros.set("\\cr", "\\\\\\relax"), e.gullet.beginGroup();;) {
                  t.push(e.parseExpression(!1, "\\\\")), e.gullet.endGroup(), e.gullet.beginGroup();
                  var r = e.fetch().text;
                  if ("&" !== r && "\\\\" !== r) {
                    if ("\\end" === r) {
                      0 === t[t.length - 1].length && t.pop();
                      break
                    }
                    throw new n("Expected \\\\ or \\cr or \\end", e.nextToken)
                  }
                  e.consume()
                }
                for (var a, i, o = [], s = [o], l = 0; l < t.length; l++) {
                  for (var h = t[l], m = {
                      type: "styling",
                      body: [],
                      mode: "math",
                      style: "display"
                    }, c = 0; c < h.length; c++)
                    if (_t(h[c])) {
                      o.push(m);
                      var u = Ft(h[c += 1]).text,
                        p = new Array(2);
                      if (p[0] = {
                          type: "ordgroup",
                          mode: "math",
                          body: []
                        }, p[1] = {
                          type: "ordgroup",
                          mode: "math",
                          body: []
                        }, "=|.".indexOf(u) > -1);
                      else {
                        if (!("<>AV".indexOf(u) > -1)) throw new n('Expected one of "<>AV=|." after @', h[c]);
                        for (var d = 0; d < 2; d++) {
                          for (var f = !0, g = c + 1; g < h.length; g++) {
                            if (i = u, ("mathord" === (a = h[g]).type || "atom" === a.type) && a.text === i) {
                              f = !1, c = g;
                              break
                            }
                            if (_t(h[g])) throw new n("Missing a " + u + " character to complete a CD arrow.", h[g]);
                            p[d].body.push(h[g])
                          }
                          if (f) throw new n("Missing a " + u + " character to complete a CD arrow.", h[c])
                        }
                      }
                      var v = {
                        type: "styling",
                        body: [$t(u, p, e)],
                        mode: "math",
                        style: "display"
                      };
                      o.push(v), m = {
                        type: "styling",
                        body: [],
                        mode: "math",
                        style: "display"
                      }
                    } else m.body.push(h[c]);
                  l % 2 == 0 ? o.push(m) : o.shift(), o = [], s.push(o)
                }
                return e.gullet.endGroup(), e.gullet.endGroup(), {
                  type: "array",
                  mode: "math",
                  body: s,
                  arraystretch: 1,
                  addJot: !0,
                  rowGaps: [null],
                  cols: new Array(s[0].length).fill({
                    type: "align",
                    align: "c",
                    pregap: .25,
                    postgap: .25
                  }),
                  colSeparationType: "CD",
                  hLinesBeforeRow: new Array(s.length + 1).fill([])
                }
              }(e.parser)
          },
          htmlBuilder: Pr,
          mathmlBuilder: Vr
        }), nt({
          type: "text",
          names: ["\\hline", "\\hdashline"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !0
          },
          handler: function(e, t) {
            throw new n(e.funcName + " valid only within array environment")
          }
        });
        var Ur = Rr;
        nt({
          type: "environment",
          names: ["\\begin", "\\end"],
          props: {
            numArgs: 1,
            argTypes: ["text"]
          },
          handler: function(e, t) {
            var r = e.parser,
              a = e.funcName,
              i = t[0];
            if ("ordgroup" !== i.type) throw new n("Invalid environment name", i);
            for (var o = "", s = 0; s < i.body.length; ++s) o += Pt(i.body[s], "textord").text;
            if ("\\begin" === a) {
              if (!Ur.hasOwnProperty(o)) throw new n("No such environment: " + o, i);
              var l = Ur[o],
                h = r.parseArguments("\\begin{" + o + "}", l),
                m = h.args,
                c = h.optArgs,
                u = {
                  mode: r.mode,
                  envName: o,
                  parser: r
                },
                p = l.handler(u, m, c);
              r.expect("\\end", !1);
              var d = r.nextToken,
                f = Pt(r.parseFunction(), "environment");
              if (f.name !== o) throw new n("Mismatch: \\begin{" + o + "} matched by \\end{" + f.name + "}", d);
              return p
            }
            return {
              type: "environment",
              mode: r.mode,
              name: o,
              nameGroup: i
            }
          }
        });
        var Yr = $e.makeSpan;

        function Wr(e, t) {
          var r = ut(e.body, t, !0);
          return Yr([e.mclass], r, t)
        }

        function Xr(e, t) {
          var r, n = Bt(e.body, t);
          return "minner" === e.mclass ? Mt.newDocumentFragment(n) : ("mord" === e.mclass ? e.isCharacterBox ? (r = n[0]).type = "mi" : r = new Mt.MathNode("mi", n) : (e.isCharacterBox ? (r = n[0]).type = "mo" : r = new Mt.MathNode("mo", n), "mbin" === e.mclass ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : "mpunct" === e.mclass ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : "mopen" !== e.mclass && "mclose" !== e.mclass || (r.attributes.lspace = "0em", r.attributes.rspace = "0em")), r)
        }
        nt({
          type: "mclass",
          names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "mclass",
              mode: r.mode,
              mclass: "m" + n.substr(5),
              body: ot(a),
              isCharacterBox: l.isCharacterBox(a)
            }
          },
          htmlBuilder: Wr,
          mathmlBuilder: Xr
        });
        var _r = function(e) {
          var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e;
          return "atom" !== t.type || "bin" !== t.family && "rel" !== t.family ? "mord" : "m" + t.family
        };
        nt({
          type: "mclass",
          names: ["\\@binrel"],
          props: {
            numArgs: 2
          },
          handler: function(e, t) {
            return {
              type: "mclass",
              mode: e.parser.mode,
              mclass: _r(t[0]),
              body: ot(t[1]),
              isCharacterBox: l.isCharacterBox(t[1])
            }
          }
        }), nt({
          type: "mclass",
          names: ["\\stackrel", "\\overset", "\\underset"],
          props: {
            numArgs: 2
          },
          handler: function(e, t) {
            var r, n = e.parser,
              a = e.funcName,
              i = t[1],
              o = t[0];
            r = "\\stackrel" !== a ? _r(i) : "mrel";
            var s = {
                type: "op",
                mode: i.mode,
                limits: !0,
                alwaysHandleSupSub: !0,
                parentIsSupSub: !1,
                symbol: !1,
                suppressBaseShift: "\\stackrel" !== a,
                body: ot(i)
              },
              h = {
                type: "supsub",
                mode: o.mode,
                base: s,
                sup: "\\underset" === a ? null : o,
                sub: "\\underset" === a ? o : null
              };
            return {
              type: "mclass",
              mode: n.mode,
              mclass: r,
              body: [h],
              isCharacterBox: l.isCharacterBox(h)
            }
          },
          htmlBuilder: Wr,
          mathmlBuilder: Xr
        });
        var $r = function(e, t) {
            var r = e.font,
              n = t.withFont(r);
            return yt(e.body, n)
          },
          jr = function(e, t) {
            var r = e.font,
              n = t.withFont(r);
            return qt(e.body, n)
          },
          Zr = {
            "\\Bbb": "\\mathbb",
            "\\bold": "\\mathbf",
            "\\frak": "\\mathfrak",
            "\\bm": "\\boldsymbol"
          };
        nt({
          type: "font",
          names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
          props: {
            numArgs: 1,
            allowedInArgument: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = it(t[0]),
              i = n;
            return i in Zr && (i = Zr[i]), {
              type: "font",
              mode: r.mode,
              font: i.slice(1),
              body: a
            }
          },
          htmlBuilder: $r,
          mathmlBuilder: jr
        }), nt({
          type: "mclass",
          names: ["\\boldsymbol", "\\bm"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0],
              a = l.isCharacterBox(n);
            return {
              type: "mclass",
              mode: r.mode,
              mclass: _r(n),
              body: [{
                type: "font",
                mode: r.mode,
                font: "boldsymbol",
                body: n
              }],
              isCharacterBox: a
            }
          }
        }), nt({
          type: "font",
          names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = e.breakOnTokenText,
              i = r.mode,
              o = r.parseExpression(!0, a);
            return {
              type: "font",
              mode: i,
              font: "math" + n.slice(1),
              body: {
                type: "ordgroup",
                mode: r.mode,
                body: o
              }
            }
          },
          htmlBuilder: $r,
          mathmlBuilder: jr
        });
        var Kr = function(e, t) {
            var r = t;
            return "display" === e ? r = r.id >= y.SCRIPT.id ? r.text() : y.DISPLAY : "text" === e && r.size === y.DISPLAY.size ? r = y.TEXT : "script" === e ? r = y.SCRIPT : "scriptscript" === e && (r = y.SCRIPTSCRIPT), r
          },
          Jr = function(e, t) {
            var r, n = Kr(e.size, t.style),
              a = n.fracNum(),
              i = n.fracDen();
            r = t.havingStyle(a);
            var o = yt(e.numer, r, t);
            if (e.continued) {
              var s = 8.5 / t.fontMetrics().ptPerEm,
                l = 3.5 / t.fontMetrics().ptPerEm;
              o.height = o.height < s ? s : o.height, o.depth = o.depth < l ? l : o.depth
            }
            r = t.havingStyle(i);
            var h, m, c, u, p, d, f, g, v, b, x = yt(e.denom, r, t);
            if (e.hasBarLine ? (e.barSize ? (m = Le(e.barSize, t), h = $e.makeLineSpan("frac-line", t, m)) : h = $e.makeLineSpan("frac-line", t), m = h.height, c = h.height) : (h = null, m = 0, c = t.fontMetrics().defaultRuleThickness), n.size === y.DISPLAY.size || "display" === e.size ? (u = t.fontMetrics().num1, p = m > 0 ? 3 * c : 7 * c, d = t.fontMetrics().denom1) : (m > 0 ? (u = t.fontMetrics().num2, p = c) : (u = t.fontMetrics().num3, p = 3 * c), d = t.fontMetrics().denom2), h) {
              var w = t.fontMetrics().axisHeight;
              u - o.depth - (w + .5 * m) < p && (u += p - (u - o.depth - (w + .5 * m))), w - .5 * m - (x.height - d) < p && (d += p - (w - .5 * m - (x.height - d)));
              var k = -(w - .5 * m);
              f = $e.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: x,
                  shift: d
                }, {
                  type: "elem",
                  elem: h,
                  shift: k
                }, {
                  type: "elem",
                  elem: o,
                  shift: -u
                }]
              }, t)
            } else {
              var S = u - o.depth - (x.height - d);
              S < p && (u += .5 * (p - S), d += .5 * (p - S)), f = $e.makeVList({
                positionType: "individualShift",
                children: [{
                  type: "elem",
                  elem: x,
                  shift: d
                }, {
                  type: "elem",
                  elem: o,
                  shift: -u
                }]
              }, t)
            }
            return r = t.havingStyle(n), f.height *= r.sizeMultiplier / t.sizeMultiplier, f.depth *= r.sizeMultiplier / t.sizeMultiplier, g = n.size === y.DISPLAY.size ? t.fontMetrics().delim1 : n.size === y.SCRIPTSCRIPT.size ? t.havingStyle(y.SCRIPT).fontMetrics().delim2 : t.fontMetrics().delim2, v = null == e.leftDelim ? vt(t, ["mopen"]) : zr(e.leftDelim, g, !0, t.havingStyle(n), e.mode, ["mopen"]), b = e.continued ? $e.makeSpan([]) : null == e.rightDelim ? vt(t, ["mclose"]) : zr(e.rightDelim, g, !0, t.havingStyle(n), e.mode, ["mclose"]), $e.makeSpan(["mord"].concat(r.sizingClasses(t)), [v, $e.makeSpan(["mfrac"], [f]), b], t)
          },
          Qr = function(e, t) {
            var r = new Mt.MathNode("mfrac", [qt(e.numer, t), qt(e.denom, t)]);
            if (e.hasBarLine) {
              if (e.barSize) {
                var n = Le(e.barSize, t);
                r.setAttribute("linethickness", n + "em")
              }
            } else r.setAttribute("linethickness", "0px");
            var a = Kr(e.size, t.style);
            if (a.size !== t.style.size) {
              r = new Mt.MathNode("mstyle", [r]);
              var i = a.size === y.DISPLAY.size ? "true" : "false";
              r.setAttribute("displaystyle", i), r.setAttribute("scriptlevel", "0")
            }
            if (null != e.leftDelim || null != e.rightDelim) {
              var o = [];
              if (null != e.leftDelim) {
                var s = new Mt.MathNode("mo", [new Mt.TextNode(e.leftDelim.replace("\\", ""))]);
                s.setAttribute("fence", "true"), o.push(s)
              }
              if (o.push(r), null != e.rightDelim) {
                var l = new Mt.MathNode("mo", [new Mt.TextNode(e.rightDelim.replace("\\", ""))]);
                l.setAttribute("fence", "true"), o.push(l)
              }
              return At(o)
            }
            return r
          };
        nt({
          type: "genfrac",
          names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
          props: {
            numArgs: 2,
            allowedInArgument: !0
          },
          handler: function(e, t) {
            var r, n = e.parser,
              a = e.funcName,
              i = t[0],
              o = t[1],
              s = null,
              l = null,
              h = "auto";
            switch (a) {
              case "\\dfrac":
              case "\\frac":
              case "\\tfrac":
                r = !0;
                break;
              case "\\\\atopfrac":
                r = !1;
                break;
              case "\\dbinom":
              case "\\binom":
              case "\\tbinom":
                r = !1, s = "(", l = ")";
                break;
              case "\\\\bracefrac":
                r = !1, s = "\\{", l = "\\}";
                break;
              case "\\\\brackfrac":
                r = !1, s = "[", l = "]";
                break;
              default:
                throw new Error("Unrecognized genfrac command")
            }
            switch (a) {
              case "\\dfrac":
              case "\\dbinom":
                h = "display";
                break;
              case "\\tfrac":
              case "\\tbinom":
                h = "text"
            }
            return {
              type: "genfrac",
              mode: n.mode,
              continued: !1,
              numer: i,
              denom: o,
              hasBarLine: r,
              leftDelim: s,
              rightDelim: l,
              size: h,
              barSize: null
            }
          },
          htmlBuilder: Jr,
          mathmlBuilder: Qr
        }), nt({
          type: "genfrac",
          names: ["\\cfrac"],
          props: {
            numArgs: 2
          },
          handler: function(e, t) {
            var r = e.parser;
            e.funcName;
            var n = t[0],
              a = t[1];
            return {
              type: "genfrac",
              mode: r.mode,
              continued: !0,
              numer: n,
              denom: a,
              hasBarLine: !0,
              leftDelim: null,
              rightDelim: null,
              size: "display",
              barSize: null
            }
          }
        }), nt({
          type: "infix",
          names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
          props: {
            numArgs: 0,
            infix: !0
          },
          handler: function(e) {
            var t, r = e.parser,
              n = e.funcName,
              a = e.token;
            switch (n) {
              case "\\over":
                t = "\\frac";
                break;
              case "\\choose":
                t = "\\binom";
                break;
              case "\\atop":
                t = "\\\\atopfrac";
                break;
              case "\\brace":
                t = "\\\\bracefrac";
                break;
              case "\\brack":
                t = "\\\\brackfrac";
                break;
              default:
                throw new Error("Unrecognized infix genfrac command")
            }
            return {
              type: "infix",
              mode: r.mode,
              replaceWith: t,
              token: a
            }
          }
        });
        var en = ["display", "text", "script", "scriptscript"],
          tn = function(e) {
            var t = null;
            return e.length > 0 && (t = "." === (t = e) ? null : t), t
          };
        nt({
          type: "genfrac",
          names: ["\\genfrac"],
          props: {
            numArgs: 6,
            allowedInArgument: !0,
            argTypes: ["math", "math", "size", "text", "math", "math"]
          },
          handler: function(e, t) {
            var r, n = e.parser,
              a = t[4],
              i = t[5],
              o = it(t[0]),
              s = "atom" === o.type && "open" === o.family ? tn(o.text) : null,
              l = it(t[1]),
              h = "atom" === l.type && "close" === l.family ? tn(l.text) : null,
              m = Pt(t[2], "size"),
              c = null;
            r = !!m.isBlank || (c = m.value).number > 0;
            var u = "auto",
              p = t[3];
            if ("ordgroup" === p.type) {
              if (p.body.length > 0) {
                var d = Pt(p.body[0], "textord");
                u = en[Number(d.text)]
              }
            } else p = Pt(p, "textord"), u = en[Number(p.text)];
            return {
              type: "genfrac",
              mode: n.mode,
              numer: a,
              denom: i,
              continued: !1,
              hasBarLine: r,
              barSize: c,
              leftDelim: s,
              rightDelim: h,
              size: u
            }
          },
          htmlBuilder: Jr,
          mathmlBuilder: Qr
        }), nt({
          type: "infix",
          names: ["\\above"],
          props: {
            numArgs: 1,
            argTypes: ["size"],
            infix: !0
          },
          handler: function(e, t) {
            var r = e.parser;
            e.funcName;
            var n = e.token;
            return {
              type: "infix",
              mode: r.mode,
              replaceWith: "\\\\abovefrac",
              size: Pt(t[0], "size").value,
              token: n
            }
          }
        }), nt({
          type: "genfrac",
          names: ["\\\\abovefrac"],
          props: {
            numArgs: 3,
            argTypes: ["math", "size", "math"]
          },
          handler: function(e, t) {
            var r = e.parser;
            e.funcName;
            var n = t[0],
              a = function(e) {
                if (!e) throw new Error("Expected non-null, but got " + String(e));
                return e
              }(Pt(t[1], "infix").size),
              i = t[2],
              o = a.number > 0;
            return {
              type: "genfrac",
              mode: r.mode,
              numer: n,
              denom: i,
              continued: !1,
              hasBarLine: o,
              barSize: a,
              leftDelim: null,
              rightDelim: null,
              size: "auto"
            }
          },
          htmlBuilder: Jr,
          mathmlBuilder: Qr
        });
        var rn = function(e, t) {
          var r, n, a = t.style;
          "supsub" === e.type ? (r = e.sup ? yt(e.sup, t.havingStyle(a.sup()), t) : yt(e.sub, t.havingStyle(a.sub()), t), n = Pt(e.base, "horizBrace")) : n = Pt(e, "horizBrace");
          var i, o = yt(n.base, t.havingBaseStyle(y.DISPLAY)),
            s = Dt(n, t);
          if (n.isOver ? (i = $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: o
              }, {
                type: "kern",
                size: .1
              }, {
                type: "elem",
                elem: s
              }]
            }, t)).children[0].children[0].children[1].classes.push("svg-align") : (i = $e.makeVList({
              positionType: "bottom",
              positionData: o.depth + .1 + s.height,
              children: [{
                type: "elem",
                elem: s
              }, {
                type: "kern",
                size: .1
              }, {
                type: "elem",
                elem: o
              }]
            }, t)).children[0].children[0].children[0].classes.push("svg-align"), r) {
            var l = $e.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t);
            i = n.isOver ? $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: l
              }, {
                type: "kern",
                size: .2
              }, {
                type: "elem",
                elem: r
              }]
            }, t) : $e.makeVList({
              positionType: "bottom",
              positionData: l.depth + .2 + r.height + r.depth,
              children: [{
                type: "elem",
                elem: r
              }, {
                type: "kern",
                size: .2
              }, {
                type: "elem",
                elem: l
              }]
            }, t)
          }
          return $e.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t)
        };
        nt({
          type: "horizBrace",
          names: ["\\overbrace", "\\underbrace"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName;
            return {
              type: "horizBrace",
              mode: r.mode,
              label: n,
              isOver: /^\\over/.test(n),
              base: t[0]
            }
          },
          htmlBuilder: rn,
          mathmlBuilder: function(e, t) {
            var r = Lt(e.label);
            return new Mt.MathNode(e.isOver ? "mover" : "munder", [qt(e.base, t), r])
          }
        }), nt({
          type: "href",
          names: ["\\href"],
          props: {
            numArgs: 2,
            argTypes: ["url", "original"],
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[1],
              a = Pt(t[0], "url").url;
            return r.settings.isTrusted({
              command: "\\href",
              url: a
            }) ? {
              type: "href",
              mode: r.mode,
              href: a,
              body: ot(n)
            } : r.formatUnsupportedCmd("\\href")
          },
          htmlBuilder: function(e, t) {
            var r = ut(e.body, t, !1);
            return $e.makeAnchor(e.href, [], r, t)
          },
          mathmlBuilder: function(e, t) {
            var r = Nt(e.body, t);
            return r instanceof kt || (r = new kt("mrow", [r])), r.setAttribute("href", e.href), r
          }
        }), nt({
          type: "href",
          names: ["\\url"],
          props: {
            numArgs: 1,
            argTypes: ["url"],
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = Pt(t[0], "url").url;
            if (!r.settings.isTrusted({
                command: "\\url",
                url: n
              })) return r.formatUnsupportedCmd("\\url");
            for (var a = [], i = 0; i < n.length; i++) {
              var o = n[i];
              "~" === o && (o = "\\textasciitilde"), a.push({
                type: "textord",
                mode: "text",
                text: o
              })
            }
            var s = {
              type: "text",
              mode: r.mode,
              font: "\\texttt",
              body: a
            };
            return {
              type: "href",
              mode: r.mode,
              href: n,
              body: ot(s)
            }
          }
        }), nt({
          type: "hbox",
          names: ["\\hbox"],
          props: {
            numArgs: 1,
            argTypes: ["text"],
            allowedInText: !0,
            primitive: !0
          },
          handler: function(e, t) {
            return {
              type: "hbox",
              mode: e.parser.mode,
              body: ot(t[0])
            }
          },
          htmlBuilder: function(e, t) {
            var r = ut(e.body, t, !1);
            return $e.makeFragment(r)
          },
          mathmlBuilder: function(e, t) {
            return new Mt.MathNode("mrow", Bt(e.body, t))
          }
        }), nt({
          type: "html",
          names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
          props: {
            numArgs: 2,
            argTypes: ["raw", "original"],
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              a = e.funcName;
            e.token;
            var i, o = Pt(t[0], "raw").string,
              s = t[1];
            r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
            var l = {};
            switch (a) {
              case "\\htmlClass":
                l.class = o, i = {
                  command: "\\htmlClass",
                  class: o
                };
                break;
              case "\\htmlId":
                l.id = o, i = {
                  command: "\\htmlId",
                  id: o
                };
                break;
              case "\\htmlStyle":
                l.style = o, i = {
                  command: "\\htmlStyle",
                  style: o
                };
                break;
              case "\\htmlData":
                for (var h = o.split(","), m = 0; m < h.length; m++) {
                  var c = h[m].split("=");
                  if (2 !== c.length) throw new n("Error parsing key-value for \\htmlData");
                  l["data-" + c[0].trim()] = c[1].trim()
                }
                i = {
                  command: "\\htmlData",
                  attributes: l
                };
                break;
              default:
                throw new Error("Unrecognized html command")
            }
            return r.settings.isTrusted(i) ? {
              type: "html",
              mode: r.mode,
              attributes: l,
              body: ot(s)
            } : r.formatUnsupportedCmd(a)
          },
          htmlBuilder: function(e, t) {
            var r = ut(e.body, t, !1),
              n = ["enclosing"];
            e.attributes.class && n.push.apply(n, e.attributes.class.trim().split(/\s+/));
            var a = $e.makeSpan(n, r, t);
            for (var i in e.attributes) "class" !== i && e.attributes.hasOwnProperty(i) && a.setAttribute(i, e.attributes[i]);
            return a
          },
          mathmlBuilder: function(e, t) {
            return Nt(e.body, t)
          }
        }), nt({
          type: "htmlmathml",
          names: ["\\html@mathml"],
          props: {
            numArgs: 2,
            allowedInText: !0
          },
          handler: function(e, t) {
            return {
              type: "htmlmathml",
              mode: e.parser.mode,
              html: ot(t[0]),
              mathml: ot(t[1])
            }
          },
          htmlBuilder: function(e, t) {
            var r = ut(e.html, t, !1);
            return $e.makeFragment(r)
          },
          mathmlBuilder: function(e, t) {
            return Nt(e.mathml, t)
          }
        });
        var nn = function(e) {
          if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
            number: +e,
            unit: "bp"
          };
          var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
          if (!t) throw new n("Invalid size: '" + e + "' in \\includegraphics");
          var r = {
            number: +(t[1] + t[2]),
            unit: t[3]
          };
          if (!He(r)) throw new n("Invalid unit: '" + r.unit + "' in \\includegraphics.");
          return r
        };
        nt({
          type: "includegraphics",
          names: ["\\includegraphics"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1,
            argTypes: ["raw", "url"],
            allowedInText: !1
          },
          handler: function(e, t, r) {
            var a = e.parser,
              i = {
                number: 0,
                unit: "em"
              },
              o = {
                number: .9,
                unit: "em"
              },
              s = {
                number: 0,
                unit: "em"
              },
              l = "";
            if (r[0])
              for (var h = Pt(r[0], "raw").string.split(","), m = 0; m < h.length; m++) {
                var c = h[m].split("=");
                if (2 === c.length) {
                  var u = c[1].trim();
                  switch (c[0].trim()) {
                    case "alt":
                      l = u;
                      break;
                    case "width":
                      i = nn(u);
                      break;
                    case "height":
                      o = nn(u);
                      break;
                    case "totalheight":
                      s = nn(u);
                      break;
                    default:
                      throw new n("Invalid key: '" + c[0] + "' in \\includegraphics.")
                  }
                }
              }
            var p = Pt(t[0], "url").url;
            return "" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))), a.settings.isTrusted({
              command: "\\includegraphics",
              url: p
            }) ? {
              type: "includegraphics",
              mode: a.mode,
              alt: l,
              width: i,
              height: o,
              totalheight: s,
              src: p
            } : a.formatUnsupportedCmd("\\includegraphics")
          },
          htmlBuilder: function(e, t) {
            var r = Le(e.height, t),
              n = 0;
            e.totalheight.number > 0 && (n = Le(e.totalheight, t) - r, n = Number(n.toFixed(2)));
            var a = 0;
            e.width.number > 0 && (a = Le(e.width, t));
            var i = {
              height: r + n + "em"
            };
            a > 0 && (i.width = a + "em"), n > 0 && (i.verticalAlign = -n + "em");
            var o = new C(e.src, e.alt, i);
            return o.height = r, o.depth = n, o
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mglyph", []);
            r.setAttribute("alt", e.alt);
            var n = Le(e.height, t),
              a = 0;
            if (e.totalheight.number > 0 && (a = (a = Le(e.totalheight, t) - n).toFixed(2), r.setAttribute("valign", "-" + a + "em")), r.setAttribute("height", n + a + "em"), e.width.number > 0) {
              var i = Le(e.width, t);
              r.setAttribute("width", i + "em")
            }
            return r.setAttribute("src", e.src), r
          }
        }), nt({
          type: "kern",
          names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
          props: {
            numArgs: 1,
            argTypes: ["size"],
            primitive: !0,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = Pt(t[0], "size");
            if (r.settings.strict) {
              var i = "m" === n[1],
                o = "mu" === a.value.unit;
              i ? (o || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + a.value.unit + " units"), "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : o && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
            }
            return {
              type: "kern",
              mode: r.mode,
              dimension: a.value
            }
          },
          htmlBuilder: function(e, t) {
            return $e.makeGlue(e.dimension, t)
          },
          mathmlBuilder: function(e, t) {
            var r = Le(e.dimension, t);
            return new Mt.SpaceNode(r)
          }
        }), nt({
          type: "lap",
          names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "lap",
              mode: r.mode,
              alignment: n.slice(5),
              body: a
            }
          },
          htmlBuilder: function(e, t) {
            var r;
            "clap" === e.alignment ? (r = $e.makeSpan([], [yt(e.body, t)]), r = $e.makeSpan(["inner"], [r], t)) : r = $e.makeSpan(["inner"], [yt(e.body, t)]);
            var n = $e.makeSpan(["fix"], []),
              a = $e.makeSpan([e.alignment], [r, n], t),
              i = $e.makeSpan(["strut"]);
            return i.style.height = a.height + a.depth + "em", i.style.verticalAlign = -a.depth + "em", a.children.unshift(i), a = $e.makeSpan(["thinbox"], [a], t), $e.makeSpan(["mord", "vbox"], [a], t)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mpadded", [qt(e.body, t)]);
            if ("rlap" !== e.alignment) {
              var n = "llap" === e.alignment ? "-1" : "-0.5";
              r.setAttribute("lspace", n + "width")
            }
            return r.setAttribute("width", "0px"), r
          }
        }), nt({
          type: "styling",
          names: ["\\(", "$"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !1
          },
          handler: function(e, t) {
            var r = e.funcName,
              n = e.parser,
              a = n.mode;
            n.switchMode("math");
            var i = "\\(" === r ? "\\)" : "$",
              o = n.parseExpression(!1, i);
            return n.expect(i), n.switchMode(a), {
              type: "styling",
              mode: n.mode,
              style: "text",
              body: o
            }
          }
        }), nt({
          type: "text",
          names: ["\\)", "\\]"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            allowedInMath: !1
          },
          handler: function(e, t) {
            throw new n("Mismatched " + e.funcName)
          }
        });
        var an = function(e, t) {
          switch (t.style.size) {
            case y.DISPLAY.size:
              return e.display;
            case y.TEXT.size:
              return e.text;
            case y.SCRIPT.size:
              return e.script;
            case y.SCRIPTSCRIPT.size:
              return e.scriptscript;
            default:
              return e.text
          }
        };
        nt({
          type: "mathchoice",
          names: ["\\mathchoice"],
          props: {
            numArgs: 4,
            primitive: !0
          },
          handler: function(e, t) {
            return {
              type: "mathchoice",
              mode: e.parser.mode,
              display: ot(t[0]),
              text: ot(t[1]),
              script: ot(t[2]),
              scriptscript: ot(t[3])
            }
          },
          htmlBuilder: function(e, t) {
            var r = an(e, t),
              n = ut(r, t, !1);
            return $e.makeFragment(n)
          },
          mathmlBuilder: function(e, t) {
            var r = an(e, t);
            return Nt(r, t)
          }
        });
        var on = function(e, t, r, n, a, i, o) {
            e = $e.makeSpan([], [e]);
            var s, h, m, c = r && l.isCharacterBox(r);
            if (t) {
              var u = yt(t, n.havingStyle(a.sup()), n);
              h = {
                elem: u,
                kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - u.depth)
              }
            }
            if (r) {
              var p = yt(r, n.havingStyle(a.sub()), n);
              s = {
                elem: p,
                kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - p.height)
              }
            }
            if (h && s) {
              var d = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + e.depth + o;
              m = $e.makeVList({
                positionType: "bottom",
                positionData: d,
                children: [{
                  type: "kern",
                  size: n.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: s.elem,
                  marginLeft: -i + "em"
                }, {
                  type: "kern",
                  size: s.kern
                }, {
                  type: "elem",
                  elem: e
                }, {
                  type: "kern",
                  size: h.kern
                }, {
                  type: "elem",
                  elem: h.elem,
                  marginLeft: i + "em"
                }, {
                  type: "kern",
                  size: n.fontMetrics().bigOpSpacing5
                }]
              }, n)
            } else if (s) {
              var f = e.height - o;
              m = $e.makeVList({
                positionType: "top",
                positionData: f,
                children: [{
                  type: "kern",
                  size: n.fontMetrics().bigOpSpacing5
                }, {
                  type: "elem",
                  elem: s.elem,
                  marginLeft: -i + "em"
                }, {
                  type: "kern",
                  size: s.kern
                }, {
                  type: "elem",
                  elem: e
                }]
              }, n)
            } else {
              if (!h) return e;
              var g = e.depth + o;
              m = $e.makeVList({
                positionType: "bottom",
                positionData: g,
                children: [{
                  type: "elem",
                  elem: e
                }, {
                  type: "kern",
                  size: h.kern
                }, {
                  type: "elem",
                  elem: h.elem,
                  marginLeft: i + "em"
                }, {
                  type: "kern",
                  size: n.fontMetrics().bigOpSpacing5
                }]
              }, n)
            }
            var v = [m];
            if (s && 0 !== i && !c) {
              var y = $e.makeSpan(["mspace"], [], n);
              y.style.marginRight = i + "em", v.unshift(y)
            }
            return $e.makeSpan(["mop", "op-limits"], v, n)
          },
          sn = ["\\smallint"],
          ln = function(e, t) {
            var r, n, a, i = !1;
            "supsub" === e.type ? (r = e.sup, n = e.sub, a = Pt(e.base, "op"), i = !0) : a = Pt(e, "op");
            var o, s = t.style,
              h = !1;
            if (s.size === y.DISPLAY.size && a.symbol && !l.contains(sn, a.name) && (h = !0), a.symbol) {
              var m = h ? "Size2-Regular" : "Size1-Regular",
                c = "";
              if ("\\oiint" !== a.name && "\\oiiint" !== a.name || (c = a.name.substr(1), a.name = "oiint" === c ? "\\iint" : "\\iiint"), o = $e.makeSymbol(a.name, m, "math", t, ["mop", "op-symbol", h ? "large-op" : "small-op"]), c.length > 0) {
                var u = o.italic,
                  p = $e.staticSvg(c + "Size" + (h ? "2" : "1"), t);
                o = $e.makeVList({
                  positionType: "individualShift",
                  children: [{
                    type: "elem",
                    elem: o,
                    shift: 0
                  }, {
                    type: "elem",
                    elem: p,
                    shift: h ? .08 : 0
                  }]
                }, t), a.name = "\\" + c, o.classes.unshift("mop"), o.italic = u
              }
            } else if (a.body) {
              var d = ut(a.body, t, !0);
              1 === d.length && d[0] instanceof R ? (o = d[0]).classes[0] = "mop" : o = $e.makeSpan(["mop"], d, t)
            } else {
              for (var f = [], g = 1; g < a.name.length; g++) f.push($e.mathsym(a.name[g], a.mode, t));
              o = $e.makeSpan(["mop"], f, t)
            }
            var v = 0,
              b = 0;
            return (o instanceof R || "\\oiint" === a.name || "\\oiiint" === a.name) && !a.suppressBaseShift && (v = (o.height - o.depth) / 2 - t.fontMetrics().axisHeight, b = o.italic), i ? on(o, r, n, t, s, b, v) : (v && (o.style.position = "relative", o.style.top = v + "em"), o)
          },
          hn = function(e, t) {
            var r;
            if (e.symbol) r = new kt("mo", [zt(e.name, e.mode)]), l.contains(sn, e.name) && r.setAttribute("largeop", "false");
            else if (e.body) r = new kt("mo", Bt(e.body, t));
            else {
              r = new kt("mi", [new St(e.name.slice(1))]);
              var n = new kt("mo", [zt("⁡", "text")]);
              r = e.parentIsSupSub ? new kt("mrow", [r, n]) : wt([r, n])
            }
            return r
          },
          mn = {
            "∏": "\\prod",
            "∐": "\\coprod",
            "∑": "\\sum",
            "⋀": "\\bigwedge",
            "⋁": "\\bigvee",
            "⋂": "\\bigcap",
            "⋃": "\\bigcup",
            "⨀": "\\bigodot",
            "⨁": "\\bigoplus",
            "⨂": "\\bigotimes",
            "⨄": "\\biguplus",
            "⨆": "\\bigsqcup"
          };
        nt({
          type: "op",
          names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
          props: {
            numArgs: 0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName;
            return 1 === n.length && (n = mn[n]), {
              type: "op",
              mode: r.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !0,
              name: n
            }
          },
          htmlBuilder: ln,
          mathmlBuilder: hn
        }), nt({
          type: "op",
          names: ["\\mathop"],
          props: {
            numArgs: 1,
            primitive: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0];
            return {
              type: "op",
              mode: r.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !1,
              body: ot(n)
            }
          },
          htmlBuilder: ln,
          mathmlBuilder: hn
        });
        var cn = {
          "∫": "\\int",
          "∬": "\\iint",
          "∭": "\\iiint",
          "∮": "\\oint",
          "∯": "\\oiint",
          "∰": "\\oiiint"
        };
        nt({
          type: "op",
          names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName;
            return {
              type: "op",
              mode: t.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !1,
              name: r
            }
          },
          htmlBuilder: ln,
          mathmlBuilder: hn
        }), nt({
          type: "op",
          names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName;
            return {
              type: "op",
              mode: t.mode,
              limits: !0,
              parentIsSupSub: !1,
              symbol: !1,
              name: r
            }
          },
          htmlBuilder: ln,
          mathmlBuilder: hn
        }), nt({
          type: "op",
          names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
          props: {
            numArgs: 0
          },
          handler: function(e) {
            var t = e.parser,
              r = e.funcName;
            return 1 === r.length && (r = cn[r]), {
              type: "op",
              mode: t.mode,
              limits: !1,
              parentIsSupSub: !1,
              symbol: !0,
              name: r
            }
          },
          htmlBuilder: ln,
          mathmlBuilder: hn
        });
        var un = {},
          pn = un;

        function dn(e, t) {
          un[e] = t
        }
        dn("\\noexpand", (function(e) {
          var t = e.popToken();
          return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
            tokens: [t],
            numArgs: 0
          }
        })), dn("\\expandafter", (function(e) {
          var t = e.popToken();
          return e.expandOnce(!0), {
            tokens: [t],
            numArgs: 0
          }
        })), dn("\\@firstoftwo", (function(e) {
          return {
            tokens: e.consumeArgs(2)[0],
            numArgs: 0
          }
        })), dn("\\@secondoftwo", (function(e) {
          return {
            tokens: e.consumeArgs(2)[1],
            numArgs: 0
          }
        })), dn("\\@ifnextchar", (function(e) {
          var t = e.consumeArgs(3);
          e.consumeSpaces();
          var r = e.future();
          return 1 === t[0].length && t[0][0].text === r.text ? {
            tokens: t[1],
            numArgs: 0
          } : {
            tokens: t[2],
            numArgs: 0
          }
        })), dn("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), dn("\\TextOrMath", (function(e) {
          var t = e.consumeArgs(2);
          return "text" === e.mode ? {
            tokens: t[0],
            numArgs: 0
          } : {
            tokens: t[1],
            numArgs: 0
          }
        }));
        var fn = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          a: 10,
          A: 10,
          b: 11,
          B: 11,
          c: 12,
          C: 12,
          d: 13,
          D: 13,
          e: 14,
          E: 14,
          f: 15,
          F: 15
        };
        dn("\\char", (function(e) {
          var t, r = e.popToken(),
            a = "";
          if ("'" === r.text) t = 8, r = e.popToken();
          else if ('"' === r.text) t = 16, r = e.popToken();
          else if ("`" === r.text)
            if ("\\" === (r = e.popToken()).text[0]) a = r.text.charCodeAt(1);
            else {
              if ("EOF" === r.text) throw new n("\\char` missing argument");
              a = r.text.charCodeAt(0)
            }
          else t = 10;
          if (t) {
            if (null == (a = fn[r.text]) || a >= t) throw new n("Invalid base-" + t + " digit " + r.text);
            for (var i; null != (i = fn[e.future().text]) && i < t;) a *= t, a += i, e.popToken()
          }
          return "\\@char{" + a + "}"
        }));
        var gn = function(e, t, r) {
          var a = e.consumeArg().tokens;
          if (1 !== a.length) throw new n("\\newcommand's first argument must be a macro name");
          var i = a[0].text,
            o = e.isDefined(i);
          if (o && !t) throw new n("\\newcommand{" + i + "} attempting to redefine " + i + "; use \\renewcommand");
          if (!o && !r) throw new n("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
          var s = 0;
          if (1 === (a = e.consumeArg().tokens).length && "[" === a[0].text) {
            for (var l = "", h = e.expandNextToken();
              "]" !== h.text && "EOF" !== h.text;) l += h.text, h = e.expandNextToken();
            if (!l.match(/^\s*[0-9]+\s*$/)) throw new n("Invalid number of arguments: " + l);
            s = parseInt(l), a = e.consumeArg().tokens
          }
          return e.macros.set(i, {
            tokens: a,
            numArgs: s
          }), ""
        };
        dn("\\newcommand", (function(e) {
          return gn(e, !1, !0)
        })), dn("\\renewcommand", (function(e) {
          return gn(e, !0, !1)
        })), dn("\\providecommand", (function(e) {
          return gn(e, !0, !0)
        })), dn("\\message", (function(e) {
          var t = e.consumeArgs(1)[0];
          return console.log(t.reverse().map((function(e) {
            return e.text
          })).join("")), ""
        })), dn("\\errmessage", (function(e) {
          var t = e.consumeArgs(1)[0];
          return console.error(t.reverse().map((function(e) {
            return e.text
          })).join("")), ""
        })), dn("\\show", (function(e) {
          var t = e.popToken(),
            r = t.text;
          return console.log(t, e.macros.get(r), On[r], X.math[r], X.text[r]), ""
        })), dn("\\bgroup", "{"), dn("\\egroup", "}"), dn("~", "\\nobreakspace"), dn("\\lq", "`"), dn("\\rq", "'"), dn("\\aa", "\\r a"), dn("\\AA", "\\r A"), dn("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}"), dn("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), dn("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}"), dn("ℬ", "\\mathscr{B}"), dn("ℰ", "\\mathscr{E}"), dn("ℱ", "\\mathscr{F}"), dn("ℋ", "\\mathscr{H}"), dn("ℐ", "\\mathscr{I}"), dn("ℒ", "\\mathscr{L}"), dn("ℳ", "\\mathscr{M}"), dn("ℛ", "\\mathscr{R}"), dn("ℭ", "\\mathfrak{C}"), dn("ℌ", "\\mathfrak{H}"), dn("ℨ", "\\mathfrak{Z}"), dn("\\Bbbk", "\\Bbb{k}"), dn("·", "\\cdotp"), dn("\\llap", "\\mathllap{\\textrm{#1}}"), dn("\\rlap", "\\mathrlap{\\textrm{#1}}"), dn("\\clap", "\\mathclap{\\textrm{#1}}"), dn("\\mathstrut", "\\vphantom{(}"), dn("\\underbar", "\\underline{\\text{#1}}"), dn("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), dn("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}"), dn("\\ne", "\\neq"), dn("≠", "\\neq"), dn("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}"), dn("∉", "\\notin"), dn("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}"), dn("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}"), dn("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}"), dn("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}"), dn("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}"), dn("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}"), dn("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}"), dn("⟂", "\\perp"), dn("‼", "\\mathclose{!\\mkern-0.8mu!}"), dn("∌", "\\notni"), dn("⌜", "\\ulcorner"), dn("⌝", "\\urcorner"), dn("⌞", "\\llcorner"), dn("⌟", "\\lrcorner"), dn("©", "\\copyright"), dn("®", "\\textregistered"), dn("️", "\\textregistered"), dn("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), dn("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), dn("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), dn("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), dn("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), dn("⋮", "\\vdots"), dn("\\varGamma", "\\mathit{\\Gamma}"), dn("\\varDelta", "\\mathit{\\Delta}"), dn("\\varTheta", "\\mathit{\\Theta}"), dn("\\varLambda", "\\mathit{\\Lambda}"), dn("\\varXi", "\\mathit{\\Xi}"), dn("\\varPi", "\\mathit{\\Pi}"), dn("\\varSigma", "\\mathit{\\Sigma}"), dn("\\varUpsilon", "\\mathit{\\Upsilon}"), dn("\\varPhi", "\\mathit{\\Phi}"), dn("\\varPsi", "\\mathit{\\Psi}"), dn("\\varOmega", "\\mathit{\\Omega}"), dn("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), dn("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), dn("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), dn("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), dn("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), dn("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
        var vn = {
          ",": "\\dotsc",
          "\\not": "\\dotsb",
          "+": "\\dotsb",
          "=": "\\dotsb",
          "<": "\\dotsb",
          ">": "\\dotsb",
          "-": "\\dotsb",
          "*": "\\dotsb",
          ":": "\\dotsb",
          "\\DOTSB": "\\dotsb",
          "\\coprod": "\\dotsb",
          "\\bigvee": "\\dotsb",
          "\\bigwedge": "\\dotsb",
          "\\biguplus": "\\dotsb",
          "\\bigcap": "\\dotsb",
          "\\bigcup": "\\dotsb",
          "\\prod": "\\dotsb",
          "\\sum": "\\dotsb",
          "\\bigotimes": "\\dotsb",
          "\\bigoplus": "\\dotsb",
          "\\bigodot": "\\dotsb",
          "\\bigsqcup": "\\dotsb",
          "\\And": "\\dotsb",
          "\\longrightarrow": "\\dotsb",
          "\\Longrightarrow": "\\dotsb",
          "\\longleftarrow": "\\dotsb",
          "\\Longleftarrow": "\\dotsb",
          "\\longleftrightarrow": "\\dotsb",
          "\\Longleftrightarrow": "\\dotsb",
          "\\mapsto": "\\dotsb",
          "\\longmapsto": "\\dotsb",
          "\\hookrightarrow": "\\dotsb",
          "\\doteq": "\\dotsb",
          "\\mathbin": "\\dotsb",
          "\\mathrel": "\\dotsb",
          "\\relbar": "\\dotsb",
          "\\Relbar": "\\dotsb",
          "\\xrightarrow": "\\dotsb",
          "\\xleftarrow": "\\dotsb",
          "\\DOTSI": "\\dotsi",
          "\\int": "\\dotsi",
          "\\oint": "\\dotsi",
          "\\iint": "\\dotsi",
          "\\iiint": "\\dotsi",
          "\\iiiint": "\\dotsi",
          "\\idotsint": "\\dotsi",
          "\\DOTSX": "\\dotsx"
        };
        dn("\\dots", (function(e) {
          var t = "\\dotso",
            r = e.expandAfterFuture().text;
          return r in vn ? t = vn[r] : ("\\not" === r.substr(0, 4) || r in X.math && l.contains(["bin", "rel"], X.math[r].group)) && (t = "\\dotsb"), t
        }));
        var yn = {
          ")": !0,
          "]": !0,
          "\\rbrack": !0,
          "\\}": !0,
          "\\rbrace": !0,
          "\\rangle": !0,
          "\\rceil": !0,
          "\\rfloor": !0,
          "\\rgroup": !0,
          "\\rmoustache": !0,
          "\\right": !0,
          "\\bigr": !0,
          "\\biggr": !0,
          "\\Bigr": !0,
          "\\Biggr": !0,
          $: !0,
          ";": !0,
          ".": !0,
          ",": !0
        };
        dn("\\dotso", (function(e) {
          return e.future().text in yn ? "\\ldots\\," : "\\ldots"
        })), dn("\\dotsc", (function(e) {
          var t = e.future().text;
          return t in yn && "," !== t ? "\\ldots\\," : "\\ldots"
        })), dn("\\cdots", (function(e) {
          return e.future().text in yn ? "\\@cdots\\," : "\\@cdots"
        })), dn("\\dotsb", "\\cdots"), dn("\\dotsm", "\\cdots"), dn("\\dotsi", "\\!\\cdots"), dn("\\dotsx", "\\ldots\\,"), dn("\\DOTSI", "\\relax"), dn("\\DOTSB", "\\relax"), dn("\\DOTSX", "\\relax"), dn("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), dn("\\,", "\\tmspace+{3mu}{.1667em}"), dn("\\thinspace", "\\,"), dn("\\>", "\\mskip{4mu}"), dn("\\:", "\\tmspace+{4mu}{.2222em}"), dn("\\medspace", "\\:"), dn("\\;", "\\tmspace+{5mu}{.2777em}"), dn("\\thickspace", "\\;"), dn("\\!", "\\tmspace-{3mu}{.1667em}"), dn("\\negthinspace", "\\!"), dn("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), dn("\\negthickspace", "\\tmspace-{5mu}{.277em}"), dn("\\enspace", "\\kern.5em "), dn("\\enskip", "\\hskip.5em\\relax"), dn("\\quad", "\\hskip1em\\relax"), dn("\\qquad", "\\hskip2em\\relax"), dn("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), dn("\\tag@paren", "\\tag@literal{({#1})}"), dn("\\tag@literal", (function(e) {
          if (e.macros.get("\\df@tag")) throw new n("Multiple \\tag");
          return "\\gdef\\df@tag{\\text{#1}}"
        })), dn("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), dn("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), dn("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), dn("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), dn("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), dn("\\newline", "\\\\\\relax"), dn("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
        var bn = D["Main-Regular"]["T".charCodeAt(0)][1] - .7 * D["Main-Regular"]["A".charCodeAt(0)][1] + "em";
        dn("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + bn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"), dn("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + bn + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"), dn("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), dn("\\@hspace", "\\hskip #1\\relax"), dn("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), dn("\\ordinarycolon", ":"), dn("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), dn("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), dn("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), dn("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), dn("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), dn("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), dn("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), dn("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), dn("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), dn("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), dn("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), dn("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), dn("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), dn("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), dn("∷", "\\dblcolon"), dn("∹", "\\eqcolon"), dn("≔", "\\coloneqq"), dn("≕", "\\eqqcolon"), dn("⩴", "\\Coloneqq"), dn("\\ratio", "\\vcentcolon"), dn("\\coloncolon", "\\dblcolon"), dn("\\colonequals", "\\coloneqq"), dn("\\coloncolonequals", "\\Coloneqq"), dn("\\equalscolon", "\\eqqcolon"), dn("\\equalscoloncolon", "\\Eqqcolon"), dn("\\colonminus", "\\coloneq"), dn("\\coloncolonminus", "\\Coloneq"), dn("\\minuscolon", "\\eqcolon"), dn("\\minuscoloncolon", "\\Eqcolon"), dn("\\coloncolonapprox", "\\Colonapprox"), dn("\\coloncolonsim", "\\Colonsim"), dn("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), dn("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), dn("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), dn("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), dn("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}"), dn("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), dn("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), dn("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}"), dn("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}"), dn("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}"), dn("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}"), dn("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}"), dn("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}"), dn("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"), dn("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"), dn("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"), dn("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"), dn("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"), dn("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"), dn("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"), dn("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"), dn("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"), dn("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"), dn("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"), dn("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"), dn("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"), dn("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"), dn("\\imath", "\\html@mathml{\\@imath}{ı}"), dn("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"), dn("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}"), dn("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}"), dn("⟦", "\\llbracket"), dn("⟧", "\\rrbracket"), dn("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}"), dn("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}"), dn("⦃", "\\lBrace"), dn("⦄", "\\rBrace"), dn("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}"), dn("⦵", "\\minuso"), dn("\\darr", "\\downarrow"), dn("\\dArr", "\\Downarrow"), dn("\\Darr", "\\Downarrow"), dn("\\lang", "\\langle"), dn("\\rang", "\\rangle"), dn("\\uarr", "\\uparrow"), dn("\\uArr", "\\Uparrow"), dn("\\Uarr", "\\Uparrow"), dn("\\N", "\\mathbb{N}"), dn("\\R", "\\mathbb{R}"), dn("\\Z", "\\mathbb{Z}"), dn("\\alef", "\\aleph"), dn("\\alefsym", "\\aleph"), dn("\\Alpha", "\\mathrm{A}"), dn("\\Beta", "\\mathrm{B}"), dn("\\bull", "\\bullet"), dn("\\Chi", "\\mathrm{X}"), dn("\\clubs", "\\clubsuit"), dn("\\cnums", "\\mathbb{C}"), dn("\\Complex", "\\mathbb{C}"), dn("\\Dagger", "\\ddagger"), dn("\\diamonds", "\\diamondsuit"), dn("\\empty", "\\emptyset"), dn("\\Epsilon", "\\mathrm{E}"), dn("\\Eta", "\\mathrm{H}"), dn("\\exist", "\\exists"), dn("\\harr", "\\leftrightarrow"), dn("\\hArr", "\\Leftrightarrow"), dn("\\Harr", "\\Leftrightarrow"), dn("\\hearts", "\\heartsuit"), dn("\\image", "\\Im"), dn("\\infin", "\\infty"), dn("\\Iota", "\\mathrm{I}"), dn("\\isin", "\\in"), dn("\\Kappa", "\\mathrm{K}"), dn("\\larr", "\\leftarrow"), dn("\\lArr", "\\Leftarrow"), dn("\\Larr", "\\Leftarrow"), dn("\\lrarr", "\\leftrightarrow"), dn("\\lrArr", "\\Leftrightarrow"), dn("\\Lrarr", "\\Leftrightarrow"), dn("\\Mu", "\\mathrm{M}"), dn("\\natnums", "\\mathbb{N}"), dn("\\Nu", "\\mathrm{N}"), dn("\\Omicron", "\\mathrm{O}"), dn("\\plusmn", "\\pm"), dn("\\rarr", "\\rightarrow"), dn("\\rArr", "\\Rightarrow"), dn("\\Rarr", "\\Rightarrow"), dn("\\real", "\\Re"), dn("\\reals", "\\mathbb{R}"), dn("\\Reals", "\\mathbb{R}"), dn("\\Rho", "\\mathrm{P}"), dn("\\sdot", "\\cdot"), dn("\\sect", "\\S"), dn("\\spades", "\\spadesuit"), dn("\\sub", "\\subset"), dn("\\sube", "\\subseteq"), dn("\\supe", "\\supseteq"), dn("\\Tau", "\\mathrm{T}"), dn("\\thetasym", "\\vartheta"), dn("\\weierp", "\\wp"), dn("\\Zeta", "\\mathrm{Z}"), dn("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), dn("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), dn("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), dn("\\bra", "\\mathinner{\\langle{#1}|}"), dn("\\ket", "\\mathinner{|{#1}\\rangle}"), dn("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), dn("\\Bra", "\\left\\langle#1\\right|"), dn("\\Ket", "\\left|#1\\right\\rangle"), dn("\\angln", "{\\angl n}"), dn("\\blue", "\\textcolor{##6495ed}{#1}"), dn("\\orange", "\\textcolor{##ffa500}{#1}"), dn("\\pink", "\\textcolor{##ff00af}{#1}"), dn("\\red", "\\textcolor{##df0030}{#1}"), dn("\\green", "\\textcolor{##28ae7b}{#1}"), dn("\\gray", "\\textcolor{gray}{#1}"), dn("\\purple", "\\textcolor{##9d38bd}{#1}"), dn("\\blueA", "\\textcolor{##ccfaff}{#1}"), dn("\\blueB", "\\textcolor{##80f6ff}{#1}"), dn("\\blueC", "\\textcolor{##63d9ea}{#1}"), dn("\\blueD", "\\textcolor{##11accd}{#1}"), dn("\\blueE", "\\textcolor{##0c7f99}{#1}"), dn("\\tealA", "\\textcolor{##94fff5}{#1}"), dn("\\tealB", "\\textcolor{##26edd5}{#1}"), dn("\\tealC", "\\textcolor{##01d1c1}{#1}"), dn("\\tealD", "\\textcolor{##01a995}{#1}"), dn("\\tealE", "\\textcolor{##208170}{#1}"), dn("\\greenA", "\\textcolor{##b6ffb0}{#1}"), dn("\\greenB", "\\textcolor{##8af281}{#1}"), dn("\\greenC", "\\textcolor{##74cf70}{#1}"), dn("\\greenD", "\\textcolor{##1fab54}{#1}"), dn("\\greenE", "\\textcolor{##0d923f}{#1}"), dn("\\goldA", "\\textcolor{##ffd0a9}{#1}"), dn("\\goldB", "\\textcolor{##ffbb71}{#1}"), dn("\\goldC", "\\textcolor{##ff9c39}{#1}"), dn("\\goldD", "\\textcolor{##e07d10}{#1}"), dn("\\goldE", "\\textcolor{##a75a05}{#1}"), dn("\\redA", "\\textcolor{##fca9a9}{#1}"), dn("\\redB", "\\textcolor{##ff8482}{#1}"), dn("\\redC", "\\textcolor{##f9685d}{#1}"), dn("\\redD", "\\textcolor{##e84d39}{#1}"), dn("\\redE", "\\textcolor{##bc2612}{#1}"), dn("\\maroonA", "\\textcolor{##ffbde0}{#1}"), dn("\\maroonB", "\\textcolor{##ff92c6}{#1}"), dn("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), dn("\\maroonD", "\\textcolor{##ca337c}{#1}"), dn("\\maroonE", "\\textcolor{##9e034e}{#1}"), dn("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), dn("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), dn("\\purpleC", "\\textcolor{##aa87ff}{#1}"), dn("\\purpleD", "\\textcolor{##7854ab}{#1}"), dn("\\purpleE", "\\textcolor{##543b78}{#1}"), dn("\\mintA", "\\textcolor{##f5f9e8}{#1}"), dn("\\mintB", "\\textcolor{##edf2df}{#1}"), dn("\\mintC", "\\textcolor{##e0e5cc}{#1}"), dn("\\grayA", "\\textcolor{##f6f7f7}{#1}"), dn("\\grayB", "\\textcolor{##f0f1f2}{#1}"), dn("\\grayC", "\\textcolor{##e3e5e6}{#1}"), dn("\\grayD", "\\textcolor{##d6d8da}{#1}"), dn("\\grayE", "\\textcolor{##babec2}{#1}"), dn("\\grayF", "\\textcolor{##888d93}{#1}"), dn("\\grayG", "\\textcolor{##626569}{#1}"), dn("\\grayH", "\\textcolor{##3b3e40}{#1}"), dn("\\grayI", "\\textcolor{##21242c}{#1}"), dn("\\kaBlue", "\\textcolor{##314453}{#1}"), dn("\\kaGreen", "\\textcolor{##71B307}{#1}");
        var xn = function(e, t) {
          var r, n, a, i, o = !1;
          if ("supsub" === e.type ? (r = e.sup, n = e.sub, a = Pt(e.base, "operatorname"), o = !0) : a = Pt(e, "operatorname"), a.body.length > 0) {
            for (var s = a.body.map((function(e) {
                var t = e.text;
                return "string" == typeof t ? {
                  type: "textord",
                  mode: e.mode,
                  text: t
                } : e
              })), l = ut(s, t.withFont("mathrm"), !0), h = 0; h < l.length; h++) {
              var m = l[h];
              m instanceof R && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
            }
            i = $e.makeSpan(["mop"], l, t)
          } else i = $e.makeSpan(["mop"], [], t);
          return o ? on(i, r, n, t, t.style, 0, 0) : i
        };

        function wn(e, t, r) {
          for (var n = ut(e, t, !1), a = t.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
            var o = n[i].classes.indexOf("sizing");
            o < 0 ? Array.prototype.push.apply(n[i].classes, t.sizingClasses(r)) : n[i].classes[o + 1] === "reset-size" + t.size && (n[i].classes[o + 1] = "reset-size" + r.size), n[i].height *= a, n[i].depth *= a
          }
          return $e.makeFragment(n)
        }
        nt({
          type: "operatorname",
          names: ["\\operatorname@", "\\operatornamewithlimits"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "operatorname",
              mode: r.mode,
              body: ot(a),
              alwaysHandleSupSub: "\\operatornamewithlimits" === n,
              limits: !1,
              parentIsSupSub: !1
            }
          },
          htmlBuilder: xn,
          mathmlBuilder: function(e, t) {
            for (var r = Bt(e.body, t.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) {
              var i = r[a];
              if (i instanceof Mt.SpaceNode);
              else if (i instanceof Mt.MathNode) switch (i.type) {
                case "mi":
                case "mn":
                case "ms":
                case "mspace":
                case "mtext":
                  break;
                case "mo":
                  var o = i.children[0];
                  1 === i.children.length && o instanceof Mt.TextNode ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                  break;
                default:
                  n = !1
              } else n = !1
            }
            if (n) {
              var s = r.map((function(e) {
                return e.toText()
              })).join("");
              r = [new Mt.TextNode(s)]
            }
            var l = new Mt.MathNode("mi", r);
            l.setAttribute("mathvariant", "normal");
            var h = new Mt.MathNode("mo", [zt("⁡", "text")]);
            return e.parentIsSupSub ? new Mt.MathNode("mrow", [l, h]) : Mt.newDocumentFragment([l, h])
          }
        }), dn("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@"), at({
          type: "ordgroup",
          htmlBuilder: function(e, t) {
            return e.semisimple ? $e.makeFragment(ut(e.body, t, !1)) : $e.makeSpan(["mord"], ut(e.body, t, !0), t)
          },
          mathmlBuilder: function(e, t) {
            return Nt(e.body, t, !0)
          }
        }), nt({
          type: "overline",
          names: ["\\overline"],
          props: {
            numArgs: 1
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0];
            return {
              type: "overline",
              mode: r.mode,
              body: n
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.body, t.havingCrampedStyle()),
              n = $e.makeLineSpan("overline-line", t),
              a = t.fontMetrics().defaultRuleThickness,
              i = $e.makeVList({
                positionType: "firstBaseline",
                children: [{
                  type: "elem",
                  elem: r
                }, {
                  type: "kern",
                  size: 3 * a
                }, {
                  type: "elem",
                  elem: n
                }, {
                  type: "kern",
                  size: a
                }]
              }, t);
            return $e.makeSpan(["mord", "overline"], [i], t)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mo", [new Mt.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            var n = new Mt.MathNode("mover", [qt(e.body, t), r]);
            return n.setAttribute("accent", "true"), n
          }
        }), nt({
          type: "phantom",
          names: ["\\phantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0];
            return {
              type: "phantom",
              mode: r.mode,
              body: ot(n)
            }
          },
          htmlBuilder: function(e, t) {
            var r = ut(e.body, t.withPhantom(), !1);
            return $e.makeFragment(r)
          },
          mathmlBuilder: function(e, t) {
            var r = Bt(e.body, t);
            return new Mt.MathNode("mphantom", r)
          }
        }), nt({
          type: "hphantom",
          names: ["\\hphantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0];
            return {
              type: "hphantom",
              mode: r.mode,
              body: n
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.makeSpan([], [yt(e.body, t.withPhantom())]);
            if (r.height = 0, r.depth = 0, r.children)
              for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
            return r = $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r
              }]
            }, t), $e.makeSpan(["mord"], [r], t)
          },
          mathmlBuilder: function(e, t) {
            var r = Bt(ot(e.body), t),
              n = new Mt.MathNode("mphantom", r),
              a = new Mt.MathNode("mpadded", [n]);
            return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a
          }
        }), nt({
          type: "vphantom",
          names: ["\\vphantom"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = t[0];
            return {
              type: "vphantom",
              mode: r.mode,
              body: n
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.makeSpan(["inner"], [yt(e.body, t.withPhantom())]),
              n = $e.makeSpan(["fix"], []);
            return $e.makeSpan(["mord", "rlap"], [r, n], t)
          },
          mathmlBuilder: function(e, t) {
            var r = Bt(ot(e.body), t),
              n = new Mt.MathNode("mphantom", r),
              a = new Mt.MathNode("mpadded", [n]);
            return a.setAttribute("width", "0px"), a
          }
        }), nt({
          type: "raisebox",
          names: ["\\raisebox"],
          props: {
            numArgs: 2,
            argTypes: ["size", "hbox"],
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = Pt(t[0], "size").value,
              a = t[1];
            return {
              type: "raisebox",
              mode: r.mode,
              dy: n,
              body: a
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.body, t),
              n = Le(e.dy, t);
            return $e.makeVList({
              positionType: "shift",
              positionData: -n,
              children: [{
                type: "elem",
                elem: r
              }]
            }, t)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mpadded", [qt(e.body, t)]),
              n = e.dy.number + e.dy.unit;
            return r.setAttribute("voffset", n), r
          }
        }), nt({
          type: "rule",
          names: ["\\rule"],
          props: {
            numArgs: 2,
            numOptionalArgs: 1,
            argTypes: ["size", "size", "size"]
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = r[0],
              i = Pt(t[0], "size"),
              o = Pt(t[1], "size");
            return {
              type: "rule",
              mode: n.mode,
              shift: a && Pt(a, "size").value,
              width: i.value,
              height: o.value
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.makeSpan(["mord", "rule"], [], t),
              n = Le(e.width, t),
              a = Le(e.height, t),
              i = e.shift ? Le(e.shift, t) : 0;
            return r.style.borderRightWidth = n + "em", r.style.borderTopWidth = a + "em", r.style.bottom = i + "em", r.width = n, r.height = a + i, r.depth = -i, r.maxFontSize = 1.125 * a * t.sizeMultiplier, r
          },
          mathmlBuilder: function(e, t) {
            var r = Le(e.width, t),
              n = Le(e.height, t),
              a = e.shift ? Le(e.shift, t) : 0,
              i = t.color && t.getColor() || "black",
              o = new Mt.MathNode("mspace");
            o.setAttribute("mathbackground", i), o.setAttribute("width", r + "em"), o.setAttribute("height", n + "em");
            var s = new Mt.MathNode("mpadded", [o]);
            return a >= 0 ? s.setAttribute("height", "+" + a + "em") : (s.setAttribute("height", a + "em"), s.setAttribute("depth", "+" + -a + "em")), s.setAttribute("voffset", a + "em"), s
          }
        });
        var kn = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
        nt({
          type: "sizing",
          names: kn,
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.breakOnTokenText,
              n = e.funcName,
              a = e.parser,
              i = a.parseExpression(!1, r);
            return {
              type: "sizing",
              mode: a.mode,
              size: kn.indexOf(n) + 1,
              body: i
            }
          },
          htmlBuilder: function(e, t) {
            var r = t.havingSize(e.size);
            return wn(e.body, r, t)
          },
          mathmlBuilder: function(e, t) {
            var r = t.havingSize(e.size),
              n = Bt(e.body, r),
              a = new Mt.MathNode("mstyle", n);
            return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a
          }
        }), nt({
          type: "smash",
          names: ["\\smash"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = !1,
              i = !1,
              o = r[0] && Pt(r[0], "ordgroup");
            if (o)
              for (var s = "", l = 0; l < o.body.length; ++l)
                if ("t" === (s = o.body[l].text)) a = !0;
                else {
                  if ("b" !== s) {
                    a = !1, i = !1;
                    break
                  }
                  i = !0
                }
            else a = !0, i = !0;
            var h = t[0];
            return {
              type: "smash",
              mode: n.mode,
              body: h,
              smashHeight: a,
              smashDepth: i
            }
          },
          htmlBuilder: function(e, t) {
            var r = $e.makeSpan([], [yt(e.body, t)]);
            if (!e.smashHeight && !e.smashDepth) return r;
            if (e.smashHeight && (r.height = 0, r.children))
              for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
            if (e.smashDepth && (r.depth = 0, r.children))
              for (var a = 0; a < r.children.length; a++) r.children[a].depth = 0;
            var i = $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r
              }]
            }, t);
            return $e.makeSpan(["mord"], [i], t)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mpadded", [qt(e.body, t)]);
            return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r
          }
        }), nt({
          type: "sqrt",
          names: ["\\sqrt"],
          props: {
            numArgs: 1,
            numOptionalArgs: 1
          },
          handler: function(e, t, r) {
            var n = e.parser,
              a = r[0],
              i = t[0];
            return {
              type: "sqrt",
              mode: n.mode,
              body: i,
              index: a
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.body, t.havingCrampedStyle());
            0 === r.height && (r.height = t.fontMetrics().xHeight), r = $e.wrapFragment(r, t);
            var n = t.fontMetrics().defaultRuleThickness,
              a = n;
            t.style.id < y.TEXT.id && (a = t.fontMetrics().xHeight);
            var i = n + a / 4,
              o = r.height + r.depth + i + n,
              s = kr(o, t),
              l = s.span,
              h = s.ruleWidth,
              m = s.advanceWidth,
              c = l.height - h;
            c > r.height + r.depth + i && (i = (i + c - r.height - r.depth) / 2);
            var u = l.height - r.height - i - h;
            r.style.paddingLeft = m + "em";
            var p = $e.makeVList({
              positionType: "firstBaseline",
              children: [{
                type: "elem",
                elem: r,
                wrapperClasses: ["svg-align"]
              }, {
                type: "kern",
                size: -(r.height + u)
              }, {
                type: "elem",
                elem: l
              }, {
                type: "kern",
                size: h
              }]
            }, t);
            if (e.index) {
              var d = t.havingStyle(y.SCRIPTSCRIPT),
                f = yt(e.index, d, t),
                g = .6 * (p.height - p.depth),
                v = $e.makeVList({
                  positionType: "shift",
                  positionData: -g,
                  children: [{
                    type: "elem",
                    elem: f
                  }]
                }, t),
                b = $e.makeSpan(["root"], [v]);
              return $e.makeSpan(["mord", "sqrt"], [b, p], t)
            }
            return $e.makeSpan(["mord", "sqrt"], [p], t)
          },
          mathmlBuilder: function(e, t) {
            var r = e.body,
              n = e.index;
            return n ? new Mt.MathNode("mroot", [qt(r, t), qt(n, t)]) : new Mt.MathNode("msqrt", [qt(r, t)])
          }
        });
        var Sn = {
          display: y.DISPLAY,
          text: y.TEXT,
          script: y.SCRIPT,
          scriptscript: y.SCRIPTSCRIPT
        };
        nt({
          type: "styling",
          names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
          props: {
            numArgs: 0,
            allowedInText: !0,
            primitive: !0
          },
          handler: function(e, t) {
            var r = e.breakOnTokenText,
              n = e.funcName,
              a = e.parser,
              i = a.parseExpression(!0, r),
              o = n.slice(1, n.length - 5);
            return {
              type: "styling",
              mode: a.mode,
              style: o,
              body: i
            }
          },
          htmlBuilder: function(e, t) {
            var r = Sn[e.style],
              n = t.havingStyle(r).withFont("");
            return wn(e.body, n, t)
          },
          mathmlBuilder: function(e, t) {
            var r = Sn[e.style],
              n = t.havingStyle(r),
              a = Bt(e.body, n),
              i = new Mt.MathNode("mstyle", a),
              o = {
                display: ["0", "true"],
                text: ["0", "false"],
                script: ["1", "false"],
                scriptscript: ["2", "false"]
              } [e.style];
            return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i
          }
        });
        var Mn = function(e, t) {
          var r = e.base;
          return r ? "op" === r.type ? r.limits && (t.style.size === y.DISPLAY.size || r.alwaysHandleSupSub) ? ln : null : "operatorname" === r.type ? r.alwaysHandleSupSub && (t.style.size === y.DISPLAY.size || r.limits) ? xn : null : "accent" === r.type ? l.isCharacterBox(r.base) ? Gt : null : "horizBrace" === r.type && !e.sub === r.isOver ? rn : null : null
        };
        at({
          type: "supsub",
          htmlBuilder: function(e, t) {
            var r = Mn(e, t);
            if (r) return r(e, t);
            var n, a, i, o = e.base,
              s = e.sup,
              h = e.sub,
              m = yt(o, t),
              c = t.fontMetrics(),
              u = 0,
              p = 0,
              d = o && l.isCharacterBox(o);
            if (s) {
              var f = t.havingStyle(t.style.sup());
              n = yt(s, f, t), d || (u = m.height - f.fontMetrics().supDrop * f.sizeMultiplier / t.sizeMultiplier)
            }
            if (h) {
              var g = t.havingStyle(t.style.sub());
              a = yt(h, g, t), d || (p = m.depth + g.fontMetrics().subDrop * g.sizeMultiplier / t.sizeMultiplier)
            }
            i = t.style === y.DISPLAY ? c.sup1 : t.style.cramped ? c.sup3 : c.sup2;
            var v, b = t.sizeMultiplier,
              x = .5 / c.ptPerEm / b + "em",
              w = null;
            if (a) {
              var k = e.base && "op" === e.base.type && e.base.name && ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
              (m instanceof R || k) && (w = -m.italic + "em")
            }
            if (n && a) {
              u = Math.max(u, i, n.depth + .25 * c.xHeight), p = Math.max(p, c.sub2);
              var S = 4 * c.defaultRuleThickness;
              if (u - n.depth - (a.height - p) < S) {
                p = S - (u - n.depth) + a.height;
                var M = .8 * c.xHeight - (u - n.depth);
                M > 0 && (u += M, p -= M)
              }
              var z = [{
                type: "elem",
                elem: a,
                shift: p,
                marginRight: x,
                marginLeft: w
              }, {
                type: "elem",
                elem: n,
                shift: -u,
                marginRight: x
              }];
              v = $e.makeVList({
                positionType: "individualShift",
                children: z
              }, t)
            } else if (a) {
              p = Math.max(p, c.sub1, a.height - .8 * c.xHeight);
              var A = [{
                type: "elem",
                elem: a,
                marginLeft: w,
                marginRight: x
              }];
              v = $e.makeVList({
                positionType: "shift",
                positionData: p,
                children: A
              }, t)
            } else {
              if (!n) throw new Error("supsub must have either sup or sub.");
              u = Math.max(u, i, n.depth + .25 * c.xHeight), v = $e.makeVList({
                positionType: "shift",
                positionData: -u,
                children: [{
                  type: "elem",
                  elem: n,
                  marginRight: x
                }]
              }, t)
            }
            var T = gt(m, "right") || "mord";
            return $e.makeSpan([T], [m, $e.makeSpan(["msupsub"], [v])], t)
          },
          mathmlBuilder: function(e, t) {
            var r, n = !1;
            e.base && "horizBrace" === e.base.type && !!e.sup === e.base.isOver && (n = !0, r = e.base.isOver), !e.base || "op" !== e.base.type && "operatorname" !== e.base.type || (e.base.parentIsSupSub = !0);
            var a, i = [qt(e.base, t)];
            if (e.sub && i.push(qt(e.sub, t)), e.sup && i.push(qt(e.sup, t)), n) a = r ? "mover" : "munder";
            else if (e.sub)
              if (e.sup) {
                var o = e.base;
                a = o && "op" === o.type && o.limits && t.style === y.DISPLAY || o && "operatorname" === o.type && o.alwaysHandleSupSub && (t.style === y.DISPLAY || o.limits) ? "munderover" : "msubsup"
              } else {
                var s = e.base;
                a = s && "op" === s.type && s.limits && (t.style === y.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || t.style === y.DISPLAY) ? "munder" : "msub"
              }
            else {
              var l = e.base;
              a = l && "op" === l.type && l.limits && (t.style === y.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || t.style === y.DISPLAY) ? "mover" : "msup"
            }
            return new Mt.MathNode(a, i)
          }
        }), at({
          type: "atom",
          htmlBuilder: function(e, t) {
            return $e.mathsym(e.text, e.mode, t, ["m" + e.family])
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mo", [zt(e.text, e.mode)]);
            if ("bin" === e.family) {
              var n = Tt(e, t);
              "bold-italic" === n && r.setAttribute("mathvariant", n)
            } else "punct" === e.family ? r.setAttribute("separator", "true") : "open" !== e.family && "close" !== e.family || r.setAttribute("stretchy", "false");
            return r
          }
        });
        var zn = {
          mi: "italic",
          mn: "normal",
          mtext: "normal"
        };
        at({
          type: "mathord",
          htmlBuilder: function(e, t) {
            return $e.makeOrd(e, t, "mathord")
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mi", [zt(e.text, e.mode, t)]),
              n = Tt(e, t) || "italic";
            return n !== zn[r.type] && r.setAttribute("mathvariant", n), r
          }
        }), at({
          type: "textord",
          htmlBuilder: function(e, t) {
            return $e.makeOrd(e, t, "textord")
          },
          mathmlBuilder: function(e, t) {
            var r, n = zt(e.text, e.mode, t),
              a = Tt(e, t) || "normal";
            return r = "text" === e.mode ? new Mt.MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? new Mt.MathNode("mn", [n]) : "\\prime" === e.text ? new Mt.MathNode("mo", [n]) : new Mt.MathNode("mi", [n]), a !== zn[r.type] && r.setAttribute("mathvariant", a), r
          }
        });
        var An = {
            "\\nobreak": "nobreak",
            "\\allowbreak": "allowbreak"
          },
          Tn = {
            " ": {},
            "\\ ": {},
            "~": {
              className: "nobreak"
            },
            "\\space": {},
            "\\nobreakspace": {
              className: "nobreak"
            }
          };
        at({
          type: "spacing",
          htmlBuilder: function(e, t) {
            if (Tn.hasOwnProperty(e.text)) {
              var r = Tn[e.text].className || "";
              if ("text" === e.mode) {
                var a = $e.makeOrd(e, t, "textord");
                return a.classes.push(r), a
              }
              return $e.makeSpan(["mspace", r], [$e.mathsym(e.text, e.mode, t)], t)
            }
            if (An.hasOwnProperty(e.text)) return $e.makeSpan(["mspace", An[e.text]], [], t);
            throw new n('Unknown type of space "' + e.text + '"')
          },
          mathmlBuilder: function(e, t) {
            if (!Tn.hasOwnProperty(e.text)) {
              if (An.hasOwnProperty(e.text)) return new Mt.MathNode("mspace");
              throw new n('Unknown type of space "' + e.text + '"')
            }
            return new Mt.MathNode("mtext", [new Mt.TextNode(" ")])
          }
        });
        var Bn = function() {
          var e = new Mt.MathNode("mtd", []);
          return e.setAttribute("width", "50%"), e
        };
        at({
          type: "tag",
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mtable", [new Mt.MathNode("mtr", [Bn(), new Mt.MathNode("mtd", [Nt(e.body, t)]), Bn(), new Mt.MathNode("mtd", [Nt(e.tag, t)])])]);
            return r.setAttribute("width", "100%"), r
          }
        });
        var Nn = {
            "\\text": void 0,
            "\\textrm": "textrm",
            "\\textsf": "textsf",
            "\\texttt": "texttt",
            "\\textnormal": "textrm"
          },
          qn = {
            "\\textbf": "textbf",
            "\\textmd": "textmd"
          },
          Cn = {
            "\\textit": "textit",
            "\\textup": "textup"
          },
          In = function(e, t) {
            var r = e.font;
            return r ? Nn[r] ? t.withTextFontFamily(Nn[r]) : qn[r] ? t.withTextFontWeight(qn[r]) : t.withTextFontShape(Cn[r]) : t
          };
        nt({
          type: "text",
          names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"],
          props: {
            numArgs: 1,
            argTypes: ["text"],
            allowedInArgument: !0,
            allowedInText: !0
          },
          handler: function(e, t) {
            var r = e.parser,
              n = e.funcName,
              a = t[0];
            return {
              type: "text",
              mode: r.mode,
              body: ot(a),
              font: n
            }
          },
          htmlBuilder: function(e, t) {
            var r = In(e, t),
              n = ut(e.body, r, !0);
            return $e.makeSpan(["mord", "text"], n, r)
          },
          mathmlBuilder: function(e, t) {
            var r = In(e, t);
            return Nt(e.body, r)
          }
        }), nt({
          type: "underline",
          names: ["\\underline"],
          props: {
            numArgs: 1,
            allowedInText: !0
          },
          handler: function(e, t) {
            return {
              type: "underline",
              mode: e.parser.mode,
              body: t[0]
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.body, t),
              n = $e.makeLineSpan("underline-line", t),
              a = t.fontMetrics().defaultRuleThickness,
              i = $e.makeVList({
                positionType: "top",
                positionData: r.height,
                children: [{
                  type: "kern",
                  size: a
                }, {
                  type: "elem",
                  elem: n
                }, {
                  type: "kern",
                  size: 3 * a
                }, {
                  type: "elem",
                  elem: r
                }]
              }, t);
            return $e.makeSpan(["mord", "underline"], [i], t)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.MathNode("mo", [new Mt.TextNode("‾")]);
            r.setAttribute("stretchy", "true");
            var n = new Mt.MathNode("munder", [qt(e.body, t), r]);
            return n.setAttribute("accentunder", "true"), n
          }
        }), nt({
          type: "vcenter",
          names: ["\\vcenter"],
          props: {
            numArgs: 1,
            argTypes: ["original"],
            allowedInText: !1
          },
          handler: function(e, t) {
            return {
              type: "vcenter",
              mode: e.parser.mode,
              body: t[0]
            }
          },
          htmlBuilder: function(e, t) {
            var r = yt(e.body, t),
              n = t.fontMetrics().axisHeight,
              a = .5 * (r.height - n - (r.depth + n));
            return $e.makeVList({
              positionType: "shift",
              positionData: a,
              children: [{
                type: "elem",
                elem: r
              }]
            }, t)
          },
          mathmlBuilder: function(e, t) {
            return new Mt.MathNode("mpadded", [qt(e.body, t)], ["vcenter"])
          }
        }), nt({
          type: "verb",
          names: ["\\verb"],
          props: {
            numArgs: 0,
            allowedInText: !0
          },
          handler: function(e, t, r) {
            throw new n("\\verb ended by end of line instead of matching delimiter")
          },
          htmlBuilder: function(e, t) {
            for (var r = Rn(e), n = [], a = t.havingStyle(t.style.text()), i = 0; i < r.length; i++) {
              var o = r[i];
              "~" === o && (o = "\\textasciitilde"), n.push($e.makeSymbol(o, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]))
            }
            return $e.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), $e.tryCombineChars(n), a)
          },
          mathmlBuilder: function(e, t) {
            var r = new Mt.TextNode(Rn(e)),
              n = new Mt.MathNode("mtext", [r]);
            return n.setAttribute("mathvariant", "monospace"), n
          }
        });
        var Rn = function(e) {
            return e.body.replace(/ /g, e.star ? "␣" : " ")
          },
          On = et,
          En = function() {
            function e(e, t, r) {
              this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r
            }
            return e.range = function(t, r) {
              return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc
            }, e
          }(),
          Hn = function() {
            function e(e, t) {
              this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t
            }
            return e.prototype.range = function(t, r) {
              return new e(r, En.range(this, t))
            }, e
          }(),
          Ln = new RegExp("[̀-ͯ]+$"),
          Dn = function() {
            function e(e, t) {
              this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp("([ \r\n\t]+)|\\\\(\n|[ \r\t]+\n?)[ \r\t]*|([!-\\[\\]-‧‪-퟿豈-￿][̀-ͯ]*|[\ud800-\udbff][\udc00-\udfff][̀-ͯ]*|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5|(\\\\[a-zA-Z@]+)[ \r\n\t]*|\\\\[^\ud800-\udfff])", "g"), this.catcodes = {
                "%": 14,
                "~": 13
              }
            }
            var t = e.prototype;
            return t.setCatcode = function(e, t) {
              this.catcodes[e] = t
            }, t.lex = function() {
              var e = this.input,
                t = this.tokenRegex.lastIndex;
              if (t === e.length) return new Hn("EOF", new En(this, t, t));
              var r = this.tokenRegex.exec(e);
              if (null === r || r.index !== t) throw new n("Unexpected character: '" + e[t] + "'", new Hn(e[t], new En(this, t, t + 1)));
              var a = r[6] || r[3] || (r[2] ? "\\ " : " ");
              if (14 === this.catcodes[a]) {
                var i = e.indexOf("\n", this.tokenRegex.lastIndex);
                return -1 === i ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex()
              }
              return new Hn(a, new En(this, t, this.tokenRegex.lastIndex))
            }, e
          }(),
          Pn = function() {
            function e(e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = []
            }
            var t = e.prototype;
            return t.beginGroup = function() {
              this.undefStack.push({})
            }, t.endGroup = function() {
              if (0 === this.undefStack.length) throw new n("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
              var e = this.undefStack.pop();
              for (var t in e) e.hasOwnProperty(t) && (void 0 === e[t] ? delete this.current[t] : this.current[t] = e[t])
            }, t.has = function(e) {
              return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e)
            }, t.get = function(e) {
              return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e]
            }, t.set = function(e, t, r) {
              if (void 0 === r && (r = !1), r) {
                for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
                this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t)
              } else {
                var a = this.undefStack[this.undefStack.length - 1];
                a && !a.hasOwnProperty(e) && (a[e] = this.current[e])
              }
              this.current[e] = t
            }, e
          }(),
          Fn = {
            "\\relax": !0,
            "^": !0,
            _: !0,
            "\\limits": !0,
            "\\nolimits": !0
          },
          Vn = function() {
            function e(e, t, r) {
              this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Pn(pn, t.macros), this.mode = r, this.stack = []
            }
            var t = e.prototype;
            return t.feed = function(e) {
              this.lexer = new Dn(e, this.settings)
            }, t.switchMode = function(e) {
              this.mode = e
            }, t.beginGroup = function() {
              this.macros.beginGroup()
            }, t.endGroup = function() {
              this.macros.endGroup()
            }, t.future = function() {
              return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
            }, t.popToken = function() {
              return this.future(), this.stack.pop()
            }, t.pushToken = function(e) {
              this.stack.push(e)
            }, t.pushTokens = function(e) {
              var t;
              (t = this.stack).push.apply(t, e)
            }, t.scanArgument = function(e) {
              var t, r, n;
              if (e) {
                if (this.consumeSpaces(), "[" !== this.future().text) return null;
                t = this.popToken();
                var a = this.consumeArg(["]"]);
                n = a.tokens, r = a.end
              } else {
                var i = this.consumeArg();
                n = i.tokens, t = i.start, r = i.end
              }
              return this.pushToken(new Hn("EOF", r.loc)), this.pushTokens(n), t.range(r, "")
            }, t.consumeSpaces = function() {
              for (;
                " " === this.future().text;) this.stack.pop()
            }, t.consumeArg = function(e) {
              var t = [],
                r = e && e.length > 0;
              r || this.consumeSpaces();
              var a, i = this.future(),
                o = 0,
                s = 0;
              do {
                if (a = this.popToken(), t.push(a), "{" === a.text) ++o;
                else if ("}" === a.text) {
                  if (-1 == --o) throw new n("Extra }", a)
                } else if ("EOF" === a.text) throw new n("Unexpected end of input in a macro argument, expected '" + (e && r ? e[s] : "}") + "'", a);
                if (e && r)
                  if ((0 === o || 1 === o && "{" === e[s]) && a.text === e[s]) {
                    if (++s === e.length) {
                      t.splice(-s, s);
                      break
                    }
                  } else s = 0
              } while (0 !== o || r);
              return "{" === i.text && "}" === t[t.length - 1].text && (t.pop(), t.shift()), t.reverse(), {
                tokens: t,
                start: i,
                end: a
              }
            }, t.consumeArgs = function(e, t) {
              if (t) {
                if (t.length !== e + 1) throw new n("The length of delimiters doesn't match the number of args!");
                for (var r = t[0], a = 0; a < r.length; a++) {
                  var i = this.popToken();
                  if (r[a] !== i.text) throw new n("Use of the macro doesn't match its definition", i)
                }
              }
              for (var o = [], s = 0; s < e; s++) o.push(this.consumeArg(t && t[s + 1]).tokens);
              return o
            }, t.expandOnce = function(e) {
              var t = this.popToken(),
                r = t.text,
                a = t.noexpand ? null : this._getExpansion(r);
              if (null == a || e && a.unexpandable) {
                if (e && null == a && "\\" === r[0] && !this.isDefined(r)) throw new n("Undefined control sequence: " + r);
                return this.pushToken(t), t
              }
              if (this.expansionCount++, this.expansionCount > this.settings.maxExpand) throw new n("Too many expansions: infinite loop or need to increase maxExpand setting");
              var i = a.tokens,
                o = this.consumeArgs(a.numArgs, a.delimiters);
              if (a.numArgs)
                for (var s = (i = i.slice()).length - 1; s >= 0; --s) {
                  var l = i[s];
                  if ("#" === l.text) {
                    if (0 === s) throw new n("Incomplete placeholder at end of macro body", l);
                    if ("#" === (l = i[--s]).text) i.splice(s + 1, 1);
                    else {
                      if (!/^[1-9]$/.test(l.text)) throw new n("Not a valid argument number", l);
                      var h;
                      (h = i).splice.apply(h, [s, 2].concat(o[+l.text - 1]))
                    }
                  }
                }
              return this.pushTokens(i), i
            }, t.expandAfterFuture = function() {
              return this.expandOnce(), this.future()
            }, t.expandNextToken = function() {
              for (;;) {
                var e = this.expandOnce();
                if (e instanceof Hn) {
                  if ("\\relax" !== e.text && !e.treatAsRelax) return this.stack.pop();
                  this.stack.pop()
                }
              }
              throw new Error
            }, t.expandMacro = function(e) {
              return this.macros.has(e) ? this.expandTokens([new Hn(e)]) : void 0
            }, t.expandTokens = function(e) {
              var t = [],
                r = this.stack.length;
              for (this.pushTokens(e); this.stack.length > r;) {
                var n = this.expandOnce(!0);
                n instanceof Hn && (n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(this.stack.pop()))
              }
              return t
            }, t.expandMacroAsText = function(e) {
              var t = this.expandMacro(e);
              return t ? t.map((function(e) {
                return e.text
              })).join("") : t
            }, t._getExpansion = function(e) {
              var t = this.macros.get(e);
              if (null == t) return t;
              if (1 === e.length) {
                var r = this.lexer.catcodes[e];
                if (null != r && 13 !== r) return
              }
              var n = "function" == typeof t ? t(this) : t;
              if ("string" == typeof n) {
                var a = 0;
                if (-1 !== n.indexOf("#"))
                  for (var i = n.replace(/##/g, ""); - 1 !== i.indexOf("#" + (a + 1));) ++a;
                for (var o = new Dn(n, this.settings), s = [], l = o.lex();
                  "EOF" !== l.text;) s.push(l), l = o.lex();
                return s.reverse(), {
                  tokens: s,
                  numArgs: a
                }
              }
              return n
            }, t.isDefined = function(e) {
              return this.macros.has(e) || On.hasOwnProperty(e) || X.math.hasOwnProperty(e) || X.text.hasOwnProperty(e) || Fn.hasOwnProperty(e)
            }, t.isExpandable = function(e) {
              var t = this.macros.get(e);
              return null != t ? "string" == typeof t || "function" == typeof t || !t.unexpandable : On.hasOwnProperty(e) && !On[e].primitive
            }, e
          }(),
          Gn = {
            "́": {
              text: "\\'",
              math: "\\acute"
            },
            "̀": {
              text: "\\`",
              math: "\\grave"
            },
            "̈": {
              text: '\\"',
              math: "\\ddot"
            },
            "̃": {
              text: "\\~",
              math: "\\tilde"
            },
            "̄": {
              text: "\\=",
              math: "\\bar"
            },
            "̆": {
              text: "\\u",
              math: "\\breve"
            },
            "̌": {
              text: "\\v",
              math: "\\check"
            },
            "̂": {
              text: "\\^",
              math: "\\hat"
            },
            "̇": {
              text: "\\.",
              math: "\\dot"
            },
            "̊": {
              text: "\\r",
              math: "\\mathring"
            },
            "̋": {
              text: "\\H"
            }
          },
          Un = {
            "á": "á",
            "à": "à",
            "ä": "ä",
            "ǟ": "ǟ",
            "ã": "ã",
            "ā": "ā",
            "ă": "ă",
            "ắ": "ắ",
            "ằ": "ằ",
            "ẵ": "ẵ",
            "ǎ": "ǎ",
            "â": "â",
            "ấ": "ấ",
            "ầ": "ầ",
            "ẫ": "ẫ",
            "ȧ": "ȧ",
            "ǡ": "ǡ",
            "å": "å",
            "ǻ": "ǻ",
            "ḃ": "ḃ",
            "ć": "ć",
            "č": "č",
            "ĉ": "ĉ",
            "ċ": "ċ",
            "ď": "ď",
            "ḋ": "ḋ",
            "é": "é",
            "è": "è",
            "ë": "ë",
            "ẽ": "ẽ",
            "ē": "ē",
            "ḗ": "ḗ",
            "ḕ": "ḕ",
            "ĕ": "ĕ",
            "ě": "ě",
            "ê": "ê",
            "ế": "ế",
            "ề": "ề",
            "ễ": "ễ",
            "ė": "ė",
            "ḟ": "ḟ",
            "ǵ": "ǵ",
            "ḡ": "ḡ",
            "ğ": "ğ",
            "ǧ": "ǧ",
            "ĝ": "ĝ",
            "ġ": "ġ",
            "ḧ": "ḧ",
            "ȟ": "ȟ",
            "ĥ": "ĥ",
            "ḣ": "ḣ",
            "í": "í",
            "ì": "ì",
            "ï": "ï",
            "ḯ": "ḯ",
            "ĩ": "ĩ",
            "ī": "ī",
            "ĭ": "ĭ",
            "ǐ": "ǐ",
            "î": "î",
            "ǰ": "ǰ",
            "ĵ": "ĵ",
            "ḱ": "ḱ",
            "ǩ": "ǩ",
            "ĺ": "ĺ",
            "ľ": "ľ",
            "ḿ": "ḿ",
            "ṁ": "ṁ",
            "ń": "ń",
            "ǹ": "ǹ",
            "ñ": "ñ",
            "ň": "ň",
            "ṅ": "ṅ",
            "ó": "ó",
            "ò": "ò",
            "ö": "ö",
            "ȫ": "ȫ",
            "õ": "õ",
            "ṍ": "ṍ",
            "ṏ": "ṏ",
            "ȭ": "ȭ",
            "ō": "ō",
            "ṓ": "ṓ",
            "ṑ": "ṑ",
            "ŏ": "ŏ",
            "ǒ": "ǒ",
            "ô": "ô",
            "ố": "ố",
            "ồ": "ồ",
            "ỗ": "ỗ",
            "ȯ": "ȯ",
            "ȱ": "ȱ",
            "ő": "ő",
            "ṕ": "ṕ",
            "ṗ": "ṗ",
            "ŕ": "ŕ",
            "ř": "ř",
            "ṙ": "ṙ",
            "ś": "ś",
            "ṥ": "ṥ",
            "š": "š",
            "ṧ": "ṧ",
            "ŝ": "ŝ",
            "ṡ": "ṡ",
            "ẗ": "ẗ",
            "ť": "ť",
            "ṫ": "ṫ",
            "ú": "ú",
            "ù": "ù",
            "ü": "ü",
            "ǘ": "ǘ",
            "ǜ": "ǜ",
            "ǖ": "ǖ",
            "ǚ": "ǚ",
            "ũ": "ũ",
            "ṹ": "ṹ",
            "ū": "ū",
            "ṻ": "ṻ",
            "ŭ": "ŭ",
            "ǔ": "ǔ",
            "û": "û",
            "ů": "ů",
            "ű": "ű",
            "ṽ": "ṽ",
            "ẃ": "ẃ",
            "ẁ": "ẁ",
            "ẅ": "ẅ",
            "ŵ": "ŵ",
            "ẇ": "ẇ",
            "ẘ": "ẘ",
            "ẍ": "ẍ",
            "ẋ": "ẋ",
            "ý": "ý",
            "ỳ": "ỳ",
            "ÿ": "ÿ",
            "ỹ": "ỹ",
            "ȳ": "ȳ",
            "ŷ": "ŷ",
            "ẏ": "ẏ",
            "ẙ": "ẙ",
            "ź": "ź",
            "ž": "ž",
            "ẑ": "ẑ",
            "ż": "ż",
            "Á": "Á",
            "À": "À",
            "Ä": "Ä",
            "Ǟ": "Ǟ",
            "Ã": "Ã",
            "Ā": "Ā",
            "Ă": "Ă",
            "Ắ": "Ắ",
            "Ằ": "Ằ",
            "Ẵ": "Ẵ",
            "Ǎ": "Ǎ",
            "Â": "Â",
            "Ấ": "Ấ",
            "Ầ": "Ầ",
            "Ẫ": "Ẫ",
            "Ȧ": "Ȧ",
            "Ǡ": "Ǡ",
            "Å": "Å",
            "Ǻ": "Ǻ",
            "Ḃ": "Ḃ",
            "Ć": "Ć",
            "Č": "Č",
            "Ĉ": "Ĉ",
            "Ċ": "Ċ",
            "Ď": "Ď",
            "Ḋ": "Ḋ",
            "É": "É",
            "È": "È",
            "Ë": "Ë",
            "Ẽ": "Ẽ",
            "Ē": "Ē",
            "Ḗ": "Ḗ",
            "Ḕ": "Ḕ",
            "Ĕ": "Ĕ",
            "Ě": "Ě",
            "Ê": "Ê",
            "Ế": "Ế",
            "Ề": "Ề",
            "Ễ": "Ễ",
            "Ė": "Ė",
            "Ḟ": "Ḟ",
            "Ǵ": "Ǵ",
            "Ḡ": "Ḡ",
            "Ğ": "Ğ",
            "Ǧ": "Ǧ",
            "Ĝ": "Ĝ",
            "Ġ": "Ġ",
            "Ḧ": "Ḧ",
            "Ȟ": "Ȟ",
            "Ĥ": "Ĥ",
            "Ḣ": "Ḣ",
            "Í": "Í",
            "Ì": "Ì",
            "Ï": "Ï",
            "Ḯ": "Ḯ",
            "Ĩ": "Ĩ",
            "Ī": "Ī",
            "Ĭ": "Ĭ",
            "Ǐ": "Ǐ",
            "Î": "Î",
            "İ": "İ",
            "Ĵ": "Ĵ",
            "Ḱ": "Ḱ",
            "Ǩ": "Ǩ",
            "Ĺ": "Ĺ",
            "Ľ": "Ľ",
            "Ḿ": "Ḿ",
            "Ṁ": "Ṁ",
            "Ń": "Ń",
            "Ǹ": "Ǹ",
            "Ñ": "Ñ",
            "Ň": "Ň",
            "Ṅ": "Ṅ",
            "Ó": "Ó",
            "Ò": "Ò",
            "Ö": "Ö",
            "Ȫ": "Ȫ",
            "Õ": "Õ",
            "Ṍ": "Ṍ",
            "Ṏ": "Ṏ",
            "Ȭ": "Ȭ",
            "Ō": "Ō",
            "Ṓ": "Ṓ",
            "Ṑ": "Ṑ",
            "Ŏ": "Ŏ",
            "Ǒ": "Ǒ",
            "Ô": "Ô",
            "Ố": "Ố",
            "Ồ": "Ồ",
            "Ỗ": "Ỗ",
            "Ȯ": "Ȯ",
            "Ȱ": "Ȱ",
            "Ő": "Ő",
            "Ṕ": "Ṕ",
            "Ṗ": "Ṗ",
            "Ŕ": "Ŕ",
            "Ř": "Ř",
            "Ṙ": "Ṙ",
            "Ś": "Ś",
            "Ṥ": "Ṥ",
            "Š": "Š",
            "Ṧ": "Ṧ",
            "Ŝ": "Ŝ",
            "Ṡ": "Ṡ",
            "Ť": "Ť",
            "Ṫ": "Ṫ",
            "Ú": "Ú",
            "Ù": "Ù",
            "Ü": "Ü",
            "Ǘ": "Ǘ",
            "Ǜ": "Ǜ",
            "Ǖ": "Ǖ",
            "Ǚ": "Ǚ",
            "Ũ": "Ũ",
            "Ṹ": "Ṹ",
            "Ū": "Ū",
            "Ṻ": "Ṻ",
            "Ŭ": "Ŭ",
            "Ǔ": "Ǔ",
            "Û": "Û",
            "Ů": "Ů",
            "Ű": "Ű",
            "Ṽ": "Ṽ",
            "Ẃ": "Ẃ",
            "Ẁ": "Ẁ",
            "Ẅ": "Ẅ",
            "Ŵ": "Ŵ",
            "Ẇ": "Ẇ",
            "Ẍ": "Ẍ",
            "Ẋ": "Ẋ",
            "Ý": "Ý",
            "Ỳ": "Ỳ",
            "Ÿ": "Ÿ",
            "Ỹ": "Ỹ",
            "Ȳ": "Ȳ",
            "Ŷ": "Ŷ",
            "Ẏ": "Ẏ",
            "Ź": "Ź",
            "Ž": "Ž",
            "Ẑ": "Ẑ",
            "Ż": "Ż",
            "ά": "ά",
            "ὰ": "ὰ",
            "ᾱ": "ᾱ",
            "ᾰ": "ᾰ",
            "έ": "έ",
            "ὲ": "ὲ",
            "ή": "ή",
            "ὴ": "ὴ",
            "ί": "ί",
            "ὶ": "ὶ",
            "ϊ": "ϊ",
            "ΐ": "ΐ",
            "ῒ": "ῒ",
            "ῑ": "ῑ",
            "ῐ": "ῐ",
            "ό": "ό",
            "ὸ": "ὸ",
            "ύ": "ύ",
            "ὺ": "ὺ",
            "ϋ": "ϋ",
            "ΰ": "ΰ",
            "ῢ": "ῢ",
            "ῡ": "ῡ",
            "ῠ": "ῠ",
            "ώ": "ώ",
            "ὼ": "ὼ",
            "Ύ": "Ύ",
            "Ὺ": "Ὺ",
            "Ϋ": "Ϋ",
            "Ῡ": "Ῡ",
            "Ῠ": "Ῠ",
            "Ώ": "Ώ",
            "Ὼ": "Ὼ"
          },
          Yn = function() {
            function e(e, t) {
              this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Vn(e, t, this.mode), this.settings = t, this.leftrightDepth = 0
            }
            var t = e.prototype;
            return t.expect = function(e, t) {
              if (void 0 === t && (t = !0), this.fetch().text !== e) throw new n("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
              t && this.consume()
            }, t.consume = function() {
              this.nextToken = null
            }, t.fetch = function() {
              return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()), this.nextToken
            }, t.switchMode = function(e) {
              this.mode = e, this.gullet.switchMode(e)
            }, t.parse = function() {
              this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
              var e = this.parseExpression(!1);
              return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e
            }, t.parseExpression = function(t, r) {
              for (var n = [];;) {
                "math" === this.mode && this.consumeSpaces();
                var a = this.fetch();
                if (-1 !== e.endOfExpression.indexOf(a.text)) break;
                if (r && a.text === r) break;
                if (t && On[a.text] && On[a.text].infix) break;
                var i = this.parseAtom(r);
                if (!i) break;
                "internal" !== i.type && n.push(i)
              }
              return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
            }, t.handleInfixNodes = function(e) {
              for (var t, r = -1, a = 0; a < e.length; a++)
                if ("infix" === e[a].type) {
                  if (-1 !== r) throw new n("only one infix operator per group", e[a].token);
                  r = a, t = e[a].replaceWith
                } if (-1 !== r && t) {
                var i, o, s = e.slice(0, r),
                  l = e.slice(r + 1);
                return i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : {
                  type: "ordgroup",
                  mode: this.mode,
                  body: s
                }, o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                  type: "ordgroup",
                  mode: this.mode,
                  body: l
                }, ["\\\\abovefrac" === t ? this.callFunction(t, [i, e[r], o], []) : this.callFunction(t, [i, o], [])]
              }
              return e
            }, t.handleSupSubscript = function(e) {
              var t = this.fetch(),
                r = t.text;
              this.consume(), this.consumeSpaces();
              var a = this.parseGroup(e);
              if (!a) throw new n("Expected group after '" + r + "'", t);
              return a
            }, t.formatUnsupportedCmd = function(e) {
              for (var t = [], r = 0; r < e.length; r++) t.push({
                type: "textord",
                mode: "text",
                text: e[r]
              });
              var n = {
                type: "text",
                mode: this.mode,
                body: t
              };
              return {
                type: "color",
                mode: this.mode,
                color: this.settings.errorColor,
                body: [n]
              }
            }, t.parseAtom = function(e) {
              var t, r, a = this.parseGroup("atom", e);
              if ("text" === this.mode) return a;
              for (;;) {
                this.consumeSpaces();
                var i = this.fetch();
                if ("\\limits" === i.text || "\\nolimits" === i.text) {
                  if (a && "op" === a.type) {
                    var o = "\\limits" === i.text;
                    a.limits = o, a.alwaysHandleSupSub = !0
                  } else {
                    if (!a || "operatorname" !== a.type) throw new n("Limit controls must follow a math operator", i);
                    a.alwaysHandleSupSub && (a.limits = "\\limits" === i.text)
                  }
                  this.consume()
                } else if ("^" === i.text) {
                  if (t) throw new n("Double superscript", i);
                  t = this.handleSupSubscript("superscript")
                } else if ("_" === i.text) {
                  if (r) throw new n("Double subscript", i);
                  r = this.handleSupSubscript("subscript")
                } else {
                  if ("'" !== i.text) break;
                  if (t) throw new n("Double superscript", i);
                  var s = {
                      type: "textord",
                      mode: this.mode,
                      text: "\\prime"
                    },
                    l = [s];
                  for (this.consume();
                    "'" === this.fetch().text;) l.push(s), this.consume();
                  "^" === this.fetch().text && l.push(this.handleSupSubscript("superscript")), t = {
                    type: "ordgroup",
                    mode: this.mode,
                    body: l
                  }
                }
              }
              return t || r ? {
                type: "supsub",
                mode: this.mode,
                base: a,
                sup: t,
                sub: r
              } : a
            }, t.parseFunction = function(e, t) {
              var r = this.fetch(),
                a = r.text,
                i = On[a];
              if (!i) return null;
              if (this.consume(), t && "atom" !== t && !i.allowedInArgument) throw new n("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), r);
              if ("text" === this.mode && !i.allowedInText) throw new n("Can't use function '" + a + "' in text mode", r);
              if ("math" === this.mode && !1 === i.allowedInMath) throw new n("Can't use function '" + a + "' in math mode", r);
              var o = this.parseArguments(a, i),
                s = o.args,
                l = o.optArgs;
              return this.callFunction(a, s, l, r, e)
            }, t.callFunction = function(e, t, r, a, i) {
              var o = {
                  funcName: e,
                  parser: this,
                  token: a,
                  breakOnTokenText: i
                },
                s = On[e];
              if (s && s.handler) return s.handler(o, t, r);
              throw new n("No function handler for " + e)
            }, t.parseArguments = function(e, t) {
              var r = t.numArgs + t.numOptionalArgs;
              if (0 === r) return {
                args: [],
                optArgs: []
              };
              for (var a = [], i = [], o = 0; o < r; o++) {
                var s = t.argTypes && t.argTypes[o],
                  l = o < t.numOptionalArgs;
                (t.primitive && null == s || "sqrt" === t.type && 1 === o && null == i[0]) && (s = "primitive");
                var h = this.parseGroupOfType("argument to '" + e + "'", s, l);
                if (l) i.push(h);
                else {
                  if (null == h) throw new n("Null argument, please report this as a bug");
                  a.push(h)
                }
              }
              return {
                args: a,
                optArgs: i
              }
            }, t.parseGroupOfType = function(e, t, r) {
              switch (t) {
                case "color":
                  return this.parseColorGroup(r);
                case "size":
                  return this.parseSizeGroup(r);
                case "url":
                  return this.parseUrlGroup(r);
                case "math":
                case "text":
                  return this.parseArgumentGroup(r, t);
                case "hbox":
                  var a = this.parseArgumentGroup(r, "text");
                  return null != a ? {
                    type: "styling",
                    mode: a.mode,
                    body: [a],
                    style: "text"
                  } : null;
                case "raw":
                  var i = this.parseStringGroup("raw", r);
                  return null != i ? {
                    type: "raw",
                    mode: "text",
                    string: i.text
                  } : null;
                case "primitive":
                  if (r) throw new n("A primitive argument cannot be optional");
                  var o = this.parseGroup(e);
                  if (null == o) throw new n("Expected group as " + e, this.fetch());
                  return o;
                case "original":
                case null:
                case void 0:
                  return this.parseArgumentGroup(r);
                default:
                  throw new n("Unknown group type as " + e, this.fetch())
              }
            }, t.consumeSpaces = function() {
              for (;
                " " === this.fetch().text;) this.consume()
            }, t.parseStringGroup = function(e, t) {
              var r = this.gullet.scanArgument(t);
              if (null == r) return null;
              for (var n, a = "";
                "EOF" !== (n = this.fetch()).text;) a += n.text, this.consume();
              return this.consume(), r.text = a, r
            }, t.parseRegexGroup = function(e, t) {
              for (var r, a = this.fetch(), i = a, o = "";
                "EOF" !== (r = this.fetch()).text && e.test(o + r.text);) o += (i = r).text, this.consume();
              if ("" === o) throw new n("Invalid " + t + ": '" + a.text + "'", a);
              return a.range(i, o)
            }, t.parseColorGroup = function(e) {
              var t = this.parseStringGroup("color", e);
              if (null == t) return null;
              var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
              if (!r) throw new n("Invalid color: '" + t.text + "'", t);
              var a = r[0];
              return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
                type: "color-token",
                mode: this.mode,
                color: a
              }
            }, t.parseSizeGroup = function(e) {
              var t, r = !1;
              if (this.gullet.consumeSpaces(), !(t = e || "{" === this.gullet.future().text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
              e || 0 !== t.text.length || (t.text = "0pt", r = !0);
              var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
              if (!a) throw new n("Invalid size: '" + t.text + "'", t);
              var i = {
                number: +(a[1] + a[2]),
                unit: a[3]
              };
              if (!He(i)) throw new n("Invalid unit: '" + i.unit + "'", t);
              return {
                type: "size",
                mode: this.mode,
                value: i,
                isBlank: r
              }
            }, t.parseUrlGroup = function(e) {
              this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
              var t = this.parseStringGroup("url", e);
              if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), null == t) return null;
              var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
              return {
                type: "url",
                mode: this.mode,
                url: r
              }
            }, t.parseArgumentGroup = function(e, t) {
              var r = this.gullet.scanArgument(e);
              if (null == r) return null;
              var n = this.mode;
              t && this.switchMode(t), this.gullet.beginGroup();
              var a = this.parseExpression(!1, "EOF");
              this.expect("EOF"), this.gullet.endGroup();
              var i = {
                type: "ordgroup",
                mode: this.mode,
                loc: r.loc,
                body: a
              };
              return t && this.switchMode(n), i
            }, t.parseGroup = function(e, t) {
              var r, a = this.fetch(),
                i = a.text;
              if ("{" === i || "\\begingroup" === i) {
                this.consume();
                var o = "{" === i ? "}" : "\\endgroup";
                this.gullet.beginGroup();
                var s = this.parseExpression(!1, o),
                  l = this.fetch();
                this.expect(o), this.gullet.endGroup(), r = {
                  type: "ordgroup",
                  mode: this.mode,
                  loc: En.range(a, l),
                  body: s,
                  semisimple: "\\begingroup" === i || void 0
                }
              } else if (null == (r = this.parseFunction(t, e) || this.parseSymbol()) && "\\" === i[0] && !Fn.hasOwnProperty(i)) {
                if (this.settings.throwOnError) throw new n("Undefined control sequence: " + i, a);
                r = this.formatUnsupportedCmd(i), this.consume()
              }
              return r
            }, t.formLigatures = function(e) {
              for (var t = e.length - 1, r = 0; r < t; ++r) {
                var n = e[r],
                  a = n.text;
                "-" === a && "-" === e[r + 1].text && (r + 1 < t && "-" === e[r + 2].text ? (e.splice(r, 3, {
                  type: "textord",
                  mode: "text",
                  loc: En.range(n, e[r + 2]),
                  text: "---"
                }), t -= 2) : (e.splice(r, 2, {
                  type: "textord",
                  mode: "text",
                  loc: En.range(n, e[r + 1]),
                  text: "--"
                }), t -= 1)), "'" !== a && "`" !== a || e[r + 1].text !== a || (e.splice(r, 2, {
                  type: "textord",
                  mode: "text",
                  loc: En.range(n, e[r + 1]),
                  text: a + a
                }), t -= 1)
              }
            }, t.parseSymbol = function() {
              var e = this.fetch(),
                t = e.text;
              if (/^\\verb[^a-zA-Z]/.test(t)) {
                this.consume();
                var r = t.slice(5),
                  a = "*" === r.charAt(0);
                if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new n("\\verb assertion failed --\n                    please report what input caused this bug");
                return {
                  type: "verb",
                  mode: "text",
                  body: r = r.slice(1, -1),
                  star: a
                }
              }
              Un.hasOwnProperty(t[0]) && !X[this.mode][t[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Un[t[0]] + t.substr(1));
              var i, o = Ln.exec(t);
              if (o && ("i" === (t = t.substring(0, o.index)) ? t = "ı" : "j" === t && (t = "ȷ")), X[this.mode][t]) {
                this.settings.strict && "math" === this.mode && Me.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
                var s, l = X[this.mode][t].group,
                  h = En.range(e);
                if (U.hasOwnProperty(l)) {
                  var m = l;
                  s = {
                    type: "atom",
                    mode: this.mode,
                    family: m,
                    loc: h,
                    text: t
                  }
                } else s = {
                  type: l,
                  mode: this.mode,
                  loc: h,
                  text: t
                };
                i = s
              } else {
                if (!(t.charCodeAt(0) >= 128)) return null;
                this.settings.strict && (w(t.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '" (' + t.charCodeAt(0) + ")", e)), i = {
                  type: "textord",
                  mode: "text",
                  loc: En.range(e),
                  text: t
                }
              }
              if (this.consume(), o)
                for (var c = 0; c < o[0].length; c++) {
                  var u = o[0][c];
                  if (!Gn[u]) throw new n("Unknown accent ' " + u + "'", e);
                  var p = Gn[u][this.mode];
                  if (!p) throw new n("Accent " + u + " unsupported in " + this.mode + " mode", e);
                  i = {
                    type: "accent",
                    mode: this.mode,
                    loc: En.range(e),
                    label: p,
                    isStretchy: !1,
                    isShifty: !0,
                    base: i
                  }
                }
              return i
            }, e
          }();
        Yn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"];
        var Wn = function(e, t) {
            if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
            var r = new Yn(e, t);
            delete r.gullet.macros.current["\\df@tag"];
            var a = r.parse();
            if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
              if (!t.displayMode) throw new n("\\tag works only in display equations");
              r.gullet.feed("\\df@tag"), a = [{
                type: "tag",
                mode: "text",
                body: a,
                tag: r.parse()
              }]
            }
            return a
          },
          Xn = function(e, t, r) {
            t.textContent = "";
            var n = $n(e, r).toNode();
            t.appendChild(n)
          };
        "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Xn = function() {
          throw new n("KaTeX doesn't work in quirks mode.")
        });
        var _n = function(e, t, r) {
            if (r.throwOnError || !(e instanceof n)) throw e;
            var a = $e.makeSpan(["katex-error"], [new R(t)]);
            return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + r.errorColor), a
          },
          $n = function(e, t) {
            var r = new h(t);
            try {
              return function(e, t, r) {
                var n, a = It(r);
                if ("mathml" === r.output) return Ct(e, t, a, r.displayMode, !0);
                if ("html" === r.output) {
                  var i = xt(e, a);
                  n = $e.makeSpan(["katex"], [i])
                } else {
                  var o = Ct(e, t, a, r.displayMode, !1),
                    s = xt(e, a);
                  n = $e.makeSpan(["katex"], [o, s])
                }
                return Rt(n, r)
              }(Wn(e, r), e, r)
            } catch (t) {
              return _n(t, e, r)
            }
          },
          jn = {
            version: "0.13.11",
            render: Xn,
            renderToString: function(e, t) {
              return $n(e, t).toMarkup()
            },
            ParseError: n,
            __parse: function(e, t) {
              var r = new h(t);
              return Wn(e, r)
            },
            __renderToDomTree: $n,
            __renderToHTMLTree: function(e, t) {
              var r = new h(t);
              try {
                return function(e, t, r) {
                  var n = xt(e, It(r)),
                    a = $e.makeSpan(["katex"], [n]);
                  return Rt(a, r)
                }(Wn(e, r), 0, r)
              } catch (t) {
                return _n(t, e, r)
              }
            },
            __setFontMetrics: function(e, t) {
              D[e] = t
            },
            __defineSymbol: _,
            __defineMacro: dn,
            __domTree: {
              Span: N,
              Anchor: q,
              SymbolNode: R,
              SvgNode: O,
              PathNode: E,
              LineNode: H
            }
          };
        return t = t.default
      }()
    }, e.exports = r()
  }(e);
  var t = e.exports;
  const r = RegExp(/^(\$+)([^\$]|[^\$][\s\S]*?[^\$])\1(?!\$)/);
  let n = {
    name: "katex",
    level: "inline",
    start(e) {
      var t;
      return null === (t = e.match(/(\$){1,2}/)) || void 0 === t ? void 0 : t.index
    },
    tokenizer(e) {
      const t = r.exec(e);
      if (t) return {
        type: "katex",
        raw: t[0],
        formula: t[2].trim(),
        displayMode: "$$" === t[1]
      }
    },
    renderer: e => t.renderToString(e.formula, {
      displayMode: e.displayMode
    })
  };
  return {
    setup: function(e) {
      e.getMarkedParser().use({
        extensions: [n]
      })
    }
  }
}));
