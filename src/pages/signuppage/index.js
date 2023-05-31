import React, { useState } from "react";
import { useForm } from "react-hook-form";
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
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // handle form submission here
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
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          mt={3}
          mb={2}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                {...register("fullName", { required: true })}
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
              />
              {errors.fullName && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("email", { required: true })}
                fullWidth
                id="email"
                label="Enter your email address"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
              {errors.email && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("password", { required: true })}
                fullWidth
                id="password"
                label="Enter your password"
                type="password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
              {errors.password && <span>This field is required</span>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...register("confirmPassword", { required: true })}
                fullWidth
                name="confirmPassword"
                label="Confirm password"
                type="password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
              />
              {errors.confirmPassword && <span>This field is required</span>}
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
