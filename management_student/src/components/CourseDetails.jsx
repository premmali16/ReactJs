import { useParams, Link } from "react-router-dom";

export default function CourseDetails() {
  const { courseId } = useParams();

  const courses = {
    "10th": {
      title: "10th Grade Foundation Course",
      description: "Comprehensive foundation program covering all essential subjects for secondary education completion.",
      duration: "1 Year",
      subjects: [
        {
          name: "Mathematics",
          description: "Algebra, Geometry, Trigonometry, and Statistics",
          credits: 4
        },
        {
          name: "Science",
          description: "Physics, Chemistry, Biology fundamentals",
          credits: 4
        },
        {
          name: "English",
          description: "Literature, Grammar, Composition, and Communication",
          credits: 3
        },
        {
          name: "Social Studies",
          description: "History, Geography, Civics, and Economics",
          credits: 3
        }
      ],
      requirements: [
        "Completion of 9th grade or equivalent",
        "Basic computer literacy",
        "English language proficiency"
      ],
      outcomes: [
        "Strong foundation in core subjects",
        "Critical thinking and problem-solving skills",
        "Preparation for higher education",
        "Basic research and presentation skills"
      ]
    },
    "11th": {
      title: "11th Grade Advanced Course",
      description: "Specialized program preparing students for higher education with focus on specific subject tracks.",
      duration: "1 Year",
      subjects: [
        {
          name: "Physics",
          description: "Mechanics, Thermodynamics, Waves, and Modern Physics",
          credits: 5
        },
        {
          name: "Chemistry",
          description: "Organic, Inorganic, and Physical Chemistry",
          credits: 5
        },
        {
          name: "Biology",
          description: "Cell Biology, Genetics, Ecology, and Human Physiology",
          credits: 5
        },
        {
          name: "Mathematics",
          description: "Calculus, Statistics, and Advanced Algebra",
          credits: 5
        }
      ],
      requirements: [
        "Completion of 10th grade with minimum 60% marks",
        "Strong foundation in Mathematics and Science",
        "Commitment to intensive study program"
      ],
      outcomes: [
        "Advanced knowledge in chosen subjects",
        "Research methodology and lab skills",
        "Preparation for competitive exams",
        "Independent learning capabilities"
      ]
    },
    "12th": {
      title: "12th Grade Final Year Program",
      description: "Intensive final year preparation with board examination focus and career guidance.",
      duration: "1 Year",
      subjects: [
        {
          name: "Advanced Physics",
          description: "Quantum Mechanics, Electromagnetism, and Optics",
          credits: 6
        },
        {
          name: "Advanced Chemistry",
          description: "Physical Chemistry, Organic Synthesis, and Analytical Methods",
          credits: 6
        },
        {
          name: "Advanced Biology",
          description: "Molecular Biology, Biotechnology, and Evolution",
          credits: 6
        },
        {
          name: "Advanced Mathematics",
          description: "Differential Equations, Linear Algebra, and Probability",
          credits: 6
        }
      ],
      requirements: [
        "Completion of 11th grade with minimum 70% marks",
        "Excellent performance in previous year",
        "Clear career goals and objectives"
      ],
      outcomes: [
        "Board examination excellence",
        "University admission preparation",
        "Career counseling and guidance",
        "Leadership and communication skills"
      ]
    }
  };

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>Course Not Found</h4>
          <p>The requested course could not be found.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/">Courses</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{course.title}</li>
        </ol>
      </nav>

      {/* Course Header */}
      <div className="row mb-5">
        <div className="col-12">
          <div className="card border-0 shadow">
            <div className="card-body p-5">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h1 className="display-4 fw-bold text-primary mb-3">{course.title}</h1>
                  <p className="lead text-muted mb-4">{course.description}</p>
                  <div className="d-flex gap-3 mb-4">
                    <span className="badge bg-primary fs-6">
                      <i className="fas fa-clock me-1"></i>
                      Duration: {course.duration}
                    </span>
                    <span className="badge bg-success fs-6">
                      <i className="fas fa-graduation-cap me-1"></i>
                      Grade {courseId}
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <Link to={`/studentclass/${courseId}`} className="btn btn-primary btn-lg">
                      <i className="fas fa-users me-2"></i>
                      View Students
                    </Link>
                    <Link to="/add" className="btn btn-outline-primary btn-lg">
                      <i className="fas fa-plus me-2"></i>
                      Enroll Student
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" style={{width: '150px', height: '150px'}}>
                    <i className="fas fa-book-open text-primary" style={{fontSize: '4rem'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="row">
        {/* Subjects */}
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0"><i className="fas fa-list me-2"></i>Subjects & Curriculum</h3>
            </div>
            <div className="card-body">
              <div className="row">
                {course.subjects.map((subject, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="card h-100 border-start border-primary border-4">
                      <div className="card-body">
                        <h5 className="card-title text-primary">{subject.name}</h5>
                        <p className="card-text text-muted">{subject.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="badge bg-secondary">{subject.credits} Credits</span>
                          <small className="text-muted">Core Subject</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-lg-4">
          {/* Requirements */}
          <div className="card mb-4">
            <div className="card-header bg-warning text-dark">
              <h5 className="mb-0"><i className="fas fa-clipboard-check me-2"></i>Requirements</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                {course.requirements.map((req, index) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="card mb-4">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0"><i className="fas fa-trophy me-2"></i>Learning Outcomes</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                {course.outcomes.map((outcome, index) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-star text-warning me-2"></i>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <div className="card-header bg-info text-white">
              <h5 className="mb-0"><i className="fas fa-bolt me-2"></i>Quick Actions</h5>
            </div>
            <div className="card-body">
              <div className="d-grid gap-2">
             <Link to={`/studentclass/${courseId}`} className="btn btn-primary btn-lg">
  <i className="fas fa-users me-2"></i>
  View Students
</Link>

                <Link to="/add" className="btn btn-outline-success">
                  <i className="fas fa-user-plus me-2"></i>
                  Add New Student
                </Link>
                <Link to="/" className="btn btn-outline-secondary">
                  <i className="fas fa-home me-2"></i>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
