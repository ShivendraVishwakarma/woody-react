import { Link } from "react-router-dom";

function ConsultationCTA() {
  return (
    <section className="consultation-cta">

      <div className="consultation-cta-top">
        <span>06</span>
        <span>Start a Project</span>
      </div>

      <div className="consultation-cta-content">

        <h2>
          Ready to create
          <br />
          <em>something considered?</em>
        </h2>

        <p>
          Tell us about your space, your ideas, and what you
          want it to become. Let's start a conversation.
        </p>

        <Link
          to="/contact"
          className="consultation-cta-link"
        >
          Begin a project
          <span>↗</span>
        </Link>

      </div>

      <div className="consultation-cta-bottom">

        <span>
          Interior Architecture & Design
        </span>

        <span>
          New Delhi · India
        </span>

      </div>

    </section>
  );
}

export default ConsultationCTA;