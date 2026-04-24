import Navbar from '@/components/Navbar';
import ImpactCard from '@/components/ImpactCard';
import AboutFounder from '@/components/AboutFounder';
import PledgeForm from '@/components/PledgeForm'; // 1. Import
import GoalTracker from '@/components/GoalTracker';
import FAQ from '@/components/FAQ';
import Gallery from '@/components/Gallery';

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
        <FAQ />
        <Gallery/>
        {/* 2. Add the form here */}
        <GoalTracker current={80} target={500} />
        <div className="w-full mt-20">
          <PledgeForm />
        </div>
        
        <p className="tracking-[0.3em] uppercase text-zinc-600 text-[10px] font-bold">
          Building a bridge to South Sudan
        </p>
      </main>
    </div>
  );
}