import { useContext } from "react";
import Context from "../components/Context";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Projects = () => {
  const { projects } = useContext(Context);
  return (
    <main id="projectsGlobal">
      <div id="projectsList">
        {projects.map((project) => (
          <div className="projectsCard" key={project.id}>
            <img src={project.logo} alt={`Logo du projet ${project.title}`} />
            <div className="projectsContentCards">
              <h2>{project.title}</h2>
              <br />
              <p>{project.description}</p>
              <br />
              <p>
                <em>
                  <b>Compétences :</b> {project.skills}
                </em>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
