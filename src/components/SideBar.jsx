import account from "../Img/icon/iconamoon_profile-thin_1.svg";
import support from "../Img/icon/Frame_7.svg";
import closeIcon from "../Img/icon/icon-close.svg";
import { data } from "../utils/data";
import logo from "../Img/icon/logo_icon_.svg";
import shop from "../Img/icon/shop-icon.svg";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Store/sidebarSlice";

function SideBar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='py-6 px-4 h-screen'>
        <div
          className='flex justify-between'
          onClick={() => dispatch(toggleSidebar())}>
          <img src={logo} alt='logo' />
          <img src={closeIcon} alt='close-icon' />
        </div>

        <div className='my-2 h-[70%] overflow-y-auto whitespace-nowrap no-scrollbar'>
          {data.navbar.nav2.map((nav, i) => {
            return (
              <div
                className='flex items-center border-b-[1px] border-gray-300 py-3 mx-4'
                key={i}>
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
    </>
  );
}

export default SideBar;
