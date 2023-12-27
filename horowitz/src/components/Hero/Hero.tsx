import { Box, Button, Typography } from '@mui/material';
import { useHomeData } from '../../store';
import { useTranslation } from 'react-i18next';
import video from '../../assets/video-instagram (online-video-cutter.com).mp4';

const Hero = () => {
  const { banner } = useHomeData();
  const { t } = useTranslation();

  return (
    <div>
      {banner && (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            // backgroundImage: ` url(${banner.img})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backdropFilter: 'blur(2.5px)',
            height: 'calc(100vh - 170px)',
            overflow: 'hidden',
            // paddingTop: '290px',
          }}
        >
          {/* Контент для секції Hero */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 5,

              '& video': {
                minWidth: '100%',
                minHeight: '100%',
                width: 'auto',
                height: 'auto',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              },
            }}
          >
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              minWidth: '100%',
              minHeight: '100%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,

              background:
                'linear-gradient(90deg, rgba(24,24,23,0.9) 0%, rgba(73,73,73,0.9) 50%, rgba(24,24,23,0.9) 100%)',
            }}
          ></Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '24px',
              maxWidth: '760px',
              position: 'relative',
              zIndex: 100,
              height: '100%',
              marginLeft: '30px',
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: '#F2F2F2',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: 'normal',
              }}
            >
              {banner.dateEvent}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#F2F2F2',
                fontSize: '62px',
                fontWeight: 600,
                lineHeight: '80px',
                textTransform: 'uppercase',
              }}
            >
              {banner.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  width: '214px',
                  height: '56px',
                  padding: '10px',
                  marginRight: '16px',
                  color: '#131333',
                  backgroundColor: '#F2F2F2',
                  textTransform: 'none',
                  borderRadius: '2px',
                }}
              >
                {t('main.submitApp')}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  fontSize: '18px',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  padding: '10px 20px',
                  width: '214px',
                  height: '56px',
                  color: '#F2F2F2',
                  backgroundColor: 'transparent',
                  textTransform: 'none',
                  borderRadius: '2px',
                  border: ' 1.5px solid #F2F2F2',
                }}
              >
                {t('main.supportProject')}
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Hero;
