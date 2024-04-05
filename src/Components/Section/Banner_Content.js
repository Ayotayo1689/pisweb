import { Grid , Tabs, Tab, Box, Avatar, Typography, Divider} from '@mui/material'
import React from 'react'
import Logo from '../../img/logo.png'
import '../Styles/Section.css'
import { Link } from 'react-router-dom'

const Banner_Content = () => {
  return (
    <>

<Box
            sx={{
       display:'flex',
              flexDirection:'column',
            
              alignItems:'center',
              height:'100%',
              backdropFilter:'blur(3px)'

      }}
          >
            <Box sx={{mb:7,height:'100px', mt:5,width:'60%', display:{lg:'block', xs:'none'}}} >
              <Grid container display="flex" alignItems="center">
                <Grid item lg={5}>
                  <Tabs >
                    <Link to ="/">
                    <Tab label="Home" sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                    <Link to="/about">
                    <Tab label="About us" sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                    <Link to="/student_portal">
                    <Tab label="Student Portal" sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                  </Tabs>
                </Grid>
                <Grid item lg={2} display="flex" justifyContent="center" >
                  <Box sx={{ width:'50%'}}>

              <Avatar src={Logo} sx={{width:'100%', height:'100%'}}/>
                  </Box>
                </Grid>
                <Grid item lg={5}>
                <Tabs>
                <Link to="/gallery">
                    <Tab label="Gallery"sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                    <Link to="/contact">
                    <Tab label="Contact us"sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                    <Link to="/faq">
                    <Tab label="Faq"sx={{color:'#fff', fontFamily:'jost', textTransform:'initial', fontSize:'16px'}}/>
                    </Link>
                  </Tabs>
                </Grid>
              </Grid>
            </Box>
            <Box
                   sx={{
                    display:'flex',
                           flexDirection:'column',
                           justifyContent:'center',
                           alignItems:'center',
                           height:'50%',
                           backdropFilter:'blur(3px)',
                           mt:{lg:0, xs:20}
             
                   }}
            >
             <Divider orientation="vertical" sx={{ "&::before, &::after": {
      borderColor: "#fff", 
    },}} >
            <Typography
              variant="h4"
              sx={{ fontSize: {lg:"22px", xs:'16px'}, color: "#fff", fontFamily: "Lebuane", fontWeight:300 }}
            >
              Welcome To
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: {lg:"100px", xs:'29px'},
                color: "#e6e6e6",
                lineHeight:{lg:'90px', xs:'40px'},
                fontFamily: "Lebuane",
                width: "fit-content",
                textAlign:'center',
                p: 2,
              }}
            >
              Promise<br/> International School
            </Typography>
      <Typography variant="body" sx={{fontFamily:'jost', fontSize:{lg:'20px', xs:'16px'}, color:'#fff'}}>We aim to create extraordinary school</Typography>
      </Divider>
      <Box mt={5}>
        <Typography variant="body" sx={{fontFamily:'Lebuane', color:'#fff', fontSize:'15px'}}>DISCOVER NOW</Typography>
      </Box>
      </Box>
          </Box>
    </>
  )
}

export default Banner_Content