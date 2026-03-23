module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/app/components/DeviceMockups.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "ColorPicker",
    ()=>ColorPicker,
    "FormatToggle",
    ()=>FormatToggle,
    "PhoneMockup",
    ()=>PhoneMockup,
    "WatchMockup",
    ()=>WatchMockup,
    "silverBg",
    ()=>silverBg,
    "useCurrentTime",
    ()=>useCurrentTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const COLORS = [
    {
        id: "solar",
        bg: "#FFD400",
        text: "#000000",
        label: "SOLAR",
        glow: "rgba(255,212,0,0.6)"
    },
    {
        id: "pulse",
        bg: "#FF2D87",
        text: "#000000",
        label: "PULSE",
        glow: "rgba(255,45,135,0.6)"
    },
    {
        id: "drift",
        bg: "#00E5D4",
        text: "#000000",
        label: "DRIFT",
        glow: "rgba(0,229,212,0.6)"
    },
    {
        id: "void",
        bg: "#B44FFF",
        text: "#ffffff",
        label: "VOID",
        glow: "rgba(180,79,255,0.6)"
    },
    {
        id: "flux",
        bg: "#00FF8C",
        text: "#000000",
        label: "FLUX",
        glow: "rgba(0,255,140,0.6)"
    }
];
function useCurrentTime(use12h) {
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        display: "",
        period: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tick = ()=>{
            const now = new Date();
            const mins = now.getMinutes().toString().padStart(2, "0");
            if (use12h) {
                const raw = now.getHours();
                const period = raw >= 12 ? "PM" : "AM";
                const h = raw % 12 || 12;
                setState({
                    display: `${h}:${mins}`,
                    period
                });
            } else {
                const h = now.getHours().toString().padStart(2, "0");
                setState({
                    display: `${h}:${mins}`,
                    period: ""
                });
            }
        };
        tick();
        const id = setInterval(tick, 1000);
        return ()=>clearInterval(id);
    }, [
        use12h
    ]);
    return state;
}
function silverBg(dark = false) {
    const lo = dark ? "#909090" : "#c4c4c4";
    const hi = dark ? "#d0d0d0" : "#f4f4f4";
    const md = dark ? "#9e9e9e" : "#bcbcbc";
    return [
        `linear-gradient(75deg,`,
        `  rgba(255,70,60,0.22) 0%,  rgba(255,195,25,0.18) 18%,`,
        `  rgba(35,210,115,0.16) 36%, rgba(25,115,255,0.22) 54%,`,
        `  rgba(185,45,255,0.18) 72%, rgba(255,70,60,0.22) 90%)`,
        `,linear-gradient(155deg,`,
        `  ${lo} 0%, ${hi} 14%, ${md} 30%, ${hi} 47%,`,
        `  ${md} 63%, ${hi} 79%, ${lo} 100%)`
    ].join(" ");
}
/* ─── Scanlines ──────────────────────────────────────────────────────────────── */ function Scanlines({ opacity = 0.04 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage: `repeating-linear-gradient(0deg,
          transparent, transparent 3px,
          rgba(0,0,0,${opacity}) 3px, rgba(0,0,0,${opacity}) 4px)`,
            borderRadius: "inherit",
            zIndex: 2
        }
    }, void 0, false, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH SCREEN CONTENT
   ═══════════════════════════════════════════════════════════════════════════════ */ function WatchScreenContent({ showTime, timeDisplay, timePeriod, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            background: color.bg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            borderRadius: "inherit",
            boxShadow: `inset 0 0 60px ${color.glow}`,
            transition: "background 0.35s ease, box-shadow 0.35s ease",
            cursor: "pointer",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Scanlines, {}, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            showTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    zIndex: 3,
                    width: "100%",
                    textAlign: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "3.4rem",
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            textShadow: `0 2px 20px ${color.glow}`,
                            display: "block"
                        },
                        children: timeDisplay
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 400,
                            color: color.text,
                            fontSize: "0.9rem",
                            letterSpacing: "0.22em",
                            opacity: 0.6
                        },
                        children: timePeriod
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    zIndex: 3,
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "5.2rem",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            display: "block",
                            textAlign: "center",
                            textShadow: `0 3px 24px ${color.glow}`
                        },
                        children: "NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontSize: "0.42rem",
                            letterSpacing: "0.32em",
                            color: color.text,
                            opacity: 0.38
                        },
                        children: "TAP"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                ]
            }, "now", true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 118,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
function WatchMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    const W = 210, H = 256, RADIUS = 52, BEZEL = 12;
    const SW = 152, SH_TOP = 80, SH_BOT = 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            userSelect: "none"
        },
        onClick: onToggle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: SW,
                    height: SH_TOP,
                    background: "linear-gradient(180deg, #1a1a1a 0%, #2e2e2e 100%)",
                    borderRadius: "10px 10px 0 0",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    [
                        0.25,
                        0.5,
                        0.75
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: "14%",
                                right: "14%",
                                top: `${p * 100}%`,
                                height: 1,
                                background: "rgba(255,255,255,0.07)"
                            }
                        }, p, false, {
                            fileName: "[project]/app/components/DeviceMockups.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            bottom: 10,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#000",
                            boxShadow: "0 0 0 1px rgba(255,255,255,0.14)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: -10,
                            top: "28%",
                            width: 10,
                            height: 28,
                            background: "linear-gradient(180deg, #b0b0b0 0%, #d8d8d8 40%, #eee 50%, #d8d8d8 60%, #909090 100%)",
                            borderRadius: "0 4px 4px 0",
                            boxShadow: "2px 0 6px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)"
                        },
                        children: [
                            0.25,
                            0.5,
                            0.75
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: 2,
                                    right: 2,
                                    top: `${p * 100}%`,
                                    height: 1,
                                    background: "rgba(0,0,0,0.2)"
                                }
                            }, p, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: -10,
                            top: "64%",
                            width: 10,
                            height: 18,
                            background: "linear-gradient(180deg, #999 0%, #ccc 50%, #999 100%)",
                            borderRadius: "0 3px 3px 0",
                            boxShadow: "2px 0 4px rgba(0,0,0,0.45)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: W,
                            height: H,
                            borderRadius: RADIUS,
                            padding: BEZEL,
                            background: silverBg(),
                            boxShadow: `
            0 0 0 1px rgba(255,255,255,0.25),
            0 20px 56px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.35),
            inset 0 -1px 0 rgba(0,0,0,0.18)
          `,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.32) 50%, transparent 75%)",
                                    animation: "shimmer-sweep 4s ease-in-out infinite",
                                    borderRadius: RADIUS,
                                    pointerEvents: "none",
                                    zIndex: 5
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: RADIUS,
                                    background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: RADIUS - BEZEL,
                                    overflow: "hidden",
                                    background: "#060606",
                                    boxShadow: "inset 0 2px 12px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.6)",
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchScreenContent, {
                                    showTime: showTime,
                                    timeDisplay: timeDisplay,
                                    timePeriod: timePeriod,
                                    color: color
                                }, void 0, false, {
                                    fileName: "[project]/app/components/DeviceMockups.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: BEZEL,
                                    left: BEZEL,
                                    right: BEZEL,
                                    height: "38%",
                                    borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
                                    pointerEvents: "none",
                                    zIndex: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: SW,
                    height: SH_BOT,
                    background: "linear-gradient(180deg, #2e2e2e 0%, #1a1a1a 100%)",
                    borderRadius: "0 0 16px 16px",
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    [
                        0.3,
                        0.45,
                        0.6
                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: "18%",
                                right: "18%",
                                top: `${p * 100}%`,
                                height: 2,
                                background: "rgba(0,0,0,0.35)",
                                borderRadius: 1
                            }
                        }, p, false, {
                            fileName: "[project]/app/components/DeviceMockups.tsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: "22%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#000",
                            boxShadow: "0 0 0 1px rgba(255,255,255,0.14)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE SCREEN — tap to toggle between NOW and live time
   ═══════════════════════════════════════════════════════════════════════════════ */ function PhoneScreenContent({ showTime, timeDisplay, timePeriod, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%",
            height: "100%",
            background: color.bg,
            position: "relative",
            overflow: "hidden",
            transition: "background 0.35s ease, box-shadow 0.35s ease",
            boxShadow: `inset 0 0 80px ${color.glow}`,
            cursor: "pointer",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Scanlines, {
                opacity: 0.03
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 38,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 20px",
                    zIndex: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontSize: "0.46rem",
                            letterSpacing: "0.1em",
                            color: color.text,
                            opacity: 0.5
                        },
                        children: "NOW MODE"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            gap: 4,
                            alignItems: "center",
                            opacity: 0.5
                        },
                        children: [
                            [
                                3,
                                5,
                                7
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 3,
                                        height: h,
                                        background: color.text,
                                        borderRadius: 1
                                    }
                                }, h, false, {
                                    fileName: "[project]/app/components/DeviceMockups.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: 4,
                                    width: 16,
                                    height: 8,
                                    border: `1.5px solid ${color.text}`,
                                    borderRadius: 2,
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 1.5,
                                        right: 3,
                                        background: color.text,
                                        borderRadius: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/components/DeviceMockups.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            showTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    position: "absolute",
                    top: "28%",
                    left: 0,
                    right: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    zIndex: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "3.8rem",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            textShadow: `0 4px 24px ${color.glow}`
                        },
                        children: timeDisplay
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 340,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 400,
                            color: color.text,
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            opacity: 0.6
                        },
                        children: timePeriod
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 350,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 12,
                            fontFamily: '"Space Mono", monospace',
                            fontSize: "0.5rem",
                            letterSpacing: "0.22em",
                            color: color.text,
                            opacity: 0.4
                        },
                        children: "TAP FOR NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 358,
                        columnNumber: 11
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: '"Space Mono", monospace',
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "4.8rem",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            textShadow: `0 4px 28px ${color.glow}`,
                            display: "block",
                            textAlign: "center"
                        },
                        children: "NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginTop: 16,
                            fontFamily: '"Space Mono", monospace',
                            fontSize: "0.5rem",
                            letterSpacing: "0.3em",
                            color: color.text,
                            opacity: 0.38
                        },
                        children: "TAP TO SEE TIME"
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this)
                ]
            }, "now", true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 90,
                    height: 4,
                    borderRadius: 2,
                    background: color.text,
                    opacity: 0.3,
                    zIndex: 5
                }
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 387,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
function PhoneMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    const W = 200, H = 432, RADIUS = 38, BEZEL = 8;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "relative",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -9,
                    top: 80,
                    width: 8,
                    height: 22,
                    background: "linear-gradient(90deg, #555, #888, #555)",
                    borderRadius: "4px 0 0 4px",
                    boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 411,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -9,
                    top: 116,
                    width: 8,
                    height: 44,
                    background: "linear-gradient(90deg, #555, #888, #555)",
                    borderRadius: "4px 0 0 4px",
                    boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -9,
                    top: 168,
                    width: 8,
                    height: 44,
                    background: "linear-gradient(90deg, #555, #888, #555)",
                    borderRadius: "4px 0 0 4px",
                    boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    right: -9,
                    top: 130,
                    width: 8,
                    height: 56,
                    background: "linear-gradient(270deg, #555, #888, #555)",
                    borderRadius: "0 4px 4px 0",
                    boxShadow: "2px 0 6px rgba(0,0,0,0.5)"
                }
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: W,
                    height: H,
                    borderRadius: RADIUS,
                    padding: BEZEL,
                    background: silverBg(true),
                    boxShadow: `
          0 0 0 1px rgba(255,255,255,0.22),
          0 24px 64px rgba(0,0,0,0.55),
          inset 0 1px 0 rgba(255,255,255,0.3),
          inset 0 -1px 0 rgba(0,0,0,0.15)
        `,
                    position: "relative",
                    overflow: "hidden"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(180,79,255,0.12) 70%, transparent 100%)",
                            borderRadius: RADIUS,
                            pointerEvents: "none",
                            zIndex: 5
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            inset: 0,
                            borderRadius: RADIUS,
                            background: "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: onToggle,
                        style: {
                            width: "100%",
                            height: "100%",
                            borderRadius: RADIUS - BEZEL,
                            overflow: "hidden",
                            background: "#050505",
                            boxShadow: "inset 0 2px 14px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.7)",
                            position: "relative",
                            zIndex: 1,
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneScreenContent, {
                                showTime: showTime,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod,
                                color: color
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 13,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 11,
                                    height: 11,
                                    borderRadius: "50%",
                                    background: "#000",
                                    zIndex: 10,
                                    boxShadow: "0 0 0 2px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.06)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/DeviceMockups.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            top: BEZEL,
                            left: BEZEL,
                            right: BEZEL,
                            height: "28%",
                            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
                            background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 409,
        columnNumber: 5
    }, this);
}
function ColorPicker({ activeColor, onChange }) {
    const color = COLORS[activeColor];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 12
        },
        children: [
            COLORS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: (e)=>{
                        e.stopPropagation();
                        onChange(i);
                    },
                    title: c.label,
                    className: `color-dot${activeColor === i ? " active" : ""}`,
                    style: {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: c.bg,
                        border: "none",
                        outline: "none",
                        cursor: "pointer",
                        position: "relative",
                        flexShrink: 0
                    },
                    children: activeColor === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: "absolute",
                            inset: -4,
                            borderRadius: "50%",
                            border: `2px solid ${c.bg}`,
                            opacity: 0.55,
                            pointerEvents: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/components/DeviceMockups.tsx",
                        lineNumber: 515,
                        columnNumber: 13
                    }, this)
                }, c.id, false, {
                    fileName: "[project]/app/components/DeviceMockups.tsx",
                    lineNumber: 503,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.55rem",
                    letterSpacing: "0.24em",
                    color: color.bg,
                    transition: "color 0.3s ease",
                    minWidth: 44
                },
                children: color.label
            }, void 0, false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 501,
        columnNumber: 5
    }, this);
}
function FormatToggle({ use12h, onChange, accentColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "inline-flex",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 3,
            overflow: "hidden"
        },
        children: [
            false,
            true
        ].map((is12)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onChange(is12);
                },
                style: {
                    fontFamily: '"Space Mono", monospace',
                    fontSize: "0.52rem",
                    letterSpacing: "0.18em",
                    padding: "5px 12px",
                    border: "none",
                    cursor: "pointer",
                    background: use12h === is12 ? accentColor : "transparent",
                    color: use12h === is12 ? "#000" : "rgba(255,255,255,0.4)",
                    transition: "background 0.2s ease, color 0.2s ease"
                },
                children: is12 ? "12H" : "24H"
            }, String(is12), false, {
                fileName: "[project]/app/components/DeviceMockups.tsx",
                lineNumber: 544,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/components/DeviceMockups.tsx",
        lineNumber: 538,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/demo/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/DeviceMockups.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DemoPage() {
    const [watchShowTime, setWatchShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneShowTime, setPhoneShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeColor, setActiveColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [use12h, setUse12h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { display: timeDisplay, period: timePeriod } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrentTime"])(use12h);
    const color = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"][activeColor];
    const toggleWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setWatchShowTime((v)=>!v), []);
    const togglePhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setPhoneShowTime((v)=>!v), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: '"Space Mono", monospace',
            background: "#080808",
            minHeight: "100vh",
            color: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    padding: "16px 28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    backdropFilter: "blur(16px)",
                    background: "rgba(8,8,8,0.88)"
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
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#FFD400",
                                    letterSpacing: "-0.02em"
                                },
                                children: "NOW"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em"
                                },
                                children: "MODE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: 10,
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.26em",
                                    color: "rgba(255,255,255,0.3)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    padding: "2px 8px"
                                },
                                children: "DEMO"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        style: {
                            fontSize: "0.55rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.35)",
                            textDecoration: "none",
                            borderBottom: "1px solid rgba(255,255,255,0.12)",
                            paddingBottom: 1
                        },
                        children: "← BACK TO SITE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    textAlign: "center",
                    padding: "48px 24px 32px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.55rem",
                            letterSpacing: "0.38em",
                            color: "rgba(255,255,255,0.3)",
                            marginBottom: 12
                        },
                        children: "INTERACTIVE PREVIEW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontSize: "clamp(1.7rem, 5vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            margin: 0,
                            lineHeight: 1.05
                        },
                        children: "TAP THE SCREEN."
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 12,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.35)"
                        },
                        children: "TAP EITHER DEVICE TO TOGGLE · CHOOSE A COLOR"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    padding: "20px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ColorPicker"], {
                        activeColor: activeColor,
                        onChange: setActiveColor
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 24,
                            background: "rgba(255,255,255,0.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.3)"
                                },
                                children: "FORMAT"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FormatToggle"], {
                                use12h: use12h,
                                onChange: setUse12h,
                                accentColor: color.bg
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "clamp(32px, 6vw, 80px)",
                    padding: "64px 32px 72px",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.34em",
                                    color: "rgba(255,255,255,0.25)",
                                    marginBottom: 4
                                },
                                children: "WATCH"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WatchMockup"], {
                                showTime: watchShowTime,
                                onToggle: toggleWatch,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 200,
                            background: "rgba(255,255,255,0.07)",
                            alignSelf: "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.34em",
                                    color: "rgba(255,255,255,0.25)",
                                    marginBottom: 4
                                },
                                children: "MOBILE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$DeviceMockups$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PhoneMockup"], {
                                showTime: phoneShowTime,
                                onToggle: togglePhone,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    padding: "24px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(24px, 5vw, 60px)",
                    flexWrap: "wrap"
                },
                children: [
                    [
                        "TAP",
                        "Toggle NOW ↔ time on either device"
                    ],
                    [
                        "COLOR",
                        "5 screen themes"
                    ],
                    [
                        "FORMAT",
                        "12H or 24H clock"
                    ]
                ].map(([label, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.3em",
                                    color: color.bg,
                                    marginBottom: 4,
                                    transition: "color 0.3s ease"
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.58rem",
                                    color: "rgba(255,255,255,0.28)",
                                    letterSpacing: "0.1em"
                                },
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    padding: "18px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.48rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.18)"
                        },
                        children: "NOW MODE — TIME BY CHOICE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.48rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.12)"
                        },
                        children: "© 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e2591485._.js.map