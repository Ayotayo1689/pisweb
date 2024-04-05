import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
  createTheme,
  ThemeProvider,
} from '@mui/material'
import { useState } from 'react'
import Drawers from './Drawer'
// import '../styles/Navbar.css'
import '../Styles/Section.css'
import { Box } from '@mui/system'
import Logo from '../../img/logo/logo.png'

const theme = createTheme({
  palette:{
    primary:{
      main:'#051e34'
    }
  }
})


const NavBar = () => {
  const [value, setValue] = useState()
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
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
    <ThemeProvider theme={theme}>
            <AppBar className={color ? "appbar appbar-bg" : "appbar"} sx={{ background: '#f0f0f0' }}>
        <Toolbar sx={{ margin: '0 auto', width: '89%' }}>
          <Link to="/" style={{textDecoration:'none', fontWeight:'bolder', color:color ? "#000" : "#fff", marginTop:'10px'}}>
            <img src={Logo} alt="Logo" width={60} />
           
          </Link>
          {isMatch ? (
            <>
              <Typography> </Typography>
              <Drawers />
            </>
          ) : (
            <>
            <Box sx={{ml:'auto'}}>
            <ul className='nav'>
              <li ><Link to="/"  className={color ? "navOnscroll" : "navInscroll"} >
                Home</Link></li>
              <li ><Link to="/about"  className={color ? "navOnscroll" : "navInscroll"} >
                aBOUT US</Link></li>
              <li ><Link to="/student_portal"  className={color ? "navOnscroll" : "navInscroll"} >
                Student Portal</Link></li>
              <li ><Link to="/gallery"  className={color ? "navOnscroll" : "navInscroll"} >
                Gallery</Link></li>
              <li ><Link to="/contact"  className={color ? "navOnscroll" : "navInscroll"} >
                Contact Us</Link></li>
              <li ><Link to="/faq"  className={color ? "navOnscroll" : "navInscroll"} >
                Faq</Link></li>
          
            </ul>
            </Box>
            <Box sx={{ml:3}}>
            
              <Link
                to="/payment-portal"
                style={{ textDecoration: 'none', color: 'black' }}
              >
          <Button variant='contained'>Payment</Button>
              </Link>
              </Box>

            </>
          )}
        </Toolbar>
      </AppBar>
      </ThemeProvider>

    </>
  )
}

export default NavBar
