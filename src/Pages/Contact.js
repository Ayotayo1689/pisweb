import React from "react";
import NavBar from "../Components/Navs/NavBar";
import Footer from "../Components/Section/Footer";
import { Box } from "@mui/system";
import { Grid, IconButton, Typography, Button, TextField, createTheme, ThemeProvider } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import "../Components/Styles/Section.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChatUs from "../Components/Section/ChatUs";

const theme = createTheme({
  palette:{
    primary:{
      main:'#051e34'
    }
  }
})

const Contact = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        className="service_Banner"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1 style={{ marginBottom: "0%" }}>Contact Us</h1>
       
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          width: {
            lg: "80%",
            md: "80%",
            sm: "90%",
            xs: "90%",
          },
        }}
      >
        <Box sx={{ pb: 0, borderBottom: "1px solid #c7c7c7", mt: 3 }}>
          <IconButton>
            <HouseIcon sx={{ color: "#2e2f4b", fontSize: "15px" }} />
          </IconButton>
          <Typography variant="body" sx={{ color: "#2e2f4b" }}>
            &#62;
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontFamily: "poppins",
              color: "#a0a0a0",
              ml: 1,
            }}
          >
            Contact us
          </Typography>
        </Box>

        <Box
          mt={3}
          sx={{
            borderLeft: "5px solid #2e2f4b",

            p: 1,
            pl: 3,
            fontFamily: "Nexa-Regular",
          }}
        >
          <Typography
            variant="body"
            sx={{ color: "#2e2f4b", lineHeight: "27px" }}
          >
            Our customer support team provides information and guidance about
           Promise international school
          </Typography>
        </Box>
        <Box mt={5} mb={3}>
          <Grid container spacing={3}>
            <Grid item lg={8} xs={12}>
              <Box className="about_shadow" sx={{ height: "620px", p:3 }}>
              
            <Typography
              variant="h4"
              sx={{
                fontSize: {
                  lg: '24px',
                  
                  md: '22px',
                  sm: '18px',
                  xs:'18px'
                },
                fontWeight: '500',
                fontFamily:'Nexa-Heavy',
                color:'#0976a5'
              }}
              className="get_h4"
            >
              Get In Touch
            </Typography>
            <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', }}>
              <div className="contact_input">
                <TextField
                  variant="outlined"
                  label="Full Name"
                  size="small"
                  InputLabelProps={{style:{fontSize:'14px'}}}
                  fullWidth
                  sx={{
                    mr:2
                  }}
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Email"
                  size="small"
                  margin="normal"
                  InputLabelProps={{style:{fontSize:'14px'}}}
                  fullWidth
                ></TextField>
              </div>
              <TextField
                variant="outlined"
                label="subject"
                size="small"
                InputLabelProps={{style:{fontSize:'14px'}}}
                fullWidth
                sx={{
                  mb:3
                }}
              />
              <TextField
                variant="outlined"
                label="Enter Message"
                multiline
                InputLabelProps={{style:{fontSize:'14px'}}}
                rows={4}
                fullWidth
                sx={{
                  mb:3
                }}
              />
              <Button variant="contained">Send Message</Button>
            </Box>
      
              </Box>
            </Grid>
            <Grid item lg={4} xs={12}>
              <Box
                mt={3}
                mb={6}
                className="about_shadow"
                sx={{
                  border: "1px solid #e3e3e3",
                  bgcolor: "#f3f3f3",
                  height: "300px",
                  display: "flex",
                  justifyContent: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}

              >
<Box sx={{bgcolor:'#01142A', width:'80%', height:'50px', mt:-3}}>
<Typography sx={{color:'#fff', fontFamily:'Nexa-Heavy', fontSize:'20px', textAlign:'center', mt:1}}>Contact Info</Typography>
</Box>
<Box mt={2}>

  <Typography sx={{color:'#01142a', fontFamily:'Nexa-Heavy', fontSize:'20px', textAlign:'center', mt:1}}>  Email Address </Typography>
  <Typography sx={{color:'#01142a', fontFamily:'poppins', fontSize:'15px', textAlign:'center', mt:1}}> promiseinternational2020@gmail.com </Typography>

  <Typography sx={{color:'#01142a', fontFamily:'Nexa-Heavy', fontSize:'20px', textAlign:'center', mt:3}}> Phone Number </Typography>
  <Typography sx={{color:'#01142a', fontFamily:'poppins', fontSize:'15px', textAlign:'center', mt:1}}> 09096744364 </Typography>
</Box>

              </Box>
              <Box
                mt={3}
                mb={6}
                className="about_shadow"
                sx={{
                  border: "1px solid #e3e3e3",
                  bgcolor: "#f3f3f3",
                  height: "100px",
                  display: "flex",
                  justifyContent: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{bgcolor:'#01142A', width:'80%', height:'50px', mt:-3}}>
                <Typography sx={{color:'#fff', fontFamily:'Nexa-Heavy', fontSize:'20px', textAlign:'center', mt:1}}>Let's get social</Typography>
</Box>
<Box mt={1.5}>
  <a href="#" style={{color:'#01142a', textDecoration:'none'}}>
    <FacebookIcon sx={{fontSize:'45px'}}/>
  </a>
  <a href="#" style={{color:'#01142a', textDecoration:'none'}}>
    <TwitterIcon sx={{fontSize:'45px'}}/>
  </a>
  <a href="#" style={{color:'#01142a', textDecoration:'none'}}>
    <InstagramIcon sx={{fontSize:'45px'}}/>
  </a>

</Box>
              </Box>
              <Box
                mt={3}
                className="about_shadow"
                sx={{
                  border: "1px solid #e3e3e3",
                  bgcolor: "#f3f3f3",
                  height: "100px",
                  display: "flex",
                  justifyContent: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Box sx={{bgcolor:'#01142A', width:'80%', height:'50px', mt:-3}}>
                <Typography sx={{color:'#fff', fontFamily:'Nexa-Heavy', fontSize:'17px', textAlign:'center', mt:1}}>Our Location</Typography>
</Box>
<Typography sx={{color:'#000', fontFamily:'Nexa-Heavy', fontSize:'18px', textAlign:'center', mt:1}}>17A Silas works Fegge, Onitsha.
8 Akokwa Street fegge, Onitsha.</Typography>
              </Box>
            </Grid>
       
          </Grid>
        </Box>
      </Box>
      <Footer />
      <ChatUs/>
      </ThemeProvider>
    </>
  );
};

export default Contact;
