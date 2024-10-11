//assets/index.js
//Hours Wasted: 11 1/2 Fuckups fixed, just gotta fix the voice CORS issue but idk how to spoof it properly
import {
    countMessages,
    getLastMessageId,
    database,
    getAllMessages,

} from "./replikaExport.js";

import {
    LodashE1,
    LodashE2,
    LodashE3
} from "./lodash.js";

var defineProperty = Object.defineProperty;
var setProperty = (obj, key, value) => key in obj ? defineProperty(obj, key, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: value
}) : obj[key] = value;
var defineOrSetProperty = (obj, key, value) => (setProperty(obj, typeof key != "symbol" ? key + "" : key, value), value);


(function() {
    const relList = document.createElement("link").relList;
    if (relList && relList.supports && relList.supports("modulepreload")) return;
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) preloadLink(link);
    new MutationObserver(mutations => {
        for (const mutation of mutations)
            if (mutation.type === "childList")
                for (const addedNode of mutation.addedNodes) addedNode.tagName === "LINK" && addedNode.rel === "modulepreload" && preloadLink(addedNode)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function getFetchOptions(link) {
        const options = {};
        return link.integrity && (options.integrity = link.integrity), link.referrerpolicy && (options.referrerPolicy = link.referrerpolicy), link.crossorigin === "use-credentials" ? options.credentials = "include" : link.crossorigin === "anonymous" ? options.credentials = "omit" : options.credentials = "same-origin", options
    }

    function preloadLink(link) {
        if (link.ep) return;
        link.ep = !0;
        const fetchOptions = getFetchOptions(link);
        fetch(link.href, fetchOptions)
    }
})();

function noOperation() {}

function mergeObjects(target, source) {
    for (const key in source) target[key] = source[key];
    return target
}

function isPromise(value) {
    return !!value && (typeof value == "object" || typeof value == "function") && typeof value.then == "function"
}

function mexecuteFunction(funct) {
    return funct()
}

function createEmptyObject() {
    return Object.create(null)
}

function executeAll(func) {
    func.forEach(mexecuteFunction)
}

function isFunction(func) {
    return typeof func == "function"
}

function isEqual(var1, var2) {
    return var1 != var1 ? var2 == var2 : var1 !== var2 || var1 && typeof var1 == "object" || typeof var1 == "function"
}

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0
}

function callIfExists(functionArray, ctx, param1, param2) {
    if (functionArray) {
        const s = invokeFunction(functionArray, ctx, param1, param2);
        return functionArray[0](s)
    }
}

function invokeFunction(functionArray, ctx, param1, param2) {
    return functionArray[1] && param2 ? mergeObjects(param1.ctx.slice(), functionArray[1](param2(ctx))) : param1.ctx
}

function computeDirtyFlag(functionArray, ctx, param1, param2) {
    if (functionArray[2] && param2) {
        const newFlags = functionArray[2](param2(param1));
        if (ctx.dirty === void 0) return newFlags;
        if (typeof newFlags == "object") {
            const d = [],
                u = Math.max(ctx.dirty.length, newFlags.length);
            for (let index = 0; index < u; index += 1) d[index] = ctx.dirty[index] | newFlags[index];
            return d
        }
        return ctx.dirty | newFlags
    }
    return ctx.dirty
}

function updateIfExists(instance, ctx, param1, param2, flags, param3) {
    if (flags) {
        const updatedValues = invokeFunction(ctx, param1, param2, param3);
        instance.p(updatedValues, flags)
    }
}

function allocateMemory(instance) {
    if (instance.ctx.length > 32) {
        const memoryArray = [],
            chunks = instance.ctx.length / 32;
        for (let index = 0; index < chunks; index++) memoryArray[index] = -1;
        return memoryArray
    }
    return -1
}

function appendChild(parent, child) {
    parent.appendChild(child)
}

function insertBefore(parent, child, refNode) {
    parent.insertBefore(child, refNode || null)
}

function removeElement(element) {
    element.parentNode && element.parentNode.removeChild(element)
}

function callDestroyMethods(elements, param) {
    for (let index = 0; index < elements.length; index += 1) elements[index] && elements[index].d(param)
}

function createElement(element) {
    return document.createElement(element)
}

function createTextNode(text) {
    return document.createTextNode(text)
}

function createSpaceTextNode() {
    return createTextNode(" ")
}

function createEmptyTextNode() {
    return createTextNode("")
}

function addEventListenerWithCleanup(element, event, callback, options) {
    return element.addEventListener(event, callback, options), () => element.removeEventListener(event, callback, options)
}

function setAttribute(element, attribute, value) {
    value == null ? element.removeAttribute(attribute) : element.getAttribute(attribute) !== value && element.setAttribute(attribute, value)
}

function parseInteger(value) {
    return value === "" ? null : +value
}

function getChildNodesArray(parent) {
    return Array.from(parent.childNodes)
}

function updateWholeTextNode(textNode, newValue) {
    newValue = "" + newValue, textNode.wholeText !== newValue && (textNode.data = newValue)
}

function setInputValue(input, value) {
    input.value = value ?? ""
}

function selectOptionByValue(selectedElement, value) {
    for (let index = 0; index < selectedElement.options.length; index += 1) {
        const option = selectedElement.options[index];
        if (option.__value === value) {
            option.selected = !0;
            return
        }
    }
    selectedElement.selectedIndex = -1
}

function getCheckedValue(form) {
    const i = form.querySelector(":checked") || form.options[0];
    return i && i.__value
}

function createInstance(constructor, arg) {
    return new constructor(arg)
}
let currentComponent;

function setCurrentComponent(componet) {
    currentComponent = componet
}

function getCurrentComponent() {
    if (!currentComponent) throw new Error("Function called outside component initialization");
    return currentComponent
}

function addOnMountHook(hook) {
    getCurrentComponent().$$.on_mount.push(hook)
}
const pendingUpdates = [],
    afterUpdateCallbacks = [],
    beforeUpdateCallbacks = [],
    cleanupCallbacks = [],
    resolvedPromise = Promise.resolve();
let isUpdating = !1;

function scheduleUpdate() {
    isUpdating || (isUpdating = !0, resolvedPromise.then(executePendingUpdates))
}

function addBeforeUpdateCallback(callback) {
    beforeUpdateCallbacks.push(callback)
}

function addCleanupCallback(callback) {
    cleanupCallbacks.push(callback)
}
const executedCallbacks = new Set;
let currentPromiseContext = 0;

function executePendingUpdates() {
    if (currentPromiseContext !== 0) return;
    const previousComponent = currentComponent;
    do {
        try {
            for (; currentPromiseContext < pendingUpdates.length;) {
                const component = pendingUpdates[currentPromiseContext];
                currentPromiseContext++, setCurrentComponent(component), executeComponentUpdate(component.$$)
            }
        } catch (error) {
            throw pendingUpdates.length = 0, currentPromiseContext = 0, error
        }
        for (setCurrentComponent(null), pendingUpdates.length = 0, currentPromiseContext = 0; afterUpdateCallbacks.length;) afterUpdateCallbacks.pop()();
        for (let index = 0; index < beforeUpdateCallbacks.length; index += 1) {
            const callback = beforeUpdateCallbacks[index];
            executedCallbacks.has(callback) || (executedCallbacks.add(callback), callback())
        }
        beforeUpdateCallbacks.length = 0
    } while (pendingUpdates.length);
    for (; cleanupCallbacks.length;) cleanupCallbacks.pop()();
    isUpdating = !1, executedCallbacks.clear(), setCurrentComponent(previousComponent)
}

function executeComponentUpdate(component) {
    if (component.fragment !== null) {
        component.update(), executeAll(component.before_update);
        const dirtyState = component.dirty;
        component.dirty = [-1], component.fragment && component.fragment.p(component.ctx, dirtyState), component.after_update.forEach(addBeforeUpdateCallback)
    }
}
const pendingCallbacks = new Set;
let promiseContext;

function startPromiseContext() {
    promiseContext = {
        r: 0,
        c: [],
        p: promiseContext
    }
}

function endPromiseContext() {
    promiseContext.r || executeAll(promiseContext.c), promiseContext = promiseContext.p
}

function invokeInitFunction(initFunction, params) {
    initFunction && initFunction.i && (pendingCallbacks.delete(initFunction), initFunction.i(params))
}

function handlePromise(promise, context, onResolved, onRejected) {
    if (promise && promise.o) {
        if (pendingCallbacks.has(promise)) return;
        pendingCallbacks.add(promise), promiseContext.c.push(() => {
            pendingCallbacks.delete(promise), onRejected && (onResolved && promise.d(1), onRejected())
        }), promise.o(context)
    } else onRejected && onRejected()
}

function handleAsyncValue(asyncValue, state) {
    const context = state.token = {};

    function handleResolvedBlock(resolvedFunc, blockIndex, valueIndex, resolvedValue) {
        if (state.token !== context) return;
        state.resolved = resolvedValue;
        let componentContext = state.ctx;
        valueIndex !== void 0 && (componentContext = componentContext.slice(), componentContext[valueIndex] = resolvedValue);
        const resolvedFunction = resolvedFunc && (state.current = resolvedFunc)(componentContext);
        let isBlockUpdated = !1;
        state.block && (state.blocks ? state.blocks.forEach((g, h) => {
            h !== blockIndex && g && (startPromiseContext(), handlePromise(g, 1, 1, () => {
                state.blocks[h] === g && (state.blocks[h] = null)
            }), endPromiseContext())
        }) : state.block.d(1), resolvedFunction.c(), invokeInitFunction(resolvedFunction, 1), resolvedFunction.m(state.mount(), state.anchor), isBlockUpdated = !0), state.block = resolvedFunction, state.blocks && (state.blocks[blockIndex] = resolvedFunction), isBlockUpdated && executePendingUpdates()
    }
    if (isPromise(asyncValue)) {
        const s = getCurrentComponent();
        if (asyncValue.then(d => {
                setCurrentComponent(s), handleResolvedBlock(state.then, 1, state.value, d), setCurrentComponent(null)
            }, d => {
                if (setCurrentComponent(s), handleResolvedBlock(state.catch, 2, state.error, d), setCurrentComponent(null), !state.hasCatch) throw d
            }), state.current !== state.pending) return handleResolvedBlock(state.pending, 0), !0
    } else {
        if (state.current !== state.then) return handleResolvedBlock(state.then, 1, state.value, asyncValue), !0;
        state.resolved = asyncValue
    }
}

function updateComponent(component, state, dirtyIndex) {
    const updatedContext = state.slice(),
        {
            resolved: sResolved
        } = component;
    component.current === component.then && (updatedContext[component.value] = sResolved), component.current === component.catch && (updatedContext[component.error] = sResolved), component.block.p(updatedContext, dirtyIndex)
}

function bindComponentProp(component, propIndex, value) {
    const prop = component.$$.props[propIndex];
    prop !== void 0 && (component.$$.bound[prop] = value, value(component.$$.ctx[prop]))
}

function createFragment(componet) {
    componet && componet.c()
}

function mountComponent(component, target, anchor, isCustElement) {
    const {
        fragment: sfragment,
        after_update: dafter_update
    } = component.$$;
    sfragment && sfragment.m(target, anchor), isCustElement || addBeforeUpdateCallback(() => {
        const u = component.$$.on_mount.map(mexecuteFunction).filter(isFunction);
        component.$$.on_destroy ? component.$$.on_destroy.push(...u) : executeAll(u), component.$$.on_mount = []
    }), dafter_update.forEach(addBeforeUpdateCallback)
}

function destroyComponent(component, shouldDetach) {
    const n = component.$$;
    n.fragment !== null && (executeAll(n.on_destroy), n.fragment && n.fragment.d(shouldDetach), n.on_destroy = n.fragment = null, n.ctx = [])
}

function markDirty(component, dirtyIndex) {
    component.$$.dirty[0] === -1 && (pendingUpdates.push(component), scheduleUpdate(), component.$$.dirty.fill(0)), component.$$.dirty[dirtyIndex / 31 | 0] |= 1 << dirtyIndex % 31
}

function initializeComponent(component, options, ctx, renderFunction, props, notEqualFn, instanceFunction, initialDirtyState = [-1]) {
    const previousComponent = currentComponent;
    setCurrentComponent(component);
    const componentState = component.$$ = {
        fragment: null,
        ctx: [],
        props: notEqualFn,
        update: noOperation,
        not_equal: props,
        bound: createEmptyObject(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (previousComponent ? previousComponent.$$.context : [])),
        callbacks: createEmptyObject(),
        dirty: initialDirtyState,
        skip_bound: !1,
        root: options.target || previousComponent.$$.root
    };
    instanceFunction && instanceFunction(componentState.root);
    let isInitialUpdate = !1;
    if (componentState.ctx = ctx ? ctx(component, options.props || {}, (g, h, ...p) => {
            const newValue = p.length ? p[0] : h;
            return componentState.ctx && props(componentState.ctx[g], componentState.ctx[g] = newValue) && (!componentState.skip_bound && componentState.bound[g] && componentState.bound[g](newValue), isInitialUpdate && markDirty(component, g)), h
        }) : [], componentState.update(), isInitialUpdate = !0, executeAll(componentState.before_update), componentState.fragment = renderFunction ? renderFunction(componentState.ctx) : !1, options.target) {
        if (options.hydrate) {
            const childNodes = getChildNodesArray(options.target);
            componentState.fragment && componentState.fragment.l(childNodes), childNodes.forEach(removeElement)
        } else componentState.fragment && componentState.fragment.c();
        options.intro && invokeInitFunction(component.$$.fragment), mountComponent(component, options.target, options.anchor, options.customElement), executePendingUpdates()
    }
    setCurrentComponent(previousComponent)
}
class ComponentClass {
    $destroy() {
        destroyComponent(this, 1), this.$destroy = noOperation
    }
    $on(event, callback) {
        if (!isFunction(callback)) return noOperation;
        const callbacksList = this.$$.callbacks[event] || (this.$$.callbacks[event] = []);
        return callbacksList.push(callback), () => {
            const s = callbacksList.indexOf(callback);
            s !== -1 && callbacksList.splice(s, 1)
        }
    }
    $set(i) {
        this.$$set && !isObjectEmpty(i) && (this.$$.skip_bound = !0, this.$$set(i), this.$$.skip_bound = !1)
    }
}
let cryptoRandomFunction;
const randomBytes = new Uint8Array(16);

function getRNGValues() {
    if (!cryptoRandomFunction && (cryptoRandomFunction = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !cryptoRandomFunction)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return cryptoRandomFunction(randomBytes)
}
const hexArray = [];
for (let index = 0; index < 256; ++index) hexArray.push((index + 256).toString(16).slice(1));

function formatUUID(f, i = 0) {
    return (hexArray[f[i + 0]] + hexArray[f[i + 1]] + hexArray[f[i + 2]] + hexArray[f[i + 3]] + "-" + hexArray[f[i + 4]] + hexArray[f[i + 5]] + "-" + hexArray[f[i + 6]] + hexArray[f[i + 7]] + "-" + hexArray[f[i + 8]] + hexArray[f[i + 9]] + "-" + hexArray[f[i + 10]] + hexArray[f[i + 11]] + hexArray[f[i + 12]] + hexArray[f[i + 13]] + hexArray[f[i + 14]] + hexArray[f[i + 15]]).toLowerCase()
}
const randomUUIDFunction = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    UUIDUtils = {
        randomUUID: randomUUIDFunction
    };

function generateUUID(options, array, buffer) {
    if (UUIDUtils.randomUUID && !array && !options) return UUIDUtils.randomUUID();
    options = options || {};
    const l = options.random || (options.rng || getRNGValues)();
    if (l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, array) {
        buffer = buffer || 0;
        for (let index = 0; index < 16; ++index) array[buffer + index] = l[index];
        return array
    }
    return formatUUID(l)
}

class MainLicenseClass extends ComponentClass {
}

var cryptographyHelpers = {},
    moduleExports = {
        get exports() {
            return cryptographyHelpers
        },
        set exports(value) {
            cryptographyHelpers = value
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
    var icryptoUtils = {
        rotateLeft: function(n, l) {
            return n << l | n >>> 32 - l
        },
        endian: function(n) {
            if (n.constructor == Number) return icryptoUtils.rotateLeft(n, 8) & 16711935 | icryptoUtils.rotateLeft(n, 24) & 4278255360;
            for (var l = 0; l < n.length; l++) n[l] = icryptoUtils.endian(n[l]);
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
        }
    };
    O1.exports = icryptoUtils
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
var isValidBuffer = function(buffer) {
    return buffer != null && (isNativeBuffer(buffer) || L1(buffer) || !!buffer._isBuffer)
};

function isNativeBuffer(buffer) {
    return !!buffer.constructor && typeof buffer.constructor.isBuffer == "function" && buffer.constructor.isBuffer(buffer)
}

function L1(f) {
    return typeof f.readFloatLE == "function" && typeof f.slice == "function" && isNativeBuffer(f.slice(0, 0))
}(function() {
    var f = no,
        i = Hu.utf8,
        n = isValidBuffer,
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
    }, s._blocksize = 16, s._digestsize = 16, moduleExports.exports = function(d, u) {
        if (d == null) throw new Error("Illegal argument " + d);
        var a = f.wordsToBytes(s(d, u));
        return u && u.asBytes ? a : u && u.asString ? l.bytesToString(a) : f.bytesToHex(a)
    }
})();
const userAuthData = {
    userId: "",
    deviceId: "",
    authToken: "",
    chatId: "",
    userName: "",
    botName: ""
};

function createRequestHeaders(userData) {
    const i = cryptographyHelpers(`time_covfefe_prefix=2020_${userData.deviceId}`);
    return {
        "x-user-id": userData.userId,
        "x-auth-token": userData.authToken,
        "x-device-id": userData.deviceId,
        "x-timestamp-hash": i
    }
}

async function swapActiveTab(targetTabId) {
    const tabsAPI = typeof browser !== 'undefined' ? browser.tabs : chrome.tabs;
    const tabs = await tabsAPI.query({ currentWindow: true });
    const targetTab = tabs.find(tab => tab.id === targetTabId);
    if (!targetTab) {
        console.error(`Target tab with ID ${targetTabId} not found.`);
        return;
    }
    const activeTab = tabs.find(tab => tab.active);
    if (!activeTab) {
        console.error("No active tab found.");
        return;
    }
    await tabsAPI.update(activeTab.id, { active: false });
    await tabsAPI.update(targetTab.id, { active: true });
}

async function waitForTabLoad(tabId) {
    return new Promise((resolve) => {
        const tabsAPI = typeof browser !== 'undefined' ? browser.tabs : chrome.tabs;

        const checkTabStatus = async (tabId) => {
            const tab = await tabsAPI.get(tabId);
            if (tab.status === 'complete') {
                resolve();
            } else {
                setTimeout(() => checkTabStatus(tabId), 500);
            }
        };

        checkTabStatus(tabId);
    });
}

async function extractAuthData() {
    const userData = Object.assign({}, userAuthData),
        urlList = ["https://my.replika.com/", "https://my.replika.ai/"],
        result = {
            error: {},
            data: null
        };

    const isFirefox = typeof browser !== "undefined";
    const tabsAPI = isFirefox ? browser.tabs : chrome.tabs;
    const scriptingAPI = isFirefox ? browser.scripting : chrome.scripting;

    for (const url of urlList) {
        const {
            id: tabId
        } = await tabsAPI.create({
            url: url,
            active: false
        });
        await waitForTabLoad(tabId);
        await swapActiveTab(tabId);
        //console.log("here");
        //console.log(tabId);
        //console.log(url);
        let executionResult = null;
        try {
            executionResult = await scriptingAPI.executeScript({
                target: {
                    tabId: tabId
                },
                args: [userData],
                func: userData => {
                    let error = null;
                    try {
                        const authData = localStorage.getItem("auth"),
                            parsedAuthData = JSON.parse(authData);
                        userData.userId = parsedAuthData.userId;
                        userData.deviceId = parsedAuthData.deviceId;
                        userData.authToken = parsedAuthData.authToken;
                        const chatData = localStorage.getItem("ws"),
                            parsedChatData = JSON.parse(chatData);
                        userData.chatId = parsedChatData.chatId;
                        const profileData = localStorage.getItem("profile"),
                            parsedProfileData = JSON.parse(profileData);
                        userData.userName = parsedProfileData.userProfile.first_name;
                        userData.botName = parsedProfileData.bot.name;
                    } catch (error) {
                        console.error("Error extracting user data from localStorage:", error);
                        error = JSON.stringify(error, Object.getOwnPropertyNames(error));
                    }
                    return {
                        error: error,
                        data: userData
                    };
                }
            });
        } catch (wrappedErr) {
            console.error("Error executing script:", wrappedErr);
        }
        //console.log("here2");
        tabsAPI.remove(tabId);
        const {
            error: error2,
            data: resultedUserData
        } = executionResult[0].result;
        if (error2) {
            result.error[url] = error2;
            continue
        }
        result.data = resultedUserData;
        break
    }
    if (!result.data) return result;
    result.error = {};
    for (const l of Object.keys(userData)) result.data[l] || (result.error[l] = "Could not find data");
    return Object.keys(result.error).length === 0 && (result.error = null), result
}
var ExportStatus = (status => (status.Idle = "idle", status.Working = "working", status.Stopping = "stopping", status))(ExportStatus || {}),
    eeExportFormat = (format => (format.TXT = "txt", format.HTML = "html", format.CSV = "csv", format.JSON = "json", format.CHARACTER_AI = "character.ai", format))(eeExportFormat || {});

function downloadContent(content, mineType, fileName) {
    const anchor = document.createElement("a"),
        blob = new Blob([content], {
            type: mineType
        });
    anchor.href = URL.createObjectURL(blob), anchor.download = fileName, anchor.click()
}

function convertToCSV(data) {
    function escapeCSVValue(value) {
        return value.includes('"') && (value = value.replace(/"/g, '""')), `"${value}"`
    }
    const headers = Object.keys(data[0]).map(escapeCSVValue),
        rows = data.map(s => Object.values(s).map(d => escapeCSVValue(d)));
    return [headers, ...rows].map(s => s.join(",")).join(`
`)
}

function generateFileName(exportType, ext) {
    const currDate = new Date().toISOString().split("T")[0];
    return `replika-${exportType}-export-${currDate}.${ext}`
}
async function exportMessages(format, userInfo) {
    const messages = await getAllMessages();
    if (!messages) return;
    const txtMessages = messages.filter(u => u.content.type === "text"),
        fileName = generateFileName("chat", format),
        roles = {
            Customer: userInfo.userName,
            Robot: userInfo.botName
        };
    switch (format) {
        case eeExportFormat.TXT:
            {
                const txtData = txtMessages.map(a => `${new Date(a.meta.timestamp).toLocaleString()} ${roles[a.meta.nature]}: ${a.content.text}`).join(`
`);
                downloadContent(txtData, "text/plain", fileName);
                break
            }
        case eeExportFormat.HTML:
            {
                const htmlData = `
      <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Author</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        ${txtMessages.map(a=>`
          <tr>
            <th>${new Date(a.meta.timestamp).toLocaleString()}</th>
            <td>${roles[a.meta.nature]}</td>
            <td>${a.content.text}</td>
          </tr>`).join("")}
      </tbody>
      </table>
      `;
            downloadContent(htmlData, "text/html", fileName);
            break
        }
        case eeExportFormat.CSV: {
            const csvData = convertToCSV(txtMessages.map(a => ({
                time: new Date(a.meta.timestamp).toLocaleString(),
                sender: roles[a.meta.nature],
                message: a.content.text
            })));
            downloadContent(csvData, "text/csv", fileName);
            break
        }
        case eeExportFormat.JSON: {
            const jsonData = JSON.stringify(txtMessages, null, 2);
            downloadContent(jsonData, "application/json", fileName);
            break
        }
        case eeExportFormat.CHARACTER_AI: {
            const caiData = {
                    Customer: "{{user}}",
                    Robot: "{{char}}"
                },
                caiDatatxt = txtMessages.map(m => [caiData[m.meta.nature], m.content.text.replaceAll(userInfo.userName, caiData.Customer).replaceAll(userInfo.botName, caiData.Robot)].join(": ")).join(`
`);
            downloadContent(caiDatatxt, "text/plain", fileName.replace(format, "txt"));
            break
        }
        default:
            return
    }
}
const createExport = f => ({}),
    fetchData = f => ({}),
    renderContent = f => ({}),
    getContent = f => ({}),
    manageData = f => ({}),
    applySettings = f => ({});

function renderExportComponent(context) {
    let divElement1, divElement2, divElement3, txtNode, spaceNode, spaceNode2, divElement4, divElement5, spaceNode3, divElement6, g;
    const header = context[2].head,
        headerContent = callIfExists(header, context, context[1], applySettings),
        capitionElement = context[2].caption,
        capitaionContent = callIfExists(capitionElement, context, context[1], getContent),
        bodyElement = context[2].body,
        bodyContent = callIfExists(bodyElement, context, context[1], fetchData);
    return {
        c() {
            divElement1 = createElement("div");
            divElement2 = createElement("div");
            divElement3 = createElement("div");
            txtNode = createTextNode(context[0]);
            spaceNode = createSpaceTextNode();
            headerContent && headerContent.c();
            spaceNode2 = createSpaceTextNode();
            divElement4 = createElement("div");
            divElement5 = createElement("div");
            capitaionContent && capitaionContent.c();
            spaceNode3 = createSpaceTextNode();
            divElement6 = createElement("div");
            bodyContent && bodyContent.c();
            setAttribute(divElement3, "class", "text-2xl font-bold");
            setAttribute(divElement2, "class", "flex justify-between items-center");
            setAttribute(divElement5, "class", "opacity-80");
            setAttribute(divElement6, "class", "font-mono");
            setAttribute(divElement4, "class", "space-y-4");
            setAttribute(divElement1, "class", "border-1 border-white border-opacity-25 p-4 rounded-2xl space-y-4")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement1, anchor);
            appendChild(divElement1, divElement2);
            appendChild(divElement2, divElement3);
            appendChild(divElement3, txtNode);
            appendChild(divElement2, spaceNode);
            headerContent && headerContent.m(divElement2, null);
            appendChild(divElement1, spaceNode2);
            appendChild(divElement1, divElement4);
            appendChild(divElement4, divElement5);
            capitaionContent && capitaionContent.m(divElement5, null);
            appendChild(divElement4, spaceNode3);
            appendChild(divElement4, divElement6);
            bodyContent && bodyContent.m(divElement6, null);
            g = !0
        },
        p(newState, [dirtyFlags]) {
            (!g || dirtyFlags & 1) && updateWholeTextNode(txtNode, newState[0]);
            headerContent && headerContent.p && (!g || dirtyFlags & 2) && updateIfExists(headerContent, header, newState, newState[1], g ? computeDirtyFlag(header, newState[1], dirtyFlags, manageData) : allocateMemory(newState[1]), applySettings);
            capitaionContent && capitaionContent.p && (!g || dirtyFlags & 2) && updateIfExists(capitaionContent, capitionElement, newState, newState[1], g ? computeDirtyFlag(capitionElement, newState[1], dirtyFlags, renderContent) : allocateMemory(newState[1]), getContent);
            bodyContent && bodyContent.p && (!g || dirtyFlags & 2) && updateIfExists(bodyContent, bodyElement, newState, newState[1], g ? computeDirtyFlag(bodyElement, newState[1], dirtyFlags, createExport) : allocateMemory(newState[1]), fetchData)
        },
        i(isIntro) {
            g || (invokeInitFunction(headerContent, isIntro), invokeInitFunction(capitaionContent, isIntro), invokeInitFunction(bodyContent, isIntro), g = !0)
        },
        o(isOutro) {
            handlePromise(headerContent, isOutro);
            handlePromise(capitaionContent, isOutro);
            handlePromise(bodyContent, isOutro);
            g = !1
        },
        d(detach) {
            detach && removeElement(divElement1);
            headerContent && headerContent.d(detach);
            capitaionContent && capitaionContent.d(detach);
            bodyContent && bodyContent.d(detach)
        }
    }
}

function initializeComponentState(state, props, context) {
    let {
        $$slots: slots = {},
        $$scope: scope
    } = props, {
        title: componetTitle
    } = props;
    return state.$$set = updatedProps => {
        "title" in updatedProps && context(0, componetTitle = updatedProps.title), "$$scope" in updatedProps && context(1, scope = updatedProps.$$scope)
    }, [componetTitle, scope, slots]
}
class ExportComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, initializeComponentState, renderExportComponent, isEqual, {
            title: 0
        })
    }
}

function renderErrorComponent(f) {
    let divElement1, pElement1, spaceNode, pElement2, spaceNode2, pElement3, spaceNode3, pElement4, spaceNode4, pElement5, spaceNode5, pElement6, spaceNode6, detailsElement1, summElement1, spaceNode7, preElement1, C = JSON.stringify(f[0], null, 2) + "",
        txtNode1;
    return {
        c() {
            divElement1 = createElement("div");
            pElement1 = createElement("p");
            pElement1.textContent = "Something went wrong";
            spaceNode = createSpaceTextNode();
            pElement2 = createElement("p");
            pElement2.textContent = `Replika might change their service at any point of time causing this extension to not work anymore - in this case i have to figure outwhat they have changed to make it work again, just reach out if this is the case.`;
            spaceNode2 = createSpaceTextNode();
            pElement3 = createElement("p");
            pElement3.innerHTML = `Please make sure you are signed in to either
            <a href="https://my.replika.com" target="_blank" rel="noopener noreferrer">my.replika.com</a>
            or
            <a href="https://my.replika.ai" target="_blank" rel="noopener noreferrer">my.replika.ai</a>`;
            spaceNode3 = createSpaceTextNode();
            pElement4 = createElement("p");
            pElement4.textContent = `If you are signed in already, please try to sign out and sign in again.`;
            spaceNode4 = createSpaceTextNode();
            pElement5 = createElement("p");
            pElement5.innerHTML = `If the issue persist, please reach me at <a href="mailto:replika@wolf.gdn?subject=Error">replika@wolf.gdn</a> and include the error details below.`;
            spaceNode5 = createSpaceTextNode();
            pElement6 = createElement("p");
            pElement6.textContent = `Make sure to remove any sensitive information before sending the email.`;
            spaceNode6 = createSpaceTextNode();
            detailsElement1 = createElement("details");
            summElement1 = createElement("summary");
            summElement1.textContent = "Error details";
            spaceNode7 = createSpaceTextNode();
            preElement1 = createElement("pre");
            txtNode1 = createTextNode(C);
            setAttribute(pElement1, "class", "font-bold");
            setAttribute(preElement1, "class", "whitespace-pre-line break-all");
            setAttribute(divElement1, "class", "bg-red-9 font-mono p-4 space-y-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement1, anchor);
            appendChild(divElement1, pElement1);
            appendChild(divElement1, spaceNode);
            appendChild(divElement1, pElement2);
            appendChild(divElement1, spaceNode2);
            appendChild(divElement1, pElement3);
            appendChild(divElement1, spaceNode3);
            appendChild(divElement1, pElement4);
            appendChild(divElement1, spaceNode4);
            appendChild(divElement1, pElement5);
            appendChild(divElement1, spaceNode5);
            appendChild(divElement1, pElement6);
            appendChild(divElement1, spaceNode6);
            appendChild(divElement1, detailsElement1);
            appendChild(detailsElement1, summElement1);
            appendChild(detailsElement1, spaceNode7);
            appendChild(detailsElement1, preElement1);
            appendChild(preElement1, txtNode1)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 1 && C !== (C = JSON.stringify(newState[0], null, 2) + "") && updateWholeTextNode(txtNode1, C)
        },
        d(detach) {
            detach && removeElement(divElement1)
        }
    }
}

function handleErrorState(state) {
    let errState, errComponent = state[0] && renderErrorComponent(state);
    return {
        c() {
            errComponent && errComponent.c();
            errState = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            errComponent && errComponent.m(parentElement, anchor);
            insertBefore(parentElement, errState, anchor)
        },
        p(newState, [dirtyFlags]) {
            newState[0] ? errComponent ? errComponent.p(newState, dirtyFlags) : (errComponent = renderErrorComponent(newState), errComponent.c(), errComponent.m(errState.parentNode, errState)) : errComponent && (errComponent.d(1), errComponent = null)
        },
        i: noOperation,
        o: noOperation,
        d(detach) {
            errComponent && errComponent.d(detach);
            detach && removeElement(errState)
        }
    }
}

function initializeErrorHandling(state, props, context) {
    let {
        error: errMsg = null
    } = props;
    return state.$$set = updatedProps => {
        "error" in updatedProps && context(0, errMsg = updatedProps.error)
    }, [errMsg]
}
let AlErrorComponent = class extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, initializeErrorHandling, handleErrorState, isEqual, {
            error: 0
        })
    }
};

function updateStateWithNewValue(state, array, index) {
    const newState = state.slice();
    return newState[16] = array[index], newState
}

function updateStateWithAnotherValue(state, array, index) {
    const newState = state.slice();
    return newState[19] = array[index], newState
}

function createOptionComponent(state) {
    let optionElement, n = state[19] + "",
        txtNode;
    return {
        c() {
            optionElement = createElement("option");
            txtNode = createTextNode(n);
            optionElement.__value = state[19];
            optionElement.value = optionElement.__value
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, optionElement, anchor);
            appendChild(optionElement, txtNode)
        },
        p: noOperation,
        d(detach) {
            detach && removeElement(optionElement)
        }
    }
}

function createStopBtn(state) {
    let btnElement, isListenerAdded,l;
    return {
        c() {
            btnElement = createElement("button");
            btnElement.textContent = "Stop"
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, btnElement, anchor);
            isListenerAdded || (l = addEventListenerWithCleanup(btnElement, "click", state[10]), isListenerAdded = !0)
        },
        p: noOperation,
        d(detach) {
            detach && removeElement(btnElement);
            isListenerAdded = !1;
            l();
        }
    }
}

function createStartBtn(state) {
    let btnElement, isListenerAdded, l;
    return {
        c() {
            btnElement = createElement("button");
            btnElement.textContent = "Start"
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, btnElement, anchor);
            isListenerAdded || (l = addEventListenerWithCleanup(btnElement, "click", state[9]), isListenerAdded = !0)
        },
        p: noOperation,
        d(detach) {
            detach && removeElement(btnElement);
            isListenerAdded = !1;
            l();
        }
    }
}

function createExportStatusComponent(state) {
    let fieldsetElement, selectElement, l, spaceNode, d, u, a = Object.values(state[8]),
        optionComponents = [];
    for (let index = 0; index < a.length; index += 1) optionComponents[index] = createOptionComponent(updateStateWithAnotherValue(state, a, index));

    function _(h, p) {
        if (h[0] === ExportStatus.Idle) return createStartBtn;
        if (h[0] === ExportStatus.Working) return createStopBtn
    }
    let c = _(state),
        g = c && c(state);
    return {
        c() {
            fieldsetElement = createElement("fieldset");
            selectElement = createElement("select");
            for (let index = 0; index < optionComponents.length; index += 1) optionComponents[index].c();
            spaceNode = createSpaceTextNode();
            g && g.c();
            setAttribute(selectElement, "class", "capitalize");
            selectElement.disabled = l = state[0] !== ExportStatus.Idlel
            state[1] === void 0 && addBeforeUpdateCallback(() => state[13].call(selectElement));
            setAttribute(fieldsetElement, "class", "space-x-1")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, fieldsetElement, anchor);
            appendChild(fieldsetElement, selectElement);
            for (let index = 0; index < optionComponents.length; index += 1) optionComponents[index].m(selectElement, null);
            selectOptionByValue(selectElement, state[1]);
            appendChild(fieldsetElement, spaceNode);
            g && g.m(fieldsetElement, null);
            d || (u = addEventListenerWithCleanup(selectElement, "change", state[13]), d = !0)
        },
        p(newState, dirtyFlags) {
            if (dirtyFlags & 256) {
                a = Object.values(newState[8]);
                let x;
                for (x = 0; x < a.length; x += 1) {
                    const y = updateStateWithAnotherValue(newState, a, x);
                    optionComponents[x] ? optionComponents[x].p(y, dirtyFlags) : (optionComponents[x] = createOptionComponent(y), optionComponents[x].c(), optionComponents[x].m(selectElement, null))
                }
                for (; x < optionComponents.length; x += 1) optionComponents[x].d(1);
                optionComponents.length = a.length
            }
            dirtyFlags & 1 && l !== (l = newState[0] !== ExportStatus.Idle) && (selectElement.disabled = l);
            dirtyFlags & 258 && selectOptionByValue(selectElement, newState[1]);
            c === (c = _(newState)) && g ? g.p(newState, dirtyFlags) : (g && g.d(1), g = c && c(newState), g && (g.c(), g.m(fieldsetElement, null)))
        },
        d(detach) {
            detach && removeElement(fieldsetElement);
            callDestroyMethods(optionComponents, detach);
            g && g.d();
            d = !1;
            u()
        }
    }
}

function createApplicationStatusComponent() {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode(`will export all messages. Already exported messages will be overwritten. Depending on the number of messages, this can take a long time.`)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function createStopWhenOlderThanTimeMessage() {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode(`will stop when it finds messages older than this time period. Already exported messages will be overwritten.`)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function createStopAtLastMessageExported() {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode(`will stop when it finds the last message you exported. This is the default and recommended option.`)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function CreateExportMessagesComponent(props) {
    let divElement, pElement, spaceNode, pElement2, codeElement, txtNode, spaceNode2;

    function determineMessageComponent(props) {
        if (props[1] === props[8].UntilLast) return createStopAtLastMessageExported;
        if (props[1] === props[8].Day || props[1] === props[8].Week || props[1] === props[8].Month) return createStopWhenOlderThanTimeMessage;
        if (props[1] === props[8].All) return createApplicationStatusComponent
    }
    let messageComponent = determineMessageComponent(props),
        instance = messageComponent && messageComponent(props);
    return {
        c() {
            divElement = createElement("div");
            pElement = createElement("p");
            pElement.textContent = "Export messages in the choosen time period:";
            spaceNode = createSpaceTextNode();
            pElement2 = createElement("p");
            codeElement = createElement("code");
            txtNode = createTextNode(props[1]);
            spaceNode2 = createSpaceTextNode();
            instance && instance.c();
            setAttribute(codeElement, "class", "capitalize");
            setAttribute(divElement, "class", "space-y-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, pElement);
            appendChild(divElement, spaceNode);
            appendChild(divElement, pElement2);
            appendChild(pElement2, codeElement);
            appendChild(codeElement, txtNode);
            appendChild(pElement2, spaceNode2);
            instance && instance.m(pElement2, null)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 2 && updateWholeTextNode(txtNode, newState[1]), messageComponent !== (messageComponent = determineMessageComponent(newState)) && (instance && instance.d(1), instance = messageComponent && messageComponent(newState), instance && (instance.c(), instance.m(pElement2, null)))
        },
        d(detach) {
            detach && removeElement(divElement), instance && instance.d()
        }
    }
}

function CreateMessageSummary(props) {
    let divElement, txtNode, txtNode2, s = (props[4].message ?? "…") + "",
        txtNode3;
    return {
        c() {
            divElement = createElement("div");
            txtNode = createTextNode(props[2]);
            txtNode2 = createTextNode(" messages ");
            txtNode3 = createTextNode(s)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, txtNode);
            appendChild(divElement, txtNode2);
            appendChild(divElement, txtNode3)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 4 && updateWholeTextNode(txtNode, newState[2]), dirtyFlags & 16 && s !== (s = (newState[4].message ?? "…") + "") && updateWholeTextNode(txtNode3, s)
        },
        d(detach) {
            detach && removeElement(divElement)
        }
    }
}

function Y1MessageComponent(props) {
    let emptyTextNode, msgSummary = props[2] !== void 0 && CreateMessageSummary(props);
    return {
        c() {
            msgSummary && msgSummary.c();
            emptyTextNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            msgSummary && msgSummary.m(parentElement, anchor);
            insertBefore(parentElement, emptyTextNode, anchor)
        },
        p(newState, dirtyFlags) {
            newState[2] !== void 0 ? msgSummary ? msgSummary.p(newState, dirtyFlags) : (msgSummary = CreateMessageSummary(newState), msgSummary.c(), msgSummary.m(emptyTextNode.parentNode, emptyTextNode)) : msgSummary && (msgSummary.d(1), msgSummary = null)
        },
        d(detach) {
            msgSummary && msgSummary.d(detach);
            detach && removeElement(emptyTextNode)
        }
    }
}

function createOptionsElement(props) {
    let optionsElement, optionsValue = props[16] + "",
        txtNode;
    return {
        c() {
            optionsElement = createElement("option");
            txtNode = createTextNode(optionsValue);
            optionsElement.__value = props[16];
            optionsElement.value = optionsElement.__value
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, optionsElement, anchor);
            appendChild(optionsElement, txtNode)
        },
        p: noOperation,
        d(detach) {
            detach && removeElement(optionsElement)
        }
    }
}

function createExportFormatSelection(props) {
    let fieldsetElement, selectElement, spaceNode, btnElement, d, u, a, m = Object.values(eeExportFormat),
        options = [];
    for (let index = 0; index < m.length; index += 1) options[index] = createOptionsElement(updateStateWithNewValue(props, m, index));
    return {
        c() {
            fieldsetElement = createElement("fieldset");
            selectElement = createElement("select");
            for (let index2 = 0; index2 < options.length; index2 += 1) options[index2].c();
            spaceNode = createSpaceTextNode();
            btnElement = createElement("button");
            btnElement.textContent = "Download";
            setAttribute(selectElement, "class", "uppercase");
            props[6] === void 0 && addBeforeUpdateCallback(() => props[14].call(selectElement));
            fieldsetElement.disabled = d = props[0] !== ExportStatus.Idle || props[7] === 0, setAttribute(fieldsetElement, "class", "space-x-1")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, fieldsetElement, anchor);
            appendChild(fieldsetElement, selectElement);
            for (let index3 = 0; index3 < options.length; index3 += 1) options[index3].m(selectElement, null);
            selectOptionByValue(selectElement, props[6]);
            appendChild(fieldsetElement, spaceNode);
            appendChild(fieldsetElement, btnElement);
            u || (a = [addEventListenerWithCleanup(selectElement, "change", props[14]), addEventListenerWithCleanup(btnElement, "click", props[11])], u = !0)
        },
        p(newState, dirtyFlags) {
            if (dirtyFlags & 0) {
                m = Object.values(eeExportFormat);
                let h;
                for (h = 0; h < m.length; h += 1) {
                    const p = updateStateWithNewValue(newState, m, h);
                    options[h] ? options[h].p(p, dirtyFlags) : (options[h] = createOptionsElement(p), options[h].c(), options[h].m(selectElement, null))
                }
                for (; h < options.length; h += 1) options[h].d(1);
                options.length = m.length
            }
            dirtyFlags & 64 && selectOptionByValue(selectElement, newState[6]), dirtyFlags & 129 && d !== (d = newState[0] !== ExportStatus.Idle || newState[7] === 0) && (fieldsetElement.disabled = d)
        },
        d(detach) {
            detach && removeElement(fieldsetElement);
            callDestroyMethods(options, detach);
            u = !1;
            executeAll(a)
        }
    }
}

function createCaiLimit() {
    let pElement;
    return {
        c() {
            pElement = createElement("p");
            pElement.innerHTML = `Note that <a href="https://character.ai" target="_blank" rel="noopener noreferrer">Character.ai</a> currently limits the import of example conversations to
                        a maximum length of 3200 characters. You probably want to
                        go through the export and nail it down to your most valuable
                        conversations.`
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, pElement, anchor)
        },
        d(detach) {
            detach && removeElement(pElement)
        }
    }
}

function createLocalStorageMsg(f) {
    let divElement, pElement, spaceNode, s = f[6] === eeExportFormat.CHARACTER_AI && createCaiLimit();
    return {
        c() {
            divElement = createElement("div");
            pElement = createElement("p");
            pElement.innerHTML = `Messages of your previous exports are stored locally on your
                    device. Only you can access them. All messages are available
                    offline. <a href="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" target="_blank" rel="noopener noreferrer">IndexdeDB</a> is used to store the messages on your side.`;
            spaceNode = createSpaceTextNode();
            s && s.c();
            setAttribute(divElement, "class", "space-y-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, pElement);
            appendChild(divElement, spaceNode);
            s && s.m(divElement, null)
        },
        p(newState, dirtyFlags) {
            newState[6] === eeExportFormat.CHARACTER_AI ? s || (s = createCaiLimit(), s.c(), s.m(divElement, null)) : s && (s.d(1), s = null)
        },
        d(detach) {
            detach && removeElement(divElement), s && s.d()
        }
    }
}

function createDateRange(f) {
    let divElement, n = f[3].start.toLocaleDateString() + "",
        txtNode, txtNode2, d = f[3].end.toLocaleDateString() + "",
        txtNode3, txtNode4, m = f[3].duration + "",
        txtNode5, txtNode6;
    return {
        c() {
            divElement = createElement("div");
            txtNode = createTextNode(n);
            txtNode2 = createTextNode(` - `);
            txtNode3 = createTextNode(d);
            txtNode4 = createTextNode(" (");
            txtNode5 = createTextNode(m);
            txtNode6 = createTextNode(")")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, txtNode);
            appendChild(divElement, txtNode2);
            appendChild(divElement, txtNode3);
            appendChild(divElement, txtNode4);
            appendChild(divElement, txtNode5);
            appendChild(divElement, txtNode6)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 8 && n !== (n = newState[3].start.toLocaleDateString() + "") && updateWholeTextNode(txtNode, n), dirtyFlags & 8 && d !== (d = newState[3].end.toLocaleDateString() + "") && updateWholeTextNode(txtNode3, d), dirtyFlags & 8 && m !== (m = newState[3].duration + "") && updateWholeTextNode(txtNode5, m)
        },
        d(detach) {
            detach && removeElement(divElement)
        }
    }
}

function DateRangeComponent(props) {
    let divElement, divElement2, txtNode, txtNode2, spaceNode, hasDateRange = props[3].start && props[3].end && createDateRange(props);
    return {
        c() {
            divElement = createElement("div");
            divElement2 = createElement("div");
            txtNode = createTextNode(props[7]);
            txtNode2 = createTextNode(" messages");
            spaceNode = createSpaceTextNode();
            hasDateRange && hasDateRange.c();
            setAttribute(divElement, "class", "space-y-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, divElement2);
            appendChild(divElement2, txtNode);
            appendChild(divElement2, txtNode2);
            appendChild(divElement, spaceNode);
            hasDateRange && hasDateRange.m(divElement, null)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 128 && updateWholeTextNode(txtNode, newState[7]), newState[3].start && newState[3].end ? hasDateRange ? hasDateRange.p(newState, dirtyFlags) : (hasDateRange = createDateRange(newState), hasDateRange.c(), hasDateRange.m(divElement, null)) : hasDateRange && (hasDateRange.d(1), hasDateRange = null)
        },
        d(detach) {
            detach && removeElement(divElement);
            hasDateRange && hasDateRange.d()
        }
    }
}

function ChatExportComponent(props) {
    let divElement, errComp, spaceNode, newChatExportComponent, spaceNode2, localArchiveComponent, a;
    return errComp = new AlErrorComponent({
        props: {
            error: props[5]
        }
    }), newChatExportComponent = new ExportComponent({
        props: {
            title: "New Chat Export",
            $$slots: {
                body: [Y1MessageComponent],
                caption: [CreateExportMessagesComponent],
                head: [createExportStatusComponent]
            },
            $$scope: {
                ctx: props
            }
        }
    }), localArchiveComponent = new ExportComponent({
        props: {
            title: "Local archive",
            $$slots: {
                body: [DateRangeComponent],
                caption: [createLocalStorageMsg],
                head: [createExportFormatSelection]
            },
            $$scope: {
                ctx: props
            }
        }
    }), {
        c() {
            divElement = createElement("div");
            createFragment(errComp.$$.fragment);
            spaceNode = createSpaceTextNode();
            createFragment(newChatExportComponent.$$.fragment);
            spaceNode2 = createSpaceTextNode();
            createFragment(localArchiveComponent.$$.fragment);
            setAttribute(divElement, "class", "space-y-8")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            mountComponent(errComp, divElement, null);
            appendChild(divElement, spaceNode);
            mountComponent(newChatExportComponent, divElement, null);
            appendChild(divElement, spaceNode2);
            mountComponent(localArchiveComponent, divElement, null);
            a = !0
        },
        p(newState, [dirtyFlags]) {
            const c = {};
            dirtyFlags & 32 && (c.error = newState[5]), errComp.$set(c);
            const g = {};
            dirtyFlags & 4194327 && (g.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), newChatExportComponent.$set(g);
            const h = {};
            dirtyFlags & 4194505 && (h.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), localArchiveComponent.$set(h)
        },
        i(isIntro) {
            a || (invokeInitFunction(errComp.$$.fragment, isIntro), invokeInitFunction(newChatExportComponent.$$.fragment, isIntro), invokeInitFunction(localArchiveComponent.$$.fragment, isIntro), a = !0)
        },
        o(isOutro) {
            handlePromise(errComp.$$.fragment, isOutro), handlePromise(newChatExportComponent.$$.fragment, isOutro), handlePromise(localArchiveComponent.$$.fragment, isOutro), a = !1
        },
        d(detach) {
            detach && removeElement(divElement);
            destroyComponent(errComp);
            destroyComponent(newChatExportComponent);
            destroyComponent(localArchiveComponent)
        }
    }
}


function exportChat(state, i, updateState) {
    var timeRangeOptions = (timeRange => (timeRange.UntilLast = "untilLast", timeRange.Day = "day", timeRange.Week = "week", timeRange.Month = "month", timeRange.All = "all", timeRange))(timeRangeOptions || {});
    let exportStatus = ExportStatus.Idle,
        err = null,
        selectedRange = "untilLast",
        exportFormat, mExportFormat = eeExportFormat.TXT,
        messagesProcessed, msgCount = 0,
        processedMessagesCount, h = {},
        perfMetrics = {
            start: 0,
            end: 0,
            message: ""
        };
    (async () => (countMessages().then(count => {
        updateState(7, msgCount = count)
    }), new URLSearchParams(window.location.search).get("ref") === "menu" && startExport()))();
    async function startExport() {
        updateState(4, perfMetrics.start = performance.now(), perfMetrics);
        updateState(0, exportStatus = ExportStatus.Working);
        updateState(2, processedMessagesCount = 0);
        const {
            error: authError,
            data: authData
        } = await extractAuthData();
        if (updateState(5, err = authError), messagesProcessed = authData, authError) {
            updateState(0, exportStatus = ExportStatus.Idle);
            return
        }
        const lastMsgID = await getLastMessageId(),
            exportWebSocket = new WebSocket("wss://ws.replika.com/v17");
        let requestPayload = {
            event_name: "history",
            token: generateUUID(),
            auth: {
                user_id: messagesProcessed.userId,
                auth_token: messagesProcessed.authToken,
                device_id: messagesProcessed.deviceId
            },
            payload: {
                chat_id: messagesProcessed.chatId,
                limit: 1e3,
                last_message_id: void 0
            }
        };
        exportWebSocket.addEventListener("open", () => {
            exportWebSocket.send(JSON.stringify(requestPayload)), exportWebSocket.addEventListener("message", async ({
                data: Vdata
            }) => {
                try {
                    let reachedCutoff = function() {
                        return !exportFormat || !stresponse.payload.to ? !1 : new Date(stresponse.payload.to).getTime() <= exportFormat.getTime()
                    };
                    updateState(4, perfMetrics.end = performance.now(), perfMetrics);
                    const stresponse = JSON.parse(Vdata.toString());
                    if (stresponse.event_name !== "history") return;
                    if (!stresponse.payload || !stresponse.payload.messages) throw {
                        message: "Unexpected response from Replika",
                        response: stresponse
                    };
                    let vtmessages = stresponse.payload.messages;
                    if (vtmessages.length === 0) {
                        exportWebSocket.close(), updateState(0, exportStatus = ExportStatus.Idle);
                        return
                    }
                    let isLastMessageFound = !1;
                    if (selectedRange === "untilLast") {
                        const lastMsgIndex = vtmessages.findIndex(tt => tt.id === lastMsgID);
                        isLastMessageFound = lastMsgIndex > -1, isLastMessageFound && (vtmessages = vtmessages.slice(lastMsgIndex + 1))
                    }
                    const messageStore = database.transaction("messages", "readwrite").objectStore("messages");
                    vtmessages.forEach(bMSG => {
                        messageStore.add(bMSG)
                    }), updateState(2, processedMessagesCount += vtmessages.length), exportStatus === ExportStatus.Stopping || isLastMessageFound || reachedCutoff() ? (exportWebSocket.close(), updateState(0, exportStatus = ExportStatus.Idle)) : (requestPayload.payload.last_message_id = vtmessages[0].id, exportWebSocket.send(JSON.stringify(requestPayload)))
                } catch (error) {
                    console.warn(error);
                    updateState(5, error = error);
                    exportWebSocket.close();
                    updateState(0, exportStatus = ExportStatus.Idle)
                }
            })
        })
    }
    async function stopExport() {
        updateState(0, exportStatus = ExportStatus.Stopping)
    }
    async function finalizeExport() {
        if (updateState(0, exportStatus = ExportStatus.Working), !messagesProcessed) {
            const {
                error: T,
                data: L
            } = await extractAuthData();
            if (updateState(5, err = T), messagesProcessed = L, T) {
                updateState(0, exportStatus = ExportStatus.Idle);
                return
            }
        }
        await exportMessages(mExportFormat, messagesProcessed), updateState(0, exportStatus = ExportStatus.Idle)
    }

    function updateSelectedRange() {
        selectedRange = getCheckedValue(this), updateState(1, selectedRange), updateState(8, timeRangeOptions)
    }

    function updateExportFormat() {
        mExportFormat = getCheckedValue(this), updateState(6, mExportFormat)
    }
    return state.$$.update = () => {
        state.$$.dirty & 4098 && (selectedRange === "all" ? updateState(12, exportFormat = void 0) : selectedRange === "month" ? (updateState(12, exportFormat = new Date), exportFormat.setMonth(exportFormat.getMonth() - 1)) : selectedRange === "week" ? (updateState(12, exportFormat = new Date), exportFormat.setDate(exportFormat.getDate() - 7)) : selectedRange === "day" && (updateState(12, exportFormat = new Date), exportFormat.setDate(exportFormat.getDate() - 1))), state.$$.dirty & 12 && (async T => {
            updateState(7, msgCount = await countMessages());
            updateState(3, h.start = new Date(L.meta.timestamp), h), updateState(3, h.end = new Date(B.meta.timestamp), h);
            const G = h.end.getTime() - h.start.getTime();
            updateState(3, h.duration = new Intl.RelativeTimeFormat("en", {
                numeric: "auto"
            }).format(Math.round(G / 1e3 / 60 / 60 / 24 / 30), "months"), h)
        })(), state.$$.dirty & 16 && perfMetrics.start && perfMetrics.end && updateState(4, perfMetrics.message = new Intl.RelativeTimeFormat("en", {
            numeric: "auto"
        }).format(Math.round((perfMetrics.end - perfMetrics.start) / 1e3), "seconds"), perfMetrics), state.$$.dirty & 1 && (exportStatus === ExportStatus.Working ? document.body.classList.add("cursor-wait") : document.body.classList.remove("cursor-wait"))
    }, [exportStatus, selectedRange, processedMessagesCount, h, perfMetrics, err, mExportFormat, msgCount, timeRangeOptions, startExport, stopExport, finalizeExport, exportFormat, updateSelectedRange, updateExportFormat]
}

class eg extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, exportChat, ChatExportComponent, isEqual, {})
    }
}

function showNoAudioMessage() {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode(`no audio message found, make sure to export text messages first using the chat export`)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        p: noOperation,
        i: noOperation,
        o: noOperation,
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function createVoiceExportComponent(component) {
    let exportComponentInstance, isMounted;
    return exportComponentInstance = new ExportComponent({
        props: {
            title: "New Voice Message Export",
            $$slots: {
                body: [createChunkSizeComponent],
                caption: [updateVoiceMsgSummary],
                head: [exportHeadSlot]
            },
            $$scope: {
                ctx: component
            }
        }
    }), {
        c() {
            createFragment(exportComponentInstance.$$.fragment)
        },
        m(parentElement, anchor) {
            mountComponent(exportComponentInstance, parentElement, anchor);
            isMounted = !0
        },
        p(newState, dirtyFlags) {
            const updatedProps = {};
            dirtyFlags & 159 && (updatedProps.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), exportComponentInstance.$set(updatedProps)
        },
        i(isIntro) {
            isMounted || (invokeInitFunction(exportComponentInstance.$$.fragment, isIntro), isMounted = !0)
        },
        o(isOutro) {
            handlePromise(exportComponentInstance.$$.fragment, isOutro), isMounted = !1
        },
        d(detach) {
            destroyComponent(exportComponentInstance, detach)
        }
    }
}

function exportHeadSlot(componet) {
    let btnElement, txtNode, isButtonDisabled, clickHandlerCleanup, d;
    return {
        c() {
            btnElement = createElement("button");
            txtNode = createTextNode("Start Export");
            btnElement.disabled = isButtonDisabled = componet[1] !== ExportStatus.Idle
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, btnElement, anchor);
            appendChild(btnElement, txtNode);
            clickHandlerCleanup || (d = addEventListenerWithCleanup(btnElement, "click", componet[5]), clickHandlerCleanup = !0)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 2 && isButtonDisabled !== (isButtonDisabled = newState[1] !== ExportStatus.Idle) && (btnElement.disabled = isButtonDisabled)
        },
        d(detach) {
            detach && removeElement(btnElement);
            clickHandlerCleanup = !1;
            d()
        }
    }
}

function updateVoiceMsgSummary(component) {
    let pElement, voiceMessageCount = component[0].length + "",
        txtNode, txtNode2, spaceNode, pElement2, totalMinutes = Math.round(component[4] / 60) + "",
        txtNode3, txtNode4;
    return {
        c() {
            pElement = createElement("p");
            txtNode = createTextNode(voiceMessageCount);
            txtNode2 = createTextNode(" voice messages");
            spaceNode = createSpaceTextNode();
            pElement2 = createElement("p");
            txtNode3 = createTextNode(totalMinutes);
            txtNode4 = createTextNode(" minutes of audio")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, pElement, anchor);
            appendChild(pElement, txtNode);
            appendChild(pElement, txtNode2);
            insertBefore(parentElement, spaceNode, anchor);
            insertBefore(parentElement, pElement2, anchor);
            appendChild(pElement2, txtNode3);
            appendChild(pElement2, txtNode4)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 1 && voiceMessageCount !== (voiceMessageCount = newState[0].length + "") && updateWholeTextNode(txtNode, voiceMessageCount), dirtyFlags & 16 && totalMinutes !== (totalMinutes = Math.round(newState[4] / 60) + "") && updateWholeTextNode(txtNode3, totalMinutes)
        },
        d(detach) {
            detach && removeElement(pElement);
            detach && removeElement(spaceNode);
            detach && removeElement(pElement2)
        }
    }
}

function createChunkSizeComponent(component) {
    let labelElement, inputElement, spaceNode, divElement, spaceNode2, preElement, txtNode, inputCleanupHandler, _;
    return {
        c() {
            labelElement = createElement("label");
            inputElement = createElement("input");
            spaceNode = createSpaceTextNode();
            divElement = createElement("div");
            divElement.textContent = `chunk size - how many voice messages to download at the same time and zip into one archive`;
            spaceNode2 = createSpaceTextNode();
            preElement = createElement("pre");
            txtNode = createTextNode(component[2]);
            setAttribute(inputElement, "type", "number");
            setAttribute(inputElement, "min", "1");
            setAttribute(divElement, "class", "text-xs mt-1");
            setAttribute(labelElement, "class", "block mb4");
            setAttribute(preElement, "class", "overflow-x-auto")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, labelElement, anchor);
            appendChild(labelElement, inputElement);
            setInputValue(inputElement, component[3]);
            appendChild(labelElement, spaceNode);
            appendChild(labelElement, divElement);
            insertBefore(parentElement, spaceNode2, anchor);
            insertBefore(parentElement, preElement, anchor);
            appendChild(preElement, txtNode);
            inputCleanupHandler || (_ = addEventListenerWithCleanup(inputElement, "input", component[6]), inputCleanupHandler = !0)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 8 && parseInteger(inputElement.value) !== newState[3] && setInputValue(inputElement, newState[3]), dirtyFlags & 4 && updateWholeTextNode(txtNode, newState[2])
        },
        d(detach) {
            detach && removeElement(labelElement);
            detach && removeElement(spaceNode2);
            detach && removeElement(preElement);
            inputCleanupHandler = !1;
            _()
        }
    }
}

function renderVoiceMessageExportComponent(component) {
    let currComponent, selectedComponent, txtNode, isMounted;
    const components = [createVoiceExportComponent, showNoAudioMessage],
        instantiatedComponents = [];

    function selectComponentToRender(state, _) {
        return state[0].length > 0 ? 0 : 1
    }
    return currComponent = selectComponentToRender(component), selectedComponent = instantiatedComponents[currComponent] = components[currComponent](component), {
        c() {
            selectedComponent.c();
            txtNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            instantiatedComponents[currComponent].m(parentElement, anchor);
            insertBefore(parentElement, txtNode, anchor);
            isMounted = !0
        },
        p(newState, [dirtyFlags]) {
            let previousComponent = currComponent;
            currComponent = selectComponentToRender(newState);
            currComponent === previousComponent ? instantiatedComponents[currComponent].p(newState, dirtyFlags) : (startPromiseContext(), handlePromise(instantiatedComponents[previousComponent], 1, 1, () => {
                instantiatedComponents[previousComponent] = null
            }), endPromiseContext(), selectedComponent = instantiatedComponents[currComponent], selectedComponent ? selectedComponent.p(newState, dirtyFlags) : (selectedComponent = instantiatedComponents[currComponent] = components[currComponent](newState), selectedComponent.c()), invokeInitFunction(selectedComponent, 1), selectedComponent.m(txtNode.parentNode, txtNode))
        },
        i() {
            isMounted || (invokeInitFunction(selectedComponent), isMounted = !0)
        },
        o() {
            handlePromise(selectedComponent), isMounted = !1
        },
        d(detach) {
            instantiatedComponents[currComponent].d(detach);
            detach && removeElement(txtNode)
        }
    }
}

function processVoiceMessages(componentInstance, i, notifyUpdate) {
    let exportStatus = ExportStatus.Idle,
        errMsg = "",
        chunkSize = 100,
        voiceMessage = [],
        totalDuration = 0;
    addOnMountHook(async () => {
        const allMessages = await getAllMessages();
        notifyUpdate(0, voiceMessage = allMessages.filter(g => g.content.type === "voice_message"))
    });
    async function exportVoiceMessages() {
        notifyUpdate(1, exportStatus = ExportStatus.Working);
        const {
            data: authData,
            error: authError
        } = await extractAuthData();
        if (authError) {
            notifyUpdate(2, errMsg = JSON.stringify(authError, null, 4)), notifyUpdate(1, exportStatus = ExportStatus.Idle);
            return
        }
        const messageChunks = LodashE1.chunk(voiceMessage, chunkSize);
        for (const chunk of messageChunks) {
            const zipFile = new LodashE2;
            await Promise.all(chunk.map(async (AMessage, S) => {
                const voiceMessageUrl = AMessage.content.voice_message_url,
                    messageType = {
                        Customer: authData.userName,
                        Robot: authData.botName
                    } [AMessage.meta.nature],
                    messageDetails = [S, AMessage.meta.timestamp, messageType, voiceMessageUrl],
                    sanitizedTimestamp = AMessage.meta.timestamp.replaceAll(":", "-").replaceAll(".", "-");
                    try {
                        let response;
                    
                        if (AMessage.meta.nature === "Robot") {
                            response = await fetch(voiceMessageUrl);
                        } else if (AMessage.meta.nature === "Customer") {
                            response = await fetch(`https://my.replika.ai/api/mobile/1.5/voice_messages?voice_message_url=${voiceMessageUrl}`, {
                                method: "GET",
                                headers: createRequestHeaders(authData)
                            });
                        }
                    
                        messageDetails.push(response.status);
                        const audioBlob = await response.blob();
                        zipFile.file(`${sanitizedTimestamp}_${messageType}_${AMessage.id}.mp3`.toLowerCase(), audioBlob);
                    } catch (error) {
                        console.warn(error, AMessage);
                        messageDetails.push(error);
                    }                    
                notifyUpdate(2, errMsg = `${messageDetails.join(" - ")}${errMsg}`)
            }));
            const zipBlob = await zipFile.generateAsync({
                type: "blob"
            });
            LodashE3.saveAs(zipBlob, `replika-export-voice-${generateUUID()}.zip`), notifyUpdate(1, exportStatus = ExportStatus.Idle)
        }
    }

    function updateChunkSize() {
        chunkSize = parseInteger(this.value), notifyUpdate(3, chunkSize)
    }
    return componentInstance.$$.update = () => {
        componentInstance.$$.dirty & 17 && voiceMessage.length > 0 && (notifyUpdate(4, totalDuration = 0), voiceMessage.forEach(c => {
            notifyUpdate(4, totalDuration += c.content.duration)
        }))
    }, [voiceMessage, exportStatus, errMsg, chunkSize, totalDuration, exportVoiceMessages, updateChunkSize]
}
class VoiceMessageExportComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, processVoiceMessages, renderVoiceMessageExportComponent, isEqual, {})
    }
}
class DiaryService {
    constructor(props = {
        "x-auth-token": "",
        "x-user-id": "",
        "x-device-id": "",
        "x-timestamp-hash": ""
    }) {
        defineOrSetProperty(this, "headers", {});
        this.headers = props
    }
    async getDiaryEntries(i, n) {
        return await (await fetch(`https://my.replika.com/api/mobile/1.4/saved_chat_items/previews?t=diary&offset=${i}&limit=${n}`, {
            headers: this.headers
        })).json()
    }
    async getAllDiaryEntries() {
        let offset = 0,
            limit = 100,
            allEntries = [];
        for (;;) {
            const entries = await this.getDiaryEntries(offset, limit);
            if (entries.length === 0) break;
            allEntries = allEntries.concat(entries), offset += limit
        }
        return allEntries
    }
    async getDiaryEntriesDetails(entries) {
        return await (await fetch("https://my.replika.com/api/mobile/1.4/saved_chat_items/actions/get_by_ids", {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify({
                ids: entries.map(entry => entry.id)
            })
        })).json()
    }
    async export () {
        const allEntries = await this.getAllDiaryEntries();
        return await this.getDiaryEntriesDetails(allEntries)
    }
}
async function exportDiaryEntries(diaryEntries, exportFormat) {
    const fileName = generateFileName("diary", exportFormat);

    function extractTextContent(entries) {
        return entries.filter(d => d.type === "text").map(d => d.text).join(`
`)
    }
    switch (exportFormat) {
        case eeExportFormat.TXT: {
            const content = diaryEntries.map(d => [new Date(d.timestamp).toLocaleDateString(), d.name, extractTextContent(d.entries)].join(`

`)).join(`

${"-".repeat(80)}

`);
            downloadContent(content, "text/plain", fileName);
            break
        }
        case eeExportFormat.CSV: {
            const csvContent = convertToCSV(diaryEntries.map(entry => ({
                date: new Date(entry.timestamp).toLocaleDateString(),
                name: entry.name,
                content: extractTextContent(entry.entries)
            })));
            downloadContent(csvContent, "text/csv", fileName);
            break
        }
        case eeExportFormat.JSON: {
            const jsonContent = JSON.stringify(diaryEntries, null, 2);
            downloadContent(jsonContent, "application/json", fileName);
            break
        }
        default:
            return
    }
}

function updateDiaryEntryArray(diaryEntries, updatedEntry, entryIndex) {
    const newEntriesArray = diaryEntries.slice();
    return newEntriesArray[7] = updatedEntry[entryIndex], newEntriesArray
}

function createExportButtonComponent(state) {
    let divElement, btnElement, txtNode, s, cleanupFn, eventListenerCleanup;
    return {
        c() {
            divElement = createElement("div");
            btnElement = createElement("button");
            txtNode = createTextNode("Export");
            btnElement.disabled = s = state[2] !== ExportStatus.Idle;
            setAttribute(divElement, "class", "space-x-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, btnElement);
            appendChild(btnElement, txtNode);
            cleanupFn || (eventListenerCleanup = addEventListenerWithCleanup(btnElement, "click", function() {
                isFunction(state[4]) && state[4].apply(this, arguments)
            }), cleanupFn = !0)
        },
        p(newState, dirtyFlags) {
            state = newState, dirtyFlags & 4 && s !== (s = state[2] !== ExportStatus.Idle) && (btnElement.disabled = s)
        },
        d(detach) {
            detach && removeElement(divElement);
            cleanupFn = !1;
            eventListenerCleanup()
        }
    }
}

function renderExportingMessage(state) {
    let txtNode, txtNode2, txtNode3;
    return {
        c() {
            txtNode = createTextNode("Exporting ");
            txtNode2 = createTextNode(state[1]);
            txtNode3 = createTextNode("...")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor);
            insertBefore(parentElement, txtNode2, anchor);
            insertBefore(parentElement, txtNode3, anchor)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 2 && updateWholeTextNode(txtNode2, newState[1])
        },
        d(detach) {
            detach && removeElement(txtNode);
            detach && removeElement(txtNode2);
            detach && removeElement(txtNode3)
        }
    }
}

function ggExportStatus(state) {
    let emptyTextNode, exportMessageComponent = state[2] === ExportStatus.Working && renderExportingMessage(state);
    return {
        c() {
            exportMessageComponent && exportMessageComponent.c();
            emptyTextNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            exportMessageComponent && exportMessageComponent.m(parentElement, anchor);
            insertBefore(parentElement, emptyTextNode, anchor)
        },
        p(newState, detach) {
            newState[2] === ExportStatus.Working ? exportMessageComponent ? exportMessageComponent.p(newState, detach) : (exportMessageComponent = renderExportingMessage(newState), exportMessageComponent.c(), exportMessageComponent.m(emptyTextNode.parentNode, emptyTextNode)) : exportMessageComponent && (exportMessageComponent.d(1), exportMessageComponent = null)
        },
        d(detach) {
            exportMessageComponent && exportMessageComponent.d(detach);
            detach && removeElement(emptyTextNode)
        }
    }
}

function createOptionElement(state) {
    let optionElement, optionValue = state[7] + "",
        txtNode;
    return {
        c() {
            optionElement = createElement("option");
            txtNode = createTextNode(optionValue);
            optionElement.__value = state[7];
            optionElement.value = optionElement.__value
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, optionElement, anchor);
            appendChild(optionElement, txtNode)
        },
        p: noOperation,
        d(detach) {
            detach && removeElement(optionElement)
        }
    }
}

function createExportOptionsComponent(state) {
    let fieldsetElement, selectElement, txtNode, btnElement, isDisabled, isInitialized, eventListeners, optionElements = Object.values(eeExportFormat).filter(isCharacterAI),
        componentInstances = [];
    for (let index = 0; index < optionElements.length; index += 1) componentInstances[index] = createOptionElement(updateDiaryEntryArray(state, optionElements, index));
    return {
        c() {
            fieldsetElement = createElement("fieldset");
            selectElement = createElement("select");
            for (let index2 = 0; index2 < componentInstances.length; index2 += 1) componentInstances[index2].c();
            txtNode = createSpaceTextNode();
            btnElement = createElement("button");
            btnElement.textContent = "Download";
            setAttribute(selectElement, "class", "uppercase");
            state[0] === void 0 && addBeforeUpdateCallback(() => state[6].call(selectElement));
            fieldsetElement.disabled = isDisabled = state[2] !== ExportStatus.Idle || !state[3];
            setAttribute(fieldsetElement, "class", "space-x-1")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, fieldsetElement, anchor);
            appendChild(fieldsetElement, selectElement);
            for (let index3 = 0; index3 < componentInstances.length; index3 += 1) componentInstances[index3].m(selectElement, null);
            selectOptionByValue(selectElement, state[0]);
            appendChild(fieldsetElement, txtNode);
            appendChild(fieldsetElement, btnElement);
            isInitialized || (eventListeners = [addEventListenerWithCleanup(selectElement, "change", state[6]), addEventListenerWithCleanup(btnElement, "click", function() {
                isFunction(state[5]) && state[5].apply(this, arguments)
            })], isInitialized = !0)
        },
        p(newState, dirtyFlags) {
            if (state = newState, dirtyFlags & 0) {
                optionElements = Object.values(eeExportFormat).filter(isCharacterAI);
                let index;
                for (index = 0; index < optionElements.length; index += 1) {
                    const optionState = updateDiaryEntryArray(state, optionElements, index);
                    componentInstances[index] ? componentInstances[index].p(optionState, dirtyFlags) : (componentInstances[index] = createOptionElement(optionState), componentInstances[index].c(), componentInstances[index].m(selectElement, null))
                }
                for (; index < componentInstances.length; index += 1) componentInstances[index].d(1);
                componentInstances.length = optionElements.length
            }
            dirtyFlags & 1 && selectOptionByValue(selectElement, state[0]), dirtyFlags & 12 && isDisabled !== (isDisabled = state[2] !== ExportStatus.Idle || !state[3]) && (fieldsetElement.disabled = isDisabled)
        },
        d(detach) {
            detach && removeElement(fieldsetElement);
            callDestroyMethods(componentInstances, detach);
            isInitialized = !1;
            executeAll(eventListeners)
        }
    }
}

function createExportComponent(state) {
    let divElement, newExportComponent, spaceNode, downloadExportComponent, isMounted;
    return newExportComponent = new ExportComponent({
        props: {
            title: "New " + state[1] + " Export",
            $$slots: {
                body: [ggExportStatus],
                head: [createExportButtonComponent]
            },
            $$scope: {
                ctx: state
            }
        }
    }), downloadExportComponent = new ExportComponent({
        props: {
            title: "Download " + state[1],
            $$slots: {
                head: [createExportOptionsComponent]
            },
            $$scope: {
                ctx: state
            }
        }
    }), {
        c() {
            divElement = createElement("div");
            createFragment(newExportComponent.$$.fragment);
            spaceNode = createSpaceTextNode();
            createFragment(downloadExportComponent.$$.fragment);
            setAttribute(divElement, "class", "space-y-8")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            mountComponent(newExportComponent, divElement, null);
            appendChild(divElement, spaceNode);
            mountComponent(downloadExportComponent, divElement, null);
            isMounted = !0
        },
        p(newState, [dirtyFlags]) {
            const updatedProps = {};
            dirtyFlags & 2 && (updatedProps.title = "New " + newState[1] + " Export"), dirtyFlags & 1046 && (updatedProps.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), newExportComponent.$set(updatedProps);
            const downloadProps = {};
            dirtyFlags & 2 && (downloadProps.title = "Download " + newState[1]), dirtyFlags & 1069 && (downloadProps.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), downloadExportComponent.$set(downloadProps)
        },
        i(isIntro) {
            isMounted || (invokeInitFunction(newExportComponent.$$.fragment, isIntro), invokeInitFunction(downloadExportComponent.$$.fragment, isIntro), isMounted = !0)
        },
        o(isOutro) {
            handlePromise(newExportComponent.$$.fragment, isOutro);
            handlePromise(downloadExportComponent.$$.fragment, isOutro);
            isMounted = !1
        },
        d(detach) {
            detach && removeElement(divElement);
            destroyComponent(newExportComponent);
            destroyComponent(downloadExportComponent)
        }
    }
}
const isCharacterAI = f => f !== "character.ai";

function handleExportState(f, props, updateState) {
    let {
        name: exportName = ""
    } = props, {
        status: exportStatus
    } = props, {
        hasContent: hasExportContent = !1
    } = props, {
        exportFormat: selectedExportFormat
    } = props, {
        onExport: exportCallback
    } = props, {
        onDownload: downloadCallback
    } = props;

    function _() {
        selectedExportFormat = getCheckedValue(this), updateState(0, selectedExportFormat)
    }
    return f.$$set = changes => {
        "name" in changes && updateState(1, exportName = changes.name), "status" in changes && updateState(2, exportStatus = changes.status), "hasContent" in changes && updateState(3, hasExportContent = changes.hasContent), "exportFormat" in changes && updateState(0, selectedExportFormat = changes.exportFormat), "onExport" in changes && updateState(4, exportCallback = changes.onExport), "onDownload" in changes && updateState(5, downloadCallback = changes.onDownload)
    }, [selectedExportFormat, exportName, exportStatus, hasExportContent, exportCallback, downloadCallback, _]
}
class IlExportComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, handleExportState, createExportComponent, isEqual, {
            name: 1,
            status: 2,
            hasContent: 3,
            exportFormat: 0,
            onExport: 4,
            onDownload: 5
        })
    }
}

function updateSliceAtIndex(f, i, index) {
    const newArray = f.slice();
    return newArray[8] = i[index], newArray
}

function updateSliceAtIndexForExportFormat(f, i, index) {
    const newArray = f.slice();
    return newArray[11] = i[index], newArray
}

function createTextParagraph(state) {
    let pElement, txtConent = state[11].text + "",
        txtNode;
    return {
        c() {
            pElement = createElement("p");
            txtNode = createTextNode(txtConent);
            setAttribute(pElement, "class", "opacity-80")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, pElement, anchor);
            appendChild(pElement, txtNode)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 2 && txtConent !== (txtConent = newState[11].text + "") && updateWholeTextNode(txtNode, txtConent)
        },
        d(detach) {
            detach && removeElement(pElement)
        }
    }
}

function createTextElement(state) {
    let txtElement, textParagraph = state[11].type === "text" && createTextParagraph(state);
    return {
        c() {
            textParagraph && textParagraph.c();
            txtElement = createEmptyTextNode()
        },
        m(parentElment, anchor) {
            textParagraph && textParagraph.m(parentElment, anchor);
            insertBefore(parentElment, txtElement, anchor)
        },
        p(newState, dirtyFlags) {
            newState[11].type === "text" ? textParagraph ? textParagraph.p(newState, dirtyFlags) : (textParagraph = createTextParagraph(newState), textParagraph.c(), textParagraph.m(txtElement.parentNode, txtElement)) : textParagraph && (textParagraph.d(1), textParagraph = null)
        },
        d(detach) {
            textParagraph && textParagraph.d(detach);
            detach && removeElement(txtElement)
        }
    }
}

function createDiaryEntries(state) {
    let divElement, pElement, dateText = new Date(state[8].timestamp).toLocaleDateString() + "",
        txtNode, spaceNode, h2Element, titleTxt = state[8].name + "",
        txtNode2, spaceNode2, spaceNode3, entryList = state[8].entries,
        entryInstances = [];
    for (let index = 0; index < entryList.length; index += 1) entryInstances[index] = createTextElement(updateSliceAtIndexForExportFormat(state, entryList, index));
    return {
        c() {
            divElement = createElement("div");
            pElement = createElement("p");
            txtNode = createTextNode(dateText);
            spaceNode = createSpaceTextNode();
            h2Element = createElement("h2");
            txtNode2 = createTextNode(titleTxt);
            spaceNode2 = createSpaceTextNode();
            for (let index2 = 0; index2 < entryInstances.length; index2 += 1) entryInstances[index2].c();
            spaceNode3 = createSpaceTextNode();
            setAttribute(pElement, "class", "text-center text-xs opacity-80");
            setAttribute(h2Element, "class", "text-xl font-bold");
            setAttribute(divElement, "class", "space-y-2")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, pElement);
            appendChild(pElement, txtNode);
            appendChild(divElement, spaceNode);
            appendChild(divElement, h2Element);
            appendChild(h2Element, txtNode2);
            appendChild(divElement, spaceNode2);
            for (let index3 = 0; index3 < entryInstances.length; index3 += 1) entryInstances[index3].m(divElement, null);
            appendChild(divElement, spaceNode3)
        },
        p(newState, dirtyFlags) {
            if (dirtyFlags & 2 && dateText !== (dateText = new Date(newState[8].timestamp).toLocaleDateString() + "") && updateWholeTextNode(txtNode, dateText), dirtyFlags & 2 && titleTxt !== (titleTxt = newState[8].name + "") && updateWholeTextNode(txtNode2, titleTxt), dirtyFlags & 2) {
                entryList = newState[8].entries;
                let entryIndex;
                for (entryIndex = 0; entryIndex < entryList.length; entryIndex += 1) {
                    const A = updateSliceAtIndexForExportFormat(newState, entryList, entryIndex);
                    entryInstances[entryIndex] ? entryInstances[entryIndex].p(A, dirtyFlags) : (entryInstances[entryIndex] = createTextElement(A), entryInstances[entryIndex].c(), entryInstances[entryIndex].m(divElement, spaceNode3))
                }
                for (; entryIndex < entryInstances.length; entryIndex += 1) entryInstances[entryIndex].d(1);
                entryInstances.length = entryList.length
            }
        },
        d(detach) {
            detach && removeElement(divElement);
            callDestroyMethods(entryInstances, detach)
        }
    }
}

function createDiaryComponent(props) {
    let diaryComponent, n, txtNode, divElement, isMounted;

    function handleExportFormat(c) {
        props[6](c)
    }
    let componentProps = {
        name: "Diary",
        status: props[0],
        onExport: props[4],
        onDownload: props[5],
        hasContent: props[1].length > 0
    };
    props[3] !== void 0 && (componentProps.exportFormat = props[3]), diaryComponent = new IlExportComponent({
        props: componentProps
    }), afterUpdateCallbacks.push(() => bindComponentProp(diaryComponent, "exportFormat", handleExportFormat));
    let entries = props[1],
        entryInstances = [];
    for (let index = 0; index < entries.length; index += 1) entryInstances[index] = createDiaryEntries(updateSliceAtIndex(props, entries, index));
    return {
        c() {
            createFragment(diaryComponent.$$.fragment);
            txtNode = createSpaceTextNode();
            divElement = createElement("div");
            for (let index2 = 0; index2 < entryInstances.length; index2 += 1) entryInstances[index2].c();
            setAttribute(divElement, "class", "my-12 space-y-8")
        },
        m(parentElement, anchor) {
            mountComponent(diaryComponent, parentElement, anchor);
            insertBefore(parentElement, txtNode, anchor);
            insertBefore(parentElement, divElement, anchor);
            for (let index3 = 0; index3 < entryInstances.length; index3 += 1) entryInstances[index3].m(divElement, null);
            props[7](divElement);
            isMounted = !0
        },
        p(newState, [dirtyFlags]) {
            const updates = {};
            if (dirtyFlags & 1 && (updates.status = newState[0]), dirtyFlags & 2 && (updates.hasContent = newState[1].length > 0), !n && dirtyFlags & 8 && (n = !0, updates.exportFormat = newState[3], addCleanupCallback(() => n = !1)), diaryComponent.$set(updates), dirtyFlags & 2) {
                entries = newState[1];
                let entryIndex;
                for (entryIndex = 0; entryIndex < entries.length; entryIndex += 1) {
                    const x = updateSliceAtIndex(newState, entries, entryIndex);
                    entryInstances[entryIndex] ? entryInstances[entryIndex].p(x, dirtyFlags) : (entryInstances[entryIndex] = createDiaryEntries(x), entryInstances[entryIndex].c(), entryInstances[entryIndex].m(divElement, null))
                }
                for (; entryIndex < entryInstances.length; entryIndex += 1) entryInstances[entryIndex].d(1);
                entryInstances.length = entries.length
            }
        },
        i(isIntro) {
            isMounted || (invokeInitFunction(diaryComponent.$$.fragment, isIntro), isMounted = !0)
        },
        o(isOutro) {
            handlePromise(diaryComponent.$$.fragment, isOutro);
            isMounted = !1
        },
        d(detach) {
            destroyComponent(diaryComponent, detach);
            detach && removeElement(txtNode);
            detach && removeElement(divElement);
            callDestroyMethods(entryInstances, detach);
            props[7](null)
        }
    }
}

function handleExport(f, i, exportStatusCallback) {//prev exportStatusCallback was n
    let currentStatus = ExportStatus.Idle,
        exportedEntries = [],
        exportedContent, exportFormat = eeExportFormat.TXT;
    async function fetchDiaryEntries() {
        exportStatusCallback(0, currentStatus = ExportStatus.Working);
        const {
            error: authError,
            data: authData
        } = await extractAuthData();
        if (authError) {
            exportStatusCallback(0, currentStatus = ExportStatus.Idle);
            return
        }
        const diaryService = new DiaryService(createRequestHeaders(authData));
        exportStatusCallback(1, exportedEntries = await diaryService.export()), exportStatusCallback(0, currentStatus = ExportStatus.Idle)
    }

    function downloadDiaryEntries() {
        switch (exportStatusCallback(0, currentStatus = ExportStatus.Working), exportFormat) {
            case eeExportFormat.HTML:
                downloadContent(exportedContent.innerHTML, "text/html", generateFileName("diary", eeExportFormat.HTML));
            default:
                exportDiaryEntries(exportedEntries, exportFormat);
                break
        }
        exportStatusCallback(0, currentStatus = ExportStatus.Idle)
    }

    function setExportFormat(newFormat) {
        exportFormat = newFormat, exportStatusCallback(3, exportFormat)
    }

    function updateExportedContent(isContentReady) {
        afterUpdateCallbacks[isContentReady ? "unshift" : "push"](() => {
            exportedContent = isContentReady, exportStatusCallback(2, exportedContent)
        })
    }
    return [currentStatus, exportedEntries, exportedContent, exportFormat, fetchDiaryEntries, downloadDiaryEntries, setExportFormat, updateExportedContent]
}
class DiaryComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, handleExport, createDiaryComponent, isEqual, {})
    }
}
async function downloadFormattedDiaryEntries(diaryEntries, format) {
    const fileName = generateFileName("memory", format);
    switch (format) {
        case eeExportFormat.TXT: {
            const textContent = diaryEntries.map(s => [new Date(s.creation_timestamp).toLocaleDateString(), s.text].join(`

`)).join(`

${"-".repeat(80)}

`);
            downloadContent(textContent, "text/plain", fileName);
            break
        }
        case eeExportFormat.HTML: {
            const htmlContent = diaryEntries.map(s => `
            <p>
              ${new Date(s.creation_timestamp).toLocaleDateString()}
              <br />
              ${s.text}
            </p>
            `).join("");
            downloadContent(htmlContent, "text/plain", fileName);
            break
        }
        case eeExportFormat.CSV: {
            const csvContent = convertToCSV(diaryEntries.map(entry => ({
                date: new Date(entry.creation_timestamp).toLocaleDateString(),
                content: entry.text
            })));
            downloadContent(csvContent, "text/csv", fileName);
            break
        }
        case eeExportFormat.JSON: {
            const jsonContent = JSON.stringify(diaryEntries, null, 2);
            downloadContent(jsonContent, "application/json", fileName);
            break
        }
        default:
            return
    }
}

function createFactSlice(factArray, factList, index) {
    const newFactArray = factArray.slice();
    return newFactArray[7] = factList[index].creation_timestamp, newFactArray[8] = factList[index].text, newFactArray
}

function createMemoryFactsElement(memoryData) {
    let divElement, pElement, formattedDate = new Date(memoryData[7]).toLocaleDateString() + "",
        txtNode, spaceNode, pElement2, memoryText = memoryData[8] + "",
        txtNode2, spaceNode2;
    return {
        c() {
            divElement = createElement("div");
            pElement = createElement("p");
            txtNode = createTextNode(formattedDate);
            spaceNode = createSpaceTextNode();
            pElement2 = createElement("p");
            txtNode2 = createTextNode(memoryText);
            spaceNode2 = createSpaceTextNode();
            setAttribute(pElement, "class", "text-xs op80");
            setAttribute(pElement2, "class", "");
            setAttribute(divElement, "class", "space-y-2 text-center")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, divElement, anchor);
            appendChild(divElement, pElement);
            appendChild(pElement, txtNode);
            appendChild(divElement, spaceNode);
            appendChild(divElement, pElement2);
            appendChild(pElement2, txtNode2);
            appendChild(divElement, spaceNode2)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 4 && formattedDate !== (formattedDate = new Date(newState[7]).toLocaleDateString() + "") && updateWholeTextNode(txtNode, formattedDate), dirtyFlags & 4 && memoryText !== (memoryText = newState[8] + "") && updateWholeTextNode(txtNode2, memoryText)
        },
        d(detach) {
            detach && removeElement(divElement)
        }
    }
}

function createMemoryExportComponent(memoryState) {
    let exportComponentInstance, n, spaceNode, errorComponentInstance, spaceNode2, divElement, hasInitialized;

    function handleExportFormatChange(h) {
        memoryState[6](h)
    }
    let exportComponentProps = {
        name: "Memory",
        status: memoryState[0],
        onExport: memoryState[4],
        onDownload: memoryState[5],
        hasContent: memoryState[2].length > 0
    };
    memoryState[3] !== void 0 && (exportComponentProps.exportFormat = memoryState[3]), exportComponentInstance = new IlExportComponent({
        props: exportComponentProps
    }), afterUpdateCallbacks.push(() => bindComponentProp(exportComponentInstance, "exportFormat", handleExportFormatChange)), errorComponentInstance = new AlErrorComponent({
        props: {
            error: memoryState[1]
        }
    });
    let memoryFacts = memoryState[2],
        memoryFactsElements = [];
    for (let index = 0; index < memoryFacts.length; index += 1) memoryFactsElements[index] = createMemoryFactsElement(createFactSlice(memoryState, memoryFacts, index));
    return {
        c() {
            createFragment(exportComponentInstance.$$.fragment);
            spaceNode = createSpaceTextNode();
            createFragment(errorComponentInstance.$$.fragment);
            spaceNode2 = createSpaceTextNode();
            divElement = createElement("div");
            for (let index2 = 0; index2 < memoryFactsElements.length; index2 += 1) memoryFactsElements[index2].c();
            setAttribute(divElement, "class", "my-12 space-y-8")
        },
        m(parentElement, anchor) {
            mountComponent(exportComponentInstance, parentElement, anchor);
            insertBefore(parentElement, spaceNode, anchor);
            mountComponent(errorComponentInstance, parentElement, anchor);
            insertBefore(parentElement, spaceNode2, anchor);
            insertBefore(parentElement, divElement, anchor);
            for (let index3 = 0; index3 < memoryFactsElements.length; index3 += 1) memoryFactsElements[index3].m(divElement, null);
            hasInitialized = !0
        },
        p(newState, [dirtyFlags]) {
            const x = {};
            dirtyFlags & 1 && (x.status = newState[0]), dirtyFlags & 4 && (x.hasContent = newState[2].length > 0), !n && dirtyFlags & 8 && (n = !0, x.exportFormat = newState[3], addCleanupCallback(() => n = !1)), exportComponentInstance.$set(x);
            const y = {};
            if (dirtyFlags & 2 && (y.error = newState[1]), errorComponentInstance.$set(y), dirtyFlags & 4) {
                memoryFacts = newState[2];
                let A;
                for (A = 0; A < memoryFacts.length; A += 1) {
                    const S = createFactSlice(newState, memoryFacts, A);
                    memoryFactsElements[A] ? memoryFactsElements[A].p(S, dirtyFlags) : (memoryFactsElements[A] = createMemoryFactsElement(S), memoryFactsElements[A].c(), memoryFactsElements[A].m(divElement, null))
                }
                for (; A < memoryFactsElements.length; A += 1) memoryFactsElements[A].d(1);
                memoryFactsElements.length = memoryFacts.length
            }
        },
        i(isIntro) {
            hasInitialized || (invokeInitFunction(exportComponentInstance.$$.fragment, isIntro), invokeInitFunction(errorComponentInstance.$$.fragment, isIntro), hasInitialized = !0)
        },
        o(isOutro) {
            handlePromise(exportComponentInstance.$$.fragment, isOutro), handlePromise(errorComponentInstance.$$.fragment, isOutro), hasInitialized = !1
        },
        d(detach) {
            destroyComponent(exportComponentInstance, detach);
            detach && removeElement(spaceNode);
            destroyComponent(errorComponentInstance, detach);
            detach && removeElement(spaceNode2);
            detach && removeElement(divElement);
            callDestroyMethods(memoryFactsElements, detach)
        }
    }
}

function MemoryExportController(f, i, setState) {
    let exportStatus = ExportStatus.Idle,
        exportError = null,
        memoryFacts = [],
        exportFormat = eeExportFormat.TXT;
    async function handleMemoryExport() {
        try {
            setState(2, memoryFacts = []), setState(0, exportStatus = ExportStatus.Working);
            const {
                error: authError,
                data: authData
            } = await extractAuthData();
            if (authError) throw authError;
            const memoryResponse = await (await fetch("https://my.replika.ai/api/mobile/1.4/memory", {
                headers: createRequestHeaders(authData)
            })).json();
            if (!Array.isArray(memoryResponse.facts)) throw {
                message: "unexpected response, no facts found",
                json: memoryResponse
            };
            setState(2, memoryFacts = memoryResponse.facts);
            const additionalMemoryResponse = await (await fetch("https://my.replika.ai/api/mobile/1.5/memory/v3/", {
                headers: createRequestHeaders(authData)
            })).json();
            setState(2, memoryFacts = [...memoryFacts, ...additionalMemoryResponse.customer_facts, ...additionalMemoryResponse.robot_facts]), console.log(memoryFacts)
        } catch (error) {
            console.warn(error), setState(1, exportError = error)
        } finally {
            setState(0, exportStatus = ExportStatus.Idle)
        }
    }

    function handleDiaryDownload() {
        setState(0, exportStatus = ExportStatus.Working), downloadFormattedDiaryEntries(memoryFacts, exportFormat), setState(0, exportStatus = ExportStatus.Idle)
    }

    function handleFormatChange(newFormat) {
        exportFormat = newFormat, setState(3, exportFormat)
    }
    return [exportStatus, exportError, memoryFacts, exportFormat, handleMemoryExport, handleDiaryDownload, handleFormatChange]
}
class MemoryExportComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, MemoryExportController, createMemoryExportComponent, isEqual, {})
    }
}

function createNoImagesMessage() {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode(`no images found, make sure to export text messages first using the chat export`)
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        p: noOperation,
        i: noOperation,
        o: noOperation,
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function createImageExportComponent(state) {
    let exportComponentInstance, hasInitialized;
    return exportComponentInstance = new ExportComponent({
        props: {
            title: "New Image Export",
            $$slots: {
                body: [createExportSettingsForm],
                caption: [createImageCountDisplay],
                head: [createStartExportButton]
            },
            $$scope: {
                ctx: state
            }
        }
    }), {
        c() {
            createFragment(exportComponentInstance.$$.fragment)
        },
        m(parentElement, anchor) {
            mountComponent(exportComponentInstance, parentElement, anchor);
            hasInitialized = !0
        },
        p(newState, dirtyFlags) {
            const updatedProps = {};
            dirtyFlags & 1087 && (updatedProps.$$scope = {
                dirty: dirtyFlags,
                ctx: newState
            }), exportComponentInstance.$set(updatedProps)
        },
        i(isIntro) {
            hasInitialized || (invokeInitFunction(exportComponentInstance.$$.fragment, isIntro), hasInitialized = !0)
        },
        o(isOutro) {
            handlePromise(exportComponentInstance.$$.fragment, isOutro), hasInitialized = !1
        },
        d(detach) {
            destroyComponent(exportComponentInstance, detach)
        }
    }
}

function createStartExportButton(state) {
    let btnElement, txtNode, isButtonDisabled, isListenerAttached, d;
    return {
        c() {
            btnElement = createElement("button");
            txtNode = createTextNode("Start Export");
            btnElement.disabled = isButtonDisabled = state[0] !== ExportStatus.Idle || !state[4]
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, btnElement, anchor);
            appendChild(btnElement, txtNode);
            isListenerAttached || (d = addEventListenerWithCleanup(btnElement, "click", state[6]), isListenerAttached = !0)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 17 && isButtonDisabled !== (isButtonDisabled = newState[0] !== ExportStatus.Idle || !newState[4]) && (btnElement.disabled = isButtonDisabled)
        },
        d(detach) {
            detach && removeElement(btnElement);
            isListenerAttached = !1;
            d()
        }
    }
}

function createImageCountDisplay(state) {
    let imageCountText = state[5].length + "",
        txtNode, txtNode2;
    return {
        c() {
            txtNode = createTextNode(imageCountText);
            txtNode2 = createTextNode(" images")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor);
            insertBefore(parentElement, txtNode2, anchor)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 32 && imageCountText !== (imageCountText = newState[5].length + "") && updateWholeTextNode(txtNode, imageCountText)
        },
        d(detach) {
            detach && removeElement(txtNode);
            detach && removeElement(txtNode2)
        }
    }
}

function createExportSettingsForm(state) {
    let labelElement, inputElement, spaceNode, divElement, spaceNode2, labelElement2, inputElement2, spaceNode3, divElement2, spaceNode4, labelElement3, inputElement3, spaceNode5, divElement3, spaceNode6, preElement, txtNode, listenersAttached, eventListeners;
    return {
        c() {
            labelElement = createElement("label");
            inputElement = createElement("input");
            spaceNode = createSpaceTextNode();
            divElement = createElement("div");
            divElement.innerHTML = `i acknowlege that
                    <a href="https://corsproxy.io">corsproxy.io</a>
                    is used in order to make image download from a not official-replika
                    origin work
                    <br/>
                    i am not affilated with them, but i have choosen them because
                    they don&#39;t do any logging`;
            spaceNode2 = createSpaceTextNode();
            labelElement2 = createElement("label");
            inputElement2 = createElement("input");
            spaceNode3 = createSpaceTextNode();
            divElement2 = createElement("div");
            divElement2.textContent = `chunk size - how many messages to download at the same time and zip into one archive`;
            spaceNode4 = createSpaceTextNode();
            labelElement3 = createElement("label");
            inputElement3 = createElement("input");
            spaceNode5 = createSpaceTextNode();
            divElement3 = createElement("div");
            divElement3.textContent = "time in seconds to wait between chunk download";
            spaceNode6 = createSpaceTextNode();
            preElement = createElement("pre");
            txtNode = createTextNode(state[1]);
            setAttribute(inputElement, "type", "checkbox");
            setAttribute(divElement, "class", "text-xs mt-1");
            setAttribute(labelElement, "class", "flex mb4 space-x-4");
            setAttribute(inputElement2, "type", "number");
            setAttribute(inputElement2, "min", "1");
            setAttribute(divElement2, "class", "text-xs mt-1");
            setAttribute(labelElement2, "class", "mb4 flex space-x-4");
            setAttribute(inputElement3, "type", "number");
            setAttribute(inputElement3, "min", "0");
            setAttribute(divElement3, "class", "text-xs mt-1");
            setAttribute(labelElement3, "class", "mb4 flex space-x-4");
            setAttribute(preElement, "class", "overflow-x-auto")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, labelElement, anchor);
            appendChild(labelElement, inputElement);
            inputElement.checked = state[4];
            appendChild(labelElement, spaceNode);
            appendChild(labelElement, divElement);
            insertBefore(parentElement, spaceNode2, anchor);
            insertBefore(parentElement, labelElement2, anchor);
            appendChild(labelElement2, inputElement2);
            setInputValue(inputElement2, state[2]);
            appendChild(labelElement2, spaceNode3);
            appendChild(labelElement2, divElement2);
            insertBefore(parentElement, spaceNode4, anchor);
            insertBefore(parentElement, labelElement3, anchor);
            appendChild(labelElement3, inputElement3);
            setInputValue(inputElement3, state[3]);
            appendChild(labelElement3, spaceNode5);
            appendChild(labelElement3, divElement3);
            insertBefore(parentElement, spaceNode6, anchor);
            insertBefore(parentElement, preElement, anchor);
            appendChild(preElement, txtNode);
            listenersAttached || (eventListeners = [addEventListenerWithCleanup(inputElement, "change", state[7]), addEventListenerWithCleanup(inputElement2, "input", state[8]), addEventListenerWithCleanup(inputElement3, "input", state[9])], listenersAttached = !0)
        },
        p(newState, dirtyFlags) {
            dirtyFlags & 16 && (inputElement.checked = newState[4]), dirtyFlags & 4 && parseInteger(inputElement2.value) !== newState[2] && setInputValue(inputElement2, newState[2]), dirtyFlags & 8 && parseInteger(inputElement3.value) !== newState[3] && setInputValue(inputElement3, newState[3]), dirtyFlags & 2 && updateWholeTextNode(txtNode, newState[1])
        },
        d(detach) {
            detach && removeElement(labelElement);
            detach && removeElement(spaceNode2);
            detach && removeElement(labelElement2);
            detach && removeElement(spaceNode4);
            detach && removeElement(labelElement3);
            detach && removeElement(spaceNode6);
            detach && removeElement(preElement);
            listenersAttached = !1;
            executeAll(eventListeners)
        }
    }
}

function renderComponentByState(f) {
    let currentIndex, componentInstance, emptyTextNode, isMounted;
    const componentConstructors = [createImageExportComponent, createNoImagesMessage],
        componentCache = [];

    function determineComponentIndex(currentState, _) {
        return currentState[5].length > 0 ? 0 : 1
    }
    return currentIndex = determineComponentIndex(f), componentInstance = componentCache[currentIndex] = componentConstructors[currentIndex](f), {
        c() {
            componentInstance.c();
            emptyTextNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            componentCache[currentIndex].m(parentElement, anchor);
            insertBefore(parentElement, emptyTextNode, anchor);
            isMounted = !0
        },
        p(newState, [dirtyFlags]) {
            let previousIndex = currentIndex;
            currentIndex = determineComponentIndex(newState), currentIndex === previousIndex ? componentCache[currentIndex].p(newState, dirtyFlags) : (startPromiseContext(), handlePromise(componentCache[previousIndex], 1, 1, () => {
                componentCache[previousIndex] = null
            }), endPromiseContext(), componentInstance = componentCache[currentIndex], componentInstance ? componentInstance.p(newState, dirtyFlags) : (componentInstance = componentCache[currentIndex] = componentConstructors[currentIndex](newState), componentInstance.c()), invokeInitFunction(componentInstance, 1), componentInstance.m(emptyTextNode.parentNode, emptyTextNode))
        },
        i() {
            isMounted || (invokeInitFunction(componentInstance), isMounted = !0)
        },
        o() {
            handlePromise(componentInstance);
            isMounted = !1
        },
        d(detach) {
            componentCache[currentIndex].d(detach);
            detach && removeElement(emptyTextNode)
        }
    }
}

function exportImagesComponent(f, i, setState) {
    let exportStatus = ExportStatus.Idle,
        errorMessage = "",
        chunkSize = 100,
        delayInSeconds = 1,
        includeMetadata = !1,
        imageMessages = [];
    addOnMountHook(async () => {
        const allMessages = await getAllMessages();
        setState(5, imageMessages = allMessages.filter(x => x.content.type === "images"))
    });
    async function startExport() {
        setState(0, exportStatus = ExportStatus.Working);
        const {
            data: authData,
            error: authError
        } = await extractAuthData();
        if (authError) {
            setState(1, errorMessage = JSON.stringify(authError, null, 4)), setState(0, exportStatus = ExportStatus.Idle);
            return
        }
        const messageChunks = LodashE1.chunk(imageMessages, chunkSize);
        for (const chunk of messageChunks) {
            const zip = new LodashE2;
            await Promise.all(chunk.map(async (T, L) => {
                const imageUrl = T.content.text,
                    participant = {
                        Customer: authData.userName,
                        Robot: authData.botName
                    } [T.meta.nature],
                    logEntry = [L, T.meta.timestamp, participant],
                    formattedTimestamp = T.meta.timestamp.replaceAll(":", "-").replaceAll(".", "-");
                try {
                    const signedUrlResponse = await (await fetch("https://my.replika.ai/api/mobile/1.5/images/signed/actions/get_url", {
                        method: "POST",
                        headers: createRequestHeaders(authData),
                        body: JSON.stringify({
                            image_url: imageUrl
                        })
                    })).json();
                    logEntry.push(signedUrlResponse.image_url);
                    const imageBlob = await (await fetch(`https://corsproxy.io/?${signedUrlResponse.image_url}`)).blob();
                    zip.file(`${formattedTimestamp}_${participant}_${T.id}.jpg`.toLowerCase(), imageBlob)
                } catch (error) {
                    console.warn(error, T), logEntry.push(error)
                }
                setState(1, errorMessage = `${logEntry.join(" - ")}
${errorMessage}`)
            }));
            const zipBlob = await zip.generateAsync({
                type: "blob"
            });
            LodashE3.saveAs(zipBlob, `replika-export-image-${generateUUID()}.zip`), await new Promise(T => setTimeout(T, 1e3 * delayInSeconds))
        }
        setState(0, exportStatus = ExportStatus.Idle)
    }

    function toggleMetadata() {
        includeMetadata = this.checked, setState(4, includeMetadata)
    }

    function updateChunkSize() {
        chunkSize = parseInteger(this.value), setState(2, chunkSize)
    }

    function updateDelay() {
        delayInSeconds = parseInteger(this.value), setState(3, delayInSeconds)
    }
    return [exportStatus, errorMessage, chunkSize, delayInSeconds, includeMetadata, imageMessages, startExport, toggleMetadata, updateChunkSize, updateDelay]
}
class ImageExportComponent extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, exportImagesComponent, renderComponentByState, isEqual, {})
    }
}

function updateListWithComponentName(state, componentList, index) {
    const updatedState = state.slice();
    return updatedState[7] = componentList[index].name, updatedState[8] = componentList[index].component, updatedState
}

function updateListWithComponentNameOnly(state, componentList, index) {
    const updatedState = state.slice();
    return updatedState[7] = componentList[index].name, updatedState
}

function createFragmentForStateUpdate(state) {
    let selectedIndex, fragmentList, componentFragment, isMounted;
    const componentHandlers = [renderComponentA, renderComponentB],
        componentInstances = [];

    function selectComponentToRender(stateValue, componentList) {
        return stateValue[6] === !0 ? 0 : 1
    }
    return selectedIndex = selectComponentToRender(state), fragmentList = componentInstances[selectedIndex] = componentHandlers[selectedIndex](state), {
        c() {
            fragmentList.c();
            componentFragment = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            componentInstances[selectedIndex].m(parentElement, anchor);
            insertBefore(parentElement, componentFragment, anchor);
            isMounted = !0
        },
        p(newState, dirtyFlags) {
            fragmentList.p(newState, dirtyFlags)
        },
        i() {
            isMounted || (invokeInitFunction(fragmentList), isMounted = !0)
        },
        o() {
            handlePromise(fragmentList);
            isMounted = !1
        },
        d(detach) {
            componentInstances[selectedIndex].d(detach);
            detach && removeElement(componentFragment)
        }
    }
}

function renderComponentB(f) {
    let componentInstance, isMounted;
    return componentInstance = new MainLicenseClass({}), {
        c() {
            createFragment(componentInstance.$$.fragment)
        },
        m(parentElement, anchor) {
            mountComponent(componentInstance, parentElement, anchor);
            isMounted = !0
        },
        p: noOperation,
        i(isIntro) {
            isMounted || (invokeInitFunction(componentInstance.$$.fragment, isIntro), isMounted = !0)
        },
        o(isOutro) {
            handlePromise(componentInstance.$$.fragment, isOutro);
            isMounted = !1
        },
        d(detach) {
            destroyComponent(componentInstance, detach)
        }
    }
}

function renderComponentA(state) {
    let navElement, txtNode, aElement, spaceNode, divElement, updateList, newItems = state[2],
        renderedItems = [];
    for (let index = 0; index < newItems.length; index += 1) renderedItems[index] = createDivComponentWithEvents(updateListWithComponentNameOnly(state, newItems, index));
    let components = state[2],
        renderedComponents = [];
    for (let index = 0; index < components.length; index += 1) renderedComponents[index] = createConditionalComponent(updateListWithComponentName(state, components, index));
    const g = h => handlePromise(renderedComponents[h], 1, 1, () => {
        renderedComponents[h] = null
    });
    return {
        c() {
            navElement = createElement("nav");
            for (let index2 = 0; index2 < renderedItems.length; index2 += 1) renderedItems[index2].c();
            txtNode = createSpaceTextNode();
            aElement = createElement("a");
            aElement.textContent = "FAQ";
            spaceNode = createSpaceTextNode();
            divElement = createElement("div");
            for (let index2 = 0; index2 < renderedComponents.length; index2 += 1) renderedComponents[index2].c();
            setAttribute(aElement, "href", "https://index.garden/replika-export/#faq");
            setAttribute(aElement, "target", "__blank");
            setAttribute(navElement, "class", "flex space-x-4 absolute top-10 left-10 font-mono capitalize")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, navElement, anchor);
            for (let index3 = 0; index3 < renderedItems.length; index3 += 1) renderedItems[index3].m(navElement, null);
            appendChild(navElement, txtNode);
            appendChild(navElement, aElement);
            insertBefore(parentElement, spaceNode, anchor);
            insertBefore(parentElement, divElement, anchor);
            for (let index3 = 0; index3 < renderedComponents.length; index3 += 1) renderedComponents[index3].m(divElement, null);
            updateList = !0
        },
        p(newState, dirtyFlags) {
            if (dirtyFlags & 13) {
                newItems = newState[2];
                let index7;
                for (index7 = 0; index7 < newItems.length; index7 += 1) {
                    const y = updateListWithComponentNameOnly(newState, newItems, index7);
                    renderedItems[index7] ? renderedItems[index7].p(y, dirtyFlags) : (renderedItems[index7] = createDivComponentWithEvents(y), renderedItems[index7].c(), renderedItems[index7].m(navElement, txtNode))
                }
                for (; index7 < renderedItems.length; index7 += 1) renderedItems[index7].d(1);
                renderedItems.length = newItems.length
            }
            if (dirtyFlags & 5) {
                components = newState[2];
                let index6;
                for (index6 = 0; index6 < components.length; index6 += 1) {
                    const updatedItem = updateListWithComponentName(newState, components, index6);
                    renderedComponents[index6] ? (renderedComponents[index6].p(updatedItem, dirtyFlags), invokeInitFunction(renderedComponents[index6], 1)) : (renderedComponents[index6] = createConditionalComponent(updatedItem), renderedComponents[index6].c(), invokeInitFunction(renderedComponents[index6], 1), renderedComponents[index6].m(divElement, null))
                }
                for (startPromiseContext(), index6 = components.length; index6 < renderedComponents.length; index6 += 1) g(index6);
                endPromiseContext()
            }
        },
        i() {
            if (!updateList) {
                for (let index4 = 0; index4 < components.length; index4 += 1) invokeInitFunction(renderedComponents[index4]);
                updateList = !0
            }
        },
        o() {
            renderedComponents = renderedComponents.filter(Boolean);
            for (let index5 = 0; index5 < renderedComponents.length; index5 += 1) handlePromise(renderedComponents[index5]);
            updateList = !1
        },
        d(detach) {
            detach && removeElement(navElement);
            callDestroyMethods(renderedItems, detach);
            detach && removeElement(spaceNode);
            detach && removeElement(divElement);
            callDestroyMethods(renderedComponents, detach)
        }
    }
}

function createDivComponentWithEvents(state) {
    let divElement, componentText = state[7] + "",
        txtNode, eventHandlerSet, eventListenersRegistered, eventHandlers;

    function handleClick() {
        return state[4](state[7])
    }

    function handleKeyPress() {
        return state[5](state[7])
    }
    return {
        c() {
            divElement = createElement("div");
            txtNode = createTextNode(componentText);
            setAttribute(divElement, "class", eventHandlerSet = state[0] === state[7] ? "font-bold cursor-not-allowed" : "cursor-pointer")
        },
        m(parentELement, anchor) {
            insertBefore(parentELement, divElement, anchor);
            appendChild(divElement, txtNode);
            eventListenersRegistered || (eventHandlers = [addEventListenerWithCleanup(divElement, "click", handleClick), addEventListenerWithCleanup(divElement, "keypress", handleKeyPress)], eventListenersRegistered = !0)
        },
        p(newState, dirtyFlags) {
            state = newState, dirtyFlags & 1 && eventHandlerSet !== (eventHandlerSet = state[0] === state[7] ? "font-bold cursor-not-allowed" : "cursor-pointer") && setAttribute(divElement, "class", eventHandlerSet)
        },
        d(detach) {
            detach && removeElement(divElement);
            eventListenersRegistered = !1;
            executeAll(eventHandlers)
        }
    }
}

function createDynamicComponent(state) {
    let componentInstance, txtNode, isComponentMounted;
    var componentDefinition = state[8];

    function d(u) {
        return {}
    }
    return componentDefinition && (componentInstance = createInstance(componentDefinition, d())), {
        c() {
            componentInstance && createFragment(componentInstance.$$.fragment);
            txtNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            componentInstance && mountComponent(componentInstance, parentElement, anchor);
            insertBefore(parentElement, txtNode, anchor);
            isComponentMounted = !0
        },
        p(newState, dirtyFlags) {
            if (componentDefinition !== (componentDefinition = newState[8])) {
                if (componentInstance) {
                    startPromiseContext();
                    const previousComponent = componentInstance;
                    handlePromise(previousComponent.$$.fragment, 1, 0, () => {
                        destroyComponent(previousComponent, 1)
                    }), endPromiseContext()
                }
                componentDefinition ? (componentInstance = createInstance(componentDefinition, d()), createFragment(componentInstance.$$.fragment), invokeInitFunction(componentInstance.$$.fragment, 1), mountComponent(componentInstance, txtNode.parentNode, txtNode)) : componentInstance = null
            }
        },
        i(isIntro) {
            isComponentMounted || (componentInstance && invokeInitFunction(componentInstance.$$.fragment, isIntro), isComponentMounted = !0)
        },
        o(isOutro) {
            componentInstance && handlePromise(componentInstance.$$.fragment, isOutro), isComponentMounted = !1
        },
        d(detach) {
            detach && removeElement(txtNode);
            componentInstance && destroyComponent(componentInstance, detach)
        }
    }
}

function createConditionalComponent(state) {
    let txtNode, isComponentMounted, conditionallyRenderedComponent = state[7] === state[0] && createDynamicComponent(state);
    return {
        c() {
            conditionallyRenderedComponent && conditionallyRenderedComponent.c();
            txtNode = createEmptyTextNode()
        },
        m(parentElement, anchor) {
            conditionallyRenderedComponent && conditionallyRenderedComponent.m(parentElement, anchor);
            insertBefore(parentElement, txtNode, anchor);
            isComponentMounted = !0
        },
        p(newState, anchor) {
            newState[7] === newState[0] ? conditionallyRenderedComponent ? (conditionallyRenderedComponent.p(newState, anchor), anchor & 1 && invokeInitFunction(conditionallyRenderedComponent, 1)) : (conditionallyRenderedComponent = createDynamicComponent(newState), conditionallyRenderedComponent.c(), invokeInitFunction(conditionallyRenderedComponent, 1), conditionallyRenderedComponent.m(txtNode.parentNode, txtNode)) : conditionallyRenderedComponent && (startPromiseContext(), handlePromise(conditionallyRenderedComponent, 1, 1, () => {
                conditionallyRenderedComponent = null
            }), endPromiseContext())
        },
        i() {
            isComponentMounted || (invokeInitFunction(conditionallyRenderedComponent), isComponentMounted = !0)
        },
        o() {
            handlePromise(conditionallyRenderedComponent), isComponentMounted = !1
        },
        d(detach) {
            conditionallyRenderedComponent && conditionallyRenderedComponent.d(detach);
            detach && removeElement(txtNode)
        }
    }
}

function createLoadingMessage(f) {
    let txtNode;
    return {
        c() {
            txtNode = createTextNode("Loading ✨")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, txtNode, anchor)
        },
        p: noOperation,
        i: noOperation,
        o: noOperation,
        d(detach) {
            detach && removeElement(txtNode)
        }
    }
}

function createMainComponent(state) {
    let mainElement, divElement, isComponentMounted, asyncComponent = {
        ctx: state,
        current: null,
        token: null,
        hasCatch: !0,
        pending: createLoadingMessage,
        then: createFragmentForStateUpdate,
        value: 6,
        error: 13,
        blocks: [, , , ]
    };
    return handleAsyncValue(state[1], asyncComponent), {
        c() {
            mainElement = createElement("main");
            divElement = createElement("div");
            asyncComponent.block.c();
            setAttribute(divElement, "class", "w-lg text-sm");
            setAttribute(mainElement, "class", "text-white min-h-screen flex justify-center pt-[8rem] svelte-1iiiq66")
        },
        m(parentElement, anchor) {
            insertBefore(parentElement, mainElement, anchor);
            appendChild(mainElement, divElement);
            asyncComponent.block.m(divElement, asyncComponent.anchor = null);
            asyncComponent.mount = () => divElement;
            asyncComponent.anchor = null;
            isComponentMounted = !0
        },
        p(newState, [dirtyFlags]) {
            state = newState, updateComponent(asyncComponent, state, dirtyFlags)
        },
        i() {
            isComponentMounted || (invokeInitFunction(asyncComponent.block), isComponentMounted = !0)
        },
        o() {
            for (let index = 0; index < 3; index += 1) {
                const a = asyncComponent.blocks[index];
                handlePromise(a)
            }
            isComponentMounted = !1
        },
        d(detach) {
            detach && removeElement(mainElement);
            asyncComponent.block.d();
            asyncComponent.token = null;
            asyncComponent = null
        }
    }
}

function initializeExportComponents(f, i, n) {
    const exportOptions = [{
            name: "chat",
            component: eg
        }, {
            name: "voice",
            component: VoiceMessageExportComponent
        }, {
            name: "image",
            component: ImageExportComponent
        }, {
            name: "diary",
            component: DiaryComponent
        }, {
            name: "memory",
            component: MemoryExportComponent
        }];
    let selectedExportType = "chat";

    function updateExportType(newExportType) {
        selectedExportType !== newExportType && n(0, selectedExportType = newExportType)
    }
    return [selectedExportType, true, exportOptions, updateExportType, _ => updateExportType(_), _ => updateExportType(_)]
}
class ExportComponentManager extends ComponentClass {
    constructor(props) {
        super(), initializeComponent(this, props, initializeExportComponents, createMainComponent, isEqual, {})
    }
}
new ExportComponentManager({
    target: document.getElementById("app")
});