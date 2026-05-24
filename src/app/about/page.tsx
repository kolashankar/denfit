"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-8">
            About <span className="text-gradient">FRIEND&apos;Z DEN</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed">
            FRIEND&apos;Z DEN is a fitness space built for people who want to become healthier, stronger, and more confident without feeling lost inside a gym.
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6A00] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#0A0A0C]">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-[#FF6A00]">Our Story</h2>
          <p className="text-lg text-white/70 leading-relaxed">
            FRIEND&apos;Z DEN Fitness Center was built around a simple idea — fitness becomes easier when the environment feels motivating, friendly, and consistent. Located in Anjaiah Nagar, Gachibowli, the gym serves students, professionals, beginners, women, and fitness lovers who want structured training and a supportive community.
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-black uppercase tracking-tight text-center mb-16">What Makes Us <span className="text-gradient">Different</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Friendly gym culture",
              "Trainer support",
              "Zumba and group energy",
              "Strength equipment",
              "Beginner-friendly guidance",
              "Women-friendly environment",
              "Local Gachibowli convenience",
              "Transformation-focused approach"
            ].map((feature, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl flex items-start gap-4">
                <CheckCircle2 className="text-[#FF6A00] w-6 h-6 shrink-0 mt-1" />
                <span className="font-semibold text-white/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Promise */}
      <section className="py-24 bg-[#0A0A0C]">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-16 max-w-6xl">
          <div>
            <h2 className="text-3xl font-black uppercase mb-6 text-[#FF6A00]">Our Mission</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              To help every member build strength, discipline, confidence, and long-term fitness through consistent training and supportive guidance.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-black uppercase mb-6 text-[#FF6A00]">Our Promise</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              No intimidation. No confusion. No random workouts. Just focused training, friendly support, and steady progress.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <Link href="/book-trial" className="inline-block bg-gradient-brand text-white px-10 py-5 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:scale-105 transition-transform">
            Book Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>
  );
}
