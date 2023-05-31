import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Alert, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../shared/authcontext";

export default function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmedRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmedRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
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
        {error && <Alert severity="error">{error}</Alert>}
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
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name here"
                autoFocus
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 5px 15px -3px rgba(60, 60, 59, 0.18)",
                  borderColor: "primary.main",
                }}
                ref={fullNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Email"
                label="Enter your email address "
                name="Email"
                ref={emailRef}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                label="Enter your password "
                name="password"
                ref={passwordRef}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="confirmedPassword"
                ref={passwordConfirmedRef}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item>
              <ButtonApp
                onClick={handleSubmit}
                type="submit"
                variant="contained"
                disabled={loading}
              >
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
            <Link
              className="clickable"
              variant="body2"
              underline="hover"
              onClick={handleSignInClick}
            >
              Sign in
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
