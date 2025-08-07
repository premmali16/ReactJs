import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    if (!username || !password) {
      setError('Username and Password are required');
    } else {
      setError('');
      alert(`Login successful ${username}`);
      navigate('/dashboard', { state: { username } });
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container" style={{ position: 'relative' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            color: '#fff',
            cursor: 'pointer',
            zIndex: 2
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-center mb-4 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group mb-3">
            <label htmlFor="username" className="text-white">Username:</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="text-white">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
