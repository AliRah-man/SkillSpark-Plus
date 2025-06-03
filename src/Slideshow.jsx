    // src/Slideshow.jsx
    import React, { useState, useEffect } from 'react';

    // Define the paths to your slideshow images.
    // Since images are in public/assets/slideshow/, use absolute paths starting with /assets/
    const images = [
        '/slideshow/books.png',
        '/slideshow/classroom.png',
        '/slideshow/computers.png',
        '/slideshow/teach.png',
        '/slideshow/world.png'
    ];

    const SLIDESHOW_INTERVAL = 5000; // 5 seconds

    function Slideshow() {
      // State Hook: Manages the current slide index
      const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

      // Effect Hook: Handles the automatic slideshow interval
      useEffect(() => {
        // Set up the interval for automatic slideshow
        const intervalId = setInterval(() => {
          // Update the slide index: go to next, or loop back to 0
          setCurrentSlideIndex(prevIndex => (prevIndex + 1) % images.length);
        }, SLIDESHOW_INTERVAL);

        // Cleanup function: Runs when the component unmounts or before the effect re-runs
        // This is crucial to prevent memory leaks from timers
        return () => clearInterval(intervalId);
      }, []); // Empty dependency array means this effect runs only once after initial render

      // Function to set the current slide when a dot is clicked
      const handleDotClick = (index) => {
        // When a dot is clicked, immediately set the slide.
        // The useEffect's interval will continue, but it will start from this new slide.
        setCurrentSlideIndex(index);
      };

      return (
        <section className="slideshow-container">
          {/* Main image displaying the current slide */}
          <img
            src={images[currentSlideIndex]}
            alt={`SkillSpark Plus Feature Image ${currentSlideIndex + 1}`}
            className="slideshow-image" // Using a class for styling
          />

          {/* Navigation dots */}
          <div className="slideshow-dots">
            {images.map((_, index) => ( // Loop through images array to create dots
              <span
                key={index} // Unique key for each list item in React
                className={`dot ${currentSlideIndex === index ? 'active' : ''}`} // Conditionally add 'active' class
                onClick={() => handleDotClick(index)} // React's onClick event handler
              ></span>
            ))}
          </div>
        </section>
      );
    }

    export default Slideshow;
    