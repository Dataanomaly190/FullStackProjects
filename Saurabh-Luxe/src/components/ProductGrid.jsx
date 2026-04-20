"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
  {
    id: 1,
    slug: "midnight-rose-absolu",
    name: "Midnight Rose Absolu",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 340,
    badge: "Best Seller",
    desc: "A dark, mysterious blend of Taif rose, oud, and spiced saffron.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 2,
    slug: "oud-majesty",
    name: "Oud Majesty",
    category: "Extrait de Parfum",
    classification: "Middle Eastern",
    price: 410,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    slug: "amber-whispers",
    name: "Amber Whispers",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 185,
    badge: "New",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    slug: "bergamot-breeze",
    name: "Bergamot Breeze",
    category: "Cologne",
    classification: "Designer",
    price: 150,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    slug: "vanilla-twilight",
    name: "Vanilla Twilight",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 195,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    slug: "sandalwood-dreams",
    name: "Sandalwood Dreams",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 280,
    badge: "Limited",
    desc: "Creamy Mysore sandalwood elevated by bright citrus and soft musk.",
    image: "https://images.unsplash.com/photo-1615233500270-d8308433d745?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 7,
    slug: "jasmine-nights",
    name: "Jasmine Nights",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 175,
    image: "https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    slug: "citrus-sunrise",
    name: "Citrus Sunrise",
    category: "Cologne",
    classification: "Home Fragrance",
    price: 160,
    image: "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 9,
    slug: "royal-bloom",
    name: "Royal Bloom",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 290,
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 10,
    slug: "velvet-oud",
    name: "Velvet Oud",
    category: "Extrait de Parfum",
    classification: "Middle Eastern",
    price: 450,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 11,
    slug: "oceanic-mist",
    name: "Oceanic Mist",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 140,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 12,
    slug: "spiced-elixir",
    name: "Spiced Elixir",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 210,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 13,
    slug: "silk-road-bath",
    name: "Silk Road Body Wash",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 85,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 14,
    slug: "midnight-rose-lotion",
    name: "Midnight Rose Lotion",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 95,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 15,
    slug: "lavender-fields-candle",
    name: "Lavender Fields Candle",
    category: "Home Fragrance",
    classification: "Home Fragrance",
    price: 120,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 16,
    slug: "alchemists-secret",
    name: "The Alchemist's Secret",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 520,
    badge: "Rare",
    desc: "A legendary formula of golden amber, ancient scrolls, and rare minerals.",
    image: "https://images.unsplash.com/photo-1615484477778-93517f1fbc3e?auto=format&fit=crop&q=80&w=800",
    featured: true,
  },
  {
    id: 17,
    slug: "midnight-in-giza",
    name: "Midnight in Giza",
    category: "Eau de Parfum",
    classification: "Middle Eastern",
    price: 380,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 18,
    slug: "tuscan-leather-soul",
    name: "Tuscan Leather Soul",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 245,
    image: "https://images.unsplash.com/photo-1557170334-a7c3c40d002d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 19,
    slug: "sicilian-bergamot",
    name: "Sicilian Bergamot",
    category: "Body Cream",
    classification: "Bath & Body",
    price: 75,
    image: "https://images.unsplash.com/photo-1616948055599-9686005cbbbf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 20,
    slug: "noir-obsidian",
    name: "Noir Obsidian",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 490,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 21,
    slug: "emerald-forest",
    name: "Emerald Forest",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 130,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 22,
    slug: "desert-rose-oil",
    name: "Desert Rose Attar",
    category: "Perfume Oil",
    classification: "Middle Eastern",
    price: 310,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 23,
    slug: "white-musk-serenity",
    name: "White Musk Serenity",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 165,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 24,
    slug: "santorini-sunset",
    name: "Santorini Sunset",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 275,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 25,
    slug: "patchouli-dark",
    name: "Patchouli Dark",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 320,
    image: "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 26,
    slug: "saffron-gold",
    name: "Saffron Gold",
    category: "Eau de Parfum",
    classification: "Middle Eastern",
    price: 395,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 27,
    slug: "winter-cedar-candle",
    name: "Winter Cedar Candle",
    category: "Home Fragrance",
    classification: "Home Fragrance",
    price: 110,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 28,
    slug: "neroli-sky",
    name: "Neroli Sky",
    category: "Cologne",
    classification: "Designer",
    price: 145,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 29,
    slug: "viking-spirit",
    name: "Viking Spirit",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 430,
    image: "https://images.unsplash.com/photo-1615233500270-d8308433d745?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 30,
    slug: "royal-vetiver",
    name: "Royal Vetiver",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 210,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 31,
    slug: "opulent-amber-wash",
    name: "Opulent Amber Body Wash",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 60,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 32,
    slug: "oriental-pearl",
    name: "Oriental Pearl",
    category: "Eau de Parfum",
    classification: "Middle Eastern",
    price: 360,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 33,
    slug: "citrus-noir",
    name: "Citrus Noir",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 125,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 34,
    slug: "midnight-jasmine-candle",
    name: "Midnight Jasmine Candle",
    category: "Home Fragrance",
    classification: "Home Fragrance",
    price: 95,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 35,
    slug: "eucalyptus-mist",
    name: "Eucalyptus Mist",
    category: "Body Spray",
    classification: "Bath & Body",
    price: 45,
    image: "https://images.unsplash.com/photo-1616948055599-9686005cbbbf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 36,
    slug: "tobacco-reserve",
    name: "Tobacco Reserve",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 315,
    image: "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 37,
    slug: "sailing-day",
    name: "Sailing Day",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 140,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 38,
    slug: "oud-and-oak",
    name: "Oud & Oak",
    category: "Extrait de Parfum",
    classification: "Middle Eastern",
    price: 450,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 39,
    slug: "bergamot-hand-cream",
    name: "Bergamot Hand Cream",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 35,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 40,
    slug: "leather-manor",
    name: "Leather Manor",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 290,
    image: "https://images.unsplash.com/photo-1557170334-a7c3c40d002d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 41,
    slug: "white-linen",
    name: "White Linen",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 120,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 42,
    slug: "santal-sky",
    name: "Santal Sky",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 340,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 43,
    slug: "incense-road",
    name: "Incense Road",
    category: "Extrait de Parfum",
    classification: "Middle Eastern",
    price: 510,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 44,
    slug: "fig-and-leaf",
    name: "Fig & Leaf",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 195,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 45,
    slug: "vanilla-pod-lotion",
    name: "Vanilla Pod Lotion",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 80,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 46,
    slug: "midnight-lavender",
    name: "Midnight Lavender",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 280,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 47,
    slug: "red-velvet-rose",
    name: "Red Velvet Rose",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 220,
    image: "https://images.unsplash.com/photo-1557170334-a7c3c40d002d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 48,
    slug: "musk-alhambra",
    name: "Musk Alhambra",
    category: "Perfume Oil",
    classification: "Middle Eastern",
    price: 290,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 49,
    slug: "sage-and-sea-salt",
    name: "Sage & Sea Salt",
    category: "Cologne",
    classification: "Designer",
    price: 155,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 50,
    slug: "amber-monarch",
    name: "Amber Monarch",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 470,
    image: "https://images.unsplash.com/photo-1585120040315-2241b774ad0f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 51,
    slug: "cherry-blossom-bath",
    name: "Cherry Blossom Soak",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 70,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 52,
    slug: "tuberose-absolute",
    name: "Tuberose Absolute",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 260,
    image: "https://images.unsplash.com/photo-1557170334-a7c3c40d002d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 53,
    slug: "smoke-and-leather",
    name: "Smoke & Leather",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 330,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 54,
    slug: "royal-myrrh",
    name: "Royal Myrrh",
    category: "Extrait de Parfum",
    classification: "Middle Eastern",
    price: 480,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 55,
    slug: "peony-blush",
    name: "Peony Blush",
    category: "Eau de Toilette",
    classification: "Designer",
    price: 135,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 56,
    slug: "vintage-gardenia",
    name: "Vintage Gardenia",
    category: "Eau de Parfum",
    classification: "Niche",
    price: 295,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 57,
    slug: "silk-pyjamas-mist",
    name: "Silk Pyjamas Linen Mist",
    category: "Home Fragrance",
    classification: "Home Fragrance",
    price: 55,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 58,
    slug: "dark-rum-oil",
    name: "Dark Rum Oil",
    category: "Perfume Oil",
    classification: "Niche",
    price: 180,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 59,
    slug: "mediterranean-sea-salt",
    name: "Mediterranean Sea Salt",
    category: "Bath & Body",
    classification: "Bath & Body",
    price: 65,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 60,
    slug: "oud-andalus",
    name: "Oud Andalus",
    category: "Eau de Parfum",
    classification: "Middle Eastern",
    price: 375,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 61,
    slug: "velvet-iris",
    name: "Velvet Iris",
    category: "Eau de Parfum",
    classification: "Designer",
    price: 230,
    image: "https://images.unsplash.com/photo-1557170334-a7c3c40d002d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 62,
    slug: "sandalwood-silk",
    name: "Sandalwood Silk",
    category: "Body Oil",
    classification: "Bath & Body",
    price: 90,
    image: "https://images.unsplash.com/photo-1616948055599-9686005cbbbf?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 63,
    slug: "night-blooming-cereus",
    name: "Night Blooming Cereus",
    category: "Extrait de Parfum",
    classification: "Niche",
    price: 390,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 64,
    slug: "arabic-coffee-candle",
    name: "Arabic Coffee Candle",
    category: "Home Fragrance",
    classification: "Home Fragrance",
    price: 85,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 65,
    slug: "golden-dust",
    name: "Golden Dust",
    category: "Eau de Parfum",
    classification: "Middle Eastern",
    price: 280,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=800",
  }
];

function ProductCard({ product, featured = false, onAuthRequired }) {
  const [wished, setWished] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    
    // Check Authentication
    const user = localStorage.getItem("user");
    if (!user) {
      if (onAuthRequired) onAuthRequired();
      return;
    }
    
    // Manage local cart
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    
    // Notify Navbar
    window.dispatchEvent(new Event("cart-updated"));

    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };

  return (
    <div
      className={`group flex flex-col ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative w-full bg-surface-container-highest rounded-xl mb-7 overflow-hidden aspect-[3/4] shadow-sm hover:shadow-xl transition-shadow duration-500`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('${product.image}')` }}
        />

        {product.badge && (
          <div className="absolute bottom-4 left-4 bg-glass px-4 py-1.5 rounded-full z-10 border border-white/20">
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.12rem] text-on-surface">
              {product.badge}
            </span>
          </div>
        )}

        <button
          onClick={() => setWished(!wished)}
          className="absolute top-4 right-4 size-8 flex items-center justify-center rounded-full bg-glass z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Wishlist"
        >
          <span
            className={`material-symbols-outlined text-[18px] transition-colors duration-300 ${
              wished ? "text-secondary" : "text-on-surface"
            }`}
            style={{ fontVariationSettings: wished ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>

        <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 font-label text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
              addedToCart
                ? "bg-secondary text-on-primary"
                : "btn-primary-gradient text-on-primary"
            }`}
          >
            {addedToCart ? "✓ Added to Bag" : "Quick Add to Bag"}
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start gap-4 h-full">
        <div className="flex-1 min-w-0">
          <span className="font-label text-[10px] font-bold uppercase tracking-[0.12rem] text-on-surface-variant/70 mb-1.5 block">
            {product.classification} • {product.category}
          </span>
          <h3 className={`font-headline font-bold text-on-surface leading-snug mb-1 text-base group-hover:text-primary transition-colors`}>
            {product.name}
          </h3>
          {product.desc && (
            <p className="font-body text-sm text-on-surface-variant mt-1 leading-relaxed line-clamp-2 opacity-80">
              {product.desc}
            </p>
          )}
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <p className={`font-body font-bold text-on-surface text-base`}>
            ₹{product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

const FILTERS = ["All", "Niche", "Designer", "Middle Eastern", "Home Fragrance"];

export default function ProductGrid({ initialCategory = "All" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(6);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const filtered = PRODUCTS.filter((p) => {
    let matchesCategory = 
      activeFilter === "All" ||
      p.classification.toLowerCase() === activeFilter.toLowerCase() ||
      p.category.toLowerCase().includes(activeFilter.toLowerCase());

    // Special handling for functional categories
    if (activeFilter === "Best Sellers") {
      matchesCategory = p.badge === "Best Seller";
    } else if (activeFilter === "New Arrivals") {
      matchesCategory = p.badge === "New";
    }

    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.classification.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const currentProducts = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="py-24 px-6 md:px-14 lg:px-20 xl:px-28 bg-surface relative">
      <div className="flex flex-col items-center text-center mb-14 gap-4">
        <span className="font-label text-[10px] font-bold uppercase tracking-[0.2rem] text-on-surface-variant">
          Hand-Picked
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-[-0.02em] text-on-surface">
          Curated Selection
        </h2>
        <p className="font-body text-base text-on-surface-variant max-w-lg leading-relaxed">
          Masterpieces hand-selected for the discerning connoisseur.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-14">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => {
              setActiveFilter(f);
              setVisibleCount(6);
            }}
            className={`px-5 py-2 rounded-full font-label text-[10px] font-bold uppercase tracking-[0.12rem] transition-all duration-300 ${
              activeFilter === f
                ? "bg-primary text-on-primary"
                : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-14">
        {currentProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            featured={product.featured} 
            onAuthRequired={() => setShowAuthModal(true)}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-20 flex justify-center">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-10 py-3.5 rounded-full ghost-border text-on-surface font-label text-xs font-bold uppercase tracking-[0.15rem] hover:bg-surface-container transition-colors duration-300 flex items-center gap-3"
          >
            Load More Perfumes
            <span
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              expand_more
            </span>
          </button>
        </div>
      )}

      {/* ── Auth Modal ── */}
      <AnimatePresence>
        {showAuthModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAuthModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-surface rounded-2xl shadow-2xl overflow-hidden p-10 text-center"
            >
              <div className="size-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="material-symbols-outlined text-3xl">lock</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 uppercase tracking-tight">Private Collection</h3>
              <p className="font-body text-sm text-on-surface-variant mb-10 leading-relaxed">
                To reserve from our exclusive collection and save your discovery bag, please create or sign in to your membership.
              </p>
              
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push("/login")}
                  className="w-full py-4 btn-primary-gradient text-on-primary font-label text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg"
                >
                  Join the Atelier
                </button>
                <button
                  onClick={() => setShowAuthModal(false)}
                  className="w-full py-4 font-label text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
                >
                  Return to Exploration
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

