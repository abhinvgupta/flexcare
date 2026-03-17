import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand" aria-label="FlexCare home">
            <span className="brand-mark" aria-hidden="true">
              FC
            </span>
            <span className="brand-text">
              <strong>FlexCare Physio</strong>
              <small>Home Physiotherapy Services</small>
            </span>
          </Link>
          <p className="footer-note">
            Trusted physiotherapy at home with patient-first care and
            structured recovery planning.
          </p>
          <div className="social-row" aria-label="Social links placeholders">
            <span className="social-icon" aria-label="Instagram placeholder">
              IG
            </span>
            <span className="social-icon" aria-label="Facebook placeholder">
              FB
            </span>
            <span className="social-icon" aria-label="LinkedIn placeholder">
              IN
            </span>
          </div>
        </div>

        <div>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/contact">Book Now</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Contact Details</h3>
          <ul className="footer-list">
            <li>Phone: +91 98XX XXX XXX</li>
            <li>Email: care@flexcarephysio.in</li>
            <li>Address: 2nd Floor, Wellness Plaza, Bengaluru</li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Service Areas</h3>
          <ul className="footer-list">
            <li>Bengaluru</li>
            <li>Hyderabad</li>
            <li>Chennai</li>
            <li>Pune</li>
            <li>Delhi NCR</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Copyright {year} FlexCare Physio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
