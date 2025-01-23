import React from "react";
import Projects from "../components/Projects";
import ProjectsData from "../data/ProjectsData";

const researchprojects = () => {
  // Filter projects by "research" tag
  const researchProjects = ProjectsData.filter((project) =>
    project.tags.includes("research")
  );

  return (
    <div>
      <h1 className="title">RESEARCH</h1>
      <Projects projects={researchProjects} />
    </div>
  );
};

export default researchprojects;
