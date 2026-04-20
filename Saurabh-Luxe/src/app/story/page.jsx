import InfoPageLayout from "@/components/InfoPageLayout";

export default function StoryPage() {
  return (
    <InfoPageLayout title="The Heritage" eyebrow="Our Story">
      <div className="space-y-16">
        <section className="text-center">
          <p className="font-headline text-2xl md:text-3xl font-light italic text-primary leading-relaxed">
            "We do not simply create perfumes. We capture the invisible architecture 
            of memory and the silent poetry of the soul."
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-on-surface">The Alchemist&apos;s Vision</h2>
          <div className="space-y-6 opacity-90">
            <p>
              Founded in the heart of artisanal heritage, Maison Saurabh Luxe began as a private atelier—a sanctuary where the 
              world&apos;s rarest essences were transformed into olfactory masterpieces. Our founder envisioned a house that 
              returned to the golden era of perfumery, where patience was prioritized over production and quality over quantity.
            </p>
            <p>
              The journey began with a single mission: to source the most evocative ingredients from the furthest corners of 
              the globe. From the deep, resinous Oud of Cambodia to the delicate, hand-harvested Jasmine of Grasse, our library 
              of notes grew into a testament to the raw power of nature.
            </p>
          </div>
        </section>

        <section className="bg-surface-container-low p-12 rounded-3xl border border-outline-variant/20 italic">
          <h3 className="font-label text-xs font-bold uppercase tracking-widest text-primary mb-6">Our Philosophy</h3>
          <p className="text-lg leading-relaxed">
            We believe that a fragrance should be an invisible garment—a silent statement of presence that lingers in the 
            air long after a room has been vacated. It is a bridge between the physical and the emotional, a medium that 
            rekindles memories of rain-soaked earth, golden sunsets, and ancient libraries.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-on-surface">Bottling The Infinite</h2>
          <div className="space-y-6 opacity-90">
            <p>
              Today, Saurabh Luxe stands as a global beacon for the modern connoisseur. Every bottle that leaves our 
              atelier is hand-inspected, hand-bottled, and aged to perfection through our signature maceration process. 
              We remain a house of artisans, dedicated to the belief that the finest things in life take time to distill.
            </p>
            <p>
              Join us as we continue to write our story, one note at a time, crafting the scents that will define the 
              memories of the next century.
            </p>
          </div>
        </section>

        <div className="pt-12 text-center opacity-40">
           <span className="material-symbols-outlined text-4xl">history_edu</span>
        </div>
      </div>
    </InfoPageLayout>
  );
}
