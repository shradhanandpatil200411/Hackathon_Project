import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerImg1 from "../Img/Mobile/Banner/BANNER-1.jfif";
import bannerImg2 from "../Img/Mobile/Banner/BANNER-2.jfif";
import bannerImg3 from "../Img/Mobile/Banner/BANNER-3.jfif";
import bannerImg4 from "../Img/Mobile/Banner/BANNER-4.jfif";
import bannerImg5 from "../Img/Mobile/Banner/BANNER-5.jfif";
import bannerImg6 from "../Img/Mobile/Banner/BANNER-6.jfif";

function HomeCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        slidesToSlide={1}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition='all 1000'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2 '
            src={bannerImg1}
            alt='img-1'
          />
        </div>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2'
            src={bannerImg2}
            alt='img-2'
          />
        </div>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2'
            src={bannerImg3}
            alt='img-3'
          />
        </div>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2'
            src={bannerImg4}
            alt='img-4'
          />
        </div>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2'
            src={bannerImg5}
            alt='img-5'
          />
        </div>
        <div>
          <img
            className='w-full rounded-3xl px-2 pt-2'
            src={bannerImg6}
            alt='img-6'
          />
        </div>
      </Carousel>
    </>
  );
}

export default HomeCarousel;
