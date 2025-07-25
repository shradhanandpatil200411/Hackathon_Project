import menu from "../Img/icon/icon-hamburger-menu.svg";
import logo from "../Img/icon/logo_icon_.svg";
import search from "../Img/icon/icon-search.svg";
import shop from "../Img/icon/shop-icon.svg";
import { data } from "../utils/data";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Store/sidebarSlice";

// Optional: extract nav labels to an array for easy changes/scalability
const NAV_LABELS = [
  "EOSS",
  "EXCLUSIVE",
  "ALL PRODUCTS",
  "TOPWEAR",
  "BOTTOMWEAR",
  "FOOTWEAR",
  "FRESH ARRIVALS",
  "ESSENTIALS",
];

function Navbar() {
  const dispatch = useDispatch();
  const { nav1 } = data.navbar;
  const handleToggleSidebar = () => dispatch(toggleSidebar());

  return (
    <div>
      <div className='fixed flex w-full z-10 bg-white justify-between lg:justify-around  lg:items-center px-2 py-3   border-[1px] border-gray-400 lg:border-none'>
        <div className='flex'>
          <div className='px-2 lg:hidden' onClick={handleToggleSidebar}>
            <img src={menu} alt='Open navigation menu' />
          </div>
          <div className='px-2'>
            <img className='lg:w-14' src={logo} alt='Company logo' />
          </div>
        </div>
        <div className='flex lg:hidden'>
          <button>
            <img src={search} alt='Search' />
          </button>
          <button>
            <img src={shop} alt='Shopping cart' />
          </button>
        </div>
        {/* Desktop Nav Items */}
        <nav className='hidden lg:flex text-black'>
          <ul className='flex gap-5'>
            {NAV_LABELS.map((label) => (
              <li
                key={label}
                className='font-onest font-semibold text-sm cursor-pointer'>
                {label}
              </li>
            ))}
          </ul>
        </nav>
        <div className='hidden lg:flex'>
          <label className='input opacity-50 border-black border-1 rounded-lg'>
            <svg
              className='h-[1em]'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'>
              <g
                strokeLinejoin='round'
                strokeLinecap='round'
                strokeWidth='2.5'
                fill='none'
                stroke='currentColor'>
                <circle cx='11' cy='11' r='8'></circle>
                <path d='m21 21-4.3-4.3'></path>
              </g>
            </svg>
            <input type='search' required placeholder='Search' />
          </label>
        </div>
      </div>
      {/* Mobile Category Scroll */}
      <nav className='w-full overflow-x-auto no-scrollbar lg:hidden'>
        <div className='flex gap-1 mt-12 whitespace-nowrap px-1 pt-5'>
          {nav1.map((item, idx) => (
            <div
              key={item.text || idx}
              className='w-24 flex-shrink-0 flex-col place-items-center text-xs'>
              <img src={item.img} alt={item.text} className='w-20' />
              <p className='font-onest mt-1 truncate font-bold'>{item.text}</p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
