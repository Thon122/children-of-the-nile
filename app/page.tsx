import Navbar from '@/components/Navbar';
import ImpactCard from '@/components/ImpactCard';
import AboutFounder from '@/components/AboutFounder';
import PledgeForm from '@/components/PledgeForm'; // 1. Import
import GoalTracker from '@/components/GoalTracker';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="flex flex-col items-center pt-20 pb-20 px-6">
        <h1 className="text-white text-5xl md:text-8xl font-black mb-12 text-center tracking-tighter uppercase">
          Children of <span className="text-orange-500">The Nile</span>
        </h1>

        <ImpactCard />

        <div className="w-full mt-20">
          <AboutFounder />
        </div>

        {/* 2. Add the form here */}
        <GoalTracker current={5} target={500} />
        <div className="w-full mt-20">
          <PledgeForm />
        </div>

        <p className="mt-16 text-gray-600 text-xs uppercase tracking-widest text-center">
          Building a bridge to South Sudan
        </p>
      </main>
    </div>
  );
}