
import { projects } from '../../utils/projects';
import ProjectCard from '../../components/Project/index';

import './style.css';

function Project() {
  return (
    <section className="project section">
      <div className="project_container container">
        <h2 className="projects">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
