import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import Contact from './routes/Contact';
import Project from './routes/Project';
import About from './routes/About';
import Skills from './routes/Skills';
import {Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>  
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
    </>
  );
}

export default App;
