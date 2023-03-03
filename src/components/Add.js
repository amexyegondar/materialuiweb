import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import EmojiEmotions from '@mui/icons-material/EmojiEmotions'
import Image from '@mui/icons-material/Image'
import PersonAdd from '@mui/icons-material/PersonAdd'
import VideoCameraBack from '@mui/icons-material/VideoCameraBack'
import DateRange from '@mui/icons-material/DateRange'

const StyledModal=styled(Modal)({
display:'flex',
alignItems:'center',
justifyContent:'center'
})
const UserBox=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginBottom:'20px'
    })
    
function Add() {   
const[open,setOpen]=useState(false)
  return (
    <>
<Tooltip 
onClick={e=>setOpen(true)}
title="Add Post" sx={{position:'fixed' ,bottom:20 ,left:{xs:'calc(50%-25px) ,md:30'}}}>
<Fab color="primary" aria-label="add">
  <AddIcon/>
</Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box height={280} width={400} bgcolor='white' p={3} borderRadius={5}>
    <Typography variant='h6' color='grey' textAlign='center'>
        Create Post
    </Typography>
    <UserBox>
    <Avatar alt="Gech Sharp" 
    src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400" />
    <Typography fontWeight={500} variant='span'>
    Amanual Shibabaw
    </Typography>
    </UserBox>
    <TextField
    sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="what's on your mind"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
           <EmojiEmotions color='primary'/>
           <Image color='secondary'/>
           <VideoCameraBack color='success'/>
           <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
           <Button>Post</Button>
           <Button sx={{width:'100px'}}
           ><DateRange/></Button>
  
        </ButtonGroup>
  </Box>
</StyledModal>
    </>
  )
}

export default Add