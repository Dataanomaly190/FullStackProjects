import InfoPageLayout from "@/components/InfoPageLayout";

export default function ContactPage() {
  return (
    <InfoPageLayout title="Contact Us" eyebrow="Client Services">
      <div>
        <h2 className="font-headline text-2xl font-bold text-on-surface mb-6 uppercase tracking-wider">Get in Touch</h2>
        <p>
          Thank you for your interest in Maison Saurabh Luxe. We welcome feedback, inquiries, and communication 
          from our esteemed clients, partners, and media professionals.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="p-8 bg-surface-container-low rounded-2xl">
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Direct Communication</h3>
          <div className="space-y-4">
            <p>
              <b className="text-on-surface">Email:</b><br />
              <a href="mailto:concierge@saurabhluxe.com" className="hover:text-primary transition-colors">concierge@saurabhluxe.com</a>
            </p>
            <p>
              <b className="text-on-surface">Phone:</b><br />
              +91 XXXX XXX XXX
            </p>
          </div>
        </div>
        
        <div className="p-8 bg-surface-container-low rounded-2xl">
          <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Address</h3>
          <p>
            The Atelier, 7th Floor<br />
            Luxe Heights, New Delhi<br />
            India - 110001
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <p>
          If you have questions regarding our collections, boutique experiences, editorial information, or general inquiries, 
          please feel free to reach out using the contact details above. 
          Our concierge team will review incoming messages and respond within 24–48 hours.
        </p>
        <p>
          For media inquiries, global partnership opportunities, or brand-related questions, email communication is the preferred method of contact.
        </p>
        <h5 className="font-headline text-xl text-primary font-bold italic mt-12">
          Saurabh Luxe — connecting the world with the essence of elegance.
        </h5>
      </div>
    </InfoPageLayout>
  );
}
