function Card({
  heading,
  price,
  bigImg,
  smImg,
  off,
  cancelPrice,
  topWearColor,
  bottomWearColor,
}) {
  const topColor = topWearColor;
  const bottomColor = bottomWearColor;
  const gradient = `linear-gradient(to bottom, ${topColor}, ${bottomColor})`;

  return (
    <>
      <div
        className='rounded-2xl ml-4 mt-5 p-3 min-w-[80%] lg:min-w-[25%] h-max-[50%] '
        style={{ background: gradient }}>
        <div>
          <img
            className='rounded-2xl lg:h-[340px] h-[400px]'
            src={bigImg}
            alt='img'
          />
        </div>
        <div className='bg-white mt-2 rounded-lg'>
          <div className=' flex p-3 w-[80%]'>
            <img src={smImg} className='w-24 lg:w-20 mr-1' alt='sm-img' />
            <div className='w-[80%]'>
              <div>
                <h1 className='font-onest text-xs truncate text-wrap'>
                  {heading}
                </h1>
              </div>
              <span className='font-bold lg:text-xs'>₹{price}</span>
              {"  "}
              <span className='text-gray-400 line-through lg:text-xs'>
                {cancelPrice}
              </span>{" "}
              <span className='text-green-800 text-sm lg:text-xs'>
                ({off}% OFF)
              </span>
              <div className='mt-5 text-center border-gray-400 border py-2 cursor-pointer '>
                <h1 className='font-semibold text-sm'>QUICK VIEW</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
