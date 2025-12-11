import React, { useState } from 'react';
import { Brain, Shield, Code, Cpu, Layout, Smartphone, Database, Globe } from 'lucide-react';

const servicesData = [
  {
    category: 'AI & Cybersecurity',
    icon: <Brain size={40} />,
    title: "Artificial Intelligence",
    description: "Advanced AI solutions including machine learning models, NLP, and predictive analytics to automate and optimize your business."
  },
  {
    category: 'AI & Cybersecurity',
    icon: <Shield size={40} />,
    title: "Cybersecurity",
    description: "Robust security frameworks, penetration testing, and threat monitoring to protect your digital assets from evolving threats."
  },
  {
    category: 'Frontend',
    icon: <Layout size={40} />,
    title: "Frontend Development",
    description: "Building responsive, interactive, and pixel-perfect user interfaces using modern frameworks like React, Vue, and Angular."
  },
  {
    category: 'Full Stack',
    icon: <Database size={40} />,
    title: "Full Stack Development",
    description: "End-to-end web solutions integrating robust backends with dynamic frontends using MERN, MEAN, and other modern stacks."
  },
  {
    category: 'Mobile',
    icon: <Smartphone size={40} />,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile app development for iOS and Android using React Native and Flutter."
  },
  {
    category: 'Web Apps',
    icon: <Globe size={40} />,
    title: "Web Applications",
    description: "Scalable and secure web applications tailored to your business needs, from e-commerce platforms to enterprise portals."
  },
  {
    category: 'Consulting',
    icon: <Cpu size={40} />,
    title: "IT Consulting",
    description: "Comprehensive IT consulting and cloud infrastructure support to guide your digital transformation journey."
  }
];

const categories = ['All', 'Frontend', 'Full Stack', 'Mobile', 'Web Apps', 'AI & Cybersecurity'];

const Services = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredServices = activeTab === 'All'
    ? servicesData
    : servicesData.filter(service => service.category === activeTab || (activeTab === 'AI & Cybersecurity' && ['AI & Cybersecurity'].includes(service.category)));

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">Our Expertise</h2>

        <div className="tabs-container">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {filteredServices.map((service, index) => (
            <div key={index} className="service-card glass animate-fade-in">
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          background: var(--bg-secondary);
        }

        .tabs-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .tab-btn {
            padding: 0.75rem 1.5rem;
            border-radius: 2rem;
            border: 1px solid var(--border-color);
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .tab-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text-primary);
        }

        .tab-btn.active {
            background: linear-gradient(to right, var(--accent-blue), var(--accent-purple));
            border-color: transparent;
            color: white;
            box-shadow: 0 4px 15px rgba(14, 165, 233, 0.3);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-card {
          padding: 2rem;
          border-radius: 1rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(14, 165, 233, 0.2);
          border-color: var(--accent-blue);
        }

        .icon-wrapper {
          color: var(--accent-blue);
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
        }

        .service-card:hover .icon-wrapper {
          color: var(--accent-purple);
        }

        .service-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .service-card p {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Services;
