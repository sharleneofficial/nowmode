(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/space_mono_88c934c.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "space_mono_88c934c-module__NWUx2q__className",
  "variable": "space_mono_88c934c-module__NWUx2q__variable",
});
}),
"[next]/internal/font/google/space_mono_88c934c.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_mono_88c934c.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Space Mono', 'Space Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/demo/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DemoPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/space_mono_88c934c.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ─── Colour palette ─────────────────────────────────────────────────────────── */ const COLORS = [
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
/* ─── Clock hook ─────────────────────────────────────────────────────────────── */ function useCurrentTime(use12h) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        display: "",
        period: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentTime.useEffect": ()=>{
            const tick = {
                "useCurrentTime.useEffect.tick": ()=>{
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
                }
            }["useCurrentTime.useEffect.tick"];
            tick();
            const id = setInterval(tick, 1000);
            return ({
                "useCurrentTime.useEffect": ()=>clearInterval(id)
            })["useCurrentTime.useEffect"];
        }
    }["useCurrentTime.useEffect"], [
        use12h
    ]);
    return state;
}
_s(useCurrentTime, "AkjttYqvALpMkpHfP7So45aelVo=");
/* ─── 3-D rotation hook ──────────────────────────────────────────────────────── */ function useRotation(maxX = 60, maxY = 75) {
    _s1();
    const [rot, setRot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startRot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const moved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rotStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRotation.useCallback[onPointerDown]": (e)=>{
            e.currentTarget.setPointerCapture(e.pointerId);
            dragging.current = true;
            moved.current = false;
            startPos.current = {
                x: e.clientX,
                y: e.clientY
            };
            startRot.current = {
                ...rotStore.current
            };
        }
    }["useRotation.useCallback[onPointerDown]"], []);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRotation.useCallback[onPointerMove]": (e)=>{
            if (!dragging.current) return;
            const dx = e.clientX - startPos.current.x;
            const dy = e.clientY - startPos.current.y;
            if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved.current = true;
            const nx = Math.max(-maxX, Math.min(maxX, startRot.current.x - dy * 0.5));
            const ny = Math.max(-maxY, Math.min(maxY, startRot.current.y + dx * 0.5));
            rotStore.current = {
                x: nx,
                y: ny
            };
            setRot({
                x: nx,
                y: ny
            });
        }
    }["useRotation.useCallback[onPointerMove]"], [
        maxX,
        maxY
    ]);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRotation.useCallback[onPointerUp]": ()=>{
            dragging.current = false;
        }
    }["useRotation.useCallback[onPointerUp]"], []);
    const wasDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRotation.useCallback[wasDrag]": ()=>moved.current
    }["useRotation.useCallback[wasDrag]"], []);
    return {
        rot,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        wasDrag
    };
}
_s1(useRotation, "QwD9vRCUxxWjJn9MzhHDlF2Nmik=");
/* ─── Silver holographic material ───────────────────────────────────────────── */ // Returns a CSS `background` value: iridescent rainbow over brushed silver
// The gradient angles and positions shift with rotation — simulating real reflection.
function silverBg(rotY, rotX, dark = false) {
    const baseAngle = 155 + rotY * 0.9 + rotX * 0.3;
    const iriAngle = 75 + rotY * 4.8 + rotX * 2.8;
    const lo = dark ? "#909090" : "#c4c4c4";
    const hi = dark ? "#cccccc" : "#f4f4f4";
    const md = dark ? "#9e9e9e" : "#bcbcbc";
    return [
        `linear-gradient(${iriAngle}deg,`,
        `  rgba(255,70,60,0.22) 0%, rgba(255,195,25,0.18) 18%,`,
        `  rgba(35,210,115,0.16) 36%, rgba(25,115,255,0.22) 54%,`,
        `  rgba(185,45,255,0.18) 72%, rgba(255,70,60,0.22) 90%)`,
        `,linear-gradient(${baseAngle}deg,`,
        `  ${lo} 0%, ${hi} 14%, ${md} 30%, ${hi} 47%,`,
        `  ${md} 63%, ${hi} 79%, ${lo} 100%)`
    ].join(" ");
}
// Side-face: visible edge of the device (slightly darker, lit from one direction)
function edgeBg(rotY, rotX, axis) {
    const ia = (axis === "y" ? 105 : 15) + rotY * 5 + rotX * 3;
    return [
        `linear-gradient(${ia}deg,`,
        `  rgba(255,80,70,0.28) 0%, rgba(255,200,30,0.22) 20%,`,
        `  rgba(40,210,130,0.20) 40%, rgba(30,120,255,0.28) 60%,`,
        `  rgba(190,50,255,0.22) 80%, rgba(255,80,70,0.28) 100%)`,
        `,linear-gradient(90deg,`,
        `  #585858 0%, #b8b8b8 30%, #e0e0e0 50%, #b8b8b8 70%, #585858 100%)`
    ].join(" ");
}
// Strap: dark silicone
function strapBg(rotY) {
    const a = 170 + rotY * 0.4;
    return `linear-gradient(${a}deg, #1c1c1c 0%, #2e2e2e 45%, #202020 70%, #282828 100%)`;
}
/* ─── Scanlines overlay ──────────────────────────────────────────────────────── */ function Scanlines({ opacity = 0.04 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c = Scanlines;
/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH SCREEN CONTENT
   Large, perfectly centred NOW / time filling the display
   ═══════════════════════════════════════════════════════════════════════════════ */ function WatchScreenContent({ showTime, timeDisplay, timePeriod, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scanlines, {}, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            showTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "3.4rem",
                            /* ≈ 54px × 5 chars × 0.60 ≈ 162 px */ letterSpacing: "-0.03em",
                            lineHeight: 1,
                            textShadow: `0 2px 20px ${color.glow}`,
                            display: "block"
                        },
                        children: timeDisplay
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 400,
                            color: color.text,
                            fontSize: "0.9rem",
                            letterSpacing: "0.22em",
                            opacity: 0.6
                        },
                        children: timePeriod
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 185,
                        columnNumber: 13
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "5.2rem",
                            /* ≈ 83px × 3 chars × 0.60 ≈ 150 px */ letterSpacing: "-0.04em",
                            lineHeight: 1,
                            display: "block",
                            textAlign: "center",
                            textShadow: `0 3px 24px ${color.glow}`
                        },
                        children: "NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.42rem",
                            letterSpacing: "0.32em",
                            color: color.text,
                            opacity: 0.38
                        },
                        children: "TAP"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, "now", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_c1 = WatchScreenContent;
/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH MOCKUP — true CSS 3-D box
   ═══════════════════════════════════════════════════════════════════════════════ */ function WatchMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    _s2();
    /* Case geometry */ const W = 210, H = 256, D = 12;
    const RADIUS = 52, BEZEL = 12;
    /* Strap geometry */ const SW = 152, SH_TOP = 80, SH_BOT = 100;
    /* Crown */ const CW = 10, CH = 28, CT = Math.round(H * 0.28);
    /* Side button */ const BW = 10, BH = 18, BT = Math.round(H * 0.62);
    const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(65, 80);
    const handleUp = ()=>{
        onPointerUp();
        if (!wasDrag()) onToggle();
    };
    const sbg = silverBg(rot.y, rot.x);
    const sbgDk = silverBg(rot.y, rot.x, true);
    const ey = edgeBg(rot.y, rot.x, "y");
    const ex = edgeBg(rot.y, rot.x, "x");
    const strap = strapBg(rot.y);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            perspective: "1100px",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none"
        },
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: handleUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                    transition: "transform 0.06s linear"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: SW,
                            height: SH_TOP,
                            transformStyle: "preserve-3d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: SH_TOP,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${D / 2}px)`,
                                    borderRadius: "10px 10px 0 0",
                                    background: strap,
                                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                                    overflow: "hidden"
                                },
                                children: [
                                    [
                                        0.25,
                                        0.5,
                                        0.75
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: "14%",
                                                right: "14%",
                                                top: `${p * 100}%`,
                                                height: 1,
                                                background: "rgba(255,255,255,0.07)"
                                            }
                                        }, p, false, {
                                            fileName: "[project]/app/demo/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: SH_TOP,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
                                    borderRadius: "10px 10px 0 0",
                                    background: "#181818"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: D,
                                    height: SH_TOP,
                                    top: 0,
                                    left: (SW - D) / 2,
                                    transform: `rotateY(90deg) translateZ(${SW / 2}px)`,
                                    background: ey
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: D,
                                    height: SH_TOP,
                                    top: 0,
                                    left: (SW - D) / 2,
                                    transform: `rotateY(-90deg) translateZ(${SW / 2}px)`,
                                    background: ey
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: D,
                                    top: (SH_TOP - D) / 2,
                                    left: 0,
                                    transform: `rotateX(-90deg) translateZ(${SH_TOP / 2}px)`,
                                    background: ex,
                                    borderRadius: "5px 5px 0 0"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: W,
                            height: H,
                            transformStyle: "preserve-3d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: W,
                                    height: H,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${D / 2}px)`,
                                    borderRadius: RADIUS,
                                    background: sbg,
                                    boxShadow: `
              0 0 0 1px rgba(255,255,255,0.25),
              inset 0 1px 0 rgba(255,255,255,0.35),
              inset 0 -1px 0 rgba(0,0,0,0.18)
            `,
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: BEZEL,
                                            left: BEZEL,
                                            right: BEZEL,
                                            bottom: BEZEL,
                                            borderRadius: RADIUS - BEZEL,
                                            background: "#060606",
                                            overflow: "hidden",
                                            boxShadow: "inset 0 2px 12px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.6)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchScreenContent, {
                                            showTime: showTime,
                                            timeDisplay: timeDisplay,
                                            timePeriod: timePeriod,
                                            color: color
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo/page.tsx",
                                            lineNumber: 383,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            borderRadius: RADIUS,
                                            background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: BEZEL,
                                            left: BEZEL,
                                            right: BEZEL,
                                            height: "38%",
                                            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
                                            background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: W,
                                    height: H,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
                                    borderRadius: RADIUS,
                                    background: sbgDk,
                                    boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: "24%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: 5
                                        },
                                        children: [
                                            22,
                                            14,
                                            22
                                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: s,
                                                    height: s,
                                                    borderRadius: "50%",
                                                    background: "rgba(0,0,0,0.4)",
                                                    boxShadow: "0 0 0 1.5px rgba(255,255,255,0.1), inset 0 1px 2px rgba(0,0,0,0.6)"
                                                }
                                            }, i, false, {
                                                fileName: "[project]/app/demo/page.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 415,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            bottom: "14%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            fontFamily: "var(--font-space-mono), monospace",
                                            fontSize: "0.4rem",
                                            letterSpacing: "0.14em",
                                            color: "rgba(0,0,0,0.4)",
                                            whiteSpace: "nowrap"
                                        },
                                        children: "NOW MODE · SERIES 1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 406,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: D,
                                    height: H,
                                    top: 0,
                                    left: (W - D) / 2,
                                    transform: `rotateY(90deg) translateZ(${W / 2}px)`,
                                    background: ey
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: CW,
                                    height: CH,
                                    top: CT,
                                    left: (W - CW) / 2,
                                    transform: `rotateY(90deg) translateZ(${W / 2 + D / 2 + CW / 2}px)`,
                                    background: `
              linear-gradient(${90 + rot.y * 5}deg,
                rgba(255,80,70,0.22) 0%, rgba(255,200,30,0.18) 33%,
                rgba(30,120,255,0.22) 66%, rgba(185,50,255,0.18) 100%),
              linear-gradient(90deg, #888 0%, #d8d8d8 40%, #eee 50%, #d8d8d8 60%, #888 100%)
            `,
                                    borderRadius: "0 4px 4px 0",
                                    boxShadow: "2px 0 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
                                },
                                children: [
                                    0.2,
                                    0.4,
                                    0.6,
                                    0.8
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            left: 2,
                                            right: 2,
                                            top: `${p * 100}%`,
                                            height: 1,
                                            background: "rgba(0,0,0,0.2)"
                                        }
                                    }, p, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 463,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: BW,
                                    height: BH,
                                    top: BT,
                                    left: (W - BW) / 2,
                                    transform: `rotateY(90deg) translateZ(${W / 2 + D / 2 + BW / 2}px)`,
                                    background: `
              linear-gradient(${90 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #888 0%, #ccc 50%, #888 100%)
            `,
                                    borderRadius: "0 3px 3px 0",
                                    boxShadow: "2px 0 4px rgba(0,0,0,0.5)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: D,
                                    height: H,
                                    top: 0,
                                    left: (W - D) / 2,
                                    transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
                                    background: ey
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: W,
                                    height: D,
                                    top: (H - D) / 2,
                                    left: 0,
                                    transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
                                    background: ex
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 494,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: W,
                                    height: D,
                                    top: (H - D) / 2,
                                    left: 0,
                                    transform: `rotateX(90deg) translateZ(${H / 2}px)`,
                                    background: ex
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "relative",
                            width: SW,
                            height: SH_BOT,
                            transformStyle: "preserve-3d"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: SH_BOT,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${D / 2}px)`,
                                    borderRadius: "0 0 16px 16px",
                                    background: strap,
                                    overflow: "hidden"
                                },
                                children: [
                                    [
                                        0.3,
                                        0.45,
                                        0.6
                                    ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            fileName: "[project]/app/demo/page.tsx",
                                            lineNumber: 528,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 519,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: SH_BOT,
                                    top: 0,
                                    left: 0,
                                    transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
                                    borderRadius: "0 0 16px 16px",
                                    background: "#181818"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this),
                            [
                                -1,
                                1
                            ].map((dir)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        width: D,
                                        height: SH_BOT,
                                        top: 0,
                                        left: (SW - D) / 2,
                                        transform: `rotateY(${dir * 90}deg) translateZ(${SW / 2}px)`,
                                        background: ey
                                    }
                                }, dir, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    width: SW,
                                    height: D,
                                    top: (SH_BOT - D) / 2,
                                    left: 0,
                                    transform: `rotateX(90deg) translateZ(${SH_BOT / 2}px)`,
                                    background: ex,
                                    borderRadius: "0 0 8px 8px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 559,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    fontSize: "0.46rem",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-space-mono), monospace"
                },
                children: "DRAG TO ROTATE"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 570,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_s2(WatchMockup, "48dM4IeCrPpVMmLRrX5hbDMC/80=", false, function() {
    return [
        useRotation
    ];
});
_c2 = WatchMockup;
/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE SCREEN CONTENT
   ═══════════════════════════════════════════════════════════════════════════════ */ function PhoneScreenContent({ showTime, timeDisplay, timePeriod, color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scanlines, {
                opacity: 0.03
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.46rem",
                            letterSpacing: "0.1em",
                            color: color.text,
                            opacity: 0.5
                        },
                        children: "NOW MODE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 3,
                                        height: h,
                                        background: color.text,
                                        borderRadius: 1
                                    }
                                }, h, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 611,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginLeft: 4,
                                    width: 16,
                                    height: 8,
                                    border: `1.5px solid ${color.text}`,
                                    borderRadius: 2,
                                    position: "relative"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        inset: 1.5,
                                        right: 3,
                                        background: color.text,
                                        borderRadius: 1
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 609,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 599,
                columnNumber: 7
            }, this),
            showTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "clamp(2.6rem, 11vw, 3.8rem)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            textShadow: `0 4px 24px ${color.glow}`
                        },
                        children: timeDisplay
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 630,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 400,
                            color: color.text,
                            fontSize: "0.7rem",
                            letterSpacing: "0.3em",
                            opacity: 0.6
                        },
                        children: timePeriod
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 638,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 12,
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.5rem",
                            letterSpacing: "0.22em",
                            color: color.text,
                            opacity: 0.4
                        },
                        children: "TAP FOR NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 644,
                        columnNumber: 11
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 626,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "clamp(3rem, 13vw, 4.8rem)",
                            letterSpacing: "-0.04em",
                            lineHeight: 1,
                            textShadow: `0 4px 28px ${color.glow}`,
                            display: "block",
                            textAlign: "center"
                        },
                        children: "NOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 656,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            marginTop: 16,
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.5rem",
                            letterSpacing: "0.3em",
                            color: color.text,
                            opacity: 0.38
                        },
                        children: "TAP TO SEE TIME"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this)
                ]
            }, "now", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 651,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 673,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 588,
        columnNumber: 5
    }, this);
}
_c3 = PhoneScreenContent;
/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE MOCKUP — true CSS 3-D box
   ═══════════════════════════════════════════════════════════════════════════════ */ function PhoneMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    _s3();
    const W = 200, H = 432, D = 10;
    const RADIUS = 38, BEZEL = 8;
    const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(60, 75);
    const handleUp = ()=>{
        onPointerUp();
        if (!wasDrag()) onToggle();
    };
    const sbg = silverBg(rot.y, rot.x);
    const sbgDk = silverBg(rot.y, rot.x, true);
    const ey = edgeBg(rot.y, rot.x, "y");
    const ex = edgeBg(rot.y, rot.x, "x");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            perspective: "1200px",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none"
        },
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: handleUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "relative",
                    width: W,
                    height: H,
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                    transition: "transform 0.06s linear"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: W,
                            height: H,
                            top: 0,
                            left: 0,
                            transform: `translateZ(${D / 2}px)`,
                            borderRadius: RADIUS,
                            background: sbg,
                            boxShadow: `
            0 0 0 1px rgba(255,255,255,0.22),
            inset 0 1px 0 rgba(255,255,255,0.3),
            inset 0 -1px 0 rgba(0,0,0,0.15)
          `,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: BEZEL,
                                    left: BEZEL,
                                    right: BEZEL,
                                    bottom: BEZEL,
                                    borderRadius: RADIUS - BEZEL,
                                    background: "#050505",
                                    overflow: "hidden",
                                    boxShadow: "inset 0 2px 14px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.7)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneScreenContent, {
                                        showTime: showTime,
                                        timeDisplay: timeDisplay,
                                        timePeriod: timePeriod,
                                        color: color
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 749,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: RADIUS,
                                    background: "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 758,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: BEZEL,
                                    left: BEZEL,
                                    right: BEZEL,
                                    height: "30%",
                                    borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 764,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 723,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: W,
                            height: H,
                            top: 0,
                            left: 0,
                            transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
                            borderRadius: RADIUS,
                            background: sbgDk,
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 22,
                                    left: 20,
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: "rgba(0,0,0,0.55)",
                                    boxShadow: "0 0 0 1.5px rgba(255,255,255,0.12), inset 0 2px 8px rgba(0,0,0,0.6)",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 4,
                                    padding: 8
                                },
                                children: [
                                    18,
                                    14,
                                    14
                                ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: s,
                                            height: s,
                                            borderRadius: "50%",
                                            background: "rgba(20,20,20,0.9)",
                                            boxShadow: "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.15)"
                                        }
                                    }, i, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 793,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 782,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: "15%",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    fontFamily: "var(--font-space-mono), monospace",
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.2em",
                                    color: "rgba(0,0,0,0.35)",
                                    whiteSpace: "nowrap"
                                },
                                children: "NOW MODE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 801,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: D,
                            height: H,
                            top: 0,
                            left: (W - D) / 2,
                            transform: `rotateY(90deg) translateZ(${W / 2}px)`,
                            background: ey
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: Math.round(H * 0.29),
                                left: 0,
                                right: 0,
                                height: 58,
                                background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `,
                                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/demo/page.tsx",
                            lineNumber: 818,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 811,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: D,
                            height: H,
                            top: 0,
                            left: (W - D) / 2,
                            transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
                            background: ey
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: Math.round(H * 0.18),
                                    left: 0,
                                    right: 0,
                                    height: 22,
                                    background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: Math.round(H * 0.26),
                                    left: 0,
                                    right: 0,
                                    height: 44,
                                    background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 848,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: Math.round(H * 0.37),
                                    left: 0,
                                    right: 0,
                                    height: 44,
                                    background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 858,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 831,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: W,
                            height: D,
                            top: (H - D) / 2,
                            left: 0,
                            transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
                            background: ex
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                top: "20%",
                                bottom: "20%",
                                left: "35%",
                                right: "35%",
                                borderRadius: 2,
                                background: "rgba(0,0,0,0.3)",
                                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/demo/page.tsx",
                            lineNumber: 876,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 870,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            width: W,
                            height: D,
                            top: (H - D) / 2,
                            left: 0,
                            transform: `rotateX(90deg) translateZ(${H / 2}px)`,
                            background: ex
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: "15%",
                                    bottom: "15%",
                                    left: "40%",
                                    right: "40%",
                                    borderRadius: 3,
                                    background: "rgba(0,0,0,0.45)",
                                    boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 893,
                                columnNumber: 11
                            }, this),
                            [
                                -28,
                                -20,
                                -12
                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "30%",
                                        left: `calc(50% + ${x}px - 2px)`,
                                        width: 3,
                                        height: 3,
                                        borderRadius: "50%",
                                        background: "rgba(0,0,0,0.5)"
                                    }
                                }, x, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 902,
                                    columnNumber: 13
                                }, this)),
                            [
                                12,
                                20,
                                28
                            ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "30%",
                                        left: `calc(50% + ${x}px - 2px)`,
                                        width: 3,
                                        height: 3,
                                        borderRadius: "50%",
                                        background: "rgba(0,0,0,0.5)"
                                    }
                                }, x, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 911,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 886,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 714,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 20,
                    fontSize: "0.46rem",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.2)",
                    fontFamily: "var(--font-space-mono), monospace"
                },
                children: "DRAG TO ROTATE"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 921,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 704,
        columnNumber: 5
    }, this);
}
_s3(PhoneMockup, "48dM4IeCrPpVMmLRrX5hbDMC/80=", false, function() {
    return [
        useRotation
    ];
});
_c4 = PhoneMockup;
/* ─── Format toggle ──────────────────────────────────────────────────────────── */ function FormatToggle({ use12h, onChange, accentColor }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "inline-flex",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: 3,
            overflow: "hidden"
        },
        children: [
            false,
            true
        ].map((is12)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(is12),
                style: {
                    fontFamily: "var(--font-space-mono), monospace",
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
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 943,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 937,
        columnNumber: 5
    }, this);
}
_c5 = FormatToggle;
function DemoPage() {
    _s4();
    const [watchShowTime, setWatchShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneShowTime, setPhoneShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeColor, setActiveColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [use12h, setUse12h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { display: timeDisplay, period: timePeriod } = useCurrentTime(use12h);
    const color = COLORS[activeColor];
    const toggleWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DemoPage.useCallback[toggleWatch]": ()=>setWatchShowTime({
                "DemoPage.useCallback[toggleWatch]": (v)=>!v
            }["DemoPage.useCallback[toggleWatch]"])
    }["DemoPage.useCallback[toggleWatch]"], []);
    const togglePhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DemoPage.useCallback[togglePhone]": ()=>setPhoneShowTime({
                "DemoPage.useCallback[togglePhone]": (v)=>!v
            }["DemoPage.useCallback[togglePhone]"])
    }["DemoPage.useCallback[togglePhone]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable,
        style: {
            fontFamily: "var(--font-space-mono), monospace",
            background: "#080808",
            minHeight: "100vh",
            color: "#fff",
            overflowX: "hidden"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#FFD400",
                                    letterSpacing: "-0.02em"
                                },
                                children: "NOW"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 997,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em"
                                },
                                children: "MODE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1000,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 1001,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 996,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        lineNumber: 1007,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 988,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    textAlign: "center",
                    padding: "48px 24px 32px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.55rem",
                            letterSpacing: "0.38em",
                            color: "rgba(255,255,255,0.3)",
                            marginBottom: 12
                        },
                        children: "INTERACTIVE PREVIEW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1021,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
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
                        lineNumber: 1025,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 12,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.35)"
                        },
                        children: "DRAG DEVICES TO ROTATE · CHOOSE COLOR BELOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1029,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1017,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            COLORS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveColor(i),
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
                                    children: activeColor === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            position: "absolute",
                                            inset: -4,
                                            borderRadius: "50%",
                                            border: `2px solid ${c.bg}`,
                                            opacity: 0.55,
                                            pointerEvents: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 17
                                    }, this)
                                }, c.id, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.55rem",
                                    letterSpacing: "0.24em",
                                    color: color.bg,
                                    transition: "color 0.3s ease",
                                    minWidth: 44
                                },
                                children: color.label
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1063,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1042,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 24,
                            background: "rgba(255,255,255,0.1)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1069,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.22em",
                                    color: "rgba(255,255,255,0.3)"
                                },
                                children: "FORMAT"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1072,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormatToggle, {
                                use12h: use12h,
                                onChange: setUse12h,
                                accentColor: color.bg
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1076,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1071,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1036,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "clamp(32px, 6vw, 80px)",
                    padding: "64px 32px 72px",
                    flexWrap: "wrap"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.34em",
                                    color: "rgba(255,255,255,0.25)",
                                    marginBottom: 4
                                },
                                children: "WATCH"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1089,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchMockup, {
                                showTime: watchShowTime,
                                onToggle: toggleWatch,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1093,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease",
                                    marginTop: -4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1097,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1088,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 1,
                            height: 200,
                            background: "rgba(255,255,255,0.07)",
                            alignSelf: "center"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.5rem",
                                    letterSpacing: "0.34em",
                                    color: "rgba(255,255,255,0.25)",
                                    marginBottom: 4
                                },
                                children: "MOBILE"
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                showTime: phoneShowTime,
                                onToggle: togglePhone,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease",
                                    marginTop: -4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1081,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
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
                        "Toggle NOW / time"
                    ],
                    [
                        "DRAG",
                        "Rotate device in 3D"
                    ],
                    [
                        "COLOR",
                        "5 screen themes"
                    ],
                    [
                        "FORMAT",
                        "12H or 24H clock"
                    ]
                ].map(([label, desc])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                lineNumber: 1141,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "0.58rem",
                                    color: "rgba(255,255,255,0.28)",
                                    letterSpacing: "0.1em"
                                },
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1140,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.48rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.18)"
                        },
                        children: "NOW MODE — TIME BY CHOICE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: "0.48rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.12)"
                        },
                        children: "© 2026"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 977,
        columnNumber: 5
    }, this);
}
_s4(DemoPage, "pn41sA8wGY5Lqw+IJntNReQ+aDI=", false, function() {
    return [
        useCurrentTime
    ];
});
_c6 = DemoPage;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Scanlines");
__turbopack_context__.k.register(_c1, "WatchScreenContent");
__turbopack_context__.k.register(_c2, "WatchMockup");
__turbopack_context__.k.register(_c3, "PhoneScreenContent");
__turbopack_context__.k.register(_c4, "PhoneMockup");
__turbopack_context__.k.register(_c5, "FormatToggle");
__turbopack_context__.k.register(_c6, "DemoPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__91a6a2d6._.js.map