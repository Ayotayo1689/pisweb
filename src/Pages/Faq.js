import { Grid, IconButton, Typography } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import { Box } from "@mui/system";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from "react";
import NavBar from "../Components/Navs/NavBar";
import Footer from "../Components/Section/Footer";
import "../Components/Styles/Section.css";
import award1 from '../img/Gallery/Award1.JPG'
import award2 from '../img/Gallery/Award2.JPG'
import award3 from '../img/Gallery/Award3.JPG'
import award4 from '../img/Gallery/Award4.JPG'
import award5 from '../img/Gallery/Award5.JPG'
import award6 from '../img/Gallery/Award6.JPG'
import award7 from '../img/Gallery/Award7.JPG'
import award8 from '../img/Gallery/Award8.JPG'
import award9 from '../img/Gallery/Award9.JPG'
import award10 from '../img/Gallery/Award10.JPG'
import award11 from '../img/Gallery/Award11.JPG'
import award12 from '../img/Gallery/Award12.JPG'
import award13 from '../img/Gallery/Award13.JPG'
import award14 from '../img/Gallery/Award14.JPG'
import award15 from '../img/Gallery/Award15.JPG'
import award16 from '../img/Gallery/Award16.JPG'
import award17 from '../img/Gallery/Award17.JPG'
import gal1 from '../img/Gallery/Gal1.JPG'
import gal2 from '../img/Gallery/Gal2.JPG'
import gal3 from '../img/Gallery/Gal3.JPG'
import gal4 from '../img/Gallery/Gal4.JPG'
import gal5 from '../img/Gallery/Gal5.JPG'
import gal6 from '../img/Gallery/Gal6.JPG'
import gal7 from '../img/Gallery/Gal7.JPG'
import gal8 from '../img/Gallery/Gal8.JPG'
import gal9 from '../img/Gallery/Gal9.JPG'
import gal10 from '../img/Gallery/Gal10.JPG'
import gal11 from '../img/Gallery/Gal11.JPG'
import gal12 from '../img/Gallery/Gal12.JPG'
import gal13 from '../img/Gallery/Gal13.JPG'
import gal14 from '../img/Gallery/Gal14.JPG'
import gal15 from '../img/Gallery/Gal15.JPG'
import gal16 from '../img/Gallery/Gal16.JPG'
import gal17 from '../img/Gallery/Gal17.JPG'
import gal18 from '../img/Gallery/Gal18.JPG'
import gal19 from '../img/Gallery/Gal19.JPG'
import gal20 from '../img/Gallery/Gal20.JPG'

import Accordions from "../Components/Section/Accordions";
import ChatUs from "../Components/Section/ChatUs";
import Waist from "../Components/Section/Waist";


const AwardData=[
  {
    id :1,
    img: award1,
  
},


{
    id: 3,
    img: award3
},
{
    id: 4,
    img: award4
},
{
  id: 6,
  img: gal6
},
{
  id: 7,
  img: gal7
},
{
  id: 8,
  img: gal8
},
{
    id: 5,
    img: award5
},

{
    id: 9,
    img: award9
},
{
    id: 10,
    img: award10
},
{
    id: 11,
    img: award11
},
{
    id: 12,
    img: award12
},
{
    id: 13,
    img: award13
},
{
    id: 14,
    img: award14
},
{
    id: 15,
    img: award15
},
{
    id: 16,
    img: award16
},
{
    id: 17,
    img: award17
},

  {
    id :1,
    img: gal1,
   
},

{
    id: 2,
    img: gal2
},
{
    id: 3,
    img: gal3
},
{
    id: 4,
    img: gal4
},
{
  id: 2,
  img: award2
},
{
    id: 5,
    img: gal5
},

{
    id: 9,
    img: gal9
},
{
    id: 10,
    img: gal10
},
{
    id: 11,
    img: gal11
},
{
    id: 12,
    img: gal12
},
{
    id: 13,
    img: gal13
},
{
    id: 14,
    img: gal14
},
{
    id: 15,
    img: gal15
},
{
  id: 6,
  img: award6
},
{
  id: 7,
  img: award7
},
{
  id: 8,
  img: award8
},
{
    id: 16,
    img: gal16
},
{
    id: 17,
    img: gal17
},
{
    id: 18,
    img: gal18
},
{
    id: 19,
    img: gal19
},
{
    id: 20,
    img: gal20
},
]
const Faq = () => {
  return (
    <>
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
        <h1>Gallery</h1>
      </Box>
      <Box sx={{ margin: "0 auto", width:{
lg:'80%', md:'80%', sm:'90%', xs:'90%'
      },   }}>
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
           School Gallery
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mt:3 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {AwardData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

        

      </Box>
      <Waist/>

      {/* <Box mt={12} sx={{height:500}}>
   <iframe id="tradingview_a47cf" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_a47cf&amp;symbol=COINBASE%3ABTCUSD&amp;interval=1&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=BB%40tv-basicstudies&amp;theme=light&amp;style=9&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=futurespacelimited.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD#%7B%22page-uri%22%3A%22futurespacelimited.com%2Fdashboard%22%7D" style={{width: '100%', height: '100%', margin: '0 !important', padding: '0 !important'}} frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe></Box> */}
      <Footer />
      <ChatUs/>
    </>
  );
};

export default Faq;
