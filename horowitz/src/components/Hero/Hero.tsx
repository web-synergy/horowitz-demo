import { useRef } from 'react';

import { Box, Button, Container, IconButton, Stack } from '@mui/material';
import { useHomeData } from '../../store';
import { useTranslation } from 'react-i18next';
import { Video } from './styles';
import video from '../../assets/media/video.mp4';
import poster from '../../assets/media/poster.jpg';
import picture from './images/piano-text.png';
import emcy from './images/EMCY.svg';
import wfmc from './images/WFMC.svg';

import facebook from './images/facebook.svg';
import insta from './images/insta.svg';
import youtube from './images/youtube.svg';

const Hero = () => {
  const { banner } = useHomeData();
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (videoRef.current) {
    videoRef.current.playbackRate = 0.7;
  }

  return (
    <>
      {banner && (
        <Box
          sx={{
            position: 'relative',

            // backgroundImage: ` url(${banner.img})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
            // backdropFilter: 'blur(2.5px)',
            height: '100vh',
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
            }}
          >
            <Video
              autoPlay
              loop
              muted
              poster={poster}
              src={video}
              playback-rate={0.2}
              ref={videoRef}
            ></Video>
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
              background: 'rgba(0, 0, 0, 0.70)',
              backdropFilter: 'blur(6px)',
            }}
          ></Box>
          <Container
            sx={{
              position: 'relative',
              zIndex: 100,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  maxWidth: '695px',
                  gap: 6,
                  height: '100%',
                }}
              >
                <Box
                  component={'img'}
                  src={picture}
                  alt="about competition"
                  maxWidth="100%"
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',

                    gap: 3,
                  }}
                >
                  <Button variant="primary">{t('main.submitApp')}</Button>
                  <Button variant="secondary">
                    {t('main.supportProject')}
                  </Button>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', gap: 6 }}>
                  <Box component={'img'} src={wfmc} width={249} />
                  <Box component={'img'} src={emcy} width={240} />
                </Box>
              </Box>
              <Stack direction="column" gap={2}>
                <IconButton sx={{ p: 0 }}>
                  <Box component={'img'} src={facebook} width={40} />
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Box component={'img'} src={insta} width={40} />
                </IconButton>
                <IconButton sx={{ p: 0 }}>
                  <Box component={'img'} src={youtube} width={40} />
                </IconButton>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Hero;
