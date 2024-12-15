import React, { useState, useEffect } from "react";
import "./EventsSlider.css"; // Import external CSS
import games1 from "../../assets/EventsPage_assets/games1.png";
import games2 from "../../assets/EventsPage_assets/games2.png";
import games3 from "../../assets/EventsPage_assets/games3.png";
import games4 from "../../assets/EventsPage_assets/games4.png";
import location from '../../assets/EventsPage_assets/location.png'

function EventSlider (){
  const events = [
    {
      id: 1,
      title: "One7 Cricket Championship 2024",
      date: "15-10-2024",
      location: "Central Sports Complex, Mumbai",
      description:
        "A four-day tournament featuring top local teams battling for the championship title in an exciting knockout format.",
      image: games1,
    },
    {
      id: 2,
      title: "Regional Basketball League 2024",
      date: "20-11-2024",
      location: "City Stadium, Delhi",
      description:
        "Elite basketball teams compete in this prestigious regional tournament showcasing the best talent in the country.",
      image: games2,
    },
    {
      id: 3,
      title: "National Soccer Cup 2024",
      date: "05-12-2024",
      location: "Sports Arena, Bangalore",
      description:
        "The biggest soccer tournament of the year featuring teams from across the nation in a battle for glory.",
      image: games3,
    },
    {
      id: 4,
      title: "National Soccer Cup 2024",
      date: "05-12-2024",
      location: "Sports Arena, Bangalore",
      description:
        "The biggest soccer tournament of the year featuring teams from across the nation in a battle for glory.",
      image: games4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000); // 3-second interval
    return () => clearInterval(interval);
  }, [events.length]);

  return (
    <div>
      <div className="relative h-[60vh] w-[90vw] sm:h-[90vh] m-auto mt-[2rem] mb-[2rem] overflow-hidden rounded-lg">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`slide absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              backgroundImage: `url(${event.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            <div className="inline-block px-3 py-2 mb-4 text-sm text-white font-medium bg-[#1C66EE] rounded-xl my-4 mx-4">
                UPCOMING TOURNAMENTS
            </div>
            {/* Content */}
            <div className="absolute bottom-12 left-8 text-white">
              <p className="text-sm mb-1">{event.date}</p>
              <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-300 mb-3">{event.description}</p>
              <div className="flex gap-2 mb-4 text-sm">
                <img className="w-5" src={location} alt="" />
                <span className="font-medium">Location: </span>
                {event.location}
              </div>
              <button className="px-6 py-2 border-2 border-white text-sm rounded-xl hover:bg-white hover:text-black transition-colors">
                KNOW MORE
              </button>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-6" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );  
};  

export default EventSlider;
