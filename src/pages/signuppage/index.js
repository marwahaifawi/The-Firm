import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ButtonApp from "../../shared/button";
import { Divider, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState([
    {
      FullName: "",
      Email: "",
      Password: "",
      PasswordConfirm: "",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth,user.Email,user.Password).then((userCredential)=>{
    console.log(userCredential);
    })
    .catch((error)=>{
      console.log(error);
    })
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
                onChange={(e) => setUser({ ...user, FullName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="Email"
                label="Enter your email address "
                name="Email"
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
                label="Enter your password "
                name="password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
                onChange={(e) => setUser({ ...user, Password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="password"
                sx={{
                  borderLeft: "5px solid",
                  borderRadius: "11px",
                  boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
                  borderColor: "primary.main",
                }}
                onChange={(e) =>
                  setUser({ ...user, PasswordConfirmed: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <ButtonApp
                onClick={handleSubmit}
                type="submit"
                variant="contained"
              >
                Submit
              </ButtonApp>
            </Grid>
          </Grid>
        </Box>
        <Grid container justifyContent="center">
          <Grid item>
            <Divider variant="middle" />
            <Link color="#A7A7A6"  variant="body2" >
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
// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import ButtonApp from "../../shared/button";
// import { Alert, Divider, Stack } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useUserAuth } from "../../shared/authentication";
// export default function SignUp() {
//   const navigate = useNavigate();
//   const { signUp } = useUserAuth();
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     passwordConfirm: "",
//   });
//   const [error, setError] = useState();
//   const handleSubmit = async (user) => {
//     try {
//       if (user.email && user.password) {
//         setError("");
//         await signUp(user.email, user.password);
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSignInClick = () => {
//     navigate("/login");
//   };

//   return (
//     <Container maxWidth="xs">
//       <Stack alignItems="center" mt={30} mb={30} direction="column">
//         <Typography variant="h4" color="primary.main">
//           Sign Up Now
//         </Typography>
//         {error && <Alert severity="error">{error}</Alert>}
//         <Box
//           alignItems="center"
//           component="form"
//           noValidate
//           onSubmit={handleSubmit}
//           mt={3}
//           mb={2}
//         >
//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12}>
//               <TextField
//                 name="fullName"
//                 required
//                 fullWidth
//                 id="fullName"
//                 label="Full Name here"
//                 autoFocus
//                 sx={{
//                   borderLeft: "5px solid",
//                   borderRadius: "11px",
//                   boxShadow: "0px 5px 15px -3px rgba(60, 60, 59, 0.18)",
//                   borderColor: "primary.main",
//                 }}
//                 onChange={(e) => setUser({ ...user, fullName: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="Email"
//                 label="Enter your email address "
//                 name="Email"
//                 sx={{
//                   borderLeft: "5px solid",
//                   borderRadius: "11px",
//                   boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
//                   borderColor: "primary.main",
//                 }}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="password"
//                 label="Enter your password "
//                 name="password"
//                 sx={{
//                   borderLeft: "5px solid",
//                   borderRadius: "11px",
//                   boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
//                   borderColor: "primary.main",
//                 }}
//                 onChange={(e) => setUser({ ...user, password: e.target.value })}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Confirm password"
//                 type="password"
//                 id="confirmPassword"
//                 sx={{
//                   borderLeft: "5px solid",
//                   borderRadius: "11px",
//                   boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.1)",
//                   borderColor: "primary.main",
//                 }}
//                 onChange={(e) =>
//                   setUser({ ...user, passwordConfirm: e.target.value })
//                 }
//               />
//             </Grid>
//             <Grid item>
//               <ButtonApp
//                 onClick={handleSubmit}
//                 type="submit"
//                 variant="contained"
//               >
//                 Submit
//               </ButtonApp>
//             </Grid>
//           </Grid>
//         </Box>
//         <Grid container justifyContent="center">
//           <Grid item>
//             <Divider variant="middle" />
//             <Link color="#A7A7A6" variant="body2">
//               Already have an account?
//             </Link>
//             <Link
//               className="clickable"
//               variant="body2"
//               underline="hover"
//               onClick={handleSignInClick}
//             >
//               Sign in
//             </Link>
//           </Grid>
//         </Grid>
//       </Stack>
//     </Container>
//   );
// }
