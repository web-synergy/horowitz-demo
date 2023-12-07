import SearchIcon from '@mui/icons-material/Search';

import {
  AppBar,
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Toolbar,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LangPanel from '../LangPanel/LangPanel';
import Navigation from './Navigation';
import logo from './logo.png';

const Header = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <AppBar
        component="header"
        position="fixed"
        sx={{
          backgroundColor: (theme) => theme.palette.gray.main,
          boxShadow: 'none',
          color: (theme) => theme.palette.text.secondary,
          pb: 3,
        }}
      >
        <Toolbar>
          <Container>
            <Stack
              py={2}
              alignItems="center"
              sx={{ color: (theme) => theme.palette.gray.light }}
            >
              <Typography>Member of WFIMC & EMCY</Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Link to="/" style={{ fontSize: 0 }}>
                <Box
                  component={'img'}
                  src={logo}
                  alt="Логотип"
                  sx={{
                    width: '200px',
                    height: 'auto',
                    marginRight: { xs: 4, md: 6 },
                  }}
                />
              </Link>
              <Stack direction={isDesktop ? 'row' : 'row-reverse'}>
                <Navigation />
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={3}
                  mr={{ xs: 6, lg: 0 }}
                  ml={{ xs: 0, lg: 6 }}
                >
                  <IconButton color="inherit">
                    <SearchIcon />
                  </IconButton>
                  <LangPanel />
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
      <Box
        sx={
          isDesktop ? { ...theme.header.desktop } : { ...theme.header.desktop }
        }
      />
      <Box />
    </>
  );
};

export default Header;
