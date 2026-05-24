import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white">
                FRIEND&apos;Z DEN
              </span>
              <span className="text-xs uppercase tracking-wider text-white/60 font-medium">
                Fitness Center
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Train Strong. Transform Together. Your premium fitness destination in Gachibowli for strength, Zumba, and personal training.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF6A00] transition-colors text-xs font-bold">
                IG
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF6A00] transition-colors text-xs font-bold">
                FB
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/70 hover:text-white hover:border-[#FF6A00] transition-colors text-xs font-bold">
                YT
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About', 'Programs', 'Zumba', 'Personal Training', 'Membership', 'Transformations', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/60 hover:text-[#FF6A00] hover:translate-x-1 inline-block transition-all text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Programs</h4>
            <ul className="flex flex-col gap-3">
              {['Strength Training', 'Fat Loss', 'Zumba', 'Personal Training', 'Women\'s Fitness', 'Beginner Fitness'].map((item) => (
                <li key={item}>
                  <Link href={`/programs#${item.toLowerCase().replace(/[' ]/g, '-')}`} className="text-white/60 hover:text-[#FF6A00] hover:translate-x-1 inline-block transition-all text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <span>Anjaiah Nagar, Gachibowli, Hyderabad, Telangana 500084</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-[#FF6A00] shrink-0" />
                <a href="tel:+919177733687" className="hover:text-white transition-colors">+91 9177733687</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                <a href="https://wa.me/919177733687" target="_blank" className="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
            </ul>
            <Link href="/book-trial" className="mt-2 inline-flex justify-center items-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-3 px-6 text-white text-sm font-semibold transition-colors">
              Book Your Free Trial
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} FRIEND&apos;Z DEN Fitness Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-white/40 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/40 hover:text-white text-xs transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
