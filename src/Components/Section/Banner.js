import { Avatar, Button, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Logo from '../../img/logo.png'
import Banner_Content from "./Banner_Content";

const Banner = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <>
      <Carousel fade variant="dark" controls={false}>
        <Carousel.Item
          className="Banner_Put"
          style={{ backdropFilter:'blur(10px)' }}
          interval={3000}
        >

       <Banner_Content/>
        </Carousel.Item>
        <Carousel.Item
          className="Banner_Put2"
          style={{  backdropFilter:'blur(10px)' }}
          interval={3000}
        >

        <Banner_Content/>
        </Carousel.Item>
        <Carousel.Item
          className="Banner_Put3"
          style={{  backdropFilter:'blur(10px)' }}
          interval={3000}
        >

    <Banner_Content/>
        </Carousel.Item>
     
     
      </Carousel>
      {/* </Box> */}
    </>
  );
};

export default Banner;
