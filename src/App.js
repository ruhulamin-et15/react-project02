import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./ROUTING/Home";
import About from "./ROUTING/About";
import Contact from "./ROUTING/Contact";
import Blogs from "./ROUTING/Blogs";
import Error from "./ROUTING/Error";
import Navbar from "./ROUTING/Navbar";
import Blog from "./ROUTING/Blog";
import UseSearchParam from "./ROUTING/UseSearchParam";
import UseStateUseSearchParam from "./ROUTING/UseStateUseSearchParam";
import UseParam from "./ROUTING/UseParam";
import Memo from "./MEMO/Memo";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="*" element={<Error />} />
        <Route path="/searchparam" element={<UseSearchParam />} />
        <Route path="/stateparam" element={<UseStateUseSearchParam />} />
        <Route path="/param/:userid" element={<UseParam />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
