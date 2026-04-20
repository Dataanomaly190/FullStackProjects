"use client";
import InfoPageLayout from "@/components/InfoPageLayout";

const BRANDS = [
  "Amouage", "Byredo", "Creed", "Diptyque", "Editions de Parfums Frédéric Malle",
  "Floris London", "Guerlain", "Hermès", "Initio Parfums Privés", "Jo Malone London",
  "Kilian Paris", "Le Labo", "Maison Francis Kurkdjian", "Nasomatto", "Ormonde Jayne",
  "Penhaligon's", "Roja Parfums", "Serge Lutens", "Tom Ford", "Ursa Major",
  "Vilhelm Parfumerie", "Xerjoff", "Yves Saint Laurent", "Zaharoff", "Acqua di Parma",
  "Bond No. 9", "Caron", "D.S. & Durga", "Ex Nihilo", "Fragrance Du Bois"
];

export default function BrandsPage() {
  const sortedBrands = [...BRANDS].sort();

  return (
    <InfoPageLayout title="The Houses" eyebrow="Elite Partners">
      <section>
        <p className="font-body text-base text-on-surface-variant text-center max-w-xl mx-auto leading-relaxed italic mb-16">
          Curating the world&apos;s most prestigious fragrance houses, each selected for their 
          commitment to artisanal excellence and olfactory innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-outline-variant/20 border border-outline-variant/20 rounded-2xl overflow-hidden shadow-sm">
          {sortedBrands.map((brand) => (
            <div 
              key={brand}
              className="bg-surface p-10 flex items-center justify-center text-center group hover:bg-surface-container transition-all duration-500 min-h-[160px]"
            >
              <h3 className="font-headline text-lg font-light tracking-wide text-on-surface-variant group-hover:text-primary transition-colors cursor-default">
                {brand}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <p className="font-body text-sm text-on-surface-variant/60 max-w-md mx-auto">
                Seeking a specific house? Our curators are constantly exploring new olfactory territories. 
                Contact our concierge to inquire about boutique releases.
            </p>
        </div>
      </section>
    </InfoPageLayout>
  );
}

