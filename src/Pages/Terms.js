import { Grid, IconButton, Typography } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import { Box } from "@mui/system";
import React from "react";
import NavBar from "../Components/Navs/NavBar";
import Footer from "../Components/Section/Footer";
import "../Components/Styles/Section.css";

import ChatUs from "../Components/Section/ChatUs";

const Terms = () => {
  return (
    <>
      <NavBar />
      <Box
        className="Terms_Banner"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h1>Privacy Policy</h1>
      </Box>
      <Box sx={{ margin: "0 auto", width: {
        lg:"80%", md:'80%', sm:'80%', xs:'90%'
      
      }}}>
        <Box sx={{ pb: 0, borderBottom: "1px solid #c7c7c7", mt:3 }}>
          <IconButton>
            <HouseIcon sx={{ color: "#2e2f4b", fontSize: "15px" }} />
          </IconButton>
          <Typography variant="body" sx={{ color: "#2e2f4b" }}>
            &#62;
          </Typography>
          <Typography
            variant="body"
            sx={{
              fontFamily: "poppins",
              color: "#a0a0a0",
              ml: 1,
            }}
          >
            Privacy Policy
          </Typography>
        </Box>

        
        <Box
          mt={6}
          className="about_shadow"
          sx={{
            p: 3,
          }}
        >
     
      <Typography variant="subtitle1" sx={{
        fontFamily: "poppins",
        color: "#2e2f4b",
        fontSize: "15px",
      }}>Bitvest Limited’s Privacy Policy is intended for clients and nonclients who access the site. The Privacy Policy provides more details on how their personal information are managed. We make it a must to comprehend our customer’s needs prior offering them financial services. In this regard, Bitvest Limited needs to collect certain personal information from Bitvest Limited’s clients.</Typography><br/>
      <Typography variant="subtitle1" sx={{
        fontFamily: "poppins",
        color: "#2e2f4b",
        fontSize: "15px",
      }}>
      Consequently, through this privacy policy, we wish to express our endeavor to maintain full transparency. Bitvest Limited will require some of your details when you open an account or when you start to trade. In these cases, we will generally state the purpose and details of those having access to the details provided to our team.
      </Typography><br/>
      <Typography variant="subtitle1" sx={{
        fontFamily: "poppins",
        color: "#2e2f4b",
        fontSize: "15px",
      }}>
      Please note that the Bitvest Limited’s Privacy Policy is reviewed from time to time to take into account new laws, changes to Bitvest Limited’s operations and practices, and to make sure it continues to remain relevant to the changing environment. Any personal information Bitvest Limited holds will be governed by the most recent Privacy Policy.
      </Typography>
         
        </Box>
       
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">How Bitvest Limited treats the information collected</h3>
        <p className="p_text">It is Bitvest Limited’s policy to respect the confidentiality of any information acquired and the privacy of Bitvest Limited’s clients and individuals Bitvest Limited deals with.</p>
        <p className="p_text">Below are some points outlined with regards to how clients’ information are retrieved and handled:</p>
        </Box>
    
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Personal Information Bitvest Limited collects</h3>
        <p className="p_text">Any personal information that Bitvest Limited collects is obtained from the client’s registration process and other forms, and from maintaining records of information obtained in the course of providing Bitvest Limited’s products and services. The personal information Bitvest Limited may collect can include name, address, date of birth, contact details and bank account information (for payments of profits and withdrawals). These information are necessary while dealing in the financial industry as per Government regulations and Taxation laws.</p>
        <p className="p_text">In the event of you not providing sufficient information required to fulfill your request for the provision of a product or service, Bitvest Limited may be unable to provide you with the product or service that you requested.</p>
        </Box>
    
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Using the personal information Bitvest Limited collects</h3>
        <p className="p_text">Bitvest Limited may send you marketing material from time to time which we believe will be useful to you, while remaining conscious of the need to respect your privacy.</p>
        <p className="p_text">Unless Bitvest Limited informs you otherwise, the personal information we collect from you is used for the purpose of establishing and managing your account with us, reviewing your ongoing needs, improving our customer service and products, and providing you with ongoing information or opportunities that we believe may be useful to you.</p>
        <p className="p_text">
        Bitvest Limited at times works in collaboration with third-party organisations and may contract their services to provide some features on the platform. In these cases, Bitvest Limited vouches strict confidentiality where customers’ information needs to be handled. Bitvest Limited acknowledges the confidential nature of this personal information and undertakes to respect client privacy and comply with the Privacy Principles in the Privacy Act and Bitvest Limited’s privacy policy.
        </p>
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Managing the personal information Bitvest Limited collects</h3>
        <p className="p_text">All of Bitvest Limited’s employees who handle personal information are trained to respect the confidential nature of client information and the privacy of individuals. Employees identified breaching clients’ privacy will be liable to disciplinary action, including dismissal.</p>
        <p className="p_text">Bitvest Limited has a Privacy Officer who ensures that all personal information collected is managed in accordance with this statement and the Privacy Act.</p>
        
        </Box>
    
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Storing the personal information Bitvest Limited collects</h3>
        <p className="p_text">All your information that you communicate to us personally, by phone, mail, email, over the internet or in any other electronic form are safeguarded securely. Bitvest Limited holds all of your personal information in secure computer storage facilities and in paperbased files, and takes steps to protect your personal information from misuse, loss, unauthorized access, modification or disclosure.</p>
        <p className="p_text">Bitvest Limited may be required by law to maintain records for a significant period of time. However, when Bitvest Limited considers information that is no longer required or relevant and any legal obligations that may apply to the information held have been met, we will remove details that identify you or we will securely destroy the records.</p>
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Keeping your personal information accurate and up-to-date</h3>
        <p className="p_text">Bitvest Limited recognizes that any client’s personal information are sometimes subject to change, such as addresses among others. In these situations, clients are requested to update these changes on their personal records or inform a Bitvest Limited representative. This step is important to ensure that we have an accurate and up-to-date record.</p>
        
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Checking what personal information Bitvest Limited holds about you</h3>
        <p className="p_text">The Privacy Act gives you the right to obtain a copy of any personal information Bitvest Limited holds about you to advise us of any perceived inaccuracies. There are however some exceptions to the act. To request a copy of the information Bitvest Limited holds about you, we require that you complete a request form verifying your identity and specifying what information you require.</p>
        <p className="p_text">These requests are processed within 14 business days. Bitvest Limited may charge you a fee to cover the cost of verifying your application, locating, retrieving, reviewing and copying any of the information that you request. Should you require extensive information, we will provide you with an outline of the likely cost prior to processing to aid you in refining your request if required.</p>
        
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Website privacy</h3>
        <p className="p_text">Bitvest Limited may collect personal information from you when you enter Bitvest Limited’s website:www.binaryonline.com</p>
        
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Use of cookies on Bitvest Limited’s Website</h3>
        <p className="p_text">Bitvest Limited use cookies on its website for your own interests. These cookies give you access to certain pages without having to login each time you view the page. Bitvest Limited may also use an independent external service providers to track Bitvest Limited’s website traffic and usage.</p>
        
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">What is a cookie?</h3>
        <p className="p_text">Cookies are small strings of text stored on your computer that help us determine the type of browser and settings you are using, where you have been on the website, when you returned to the website, where you came from, and to ensure that the information you provide us is secure.</p>
        <p class="p_text">Bitvest Limited uses the information collected to provide you with a more relevant and effective experience when you use the website, including presenting web pages according to your needs or preferences.</p>
        <p class="p_text">Cookies are commonly used on many websites, you are able to choose if and how a cookie will be accepted by changing the preferences and options on your web browser. Parts of Bitvest Limited’s website may not be accessible if you disable cookie acceptance in your browser, typically this applies to more secure parts of Bitvest Limited’s website. To gain full benefit from all the services provided on Bitvest Limited’s website Bitvest Limited recommends you change the preferences in your web browser to enable cookie acceptance.</p>
        
        
        </Box>
        <Box p={3} mt={4} className="about_shadow">
        <h3 class="h3_title">Have Complaints?</h3>
        <p class="p-style-inner">If you feel that Bitvest Limited, or its employees have breached this Privacy Policy, or the Privacy Principles have not been respected, we encourage you to lodge a complaint. Send us an email on <a href="mailto:support@futurespacelimited.com" style={{color:'#2e2f4b'}}><span data-cfemail="a1c2ceccd1cdc8c0cfc2c4e1c3c8cfc0d3d8cecfcdc8cfc48fc2cecc">[Support]</span></a> or drop us a message on our Contact Us page.</p>
        
        
        </Box>
        <Box p={3} mt={4} mb={4} className="about_shadow">
        <h3 class="h3_title">Get in touch</h3>
        <p class="p-style-inner">Should you wish to make a general enquiry about Bitvest Limited’s Privacy Policy, update the personal information Bitvest Limited hold about you or obtain an application form for access to your personal information you can contact us by either:</p>

        <ul class="bullet" >
<li>Calling us on: +447717176208</li>
<li>Sending an email to: <a href="mailto:support@futurespacelimited.com"><span  data-cfemail="0a797f7a7a65787e4a6863646b787365646663646f24696567">[Support]</span></a></li>
</ul>
        
        
        </Box>
    
      </Box>

      {/* <Box mt={12} sx={{height:500}}>
   <iframe id="tradingview_a47cf" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_a47cf&amp;symbol=COINBASE%3ABTCUSD&amp;interval=1&amp;hidesidetoolbar=0&amp;symboledit=1&amp;saveimage=1&amp;toolbarbg=f1f3f6&amp;studies=BB%40tv-basicstudies&amp;theme=light&amp;style=9&amp;timezone=Etc%2FUTC&amp;studies_overrides=%7B%7D&amp;overrides=%7B%7D&amp;enabled_features=%5B%5D&amp;disabled_features=%5B%5D&amp;locale=en&amp;utm_source=futurespacelimited.com&amp;utm_medium=widget_new&amp;utm_campaign=chart&amp;utm_term=COINBASE%3ABTCUSD#%7B%22page-uri%22%3A%22futurespacelimited.com%2Fdashboard%22%7D" style={{width: '100%', height: '100%', margin: '0 !important', padding: '0 !important'}} frameborder="0" allowtransparency="true" scrolling="no" allowfullscreen=""></iframe></Box> */}
      <Footer />
      <ChatUs/>
    </>
  );
};

export default Terms;
