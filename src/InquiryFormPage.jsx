// src/InquiryFormPage.jsx
import React, { useState } from 'react';

function InquiryFormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload

    // Basic validation
    if (!name || !email || !subject || !inquiryMessage) {
      alert('Please fill in all required fields for your inquiry.');
      return;
    }

    console.log('Inquiry Form Submitted!', {
      name,
      email,
      subject,
      inquiryMessage,
    });

    alert('Your inquiry has been submitted! We will get back to you soon.'); // Using alert for now
    // Later: Send this data to your backend

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setInquiryMessage('');
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