import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SponsorCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <h2>Спонсоры</h2>
      <Slider {...settings}>
        <div>
          <img src="sponsor1.png" alt="sponsor1" />
        </div>
        <div>
          <img src="sponsor2.png" alt="sponsor2" />
        </div>
        <div>
          <img src="sponsor3.png" alt="sponsor3" />
        </div>
        {/* Добавьте больше слайдов по вашему усмотрению */}
      </Slider>
    </div>
  );
};

export default SponsorCarousel;
