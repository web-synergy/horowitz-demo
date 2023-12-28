import { Box, Container, Link, Typography } from '@mui/material';
import logo from '../Header/logo.svg';

import { styled } from '@mui/system';

const SocialIcon = styled(Box)(() => ({
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: '#C3BDBD',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'orange',
  },
}));

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#010217', color: '#fff', padding: '32px 0' }}>
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: ' flex-start',
              }}
            >
              {/* Логотип */}
              <img
                src={logo}
                alt="Logo"
                style={{ width: '200px', height: 'auto' }}
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '16px',

                marginTop: ' 24px',
              }}
            >
              <Box>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
              </Box>
              <Box>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.9997 11.3698C16.1231 12.2021 15.981 13.052 15.5935 13.7988C15.206 14.5456 14.5929 15.1512 13.8413 15.5295C13.0898 15.9077 12.2382 16.0394 11.4075 15.9057C10.5768 15.7721 9.80947 15.3799 9.21455 14.785C8.61962 14.1901 8.22744 13.4227 8.09377 12.592C7.96011 11.7614 8.09177 10.9097 8.47003 10.1582C8.84829 9.40667 9.45389 8.79355 10.2007 8.40605C10.9475 8.01856 11.7975 7.8764 12.6297 7.99981C13.4786 8.1257 14.2646 8.52128 14.8714 9.12812C15.4782 9.73496 15.8738 10.5209 15.9997 11.3698Z"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 6.5H17.51"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
              </Box>
              <Box>
                <SocialIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2.5005 17C1.80192 13.7033 1.80192 10.2967 2.5005 7C2.59228 6.66521 2.76963 6.36007 3.0151 6.11461C3.26057 5.86914 3.5657 5.69179 3.9005 5.6C9.26394 4.71146 14.737 4.71146 20.1005 5.6C20.4353 5.69179 20.7404 5.86914 20.9859 6.11461C21.2314 6.36007 21.4087 6.66521 21.5005 7C22.1991 10.2967 22.1991 13.7033 21.5005 17C21.4087 17.3348 21.2314 17.6399 20.9859 17.8854C20.7404 18.1309 20.4353 18.3082 20.1005 18.4C14.7371 19.2887 9.26393 19.2887 3.9005 18.4C3.5657 18.3082 3.26057 18.1309 3.0151 17.8854C2.76963 17.6399 2.59228 17.3348 2.5005 17Z"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 15L15 12L10 9V15Z"
                      stroke="#070708"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </SocialIcon>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: 600, lineHeight: 'normal' }}
            >
              Про нас
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" sx={{ color: 'inherit' }} href="#">
                Конкурс Горовиця
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Конкурс Горовиця
                <br />
                Київ-Женева
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Володимир Горовиць
              </Link>
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: 600, lineHeight: 'normal' }}
            >
              XIV Конкурс
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" sx={{ color: 'inherit' }} href="#">
                Горовиць Дебют/
                <br />
                Молодша група
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Середня група
                <br />
                (14-19 років)
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Старша група
                <br />
                (16-33 роки)
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Архів
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: 600, lineHeight: 'normal' }}
            >
              Проєкти
            </Typography>

            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" sx={{ color: 'inherit' }} href="#">
                Майстер класи
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Літня музична академія
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: '16px', fontWeight: 400, lineHeight: 'normal' }}
            >
              <Link underline="hover" href="#" sx={{ color: 'inherit' }}>
                Віртуози планети
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: 600, lineHeight: 'normal' }}
            >
              Новини
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Typography
              variant="h6"
              sx={{ fontSize: '16px', fontWeight: 600, lineHeight: 'normal' }}
            >
              Контакти
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link
                underline="hover"
                sx={{
                  color: 'inherit',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
                href="#"
              >
                WFIMC
              </Link>{' '}
              <Link
                underline="hover"
                sx={{
                  color: 'inherit',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
                href="#"
              >
                104 Rue de Carouge
              </Link>{' '}
              <Link
                underline="hover"
                sx={{
                  color: 'inherit',
                  fontSize: '16px',
                  fontWeight: 400,
                  lineHeight: 'normal',
                }}
                href="#"
              >
                CH-1205 Geneva <br /> Switzerland
              </Link>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography variant="body2">
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    color: 'inherit',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  horowitz@fmcim.org
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link
                  underline="hover"
                  href="#"
                  sx={{
                    color: 'inherit',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  }}
                >
                  +41 22 321 3620
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '32px',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(237, 237, 237, 0.60)',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Copyright © Horowitz Competition Kyiv-Geneva. All right reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
