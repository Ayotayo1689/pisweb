import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/Section.css'
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Container,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../img/logo/logo.png'

const Drawers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
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

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List sx={{width:'250px', bgcolor:'#1f1f1f', height:'100vh'}}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              paddingLeft: "20px",
            }}
            exact
            activeclassname="active"
          >
            <Link to="/">
              <img src={Logo} alt="Logo" width={80} />
            </Link>
      
        <Link to="/" style={{textDecoration:'none'}}  onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 6,  }}  onClick={() => setOpenDrawer(false)}>
                <Typography sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>HOME</Typography>
            </ListItemButton>
        </Link>
        <Link to="/about" style={{textDecoration:'none'}}  onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 1 }}  onClick={() => setOpenDrawer(false)}>
                <Typography sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>ABOUT US</Typography>
            </ListItemButton>
        </Link>
        <Link to="/student_portal" style={{textDecoration:'none'}}  onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 1 }}  onClick={() => setOpenDrawer(false)}>
                <Typography sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>STUDENT PORTAL</Typography>
            </ListItemButton>
        </Link>
     
        <Link to="/gallery" style={{textDecoration:'none'}} onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 1, fontFamily:'jost' }}  onClick={() => setOpenDrawer(false)}>
                <Typography sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>GALLERY</Typography>
            </ListItemButton>
        </Link>
        <Link to="/contact" style={{textDecoration:'none'}}  onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 1 }}  onClick={() => setOpenDrawer(false)}>
                <Typography  sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>CONTACT US</Typography>
            </ListItemButton>
        </Link>
       
        <Link to="/faq" style={{textDecoration:'none'}}  onClick={() => setOpenDrawer(false)}>

            <ListItemButton sx={{ padding: "3px 30px", mt: 1 }}  onClick={() => setOpenDrawer(false)}>
                <Typography sx={{fontFamily:'jost', fontSize:'12px',  color:'#979797', width:'100%',  borderBottom:'1px solid #979797', pb:2}}>FAQ</Typography>
            </ListItemButton>
        </Link>
          </Link>
        
        
       
        
        </List>
      </Drawer>
      
      <IconButton
        sx={{ color: color ? "#000" : "#000", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{color: color ? '#000' : '#fff'}} />
      </IconButton>
    </>
  );
};

export default Drawers;
