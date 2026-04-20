"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Designer", href: "/category?type=designer" },
  { label: "Niche", href: "/category?type=niche" },
  { label: "Middle Eastern", href: "/category?type=middle-eastern" },
  { label: "Home Fragrance", href: "/category?type=home-fragrance" },
  { label: "Bath & Body", href: "/category?type=bath-body" },
  { label: "Brands", href: "/brands" },
];


export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // Sync auth and cart on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
    setCartCount(storedCart.length);

    const handleCartUpdate = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItems(updatedCart);
      setCartCount(updatedCart.length);
    };

    window.addEventListener("cart-updated", handleCartUpdate);
    return () => window.removeEventListener("cart-updated", handleCartUpdate);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchOpen(false);
      router.push(`/?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const removeFromCart = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartItems(updated);
    setCartCount(updated.length);
  };

  const handleLogout = () => {
    localStorage.removeItem("ve_token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-glass ambient-shadow py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-8 md:px-12 lg:px-16">
          {/* ── Brand ── */}
          <Link href="/" className="flex items-center gap-3 text-on-surface group">
            <div
              className={`size-6 transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-surface"
              }`}
            >
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h2
              className={`font-headline text-base font-bold uppercase tracking-[0.08em] transition-colors duration-300 ${
                scrolled ? "text-on-surface" : "text-surface"
              }`}
            >
              Saurabh Luxe
            </h2>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex flex-1 justify-center gap-7 xl:gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-label text-xs font-bold uppercase tracking-[0.1rem] transition-colors duration-300 hover:text-primary ${
                  scrolled ? "text-on-surface" : "text-surface/90"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Actions ── */}
          <div className="flex items-center gap-3">
            {/* Search toggler */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`hidden md:flex size-9 items-center justify-center rounded-full ghost-border transition-all duration-300 hover:bg-surface-container ${
                scrolled ? "text-on-surface bg-surface-container-low" : "text-surface bg-white/10"
              }`}
              aria-label="Search"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                search
              </span>
            </button>

            {/* Account */}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="hidden xl:block font-label text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-bold">
                  {user.firstName}
                </span>
                <button
                  onClick={handleLogout}
                  className={`size-9 flex items-center justify-center rounded-full ghost-border transition-all duration-300 hover:bg-secondary hover:text-on-primary ${
                    scrolled ? "text-on-surface bg-surface-container-low" : "text-surface bg-white/10"
                  }`}
                  aria-label="Logout"
                  title="Logout"
                >
                  <span className="material-symbols-outlined text-[18px]">logout</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className={`flex size-9 items-center justify-center rounded-full ghost-border transition-all duration-300 hover:bg-surface-container ${
                  scrolled ? "text-on-surface bg-surface-container-low" : "text-surface bg-white/10"
                }`}
                aria-label="Account"
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  person
                </span>
              </Link>
            )}

            {/* Cart toggler */}
            <button
              onClick={() => setCartOpen(true)}
              className={`flex size-9 items-center justify-center rounded-full relative transition-all duration-300 hover:bg-surface-container ${
                scrolled ? "text-on-surface bg-surface-container-low ghost-border" : "text-surface bg-white/10 ghost-border"
              }`}
              aria-label="Shopping bag"
            >
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 0" }}
              >
                shopping_bag
              </span>
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-secondary" />
              )}
            </button>

            {/* Hamburger */}
            <button
              className="lg:hidden flex size-9 items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-colors duration-300 ${
                  scrolled ? "text-on-surface" : "text-surface"
                }`}
              >
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-glass border-t border-outline-variant/10 px-8 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-label text-xs font-bold uppercase tracking-[0.1rem] text-on-surface hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-2 border-t border-outline-variant/15 mt-2">
              <button 
                onClick={() => {setSearchOpen(true); setMobileOpen(false);}}
                className="font-label text-xs font-bold uppercase tracking-[0.1rem] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>search</span>
                Search
              </button>
              {user ? (
                <button
                  onClick={handleLogout}
                  className="font-label text-xs font-bold uppercase tracking-[0.1rem] text-secondary hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">logout</span>
                  Logout ({user.firstName})
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="font-label text-xs font-bold uppercase tracking-[0.1rem] text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
                  Account
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Search Overlay ── */}
      <div className={`fixed inset-0 z-[100] bg-surface flex flex-col transition-all duration-500 ${searchOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="p-8 flex justify-end">
          <button onClick={() => setSearchOpen(false)} className="size-12 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 -mt-20">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-6">Discovery Studio</span>
          <input 
            autoFocus 
            type="text"
            placeholder="Search our collection..."
            className="w-full max-w-2xl bg-transparent border-0 border-b border-on-surface/20 focus:border-on-surface text-center font-headline text-3xl md:text-5xl py-8 focus:outline-none placeholder-on-surface/20"
            onKeyDown={handleSearch}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="mt-12 flex gap-4 overflow-x-auto max-w-full pb-4 scrollbar-hide">
            {['Oud', 'Rose', 'Niche', 'Sandalwood', 'Cologne'].map(tag => (
              <button 
                key={tag} 
                onClick={() => {
                  setSearchQuery(tag);
                  router.push(`/?search=${tag}`);
                  setSearchOpen(false);
                }}
                className="px-6 py-2 rounded-full ghost-border font-label text-[10px] uppercase tracking-[0.15em] hover:bg-on-surface hover:text-surface transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cart Drawer ── */}
      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 pointer-events-none ${cartOpen ? 'bg-black/40 pointer-events-auto' : 'bg-transparent'}`}
        onClick={() => setCartOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl transition-transform duration-500 ease-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight">Shopping Bag ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)} className="size-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto space-y-8 pr-2">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-6 group animate-fade-up">
                    <div className="size-24 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-headline text-base font-bold">{item.name}</h4>
                        <span className="font-body text-sm font-bold">₹{item.price}</span>
                      </div>
                      <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-4">{item.category}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="font-label text-[10px] underline underline-offset-4 text-on-surface-variant/70 hover:text-secondary tracking-widest uppercase transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <span className="material-symbols-outlined text-4xl mb-4">shopping_bag</span>
                  <p className="font-label text-xs uppercase tracking-widest">Your bag is empty</p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-outline-variant/20 mt-8">
              <div className="flex justify-between items-center mb-6">
                <span className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">Subtotal</span>
                <span className="font-headline text-xl font-bold">
                  ₹{cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
                </span>
              </div>
              <button className="w-full py-4 btn-primary-gradient text-on-primary font-label text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-xl transition-all">
                Proceed to Checkout
              </button>
              <p className="text-center font-body text-[10px] text-on-surface-variant/60 mt-4 italic">Free shipping on all luxury orders over ₹150</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

