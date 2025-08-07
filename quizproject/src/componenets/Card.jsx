import React from 'react'
import './QuizType.css';

const Card = ({ title, content, onPlay }) => {
  return (
    <div className='quiz-card'>
      <h2 className='quiz-card-title'>{title}</h2>
      <p className='quiz-card-content'>{content}</p>
      <button className='quiz-card-btn' onClick={onPlay}>
        <span role="img" aria-label="play">▶️</span> Play Quiz
      </button>
    </div>
  )
}

export default Card