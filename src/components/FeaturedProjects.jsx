import { Link } from "react-router-dom";
import ArrowLink from "./ArrowLink";

import project01 from "../assets/images/Projects/project-01.jpg";
import project02 from "../assets/images/Projects/project-02.jpg";
import project03 from "../assets/images/Projects/project-03.jpg";

const projects = [
  {
    image: project01,
    number: "01",
    category: "Residential",
    location: "New Delhi",
    title: "Casa Verde",
    year: "2026",
    type: "Private Residence",
    description:
      "A warm contemporary residence designed around natural materials, soft textures and generous living spaces.",
  },
  {
    image: project02,
    number: "02",
    category: "Residential",
    location: "Gurugram",
    title: "The Courtyard House",
    year: "2026",
    type: "Private Residence",
    description:
      "A calm, light-filled home where considered planning and natural materials create a strong connection between indoor and outdoor spaces.",
  },
  {
    image: project03,
    number: "03",
    category: "Hospitality",
    location: "Mumbai",
    title: "No. 17",
    year: "2025",
    type: "Urban Residence",
    description:
      "A refined residential interior balancing clean architectural lines with warm materials and comfortable everyday living.",
  },
];

function FeaturedProjects() {
  return (
    <section className="featured-projects">

      {/* HEADER */}

      <header className="projects-heading">

        <div className="projects-heading-top">
          <span className="section-number">02</span>
          <span className="section-label">
            Selected Projects
          </span>
        </div>

        <h2>
          Selected interiors shaped with light, material, and care.
        </h2>

        <p>
          A concise view of recent residential projects, each shaped around
          everyday use, material warmth, and a clear design language.
        </p>

      </header>


      {/* PROJECT LIST */}

      <div className="projects-editorial">

        {projects.map((project, index) => (
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


      {/* FOOTER */}

      <div className="projects-footer">

        <span>
          03 Projects
        </span>

        <ArrowLink to="/projects" className="projects-footer-link">
          View All Projects
        </ArrowLink>

      </div>

    </section>
  );
}

export default FeaturedProjects;
