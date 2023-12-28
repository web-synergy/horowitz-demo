import { FC, useState, useEffect } from 'react';
import {
  IconButton,
  Dialog,
  MenuList,
  MenuItem,
  styled,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { nav } from '../../config/navigation';

const Link = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
  fontSize: 18,
});

interface MainNavProps {
  onClick: () => void;
  locale: string;
}
const { main } = nav;

const MainNav: FC<MainNavProps> = ({ onClick, locale }) => {
  const { t } = useTranslation();

  return (
    <MenuList
      sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' } }}
    >
      {main.map((nav) => {
        const title = t(`navigation.main.${nav.href}`);
        return (
          <MenuItem
            key={nav.href}
            onClick={onClick}
            sx={{ '&:hover': { color: (theme) => theme.palette.primary.main } }}
          >
            <Link to={`/${locale}/${nav.href}`}>{title}</Link>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

const Navigation = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setMenu] = useState(false);
  const onCloseMenu = () => setMenu(false);
  const onOpenMenu = () => setMenu(true);
  const location = useLocation();
  const locale = location.pathname.split('/')[1];

  const onClickMenuItem = () => {
    if (!isDesktop) {
      onCloseMenu();
    }
  };

  useEffect(() => {
    if (isDesktop && open) {
      onCloseMenu();
    }
  }, [isDesktop, open]);

  if (isDesktop) {
    return <MainNav onClick={onClickMenuItem} locale={locale} />;
  }

  return (
    <>
      <IconButton color="inherit" id="open-mobile-menu" onClick={onOpenMenu}>
        <MenuIcon />
      </IconButton>
      <Dialog fullScreen open={open}>
        <Stack alignItems="end" p={3}>
          <IconButton onClick={onCloseMenu}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <MainNav onClick={onClickMenuItem} locale={locale} />
      </Dialog>
    </>
  );
};

export default Navigation;
