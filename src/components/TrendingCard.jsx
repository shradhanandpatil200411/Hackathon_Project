import trendingImg from "../Img/card/card-28.jpg";

function TrendingCard() {
  return (
    <>
      <div className='w-[55%]'>
        <div>
          <img className='rounded-xl' src={trendingImg} alt='img' />
        </div>
        <div className='text-white w-full flex justify-between '>
          <div className='w-[40%]'>
            <h1 className='truncate  font-onest text-sm'>
              Tonal AOP <br /> Oversized T-Shirt | White
            </h1>
          </div>
          <div>
            <p className='text-sm'>₹999</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCard;
