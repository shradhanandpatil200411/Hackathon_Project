import denims from "../Img/Mobile/Trending/DENIMS.jfif";
import oversized from "../Img/Mobile/Trending/OVERSIZED.jfif";
import polo from "../Img/Mobile/Trending/POLOS.jfif";
import fullSleeve from "../Img/Mobile/Trending/SHOP-HALF-SLEEVE-SHIRTS-MOBILE_2.jfif";
import halfSleeve from "../Img/Mobile/Trending/SHOP-HALF-SLEEVE-SHIRTS-MOBILE_2.jfif";
import trendingBgImg from "../Img/Mobile/Trending/Collab-of-the-month-mobile.jfif";
import trendingBgDesktopImg from "../Img/Collab-of-the-month.jpg";
import TrendingCard from "./TrendingCard";
import { data } from "../utils/data";
import redirectIcon from "../Img/icon/icon-redirect.svg";
import greyLogo from "../Img/icon/icon-logo-grey-2.svg";
import { isMobile } from "react-device-detect";
import poloTShirt from "../Img/POLO-1.jpg";
import oversizedTshirt from "../Img/OVERSIZED.jpg";
import footwear from "../Img/Footwear.jpg";
import shirts from "../Img/SHIRTS-2.jpg";
import denimsPants from "../Img/DENIMS.jpg";

function TrendingCategories() {
  return (
    <>
      <div className='lg:px-16'>
        <div className='text-center mt-5 '>
          <h1 className='font-[clashSemibold]  tracking-widest '>
            TRENDING CATEGORIES
          </h1>
        </div>
        <div className='flex lg:inline-block gap-4 pl-4'>
          <div className='lg:flex lg:gap-4'>
            <div>
              <img
                className='rounded-xl my-4 lg:my-0'
                src={isMobile ? polo : poloTShirt}
                alt='polo'
              />
            </div>
            <div>
              <img
                className='rounded-xl my-4 lg:my-0'
                src={isMobile ? halfSleeve : shirts}
                alt='halfSleeve'
              />
            </div>
          </div>
          <div className='pr-4 lg:pr-0 lg:flex lg:gap-4'>
            <div>
              <img
                className='rounded-xl my-4'
                src={isMobile ? fullSleeve : oversizedTshirt}
                alt='fullSleeve'
              />
            </div>
            <div>
              <img
                className='rounded-xl my-4'
                src={isMobile ? oversized : denimsPants}
                alt='oversized'
              />
            </div>
            <div>
              <img
                className='rounded-xl my-4'
                src={isMobile ? denims : footwear}
                alt='denims'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mx-24 '>
        <div className='relative  '>
          <img
            src={isMobile ? trendingBgImg : trendingBgDesktopImg}
            className='rounded-2xl p-1 lg:p-0'
            alt='img'
          />
          <div className='absolute bottom-10  inset-x-0 px-4 overflow-x-auto no-scrollbar lg:w-1/2 lg:ml-[50%]'>
            <div className='flex gap-2 whitespace-nowrap '>
              {data.trendingCard.map((card, i) => {
                return (
                  <TrendingCard
                    key={i}
                    img={card.img}
                    name={card.name}
                    price={card.price}
                  />
                );
              })}
              <div className='min-w-[200px]  flex items-center justify-center'>
                <div className='relative w-full h-full border-[1px] rounded-2xl border-gray-500 bg-gray-100 lg:mr-2'></div>
                <div className='absolute flex flex-col items-center justify-center'>
                  <img className='w-14' src={greyLogo} alt='logo' />
                  <div className='flex gap-2 items-center justify-center'>
                    <p className='text-sm font-onest font-semibold text-gray-700'>
                      View All <br /> (377)
                    </p>
                    <img
                      className='border-[1px] border-gray-400 bg-gray-100 px-2 py-2'
                      src={redirectIcon}
                      alt='img'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCategories;
