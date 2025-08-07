import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Quiz.css';
import Display  from './Display';
// Example questions for each topic
const QUESTIONS = {
  'javascript-basics': [
    { q: 'What keyword is used to declare a variable in JavaScript?', options: ['var', 'int', 'float', 'def'], answer: 'var' },
    { q: 'Which of the following is a JavaScript data type?', options: ['String', 'Integer', 'Character', 'Decimal'], answer: 'String' },
    { q: 'What symbol is used for comments in JavaScript?', options: ['#', '//', '<!--', '**'], answer: '//' },
    { q: 'What will `typeof null` return?', options: ['"null"', '"object"', '"undefined"', '"number"'], answer: '"object"' },
    { q: 'What does NaN stand for?', options: ['Not a Number', 'Null and None', 'New and Next', 'None at Name'], answer: 'Not a Number' },
    { q: 'Which method is used to convert a string to a number?', options: ['parseFloat()', 'toString()', 'join()', 'split()'], answer: 'parseFloat()' },
    { q: 'What is the result of 2 + "2" in JavaScript?', options: ['4', '"22"', 'NaN', 'undefined'], answer: '"22"' },
    { q: 'Which company developed JavaScript?', options: ['Microsoft', 'Sun Microsystems', 'Netscape', 'IBM'], answer: 'Netscape' },
    { q: 'Which operator is used for strict equality?', options: ['==', '!=', '===', '<>'], answer: '===' },
    { q: 'Which method adds an item to the end of an array?', options: ['push()', 'pop()', 'shift()', 'slice()'], answer: 'push()' },
  ],
  'react-mastery': [
    { q: 'What is the command to create a new React app?', options: ['npx create-react-app', 'npm install react', 'create-react', 'react-new'], answer: 'npx create-react-app' },
    { q: 'What hook is used to manage state in functional components?', options: ['useRef', 'useEffect', 'useState', 'useContext'], answer: 'useState' },
    { q: 'What is JSX?', options: ['JavaScript XML', 'JSON Syntax', 'Java Syntax Extension', 'React compiler'], answer: 'JavaScript XML' },
    { q: 'What does useEffect hook do?', options: ['Manage styles', 'Handle lifecycle events', 'Manage routes', 'Render HTML'], answer: 'Handle lifecycle events' },
    { q: 'Which method is used to pass data to child components?', options: ['state', 'props', 'hooks', 'context'], answer: 'props' },
    { q: 'React is mainly used for?', options: ['Styling websites', 'Building databases', 'Building user interfaces', 'Server-side routing'], answer: 'Building user interfaces' },
    { q: 'What is a React Fragment?', options: ['A routing tool', 'A wrapper without extra nodes', 'A data fetcher', 'An animation library'], answer: 'A wrapper without extra nodes' },
    { q: 'Which hook gives access to context values?', options: ['useEffect', 'useMemo', 'useContext', 'useReducer'], answer: 'useContext' },
    { q: 'Which file typically renders the root component?', options: ['App.jsx', 'Main.js', 'Index.js', 'Root.jsx'], answer: 'Index.js' },
    { q: 'React was developed by which company?', options: ['Google', 'Microsoft', 'Facebook', 'Amazon'], answer: 'Facebook' },
  ],
  'css-styling': [
    { q: 'Which property changes the text color?', options: ['color', 'font-color', 'text-color', 'style'], answer: 'color' },
    { q: 'How do you make text bold in CSS?', options: ['font-weight: bold', 'text-bold: true', 'bold()', 'font: bold'], answer: 'font-weight: bold' },
    { q: 'Which unit is relative to the root font-size?', options: ['em', '%', 'rem', 'px'], answer: 'rem' },
    { q: 'What does flexbox help with?', options: ['Grid layout', 'Responsive typography', 'One-dimensional layout', 'Color themes'], answer: 'One-dimensional layout' },
    { q: 'Which CSS property controls spacing inside an element?', options: ['margin', 'padding', 'border', 'outline'], answer: 'padding' },
    { q: 'What is the default position of an HTML element?', options: ['static', 'relative', 'absolute', 'fixed'], answer: 'static' },
    { q: 'How do you select an element with ID "header"?', options: ['#header', '.header', '$header', '*header'], answer: '#header' },
    { q: 'Which property is used to center content with Flexbox?', options: ['align-items', 'justify-content', 'center', 'display'], answer: 'justify-content' },
    { q: 'What does z-index control?', options: ['Opacity', 'Stacking order', 'Font size', 'Grid flow'], answer: 'Stacking order' },
    { q: 'What property makes a website responsive?', options: ['media queries', 'flex-wrap', 'hover', 'padding'], answer: 'media queries' },
  ],
  'web-apis': [
    { q: 'Which API is used to store data in the browser?', options: ['Fetch API', 'LocalStorage API', 'DOM API', 'Canvas API'], answer: 'LocalStorage API' },
    { q: 'What does the Fetch API return?', options: ['Promise', 'Array', 'String', 'Object'], answer: 'Promise' },
    { q: 'Which API lets you draw graphics via JavaScript?', options: ['Canvas API', 'Web Audio API', 'Storage API', 'Geolocation API'], answer: 'Canvas API' },
    { q: 'How do you get a user’s location in JS?', options: ['window.loc()', 'navigator.location()', 'navigator.geolocation', 'getUserLocation()'], answer: 'navigator.geolocation' },
    { q: 'Which method stores data in sessionStorage?', options: ['sessionStorage.save()', 'setItem()', 'store()', 'session.save()'], answer: 'setItem()' },
    { q: 'Which method reads a cookie value in JS?', options: ['document.getCookie()', 'document.cookie', 'cookie.read()', 'read.cookie()'], answer: 'document.cookie' },
    { q: 'Which API is used to manipulate the DOM?', options: ['DOM API', 'Fetch API', 'Canvas API', 'REST API'], answer: 'DOM API' },
    { q: 'Which API helps in sending HTTP requests?', options: ['Fetch API', 'Canvas API', 'Storage API', 'DOM API'], answer: 'Fetch API' },
    { q: 'Which API is used for media playback?', options: ['Media API', 'Audio API', 'Web Audio API', 'Stream API'], answer: 'Web Audio API' },
    { q: 'What is a common HTTP method for fetching data?', options: ['GET', 'POST', 'PUT', 'DELETE'], answer: 'GET' },
  ],
  'html-semantics': [
    { q: 'Which tag defines the main content of a page?', options: ['<main>', '<body>', '<section>', '<article>'], answer: '<main>' },
    { q: 'Which tag is used for navigation links?', options: ['<nav>', '<link>', '<a>', '<menu>'], answer: '<nav>' },
    { q: 'Which tag represents an independent piece of content?', options: ['<div>', '<section>', '<article>', '<aside>'], answer: '<article>' },
    { q: 'What tag groups introductory content?', options: ['<intro>', '<head>', '<header>', '<lead>'], answer: '<header>' },
    { q: 'Which tag is used for side content?', options: ['<aside>', '<extra>', '<left>', '<sidebar>'], answer: '<aside>' },
    { q: 'What tag contains information about the document?', options: ['<meta>', '<head>', '<header>', '<info>'], answer: '<head>' },
    { q: 'Which tag is used to mark emphasized text?', options: ['<b>', '<em>', '<strong>', '<highlight>'], answer: '<em>' },
    { q: 'What tag creates a line break?', options: ['<hr>', '<br>', '<line>', '<lb>'], answer: '<br>' },
    { q: 'Which tag defines a table row?', options: ['<row>', '<tr>', '<td>', '<th>'], answer: '<tr>' },
    { q: 'Which tag represents the footer of a document?', options: ['<foot>', '<end>', '<footer>', '<bottom>'], answer: '<footer>' },
  ],
  'frontend-tools': [
    { q: 'Which tool is used to bundle JavaScript files?', options: ['Webpack', 'Babel', 'NPM', 'Node'], answer: 'Webpack' },
    { q: 'Which tool compiles modern JS to older versions?', options: ['Babel', 'Sass', 'Vite', 'ESLint'], answer: 'Babel' },
    { q: 'What is the purpose of ESLint?', options: ['Linting code', 'Bundling', 'Testing', 'Transpiling'], answer: 'Linting code' },
    { q: 'Which tool provides a fast development server?', options: ['Vite', 'React', 'Redux', 'Parcel'], answer: 'Vite' },
    { q: 'What is Tailwind CSS?', options: ['Utility-first CSS framework', 'JavaScript library', 'HTML compiler', 'Debug tool'], answer: 'Utility-first CSS framework' },
    { q: 'Which command installs packages via npm?', options: ['npm install', 'npm start', 'npm run', 'npm test'], answer: 'npm install' },
    { q: 'Which file lists all dependencies in a project?', options: ['package.json', 'index.js', 'webpack.config.js', 'README.md'], answer: 'package.json' },
    { q: 'Which tool runs unit tests?', options: ['Jest', 'Parcel', 'Rollup', 'Sass'], answer: 'Jest' },
    { q: 'What tool is used for CSS pre-processing?', options: ['Sass', 'Babel', 'PostCSS', 'Rollup'], answer: 'Sass' },
    { q: 'Which command runs a React app in dev mode?', options: ['npm start', 'npm run dev', 'npm install', 'npx react-app'], answer: 'npm start' },
  ],
};


const Quiz = () => {
  const { topic } = useParams();
  const navigate = useNavigate();
  const questions = QUESTIONS[topic] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(10);
    
  const sendData = (e) => {
    // e.preventDefault();

    // navigate('./Display', { state: { score } });
    navigate('/quiztype');
  };

  useEffect(() => {

    if (showResult === true){
        return;
    }

    setTimer(10); // Reset timer for each question
    const interval = setInterval(() => {
      setTimer( (prev) => {
        // console.log(prev);
        if (prev === 1) {
          clearInterval(interval);
          handleTimeout();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [current, showResult]);

  const handleTimeout = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="quiz-no-topic">
        <h2>No quiz found for this topic.</h2>
        <button className="quiz-btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  if (showResult === true) {
    return (
      <div className="quiz-result">
        <h2>Quiz Complete!</h2>
        <p>Your Score: {score} / {questions.length}</p>
        <button className="quiz-btn" onClick={sendData}>Back to Quiz Types</button>

      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h2 className="quiz-question-count">Question {current + 1} of {questions.length}</h2>
      <div className={`quiz-timer ${timer <= 4 ? ' quiz-timer-warning' : ''}`}>Time Left: {timer} sec</div>
      <p className="quiz-question">{questions[current].q}</p>
      <div className="quiz-options">
        {questions[current].options.map((option, idx) => (
          <button
            key={idx}
            className="quiz-option-btn"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
