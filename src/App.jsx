// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// Removed the import statement for skillsparkLogo as it's now directly referenced from public/assets
// import skillsparkLogo from '/assets/skillspark-logo.png'; // This line is not needed and can be deleted or kept commented

import HomePage from './HomePage';
// import Slideshow from './Slideshow'; // If HomePage imports Slideshow, you don't need this here
import ApplyPage from './ApplyPage';
import InquiryFormPage from './InquiryFormPage';
import CoursesPage from './CoursesPage'; // Import CoursesPage
import AboutUsPage from './AboutUsPage'; // Import AboutUsPage


function App() {
  // Add 'courses' and 'about' to your possible currentPage states
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'apply', 'inquiry', 'courses', 'about'

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="main-header">
          <div className="container">
              {/* UPDATED: Directly referencing the logo from the public folder root */}
              <img src="/skillspark-logo.png" alt="SkillSpark Plus Logo" className="logo" />
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