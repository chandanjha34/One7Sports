import React, { useState, useEffect } from 'react';
import './Reviews.css'; 


const testimonials = [
  { id: 1, name: 'Runner Up Cricket T20', location: 'Miami, FL', text: 'A top-notch facility with excellent coaching staff! My skills have improved dramatically since joining their training sessions.', image: 'path/to/image1.jpg' },
  { id: 2, name: 'TT Nationals', location: 'Sham Bharata', text: 'A top-notch facility with excellent coaching staff! My skills have improved dramatically since joining their training sessions.', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Champion League', location: 'Rahul Saxena', text: 'Amazing training sessions and incredible support from the team!', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Premier League', location: 'Ravi Kumar', text: 'The best place to improve cricket skills with professional guidance!', image: 'path/to/image4.jpg' },
  { id: 5, name: 'Superstars', location: 'Arjun Patel', text: 'Highly recommend this facility for anyone looking to get better at cricket.', image: 'path/to/image5.jpg' },
  { id: 6, name: 'All-Rounders Club', location: 'Vinay Sharma', text: 'Fantastic experience and great improvement in my game!', image: 'path/to/image6.jpg' },
];

const TestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % Math.ceil(testimonials.length / 2));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    const startIndex = currentPage * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="bg-white py-8 px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">What people say about us</h2>
      <div className="flex justify-center gap-8 overflow-hidden">
        {getVisibleTestimonials().map((testimonial) => (
          <div
            key={testimonial.id}
            className="max-w-sm bg-gray-100 shadow-lg rounded-lg p-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
            <p className="italic mt-2">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
