function Testimonials() {
  return (
    <section className="testimonials">

      {/* HEADER */}

      <div className="testimonials-header">

        <div className="testimonials-label">
          <span>07</span>
          <span>Client Stories</span>
        </div>

        <span className="testimonials-count">
          01 / 01
        </span>

      </div>


      {/* TESTIMONIAL */}

      <div
        className="testimonial-content"
      >

        <div className="testimonial-mark">
          "
        </div>

        <blockquote>
          The team understood how we wanted to live and translated that into a
          home that feels completely ours. Every detail feels intentional
          without ever feeling overdone.
        </blockquote>

        <div className="testimonial-details">

          <div>

            <span className="testimonial-name">
              - Client
            </span>

            <span className="testimonial-project">
              Private Residence
            </span>

          </div>

          <span className="testimonial-location">Residential Interior</span>

        </div>

      </div>


      {/* FOOTER */}

      <div className="testimonials-footer">

        <span>
          A few words from the people
          we have had the pleasure of designing for.
        </span>

        <span className="testimonial-note">Intentional / Personal / Refined</span>

      </div>

    </section>
  );
}

export default Testimonials;
