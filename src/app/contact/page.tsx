"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
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
        body: JSON.stringify(data),
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
      {/* Header */}
      <section className="relative py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">
          Contact <span className="text-gradient">FRIEND&apos;Z DEN</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          Located in Anjaiah Nagar, Gachibowli, FRIEND&apos;Z DEN Fitness Center is convenient for members from Gachibowli, Kondapur, Kothaguda, Hitech City, Madhapur, and nearby areas.
        </p>
      </section>

      {/* Main Grid */}
      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details & Map */}
          <div className="flex flex-col gap-8">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="tel:+919177733687" className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:border-[#FF6A00] transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#FF6A00] group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Call Us</h3>
                  <p className="text-white/60">+91 9177733687</p>
                </div>
              </Link>

              <Link href="https://wa.me/919177733687" target="_blank" className="glass-panel p-6 rounded-2xl flex flex-col gap-4 hover:border-[#25D366] transition-colors group">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                  <p className="text-white/60">Message Us</p>
                </div>
              </Link>

              <div className="glass-panel p-6 rounded-2xl flex flex-col gap-4 sm:col-span-2">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-[#FF6A00]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                  <p className="text-white/60 leading-relaxed">Anjaiah Nagar, Gachibowli, Hyderabad, Telangana 500084</p>
                </div>
              </div>
            </div>

            {/* Google Map Embed Placeholder */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden glass-panel p-1">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.237302484714!2d78.3533!3d17.4526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI3JzA5LjQiTiA3OMKwMjEnMTEuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-[2rem] h-fit">
            <h2 className="text-3xl font-bold mb-8">Send an Enquiry</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">Message Received!</h3>
                <p className="text-white/70">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                    <label className="text-sm font-semibold text-white/80">Name</label>
                    <input required name="name" type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                    <label className="text-sm font-semibold text-white/80">Phone</label>
                    <input required name="phone" type="tel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-sm font-semibold text-white/80">Goal / Enquiry Type</label>
                    <select required name="goal" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors appearance-none">
                      <option value="" className="bg-[#111]">Select...</option>
                      <option value="weight-loss" className="bg-[#111]">Weight Loss</option>
                      <option value="muscle-gain" className="bg-[#111]">Muscle Gain</option>
                      <option value="zumba" className="bg-[#111]">Zumba</option>
                      <option value="pt" className="bg-[#111]">Personal Training</option>
                      <option value="general" className="bg-[#111]">General Enquiry</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2 col-span-2">
                    <label className="text-sm font-semibold text-white/80">Message</label>
                    <textarea required name="message" rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF6A00] transition-colors"></textarea>
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting} className="mt-4 w-full bg-white/10 hover:bg-[#FF6A00] border border-white/10 hover:border-[#FF6A00] text-white py-4 rounded-xl font-bold transition-all uppercase tracking-wide disabled:opacity-50">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
