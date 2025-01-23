import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/ProjectsData";
import ProjectCard from "../components/ProjectCard";

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find((proj) => proj.id === String(id));

    if (!project) {
        return <p>Project not found.</p>;
    }

    return <ProjectCard project={project} />;
};

export default ProjectDetail;
