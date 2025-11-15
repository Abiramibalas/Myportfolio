import React from 'react';

const About = () => {
  const skills = [
    { label: 'Data Analysis', icon: 'bi-graph-up' },
    { label: 'Web Development', icon: 'bi-code-slash' },
    { label: 'Machine Learning', icon: 'bi-cpu' },
    { label: 'Communication & Teamwork', icon: 'bi-people' },
    { label: 'Problem Solving', icon: 'bi-lightbulb' },
    { label: 'Leadership', icon: 'bi-person-badge' },
    { label: 'Python', icon: 'bi-file-code' },
    { label: 'React', icon: 'bi-box' },
    { label: 'SQL', icon: 'bi-database' }
  ];

  return (
    <section className="about-section py-5">
      <div className="container">
        {/* Gradient Title */}
        <h2 className="text-center mb-4 text-gradient fw-bold" style={{ fontSize: '2.5rem' }}>
          About Us
        </h2>

        {/* Profile + Quote */}
        <div className="row align-items-center fade-in">
          <div className="col-md-5 text-center mb-4">
            <img src="/right.jpg" alt="Abirami" className="profile-img mb-4" />
            <div className="quote-box p-3">
              <i className="bi bi-quote text-primary fs-2"></i>
              <p className="fst-italic mb-0 text-dark">
                “I believe challenges and responsibilities shape me, and even when difficulties come, I choose to handle them with sincerity and determination.”
              </p>
            </div>
          </div>

          {/* Intro + Details */}
          <div className="col-md-7">
            <div className="glass-card p-4 shadow-sm mb-4">
              <h3 className="text-gradient fw-bold mb-3">
                Turning Data Into Knowledge
              </h3>
              <p className="fs-6 text-dark" style={{ lineHeight: '1.8' }}>
                I'm an aspiring Data Analyst and Data Science enthusiast who strives to interpret data into meaningful insights. As a fresher, I enjoy team leadership, exploration-based projects, and collaborative work. I'm passionate about analytics, visualization, and solving real-world problems.
              </p>
            </div>

            <div className="glass-card p-4 shadow-sm mb-4">
              <div className="row text-dark">
                <div className="col-6 mb-2"><strong>Birthday:</strong> 11-Jan-2005</div>
                <div className="col-6 mb-2"><strong>Age:</strong> 20</div>
                <div className="col-6 mb-2"><strong>Email:</strong> abiramiabirami48351@gmail.com</div>
                <div className="col-6 mb-2"><strong>City:</strong> Tamilnadu, India</div>
                <div className="col-6 mb-2"><strong>Degree:</strong> B.Tech IT</div>
                <div className="col-6 mb-2"><strong>Language:</strong> English, Tamil</div>
                <div className="col-12 mb-2"><strong>Interest:</strong> Web Development, Data Analyst, Machine Learning</div>
              </div>
              <p className="mt-3 fs-6 text-dark" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                I'm someone who loves exploring new technologies and solving problems by critically examining, experimenting, and creating solutions that help people. Being detail-oriented and efficient, I find success in both coding and contributing to the tech world.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="fade-in mt-5">
          <h4 className="text-center text-primary fw-bold mb-4">My Skills</h4>
          <div className="glass-card p-4 shadow-sm">
            <div className="row">
              {skills.map((skill, i) => (
                <div key={i} className="col-md-4 col-sm-6 mb-3">
                  <div className="skill-badge d-flex align-items-center p-2 rounded shadow-sm">
                    <i className={`bi ${skill.icon} text-primary fs-5 me-2`}></i>
                    <span className="fw-semibold text-dark">{skill.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .about-section {
          background: #f8f9fa;
        }

        .gradient-title {
          font-size: 2.5rem;
          background: linear-gradient(to right, #6f42c1, #007bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-line {
          width: 80px;
          height: 4px;
          background: linear-gradient(to right, #6f42c1, #007bff);
          border-radius: 2px;
        }

        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-card {
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .profile-img {
          width: 280px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .profile-img:hover {
          transform: scale(1.05);
        }

        .quote-box {
          background: rgba(255, 255, 255, 0.6);
          border-left: 4px solid #007bff;
          border-radius: 12px;
        }

        .skill-badge {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #dee2e6;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .skill-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.08);
        }

        .fade-in {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;