import React, { useState, useEffect } from 'react';
import './Reviews.css'; 
import smallPic1 from '../../assets/Reviews_assets/smPic1.png'
import smallPic2 from '../../assets/Reviews_assets/smPic2.png'
import largePic1 from '../../assets/Reviews_assets/lgPic1.png'
import largePic2 from '../../assets/Reviews_assets/lgPic2.png'

function Reviews(){
const testimonials = [
  { id: 1, name: 'Runner Up Cricket T20', location: 'Deepak Gupta', text: 'Delight for cricket lovers. 3 well maintained grounds with all amenities like, Kimati balls, professional, live streaming, DRS, attractive match awards/rewards, match photography etc. The washrooms are clean, cafeteria is hygienic and a big parking spot. Staff is supportive and cordial. With pickleball courts coming in, it has become a great family sports spot.', image: largePic2 ,pic: smallPic1},
  { id: 2, name: 'TT Nationals', location: 'Rahul Saxena', text: 'One7 Sports Park offers three top-notch grounds with floodlights for day/night games, a great café, excellent pitches, and a convenient location. The facility is continuously improving under visionary ownership, aiming to be the best in NCR. With a skilled management team and staff, it’s one of the premier cricket venues in the region, ideal for corporate matches and tournaments.', image: largePic1 ,pic: smallPic2 },
];
  return (
    <div className="bg-white py-8 px-4 text-center">
      <p className='text-[#F59431]'>Testimonials</p>
      <h2 className="text-2xl font-bold mb-4">What people say about us</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-8 overflow-hidden">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className=" flex flex-col lg:flex-row items-center lg:w-[40vw] gap-[4rem]  p-4"
          >
            <div className='bg-gray-100 w-full lg:w-[60vw] flex flex-col rounded-lg items-center'>
              <img className='lg:w-[5vw] rounded-full' src={testimonial.pic} alt="" />
              <h3 className="font-semibold text- lg:text-md">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
              <p className="italic lg:text-sm mt-2">"{testimonial.text}"</p>
            </div>
            <div className='w-[20vw] lg:w-[60vw]'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-auto mx-auto rounded-lg mb-4 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
