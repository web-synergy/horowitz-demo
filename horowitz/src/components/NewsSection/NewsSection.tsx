import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import news1 from "./news1.png";
import news2 from "./news2.png";
import news3 from "./news3.png";

const NewsSection = () => {
  return (
    <Box component="section" sx={{ padding: "120px 0" }}>
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
          Новини
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Карточка новини 1 */}
          <Box sx={{ width: "356px" }}>
            <img
              src={news1}
              alt="news foto"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "4px",
              }}
            />

            <Typography
              variant="h6"
              sx={{
                marginTop: "20px",
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Новина 1
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Короткий опис
            </Typography>
          </Box>
          {/* Карточка новини 2 */}
          <Box sx={{ width: "356px" }}>
            <img
              src={news2}
              alt="news foto"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "4px",
              }}
            />

            <Typography
              variant="h6"
              sx={{
                marginTop: "20px",
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Новина 2
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "20px",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              Короткий опис
            </Typography>
          </Box>
          {/* Карточка новини 3 */}
          <Box sx={{ width: "356px" }}>
            <Box>
              <img
                src={news3}
                alt="news foto"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "4px",
                }}
              />

              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Новина 2
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Короткий опис
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "56px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
            Читати всі новини
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSection;
