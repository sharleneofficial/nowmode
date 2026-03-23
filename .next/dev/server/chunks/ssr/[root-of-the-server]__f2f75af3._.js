module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[next]/internal/font/google/space_mono_88c934c.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_mono_88c934c-module__NWUx2q__className",
  "variable": "space_mono_88c934c-module__NWUx2q__variable",
});
}),
"[next]/internal/font/google/space_mono_88c934c.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_mono_88c934c.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Mono', 'Space Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/demo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_mono_88c934c.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const COLORS = [
    {
        id: "solar",
        bg: "#FFD400",
        text: "#000000",
        label: "SOLAR",
        glow: "rgba(255,212,0,0.55)"
    },
    {
        id: "pulse",
        bg: "#FF2D87",
        text: "#000000",
        label: "PULSE",
        glow: "rgba(255,45,135,0.55)"
    },
    {
        id: "drift",
        bg: "#00E5D4",
        text: "#000000",
        label: "DRIFT",
        glow: "rgba(0,229,212,0.55)"
    },
    {
        id: "void",
        bg: "#B44FFF",
        text: "#ffffff",
        label: "VOID",
        glow: "rgba(180,79,255,0.55)"
    },
    {
        id: "flux",
        bg: "#00FF8C",
        text: "#000000",
        label: "FLUX",
        glow: "rgba(0,255,140,0.55)"
    }
];
function useCurrentTime() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tick = ()=>{
            const now = new Date();
            const h = now.getHours().toString().padStart(2, "0");
            const m = now.getMinutes().toString().padStart(2, "0");
            setTime(`${h}:${m}`);
        };
        tick();
        const id = setInterval(tick, 1000);
        return ()=>clearInterval(id);
    }, []);
    return time;
}
/* ─── Watch screen ─────────────────────────────────────────────────────────── */ function WatchScreen({ showTime, onToggle, color, currentTime }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        style: {
            width: "100%",
            height: "100%",
            background: color.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            userSelect: "none",
            position: "relative",
            overflow: "hidden",
            borderRadius: "inherit",
            boxShadow: `inset 0 0 40px ${color.glow}`,
            transition: "background 0.3s ease, box-shadow 0.3s ease"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
                    pointerEvents: "none",
                    borderRadius: "inherit"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "screen-content",
                style: {
                    fontFamily: "var(--font-space-mono), monospace",
                    fontWeight: 700,
                    color: color.text,
                    fontSize: showTime ? "clamp(1.4rem, 5vw, 1.75rem)" : "clamp(1.6rem, 6vw, 2.1rem)",
                    letterSpacing: showTime ? "0.06em" : "0.18em",
                    lineHeight: 1,
                    zIndex: 1,
                    textShadow: `0 2px 12px ${color.glow}`
                },
                children: showTime ? currentTime : "NOW"
            }, showTime ? "time" : "now", false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            !showTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    bottom: 10,
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "0.45rem",
                    letterSpacing: "0.3em",
                    color: color.text,
                    opacity: 0.45,
                    textTransform: "uppercase"
                },
                children: "TAP"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
/* ─── Watch Mockup ─────────────────────────────────────────────────────────── */ function WatchMockup({ showTime, onToggle, color, currentTime }) {
    const W = 168;
    const H = 200;
    const RADIUS = 42;
    const BEZEL = 8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            display: "inline-block"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    right: -8,
                    top: "28%",
                    width: 8,
                    height: 26,
                    background: "linear-gradient(180deg, #888 0%, #555 50%, #888 100%)",
                    borderRadius: "0 3px 3px 0",
                    boxShadow: "2px 0 5px rgba(0,0,0,0.6)",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    right: -8,
                    top: "62%",
                    width: 8,
                    height: 16,
                    background: "linear-gradient(180deg, #888 0%, #555 50%, #888 100%)",
                    borderRadius: "0 3px 3px 0",
                    boxShadow: "2px 0 5px rgba(0,0,0,0.6)",
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "holographic-case shimmer-sweep",
                style: {
                    width: W,
                    height: H,
                    borderRadius: RADIUS,
                    padding: BEZEL,
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)",
                    position: "relative",
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            borderRadius: RADIUS - BEZEL,
                            background: "#0a0a0a",
                            overflow: "hidden",
                            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.8)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchScreen, {
                            showTime: showTime,
                            onToggle: onToggle,
                            color: color,
                            currentTime: currentTime
                        }, void 0, false, {
                            fileName: "[project]/app/demo/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: BEZEL,
                            left: BEZEL,
                            right: BEZEL,
                            height: "42%",
                            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
                            background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
/* ─── Phone screen ─────────────────────────────────────────────────────────── */ function PhoneScreen({ showTime, onToggle, color, currentTime }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onToggle,
        style: {
            width: "100%",
            height: "100%",
            background: color.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            userSelect: "none",
            position: "relative",
            overflow: "hidden",
            transition: "background 0.3s ease, box-shadow 0.3s ease",
            boxShadow: `inset 0 0 60px ${color.glow}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 5px)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    opacity: 0.5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.5rem",
                            color: color.text,
                            letterSpacing: "0.08em"
                        },
                        children: "NOW MODE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.5rem",
                            color: color.text,
                            letterSpacing: "0.08em"
                        },
                        children: "▮▮▮"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "screen-content",
                style: {
                    fontFamily: "var(--font-space-mono), monospace",
                    fontWeight: 700,
                    color: color.text,
                    fontSize: showTime ? "clamp(2.2rem, 9vw, 3.2rem)" : "clamp(2.8rem, 11vw, 4.2rem)",
                    letterSpacing: showTime ? "0.06em" : "0.22em",
                    lineHeight: 1,
                    zIndex: 1,
                    textShadow: `0 4px 20px ${color.glow}`
                },
                children: showTime ? currentTime : "NOW"
            }, showTime ? "time" : "now", false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            !showTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    bottom: 48,
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "0.55rem",
                    letterSpacing: "0.3em",
                    color: color.text,
                    opacity: 0.4
                },
                children: "TAP TO SEE TIME"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 316,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 12,
                    width: 80,
                    height: 4,
                    borderRadius: 2,
                    background: color.text,
                    opacity: 0.35
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 332,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
/* ─── Phone Mockup ─────────────────────────────────────────────────────────── */ function PhoneMockup({ showTime, onToggle, color, currentTime }) {
    const W = 180;
    const H = 370;
    const RADIUS = 32;
    const BEZEL = 7;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -7,
                    top: 72,
                    width: 6,
                    height: 22,
                    background: "#555",
                    borderRadius: "3px 0 0 3px"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -7,
                    top: 104,
                    width: 6,
                    height: 36,
                    background: "#555",
                    borderRadius: "3px 0 0 3px"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -7,
                    top: 150,
                    width: 6,
                    height: 36,
                    background: "#555",
                    borderRadius: "3px 0 0 3px"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 389,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    right: -7,
                    top: 110,
                    width: 6,
                    height: 52,
                    background: "#555",
                    borderRadius: "0 3px 3px 0"
                }
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: W,
                    height: H,
                    borderRadius: RADIUS,
                    background: "linear-gradient(160deg, #2a2a2a 0%, #111 60%, #1e1e1e 100%)",
                    padding: BEZEL,
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 12px 48px rgba(0,0,0,0.8), 0 3px 12px rgba(0,0,0,0.6)",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            borderRadius: RADIUS - BEZEL,
                            overflow: "hidden",
                            background: "#0a0a0a",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneScreen, {
                                showTime: showTime,
                                onToggle: onToggle,
                                color: color,
                                currentTime: currentTime
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 436,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 14,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 10,
                                    height: 10,
                                    borderRadius: "50%",
                                    background: "#000",
                                    zIndex: 10,
                                    boxShadow: "0 0 0 1.5px #1a1a1a"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 444,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 426,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: BEZEL,
                            left: BEZEL,
                            right: BEZEL,
                            height: "35%",
                            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
                            background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 413,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
function DemoPage() {
    const [watchShowTime, setWatchShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneShowTime, setPhoneShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeColor, setActiveColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const currentTime = useCurrentTime();
    const color = COLORS[activeColor];
    const toggleWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setWatchShowTime((v)=>!v), []);
    const togglePhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setPhoneShowTime((v)=>!v), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable}`,
        style: {
            fontFamily: "var(--font-space-mono), monospace",
            background: "#0a0a0a",
            minHeight: "100vh",
            color: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    padding: "18px 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backdropFilter: "blur(12px)",
                    background: "rgba(10,10,10,0.85)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#FFD400",
                                    letterSpacing: "0.12em"
                                },
                                children: "NOW"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.12em"
                                },
                                children: "MODE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 520,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: 10,
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.28em",
                                    color: "rgba(255,255,255,0.35)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    padding: "2px 7px"
                                },
                                children: "DEMO"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 521,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 516,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            fontSize: "0.6rem",
                            letterSpacing: "0.22em",
                            color: "rgba(255,255,255,0.4)",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.15)",
                            paddingBottom: 1
                        },
                        children: "← BACK TO SITE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 534,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    textAlign: "center",
                    padding: "52px 24px 36px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.6rem",
                            letterSpacing: "0.35em",
                            color: "rgba(255,255,255,0.35)",
                            marginBottom: 14
                        },
                        children: "INTERACTIVE PREVIEW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            margin: 0,
                            lineHeight: 1.1
                        },
                        children: "TAP THE SCREEN."
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 567,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 14,
                            fontSize: "0.75rem",
                            letterSpacing: "0.18em",
                            color: "rgba(255,255,255,0.4)"
                        },
                        children: "CHOOSE YOUR COLOR BELOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                    padding: "28px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    flexWrap: "wrap"
                },
                children: [
                    COLORS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveColor(i),
                            className: `color-dot${activeColor === i ? " active" : ""}`,
                            title: c.label,
                            style: {
                                width: 32,
                                height: 32,
                                borderRadius: "50%",
                                background: c.bg,
                                border: "none",
                                outline: "none",
                                cursor: "pointer",
                                position: "relative"
                            },
                            children: activeColor === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    position: "absolute",
                                    inset: -4,
                                    borderRadius: "50%",
                                    border: `2px solid ${c.bg}`,
                                    opacity: 0.6,
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 620,
                                columnNumber: 15
                            }, this)
                        }, c.id, false, {
                            fileName: "[project]/app/demo/page.tsx",
                            lineNumber: 603,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginLeft: 8,
                            fontSize: "0.6rem",
                            letterSpacing: "0.24em",
                            color: color.bg,
                            transition: "color 0.3s ease"
                        },
                        children: color.label
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 633,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 591,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(40px, 8vw, 100px)",
                    padding: "64px 24px 80px",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 28
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchMockup, {
                                showTime: watchShowTime,
                                onToggle: toggleWatch,
                                color: color,
                                currentTime: currentTime
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.55rem",
                                            letterSpacing: "0.32em",
                                            color: "rgba(255,255,255,0.3)",
                                            marginBottom: 6
                                        },
                                        children: "WATCH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 32,
                                            height: 2,
                                            background: color.bg,
                                            margin: "0 auto",
                                            transition: "background 0.3s ease"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 683,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 672,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 120,
                            background: "rgba(255,255,255,0.08)",
                            display: "block"
                        },
                        className: "hidden sm:block"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 696,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 28
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                showTime: phoneShowTime,
                                onToggle: togglePhone,
                                color: color,
                                currentTime: currentTime
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 715,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: "0.55rem",
                                            letterSpacing: "0.32em",
                                            color: "rgba(255,255,255,0.3)",
                                            marginBottom: 6
                                        },
                                        children: "MOBILE"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 722,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 32,
                                            height: 2,
                                            background: color.bg,
                                            margin: "0 auto",
                                            transition: "background 0.3s ease"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 732,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 721,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 647,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    padding: "28px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 40,
                    flexWrap: "wrap"
                },
                children: [
                    [
                        "TAP",
                        "Toggle time / now"
                    ],
                    [
                        "COLOR",
                        "Pick a screen color"
                    ],
                    [
                        "LIVE",
                        "Clock updates every second"
                    ]
                ].map(([label, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.3em",
                                    color: color.bg,
                                    marginBottom: 4,
                                    transition: "color 0.3s ease"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 763,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.6rem",
                                    color: "rgba(255,255,255,0.3)",
                                    letterSpacing: "0.12em"
                                },
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 774,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 762,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 746,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    padding: "20px 32px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.5rem",
                            letterSpacing: "0.22em",
                            color: "rgba(255,255,255,0.2)"
                        },
                        children: "NOW MODE — TIME BY CHOICE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 799,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.5rem",
                            letterSpacing: "0.22em",
                            color: "rgba(255,255,255,0.15)"
                        },
                        children: "© 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 802,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 788,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 491,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2f75af3._.js.map