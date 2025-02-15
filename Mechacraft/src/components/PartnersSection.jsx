import React, { useState, useEffect } from "react";
import "./PartnersSection.css"; // Import your CSS file for this section

const partnerLogos = [
  {
    id: 1,
    image: "./src/assets/partner1.png",
  },
  {
    id: 2,
    image: "./src/assets/partner2.png",
  },
  {
    id: 3,
    image: "./src/assets/partner3.png",
  },
  {
    id: 4,
    image: "./src/assets/partner4.png",
  },
  {
    id: 5,
    image: "./src/assets/partner5.png",
  },
];

const PartnersSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % partnerLogos.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="partners-section">
      <h2 className="section--heading">Our Trusted Partners</h2>
      <div className="partner-slider">
        {[...partnerLogos, ...partnerLogos].map((partner, index) => (
          <div className="partner-card" key={index}>
            <img
              src={partner.image}
              alt={`Partner ${index + 1}`}
              className="partner-logo"
            />
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {partnerLogos.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === current ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
