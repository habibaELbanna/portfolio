import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { supabase } from '../Supabase';
import './WebDevProjectDetail.css';
import Nav from './Navbar';
import Footer from './Footer';
import FloatingButton from './Floatingbutton';
import ankhIcon from '../Assets/imgs/ankh.svg';

const WebDevProjectDetail = () => {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjectData() {
      try {
 
        const { data: project, error: projectError } = await supabase
          .from('Projects')
          .select('*')
          .eq('slug', projectId)
          .single();

        if (projectError) throw projectError;

        if (project) {
          console.log('✅ PROJECT FROM SUPABASE:', project);
        
          const sections = [];

        
          if (project.the_ux && project.the_ux.project_image) {
            sections.push({
              type: 'ux',
              title: '01. The UX',
              images: project.the_ux.project_image,
              description: project.the_ux.image_caption || null
            });
          }

          if (project.the_branding && project.the_branding.project_image) {
            sections.push({
              type: 'branding',
              title: '02. The Branding',
              images: [project.the_branding.project_image],
              description: project.the_branding.image_caption || null
            });
          }

       
          if (project.Products) {
           
            const productImages = Object.keys(project.Products)
              .filter(key => key.startsWith('image'))
              .map(key => project.Products[key])
              .filter(url => url); 

            sections.push({
              type: 'product',
              title: '03. Product Design',
              images: productImages
            });
          }

         
          let logos = [];
          if (project.scroll_imgs) {
            logos = Object.keys(project.scroll_imgs)
              .filter(key => key.startsWith('image'))
              .map(key => project.scroll_imgs[key])
              .filter(url => url); 
          }
          console.log(sections)

          
          setProjectData({
            Title: project.Title,
            name: project.Title,
            title: project.project_description,
            project_description: project.project_description,
            about: project.About_Project,
            Hero_image: project.Hero_image,
            hero_video: project.hero_video,
            bannerItems: Array.isArray(project.banner_items) ? project.banner_items : ["DESIGN", "BRANDING", "UX/UI"],
            sections: sections,
            logos: logos
          });
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        setProjectData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectData();
  }, [projectId]);

  if (loading) {
    return (
      <>
        <Nav />
        <div className="webdev-loading">Loading project...</div>
        <Footer />
      </>
    );
  }

  if (!projectData) {
    return <Navigate to="/" replace />;
  }

  const project = projectData;

  return (
    <>
      <Nav />
      <div className="webdev-project-container">
     
        <p className="webdev-proj-name">{project.Title}</p>
        <p className="webdev-proj-title">{project.project_description}</p>

     
        <div className="webdev-banner-container">
          <div className="webdev-banner-track">
            {[1, 2].map((set) => (
              <div key={set} className="webdev-banner-content">
                {project.bannerItems.map((item, index) => (
                  <div key={index} className="webdev-banner-item">
                    <span className="webdev-banner-text">{item}</span>
                    <span className="webdev-ankh">
                      <img src={ankhIcon} alt="icon" />
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

       
        <div className="webdev-middleab">
          <div className="webdev-abitdiv">
            {project.hero_video && (
              <video className="webdev-videot" autoPlay muted loop playsInline>
                <source src={project.hero_video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="webdev-projjj">
            {project.Hero_image && (
              <img className="webdev-project-logo1" src={project.Hero_image} alt={`${project.Title} Logo`} />
            )}
            <p className="webdev-proj-info1">
              <span style={{ fontFamily: 'anton', fontSize: '50px' }}>about</span>
              <br />
              {project.about}
            </p>
          </div>
        </div>

   
        {console.log("-------------")}
        {/* {project.sections && project.sections.length > 0 && project.sections.map((section, index) => (
          <div key={index}>
            {section.type === 'ux' && section.image && (
              <>
                <p className="webdev-proj-namephaseux">{section.title}</p>
                {section.image.map((img)=>{
                  return <p>00000</p>

                })}
                {section.description && (
                  <p className="webdev-proj-namephasebranding">{section.description}</p>
                )}
              </>
            )}

            {section.type === 'branding' && (
              <>
                <p className="webdev-proj-namephaseux">{section.title}</p>
                <div className="webdev-branding">
                  {Array.isArray(section.images) && section.images.map((img, imgIndex) => (
                    <img key={imgIndex} className="webdev-project-logokemet" src={img} alt={`Branding ${imgIndex + 1}`} />
                  ))}
                </div>
                {section.description && (
                  <p className="webdev-proj-namephasebranding">{section.description}</p>
                )}
              </>
            )}

            {section.type === 'product' && (
              <>
                <h1 className="webdev-proj-namephaseux">{section.title}</h1>
                <div className="webdev-product-design-grid-wrapper">
                  {Array.isArray(section.images) && section.images.slice(0, 4).map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`webdev-product-design-box webdev-pd-box-${imgIndex + 1} webdev-pd-img-contain`}
                    >
                      <img src={img} alt={`Product Design ${imgIndex + 1}`} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))} */}

        {project.sections.map((e)=>{
          console.log("-------")

          console.log(e)
          return <>
<p className="webdev-proj-namephaseux">{e.title}</p>          
<div className="webdev-product-design-grid-wrapper">
{e.images.map((img,i)=>{
                   return       <div className={`webdev-product-design-box webdev-pd-box-${i + 1} webdev-pd-img-contain`}>
                      <img alt="Login Form Design" src={img} />
                      </div>
                   
                   
                   
                  })}
                  </div>

                  <p className="webdev-proj-namephasebranding">{e.description}</p>

</>
        })}

        {project.logos && project.logos.length > 0 && (
          <div className="webdev-logos">
            <div className="webdev-logos-slide">
              {project.logos.map((logo, index) => (
                <img key={`logo-set1-${index}`} src={logo} alt={`Logo ${index + 1}`} />
              ))}
            </div>
            <div className="webdev-logos-slide">
              {project.logos.map((logo, index) => (
                <img key={`logo-set2-${index}`} src={logo} alt={`Logo ${index + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
      <FloatingButton />
      <Footer />
    </>
  );
};

export default WebDevProjectDetail;