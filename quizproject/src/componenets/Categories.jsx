import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaHistory, FaRocket, FaUsers, FaStar, FaTrophy, FaLightbulb, FaJs, FaArrowRight } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import './Categories.css';
import { useNavigate } from "react-router-dom";

// Icon mapping based on title
const iconMap = {
  "HTML": FaHtml5 ,
  "CSS": FaCss3Alt,
  "BOOTSTRAP": FaBootstrap,
  "C++": FaHistory,
  "JAVASCRIPT": IoLogoJavascript,
  "REACT JS": FaReact,
  "NODE JS": FaNodeJs,
  "MONGO DB": SiMongodb,
};

// const categories = [
//   {
//     title: "HTML",
//     description: "Test your awareness of current events and general facts",
//     icon: FaHtml5,
//   },
//   {
//     title: "CSS",
//     description: "Explore physics, chemistry, biology, and modern tech css",
//     icon: FaCss3Alt,
//   },
//   {
//     title: "BOOTSTRAP",
//     description: "Discover countries, capitals, and world geography",
//     icon: FaBootstrap,
//   },
//   {
//     title: "C++",
//     description: "Journey through time with historical events and cultures",
//     icon: FaHistory,
//   },
//   {
//     title: "JAVASCRIPT",
//     description: "Master coding concepts and software development",
//     icon: FaJs,
//   },
//   {
//     title: "REACT JS",
//     description: "Explore classic literature, poetry, and artistic movements",
//     icon: FaReact,
//   },
// ];
 const categories = [
  { title: "JavaScript Basics", description: "Test your JS fundamentals!" ,  icon: FaJs,},
  { title: "React Mastery", description: "How well do you know React?",icon: FaReact, },
  { title: "CSS Styling", description: "Flex your CSS design skills.",icon: FaCss3Alt, },
  { title: "Web APIs", description: "Explore browser-based APIs and usage.", icon: FaHistory, },
  { title: "HTML Semantics", description: "Understand the structure of web pages.",  icon: FaHtml5, },
  { title: "Frontend Tools", description: "Quiz on popular frontend libraries and tools.", icon: FaBootstrap, }
];



const Categories = () => {
  const navigate = useNavigate();
    const handlePlay = (quizTitle) => {
    const topic = quizTitle.toLowerCase().replace(/\s+/g, '-');
    // console.log(topic);
    navigate(`/quiz/${topic}`);
    // confirm box yes or no
     let ans=confirm(`Are you sure you want to start the quiz on ${quizTitle}?`)
    if (ans === true) {
      navigate(`/quiz/${topic}`);
    }
    else{
      // alert("Quiz cancelled");
      navigate(`/`)
    }
  }
  const handleExploreAll = () => {
    navigate('/quizType');
  }
  return (
    <section id='categories' className="categories-section">
      {/* Background decorative elements */}
      <div className="decorative-circle circle-1"></div>
      <div className="decorative-circle circle-2"></div>
      <div className="decorative-circle circle-3"></div>
      
      <div className="container-fluid position-relative text-center">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="header-badge">
            <FaRocket className="me-2" />
            Explore Categories
          </div>
          <h2 className="header-title">
            Choose Your
            <span className="header-title-highlight">
              Learning Path
            </span>
          </h2>
          <p className="header-subtitle">
            Dive into our comprehensive collection of quizzes designed to challenge and educate across various domains
          </p>
        </div>

        {/* Categories Grid */}
        <div className="row g-4 justify-content-center">
          {categories.map((cat, index) => {
            const IconComponent = cat.icon || FaStar; // Fallback to FaStar if no icon is specified
            return (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="category-card">
                  
                  {/* Icon with glow effect */}
                  <div className="card-icon-wrapper">
                    <IconComponent className="card-icon" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="card-title">
                    {cat.title}
                  </h3>
                  <p className="card-description">
                    {cat.description}
                  </p>
                  
                  {/* Arrow button */}
                  <div className="card-arrow-btn" onClick={() => (handlePlay(cat.title))}>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5  ">
          <button className="explore-all-btn" onClick={handleExploreAll}>
            <FaRocket className="me-2" />
            Explore All Categories
          </button>
        </div>
        
        {/* Bottom stats */}
        <div className="stats-section">
          <div className="stat-item">
            <FaTrophy className="stat-icon" />
            <div className="stat-value">{categories.length}</div>
            <div className="stat-label">Categories Available</div>
          </div>
          <div className="stat-item">
            <FaStar className="stat-icon" />
            <div className="stat-value">1,260+</div>
            <div className="stat-label">Total Questions</div>
          </div>
          <div className="stat-item">
            <FaUsers className="stat-icon" />
            <div className="stat-value">110K+</div>
            <div className="stat-label">Active Participants</div>
          </div>
          <div className="stat-item">
            <FaLightbulb className="stat-icon" />
            <div className="stat-value">95%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
