import React from "react";
import Projects from "../components/Projects";
import ProjectsData from "../data/ProjectsData";

const urbanprojects = () => {
  // Filter projects by "urban" tag
  const urbanProjects = ProjectsData.filter((project) =>
    project.tags.includes("urban")
  );

  return (
    <div>
      <h1 className="title">URBAN DESIGN</h1>
      <Projects projects={urbanProjects} />
    </div>
  );
};

export default urbanprojects;
