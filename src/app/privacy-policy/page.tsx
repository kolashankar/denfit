import React from "react";

export const metadata = {
  title: "Privacy Policy | FRIEND'Z DEN Fitness",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10 text-gradient">
          Privacy Policy
        </h1>
        
        <div className="prose prose-invert max-w-none text-white/70">
          <p className="mb-6">Last Updated: May 2026</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you fill out a form, book a trial, or contact us. This may include your name, email address, phone number, and any other information you choose to provide.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to communicate with you, process your requests, schedule trials, and send you updates about FRIEND'Z DEN Fitness Center.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Information Sharing</h2>
          <p className="mb-4">We do not share your personal information with third parties except as necessary to provide our services or as required by law.</p>
          
          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at our Gachibowli facility or via phone at +91 9177733687.</p>
        </div>
      </div>
    </div>
  );
}
