import InfoPageLayout from "@/components/InfoPageLayout";

export default function FAQPage() {
  const FAQS = [
    {
      q: "Are your fragrances 100% authentic?",
      a: "Yes. Every bottle in our collection is sourced directly from the original heritage houses or their officially licensed global distributors. Each purchase includes a certificate of provenance."
    },
    {
      q: "What is an 'Extrait de Parfum'?",
      a: "An Extrait is the highest concentration of perfume oils, typically containing 20-40% aromatic compounds. It is more intimate and has superior longevity (lasting 10-14 hours) compared to an Eau de Parfum."
    },
    {
      q: "Can I cancel my order after it has been placed?",
      a: "Orders can be modified or cancelled within 2 hours of placement by contacting our priority concierge team at concierge@saurabhluxe.com."
    },
    {
      q: "Do you ship worldwide?",
      a: "Indeed. We leverage a premium logistics network to deliver to over 120 countries. Please refer to our Shipping page for specific regional timelines."
    }
  ];

  return (
    <InfoPageLayout title="FAQ" eyebrow="Discovery Assistance">
      <div className="space-y-12">
        <p className="text-center italic opacity-70">Common inquiries from our community of connoisseurs.</p>
        
        <div className="space-y-16">
          {FAQS.map((faq, i) => (
            <div key={i} className="group border-l-2 border-outline-variant/30 pl-8 hover:border-primary transition-colors">
              <h3 className="font-headline text-lg font-bold text-on-surface uppercase mb-4 tracking-wide group-hover:text-primary transition-colors">
                {faq.q}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed opacity-90 italic">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </InfoPageLayout>
  );
}
