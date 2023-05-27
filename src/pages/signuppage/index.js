import * as React from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleSignInClick = () => {
    navigate("/login");
  };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Sign Up Now
        </Typography>
        <Box
          alignItems="center"
          component="form"
          noValidate
          onSubmit={handleSubmit}
          mt={3}
          mb={2}
        >
       <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Full name here"
                autoFocus
                sx={{
                  borderLeft: "5px solid",
                  borderRadius:"11px",
                  boxShadow: '0px 5px 15px -3px rgba(60, 60, 59, 0.18)',
                  borderColor:"primary.main"
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Enter your email address "
                name="lastName"
                autoComplete="family-name"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius:"11px",
                  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
                  borderColor:"primary.main"
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Enter your password "
                name="email"
                autoComplete="email"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius:"11px",
                  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
                  borderColor:"primary.main"
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Conform password"
                type="password"
                id="password"
                autoComplete="new-password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius:"11px",
                  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
                  borderColor:"primary.main"
                }}
              />
            </Grid>
            <Grid item>
              <ButtonApp type="submit" variant="contained">
                Submit
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6" variant="body2">
              Already have an account?
            </Link>
            <Link className="clickable" variant="body2" underline="hover" onClick={handleSignInClick}>
              Sign in
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
