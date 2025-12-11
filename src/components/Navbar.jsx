import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <div className="logo-container">
                    <img src="/logo.jpg" alt="ASRS Technologies" className="logo-img" />
                    <span className="logo-text">ASRS <span className="highlight">Technologies</span></span>
                </div>

                <div className="desktop-menu">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#services" className="nav-link">Services</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isOpen && (
                    <div className="mobile-menu glass">
                        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    </div>
                )}
            </div>

            <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 1.5rem 0;
        }
        
        .navbar.scrolled {
          background: rgba(3, 7, 18, 0.9);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
        }

        .logo-img {
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--accent-blue);
        }

        .highlight {
          color: var(--accent-blue);
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-weight: 500;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: var(--accent-blue);
          transition: width 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .mobile-toggle {
          display: none;
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 1rem;
          text-align: center;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
