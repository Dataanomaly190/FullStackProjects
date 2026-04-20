"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InfoPageLayout({ title, eyebrow, children }) {
  return (
    <main className="min-h-screen bg-surface flex flex-col grain">
      <Navbar />

      {/* Header */}
      <div className="pt-48 pb-20 px-6 text-center bg-primary relative overflow-hidden">
        {/* Subtle decorative ring */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-on-primary mb-6 block"
          >
            {eyebrow || "Maison Saurabh Luxe"}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-headline text-4xl md:text-7xl font-black tracking-tight text-on-primary uppercase"
          >
            {title}
          </motion.h1>
        </div>
      </div>

      {/* Content Area */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex-grow py-24 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto prose prose-neutral prose-sm md:prose-base">
          <div className="space-y-12 font-body text-on-surface-variant leading-relaxed">
            {children}
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

