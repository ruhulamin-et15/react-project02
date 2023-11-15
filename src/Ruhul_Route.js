import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages
import Home from './ROUTING/PROTECTED_ROUTING/Home';
import About from './ROUTING/PROTECTED_ROUTING/About';
import AddBlog from './ROUTING/PROTECTED_ROUTING/AddBlog';
import Error from './ROUTING/PROTECTED_ROUTING/Error';
import Navbar from './ROUTING/PROTECTED_ROUTING/Navbar';
import Protect from './ROUTING/PROTECTED_ROUTING/Protect';
import Login from './ROUTING/PROTECTED_ROUTING/Login';


const Ruhul_Route = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
    <Navbar/>
    {isLoggedIn ? <button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>Log Out</button>: <button onClick={()=> {setIsLoggedIn(!isLoggedIn)}}>Login</button>}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/add_blog' element={<Protect isLoggedIn={isLoggedIn}>
            <AddBlog/>
        </Protect>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Ruhul_Route;