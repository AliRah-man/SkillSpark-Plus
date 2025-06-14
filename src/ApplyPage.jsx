// src/ApplyPage.jsx
import React, { useState } from 'react';

function ApplyPage() {
  // State variables for form inputs
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // NEW: Phone number state
  const [courseInterest, setCourseInterest] = useState(''); // NEW: Course interest state
  const [message, setMessage] = useState(''); // NEW: Message/comments state

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default browser form submission (page reload)

    // Basic validation (client-side)
    if (!fullName || !email || !phone || !courseInterest) {
      alert('Please fill in all required fields (Full Name, Email, Phone, Course Interest).');
      return; // Stop submission if validation fails
    }

    try {
      // Send data to your backend
      const response = await fetch('http://localhost:5000/api/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          courseInterest,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Application Submitted Successfully! Thank you for your interest.');
        console.log('Success:', result);
        
        // Reset form fields after successful submission
        setFullName('');
        setEmail('');
        setPhone('');
        setCourseInterest('');
        setMessage('');
      } else {
        // Handle server errors (like duplicate email)
        alert(`Error: ${result.message}`);
        console.error('Server error:', result);
      }
    } catch (error) {
      // Handle network errors
      alert('Network error. Please check if your backend server is running.');
      console.error('Network error:', error);
    }
  };

  return (
    <main className="main-content container">
      <h2>Apply to SkillSpark Plus</h2>
      <p>Fill out the form below to apply for our short courses.</p>

      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required // HTML5 built-in validation
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* NEW FIELD: Phone Number */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel" // 'tel' type for phone numbers
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* NEW FIELD: Course Interest (using a select dropdown) */}
        <div className="form-group">
          <label htmlFor="courseInterest">Course Interest:</label>
          <select
            id="courseInterest"
            name="courseInterest"
            value={courseInterest}
            onChange={(e) => setCourseInterest(e.target.value)}
            required
          >
            <option value="">-- Select a Course --</option>
            <option value="web_development">Web Development Fundamentals</option>
            <option value="data_science">Data Science Basics</option>
            <option value="graphic_design">Graphic Design Essentials</option>
            <option value="digital_marketing">Digital Marketing Strategies</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* NEW FIELD: Message/Comments (using a textarea) */}
        <div className="form-group">
          <label htmlFor="message">Additional Comments (Optional):</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4" // Number of visible text lines
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">Submit Application</button>
      </form>
    </main>
  );
}

export default ApplyPage;