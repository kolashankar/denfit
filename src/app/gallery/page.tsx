import React from "react";
import Link from "next/link";
import { Camera } from "lucide-react";

export const metadata = {
  title: "Gallery | FRIEND'Z DEN Fitness Center",
  description: "Take a tour of FRIEND'Z DEN Fitness Center in Gachibowli. View our premium equipment, Zumba studio, and training floors.",
};

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
];

export default function GalleryPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 mb-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-white/80 mb-8 text-sm font-bold tracking-widest uppercase">
          <Camera className="w-4 h-4" /> Facility Tour
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          The <span className="text-gradient">Den</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 leading-relaxed">
          Premium equipment. Incredible atmosphere. See where the transformations happen.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden glass-panel p-2 hover:border-[#FF6A00]/50 transition-colors">
              <img src={img} alt="Gym Facility" className="w-full rounded-xl object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-24 text-center">
        <Link href="/contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors inline-block">
          Visit Us in Gachibowli
        </Link>
      </div>
    </div>
  );
}
