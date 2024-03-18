// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/AMMA-Truck logo.png"; // Replace with the path to your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link to="/" className="flex items-center py-5 px-2">
                <img
                  src={logo}
                  alt="LilArt Photo Studio"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-bold">LilArt Photo Studio</span>
              </Link>
            </div>
          </div>
          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-5 px-3">
              Home
            </Link>
            <Link to="/gallery" className="py-5 px-3">
              Gallery
            </Link>
            <Link to="/contact" className="py-5 px-3">
              Contact
            </Link>
            <Link to="/booking" className="py-5 px-3">
              Booking
            </Link>
          </div>
          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  // Icon for X (close menu)
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  // Icon for bars (hamburger menu)
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } md:hidden overflow-hidden transition-max-height duration-700 ease-in-out`}
      >
        <Link
          to="/"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/gallery"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
        <Link
          to="/booking"
          className="block py-2 px-4 text-sm hover:bg-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          Booking
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
