"use client";
import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function BookTrialPage() {
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'trial-booking' }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-[#050505]">
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center max-w-6xl">
          {/* Left: Copy */}
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
              Book Your<br /><span className="text-gradient">Free Trial</span> Session
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-lg">
              Come experience FRIEND&apos;Z DEN before joining. Train once, feel the energy, meet the team, and choose the plan that fits your goal.
            </p>
            <div className="space-y-4 mb-10">
              {[
                "Experience the premium equipment",
                "Meet our expert trainers",
                "Feel the friendly community vibe",
                "No commitment required for the trial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#FF6A00] w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative z-10">
            <div className="glass-panel p-8 md:p-10 rounded-[2rem] border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6A00] rounded-full blur-[100px] opacity-10 pointer-events-none" />
              
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Request Sent!</h3>
                  <p className="text-white/70">
                    Thank you! FRIEND&apos;Z DEN team will contact you shortly to confirm your trial session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="grid grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2 col-span-2">
                      <label className="text-sm font-semibold text-white/80">Full Name</label>
                      <input required name="name" type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-semibold text-white/80">Phone Number</label>
                      <input required name="phone" type="tel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="+91 00000 00000" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-semibold text-white/80">WhatsApp Number</label>
                      <input type="tel" name="whatsapp" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="+91 00000 00000" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2">
                      <label className="text-sm font-semibold text-white/80">Interested In</label>
                      <select required name="interest" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors appearance-none">
                        <option value="" className="bg-[#111]">Select a program...</option>
                        <option value="gym" className="bg-[#111]">Gym Membership</option>
                        <option value="zumba" className="bg-[#111]">Zumba</option>
                        <option value="pt" className="bg-[#111]">Personal Training</option>
                        <option value="fat-loss" className="bg-[#111]">Fat Loss</option>
                        <option value="muscle" className="bg-[#111]">Muscle Gain</option>
                        <option value="women" className="bg-[#111]">Women&apos;s Fitness</option>
                        <option value="beginner" className="bg-[#111]">Beginner Program</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-semibold text-white/80">Preferred Date</label>
                      <input required name="date" type="date" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                      <label className="text-sm font-semibold text-white/80">Preferred Time</label>
                      <input required name="time" type="time" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2">
                      <label className="text-sm font-semibold text-white/80">Message (Optional)</label>
                      <textarea name="message" rows={3} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" placeholder="Any specific goals or questions?"></textarea>
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="mt-4 bg-gradient-brand text-white py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(255,106,0,0.3)] hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] transition-all uppercase tracking-wide disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Book My Trial"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
