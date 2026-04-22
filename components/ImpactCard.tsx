export default function ImpactCard() {
  const goal = 500;
  const current = 142; // We can make this "live" later
  const percentage = (current / goal) * 100;

  return (
    <div className="max-w-md mx-auto bg-neutral-900 border border-brand-orange/30 p-8 rounded-3xl shadow-2xl">
      <h3 className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-2">Current Mission</h3>
      <h2 className="text-2xl font-bold text-white mb-6">Shoe Drive for Juba</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400 font-medium">Progress</span>
          <span className="text-white font-bold">{current} / {goal} Pairs</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full bg-neutral-800 h-3 rounded-full overflow-hidden">
          <div 
            className="bg-brand-orange h-full transition-all duration-700 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          We are collecting basketball shoes (sizes 7-15) to send to youth programs in South Sudan. Every pair counts.
        </p>
        
        <button className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">
          Donate Gear Now
        </button>
      </div>
    </div>
  );
}