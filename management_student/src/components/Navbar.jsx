import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
          <i className="fas fa-graduation-cap me-2"></i>
          Student Management
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students" onClick={closeNavbar}>Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add" onClick={closeNavbar}>Add Student</Link>
            </li> */}
          </ul>
          
          <div className="d-flex flex-column flex-lg-row">
            {isAuthenticated ? (
              <button 
                className="btn btn-outline-light mt-2 mt-lg-0" 
                onClick={() => {
                  dispatch(logout());
                  closeNavbar();
                }}
              >
                
                Logout
              </button>
            ) : (
              <>
                <Link 
                  className="btn btn-outline-light me-2 mt-2 mt-lg-0" 
                  to="/login"
                  onClick={closeNavbar}
                >
                 
                  Login
                </Link>
                <Link 
                  className="btn btn-outline-light me-2 mt-2 mt-lg-0" 
                  to="/signup"
                  onClick={closeNavbar}
                >
                
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
