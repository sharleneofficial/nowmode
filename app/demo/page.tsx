"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Space_Mono } from "next/font/google";
import Link from "next/link";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

/* ─── Colour palette ────────────────────────────────────────────────────────── */
const COLORS = [
  { id: "solar", bg: "#FFD400", text: "#000000", label: "SOLAR", glow: "rgba(255,212,0,0.6)"    },
  { id: "pulse", bg: "#FF2D87", text: "#000000", label: "PULSE", glow: "rgba(255,45,135,0.6)"   },
  { id: "drift", bg: "#00E5D4", text: "#000000", label: "DRIFT", glow: "rgba(0,229,212,0.6)"    },
  { id: "void",  bg: "#B44FFF", text: "#ffffff", label: "VOID",  glow: "rgba(180,79,255,0.6)"   },
  { id: "flux",  bg: "#00FF8C", text: "#000000", label: "FLUX",  glow: "rgba(0,255,140,0.6)"    },
];

type Color = (typeof COLORS)[number];

/* ─── Clock hook ────────────────────────────────────────────────────────────── */
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

/* ─── 3D rotation hook ──────────────────────────────────────────────────────── */
function useRotation(maxX = 38, maxY = 48) {
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const startRot = useRef({ x: 0, y: 0 });
  const moved = useRef(false);
  const rotStore = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragging.current = true;
    isDragging.current = false;
    moved.current = false;
    startPos.current = { x: e.clientX, y: e.clientY };
    startRot.current = { ...rotStore.current };
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      moved.current = true;
      isDragging.current = true;
    }
    const nx = Math.max(-maxX, Math.min(maxX, startRot.current.x - dy * 0.45));
    const ny = Math.max(-maxY, Math.min(maxY, startRot.current.y + dx * 0.45));
    rotStore.current = { x: nx, y: ny };
    setRot({ x: nx, y: ny });
  }, [maxX, maxY]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  const wasDrag = useCallback(() => moved.current, []);
  const currentlyDragging = useCallback(() => isDragging.current, []);

  const reset = useCallback(() => {
    rotStore.current = { x: 0, y: 0 };
    setRot({ x: 0, y: 0 });
  }, []);

  return { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag, currentlyDragging, reset };
}

/* ─── Holographic gradient helper ──────────────────────────────────────────── */
function holoGradient(rotY: number, rotX: number, angle = 125, opacity = 1) {
  const a = angle + rotY * 1.2;
  const px = 50 + rotY * 1.4;
  const py = 50 + rotX * 1.1;
  return {
    background: `linear-gradient(${a}deg,
      #ff007a, #ff6b00, #ffe200, #00e5d4, #0080ff, #b44fff, #ff007a)`,
    backgroundSize: "360% 360%",
    backgroundPosition: `${px}% ${py}%`,
    opacity,
  };
}

/* ─── Scanline overlay ──────────────────────────────────────────────────────── */
function Scanlines({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `repeating-linear-gradient(0deg,
          transparent, transparent 3px,
          rgba(0,0,0,${opacity}) 3px, rgba(0,0,0,${opacity}) 4px)`,
        pointerEvents: "none",
        borderRadius: "inherit",
        zIndex: 2,
      }}
    />
  );
}

/* ─── Watch screen content ──────────────────────────────────────────────────── */
function WatchScreenContent({
  showTime,
  timeDisplay,
  timePeriod,
  color,
}: {
  showTime: boolean;
  timeDisplay: string;
  timePeriod: string;
  color: Color;
}) {
  return (
    <div
      style={{
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
        userSelect: "none",
      }}
    >
      <Scanlines />

      {showTime ? (
        <div
          key="time"
          className="screen-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            zIndex: 3,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "clamp(1.5rem, 5vw, 1.9rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              textShadow: `0 2px 16px ${color.glow}`,
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
                fontSize: "0.52rem",
                letterSpacing: "0.22em",
                opacity: 0.65,
              }}
            >
              {timePeriod}
            </span>
          )}
        </div>
      ) : (
        <div key="now" className="screen-content" style={{ zIndex: 3, textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "clamp(1.7rem, 6vw, 2.2rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              display: "block",
              textShadow: `0 2px 20px ${color.glow}`,
            }}
          >
            NOW
          </span>
        </div>
      )}

      {/* Tap hint */}
      {!showTime && (
        <span
          style={{
            position: "absolute",
            bottom: 10,
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.42rem",
            letterSpacing: "0.32em",
            color: color.text,
            opacity: 0.4,
            zIndex: 3,
          }}
        >
          TAP
        </span>
      )}
    </div>
  );
}

/* ─── Watch Mockup ──────────────────────────────────────────────────────────── */
function WatchMockup({
  showTime,
  onToggle,
  color,
  timeDisplay,
  timePeriod,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: Color;
  timeDisplay: string;
  timePeriod: string;
}) {
  const W = 210;
  const H = 252;
  const RADIUS = 52;
  const BEZEL = 10;
  const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(32, 44);

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    onPointerUp();
    if (!wasDrag()) onToggle();
  };

  const holoStyle = {
    background: `linear-gradient(${125 + rot.y * 1.2}deg,
      #ff007a, #ff6b00, #ffe200, #00e5d4, #0080ff, #b44fff, #ff007a)`,
    backgroundSize: "360% 360%",
    backgroundPosition: `${50 + rot.y * 1.5}% ${50 + rot.x * 1.2}%`,
    animation: "holographic 5s ease infinite",
  };

  /* Strap dimensions */
  const strapW = W * 0.72;
  const strapH = 70;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        perspective: "900px",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.08s linear",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Top strap */}
        <div
          style={{
            width: strapW,
            height: strapH,
            background: `linear-gradient(180deg, #1a1a1a 0%, #2c2c2c 100%)`,
            borderRadius: "10px 10px 0 0",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 -2px 12px rgba(0,0,0,0.5)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Strap texture */}
          {[0.22, 0.44, 0.66].map((p) => (
            <div
              key={p}
              style={{
                position: "absolute",
                left: "12%",
                right: "12%",
                top: `${p * 100}%`,
                height: 1,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          ))}
          {/* Strap pin hole */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: "50%",
              transform: "translateX(-50%)",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "#000",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.12)",
            }}
          />
        </div>

        {/* Watch body */}
        <div style={{ position: "relative" }}>
          {/* Digital crown */}
          <div
            style={{
              position: "absolute",
              right: -10,
              top: "26%",
              width: 10,
              height: 30,
              background: "linear-gradient(180deg, #aaa 0%, #666 50%, #aaa 100%)",
              borderRadius: "0 4px 4px 0",
              boxShadow: "3px 0 8px rgba(0,0,0,0.5), inset -1px 0 2px rgba(255,255,255,0.15)",
              zIndex: 2,
            }}
          />
          {/* Side button */}
          <div
            style={{
              position: "absolute",
              right: -10,
              top: "62%",
              width: 10,
              height: 18,
              background: "linear-gradient(180deg, #999 0%, #555 50%, #999 100%)",
              borderRadius: "0 4px 4px 0",
              boxShadow: "3px 0 6px rgba(0,0,0,0.5)",
              zIndex: 2,
            }}
          />

          {/* Outer case — holographic */}
          <div
            style={{
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
              overflow: "hidden",
            }}
          >
            {/* Shimmer sweep */}
            <div
              className="shimmer-inner"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)",
                animation: "shimmer-sweep 3.5s ease-in-out infinite",
                borderRadius: RADIUS,
                pointerEvents: "none",
                zIndex: 5,
              }}
            />

            {/* Inner screen bezel */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: RADIUS - BEZEL,
                background: "#080808",
                overflow: "hidden",
                boxShadow: "inset 0 2px 10px rgba(0,0,0,0.9)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <WatchScreenContent
                showTime={showTime}
                timeDisplay={timeDisplay}
                timePeriod={timePeriod}
                color={color}
              />
            </div>

            {/* Glass glare */}
            <div
              style={{
                position: "absolute",
                top: BEZEL,
                left: BEZEL,
                right: BEZEL,
                height: "40%",
                borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 55% 55%`,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.03) 100%)",
                pointerEvents: "none",
                zIndex: 4,
              }}
            />
          </div>
        </div>

        {/* Bottom strap */}
        <div
          style={{
            width: strapW,
            height: strapH + 20,
            background: "linear-gradient(180deg, #2c2c2c 0%, #1a1a1a 100%)",
            borderRadius: "0 0 14px 14px",
            boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04), 0 8px 20px rgba(0,0,0,0.6)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Buckle / clasp bar */}
          <div
            style={{
              position: "absolute",
              top: 18,
              left: "22%",
              right: "22%",
              height: 3,
              background: "rgba(255,255,255,0.12)",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 26,
              left: "22%",
              right: "22%",
              height: 3,
              background: "rgba(255,255,255,0.07)",
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Drag hint */}
      <p
        style={{
          marginTop: 16,
          fontSize: "0.48rem",
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.22)",
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        DRAG TO ROTATE
      </p>
    </div>
  );
}

/* ─── Phone screen content ──────────────────────────────────────────────────── */
function PhoneScreenContent({
  showTime,
  timeDisplay,
  timePeriod,
  color,
}: {
  showTime: boolean;
  timeDisplay: string;
  timePeriod: string;
  color: Color;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: color.bg,
        position: "relative",
        overflow: "hidden",
        transition: "background 0.35s ease, box-shadow 0.35s ease",
        boxShadow: `inset 0 0 80px ${color.glow}`,
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Scanlines opacity={0.03} />

      {/* Status bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 22px",
          zIndex: 5,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.48rem",
            letterSpacing: "0.1em",
            color: color.text,
            opacity: 0.5,
          }}
        >
          NOW MODE
        </span>
        <div style={{ display: "flex", gap: 4, alignItems: "center", opacity: 0.5 }}>
          {[3, 5, 7].map((h) => (
            <div
              key={h}
              style={{
                width: 3,
                height: h,
                background: color.text,
                borderRadius: 1,
              }}
            />
          ))}
          <div
            style={{
              marginLeft: 4,
              width: 16,
              height: 8,
              border: `1.5px solid ${color.text}`,
              borderRadius: 2,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 1.5,
                right: 3,
                background: color.text,
                borderRadius: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: -4,
                transform: "translateY(-50%)",
                width: 2,
                height: 4,
                background: color.text,
                borderRadius: 1,
                opacity: 0.5,
              }}
            />
          </div>
        </div>
      </div>

      {showTime ? (
        /* Lock-screen time: positioned ~30% from top */
        <div
          key="time"
          className="screen-content"
          style={{
            position: "absolute",
            top: "28%",
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            zIndex: 4,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "clamp(2.6rem, 11vw, 3.8rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              textShadow: `0 4px 24px ${color.glow}`,
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
                fontSize: "0.7rem",
                letterSpacing: "0.3em",
                opacity: 0.6,
              }}
            >
              {timePeriod}
            </span>
          )}
          <div
            style={{
              marginTop: 12,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              color: color.text,
              opacity: 0.4,
            }}
          >
            TAP FOR NOW
          </div>
        </div>
      ) : (
        /* NOW — centered */
        <div
          key="now"
          className="screen-content"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontWeight: 700,
              color: color.text,
              fontSize: "clamp(3rem, 13vw, 4.8rem)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              textShadow: `0 4px 28px ${color.glow}`,
              display: "block",
              textAlign: "center",
            }}
          >
            NOW
          </span>
          <span
            style={{
              marginTop: 16,
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "0.5rem",
              letterSpacing: "0.3em",
              color: color.text,
              opacity: 0.38,
            }}
          >
            TAP TO SEE TIME
          </span>
        </div>
      )}

      {/* Home indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          transform: "translateX(-50%)",
          width: 90,
          height: 4,
          borderRadius: 2,
          background: color.text,
          opacity: 0.3,
          zIndex: 5,
        }}
      />
    </div>
  );
}

/* ─── Phone Mockup ──────────────────────────────────────────────────────────── */
function PhoneMockup({
  showTime,
  onToggle,
  color,
  timeDisplay,
  timePeriod,
}: {
  showTime: boolean;
  onToggle: () => void;
  color: Color;
  timeDisplay: string;
  timePeriod: string;
}) {
  const W = 210;
  const H = 440;
  const RADIUS = 38;
  const BEZEL = 8;
  const { rot, onPointerDown, onPointerMove, onPointerUp, wasDrag } = useRotation(28, 42);

  const handlePointerUp = () => {
    onPointerUp();
    if (!wasDrag()) onToggle();
  };

  const holoStyle = {
    background: `linear-gradient(${150 + rot.y * 1.2}deg,
      #1a1a2e, #3d1a78, #0f4c75, #1a3a1a, #1a1a2e)`,
    backgroundSize: "300% 300%",
    backgroundPosition: `${50 + rot.y * 2}% ${50 + rot.x * 1.5}%`,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        perspective: "1000px",
        cursor: "grab",
        userSelect: "none",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={handlePointerUp}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.08s linear",
          position: "relative",
        }}
      >
        {/* Side buttons left */}
        <div
          style={{
            position: "absolute",
            left: -9,
            top: 80,
            width: 8,
            height: 24,
            background: `linear-gradient(90deg, #555, #888, #555)`,
            borderRadius: "4px 0 0 4px",
            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -9,
            top: 118,
            width: 8,
            height: 40,
            background: `linear-gradient(90deg, #555, #888, #555)`,
            borderRadius: "4px 0 0 4px",
            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: -9,
            top: 168,
            width: 8,
            height: 40,
            background: `linear-gradient(90deg, #555, #888, #555)`,
            borderRadius: "4px 0 0 4px",
            boxShadow: "-2px 0 6px rgba(0,0,0,0.5)",
          }}
        />
        {/* Power button right */}
        <div
          style={{
            position: "absolute",
            right: -9,
            top: 130,
            width: 8,
            height: 56,
            background: `linear-gradient(270deg, #555, #888, #555)`,
            borderRadius: "0 4px 4px 0",
            boxShadow: "2px 0 6px rgba(0,0,0,0.5)",
          }}
        />

        {/* Outer frame — dark holographic titanium */}
        <div
          style={{
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
            overflow: "hidden",
          }}
        >
          {/* Iridescent shimmer on body */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, rgba(180,79,255,0.12) 70%, transparent 100%)",
              borderRadius: RADIUS,
              pointerEvents: "none",
              zIndex: 5,
            }}
          />

          {/* Screen area */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: RADIUS - BEZEL,
              overflow: "hidden",
              background: "#050505",
              position: "relative",
              zIndex: 1,
            }}
          >
            <PhoneScreenContent
              showTime={showTime}
              timeDisplay={timeDisplay}
              timePeriod={timePeriod}
              color={color}
            />

            {/* Punch-hole camera */}
            <div
              style={{
                position: "absolute",
                top: 14,
                left: "50%",
                transform: "translateX(-50%)",
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#000",
                zIndex: 10,
                boxShadow: "0 0 0 2px rgba(0,0,0,0.8), 0 0 0 3px rgba(255,255,255,0.06)",
              }}
            />
          </div>

          {/* Glass top reflection */}
          <div
            style={{
              position: "absolute",
              top: BEZEL,
              left: BEZEL,
              right: BEZEL,
              height: "32%",
              borderRadius: `${RADIUS - BEZEL}px ${RADIUS - BEZEL}px 50% 50%`,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.01) 100%)",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />
        </div>
      </div>

      {/* Drag hint */}
      <p
        style={{
          marginTop: 16,
          fontSize: "0.48rem",
          letterSpacing: "0.28em",
          color: "rgba(255,255,255,0.22)",
          fontFamily: "var(--font-space-mono), monospace",
        }}
      >
        DRAG TO ROTATE
      </p>
    </div>
  );
}

/* ─── Format toggle button ──────────────────────────────────────────────────── */
function FormatToggle({
  use12h,
  onChange,
  accentColor,
}: {
  use12h: boolean;
  onChange: (v: boolean) => void;
  accentColor: string;
}) {
  return (
    <div
      style={{
        display: "inline-flex",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      {[false, true].map((is12) => (
        <button
          key={String(is12)}
          onClick={() => onChange(is12)}
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            fontSize: "0.52rem",
            letterSpacing: "0.18em",
            padding: "5px 12px",
            border: "none",
            cursor: "pointer",
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

/* ─── Main Page ─────────────────────────────────────────────────────────────── */
export default function DemoPage() {
  const [watchShowTime, setWatchShowTime] = useState(false);
  const [phoneShowTime, setPhoneShowTime] = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [use12h, setUse12h] = useState(false);
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
      <header
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "16px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(16px)",
          background: "rgba(8,8,8,0.88)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            style={{ fontSize: "1rem", fontWeight: 700, color: "#FFD400", letterSpacing: "-0.02em" }}
          >
            NOW
          </span>
          <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.02em" }}>MODE</span>
          <span
            style={{
              marginLeft: 10,
              fontSize: "0.5rem",
              letterSpacing: "0.26em",
              color: "rgba(255,255,255,0.3)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "2px 8px",
            }}
          >
            DEMO
          </span>
        </div>
        <Link
          href="/"
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
            textDecoration: "none",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            paddingBottom: 1,
          }}
        >
          ← BACK TO SITE
        </Link>
      </header>

      {/* ── Hero ── */}
      <section
        style={{
          textAlign: "center",
          padding: "48px 24px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.38em",
            color: "rgba(255,255,255,0.3)",
            marginBottom: 12,
          }}
        >
          INTERACTIVE PREVIEW
        </p>
        <h1
          style={{
            fontSize: "clamp(1.7rem, 5vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          TAP THE SCREEN.
        </h1>
        <p
          style={{
            marginTop: 12,
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          DRAG DEVICES TO ROTATE · CHOOSE COLOR BELOW
        </p>
      </section>

      {/* ── Controls bar ── */}
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          flexWrap: "wrap",
        }}
      >
        {/* Color dots */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {COLORS.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveColor(i)}
              title={c.label}
              className={`color-dot${activeColor === i ? " active" : ""}`}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: c.bg,
                border: "none",
                outline: "none",
                cursor: "pointer",
                position: "relative",
                flexShrink: 0,
              }}
            >
              {activeColor === i && (
                <span
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: "50%",
                    border: `2px solid ${c.bg}`,
                    opacity: 0.55,
                    pointerEvents: "none",
                  }}
                />
              )}
            </button>
          ))}
          <span
            style={{
              fontSize: "0.55rem",
              letterSpacing: "0.24em",
              color: color.bg,
              transition: "color 0.3s ease",
              minWidth: 44,
            }}
          >
            {color.label}
          </span>
        </div>

        {/* Separator */}
        <div
          style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }}
        />

        {/* Time format toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.22em",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            FORMAT
          </span>
          <FormatToggle use12h={use12h} onChange={setUse12h} accentColor={color.bg} />
        </div>
      </section>

      {/* ── Mockups ── */}
      <section
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "clamp(32px, 6vw, 80px)",
          padding: "56px 32px 72px",
          flexWrap: "wrap",
        }}
      >
        {/* Watch column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <p
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.34em",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 4,
            }}
          >
            WATCH
          </p>
          <WatchMockup
            showTime={watchShowTime}
            onToggle={toggleWatch}
            color={color}
            timeDisplay={timeDisplay}
            timePeriod={timePeriod}
          />
          <div
            style={{
              width: 40,
              height: 2,
              background: color.bg,
              transition: "background 0.3s ease",
              marginTop: -4,
            }}
          />
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            height: 200,
            background: "rgba(255,255,255,0.07)",
            alignSelf: "center",
          }}
        />

        {/* Phone column */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
          <p
            style={{
              fontSize: "0.5rem",
              letterSpacing: "0.34em",
              color: "rgba(255,255,255,0.25)",
              marginBottom: 4,
            }}
          >
            MOBILE
          </p>
          <PhoneMockup
            showTime={phoneShowTime}
            onToggle={togglePhone}
            color={color}
            timeDisplay={timeDisplay}
            timePeriod={timePeriod}
          />
          <div
            style={{
              width: 40,
              height: 2,
              background: color.bg,
              transition: "background 0.3s ease",
              marginTop: -4,
            }}
          />
        </div>
      </section>

      {/* ── Info strip ── */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(24px, 5vw, 60px)",
          flexWrap: "wrap",
        }}
      >
        {[
          ["TAP", "Toggle NOW / time"],
          ["DRAG", "Rotate device in 3D"],
          ["COLOR", "5 screen themes"],
          ["FORMAT", "12H or 24H clock"],
        ].map(([label, desc]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.5rem",
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
                fontSize: "0.58rem",
                color: "rgba(255,255,255,0.28)",
                letterSpacing: "0.1em",
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
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 10,
        }}
      >
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
