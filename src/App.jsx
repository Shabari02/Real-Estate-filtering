import React,{ useState } from 'react'
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import { data } from './data/data';


function App() {
  
  return (
    <>
      <Navbar />
      <Filter data ={data} />
    </>
  )
}

export default App
