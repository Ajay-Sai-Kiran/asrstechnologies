import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title animate-fade-in">
                    Innovating the Future with <br />
                    <span className="gradient-text">AI & Cybersecurity</span>
                </h1>
                <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    ASRS Technologies delivers cutting-edge software solutions to secure and empower your digital transformation.
                </p>
                <div className="hero-buttons animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <a href="#services" className="btn btn-primary">
                        Explore Services <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                    </a>
                </div>
            </div>

            <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding-top: 80px; /* Navbar height */
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: var(--accent-blue);
          top: -100px;
          left: -100px;
          animation: float 6s ease-in-out infinite;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: var(--accent-purple);
          bottom: -100px;
          right: -100px;
          animation: float 8s ease-in-out infinite reverse;
        }

        .hero-content {
          text-align: center;
          z-index: 1;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          font-weight: 800;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--accent-blue), var(--accent-purple));
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto 2.5rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
