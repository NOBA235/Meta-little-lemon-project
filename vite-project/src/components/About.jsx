import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Little Lemon</h2>
            <p>
              Little Lemon is a charming family-owned Mediterranean restaurant located 
              in the heart of Chicago. Founded by the Lemon family, we bring authentic 
              Mediterranean flavors with a modern twist to our community.
            </p>
            <p>
              Our chefs use only the freshest ingredients and traditional recipes passed 
              down through generations. We're committed to providing an unforgettable 
              dining experience for every guest.
            </p>
          </div>
          <div className="about-images">
            <div className="about-image">
              <img 
                src="/chef1.jpg" 
                alt="Our head chef" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
             
            </div>
            <div className="about-image">
              <img 
                src="/restaurant-interior.jpg" 
                alt="Restaurant interior" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;