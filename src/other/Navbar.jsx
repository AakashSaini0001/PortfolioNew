import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-[#0a0a0a] sticky top-0 z-50">
      <div className="text-cyan-400 font-bold text-xl">AS</div>
      <div className="hidden md:flex gap-8 text-gray-400 text-sm uppercase tracking-widest">
        <a href="#home"  className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#footer" className="hover:text-white">Contact</a>
      </div>
      <a href='#footer' className="bg-cyan-500 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-cyan-400 transition">
        Get In Touch
      </a>
    </nav>
  );
};

export default Navbar;