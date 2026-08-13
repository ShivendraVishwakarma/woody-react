import { Link } from "react-router-dom";

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
  },
  {
    image: project02,
    number: "02",
    category: "Residential",
    location: "Gurugram",
    title: "The Courtyard House",
    year: "2026",
  },
  {
    image: project03,
    number: "03",
    category: "Hospitality",
    location: "Mumbai",
    title: "No. 17",
    year: "2025",
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
            Selected Work
          </span>
        </div>

        <h2>
          Spaces shaped by
          <br />
          <em>light, material & intention.</em>
        </h2>

        <p>
          A curated selection of residences and spaces
          created through a considered balance of architecture,
          atmosphere, and detail.
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
                <span>↗</span>
              </span>

            </Link>


            {/* INFORMATION */}

            <div className="editorial-project-info">

              <div className="editorial-project-title-wrap">

                <span className="editorial-project-category">
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

              </div>

              <div className="editorial-project-meta">

                <span>
                  {project.location}
                </span>

                <span>
                  {project.year}
                </span>

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

        <Link to="/projects">
          Explore all work
          <span>↗</span>
        </Link>

      </div>

    </section>
  );
}

export default FeaturedProjects;