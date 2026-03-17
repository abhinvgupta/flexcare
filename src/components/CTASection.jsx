import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="section final-cta">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-copy">
            <p className="cta-eyebrow">Ready to Begin?</p>
            <h2>Start Your Recovery at Home</h2>
            <p>
              Book your home physiotherapy session today and get a structured
              treatment plan tailored to your recovery goals.
            </p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary cta-primary">
              Book Now
            </Link>
            <p className="cta-note">Mon-Sun 7:00 AM to 9:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
