import React, { useState, useEffect } from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    image: "./src/assets/user1.jpg",
  },
  {
    id: 2,
    image: "./src/assets/user2.jpg",
  },
  {
    id: 3,
    image: "./src/assets/user3.jpg",
  },
  {
    id: 4,
    image: "./src/assets/user1.jpg",
  },
  {
    id: 5,
    image: "./src/assets/user2.jpg",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleIndicatorClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="testimonials-section">
      <div className="testimonial-card">
        <img
          src={testimonials[current].image}
          alt={`Testimonial ${current + 1}`}
          className="testimonial-image"
        />
      </div>
      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
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

export default TestimonialsSection;
