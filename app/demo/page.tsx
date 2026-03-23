"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

/* ─── Colour palette ─────────────────────────────────────────────────────────── */
const COLORS = [
  { id: "solar", bg: "#FFD400", text: "#000000", label: "SOLAR", glow: "rgba(255,212,0,0.6)"   },
  { id: "pulse", bg: "#FF2D87", text: "#000000", label: "PULSE", glow: "rgba(255,45,135,0.6)"  },
  { id: "drift", bg: "#00E5D4", text: "#000000", label: "DRIFT", glow: "rgba(0,229,212,0.6)"   },
  { id: "void",  bg: "#B44FFF", text: "#ffffff", label: "VOID",  glow: "rgba(180,79,255,0.6)"  },
  { id: "flux",  bg: "#00FF8C", text: "#000000", label: "FLUX",  glow: "rgba(0,255,140,0.6)"   },
];
type Color = (typeof COLORS)[number];

/* ─── Clock hook ─────────────────────────────────────────────────────────────── */
function useCurrentTime(use12h: boolean) {
  const [state, setState] = useState({ display: "", period: "" });
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const mins = now.getMinutes().toString().padStart(2, "0");
      if (use12h) {
        const raw = now.getHours();
        const period = raw >= 12 ? "PM" : "AM";
        const h = raw % 12 || 12;
        setState({ display: `${h}:${mins}`, period });
      } else {
        const h = now.getHours().toString().padStart(2, "0");
        setState({ display: `${h}:${mins}`, period: "" });
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [use12h]);
  return state;
}

/* ─── 3-D rotation hook ──────────────────────────────────────────────────────── */
function useRotation(maxX = 60, maxY = 75) {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const dragging  = useRef(false);
  const startPos  = useRef({ x: 0, y: 0 });
  const startRot  = useRef({ x: 0, y: 0 });
  const moved     = useRef(false);
  const rotStore  = useRef({ x: 0, y: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragging.current  = true;
    moved.current     = false;
    startPos.current  = { x: e.clientX, y: e.clientY };
    startRot.current  = { ...rotStore.current };
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved.current = true;
    const nx = Math.max(-maxX, Math.min(maxX, startRot.current.x - dy * 0.5));
    const ny = Math.max(-maxY, Math.min(maxY, startRot.current.y + dx * 0.5));
    rotStore.current = { x: nx, y: ny };
    setRot({ x: nx, y: ny });
  }, [maxX, maxY]);

  const onPointerUp = useCallback(() => { dragging.current = false; }, []);
  const wasDrag = useCallback(() => moved.current, []);

  return { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag };
}

/* ─── Silver holographic material ───────────────────────────────────────────── */
// Returns a CSS `background` value: iridescent rainbow over brushed silver
// The gradient angles and positions shift with rotation — simulating real reflection.
function silverBg(rotY: number, rotX: number, dark = false) {
  const baseAngle = 155 + rotY * 0.9 + rotX * 0.3;
  const iriAngle  =  75 + rotY * 4.8 + rotX * 2.8;
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
    `  ${md} 63%, ${hi} 79%, ${lo} 100%)`,
  ].join(" ");
}

// Side-face: visible edge of the device (slightly darker, lit from one direction)
function edgeBg(rotY: number, rotX: number, axis: "y" | "x") {
  const ia = (axis === "y" ? 105 : 15) + rotY * 5 + rotX * 3;
  return [
    `linear-gradient(${ia}deg,`,
    `  rgba(255,80,70,0.28) 0%, rgba(255,200,30,0.22) 20%,`,
    `  rgba(40,210,130,0.20) 40%, rgba(30,120,255,0.28) 60%,`,
    `  rgba(190,50,255,0.22) 80%, rgba(255,80,70,0.28) 100%)`,
    `,linear-gradient(90deg,`,
    `  #585858 0%, #b8b8b8 30%, #e0e0e0 50%, #b8b8b8 70%, #585858 100%)`,
  ].join(" ");
}

// Strap: dark silicone
function strapBg(rotY: number) {
  const a = 170 + rotY * 0.4;
  return `linear-gradient(${a}deg, #1c1c1c 0%, #2e2e2e 45%, #202020 70%, #282828 100%)`;
}

/* ─── Scanlines overlay ──────────────────────────────────────────────────────── */
function Scanlines({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `repeating-linear-gradient(0deg,
          transparent, transparent 3px,
          rgba(0,0,0,${opacity}) 3px, rgba(0,0,0,${opacity}) 4px)`,
        borderRadius: "inherit", zIndex: 2,
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH SCREEN CONTENT
   Large, perfectly centred NOW / time filling the display
   ═══════════════════════════════════════════════════════════════════════════════ */
function WatchScreenContent({
  showTime, timeDisplay, timePeriod, color,
}: { showTime: boolean; timeDisplay: string; timePeriod: string; color: Color }) {
  return (
    <div
      style={{
        width: "100%", height: "100%",
        background: color.bg,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden",
        borderRadius: "inherit",
        boxShadow: `inset 0 0 60px ${color.glow}`,
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        cursor: "pointer", userSelect: "none",
      }}
    >
      <Scanlines />

      {showTime ? (
        <div
          key="time"
          className="screen-content"
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 6, zIndex: 3,
            width: "100%", textAlign: "center",
          }}
        >
          {/* Time — fills ~78 % of the 186 px screen width */}
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "3.4rem",        /* ≈ 54px × 5 chars × 0.60 ≈ 162 px */
              letterSpacing: "-0.03em",
              lineHeight: 1,
              textShadow: `0 2px 20px ${color.glow}`,
              display: "block",
            }}
          >
            {timeDisplay}
          </span>
          {timePeriod && (
            <span
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontWeight: 400,
                color: color.text,
                fontSize: "0.9rem",
                letterSpacing: "0.22em",
                opacity: 0.6,
              }}
            >
              {timePeriod}
            </span>
          )}
        </div>
      ) : (
        <div
          key="now"
          className="screen-content"
          style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: 8, zIndex: 3, width: "100%",
          }}
        >
          {/* NOW — fills ~80 % of the 186 px screen width */}
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "5.2rem",        /* ≈ 83px × 3 chars × 0.60 ≈ 150 px */
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "block",
              textAlign: "center",
              textShadow: `0 3px 24px ${color.glow}`,
            }}
          >
            NOW
          </span>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.42rem",
              letterSpacing: "0.32em",
              color: color.text,
              opacity: 0.38,
            }}
          >
            TAP
          </span>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH MOCKUP — true CSS 3-D box
   ═══════════════════════════════════════════════════════════════════════════════ */
function WatchMockup({
  showTime, onToggle, color, timeDisplay, timePeriod,
}: {
  showTime: boolean; onToggle: () => void; color: Color;
  timeDisplay: string; timePeriod: string;
}) {
  /* Case geometry */
  const W = 210, H = 256, D = 12;
  const RADIUS = 52, BEZEL = 12;
  /* Strap geometry */
  const SW = 152, SH_TOP = 80, SH_BOT = 100;
  /* Crown */
  const CW = 10, CH = 28, CT = Math.round(H * 0.28);
  /* Side button */
  const BW = 10, BH = 18, BT = Math.round(H * 0.62);

  const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(65, 80);
  const handleUp = () => { onPointerUp(); if (!wasDrag()) onToggle(); };

  const sbg   = silverBg(rot.y, rot.x);
  const sbgDk = silverBg(rot.y, rot.x, true);
  const ey    = edgeBg(rot.y, rot.x, "y");
  const ex    = edgeBg(rot.y, rot.x, "x");
  const strap = strapBg(rot.y);

  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        perspective: "1100px",
        cursor: "grab", userSelect: "none", touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={handleUp}
    >
      {/* ── Rotating group ── */}
      <div
        style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.06s linear",
        }}
      >

        {/* ── Top strap ── */}
        <div
          style={{
            position: "relative",
            width: SW, height: SH_TOP,
            transformStyle: "preserve-3d",
          }}
        >
          {/* front */}
          <div style={{
            position: "absolute", width: SW, height: SH_TOP, top: 0, left: 0,
            transform: `translateZ(${D / 2}px)`,
            borderRadius: "10px 10px 0 0",
            background: strap,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
            overflow: "hidden",
          }}>
            {[0.25, 0.5, 0.75].map((p) => (
              <div key={p} style={{
                position: "absolute", left: "14%", right: "14%",
                top: `${p * 100}%`, height: 1,
                background: "rgba(255,255,255,0.07)",
              }} />
            ))}
            <div style={{
              position: "absolute", bottom: 10, left: "50%",
              transform: "translateX(-50%)",
              width: 5, height: 5, borderRadius: "50%",
              background: "#000", boxShadow: "0 0 0 1px rgba(255,255,255,0.14)",
            }} />
          </div>
          {/* back */}
          <div style={{
            position: "absolute", width: SW, height: SH_TOP, top: 0, left: 0,
            transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
            borderRadius: "10px 10px 0 0",
            background: "#181818",
          }} />
          {/* right edge */}
          <div style={{
            position: "absolute", width: D, height: SH_TOP,
            top: 0, left: (SW - D) / 2,
            transform: `rotateY(90deg) translateZ(${SW / 2}px)`,
            background: ey,
          }} />
          {/* left edge */}
          <div style={{
            position: "absolute", width: D, height: SH_TOP,
            top: 0, left: (SW - D) / 2,
            transform: `rotateY(-90deg) translateZ(${SW / 2}px)`,
            background: ey,
          }} />
          {/* top */}
          <div style={{
            position: "absolute", width: SW, height: D,
            top: (SH_TOP - D) / 2, left: 0,
            transform: `rotateX(-90deg) translateZ(${SH_TOP / 2}px)`,
            background: ex,
            borderRadius: "5px 5px 0 0",
          }} />
        </div>

        {/* ── Watch case ── */}
        <div
          style={{
            position: "relative",
            width: W, height: H,
            transformStyle: "preserve-3d",
          }}
        >
          {/* ── Front face ── */}
          <div style={{
            position: "absolute", width: W, height: H, top: 0, left: 0,
            transform: `translateZ(${D / 2}px)`,
            borderRadius: RADIUS,
            background: sbg,
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.25),
              inset 0 1px 0 rgba(255,255,255,0.35),
              inset 0 -1px 0 rgba(0,0,0,0.18)
            `,
            overflow: "hidden",
          }}>
            {/* Screen inset */}
            <div style={{
              position: "absolute",
              top: BEZEL, left: BEZEL, right: BEZEL, bottom: BEZEL,
              borderRadius: RADIUS - BEZEL,
              background: "#060606",
              overflow: "hidden",
              boxShadow: "inset 0 2px 12px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.6)",
            }}>
              <WatchScreenContent
                showTime={showTime} timeDisplay={timeDisplay}
                timePeriod={timePeriod} color={color}
              />
            </div>
            {/* Bezel bevel highlight (top-left arc) */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: RADIUS,
              background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
              pointerEvents: "none",
            }} />
            {/* Glass glare */}
            <div style={{
              position: "absolute",
              top: BEZEL, left: BEZEL, right: BEZEL,
              height: "38%",
              borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
              background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
              pointerEvents: "none",
            }} />
          </div>

          {/* ── Back face ── */}
          <div style={{
            position: "absolute", width: W, height: H, top: 0, left: 0,
            transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
            borderRadius: RADIUS,
            background: sbgDk,
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.4)",
            overflow: "hidden",
          }}>
            {/* Sensor cluster */}
            <div style={{
              position: "absolute", bottom: "24%", left: "50%",
              transform: "translateX(-50%)",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
            }}>
              {[22, 14, 22].map((s, i) => (
                <div key={i} style={{
                  width: s, height: s, borderRadius: "50%",
                  background: "rgba(0,0,0,0.4)",
                  boxShadow: "0 0 0 1.5px rgba(255,255,255,0.1), inset 0 1px 2px rgba(0,0,0,0.6)",
                }} />
              ))}
            </div>
            <div style={{
              position: "absolute", bottom: "14%", left: "50%",
              transform: "translateX(-50%)",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.4rem", letterSpacing: "0.14em",
              color: "rgba(0,0,0,0.4)", whiteSpace: "nowrap",
            }}>
              NOW MODE · SERIES 1
            </div>
          </div>

          {/* ── Right side (crown side) ── */}
          <div style={{
            position: "absolute", width: D, height: H,
            top: 0, left: (W - D) / 2,
            transform: `rotateY(90deg) translateZ(${W / 2}px)`,
            background: ey,
          }} />

          {/* ── Digital crown (protrudes from right) ── */}
          <div style={{
            position: "absolute", width: CW, height: CH,
            top: CT, left: (W - CW) / 2,
            transform: `rotateY(90deg) translateZ(${W / 2 + D / 2 + CW / 2}px)`,
            background: `
              linear-gradient(${90 + rot.y * 5}deg,
                rgba(255,80,70,0.22) 0%, rgba(255,200,30,0.18) 33%,
                rgba(30,120,255,0.22) 66%, rgba(185,50,255,0.18) 100%),
              linear-gradient(90deg, #888 0%, #d8d8d8 40%, #eee 50%, #d8d8d8 60%, #888 100%)
            `,
            borderRadius: "0 4px 4px 0",
            boxShadow: "2px 0 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}>
            {/* Crown ridges */}
            {[0.2, 0.4, 0.6, 0.8].map((p) => (
              <div key={p} style={{
                position: "absolute", left: 2, right: 2,
                top: `${p * 100}%`, height: 1,
                background: "rgba(0,0,0,0.2)",
              }} />
            ))}
          </div>

          {/* ── Side button ── */}
          <div style={{
            position: "absolute", width: BW, height: BH,
            top: BT, left: (W - BW) / 2,
            transform: `rotateY(90deg) translateZ(${W / 2 + D / 2 + BW / 2}px)`,
            background: `
              linear-gradient(${90 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #888 0%, #ccc 50%, #888 100%)
            `,
            borderRadius: "0 3px 3px 0",
            boxShadow: "2px 0 4px rgba(0,0,0,0.5)",
          }} />

          {/* ── Left side ── */}
          <div style={{
            position: "absolute", width: D, height: H,
            top: 0, left: (W - D) / 2,
            transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
            background: ey,
          }} />

          {/* ── Top edge ── */}
          <div style={{
            position: "absolute", width: W, height: D,
            top: (H - D) / 2, left: 0,
            transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
            background: ex,
          }} />

          {/* ── Bottom edge ── */}
          <div style={{
            position: "absolute", width: W, height: D,
            top: (H - D) / 2, left: 0,
            transform: `rotateX(90deg) translateZ(${H / 2}px)`,
            background: ex,
          }} />
        </div>

        {/* ── Bottom strap ── */}
        <div
          style={{
            position: "relative",
            width: SW, height: SH_BOT,
            transformStyle: "preserve-3d",
          }}
        >
          {/* front */}
          <div style={{
            position: "absolute", width: SW, height: SH_BOT, top: 0, left: 0,
            transform: `translateZ(${D / 2}px)`,
            borderRadius: "0 0 16px 16px",
            background: strap,
            overflow: "hidden",
          }}>
            {/* Buckle slots */}
            {[0.3, 0.45, 0.6].map((p) => (
              <div key={p} style={{
                position: "absolute", left: "18%", right: "18%",
                top: `${p * 100}%`, height: 2,
                background: "rgba(0,0,0,0.35)",
                borderRadius: 1,
              }} />
            ))}
            <div style={{
              position: "absolute", top: "22%", left: "50%",
              transform: "translateX(-50%)",
              width: 5, height: 5, borderRadius: "50%",
              background: "#000", boxShadow: "0 0 0 1px rgba(255,255,255,0.14)",
            }} />
          </div>
          {/* back */}
          <div style={{
            position: "absolute", width: SW, height: SH_BOT, top: 0, left: 0,
            transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
            borderRadius: "0 0 16px 16px",
            background: "#181818",
          }} />
          {/* right/left edges */}
          {([-1, 1] as const).map((dir) => (
            <div key={dir} style={{
              position: "absolute", width: D, height: SH_BOT,
              top: 0, left: (SW - D) / 2,
              transform: `rotateY(${dir * 90}deg) translateZ(${SW / 2}px)`,
              background: ey,
            }} />
          ))}
          {/* bottom */}
          <div style={{
            position: "absolute", width: SW, height: D,
            top: (SH_BOT - D) / 2, left: 0,
            transform: `rotateX(90deg) translateZ(${SH_BOT / 2}px)`,
            background: ex,
            borderRadius: "0 0 8px 8px",
          }} />
        </div>
      </div>

      {/* Outer glow (2D, under the device) */}
      <div style={{
        marginTop: 20, fontSize: "0.46rem", letterSpacing: "0.28em",
        color: "rgba(255,255,255,0.2)",
        fontFamily: "var(--font-space-mono), monospace",
      }}>
        DRAG TO ROTATE
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE SCREEN CONTENT
   ═══════════════════════════════════════════════════════════════════════════════ */
function PhoneScreenContent({
  showTime, timeDisplay, timePeriod, color,
}: { showTime: boolean; timeDisplay: string; timePeriod: string; color: Color }) {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: color.bg,
      position: "relative", overflow: "hidden",
      transition: "background 0.35s ease, box-shadow 0.35s ease",
      boxShadow: `inset 0 0 80px ${color.glow}`,
      cursor: "pointer", userSelect: "none",
    }}>
      <Scanlines opacity={0.03} />

      {/* Status bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 38,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 20px", zIndex: 5,
      }}>
        <span style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontSize: "0.46rem", letterSpacing: "0.1em",
          color: color.text, opacity: 0.5,
        }}>NOW MODE</span>
        <div style={{ display: "flex", gap: 4, alignItems: "center", opacity: 0.5 }}>
          {[3, 5, 7].map((h) => (
            <div key={h} style={{ width: 3, height: h, background: color.text, borderRadius: 1 }} />
          ))}
          <div style={{
            marginLeft: 4, width: 16, height: 8,
            border: `1.5px solid ${color.text}`, borderRadius: 2, position: "relative",
          }}>
            <div style={{
              position: "absolute", inset: 1.5, right: 3,
              background: color.text, borderRadius: 1,
            }} />
          </div>
        </div>
      </div>

      {showTime ? (
        <div key="time" className="screen-content" style={{
          position: "absolute", top: "28%", left: 0, right: 0,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 4,
        }}>
          <span style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontWeight: 700, color: color.text,
            fontSize: "clamp(2.6rem, 11vw, 3.8rem)",
            letterSpacing: "-0.04em", lineHeight: 1,
            textShadow: `0 4px 24px ${color.glow}`,
          }}>{timeDisplay}</span>
          {timePeriod && (
            <span style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 400, color: color.text,
              fontSize: "0.7rem", letterSpacing: "0.3em", opacity: 0.6,
            }}>{timePeriod}</span>
          )}
          <div style={{
            marginTop: 12, fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem", letterSpacing: "0.22em",
            color: color.text, opacity: 0.4,
          }}>TAP FOR NOW</div>
        </div>
      ) : (
        <div key="now" className="screen-content" style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", zIndex: 4,
        }}>
          <span style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontWeight: 700, color: color.text,
            fontSize: "clamp(3rem, 13vw, 4.8rem)",
            letterSpacing: "-0.04em", lineHeight: 1,
            textShadow: `0 4px 28px ${color.glow}`,
            display: "block", textAlign: "center",
          }}>NOW</span>
          <span style={{
            marginTop: 16, fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem", letterSpacing: "0.3em",
            color: color.text, opacity: 0.38,
          }}>TAP TO SEE TIME</span>
        </div>
      )}

      {/* Home indicator */}
      <div style={{
        position: "absolute", bottom: 10, left: "50%",
        transform: "translateX(-50%)",
        width: 90, height: 4, borderRadius: 2,
        background: color.text, opacity: 0.3, zIndex: 5,
      }} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE MOCKUP — true CSS 3-D box
   ═══════════════════════════════════════════════════════════════════════════════ */
function PhoneMockup({
  showTime, onToggle, color, timeDisplay, timePeriod,
}: {
  showTime: boolean; onToggle: () => void; color: Color;
  timeDisplay: string; timePeriod: string;
}) {
  const W = 200, H = 432, D = 10;
  const RADIUS = 38, BEZEL = 8;

  const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(60, 75);
  const handleUp = () => { onPointerUp(); if (!wasDrag()) onToggle(); };

  const sbg   = silverBg(rot.y, rot.x);
  const sbgDk = silverBg(rot.y, rot.x, true);
  const ey    = edgeBg(rot.y, rot.x, "y");
  const ex    = edgeBg(rot.y, rot.x, "x");

  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        perspective: "1200px",
        cursor: "grab", userSelect: "none", touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={handleUp}
    >
      <div
        style={{
          position: "relative", width: W, height: H,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.06s linear",
        }}
      >
        {/* ── Front face ── */}
        <div style={{
          position: "absolute", width: W, height: H, top: 0, left: 0,
          transform: `translateZ(${D / 2}px)`,
          borderRadius: RADIUS,
          background: sbg,
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.22),
            inset 0 1px 0 rgba(255,255,255,0.3),
            inset 0 -1px 0 rgba(0,0,0,0.15)
          `,
          overflow: "hidden",
        }}>
          {/* Screen area */}
          <div style={{
            position: "absolute",
            top: BEZEL, left: BEZEL, right: BEZEL, bottom: BEZEL,
            borderRadius: RADIUS - BEZEL,
            background: "#050505",
            overflow: "hidden",
            boxShadow: "inset 0 2px 14px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.7)",
          }}>
            <PhoneScreenContent
              showTime={showTime} timeDisplay={timeDisplay}
              timePeriod={timePeriod} color={color}
            />
            {/* Punch-hole camera */}
            <div style={{
              position: "absolute", top: 13, left: "50%",
              transform: "translateX(-50%)",
              width: 11, height: 11, borderRadius: "50%",
              background: "#000", zIndex: 10,
              boxShadow: "0 0 0 2px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.06)",
            }} />
          </div>
          {/* Front glass bevel */}
          <div style={{
            position: "absolute", inset: 0, borderRadius: RADIUS,
            background: "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          {/* Glass glare */}
          <div style={{
            position: "absolute",
            top: BEZEL, left: BEZEL, right: BEZEL, height: "30%",
            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
            background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* ── Back face — silver holographic ── */}
        <div style={{
          position: "absolute", width: W, height: H, top: 0, left: 0,
          transform: `translateZ(${-D / 2}px) rotateY(180deg)`,
          borderRadius: RADIUS,
          background: sbgDk,
          overflow: "hidden",
        }}>
          {/* Camera module */}
          <div style={{
            position: "absolute", top: 22, left: 20,
            width: 52, height: 52,
            borderRadius: 14,
            background: "rgba(0,0,0,0.55)",
            boxShadow: "0 0 0 1.5px rgba(255,255,255,0.12), inset 0 2px 8px rgba(0,0,0,0.6)",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "center",
            gap: 4, padding: 8,
          }}>
            {[18, 14, 14].map((s, i) => (
              <div key={i} style={{
                width: s, height: s, borderRadius: "50%",
                background: "rgba(20,20,20,0.9)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.1), inset 0 1px 2px rgba(255,255,255,0.15)",
              }} />
            ))}
          </div>
          {/* Apple-style logo placeholder */}
          <div style={{
            position: "absolute", bottom: "15%", left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem", letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.35)", whiteSpace: "nowrap",
          }}>NOW MODE</div>
        </div>

        {/* ── Right side — power button ── */}
        <div style={{
          position: "absolute", width: D, height: H,
          top: 0, left: (W - D) / 2,
          transform: `rotateY(90deg) translateZ(${W / 2}px)`,
          background: ey,
        }}>
          {/* Power button */}
          <div style={{
            position: "absolute",
            top: Math.round(H * 0.29), left: 0, right: 0, height: 58,
            background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `,
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
          }} />
        </div>

        {/* ── Left side — volume buttons + mute ── */}
        <div style={{
          position: "absolute", width: D, height: H,
          top: 0, left: (W - D) / 2,
          transform: `rotateY(-90deg) translateZ(${W / 2}px)`,
          background: ey,
        }}>
          {/* Mute switch */}
          <div style={{
            position: "absolute",
            top: Math.round(H * 0.18), left: 0, right: 0, height: 22,
            background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `,
          }} />
          {/* Volume up */}
          <div style={{
            position: "absolute",
            top: Math.round(H * 0.26), left: 0, right: 0, height: 44,
            background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `,
          }} />
          {/* Volume down */}
          <div style={{
            position: "absolute",
            top: Math.round(H * 0.37), left: 0, right: 0, height: 44,
            background: `
              linear-gradient(${80 + rot.y * 5}deg,
                rgba(255,80,70,0.2) 0%, rgba(30,120,255,0.2) 100%),
              linear-gradient(90deg, #606060 0%, #e0e0e0 50%, #606060 100%)
            `,
          }} />
        </div>

        {/* ── Top edge — speaker + mic ── */}
        <div style={{
          position: "absolute", width: W, height: D,
          top: (H - D) / 2, left: 0,
          transform: `rotateX(-90deg) translateZ(${H / 2}px)`,
          background: ex,
        }}>
          <div style={{
            position: "absolute", top: "20%", bottom: "20%",
            left: "35%", right: "35%",
            borderRadius: 2,
            background: "rgba(0,0,0,0.3)",
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
          }} />
        </div>

        {/* ── Bottom edge — USB-C + speaker grille ── */}
        <div style={{
          position: "absolute", width: W, height: D,
          top: (H - D) / 2, left: 0,
          transform: `rotateX(90deg) translateZ(${H / 2}px)`,
          background: ex,
        }}>
          {/* USB-C */}
          <div style={{
            position: "absolute", top: "15%", bottom: "15%",
            left: "40%", right: "40%",
            borderRadius: 3,
            background: "rgba(0,0,0,0.45)",
            boxShadow: "inset 0 1px 3px rgba(0,0,0,0.6)",
          }} />
          {/* Speaker dots left */}
          {[-28, -20, -12].map((x) => (
            <div key={x} style={{
              position: "absolute", top: "30%",
              left: `calc(50% + ${x}px - 2px)`,
              width: 3, height: 3, borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
            }} />
          ))}
          {/* Speaker dots right */}
          {[12, 20, 28].map((x) => (
            <div key={x} style={{
              position: "absolute", top: "30%",
              left: `calc(50% + ${x}px - 2px)`,
              width: 3, height: 3, borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
            }} />
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 20, fontSize: "0.46rem", letterSpacing: "0.28em",
        color: "rgba(255,255,255,0.2)",
        fontFamily: "var(--font-space-mono), monospace",
      }}>
        DRAG TO ROTATE
      </div>
    </div>
  );
}

/* ─── Format toggle ──────────────────────────────────────────────────────────── */
function FormatToggle({
  use12h, onChange, accentColor,
}: { use12h: boolean; onChange: (v: boolean) => void; accentColor: string }) {
  return (
    <div style={{
      display: "inline-flex",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: 3, overflow: "hidden",
    }}>
      {([false, true] as const).map((is12) => (
        <button
          key={String(is12)}
          onClick={() => onChange(is12)}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.52rem", letterSpacing: "0.18em",
            padding: "5px 12px", border: "none", cursor: "pointer",
            background: use12h === is12 ? accentColor : "transparent",
            color: use12h === is12 ? "#000" : "rgba(255,255,255,0.4)",
            transition: "background 0.2s ease, color 0.2s ease",
          }}
        >
          {is12 ? "12H" : "24H"}
        </button>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   DEMO PAGE
   ═══════════════════════════════════════════════════════════════════════════════ */
export default function DemoPage() {
  const [watchShowTime, setWatchShowTime] = useState(false);
  const [phoneShowTime, setPhoneShowTime] = useState(false);
  const [activeColor, setActiveColor]     = useState(0);
  const [use12h, setUse12h]               = useState(false);
  const { display: timeDisplay, period: timePeriod } = useCurrentTime(use12h);
  const color = COLORS[activeColor];

  const toggleWatch = useCallback(() => setWatchShowTime((v) => !v), []);
  const togglePhone = useCallback(() => setPhoneShowTime((v) => !v), []);

  return (
    <div
      className={spaceMono.variable}
      style={{
        fontFamily: "var(--font-space-mono), monospace",
        background: "#080808",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* ── Header ── */}
      <header style={{
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "16px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 50,
        backdropFilter: "blur(16px)",
        background: "rgba(8,8,8,0.88)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1rem", fontWeight: 700, color: "#FFD400", letterSpacing: "-0.02em" }}>
            NOW
          </span>
          <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>MODE</span>
          <span style={{
            marginLeft: 10, fontSize: "0.5rem", letterSpacing: "0.26em",
            color: "rgba(255,255,255,0.3)",
            border: "1px solid rgba(255,255,255,0.12)", padding: "2px 8px",
          }}>DEMO</span>
        </div>
        <Link href="/" style={{
          fontSize: "0.55rem", letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)", textDecoration: "none",
          borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: 1,
        }}>
          ← BACK TO SITE
        </Link>
      </header>

      {/* ── Hero ── */}
      <section style={{
        textAlign: "center", padding: "48px 24px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <p style={{
          fontSize: "0.55rem", letterSpacing: "0.38em",
          color: "rgba(255,255,255,0.3)", marginBottom: 12,
        }}>INTERACTIVE PREVIEW</p>
        <h1 style={{
          fontSize: "clamp(1.7rem, 5vw, 3rem)", fontWeight: 700,
          letterSpacing: "-0.04em", margin: 0, lineHeight: 1.05,
        }}>TAP THE SCREEN.</h1>
        <p style={{
          marginTop: 12, fontSize: "0.7rem", letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.35)",
        }}>DRAG DEVICES TO ROTATE · CHOOSE COLOR BELOW</p>
      </section>

      {/* ── Controls bar ── */}
      <section style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 20, padding: "20px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {COLORS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveColor(i)}
              title={c.label}
              className={`color-dot${activeColor === i ? " active" : ""}`}
              style={{
                width: 28, height: 28, borderRadius: "50%",
                background: c.bg, border: "none", outline: "none",
                cursor: "pointer", position: "relative", flexShrink: 0,
              }}
            >
              {activeColor === i && (
                <span style={{
                  position: "absolute", inset: -4, borderRadius: "50%",
                  border: `2px solid ${c.bg}`, opacity: 0.55, pointerEvents: "none",
                }} />
              )}
            </button>
          ))}
          <span style={{
            fontSize: "0.55rem", letterSpacing: "0.24em",
            color: color.bg, transition: "color 0.3s ease", minWidth: 44,
          }}>{color.label}</span>
        </div>

        <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontSize: "0.5rem", letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.3)",
          }}>FORMAT</span>
          <FormatToggle use12h={use12h} onChange={setUse12h} accentColor={color.bg} />
        </div>
      </section>

      {/* ── Mockups ── */}
      <section style={{
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        gap: "clamp(32px, 6vw, 80px)",
        padding: "64px 32px 72px",
        flexWrap: "wrap",
      }}>
        {/* Watch column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <p style={{
            fontSize: "0.5rem", letterSpacing: "0.34em",
            color: "rgba(255,255,255,0.25)", marginBottom: 4,
          }}>WATCH</p>
          <WatchMockup
            showTime={watchShowTime} onToggle={toggleWatch}
            color={color} timeDisplay={timeDisplay} timePeriod={timePeriod}
          />
          <div style={{
            width: 40, height: 2, background: color.bg,
            transition: "background 0.3s ease", marginTop: -4,
          }} />
        </div>

        {/* Divider */}
        <div style={{
          width: 1, height: 200,
          background: "rgba(255,255,255,0.07)",
          alignSelf: "center",
        }} />

        {/* Phone column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <p style={{
            fontSize: "0.5rem", letterSpacing: "0.34em",
            color: "rgba(255,255,255,0.25)", marginBottom: 4,
          }}>MOBILE</p>
          <PhoneMockup
            showTime={phoneShowTime} onToggle={togglePhone}
            color={color} timeDisplay={timeDisplay} timePeriod={timePeriod}
          />
          <div style={{
            width: 40, height: 2, background: color.bg,
            transition: "background 0.3s ease", marginTop: -4,
          }} />
        </div>
      </section>

      {/* ── Info strip ── */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "24px 24px",
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "clamp(24px, 5vw, 60px)", flexWrap: "wrap",
      }}>
        {[
          ["TAP",    "Toggle NOW / time"],
          ["DRAG",   "Rotate device in 3D"],
          ["COLOR",  "5 screen themes"],
          ["FORMAT", "12H or 24H clock"],
        ].map(([label, desc]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p style={{
              fontSize: "0.5rem", letterSpacing: "0.3em",
              color: color.bg, marginBottom: 4, transition: "color 0.3s ease",
            }}>{label}</p>
            <p style={{
              fontSize: "0.58rem", color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em",
            }}>{desc}</p>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "18px 28px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 10,
      }}>
        <p style={{ fontSize: "0.48rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.18)" }}>
          NOW MODE — TIME BY CHOICE
        </p>
        <p style={{ fontSize: "0.48rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.12)" }}>
          © 2026
        </p>
      </footer>
    </div>
  );
}
