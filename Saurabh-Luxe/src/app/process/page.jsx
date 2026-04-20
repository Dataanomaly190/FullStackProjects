import InfoPageLayout from "@/components/InfoPageLayout";

export default function ProcessPage() {
  const STEPS = [
    {
      title: "I. Global Sourcing",
      body: "Our journey begins at the source. We maintain direct relationships with master harvesters across the globe—from the rose fields of Taif to the vanilla plantations of Madagascar. We only select ingredients that meet our rigorous 'Extraction Grade' standard."
    },
    {
      title: "II. The Art of Blending",
      body: "In our New Delhi atelier, our master noses begin the meticulous task of blending. Using a mix of traditional copper stills and modern laboratory technology, they craft small batches to ensure absolute olfactory precision."
    },
    {
      title: "III. Maceration",
      body: "True luxury cannot be rushed. Once blended, our juice is kept in dark, climate-controlled aging rooms. This maceration process allows the high-concentration extracts to fully bond, creating the depth and projection that Saurabh Luxe is known for."
    },
    {
      title: "IV. Hand Bottling",
      body: "Every bottle is a work of art. Each is hand-cleaned, hand-filled, and hand-sealed. Each bottle receives a unique production number and a hand-tied signature cord, signifying that it has passed our master artisan's final inspection."
    }
  ];

  return (
    <InfoPageLayout title="The Atelier Craft" eyebrow="Discover The Process">
      <div className="space-y-20">
        <section className="text-center max-w-2xl mx-auto">
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            From the raw extract to the final spray, the creation of a Saurabh Luxe fragrance is a process involving 
            unmatched patience and precision. Discover the journey of an artisanal extrait.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {STEPS.map((step, i) => (
            <div key={i} className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">{step.title}</h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed opacity-90">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <section className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mt-12 bg-surface-container-highest">
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-40" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=1200')" }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center p-8 z-10">
            <h4 className="font-headline text-3xl md:text-5xl font-light italic text-on-surface uppercase tracking-widest max-w-xl">
              Artistry in every drop.
            </h4>
          </div>
        </section>

        <div className="text-center pt-12">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] opacity-40">The Saurabh Luxe Standard — Established 2024</p>
        </div>
      </div>
    </InfoPageLayout>
  );
}
