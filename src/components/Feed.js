import React from 'react'
import { Box} from '@mui/material'
import Post from './Post'

function Feed() {
  return (
    <Box  padding={2} flex={4}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}

export default Feed