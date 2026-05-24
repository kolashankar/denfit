import React from "react";
import Link from "next/link";

export default function GenericPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
        Coming <span className="text-gradient">Soon</span>
      </h1>
      <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
        This section is currently being updated with fresh content. Please check back later or contact us for more information.
      </p>
      <Link href="/contact" className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition-transform">
        Contact Us
      </Link>
    </div>
  );
}
