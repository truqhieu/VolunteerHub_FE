import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

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
          <span className="logo-text">
            VolunteerHub
            <br />
            <span>Hà Tĩnh</span>
          </span>
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
              Giải Pháp
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
                  Quản Lý Tình Nguyện Viên
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("donor-management")}
                >
                  Quản Lý Nhà Tài Trợ
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("campaign-management")}
                >
                  Quản Lý Chiến Dịch
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleNavClick("reporting-certification")}
                >
                  Báo Cáo & Chứng Chỉ
                </button>
              </div>
            )}
          </div>

          {/* Regular Navigation Links */}
          <Link to="/features" className="nav-link">
            Tính Năng
          </Link>
          <Link to="/about-us" className="nav-link">
            Về Chúng Tôi
          </Link>
          <Link to="/forum" className="nav-link">
            Diễn Đàn
          </Link>
          <Link to="/login" className="nav-link">
            Đăng Nhập
          </Link>

          {/* Contact Us Button */}
          <button
            className="contact-btn"
            onClick={() => handleNavClick("contact")}
            type="button"
          >
            Liên Hệ ngay
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
