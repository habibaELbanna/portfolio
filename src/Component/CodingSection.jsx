import { useState } from 'react';
import './CodingSection.css';
import giza from '../Assets/vid/gizazoo.mp4'
import harry from '../Assets/vid/harry.mp4'
import jewels from '../Assets/imgs/coding/jewels.png'
import kemet from '../Assets/imgs/casestudy/kemet.png'
import aw from '../Assets/imgs/coding/awearness.png'
import re from '../Assets/imgs/coding/repair.png'
const CodingSection = () => {
    const [activeWork, setActiveWork] = useState(0);

    const projects = [
        {
            id: 0,
            title: "Giza Zoo",
            category: "ux/ui/ development",
            video: giza,
            link: "coding_internal_page.html"
        },
        {
            id: 1,
            title: "harry potter inspired story website",
            category: "ux/ui/ development",
           video: harry,
            link: "#"
        },
        {
            id: 2,
            title: "Glamour jewerly store",
            category: "ux/ui/ development",
            image: jewels,
            link: "#"
        },
        {
            id: 3,
            title: "Egyptian history KEMET",
            category: "ux/ui/ development",
            image:kemet,
            link: "#"
        },
        {
            id: 4,
            title: "Awareness",
            category: "ux/ui/ development",
            image: aw,
            link: "#"
        },
        {
            id: 5,
            title: "repair service",
            category: "ux/ui/ development",
            image: re,
            link: "#"
        }
   
    ];

    const handleWorkHover = (workId) => {
        setActiveWork(workId);
    };

    return (
        <>
            <h1 className="posters"> &lt; The<br /> coding &gt;</h1>

            <div className="bigo">
                <div className="portfolio-wrapper">
                    <div className="preview-display">
                        {projects.map((project) => (
                            project.video ? (
                                <video
                                    key={project.id}
                                    src={project.video}
                                    className={activeWork === project.id ? 'visible' : ''}
                                    data-work={project.id}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    key={project.id}
                                    src={project.image}
                                    alt={project.title}
                                    className={activeWork === project.id ? 'visible' : ''}
                                    data-work={project.id}
                                />
                            )
                        ))}
                    </div>

                    <div className="works-listing">
                        <h1 className="proj">PROJECTS</h1>
                        {projects.map((project) => (
                            <a href={project.link} key={project.id}>
                                <div
                                    className="work-entry"
                                    data-work={project.id}
                                    onMouseEnter={() => handleWorkHover(project.id)}
                                >
                                    <span className="work-title">{project.title}</span>
                                    <span className="work-category">{project.category}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CodingSection;