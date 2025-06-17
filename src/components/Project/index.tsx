import React from 'react';
import { Project as ProjectType } from '../../utils/projects';

interface Props {
  project: ProjectType;
}

function ProjectCard({ project }: Props) {
  return (
    <div className="project_list">
      <div className="project_image">
        <img src={project.image} alt={project.title} className="project_img" />
      </div>
      <div className="project_content">
        <h3 className="project_title">{project.title}</h3>
        <div className="project_tags">
          {project.tags.map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
          ))}
        </div>
        <p className="project_description">{project.description}</p>
        <div className="project_btn">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn red">
            View Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
