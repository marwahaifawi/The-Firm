import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Divider, Stack } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
  },
}));

export default function SignUp() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
                  boxShadow: "none",
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
                  boxShadow: "none",
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
                  boxShadow: "none",
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
                  boxShadow: "none",
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
            <Link color="#A7A7A6" href="#" variant="body2" underline="hover">
              Already have an account? 
            </Link>
            <Link  href="#" variant="body2" >
               Sign in
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
