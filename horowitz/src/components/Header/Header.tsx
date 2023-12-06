import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png';
import { Box, Container } from '@mui/material';
import LangPanel from '../LangPanel/LangPanel';

const Header = () => {
  return (
    <AppBar
      component="header"
      position="absolute"
      sx={{ background: 'transparent', boxShadow: 'none' }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '30px',
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={logo}
              alt="Логотип"
              style={{ width: '200px', height: '100%', marginRight: '26px' }}
            />
            <Typography
              variant="h6"
              sx={{
                width: '92px',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              Member of WFIMC EMCY
            </Typography>
          </Box>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                marginRight: '16px',
                fontSize: '18px',
              }}
            >
              Пошук
            </Typography>
            <IconButton
              color="inherit"
              sx={{ padding: 0, marginRight: '40px' }}
            >
              <SearchIcon />
            </IconButton>
            <LangPanel />
            <Typography variant="body1" sx={{ mx: '16px', fontSize: '18px' }}>
              Меню
            </Typography>
            <IconButton color="inherit" sx={{ padding: 0 }}>
              <MenuIcon />
            </IconButton>
          </div>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
