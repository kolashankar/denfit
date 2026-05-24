"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Zumba", href: "/zumba" },
    { name: "Transformations", href: "/transformations" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
          isScrolled
            ? "bg-black/70 backdrop-blur-md border-white/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex flex-col relative z-50 group">
            <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-brand transition-all">
              FRIEND&apos;Z DEN
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/60 font-medium">
              Fitness Center · Gachibowli
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:+919177733687"
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/919177733687"
              target="_blank"
              className="p-2 text-white/70 hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
            <Link
              href="/book-trial"
              className="bg-gradient-brand text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)] hover:scale-105 transition-all"
            >
              Book Free Trial
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#050505] z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-500 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 text-center mt-12 w-full px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-brand transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-[1px] w-full max-w-xs bg-white/10 my-4"></div>
          <Link
            href="/book-trial"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-brand text-white px-8 py-3.5 rounded-full text-lg font-bold w-full max-w-xs text-center"
          >
            Book Free Trial
          </Link>
          <div className="flex gap-6 mt-4">
            <Link href="tel:+919177733687" className="flex flex-col items-center gap-2 text-white/70">
              <div className="bg-white/10 p-3 rounded-full"><Phone className="w-6 h-6" /></div>
              <span className="text-xs">Call</span>
            </Link>
            <Link href="https://wa.me/919177733687" target="_blank" className="flex flex-col items-center gap-2 text-white/70">
              <div className="bg-white/10 p-3 rounded-full"><MessageCircle className="w-6 h-6 text-[#25D366]" /></div>
              <span className="text-xs">WhatsApp</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
