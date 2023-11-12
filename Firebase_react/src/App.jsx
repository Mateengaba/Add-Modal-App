import { useState } from 'react'
import Button from "@mui/material/Button";
import { Box } from "@mui/material"
import TransitionsModal from './Compnents/Modal'
import Navbar from './Compnents/Navbar';
import PrductsCard from './Compnents/Card';
import Body from './Compnents/Body';


function App() {



  return (
    <>
      < Navbar />
      <Box

        display={"flex"}
        justifyContent={"center"}
        marginTop={"20px"}
      >
        <TransitionsModal />
      </Box>



      <Body />


    </>
  )
}

export default App
