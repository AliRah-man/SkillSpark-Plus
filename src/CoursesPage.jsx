// src/CoursesPage.jsx
import React from 'react';

function CoursesPage() {
  return (
    <main className="main-content container">
      <h2>Explore Our SkillSpark Plus Courses!</h2>
      <p>We offer a diverse range of short courses designed to boost your skills for today's job market.</p>

      <div className="course-grid">
        {/* Example Course Item 1 */}
        <div className="course-item">
          <h3>Web Development Fundamentals</h3>
          <p>Master the basics of HTML, CSS, and JavaScript to build modern websites.</p>
          <ul>
            <li>HTML Structure</li>
            <li>CSS Styling & Layout (Flexbox, Grid)</li>
            <li>JavaScript Interactivity</li>
          </ul>
          <button className="btn-primary">View Details</button>
        </div>

        {/* Example Course Item 2 */}
        <div className="course-item">
          <h3>Data Science Basics</h3>
          <p>Learn to analyze data, build models, and gain insights using Python.</p>
          <ul>
            <li>Python for Data Analysis</li>
            <li>Pandas & NumPy</li>
            <li>Data Visualization</li>
          </ul>
          <button className="btn-primary">View Details</button>
        </div>

        {/* Example Course Item 3 */}
        <div className="course-item">
          <h3>Graphic Design Essentials</h3>
          <p>Unleash your creativity with fundamental design principles and software.</p>
          <ul>
            <li>Typography & Color Theory</li>
            <li>Adobe Photoshop Basics</li>
            <li>Vector Graphics with Illustrator</li>
          </ul>
          <button className="btn-primary">View Details</button>
        </div>

        {/* Add more course items as needed */}

      </div> {/* End course-grid */}
    </main>
  );
}

export default CoursesPage;