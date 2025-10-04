import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, deleteStudent } from "../redux/studentSlice";
import { Link, useParams } from "react-router-dom";

export default function StudentList() {
  const { list, status, error } = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const [sortKey, setSortKey] = useState("name");
  const [filterClass, setFilterClass] = useState("");
  const { courseId } = useParams(); // 👈 get class from route

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  let filteredList = [...list];

  // Pre-filter by courseId if available
  if (courseId) {
    filteredList = filteredList.filter((s) => s.class === courseId);
  }

  // Additional filtering from dropdown
  if (filterClass) {
    filteredList = filteredList.filter((s) => s.class === filterClass);
  }

  // Sorting
  filteredList.sort((a, b) => {
    if (sortKey === "roll") return a.roll.localeCompare(b.roll);
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container mt-3">
      <h2>Students {courseId ? `- Class ${courseId}` : ""}</h2>

      {/* Controls */}
      <div className="d-flex mb-3">
        <select
          className="form-select w-auto me-2"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="roll">Sort by Roll</option>
        </select>
        <select
          className="form-select w-auto"
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
        >
          <option value="">All Classes</option>
          <option value="10th">10th</option>
          <option value="11th">11th</option>
          <option value="12th">12th</option>
        </select>
      </div>

      {/* Status Messages */}
      {status === "loading" && (
        <div className="alert alert-info">Loading students...</div>
      )}
      {error && <div className="alert alert-danger">Error: {error}</div>}
      {status === "idle" && list.length === 0 && (
        <div className="alert alert-warning">
          No students found. Add some students!
        </div>
      )}

      {/* Table */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>sr.no</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((s, i) => (
            <tr key={s.id}>
              <td>{i + 1}</td>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.class}</td>
              <td>
                <Link
                  to={`/edit/${s.id}`}
                  className="btn btn-outline-info btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => dispatch(deleteStudent(s.id))}
                  className="btn btn-outline-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="5" className="text-muted">
              Total Students: {filteredList.length}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
