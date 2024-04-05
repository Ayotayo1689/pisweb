import { Avatar, Grid, IconButton, Typography, createTheme, ThemeProvider } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../Components/Navs/NavBar";
import Footer from "../Components/Section/Footer";
import "../Components/Styles/Section.css";
import ChatUs from "../Components/Section/ChatUs";
import Waist from "../Components/Section/Waist";

const theme = createTheme({
  palette:{
    primary:{
      main:'#051e34'
    }
  }
})

const About = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        className="About_Banner"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1>About Us</h1>
      </Box>
      <Box sx={{ margin: "0 auto", width:{
lg:'80%', md:'80%', sm:'90%', xs:'90%'
      },  }}>
        <Box sx={{ pb: 0, borderBottom: "1px solid #c7c7c7", mt:3 }}>
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
            About Us
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
      We value academic excellence and our highly experienced and passionate teachers focus on inquiry-based learning, using state-of-the-art technology. French and English are learned side by side. Our small class sizes allow students to blossom in an optimal and creative environment.
          </Typography>
        </Box>
        <Box
          mt={6}
          className="about_shadow"
          sx={{
            p: 3,
          }}
        >
          <Typography variant="h3" sx={{fontFamily:'Nexa-Heavy', mb:3}}>Welcome</Typography>
          <Typography
            variant="body"
            sx={{
              color: "#2e2f4b",
              lineHeight: "30px",
            }}
          >
          The Méan family is delighted to welcome you to Promise International where our outstanding location and warm family atmosphere have been welcoming students and parents for over several years.<br/>
Our priority is that each child at Promise International should be happy, safe, healthy, valued and cherished. Our motto “Service to God and Humanity” reflects our approach, along with Swiss values of respect, politeness, tolerance, responsibility and punctuality..<br/>
We value academic excellence and our highly experienced and passionate teachers focus on inquiry-based learning, using state-of-the-art technology. French and English are learned side by side. Our small class sizes allow students to blossom in an optimal and creative environment.
          </Typography>
        </Box>
        <Box mt={5} mb={4} className="about_shadow" p={2}>
          <h2>Our Mission</h2>
          <ul class="bullet" >
<li>To train the children with the fear of the Lord.</li>
<li>To train their minds to understand the world in which they are embodied.</li>
<li>To help the children acquire manipulative skills that will enable them function effectively here in school and in the society at large.</li>
<li>To impact sound education to the children so as to equip them for the challenge ahead.</li>
</ul>
       
        </Box>
        <Box mt={5} mb={4} className="about_shadow" p={2}>
          <h2>Our Vision</h2>
          <Typography
            variant="body"
            sx={{
              color: "#2e2f4b",
              lineHeight: "30px",
            }}
          >
        To make a positive impact in the lives of all (every soul) that comes in contact with the promise worls.
          </Typography>

       
        </Box>
        <Box mt={5} mb={4} className="about_shadow" p={2}>
          <h2>For Admission</h2>
          <Typography
            variant="body"
            sx={{
              color: "#2e2f4b",
              lineHeight: "30px",
            }}
          >
       For admission processes into the school, please call us on <a style={{color:'#051e34', fontWeight:'bolder'}} href="tel:09096744364">09096744364</a> or mail us <a style={{color:'#051e34', fontWeight:'bolder'}} href="mailto:promiseinternational2020@gmail.com">promiseinternational2020@gmail.com</a>
          </Typography>

       
        </Box>

 
      </Box>
<Waist/>

      <Footer />
      </ThemeProvider>
    </>
  );
};

export default About;
