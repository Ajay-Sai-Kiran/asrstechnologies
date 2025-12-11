import React from 'react';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content glass">
                    <h2 className="section-title">About ASRS Technologies</h2>
                    <div className="about-text">
                        <p>
                            At <strong>ASRS Technologies</strong>, we are driven by a singular mission: to empower businesses through the transformative power of technology.
                            Specializing in <strong>Artificial Intelligence</strong>, <strong>Cybersecurity</strong>, and <strong>Custom Software Development</strong>,
                            we bridge the gap between complex technical challenges and elegant, user-centric solutions.
                        </p>
                        <p>
                            Our team of expert engineers and researchers works tirelessly to stay ahead of the curve, ensuring that our clients are always equipped
                            with the latest and most secure tools to thrive in a digital-first world. Whether you are a startup looking to disrupt the market
                            or an enterprise seeking to optimize operations, ASRS Technologies is your trusted partner in innovation.
                        </p>
                    </div>
                </div>
            </div>

            <style>{`
        .about-section {
          position: relative;
        }

        .about-content {
          padding: 3rem;
          border-radius: 1rem;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.8;
        }

        .about-text strong {
          color: var(--text-primary);
        }
      `}</style>
        </section>
    );
};

export default About;
