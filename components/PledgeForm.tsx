"use client"; // This tells Next.js this component is interactive

import { useState } from 'react';

export default function PledgeForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, we'll just simulate a successful save
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center py-12 bg-zinc-900 rounded-3xl border border-orange-500/50 p-8">
        <h2 className="text-3xl font-bold text-white mb-4">Thank You! 🏀</h2>
        <p className="text-gray-400">Your pledge has been received. We will email you the shipping instructions shortly.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-orange-500 hover:underline text-sm font-bold uppercase"
        >
          Make another pledge
        </button>
      </div>
    );
  }

  return (
    <section id="donate" className="max-w-xl mx-auto py-12 px-6 bg-zinc-900 rounded-3xl border border-white/5 p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">Pledge Your Gear</h2>
        <p className="text-gray-400 mt-2">Fill out the details below and we'll handle the rest.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email Address</label>
          <input 
            required
            type="email" 
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-2">What are you donating?</label>
          <textarea 
            required
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all h-32"
            placeholder="Example: 2 pairs of Nike size 11, 1 basketball jersey..."
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-black py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg shadow-orange-600/20"
        >
          Submit Pledge
        </button>
      </form>
    </section>
  );
}