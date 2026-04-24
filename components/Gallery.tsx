import React from 'react';

const images = [
  { 
    url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1000&auto=format&fit=crop', 
    alt: 'Basketball court at sunset' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1519861531473-9200362188bf?q=80&w=1000&auto=format&fit=crop', 
    alt: 'Basketball in flight' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=1000&auto=format&fit=crop', 
    alt: 'Pair of basketball sneakers' 
  },
  { 
    url: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop', 
    alt: 'Young players on a court' 
  },
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-orange-500 font-bold tracking-tighter text-3xl uppercase">The Vision in Action</h2>
            <p className="text-zinc-500 text-sm mt-2">Equipping the next generation of athletes in South Sudan.</p>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="aspect-square bg-zinc-900 overflow-hidden rounded-lg">
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;