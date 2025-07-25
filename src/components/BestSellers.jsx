import img1 from "../Img/CHECKED-SHIRTS-BANNER.jfif";
import img2 from "../Img/CHCKED-BANNER-T-SHIRTS_1.jfif";
import img3 from "../Img/CARGOS-_-JOGGERS-WEBSITE.jfif";
import img4 from "../Img/MM-website-BANNER-JEANS_1.jfif";

function BestSellers() {
  return (
    <>
      <div className='lg:mx-20'>
        <div className='text-center mt-6 mb-2'>
          <h1 className='font-[clashSemibold] tracking-widest'>BEST SELLERS</h1>
        </div>
        <div>
          <div className='w-full overflow-x-auto no-scrollbar'>
            <div className='flex gap-2 lg:gap-4 whitespace-nowrap pl-4'>
              <img
                className='rounded-2xl w-[90%] lg:w-[23%]'
                src={img1}
                alt='img'
              />
              <img
                className='rounded-2xl w-[90%] lg:w-[23%]'
                src={img2}
                alt='img'
              />
              <img
                className='rounded-2xl w-[90%] lg:w-[23%]'
                src={img3}
                alt='img'
              />
              <img
                className='rounded-2xl w-[90%] lg:w-[23%]'
                src={img4}
                alt='img'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSellers;
