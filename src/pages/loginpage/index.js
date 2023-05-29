import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Divider, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import IconButton from "@mui/material/IconButton";
// import Input from "@mui/material/Input";
// import FilledInput from "@mui/material/FilledInput";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormHelperText from "@mui/material/FormHelperText";
// import FormControl from "@mui/material/FormControl";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [user, setUser] = useState([
    {
      Email: "",
      Password: "",
    },
  ]);
  const handleSubmit = (event) => {
    signInWithEmailAndPassword(auth, user.Email, user.Password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <Container maxWidth="xs">
      <Stack alignItems="center" mt={30} mb={30} direction="column">
        <Typography variant="h4" color="primary.main">
          Log In Please
        </Typography>
        <Box alignItems="center" component="form" noValidate mt={3} mb={2}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Enter your email address "
                name="email"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
                onChange={(e) => setUser({ ...user, Email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                label="Enter your password "
                name="password"
                autoComplete="password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
              />

              <Grid item xs fullWidth>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  mt={1}
                >
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Stack>
              </Grid>
            </Grid>
            <Grid item>
              <ButtonApp
                onClick={handleSubmit}
                type="submit"
                variant="contained"
              >
                Log In
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6" href="#" variant="body2" underline="hover">
              Don’t have an account ?
            </Link>

            <Link
              className="clickable"
              variant="body2"
              onClick={handleSignUpClick}
            >
              SIGN UP
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
export default Login;
