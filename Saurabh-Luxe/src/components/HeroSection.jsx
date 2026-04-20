"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * HeroSection
 * ──────────────────────────────────────────────────────────
 * "Essence of Elegance" hero with a cinematic black-and-white
 * YouTube video embedded as a fullscreen muted background.
 *
 * Video used: Lumière Brothers – "Workers Leaving the Factory"
 * (1895, public domain). YouTube ID: DEQeIRLxaVY
 * Replace YOUTUBE_VIDEO_ID below with any vintage B&W clip you prefer.
 * ──────────────────────────────────────────────────────────
 */

const YOUTUBE_IDS = ["HKEdz3MeEPI", "CB6Q3biZ6g8", "y40TQOQtyD0"];
const PLAYLIST = YOUTUBE_IDS.join(",");

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const playerRef = useRef(null);

  // Reveal animation trigger
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center grain">
      {/* ── Video Background ── */}
      <div className="hero-video-wrapper">
        {/* YouTube no-cookie iframe — auto-play, muted, looped, no controls */}
        <iframe
          ref={playerRef}
          src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_IDS[0]}?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&playlist=${PLAYLIST}&modestbranding=1&iv_load_policy=3&rel=0&playsinline=1`}
          title="Cinematic vintage background"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          frameBorder="0"
          loading="lazy"
        />
        {/* Deep gradient overlay — top is transparent, bottom merges into surface */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#fcf9f8] pointer-events-none z-10" />
        {/* Vignette ring */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </div>

      {/* ── Hero Copy ── */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-5xl mx-auto">
        {/* Eyebrow tag */}
        <p
          className={`font-label text-surface/75 tracking-[0.5em] uppercase text-xs mb-8 transition-all duration-1000 ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          A Century of Artisanal Alchemy
        </p>

        {/* Main headline */}
        <h1
          className={`font-headline text-surface font-light leading-[0.92] tracking-[-0.03em] drop-shadow-2xl transition-all duration-1000 ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(4rem, 12vw, 9rem)",
            transitionDelay: "0.25s",
          }}
        >
          Essence of
          <br />
          <span
            className="italic font-extralight text-surface/90"
            style={{ fontStyle: "italic" }}
          >
            Elegance
          </span>
        </h1>

        {/* Divider line */}
        <div
          className={`mx-auto my-10 h-px bg-surface/30 transition-all duration-1000 ${
            ready ? "opacity-100 w-24" : "opacity-0 w-0"
          }`}
          style={{ transitionDelay: "0.45s" }}
        />

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.55s" }}
        >
          <Link
            href="/category?type=all"
            className="px-12 py-4 rounded-full bg-surface text-primary font-label text-xs font-bold uppercase tracking-[0.3em] hover:bg-primary hover:text-on-primary transition-all duration-500 shadow-xl"
          >
            The Collection
          </Link>
          <Link
            href="/story"
            className="px-10 py-4 rounded-full ghost-border text-surface font-label text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all duration-400"
          >
            Our Story
          </Link>
        </div>

      </div>

    </section>
  );
}
