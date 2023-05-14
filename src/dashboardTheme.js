import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#0FB3AF",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: ["Nunito"].join(","),
    color:'primary'
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            textTransform: "none",
            borderRadius: "5px",
            boxShadow: "none",
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: "10px 80px", // override padding here
        },
      },
    },
  },
});
