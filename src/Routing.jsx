import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DoItProject from './Component/Doitproject';


const Routing = () => {
  return (
  <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
     <Route path="/project/doit" element={<DoItProject />} />
      </Routes>
   </BrowserRouter>
  );
};

export default Routing;