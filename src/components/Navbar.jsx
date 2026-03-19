import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-wrap">
      <div className="container navbar">
        <Link
          to="/"
          className="brand"
          aria-label="FlexCare home page"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/logo2.png"
            alt=""
            className="brand-logo"
            aria-hidden="true"
          />
          <span className="brand-text">
            <strong>FlexCare Physio</strong>
            <small>Home Physiotherapy Services</small>
          </span>
        </Link>

        <button
          type="button"
          className={`menu-toggle${menuOpen ? " open" : ""}`}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-nav"
          className={`nav-links${menuOpen ? " open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="btn btn-primary nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
