import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />

      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        borderTop: '1px solid var(--glass-border)',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} ASRS Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
