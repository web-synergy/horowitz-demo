import { Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { WrapperImg } from "./styles";
import sponsor1 from "./sponsor1.png";
import sponsor2 from "./sponsor2.png";
import sponsor3 from "./sponsor3.png";
import sponsor4 from "./sponsor4.png";
import sponsor5 from "./sponsor5.png";
import sponsor6 from "./sponsor6.jpg";
import sponsor7 from "./sponsor7.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import custom styles for Swiper
import "./sliderStyles.css";

// import required modules
import { Autoplay } from "swiper/modules";

const SponsorCarousel = () => {
  return (
    <Box component="section" sx={{ padding: "76px 0 160px 0" }}>
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1280px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            position: "relative",
            marginBottom: "66px",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Партнери та Спонсори
          <span
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              content: "''",
              width: "98px",
              height: "2px",
              backgroundColor: "#131333",
              display: "block",
            }}
          />
        </Typography>
        <Swiper
          effect={"coverflow"}
          slidesPerView={4}
          speed={2000}
          spaceBetween={30}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 600,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor1} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor2} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor3} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor4} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor5} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor6} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <WrapperImg>
                <img src={sponsor7} alt="Зображення до події" />
              </WrapperImg>
            </Box>
          </SwiperSlide>
        </Swiper>
        <Box
          sx={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "normal",
              padding: "10px 20px",
              height: "56px",
              color: "#131333",
              backgroundColor: "transparent",
              textTransform: "none",
              borderRadius: "24px",
              border: "1.5px solid #131333",
            }}
          >
            Дивитись усіх
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SponsorCarousel;
