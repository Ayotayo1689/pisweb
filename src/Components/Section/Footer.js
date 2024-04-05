import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import "../Styles/Section.css";
import logo from "../../img/logo/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box sx={{ bgcolor: "#1595CC", pt: 10, pb: 4 }}>
        <Grid
          container
          spacing={2}
          sx={{ margin: "0 auto", width: "90%", mb: 4 }}
        >
          <Grid item className="footer_first_box">
            <img src={logo} width="100" height="100" className="searchImg" />

            <div className="footer_info">
              <Typography variant="p">Promise International School</Typography>
              <br />
              <Typography variant="p">
                17A Silas works Fegge, Onitsha.
              </Typography>
              <br />
              <Typography variant="p">
                8 Akokwa Street fegge, Onitsha.
              </Typography>
              <br />
              <Typography variant="p">Anambra State, Nigeria</Typography>
              <br />
              <Typography variant="p">Telephone: 09096744364</Typography>
              <br />
              <Typography variant="p" sx={{ fontSize: { xs: "12px" } }}>
                promiseinternational2020@gmail.com
              </Typography>
            </div>
          </Grid>

          <Grid item className="footer_second_box" ml={5}>
            <div>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Lebuane",
                }}
              >
                LINKS
              </Typography>
              <div className="footer_info_links">
                <Link href="/">
                  <span>Promise Int'l Programme</span>
                </Link>
                <br />

                <Link to="/payment-portal">
                  <span>Payment Portal</span>
                </Link>
                <br />
                <Link href="/reg">
                  <span>Get Admission</span>
                </Link>
                <br />
                <Link href="/register">
                  <span style={{ cursor: "not-allowed", color: "#808080" }}>
                    Print Result
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Lebuane",
                }}
              >
                AFFILATIONS
              </Typography>

              <br />
            
                <a href="https://pisportal.pisonitsha.com" target="_blank">
                  Portal
                </a>
      
              <br />
              <Link href="/gallery">
                <span>Photo Gallery</span>
              </Link>
              <br />
              <Link href="/register">
                <span>Get Admission</span>
              </Link>
            </div>
          </Grid>
        </Grid>

        <div className="copyright_container">
          <div>
            <Typography variant="p" sx={{ fontSize: "16px" }}>
              &#169;Copyright 2022 - Promise International School.
            </Typography>
          </div>
          <div style={{ display: "flex", alignContent: "center" }}>
            <span style={{ fontSize: "16px" }}>contact us:</span>
            <div>
              <a href="#" target="blank">
                <FacebookIcon
                  sx={{
                    marginRight: "5px",
                    color: "#000",
                    marginLeft: "5px",
                    fontSize: "22px",
                  }}
                />
              </a>
              <a href="#" target="blank">
                <InstagramIcon
                  sx={{ marginRight: "5px", color: "#000", fontSize: "22px" }}
                />
              </a>
              <a href="#" target="blank">
                <LinkedInIcon
                  sx={{ marginRight: "5px", color: "#000", fontSize: "22px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Footer;
