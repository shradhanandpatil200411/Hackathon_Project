import img1 from "../Img/DESKTOP-BANNER-4.jpg";
import img2 from "../Img/small-1.jpg";
import img3 from "../Img/small-2.jpg";

function WrognStore() {
  return (
    <>
      <div className='mx-3 mt-8 lg:mx-24'>
        <div className='lg:flex lg:w-full'>
          <div className='lg:w-[50%] lg:tracking-widest '>
            <p className='font-[clashRegular] pb-2 text-sm lg:text-3xl lg:mt-4'>
              WROGN STORE.
            </p>
            <h1 className='font-[clashSemibold] pb-4 text-2xl lg:text-6xl lg:mt-4'>
              RIGHT PLACE.
            </h1>
            <div className='hidden lg:flex my-4'>
              <div>
                <p className='text-gray-500 text-lg font-[clashMedium] my-3'>
                  Find how close you’re to going <br />
                  wrogn!
                </p>
                <button className='w-1/2 text-center bg-[#171601] text-white font-onest font-semibold rounded-xl  py-3 '>
                  See All Stores
                </button>
              </div>
            </div>
          </div>
          <div className='lg:w-[50%]'>
            <img className='rounded-2xl mb-3 ' src={img1} alt='img' />
          </div>
        </div>
        <div>
          <div className='flex gap-3'>
            <img
              className='hidden lg:flex rounded-2xl lg:w-[50%] mb-3 lg:mb-0'
              src={img1}
              alt='img'
            />
            <img
              className='w-[48.5%] lg:w-[25%] rounded-2xl'
              src={img2}
              alt='img'
            />
            <img
              className='w-[48.5%] lg:w-[25%] rounded-2xl'
              src={img3}
              alt='img'
            />
          </div>
        </div>
        <div className='lg:hidden my-4'>
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
