import React, { useState } from "react";
import "./Register.css";
import { registerUser } from "../../apis/register";

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    date_of_birth: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const errors: string[] = [];

    if (!formData.fullName.trim()) errors.push("Full Name is required");
    if (!formData.email.trim()) errors.push("Email is required");
    if (!formData.phone.trim()) errors.push("Phone number is required");
    if (!formData.date_of_birth) errors.push("Date of birth is required");
    if (!formData.password.trim()) errors.push("Password is required");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.push("Please enter a valid email address");
    }

    // Phone validation (basic)
    const phoneRegex = /^\d{10,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      errors.push("Please enter a valid phone number");
    }

    if (errors.length > 0) {
      alert("Please fix the following errors:\n" + errors.join("\n"));
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create a clean data object matching backend expectations
      const submitData = {
        email: formData.email.trim(),
        password: formData.password,
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        date_of_birth: formData.date_of_birth,
      };

      console.log("Registering with:", submitData);

      const response = await registerUser(submitData);
      alert(
        response.message || "Registration successful. Please verify email."
      );

      // Reset form on success
      setFormData({
        email: "",
        password: "",
        fullName: "",
        phone: "",
        date_of_birth: "",
      });
    } catch (err: any) {
      alert(err.message || "Error during registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="registerPage">
      <img src="/logo-remove-bg.png" alt="Logo" className="logo" />
      <div className="loginBox">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="input"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date_of_birth"
          className="input"
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        />
        <div className="passwordWrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span
            className="showLink"
            style={{ cursor: "pointer" }}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
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

        <button
          className="signInButton"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Agree & Join"}
        </button>

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
