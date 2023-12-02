import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Ваш текст в подвале
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
