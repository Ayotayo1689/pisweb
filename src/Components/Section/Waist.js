import { Button, ButtonBase, Container, Grid, Icon, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../Styles/Section.css";


const Waist = () => {
  return (
    <>
      <Box
      mt={10}
      className="newsletter"
        sx={{
           height:'400px',
          bgcolor:'#051e34',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column'
        }}
      >
       <Typography variant="h3" sx={{fontFamily:'Lebuane', fontSize:'33px', color:'#fff', textAlign:'center'}}>SUBSCRIBE TO OUR NEWSLETTER</Typography>
       <Typography variant="body" sx={{fontSize:'16px', fontFamily:'jost', color:'#fff', textAlign:'center'}}>Get the latest educational resources on the market delivered to your inbox</Typography>

       <Box mt={3}> 
        <TextField
        placeholder="Your Email Address"
        sx={{bgcolor:'#fff', borderRadius:'60px', width:{lg:'500px', xs:'300px'}}}
        />
       </Box>
       <Button sx={{mt:3, fontFamily:'jost'}} variant="contained" >Subscribe</Button>
      </Box>
    </>
  );
};

export default Waist;
