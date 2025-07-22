import img1 from "../Img/wally1.jpg";
import img2 from "../Img/wally2.jpg";
import img3 from "../Img/wally3.jpg";

function WallpaperContainer() {
  return (
    <>
      <div>
        <div className='mt-8 mb-2'>
          <h1 className='text-center font-[clashSemibold] tracking-widest'>
            WRONG WALLPAPER
          </h1>
        </div>
        <div className='overflow-x-auto no-scrollbar ml-3'>
          <div className='flex gap-2 whitespace-nowrap'>
            <img src={img1} className='w-72 rounded-2xl h-[420px]' alt='img' />
            <img src={img3} className='w-72 rounded-2xl h-[420px]' alt='img' />
            <img src={img2} className='w-72 rounded-2xl h-[420px]' alt='img' />
          </div>
        </div>
      </div>
    </>
  );
}

export default WallpaperContainer;
