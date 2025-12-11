import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info glass">
            <h3>Contact Information</h3>
            <p>Ready to start your next project? Reach out to us today.</p>

            <div className="info-item">
              <Mail className="icon" />
              <span>contact@asrstechnologies.com</span>
            </div>
            <div className="info-item">
              <Phone className="icon" />
              <span>+918125352626</span>
              <span>+918125352727</span>
            </div>
            <div className="info-item">
              <MapPin className="icon" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
            <h3>Send us a Message</h3>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message <Send size={16} style={{ marginLeft: '8px' }} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(to bottom, var(--bg-primary), #0f0f1a);
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }

        .contact-info, .contact-form {
          padding: 2.5rem;
          border-radius: 1rem;
        }

        .contact-info h3, .contact-form h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .info-item .icon {
          color: var(--accent-blue);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 0.5rem;
          color: white;
          font-family: inherit;
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-blue);
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
