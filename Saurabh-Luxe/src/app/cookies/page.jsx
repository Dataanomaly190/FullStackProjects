import InfoPageLayout from "@/components/InfoPageLayout";

export default function CookiesPage() {
  return (
    <InfoPageLayout title="Cookie Preferences" eyebrow="Boutique Personalization">
      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider">The Digital Experience</h2>
          <p>
            Maison Saurabh Luxe uses subtle digital "cookies" to remember your olfactory preferences and ensure your 
            boutique experience is as seamless and personalized as possible.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase border-b border-outline-variant/30 pb-2">1. Essential Cookies</h3>
          <p className="text-sm italic opacity-80">These are required for the boutique to function correctly—handling your shopping bag and secure checkout session.</p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase border-b border-outline-variant/30 pb-2">2. Analytical Cookies</h3>
          <p className="text-sm italic opacity-80">These allow our curators to understand which collections are resonating with our global community, helping us refine our releases.</p>
        </section>

        <section className="p-8 bg-surface-container-low rounded-2xl flex items-center justify-between gap-8">
            <p className="font-body text-sm font-bold text-on-surface">Manage your preferences</p>
            <button className="px-6 py-2 rounded-full ghost-border font-label text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                Accept All
            </button>
        </section>

        <p className="text-xs opacity-50 italic">Last refined: April 2026.</p>
      </div>
    </InfoPageLayout>
  );
}
