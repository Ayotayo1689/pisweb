import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "../Components/dash-nav.css";
import task from "../Components/cable.svg";
import Typography from "@mui/material/Typography";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import {
  IconButton,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect, useRef } from "react";
import logo from "../Components/logo.png";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const drawerWidth = 300;

function Result(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [loading, setLoading] = useState(false);
  const [resErr, setResErr] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(false);
  const [term, setTerm] = useState("");

  const [result, setResults] = useState([]);
  const [data, setData] = useState([]);

  //change this later

  const [openResult, setOpenResult] = useState(false);

  const handleCloseResult = () => {
    if (!resErr) {
      setOpenResult(false);
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      lg: 700,
      xs: 450,
      sm: 600,
      md: 700,
    },
    display: "flex",
    flexDirection: "column",
    // alignItems: 'center',
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 2,
    pt: 4,
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const stuInfo = JSON.parse(localStorage.getItem("student-info"));
const stuclass = stuInfo?.data?.matriculationNumber?.slice(3, 8);
  const Id = stuInfo?.data?.studentId;

  const handlePush = async () => {
    setLoading(true);

    try {
      let result = await fetch(`https://ulego.ng/api/v1/course/${Id}/${term}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json ",
          Accept: "application/json",
        },
      });
      result = await result.json();
      setResults(result?.data);
    
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setOpenResult(true);
      setResErr(true);
    }
  };

  const getData = async () => {
    // e.preventDefault();

    try {
      let result = await fetch(
        `https://ulego.ng/api/v1/course/student/report/${Id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json ",
            Accept: "application/json",
          },
        }
      );
      result = await result.json();
      setData(result?.data?.student_fullName);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setOpenResult(true);
      setResErr(true);
    }
  };
  // https://ulego.ng/api/v1/course/student/report/02bb1fc9-590c-4087-9452-fdb2f99f289a

  const boxRef = useRef(null);
  const handleDownload = async () => {
    const input = boxRef.current;

    try {
      const canvas = await html2canvas(input);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("result.pdf");
    } catch (error) {
      console.error("Error creating PDF:", error);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("student-info");
    navigate("/");
  };

  useEffect(() => {
    setLoading(true);
    if (!stuInfo) {
      navigate("/");
    } else {
      getData()
    }
  }, []);

  useEffect(() => {
    if (term !== "") {
      handlePush();
    }
  }, [term]);

  const handleChange = (event) => {
    setTerm(event.target.value);
    if (event.target.value !== "") {
      setSelectedTerm(true);
    }
  };

  // handlePush()

  const drawer = (
    <div className="dash-nav">
      <Toolbar />
      <div className="img">
        <img src={logo} alt="hello" />
      </div>
      <div className="info">
        <div className="ball">A</div>
        <div className="box">
          <p>Promise International School</p>
          <p
            style={{
              color: "#cbcbcb8f",
            }}
          >
            Student
          </p>
        </div>
      </div>

      <Link to={"/dashboard"}>
        <div className="link">
          <img src={task} alt="" /> <div className="text">Result</div>
        </div>
      </Link>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon
              sx={{
                color: "black",
              }}
            />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontSize: "40px",
              }}
              variant="h6"
              noWrap
              component="div"
            >
              Results
            </Typography>
            <Button startIcon={<LogoutIcon />} onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Term</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={term}
            label="Term"
            onChange={handleChange}
          >
            <MenuItem
              value=""
              sx={{
                display: "none",
              }}
            >
              <em>None</em>
            </MenuItem>
            <MenuItem value={"first-term"}>First Term</MenuItem>
            <MenuItem value={"second-term"}>Second Term</MenuItem>
            <MenuItem value={"third-term"}>Thir Term</MenuItem>
          </Select>
          <FormHelperText>Select Term To View Result</FormHelperText>
        </FormControl>

        {selectedTerm && (
          <Grid
            item
            lg={2}
            md={3}
            sm={6}
            //  key={data.id}
          >
            <Box
              sx={{
                border: "1px solid #808080",
                borderRadius: "10px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Avatar />
              <Box sx={{ mt: 1, textAlign: "center" }}>
                <Typography
                  variant="body"
                  sx={{
                    fontWeight: "bolder",
                    fontSize: "16px",
                    textAlign: "center",
                  }}
                >
                  {data}
                </Typography>
                <br />
                {/* <Typography variant="body" sx={{ fontSize: "12px" }}>
                  {data.email}
                </Typography> */}

                <Button
                  variant="contained"
                  onClick={(e) => {
                    setOpenResult(!openResult);
                  }}
                  fullWidth
                >
                  View Result
                </Button>
              </Box>
            </Box>
          </Grid>
        )}
      </Box>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 4 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Modal
        //
        // open={true}
        open={openResult}
        onClose={handleCloseResult}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          {!loading && (
            <Box>
              {!resErr && (
                <Box>
                  {result?.length === 0 ? (
                    <Box
                      sx={style}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "30px",
                        }}
                      >
                        <IconButton onClick={handleCloseResult}>
                          <HighlightOffIcon sx={{ fontSize: "30px" }} />
                        </IconButton>
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            fontSize: "30px",
                            fontWeight: "600",
                            textAlign: "center",
                          }}
                        >
                          Result not uploaded
                        </Box>
                        <Box
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          Check again later
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Box
                      sx={style}
                      style={{
                        backgroundColor: "white",
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                          display: "flex",
                          justifyContent: "space-between",
                          paddingRight: "30px",
                        }}
                      >
                        <IconButton onClick={handleCloseResult}>
                          <HighlightOffIcon sx={{ fontSize: "30px" }} />
                        </IconButton>
                        <Button
                          variant="outlined"
                          startIcon={<DownloadForOfflineIcon />}
                          onClick={handleDownload}
                        >
                          Download
                        </Button>
                      </Box>
                      <Box
                        ref={boxRef}
                        sx={{
                          margin: "30px 0 0 0",
                        }}
                      >
                        <Box
                          sx={{
                            marginBottom: "20px",
                            bgcolor: "#b4d0fa",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={logo}
                            alt="hello"
                            style={{ height: "150px" }}
                          />
                          <Box>
                            <p
                              style={{
                                color: "#04337a",
                                margin: "0px",
                                fontSize: "40px",
                                fontWeight: "600",
                              }}
                            >
                              Report Card
                            </p>
                            <p
                              style={{
                                color: "#04337a",
                                margin: "0px",
                                fontSize: "18px",
                                fontWeight: "500",
                              }}
                            >
                              Promise International School
                            </p>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            // borderRadius: '20px',
                            display: "flex",

                            justifyContent: "space-evenly",
                            gap: "30px",
                            margin: "20px auto",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#04337a",
                            }}
                          >
                            Name :{" "}
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "18px",
                                fontWeight: "400",
                                width: "300px",
                                paddingBottom: "5px",
                              }}
                            >
                              {data}
                            </Typography>
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              fontWeight: "600",
                              color: "#04337a",
                            }}
                          >
                            Class :{" "}
                            <Typography
                              variant="span"
                              sx={{
                                fontSize: "18px",
                                fontWeight: "400",
                                width: "300px",
                                paddingBottom: "5px",
                              }}
                            >
                              
                              {stuclass}
                            </Typography>
                          </Typography>
                        </Box>

                        <Box sx={{ overflowY: "scroll", maxHeight: "60vh" }}>
                          <Table>
                            <TableHead>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                S/N
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                Subject
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                C.A Score
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                Exam Score
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                Total
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "bolder", padding: "8px" }}
                              >
                                Grade
                              </TableCell>
                              <TableCell align="right"></TableCell>
                            </TableHead>
                            <TableBody>
                              {result?.map((data, index) => (
                                <TableRow hover key={index}>
                                  <TableCell
                                    sx={{
                                      padding: "10px",
                                    }}
                                  >
                                    {index + 1}
                                  </TableCell>

                                  <TableCell
                                    sx={{
                                      padding: "8px",
                                    }}
                                  >
                                    {data?.course_name}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: "8px",
                                    }}
                                  >
                                    {data?.test_score}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: "8px",
                                    }}
                                  >
                                    {data?.exam_score}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: "8px",
                                    }}
                                  >
                                    {data?.total}
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      padding: "8px",
                                    }}
                                  >
                                    {data?.grade}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          )}
          {resErr && (
            <Box
              sx={style}
              style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
                gap: "20px",
              }}
            >
              <WarningAmberIcon
                sx={{
                  color: "red",
                  fontSize: "40px",
                }}
              />
              Something went wrong try again
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

Result.propTypes = {
  window: PropTypes.func,
};

export default Result;
