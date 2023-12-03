import { styled, Box } from "@mui/material";

export const WrapperImg = styled(Box)(() => ({
  width: "100%",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
}));
