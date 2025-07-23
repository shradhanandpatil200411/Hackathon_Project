import menu from "../Img/icon/icon-hamburger-menu.svg";
import closeIcon from "../Img/icon/icon-close.svg";
import logo from "../Img/icon/logo_icon_.svg";
import search from "../Img/icon/icon-search.svg";
import shop from "../Img/icon/shop-icon.svg";
import account from "../Img/icon/iconamoon_profile-thin_1.svg";
import support from "../Img/icon/Frame_7.svg";
import { data } from "../utils/data";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        " "
      ) : (
        <div className='flex fixed w-full z-50 bg-white justify-between px-2 py-3 border-[1px] border-gray-400 '>
          <div className='flex'>
            <div className='px-2' onClick={() => setIsOpen(!isOpen)}>
              <img src={menu} alt='menu-bar' />
            </div>
            <div className='px-2'>
              <img src={logo} alt='logo' />
            </div>
          </div>
          <div className='flex'>
            <div>
              <img src={search} alt='search' />
            </div>
            <div>
              <img src={shop} alt='shop' />
            </div>
          </div>
        </div>
      )}
      {isOpen ? (
        " "
      ) : (
        <div className='w-full overflow-x-auto no-scrollbar'>
          <div className='flex gap-1 mt-12 whitespace-nowrap px-1 pt-5'>
            {data.navbar.map((item, index) => (
              <div
                key={index}
                className=' w-24 flex-shrink-0 flex-col place-items-center text-xs'>
                <img src={item.img} alt='img' className='w-20' />
                <p className='font-onest mt-1 truncate  font-bold'>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {isOpen ? (
        <div className='py-6 px-4 h-screen'>
          <div
            className='flex justify-between'
            onClick={() => setIsOpen(!isOpen)}>
            <img src={logo} alt='logo' />
            <img src={closeIcon} alt='close-icon' />
          </div>

          <div className='my-2 h-[70%] overflow-y-auto whitespace-nowrap no-scrollbar'>
            {data.navbar.map((nav) => {
              return (
                <div className='flex items-center border-b-[1px] border-gray-300 py-3 mx-4'>
                  <img className='w-[20%] p-2' src={nav.img} alt='img' />
                  <h1 className='w-[80%]'>{nav.text}</h1>
                </div>
              );
            })}
          </div>

          <div className='flex w-full rounded-2xl  border-2 border-gray-200'>
            <div className='w-[33.3%] text-center flex flex-col items-center  py-4 px-4 border-r-[1px] border-gray-200 '>
              <img src={account} alt='account-icon' />
              <h1 className='font-onest font-medium text-sm mt-2'>ACCOUNT</h1>
            </div>
            <div className='w-[33.3%] text-center flex flex-col items-center  py-4 px-4 border-r-[1px] border-gray-200 '>
              <img src={shop} alt='shop-icon' />
              <h1 className='font-onest font-medium text-sm mt-2'>ORDERS</h1>
            </div>
            <div className='w-[33.3%] text-center flex flex-col items-center  py-4 px-4  border-gray-200 '>
              <img src={support} alt='support-icon' />
              <h1 className='font-onest font-medium text-sm mt-2'>SUPPORT</h1>
            </div>
          </div>
          <div className='my-4'>
            <button className='w-full border-[1px] border-black py-4 rounded-2xl font-onest font-semibold'>
              Log In
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
