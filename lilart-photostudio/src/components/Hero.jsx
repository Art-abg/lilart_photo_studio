// src/components/Hero.jsx
import React from "react";
import heroImage from "../assets/hero-image.jpg"; // Replace with the path to your hero image

const Hero = () => {
  // Replace '64px' with the actual height of your header/navbar
  const headerHeight = "64px"; // Example: 4rem or 16 * 4 = 64px

  return (
    <div
      className="relative bg-cover bg-center text-white text-center flex flex-col justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        minHeight: `calc(100vh - ${headerHeight})` // Adjust Hero section height based on header height
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to LilArt Photo Studio
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Capturing your moments with love and creativity.
        </p>
        <a
          href="#booking"
          className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-lg uppercase tracking-wider hover:bg-opacity-75 transition-opacity duration-300"
        >
          Book a Session
        </a>
      </div>
    </div>
  );
};

export default Hero;
