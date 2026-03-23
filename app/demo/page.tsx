"use client";

import { useState, useEffect, useCallback } from "react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

const COLORS = [
  { id: "solar",  bg: "#FFD400", text: "#000000", label: "SOLAR",  glow: "rgba(255,212,0,0.55)"    },
  { id: "pulse",  bg: "#FF2D87", text: "#000000", label: "PULSE",  glow: "rgba(255,45,135,0.55)"   },
  { id: "drift",  bg: "#00E5D4", text: "#000000", label: "DRIFT",  glow: "rgba(0,229,212,0.55)"    },
  { id: "void",   bg: "#B44FFF", text: "#ffffff", label: "VOID",   glow: "rgba(180,79,255,0.55)"   },
  { id: "flux",   bg: "#00FF8C", text: "#000000", label: "FLUX",   glow: "rgba(0,255,140,0.55)"    },
];

function useCurrentTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ─── Watch screen ─────────────────────────────────────────────────────────── */
function WatchScreen({
  showTime,
  onToggle,
  color,
  currentTime,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: (typeof COLORS)[number];
  currentTime: string;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
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
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* subtle scanline overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      <span
        key={showTime ? "time" : "now"}
        className="screen-content"
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontWeight: 700,
          color: color.text,
          fontSize: showTime ? "clamp(1.4rem, 5vw, 1.75rem)" : "clamp(1.6rem, 6vw, 2.1rem)",
          letterSpacing: showTime ? "0.06em" : "0.18em",
          lineHeight: 1,
          zIndex: 1,
          textShadow: `0 2px 12px ${color.glow}`,
        }}
      >
        {showTime ? currentTime : "NOW"}
      </span>

      {/* tap hint */}
      {!showTime && (
        <span
          style={{
            position: "absolute",
            bottom: 10,
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.45rem",
            letterSpacing: "0.3em",
            color: color.text,
            opacity: 0.45,
            textTransform: "uppercase",
          }}
        >
          TAP
        </span>
      )}
    </div>
  );
}

/* ─── Watch Mockup ─────────────────────────────────────────────────────────── */
function WatchMockup({
  showTime,
  onToggle,
  color,
  currentTime,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: (typeof COLORS)[number];
  currentTime: string;
}) {
  const W = 168;
  const H = 200;
  const RADIUS = 42;
  const BEZEL = 8;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Digital crown */}
      <div
        style={{
          position: "absolute",
          right: -8,
          top: "28%",
          width: 8,
          height: 26,
          background: "linear-gradient(180deg, #888 0%, #555 50%, #888 100%)",
          borderRadius: "0 3px 3px 0",
          boxShadow: "2px 0 5px rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />
      {/* Side button */}
      <div
        style={{
          position: "absolute",
          right: -8,
          top: "62%",
          width: 8,
          height: 16,
          background: "linear-gradient(180deg, #888 0%, #555 50%, #888 100%)",
          borderRadius: "0 3px 3px 0",
          boxShadow: "2px 0 5px rgba(0,0,0,0.6)",
          zIndex: 0,
        }}
      />

      {/* Outer holographic case */}
      <div
        className="holographic-case shimmer-sweep"
        style={{
          width: W,
          height: H,
          borderRadius: RADIUS,
          padding: BEZEL,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Inner screen bezel (dark) */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: RADIUS - BEZEL,
            background: "#0a0a0a",
            overflow: "hidden",
            boxShadow: "inset 0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          <WatchScreen
            showTime={showTime}
            onToggle={onToggle}
            color={color}
            currentTime={currentTime}
          />
        </div>

        {/* Glass reflection */}
        <div
          style={{
            position: "absolute",
            top: BEZEL,
            left: BEZEL,
            right: BEZEL,
            height: "42%",
            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 60% 60%`,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Phone screen ─────────────────────────────────────────────────────────── */
function PhoneScreen({
  showTime,
  onToggle,
  color,
  currentTime,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: (typeof COLORS)[number];
  currentTime: string;
}) {
  return (
    <div
      onClick={onToggle}
      style={{
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
        boxShadow: `inset 0 0 60px ${color.glow}`,
      }}
    >
      {/* scanlines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.03) 4px, rgba(0,0,0,0.03) 5px)",
          pointerEvents: "none",
        }}
      />

      {/* Status bar area */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem",
            color: color.text,
            letterSpacing: "0.08em",
          }}
        >
          NOW MODE
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.5rem",
            color: color.text,
            letterSpacing: "0.08em",
          }}
        >
          ▮▮▮
        </span>
      </div>

      <span
        key={showTime ? "time" : "now"}
        className="screen-content"
        style={{
          fontFamily: "var(--font-space-mono), monospace",
          fontWeight: 700,
          color: color.text,
          fontSize: showTime ? "clamp(2.2rem, 9vw, 3.2rem)" : "clamp(2.8rem, 11vw, 4.2rem)",
          letterSpacing: showTime ? "0.06em" : "0.22em",
          lineHeight: 1,
          zIndex: 1,
          textShadow: `0 4px 20px ${color.glow}`,
        }}
      >
        {showTime ? currentTime : "NOW"}
      </span>

      {!showTime && (
        <span
          style={{
            position: "absolute",
            bottom: 48,
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: color.text,
            opacity: 0.4,
          }}
        >
          TAP TO SEE TIME
        </span>
      )}

      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          width: 80,
          height: 4,
          borderRadius: 2,
          background: color.text,
          opacity: 0.35,
        }}
      />
    </div>
  );
}

/* ─── Phone Mockup ─────────────────────────────────────────────────────────── */
function PhoneMockup({
  showTime,
  onToggle,
  color,
  currentTime,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: (typeof COLORS)[number];
  currentTime: string;
}) {
  const W = 180;
  const H = 370;
  const RADIUS = 32;
  const BEZEL = 7;

  return (
    <div style={{ position: "relative" }}>
      {/* Side buttons */}
      <div
        style={{
          position: "absolute",
          left: -7,
          top: 72,
          width: 6,
          height: 22,
          background: "#555",
          borderRadius: "3px 0 0 3px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -7,
          top: 104,
          width: 6,
          height: 36,
          background: "#555",
          borderRadius: "3px 0 0 3px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -7,
          top: 150,
          width: 6,
          height: 36,
          background: "#555",
          borderRadius: "3px 0 0 3px",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -7,
          top: 110,
          width: 6,
          height: 52,
          background: "#555",
          borderRadius: "0 3px 3px 0",
        }}
      />

      {/* Outer shell */}
      <div
        style={{
          width: W,
          height: H,
          borderRadius: RADIUS,
          background: "linear-gradient(160deg, #2a2a2a 0%, #111 60%, #1e1e1e 100%)",
          padding: BEZEL,
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.1), 0 12px 48px rgba(0,0,0,0.8), 0 3px 12px rgba(0,0,0,0.6)",
          position: "relative",
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: RADIUS - BEZEL,
            overflow: "hidden",
            background: "#0a0a0a",
            position: "relative",
          }}
        >
          <PhoneScreen
            showTime={showTime}
            onToggle={onToggle}
            color={color}
            currentTime={currentTime}
          />

          {/* Punch-hole camera */}
          <div
            style={{
              position: "absolute",
              top: 14,
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#000",
              zIndex: 10,
              boxShadow: "0 0 0 1.5px #1a1a1a",
            }}
          />
        </div>

        {/* Glass highlight */}
        <div
          style={{
            position: "absolute",
            top: BEZEL,
            left: BEZEL,
            right: BEZEL,
            height: "35%",
            borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Main Page ────────────────────────────────────────────────────────────── */
export default function DemoPage() {
  const [watchShowTime, setWatchShowTime] = useState(false);
  const [phoneShowTime, setPhoneShowTime] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const currentTime = useCurrentTime();
  const color = COLORS[activeColor];

  const toggleWatch = useCallback(() => setWatchShowTime((v) => !v), []);
  const togglePhone = useCallback(() => setPhoneShowTime((v) => !v), []);

  return (
    <div
      className={`${spaceMono.variable}`}
      style={{
        fontFamily: "var(--font-space-mono), monospace",
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      {/* ── Top bar ── */}
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          background: "rgba(10,10,10,0.85)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFD400", letterSpacing: "0.12em" }}>
            NOW
          </span>
          <span style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.12em" }}>MODE</span>
          <span
            style={{
              marginLeft: 10,
              fontSize: "0.55rem",
              letterSpacing: "0.28em",
              color: "rgba(255,255,255,0.35)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "2px 7px",
            }}
          >
            DEMO
          </span>
        </div>
        <Link
          href="/"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            paddingBottom: 1,
          }}
        >
          ← BACK TO SITE
        </Link>
      </header>

      {/* ── Hero label ── */}
      <section
        style={{
          textAlign: "center",
          padding: "52px 24px 36px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 14,
          }}
        >
          INTERACTIVE PREVIEW
        </p>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "0.06em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          TAP THE SCREEN.
        </h1>
        <p
          style={{
            marginTop: 14,
            fontSize: "0.75rem",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          CHOOSE YOUR COLOR BELOW
        </p>
      </section>

      {/* ── Color picker ── */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: "28px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap",
        }}
      >
        {COLORS.map((c, i) => (
          <button
            key={c.id}
            onClick={() => setActiveColor(i)}
            className={`color-dot${activeColor === i ? " active" : ""}`}
            title={c.label}
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: c.bg,
              border: "none",
              outline: "none",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {activeColor === i && (
              <span
                style={{
                  position: "absolute",
                  inset: -4,
                  borderRadius: "50%",
                  border: `2px solid ${c.bg}`,
                  opacity: 0.6,
                  pointerEvents: "none",
                }}
              />
            )}
          </button>
        ))}
        <span
          style={{
            marginLeft: 8,
            fontSize: "0.6rem",
            letterSpacing: "0.24em",
            color: color.bg,
            transition: "color 0.3s ease",
          }}
        >
          {color.label}
        </span>
      </section>

      {/* ── Mockups ── */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(40px, 8vw, 100px)",
          padding: "64px 24px 80px",
          flexWrap: "wrap",
        }}
      >
        {/* Watch column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <WatchMockup
            showTime={watchShowTime}
            onToggle={toggleWatch}
            color={color}
            currentTime={currentTime}
          />
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.32em",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 6,
              }}
            >
              WATCH
            </p>
            <div
              style={{
                width: 32,
                height: 2,
                background: color.bg,
                margin: "0 auto",
                transition: "background 0.3s ease",
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 1,
            height: 120,
            background: "rgba(255,255,255,0.08)",
            display: "block",
          }}
          className="hidden sm:block"
        />

        {/* Phone column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
          }}
        >
          <PhoneMockup
            showTime={phoneShowTime}
            onToggle={togglePhone}
            color={color}
            currentTime={currentTime}
          />
          <div style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.32em",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 6,
              }}
            >
              MOBILE
            </p>
            <div
              style={{
                width: 32,
                height: 2,
                background: color.bg,
                margin: "0 auto",
                transition: "background 0.3s ease",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Instruction strip ── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {[
          ["TAP", "Toggle time / now"],
          ["COLOR", "Pick a screen color"],
          ["LIVE", "Clock updates every second"],
        ].map(([label, desc]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.3em",
                color: color.bg,
                marginBottom: 4,
                transition: "color 0.3s ease",
              }}
            >
              {label}
            </p>
            <p
              style={{
                fontSize: "0.6rem",
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.12em",
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </section>

      {/* ── Footer ── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.2)" }}>
          NOW MODE — TIME BY CHOICE
        </p>
        <p style={{ fontSize: "0.5rem", letterSpacing: "0.22em", color: "rgba(255,255,255,0.15)" }}>
          © 2026
        </p>
      </footer>
    </div>
  );
}
