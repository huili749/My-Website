import React from "react";
import Projects from "../components/Projects";
import ProjectsData from "../data/ProjectsData";

const computationalprojects = () => {
  // Filter projects by "urban" tag
  const computationalProjects = ProjectsData.filter((project) =>
    project.tags.includes("computational")
  );

  return (
    <div>
      <h1 className="title">COMPUTATIONAL DESIGN</h1>
      <Projects projects={computationalProjects} />
    </div>
  );
};

export default computationalprojects;
