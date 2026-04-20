"use client";
import Link from "next/link";

const EDITORIAL_SECTIONS = [
  {
    id: "alchemist",
    tag: "Behind the Scent",
    title: "The Alchemist's\nSecret",
    body: "Discover the hidden craft behind our most exclusive blends. We source rare ingredients from the furthest corners of the globe, where masterful artistry meets the raw power of nature. Each bottle is a testament to centuries-old techniques refined for the modern era.",
    cta: { label: "Discover The Process", href: "/process" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBC4NXBWcozS63bSVBt7LuX315pWhMAVfIreevkS5dNbCV4WU4RfINC1LUFmGV_hGIE1_PXABVFnWcq2HO0oG4cJ0QTShjYhr3U1jme-Ok3L8pz9vNqclht0vJoAo49EvOQyEHlQ6vgbeIZnGHmX7QdWhJ1dMmV2nH-H-jvO7XBMhbBEeqeMpYFpq5xnwtXRXIFSIBuR5XZZadid39SI4zDCGBbM_Fn_dRZjwWF1uZHy7KWqbj5QvmGt2La0cgUpxQMYb0KOfavtw",
    imageClass: "aspect-[4/5] -ml-4 lg:-ml-10 lg:mt-10",
    bg: "bg-surface-container-low",
    reverse: false,
    grayscale: false,
  },
  {
    id: "time",
    tag: "Heritage",
    title: "Essence of\nTime",
    body: "True luxury cannot be rushed. Our signature extraits undergo a meticulous maceration process, resting in dark, temperature-controlled vaults for months. This patience allows the molecules to marry, creating a depth and longevity that synthetic alternatives can never replicate.",
    cta: { label: "Read Our Story", href: "/story" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAiV4V3-e-HKyDiHef4DDPHzSgB3iurltTtbhbPg2yjRegoqB5yyXaDi0Y5SC6hC_4CBT93HkoF5sw2CqirfqPgmd9ueS_x6qR_hugOX2oQImBlSxechG6Aqms_zZIxUXLwI-GsdBieuyHN37LhrXReyjFMtawVNAFhZjy51va2KwNs1cGymkBFrYUfPJx8Q7_7cNwbwk8ljJDt6hXlpqihwtlHN5UVeu-oqR4-WRciUQ43H_-HwZNmUmvrQm9rm4pQpSm8wf_H6Q",
    imageClass: "aspect-square w-[90%]",
    bg: "bg-surface",
    reverse: true,
    grayscale: true,
  },
];

function EditorialBlock({ section }) {
  const lines = section.title.split("\n");
  return (
    <section className={`py-24 ${section.bg}`}>
      <div
        className={`container mx-auto px-8 md:px-16 lg:px-24 flex flex-col gap-16 lg:gap-24 items-center ${
          section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Copy */}
        <div className="lg:w-1/2 flex flex-col items-start text-left z-10">
          <span className="font-label text-xs font-bold uppercase tracking-[0.15rem] text-on-surface-variant mb-5 block">
            {section.tag}
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.02em] text-on-surface mb-8">
            {lines.map((l, i) => (
              <span key={i}>
                {l}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-lg mb-10">
            {section.body}
          </p>
          <Link
            href={section.cta.href}
            className="inline-flex items-center gap-2 text-secondary font-label text-xs font-bold uppercase tracking-[0.12rem] hover:opacity-75 transition-opacity pb-1 border-b border-secondary"
          >
            {section.cta.label}
            <span
              className="material-symbols-outlined text-[15px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full relative flex">
          <div
            className={`bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl ${section.imageClass}`}
          >
            <div
              className={`w-full h-full bg-cover bg-center ${
                section.grayscale ? "grayscale contrast-125" : ""
              }`}
              style={{ backgroundImage: `url('${section.image}')` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BottledPoetrySection() {
  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #003b34 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        {/* Copy */}
        <div className="lg:w-[45%] flex flex-col items-start text-left">
          <span className="font-label text-xs font-bold uppercase tracking-[0.15rem] text-on-surface-variant mb-5 block">
            Inspiration
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-black leading-[1.0] tracking-[-0.02em] text-on-surface mb-8">
            Bottled
            <br />
            Poetry
          </h2>
          <blockquote className="font-body text-base italic text-on-surface-variant mb-6 max-w-md leading-relaxed border-l-2 border-primary/30 pl-5">
            "A fragrance is a memory waiting to happen. It is an invisible garment that
            dresses the soul, speaking in quiet notes of jasmine, amber, and rain-soaked
            earth."
          </blockquote>
          <p className="font-body text-base text-on-surface max-w-md mb-10 leading-relaxed">
            Explore our olfactory library, where every note is carefully selected to evoke
            emotion, memory, and desire.
          </p>
          <Link
            href="/notes"
            className="inline-flex items-center gap-3 btn-primary-gradient text-on-primary font-label text-xs font-bold uppercase tracking-[0.15rem] px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Explore Notes
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-[55%] w-full relative">
          <div className="w-full aspect-video lg:aspect-[3/2] bg-surface-container-highest rounded-xl overflow-hidden shadow-2xl">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAd8YYEal4Y1uT2_sVnK3OUt-n-07RkbMiWB8QpQxCYozOjHyaggQLvlSTP_RKz3ekCsZqAu3Wq1Kmlevq1qMB__1_abj16TaV4tWqM8J4kOQUxoAwBPxx8_jvab9nM0dDaL8Uc7E_AZdNqiNYSnnvLrBgKoURRblmaBT3yocVxDWcroljtH6aW0JKlVEModbzCFGW7dj-8vJoI0g0Py1rNgjpJ1-bFHvA3Gtd_4bs2eJR1wL3cB6vpt_iJ9Fiyx1ZFVunlz3IvmQ')",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Scent notes banner
function ScentNotesBanner() {
  const notes = [
    { icon: "🌹", name: "Rose" },
    { icon: "🌿", name: "Vetiver" },
    { icon: "🍋", name: "Bergamot" },
    { icon: "🪵", name: "Oud" },
    { icon: "🌸", name: "Jasmine" },
    { icon: "🌾", name: "Musk" },
    { icon: "🍊", name: "Citrus" },
    { icon: "🌲", name: "Sandalwood" },
  ];

  return (
    <section className="py-16 bg-on-surface overflow-hidden border-y border-white/5">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Triple for seamless infinite loop */}
        {[...notes, ...notes, ...notes].map((note, i) => (
          <div
            key={i}
            className="flex items-center gap-8 shrink-0 px-12 border-r border-white/5"
          >
            <span className="text-3xl filter grayscale contrast-125 brightness-150">{note.icon}</span>
            <span className="font-label text-xs font-bold uppercase tracking-[0.35rem] text-surface/50 whitespace-nowrap hover:text-secondary hover:tracking-[0.45rem] transition-all duration-500 cursor-default">
              {note.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function EditorialSections() {
  return (
    <>
      {EDITORIAL_SECTIONS.map((section) => (
        <EditorialBlock key={section.id} section={section} />
      ))}
      <ScentNotesBanner />
      <BottledPoetrySection />
    </>
  );
}
