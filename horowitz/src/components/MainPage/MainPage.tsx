import React from "react";
import Container from "@mui/material/Container";
import Header from "../Header/Header";
import heroImg from "../Header/main-photo.png";
import { Box, Button, Typography } from "@mui/material";

const MainPage = () => {
  return (
    <div>
      <Header />

      <Box
        sx={{
          backgroundImage: ` url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "780px",
          paddingTop: "290px",
          paddingLeft: "260px",
          paddingRight: "260px",
        }}
      >
        {/* Здесь можете добавить контент для секции Hero */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography variant="h5" align="center" sx={{ color: "#F2F2F2" }}>
            13-21 квітня, 2023
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "#F2F2F2",
              fontSize: "62px",
              fontWeight: 600,
              lineHeight: "80px",
            }}
          >
            КОНКУРС ГОРОВИЦЯ КИЇВ-ЖЕНЕВА
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "normal",
                width: "214px",
                padding: "10px 20px",
                marginRight: "16px",
                color: "#131333",
                backgroundColor: "#F2F2F2",
                textTransform: "none",
                borderRadius: "2px",
              }}
            >
              Подати заявку
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "normal",
                padding: "10px 20px",
                width: "214px",
                color: "#F2F2F2",
                backgroundColor: "transparent",
                textTransform: "none",
                borderRadius: "2px",
                border: " 1.5px solid #F2F2F2",
              }}
            >
              Підтримати проєкт
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Добавьте другие секции и компоненты по мере необходимости */}
    </div>
  );
};

export default MainPage;
