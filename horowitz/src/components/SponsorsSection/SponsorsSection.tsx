import { Box, Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import { WrapperImg } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom styles for Swiper
import './sliderStyles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import { useHomeData } from '../../store';
import { urlFor } from '../../lib/client';

const SponsorCarousel = () => {
  const { sponsors } = useHomeData((state) => ({
    sponsors: state.sponsors,
  }));
  const { t } = useTranslation();

  return (
    <Box component="section" sx={{ padding: '76px 0 160px 0' }}>
      <Box
        sx={{
          margin: '0 auto',
          maxWidth: '1280px',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            position: 'relative',
            marginBottom: '66px',
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: 'normal',
          }}
        >
          {t('main.partnersTitle')}
          <span
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              content: "''",
              width: '98px',
              height: '2px',
              backgroundColor: '#131333',
              display: 'block',
            }}
          />
        </Typography>
        <Swiper
          effect={'coverflow'}
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
          {sponsors &&
            sponsors.map((item, index) => (
              <SwiperSlide key={index}>
                <Box>
                  <a target="_blank" href={item.link}>
                    <WrapperImg>
                      <img
                        src={urlFor(item.img)
                          .auto('format')
                          .fit('scale')
                          .url()
                          .toString()}
                        alt={item.title}
                      />
                    </WrapperImg>
                  </a>
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
        <Box
          sx={{
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 'normal',
              padding: '10px 20px',
              height: '56px',
              color: '#131333',
              backgroundColor: 'transparent',
              textTransform: 'none',
              borderRadius: '24px',
              border: '1.5px solid #131333',
            }}
          >
            {t('main.partnersBtn')}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SponsorCarousel;
