// src/App.jsx
import React, { useState } from 'react';
import './App.css';
// import skillsparkLogo from '/skillspark-logo.png';

import HomePage from './HomePage';
import Slideshow from './Slideshow'; // Keep this import if HomePage uses it
import ApplyPage from './ApplyPage';
import InquiryFormPage from './InquiryFormPage'; // NEW: Import InquiryFormPage

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'apply', 'inquiry'
  
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="App">
      {/* Header Section */}
      <header className="main-header">
        <div className="container">
          <img src="/skillspark-logo.png" alt="SkillSpark Plus Logo" className="logo" />
          <nav>
            <ul>
              <li><a href="#" onClick={() => handleNavClick('home')}>Home</a></li>
              <li><a href="#" onClick={() => handleNavClick('courses')}>Courses</a></li>
              <li><a href="#" onClick={() => handleNavClick('about')}>About Us</a></li>
              <li><a href="#" onClick={() => handleNavClick('apply')}>Apply Now</a></li>
              <li><a href="#" onClick={() => handleNavClick('inquiry')}>Inquiry</a></li> {/* NEW: Inquiry Link */}
            </ul>
          </nav>
        </div>
      </header>

      {/* Conditional Rendering: Display the correct page */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'apply' && <ApplyPage />}
      {currentPage === 'inquiry' && <InquiryFormPage />} {/* NEW: Render InquiryFormPage */}

      {/* Placeholder for Courses Page (if not already in HomePage) */}
      {currentPage === 'courses' && (
        <main className="main-content container">
          <h2>Our Courses</h2>
          <p>Details about our short courses will be listed here soon!</p>
        </main>
      )}
      
      {/* Placeholder for About Us Page (if not already in HomePage) */}
      {currentPage === 'about' && (
        <main className="main-content container">
          <h2>About SkillSpark Plus</h2>
          <p>Learn more about our mission and vision here.</p>
        </main>
      )}

      {/* Footer Section - remains in App.jsx as it's global */}
      <footer className="main-footer">
        <div className="container">
          <p>&copy; 2025 SkillSpark Plus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;