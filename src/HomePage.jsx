// src/HomePage.jsx
import React from 'react';
import Slideshow from './Slideshow'; // Import the Slideshow component

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Ignite Your Skills with SkillSpark Plus!</h1>
          <p>Unlock your potential through our expert-led courses and personalized learning paths.</p>
          <a href="#" className="btn-primary">Explore Courses</a>
        </div>
      </section>
      
      <Slideshow />
      
      <main className="main-content container">
        <h2>Why Choose SkillSpark Plus?</h2>
        <p>We provide a diverse range of high-quality courses designed to meet the demands of today's fast-paced world.</p>
        <p>Our instructors are industry professionals, and our learning environment is supportive and engaging.</p>
        <div className="features">
          <div className="feature-item">
            <h3>Flexible Learning</h3>
            <p>Learn at your own pace, anytime, anywhere.</p>
          </div>
          <div className="feature-item">
            <h3>Expert Instructors</h3>
            <p>Gain insights from leading professionals in their fields.</p>
          </div>
          <div className="feature-item">
            <h3>Practical Skills</h3>
            <p>Focus on hands-on application and real-world projects.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;