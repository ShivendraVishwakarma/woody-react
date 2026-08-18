import { useState } from "react";

const testimonials = [
  {
    quote:
      "The space feels like it was designed specifically for us. Every detail feels intentional without ever feeling overdone.",
    name: "Aarav & Meera",
    project: "Private Residence",
    location: "New Delhi",
  },
  {
    quote:
      "Woody understood how we wanted the home to feel before we even knew how to describe it. The result is calm, warm, and completely ours.",
    name: "Rohan Kapoor",
    project: "Contemporary Residence",
    location: "Mumbai",
  },
  {
    quote:
      "From the first concept to the final styling, the entire process felt considered. The finished space exceeded what we imagined.",
    name: "Ananya Sharma",
    project: "Minimal Residence",
    location: "Bangalore",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  return (
    <section className="testimonials">

      {/* HEADER */}

      <div className="testimonials-header">

        <div className="testimonials-label">
          <span>05</span>
          <span>Client Notes</span>
        </div>

        <span className="testimonials-count">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonials.length).padStart(2, "0")}
        </span>

      </div>


      {/* TESTIMONIAL */}

      <div
        className="testimonial-content"
        key={currentIndex}
      >

        <div className="testimonial-mark">
          "
        </div>

        <blockquote>
          {testimonial.quote}
        </blockquote>

        <div className="testimonial-details">

          <div>

            <span className="testimonial-name">
              - {testimonial.name}
            </span>

            <span className="testimonial-project">
              {testimonial.project}
            </span>

          </div>

          <span className="testimonial-location">
            {testimonial.location}
          </span>

        </div>

      </div>


      {/* FOOTER */}

      <div className="testimonials-footer">

        <span>
          A few words from the people
          we have had the pleasure of designing for.
        </span>

        <button
          type="button"
          className="testimonial-next"
          onClick={nextTestimonial}
          aria-label="View next testimonial"
        >
          Next
          <span>Next</span>
        </button>

      </div>

    </section>
  );
}

export default Testimonials;
