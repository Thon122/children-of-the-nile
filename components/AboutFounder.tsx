export default function AboutFounder() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
       <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
            <img src="/founder.jpg" alt="Founder of Children of the Nile" className="w-full h-full object-cover"/>
        </div>

        {/* The Story */}
        <div className="space-y-6">
          <h2 className="text-orange-500 font-bold text-sm uppercase tracking-widest">The Vision</h2>
          <h3 className="text-3xl font-bold text-white leading-tight">
            "I've been blessed with opportunities that changed my life."
          </h3>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              As a college basketball player, I know the power of having the right gear. 
              But back home in South Sudan, there are so many kids with the same 
              dreams who don’t even have basic gear.
            </p>
            <p>
              I'm starting <span className="text-white font-semibold">Children of the Nile</span> to 
              give them a chance to play and believe. We're starting with shoes, 
              but we're building something bigger than basketball.
            </p>
          </div>
          
          <div className="pt-4">
            <div className="h-px w-12 bg-orange-500 mb-4"></div>
            <p className="text-white font-bold tracking-tighter">Mabil Mawut</p>
            <p className="text-zinc-500 text-sm"> Freshman forward for the Arizona Wildcats men's basketball team</p>
          </div>
        </div>

      </div>
    </section>
  );
}