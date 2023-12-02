import { createTheme } from "@mui/material";
import { components } from "./components";
import { breakpoints } from "./breakpoints";

declare module "@mui/material/styles" {
  interface Theme {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
  interface ThemeOptions {
    header: {
      mobile: { minHeight: number };
      desktop: { minHeight: number };
    };
  }
}

export const theme = createTheme({
  breakpoints,
  components,
  header: {
    mobile: { minHeight: 112 },
    desktop: {
      minHeight: 221,
    },
  },
});
