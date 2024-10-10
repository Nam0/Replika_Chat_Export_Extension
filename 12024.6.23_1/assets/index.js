//assets/index.js
//Hours Wasted: 9 1/2 Gotta waste more to fix fuckups tho
import {
    countMessages,
    getLastMessageId,
    database,
    replikaExportKey,
    getAllMessages,
    checkPayment
} from "./replikaExport.js";

import {
    LodashE1,
    LodashE2,
    LodashE3
} from "./lodash.js";

var s1 = Object.defineProperty;
var o1 = (f, i, n) => i in f ? s1(f, i, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : f[i] = n;
var Fu = (f, i, n) => (o1(f, typeof i != "symbol" ? i + "" : i, n), n);


(function() {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) l(s);
    new MutationObserver(s => {
        for (const d of s)
            if (d.type === "childList")
                for (const u of d.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && l(u)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const d = {};
        return s.integrity && (d.integrity = s.integrity), s.referrerpolicy && (d.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? d.credentials = "include" : s.crossorigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function l(s) {
        if (s.ep) return;
        s.ep = !0;
        const d = n(s);
        fetch(s.href, d)
    }
})();

function ne() {}

function c1(f, i) {
    for (const n in i) f[n] = i[n];
    return f
}

function h1(f) {
    return !!f && (typeof f == "object" || typeof f == "function") && typeof f.then == "function"
}

function ml(f) {
    return f()
}

function Pu() {
    return Object.create(null)
}

function tn(f) {
    f.forEach(ml)
}

function Ti(f) {
    return typeof f == "function"
}

function en(f, i) {
    return f != f ? i == i : f !== i || f && typeof f == "object" || typeof f == "function"
}

function d1(f) {
    return Object.keys(f).length === 0
}

function qs(f, i, n, l) {
    if (f) {
        const s = vl(f, i, n, l);
        return f[0](s)
    }
}

function vl(f, i, n, l) {
    return f[1] && l ? c1(n.ctx.slice(), f[1](l(i))) : n.ctx
}

function js(f, i, n, l) {
    if (f[2] && l) {
        const s = f[2](l(n));
        if (i.dirty === void 0) return s;
        if (typeof s == "object") {
            const d = [],
                u = Math.max(i.dirty.length, s.length);
            for (let a = 0; a < u; a += 1) d[a] = i.dirty[a] | s[a];
            return d
        }
        return i.dirty | s
    }
    return i.dirty
}

function Ys(f, i, n, l, s, d) {
    if (s) {
        const u = vl(i, n, l, d);
        f.p(u, s)
    }
}

function Js(f) {
    if (f.ctx.length > 32) {
        const i = [],
            n = f.ctx.length / 32;
        for (let l = 0; l < n; l++) i[l] = -1;
        return i
    }
    return -1
}

function q(f, i) {
    f.appendChild(i)
}

function pt(f, i, n) {
    f.insertBefore(i, n || null)
}

function ht(f) {
    f.parentNode && f.parentNode.removeChild(f)
}

function Dn(f, i) {
    for (let n = 0; n < f.length; n += 1) f[n] && f[n].d(i)
}

function ot(f) {
    return document.createElement(f)
}

function It(f) {
    return document.createTextNode(f)
}

function Et() {
    return It(" ")
}

function yn() {
    return It("")
}

function le(f, i, n, l) {
    return f.addEventListener(i, n, l), () => f.removeEventListener(i, n, l)
}

function dt(f, i, n) {
    n == null ? f.removeAttribute(i) : f.getAttribute(i) !== n && f.setAttribute(i, n)
}

function lr(f) {
    return f === "" ? null : +f
}

function p1(f) {
    return Array.from(f.childNodes)
}

function ae(f, i) {
    i = "" + i, f.wholeText !== i && (f.data = i)
}

function Ln(f, i) {
    f.value = i ?? ""
}

function fr(f, i) {
    for (let n = 0; n < f.options.length; n += 1) {
        const l = f.options[n];
        if (l.__value === i) {
            l.selected = !0;
            return
        }
    }
    f.selectedIndex = -1
}

function Vs(f) {
    const i = f.querySelector(":checked") || f.options[0];
    return i && i.__value
}

function Wu(f, i) {
    return new f(i)
}
let Lr;

function wn(f) {
    Lr = f
}

function wl() {
    if (!Lr) throw new Error("Function called outside component initialization");
    return Lr
}

function yl(f) {
    wl().$$.on_mount.push(f)
}
const ur = [],
    Dr = [],
    Ai = [],
    Qs = [],
    _1 = Promise.resolve();
let to = !1;

function g1() {
    to || (to = !0, _1.then(oo))
}

function cr(f) {
    Ai.push(f)
}

function bl(f) {
    Qs.push(f)
}
const Xs = new Set;
let ar = 0;

function oo() {
    if (ar !== 0) return;
    const f = Lr;
    do {
        try {
            for (; ar < ur.length;) {
                const i = ur[ar];
                ar++, wn(i), m1(i.$$)
            }
        } catch (i) {
            throw ur.length = 0, ar = 0, i
        }
        for (wn(null), ur.length = 0, ar = 0; Dr.length;) Dr.pop()();
        for (let i = 0; i < Ai.length; i += 1) {
            const n = Ai[i];
            Xs.has(n) || (Xs.add(n), n())
        }
        Ai.length = 0
    } while (ur.length);
    for (; Qs.length;) Qs.pop()();
    to = !1, Xs.clear(), wn(f)
}

function m1(f) {
    if (f.fragment !== null) {
        f.update(), tn(f.before_update);
        const i = f.dirty;
        f.dirty = [-1], f.fragment && f.fragment.p(f.ctx, i), f.after_update.forEach(cr)
    }
}
const Ei = new Set;
let Zn;

function pr() {
    Zn = {
        r: 0,
        c: [],
        p: Zn
    }
}

function _r() {
    Zn.r || tn(Zn.c), Zn = Zn.p
}

function Ht(f, i) {
    f && f.i && (Ei.delete(f), f.i(i))
}

function qt(f, i, n, l) {
    if (f && f.o) {
        if (Ei.has(f)) return;
        Ei.add(f), Zn.c.push(() => {
            Ei.delete(f), l && (n && f.d(1), l())
        }), f.o(i)
    } else l && l()
}

function v1(f, i) {
    const n = i.token = {};

    function l(s, d, u, a) {
        if (i.token !== n) return;
        i.resolved = a;
        let m = i.ctx;
        u !== void 0 && (m = m.slice(), m[u] = a);
        const _ = s && (i.current = s)(m);
        let c = !1;
        i.block && (i.blocks ? i.blocks.forEach((g, h) => {
            h !== d && g && (pr(), qt(g, 1, 1, () => {
                i.blocks[h] === g && (i.blocks[h] = null)
            }), _r())
        }) : i.block.d(1), _.c(), Ht(_, 1), _.m(i.mount(), i.anchor), c = !0), i.block = _, i.blocks && (i.blocks[d] = _), c && oo()
    }
    if (h1(f)) {
        const s = wl();
        if (f.then(d => {
                wn(s), l(i.then, 1, i.value, d), wn(null)
            }, d => {
                if (wn(s), l(i.catch, 2, i.error, d), wn(null), !i.hasCatch) throw d
            }), i.current !== i.pending) return l(i.pending, 0), !0
    } else {
        if (i.current !== i.then) return l(i.then, 1, i.value, f), !0;
        i.resolved = f
    }
}

function w1(f, i, n) {
    const l = i.slice(),
        {
            resolved: s
        } = f;
    f.current === f.then && (l[f.value] = s), f.current === f.catch && (l[f.error] = s), f.block.p(l, n)
}

function xl(f, i, n) {
    const l = f.$$.props[i];
    l !== void 0 && (f.$$.bound[l] = n, n(f.$$.ctx[l]))
}

function Ee(f) {
    f && f.c()
}

function ye(f, i, n, l) {
    const {
        fragment: s,
        after_update: d
    } = f.$$;
    s && s.m(i, n), l || cr(() => {
        const u = f.$$.on_mount.map(ml).filter(Ti);
        f.$$.on_destroy ? f.$$.on_destroy.push(...u) : tn(u), f.$$.on_mount = []
    }), d.forEach(cr)
}

function be(f, i) {
    const n = f.$$;
    n.fragment !== null && (tn(n.on_destroy), n.fragment && n.fragment.d(i), n.on_destroy = n.fragment = null, n.ctx = [])
}

function y1(f, i) {
    f.$$.dirty[0] === -1 && (ur.push(f), g1(), f.$$.dirty.fill(0)), f.$$.dirty[i / 31 | 0] |= 1 << i % 31
}

function nn(f, i, n, l, s, d, u, a = [-1]) {
    const m = Lr;
    wn(f);
    const _ = f.$$ = {
        fragment: null,
        ctx: [],
        props: d,
        update: ne,
        not_equal: s,
        bound: Pu(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(i.context || (m ? m.$$.context : [])),
        callbacks: Pu(),
        dirty: a,
        skip_bound: !1,
        root: i.target || m.$$.root
    };
    u && u(_.root);
    let c = !1;
    if (_.ctx = n ? n(f, i.props || {}, (g, h, ...p) => {
            const x = p.length ? p[0] : h;
            return _.ctx && s(_.ctx[g], _.ctx[g] = x) && (!_.skip_bound && _.bound[g] && _.bound[g](x), c && y1(f, g)), h
        }) : [], _.update(), c = !0, tn(_.before_update), _.fragment = l ? l(_.ctx) : !1, i.target) {
        if (i.hydrate) {
            const g = p1(i.target);
            _.fragment && _.fragment.l(g), g.forEach(ht)
        } else _.fragment && _.fragment.c();
        i.intro && Ht(f.$$.fragment), ye(f, i.target, i.anchor, i.customElement), oo()
    }
    wn(m)
}
class rn {
    $destroy() {
        be(this, 1), this.$destroy = ne
    }
    $on(i, n) {
        if (!Ti(n)) return ne;
        const l = this.$$.callbacks[i] || (this.$$.callbacks[i] = []);
        return l.push(n), () => {
            const s = l.indexOf(n);
            s !== -1 && l.splice(s, 1)
        }
    }
    $set(i) {
        this.$$set && !d1(i) && (this.$$.skip_bound = !0, this.$$set(i), this.$$.skip_bound = !1)
    }
}
let ki;
const b1 = new Uint8Array(16);

function x1() {
    if (!ki && (ki = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ki)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return ki(b1)
}
const ge = [];
for (let f = 0; f < 256; ++f) ge.push((f + 256).toString(16).slice(1));

function k1(f, i = 0) {
    return (ge[f[i + 0]] + ge[f[i + 1]] + ge[f[i + 2]] + ge[f[i + 3]] + "-" + ge[f[i + 4]] + ge[f[i + 5]] + "-" + ge[f[i + 6]] + ge[f[i + 7]] + "-" + ge[f[i + 8]] + ge[f[i + 9]] + "-" + ge[f[i + 10]] + ge[f[i + 11]] + ge[f[i + 12]] + ge[f[i + 13]] + ge[f[i + 14]] + ge[f[i + 15]]).toLowerCase()
}
const S1 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    Mu = {
        randomUUID: S1
    };

function Oi(f, i, n) {
    if (Mu.randomUUID && !i && !f) return Mu.randomUUID();
    f = f || {};
    const l = f.random || (f.rng || x1)();
    if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, i) {
        n = n || 0;
        for (let s = 0; s < 16; ++s) i[n + s] = l[s];
        return i
    }
    return k1(l)
}

function A1(f) {
    let i, n, l, s, d, u, a, m, _, c, g, h;
    return {
        c() {
            i = ot("div"), n = ot("details"), n.innerHTML = `<summary class="svelte-1iuev41">Saved your license key but still seeing this message?</summary>
        <div class="svelte-1iuev41"><p>Each license key is tied to a specific user. If you have got the
                license key from someone else, please get your own license key.</p>
            <p>If you have reinstalled the extension and are owning a license
                key, please
                <a href="mailto:replika@wolf.gdn?subject=Reinstall">contact me</a>
                with your license key from the email address you used to purchase
                the license key.</p></div>`, l = Et(), s = ot("details"), d = ot("summary"), d.textContent = "Don't have a license key but have donated to the project before?", u = Et(), a = ot("div"), m = It(`You can sign in
            `), _ = ot("span"), _.textContent = "here", c = It(`
            and this message will go away.`), dt(n, "class", "svelte-1iuev41"), dt(d, "class", "svelte-1iuev41"), dt(_, "class", "underline cursor-pointer"), dt(a, "class", "svelte-1iuev41"), dt(s, "class", "svelte-1iuev41"), dt(i, "class", "space-y-3 text-xs")
        },
        m(p, x) {
            pt(p, i, x), q(i, n), q(i, l), q(i, s), q(s, d), q(s, u), q(s, a), q(a, m), q(a, _), q(a, c), g || (h = [le(_, "click", replikaExportKey.openLoginPage), le(_, "keydown", replikaExportKey.openLoginPage)], g = !0)
        },
        p: ne,
        i: ne,
        o: ne,
        d(p) {
            p && ht(i), g = !1, tn(h)
        }
    }
}
class E1 extends rn {
    constructor(i) {
        super(), nn(this, i, null, A1, en, {})
    }
}

function $u(f) {
    let i, n;
    return {
        c() {
            i = ot("div"), n = It(f[0]), dt(i, "class", "bg-red-9 p-3")
        },
        m(l, s) {
            pt(l, i, s), q(i, n)
        },
        p(l, s) {
            s & 1 && ae(n, l[0])
        },
        d(l) {
            l && ht(i)
        }
    }
}

function C1(f) {
    let i, n, l, s, d, u, a, m, _, c, g, h, p, x, y, A, S, C, T, L, B, G, W = f[0] && $u(f);
    return T = new E1({}), {
        c() {
            i = ot("div"), n = ot("p"), n.textContent = `To keep development going, I am asking you to get a license key for a
        small donation. 💖`, l = Et(), s = ot("p"), s.innerHTML = `You can get one
        <a href="https://payhip.com/buy?link=4MIkv" target="_blank" rel="noreferrer noopener">here</a>.`, d = Et(), u = ot("p"), u.textContent = "Once you have got your license key, please enter it below.", a = Et(), m = ot("p"), m.textContent = "Thank you.", _ = Et(), c = ot("p"), c.textContent = "~ The Extension Developer", g = Et(), h = ot("p"), p = ot("input"), x = Et(), y = ot("button"), y.textContent = "Save", A = Et(), W && W.c(), S = Et(), C = ot("div"), Ee(T.$$.fragment), dt(c, "class", "italic ml-4 opacity-75"), dt(p, "type", "text"), dt(p, "class", "w-full"), dt(p, "placeholder", "License Key <3"), dt(y, "class", "min-w-20"), dt(h, "class", "flex space-x-2 pt-12"), dt(C, "class", "pt-4"), dt(i, "class", "space-y-2")
        },
        m(V, Z) {
            pt(V, i, Z), q(i, n), q(i, l), q(i, s), q(i, d), q(i, u), q(i, a), q(i, m), q(i, _), q(i, c), q(i, g), q(i, h), q(h, p), Ln(p, f[1].licenseKey), q(h, x), q(h, y), q(i, A), W && W.m(i, null), q(i, S), q(i, C), ye(T, C, null), L = !0, B || (G = [le(p, "input", f[3]), le(y, "click", f[2])], B = !0)
        },
        p(V, [Z]) {
            Z & 2 && p.value !== V[1].licenseKey && Ln(p, V[1].licenseKey), V[0] ? W ? W.p(V, Z) : (W = $u(V), W.c(), W.m(i, S)) : W && (W.d(1), W = null)
        },
        i(V) {
            L || (Ht(T.$$.fragment, V), L = !0)
        },
        o(V) {
            qt(T.$$.fragment, V), L = !1
        },
        d(V) {
            V && ht(i), W && W.d(), be(T), B = !1, tn(G)
        }
    }
}

function I1(f, i, n) {
    let {
        error: l = null
    } = i, s = {
        userId: "",
        licenseKey: ""
    };
    chrome.runtime && chrome.runtime.id && chrome.storage.sync.get("details", a => {
        a.details && (a.details.userId && n(1, s.userId = a.details.userId, s), a.details.licenseKey && n(1, s.licenseKey = a.details.licenseKey, s))
    });
    async function d() {
        s.userId || n(1, s.userId = Oi(), s), n(1, s.licenseKey = s.licenseKey.trim(), s), await chrome.storage.sync.set({
            details: s
        }), window.location.reload()
    }

    function u() {
        s.licenseKey = this.value, n(1, s)
    }
    return f.$$set = a => {
        "error" in a && n(0, l = a.error)
    }, [l, s, d, u]
}
class kl extends rn {
    constructor(i) {
        super(), nn(this, i, I1, C1, en, {
            error: 0
        })
    }
}
var eo = {},
    T1 = {
        get exports() {
            return eo
        },
        set exports(f) {
            eo = f
        }
    },
    no = {},
    O1 = {
        get exports() {
            return no
        },
        set exports(f) {
            no = f
        }
    };
(function() {
    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        i = {
            rotl: function(n, l) {
                return n << l | n >>> 32 - l
            },
            rotr: function(n, l) {
                return n << 32 - l | n >>> l
            },
            endian: function(n) {
                if (n.constructor == Number) return i.rotl(n, 8) & 16711935 | i.rotl(n, 24) & 4278255360;
                for (var l = 0; l < n.length; l++) n[l] = i.endian(n[l]);
                return n
            },
            randomBytes: function(n) {
                for (var l = []; n > 0; n--) l.push(Math.floor(Math.random() * 256));
                return l
            },
            bytesToWords: function(n) {
                for (var l = [], s = 0, d = 0; s < n.length; s++, d += 8) l[d >>> 5] |= n[s] << 24 - d % 32;
                return l
            },
            wordsToBytes: function(n) {
                for (var l = [], s = 0; s < n.length * 32; s += 8) l.push(n[s >>> 5] >>> 24 - s % 32 & 255);
                return l
            },
            bytesToHex: function(n) {
                for (var l = [], s = 0; s < n.length; s++) l.push((n[s] >>> 4).toString(16)), l.push((n[s] & 15).toString(16));
                return l.join("")
            },
            hexToBytes: function(n) {
                for (var l = [], s = 0; s < n.length; s += 2) l.push(parseInt(n.substr(s, 2), 16));
                return l
            },
            bytesToBase64: function(n) {
                for (var l = [], s = 0; s < n.length; s += 3)
                    for (var d = n[s] << 16 | n[s + 1] << 8 | n[s + 2], u = 0; u < 4; u++) s * 8 + u * 6 <= n.length * 8 ? l.push(f.charAt(d >>> 6 * (3 - u) & 63)) : l.push("=");
                return l.join("")
            },
            base64ToBytes: function(n) {
                n = n.replace(/[^A-Z0-9+\/]/ig, "");
                for (var l = [], s = 0, d = 0; s < n.length; d = ++s % 4) d != 0 && l.push((f.indexOf(n.charAt(s - 1)) & Math.pow(2, -2 * d + 8) - 1) << d * 2 | f.indexOf(n.charAt(s)) >>> 6 - d * 2);
                return l
            }
        };
    O1.exports = i
})();
var ro = {
        utf8: {
            stringToBytes: function(f) {
                return ro.bin.stringToBytes(unescape(encodeURIComponent(f)))
            },
            bytesToString: function(f) {
                return decodeURIComponent(escape(ro.bin.bytesToString(f)))
            }
        },
        bin: {
            stringToBytes: function(f) {
                for (var i = [], n = 0; n < f.length; n++) i.push(f.charCodeAt(n) & 255);
                return i
            },
            bytesToString: function(f) {
                for (var i = [], n = 0; n < f.length; n++) i.push(String.fromCharCode(f[n]));
                return i.join("")
            }
        }
    },
    Hu = ro;
var R1 = function(f) {
    return f != null && (Sl(f) || L1(f) || !!f._isBuffer)
};

function Sl(f) {
    return !!f.constructor && typeof f.constructor.isBuffer == "function" && f.constructor.isBuffer(f)
}

function L1(f) {
    return typeof f.readFloatLE == "function" && typeof f.slice == "function" && Sl(f.slice(0, 0))
}(function() {
    var f = no,
        i = Hu.utf8,
        n = R1,
        l = Hu.bin,
        s = function(d, u) {
            d.constructor == String ? u && u.encoding === "binary" ? d = l.stringToBytes(d) : d = i.stringToBytes(d) : n(d) ? d = Array.prototype.slice.call(d, 0) : !Array.isArray(d) && d.constructor !== Uint8Array && (d = d.toString());
            for (var a = f.bytesToWords(d), m = d.length * 8, _ = 1732584193, c = -271733879, g = -1732584194, h = 271733878, p = 0; p < a.length; p++) a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360;
            a[m >>> 5] |= 128 << m % 32, a[(m + 64 >>> 9 << 4) + 14] = m;
            for (var x = s._ff, y = s._gg, A = s._hh, S = s._ii, p = 0; p < a.length; p += 16) {
                var C = _,
                    T = c,
                    L = g,
                    B = h;
                _ = x(_, c, g, h, a[p + 0], 7, -680876936), h = x(h, _, c, g, a[p + 1], 12, -389564586), g = x(g, h, _, c, a[p + 2], 17, 606105819), c = x(c, g, h, _, a[p + 3], 22, -1044525330), _ = x(_, c, g, h, a[p + 4], 7, -176418897), h = x(h, _, c, g, a[p + 5], 12, 1200080426), g = x(g, h, _, c, a[p + 6], 17, -1473231341), c = x(c, g, h, _, a[p + 7], 22, -45705983), _ = x(_, c, g, h, a[p + 8], 7, 1770035416), h = x(h, _, c, g, a[p + 9], 12, -1958414417), g = x(g, h, _, c, a[p + 10], 17, -42063), c = x(c, g, h, _, a[p + 11], 22, -1990404162), _ = x(_, c, g, h, a[p + 12], 7, 1804603682), h = x(h, _, c, g, a[p + 13], 12, -40341101), g = x(g, h, _, c, a[p + 14], 17, -1502002290), c = x(c, g, h, _, a[p + 15], 22, 1236535329), _ = y(_, c, g, h, a[p + 1], 5, -165796510), h = y(h, _, c, g, a[p + 6], 9, -1069501632), g = y(g, h, _, c, a[p + 11], 14, 643717713), c = y(c, g, h, _, a[p + 0], 20, -373897302), _ = y(_, c, g, h, a[p + 5], 5, -701558691), h = y(h, _, c, g, a[p + 10], 9, 38016083), g = y(g, h, _, c, a[p + 15], 14, -660478335), c = y(c, g, h, _, a[p + 4], 20, -405537848), _ = y(_, c, g, h, a[p + 9], 5, 568446438), h = y(h, _, c, g, a[p + 14], 9, -1019803690), g = y(g, h, _, c, a[p + 3], 14, -187363961), c = y(c, g, h, _, a[p + 8], 20, 1163531501), _ = y(_, c, g, h, a[p + 13], 5, -1444681467), h = y(h, _, c, g, a[p + 2], 9, -51403784), g = y(g, h, _, c, a[p + 7], 14, 1735328473), c = y(c, g, h, _, a[p + 12], 20, -1926607734), _ = A(_, c, g, h, a[p + 5], 4, -378558), h = A(h, _, c, g, a[p + 8], 11, -2022574463), g = A(g, h, _, c, a[p + 11], 16, 1839030562), c = A(c, g, h, _, a[p + 14], 23, -35309556), _ = A(_, c, g, h, a[p + 1], 4, -1530992060), h = A(h, _, c, g, a[p + 4], 11, 1272893353), g = A(g, h, _, c, a[p + 7], 16, -155497632), c = A(c, g, h, _, a[p + 10], 23, -1094730640), _ = A(_, c, g, h, a[p + 13], 4, 681279174), h = A(h, _, c, g, a[p + 0], 11, -358537222), g = A(g, h, _, c, a[p + 3], 16, -722521979), c = A(c, g, h, _, a[p + 6], 23, 76029189), _ = A(_, c, g, h, a[p + 9], 4, -640364487), h = A(h, _, c, g, a[p + 12], 11, -421815835), g = A(g, h, _, c, a[p + 15], 16, 530742520), c = A(c, g, h, _, a[p + 2], 23, -995338651), _ = S(_, c, g, h, a[p + 0], 6, -198630844), h = S(h, _, c, g, a[p + 7], 10, 1126891415), g = S(g, h, _, c, a[p + 14], 15, -1416354905), c = S(c, g, h, _, a[p + 5], 21, -57434055), _ = S(_, c, g, h, a[p + 12], 6, 1700485571), h = S(h, _, c, g, a[p + 3], 10, -1894986606), g = S(g, h, _, c, a[p + 10], 15, -1051523), c = S(c, g, h, _, a[p + 1], 21, -2054922799), _ = S(_, c, g, h, a[p + 8], 6, 1873313359), h = S(h, _, c, g, a[p + 15], 10, -30611744), g = S(g, h, _, c, a[p + 6], 15, -1560198380), c = S(c, g, h, _, a[p + 13], 21, 1309151649), _ = S(_, c, g, h, a[p + 4], 6, -145523070), h = S(h, _, c, g, a[p + 11], 10, -1120210379), g = S(g, h, _, c, a[p + 2], 15, 718787259), c = S(c, g, h, _, a[p + 9], 21, -343485551), _ = _ + C >>> 0, c = c + T >>> 0, g = g + L >>> 0, h = h + B >>> 0
            }
            return f.endian([_, c, g, h])
        };
    s._ff = function(d, u, a, m, _, c, g) {
        var h = d + (u & a | ~u & m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._gg = function(d, u, a, m, _, c, g) {
        var h = d + (u & m | a & ~m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._hh = function(d, u, a, m, _, c, g) {
        var h = d + (u ^ a ^ m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._ii = function(d, u, a, m, _, c, g) {
        var h = d + (a ^ (u | ~m)) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._blocksize = 16, s._digestsize = 16, T1.exports = function(d, u) {
        if (d == null) throw new Error("Illegal argument " + d);
        var a = f.wordsToBytes(s(d, u));
        return u && u.asBytes ? a : u && u.asString ? l.bytesToString(a) : f.bytesToHex(a)
    }
})();
const D1 = {
    userId: "",
    deviceId: "",
    authToken: "",
    chatId: "",
    userName: "",
    botName: ""
};

function zr(f) {
    const i = eo(`time_covfefe_prefix=2020_${f.deviceId}`);
    return {
        "x-user-id": f.userId,
        "x-auth-token": f.authToken,
        "x-device-id": f.deviceId,
        "x-timestamp-hash": i
    }
}
async function hr() {
    const f = Object.assign({}, D1),
        i = ["https://my.replika.com/", "https://my.replika.ai/"],
        n = {
            error: {},
            data: null
        };
    for (const l of i) {
        const {
            id: s
        } = await chrome.tabs.create({
            url: l,
            active: !1
        }), d = await chrome.scripting.executeScript({
            target: {
                tabId: s
            },
            args: [f],
            func: m => {
                let _ = null;
                try {
                    const c = localStorage.getItem("auth"),
                        g = JSON.parse(c);
                    m.userId = g.userId, m.deviceId = g.deviceId, m.authToken = g.authToken;
                    const h = localStorage.getItem("ws"),
                        p = JSON.parse(h);
                    m.chatId = p.chatId;
                    const x = localStorage.getItem("profile"),
                        y = JSON.parse(x);
                    m.userName = y.userProfile.first_name, m.botName = y.bot.name
                } catch (c) {
                    _ = JSON.stringify(c, Object.getOwnPropertyNames(c))
                }
                return {
                    error: _,
                    data: m
                }
            }
        });
        chrome.tabs.remove(s);
        const {
            error: u,
            data: a
        } = d[0].result;
        if (u) {
            n.error[l] = u;
            continue
        }
        n.data = a;
        break
    }
    if (!n.data) return n;
    n.error = {};
    for (const l of Object.keys(f)) n.data[l] || (n.error[l] = "Could not find data");
    return Object.keys(n.error).length === 0 && (n.error = null), n
}
var Ct = (f => (f.Idle = "idle", f.Working = "working", f.Stopping = "stopping", f))(Ct || {}),
    ee = (f => (f.TXT = "txt", f.HTML = "html", f.CSV = "csv", f.JSON = "json", f.CHARACTER_AI = "character.ai", f))(ee || {});

function Me(f, i, n) {
    const l = document.createElement("a"),
        s = new Blob([f], {
            type: i
        });
    l.href = URL.createObjectURL(s), l.download = n, l.click()
}

function ao(f) {
    function i(s) {
        return s.includes('"') && (s = s.replace(/"/g, '""')), `"${s}"`
    }
    const n = Object.keys(f[0]).map(i),
        l = f.map(s => Object.values(s).map(d => i(d)));
    return [n, ...l].map(s => s.join(",")).join(`
`)
}

function Ri(f, i) {
    const n = new Date().toISOString().split("T")[0];
    return `replika-${f}-export-${n}.${i}`
}
async function z1(f, i) {
    const n = await getAllMessages();
    if (!n) return;
    const l = n.filter(u => u.content.type === "text"),
        s = Ri("chat", f),
        d = {
            Customer: i.userName,
            Robot: i.botName
        };
    switch (f) {
        case ee.TXT: {
            const u = l.map(a => `${new Date(a.meta.timestamp).toLocaleString()} ${d[a.meta.nature]}: ${a.content.text}`).join(`
`);
            Me(u, "text/plain", s);
            break
        }
        case ee.HTML: {
            const u = `
      <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Author</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        ${l.map(a=>`
          <tr>
            <th>${new Date(a.meta.timestamp).toLocaleString()}</th>
            <td>${d[a.meta.nature]}</td>
            <td>${a.content.text}</td>
          </tr>`).join("")}
      </tbody>
      </table>
      `;
            Me(u, "text/html", s);
            break
        }
        case ee.CSV: {
            const u = ao(l.map(a => ({
                time: new Date(a.meta.timestamp).toLocaleString(),
                sender: d[a.meta.nature],
                message: a.content.text
            })));
            Me(u, "text/csv", s);
            break
        }
        case ee.JSON: {
            const u = JSON.stringify(l, null, 2);
            Me(u, "application/json", s);
            break
        }
        case ee.CHARACTER_AI: {
            const u = {
                    Customer: "{{user}}",
                    Robot: "{{char}}"
                },
                a = l.map(m => [u[m.meta.nature], m.content.text.replaceAll(i.userName, u.Customer).replaceAll(i.botName, u.Robot)].join(": ")).join(`
`);
            Me(a, "text/plain", s.replace(f, "txt"));
            break
        }
        default:
            return
    }
}
const B1 = f => ({}),
    Zu = f => ({}),
    F1 = f => ({}),
    Gu = f => ({}),
    N1 = f => ({}),
    Ku = f => ({});

function U1(f) {
    let i, n, l, s, d, u, a, m, _, c, g;
    const h = f[2].head,
        p = qs(h, f, f[1], Ku),
        x = f[2].caption,
        y = qs(x, f, f[1], Gu),
        A = f[2].body,
        S = qs(A, f, f[1], Zu);
    return {
        c() {
            i = ot("div"), n = ot("div"), l = ot("div"), s = It(f[0]), d = Et(), p && p.c(), u = Et(), a = ot("div"), m = ot("div"), y && y.c(), _ = Et(), c = ot("div"), S && S.c(), dt(l, "class", "text-2xl font-bold"), dt(n, "class", "flex justify-between items-center"), dt(m, "class", "opacity-80"), dt(c, "class", "font-mono"), dt(a, "class", "space-y-4"), dt(i, "class", "border-1 border-white border-opacity-25 p-4 rounded-2xl space-y-4")
        },
        m(C, T) {
            pt(C, i, T), q(i, n), q(n, l), q(l, s), q(n, d), p && p.m(n, null), q(i, u), q(i, a), q(a, m), y && y.m(m, null), q(a, _), q(a, c), S && S.m(c, null), g = !0
        },
        p(C, [T]) {
            (!g || T & 1) && ae(s, C[0]), p && p.p && (!g || T & 2) && Ys(p, h, C, C[1], g ? js(h, C[1], T, N1) : Js(C[1]), Ku), y && y.p && (!g || T & 2) && Ys(y, x, C, C[1], g ? js(x, C[1], T, F1) : Js(C[1]), Gu), S && S.p && (!g || T & 2) && Ys(S, A, C, C[1], g ? js(A, C[1], T, B1) : Js(C[1]), Zu)
        },
        i(C) {
            g || (Ht(p, C), Ht(y, C), Ht(S, C), g = !0)
        },
        o(C) {
            qt(p, C), qt(y, C), qt(S, C), g = !1
        },
        d(C) {
            C && ht(i), p && p.d(C), y && y.d(C), S && S.d(C)
        }
    }
}

function P1(f, i, n) {
    let {
        $$slots: l = {},
        $$scope: s
    } = i, {
        title: d
    } = i;
    return f.$$set = u => {
        "title" in u && n(0, d = u.title), "$$scope" in u && n(1, s = u.$$scope)
    }, [d, s, l]
}
class dr extends rn {
    constructor(i) {
        super(), nn(this, i, P1, U1, en, {
            title: 0
        })
    }
}

function qu(f) {
    let i, n, l, s, d, u, a, m, _, c, g, h, p, x, y, A, S, C = JSON.stringify(f[0], null, 2) + "",
        T;
    return {
        c() {
            i = ot("div"), n = ot("p"), n.textContent = "Something went wrong", l = Et(), s = ot("p"), s.textContent = `Replika might change their service at any point of time causing this
            extension to not work anymore - in this case i have to figure out
            what they have changed to make it work again, just reach out if this
            is the case.`, d = Et(), u = ot("p"), u.innerHTML = `Please make sure you are signed in to either
            <a href="https://my.replika.com" target="_blank" rel="noopener noreferrer">my.replika.com</a>
            or
            <a href="https://my.replika.ai" target="_blank" rel="noopener noreferrer">my.replika.ai</a>`, a = Et(), m = ot("p"), m.textContent = `If you are signed in already, please try to sign out and sign in
            again.`, _ = Et(), c = ot("p"), c.innerHTML = `If the issue persist, please reach me at
            <a href="mailto:replika@wolf.gdn?subject=Error">replika@wolf.gdn</a> and include the error details below.`, g = Et(), h = ot("p"), h.textContent = `Make sure to remove any sensitive information before sending the
            email.`, p = Et(), x = ot("details"), y = ot("summary"), y.textContent = "Error details", A = Et(), S = ot("pre"), T = It(C), dt(n, "class", "font-bold"), dt(S, "class", "whitespace-pre-line break-all"), dt(i, "class", "bg-red-9 font-mono p-4 space-y-2")
        },
        m(L, B) {
            pt(L, i, B), q(i, n), q(i, l), q(i, s), q(i, d), q(i, u), q(i, a), q(i, m), q(i, _), q(i, c), q(i, g), q(i, h), q(i, p), q(i, x), q(x, y), q(x, A), q(x, S), q(S, T)
        },
        p(L, B) {
            B & 1 && C !== (C = JSON.stringify(L[0], null, 2) + "") && ae(T, C)
        },
        d(L) {
            L && ht(i)
        }
    }
}

function W1(f) {
    let i, n = f[0] && qu(f);
    return {
        c() {
            n && n.c(), i = yn()
        },
        m(l, s) {
            n && n.m(l, s), pt(l, i, s)
        },
        p(l, [s]) {
            l[0] ? n ? n.p(l, s) : (n = qu(l), n.c(), n.m(i.parentNode, i)) : n && (n.d(1), n = null)
        },
        i: ne,
        o: ne,
        d(l) {
            n && n.d(l), l && ht(i)
        }
    }
}

function M1(f, i, n) {
    let {
        error: l = null
    } = i;
    return f.$$set = s => {
        "error" in s && n(0, l = s.error)
    }, [l]
}
let Al = class extends rn {
    constructor(i) {
        super(), nn(this, i, M1, W1, en, {
            error: 0
        })
    }
};

function ju(f, i, n) {
    const l = f.slice();
    return l[16] = i[n], l
}

function Yu(f, i, n) {
    const l = f.slice();
    return l[19] = i[n], l
}

function Ju(f) {
    let i, n = f[19] + "",
        l;
    return {
        c() {
            i = ot("option"), l = It(n), i.__value = f[19], i.value = i.__value
        },
        m(s, d) {
            pt(s, i, d), q(i, l)
        },
        p: ne,
        d(s) {
            s && ht(i)
        }
    }
}

function $1(f) {
    let i, n, l;
    return {
        c() {
            i = ot("button"), i.textContent = "Stop"
        },
        m(s, d) {
            pt(s, i, d), n || (l = le(i, "click", f[10]), n = !0)
        },
        p: ne,
        d(s) {
            s && ht(i), n = !1, l()
        }
    }
}

function H1(f) {
    let i, n, l;
    return {
        c() {
            i = ot("button"), i.textContent = "Start"
        },
        m(s, d) {
            pt(s, i, d), n || (l = le(i, "click", f[9]), n = !0)
        },
        p: ne,
        d(s) {
            s && ht(i), n = !1, l()
        }
    }
}

function Z1(f) {
    let i, n, l, s, d, u, a = Object.values(f[8]),
        m = [];
    for (let h = 0; h < a.length; h += 1) m[h] = Ju(Yu(f, a, h));

    function _(h, p) {
        if (h[0] === Ct.Idle) return H1;
        if (h[0] === Ct.Working) return $1
    }
    let c = _(f),
        g = c && c(f);
    return {
        c() {
            i = ot("fieldset"), n = ot("select");
            for (let h = 0; h < m.length; h += 1) m[h].c();
            s = Et(), g && g.c(), dt(n, "class", "capitalize"), n.disabled = l = f[0] !== Ct.Idle, f[1] === void 0 && cr(() => f[13].call(n)), dt(i, "class", "space-x-1")
        },
        m(h, p) {
            pt(h, i, p), q(i, n);
            for (let x = 0; x < m.length; x += 1) m[x].m(n, null);
            fr(n, f[1]), q(i, s), g && g.m(i, null), d || (u = le(n, "change", f[13]), d = !0)
        },
        p(h, p) {
            if (p & 256) {
                a = Object.values(h[8]);
                let x;
                for (x = 0; x < a.length; x += 1) {
                    const y = Yu(h, a, x);
                    m[x] ? m[x].p(y, p) : (m[x] = Ju(y), m[x].c(), m[x].m(n, null))
                }
                for (; x < m.length; x += 1) m[x].d(1);
                m.length = a.length
            }
            p & 1 && l !== (l = h[0] !== Ct.Idle) && (n.disabled = l), p & 258 && fr(n, h[1]), c === (c = _(h)) && g ? g.p(h, p) : (g && g.d(1), g = c && c(h), g && (g.c(), g.m(i, null)))
        },
        d(h) {
            h && ht(i), Dn(m, h), g && g.d(), d = !1, u()
        }
    }
}

function G1(f) {
    let i;
    return {
        c() {
            i = It(`will export all messages. Already exported messages will
                        be overwritten. Depending on the number of messages,
                        this can take a long time.`)
        },
        m(n, l) {
            pt(n, i, l)
        },
        d(n) {
            n && ht(i)
        }
    }
}

function K1(f) {
    let i;
    return {
        c() {
            i = It(`will stop when it finds messages older than this time
                        period. Already exported messages will be overwritten.`)
        },
        m(n, l) {
            pt(n, i, l)
        },
        d(n) {
            n && ht(i)
        }
    }
}

function q1(f) {
    let i;
    return {
        c() {
            i = It(`will stop when it finds the last message you exported.
                        This is the default and recommended option.`)
        },
        m(n, l) {
            pt(n, i, l)
        },
        d(n) {
            n && ht(i)
        }
    }
}

function j1(f) {
    let i, n, l, s, d, u, a;

    function m(g, h) {
        if (g[1] === g[8].UntilLast) return q1;
        if (g[1] === g[8].Day || g[1] === g[8].Week || g[1] === g[8].Month) return K1;
        if (g[1] === g[8].All) return G1
    }
    let _ = m(f),
        c = _ && _(f);
    return {
        c() {
            i = ot("div"), n = ot("p"), n.textContent = "Export messages in the choosen time period:", l = Et(), s = ot("p"), d = ot("code"), u = It(f[1]), a = Et(), c && c.c(), dt(d, "class", "capitalize"), dt(i, "class", "space-y-2")
        },
        m(g, h) {
            pt(g, i, h), q(i, n), q(i, l), q(i, s), q(s, d), q(d, u), q(s, a), c && c.m(s, null)
        },
        p(g, h) {
            h & 2 && ae(u, g[1]), _ !== (_ = m(g)) && (c && c.d(1), c = _ && _(g), c && (c.c(), c.m(s, null)))
        },
        d(g) {
            g && ht(i), c && c.d()
        }
    }
}

function Xu(f) {
    let i, n, l, s = (f[4].message ?? "…") + "",
        d;
    return {
        c() {
            i = ot("div"), n = It(f[2]), l = It(" messages "), d = It(s)
        },
        m(u, a) {
            pt(u, i, a), q(i, n), q(i, l), q(i, d)
        },
        p(u, a) {
            a & 4 && ae(n, u[2]), a & 16 && s !== (s = (u[4].message ?? "…") + "") && ae(d, s)
        },
        d(u) {
            u && ht(i)
        }
    }
}

function Y1(f) {
    let i, n = f[2] !== void 0 && Xu(f);
    return {
        c() {
            n && n.c(), i = yn()
        },
        m(l, s) {
            n && n.m(l, s), pt(l, i, s)
        },
        p(l, s) {
            l[2] !== void 0 ? n ? n.p(l, s) : (n = Xu(l), n.c(), n.m(i.parentNode, i)) : n && (n.d(1), n = null)
        },
        d(l) {
            n && n.d(l), l && ht(i)
        }
    }
}

function Vu(f) {
    let i, n = f[16] + "",
        l;
    return {
        c() {
            i = ot("option"), l = It(n), i.__value = f[16], i.value = i.__value
        },
        m(s, d) {
            pt(s, i, d), q(i, l)
        },
        p: ne,
        d(s) {
            s && ht(i)
        }
    }
}

function J1(f) {
    let i, n, l, s, d, u, a, m = Object.values(ee),
        _ = [];
    for (let c = 0; c < m.length; c += 1) _[c] = Vu(ju(f, m, c));
    return {
        c() {
            i = ot("fieldset"), n = ot("select");
            for (let c = 0; c < _.length; c += 1) _[c].c();
            l = Et(), s = ot("button"), s.textContent = "Download", dt(n, "class", "uppercase"), f[6] === void 0 && cr(() => f[14].call(n)), i.disabled = d = f[0] !== Ct.Idle || f[7] === 0, dt(i, "class", "space-x-1")
        },
        m(c, g) {
            pt(c, i, g), q(i, n);
            for (let h = 0; h < _.length; h += 1) _[h].m(n, null);
            fr(n, f[6]), q(i, l), q(i, s), u || (a = [le(n, "change", f[14]), le(s, "click", f[11])], u = !0)
        },
        p(c, g) {
            if (g & 0) {
                m = Object.values(ee);
                let h;
                for (h = 0; h < m.length; h += 1) {
                    const p = ju(c, m, h);
                    _[h] ? _[h].p(p, g) : (_[h] = Vu(p), _[h].c(), _[h].m(n, null))
                }
                for (; h < _.length; h += 1) _[h].d(1);
                _.length = m.length
            }
            g & 64 && fr(n, c[6]), g & 129 && d !== (d = c[0] !== Ct.Idle || c[7] === 0) && (i.disabled = d)
        },
        d(c) {
            c && ht(i), Dn(_, c), u = !1, tn(a)
        }
    }
}

function Qu(f) {
    let i;
    return {
        c() {
            i = ot("p"), i.innerHTML = `Note that <a href="https://character.ai" target="_blank" rel="noopener noreferrer">Character.ai</a> currently limits the import of example conversations to
                        a maximum length of 3200 characters. You probably want to
                        go through the export and nail it down to your most valuable
                        conversations.`
        },
        m(n, l) {
            pt(n, i, l)
        },
        d(n) {
            n && ht(i)
        }
    }
}

function X1(f) {
    let i, n, l, s = f[6] === ee.CHARACTER_AI && Qu();
    return {
        c() {
            i = ot("div"), n = ot("p"), n.innerHTML = `Messages of your previous exports are stored locally on your
                    device. Only you can access them. All messages are available
                    offline. <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank" rel="noopener noreferrer">IndexdeDB</a> is used to store the messages on your side.`, l = Et(), s && s.c(), dt(i, "class", "space-y-2")
        },
        m(d, u) {
            pt(d, i, u), q(i, n), q(i, l), s && s.m(i, null)
        },
        p(d, u) {
            d[6] === ee.CHARACTER_AI ? s || (s = Qu(), s.c(), s.m(i, null)) : s && (s.d(1), s = null)
        },
        d(d) {
            d && ht(i), s && s.d()
        }
    }
}

function tl(f) {
    let i, n = f[3].start.toLocaleDateString() + "",
        l, s, d = f[3].end.toLocaleDateString() + "",
        u, a, m = f[3].duration + "",
        _, c;
    return {
        c() {
            i = ot("div"), l = It(n), s = It(` -
                        `), u = It(d), a = It(" ("), _ = It(m), c = It(")")
        },
        m(g, h) {
            pt(g, i, h), q(i, l), q(i, s), q(i, u), q(i, a), q(i, _), q(i, c)
        },
        p(g, h) {
            h & 8 && n !== (n = g[3].start.toLocaleDateString() + "") && ae(l, n), h & 8 && d !== (d = g[3].end.toLocaleDateString() + "") && ae(u, d), h & 8 && m !== (m = g[3].duration + "") && ae(_, m)
        },
        d(g) {
            g && ht(i)
        }
    }
}

function V1(f) {
    let i, n, l, s, d, u = f[3].start && f[3].end && tl(f);
    return {
        c() {
            i = ot("div"), n = ot("div"), l = It(f[7]), s = It(" messages"), d = Et(), u && u.c(), dt(i, "class", "space-y-2")
        },
        m(a, m) {
            pt(a, i, m), q(i, n), q(n, l), q(n, s), q(i, d), u && u.m(i, null)
        },
        p(a, m) {
            m & 128 && ae(l, a[7]), a[3].start && a[3].end ? u ? u.p(a, m) : (u = tl(a), u.c(), u.m(i, null)) : u && (u.d(1), u = null)
        },
        d(a) {
            a && ht(i), u && u.d()
        }
    }
}

function Q1(f) {
    let i, n, l, s, d, u, a;
    return n = new Al({
        props: {
            error: f[5]
        }
    }), s = new dr({
        props: {
            title: "New Chat Export",
            $$slots: {
                body: [Y1],
                caption: [j1],
                head: [Z1]
            },
            $$scope: {
                ctx: f
            }
        }
    }), u = new dr({
        props: {
            title: "Local archive",
            $$slots: {
                body: [V1],
                caption: [X1],
                head: [J1]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            i = ot("div"), Ee(n.$$.fragment), l = Et(), Ee(s.$$.fragment), d = Et(), Ee(u.$$.fragment), dt(i, "class", "space-y-8")
        },
        m(m, _) {
            pt(m, i, _), ye(n, i, null), q(i, l), ye(s, i, null), q(i, d), ye(u, i, null), a = !0
        },
        p(m, [_]) {
            const c = {};
            _ & 32 && (c.error = m[5]), n.$set(c);
            const g = {};
            _ & 4194327 && (g.$$scope = {
                dirty: _,
                ctx: m
            }), s.$set(g);
            const h = {};
            _ & 4194505 && (h.$$scope = {
                dirty: _,
                ctx: m
            }), u.$set(h)
        },
        i(m) {
            a || (Ht(n.$$.fragment, m), Ht(s.$$.fragment, m), Ht(u.$$.fragment, m), a = !0)
        },
        o(m) {
            qt(n.$$.fragment, m), qt(s.$$.fragment, m), qt(u.$$.fragment, m), a = !1
        },
        d(m) {
            m && ht(i), be(n), be(s), be(u)
        }
    }
}

function tg(f, i, n) {
    var l = (T => (T.UntilLast = "untilLast", T.Day = "day", T.Week = "week", T.Month = "month", T.All = "all", T))(l || {});
    let s = Ct.Idle,
        d = null,
        u = "untilLast",
        a, m = ee.TXT,
        _, c = 0,
        g, h = {},
        p = {
            start: 0,
            end: 0,
            message: ""
        };
    (async () => (countMessages().then(L => {
        n(7, c = L)
    }), new URLSearchParams(window.location.search).get("ref") === "menu" && x()))();
    async function x() {
        n(4, p.start = performance.now(), p), n(0, s = Ct.Working), n(2, g = 0);
        const {
            error: T,
            data: L
        } = await hr();
        if (n(5, d = T), _ = L, T) {
            n(0, s = Ct.Idle);
            return
        }
        const B = await getLastMessageId(),
            G = new WebSocket("wss://ws.replika.com/v17");
        let W = {
            event_name: "history",
            token: Oi(),
            auth: {
                user_id: _.userId,
                auth_token: _.authToken,
                device_id: _.deviceId
            },
            payload: {
                chat_id: _.chatId,
                limit: 1e3,
                last_message_id: void 0
            }
        };
        G.addEventListener("open", () => {
            G.send(JSON.stringify(W)), G.addEventListener("message", async ({
                data: V
            }) => {
                try {
                    let Z = function() {
                        return !a || !st.payload.to ? !1 : new Date(st.payload.to).getTime() <= a.getTime()
                    };
                    n(4, p.end = performance.now(), p);
                    const st = JSON.parse(V.toString());
                    if (st.event_name !== "history") return;
                    if (!st.payload || !st.payload.messages) throw {
                        message: "Unexpected response from Replika",
                        response: st
                    };
                    let vt = st.payload.messages;
                    if (vt.length === 0) {
                        G.close(), n(0, s = Ct.Idle);
                        return
                    }
                    let D = !1;
                    if (u === "untilLast") {
                        const b = vt.findIndex(tt => tt.id === B);
                        D = b > -1, D && (vt = vt.slice(b + 1))
                    }
                    const Y = database.transaction("messages", "readwrite").objectStore("messages");
                    vt.forEach(b => {
                        Y.add(b)
                    }), n(2, g += vt.length), s === Ct.Stopping || D || Z() ? (G.close(), n(0, s = Ct.Idle)) : (W.payload.last_message_id = vt[0].id, G.send(JSON.stringify(W)))
                } catch (Z) {
                    console.warn(Z), n(5, d = Z), G.close(), n(0, s = Ct.Idle)
                }
            })
        })
    }
    async function y() {
        n(0, s = Ct.Stopping)
    }
    async function A() {
        if (n(0, s = Ct.Working), !_) {
            const {
                error: T,
                data: L
            } = await hr();
            if (n(5, d = T), _ = L, T) {
                n(0, s = Ct.Idle);
                return
            }
        }
        await z1(m, _), n(0, s = Ct.Idle)
    }

    function S() {
        u = Vs(this), n(1, u), n(8, l)
    }

    function C() {
        m = Vs(this), n(6, m)
    }
    return f.$$.update = () => {
        f.$$.dirty & 4098 && (u === "all" ? n(12, a = void 0) : u === "month" ? (n(12, a = new Date), a.setMonth(a.getMonth() - 1)) : u === "week" ? (n(12, a = new Date), a.setDate(a.getDate() - 7)) : u === "day" && (n(12, a = new Date), a.setDate(a.getDate() - 1))), f.$$.dirty & 12 && (async T => {
            n(7, c = await countMessages());
            n(3, h.start = new Date(L.meta.timestamp), h), n(3, h.end = new Date(B.meta.timestamp), h);
            const G = h.end.getTime() - h.start.getTime();
            n(3, h.duration = new Intl.RelativeTimeFormat("en", {
                numeric: "auto"
            }).format(Math.round(G / 1e3 / 60 / 60 / 24 / 30), "months"), h)
        })(), f.$$.dirty & 16 && p.start && p.end && n(4, p.message = new Intl.RelativeTimeFormat("en", {
            numeric: "auto"
        }).format(Math.round((p.end - p.start) / 1e3), "seconds"), p), f.$$.dirty & 1 && (s === Ct.Working ? document.body.classList.add("cursor-wait") : document.body.classList.remove("cursor-wait"))
    }, [s, u, g, h, p, d, m, c, l, x, y, A, a, S, C]
}
class eg extends rn {
    constructor(i) {
        super(), nn(this, i, tg, Q1, en, {})
    }
}

function Si(f) {
    throw new Error('Could not dynamically require "' + f + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}

function sg(f) {
    let i;
    return {
        c() {
            i = It(`no audio message found, make sure to export text messages first using the
    chat export`)
        },
        m(n, l) {
            pt(n, i, l)
        },
        p: ne,
        i: ne,
        o: ne,
        d(n) {
            n && ht(i)
        }
    }
}

function og(f) {
    let i, n;
    return i = new dr({
        props: {
            title: "New Voice Message Export",
            $$slots: {
                body: [lg],
                caption: [ug],
                head: [ag]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            Ee(i.$$.fragment)
        },
        m(l, s) {
            ye(i, l, s), n = !0
        },
        p(l, s) {
            const d = {};
            s & 159 && (d.$$scope = {
                dirty: s,
                ctx: l
            }), i.$set(d)
        },
        i(l) {
            n || (Ht(i.$$.fragment, l), n = !0)
        },
        o(l) {
            qt(i.$$.fragment, l), n = !1
        },
        d(l) {
            be(i, l)
        }
    }
}

function ag(f) {
    let i, n, l, s, d;
    return {
        c() {
            i = ot("button"), n = It("Start Export"), i.disabled = l = f[1] !== Ct.Idle
        },
        m(u, a) {
            pt(u, i, a), q(i, n), s || (d = le(i, "click", f[5]), s = !0)
        },
        p(u, a) {
            a & 2 && l !== (l = u[1] !== Ct.Idle) && (i.disabled = l)
        },
        d(u) {
            u && ht(i), s = !1, d()
        }
    }
}

function ug(f) {
    let i, n = f[0].length + "",
        l, s, d, u, a = Math.round(f[4] / 60) + "",
        m, _;
    return {
        c() {
            i = ot("p"), l = It(n), s = It(" voice messages"), d = Et(), u = ot("p"), m = It(a), _ = It(" minutes of audio")
        },
        m(c, g) {
            pt(c, i, g), q(i, l), q(i, s), pt(c, d, g), pt(c, u, g), q(u, m), q(u, _)
        },
        p(c, g) {
            g & 1 && n !== (n = c[0].length + "") && ae(l, n), g & 16 && a !== (a = Math.round(c[4] / 60) + "") && ae(m, a)
        },
        d(c) {
            c && ht(i), c && ht(d), c && ht(u)
        }
    }
}

function lg(f) {
    let i, n, l, s, d, u, a, m, _;
    return {
        c() {
            i = ot("label"), n = ot("input"), l = Et(), s = ot("div"), s.textContent = `chunk size - how many voice messages to download at the same
                    time and zip into one archive`, d = Et(), u = ot("pre"), a = It(f[2]), dt(n, "type", "number"), dt(n, "min", "1"), dt(s, "class", "text-xs mt-1"), dt(i, "class", "block mb4"), dt(u, "class", "overflow-x-auto")
        },
        m(c, g) {
            pt(c, i, g), q(i, n), Ln(n, f[3]), q(i, l), q(i, s), pt(c, d, g), pt(c, u, g), q(u, a), m || (_ = le(n, "input", f[6]), m = !0)
        },
        p(c, g) {
            g & 8 && lr(n.value) !== c[3] && Ln(n, c[3]), g & 4 && ae(a, c[2])
        },
        d(c) {
            c && ht(i), c && ht(d), c && ht(u), m = !1, _()
        }
    }
}

function fg(f) {
    let i, n, l, s;
    const d = [og, sg],
        u = [];

    function a(m, _) {
        return m[0].length > 0 ? 0 : 1
    }
    return i = a(f), n = u[i] = d[i](f), {
        c() {
            n.c(), l = yn()
        },
        m(m, _) {
            u[i].m(m, _), pt(m, l, _), s = !0
        },
        p(m, [_]) {
            let c = i;
            i = a(m), i === c ? u[i].p(m, _) : (pr(), qt(u[c], 1, 1, () => {
                u[c] = null
            }), _r(), n = u[i], n ? n.p(m, _) : (n = u[i] = d[i](m), n.c()), Ht(n, 1), n.m(l.parentNode, l))
        },
        i(m) {
            s || (Ht(n), s = !0)
        },
        o(m) {
            qt(n), s = !1
        },
        d(m) {
            u[i].d(m), m && ht(l)
        }
    }
}

function cg(f, i, n) {
    let l = Ct.Idle,
        s = "",
        d = 100,
        u = [],
        a = 0;
    yl(async () => {
        const c = await getAllMessages();
        n(0, u = c.filter(g => g.content.type === "voice_message"))
    });
    async function m() {
        n(1, l = Ct.Working);
        const {
            data: c,
            error: g
        } = await hr();
        if (g) {
            n(2, s = JSON.stringify(g, null, 4)), n(1, l = Ct.Idle);
            return
        }
        const h = LodashE1.chunk(u, d);
        for (const p of h) {
            const x = new LodashE2;
            await Promise.all(p.map(async (A, S) => {
                const C = A.content.voice_message_url,
                    T = {
                        Customer: c.userName,
                        Robot: c.botName
                    } [A.meta.nature],
                    L = [S, A.meta.timestamp, T, C],
                    B = A.meta.timestamp.replaceAll(":", "-").replaceAll(".", "-");
                try {
                    let G;
                    A.meta.nature === "Robot" ? G = await fetch(C) : A.meta.nature === "Customer" && (G = await fetch(`https://my.replika.ai/api/mobile/1.5/voice_messages?voice_message_url=${C}`, {
                        method: "GET",
                        headers: zr(c)
                    })), L.push(G.status);
                    const W = await G.blob();
                    x.file(`${B}_${T}_${A.id}.mp3`.toLowerCase(), W)
                } catch (G) {
                    console.warn(G, A), L.push(G)
                }
                n(2, s = `${L.join(" - ")}
${s}`)
            }));
            const y = await x.generateAsync({
                type: "blob"
            });
            LodashE3.saveAs(y, `replika-export-voice-${Oi()}.zip`), n(1, l = Ct.Idle)
        }
    }

    function _() {
        d = lr(this.value), n(3, d)
    }
    return f.$$.update = () => {
        f.$$.dirty & 17 && u.length > 0 && (n(4, a = 0), u.forEach(c => {
            n(4, a += c.content.duration)
        }))
    }, [u, l, s, d, a, m, _]
}
class hg extends rn {
    constructor(i) {
        super(), nn(this, i, cg, fg, en, {})
    }
}
class dg {
    constructor(i = {
        "x-auth-token": "",
        "x-user-id": "",
        "x-device-id": "",
        "x-timestamp-hash": ""
    }) {
        Fu(this, "headers", {});
        this.headers = i
    }
    async getDiaryEntries(i, n) {
        return await (await fetch(`https://my.replika.com/api/mobile/1.4/saved_chat_items/previews?t=diary&offset=${i}&limit=${n}`, {
            headers: this.headers
        })).json()
    }
    async getAllDiaryEntries() {
        let i = 0,
            n = 100,
            l = [];
        for (;;) {
            const s = await this.getDiaryEntries(i, n);
            if (s.length === 0) break;
            l = l.concat(s), i += n
        }
        return l
    }
    async getDiaryEntriesDetails(i) {
        return await (await fetch("https://my.replika.com/api/mobile/1.4/saved_chat_items/actions/get_by_ids", {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify({
                ids: i.map(s => s.id)
            })
        })).json()
    }
    async export () {
        const i = await this.getAllDiaryEntries();
        return await this.getDiaryEntriesDetails(i)
    }
}
async function pg(f, i) {
    const n = Ri("diary", i);

    function l(s) {
        return s.filter(d => d.type === "text").map(d => d.text).join(`
`)
    }
    switch (i) {
        case ee.TXT: {
            const s = f.map(d => [new Date(d.timestamp).toLocaleDateString(), d.name, l(d.entries)].join(`

`)).join(`

${"-".repeat(80)}

`);
            Me(s, "text/plain", n);
            break
        }
        case ee.CSV: {
            const s = ao(f.map(d => ({
                date: new Date(d.timestamp).toLocaleDateString(),
                name: d.name,
                content: l(d.entries)
            })));
            Me(s, "text/csv", n);
            break
        }
        case ee.JSON: {
            const s = JSON.stringify(f, null, 2);
            Me(s, "application/json", n);
            break
        }
        default:
            return
    }
}

function el(f, i, n) {
    const l = f.slice();
    return l[7] = i[n], l
}

function _g(f) {
    let i, n, l, s, d, u;
    return {
        c() {
            i = ot("div"), n = ot("button"), l = It("Export"), n.disabled = s = f[2] !== Ct.Idle, dt(i, "class", "space-x-2")
        },
        m(a, m) {
            pt(a, i, m), q(i, n), q(n, l), d || (u = le(n, "click", function() {
                Ti(f[4]) && f[4].apply(this, arguments)
            }), d = !0)
        },
        p(a, m) {
            f = a, m & 4 && s !== (s = f[2] !== Ct.Idle) && (n.disabled = s)
        },
        d(a) {
            a && ht(i), d = !1, u()
        }
    }
}

function nl(f) {
    let i, n, l;
    return {
        c() {
            i = It("Exporting "), n = It(f[1]), l = It("...")
        },
        m(s, d) {
            pt(s, i, d), pt(s, n, d), pt(s, l, d)
        },
        p(s, d) {
            d & 2 && ae(n, s[1])
        },
        d(s) {
            s && ht(i), s && ht(n), s && ht(l)
        }
    }
}

function gg(f) {
    let i, n = f[2] === Ct.Working && nl(f);
    return {
        c() {
            n && n.c(), i = yn()
        },
        m(l, s) {
            n && n.m(l, s), pt(l, i, s)
        },
        p(l, s) {
            l[2] === Ct.Working ? n ? n.p(l, s) : (n = nl(l), n.c(), n.m(i.parentNode, i)) : n && (n.d(1), n = null)
        },
        d(l) {
            n && n.d(l), l && ht(i)
        }
    }
}

function rl(f) {
    let i, n = f[7] + "",
        l;
    return {
        c() {
            i = ot("option"), l = It(n), i.__value = f[7], i.value = i.__value
        },
        m(s, d) {
            pt(s, i, d), q(i, l)
        },
        p: ne,
        d(s) {
            s && ht(i)
        }
    }
}

function mg(f) {
    let i, n, l, s, d, u, a, m = Object.values(ee).filter(il),
        _ = [];
    for (let c = 0; c < m.length; c += 1) _[c] = rl(el(f, m, c));
    return {
        c() {
            i = ot("fieldset"), n = ot("select");
            for (let c = 0; c < _.length; c += 1) _[c].c();
            l = Et(), s = ot("button"), s.textContent = "Download", dt(n, "class", "uppercase"), f[0] === void 0 && cr(() => f[6].call(n)), i.disabled = d = f[2] !== Ct.Idle || !f[3], dt(i, "class", "space-x-1")
        },
        m(c, g) {
            pt(c, i, g), q(i, n);
            for (let h = 0; h < _.length; h += 1) _[h].m(n, null);
            fr(n, f[0]), q(i, l), q(i, s), u || (a = [le(n, "change", f[6]), le(s, "click", function() {
                Ti(f[5]) && f[5].apply(this, arguments)
            })], u = !0)
        },
        p(c, g) {
            if (f = c, g & 0) {
                m = Object.values(ee).filter(il);
                let h;
                for (h = 0; h < m.length; h += 1) {
                    const p = el(f, m, h);
                    _[h] ? _[h].p(p, g) : (_[h] = rl(p), _[h].c(), _[h].m(n, null))
                }
                for (; h < _.length; h += 1) _[h].d(1);
                _.length = m.length
            }
            g & 1 && fr(n, f[0]), g & 12 && d !== (d = f[2] !== Ct.Idle || !f[3]) && (i.disabled = d)
        },
        d(c) {
            c && ht(i), Dn(_, c), u = !1, tn(a)
        }
    }
}

function vg(f) {
    let i, n, l, s, d;
    return n = new dr({
        props: {
            title: "New " + f[1] + " Export",
            $$slots: {
                body: [gg],
                head: [_g]
            },
            $$scope: {
                ctx: f
            }
        }
    }), s = new dr({
        props: {
            title: "Download " + f[1],
            $$slots: {
                head: [mg]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            i = ot("div"), Ee(n.$$.fragment), l = Et(), Ee(s.$$.fragment), dt(i, "class", "space-y-8")
        },
        m(u, a) {
            pt(u, i, a), ye(n, i, null), q(i, l), ye(s, i, null), d = !0
        },
        p(u, [a]) {
            const m = {};
            a & 2 && (m.title = "New " + u[1] + " Export"), a & 1046 && (m.$$scope = {
                dirty: a,
                ctx: u
            }), n.$set(m);
            const _ = {};
            a & 2 && (_.title = "Download " + u[1]), a & 1069 && (_.$$scope = {
                dirty: a,
                ctx: u
            }), s.$set(_)
        },
        i(u) {
            d || (Ht(n.$$.fragment, u), Ht(s.$$.fragment, u), d = !0)
        },
        o(u) {
            qt(n.$$.fragment, u), qt(s.$$.fragment, u), d = !1
        },
        d(u) {
            u && ht(i), be(n), be(s)
        }
    }
}
const il = f => f !== "character.ai";

function wg(f, i, n) {
    let {
        name: l = ""
    } = i, {
        status: s
    } = i, {
        hasContent: d = !1
    } = i, {
        exportFormat: u
    } = i, {
        onExport: a
    } = i, {
        onDownload: m
    } = i;

    function _() {
        u = Vs(this), n(0, u)
    }
    return f.$$set = c => {
        "name" in c && n(1, l = c.name), "status" in c && n(2, s = c.status), "hasContent" in c && n(3, d = c.hasContent), "exportFormat" in c && n(0, u = c.exportFormat), "onExport" in c && n(4, a = c.onExport), "onDownload" in c && n(5, m = c.onDownload)
    }, [u, l, s, d, a, m, _]
}
class Il extends rn {
    constructor(i) {
        super(), nn(this, i, wg, vg, en, {
            name: 1,
            status: 2,
            hasContent: 3,
            exportFormat: 0,
            onExport: 4,
            onDownload: 5
        })
    }
}

function sl(f, i, n) {
    const l = f.slice();
    return l[8] = i[n], l
}

function ol(f, i, n) {
    const l = f.slice();
    return l[11] = i[n], l
}

function al(f) {
    let i, n = f[11].text + "",
        l;
    return {
        c() {
            i = ot("p"), l = It(n), dt(i, "class", "opacity-80")
        },
        m(s, d) {
            pt(s, i, d), q(i, l)
        },
        p(s, d) {
            d & 2 && n !== (n = s[11].text + "") && ae(l, n)
        },
        d(s) {
            s && ht(i)
        }
    }
}

function ul(f) {
    let i, n = f[11].type === "text" && al(f);
    return {
        c() {
            n && n.c(), i = yn()
        },
        m(l, s) {
            n && n.m(l, s), pt(l, i, s)
        },
        p(l, s) {
            l[11].type === "text" ? n ? n.p(l, s) : (n = al(l), n.c(), n.m(i.parentNode, i)) : n && (n.d(1), n = null)
        },
        d(l) {
            n && n.d(l), l && ht(i)
        }
    }
}

function ll(f) {
    let i, n, l = new Date(f[8].timestamp).toLocaleDateString() + "",
        s, d, u, a = f[8].name + "",
        m, _, c, g = f[8].entries,
        h = [];
    for (let p = 0; p < g.length; p += 1) h[p] = ul(ol(f, g, p));
    return {
        c() {
            i = ot("div"), n = ot("p"), s = It(l), d = Et(), u = ot("h2"), m = It(a), _ = Et();
            for (let p = 0; p < h.length; p += 1) h[p].c();
            c = Et(), dt(n, "class", "text-center text-xs opacity-80"), dt(u, "class", "text-xl font-bold"), dt(i, "class", "space-y-2")
        },
        m(p, x) {
            pt(p, i, x), q(i, n), q(n, s), q(i, d), q(i, u), q(u, m), q(i, _);
            for (let y = 0; y < h.length; y += 1) h[y].m(i, null);
            q(i, c)
        },
        p(p, x) {
            if (x & 2 && l !== (l = new Date(p[8].timestamp).toLocaleDateString() + "") && ae(s, l), x & 2 && a !== (a = p[8].name + "") && ae(m, a), x & 2) {
                g = p[8].entries;
                let y;
                for (y = 0; y < g.length; y += 1) {
                    const A = ol(p, g, y);
                    h[y] ? h[y].p(A, x) : (h[y] = ul(A), h[y].c(), h[y].m(i, c))
                }
                for (; y < h.length; y += 1) h[y].d(1);
                h.length = g.length
            }
        },
        d(p) {
            p && ht(i), Dn(h, p)
        }
    }
}

function yg(f) {
    let i, n, l, s, d;

    function u(c) {
        f[6](c)
    }
    let a = {
        name: "Diary",
        status: f[0],
        onExport: f[4],
        onDownload: f[5],
        hasContent: f[1].length > 0
    };
    f[3] !== void 0 && (a.exportFormat = f[3]), i = new Il({
        props: a
    }), Dr.push(() => xl(i, "exportFormat", u));
    let m = f[1],
        _ = [];
    for (let c = 0; c < m.length; c += 1) _[c] = ll(sl(f, m, c));
    return {
        c() {
            Ee(i.$$.fragment), l = Et(), s = ot("div");
            for (let c = 0; c < _.length; c += 1) _[c].c();
            dt(s, "class", "my-12 space-y-8")
        },
        m(c, g) {
            ye(i, c, g), pt(c, l, g), pt(c, s, g);
            for (let h = 0; h < _.length; h += 1) _[h].m(s, null);
            f[7](s), d = !0
        },
        p(c, [g]) {
            const h = {};
            if (g & 1 && (h.status = c[0]), g & 2 && (h.hasContent = c[1].length > 0), !n && g & 8 && (n = !0, h.exportFormat = c[3], bl(() => n = !1)), i.$set(h), g & 2) {
                m = c[1];
                let p;
                for (p = 0; p < m.length; p += 1) {
                    const x = sl(c, m, p);
                    _[p] ? _[p].p(x, g) : (_[p] = ll(x), _[p].c(), _[p].m(s, null))
                }
                for (; p < _.length; p += 1) _[p].d(1);
                _.length = m.length
            }
        },
        i(c) {
            d || (Ht(i.$$.fragment, c), d = !0)
        },
        o(c) {
            qt(i.$$.fragment, c), d = !1
        },
        d(c) {
            be(i, c), c && ht(l), c && ht(s), Dn(_, c), f[7](null)
        }
    }
}

function bg(f, i, n) {
    let l = Ct.Idle,
        s = [],
        d, u = ee.TXT;
    async function a() {
        n(0, l = Ct.Working);
        const {
            error: g,
            data: h
        } = await hr();
        if (g) {
            n(0, l = Ct.Idle);
            return
        }
        const p = new dg(zr(h));
        n(1, s = await p.export()), n(0, l = Ct.Idle)
    }

    function m() {
        switch (n(0, l = Ct.Working), u) {
            case ee.HTML:
                Me(d.innerHTML, "text/html", Ri("diary", ee.HTML));
            default:
                pg(s, u);
                break
        }
        n(0, l = Ct.Idle)
    }

    function _(g) {
        u = g, n(3, u)
    }

    function c(g) {
        Dr[g ? "unshift" : "push"](() => {
            d = g, n(2, d)
        })
    }
    return [l, s, d, u, a, m, _, c]
}
class xg extends rn {
    constructor(i) {
        super(), nn(this, i, bg, yg, en, {})
    }
}
async function kg(f, i) {
    const n = Ri("memory", i);
    switch (i) {
        case ee.TXT: {
            const l = f.map(s => [new Date(s.creation_timestamp).toLocaleDateString(), s.text].join(`

`)).join(`

${"-".repeat(80)}

`);
            Me(l, "text/plain", n);
            break
        }
        case ee.HTML: {
            const l = f.map(s => `
            <p>
              ${new Date(s.creation_timestamp).toLocaleDateString()}
              <br />
              ${s.text}
            </p>
            `).join("");
            Me(l, "text/plain", n);
            break
        }
        case ee.CSV: {
            const l = ao(f.map(s => ({
                date: new Date(s.creation_timestamp).toLocaleDateString(),
                content: s.text
            })));
            Me(l, "text/csv", n);
            break
        }
        case ee.JSON: {
            const l = JSON.stringify(f, null, 2);
            Me(l, "application/json", n);
            break
        }
        default:
            return
    }
}

function fl(f, i, n) {
    const l = f.slice();
    return l[7] = i[n].creation_timestamp, l[8] = i[n].text, l
}

function cl(f) {
    let i, n, l = new Date(f[7]).toLocaleDateString() + "",
        s, d, u, a = f[8] + "",
        m, _;
    return {
        c() {
            i = ot("div"), n = ot("p"), s = It(l), d = Et(), u = ot("p"), m = It(a), _ = Et(), dt(n, "class", "text-xs op80"), dt(u, "class", ""), dt(i, "class", "space-y-2 text-center")
        },
        m(c, g) {
            pt(c, i, g), q(i, n), q(n, s), q(i, d), q(i, u), q(u, m), q(i, _)
        },
        p(c, g) {
            g & 4 && l !== (l = new Date(c[7]).toLocaleDateString() + "") && ae(s, l), g & 4 && a !== (a = c[8] + "") && ae(m, a)
        },
        d(c) {
            c && ht(i)
        }
    }
}

function Sg(f) {
    let i, n, l, s, d, u, a;

    function m(h) {
        f[6](h)
    }
    let _ = {
        name: "Memory",
        status: f[0],
        onExport: f[4],
        onDownload: f[5],
        hasContent: f[2].length > 0
    };
    f[3] !== void 0 && (_.exportFormat = f[3]), i = new Il({
        props: _
    }), Dr.push(() => xl(i, "exportFormat", m)), s = new Al({
        props: {
            error: f[1]
        }
    });
    let c = f[2],
        g = [];
    for (let h = 0; h < c.length; h += 1) g[h] = cl(fl(f, c, h));
    return {
        c() {
            Ee(i.$$.fragment), l = Et(), Ee(s.$$.fragment), d = Et(), u = ot("div");
            for (let h = 0; h < g.length; h += 1) g[h].c();
            dt(u, "class", "my-12 space-y-8")
        },
        m(h, p) {
            ye(i, h, p), pt(h, l, p), ye(s, h, p), pt(h, d, p), pt(h, u, p);
            for (let x = 0; x < g.length; x += 1) g[x].m(u, null);
            a = !0
        },
        p(h, [p]) {
            const x = {};
            p & 1 && (x.status = h[0]), p & 4 && (x.hasContent = h[2].length > 0), !n && p & 8 && (n = !0, x.exportFormat = h[3], bl(() => n = !1)), i.$set(x);
            const y = {};
            if (p & 2 && (y.error = h[1]), s.$set(y), p & 4) {
                c = h[2];
                let A;
                for (A = 0; A < c.length; A += 1) {
                    const S = fl(h, c, A);
                    g[A] ? g[A].p(S, p) : (g[A] = cl(S), g[A].c(), g[A].m(u, null))
                }
                for (; A < g.length; A += 1) g[A].d(1);
                g.length = c.length
            }
        },
        i(h) {
            a || (Ht(i.$$.fragment, h), Ht(s.$$.fragment, h), a = !0)
        },
        o(h) {
            qt(i.$$.fragment, h), qt(s.$$.fragment, h), a = !1
        },
        d(h) {
            be(i, h), h && ht(l), be(s, h), h && ht(d), h && ht(u), Dn(g, h)
        }
    }
}

function Ag(f, i, n) {
    let l = Ct.Idle,
        s = null,
        d = [],
        u = ee.TXT;
    async function a() {
        try {
            n(2, d = []), n(0, l = Ct.Working);
            const {
                error: c,
                data: g
            } = await hr();
            if (c) throw c;
            const p = await (await fetch("https://my.replika.ai/api/mobile/1.4/memory", {
                headers: zr(g)
            })).json();
            if (!Array.isArray(p.facts)) throw {
                message: "unexpected response, no facts found",
                json: p
            };
            n(2, d = p.facts);
            const y = await (await fetch("https://my.replika.ai/api/mobile/1.5/memory/v3/", {
                headers: zr(g)
            })).json();
            n(2, d = [...d, ...y.customer_facts, ...y.robot_facts]), console.log(d)
        } catch (c) {
            console.warn(c), n(1, s = c)
        } finally {
            n(0, l = Ct.Idle)
        }
    }

    function m() {
        n(0, l = Ct.Working), kg(d, u), n(0, l = Ct.Idle)
    }

    function _(c) {
        u = c, n(3, u)
    }
    return [l, s, d, u, a, m, _]
}
class Eg extends rn {
    constructor(i) {
        super(), nn(this, i, Ag, Sg, en, {})
    }
}

function Cg(f) {
    let i;
    return {
        c() {
            i = It(`no images found, make sure to export text messages first using the chat
    export`)
        },
        m(n, l) {
            pt(n, i, l)
        },
        p: ne,
        i: ne,
        o: ne,
        d(n) {
            n && ht(i)
        }
    }
}

function Ig(f) {
    let i, n;
    return i = new dr({
        props: {
            title: "New Image Export",
            $$slots: {
                body: [Rg],
                caption: [Og],
                head: [Tg]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            Ee(i.$$.fragment)
        },
        m(l, s) {
            ye(i, l, s), n = !0
        },
        p(l, s) {
            const d = {};
            s & 1087 && (d.$$scope = {
                dirty: s,
                ctx: l
            }), i.$set(d)
        },
        i(l) {
            n || (Ht(i.$$.fragment, l), n = !0)
        },
        o(l) {
            qt(i.$$.fragment, l), n = !1
        },
        d(l) {
            be(i, l)
        }
    }
}

function Tg(f) {
    let i, n, l, s, d;
    return {
        c() {
            i = ot("button"), n = It("Start Export"), i.disabled = l = f[0] !== Ct.Idle || !f[4]
        },
        m(u, a) {
            pt(u, i, a), q(i, n), s || (d = le(i, "click", f[6]), s = !0)
        },
        p(u, a) {
            a & 17 && l !== (l = u[0] !== Ct.Idle || !u[4]) && (i.disabled = l)
        },
        d(u) {
            u && ht(i), s = !1, d()
        }
    }
}

function Og(f) {
    let i = f[5].length + "",
        n, l;
    return {
        c() {
            n = It(i), l = It(" images")
        },
        m(s, d) {
            pt(s, n, d), pt(s, l, d)
        },
        p(s, d) {
            d & 32 && i !== (i = s[5].length + "") && ae(n, i)
        },
        d(s) {
            s && ht(n), s && ht(l)
        }
    }
}

function Rg(f) {
    let i, n, l, s, d, u, a, m, _, c, g, h, p, x, y, A, S, C, T;
    return {
        c() {
            i = ot("label"), n = ot("input"), l = Et(), s = ot("div"), s.innerHTML = `i acknowlege that
                    <a href="https://corsproxy.io">corsproxy.io</a>
                    is used in order to make image download from a not official-replika
                    origin work
                    <br/>
                    i am not affilated with them, but i have choosen them because
                    they don&#39;t do any logging`, d = Et(), u = ot("label"), a = ot("input"), m = Et(), _ = ot("div"), _.textContent = `chunk size - how many messages to download at the same time
                    and zip into one archive`, c = Et(), g = ot("label"), h = ot("input"), p = Et(), x = ot("div"), x.textContent = "time in seconds to wait between chunk download", y = Et(), A = ot("pre"), S = It(f[1]), dt(n, "type", "checkbox"), dt(s, "class", "text-xs mt-1"), dt(i, "class", "flex mb4 space-x-4"), dt(a, "type", "number"), dt(a, "min", "1"), dt(_, "class", "text-xs mt-1"), dt(u, "class", "mb4 flex space-x-4"), dt(h, "type", "number"), dt(h, "min", "0"), dt(x, "class", "text-xs mt-1"), dt(g, "class", "mb4 flex space-x-4"), dt(A, "class", "overflow-x-auto")
        },
        m(L, B) {
            pt(L, i, B), q(i, n), n.checked = f[4], q(i, l), q(i, s), pt(L, d, B), pt(L, u, B), q(u, a), Ln(a, f[2]), q(u, m), q(u, _), pt(L, c, B), pt(L, g, B), q(g, h), Ln(h, f[3]), q(g, p), q(g, x), pt(L, y, B), pt(L, A, B), q(A, S), C || (T = [le(n, "change", f[7]), le(a, "input", f[8]), le(h, "input", f[9])], C = !0)
        },
        p(L, B) {
            B & 16 && (n.checked = L[4]), B & 4 && lr(a.value) !== L[2] && Ln(a, L[2]), B & 8 && lr(h.value) !== L[3] && Ln(h, L[3]), B & 2 && ae(S, L[1])
        },
        d(L) {
            L && ht(i), L && ht(d), L && ht(u), L && ht(c), L && ht(g), L && ht(y), L && ht(A), C = !1, tn(T)
        }
    }
}

function Lg(f) {
    let i, n, l, s;
    const d = [Ig, Cg],
        u = [];

    function a(m, _) {
        return m[5].length > 0 ? 0 : 1
    }
    return i = a(f), n = u[i] = d[i](f), {
        c() {
            n.c(), l = yn()
        },
        m(m, _) {
            u[i].m(m, _), pt(m, l, _), s = !0
        },
        p(m, [_]) {
            let c = i;
            i = a(m), i === c ? u[i].p(m, _) : (pr(), qt(u[c], 1, 1, () => {
                u[c] = null
            }), _r(), n = u[i], n ? n.p(m, _) : (n = u[i] = d[i](m), n.c()), Ht(n, 1), n.m(l.parentNode, l))
        },
        i(m) {
            s || (Ht(n), s = !0)
        },
        o(m) {
            qt(n), s = !1
        },
        d(m) {
            u[i].d(m), m && ht(l)
        }
    }
}

function Dg(f, i, n) {
    let l = Ct.Idle,
        s = "",
        d = 100,
        u = 1,
        a = !1,
        m = [];
    yl(async () => {
        const p = await getAllMessages();
        n(5, m = p.filter(x => x.content.type === "images"))
    });
    async function _() {
        n(0, l = Ct.Working);
        const {
            data: p,
            error: x
        } = await hr();
        if (x) {
            n(1, s = JSON.stringify(x, null, 4)), n(0, l = Ct.Idle);
            return
        }
        const y = LodashE1.chunk(m, d);
        for (const A of y) {
            const S = new LodashE2;
            await Promise.all(A.map(async (T, L) => {
                const B = T.content.text,
                    G = {
                        Customer: p.userName,
                        Robot: p.botName
                    } [T.meta.nature],
                    W = [L, T.meta.timestamp, G],
                    V = T.meta.timestamp.replaceAll(":", "-").replaceAll(".", "-");
                try {
                    const st = await (await fetch("https://my.replika.ai/api/mobile/1.5/images/signed/actions/get_url", {
                        method: "POST",
                        headers: zr(p),
                        body: JSON.stringify({
                            image_url: B
                        })
                    })).json();
                    W.push(st.image_url);
                    const D = await (await fetch(`https://corsproxy.io/?${st.image_url}`)).blob();
                    S.file(`${V}_${G}_${T.id}.jpg`.toLowerCase(), D)
                } catch (Z) {
                    console.warn(Z, T), W.push(Z)
                }
                n(1, s = `${W.join(" - ")}
${s}`)
            }));
            const C = await S.generateAsync({
                type: "blob"
            });
            LodashE3.saveAs(C, `replika-export-image-${Oi()}.zip`), await new Promise(T => setTimeout(T, 1e3 * u))
        }
        n(0, l = Ct.Idle)
    }

    function c() {
        a = this.checked, n(4, a)
    }

    function g() {
        d = lr(this.value), n(2, d)
    }

    function h() {
        u = lr(this.value), n(3, u)
    }
    return [l, s, d, u, a, m, _, c, g, h]
}
class zg extends rn {
    constructor(i) {
        super(), nn(this, i, Dg, Lg, en, {})
    }
}

function hl(f, i, n) {
    const l = f.slice();
    return l[7] = i[n].name, l[8] = i[n].component, l
}

function dl(f, i, n) {
    const l = f.slice();
    return l[7] = i[n].name, l
}

function Bg(f) {
    let i, n;
    return i = new kl({
        props: {
            error: f[13]
        }
    }), {
        c() {
            Ee(i.$$.fragment)
        },
        m(l, s) {
            ye(i, l, s), n = !0
        },
        p: ne,
        i(l) {
            n || (Ht(i.$$.fragment, l), n = !0)
        },
        o(l) {
            qt(i.$$.fragment, l), n = !1
        },
        d(l) {
            be(i, l)
        }
    }
}

function Fg(f) {
    let i, n, l, s;
    const d = [Ug, Ng],
        u = [];

    function a(m, _) {
        return m[6] === !0 ? 0 : 1
    }
    return i = a(f), n = u[i] = d[i](f), {
        c() {
            n.c(), l = yn()
        },
        m(m, _) {
            u[i].m(m, _), pt(m, l, _), s = !0
        },
        p(m, _) {
            n.p(m, _)
        },
        i(m) {
            s || (Ht(n), s = !0)
        },
        o(m) {
            qt(n), s = !1
        },
        d(m) {
            u[i].d(m), m && ht(l)
        }
    }
}

function Ng(f) {
    let i, n;
    return i = new kl({}), {
        c() {
            Ee(i.$$.fragment)
        },
        m(l, s) {
            ye(i, l, s), n = !0
        },
        p: ne,
        i(l) {
            n || (Ht(i.$$.fragment, l), n = !0)
        },
        o(l) {
            qt(i.$$.fragment, l), n = !1
        },
        d(l) {
            be(i, l)
        }
    }
}

function Ug(f) {
    let i, n, l, s, d, u, a = f[2],
        m = [];
    for (let h = 0; h < a.length; h += 1) m[h] = pl(dl(f, a, h));
    let _ = f[2],
        c = [];
    for (let h = 0; h < _.length; h += 1) c[h] = gl(hl(f, _, h));
    const g = h => qt(c[h], 1, 1, () => {
        c[h] = null
    });
    return {
        c() {
            i = ot("nav");
            for (let h = 0; h < m.length; h += 1) m[h].c();
            n = Et(), l = ot("a"), l.textContent = "FAQ", s = Et(), d = ot("div");
            for (let h = 0; h < c.length; h += 1) c[h].c();
            dt(l, "href", "https://index.garden/replika-export/#faq"), dt(l, "target", "__blank"), dt(i, "class", "flex space-x-4 absolute top-10 left-10 font-mono capitalize")
        },
        m(h, p) {
            pt(h, i, p);
            for (let x = 0; x < m.length; x += 1) m[x].m(i, null);
            q(i, n), q(i, l), pt(h, s, p), pt(h, d, p);
            for (let x = 0; x < c.length; x += 1) c[x].m(d, null);
            u = !0
        },
        p(h, p) {
            if (p & 13) {
                a = h[2];
                let x;
                for (x = 0; x < a.length; x += 1) {
                    const y = dl(h, a, x);
                    m[x] ? m[x].p(y, p) : (m[x] = pl(y), m[x].c(), m[x].m(i, n))
                }
                for (; x < m.length; x += 1) m[x].d(1);
                m.length = a.length
            }
            if (p & 5) {
                _ = h[2];
                let x;
                for (x = 0; x < _.length; x += 1) {
                    const y = hl(h, _, x);
                    c[x] ? (c[x].p(y, p), Ht(c[x], 1)) : (c[x] = gl(y), c[x].c(), Ht(c[x], 1), c[x].m(d, null))
                }
                for (pr(), x = _.length; x < c.length; x += 1) g(x);
                _r()
            }
        },
        i(h) {
            if (!u) {
                for (let p = 0; p < _.length; p += 1) Ht(c[p]);
                u = !0
            }
        },
        o(h) {
            c = c.filter(Boolean);
            for (let p = 0; p < c.length; p += 1) qt(c[p]);
            u = !1
        },
        d(h) {
            h && ht(i), Dn(m, h), h && ht(s), h && ht(d), Dn(c, h)
        }
    }
}

function pl(f) {
    let i, n = f[7] + "",
        l, s, d, u;

    function a() {
        return f[4](f[7])
    }

    function m() {
        return f[5](f[7])
    }
    return {
        c() {
            i = ot("div"), l = It(n), dt(i, "class", s = f[0] === f[7] ? "font-bold cursor-not-allowed" : "cursor-pointer")
        },
        m(_, c) {
            pt(_, i, c), q(i, l), d || (u = [le(i, "click", a), le(i, "keypress", m)], d = !0)
        },
        p(_, c) {
            f = _, c & 1 && s !== (s = f[0] === f[7] ? "font-bold cursor-not-allowed" : "cursor-pointer") && dt(i, "class", s)
        },
        d(_) {
            _ && ht(i), d = !1, tn(u)
        }
    }
}

function _l(f) {
    let i, n, l;
    var s = f[8];

    function d(u) {
        return {}
    }
    return s && (i = Wu(s, d())), {
        c() {
            i && Ee(i.$$.fragment), n = yn()
        },
        m(u, a) {
            i && ye(i, u, a), pt(u, n, a), l = !0
        },
        p(u, a) {
            if (s !== (s = u[8])) {
                if (i) {
                    pr();
                    const m = i;
                    qt(m.$$.fragment, 1, 0, () => {
                        be(m, 1)
                    }), _r()
                }
                s ? (i = Wu(s, d()), Ee(i.$$.fragment), Ht(i.$$.fragment, 1), ye(i, n.parentNode, n)) : i = null
            }
        },
        i(u) {
            l || (i && Ht(i.$$.fragment, u), l = !0)
        },
        o(u) {
            i && qt(i.$$.fragment, u), l = !1
        },
        d(u) {
            u && ht(n), i && be(i, u)
        }
    }
}

function gl(f) {
    let i, n, l = f[7] === f[0] && _l(f);
    return {
        c() {
            l && l.c(), i = yn()
        },
        m(s, d) {
            l && l.m(s, d), pt(s, i, d), n = !0
        },
        p(s, d) {
            s[7] === s[0] ? l ? (l.p(s, d), d & 1 && Ht(l, 1)) : (l = _l(s), l.c(), Ht(l, 1), l.m(i.parentNode, i)) : l && (pr(), qt(l, 1, 1, () => {
                l = null
            }), _r())
        },
        i(s) {
            n || (Ht(l), n = !0)
        },
        o(s) {
            qt(l), n = !1
        },
        d(s) {
            l && l.d(s), s && ht(i)
        }
    }
}

function Pg(f) {
    let i;
    return {
        c() {
            i = It("Loading ✨")
        },
        m(n, l) {
            pt(n, i, l)
        },
        p: ne,
        i: ne,
        o: ne,
        d(n) {
            n && ht(i)
        }
    }
}

function Wg(f) {
    let i, n, l, s = {
        ctx: f,
        current: null,
        token: null,
        hasCatch: !0,
        pending: Pg,
        then: Fg,
        catch: Bg,
        value: 6,
        error: 13,
        blocks: [, , , ]
    };
    return v1(f[1], s), {
        c() {
            i = ot("main"), n = ot("div"), s.block.c(), dt(n, "class", "w-lg text-sm"), dt(i, "class", "text-white min-h-screen flex justify-center pt-[8rem] svelte-1iiiq66")
        },
        m(d, u) {
            pt(d, i, u), q(i, n), s.block.m(n, s.anchor = null), s.mount = () => n, s.anchor = null, l = !0
        },
        p(d, [u]) {
            f = d, w1(s, f, u)
        },
        i(d) {
            l || (Ht(s.block), l = !0)
        },
        o(d) {
            for (let u = 0; u < 3; u += 1) {
                const a = s.blocks[u];
                qt(a)
            }
            l = !1
        },
        d(d) {
            d && ht(i), s.block.d(), s.token = null, s = null
        }
    }
}

function Mg(f, i, n) {
    const l = checkPayment(),
        s = [{
            name: "chat",
            component: eg
        }, {
            name: "voice",
            component: hg
        }, {
            name: "image",
            component: zg
        }, {
            name: "diary",
            component: xg
        }, {
            name: "memory",
            component: Eg
        }];
    let d = "chat";

    function u(_) {
        d !== _ && n(0, d = _)
    }
    return [d, l, s, u, _ => u(_), _ => u(_)]
}
class $g extends rn {
    constructor(i) {
        super(), nn(this, i, Mg, Wg, en, {})
    }
}
new $g({
    target: document.getElementById("app")
});