export default function Navbar() {
  return (
    <nav className="w-full py-6 px-10 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="text-white font-black text-xl tracking-tighter">
        NILE<span className="text-orange-500">OPS</span>
      </div>
      <div className="flex gap-8 text-sm font-bold text-gray-300 uppercase tracking-widest">
        <a href="#" className="hover:text-orange-500 transition-colors">Mission</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Donate</a>
        <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
      </div>
    </nav>
  );
}