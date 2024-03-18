// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero"; // Make sure this path is correct
import ServiceCard from "../components/ServiceCard"; // Make sure this path is correct

const HomePage = () => {
  // Example services data
  const services = [
    {
      id: 1,
      title: "Family Photography",
      description:
        "Capture your family's precious moments with our family photography package.",
      imageUrl: "path-to-family-photography-image.jpg" // Replace with actual image path
    },
    {
      id: 2,
      title: "Wedding Photography",
      description:
        "Our wedding photography services will help you cherish your special day forever.",
      imageUrl: "path-to-wedding-photography-image.jpg" // Replace with actual image path
    }
    // Add more services as needed
  ];

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
