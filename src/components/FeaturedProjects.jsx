import { Link } from "react-router-dom";
import { featuredProjects } from "../data/projects";

function FeaturedProjects() {
  return (
    <section id="projects" className="featured-projects">

      {/* HEADER */}

      <header className="projects-heading">

        <div className="projects-heading-top">
          <span className="section-number">02</span>
          <span className="section-label">
            Selected Projects
          </span>
        </div>

        <h2>
          Residential interiors planned for real life.
        </h2>

        <p>
          A selection of homes where space planning, materials and everyday use
          come together in one clear design direction.
        </p>

      </header>


      {/* PROJECT LIST */}

      <div className="projects-editorial">

        {featuredProjects.map((project, index) => (
          <article
            className={`editorial-project editorial-project-${index + 1}`}
            key={project.number}
          >

            {/* IMAGE */}

            <Link
              to={`/projects/${project.number}`}
              className="editorial-project-image"
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="editorial-project-shade" />

              <span className="editorial-project-number">
                {project.number}
              </span>

              <span className="editorial-project-view">
                View project
              </span>

            </Link>


            {/* INFORMATION */}

            <div className="editorial-project-info">

              <div className="editorial-project-title-wrap">

                <span className="editorial-project-category">
                  {project.type} / {project.location}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

              </div>

              <div className="editorial-project-meta">

                <span>
                  {project.category}
                </span>

                <span>
                  {project.year}
                </span>

                <Link
                  to={`/projects/${project.number}`}
                  className="editorial-project-cta"
                >
                  View Project
                </Link>

              </div>

            </div>

          </article>
        ))}

      </div>


    </section>
  );
}

export default FeaturedProjects;
