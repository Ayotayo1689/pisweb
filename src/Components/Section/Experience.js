import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import College from "../../img/secondary.jpg";
import Immersive from "../../img/primary.jpg";
import Core from "../../img/Gallery/Gal1.JPG";
import Advisory from "../../img/video1_thumbnail.jpg";
import "../Styles/Section.css";
import curriculum from "../../img/curriculum.png";

const Experience = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider
          orientation="vertical"
          sx={{
            height: {lg:"100px", xs:'60px'},
            "&::before, &::after": {
              border: "1px solid #fff",
            },
          }}
        />
        <Box
          sx={{ textAlign: "center", mt: 3, margin: "0 auto", width: {lg:"45%", xs:'90%'} }}
        >
          <Typography
            variant="body"
            sx={{
              fontSize: "15px",
              color: "#999999",
              fontFamily: "jost",
              letterSpacing: "1px",
            }}
          >
            TO THE JOURNEY AHEAD
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              fontSize: {lg:"42px", xs:'32px'},
              fontFamily: "Lebuane",
              mt: 3,
              mb: 4,
              color: "#222222",
            }}
          >
            EXPERIENCE IN SCHOOL LEADERSHIP AND TEACHING
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontSize: "18px",
              fontWeight:300,
              fontFamily: "jost",
              color: "#373737",
              lineHeight: 2,
            }}
          >
            We are creating an extraordinary and unique school. Promise
            International is the first truly global and modern institution
            serving children from ages 1 to 18. We not only want to improve our
            students’ lives, but we also hope to contribute to the cause of
            education on every continent.
          </Typography>
        </Box>

        <Box sx={{ margin: "0 auto", width:{lg: "90%", xs:'95%'}, mt: 8 }}>
          <Grid container spacing={3}>
            <Grid item lg={6}>
              <Box>
                <CardMedia component="img" height="400px" image={College} />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Lebuane",
                      fontSize: "22px",
                      mb: 3,
                      color: "#222222",
                    }}
                  >
                    CURRICULUM & PEDAGOGY
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      lineHeight: 2,
                      color: "#696969",
                    }}
                  >
                    We believe that education should take into account
                    everything students experience during each moment of their
                    time at school.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box>
                <CardMedia component="img" height="400px" image={Core} />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Lebuane",
                      fontSize: "22px",
                      mb: 3,
                      color: "#222222",
                    }}
                  >
                    CORE ACADEMIC & KNOWLEDGE
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      lineHeight: 2,
                      color: "#696969",
                    }}
                  >
                    We believe that education should take into account
                    everything students experience during each moment of their
                    time at school.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box>
                <CardMedia component="img" height="400px" image={Immersive} />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Lebuane",
                      fontSize: "22px",
                      mb: 3,
                      color: "#222222",
                    }}
                  >
                    IMMERSIVE LANGUAGE LEARNING
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      lineHeight: 2,
                      color: "#696969",
                    }}
                  >
                    We believe that education should take into account
                    everything students experience during each moment of their
                    time at school.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <Box>
                <CardMedia component="img" height="400px" image={Advisory} />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: "Lebuane",
                      fontSize: "22px",
                      mb: 3,
                      color: "#222222",
                    }}
                  >
                    COLLEGE ADVISORY
                  </Typography>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      lineHeight: 2,
                      color: "#696969",
                    }}
                  >
                    We believe that education should take into account
                    everything students experience during each moment of their
                    time at school.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className="contact_home" sx={{ mt: 4 }}>
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "jost", fontSize: {lg:"15px", xs:'14px'}, color: "#ffffff", textAlign:'center' }}
        >
          WE WELCOME YOU TO LEARN MORE ABOUT OUR ADMISSION PROCESS
        </Typography>
        <Typography
          variant="body"
          sx={{
            fontFamily: "lebuane",
            fontSize: {lg:"50px", xs:'40px'},
            lineHeight: 1.4,
            color: "#ffffff",
            width: {lg:"50%" , xs:'90%'},
            textAlign: "center",
          }}
        >
          WE’RE ALWAYS HAPPY TO HEAR FROM YOU
        </Typography>
        <Button
          variant="contained"
          sx={{ fontFamily: "jost", py: 2, px: 4, mt: 3 }}
        >
          Contact us
        </Button>
      </Box>

      <Box mt={15}>
        <Box sx={{ margin: "0 auto", width: "90%" }}>
          <Grid container>
            <Grid item lg={5}>
              <Box>
                <Typography
                  variant="body"
                  sx={{
                    fontFamily: "jost",
                    fontSize: "15px",
                    lineHeight: 1.4,
                    color: "#999999",
                    textAlign: "center",
                  }}
                >
                  THE PIS CURRICULUM
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "lebuane",
                    fontSize:{lg: "42px", xs:'39px'},
                    lineHeight: 1.4,
                    color: "#222222",
                    mb: 3,
                  }}
                >
                  WE WELCOME YOU TO LEARN MORE ABOUT US
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontFamily: "jost",
                    fontWeight:300,
                    fontSize: "18px",
                    color: "#373737",
                  }}
                >
                  At Promise International, we see the curriculum as something that
                  embraces more or less everything that a boy does. You may ask
                  why we see the curriculum that way. For many schools, the
                  curriculum is just the academic part of what a boy studies.
                  But that really doesn’t do justice to what an education is.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <CardMedia component="img"  sx={{height:{lg:'580px', xs:'300px'}, mt:{lg:0, xs:4}}} image={curriculum} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
