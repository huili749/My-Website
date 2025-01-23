import React from "react";
import Projects from "../components/Projects";
import ProjectsData from "../data/ProjectsData";

const architecturalprojects = () => {
  // Filter projects by "urban" tag
  const architecturalProjects = ProjectsData.filter((project) =>
    project.tags.includes("architectural")
  );

  return (
    <div>
      <h1 className="title">ARCHITECTURAL DESIGN</h1>
      <Projects projects={architecturalProjects} />
    </div>
  );
};

export default architecturalprojects;
