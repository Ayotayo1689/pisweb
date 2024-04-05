import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          How can I invest with Future Space Limited
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          Investment has been made easy, First you will need to open your personal account and login to your unique members dashboard and you can make your first deposit/investment depending on your chosen investment plan to start earning profits.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          Do you have referral Commission?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is an Investment/Mining Platform?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          An Investment platform is an online platform which allows traders to trade on the price fluctuations of hundreds of assets available on various trading resources around the world. In cryptocurrency networks, mining is a validation of transactions. For this effort, successful miners obtain new cryptocurrency as a reward. The reward decreases transaction fees by creating a complementary incentive to contribute to the processing power of the network. We provide a suitable platform for investment and cryptocurrency mining.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is an asset?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          An asset can be defined as the measured value of one of the following : Commodity, Currency, Indices and Stock. The price of an asset reflects the live price on the market.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is an expiry time?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          An expiry time is the time where a trade placed with a specific asset ends. Expiry time is decided at the beginning of the trade and can usually range from minutes to months. Once the trade is placed, traders can monitor the expiry times by viewing the countdown display in the “Open Trades” section on the platform. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is a strike price?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          A strike price is the price at which a specific contract can be traded. Strike price is calculated by adding the ASK &amp; BID price and dividing this figure by 2. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What does “in-the-money” and “out-the-money” mean?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
         “In-the-money” occurs when a trade expires as predicted by the trader and the latter has earned the predetermined profits on his investment. <br/> On the other side, “Out-of-the-money” refers to the moment when the trader’s trade predictions do not meet up the market fluctuations and will hence make the trader lose his/her investment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is a Bearish Market?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          A Bearish market is a term used to describe a situation whereby the price of an asset is falling strongly. Concretely, when an asset suffers a downfall of over 20% of its value then the market is said to be a Bearish Market.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is a Bullish Market?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          A Bullish Market is a term used to depict the sharp rise in the price of an asset. We usually speak of an increase of over 20% in the value of a specific asset to describe a Bullish Market. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What does current price mean?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          The current price of an asset is the quoted price of an underlying asset as per real-time data provider. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
    sx={{
      bgcolor:'#f5f5f5',
      borderTop:'1px solid #ddd',
      height:'70px'
    }}
        >
          <Typography  sx={{  flexShrink: 0, color:'#11b7b9', fontSize:'20px', fontFamily:'Nexa-Heavy' }}>
          What is the time shown on BitVest Limited?
          </Typography>

        </AccordionSummary>
        <AccordionDetails sx={{py:2, boxShadow:'0px'}}>
          <Typography sx={{fontFamily:'poppins', color:'#2e2f4b', fontSize:'15px', lineHeight:'24px'}}>
          The time shown on the website is set at the market price which is GMT +0
          </Typography>
        </AccordionDetails>
      </Accordion>
    
  
     
    </div>
  );
}