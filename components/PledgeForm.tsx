"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { handlePledge } from '../app/actions/pledge'; // Import your DB action

export default function PledgeForm() {
  const form = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // We make this 'async' so we can 'await' the database save
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    setLoading(true);

    try {
      // 1. ADDED: Save to Database first
      const formData = new FormData(e.currentTarget);
      await handlePledge(formData);

      // 2. ORIGINAL LOGIC: Your perfect EmailJS setup
      await emailjs.sendForm(
        'service_3jc8u51', 
        'template_6tj8kmm', 
        form.current, 
        'Qb96O25mmuXfTB3cp'
      );

      setSubmitted(true);
      setLoading(false);
    } catch (err) {
      console.error("Error:", err);
      alert("Submission failed. Check console.");
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 bg-zinc-900 rounded-3xl border border-orange-500/50 p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Pledge Received! 🏀</h2>
        <p className="text-gray-400">Check your email soon for shipping instructions.</p>
      </div>
    );
  }

  return (
    <section id="donate" className="max-w-xl mx-auto py-12 px-6 bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl" >
      <form ref={form} onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
          {/* Note: 'name' attribute is used by both DB and EmailJS */}
          <input name="from_name" required type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
          <input name="reply_to" required type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500" placeholder="john@example.com" />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Donation Details</label>
          <textarea name="message" required className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-orange-500 h-32" placeholder="Sizes, brands, etc..." />
        </div>
        <button type="submit" disabled={loading} className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-xl uppercase tracking-widest transition-all">
          {loading ? "Sending..." : "Submit Pledge"}
        </button>
      </form>
    </section>
  );
}