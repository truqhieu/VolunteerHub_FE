import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (): void => {
    setIsDropdownOpen(false);
  };

  const handleNavClick = (section: string): void => {
    console.log(`Navigating to ${section}`);
    // Add your navigation logic here
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-image" />
          <span className="logo-text">VolunteerHub</span>
        </div>

        {/* Navigation Section */}
        <nav className="navigation">
          {/* Solutions Dropdown */}
          <div className="nav-item dropdown" onMouseLeave={closeDropdown}>
            <button
              className="nav-link dropdown-toggle"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
              type="button"
            >
              Solutions
              <span
                className={`dropdown-arrow ${isDropdownOpen ? "open" : ""}`}
              >
                ▼
              </span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("volunteer-management")}
                >
                  Volunteer Management
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("volunteer-management")}
                >
                  Volunteer Management
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("donor-management")}
                >
                  Donor Management
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("campaign-management")}
                >
                  Campaign Management
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("reporting-certification")}
                >
                  Reporting & Certification
                </button>
              </div>
            )}
          </div>

          {/* Regular Navigation Links */}
          <Link to="/features" className="nav-link">
            Features
          </Link>
          <Link to="/about-us" className="nav-link">
            About Us
          </Link>
          <Link to="/forum" className="nav-link">
            Forum
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>

          {/* Contact Us Button */}
          <button
            className="contact-btn"
            onClick={() => handleNavClick("contact")}
            type="button"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
