import { Link } from "react-router-dom";
import ArrowLink from "./ArrowLink";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Complete interior design solutions tailored to your lifestyle, space and aesthetic.",
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Layouts developed around movement, functionality, natural light and everyday living.",
  },
  {
    number: "03",
    title: "Material Selection & Styling",
    description:
      "A carefully selected palette of materials, furniture, lighting and finishes that brings the design together.",
  },
  {
    number: "04",
    title: "Design Consultation",
    description:
      "Focused design guidance for clients who need direction, refinement or solutions for a specific space.",
  },
];

function Services({ page = false }) {
  return (
    <section id="services" className="services">

      {/* HEADER */}

      <div className="services-header">

        <div className="services-label">
          <span>03</span>
          <span>What We Do</span>
        </div>

        <div className="services-heading-copy">
          {page ? (
            <h1>
              From the first idea to the final detail.
            </h1>
          ) : (
            <h2>
              From the first idea to the final detail.
            </h2>
          )}

          <p>
            We provide a complete interior design service, creating considered
            spaces from initial concept through design development and
            execution.
          </p>
        </div>

      </div>


      {/* SERVICES */}

      <div className="services-list">

        {services.map((service) => (
          <Link
            to="/contact"
            className="service-item"
            key={service.number}
          >

            <span className="service-number">
              {service.number}
            </span>

            <div className="service-main">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

            <span
              className="service-arrow"
              aria-hidden="true"
            >
              Explore
            </span>

          </Link>
        ))}

      </div>


      {/* FOOTER */}

      <div className="services-footer">

        <span>
          Our approach is rooted in clarity,
          restraint, and attention to detail.
        </span>

        <ArrowLink to="/contact" className="services-footer-link">
          Start a project
        </ArrowLink>

      </div>

    </section>
  );
}

export default Services;
