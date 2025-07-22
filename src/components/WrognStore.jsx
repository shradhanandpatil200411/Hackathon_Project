import React from "react";
import img1 from "../Img/DESKTOP-BANNER-4.jfif";
import img2 from "../Img/small-1.jfif";
import img3 from "../Img/small-2.jfif";

function WrognStore() {
  return (
    <>
      <div className='mx-3 mt-8'>
        <div>
          <p className='font-[clashRegular] pb-2 text-sm'>WROGN STORE.</p>
          <h1 className='font-[clashSemibold] pb-4 text-2xl'>RIGHT PLACE.</h1>
        </div>
        <div>
          <div>
            <img className='rounded-2xl mb-3' src={img1} alt='img' />
          </div>
          <div className='flex gap-3'>
            <img className='w-[48.5%] rounded-2xl' src={img2} alt='img' />
            <img className='w-[48.5%] rounded-2xl' src={img3} alt='img' />
          </div>
        </div>
        <div className='my-4'>
          <p className='text-gray-500 text-sm font-[clashMedium] my-3'>
            Find how close you’re to going wrogn!
          </p>
          <button className='w-full text-center bg-[#171601] text-white font-onest font-semibold rounded-xl  py-3 '>
            See All Stores
          </button>
        </div>
      </div>
    </>
  );
}

export default WrognStore;
