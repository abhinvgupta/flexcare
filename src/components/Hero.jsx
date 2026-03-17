import { Link } from "react-router-dom";

const heroImage = "/head2.png";

function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src={heroImage}
        alt="Physiotherapist helping a patient with guided movement at home"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow hero-eyebrow">Trusted Home Physiotherapy Care</p>
        <h1 id="hero-title">Physiotherapy at Home</h1>
        <p>
          Expert physiotherapy care delivered to your doorstep with personalised
          treatment plans.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Book Now
          </Link>
          <a href="#services" className="btn btn-ghost">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
