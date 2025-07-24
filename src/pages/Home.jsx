import HomeCarousel from "../components/HomeCarousel";
import CardContainer from "../components/CardContainer";
import VideoContainer from "../components/VideoContainer";
import TrendingCategories from "../components/TrendingCategories";
import BestSellers from "../components/BestSellers";
import bannerImg1 from "../Img/Mobile/Banner/BANNER-1.jfif";
import bannerImg2 from "../Img/Mobile/Banner/BANNER-2.jfif";
import bannerImg3 from "../Img/Mobile/Banner/BANNER-3.jfif";
import bannerImg4 from "../Img/Mobile/Banner/BANNER-4.jfif";
import bannerImg5 from "../Img/Mobile/Banner/BANNER-5.jfif";
import bannerImg6 from "../Img/Mobile/Banner/BANNER-6.jfif";
import AboutUsCarousel from "../components/AboutUsCarousel";
import WallpaperContainer from "../components/WallpaperContainer";
import WrognStore from "../components/WrognStore";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import SideBar from "../components/sidebar";

function Home() {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <>
      {isOpen ? (
        <SideBar />
      ) : (
        <>
          <Navbar />
          <div className='mt-4 mx-1 lg:mt-0'>
            <HomeCarousel
              img1={bannerImg1}
              img2={bannerImg2}
              img3={bannerImg3}
              img4={bannerImg4}
              img5={bannerImg5}
              img6={bannerImg6}
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
