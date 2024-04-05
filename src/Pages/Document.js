import React from 'react'
import NavBar from '../Components/Navs/NavBar'
import ChatUs from '../Components/Section/ChatUs'
import Footer from '../Components/Section/Footer'

import { Box, Typography } from '@mui/material'

import { Container} from '@mui/system'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Waist from '../Components/Section/Waist'

const Document = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
    <NavBar/>
    <Box
        className="contact_banner"
        sx={{
          pt: 12,

          display: 'flex',
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            height: {
              lg: '80px',
              xs: '90px',
            },
            width: {
              lg: 300,
              xs: 200,
            },
            bgcolor: 'white',
            opacity: 0.5,
            borderRadius: '3px',
            mt: 4,
            p: 2,
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '500',

              fontFamily: 'Cinzel',

              fontSize: {
                xs: 20,
                lg: 30,
              },
              mb: 2,
              color: 'black',
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>
      </Box>

      <Box mt={3} mb={3}>
      <Container mt={3}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Question 1:
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>How many children are in each class?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Class sizes are between 12 and 18 students

Lessons are adapted in regards to the level of the students and differentiated for their specific needs and abilities.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Question 2:</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          What extracurricular activities are on offer?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We run almost thirty after-school clubs. These include a full range of sports, creativity and drama. Students can take part in football, karate, yoga, ballet, modern jazz, cookery, singing, photography, chess, cross-country running, drama and public speaking. Some activities incur an extra cost. More details can be found here.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Question 3:
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
          Can I visit my child?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes, but we ask that you make a formal request, at least three days in advance using this form. During the first two weeks of the September term, we do not permit any weekend exeats, as students need to settle back into school life. Otherwise, providing no mandatory school activities are taking place, weekend leave starts on Friday at 16h30 until Sunday at 18h00. You may also take your child out for dinner provided you give us due notice.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Container></Box>
<Waist/>
    <Footer/>
    <ChatUs/>
    </>
  )
}

export default Document