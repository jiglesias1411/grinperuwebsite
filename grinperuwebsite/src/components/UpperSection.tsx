import React from "react";
import videowallpaper from '../assets/videos/scooter_wallpaper.mov';

const UpperSection:React.FC =()=> {
    return (
    <section className='relative h-screen'>
        <div className=" z-[-1] absolute top-0 left-0 w-full h-full">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline src={videowallpaper} ></video>
        </div>
    </section>
    )
}

export default UpperSection;

