const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understanding the people, place and possibilities behind every project.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Translating ideas into a clear visual and spatial direction.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Developing materials, details, furniture and architecture into one language.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Working closely through execution to make sure the original idea survives every detail.",
  },
];

export function HomepagePhilosophy() {
  return (
    <section className="home-philosophy">
      <div className="home-philosophy-label">
        <span>04</span>
        <span>Our Philosophy</span>
      </div>

      <div className="home-philosophy-content">
        <h2>Good design should feel natural.</h2>

        <p>
          We believe the best interiors don't simply look beautiful; they work
          beautifully. Our approach combines thoughtful planning, honest
          materials and restrained detailing to create spaces that remain
          relevant long after the first impression.
        </p>
      </div>
    </section>
  );
}

export function HomepageProcess() {
  return (
    <section className="home-process">
      <div className="home-process-header">
        <div className="home-process-label">
          <span>06</span>
          <span>Our Process</span>
        </div>

        <h2>A clear process. A considered result.</h2>
      </div>

      <div className="home-process-list">
        {processSteps.map((step) => (
          <article key={step.number} className="home-process-step">
            <span>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
