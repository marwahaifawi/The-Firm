import React, { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Alert, Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmedRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/");
    }
  }, []);

  const handleSignInClick = () => {
    navigate("/login");
  };

  const register = () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }
    if (password !== confirmedPassword) {
      setPasswordsMatch(false);
      return;
    }
    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/");
  };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Sign Up Now
        </Typography>
        <Box component="form" noValidate mt={3} mb={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Full Name here"
                autoFocus
                type="name"
                inputRef={fullNameRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 5px 15px -3px rgba(60, 60, 59, 0.18)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Email"
                label="Enter your email address"
                name="Email"
                inputRef={emailRef}
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                label="Enter your password"
                name="password"
                type="password"
                inputRef={passwordRef}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                inputRef={passwordConfirmedRef}
                value={confirmedPassword}
                onChange={(e) => setConfirmedPassword(e.target.value)}
                error={!passwordsMatch}
                helperText={!passwordsMatch && "Passwords do not match"}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item>
              <Button
                onClick={register}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
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
