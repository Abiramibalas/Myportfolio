import React from 'react';

const Resume = () => {
  return (
    <section className="py-5 bg-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-gradient fw-bold" style={{ fontSize: '2.5rem' }}>
          My Resume
        </h2>
        <div className="text-center mb-5">
          <span className="d-inline-block" style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #007bff, #00c6ff)',
            borderRadius: '2px'
          }}></span>
        </div>

        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 fade-in">
            <div className="glass-card mb-4 p-4 shadow-sm">
              <h5 className="text-primary fw-semibold">Contact</h5>
              <p><strong>Name:</strong> Abirami B</p>
              <p><strong>Phone:</strong> 8220898893</p>
              <p><strong>Email:</strong> abiramiabirami48351@gmail.com</p>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-decoration-none text-primary fw-medium">LinkedIn</a>
                <a href="#" className="text-decoration-none text-primary fw-medium">GitHub</a>
              </div>
            </div>

            <div className="glass-card mb-4 p-4 shadow-sm">
              <h5 className="text-primary fw-semibold">Education</h5>
              <ul className="ps-3" style={{ color: '#555' }}>
                <li><strong>A.V.C College of Engineering</strong>, Mayiladuthurai
                  <br />B.Tech in Information Technology (2022–2026), CGPA: 8.1/10.0</li>
                <li><strong>Raj Matriculation Hr. Sec. School</strong>, Mayiladuthurai
                  <br />HSC (2022), CGPA: 7.55/10.0
                  <br />SSLC (2020), CGPA: 7.8/10.0</li>
              </ul>
            </div>

            <div className="glass-card mb-4 p-4 shadow-sm">
              <h5 className="text-primary fw-semibold">Internships</h5>
              <ul className="ps-3" style={{ color: '#555' }}>
                <li>Annular Technologies – AI/ML and deployment practices</li>
                <li>Corizo – Web development with project-based learning</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 fade-in">
            <div className="glass-card mb-4 p-4 shadow-sm">
              <h5 className="text-primary fw-semibold">Projects</h5>
              <ul className="ps-3" style={{ color: '#555' }}>
                <li><strong>Wedding Hall</strong> – Booking and scheduling system</li>
                <li><strong>Women’s Safety Telebot</strong> – Real-time alert bot</li>
                <li><strong>Groundwater Game (GDevelop)</strong> – Water conservation game</li>
                <li><strong>ChatGPT-like Chatbot</strong> – NLP-based conversational AI</li>
                <li><strong>Matrimonial Bot</strong> – Matchmaking assistant</li>
                <li><strong>SprintFit</strong> – Investment app for tracking and managing financial plans</li>
                <li><strong>Air Quality Prediction</strong> – Location-based AQI forecasts and alerts </li>
              </ul>
            </div>

            <div className="glass-card mb-4 p-4 shadow-sm">
              <h5 className="text-primary fw-semibold">Certifications</h5>
              <ul className="ps-3" style={{ color: '#555' }}>
                <ul>
                  <li>TANSAM Hackathon 2025 – 3rd Prize among 100+ teams</li>
                  <li>Smart India Hackathon (SIH 2024) – Represented College</li>
                  <li>Infosys Certified Trainee – Successfully completed training conducted by ICT Academy</li>
                  <li>Represented College in National-Level Symposium – Showcased innovative project ideas</li>
                  <li>Completed 30-Day Masterclass in Data Analytics – Hands-on training on tools and techniques</li>
                  <li>Edunet Foundation Training Program – Completed industry-relevant skill development course</li>
                  <li>Industrial Visit at IBM, Coimbatore – Organized via Naan Mudhalvan initiative</li>
                </ul>

              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-card {
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.15);
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

export default Resume;