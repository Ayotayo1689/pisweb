import { AppBar, Box, Grid, Tab, Tabs, Typography,  useMediaQuery,
    useTheme, } from '@mui/material'
import React,{useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Drawers from '../Navs/Drawer';
import { Link } from 'react-router-dom';

const Header = () => {
    const theme = useTheme();
    const [color, setColor] = useState(false);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

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
    {!isMatch ?(
        <>
    {!color &&
  <Box sx={{height:'50px', bgcolor:'#1595CC', px:4}}>
    <Grid container sx={{height:'100%'}}>
        <Grid item lg={7} sx={{display:'flex', alignItems:'center', color:'#fff'}}>
    <LocationOnOutlinedIcon/> 
    <Typography variant='body' sx={{fontSize:'15px'}}>7A Silas works Fegge, Onitsha || 8 Akokwa Street fegge, Onitsha</Typography>
        </Grid>
        <Grid item lg={5} sx={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
            <Typography variant='body' sx={{color:'white', fontSize:'15px'}}>Phone: <a href='tel:09096744364' style={{fontSize:'15px', fontFamily:'jost', color:'#fff'}}>+234 90 967 44364</a></Typography>
            <Typography variant='body' sx={{color:'white', fontSize:'15px', }}> <a href="mailto:promiseinternational2020@gmail.com" style={{fontSize:'15px', fontFamily:'jost', color:'#fff'}}>Help Center</a></Typography>
            <Box sx={{color:'#fff' , width:'28%', fontSize:'5px', display:'flex', justifyContent:'space-between'}} >
<FacebookIcon sx={{fontSize:'20px'}}/>
<TwitterIcon sx={{fontSize:'20px'}}/>
<InstagramIcon sx={{fontSize:'20px'}}/>
            </Box>
        </Grid>
    </Grid>

  </Box>
    }
    {
        color &&
        <AppBar sx={{height:'80px', bgcolor:'#1595CC', px:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
<Tabs>
    <Link><Tab  label="Home" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
    <Link to={"/about"}><Tab label="About us" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
    <Link to={"/student_portal"}><Tab label="Student Portal" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
   <Link to={"/gallery"}> <Tab label="Gallery" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
   <Link to={"/contact"}><Tab label="Contact us" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
   <Link to={"/faq"}><Tab label="Faq" sx={{fontFamily:'jost', color:'#fff', fontSize:'16px', textTransform:'initial'}}/></Link>
</Tabs>
        </AppBar>

    }
    </>
    )
:(
    <>
    <AppBar  sx={{height:'80px', bgcolor:'#1595CC', px:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
<Drawers/>
    </AppBar>
    </>
)

}
    </>
  )
}

export default Header