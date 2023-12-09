import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useHomeData } from "../../store";
import { useTranslation } from "react-i18next";

const ResultsSection = () => {
  const { video } = useHomeData((state) => ({
    video: state.video,
  }));
  const { t } = useTranslation();

  return (
    <Box component="section" sx={{ padding: "120px 0" }}>
      <Container
        sx={{
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
          {t("main.watchTitle")}
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
            alignItems: "flex-start",
            gap: 3,
          }}
        >
          {/* Карточка новости 1 */}

          {video &&
            video.map((item, index) => (
              <Box key={index}>
                <Box sx={{ textAlign: "start", PointerEvents: "none" }}>
                  <iframe
                    style={{
                      border: "none",
                      borderRadius: "4px",
                    }}
                    width="356"
                    height="198"
                    src={item?.link}
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
                    {item.title}
                  </Typography>
                </Box>
              </Box>
            ))}
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
            {t("main.watchBtn")}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResultsSection;
