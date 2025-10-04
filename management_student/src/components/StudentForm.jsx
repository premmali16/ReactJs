import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/studentSlice";
import { useNavigate } from "react-router-dom";

export default function StudentForm() {
  const [form, setForm] = useState({ name: "", roll: "", class: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.roll || !form.class) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addStudent(form));
    navigate("/");
  };

  return (
    <div className="container mt-3 w-50 mt-5">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          placeholder="Roll"
          onChange={(e) => setForm({ ...form, roll: e.target.value })}
        />

        {/* Dropdown for Class */}
        <select
          className="form-control mb-3"
          value={form.class}
          onChange={(e) => setForm({ ...form, class: e.target.value })}
        >
          <option value="">-- Select Class --</option>
          <option value="10th">Class 10th</option>
          <option value="11th">Class 11th</option>
          <option value="12th">Class 12th</option>

        </select>

        <button className="btn btn-primary w-100">Add Student</button>
      </form>
    </div>
  );
}
