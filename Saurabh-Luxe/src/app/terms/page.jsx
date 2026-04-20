import InfoPageLayout from "@/components/InfoPageLayout";

export default function TermsPage() {
  return (
    <InfoPageLayout title="Terms of Service" eyebrow="Legal Excellence">
      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider">Boutique Terms</h2>
          <p>
            By accessing and purchasing from Maison Saurabh Luxe, you agree to the following terms and conditions. 
            All content, including imagery and descriptions, remain the exclusive intellectual property of the brand.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">1. Product Quality</h3>
          <p>
            Each perfume is an artisanal creation. Due to the high concentration of natural extracts, slight variations 
            in color and scent profile between batches are a hallmark of our natural process.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">2. Order Acceptance</h3>
          <p>
            We reserve the right to limit the quantity of any "Rare" or "Limited" release per customer to ensure 
            availability for our wider global community of collectors.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">3. Governing Law</h3>
          <p>
            These terms are governed by the laws of India, under the jurisdiction of the courts of New Delhi.
          </p>
        </section>

        <section className="mt-12 p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest">
          <p className="font-body text-xs italic opacity-70">
            Current Version: 2.1 (April 2026).
          </p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
