import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const toggleHomeDropdown = () => {
    setHomeDropdownOpen((prev) => !prev);
    setDropdownOpen(false); // close other dropdown if open
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-title"
        tabIndex={0}
        aria-label="QuizMaster Home"
        onClick={() => {
          navigate('/');
          toggleHomeDropdown(); // toggle dropdown on title click
        }}
      >
        <span className="navbar-logo" role="img" aria-label="Quiz Logo">🧠</span>
        <span className="navbar-title-text">QuizMaster</span>
      </div>

      <div className="navbar-links">
        <div className="navbar-home-dropdown-container">
          <button
            onClick={toggleHomeDropdown}
            className="navbar-link home-link"
            tabIndex={0}
          >
            Home
          </button>
          <div className={`navbar-dropdown-anim-wrapper${homeDropdownOpen ? ' open' : ''}`}>
            {homeDropdownOpen && (
              <div className="navbar-dropdown">
                <a className="navbar-dropdown-link" onClick={() => navigate('/')}>Home</a>
                <a className="navbar-dropdown-link"  onClick={() => {
    const section = document.getElementById('categories');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setHomeDropdownOpen(false);
  }}>Categories</a>
                <a className="navbar-dropdown-link"  onClick={() => {
    const section = document.getElementById('about');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setHomeDropdownOpen(false);
  }}>About</a>
                <a className="navbar-dropdown-link"  onClick={() => {
    const section = document.getElementById('testimonials');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
    setHomeDropdownOpen(false);
  }}>Testimonials</a>
              </div>
            )}
          </div>
        </div>

        <a href="/quiztype" onClick={() => navigate('/quiztype')} className="navbar-link quizlink" tabIndex={0}>Quiz</a>

        <div className="navbar-plus-container">
          <button
            className="navbar-plus-btn"
            onClick={() => {
              setDropdownOpen((open) => !open);
              setHomeDropdownOpen(false); // close home dropdown
            }}
            aria-label="Open login/signup menu"
            aria-expanded={dropdownOpen}
            aria-haspopup="true"
          >
            <span className="navbar-plus-icon">+</span>
          </button>

          <div className={`navbar-dropdown-anim-wrapper${dropdownOpen ? ' open' : ''}`}>
            {dropdownOpen && (
              <div className="navbar-dropdown">
                <a href="/login" className="navbar-dropdown-link">Login</a>
                <a href="/signup" className="navbar-dropdown-link">Signup</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
