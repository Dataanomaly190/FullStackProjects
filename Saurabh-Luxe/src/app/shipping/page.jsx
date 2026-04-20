import InfoPageLayout from "@/components/InfoPageLayout";

export default function ShippingPage() {
  return (
    <InfoPageLayout title="Shipping & Returns" eyebrow="Logistics of Elegance">
      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider">White-Glove Delivery</h2>
          <p>
            Every Saurabh Luxe order is hand-inspected and secured in our custom vibration-dampening packaging to ensure 
            your masterpiece arrives in perfect condition.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-surface-container-low rounded-2xl">
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Domestic (India)</h3>
            <p className="text-sm">Complimentary shipping on all orders. Delivery within 3–5 business days via premium air courier.</p>
          </div>
          <div className="p-8 bg-surface-container-low rounded-2xl">
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">International</h3>
            <p className="text-sm">Global logistics partner: DHL Express. Complimentary on orders over ₹150. Delivery within 5–7 business days.</p>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase border-b border-outline-variant/30 pb-2">Returns Policy</h3>
          <p>
            Due to the hygienic nature of fine fragrance, we can only accept returns on items where the **security seal 
            remains intact** and the packaging is unopened.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>30-day return window from the date of delivery.</li>
            <li>Full refund to original payment method within 5–10 days.</li>
            <li>Complimentary return labels for boutique exchanges.</li>
          </ul>
        </section>

        <section className="bg-primary/5 p-8 rounded-2xl border border-primary/20 italic">
          <p className="text-sm">"Sampling before selecting": Every 50ml or 100ml purchase includes a discovery vial of the same scent. We invite you to test the vial first—if it does not resonate, you may return the unopened full-size bottle.</p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
