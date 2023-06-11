import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Divider, Stack } from "@mui/material";
import ButtonApp from "../../shared/button";
import { logInWithEmailAndPassword, auth } from "../../firebase";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleResetClick = () => {
    navigate("/resetpassword");
  };

  const onSubmit = () => {
    logInWithEmailAndPassword(formData.email, formData.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Log In Please
        </Typography>
        <Box alignItems="center" component="form" noValidate mt={3} mb={2} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                required
                fullWidth
                id="email"
                label="Enter your email address"
                name="email"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                {...register("password", { required: true })}
                required
                fullWidth
                id="password"
                type="password"
                label="Enter your password"
                name="password"
                autoComplete="password"
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
            </Grid>
            <Grid item xs>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Link className="clickable" onClick={handleResetClick} variant="body2">
                  Forgot password?
                </Link>
              </Stack>
            </Grid>
            <Grid item>
              <ButtonApp type="submit" variant="contained">
                Log In
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6" href="#" variant="body2" underline="hover">
              Don’t have an account?
            </Link>
            <Link className="clickable" variant="body2" onClick={handleSignUpClick}>
              SIGN UP
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};

export default Login;
