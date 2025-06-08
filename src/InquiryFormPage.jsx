// src/InquiryFormPage.jsx
import React, { useState } from 'react';

function InquiryFormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    // Basic validation
    if (!name || !email || !subject || !inquiryMessage) {
      alert('Please fill in all required fields for your inquiry.');
      return;
    }

    try {
      // Send data to your backend
      const response = await fetch('http://localhost:5000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          inquiryMessage,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Your inquiry has been submitted successfully! We will get back to you soon.');
        console.log('Success:', result);
        
        // Reset form fields after successful submission
        setName('');
        setEmail('');
        setSubject('');
        setInquiryMessage('');
      } else {
        // Handle server errors
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
      <h2>Course Inquiry</h2>
      <p>Have questions about our courses? Send us a message!</p>

      <form onSubmit={handleSubmit} className="inquiry-form"> {/* Unique class for this form */}
        <div className="form-group">
          <label htmlFor="inquiryName">Your Name:</label>
          <input
            type="text"
            id="inquiryName"
            name="inquiryName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquiryEmail">Your Email:</label>
          <input
            type="email"
            id="inquiryEmail"
            name="inquiryEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquirySubject">Subject:</label>
          <input
            type="text"
            id="inquirySubject"
            name="inquirySubject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="inquiryMessage">Your Message:</label>
          <textarea
            id="inquiryMessage"
            name="inquiryMessage"
            value={inquiryMessage}
            onChange={(e) => setInquiryMessage(e.target.value)}
            rows="6"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-primary">Send Inquiry</button>
      </form>
    </main>
  );
}

export default InquiryFormPage;