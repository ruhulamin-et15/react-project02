import React from 'react'
import Home4 from './FORM/Home4';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import View from './FORM/View';
import Info from './FORM/Info';

const Home3 = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home4/>}/>
      {/* <Route path='/view' element={<View/>}/> */}
      <Route path='/info' element={<Info/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Home3;