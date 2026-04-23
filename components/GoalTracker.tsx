import React from 'react';

interface GoalTrackerProps {
  current: number;
  target: number;
}

const GoalTracker = ({ current, target }: GoalTrackerProps) => {
  // Calculate the percentage (max 100%)
  const percentage = Math.min(Math.round((current / target) * 100), 100);

  return (
    <div className="max-w-xl mx-auto my-12 px-6 text-white">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-2xl font-bold text-orange-500">{current} Pairs</h3>
          <p className="text-gray-400 text-sm uppercase tracking-widest">Pledged so far</p>
        </div>
        <div className="text-right">
          <span className="text-sm font-bold text-gray-500">GOAL: {target}</span>
        </div>
      </div>

      {/* The Bar Background */}
      <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
        {/* The Fill Layer */}
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-4 text-center text-zinc-500 text-xs italic">
        {percentage}% of our way to providing shoes for an entire community!
      </p>
    </div>
  );
};

export default GoalTracker;