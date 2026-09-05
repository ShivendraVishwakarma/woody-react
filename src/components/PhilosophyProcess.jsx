const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your home, routine, budget and project goals before we draw a line.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We establish the layout, mood, materials and priorities that guide the project.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We develop drawings, furniture, lighting and specifications ready for execution.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We coordinate the final stages so the finished home matches the design direction.",
  },
];

export function HomepagePhilosophy() {
  return (
    <section id="philosophy" className="home-philosophy">
      <div className="home-philosophy-label">
        <span>04</span>
        <span>Our Philosophy</span>
      </div>

      <div className="home-philosophy-content">
        <h2>Beautiful spaces should work beautifully.</h2>

        <p>
          We begin with the practical questions: how people move, store,
          gather and rest. The result is a home that feels calm because the
          planning, materials and details are doing their job.
        </p>
      </div>
    </section>
  );
}

export function HomepageProcess() {
  return (
    <section id="process" className="home-process">
      <div className="home-process-header">
        <div className="home-process-label">
          <span>06</span>
          <span>Our Process</span>
        </div>

        <h2>From first brief to final installation.</h2>
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
