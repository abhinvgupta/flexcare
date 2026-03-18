import { useState } from "react";
import CentreLocationSection from "../components/CentreLocationSection";
import { submitContactInquiry } from "../lib/api";
import "./ContactPage.css";

function ContactIcon({ children }) {
  return (
    <span className="contact-page__icon-shell" aria-hidden="true">
      {children}
    </span>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg">
      <path
        d="M7.2 4.5h2.5l1.1 3.8-1.5 1.5a14 14 0 0 0 4.9 4.9l1.5-1.5 3.8 1.1v2.5a1.6 1.6 0 0 1-1.8 1.6A16.8 16.8 0 0 1 5.6 6.3 1.6 1.6 0 0 1 7.2 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg">
      <path
        d="M4 6.5h16a1 1 0 0 1 1 1v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9a1 1 0 0 1 1-1Zm0 1.5 8 5.2L20 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg">
      <path
        d="M12 21s6-5.8 6-11a6 6 0 1 0-12 0c0 5.2 6 11 6 11Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

function TimeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg">
      <circle
        cx="12"
        cy="12"
        r="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.8v4.7l3.2 1.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="contact-icon-svg">
      <path
        d="M12 4.4a7.4 7.4 0 0 0-6.3 11.2L4.7 20l4.6-1a7.4 7.4 0 1 0 2.7-14.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.6 9.2c.2-.4.4-.4.7-.4h.5c.2 0 .4 0 .5.4l.5 1.2c.1.3 0 .5-.1.6l-.4.5c.4.8 1.1 1.5 1.9 1.9l.5-.4c.2-.1.4-.2.6-.1l1.2.5c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.2.4-2.3 0A8.1 8.1 0 0 1 8.8 11c-.4-1.1-.2-1.9 0-2.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState({
    loading: false,
    type: "",
    message: "",
  });

  const whatsappLink =
    "https://wa.me/919800000000?text=Hello%20FlexCare%20team%2C%20I%20would%20like%20to%20book%20a%20home%20physiotherapy%20session.";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitState({
      loading: true,
      type: "",
      message: "",
    });

    try {
      const result = await submitContactInquiry(formData);

      setSubmitState({
        loading: false,
        type: "success",
        message:
          result.message || "Your inquiry has been submitted successfully.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        message: "",
      });
    } catch (error) {
      setSubmitState({
        loading: false,
        type: "error",
        message:
          error.message ||
          "Something went wrong while sending your inquiry. Please try again.",
      });
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-page__hero">
        <div
          className="contact-page__shape contact-page__shape--one"
          aria-hidden="true"
        />
        <div
          className="contact-page__shape contact-page__shape--two"
          aria-hidden="true"
        />
        <div className="container contact-page__hero-inner">
          <div className="contact-page__intro">
            <p className="eyebrow">Contact Us</p>
            <h1>Get in Touch</h1>
            <p>
              We’re here to help you start your recovery journey. Reach out to
              schedule a physiotherapy session at home or ask any questions.
            </p>
            <div className="contact-page__details">
              <div className="contact-page__detail">
                <ContactIcon>
                  <PhoneIcon />
                </ContactIcon>
                <div>
                  <p className="contact-page__label">Phone</p>
                  <strong>+91 9008132660</strong>
                  <p>Appointments and quick support</p>
                </div>
              </div>

              <div className="contact-page__detail">
                <ContactIcon>
                  <MailIcon />
                </ContactIcon>
                <div>
                  <p className="contact-page__label">Email</p>
                  <strong>care@flexcarephysio.in</strong>
                  <p>Share your concern and preferred time</p>
                </div>
              </div>

              <div className="contact-page__detail">
                <ContactIcon>
                  <LocationIcon />
                </ContactIcon>
                <div>
                  <p className="contact-page__label">Service Area</p>
                  <strong>Delhi and Gurgaon only</strong>
                  <p>
                    Home visits and centre-based support for nearby patients
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-page__quick-actions">
              <a
                className="btn contact-page__whatsapp"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="contact-page__whatsapp-icon"
                  aria-hidden="true"
                >
                  <WhatsAppGlyph />
                </span>
                Talk on WhatsApp
              </a>
            </div>
          </div>
          <section
            className="contact-page__panel contact-page__panel--form"
            id="contact-form"
          >
            <div className="contact-page__form-header">
              <p className="contact-page__mini-label">Book a Consultation</p>
              <h2>Send Us a Message</h2>
              <p>
                Fill out this form and our care coordinator will call you
                shortly.
              </p>
            </div>

            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your area, locality, or address"
                  required
                />
              </div>

              <div className="contact-page__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitState.message ? (
                <p
                  className={`contact-page__form-message contact-page__form-message--${submitState.type}`}
                  role="status"
                >
                  {submitState.message}
                </p>
              ) : null}

              <button
                type="submit"
                className="btn btn-primary contact-page__submit"
                disabled={submitState.loading}
              >
                {submitState.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>
        </div>
      </section>

      <CentreLocationSection />

      <section className="section contact-page__info-strip">
        <div className="container contact-page__info-grid">
          <article className="contact-page__info-item">
            <ContactIcon>
              <PhoneIcon />
            </ContactIcon>
            <div>
              <h3>Call Us</h3>
              <p>Quick support phone line for new and existing patients.</p>
            </div>
          </article>

          <article className="contact-page__info-item">
            <ContactIcon>
              <LocationIcon />
            </ContactIcon>
            <div>
              <h3>Visit Area</h3>
              <p>
                Delhi NCR home physiotherapy coverage plus our Gurgaon centre.
              </p>
            </div>
          </article>

          <article className="contact-page__info-item">
            <ContactIcon>
              <TimeIcon />
            </ContactIcon>
            <div>
              <h3>Working Hours</h3>
              <p>
                Mon - Sat | 8am - 8pm for bookings and coordination support.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
