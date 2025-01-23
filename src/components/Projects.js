import React from "react";
import { Link } from "react-router-dom";
import "./styles/Projects.css";

const Projects = ({ projects }) => {
    const handleSaveScrollPosition = () => {
        console.log("Saving scroll position:", window.scrollY);
        sessionStorage.setItem("scrollPosition", window.scrollY); // Save the current scroll position
    };

    return (
        <div className="projects-container">
            {projects.map((project) => (
                <div key={project.id} className="project-item">
                    <div className="project-info">
                        <div>
                            <h3 className="project-name">
                                <Link 
                                    to={`/projects/${project.id}`}
                                    onClick={handleSaveScrollPosition}
                                >{project.name}</Link>
                            </h3>
                        </div>
                        <div>
                            <p className="project-detail">{project.institute}</p>
                            <p className="project-detail">{project.year}</p>
                            <p className="project-detail">{project.description}</p>
                        </div>
                    </div>

                    {/* Project Media */}
                    <div className="project-media">
                        <Link 
                            to={`/projects/${project.id}`}
                            onClick={handleSaveScrollPosition}
                        >
                            {project.images[0]?.type === "video" ? (
                                <video
                                    className="project-video"
                                    src={project.images[0]?.src} // Render the first video
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                    
                                ></video>
                            ) : (
                                <img
                                    className="project-image"
                                    src={project.images[0]?.src} // Render the first image
                                    alt={`${project.name} media`}
                                    loading="lazy"
                                />
                            )}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;