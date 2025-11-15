import React from 'react';

const internships = [
  {
    company: 'Annular Technologies',
    role: 'AI/ML Intern',
    image: '/Annular.jpg'
  },
  {
    company: 'Corizo',
    role: 'Web Development Intern',
    image: '/Corizo.jpg'
  },
  {
    company: 'Smart India Hackathon (SIH 2024)',
    role: 'Tech Innovation Participant',
    image: '/SmartHack.jpg'
  },
  {
    company: 'TANSAM Hackathon 2025',
    role: 'Finalist (3rd Prize)',
    image: '/tansam.jpg'
  },
  {
    company: 'Infosys',
    role: 'Certificate (Training)',
    image: '/infosys.jpg'
  }
];

const Internship = () => {
  return (
    <section className="py-5 bg-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container">
        {/* Section Title */}
        <h2 className="text-center mb-4 text-gradient fw-bold" style={{ fontSize: '2.5rem' }}>
          Internships & Hackathons
        </h2>
        <div className="text-center mb-5">
          <span className="d-inline-block" style={{
            width: '80px',
            height: '4px',
            background: 'linear-gradient(to right, #007bff, #00c6ff)',
            borderRadius: '2px'
          }}></span>
        </div>

        {/* Internship Cards */}
        <div className="row justify-content-center">
          {internships.map((intern, index) => (
            <div className="col-md-6 col-lg-5 mb-4 fade-in" key={index}>
              <div className="card h-100 glass-card gradient-border border-0 shadow-sm">
                <img
                  src={intern.image}
                  alt={intern.company}
                  className="card-img-top"
                  style={{
                    height: '250px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary fw-semibold">{intern.company}</h5>
                  <div className="role-badge d-inline-flex align-items-center justify-content-center mt-2">
                    <i className="bi bi-cpu me-2"></i>
                    <span>{intern.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #007bff, #00c6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .glass-card {
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .gradient-border {
          border: 2px solid transparent;
          border-radius: 18px;
          background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #007bff, #00c6ff);
          background-origin: border-box;
          background-clip: content-box, border-box;
        }

        .role-badge {
          background: linear-gradient(to right, #6c757d, #adb5bd);
          color: #fff;
          font-size: 0.85rem;
          padding: 0.4em 0.8em;
          border-radius: 50px;
          font-weight: 500;
          transition: transform 0.2s ease;
        }

        .role-badge:hover {
          transform: scale(1.05);
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

export default Internship;