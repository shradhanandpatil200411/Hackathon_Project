import denims from "../Img/Mobile/Trending/DENIMS.jfif";
import oversized from "../Img/Mobile/Trending/OVERSIZED.jfif";
import polo from "../Img/Mobile/Trending/POLOS.jfif";
import fullSleeve from "../Img/Mobile/Trending/SHOP-FULL-SLEEVE-SHIRTS-WEBSIT.jfif";
import halfSleeve from "../Img/Mobile/Trending/SHOP-HALF-SLEEVE-SHIRTS-MOBILE_2.jfif";
import trendingBgImg from "../Img/Mobile/Trending/Collab-of-the-month-mobile.jfif";
import TrendingCard from "./TrendingCard";
import { data } from "../utils/data";
import redirectIcon from "../Img/icon/icon-redirect.svg";
import greyLogo from "../Img/icon/icon-logo-grey-2.svg";

function TrendingCategories() {
  return (
    <>
      <div>
        <div className='text-center mt-5'>
          <h1 className='font-[clashSemibold]  tracking-widest '>
            TRENDING CATEGORIES
          </h1>
        </div>
        <div className='flex gap-4 pl-4'>
          <div>
            <div>
              <img className='rounded-xl my-4' src={polo} alt='polo' />
            </div>
            <div>
              <img
                className='rounded-xl my-4'
                src={halfSleeve}
                alt='halfSleeve'
              />
            </div>
          </div>
          <div className='pr-4'>
            <div>
              <img
                className='rounded-xl my-4'
                src={fullSleeve}
                alt='fullSleeve'
              />
            </div>
            <div>
              <img
                className='rounded-xl my-4'
                src={oversized}
                alt='oversized'
              />
            </div>
            <div>
              <img className='rounded-xl my-4' src={denims} alt='denims' />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='relative'>
          <img src={trendingBgImg} className='rounded-2xl p-1' alt='img' />
          <div className='absolute bottom-10 inset-x-0 px-4 overflow-x-auto no-scrollbar'>
            <div className='flex gap-2 whitespace-nowrap'>
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
              <div className='relative min-w-[200px]  flex items-center justify-center'>
                <div className='w-full h-full border-[1px] rounded-2xl border-gray-500 bg-gray-100'></div>
                <div className='absolute flex flex-col items-center justify-center'>
                  <img className='w-14' src={greyLogo} alt='logo' />
                  <div className='flex gap-2 items-center justify-center'>
                    <p className=' text-sm font-onest font-semibold text-gray-700'>
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
