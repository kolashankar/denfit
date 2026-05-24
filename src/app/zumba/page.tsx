import React from "react";
import Link from "next/link";
import { ArrowRight, Music, Flame, Users, Calendar } from "lucide-react";

export const metadata = {
  title: "Zumba Classes in Gachibowli | FRIEND'Z DEN",
  description: "High-energy Zumba classes at FRIEND'Z DEN Fitness Center in Gachibowli. Burn calories, build stamina, and have fun with our certified instructors.",
};

export default function ZumbaPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 mb-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[#FF2D2D] mb-8 text-sm font-bold tracking-widest uppercase">
          <Music className="w-4 h-4" /> Dance Fitness
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          Zumba <span className="text-gradient">Classes</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 leading-relaxed">
          Ditch the workout, join the party. Our high-energy Zumba sessions in Gachibowli are designed to help you burn fat, improve cardiovascular health, and build stamina—all while dancing to infectious global beats.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/book-trial" className="bg-[#FF2D2D] text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,45,45,0.4)] hover:scale-105 transition-transform">
            Join a Class
          </Link>
        </div>
      </div>

      {/* Image Banner */}
      <div className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=2000" 
            alt="Zumba Class" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white">Feel the Music.</h2>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Flame className="w-8 h-8" />, title: "Massive Calorie Burn", desc: "Burn hundreds of calories in a single hour of continuous, fun movement." },
            { icon: <Users className="w-8 h-8" />, title: "Amazing Community", desc: "Train with a supportive group that keeps energy levels high and motivation constant." },
            { icon: <Calendar className="w-8 h-8" />, title: "Consistent Results", desc: "Because it's fun, you'll actually look forward to cardio and stay consistent." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-[#FF2D2D]/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#FF2D2D]/10 flex items-center justify-center text-[#FF2D2D] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-8">Ready to Dance?</h2>
        <Link href="/contact" className="inline-flex items-center text-white/80 hover:text-white font-bold tracking-widest uppercase transition-colors">
          View Schedule <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}
