import ArrowLink from "./ArrowLink";

function ConsultationCTA() {
  return (
    <section className="consultation-cta">

      <div className="consultation-cta-top">
        <span>08</span>
        <span>Start a Project</span>
      </div>

      <div className="consultation-cta-content">

        <h2>
          Planning a new space? Let's create something that feels like yours.
        </h2>

        <p>
          Whether you're building a new home, renovating an existing space or
          simply looking for the right design direction, we'd love to hear
          about your project.
        </p>

        <div className="consultation-cta-actions">
          <ArrowLink
            to="/contact"
            className="consultation-cta-link"
            variant="outline"
          >
            Start Your Project
          </ArrowLink>

          <ArrowLink
            to="/contact"
            className="consultation-cta-secondary"
          >
            Book a Consultation
          </ArrowLink>
        </div>

      </div>

      <div className="consultation-cta-bottom">

        <span>
          Interior Architecture & Design
        </span>

        <span>
          New Delhi / India
        </span>

      </div>

    </section>
  );
}

export default ConsultationCTA;
