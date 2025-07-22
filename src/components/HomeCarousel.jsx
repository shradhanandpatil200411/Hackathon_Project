import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HomeCarousel({ img1, img2, img3, img4, img5, img6 }) {
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
        swipeAble={true}
        draggable={true}
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
          <img className='w-full rounded-3xl  ' src={img1} alt='img-1' />
        </div>
        <div>
          <img className='w-full rounded-3xl ' src={img2} alt='img-2' />
        </div>
        <div>
          <img className='w-full rounded-3xl ' src={img3} alt='img-3' />
        </div>
        <div>
          <img className='w-full rounded-3xl ' src={img4} alt='img-4' />
        </div>
        <div>
          <img className='w-full rounded-3xl ' src={img5} alt='img-5' />
        </div>
        {img6 && (
          <div>
            <img className='w-full rounded-3xl ' src={img6} alt='img-6' />
          </div>
        )}
      </Carousel>
    </>
  );
}

export default HomeCarousel;
