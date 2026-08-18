import ArrowLink from "./ArrowLink";

const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "Complete interior direction from initial concept through to the final detail.",
  },
  {
    number: "02",
    title: "Space Planning",
    description:
      "Thoughtful layouts that balance movement, proportion, function, and atmosphere.",
  },
  {
    number: "03",
    title: "Material & Styling",
    description:
      "A considered selection of materials, finishes, furniture, lighting, and objects.",
  },
  {
    number: "04",
    title: "Design Consultation",
    description:
      "Focused design guidance for projects that need clarity, direction, or refinement.",
  },
];

function Services() {
  return (
    <section className="services">

      {/* HEADER */}

      <div className="services-header">

        <div className="services-label">
          <span>03</span>
          <span>Expertise</span>
        </div>

        <h2>
          Thoughtful design,
          <br />
          <em>from concept to completion.</em>
        </h2>

      </div>


      {/* SERVICES */}

      <div className="services-list">

        {services.map((service) => (
          <article
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

          </article>
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
