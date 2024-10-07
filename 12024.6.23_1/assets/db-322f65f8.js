var F = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    m = {},
    z = {
        get exports() {
            return m
        },
        set exports(o) {
            m = o
        }
    };
(function (o, f) {
    (function (c, u) {
        u(o)
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F, function (c) {
        if (typeof browser > "u" || Object.getPrototypeOf(browser) !== Object.prototype) {
            const u = "The message port closed before a response was received.",
                p = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
                x = y => {
                    const P = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (Object.keys(P).length === 0)
                        throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class M extends WeakMap {
                        constructor(r, n = void 0) {
                            super(n),
                                this.createItem = r
                        }
                        get(r) {
                            return this.has(r) || this.set(r, this.createItem(r)),
                                super.get(r)
                        }
                    }
                    const v = s => s && typeof s == "object" && typeof s.then == "function",
                        O = (s, r) => (...n) => {
                            y.runtime.lastError ? s.reject(y.runtime.lastError) : r.singleCallbackArg || n.length <= 1 && r.singleCallbackArg !== !1 ? s.resolve(n[0]) : s.resolve(n)
                        },
                        k = s => s == 1 ? "argument" : "arguments",
                        R = (s, r) => function (i, ...d) {
                            if (d.length < r.minArgs)
                                throw new Error(`Expected at least ${r.minArgs} ${k(r.minArgs)} for ${s}(), got ${d.length}`);
                            if (d.length > r.maxArgs)
                                throw new Error(`Expected at most ${r.maxArgs} ${k(r.maxArgs)} for ${s}(), got ${d.length}`);
                            return new Promise((h, w) => {
                                if (r.fallbackToNoCallback)
                                    try {
                                        i[s](...d, O({
                                            resolve: h,
                                            reject: w
                                        }, r))
                                    } catch (a) {
                                        console.warn(`${s} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, a),
                                            i[s](...d),
                                            r.fallbackToNoCallback = !1,
                                            r.noCallback = !0,
                                            h()
                                    }
                                else
                                    r.noCallback ? (i[s](...d),
                                        h()) : i[s](...d, O({
                                        resolve: h,
                                        reject: w
                                    }, r))
                            })
                        },
                        T = (s, r, n) => new Proxy(r, {
                            apply(i, d, h) {
                                return n.call(d, s, ...h)
                            }
                        });
                    let j = Function.call.bind(Object.prototype.hasOwnProperty);
                    const $ = (s, r = {}, n = {}) => {
                            let i = Object.create(null),
                                d = {
                                    has(w, a) {
                                        return a in s || a in i
                                    },
                                    get(w, a, b) {
                                        if (a in i)
                                            return i[a];
                                        if (!(a in s))
                                            return;
                                        let A = s[a];
                                        if (typeof A == "function")
                                            if (typeof r[a] == "function")
                                                A = T(s, s[a], r[a]);
                                            else if (j(n, a)) {
                                            let C = R(a, n[a]);
                                            A = T(s, s[a], C)
                                        } else
                                            A = A.bind(s);
                                        else if (typeof A == "object" && A !== null && (j(r, a) || j(n, a)))
                                            A = $(A, r[a], n[a]);
                                        else if (j(n, "*"))
                                            A = $(A, r[a], n["*"]);
                                        else
                                            return Object.defineProperty(i, a, {
                                                    configurable: !0,
                                                    enumerable: !0,
                                                    get() {
                                                        return s[a]
                                                    },
                                                    set(C) {
                                                        s[a] = C
                                                    }
                                                }),
                                                A;
                                        return i[a] = A,
                                            A
                                    },
                                    set(w, a, b, A) {
                                        return a in i ? i[a] = b : s[a] = b,
                                            !0
                                    },
                                    defineProperty(w, a, b) {
                                        return Reflect.defineProperty(i, a, b)
                                    },
                                    deleteProperty(w, a) {
                                        return Reflect.deleteProperty(i, a)
                                    }
                                },
                                h = Object.create(s);
                            return new Proxy(h, d)
                        },
                        I = s => ({
                            addListener(r, n, ...i) {
                                r.addListener(s.get(n), ...i)
                            },
                            hasListener(r, n) {
                                return r.hasListener(s.get(n))
                            },
                            removeListener(r, n) {
                                r.removeListener(s.get(n))
                            }
                        });
                    let S = !1;
                    const L = new M(s => typeof s != "function" ? s : function (n, i, d) {
                            let h = !1,
                                w, a = new Promise(N => {
                                    w = function (_) {
                                        S || (console.warn(p, new Error().stack),
                                                S = !0),
                                            h = !0,
                                            N(_)
                                    }
                                }),
                                b;
                            try {
                                b = s(n, i, w)
                            } catch (N) {
                                b = Promise.reject(N)
                            }
                            const A = b !== !0 && v(b);
                            if (b !== !0 && !A && !h)
                                return !1;
                            const C = N => {
                                N.then(_ => {
                                    d(_)
                                }, _ => {
                                    let B;
                                    _ && (_ instanceof Error || typeof _.message == "string") ? B = _.message : B = "An unexpected error occurred",
                                        d({
                                            __mozWebExtensionPolyfillReject__: !0,
                                            message: B
                                        })
                                }).catch(_ => {
                                    console.error("Failed to send onMessage rejected reply", _)
                                })
                            };
                            return C(A ? b : a),
                                !0
                        }),
                        e = ({
                            reject: s,
                            resolve: r
                        }, n) => {
                            y.runtime.lastError ? y.runtime.lastError.message === u ? r() : s(y.runtime.lastError) : n && n.__mozWebExtensionPolyfillReject__ ? s(new Error(n.message)) : r(n)
                        },
                        t = (s, r, n, ...i) => {
                            if (i.length < r.minArgs)
                                throw new Error(`Expected at least ${r.minArgs} ${k(r.minArgs)} for ${s}(), got ${i.length}`);
                            if (i.length > r.maxArgs)
                                throw new Error(`Expected at most ${r.maxArgs} ${k(r.maxArgs)} for ${s}(), got ${i.length}`);
                            return new Promise((d, h) => {
                                const w = e.bind(null, {
                                    resolve: d,
                                    reject: h
                                });
                                i.push(w),
                                    n.sendMessage(...i)
                            })
                        },
                        g = {
                            runtime: {
                                onMessage: I(L),
                                onMessageExternal: I(L),
                                sendMessage: t.bind(null, "sendMessage", {
                                    minArgs: 1,
                                    maxArgs: 3
                                })
                            },
                            tabs: {
                                sendMessage: t.bind(null, "sendMessage", {
                                    minArgs: 2,
                                    maxArgs: 3
                                })
                            }
                        },
                        l = {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        };
                    return P.privacy = {
                            network: {
                                "*": l
                            },
                            services: {
                                "*": l
                            },
                            websites: {
                                "*": l
                            }
                        },
                        $(y, g, P)
                };
            if (typeof chrome != "object" || !chrome || !chrome.runtime || !chrome.runtime.id)
                throw new Error("This script should only be loaded in a browser extension.");
            c.exports = x(chrome)
        } else
            c.exports = browser
    })
})(z);
typeof window < "u" && window.addEventListener("message", o => {
    o.origin === "https://extensionpay.com" && o.source == window && (o.data === "fetch-user" || o.data === "trial-start") && m.runtime.sendMessage(o.data)
}, !1);

function W(o) {
    const f = "https://extensionpay.com",
        c = `${f}/extension/${o}`;

    function u(e) {
        return new Promise(t => setTimeout(t, e))
    }
    async function p(e) {
        try {
            return await m.storage.sync.get(e)
        } catch {
            return await m.storage.local.get(e)
        }
    }
    async function x(e) {
        try {
            return await m.storage.sync.set(e)
        } catch {
            return await m.storage.local.set(e)
        }
    }
    m.management && m.management.getSelf().then(async e => {
            if (!e.permissions.includes("storage")) {
                var t = e.hostPermissions.concat(e.permissions);
                throw `ExtPay Setup Error: please include the "storage" permission in manifest.json["permissions"] or else ExtensionPay won't work correctly.

You can copy and paste this to your manifest.json file to fix this error:

"permissions": [
    ${t.map(g => `"    ${g}"`).join(`,
`)}${t.length > 0 ? "," : ""}
    "storage"
]
`
            }
        }),
        p(["extensionpay_installed_at", "extensionpay_user"]).then(async e => {
            if (e.extensionpay_installed_at)
                return;
            const t = e.extensionpay_user,
                g = t ? t.installedAt : new Date().toISOString();
            await x({
                extensionpay_installed_at: g
            })
        });
    const y = [],
        P = [];
    async function M() {
        var e = {},
            t;
        if (m.management)
            t = await m.management.getSelf();
        else if (m.runtime)
            t = await m.runtime.sendMessage("extpay-extinfo"),
            t || (t = {
                installType: !("update_url" in m.runtime.getManifest()) ? "development" : "normal"
            });
        else
            throw "ExtPay needs to be run in a browser extension context";
        t.installType == "development" && (e.development = !0);
        const g = await fetch(`${c}/api/new-key`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!g.ok)
            throw g.status,
                `${f}/home`;
        const l = await g.json();
        return await x({
                extensionpay_api_key: l
            }),
            l
    }
    async function v() {
        const e = await p(["extensionpay_api_key"]);
        return e.extensionpay_api_key ? e.extensionpay_api_key : null
    }
    const O = /^\d\d\d\d-\d\d-\d\dT/;
    async function k() {
        var e = await p(["extensionpay_user", "extensionpay_installed_at"]);
        const t = await v();
        if (!t)
            return {
                paid: !1,
                paidAt: null,
                installedAt: e.extensionpay_installed_at ? new Date(e.extensionpay_installed_at) : new Date,
                trialStartedAt: null
            };
        const g = await fetch(`${c}/api/user?api_key=${t}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });
        if (!g.ok)
            throw "ExtPay error while fetching user: " + await g.text();
        const l = await g.json(),
            s = {};
        for (var [r, n] of Object.entries(l))
            n && n.match && n.match(O) && (n = new Date(n)),
            s[r] = n;
        return s.installedAt = new Date(e.extensionpay_installed_at),
            s.paidAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.paidAt) && y.forEach(i => i(s)),
            s.trialStartedAt && (!e.extensionpay_user || e.extensionpay_user && !e.extensionpay_user.trialStartedAt) && P.forEach(i => i(s)),
            await x({
                extensionpay_user: l
            }),
            s
    }
    async function R() {
        var e = await v();
        return e || (e = await M()),
            `${c}?api_key=${e}`
    }
    async function T(e, t, g) {
        if (m.windows && m.windows.create) {
            const l = await m.windows.getCurrent(),
                s = Math.round((l.width - t) * .5 + l.left),
                r = Math.round((l.height - g) * .5 + l.top);
            try {
                m.windows.create({
                    url: e,
                    type: "popup",
                    focused: !0,
                    width: t,
                    height: g,
                    left: s,
                    top: r
                })
            } catch {
                m.windows.create({
                    url: e,
                    type: "popup",
                    width: t,
                    height: g,
                    left: s,
                    top: r
                })
            }
        } else
            window.open(e, null, `toolbar=no,location=no,directories=no,status=no,menubar=no,width=${t},height=${g},left=450`)
    }
    async function j() {
        const e = await R();
        T(e, 500, 800)
    }
    async function $(e) {
        var t = await v();
        t || (t = await M());
        var g = `${c}/trial?api_key=${t}`;
        e && (g += `&period=${e}`),
            T(g, 500, 650)
    }
    async function I() {
        var e = await v();
        e || (e = await M());
        const t = `${c}/reactivate?api_key=${e}`;
        T(t, 500, 800)
    }
    var S = !1;
    async function L() {
        if (!S) {
            S = !0;
            for (var e = await k(), t = 0; t < 2 * 60; ++t) {
                if (e.paidAt)
                    return S = !1,
                        e;
                await u(1e3),
                    e = await k()
            }
            S = !1
        }
    }
    return {
        getUser: function () {
            return k()
        },
        onPaid: {
            addListener: function (e) {
                const t = `"content_scripts": [
                {
            "matches": ["${f}/*"],
            "js": ["ExtPay.js"],
            "run_at": "document_start"
        }]`,
                    g = m.runtime.getManifest();
                if (!g.content_scripts)
                    throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
                const l = g.content_scripts.find(s => s.matches.includes(f.replace(":3000", "") + "/*"));
                if (l) {
                    if (!l.run_at || l.run_at !== "document_start")
                        throw `ExtPay setup error: To use the onPaid callback handler, please make sure the ExtPay content script in your manifest.json runs at document start. You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`
                } else
                    throw `ExtPay setup error: To use the onPaid callback handler, please include ExtPay as a content script in your manifest.json matching "${f}/*". You can copy the example below into your manifest.json or check the docs: https://github.com/Glench/ExtPay#2-configure-your-manifestjson

        ${t}`;
                y.push(e)
            }
        },
        openPaymentPage: j,
        openTrialPage: $,
        openLoginPage: I,
        onTrialStarted: {
            addListener: function (e) {
                P.push(e)
            }
        },
        startBackground: function () {
            m.runtime.onMessage.addListener(function (e, t, g) {
                if (console.log("service worker got message! Here it is:", e),
                    e == "fetch-user")
                    L();
                else if (e == "trial-start")
                    k();
                else if (e == "extpay-extinfo" && m.management)
                    return m.management.getSelf()
            })
        }
    }
}
const U = W("replika-export");
async function G() {

    return true;
}
let E;
const q = "replika-export",
    D = indexedDB.open(q, 1);
D.onerror = o => {};
D.addEventListener("success", o => {
    E = o.target.result
});
D.onupgradeneeded = o => {
    o.target.result.createObjectStore("messages", {
        keyPath: "id"
    })
};
async function J() {
    if (!E)
        return;
    const c = E.transaction(["messages"], "readonly").objectStore("messages").getAllKeys();
    return new Promise(u => {
        c.onsuccess = p => {
            const x = p.target.result,
                y = x[x.length - 1];
            u(y)
        }
    })
}
async function Y() {
    if (!E)
        return 0;
    const c = E.transaction(["messages"], "readonly").objectStore("messages").count();
    return new Promise(u => {
        c.onsuccess = p => {
            const x = p.target.result;
            u(x)
        }
    })
}
async function Z() {
    if (!E)
        return;
    const c = E.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(u => {
        c.onsuccess = p => {
            const x = p.target.result,
                y = x[x.length - 1],
                P = x[0];
            u({
                lastMessage: y,
                firstMessage: P
            })
        }
    })
}
async function K() {
    if (!E)
        return;
    const c = E.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(u => {
        c.onsuccess = p => {
            const x = p.target.result;
            u(x)
        }
    })
}
export {
    Y as a, J as b, Z as c, E as d, U as e, F as f, K as g, G as h
};