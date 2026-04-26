import React from 'react';

const SocialLinks = ({ className = "" }: { className?: string }) => {
  const socials = [
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/childrenofthenile',
      // Raw SVG for Instagram
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/mabilmawut',
      // New X Logo SVG
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      )
    },
  ];

  return (
    <div className={`flex gap-6 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-orange-500 transition-colors duration-300"
        >
          {social.svg}
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;