import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false); // Close after clicking link

  return (
    <nav className="fixed top-0 left-0 w-full z-50 
      bg-white/10 backdrop-blur-md shadow-md 
      text-white px-6 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-black"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv8VCDlM64uFv7274Mn3UjHpqXRGtIwAWokg&s' alt="Car Rental Logo" className="h-8" /></h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 text-lg text-black">
        <li><a href="#home" className="hover:text-brown" onClick={closeMenu}>Home</a></li>
        <li><a href="#cars" className="hover:text-brown" onClick={closeMenu}>Cars</a></li>
        <li><a href="#contact" className="hover:text-brown" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Mobile Icon */}
      <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-black/80 text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <li><a href="#home" className="hover:text-brown" onClick={closeMenu}>Home</a></li>
          <li><a href="#cars" className="hover:text-brown" onClick={closeMenu}>Cars</a></li>
          <li><a href="#contact" className="hover:text-brown" onClick={closeMenu}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
