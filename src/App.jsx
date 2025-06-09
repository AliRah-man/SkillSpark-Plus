// src/App.jsx
import React, { useState } from 'react';
import './App.css';

import HomePage from './HomePage';
import ApplyPage from './ApplyPage';
import InquiryFormPage from './InquiryFormPage';
import CoursesPage from './CoursesPage';
import AboutUsPage from './AboutUsPage';


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="main-header">
          <div className="container">
              {/* NEW: Wrapper div for logo image and text */}
              <div className="logo-group">
                  <img src="/skillspark-logo.png" alt="SkillSpark Plus Logo" className="logo" />
                  <span className="logo-text">SkillSpark</span> {/* NEW: Text next to logo */}
              </div>
              <nav>
                  <ul>
                      <li><a href="#" onClick={() => handleNavClick('home')}>Home</a></li>
                      <li><a href="#" onClick={() => handleNavClick('courses')}>Courses</a></li>
                      <li><a href="#" onClick={() => handleNavClick('about')}>About Us</a></li>
                      <li><a href="#" onClick={() => handleNavClick('apply')}>Apply Now</a></li>
                      <li><a href="#" onClick={() => handleNavClick('inquiry')}>Inquiry</a></li>
                  </ul>
              </nav>
          </div>
      </header>

      {/* Conditional Rendering: Display the correct page */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'apply' && <ApplyPage />}
      {currentPage === 'inquiry' && <InquiryFormPage />}
      {currentPage === 'courses' && <CoursesPage />}
      {currentPage === 'about' && <AboutUsPage />}

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
