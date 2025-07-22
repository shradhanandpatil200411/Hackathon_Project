import React from "react";
import HomeCarousel from "./HomeCarousel";
import img1 from "../Img/Mobile/Banner/Banner-7.jfif";
import img2 from "../Img/Mobile/Banner/Banner-8.jfif";
import img3 from "../Img/Mobile/Banner/Banner-9.jfif";
import img4 from "../Img/Mobile/Banner/Banner-10.jfif";
import img5 from "../Img/Mobile/Banner/Banner-11.jfif";

function AboutUsCarousel() {
  return (
    <>
      <div>
        <div>
          <h1 className='text-center mt-8 mb-2 font-[clashSemibold] tracking-widest'>
            WE ARE WRONG
          </h1>
        </div>
        <div className='bg-[#2f2f13] rounded-t-3xl '>
          <HomeCarousel
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            img5={img5}
          />
          <div className='w-full overflow-hidden'>
            <div className='flex gap-4 text-[#f15080] font-[clashBold] Tracking-widest whitespace-nowrap w-full marquee-animation text-6xl py-4 px-[1.5rem]'>
              <p>STAY</p>
              <p>MAD</p>
              <p>STAY</p>
              <p>WRONG</p>
              <p>STAY</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsCarousel;
