function TrendingCard({ img, name, price }) {
  return (
    <>
      <div className='w-[55%] lg:w-[30%]'>
        <div>
          <img className='rounded-xl' src={img} alt='img' />
        </div>
        <div className='text-white w-full flex justify-between '>
          <div className='w-[50%]'>
            <h1 className='truncate  font-onest text-sm'>
              {name.slice(0, 10)} <br /> {name.slice(10)}
            </h1>
          </div>
          <div>
            <p className='text-sm'>₹{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCard;
