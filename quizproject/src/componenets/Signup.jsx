import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError('All fields are required');
    } else {
      setError('');
      alert(`Signup successful for ${username}`);
      // Navigate to login or dashboard after signup
      navigate('/login', { state: { username, email } });
    }
  };

  return (
    <div className="signup-container">
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
        <h2 className="text-center mb-4 text-white">Sign Up</h2>
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
              required
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="email" className="text-white">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
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
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
