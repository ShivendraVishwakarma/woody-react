import { Link, useParams } from "react-router-dom";

import project01 from "../assets/images/projects/project-01.jpg";
import project02 from "../assets/images/projects/project-02.jpg";
import project03 from "../assets/images/projects/project-03.jpg";
import project04 from "../assets/images/projects/project-04.jpg";
import project05 from "../assets/images/projects/project-05.jpg";

const projects = {
  "01": {
    title: "Casa Verde",
    category: "Residential",
    location: "New Delhi",
    year: "2026",
    description:
      "A warm residential interior shaped around natural light, tactile materials and quiet moments of everyday living.",
    image: project01,
  },

  "02": {
    title: "The Courtyard House",
    category: "Residential",
    location: "Gurugram",
    year: "2026",
    description:
      "A contemporary home where architecture, landscape and interior spaces come together through a restrained material palette.",
    image: project02,
  },

  "03": {
    title: "No. 17",
    category: "Hospitality",
    location: "Mumbai",
    year: "2025",
    description:
      "An intimate hospitality space designed around atmosphere, proportion and carefully controlled light.",
    image: project03,
  },

  "04": {
    title: "The Quiet Residence",
    category: "Residential",
    location: "Bangalore",
    year: "2025",
    description:
      "A calm residential environment built around soft textures, natural materials and understated architectural details.",
    image: project04,
  },

  "05": {
    title: "Material House",
    category: "Interior",
    location: "New Delhi",
    year: "2025",
    description:
      "An exploration of material, texture and form where every element has been considered as part of a cohesive interior language.",
    image: project05,
  },
};

function ProjectDetails() {
  const { id } = useParams();

  const project = projects[id];

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>

        <Link to="/projects">
          Back to Projects ↗
        </Link>
      </main>
    );
  }

  const projectNumber = Number(id);

  const nextId =
    projectNumber === 5
      ? "01"
      : String(projectNumber + 1).padStart(2, "0");

  const nextProject = projects[nextId];

  return (
    <main className="project-details">

      {/* HERO */}

      <section className="project-details-hero">

        <div className="project-details-hero-image">
          <img
            src={project.image}
            alt={project.title}
          />

          <div className="project-details-overlay" />

          <div className="project-details-number">
            {id}
          </div>

        </div>

        <div className="project-details-title">

          <span>
            {project.category}
          </span>

          <h1>
            {project.title}
          </h1>

        </div>

      </section>


      {/* INFORMATION */}

      <section className="project-details-info">

        <div className="project-details-label">
          Project Information
        </div>

        <div className="project-details-description">
          <p>
            {project.description}
          </p>
        </div>

        <div className="project-details-meta">

          <div>
            <span>Location</span>
            <strong>{project.location}</strong>
          </div>

          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>

          <div>
            <span>Type</span>
            <strong>{project.category}</strong>
          </div>

        </div>

      </section>


      {/* IMAGE */}

      <section className="project-details-large-image">

        <img
          src={project.image}
          alt={`${project.title} interior`}
        />

      </section>


      {/* PROJECT STATEMENT */}

      <section className="project-details-statement">

        <span>Design Approach</span>

        <h2>
          Every space begins
          <br />
          with <em>intention.</em>
        </h2>

      </section>


      {/* NEXT PROJECT */}

      <section className="project-details-next">

        <span>Next Project</span>

        <Link to={`/projects/${nextId}`}>

          <h2>
            {nextProject.title}
          </h2>

          <div>
            View Project
            <span>↗</span>
          </div>

        </Link>

      </section>


      {/* BACK TO PROJECTS */}

      <div className="project-details-back">

        <Link to="/projects">
          ← All Projects
        </Link>

      </div>

    </main>
  );
}

export default ProjectDetails;