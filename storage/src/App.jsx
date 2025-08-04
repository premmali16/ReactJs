import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const defaultData = [
    { id: 1, firstName: "abc", lastName: "def", salary: 10000000, age:21 },
    { id: 2, firstName: "xyz", lastName: "uvw", salary: 20000, age: 20 },
    { id: 3, firstName: "pqr", lastName: "stu", salary: 400000, age: 21 },
  ];

  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("employeeData");
    try {
      const parsed = saved ? JSON.parse(saved) : null;
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch {}
    return defaultData;
  });

  const [update, setUpdate] = useState(false);
  const [id, setId] = useState(null);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    localStorage.setItem("employeeData", JSON.stringify(data));
  }, [data]);

  const handleClear = () => {
    setFname("");
    setLname("");
    setSalary("");
    setAge("");
    setUpdate(false);
    setId(null);
  };

  const validateInputs = () => {
    if (!fname || !lname || !salary || !age) {
      alert("All fields are required!");
      return false;
    }
    if (isNaN(salary) || isNaN(age)) {
      alert("Salary and Age must be numeric values!");
      return false;
    }
    return true;
  };

  const handleAdd = () => {
    if (!validateInputs()) return;

    const newId = data.length > 0 ? Math.max(...data.map((i) => i.id)) + 1 : 1;

    const newObj = {
      id: newId,
      firstName: fname,
      lastName: lname,
      salary: Number(salary),
      age: Number(age),
    };

    setData([...data, newObj]);
    handleClear();
  };

  const handleEdit = (id) => {
    const selected = data.find((item) => item.id === id);
    if (!selected) return;

    setUpdate(true);
    setId(id);
    setFname(selected.firstName);
    setLname(selected.lastName);
    setSalary(selected.salary);
    setAge(selected.age);
  };

  const handleUpdate = () => {
    if (!validateInputs()) return;

    const updatedData = data.map((item) =>
      item.id === id
        ? { ...item, firstName: fname, lastName: lname, salary: Number(salary), age: Number(age) }
        : item
    );

    setData(updatedData);
    handleClear();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this data?")) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  return (
    <div
      className="min-vh-100 py-5"
      style={{
        background: "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div className="container">
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h2 className="text-center text-primary fw-bold mb-4">
            👥 Employee Manager
          </h2>

          <div className="row g-3 mb-3">
            <div className="col-md">
              <input
                type="text"
                className="form-control rounded-3 shadow-sm"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="col-md">
              <input
                type="text"
                className="form-control rounded-3 shadow-sm"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="col-md">
              <input
                type="number"
                className="form-control rounded-3 shadow-sm"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="col-md">
              <input
                type="number"
                className="form-control rounded-3 shadow-sm"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex gap-2 justify-content-end">
            {update ? (
              <button className="btn btn-warning px-4" onClick={handleUpdate}>
                ✏️ Update
              </button>
            ) : (
              <button className="btn btn-success px-4" onClick={handleAdd}>
                ➕ Add
              </button>
            )}
            <button className="btn btn-secondary px-4" onClick={handleClear}>
              ❌ Clear
            </button>
          </div>
        </div>

        <div className="mt-4 shadow-lg rounded-4 overflow-hidden bg-white">
          <table className="table table-hover text-center mb-0">
            <thead
              style={{
                background: "linear-gradient(to right, #667eea, #764ba2)",
                color: "#fff",
              }}
            >
              <tr>
                <th>ID</th>
                <th>First</th>
                <th>Last</th>
                <th>Salary</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-muted py-3">
                    No Employee Data Available
                  </td>
                </tr>
              ) : (
                data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>₹{item.salary}</td>
                    <td>{item.age}</td>
                    <td>
                      <button
                        className="btn btn-outline-primary btn-sm me-2"
                        onClick={() => handleEdit(item.id)}
                      >
                        ✏️
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(item.id)}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
