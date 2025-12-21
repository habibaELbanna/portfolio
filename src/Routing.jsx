import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import WebDevProjectDetail from "./Component/WebDevProjectDetail";
import CaseStudyDetail from "./Component/CaseStudyDetail";
import GraphicProjectDetail from "./Component/GraphicProjectDetail";
import ScrollToTop from "./Component/ScrollToTop";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          
       
          <Route path="/webapp-project/:projectId" element={<WebDevProjectDetail />} />
          
     
          <Route path="/graphic-project/:projectId" element={<GraphicProjectDetail />} />
   
          <Route path="/project/:caseStudyId" element={<CaseStudyDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;