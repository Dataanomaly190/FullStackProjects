import InfoPageLayout from "@/components/InfoPageLayout";

export default function NotesPage() {
  const NOTE_CATEGORIES = [
    {
      title: "Top Notes",
      subtitle: "The First Impression",
      desc: "Evaporating within 5–15 minutes, top notes are the initial olfactory burst. They are typically light, fresh, and designed to capture immediate attention.",
      ingredients: ["Bergamot", "Citrus", "Pink Pepper", "Lavender", "Neroli"]
    },
    {
      title: "Heart Notes",
      subtitle: "The Soul of the Scent",
      desc: "Emerging as the top notes fade, heart notes last for 20–60 minutes. They form the core identity of the fragrance, providing balance and harmony.",
      ingredients: ["Rose Absolu", "Jasmine", "Saffron", "Cardamom", "Geranium"]
    },
    {
      title: "Base Notes",
      subtitle: "The Lasting Memory",
      desc: "The foundation of the fragrance. Base notes interact with the skin to create a long-lasting dry down that can linger for 12 hours or more.",
      ingredients: ["Oud", "Sandalwood", "Amber", "Vanilla Bean", "Oakmoss", "Patchouli"]
    }
  ];

  return (
    <InfoPageLayout title="The Olfactory Library" eyebrow="Explore Notes">
      <div className="space-y-20">
        <section className="text-center max-w-2xl mx-auto">
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Understanding a fragrance is like reading a multi-layered concerto. 
            We invite you to explore the three distinct stages of its evolution—the Olfactory Pyramid.
          </p>
        </section>

        <div className="space-y-24">
          {NOTE_CATEGORIES.map((cat, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-12 items-start border-b border-outline-variant/20 pb-16 last:border-0">
              <div className="md:w-1/3">
                <span className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 block">{cat.subtitle}</span>
                <h2 className="font-headline text-3xl font-bold uppercase tracking-tight">{cat.title}</h2>
              </div>
              <div className="md:w-2/3 space-y-8">
                <p className="font-body text-lg leading-relaxed opacity-80">{cat.desc}</p>
                <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-4 font-bold">Key Ingredients in our Atelier:</p>
                    <div className="flex flex-wrap gap-3">
                        {cat.ingredients.map(ing => (
                            <span key={ing} className="bg-surface-container-high px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider">{ing}</span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="bg-primary text-on-primary p-12 rounded-3xl text-center space-y-6">
            <h3 className="font-headline text-2xl font-bold uppercase">"Maceration & Maturity"</h3>
            <p className="max-w-xl mx-auto opacity-80 text-sm">
                Ingredients alone do not a fragrance make. Each of our formulations undergoes a minimum of 3 months of maceration—a 
                process of patient waiting where the top, heart, and base notes marry into a singular, unified essence.
            </p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
