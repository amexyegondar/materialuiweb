import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import {Box,createTheme,Stack, ThemeProvider} from '@mui/material'
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const[mode,setMode]=useState('dark')
  const darkTheme=createTheme({
    pallete:{
    mode:mode
    } })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'}>
    <Navbar/>
   <Stack direction='row' justifyContent='space-between' spacing={2}>
   <Sidebar/>
    <Feed/>
    <Rightbar/>
   </Stack>
    <Add/>
    
    </Box>
    </ThemeProvider>
  );
}

export default App;
