"use client";
import { useState } from "react";
import Link from "next/link";

const SHOP_LINKS = [
  { label: "All Perfumes", href: "/category?type=all" },
  { label: "Best Sellers", href: "/category?type=best-sellers" },
  { label: "New Arrivals", href: "/category?type=new-arrivals" },
  { label: "Gift Sets", href: "/category?type=gifts" },
  { label: "Men's", href: "/category?type=men" },
  { label: "Women's", href: "/category?type=women" },
];

const CARE_LINKS = [
  { label: "Contact Us", href: "/contact" },
  { label: "Shipping & Returns", href: "/shipping" },
  { label: "FAQ", href: "/faq" },
  { label: "Fragrance Consultation", href: "/consultation" },
  { label: "Track Order", href: "/shipping" },
];

const SOCIAL_LINKS = [
  { icon: "instagram", label: "Instagram", href: "https://instagram.com", path: "M24 4.4c6.4 0 7.1.1 9.6.2 2.3.1 3.5.5 4.4.8 1.1.4 2 .9 2.9 1.8.9.9 1.4 1.8 1.8 2.9.3.9.7 2.1.8 4.4 0 2.5.1 3.2.1 9.6s-.1 7.1-.1 9.6c-.1 2.3-.5 3.5-.8 4.4-.4 1.1-.9 2-1.8 2.9-.9.9-1.8 1.4-2.9 1.8-.9.3-2.1.7-4.4.8-2.5 0-3.2.1-9.6.1s-7.1-.1-9.6-.1c-2.3-.1-3.5-.5-4.4-.8-1.1-.4-2-.9-2.9-1.8-.9-.9-1.4-1.8-1.8-2.9-.3-.9-.7-2.1-.8-4.4 0-2.5-.1-3.2-.1-9.6s.1-7.1.1-9.6c.1-2.3.5-3.5.8-4.4.4-1.1.9-2 1.8-2.9.9-.9 1.8-1.4 2.9-1.8.9-.3 2.1-.7 4.4-.8 2.5-.1 3.2-.2 9.6-.2m0-4.4c-6.5 0-7.3.1-9.8.2-2.5.1-4.2.5-5.7 1.1-1.5.6-2.8 1.4-4.1 2.7-1.3 1.3-2.1 2.6-2.7 4.1-.6 1.5-1 3.2-1.1 5.7-.1 2.5-.2 3.3-.2 9.8s.1 7.3.2 9.8c.1 2.5.5 4.2 1.1 5.7.6 1.5 1.4 2.8 2.7 4.1s2.6 2.1 4.1 2.7c1.5.6 3.2 1 5.7 1.1 2.5.1 3.3.2 9.8.2s7.3-.1 9.8-.2c2.5-.1 4.2-.5 5.7-1.1 1.5-.6 2.8-1.4 4.1-2.7s2.1-2.6 2.7-4.1c.6-1.5 1-3.2 1.1-5.7.1-2.5.2-3.3.2-9.8s-.1-7.3-.2-9.8c-.1-2.5-.5-4.2-1.1-5.7-.6-1.5-1.4-2.8-2.7-4.1s-2.6-2.1-4.1-2.7c-1.5-.6-3.2-1-5.7-1.1-2.5-.1-3.3-.2-9.8-.2z M24 11.6c-6.9 0-12.4 5.5-12.4 12.4s5.5 12.4 12.4 12.4 12.4-5.5 12.4-12.4-5.5-12.4-12.4-12.4zm0 20.4c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z M36.9 8.2c-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9-1.3-2.9-2.9-2.9z" },

  { icon: "pinterest", label: "Pinterest", href: "https://pinterest.com", path: "M24 2C11.8 2 2 11.8 2 24c0 9.3 5.8 17.3 14 20.4-.2-1.7-.4-4.4.1-6.4.4-1.8 2.6-11 2.6-11s-.7-1.3-.7-3.3c0-3.1 1.8-5.4 4.1-5.4 1.9 0 2.8 1.4 2.8 3.2 0 1.9-1.2 4.8-1.8 7.5-.5 2.2 1.1 4 3.3 4 3.9 0 7-4.2 7-10.2 0-5.3-3.8-9.1-9.3-9.1-6.3 0-10 4.7-10 9.6 0 1.9.7 4 1.6 5 .2.2.2.4.1.7-.2.8-.6 2.4-.7 2.7-.1.4-.3.5-.7.3-2.7-1.3-4.2-5.2-4.2-8.3 0-6.8 4.9-13 14.1-13 7.4 0 13.2 5.3 13.2 12.4 0 7.4-4.6 13.3-11.1 13.3-2.2 0-4.2-1.1-4.9-2.5l-1.3 5.1c-.5 1.8-1.8 4.1-2.7 5.5C18.9 45.4 21.4 46 24 46c12.2 0 22-9.8 22-22S36.2 2 24 2z" },
  { icon: "tiktok", label: "TikTok", href: "https://tiktok.com", path: "M41 12.1a1 1 0 0 0-1-1h-2a11.1 11.1 0 0 1-5.6-1.6A11.1 11.1 0 0 1 29 4H19v26.5a6.5 6.5 0 1 1-10.6-5.1 6.3 6.3 0 0 1 4.1-1.4c.5 0 1 .1 1.5.2a1 1 0 0 0 1.1-.6l1-2.4a1 1 0 0 0-.4-1.2A11.3 11.3 0 0 0 12.5 19 11.5 11.5 0 1 0 24 30.5V17.1a16.1 16.1 0 0 0 10.4 4A16.4 16.4 0 0 0 39.3 19a1 1 0 0 0 .7-1v-4.6a1 1 0 0 0-1-1.3z" },
  { icon: "x", label: "X", href: "https://twitter.com", path: "M18.9 4H4l11.6 15.5L4 35.7h3.6l10-10.7L25 35.7h13.1L25.6 21 36.4 4h-3.6L23.9 13.7 18.9 4zm-1.5 3.1h2.5l14 18.6h-2.5l-14-18.6z" }
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    
    // In portfolio mode, we just simulate the success
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-surface-dim">
      {/* Newsletter Strip */}
      <div className="bg-primary py-16 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <span className="font-label text-[10px] font-bold uppercase tracking-[0.2rem] text-on-primary/60 block mb-3">
              The Atelier Insider
            </span>
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-on-primary leading-tight">
              Receive Private Access
            </h3>
            <p className="font-body text-sm text-on-primary/70 mt-2 max-w-sm">
              Exclusive releases, private events, and the art of perfumery — delivered.
            </p>
          </div>

          {subscribed ? (
            <div className="font-label text-sm font-bold uppercase tracking-[0.12rem] text-on-primary/80 flex items-center gap-3">
              <span className="text-2xl">✓</span> You're on the list
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-0 w-full max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border-0 border-b-2 border-on-primary/30 focus:border-on-primary pb-2 font-body text-sm text-on-primary placeholder-on-primary/40 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="ml-4 shrink-0 size-9 flex items-center justify-center rounded-full bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-colors"
                aria-label="Subscribe"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="pt-20 pb-12 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-outline-variant/20">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-on-surface">
              <div className="size-5 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    clipRule="evenodd"
                    d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="font-headline text-base font-bold uppercase tracking-[0.08em]">
                Saurabh Luxe
              </h2>
            </Link>
            <p className="font-body text-sm text-on-surface-variant max-w-xs leading-relaxed">
              Curators of the finest olfactory experiences. Elevating the art of
              perfumery for the modern connoisseur.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="size-11 flex items-center justify-center rounded-full ghost-border text-on-surface-variant hover:text-on-primary hover:bg-primary hover:border-primary transition-all duration-500"
                >
                  <svg className="size-6 fill-current" viewBox="0 0 48 48">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-[0.15rem] text-on-surface mb-3">
              Shop
            </h4>
            {SHOP_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Client Care */}
          <div className="flex flex-col gap-3">
            <h4 className="font-label text-xs font-bold uppercase tracking-[0.15rem] text-on-surface mb-3">
              Client Care
            </h4>
            {CARE_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col gap-5">
            <h4 className="font-label text-xs font-bold uppercase tracking-[0.15rem] text-on-surface mb-1">
              Our Promise
            </h4>
            {[
              { icon: "verified", label: "100% Authentic Guarantee" },
              { icon: "local_shipping", label: "Free Shipping Over ₹150" },
              { icon: "replay", label: "30-Day Easy Returns" },
              { icon: "lock", label: "Secure & Encrypted Checkout" },
            ].map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-[18px] text-primary shrink-0"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  {badge.icon}
                </span>
                <span className="font-body text-xs text-on-surface-variant">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-on-surface-variant">
            © {new Date().getFullYear()} Saurabh Luxe. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors"
            >
              Cookie Preferences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
