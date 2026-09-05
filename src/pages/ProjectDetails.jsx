import { Link, useParams } from "react-router-dom";
import ArrowLink from "../components/ArrowLink";
import { getNextProject, getProject } from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = getProject(id);

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Project not found.</h1>

        <Link to="/projects">
          Back to Projects
        </Link>
      </main>
    );
  }

  const nextProject = getNextProject(id);

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
            {project.detail}
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

        <Link to={`/projects/${nextProject.number}`}>

          <h2>
            {nextProject.title}
          </h2>

          <div>
            View Project
          </div>

        </Link>

      </section>


      {/* BACK TO PROJECTS */}

      <div className="project-details-back">

        <ArrowLink to="/projects" className="project-details-back-link">
          All Projects
        </ArrowLink>

      </div>

    </main>
  );
}

export default ProjectDetails;
