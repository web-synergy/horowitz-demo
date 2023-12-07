import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Stack component="main" minHeight="100%" flex="1 1 auto">
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
