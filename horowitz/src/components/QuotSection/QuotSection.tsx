import { Box, Typography } from '@mui/material';
import quotImg from './quot.png';
import { useHomeData } from '../../store';

const QuotSection = () => {
  const { quote } = useHomeData(state => ({
    quote: state.quote,
  }));

  return (
    <Box
      component='section'
      sx={{
        // backgroundImage: ` linear-gradient(0deg, rgba(19, 19, 51, 0.40) 0%, rgba(19, 19, 51, 0.40) 100%), url(${quotImg})`,
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40)), url(${quotImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '474px', // Высота секции, можно задать другое значение
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backdropFilter: 'blur(1px)',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '840px',
          margin: '0 auto',
        }}>
        <Typography
          variant='h4'
          sx={{
            color: '#F2F2F2',
            fontSize: '40px',
            fontWeight: 600,
            lineHeight: '60px',
            textTransform: 'uppercase',
          }}>
          {quote.quote}
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: '#E19C2A',
            fontSize: '24px',
            fontWeight: 500,
            fontStyle: 'italic',
            lineHeight: 'normal',
            textTransform: 'uppercase',
          }}>
          — {quote.author}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuotSection;
