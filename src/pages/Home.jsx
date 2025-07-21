import React from "react";

import HomeCarousel from "../components/HomeCarousel";
import CardContainer from "../components/CardContainer";
import VideoContainer from "../components/VideoContainer";
import TrendingCategories from "../components/TrendingCategories";

function Home() {
  return (
    <>
      <HomeCarousel />
      <CardContainer />
      <VideoContainer />
      <TrendingCategories />
    </>
  );
}

export default Home;
