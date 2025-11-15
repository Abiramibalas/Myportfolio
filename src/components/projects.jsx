import React from 'react';

const projects = [
  {
    title: 'Air Quality Prediction System',
    link: 'https://github.com/Abiramibalas/sky-forecast-hub',  // 🔗 your project link
    tech: ['Python', 'Machine Learning', 'Flask', 'React', 'Scikit-learn'],
    points: [
      'Developed predictive model for Air Quality Index (AQI) forecasting',
      'Real-time analysis of environmental parameters (temperature, humidity, PM2.5, PM10)',
      'Interactive dashboard for 5-year AQI projections based on historical trends',
      'Implemented time series forecasting with 85% accuracy rate',
      'User-friendly interface for parameter input and visualization of predictions'
    ]
  },
  {
    title: 'Wedding Hall Booking Website',
    link: 'https://github.com/Abiramibalas/weddinghall_booking',
    tech: ['Django', 'HTML', 'CSS', 'Bootstrap', 'MySQL'],
    points: [
      'Responsive web app for hall booking with user authentication',
      'Admin dashboard for managing halls, bookings, and feedback',
      'Tested CRUD operations for reliable database performance'
    ]
  },
  {
    title: 'Matrimony Bot',
    link: 'https://github.com/Abiramibalas/Matrimonial_bot',
    tech: ['NLP', 'MongoDB'],
    points: [
      'Intelligent chatbot for matchmaking conversations',
      'Secure profile and chat history storage with MongoDB',
      'Personalized match recommendations based on compatibility'
    ]
  },
  {
    title: 'Chatbot Like ChatGPT',
    link: 'https://github.com/Abiramibalas/NavyBot',
    tech: ['RAG', 'React'],
    points: [
      'Conversational AI bot using Retrieval-Augmented Generation',
      'Context-aware query handling for accurate responses',
      'Responsive frontend UI for real-time interaction'
    ]
  },
  {
    title: 'Women’s Safety System',
    link: 'https://github.com/Abiramibalas/shegaurd',
    tech: ['Python', 'AWS'],
    points: [
      'Real-time gender detection and threat analysis',
      'SOS dashboard with live monitoring and alerts',
      'Cloud deployment on AWS for scalability'
    ]
  },
  {
    title: 'Sprintfit Investment App',
    link: 'https://github.com/Abiramibalas/ThesprintFit',
    tech: ['React Native', 'Firebase', 'Mutual Funds API'],
    points: [
      'Goal-based investment app for SIP and lump sum mutual fund planning',
      'Personalized fund recommendations using quant models and MorningStar data',
      'Secure user authentication and investment tracking via Firebase',
      'Clean mobile-first UI optimized for iPhone users',
      'Transparent fee structure with user-controlled investment decisions'
    ]
  },
  {
    title: 'Gdeveloper – Groundwater Awareness Game',
    link: 'https://github.com/Abiramibalas',
    tech: ['Unity', 'C#', 'Gamification', 'Environmental Education'],
    points: [
      'Interactive educational game designed to teach students about groundwater conservation',
      'Scenario-based gameplay with real-life challenges like drought, contamination, and recharge',
      'Players earn points by making sustainable water management decisions',
      'Uses gamification and adaptive difficulty to engage school-age learners',
      'Promotes awareness of water scarcity and environmental responsibility through play'
    ]
  }
];

const Project = () => {
  return (
    <section className="py-5 bg-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container">
        <h2 className="text-center mb-4 text-gradient fw-bold" style={{ fontSize: '2.5rem' }}>
          Projects
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
          {projects.map((proj, index) => (
            <div className="col-md-6 col-lg-4 mb-4 fade-in" key={index}>
              <div className="card h-100 glass-card border-0 gradient-border">
                <div className="card-body">
                  {/* 🔗 Clickable title */}
                  <h5 className="card-title fw-semibold">
                    <a 
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                      style={{ textDecoration: 'none' }}
                    >
                      {proj.title}
                    </a>
                  </h5>

                  <div className="mb-3">
                    {proj.tech.map((tech, i) => (
                      <span key={i} className="badge tech-badge me-2 mb-2">
                        <i className="bi bi-cpu me-1"></i>{tech}
                      </span>
                    ))}
                  </div>

                  <ul className="ps-3" style={{ color: '#555' }}>
                    {proj.points.map((point, i) => (
                      <li key={i} className="mb-2" style={{ fontSize: '0.95rem' }}>{point}</li>
                    ))}
                  </ul>
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

        .tech-badge {
          background: linear-gradient(to right, #6c757d, #adb5bd);
          color: #fff;
          font-size: 0.75rem;
          padding: 0.4em 0.6em;
          border-radius: 0.5rem;
          transition: transform 0.2s ease;
          cursor: default;
        }

        .tech-badge:hover {
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

export default Project;