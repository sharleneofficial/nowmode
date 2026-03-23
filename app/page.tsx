"use client";

import { useState, useCallback } from "react";
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

export default function Home() {
  const [email, setEmail]           = useState("");
  const [submitted, setSubmitted]   = useState(false);
  const [activeColor, setActiveColor] = useState(0);
  const [use12h, setUse12h]         = useState(false);
  const [watchShowTime, setWatchShowTime] = useState(false);
  const [phoneShowTime, setPhoneShowTime] = useState(false);

  const { display: timeDisplay, period: timePeriod } = useCurrentTime(use12h);
  const color = COLORS[activeColor];

  const toggleWatch = useCallback(() => setWatchShowTime((v) => !v), []);
  const togglePhone = useCallback(() => setPhoneShowTime((v) => !v), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className={`${spaceMono.variable} ${inter.variable} font-mono bg-white text-black overflow-x-hidden`}>

      {/* HERO */}
      <section className="min-h-screen relative flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="absolute top-0 left-0 w-full h-2 bg-black" />
        <div className="absolute top-0 left-0 w-2 h-full bg-black" />
        <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#FFD400]" />

        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-black" />
            <span className="text-xs tracking-[0.3em] uppercase">Agency Tool</span>
          </div>

          <div className="mb-8">
            <span className="text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.9] tracking-tighter block">
              NOW
            </span>
            <span className="text-[clamp(4rem,14vw,11rem)] font-bold leading-[0.9] tracking-tighter text-[#FFD400] ml-[0.1em]">
              MODE
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,5vw,4rem)] font-bold leading-[1.1] mb-6">
            TIME BY <span className="bg-[#FFD400] px-2">CHOICE</span>
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

      {/* HOW IT WORKS — interactive device mockups live here */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-[10px] tracking-[0.3em] text-gray-500">01</span>
            <div className="w-12 h-px bg-gray-700" />
            <span className="text-[10px] tracking-[0.3em] text-gray-500">HOW IT WORKS</span>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight mb-16">
            TAP TO SEE TIME.
            <br />
            <span className="text-[#FFD400]">TAP AGAIN FOR NOW.</span>
          </h2>

          {/* Controls row */}
          <div
            style={{
              display: "flex", alignItems: "center",
              gap: 20, marginBottom: 48, flexWrap: "wrap",
            }}
          >
            <ColorPicker activeColor={activeColor} onChange={setActiveColor} />
            <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.3)",
              }}>FORMAT</span>
              <FormatToggle use12h={use12h} onChange={setUse12h} accentColor={color.bg} />
            </div>
          </div>

          {/* Device mockups */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "clamp(28px, 5vw, 72px)",
              flexWrap: "wrap",
            }}
          >
            {/* Watch */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <span style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: "0.5rem", letterSpacing: "0.34em",
                color: "rgba(255,255,255,0.25)",
              }}>WATCH</span>
              <WatchMockup
                showTime={watchShowTime} onToggle={toggleWatch}
                color={color} timeDisplay={timeDisplay} timePeriod={timePeriod}
              />
              <div style={{
                width: 36, height: 2, background: color.bg,
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
                showTime={phoneShowTime} onToggle={togglePhone}
                color={color} timeDisplay={timeDisplay} timePeriod={timePeriod}
              />
              <div style={{
                width: 36, height: 2, background: color.bg,
                transition: "background 0.3s ease",
              }} />
            </div>
          </div>

          {/* Caption */}
          <p className="mt-16 text-center text-gray-400 max-w-md mx-auto font-sans text-sm">
            No notifications. No stats. No gamification. Just a simple toggle
            between presence and information.
          </p>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="text-[10px] tracking-[0.3em] text-gray-400">02</span>
            <div className="w-12 h-px bg-gray-300" />
          </div>

          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight mb-12">
            WE CHECK THE CLOCK
            <span className="block text-[#FFD400]">COMPULSIVELY</span>
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

      {/* THE IDEA */}
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
            TIME WHEN YOU <span className="text-[#FFD400]">CHOSE TO?</span>
          </h2>

          <p className="text-base text-gray-400 max-w-lg mx-auto mb-10 font-sans">
            No clock in the corner. No constant reminder. Just a blank screen
            that says one thing:
          </p>

          <div className="inline-block border-2 border-[#FFD400] px-6 py-3">
            <span className="text-4xl md:text-6xl font-bold text-[#FFD400]">NOW</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
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
            <span className="inline-block mt-3 border-b-4 border-[#FFD400]">
              IT IS ABOUT AGENCY.
            </span>
          </blockquote>

          <p className="text-gray-600 max-w-lg font-sans text-sm">
            The simple, radical act of choosing when to know what time it is.
          </p>
        </div>
      </section>

      {/* EARLY ACCESS */}
      <section className="py-24 md:py-32 px-8 md:px-16 lg:px-24 bg-[#FFD400] text-black">
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
                  className="px-6 py-3 bg-black text-white font-bold text-xs tracking-wider hover:bg-gray-900 transition-colors"
                >
                  JOIN
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-8 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#FFD400]">NOW</span>
            <span className="text-xl font-bold">MODE</span>
          </div>
          <Link
            href="/demo"
            className="text-xs tracking-[0.22em] text-[#FFD400] border-b border-[#FFD400] border-opacity-40 pb-px hover:border-opacity-100 transition-all"
          >
            INTERACTIVE DEMO →
          </Link>
          <p className="text-xs text-gray-600">© 2026</p>
        </div>
      </footer>
    </main>
  );
}
