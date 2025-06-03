// src/ApplyPage.jsx
import React, { useState } from 'react'; // We'll need useState for form inputs 
function ApplyPage() {
    // State variables for form inputs (more will be added later)
    const [fullName, setFullName] = useState(''); const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
       
        console.log('Form submitted!', { fullName, email });     // Later: Send this data to your backend (MongoDB/Express.js)     
        alert('Application Submitted! (Check console for data)'); // Using alert for now, will replace later    
        setFullName(''); setEmail('');
    }; 
    
    return (
    <main className="main-content container">

        <h2>Apply to SkillSpark Plus</h2>
        <p>Fill out the form below to apply for our short courses.</p>
      
        <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <button type="submit" className="btn-primary">Submit Application</button>       </form>     </main>);

}

export default ApplyPage;