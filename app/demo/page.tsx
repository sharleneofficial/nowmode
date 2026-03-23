"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import {
  COLORS, useCurrentTime,
  WatchMockup, PhoneMockup,
  ColorPicker, FormatToggle,
} from "../components/DeviceMockups";

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
      style={{
        fontFamily: '"Space Mono", monospace',
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
        }}>CHOOSE A COLOR · TAP DEVICES TO TOGGLE</p>
      </section>

      {/* ── Controls bar ── */}
      <section style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 20, padding: "20px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        flexWrap: "wrap",
      }}>
        <ColorPicker activeColor={activeColor} onChange={setActiveColor} />

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
            transition: "background 0.3s ease",
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
            transition: "background 0.3s ease",
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
          ["TAP",    "Toggle NOW / time on each device"],
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
