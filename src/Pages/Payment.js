import {
  createTheme,
  ThemeProvider,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import NavBar from "../Components/Navs/NavBar";
import "../Components/Styles/Section.css";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#051e34",
    },
  },
});

const classData = [
  {
    title: "Nursery1",
  },
  {
    title: "Nursery2",
  },
  {
    title: "primary1",
  },
  {
    title: "Primary2",
  },
  {
    title: "Primary3",
  },
  {
    title: "Primary4",
  },
  {
    title: "Primary5",
  },
  {
    title: "Primary6",
  },
  {
    title: "JSS 1",
  },
  {
    title: "JSS 2",
  },
  {
    title: "JSS 3",
  },
  {
    title: "SS 1",
  },
  {
    title: "SS 2",
  },
  {
    title: "SS 3",
  },
];
const Payment = () => {
  const [className, setStuClass] = useState("");
  const [amount, setAmount] = useState(5000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
const [paymentState, setPaymentState] = useState(false)

const navigate = useNavigate()

  const handleChange = (event) => {
    setStuClass(event.target.value);
  };
  const createUrl = 'http://pigeonne.alimisamuel.com/api/v1/payment-class';
  const createPayment = 'http://pigeonne.alimisamuel.com/api/v1/paystack/innitialize-payment?email=email&amount=amount&fullName=fullName';



  const handleCreateResult = async () => {
    setLoading(true);

    try {
      const item = { className};
      let result = await fetch(createUrl, {
        method: 'GET',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json ',
          Accept: 'application/json',
  
        },
      });
      result = await result.json();
      console.log('result', result);
      setLoading(false);
     

    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  const handlePayment = async () => {
    setLoading(true);

    try {
      let result = await fetch(`http://pigeonne.alimisamuel.com/api/v1/paystack/innitialize-payment?email=${email}&amount=${amount * 100}&fullName=${fullName}`, {
        method: 'POST', 
        mode:'no-cors',
        headers: {
          'Content-Type': 'application/json ',
          Accept: 'application/json',
  
        },
      });
      result = await result.json();
      console.log('result', result);
      setLoading(false);
if (result.status === true){
console.log(result.data.url)
}

    } catch (err) {
      setError(err);
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
            bgcolor: "#051e34",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box mb={2}>
            <Typography
              variant="h3"
              sx={{ color: "#fff", fontFamily: "Nexa-Heavy" }}
            >
              Payment Portal
            </Typography>
          </Box>
          <Box
            className="about_shadow"
            sx={{
              border: "2px solid #051e34",
              width: {lg:"35%",md:'50%', sm:'60%', xs:'85%'},
              borderRadius: "10px 10px 10px 0px",
              height: "500px",
              bgcolor: "RGB(0 ,153, 218, .2)",
              p: 0.5,
            }}
            elevation={12}
          >
            <Box
              sx={{
                height: "100%",
                border: "0.5px solid #051e34",
                borderRadius: "10px 10px 10px 0px",
                bgcolor: "#fff",
                p: 2,
              }}
            >
              <Box mb={2}>
                <Typography
                  variant="body"
                  sx={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  Please make you select the correct class of the student
                </Typography>
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ fontSize: "16px" }}
                  ></InputLabel>
                  <Select
                    mb={3}
                    value={className}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="standard"
                    size="small"
                    label="Age"
                    onChange={handleChange}
                    onClick={handleCreateResult}
                  >
                    {classData.map((data, index) => (
                      <MenuItem
                        key={index}
                        value={data.title}
                     
                        sx={{ p: 2 }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ textAlign: "center", fontSize: "15px" }}
                        >
                          {data.title}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ mt: "auto" }}>
                <TextField
                  fullWidth
                  label="Full Name"
                  margin="normal"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <TextField
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email"
                  type="email"
                  margin="normal"
                  required
                />
                {/* <Typography variant="h3">{list}Me</Typography> */}
                <TextField
                  fullWidth
                  label="Amount"
                  variant="standard"
                  value={amount}
                  margin="normal"
                  disabled
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">&#8358;</InputAdornment>
                    ),
                  }}
                />
                <Button variant="contained" fullWidth sx={{ mt: "2" }} onClick={handlePayment}   >
                  Make Payment
                </Button>
         
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Payment;
