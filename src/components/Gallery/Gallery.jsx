import React from 'react';
import './Gallery.css';
import image1 from '../../assets/Gallery_assets/image1.png';
import image2 from '../../assets/Gallery_assets/image2.png';
import image3 from '../../assets/Gallery_assets/image3.png';
import image4 from '../../assets/Gallery_assets/image4.png';
import image5 from '../../assets/Gallery_assets/image5.png';
import image6 from '../../assets/Gallery_assets/image6.png';
import image7 from '../../assets/Gallery_assets/image7.png';

function Gallery() {
  return (
    <div className="relative bg-gray-50 p-8 hidden lg:block">
      <h2 className="text-center text-md text-[#5FBC1E] mb-4">Gallery</h2>
      <p className="text-center text-4xl mb-8">
        Explore Our Gallery and Various Courts
      </p>
      <div className="flex flex-row justify-center gap-4  Gallery-Page">
        {/* Left Column */}
        <div className="flex flex-col ">
          <div className="setImage shadow-lg">
            <img src={image1} alt="Cricket Test" />
          </div>
          <div className="setImage shadow-lg">
            <img src={image2} alt="Another Scene" />
          </div>
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center">
          <div className="w-[25vw] h-[30vw] shadow-lg rounded-lg overflow-hidden center-image">
            <img src={image3} alt="Main View" />
          </div>
          <div className="setCentre shadow-lg  centre">
            <img src={image4} alt="Central Highlight" />
          </div>
          <div className="w-[25vw] h-auto shadow-lg rounded-lg overflow-hidden center-image">
            <img src={image5} alt="Bag Area" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col">
          <div className="setImage shadow-lg">
            <img src={image6} alt="Trophy Ceremony 1" />
          </div>
          <div className="setImage shadow-lg">
            <img src={image7} alt="Trophy Ceremony 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
