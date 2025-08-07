import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Card from './Card'
import './QuizType.css'
import { useNavigate } from 'react-router-dom';

const QuizType = () => {
  const navigate = useNavigate();
 const quizzes = [
  { title: "JavaScript Basics", content: "Test your JS fundamentals!" },
  { title: "React Mastery", content: "How well do you know React?" },
  { title: "CSS Styling", content: "Flex your CSS design skills." },
  { title: "Web APIs", content: "Explore browser-based APIs and usage." },
  { title: "HTML Semantics", content: "Understand the structure of web pages." },
  { title: "Frontend Tools", content: "Quiz on popular frontend libraries and tools." }
];


  const handlePlay = (quizTitle) => {
    const topic = quizTitle.toLowerCase().replace(/\s+/g, '-');
    // console.log(topic);
    navigate(`/quiz/${topic}`);
  };

  return (
    <>
      <Navbar />
      <div className='quiz-card-grid'>
        {quizzes.map((quiz, idx) => (
          <Card
            key={idx}
            title={quiz.title}
            content={quiz.content}
            onPlay={() => handlePlay(quiz.title)}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default QuizType