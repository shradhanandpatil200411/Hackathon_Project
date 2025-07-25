import HomeCarousel from "../components/HomeCarousel";
import CardContainer from "../components/CardContainer";
import VideoContainer from "../components/VideoContainer";
import TrendingCategories from "../components/TrendingCategories";
import BestSellers from "../components/BestSellers";
import mobileBannerImg1 from "../Img/Mobile/Banner/Banner-1.jfif";
import mobileBannerImg2 from "../Img/Mobile/Banner/Banner-2.jfif";
import mobileBannerImg3 from "../Img/Mobile/Banner/Banner-3.jfif";
import mobileBannerImg4 from "../Img/Mobile/Banner/Banner-4.jfif";
import mobileBannerImg5 from "../Img/Mobile/Banner/Banner-5.jfif";
import mobileBannerImg6 from "../Img/Mobile/Banner/Banner-6.jfif";

import desktopBannerImg1 from "../Img/Banner/BANNER-1.jfif";
import desktopBannerImg2 from "../Img/Banner/BANNER-2.jfif";
import desktopBannerImg3 from "../Img/Banner/BANNER-3.jfif";
import desktopBannerImg4 from "../Img/Banner/BANNER-4.jfif";
import desktopBannerImg5 from "../Img/Banner/BANNER-5.jfif";
import desktopBannerImg6 from "../Img/Banner/BANNER-6.jfif";

import AboutUsCarousel from "../components/AboutUsCarousel";
import WallpaperContainer from "../components/WallpaperContainer";
import WrognStore from "../components/WrognStore";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SideBar from "../components/sidebar";
import { isMobile } from "react-device-detect";

function Home() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
      {isOpen ? (
        <SideBar />
      ) : (
        <>
          <Navbar />
          <div className='mt-4 mx-1 lg:mt-0 lg:pt-20'>
            <HomeCarousel
              img1={isMobile ? mobileBannerImg1 : desktopBannerImg1}
              img2={isMobile ? mobileBannerImg2 : desktopBannerImg2}
              img3={isMobile ? mobileBannerImg3 : desktopBannerImg3}
              img4={isMobile ? mobileBannerImg4 : desktopBannerImg4}
              img5={isMobile ? mobileBannerImg5 : desktopBannerImg5}
              img6={isMobile ? mobileBannerImg6 : desktopBannerImg6}
            />
          </div>
          <CardContainer />
          <VideoContainer />
          <TrendingCategories />
          <BestSellers />
          <AboutUsCarousel />
          <WallpaperContainer />
          <WrognStore />
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
