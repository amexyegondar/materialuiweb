import React, { useState } from 'react'
import { AppBar,Avatar,Badge,InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material'
function Navbar() {
  const[open,setOpen]=useState(false)
  const StyledToolbar=styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'


  })
  const Search=styled('div')(({theme})=>({
    backgroundColor:'white',
    padding:'0 10px',
    borderRadius:'4px',
    width:'40%'
  }))
  const Icons=styled('Box')(({theme})=>({
   display:'flex',
   gap:"20px",
   alignItems:'center'

    
  })) 
  const UserBox=styled('Box')(({theme})=>({
    display:'flex',
    gap:"20px",
    alignItems:'center'
  })
  
  )
  return (
    <AppBar position="sticky">
    <StyledToolbar>
    <Typography 
    sx={{display:{xs:'none',sm:'block'}}}
    variant='h6'>LAMA DEV</Typography>
    <Pets     sx={{display:{xs:'block',sm:'none'}}}/>
    <Search><InputBase placeholder='search...'/></Search>
    <Icons>
    <Badge badgeContent={4} color='error'  >
    <Mail color='action'/>
    </Badge>
    <Badge badgeContent={4} color='error'  >
    <Notifications
     />
    </Badge>
    <Avatar src='' sx={{width:30,height:30}} onClick={e=>setOpen(true)}/> 
    </Icons>
    <UserBox onClick={e=>setOpen(true)}>
    <Avatar src='' sx={{width:30,height:30}}/> 
  <Typography variant='span'>John</Typography>
    </UserBox>
    </StyledToolbar>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClick={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar