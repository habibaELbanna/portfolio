import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DoItProject from './Component/Doitproject';
import CaseStudyDetailsGiza from './Component/Casestudydetailsgiza';
import AsapProject from './Component/AsapProject';
import HamedProject from './Component/HamedProject';
import Enviroment from './Component/Enviroment';
import Ogreblast from './Component/OgreBlast';
import ScrollToTop from './Component/ScrollToTop';
import SonderProject from './Component/SonderProject';
import ShadowEdgeProject from './Component/ShadowEdgeProject';
import KemetProject from './Component/KemetProject';
import RepairProject from './Component/RepairProject';
import VortexProject from './Component/VortexProject';
import PinkTaxiProject from './Component/PinkTaxiProject';


const Routing = () => {
  return (
    <>
   
  <BrowserRouter>
     <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
              <Route path="/project/giza-zoo" element={<CaseStudyDetailsGiza />} />
     <Route path="/project/doit" element={<DoItProject />} />
     <Route path="/asap-project" element={<AsapProject />} />
          <Route path="/Hamed-project" element={<HamedProject />} />
           <Route path="/leg-project" element={<Enviroment />} />
   <Route path="/ogre-project" element={<Ogreblast />} />
   <Route path="/sonder-project" element={<SonderProject />} />
   <Route path="/shadow-project" element={<ShadowEdgeProject />} />
   <Route path="/project/1" element={<KemetProject />} />
      <Route path="/project/2" element={<RepairProject/>} />
           <Route path="/project/6" element={<VortexProject />} />
               <Route path="/project/10" element={<PinkTaxiProject />} />
      </Routes>
   </BrowserRouter>
   </>
  );
};

export default Routing;