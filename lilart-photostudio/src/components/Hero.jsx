// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Replace with the path to your hero image

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white text-center p-16"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-blue-100 bg-opacity-20"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to LilArt Photo Studio
        </h1>
        <p className="text-xl md:text-2xl">
          Capturing your moments with love and creativity.
        </p>
        <a
          href="#booking"
          className="mt-8 inline-block bg-white text-blue-500 font-semibold py-3 px-6 rounded-lg uppercase tracking-wider hover:bg-opacity-75 transition-opacity duration-300"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
};

export default Hero;
