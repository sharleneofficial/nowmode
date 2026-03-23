"use client";

import { useState, useEffect, useCallback } from "react";
import { Space_Mono, Inter } from "next/font/google";
import Link from "next/link";
import {
  COLORS, useCurrentTime,
  WatchMockup, PhoneMockup,
  ColorPicker, FormatToggle,
} from "./components/DeviceMockups";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

/* ─── Small inline theme swatch (used in hero picker) ───────────────────────── */
function HeroThemePicker({
  activeIndex, onChange,
}: { activeIndex: number; onChange: (i: number) => void }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8,
    }}>
      <span style={{
        fontFamily: '"Space Mono", monospace',
        fontSize: "0.45rem", letterSpacing: "0.34em",
        color: "rgba(0,0,0,0.3)",
      }}>ACCENT</span>
      <div style={{ display: "flex", gap: 8 }}>
        {COLORS.map((c, i) => (
          <button
            key={c.id}
            title={c.label}
            onClick={() => onChange(i)}
            style={{
              width: 18, height: 18, borderRadius: "50%",
              background: c.bg,
              border: "none", outline: "none", cursor: "pointer",
              boxShadow: activeIndex === i
                ? `0 0 0 2px #fff, 0 0 0 4px ${c.bg}`
                : "0 0 0 1px rgba(0,0,0,0.12)",
              transform: activeIndex === i ? "scale(1.2)" : "scale(1)",
              transition: "box-shadow 0.18s ease, transform 0.18s ease",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  /* ── Email form ── */
  const [email, setEmail]         = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);

  /* ── Site-wide accent color ── */
  const [accentIndex, setAccentIndex]           = useState(0);     // hero picker selection
  const [siteAccent, setSiteAccent]             = useState("#FFD400");
  const [lastManualAccent, setLastManualAccent] = useState("#FFD400");

  /* ── Device mockup state ── */
  const [activeColor, setActiveColor]   = useState(0);   // device color picker
  const [use12h, setUse12h]             = useState(false);
  const [watchShowTime, setWatchShowTime] = useState(false);
  const [isSynced, setIsSynced]           = useState(false);

  const { display: timeDisplay, period: timePeriod } = useCurrentTime(use12h);
  const deviceColor = COLORS[activeColor];

  /* ── Push accent to CSS custom property ── */
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", siteAccent);
  }, [siteAccent]);

  /* ── Hero picker → update site accent + sync mockup ── */
  const handleHeroPick = useCallback((i: number) => {
    const c = COLORS[i];
    setAccentIndex(i);
    setSiteAccent(c.bg);
    setLastManualAccent(c.bg);
    setActiveColor(i);
    if (isSynced) setIsSynced(false);
  }, [isSynced]);

  /* ── Device picker → update mockup color, sync site if toggle on ── */
  const handleDevicePick = useCallback((i: number) => {
    setActiveColor(i);
    if (isSynced) setSiteAccent(COLORS[i].bg);
  }, [isSynced]);

  /* ── "Apply theme to full site" toggle ── */
  const handleSyncToggle = useCallback(() => {
    if (!isSynced) {
      setSiteAccent(COLORS[activeColor].bg);
      setIsSynced(true);
    } else {
      setSiteAccent(lastManualAccent);
      setIsSynced(false);
    }
  }, [isSynced, activeColor, lastManualAccent]);

  const toggleWatch = useCallback(() => setWatchShowTime((v) => !v), []);

  /* ── Email submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <main className={`${spaceMono.variable} ${inter.variable} font-mono bg-white text-black overflow-x-hidden`}>

      {/* ═══ HERO ═══════════════════════════════════════════════════════════════ */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-2 bg-black" />
        <div className="absolute top-0 left-0 w-2 h-full bg-black" />
        {/* Accent bar — follows site accent color */}
        <div
          className="absolute bottom-0 right-0 w-1/3 h-2"
          style={{ background: "var(--accent)" }}
        />

        {/* ─ Hero theme picker — top-right corner ─ */}
        <div className="absolute top-6 right-8">
          <HeroThemePicker activeIndex={accentIndex} onChange={handleHeroPick} />
        </div>

        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-black" />
            <span className="text-xs tracking-[0.3em] uppercase">Agency Tool</span>
          </div>

          <div className="mb-8">
            <span className="text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.9] tracking-tighter block">
              NOW
            </span>
            {/* Accent-colored MODE */}
            <span
              className="text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.9] tracking-tighter ml-[0.1em]"
              style={{ color: "var(--accent)" }}
            >
              MODE
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
            TIME BY{" "}
            <span className="px-2" style={{ background: "var(--accent)" }}>
              CHOICE
            </span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed font-sans text-gray-700 max-w-md">
            Replace compulsive clock-checking with intentional presence. A
            different way to relate to time.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
          <div className="w-px h-6 bg-black" />
        </div>
      </section>

      {/* ═══ HOW IT WORKS — interactive device mockups ══════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[10px] tracking-[0.3em] text-gray-500">01</span>
            <div className="w-12 h-px bg-gray-700" />
            <span className="text-[10px] tracking-[0.3em] text-gray-500">HOW IT WORKS</span>
          </div>

          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight mb-16">
            TAP TO SEE TIME.
            <br />
            <span style={{ color: "var(--accent)" }}>TAP AGAIN FOR NOW.</span>
          </h2>

          {/* Controls row */}
          <div style={{
            display: "flex", alignItems: "center",
            gap: 20, marginBottom: 48, flexWrap: "wrap",
          }}>
            <ColorPicker activeColor={activeColor} onChange={handleDevicePick} />

            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.3)",
              }}>FORMAT</span>
              <FormatToggle use12h={use12h} onChange={setUse12h} accentColor={deviceColor.bg} />
            </div>

            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />

            {/* Apply theme to full site toggle */}
            <button
              onClick={handleSyncToggle}
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.18em",
                padding: "5px 14px",
                background: isSynced ? deviceColor.bg : "transparent",
                color: isSynced ? "#000" : "rgba(255,255,255,0.38)",
                border: `1px solid ${isSynced ? deviceColor.bg : "rgba(255,255,255,0.14)"}`,
                borderRadius: 3, cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {isSynced ? "✓ THEME APPLIED TO SITE" : "APPLY THEME TO FULL SITE"}
            </button>
          </div>

          {/* Device mockups */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "clamp(28px, 5vw, 72px)",
            flexWrap: "wrap",
          }}>
            {/* Watch */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.34em",
                color: "rgba(255,255,255,0.25)",
              }}>WATCH</span>
              <WatchMockup
                showTime={watchShowTime} onToggle={toggleWatch}
                color={deviceColor} timeDisplay={timeDisplay} timePeriod={timePeriod}
              />
              <div style={{
                width: 36, height: 2, background: deviceColor.bg,
                transition: "background 0.3s ease",
              }} />
            </div>

            {/* Divider */}
            <div style={{
              width: 1, height: 180,
              background: "rgba(255,255,255,0.07)",
              alignSelf: "center",
            }} />

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.34em",
                color: "rgba(255,255,255,0.25)",
              }}>MOBILE</span>
              <PhoneMockup
                color={deviceColor} timeDisplay={timeDisplay} timePeriod={timePeriod}
              />
              <div style={{
                width: 36, height: 2, background: deviceColor.bg,
                transition: "background 0.3s ease",
              }} />
            </div>
          </div>

          <p className="mt-16 text-center text-gray-400 max-w-md mx-auto font-sans text-sm">
            No notifications. No stats. No gamification. Just a simple toggle
            between presence and information.
          </p>
        </div>
      </section>

      {/* ═══ THE PROBLEM ════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.3em] text-gray-400">02</span>
            <div className="w-12 h-px bg-gray-300" />
          </div>

          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight mb-12">
            WE CHECK THE CLOCK
            <span className="block" style={{ color: "var(--accent)" }}>COMPULSIVELY</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <p className="text-sm leading-relaxed font-sans">
              Not because we need to. Because we are anxious, bored, or avoiding
              the present moment.
            </p>
            <p className="text-sm leading-relaxed font-sans text-gray-600">
              The clock is always there. In the corner of the screen. On the
              wrist. In the pocket.
            </p>
            <p className="text-sm leading-relaxed font-sans text-gray-600">
              We check it without thinking. Without purpose. Just to fill a
              void.
            </p>
          </div>

          <div className="mt-16 border-2 border-black p-6 md:p-8 inline-block">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 mb-1">AVERAGE PER DAY</p>
            <p className="text-5xl md:text-6xl font-bold">150×</p>
          </div>
        </div>
      </section>

      {/* ═══ THE IDEA ════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-12 h-px bg-gray-700" />
            <span className="text-[10px] tracking-[0.3em] text-gray-500">03</span>
            <div className="w-12 h-px bg-gray-700" />
          </div>

          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight mb-6">
            WHAT IF YOU ONLY SAW
            <br />
            TIME WHEN YOU{" "}
            <span style={{ color: "var(--accent)" }}>CHOSE TO?</span>
          </h2>

          <p className="text-base text-gray-400 max-w-lg mx-auto mb-10 font-sans">
            No clock in the corner. No constant reminder. Just a blank screen
            that says one thing:
          </p>

          <div
            className="inline-block px-6 py-3"
            style={{ border: `2px solid var(--accent)` }}
          >
            <span
              className="text-4xl md:text-6xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              NOW
            </span>
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY ══════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.3em] text-gray-400">04</span>
            <div className="w-12 h-px bg-gray-300" />
          </div>

          <blockquote className="text-[clamp(1.25rem,3vw,2rem)] font-bold leading-tight mb-6">
            THIS IS NOT ABOUT MINDFULNESS.
            <br />
            NOT ABOUT PRODUCTIVITY.
            <br />
            NOT ABOUT WELLNESS.
            <br />
            <span
              className="inline-block mt-3"
              style={{ borderBottom: `4px solid var(--accent)` }}
            >
              IT IS ABOUT AGENCY.
            </span>
          </blockquote>

          <p className="text-gray-600 max-w-lg font-sans text-sm">
            The simple, radical act of choosing when to know what time it is.
          </p>
        </div>
      </section>

      {/* ═══ EARLY ACCESS ════════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 px-8 md:px-16 lg:px-24 text-black"
        style={{ background: "var(--accent)" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-block border-2 border-black px-3 py-1 mb-6">
            <span className="text-[10px] tracking-[0.3em] font-bold">EARLY ACCESS</span>
          </div>

          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold mb-4">BE THE FIRST</h2>

          <p className="text-base mb-8 font-sans">
            Join the list. No spam. Just a heads up when NOW MODE is ready.
          </p>

          {submitted ? (
            <div className="border-2 border-black p-5 inline-block bg-black text-white">
              <p className="text-lg font-bold">THANK YOU</p>
              <p className="text-xs mt-1">We will be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-black text-white placeholder-gray-500 text-sm outline-none"
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="px-6 py-3 bg-black text-white font-bold text-xs tracking-wider hover:bg-gray-900 transition-colors disabled:opacity-60"
                >
                  {sending ? "..." : "JOIN"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════════════════════ */}
      <footer className="py-10 px-8 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold" style={{ color: "var(--accent)" }}>NOW</span>
            <span className="text-xl font-bold">MODE</span>
          </div>
          <Link
            href="/demo"
            className="text-xs tracking-[0.22em] pb-px transition-all"
            style={{ color: "var(--accent)", borderBottom: `1px solid var(--accent)` }}
          >
            INTERACTIVE DEMO →
          </Link>
          <p className="text-xs text-gray-600">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
