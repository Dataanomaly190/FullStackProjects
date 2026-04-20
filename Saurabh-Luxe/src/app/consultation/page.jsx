import InfoPageLayout from "@/components/InfoPageLayout";

export default function ConsultationPage() {
  return (
    <InfoPageLayout title="Consultation" eyebrow="The Private Session">
      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider text-center">Your Olfactory Signature</h2>
          <p className="text-center">
            Finding a signature scent is an intimate journey. Our master consultants offer one-on-one virtual Sessions 
            to help you discover a fragrance that resonates with your identity and story.
          </p>
        </section>

        <div className="bg-surface-container-high rounded-3xl p-10 md:p-16 text-center border border-outline-variant/30 relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center gap-8">
            <span className="material-symbols-outlined text-6xl text-primary/40">self_improvement</span>
            <h3 className="font-headline text-2xl font-light italic">"A scent should not just be worn; it should be felt."</h3>
            
            <div className="space-y-4 max-w-md">
              <p className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">Private Session Includes:</p>
              <ul className="text-sm space-y-2 opacity-80">
                <li>30-minute bespoke consultation with a Master Nose</li>
                <li>Personalized Discovery Kit (3 curated samples)</li>
                <li>Exclusive digital pass for artisanal releases</li>
                <li>Full deduction of session price from your first bottle</li>
              </ul>
            </div>

            <button className="px-12 py-4 btn-primary-gradient text-on-primary font-label text-xs font-bold uppercase tracking-[0.3em] rounded-full shadow-xl hover:scale-105 transition-transform">
              Book Your Private Session — ₹50
            </button>
          </div>
        </div>

        <section className="pt-12">
          <h3 className="font-label text-[10px] font-bold uppercase tracking-[0.4em] text-on-surface-variant/60 mb-8 border-b border-outline-variant/20 pb-4">Special Requests</h3>
          <p className="text-sm">We also provide on-site consultancy for private collectors, galas, and corporate ateliers. Please email <span className="underline italic">ateliers@saurabhluxe.com</span> for executive inquiries.</p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
