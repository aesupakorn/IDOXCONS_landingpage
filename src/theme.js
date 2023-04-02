import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1F9DA6",
      light: "#2eb1b3",
    },
    secondary: {
      main: "#11111",
    },
    third: {
      main: "#9EC21D",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          "&.MuiContainer-maxWidthLg": {
            maxWidth: 1280,
          },
        },
      },
    },
  },
});
