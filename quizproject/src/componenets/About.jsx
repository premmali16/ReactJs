import React from 'react'
import './About.css';
import { FaInfoCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id='about' className="about-section-container">
      <div className="about-decorative-element element-1"></div>
      <div className="about-decorative-element element-2"></div>
      <div className="about-content-wrapper">
        <h2 className="about-title">
          About <br />
          <span className="about-title-highlight">QuizMaster</span>
        </h2>
        <p className="about-subtitle">
          Your ultimate platform for engaging quizzes and interactive learning experiences.
        </p>
        <p className="about-description">
          QuizMaster is designed to make learning fun and accessible for everyone. Dive into a wide range of topics, challenge your friends, and track your progress as you climb the global leaderboards. Our mission is to provide an immersive and enjoyable way to expand your knowledge.
        </p>
        <button className="about-cta-btn">
          <FaInfoCircle className="me-2" />
          Learn More
        </button>
      </div>
    </section>
  )
}

export default About