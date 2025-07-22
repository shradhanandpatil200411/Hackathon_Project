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

function Home() {
  return (
    <div className='mx-1'>
      <div className='mt-4'>
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
    </div>
  );
}

export default Home;
