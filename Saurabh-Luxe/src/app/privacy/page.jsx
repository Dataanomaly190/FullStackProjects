import InfoPageLayout from "@/components/InfoPageLayout";

export default function PrivacyPage() {
  return (
    <InfoPageLayout title="Privacy Policy" eyebrow="Your Transparency">
      <div className="space-y-12">
        <section>
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider">Commitment to Privacy</h2>
          <p>
            At Maison Saurabh Luxe, your privacy is as paramount as the quality of our fragrances. This Privacy Policy 
            outlines how we collect, use, and protect your personal information when you engage with our boutique experience online.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">1. Information Collection</h3>
          <p>
            We collect information you provide directly—such as your name, email address, shipping details, and payment 
            information—whenever you purchase a masterpiece from our collection or subscribe to our private newsletter.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">2. Use of Information</h3>
          <p>
            Your data allows us to process your orders, provide artisanal client support, and send you exclusive invitations 
            to private releases. We do not sell your personal data to third parties.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="font-headline text-lg font-bold text-on-surface uppercase">3. Security Measures</h3>
          <p>
            We implement state-of-the-art encryption and security protocols to ensure your transaction and identity remain 
            within our inner circle, protected from any unauthorized access.
          </p>
        </section>

        <section className="mt-12 p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-lowest">
          <p className="font-body text-xs italic opacity-70">
            Last Updated: April 2026. For further questions regarding your data, please contact our Data Protection Officer at 
            privacy@saurabhluxe.com.
          </p>
        </section>
      </div>
    </InfoPageLayout>
  );
}
