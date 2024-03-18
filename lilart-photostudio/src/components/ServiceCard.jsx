// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
