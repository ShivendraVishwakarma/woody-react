import ArrowLink from "./ArrowLink";

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

        <ArrowLink
          to="/contact"
          className="consultation-cta-link"
          variant="outline"
        >
          Begin a project
        </ArrowLink>

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
