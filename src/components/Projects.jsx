import ProjectBox from "./ProjectBox";
import { projects } from "../assets/assets";

const Projects = () => {
  return (
    <>
      <section id="projects" className="projects">
        <div className="container">
          <div className="projects-content">
            <h2>Projects</h2>
            <div className="projects-wrapper">
              {projects.map((item) => (
                <ProjectBox key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
