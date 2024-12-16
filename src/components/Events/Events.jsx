import React, { useState } from "react";
import "./Events.css"; 
import image1 from '../../assets/Franchise_assets/image3.png'
import image2 from '../../assets/Franchise_assets/image1.png'
import image3 from '../../assets/Franchise_assets/image4.png'

const eventsData = [
  {
    category: "Cricket",
    events: [
      {
        date: "5",
        month: "Will Notify Soon",
        title: "One7 Sports Women’s Premier League",
        description:
          "A thrilling 21-day tournament exclusively for women, featuring 5 franchises of elite players competing for the championship title through intense league and knockout rounds.",
        location: "One7 Sports Park, Gurugram",
        time: "10:00 AM - 2:00 PM",
        image: image1, // Replace with your image path
      },
      {
        date: "5",
        month: "Will Notify Soon",
        title: "One7 Big Boy Pro League",
        description:
          "A premier league showcasing elite corporate teams competing in an exhilarating T20 format. Witness top talent battle it out for the championship",
        location: "One7 Sports Park, Gurugram",
        time: "2:00 PM - 5:00 PM",
        image: image2,
      },
      {
        date: "5",
        month: "Will Notify Soon",
        title: "One7 Great Indian Corporate Cricket League",
        description:
          "A prestigious league where 64 top corporate teams compete in a thrilling T20 format. An unmatched experience of sportsmanship and networking.",
        location: "One7 Sports Park, Gurugram",
        time: "2:00 PM - 5:00 PM",
        image: image3,
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
        image: image1,
      },
      {
        date: "7",
        month: "April 2020",
        title: "One7 Premier League (OPL)",
        description:
          "A competitive badminton event with top-notch players from across the city.",
        location: "Sports Hall, Bangalore",
        time: "12:00 PM - 4:00 PM",
        image: image2,
      },
      {
        date: "7",
        month: "April 2020",
        title: "One7 Premier League (OPL)",
        description:
          "A competitive badminton event with top-notch players from across the city.",
        location: "Sports Hall, Bangalore",
        time: "12:00 PM - 4:00 PM",
        image: image3,
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
        image: image1,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image2,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image3,
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
        image: image1,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image2,
      },
      {
        date: "10",
        month: "April 2020",
        title: "City Open Tennis Championship",
        description:
          "A prestigious tennis championship showcasing talent from across the nation.",
        location: "Tennis Club, Chennai",
        time: "9:00 AM - 1:00 PM",
        image: image3,
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
            <div className="bg-blue-100 text-center p-4 rounded-lg border border-black md:p-[2rem] ">
              <p className="text-lg text-black">{event.month}</p>
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
              <a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en">
                <button className="w-fit bg-orange-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-orange-600 transition duration-200">
                  Download Our App
                </button>
              </a>
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
