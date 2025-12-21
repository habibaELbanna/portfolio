import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { supabase } from '../Supabase';
import './Casestudydetailsgiza.css'; 
import './CasestudydetailsHarryPotter.css';
import Nav from './Navbar';
import Footer from './Footer';
import FloatingButton from './Floatingbutton';
import { caseStudies } from '../data/caseStudiesData';

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams();
  const [caseStudyData, setCaseStudyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaseStudyData() {
      try {
        // Try to fetch from Supabase
        const { data, error } = await supabase
          .from('CaseStudies')
          .select('*')
          .eq('slug', caseStudyId)
          .single();

        if (error) throw error;

        if (data) {
          setCaseStudyData(data);
        } else {
          // Fallback to local data
          const localCaseStudy = caseStudies[caseStudyId];
          if (localCaseStudy) {
            setCaseStudyData(localCaseStudy);
          }
        }
      } catch (error) {
        console.error('Error fetching case study:', error);
        // Use local data as fallback
        const localCaseStudy = caseStudies[caseStudyId];
        if (localCaseStudy) {
          setCaseStudyData(localCaseStudy);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCaseStudyData();
  }, [caseStudyId]);

  if (loading) {
    return (
      <>
        <Nav />
        <div className="casestudy-loading">Loading case study...</div>
        <Footer />
      </>
    );
  }

  if (!caseStudyData) {
    return <Navigate to="/" replace />;
  }

  const caseStudy = caseStudyData;
  const cssPrefix = caseStudy.cssPrefix || 'default';
  
  // Determine CSS class names based on prefix
  const containerClass = cssPrefix === 'harrypotter' 
    ? 'harrypotter-split-layout-container'
    : 'split-layout-container';
  
  const galleryClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-scrolling-gallery-section'
    : 'scrolling-gallery-section';
  
  const gridClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-image-grid-gallery'
    : 'image-grid-gallery';
  
  const boxClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-gallery-box-item'
    : 'gallery-box-item';
  
  const contentClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-fixed-content-section'
    : 'fixed-content-section';
  
  const wrapperClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-text-content-wrapper'
    : 'text-content-wrapper';

  const titleClass = cssPrefix === 'harrypotter'
    ? 'harrypotter-proj_namephaseux'
    : '';

  return (
    <>
      <Nav />
      <div className={containerClass}>
        {/* Left Side - Scrolling Gallery */}
        <div className={galleryClass}>
          <div className={gridClass}>
            {caseStudy.images && caseStudy.images.map((item, index) => (
              <div 
                key={index}
                className={boxClass}
              >
                {item.type === 'video' ? (
                  <video
                    src={item.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ 
                    backgroundImage: `url(${item.src})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Fixed Content */}
        <div className={contentClass}>
          <div className={wrapperClass}>
            <h1 className={titleClass}>
              {caseStudy.title}
            </h1>
            <p>
              {caseStudy.description.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < caseStudy.description.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingButton />
    </>
  );
};

export default CaseStudyDetail;