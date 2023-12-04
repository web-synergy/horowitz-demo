import { useEffect } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { useHomeData } from '../../store';

const Hero = () => {
  const { getData, banner } = useHomeData(state => ({
    getData: state.getData,
    banner: state.banner,
  }));

  useEffect(() => {
    getData('en');
  }, [getData]);

  return (
    <div>
      {banner && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: ` url(${banner.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(2.5px)',
            height: '780px',
            paddingTop: '290px',
          }}>
          {/* Контент для секції Hero */}

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '760px',
              margin: '0 auto',
            }}>
            <Typography
              variant='h5'
              align='center'
              sx={{
                color: '#F2F2F2',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: 'normal',
              }}>
              {banner.dateBegin}
            </Typography>
            <Typography
              variant='h2'
              align='center'
              sx={{
                color: '#F2F2F2',
                fontSize: '62px',
                fontWeight: 600,
                lineHeight: '80px',
                textTransform: 'uppercase',
              }}>
              {banner.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Button
                variant='contained'
                sx={{
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 'normal',
                  width: '214px',
                  height: '56px',
                  padding: '10px 20px',
                  marginRight: '16px',
                  color: '#131333',
                  backgroundColor: '#F2F2F2',
                  textTransform: 'none',
                  borderRadius: '2px',
                }}>
                Подати заявку
              </Button>
              <Button
                variant='outlined'
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
                }}>
                Підтримати проєкт
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Hero;
