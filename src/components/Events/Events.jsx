import React, { useState } from "react";
import "./Events.css"; 
import image from '../../assets/Events/image.png'

const eventsData = [
  {
    category: "Cricket",
    events: [
      {
        date: "5",
        month: "April 2020",
        title: "BigBoys League (BBL T20)",
        description:
          "A four-day tournament featuring top local teams battling for the championship title in an exciting knockout format.",
        location: "Central Sports Complex, Mumbai",
        time: "10:00 AM - 2:00 PM",
        image: image, // Replace with your image path
      },
      {
        date: "5",
        month: "April 2020",
        title: "The Great Indian Corporate Cricket League (TGICCL)",
        description:
          "A thrilling tournament featuring skilled players competing for glory.",
        location: "Central Stadium, Delhi",
        time: "2:00 PM - 5:00 PM",
        image: image,
      },
      {
        date: "5",
        month: "April 2020",
        title: "The Great Indian Corporate Cricket League (TGICCL)",
        description:
          "A thrilling tournament featuring skilled players competing for glory.",
        location: "Central Stadium, Delhi",
        time: "2:00 PM - 5:00 PM",
        image: image,
      },

    ],
  },
  {
    category: "Badminton",
    events: [
      {
        date: "7",
        month: "April 2020",
        title: "One7 Premier League (OPL)",
        description:
          "A competitive badminton event with top-notch players from across the city.",
        location: "Sports Hall, Bangalore",
        time: "12:00 PM - 4:00 PM",
        image: image,
      },
      {
        date: "7",
        month: "April 2020",
        title: "One7 Premier League (OPL)",
        description:
          "A competitive badminton event with top-notch players from across the city.",
        location: "Sports Hall, Bangalore",
        time: "12:00 PM - 4:00 PM",
        image: image,
      },
      {
        date: "7",
        month: "April 2020",
        title: "One7 Premier League (OPL)",
        description:
          "A competitive badminton event with top-notch players from across the city.",
        location: "Sports Hall, Bangalore",
        time: "12:00 PM - 4:00 PM",
        image: image,
      },
    ],
  },
  {
    category: "Tennis",
    events: [
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
    ],
  },
  {
    category: "VolleyBall",
    events: [
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image,
      },
    ],
  },
];

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Cricket");

  const activeEvents = eventsData.find(
    (event) => event.category === activeCategory
  )?.events;

  return (
    <div className="bg-white h-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center space-x-1 mb-8 event-list">
        {eventsData.map((category) => (
          <button
            key={category.category}
            onClick={() => setActiveCategory(category.category)}
            className={`px-4 py-2 text-sm font-medium ${
              activeCategory === category.category
                ? "bg-[#F59431] text-black"
                : "bg-gray-200 text-gray-600"
            } rounded-lg shadow-md transition duration-200`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className="grid gap-6">
        {activeEvents?.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row items-start items-center space-y-4 md:space-y-0 md:space-x-6"
          >
            {/* Date Box */}
            <div className="bg-blue-100 text-center p-4 rounded-lg border border-black md:p-[3rem] ">
              <p className="text-2xl font-bold text-blue-600">{event.date}</p>
              <p className="text-sm text-blue-500">{event.month}</p>
              <p className="text-sm text-gray-400 mt-1">{event.time}</p>
            </div>

            {/* Event Details */}
            <div className="flex flex-col containers flex-grow  md:w-[30vw]">
              <h3 className="text-2xl md:text-xl font-bold text-gray-700">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.description}</p>
              <div className="text-sm text-gray-400 mt-2 flex items-center">
                <span className="material-icons text-blue-400 mr-1">
                  location : 
                </span>
                {event.location}
                
              </div>
              <button className="w-fit bg-orange-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-orange-600 transition duration-200">
              Know More
              </button>
            </div>

            {/* Event Image */}
            <div>
              <img
                src={event.image}
                alt={event.title}
                className="w-[20rem] h-[12rem] object-cover rounded-lg"
              />
            </div>

            {/* CTA Button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
