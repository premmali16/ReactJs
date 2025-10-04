import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import StudentList from "./components/StudentList";
import StudentForm from "./components/StudentForm";
import StudentDetails from "./components/StudentDetails";
import CourseDetails from "./components/CourseDetails";
import StudentClass from "./components/studentClass";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentList />} />
        {/* <Route path="/studentclass" element={<StudentClass />} /> */}
         <Route path="/studentclass/:courseId" element={<StudentClass />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentDetails />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
