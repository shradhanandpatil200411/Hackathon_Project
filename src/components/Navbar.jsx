import menu from "../Img/icon/icon-hamburger-menu.svg";
import logo from "../Img/icon/logo_icon_.svg";
import search from "../Img/icon/icon-search.svg";
import shop from "../Img/icon/shop-icon.svg";
import { data } from "../utils/data";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Store/sidebarSlice";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex fixed w-full z-50 bg-white justify-between px-2 py-3  border-[1px] border-gray-400 lg:border-none '>
        <div className='flex'>
          <div
            className='px-2 lg:hidden'
            onClick={() => dispatch(toggleSidebar())}>
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
      <div className='w-full overflow-x-auto no-scrollbar lg:hidden'>
        <div className='flex gap-1 mt-12 whitespace-nowrap px-1 pt-5'>
          {data.navbar.nav1.map((item, index) => (
            <div
              key={index}
              className=' w-24 flex-shrink-0 flex-col place-items-center text-xs'>
              <img src={item.img} alt='img' className='w-20' />
              <p className='font-onest mt-1 truncate  font-bold'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
