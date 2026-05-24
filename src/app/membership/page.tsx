"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function MembershipPage() {
  const plans = [
    {
      name: "Basic Gym Access",
      for: "For self-workout members",
      features: [
        "Gym access",
        "Equipment usage",
        "Basic guidance",
        "Flexible timing",
        "Monthly progress check"
      ]
    },
    {
      name: "Gym + Zumba",
      for: "For strength & fun cardio",
      features: [
        "Gym access",
        "Zumba sessions",
        "Group motivation",
        "Cardio support",
        "Fat-loss friendly"
      ],
      highlight: true
    },
    {
      name: "Personal Training",
      for: "For focused transformation",
      features: [
        "Gym access",
        "Trainer-guided workouts",
        "Form correction",
        "Goal-based training",
        "Progress tracking"
      ]
    },
    {
      name: "Transformation Plan",
      for: "For serious body change",
      features: [
        "Personalized workout plan",
        "Nutrition guidance",
        "Weekly check-ins",
        "Strength + fat loss focus",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="relative py-24 md:py-32 overflow-hidden text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
          Membership <span className="text-gradient">Plans</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Plans, offers, and timing may change. Please contact the gym for current membership details and exclusive offers.
        </p>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`glass-panel p-8 rounded-3xl flex flex-col relative overflow-hidden transition-all hover:-translate-y-2 ${plan.highlight ? 'border-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.1)]' : 'border-white/10'}`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 w-full py-1 bg-gradient-brand text-[10px] uppercase font-bold text-center tracking-widest text-white">
                  Most Popular
                </div>
              )}
              
              <div className="mt-4 mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-white/60">{plan.for}</p>
              </div>

              <div className="py-6 border-y border-white/10 mb-6 flex-1">
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? 'text-[#FF6A00]' : 'text-white/40'}`} />
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                href="/contact" 
                className={`w-full py-4 rounded-xl font-bold text-center transition-all ${
                  plan.highlight 
                    ? 'bg-gradient-brand text-white shadow-[0_0_20px_rgba(255,106,0,0.4)]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Enquire {plan.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
