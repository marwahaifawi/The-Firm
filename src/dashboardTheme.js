import { createTheme } from "@mui/material/styles";

export const dashboardTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1150,
      lg: 1300,
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
    h4: {
      "@media (max-width: 600px)": {
        fontSize: "1.5rem", // adjust font size for larger screens
        lineHeight: "2rem", // adjust line height for larger screens
      },
      // ad more breakpoints as needed
    },
    h5: {
      "@media (max-width: 850px)": {
        fontSize: "1.3rem", // adjust font size for larger screens
      },
      // ad more breakpoints as needed
    },
    body1: {
      "@media (max-width: 850px)": {
        fontSize: ".7rem", // adjust font size for larger screens
      },
      // ad more breakpoints as needed
    },
    // define other typography variants as needed
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
