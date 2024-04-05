import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import React from "react";

import "../Styles/Section.css";

import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School'
import ApartmentIcon from '@mui/icons-material/Apartment'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ButtonBase from '@mui/material/ButtonBase';
import creche from '../../img/creche.jpg'
import primary from '../../img/primary.jpg'
import secondary from '../../img/secondary.jpg'


const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

const Neck = () => {
  const value = [
    'Personal attention',
    'International diversity',
    'Global awareness',
    'Healthy living',
    'Passion for learning',
  ]
  const academic = [
    'Accredited curriculum',
    'Passionate teaching',
    'Lessons in English',
    'French for all',
    'Small class sizes',
  ]
  const classroom = [
    'Outdoor learning',
    'Art, drama & music',
    'Expeditions',
    
    'Clubs & activities',
  ]
  const care = [
    'Day',
    'Safe environment',
    'Wraparound care',
    'Exceptional location',
    'State of the art campus',
  ]

  const images = [
    {
      url: creche,
      title: 'Curriculum',
      width: '25%',
    },
    {
      url:primary,
      title: 'School Blog',
      width: '25%',
    },
    {
      url: secondary,
      title: 'Photo Gallery',
      width: '25%',
    },
    {
      url: secondary,
      title: 'Award',
      width: '25%',
    },
  ];
  return (
      <>
      <Box mt={3}>
      <Container>
        <div className="feature_container">
          <h2 style={{fontFamily:'Lebuane'}}>A QUICK LOOK AT PROMISE INTERNATIONAL SCHOOL</h2>
          <p>outstanding features</p>
          <Grid container spacing={2} className="features_container">
            <Grid item className="feature_value">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <AutoStoriesIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black', fontSize:'15px', marginTop:'10px' }}>Our Values</h5>
              {value.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
     
            </Grid>
            <Grid item className="feature_academic">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <SchoolIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black',fontSize:'15px', marginTop:'10px' }}>Academic Excellence</h5>
              {academic.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
          
            </Grid>
            <Grid item className="feature_classroom">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <ApartmentIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black', fontSize:'15px', marginTop:'10px' }}>Beyond the Classroom</h5>
              {classroom.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
      
            </Grid>
            <Grid item className="feature_care">
              <div className="feature_img">
                <div className="feature_inner_circle">
                  <MedicationLiquidIcon sx={{ fontSize: '60px' }} />
                </div>
              </div>
              <h5 style={{ color: 'black', fontSize:'15px', marginTop:'10px' }}>Pastoral Care</h5>
              {care.map((page, index) => (
                <p key={index}>{page}</p>
              ))}
         
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container>
        <Grid container spacing={4} mt={3} className="feature_container_two">
          <Grid item lg={6} md={6} xs={12}
          sx={{

      
          }}
         >
            <Box className="feature_thumbnail" sx={{width:{lg:'550px', md:'500px', sm:'400px', xs:'380px'},  height:'300px'}} >
              <Link href="/">
                <a>
                  <div className="play">
                    <PlayArrowIcon
                      sx={{ fontSize: '35px', color: '#0098db' }}
                    />
                  </div>
                </a>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sx={{flexDirection:'column'}} className="feature_info">
            <h3 style={{fontFamily:'Nexa-Heavy'}}>Welcome</h3>
            <p style={{fontFamily:'poppins', fontSize:'15px', lineHeight:'24px'}}>
              Promise Int'l welcomes young people aged 1 to 18 from more than 30
              nations to our exceptional school in Onitsha.
              <br />
              We pride ourselves on our bilingual approach, giving students
              mastery of French and English. Our students follow globally
              accredited programmes of study, creating informed, globally
              competent, and future-ready learners. Promise International core values are
              academic excellence, a close-knit family atmosphere, security and
              cultural diversity.
            </p>
            <Link href="/About" >
            <Button
              variant="outlined"
              sx={{ fontSize: '12px', marginTop: '20px',  }}
            >
              Read More
            </Button></Link>
          </Grid>
        </Grid>
      </Container>
   <Box>
   <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' , mt:5 }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
   </Box>
      </Box>
      </>
  );
};

export default Neck;
