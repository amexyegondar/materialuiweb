import React from 'react'
import {Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'

function Rightbar() {
  return (
    <Box 
    sx={{display:{xs:'none',sm:'block'}}} 
    padding={2} 
    flex={2}>
   <Box position='fixed' width={300}>
<Typography variant='h6' fontWeight={100}>Online Friends</Typography>
<AvatarGroup max={5}>
  <Avatar alt="Gech Sharp" src="https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=400" />
  <Avatar alt="Amare Howard" src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400" />
  <Avatar alt="Assefa Baker" src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400" />
  <Avatar alt="destaw Walker" src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=400" />
  <Avatar alt="Sami Henderson" src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=400" />
</AvatarGroup>
<Typography variant='h6' fontWeight={100} mb={2} mt={2}>
Latest Photos
</Typography>
<ImageList cols={3} rowHeight={100} gap={5} marginBottom={5}>
<ImageListItem>
  <img alt='' src='https://images.pexels.com/photos/1852389/pexels-photo-1852389.jpeg?auto=compress&cs=tinysrgb&w=400'/>
</ImageListItem>
<ImageListItem>
  <img alt='' src='https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg?auto=compress&cs=tinysrgb&w=400'/>
</ImageListItem>
<ImageListItem>
  <img alt='' src='https://images.pexels.com/photos/1851243/pexels-photo-1851243.jpeg?auto=compress&cs=tinysrgb&w=400'/>
</ImageListItem>

</ImageList>
<Typography variant='h6' fontWeight={100}  mt={2}>
Latest Conversations
</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/92129/pexels-photo-92129.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/3766227/pexels-photo-3766227.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/5474028/pexels-photo-5474028.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
   </Box>

    </Box>
  )
}

export default Rightbar