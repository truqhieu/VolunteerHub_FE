import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo & Newsletter */}
        <div className="footer__section newsletter-section">
          <div className="footer__logo">
            <img src="/logo.png" alt="Logo" className="logo-image" />
            <span>VolunteerHub</span>
          </div>
          <div className="footer__newsletter">
            <h3 className="footer__heading">Join Our Newsletter</h3>
            <p className="footer__subtext">
              Tips, resources, and events delivered monthly.
            </p>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />
              <button type="submit" className="footer__button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Our Software */}
        <div className="footer__section">
          <h3 className="footer__heading">Our Software</h3>
          <ul className="footer__list">
            {[
              "Volunteer Impact",
              "Donor Impact",
              "Client Impact",
              "Member Impact",
            ].map((item) => (
              <li key={item} className="footer__list-item">
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer__section">
          <h3 className="footer__heading">We're Here to Help!</h3>
          <ul className="footer__list">
            {["Support", "Accessibility", "Contact Us", "System Status"].map(
              (item) => (
                <li key={item} className="footer__list-item">
                  <a href="#">{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__legal">
          <span className="footer__copyright">© 2025 VolunteerHub Inc.</span>
          <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
