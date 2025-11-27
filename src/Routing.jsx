import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DoItProject from './Component/Doitproject';
import CaseStudyDetailsGiza from './Component/Casestudydetailsgiza';
import AsapProject from './Component/AsapProject';
import HamedProject from './Component/HamedProject';
import Enviroment from './Component/Enviroment';


const Routing = () => {
  return (
  <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/project/giza-zoo" element={<CaseStudyDetailsGiza />} />
     <Route path="/project/doit" element={<DoItProject />} />
     <Route path="/asap-project" element={<AsapProject />} />
          <Route path="/Hamed-project" element={<HamedProject />} />
           <Route path="/leg-project" element={<Enviroment />} />
      </Routes>
   </BrowserRouter>
  );
};

export default Routing;