import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">

      <section className="contact-split">

        {/* LEFT SIDE */}

        <div className="contact-intro">

          <div className="contact-intro-top">
            <span>01</span>
            <span>Start a Conversation</span>
          </div>

          <div className="contact-intro-main">

            <h1>
              Let's create
              <br />
              <em>something meaningful.</em>
            </h1>

            <p>
              Tell us about your space, your ideas,
              and what you're looking to create.
            </p>

          </div>

          <div className="contact-intro-bottom">

            <div>
              <span>Studio</span>

              <p>
                New Delhi
                <br />
                India
              </p>
            </div>


            <div>
              <span>Email</span>

              <a href="mailto:hello@woody.studio">
                hello@woody.studio
              </a>
            </div>


            <div>
              <span>Follow</span>

              <div className="contact-socials">

                <span>
                  Instagram
                </span>

                <span>
                  LinkedIn
                </span>

              </div>
            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="contact-form-side">

          <div className="contact-form-heading">

            <span>
              Project Inquiry
            </span>

            <span>
              {submitted ? "Received" : "01 — 05"}
            </span>

          </div>


          {submitted ? (

            /* SUCCESS STATE */

            <div className="contact-success">

              <span>
                Inquiry received.
              </span>

              <h2>
                Thank you.
                <br />
                <em>We'll be in touch.</em>
              </h2>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
              >
                Send another inquiry ↗
              </button>

            </div>

          ) : (

            /* FORM */

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* 01 — NAME */}

              <div className="contact-field">

                <label htmlFor="name">
                  <span>01</span>
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />

              </div>


              {/* 02 — EMAIL */}

              <div className="contact-field">

                <label htmlFor="email">
                  <span>02</span>
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

              </div>


              {/* 03 — PROJECT TYPE */}

              <div className="contact-field">

                <label htmlFor="projectType">
                  <span>03</span>
                  Project Type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Select project type
                  </option>

                  <option value="residential">
                    Residential
                  </option>

                  <option value="hospitality">
                    Hospitality
                  </option>

                  <option value="commercial">
                    Commercial
                  </option>

                  <option value="renovation">
                    Renovation
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>


              {/* 04 — BUDGET */}

              <div className="contact-field">

                <label htmlFor="budget">
                  <span>04</span>
                  Budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  defaultValue=""
                  required
                >

                  <option value="" disabled>
                    Select budget range
                  </option>

                  <option value="under-25">
                    Under ₹25 Lakhs
                  </option>

                  <option value="25-50">
                    ₹25–50 Lakhs
                  </option>

                  <option value="50-1cr">
                    ₹50 Lakhs–1 Crore
                  </option>

                  <option value="1cr-plus">
                    ₹1 Crore+
                  </option>

                </select>

              </div>


              {/* 05 — MESSAGE */}

              <div className="contact-field contact-field-message">

                <label htmlFor="message">
                  <span>05</span>
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />

              </div>


              {/* SUBMIT */}

              <div className="contact-submit">

                <button type="submit">

                  <span>
                    Send Inquiry
                  </span>

                  <span>
                    ↗
                  </span>

                </button>

              </div>

            </form>

          )}

        </div>

      </section>


      {/* BOTTOM LINK */}

      <div className="contact-explore">

        <span>
          Not ready to start?
        </span>

        <Link to="/projects">
          Explore our work
          <span>↗</span>
        </Link>

      </div>

    </main>
  );
}

export default Contact;