import React from "react";

export const metadata = {
  title: "Terms & Conditions | FRIEND'Z DEN Fitness",
};

export default function TermsPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10 text-gradient">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-invert max-w-none text-white/70">
          <p className="mb-6">Last Updated: May 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Membership & Access</h2>
          <p className="mb-4">Members must present valid identification upon joining. Membership fees are non-refundable and non-transferable. Access to the gym is limited to operating hours.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Gym Rules & Conduct</h2>
          <p className="mb-4">All members must follow gym rules, re-rack weights after use, use towels on machines, and treat staff and other members with respect. Management reserves the right to terminate memberships for inappropriate behavior.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Liability</h2>
          <p className="mb-4">Members use the facility and equipment at their own risk. FRIEND'Z DEN Fitness Center is not liable for any injuries, accidents, or loss of personal property that occurs on the premises.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Personal Training & Classes</h2>
          <p className="mb-4">Personal training sessions and class bookings must be cancelled at least 24 hours in advance to avoid being charged.</p>
        </div>
      </div>
    </div>
  );
}
