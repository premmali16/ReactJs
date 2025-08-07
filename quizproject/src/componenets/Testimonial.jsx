import React from 'react'
import './Testimonial.css';
import male from '../assets/men.png';
import female from '../assets/female.png';

const testimonials = [
  {
    name: 'Amit Sharma',
    text: 'QuizMaster makes learning so much fun! The quizzes are challenging and the interface is beautiful.',
    image: male,
  },
  {
    name: 'Priya Verma',
    text: 'I love competing with my friends and seeing my name on the leaderboard. Highly recommended!',
    image: female,
  },
  {
    name: 'Rahul Singh',
    text: 'A great way to test your knowledge and learn new things every day. The design is top-notch!',
    image: male,
  },
  {
    name: 'Deepak Kumar',
    text: 'The variety of quizzes is amazing! I never get bored and always learn something new.',
    image: male,
  },
  {
    name: 'Anjali Gupta',
    text: 'User-friendly interface and engaging content. QuizMaster is my daily dose of knowledge!',
    image: female,
  },
  {
    name: 'Vikram Reddy',
    text: 'Finally, a quiz app that keeps me hooked. The animations and UI are superb!',
    image: male,
  },
];

const Testimonial = () => {
  return (
    <section id='testimonials' className="testimonial-section-container">
      <div className="testimonial-decorative-element testi-element-1"></div>
      <div className="testimonial-decorative-element testi-element-2"></div>
      <h2 className="testimonial-header">
        What Our <br />
        <span className="testimonial-header-highlight">Users Say</span>
      </h2>
      <p className="testimonial-subtitle">
        Hear from our global community of learners and how QuizMaster has transformed their learning journey.
      </p>
      <div className="testimonial-grid">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-card" style={{ '--animation-delay': `${idx * 0.1}s` }}>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author-wrapper">
              <img src={t.image} alt={t.name} className="testimonial-author-img" />
              <div className="testimonial-author">- {t.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonial