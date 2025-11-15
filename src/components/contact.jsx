import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section bg-light" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="container py-5">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="gradient-title fw-bold">Contact</h2>
          <div className="gradient-line mx-auto mt-2"></div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center fade-in">
          <div className="col-md-8">
            <div className="glass-card p-4 shadow-sm">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input type="text" className="form-control rounded-pill" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Email</label>
                  <input type="email" className="form-control rounded-pill" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Message</label>
                  <textarea className="form-control rounded-4" rows="4" placeholder="Type your message"></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn gradient-btn px-4 py-2 rounded-pill fw-semibold">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="text-center mt-4 text-dark">
              <p className="mb-1"><strong>Email:</strong> abiramiabirami48351@gmail.com</p>
              <p><strong>Phone:</strong> +91 8220898893</p>
            </div>

            {/* Download CV Button */}
            <div className="text-center mt-3">
              <a
                href="/abi_resume.pdf"
                download
                className="btn gradient-btn px-4 py-2 rounded-pill fw-semibold"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="custom-footer text-center">
        <div className="social-icons mb-2">
          <a
            href="https://www.instagram.com/__a_b_i__c_u_t_i_e__?igsh=MThqY2l2ODRkN3M0cw=="
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/abirami-b-0b7847334/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Abiramibalas"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
        </div>
        ©2025 @Abirami. All Rights Reserved
      </div>

      {/* Styles */}
      <style>{`
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

        .gradient-btn {
          background: linear-gradient(to right, #6f42c1, #007bff);
          color: #fff;
          border: none;
        }

        .gradient-btn:hover {
          opacity: 0.9;
        }

        .custom-footer {
          background-color: #007bff;
          color: white;
          padding: 16px 0;
          border-top: 2px solid #0056b3;
          font-size: 0.95rem;
          width: 100%;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 20px;
          font-size: 1.8rem;
        }

        .social-link {
          color: white;
          transition: transform 0.3s, color 0.3s;
        }

        .social-link:hover {
          color: #ffd700;
          transform: scale(1.2);
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

export default Contact;