import React from "react";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <div className="registerPage">
      <img src="/logo-remove-bg.png" alt="Logo" className="logo" />
      <div className="loginBox">
        <input type="text" placeholder="Email or phone" className="input" />
        <div className="passwordWrapper">
          <input type="password" placeholder="Password" className="input" />
          <span className="showLink">Show</span>
        </div>
        <div className="checkboxWrapper">
          <input type="checkbox" id="keepLoggedIn" defaultChecked />
          <label htmlFor="keepLoggedIn">Remember me</label>
        </div>
        <p className="agreement-text">
          By clicking Agree & Join or Continue, you agree to the VolunteerHub Ha
          Tinh&nbsp;
          <a
            href="https://www.linkedin.com/legal/user-agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="agreement-link"
          >
            User Agreement
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="agreement-link"
          >
            Privacy Policy
          </a>
          , and&nbsp;
          <a
            href="https://www.linkedin.com/legal/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="agreement-link"
          >
            Cookie Policy.
          </a>
        </p>
        <div className="divider">
          <span>or</span>
        </div>
        <button className="socialButton">
          <img src="/google-icon.png" alt="Google" />
          Continue with Google
        </button>
        <button className="signInButton">Agree & Join</button>
        <p className="joinNow">
          Already on VolunteerHub Ha Tinh? <a href="/login">Log in</a>
        </p>
      </div>
      <footer className="footer">
        <span>VolunteerHub Ha Tinh © 2025</span>
        <a href="#">User Agreement</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Community Guidelines</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Copyright Policy</a>
        <a href="#">Send Feedback</a>
        <a href="#">Language</a>
      </footer>
    </div>
  );
};

export default Register;
