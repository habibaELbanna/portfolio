import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./CodingSection.css";
import { supabase } from '../Supabase';

const CodingSection = () => {
  const [loading, setLoading] = useState(true);
  const [activeWork, setActiveWork] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function callAPI() {
      const res = await supabase.from("Projects").select("id,Hero_image,slug,title,category,video").eq("section_type","coding");
      
      setProjects(res.data);
      setLoading(false);
    }
    
    callAPI();
  }, []);

  const handleWorkHover = (workId) => {
    setActiveWork(workId);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1 className="posters">
        {" "}
        &lt; The
        <br /> coding &gt;
      </h1>

      <div className="bigo">
        <div className="portfolio-wrapper">
          <div className="preview-display">
            {projects.map((project) =>
              project.video ? (
                <video
                  key={project.id}
                  src={project.video}
                  className={activeWork === project.id ? "visible" : ""}
                  data-work={project.id}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  key={project.id}
                  src={project.Hero_image}
                  alt={project.title}
                  className={activeWork === project.id ? "visible" : ""}
                  data-work={project.id}
                />
              )
            )}
          </div>

          <div className="works-listing">
            <h1 className="proj">PROJECTS</h1>
            {projects.map((project) => (
              <Link to={project.slug} key={project.id}>
                <div
                  className="work-entry"
                  data-work={project.id}
                  onMouseEnter={() => handleWorkHover(project.id)}
                >
                  <span className="work-title">{project.title}</span>
                  <span className="work-category">{project.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CodingSection;