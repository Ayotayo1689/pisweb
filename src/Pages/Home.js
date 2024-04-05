
import { Avatar, Fab, Typography, createTheme, ThemeProvider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import NavBar from '../Components/Navs/NavBar'
import Banner from '../Components/Section/Banner'
import Footer from '../Components/Section/Footer'
import Neck from '../Components/Section/Neck'
import Waist from '../Components/Section/Waist'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatUs from '../Components/Section/ChatUs'
import Header from '../Components/Header/Header'
import Experience from '../Components/Section/Experience'



const theme = createTheme({
  palette:{
    primary:{
      main:'#1595CC'
    }
  }
})

const Home = () => {
  return (
    <>
<ThemeProvider theme={theme}>
  <Header/>
    {/* <NavBar/> */}
    <Banner/>
  {/* <Neck/> */}
  <Experience/>
 <Waist/>
<Footer/> 
{/* <ChatUs/> */}
</ThemeProvider>
    </>
  )
}

export default Home