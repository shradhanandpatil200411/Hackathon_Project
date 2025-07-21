import denims from "../Img/Mobile/Trending/DENIMS.jfif";
import oversized from "../Img/Mobile/Trending/OVERSIZED.jfif";
import polo from "../Img/Mobile/Trending/POLOS.jfif";
import fullSleeve from "../Img/Mobile/Trending/SHOP-FULL-SLEEVE-SHIRTS-WEBSIT.jfif";
import halfSleeve from "../Img/Mobile/Trending/SHOP-HALF-SLEEVE-SHIRTS-MOBILE_2.jfif";
import trendingBgImg from "../Img/Mobile/Trending/Collab-of-the-month-mobile.jfif";
import SmallCard from "./SmallCard";
import TrendingCard from "./TrendingCard";

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
              <TrendingCard />
              <TrendingCard />
              <TrendingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCategories;
