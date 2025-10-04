import { Link } from "react-router-dom";
import './Home.css';
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5 hero">
        <div className="container hero-overlay">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Student Management System</h1>
              <p className="lead mb-4">
                Efficiently manage student records, track academic progress, and streamline educational administration with our comprehensive platform.
              </p>
              <div className="d-flex gap-3">
                <Link to="/students" className="btn btn-light btn-lg">
                  View Students
                </Link>
                <Link to="/add" className="btn btn-outline-light btn-lg">
                  Add Student
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="text-center">
                <i className="fas fa-graduation-cap display-1 text-warning"></i>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold">Key Features</h2>
              <p className="lead text-muted">Everything you need to manage students effectively</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-users text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title">Student Records</h5>
                  <p className="card-text text-muted">Maintain comprehensive student profiles with personal and academic information.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-chart-line text-success fs-3"></i>
                  </div>
                  <h5 className="card-title">Analytics</h5>
                  <p className="card-text text-muted">Track student performance and generate insightful reports for better decision making.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                    <i className="fas fa-cogs text-warning fs-3"></i>
                  </div>
                  <h5 className="card-title">Easy Management</h5>
                  <p className="card-text text-muted">Simple and intuitive interface for adding, editing, and organizing student data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="display-5 fw-bold">Available Courses</h2>
              <p className="lead text-muted">Comprehensive educational programs for all levels</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">10th Grade</h5>
                  <p className="card-text">Foundation courses covering core subjects including Mathematics, Science, English, and Social Studies.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Mathematics</li>
                    <li><i className="fas fa-check text-success me-2"></i>Science</li>
                    <li><i className="fas fa-check text-success me-2"></i>English</li>
                    <li><i className="fas fa-check text-success me-2"></i>Social Studies</li>
                  </ul>
                  <Link to="/course/10th" className="btn btn-primary mt-3">
                    <i className="fas fa-info-circle me-2"></i>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">11th Grade</h5>
                  <p className="card-text">Advanced courses preparing students for higher education with specialized subject tracks.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Physics</li>
                    <li><i className="fas fa-check text-success me-2"></i>Chemistry</li>
                    <li><i className="fas fa-check text-success me-2"></i>Biology</li>
                    <li><i className="fas fa-check text-success me-2"></i>Mathematics</li>
                  </ul>
                  <Link to="/course/11th" className="btn btn-primary mt-3">
                    <i className="fas fa-info-circle me-2"></i>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title text-primary">12th Grade</h5>
                  <p className="card-text">Final year preparation with intensive study programs for board examinations.</p>
                  <ul className="list-unstyled">
                    <li><i className="fas fa-check text-success me-2"></i>Advanced Physics</li>
                    <li><i className="fas fa-check text-success me-2"></i>Advanced Chemistry</li>
                    <li><i className="fas fa-check text-success me-2"></i>Advanced Biology</li>
                    <li><i className="fas fa-check text-success me-2"></i>Advanced Mathematics</li>
                  </ul>
                  <Link to="/course/12th" className="btn btn-primary mt-3">
                    <i className="fas fa-info-circle me-2"></i>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">About Our System</h2>
              <p className="lead mb-4">
                Our Student Management System is designed to simplify educational administration and enhance the learning experience for both students and educators.
              </p>
              <p className="mb-4">
                With modern technology and user-friendly interfaces, we provide comprehensive tools for managing student records, tracking academic progress, and generating detailed reports.
              </p>
              <div className="row text-center">
                <div className="col-4">
                  <h3 className="text-primary fw-bold">500+</h3>
                  <p className="text-muted">Students</p>
                </div>
                <div className="col-4">
                  <h3 className="text-primary fw-bold">50+</h3>
                  <p className="text-muted">Teachers</p>
                </div>
                <div className="col-4">
                  <h3 className="text-primary fw-bold">10+</h3>
                  <p className="text-muted">Years</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-primary bg-opacity-10 rounded p-4">
                <h4 className="text-primary mb-3">Why Choose Us?</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>User-friendly interface</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Real-time data updates</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Secure data management</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>24/7 technical support</li>
                  <li className="mb-2"><i className="fas fa-star text-warning me-2"></i>Mobile responsive design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <h5 className="text-primary mb-3">Student Management System</h5>
              <p className="text-light">
                Empowering educational institutions with modern technology for efficient student record management and academic administration.
              </p>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="text-primary mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
                <li><Link to="/students" className="text-light text-decoration-none">Student List</Link></li>
                <li><Link to="/add" className="text-light text-decoration-none">Add Student</Link></li>
                <li><Link to="/login" className="text-light text-decoration-none">Login</Link></li>
              </ul>
            </div>
            <div className="col-lg-4 mb-4">
              <h5 className="text-primary mb-3">Contact Info</h5>
              <ul className="list-unstyled text-light">
                <li><i className="fas fa-envelope me-2"></i>info@studentmanagement.com</li>
                <li><i className="fas fa-phone me-2"></i>+1 (555) 123-4567</li>
                <li><i className="fas fa-map-marker-alt me-2"></i>123 Education Street, Learning City</li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2024 Student Management System. All rights reserved.</p>
            </div>
          
          </div>
        </div>
      </footer>
    </div>
  );
}
