import React, { useRef, useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './GraphicProjectDetail.css';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import FloatingButton from '../Component/Floatingbutton';
import { supabase } from '../Supabase';

const GraphicProjectDetail = () => {
  const { projectId } = useParams();
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  
  const scrollContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    async function callAPI() {
      console.log('🔍 Looking for project with slug:', projectId);
      
      const res = await supabase
        .from("Projects")
        .select("*")
        .eq("slug", projectId)
        .eq("section_type", "graphic")
        .single();
      
      console.log('📦 Supabase response:', res);
      console.log('✅ Data:', res.data);
      console.log('❌ Error:', res.error);
      
      if (res.data) {
        const rawProject = res.data;
        
        let allImages = [];
        
        // Get images from the_ux
        if (rawProject.the_ux && rawProject.the_ux.project_image) {
          if (Array.isArray(rawProject.the_ux.project_image)) {
            allImages = [...allImages, ...rawProject.the_ux.project_image];
          } else {
            allImages.push(rawProject.the_ux.project_image);
          }
        }
        
        // Get images from the_branding
        if (rawProject.the_branding && rawProject.the_branding.project_image) {
          allImages.push(rawProject.the_branding.project_image);
        }
        
        // Get images from Products
        if (rawProject.Products) {
          const productImages = Object.keys(rawProject.Products)
            .filter(key => key.startsWith('image'))
            .map(key => rawProject.Products[key])
            .filter(url => url);
          allImages = [...allImages, ...productImages];
        }
        
        // Get images from scroll_imgs
        if (rawProject.scroll_imgs) {
          const scrollImages = Object.keys(rawProject.scroll_imgs)
            .filter(key => key.startsWith('image'))
            .map(key => rawProject.scroll_imgs[key])
            .filter(url => url);
          allImages = [...allImages, ...scrollImages];
        }
        
        // If no images found in JSONB columns, use Hero_image
        if (allImages.length === 0 && rawProject.Hero_image) {
          allImages.push(rawProject.Hero_image);
        }
        
        console.log('🖼️ All collected images:', allImages);
        
        const transformedProject = {
          title: rawProject.Title,
          description: rawProject.project_description 
            ? [rawProject.project_description] 
            : [],
          images: allImages,
          layout_type: 'vertical'
        };
        
        console.log('✨ Transformed project:', transformedProject);
        setProject(transformedProject);
      } else {
        console.log('⚠️ No project found! Redirecting to home...');
      }
      
      setLoading(false);
    }
    
    callAPI();
  }, [projectId]);

  useEffect(() => {
    if (project && project.layout_type === 'horizontal') {
      const scrollContainer = scrollContainerRef.current;
      const scrollWrapper = wrapperRef.current;

      const updateHorizontalScroll = () => {
        if (!scrollContainer || !scrollWrapper) return;

        const cards = scrollContainer.querySelectorAll('.project-proof-card');
        const totalCardsWidth = Array.from(cards).reduce((total, card) => {
          return total + card.offsetWidth + 32;
        }, 0);

        const maxScroll = totalCardsWidth - window.innerWidth;
        const wrapperTop = scrollWrapper.offsetTop;
        const wrapperHeight = scrollWrapper.offsetHeight;
        const scrollProgress = window.scrollY - wrapperTop;

        if (scrollProgress >= 0 && scrollProgress <= wrapperHeight - window.innerHeight) {
          const progress = scrollProgress / (wrapperHeight - window.innerHeight);
          const translateX = progress * maxScroll;
          scrollContainer.style.transform = `translateX(-${translateX}px)`;
        } else if (scrollProgress < 0) {
          scrollContainer.style.transform = `translateX(0px)`;
        } else {
          scrollContainer.style.transform = `translateX(-${maxScroll}px)`;
        }
      };

      window.addEventListener('scroll', updateHorizontalScroll);
      window.addEventListener('resize', updateHorizontalScroll);
      updateHorizontalScroll();

      return () => {
        window.removeEventListener('scroll', updateHorizontalScroll);
        window.removeEventListener('resize', updateHorizontalScroll);
      };
    }
  }, [project]);

  if (loading) return <p>Loading...</p>;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  if (project.layout_type === 'horizontal') {
    return (
      <>
        <Navbar />
        <div className="project-scroll-wrapper" ref={wrapperRef}>
          <div className="project-horizontal-scroll-section">
            <div className="project-scroll-container" ref={scrollContainerRef}>
              
              <div className="project-proof-card project-text-card">
                <h1 className="project-detail-title">{project.title}</h1>
                {project.description.map((paragraph, index) => (
                  <p key={index} className="project-detail-description">
                    {paragraph}
                  </p>
                ))}
              </div>

              {project.images.map((image, index) => (
                <div key={index} className="project-proof-card project-image-card">
                  <img src={image} alt={`${project.title} ${index + 1}`} />
                </div>
              ))}

            </div>
          </div>
        </div>
        <FloatingButton />
        <Footer />
      </>
    );
  }

  return (
    <div className="graphic-project-detail">
      <div className="project-container">
        <Navbar />
        
        <div className="project-content">
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            
            {project.description.map((paragraph, index) => (
              <p key={index} className="project-description">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="project-images">
            {project.images.map((image, index) => (
              <div key={index} className="project-image-wrapper">
                <img 
                  src={image} 
                  alt={`${project.title} ${index + 1}`}
                  className="project-image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingButton />
      <Footer />
    </div>
  );
};

export default GraphicProjectDetail;