import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Stub = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Box sx={{ py: 5, textAlign: 'center' }}>
        <Typography variant="h3">{t('stub')}</Typography>
      </Box>
    </Container>
  );
};

export default Stub;
