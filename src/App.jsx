// src/App.jsx
 import React, { useState } from 'react'; 
 import './App.css'; 
 //import skillsparkLogo from './assets/skillspark-logo.png'; 
 import HomePage from './HomePage'; import ApplyPage from './ApplyPage';  
 function App() {   
  // State to manage which page is currently active  
   const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'apply'
   //     // Function to handle navigation clicks  
    const handleNavClick = (page) => {     setCurrentPage(page);   };   
     return (    
       <div className="App">        <header className="main-header">           <div className="container">     
                 {/* <img src={skillsparkLogo} alt="SkillSpark Plus Logo" className="logo" />       */}
                <nav>         
                            <ul>               
                                                <li><a href="#" onClick={() => handleNavClick('home')}>Home</a></li>             
                                                <li><a href="#" onClick={() => handleNavClick('courses')}>Courses</a></li> 
                                            <li><a href="#" onClick={() => handleNavClick('about')}>About Us</a></li>
                                            <li><a href="#" onClick={() => handleNavClick('apply')}>Apply Now</a></li> 
                                         </ul>         
                                               </nav>     
                                                     </div> 
                                                           </header>          {currentPage === 'home' && <HomePage />}       {currentPage === 'apply' && <ApplyPage />}   
                                                               {currentPage === 'courses' && (
                                                                 // Placeholder for Courses Page   
                                                                       <main className="main-content container">         
                                                                         <h2>Our Courses</h2>           <p>Details about our short courses will be listed here soon!</p>         </main>       )}   
                                                                             {currentPage === 'about' &&
                                                                              ( // Placeholder for About Us Page    
                                                                                   <main className="main-content container">           <h2>About SkillSpark Plus</h2>           <p>Learn more about our mission and vision here.</p>         </main>       )}       
                                                                                          <footer className="main-footer">           <div className="container">               <p>&copy; 2025 SkillSpark Plus. All rights reserved.</p>           </div>    
                                                                                             </footer>     </div>   ); } 
                                                                                             
      export default App; 