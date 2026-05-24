"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Dumbbell, Flame, HeartPulse, Trophy, Sparkles, Activity } from "lucide-react";

const programs = [
  {
    id: "strength-training",
    title: "Strength Training",
    icon: <Dumbbell className="w-8 h-8 text-[#FF6A00]" />,
    for: ["Muscle gain", "Power", "Free weights", "Gym confidence", "Progressive overload"],
    desc: "Build serious strength with dumbbells, machines, cable systems, and structured routines designed to improve power, control, and muscle definition.",
    cta: "Start Strength Training"
  },
  {
    id: "fat-loss",
    title: "Fat Loss Program",
    icon: <Flame className="w-8 h-8 text-[#FF2D2D]" />,
    for: ["Weight loss", "Stamina", "Calorie burn", "Body transformation"],
    desc: "A focused combination of cardio, strength training, and guided consistency to help members burn fat, improve energy, and build a leaner body.",
    cta: "Start Fat Loss Journey"
  },
  {
    id: "zumba",
    title: "Zumba Classes",
    icon: <Activity className="w-8 h-8 text-[#00D6FF]" />,
    for: ["Fun workouts", "Dance fitness", "Cardio", "Stamina", "Stress relief"],
    desc: "High-energy Zumba sessions make fitness fun, social, and addictive. Move with music, burn calories, and build consistency with an energetic group atmosphere.",
    cta: "Join Zumba Session",
    link: "/zumba"
  },
  {
    id: "personal-training",
    title: "Personal Training",
    icon: <Trophy className="w-8 h-8 text-[#F5B942]" />,
    for: ["Individual goals", "Form correction", "Accountability", "Faster progress"],
    desc: "Work closely with a trainer for customized workouts, proper form, motivation, and goal-based progress tracking.",
    cta: "Book Personal Training",
    link: "/personal-training"
  },
  {
    id: "womens-fitness",
    title: "Women's Fitness",
    icon: <Sparkles className="w-8 h-8 text-[#FF6A00]" />,
    for: ["Confidence", "Fat loss", "Toning", "Posture", "Strength"],
    desc: "Supportive strength and fitness guidance for women who want to feel stronger, healthier, and more confident inside and outside the gym.",
    cta: "Explore Women's Fitness"
  },
  {
    id: "beginner-fitness",
    title: "Beginner Fitness",
    icon: <HeartPulse className="w-8 h-8 text-[#FF2D2D]" />,
    for: ["First-time gym users", "Basic strength", "Equipment learning", "Habit building"],
    desc: "Start your journey safely with beginner-friendly workouts, equipment guidance, and simple routines that build confidence step by step.",
    cta: "Start as Beginner"
  }
];

export default function ProgramsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
          Training <span className="text-gradient">Programs</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
          Every goal needs the right training path. Choose the program that fits your body, lifestyle, and motivation.
        </p>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => (
            <div key={prog.id} id={prog.id} className="glass-panel p-8 rounded-2xl flex flex-col hover:border-[#FF6A00]/50 transition-colors">
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                {prog.icon}
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{prog.title}</h2>
              <div className="mb-6 flex-1">
                <p className="text-white/70 mb-4 leading-relaxed">{prog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.for.map((item, i) => (
                    <span key={i} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <Link href={prog.link || "/book-trial"} className="mt-auto inline-flex items-center text-[#FF6A00] font-bold hover:text-white transition-colors group">
                {prog.cta}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
