import React from 'react'
import './Downloads.css'
import apple from '../../assets/Downloads_assets/apple.png'
import playStore from '../../assets/Downloads_assets/play-store.png'
import demo1 from '../../assets/Downloads_assets/demo1.png'
import demo2 from '../../assets/Downloads_assets/demo2.png'
import QR from '../../assets/Downloads_assets/qr.png'

function Downloads(){

  return (
    <div className='down-load text-white'>
        <div className='custom-radial'>
            <div className='flex'>
                <div className='image-1 images'><img src={demo1} alt="" /></div>
                <div className='image-2 images'><img src={demo2} alt="" /></div>
            </div>
            <div className='flex flex-col gap-[0.5rem] md:gap-[1rem] text-edit'>
                <div className='text-4xl'>Download our app</div>
                <div className='text-xs md:text-lg'>Download our app now for seamless booking and easy access to our services. With just a few taps, you can book your ride, track your driver, and manage your bookings anytime, anywhere. Experience convenience at your fingertips</div>
                <div className='flex spacing'>
                    <div className='flex flex-col  gap-4'>
                        <div className='button-edits'>
                            <div><img src={apple} alt="" /></div>
                            <div><a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en&pli=1">Downlaod our app</a></div>
                        </div>
                        <div className='button-edits'>
                            <div><img src={playStore} alt="" /></div>
                            <div><a href="https://play.google.com/store/apps/details?id=com.one7sports&hl=en&pli=1">Downlaod our app</a></div>
                        </div>
                    </div>
                    <div className='QR'>
                        <img  src={QR} alt="" />    
                    </div>                
                </div>            
            </div>
        </div>
    </div>
  );
}
export default Downloads;
