import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export const metadata = {
  title: "Client Transformations | FRIEND'Z DEN Fitness",
  description: "See the incredible fitness transformations of our members at FRIEND'Z DEN in Gachibowli.",
};

const transformations = [
  { name: "Rahul M.", result: "-15kg in 4 Months", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1000", quote: "The trainers here completely changed my approach to fitness and diet." },
  { name: "Priya S.", result: "Strength & Toning", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000", quote: "Zumba and strength training helped me gain so much confidence!" },
  { name: "Karthik R.", result: "Muscle Gain (+8kg)", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000", quote: "Best equipment in Gachibowli for serious lifters. Great community." },
];

export default function TransformationsPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 mb-20 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          Real <span className="text-gradient">Results</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 leading-relaxed">
          Don&apos;t just take our word for it. See how our members at FRIEND&apos;Z DEN have transformed their bodies, minds, and lives through consistency and coaching.
        </p>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <div key={i} className="glass-panel p-6 rounded-3xl group">
              <div className="w-full h-80 rounded-2xl overflow-hidden mb-6 relative">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#FF6A00] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {t.result}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{t.name}</h3>
              <div className="flex text-[#FF6A00] mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-white/70 italic">&quot;{t.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">You Are Next.</h2>
        <Link href="/book-trial" className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition-transform inline-block">
          Start Your Transformation
        </Link>
      </div>
    </div>
  );
}
