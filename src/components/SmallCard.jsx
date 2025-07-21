import React from "react";
import smCardImg from "../Img/card/card-21.jpg";

function SmallCard() {
  return (
    <>
      <div className='w-[55%] rounded-t-2xl bg-white'>
        <div>
          <img className='rounded-2xl ' src={smCardImg} alt='shirt-img' />
        </div>
        <div>
          <div className='my-1 bg-transparent'>
            <span className='font-bold text-xs'>₹1,439</span>{" "}
            <span className='text-gray-400 line-through text-xs'>₹2,399</span>{" "}
            <span className='text-xs text-green-300'>(40% OFF)</span>
          </div>
          <p className='truncate my-1'>
            Solid Stretch Slim Fit Shirt | Navy Blue
          </p>
          <button className='w-full px-2 py-2 border-1 m-1 border-gray-500 rounded-lg font-semibold'>
            Add to Bag
          </button>
        </div>
      </div>
    </>
  );
}

export default SmallCard;
