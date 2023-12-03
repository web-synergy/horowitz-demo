import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import winner1 from "./winner1.png";
import winner2 from "./winner2.png";
import winner3 from "./winner3.png";

const WinnersSection = () => {
  return (
    <Box component="section" sx={{ padding: " 120px 0 0 0" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{
            position: "relative",
            marginBottom: "66px",

            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "normal",
          }}
        >
          Переможці 2023
          <span
            style={{
              position: "absolute",
              bottom: "-8px",
              left: "50%",
              transform: "translateX(-50%)",
              content: "''",
              width: "98px",
              height: "2px",
              backgroundColor: "#131333",
              display: "block",
            }}
          />
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "72px",
          }}
        >
          {/* Карточка переможця 1 */}
          <Box sx={{ textAlign: "center" }}>
            <img
              src={winner1}
              alt="winner1"
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "24px",
                marginBottom: "8px",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Роман Федюрко
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#827E7E",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              І премія і Золота медаль
            </Typography>
          </Box>
          {/* Карточка переможця 2 */}

          <Box sx={{ textAlign: "center" }}>
            <img
              src={winner2}
              alt="winner2"
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "24px",
                marginBottom: "8px",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Джуліан Тревельян
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#827E7E",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              ІІ премія і Срібна медаль
            </Typography>
          </Box>

          {/* Карточка переможця 3 */}

          <Box sx={{ textAlign: "center" }}>
            <img
              src={winner3}
              alt="winner3"
              style={{
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                marginTop: "24px",
                marginBottom: "8px",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Йонсон Пак
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#827E7E",
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              ІІІ премія і Бронзова медаль
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "normal",
              padding: "10px 20px",
              height: "56px",
              color: "#131333",
              backgroundColor: "transparent",
              textTransform: "none",
              borderRadius: "24px",
              border: "1.5px solid #131333",
            }}
          >
            Переглянути всіх учасників
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default WinnersSection;
