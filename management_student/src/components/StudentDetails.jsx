
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent, fetchStudents } from "../redux/studentSlice";
import { useParams, useNavigate } from "react-router-dom";

export default function StudentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.students);
  
  // Fix: Compare string IDs, not parseInt
  const student = list.find((s) => s.id === id);
  
  const [form, setForm] = useState({ name: "", roll: "", class: "" });

  useEffect(() => {
    // Always fetch students first
    dispatch(fetchStudents());
  }, [dispatch]);

  // Update form when student data loads
  useEffect(() => {
    if (student) {
      setForm({
        name: student.name || "",
        roll: student.roll || "",
        class: student.class || ""
      });
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (student) {
      dispatch(updateStudent({ ...form, id: student.id }));
      navigate("/");
    }
  };

  if (!student) {
    return (
      <div className="container mt-3">
        <h2>Edit Student</h2>
        <div className="alert alert-info">Loading student data...</div>
      </div>
    );
  }

  return (
    <div className="container mt-3">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            className="form-control" 
            placeholder="Enter name"
            value={form.name} 
            onChange={(e) => setForm({ ...form, name: e.target.value })} 
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input 
            className="form-control" 
            placeholder="Enter roll number"
            value={form.roll} 
            onChange={(e) => setForm({ ...form, roll: e.target.value })} 
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Class</label>
          <input 
            className="form-control" 
            placeholder="Enter class"
            value={form.class} 
            onChange={(e) => setForm({ ...form, class: e.target.value })} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary me-2">Update Student</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
}

