import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const projectsList = projects.map((project) => {
    return (
      <ProjectItem key={project.id} technologies={project.technologies} name={project.name} about={project.about}/>
    )
  })
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectsList}
      </div>
    </div>
  );
}

export default ProjectList;
