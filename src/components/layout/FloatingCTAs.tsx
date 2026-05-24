"use client";
import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, CalendarCheck } from "lucide-react";

export default function FloatingCTAs() {
  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-4">
        <Link 
          href="https://wa.me/919177733687" 
          target="_blank"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform group flex items-center justify-center relative"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-[#111] text-white px-3 py-1.5 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </Link>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg border-t border-white/10 pb-safe">
        <div className="flex items-center justify-between px-2 py-2">
          <Link href="tel:+919177733687" className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-white/70 hover:text-white">
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase">Call</span>
          </Link>
          <Link href="https://wa.me/919177733687" target="_blank" className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-[#25D366]">
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase">WhatsApp</span>
          </Link>
          <Link href="#directions" className="flex-1 flex flex-col items-center justify-center gap-1 py-2 text-white/70 hover:text-white">
            <MapPin className="w-5 h-5" />
            <span className="text-[10px] font-medium uppercase">Map</span>
          </Link>
          <Link href="/book-trial" className="flex-[1.5] flex items-center justify-center gap-2 py-3 bg-gradient-brand rounded-lg text-white font-bold text-sm shadow-[0_0_15px_rgba(255,106,0,0.3)]">
            <CalendarCheck className="w-4 h-4" />
            <span>Trial</span>
          </Link>
        </div>
      </div>
    </>
  );
}
