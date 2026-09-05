import ArrowLink from "./ArrowLink";

function ConsultationCTA() {
  return (
    <section id="contact" className="consultation-cta">

      <div className="consultation-cta-top">
        <span>08</span>
        <span>Start a Project</span>
      </div>

      <div className="consultation-cta-content">

        <h2>
          Planning a new space? Let's make it work beautifully.
        </h2>

        <p>
          Tell us whether you are building, renovating or ready to make better
          use of your home. We will help you find the right next step.
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
