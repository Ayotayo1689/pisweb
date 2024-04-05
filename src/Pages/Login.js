import {
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
  InputAdornment,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import logo from "../img/logo/logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2980b9",
    },
  },
});
const Login = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ bgcolor: "#e4f4ff", height: "100vh", overflowY: "scroll" }}>
          <Box sx={{ textAlign: "center" }} mt={12}>
            <img src={logo} alt="Bitvest Logo" width="200px" />
          </Box>
          <Box
            sx={{
              width:{lg:'450px', xs:'300px'},
              margin: "auto",
              bgcolor: "#fff",

              boxShadow:
                " rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
              borderRadius: "5px 5px 5px 0px",

              px: 3,
              py: 5,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Nunito",
                fontWeight: "600",
                lineHeight: 1.5,
                fontSize: "24px",
                color: "#2980b9",
                textAlign: "center",
              }}
            >
              User Login
            </Typography>

            <Box px={1} mt={3}>
              <Grid container>
                <Grid item lg={12} xs={12}>
                  <InputLabel
                    variant="standard"
                    required
                    sx={{
                      color: "#2980b9",
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily:'Nunito'
                    }}
                  >
                    Your Email
                  </InputLabel>
                  <TextField
                    fullWidth
                    margin="normal"
                    placeholder="name@example.com"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon sx={{ color: "#2980b9" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "1px solid #2980b9",
                          borderRadius: "5px 5px 5px 0px",
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item lg={12} xs={12} mt={2}>
                  <InputLabel
                    variant="standard"
                    required
                    sx={{
                      color: "#2980b9",
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily:'Nunito'
                    }}
                  >
                    Password
                  </InputLabel>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "1px solid #2980b9",
                          borderRadius: "5px 5px 5px 0px",
                        },
                      },
                    }}
                    margin="normal"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKeyOutlinedIcon sx={{ color: "#2980b9" }} />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Enter Password"
                  />
                </Grid>
                <Grid item xs={6} >
                  <Checkbox />
                  <span
                    style={{
                      textDecoration: "none",
                      color: "#2980b9",
                      fontWeight: "700",
                      textAlign: "right",
                      fontSize: "13px",
                      fontFamily: "Nunito",
                    }}
                  >
                    Remember me
                  </span>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right", pt: 1 }}>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "#3c4858",
                      fontWeight: "700",
                      textAlign: "right",
                      fontSize: "13px",
                      fontFamily: "Nunito",
                    }}
                  >
                    Forget Password?
                  </Link>
                </Grid>
                <Grid item lg={12} mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      textTransform: "initial",
                      borderRadius: "5px 5px 5px 0px",
                      fontSize: "16px",
                      py: "13px",
                    }}
                  >
                    Sign in
                  </Button>
                  <Button
                    fullWidth
                    sx={{
                      textTransform: "initial",
                      borderRadius: "5px 5px 5px 0px",
                      fontSize: "16px",
                      py: "13px",
                    }}
                  >
                    Or Login With
                  </Button>

                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: "#3c4858", fontSize: "13.5px" }}
                    >
                      Don't have an account?
                    </Typography>{" "}
                    <Link
                      to="/register"
                      style={{
                        color: "#3c4858",
                        fontSize: "15px",
                        textDecoration: "none",
                        fontWeight: "700",
                        fontFamily: "Nunito",
                      }}
                    >
                      Sign Up
                    </Link>
                    <Box mt={4}>
                      <small
                        style={{
                          fontSize: "13.5",
                          fontFamily: "Nunito",
                          color: "#3c4858",
                        }}
                      >
                        © Copyright 2023 &nbsp; BitVest Limited &nbsp; All
                        Rights Reserved.
                      </small>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
