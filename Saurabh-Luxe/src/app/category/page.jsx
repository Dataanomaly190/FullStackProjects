import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

export default function CategoryPage({ searchParams }) {
  const categorySlug = searchParams.type;
  
  // Map slugs to filter names
  const categoryMap = {
    "niche": "Niche",
    "designer": "Designer",
    "middle-eastern": "Middle Eastern",
    "home-fragrance": "Home Fragrance",
    "bath-body": "Bath & Body",
    "bath-&-body": "Bath & Body",
    "brands": "Brands",
    "best-sellers": "Best Sellers",
    "new-arrivals": "New Arrivals",
    "gifts": "Gift Sets",
    "men": "Men's Collection",
    "women": "Women's Collection",
    "all": "All Perfumes"
  };

  const activeCategory = categoryMap[categorySlug] || "All";

  return (
    <main className="min-h-screen bg-surface flex flex-col">
      <Navbar />
      
      {/* Category Header */}
      <div className="pt-48 pb-24 px-6 text-center bg-primary relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="0" r="80" fill="currentColor" className="text-white" />
          </svg>
        </div>

        <span className="relative z-10 font-label text-[10px] font-bold uppercase tracking-[0.4em] text-on-primary/60 mb-6 block">
          The Collection
        </span>
        <h1 className="relative z-10 font-headline text-5xl md:text-8xl font-black tracking-tighter text-on-primary mb-8">
          {activeCategory}
        </h1>
        <p className="relative z-10 font-body text-base text-on-primary/80 max-w-xl mx-auto leading-relaxed italic">
          Exploring the world&apos;s most evocative {activeCategory === "All" ? "fragrances" : activeCategory.toLowerCase() + " scents"}, 
          meticulously curated for the modern connoisseur.
        </p>
      </div>

      <div className="flex-grow">
        <ProductGrid initialCategory={activeCategory} />
      </div>

      <Footer />
    </main>
  );
}
