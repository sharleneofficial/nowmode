"use client";

import { useState, useEffect } from "react";

/* ─── Colour palette ─────────────────────────────────────────────────────────── */
export const COLORS = [
  { id: "solar", bg: "#FFD400", text: "#000000", label: "SOLAR", glow: "rgba(255,212,0,0.6)"  },
  { id: "pulse", bg: "#FF2D87", text: "#000000", label: "PULSE", glow: "rgba(255,45,135,0.6)" },
  { id: "drift", bg: "#00E5D4", text: "#000000", label: "DRIFT", glow: "rgba(0,229,212,0.6)"  },
  { id: "void",  bg: "#B44FFF", text: "#ffffff", label: "VOID",  glow: "rgba(180,79,255,0.6)" },
  { id: "flux",  bg: "#00FF8C", text: "#000000", label: "FLUX",  glow: "rgba(0,255,140,0.6)"  },
];
export type Color = (typeof COLORS)[number];

/* ─── Clock hook ─────────────────────────────────────────────────────────────── */
export function useCurrentTime(use12h: boolean) {
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

/* ─── Silver holographic material ───────────────────────────────────────────── */
export function silverBg(dark = false) {
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
    `  ${md} 63%, ${hi} 79%, ${lo} 100%)`,
  ].join(" ");
}

/* ─── Scanlines ──────────────────────────────────────────────────────────────── */
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
        <div key="time" className="screen-content" style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 6, zIndex: 3, width: "100%", textAlign: "center",
        }}>
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontWeight: 700, color: color.text,
            fontSize: "3.4rem",
            letterSpacing: "-0.03em", lineHeight: 1,
            textShadow: `0 2px 20px ${color.glow}`,
            display: "block",
          }}>
            {timeDisplay}
          </span>
          {timePeriod && (
            <span style={{
              fontFamily: '"Space Mono", monospace',
              fontWeight: 400, color: color.text,
              fontSize: "0.9rem", letterSpacing: "0.22em", opacity: 0.6,
            }}>
              {timePeriod}
            </span>
          )}
        </div>
      ) : (
        <div key="now" className="screen-content" style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 8, zIndex: 3, width: "100%",
        }}>
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontWeight: 700, color: color.text,
            fontSize: "5.2rem",
            letterSpacing: "-0.04em", lineHeight: 1,
            display: "block", textAlign: "center",
            textShadow: `0 3px 24px ${color.glow}`,
          }}>
            NOW
          </span>
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontSize: "0.42rem", letterSpacing: "0.32em",
            color: color.text, opacity: 0.38,
          }}>
            TAP
          </span>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   WATCH MOCKUP — flat, holographic silver bezel, tap to toggle
   ═══════════════════════════════════════════════════════════════════════════════ */
export function WatchMockup({
  showTime, onToggle, color, timeDisplay, timePeriod,
}: {
  showTime: boolean; onToggle: () => void; color: Color;
  timeDisplay: string; timePeriod: string;
}) {
  const W = 210, H = 256, RADIUS = 52, BEZEL = 12;
  const SW = 152, SH_TOP = 80, SH_BOT = 100;

  return (
    <div
      style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        cursor: "pointer", userSelect: "none",
      }}
      onClick={onToggle}
    >
      {/* Top strap */}
      <div style={{
        width: SW, height: SH_TOP,
        background: "linear-gradient(180deg, #1a1a1a 0%, #2e2e2e 100%)",
        borderRadius: "10px 10px 0 0",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
        position: "relative", overflow: "hidden",
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

      {/* Watch case */}
      <div style={{ position: "relative" }}>
        {/* Digital crown */}
        <div style={{
          position: "absolute", right: -10, top: "28%",
          width: 10, height: 28,
          background: "linear-gradient(180deg, #b0b0b0 0%, #d8d8d8 40%, #eee 50%, #d8d8d8 60%, #909090 100%)",
          borderRadius: "0 4px 4px 0",
          boxShadow: "2px 0 6px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.2)",
        }}>
          {[0.25, 0.5, 0.75].map((p) => (
            <div key={p} style={{
              position: "absolute", left: 2, right: 2,
              top: `${p * 100}%`, height: 1,
              background: "rgba(0,0,0,0.2)",
            }} />
          ))}
        </div>

        {/* Side button */}
        <div style={{
          position: "absolute", right: -10, top: "64%",
          width: 10, height: 18,
          background: "linear-gradient(180deg, #999 0%, #ccc 50%, #999 100%)",
          borderRadius: "0 3px 3px 0",
          boxShadow: "2px 0 4px rgba(0,0,0,0.45)",
        }} />

        {/* Outer case — holographic silver */}
        <div style={{
          width: W, height: H, borderRadius: RADIUS,
          padding: BEZEL,
          background: silverBg(),
          boxShadow: `
            0 0 0 1px rgba(255,255,255,0.25),
            0 20px 56px rgba(0,0,0,0.45),
            inset 0 1px 0 rgba(255,255,255,0.35),
            inset 0 -1px 0 rgba(0,0,0,0.18)
          `,
          position: "relative", overflow: "hidden",
        }}>
          {/* Animated shimmer sweep — holographic effect */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.32) 50%, transparent 75%)",
            animation: "shimmer-sweep 4s ease-in-out infinite",
            borderRadius: RADIUS, pointerEvents: "none", zIndex: 5,
          }} />
          <div style={{
            position: "absolute", inset: 0, borderRadius: RADIUS,
            background: "linear-gradient(145deg, rgba(255,255,255,0.22) 0%, transparent 55%)",
            pointerEvents: "none",
          }} />
          {/* Screen */}
          <div style={{
            width: "100%", height: "100%",
            borderRadius: RADIUS - BEZEL, overflow: "hidden",
            background: "#060606",
            boxShadow: "inset 0 2px 12px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.6)",
            position: "relative", zIndex: 1,
          }}>
            <WatchScreenContent
              showTime={showTime} timeDisplay={timeDisplay}
              timePeriod={timePeriod} color={color}
            />
          </div>
          {/* Glass glare */}
          <div style={{
            position: "absolute",
            top: BEZEL, left: BEZEL, right: BEZEL, height: "38%",
            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
            background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)",
            pointerEvents: "none", zIndex: 4,
          }} />
        </div>
      </div>

      {/* Bottom strap */}
      <div style={{
        width: SW, height: SH_BOT,
        background: "linear-gradient(180deg, #2e2e2e 0%, #1a1a1a 100%)",
        borderRadius: "0 0 16px 16px",
        position: "relative", overflow: "hidden",
      }}>
        {[0.3, 0.45, 0.6].map((p) => (
          <div key={p} style={{
            position: "absolute", left: "18%", right: "18%",
            top: `${p * 100}%`, height: 2,
            background: "rgba(0,0,0,0.35)", borderRadius: 1,
          }} />
        ))}
        <div style={{
          position: "absolute", top: "22%", left: "50%",
          transform: "translateX(-50%)",
          width: 5, height: 5, borderRadius: "50%",
          background: "#000", boxShadow: "0 0 0 1px rgba(255,255,255,0.14)",
        }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   PHONE SCREEN — tap to toggle between NOW and live time
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
          fontFamily: '"Space Mono", monospace',
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

      <div style={{
        position: "absolute", top: "28%", left: 0, right: 0,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6, zIndex: 4,
      }}>
        <span style={{
          fontFamily: '"Space Mono", monospace',
          fontWeight: 700, color: color.text,
          fontSize: "3.8rem",
          letterSpacing: "-0.04em", lineHeight: 1,
          textShadow: `0 4px 24px ${color.glow}`,
        }}>
          {showTime ? timeDisplay : "NOW"}
        </span>
        {showTime && timePeriod && (
          <span style={{
            fontFamily: '"Space Mono", monospace',
            fontWeight: 400, color: color.text,
            fontSize: "0.7rem", letterSpacing: "0.3em", opacity: 0.6,
          }}>
            {timePeriod}
          </span>
        )}
        <div style={{
          marginTop: 12, fontFamily: '"Space Mono", monospace',
          fontSize: "0.5rem", letterSpacing: "0.22em",
          color: color.text, opacity: 0.4,
        }}>
          {showTime ? "TAP FOR NOW" : "TAP TO SEE TIME"}
        </div>
      </div>

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
   PHONE MOCKUP — flat, holographic silver frame, tap to toggle NOW ↔ time
   ═══════════════════════════════════════════════════════════════════════════════ */
export function PhoneMockup({
  showTime, onToggle, color, timeDisplay, timePeriod,
}: {
  showTime: boolean; onToggle: () => void; color: Color;
  timeDisplay: string; timePeriod: string;
}) {
  const W = 200, H = 432, RADIUS = 38, BEZEL = 8;

  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      {/* Left side buttons */}
      <div style={{
        position: "absolute", left: -9, top: 80, width: 8, height: 22,
        background: "linear-gradient(90deg, #555, #888, #555)",
        borderRadius: "4px 0 0 4px", boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
      }} />
      <div style={{
        position: "absolute", left: -9, top: 116, width: 8, height: 44,
        background: "linear-gradient(90deg, #555, #888, #555)",
        borderRadius: "4px 0 0 4px", boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
      }} />
      <div style={{
        position: "absolute", left: -9, top: 168, width: 8, height: 44,
        background: "linear-gradient(90deg, #555, #888, #555)",
        borderRadius: "4px 0 0 4px", boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
      }} />

      {/* Right power button */}
      <div style={{
        position: "absolute", right: -9, top: 130, width: 8, height: 56,
        background: "linear-gradient(270deg, #555, #888, #555)",
        borderRadius: "0 4px 4px 0", boxShadow: "2px 0 6px rgba(0,0,0,0.5)",
      }} />

      {/* Outer frame — dark holographic silver */}
      <div style={{
        width: W, height: H, borderRadius: RADIUS,
        padding: BEZEL,
        background: silverBg(true),
        boxShadow: `
          0 0 0 1px rgba(255,255,255,0.22),
          0 24px 64px rgba(0,0,0,0.55),
          inset 0 1px 0 rgba(255,255,255,0.3),
          inset 0 -1px 0 rgba(0,0,0,0.15)
        `,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%, rgba(180,79,255,0.12) 70%, transparent 100%)",
          borderRadius: RADIUS, pointerEvents: "none", zIndex: 5,
        }} />
        <div style={{
          position: "absolute", inset: 0, borderRadius: RADIUS,
          background: "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, transparent 55%)",
          pointerEvents: "none",
        }} />

        {/* Screen */}
        <div
          onClick={onToggle}
          style={{
            width: "100%", height: "100%",
            borderRadius: RADIUS - BEZEL, overflow: "hidden",
            background: "#050505",
            boxShadow: "inset 0 2px 14px rgba(0,0,0,0.95), 0 0 0 1px rgba(0,0,0,0.7)",
            position: "relative", zIndex: 1, cursor: "pointer",
          }}>
          <PhoneScreenContent
            showTime={showTime} timeDisplay={timeDisplay} timePeriod={timePeriod} color={color}
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

        {/* Glass glare */}
        <div style={{
          position: "absolute",
          top: BEZEL, left: BEZEL, right: BEZEL, height: "28%",
          borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
          background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
          pointerEvents: "none",
        }} />
      </div>
    </div>
  );
}

/* ─── Color picker ───────────────────────────────────────────────────────────── */
export function ColorPicker({
  activeColor, onChange,
}: { activeColor: number; onChange: (i: number) => void }) {
  const color = COLORS[activeColor];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      {COLORS.map((c, i) => (
        <button
          key={c.id}
          onClick={(e) => { e.stopPropagation(); onChange(i); }}
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
        fontFamily: '"Space Mono", monospace',
        fontSize: "0.55rem", letterSpacing: "0.24em",
        color: color.bg, transition: "color 0.3s ease", minWidth: 44,
      }}>
        {color.label}
      </span>
    </div>
  );
}

/* ─── Format toggle ──────────────────────────────────────────────────────────── */
export function FormatToggle({
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
          onClick={(e) => { e.stopPropagation(); onChange(is12); }}
          style={{
            fontFamily: '"Space Mono", monospace',
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
