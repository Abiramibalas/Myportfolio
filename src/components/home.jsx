import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about'); // Navigates to the About page
  };

  return (
    <section
      className="d-flex flex-column align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: "url('/Left And Right.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div className="bg-white bg-opacity-75 p-4 rounded shadow">
        <h1 className="display-4 fw-bold text-gradient">Welcome</h1>
        <p className="lead mt-3 text-dark">
          A glimpse into my personality — blending tradition and modernity.
        </p>
        <button
          onClick={handleAboutClick}
          className="btn gradient-btn mt-4 px-4 py-2 rounded-pill fw-semibold"
        >
          About
        </button>
      </div>

      {/* Inline Styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(to right, #6f42c1, #007bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-btn {
          background: linear-gradient(to right, #6f42c1, #007bff);
          color: #fff;
          border: none;
        }

        .gradient-btn:hover {
          opacity: 0.9;
        }
      `}</style>
    </section>
  );
};

export default Home;