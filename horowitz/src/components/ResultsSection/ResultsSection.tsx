import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
// import video1 from "./video1.mp4";
// import video2 from "./video2.mp4";
// import video3 from "./video3.mp4";

const ResultsSection = () => {
  return (
    <Box component="section" sx={{ padding: "120px 0" }}>
      <Container
        sx={{
          backgroundColor: "#FFFFFF",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
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
          Дивитись онлайн
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
          {/* Карточка новости 1 */}
          <Box sx={{ width: "356px" }}>
            <Box sx={{ textAlign: "start" }}>
              {/* <video
                src="https://www.example.com/path-to-your-video/video.mp4"
                // alt="video"
                style={{
                  width: "100%",
                  height: "198px",
                  display: "block",
                  borderRadius: "4px",
                }}
                controls
              /> */}
              <iframe
                style={{
                  border: "none",
                  borderRadius: "4px",
                }}
                width="356"
                height="198"
                src="https://www.youtube.com/embed/zupRCqvuBR8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Фінальні Результати 2022
              </Typography>
            </Box>
          </Box>
          {/* Карточка новости 2 */}
          <Box sx={{ width: "356px" }}>
            <Box sx={{ textAlign: "start" }}>
              <iframe
                style={{
                  border: "none",
                  borderRadius: "4px",
                }}
                width="356"
                height="198"
                src="https://www.youtube.com/embed/IM2y1xlP-n0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Фінальні Результати 2022
              </Typography>
            </Box>
          </Box>
          {/* Карточка новости 3 */}
          <Box sx={{ width: "356px" }}>
            <Box sx={{ textAlign: "start" }}>
              <iframe
                style={{
                  border: "none",
                  borderRadius: "4px",
                }}
                width="356"
                height="198"
                src="https://www.youtube.com/embed/GquvQ1yOYwU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                sx={{
                  marginTop: "20px",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}
              >
                Фінальні Результати 2022
              </Typography>
            </Box>
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
            Дивитись всі відео
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResultsSection;
