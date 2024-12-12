import React from 'react'
import './Downloads.css'
import apple from '../../assets/Downloads_assets/apple.png'
import playStore from '../../assets/Downloads_assets/play-store.png'
import demo1 from '../../assets/Downloads_assets/demo1.png'
import demo2 from '../../assets/Downloads_assets/demo2.png'

function Downloads(){

  return (
    <div className='down-load text-white'>
        <div className='custom-radial'>
            <div className='component1 flex'>
                <div className='image-1 images'><img src={demo1} alt="" /></div>
                <div className='image-2 images'><img src={demo2} alt="" /></div>
            </div>
            <div className='flex flex-col gap-[1rem] component2 text-edit'>
                <div className='text-4xl'>Download our app</div>
                <div>Download our app now for seamless booking and easy access to our services. With just a few taps, you can book your ride, track your driver, and manage your bookings anytime, anywhere. Experience convenience at your fingertips</div>
                <div className=' button-edit'>
                    <div><img src={apple} alt="" /></div>
                    <div><a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en&pli=1">Downlaod our app</a></div>
                </div>
                <div className='button-edit'>
                    <div><img src={playStore} alt="" /></div>
                    <div><a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en&pli=1">Downlaod our app</a></div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Downloads;
