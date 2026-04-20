"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulation for portfolio: Artificial delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const sampleUser = {
        firstName: formData.fullName ? formData.fullName.split(" ")[0] : "Client",
        email: formData.email,
        role: "customer"
      };

      localStorage.setItem("user", JSON.stringify(sampleUser));
      localStorage.setItem("ve_token", "portfolio_token_demo");
      
      window.location.href = "/";
    } catch (err) {
      setError("An error occurred during simulation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="w-full max-w-md bg-surface-container-low p-8 md:p-12 rounded-2xl shadow-xl ambient-shadow">
          <div className="text-center mb-10">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-4 block">
              Maison Saurabh Luxe
            </span>
            <h1 className="font-headline text-3xl font-bold uppercase tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="font-body text-sm text-on-surface-variant mt-2">
              {isLogin 
                ? "Enter your credentials to access your private collection." 
                : "Join our inner circle for exclusive releases and private events."}
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
              <p className="text-secondary text-xs font-bold uppercase tracking-wider text-center">{error}</p>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="animate-fade-up">
                <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">Full Name</label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Alexander Luxe"
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary py-3 font-body text-sm focus:outline-none transition-colors"
                />
              </div>
            )}
            <div>
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="client@saurabhluxe.com"
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary py-3 font-body text-sm focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block">Password</label>
              <input 
                type="password" 
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 focus:border-primary py-3 font-body text-sm focus:outline-none transition-colors"
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-4 btn-primary-gradient text-on-primary font-label text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg hover:shadow-xl transition-all mt-4 flex items-center justify-center gap-2 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? (
                <span className="size-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
              ) : (
                isLogin ? "Sign In" : "Register"
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4"
            >
              {isLogin ? "Need an account? Register here" : "Already a member? Sign in"}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
