import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useHomeData } from '../../store';
import { urlFor } from '../../lib/client';

const WinnersSection = () => {
  const { winner } = useHomeData(state => ({
    winner: state.winner,
  }));
  return (
    <Box component='section' sx={{ padding: ' 120px 0 0 0' }}>
      <Container>
        <Typography
          variant='h4'
          align='center'
          sx={{
            position: 'relative',
            marginBottom: '66px',

            fontSize: '32px',
            fontWeight: 600,
            lineHeight: 'normal',
          }}>
          Переможці 2023
          <span
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              content: "''",
              width: '98px',
              height: '2px',
              backgroundColor: '#131333',
              display: 'block',
            }}
          />
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '72px',
          }}>
          {/* Карточка переможця 1 */}
          {winner &&
            winner.map((item, index) => (
              <Box key={index} sx={{ textAlign: 'center' }}>
                <img
                  src={urlFor(item.img)
                    .auto('format')
                    .fit('scale')
                    .url()
                    .toString()}
                  alt='winner1'
                  style={{
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
                <Typography
                  variant='h6'
                  sx={{
                    marginTop: '24px',
                    marginBottom: '8px',
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 'normal',
                  }}>
                  {item.name}
                </Typography>
                <Typography
                  variant='body2'
                  sx={{
                    color: '#827E7E',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 'normal',
                  }}>
                  {item.champion}
                </Typography>
              </Box>
            ))}
        </Box>
        <Box
          sx={{
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Button
            variant='outlined'
            sx={{
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 'normal',
              padding: '10px 20px',
              height: '56px',
              color: '#131333',
              backgroundColor: 'transparent',
              textTransform: 'none',
              borderRadius: '24px',
              border: '1.5px solid #131333',
            }}>
            Переглянути всіх учасників
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WinnersSection;
