
import React from 'react';
import SocialLinks from '@/components/SocialLinks';
const Footer = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-black flex flex-col items-center">
      {/* Social Icons */}
      <SocialLinks className="mb-10" />
      
      {/* Brand Message */}
      <div className="text-center space-y-4">
        <p className="tracking-[0.4em] uppercase text-zinc-500 text-[11px] font-black">
          Building a bridge to South Sudan
        </p>
        
        {/* Simple Copyright */}
        <p className="text-zinc-800 text-[9px] uppercase tracking-widest">
          © {new Date().getFullYear()} Children of the Nile
        </p>
      </div>
    </footer>
  );
};

export default Footer;