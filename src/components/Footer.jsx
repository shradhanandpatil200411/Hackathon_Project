import instagram from "../Img/icon/Instagram.svg";
import pinterest from "../Img/icon/Pinterest.svg";
import facebook from "../Img/icon/Facebook.svg";
import youTube from "../Img/Youtube.png";
import twitter from "../Img/Twitter.png";
import img4 from "../Img/Mobile/Mobile_-_Footer_trust_marker.png";
import addIcon from "../Img/add.svg";

function Footer() {
  return (
    <>
      <div className='bg-[#171601] rounded-t-2xl pb-20'>
        <div className='mt-10'>
          <img src={img4} alt='img' />
        </div>

        <div className='pt-10 px-4'>
          <ul className='text-white '>
            <div className='flex justify-between border-b-1 border-gray-600 px-1 pt-8 pb-1 font-onest font-semibold text-sm'>
              <li>HELP</li> <img src={addIcon} alt='add' />
            </div>
            <div className='flex justify-between border-b-1 border-gray-600 px-1 pt-8 pb-1 font-onest font-semibold text-sm'>
              <li>ORDER SUPPORT</li> <img src={addIcon} alt='add' />
            </div>
            <div className='flex justify-between border-b-1 border-gray-600 px-1 pt-8 pb-1 font-onest font-semibold text-sm'>
              <li>ABOUT US</li> <img src={addIcon} alt='add' />
            </div>
          </ul>
        </div>
        <div className='px-6 pt-10 pb-5'>
          <img
            className='w-24'
            src='data:image/webp;base64,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'
            alt='logo'
          />
        </div>
        <div>
          <div>
            <div className='text-[#a5a8ac] px-5'>
              <h1 className='text-3xl font-[clashBold] tracking-widest'>
                FOR THR RIGHT <br /> KIND OF MAN.
              </h1>
              <p className='font-onest text-sm py-4 '>
                @ 2024, Wrogn Powered by TMRW
              </p>
            </div>
            <div className='flex gap-4 px-4'>
              <img src={instagram} alt='instagram' />
              <img src={facebook} alt='facebook' />
              <img src={twitter} alt='twitter' />
              <img src={pinterest} alt='pinterest' />
              <img src={youTube} alt='you-tube' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
