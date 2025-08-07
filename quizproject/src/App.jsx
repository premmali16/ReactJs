import './App.css'
import Login from './componenets/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './componenets/Dashboard';
import QuizType from './componenets/QuizType';
import Quiz from './componenets/Quiz';
import Signup from './componenets/Signup';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/quiztype" element={<QuizType />} />
      <Route path="/quiz/:topic" element={<Quiz />} />
    </Routes>
    </>
  )
}

export default App
