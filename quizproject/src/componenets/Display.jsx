import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Display.css';
import './Navbar.css';

const Display = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-main-bg">
      <div className="hero-spotlight-bg" aria-hidden="true"></div>
      <div className="hero-badge fade-in-up" style={{animationDelay: '0.1s'}}>
        <span role="img" aria-label="trophy">🏆</span> Join 10,000+ learners
      </div>
      <div className='herosection'>
      <div className="hero-content">
        <h1 className="hero-title fade-in-up" style={{animationDelay: '0.2s'}}>
          Master Your <br />
          <span className="hero-title-highlight">Knowledge</span>
        </h1>
        <p className="hero-subtitle fade-in-up" style={{animationDelay: '0.3s'}}>
          Challenge yourself with interactive quizzes designed by experts. <br />
          Learn, compete, and grow with our comprehensive knowledge platform.
        </p>
        <div className="hero-btn-group fade-in-up" style={{animationDelay: '0.4s'}}>
          <button className="hero-main-btn hero-btn-yellow hero-btn-pulse" onClick={() => navigate('/quizType')}>
            <span role="img" aria-label="play">▶️</span> Start Quiz
          </button>
         
        </div>
      </div>
       <div className="navbar-title logot" tabIndex={0} aria-label="QuizMaster Home" onClick={() => navigate('/')}> 
        <span className="navbar-logo" role="img" aria-label="Quiz Logo logotext">🧠</span>
        <span className="navbar-title-text logotext">QuizMaster</span>
      </div>
      </div>
    </section>
  );
};

export default Display;