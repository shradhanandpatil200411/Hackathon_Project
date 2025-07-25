import HomeCarousel from "./HomeCarousel";
import aboutImg1 from "../Img/Mobile/Banner/Banner-7.jfif";
import aboutImg2 from "../Img/Mobile/Banner/Banner-8.jfif";
import aboutImg3 from "../Img/Mobile/Banner/Banner-9.jfif";
import aboutImg4 from "../Img/Mobile/Banner/Banner-10.jfif";
import aboutImg5 from "../Img/Mobile/Banner/Banner-11.jfif";
import desktopAboutImg1 from "../Img/DESKTOP-BANNER-1.jfif";
import desktopAboutImg2 from "../Img/DESKTOP-BANNER-2.jfif";
import desktopAboutImg3 from "../Img/DESKTOP-BANNER-3.jfif";
import { isMobile } from "react-device-detect";

function AboutUsCarousel() {
  return (
    <>
      <div className='mx-1 lg:mx-32'>
        <div>
          <h1 className='text-center mt-8 mb-2 font-[clashSemibold] tracking-widest'>
            WE ARE WRONG
          </h1>
        </div>
        <div className='relative'>
          <div className='bg-[#2f2f13] lg:bg-white rounded-t-3xl lg:rounded-3xl'>
            <HomeCarousel
              img1={isMobile ? aboutImg1 : desktopAboutImg1}
              img2={isMobile ? aboutImg2 : desktopAboutImg2}
              img3={isMobile ? aboutImg3 : desktopAboutImg3}
              img4={isMobile ? aboutImg4 : false}
              img5={isMobile ? aboutImg5 : false}
            />
            <div className=' lg:absolute lg:top-0 lg:left-0 overflow-y-hidden h-full'>
              <div className='hidden lg:flex flex-col-reverse justify-between gap-y-56 text-[#f15080] font-[clashBold]  whitespace-nowrap w-[25%] h-full marquee-animation-desktop text-8xl  '>
                <p className='lg:-rotate-90 w-full'>STAY</p>
                <p className='lg:-rotate-90 w-full'>MAD</p>
                <p className='lg:-rotate-90 w-full'>STAY</p>
                <p className='lg:-rotate-90 w-full'>WRONG</p>
                <p className='lg:-rotate-90 w-full'>STAY</p>
              </div>
            </div>
            <div className='w-full overflow-hidden lg:hidden'>
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
      </div>
    </>
  );
}

export default AboutUsCarousel;
