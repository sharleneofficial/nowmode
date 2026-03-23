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
/* ─── Colour palette ────────────────────────────────────────────────────────── */ const COLORS = [
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
/* ─── Clock hook ────────────────────────────────────────────────────────────── */ function useCurrentTime(use12h) {
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
/* ─── 3D rotation hook ──────────────────────────────────────────────────────── */ function useRotation(maxX = 38, maxY = 48) {
    const [rot, setRot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const startPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const startRot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const moved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const rotStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const isDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.currentTarget.setPointerCapture(e.pointerId);
        dragging.current = true;
        isDragging.current = false;
        moved.current = false;
        startPos.current = {
            x: e.clientX,
            y: e.clientY
        };
        startRot.current = {
            ...rotStore.current
        };
    }, []);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (!dragging.current) return;
        const dx = e.clientX - startPos.current.x;
        const dy = e.clientY - startPos.current.y;
        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
            moved.current = true;
            isDragging.current = true;
        }
        const nx = Math.max(-maxX, Math.min(maxX, startRot.current.x - dy * 0.45));
        const ny = Math.max(-maxY, Math.min(maxY, startRot.current.y + dx * 0.45));
        rotStore.current = {
            x: nx,
            y: ny
        };
        setRot({
            x: nx,
            y: ny
        });
    }, [
        maxX,
        maxY
    ]);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dragging.current = false;
    }, []);
    const wasDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>moved.current, []);
    const currentlyDragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>isDragging.current, []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        rotStore.current = {
            x: 0,
            y: 0
        };
        setRot({
            x: 0,
            y: 0
        });
    }, []);
    return {
        rot,
        onPointerDown,
        onPointerMove,
        onPointerUp,
        wasDrag,
        currentlyDragging,
        reset
    };
}
/* ─── Holographic gradient helper ──────────────────────────────────────────── */ function holoGradient(rotY, rotX, angle = 125, opacity = 1) {
    const a = angle + rotY * 1.2;
    const px = 50 + rotY * 1.4;
    const py = 50 + rotX * 1.1;
    return {
        background: `linear-gradient(${a}deg,
      #ff007a, #ff6b00, #ffe200, #00e5d4, #0080ff, #b44fff, #ff007a)`,
        backgroundSize: "360% 360%",
        backgroundPosition: `${px}% ${py}%`,
        opacity
    };
}
/* ─── Scanline overlay ──────────────────────────────────────────────────────── */ function Scanlines({ opacity = 0.04 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(0deg,
          transparent, transparent 3px,
          rgba(0,0,0,${opacity}) 3px, rgba(0,0,0,${opacity}) 4px)`,
            pointerEvents: "none",
            borderRadius: "inherit",
            zIndex: 2
        }
    }, void 0, false, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
/* ─── Watch screen content ──────────────────────────────────────────────────── */ function WatchScreenContent({ showTime, timeDisplay, timePeriod, color }) {
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
            boxShadow: `inset 0 0 48px ${color.glow}`,
            transition: "background 0.35s ease, box-shadow 0.35s ease",
            cursor: "pointer",
            userSelect: "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Scanlines, {}, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            showTime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    zIndex: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 700,
                            color: color.text,
                            fontSize: "clamp(1.5rem, 5vw, 1.9rem)",
                            letterSpacing: "-0.02em",
                            lineHeight: 1,
                            textShadow: `0 2px 16px ${color.glow}`
                        },
                        children: timeDisplay
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontWeight: 400,
                            color: color.text,
                            fontSize: "0.52rem",
                            letterSpacing: "0.22em",
                            opacity: 0.65
                        },
                        children: timePeriod
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "screen-content",
                style: {
                    zIndex: 3,
                    textAlign: "center"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        fontFamily: "var(--font-space-mono), monospace",
                        fontWeight: 700,
                        color: color.text,
                        fontSize: "clamp(1.7rem, 6vw, 2.2rem)",
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        display: "block",
                        textShadow: `0 2px 20px ${color.glow}`
                    },
                    children: "NOW"
                }, void 0, false, {
                    fileName: "[project]/app/demo/page.tsx",
                    lineNumber: 203,
                    columnNumber: 11
                }, this)
            }, "now", false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this),
            !showTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: "absolute",
                    bottom: 10,
                    fontFamily: "var(--font-space-mono), monospace",
                    fontSize: "0.42rem",
                    letterSpacing: "0.32em",
                    color: color.text,
                    opacity: 0.4,
                    zIndex: 3
                },
                children: "TAP"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 141,
        columnNumber: 5
    }, this);
}
/* ─── Watch Mockup ──────────────────────────────────────────────────────────── */ function WatchMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    const W = 210;
    const H = 252;
    const RADIUS = 52;
    const BEZEL = 10;
    const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(32, 44);
    const handlePointerUp = (e)=>{
        onPointerUp();
        if (!wasDrag()) onToggle();
    };
    const holoStyle = {
        background: `linear-gradient(${125 + rot.y * 1.2}deg,
      #ff007a, #ff6b00, #ffe200, #00e5d4, #0080ff, #b44fff, #ff007a)`,
        backgroundSize: "360% 360%",
        backgroundPosition: `${50 + rot.y * 1.5}% ${50 + rot.x * 1.2}%`,
        animation: "holographic 5s ease infinite"
    };
    /* Strap dimensions */ const strapW = W * 0.72;
    const strapH = 70;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            perspective: "900px",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none"
        },
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: handlePointerUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                    transition: "transform 0.08s linear",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: strapW,
                            height: strapH,
                            background: `linear-gradient(180deg, #1a1a1a 0%, #2c2c2c 100%)`,
                            borderRadius: "10px 10px 0 0",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 -2px 12px rgba(0,0,0,0.5)",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            [
                                0.22,
                                0.44,
                                0.66
                            ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        left: "12%",
                                        right: "12%",
                                        top: `${p * 100}%`,
                                        height: 1,
                                        background: "rgba(255,255,255,0.06)"
                                    }
                                }, p, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 317,
                                    columnNumber: 13
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
                                    boxShadow: "0 0 0 1px rgba(255,255,255,0.12)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 304,
                        columnNumber: 9
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
                                    top: "26%",
                                    width: 10,
                                    height: 30,
                                    background: "linear-gradient(180deg, #aaa 0%, #666 50%, #aaa 100%)",
                                    borderRadius: "0 4px 4px 0",
                                    boxShadow: "3px 0 8px rgba(0,0,0,0.5), inset -1px 0 2px rgba(255,255,255,0.15)",
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    right: -10,
                                    top: "62%",
                                    width: 10,
                                    height: 18,
                                    background: "linear-gradient(180deg, #999 0%, #555 50%, #999 100%)",
                                    borderRadius: "0 4px 4px 0",
                                    boxShadow: "3px 0 6px rgba(0,0,0,0.5)",
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: W,
                                    height: H,
                                    borderRadius: RADIUS,
                                    padding: BEZEL,
                                    ...holoStyle,
                                    boxShadow: `
                0 0 0 1px rgba(255,255,255,0.22),
                0 12px 48px rgba(0,0,0,0.75),
                0 2px 8px rgba(0,0,0,0.5),
                inset 0 1px 0 rgba(255,255,255,0.3)
              `,
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shimmer-inner",
                                        style: {
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
                                            animation: "shimmer-sweep 3.5s ease-in-out infinite",
                                            borderRadius: RADIUS,
                                            pointerEvents: "none",
                                            zIndex: 5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 395,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: RADIUS - BEZEL,
                                            background: "#080808",
                                            overflow: "hidden",
                                            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.9)",
                                            position: "relative",
                                            zIndex: 1
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchScreenContent, {
                                            showTime: showTime,
                                            timeDisplay: timeDisplay,
                                            timePeriod: timePeriod,
                                            color: color
                                        }, void 0, false, {
                                            fileName: "[project]/app/demo/page.tsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 410,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: BEZEL,
                                            left: BEZEL,
                                            right: BEZEL,
                                            height: "40%",
                                            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 55% 55%`,
                                            background: "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 100%)",
                                            pointerEvents: "none",
                                            zIndex: 4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: strapW,
                            height: strapH + 20,
                            background: "linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)",
                            borderRadius: "0 0 14px 14px",
                            boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 20px rgba(0,0,0,0.6)",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 18,
                                    left: "22%",
                                    right: "22%",
                                    height: 3,
                                    background: "rgba(255,255,255,0.12)",
                                    borderRadius: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: 26,
                                    left: "22%",
                                    right: "22%",
                                    height: 3,
                                    background: "rgba(255,255,255,0.07)",
                                    borderRadius: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 16,
                    fontSize: "0.48rem",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.22)",
                    fontFamily: "var(--font-space-mono), monospace"
                },
                children: "DRAG TO ROTATE"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, this);
}
/* ─── Phone screen content ──────────────────────────────────────────────────── */ function PhoneScreenContent({ showTime, timeDisplay, timePeriod, color }) {
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
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 528,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 22px",
                    zIndex: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "var(--font-space-mono), monospace",
                            fontSize: "0.48rem",
                            letterSpacing: "0.1em",
                            color: color.text,
                            opacity: 0.5
                        },
                        children: "NOW MODE"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 545,
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
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 558,
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
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            inset: 1.5,
                                            right: 3,
                                            background: color.text,
                                            borderRadius: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 578,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            right: -4,
                                            transform: "translateY(-50%)",
                                            width: 2,
                                            height: 4,
                                            background: color.text,
                                            borderRadius: 1,
                                            opacity: 0.5
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 556,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            showTime ? /* Lock-screen time: positioned ~30% from top */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 621,
                        columnNumber: 11
                    }, this),
                    timePeriod && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        lineNumber: 635,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 648,
                        columnNumber: 11
                    }, this)
                ]
            }, "time", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 606,
                columnNumber: 9
            }, this) : /* NOW — centered */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 676,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        lineNumber: 691,
                        columnNumber: 11
                    }, this)
                ]
            }, "now", true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 663,
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
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 707,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 515,
        columnNumber: 5
    }, this);
}
/* ─── Phone Mockup ──────────────────────────────────────────────────────────── */ function PhoneMockup({ showTime, onToggle, color, timeDisplay, timePeriod }) {
    const W = 210;
    const H = 440;
    const RADIUS = 38;
    const BEZEL = 8;
    const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(28, 42);
    const handlePointerUp = ()=>{
        onPointerUp();
        if (!wasDrag()) onToggle();
    };
    const holoStyle = {
        background: `linear-gradient(${150 + rot.y * 1.2}deg,
      #1a1a2e, #3d1a78, #0f4c75, #1a3a1a, #1a1a2e)`,
        backgroundSize: "300% 300%",
        backgroundPosition: `${50 + rot.y * 2}% ${50 + rot.x * 1.5}%`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            perspective: "1000px",
            cursor: "grab",
            userSelect: "none",
            touchAction: "none"
        },
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: handlePointerUp,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    transformStyle: "preserve-3d",
                    transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
                    transition: "transform 0.08s linear",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: -9,
                            top: 80,
                            width: 8,
                            height: 24,
                            background: `linear-gradient(90deg, #555, #888, #555)`,
                            borderRadius: "4px 0 0 4px",
                            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 781,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: -9,
                            top: 118,
                            width: 8,
                            height: 40,
                            background: `linear-gradient(90deg, #555, #888, #555)`,
                            borderRadius: "4px 0 0 4px",
                            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 793,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            left: -9,
                            top: 168,
                            width: 8,
                            height: 40,
                            background: `linear-gradient(90deg, #555, #888, #555)`,
                            borderRadius: "4px 0 0 4px",
                            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 805,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: "absolute",
                            right: -9,
                            top: 130,
                            width: 8,
                            height: 56,
                            background: `linear-gradient(270deg, #555, #888, #555)`,
                            borderRadius: "0 4px 4px 0",
                            boxShadow: "2px 0 6px rgba(0,0,0,0.5)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 818,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: W,
                            height: H,
                            borderRadius: RADIUS,
                            padding: BEZEL,
                            ...holoStyle,
                            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.14),
              0 0 0 2px rgba(255,255,255,0.05),
              0 16px 64px rgba(0,0,0,0.85),
              0 4px 16px rgba(0,0,0,0.6),
              inset 0 1px 0 rgba(255,255,255,0.18)
            `,
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(180,79,255,0.12) 70%, transparent 100%)",
                                    borderRadius: RADIUS,
                                    pointerEvents: "none",
                                    zIndex: 5
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 851,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: RADIUS - BEZEL,
                                    overflow: "hidden",
                                    background: "#050505",
                                    position: "relative",
                                    zIndex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneScreenContent, {
                                        showTime: showTime,
                                        timeDisplay: timeDisplay,
                                        timePeriod: timePeriod,
                                        color: color
                                    }, void 0, false, {
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 875,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: 14,
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
                                        lineNumber: 883,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 864,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    top: BEZEL,
                                    left: BEZEL,
                                    right: BEZEL,
                                    height: "32%",
                                    borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
                                    background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
                                    pointerEvents: "none",
                                    zIndex: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 900,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 832,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 772,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 16,
                    fontSize: "0.48rem",
                    letterSpacing: "0.28em",
                    color: "rgba(255,255,255,0.22)",
                    fontFamily: "var(--font-space-mono), monospace"
                },
                children: "DRAG TO ROTATE"
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 918,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 758,
        columnNumber: 5
    }, this);
}
/* ─── Format toggle button ──────────────────────────────────────────────────── */ function FormatToggle({ use12h, onChange, accentColor }) {
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
                lineNumber: 953,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 944,
        columnNumber: 5
    }, this);
}
function DemoPage() {
    const [watchShowTime, setWatchShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneShowTime, setPhoneShowTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeColor, setActiveColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [use12h, setUse12h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { display: timeDisplay, period: timePeriod } = useCurrentTime(use12h);
    const color = COLORS[activeColor];
    const toggleWatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setWatchShowTime((v)=>!v), []);
    const togglePhone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setPhoneShowTime((v)=>!v), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$space_mono_88c934c$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].variable,
        style: {
            fontFamily: "var(--font-space-mono), monospace",
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
                                lineNumber: 1014,
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
                                lineNumber: 1019,
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
                                lineNumber: 1020,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1013,
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
                        lineNumber: 1033,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 999,
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
                        lineNumber: 1056,
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
                        lineNumber: 1066,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            marginTop: 12,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            color: "rgba(255,255,255,0.35)"
                        },
                        children: "DRAG DEVICES TO ROTATE · CHOOSE COLOR BELOW"
                    }, void 0, false, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1077,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1049,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 12
                        },
                        children: [
                            COLORS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        fileName: "[project]/app/demo/page.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 17
                                    }, this)
                                }, c.id, false, {
                                    fileName: "[project]/app/demo/page.tsx",
                                    lineNumber: 1104,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                lineNumber: 1135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1102,
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
                        lineNumber: 1149,
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
                                lineNumber: 1155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormatToggle, {
                                use12h: use12h,
                                onChange: setUse12h,
                                accentColor: color.bg
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1090,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: {
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "clamp(32px, 6vw, 80px)",
                    padding: "56px 32px 72px",
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
                                lineNumber: 1181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WatchMockup, {
                                showTime: watchShowTime,
                                onToggle: toggleWatch,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease",
                                    marginTop: -4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1180,
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
                        lineNumber: 1210,
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
                                lineNumber: 1221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneMockup, {
                                showTime: phoneShowTime,
                                onToggle: togglePhone,
                                color: color,
                                timeDisplay: timeDisplay,
                                timePeriod: timePeriod
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 40,
                                    height: 2,
                                    background: color.bg,
                                    transition: "background 0.3s ease",
                                    marginTop: -4
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/demo/page.tsx",
                                lineNumber: 1238,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1169,
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
                                lineNumber: 1269,
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
                                lineNumber: 1280,
                                columnNumber: 13
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/app/demo/page.tsx",
                        lineNumber: 1268,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1251,
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
                        lineNumber: 1305,
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
                        lineNumber: 1308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/demo/page.tsx",
                lineNumber: 1294,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/demo/page.tsx",
        lineNumber: 988,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f2f75af3._.js.map