import React, { useState } from "react";
import "./Events.css"; 
import image1 from '../../assets/Franchise_assets/image3s.png'
import image2 from '../../assets/Franchise_assets/image1.png'
import image3 from '../../assets/Franchise_assets/image4.png'
import image4 from '../../assets/Franchise_assets/image2.png'
import image5 from '../../assets/Franchise_assets/image5.png'
import image1x from '../../assets/Events/image1x.png'
import image2x from '../../assets/Events/image2x.png'
import image3x from '../../assets/Events/image3x.png'
import image4x from '../../assets/Events/image4x.png'
import image5x from '../../assets/Events/image5x.png'


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
        image: image1,
        alter: image1x // Replace with your image path
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
        alter: image2x
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
        alter:image3x
      },
      {
        date: "5",
        month: "Will Notify Soon",
        title: "One7 Big Boys League",
        description:
          "An exhilarating T20 league with 16 franchises and 2000 corporate players selected through a draft process. Watch top teams battle it out over 60 matches.",
        location: "One7 Sports Park, Gurugram",
        time: "2:00 PM - 5:00 PM",
        image: image4,
        alter: image4x
      },
      {
        date: "5",
        month: "Will Notify Soon",
        title: "One7 North India Profesional cricket League",
        description:"The One7 North India Professional Cricket League (NIPCL) is a thrilling 20-day event with 31 T20 matches, showcasing 200+ professional players from across North India.",
        location: "One7 Sports Park, Gurugram",
        time: "2:00 PM - 5:00 PM",
        image: image5,
        alter:image5x
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
        alter: image1x
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
        alter:image2x
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
        alter:image3x
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
        alter: image1x
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
        alter:image2x
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
        alter:image3x
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
        alter: image1x,
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
        alter:image2x
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
        alter:image3x
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
            <div className="bg-blue-100 w-[90vw] md:w-[40vw] text-center rounded-lg border border-black ">
              <img className="m-0" src={event.alter} alt="" />
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
