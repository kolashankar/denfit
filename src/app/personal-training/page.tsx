import React from "react";
import Link from "next/link";
import { ArrowRight, Target, Activity, Trophy, Dumbbell } from "lucide-react";

export const metadata = {
  title: "Personal Training | FRIEND'Z DEN Fitness",
  description: "Get dedicated 1-on-1 personal training at FRIEND'Z DEN Gachibowli. Achieve your fitness goals faster with custom coaching, nutrition, and accountability.",
};

export default function PTPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 mb-20 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-[#FF6A00] mb-8 text-sm font-bold tracking-widest uppercase">
          <Target className="w-4 h-4" /> 1-on-1 Coaching
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6">
          Personal <span className="text-gradient">Training</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 leading-relaxed">
          Skip the guesswork. Our certified personal trainers in Gachibowli build customized workout and nutrition plans to get you to your goals faster, safer, and with perfect form.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/book-trial" className="bg-gradient-brand text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition-transform">
            Book a Trainer Consultation
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mb-24">
        <div className="w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=2000" 
            alt="Personal Training" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mb-24">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">Why Choose PT?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Activity className="w-6 h-6" />, title: "Custom Plans", desc: "Workouts designed specifically for your body type and goals." },
            { icon: <Dumbbell className="w-6 h-6" />, title: "Form Correction", desc: "Prevent injuries and maximize muscle activation with expert supervision." },
            { icon: <Target className="w-6 h-6" />, title: "Nutrition Advice", desc: "Dietary guidance to fuel your workouts and optimize your results." },
            { icon: <Trophy className="w-6 h-6" />, title: "Accountability", desc: "Stay motivated with a coach who is dedicated to your success." }
          ].map((item, i) => (
            <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 hover:border-[#FF6A00]/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
