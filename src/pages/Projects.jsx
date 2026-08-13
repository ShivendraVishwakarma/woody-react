import { Link } from "react-router-dom";

import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";
import project04 from "../assets/images/Projects/project-04.jpg";
import project05 from "../assets/images/Projects/project-05.jpg";

const projects = [
  {
    number: "01",
    title: "Casa Verde",
    category: "Residential",
    location: "New Delhi",
    year: "2026",
    image: project01,
  },
  {
    number: "02",
    title: "The Courtyard House",
    category: "Residential",
    location: "Gurugram",
    year: "2026",
    image: project02,
  },
  {
    number: "03",
    title: "No. 17",
    category: "Hospitality",
    location: "Mumbai",
    year: "2025",
    image: project03,
  },
  {
    number: "04",
    title: "The Quiet Residence",
    category: "Residential",
    location: "Bangalore",
    year: "2025",
    image: project04,
  },
  {
    number: "05",
    title: "Material House",
    category: "Interior",
    location: "New Delhi",
    year: "2025",
    image: project05,
  },
];

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
                <span>↗</span>
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
          Five spaces · One design language
        </span>

        <Link to="/contact">
          Start a Project
          <span>↗</span>
        </Link>

      </div>

    </main>
  );
}

export default Projects;