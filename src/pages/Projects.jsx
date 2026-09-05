import { Link } from "react-router-dom";
import ArrowLink from "../components/ArrowLink";
import { projects } from "../data/projects";

function Projects() {
  return (
    <main className="projects-page">

      {/* INTRO */}

      <section className="projects-page-intro">

        <div className="projects-page-label">
          <span>01</span>
          <span>Selected Projects</span>
        </div>

        <div className="projects-page-heading">
          <h1>
            Spaces
            <br />
            <em>with intention.</em>
          </h1>

          <p>
            A collection of residential and hospitality
            interiors shaped around light, material,
            proportion and everyday living.
          </p>
        </div>

      </section>


      {/* PROJECT LIST */}

      <section className="projects-page-list">

        {projects.map((project, index) => (
          <article
            className={`project-card project-card-${index + 1}`}
            key={project.number}
          >

            <Link
              to={`/projects/${project.number}`}
              className="project-card-image"
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-card-overlay" />

              <div className="project-card-number">
                {project.number}
              </div>

              <div className="project-card-view">
                View Project
              </div>

            </Link>


            <div className="project-card-info">

              <div>
                <span className="project-card-category">
                  {project.category}
                </span>

                <h2>{project.title}</h2>
              </div>

              <div className="project-card-meta">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>

            </div>

          </article>
        ))}

      </section>


      {/* FOOTER LINE */}

      <div className="projects-page-bottom">

        <span>
          Five spaces / One design language
        </span>

        <ArrowLink to="/contact" className="projects-page-bottom-link">
          Start a Project
        </ArrowLink>

      </div>

    </main>
  );
}

export default Projects;
