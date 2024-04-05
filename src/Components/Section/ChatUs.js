import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { Avatar, Fab, Typography } from '@mui/material'
import { Box } from '@mui/system'

const ChatUs = () => {
  return (
    <Box
     
    sx={{
      display:'flex',
      
      position: 'fixed',
      bottom: (theme) => theme.spacing(2),
      right: (theme) => theme.spacing(2),
    }}
  >
    <Box sx={{bgcolor:'#fff', px:2,py:1, borderRadius:'20px', boxShadow:'rgba(0, 18, 46, 0.18) 0px 2px 20px 0px', mr:2}}>
      <Typography variant='body'>Chat with us <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png"  width={20}/> </Typography>
    </Box>
   <Avatar sx={{cursor:'pointer'}} >
    <ChatBubbleIcon/>
   </Avatar>
  </Box>
  )
}

export default ChatUs