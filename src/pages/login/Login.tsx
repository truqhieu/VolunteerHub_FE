import React from 'react';
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="loginPage">
      <img src="/logo-remove-bg.png" alt="Logo" className="logo" />
      <div className="loginBox">
        <h2>Sign in</h2>
        <button className="socialButton">
          <img src="/google-icon.png" alt="Google" />
          Continue with Google
        </button>
        <div className="divider"><span>or</span></div>
        <input type="text" placeholder="Email or phone" className="input" />
        <div className="passwordWrapper">
          <input type="password" placeholder="Password" className="input" />
          <span className="showLink">Show</span>
        </div>
        <a href="#" className="forgot">Forgot password?</a>
        <div className="checkboxWrapper">
          <input type="checkbox" id="keepLoggedIn" />
          <label htmlFor="keepLoggedIn">Keep me logged in</label>
        </div>
        <button className="signInButton">Sign in</button>
        <p className="joinNow">
          New to VolunteerHub Ha Tinh? <a href="/register">Register now</a>
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

export default Login;
