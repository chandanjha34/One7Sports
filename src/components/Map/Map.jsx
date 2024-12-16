import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet CSS for map styling
import L from "leaflet";
import "./Map.css"; // External CSS file

// Fix default marker icon issue with Leaflet and Webpack
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

function Map(){
  return (
    <div>
        <div className="flex flex-col m-[3rem] shadow-lg rounded-lg lg:flex-row items-center justify-between p-8">
          {/* Left Section: Contact Details */}
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-sm text-green-600 font-bold uppercase mb-2">
              Contact
            </h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in touch</h1>

            {/* Contact Information */}
            <div className="space-y-6 text-gray-700">
              {/* Phone */}
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-bold">Phone Number</h3>
                  <p>+91 99100 02097</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">🏢</span>
                <div>
                  <h3 className="font-bold">Office Address</h3>
                  <p>
                  1234, 45, Silver Oaks Ave, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana 122002
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✉️</span>
                <div>
                  <h3 className="font-bold">Gmail</h3>
                  <p>info@one7sports.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Interactive Map */}
          <div className="w-full lg:w-[35vw] h-[400px] relative">
            <MapContainer
              center={[28.4970, 77.0877]} // Coordinates for Gurugram
              zoom={13}
              scrollWheelZoom={true}
              className="w-full h-full rounded-lg shadow-lg"
            >
              {/* Map Tiles */}
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {/* Marker */}
              <Marker
                position={[28.4970, 77.0877]}
                icon={
                  new L.Icon({
                    iconUrl: markerIconPng,
                    shadowUrl: markerShadowPng,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                  })
                }
              >
                <Popup>
                  <div>
                    <h2 className="font-bold text-gray-800 mb-1">
                      Silver Oaks Avenue
                    </h2>
                    <p>1234, 45, Silver Oaks Ave, G Block, DLF Phase 1, Sector 26, Gurugram, Haryana 122002</p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 font-medium underline"
                    >
                      View in Map
                    </a>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
    </div>
  );
};

export default Map;
