import {
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  Tooltip,
  TextField,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NavBar from "../Components/Navs/NavBar";
import "../Components/Styles/Section.css";
import Modal from '@mui/material/Modal';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useNavigate } from "react-router-dom";


const style = {
  position: 'absolute',
  top: '50%',
  left:{lg: '70%', xs:'50%', md:'60%', sm:'50%'},
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '',
  boxShadow: 24,
  p: 2,
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#051e34",
    },
  },
});


const Services = () => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [matriculationNumber, setMatriculationNumber] = useState()
  const [surname, setLastName] = useState()
  const [showHello, setShowHello] = useState(false);
  const[loading, setLoading] = useState(false)
  const [data, setData] = useState()

  // const getResult = async ()=>{

  //   navigate('/dashboard')

  //   // setLoading(true)
  //   // try {
  //   //   const item = {firstName, surname}
  //   //   let result = await fetch(url,{
  //   //     method: 'POST',
  //   //     mode:'no-cors',
  //   //     body: JSON.stringify(item),
  //   //   });
  //   //   result = await result.json();
  //   //   console.log('result', result);
  //   //   setLoading(false);
  //   //   setData(result)
  //   // } catch (error) {
      
  //   // }
  // }
const catchErr =()=>{

    setShowHello(true);
    const timeoutId = setTimeout(() => {
      setShowHello(false);
  }, 3000);
  return () => clearTimeout(timeoutId);
}

  const getResult = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const item = { matriculationNumber, surname };
      const result = await fetch('https://ulego.ng/api/v1/student/login', {
        method: 'Post',
        headers: {
          'Content-Type': 'application/json ',
          //  "Accept":"application/json",
        },
        body: JSON.stringify(item),
      });

      const res = await result.json();
      console.log(res)
      localStorage.setItem('student-info', JSON.stringify(res));

      const stat = res.status;
      // console.log(stat)

      if (stat === 'success') {
        setLoading(false);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        catchErr()
        navigate('/student_portal');
         setLoading(false);
      }
    } catch (err) {
      // setError(err);
       setLoading(false);
    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "",
            alignItems: "center",
          }}
          className="student_portal"
        >
          <Box sx={{ height: "300px", width: "90%", margin: "0 auto" }}>
            <Typography variant="body">
              Welcome to{" "}
              <span style={{ fontWeight: "bolder" }}> PIS international </span>
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bolder",
                fontFamily: "Nexa-Heavy",
                fontSize: "70px",
              }}
            >
              Student Portal
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontSize:{lg: "15px", xs:'8px'}, fontFamily: "poppins", fontStyle:'italic' }}
            >
          Login to print, download result and make payment
            </Typography>
            <Box mt={3}>
              <Tooltip title="Login to print and download your result">
                <Button variant="contained" onClick={handleOpen}>Login to portal</Button>
              </Tooltip>
            </Box>
            <Box mt={17}>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "10px",
                  fontFamily: "poppins",
                  opacity: "0.8",
                  fontStyle: "italic",
                }}
              >
                ©Copyright 2023 - Promise International School.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Box sx={{border:'1px solid grey', p:2, bgcolor:'#f0f0f0',}}>

        <IconButton onClick={handleClose}>
          <CancelOutlinedIcon/>
        </IconButton>

        <Box mt={3}>
          <Typography variant="h6" sx={{fontFamily:'poppins'}}>PIS Student Portal</Typography>
          <Typography variant="caption" sx={{fontFamily:'poppins'}}>Please login with your fullname and your lastname</Typography>
        </Box>
{data}
        <TextField
        label="Student number"
        variant="filled"
        fullWidth
        margin="normal"
        value={matriculationNumber}
        onChange={(e)=>setMatriculationNumber(e.target.value)}
        />
        <TextField
         variant="filled"
        label="Surname"
        fullWidth
        margin="normal"
        value={surname}
        onChange={(e)=>setLastName(e.target.value)}
        />
        {
          showHello && <Box sx={{color:"red", fontStyle:"italic ", textAlign:'center'}}>
Invalid matric number or Surname 
        </Box>
        }
        

        <Button variant="contained" disabled={loading} fullWidth sx={{mt:2}} onClick={getResult}>{loading ? "Loading..." : "Login"}</Button>

       </Box>
        </Box>
      </Modal>
      </ThemeProvider>
    </>
  );
};

export default Services;
