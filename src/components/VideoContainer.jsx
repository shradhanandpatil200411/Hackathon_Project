import { useState } from "react";
import muteIcon from "../Img/icon/icon-mute.svg";
import unmuteIcon from "../Img/icon/icon-unmute.svg";
import SmallCard from "./SmallCard";
import { data } from "../utils/data";
import redirectIcon from "../Img/icon/icon-redirect.svg";
import greyLogo from "../Img/icon/icon-logo-grey-2.svg";

function VideoContainer() {
  const [isMute, setIsMute] = useState(true);

  return (
    <>
      <div>
        <div className='text-center mt-10 mb-5 '>
          <h1 className='font-[clashSemibold]  tracking-widest'>
            VIRAT HAS A MESSAGE FOR YOU
          </h1>
        </div>
        <div className='relative bg-gray-100 border-4 border-gray-300 rounded-xl'>
          <video className='rounded-t-xl' autoPlay muted={isMute} loop controls>
            <source
              src='https://wrogn.com/cdn/shop/videos/c/vp/f1d811a77c1043c2a2013c61018b1672/f1d811a77c1043c2a2013c61018b1672.HD-1080p-2.5Mbps-43782430.mp4?v=0'
              type='video/mp4'
            />
          </video>
          <div
            className='absolute top-5 right-5'
            onClick={() => setIsMute(!isMute)}>
            {isMute ? (
              <img src={muteIcon} alt='mute-img' />
            ) : (
              <img src={unmuteIcon} alt='unmute-icons' />
            )}
          </div>
          <div className='my-5'>
            <div className='flex justify-between items-center m-2 p-1'>
              <h1 className='font-[clashSemibold]  '>SEASON'S TOP PICKS</h1>
              <p className='font-onest font-bold  text-xs'>SHOP ALL</p>
            </div>
            <div className='w-full overflow-x-auto no-scrollbar'>
              <div className='flex gap-2 whitespace-nowrap mx-2'>
                {data.topPicks.map((card, i) => {
                  return (
                    <SmallCard
                      key={i}
                      topPicksImg={card.img}
                      name={card.name}
                      price={card.price}
                      cancelPrice={card.cancelPrice}
                    />
                  );
                })}
                <div className='relative min-w-[200px]  flex items-center justify-center'>
                  <div className='w-full h-full border-[1px] rounded-2xl border-gray-500 bg-gray-100'></div>
                  <div className='absolute flex flex-col items-center justify-center'>
                    <img className='w-14' src={greyLogo} alt='logo' />
                    <div className='flex gap-2 items-center justify-center'>
                      <p className=' text-sm font-onest font-semibold text-gray-700'>
                        View All <br /> (377)
                      </p>
                      <img
                        className='border-[1px] border-gray-400 bg-gray-100 px-2 py-2'
                        src={redirectIcon}
                        alt='img'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoContainer;
