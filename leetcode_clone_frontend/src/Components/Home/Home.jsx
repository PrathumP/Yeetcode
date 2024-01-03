import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to Leetcode</h1>
        <h3>Practice coding problems and prepare for technical interviews.</h3>
        <div className="cta-buttons">
          <Link to="/signup" className="cta-button">Get Started</Link>
          <Link to="/about" className="cta-button">Learn More</Link>
        </div>
      </div>
      <div className="feature-section">
        <div className="feature-card">
          <h2>Practice Problems</h2>
          <p>Access a wide range of coding problems based on different topics and difficulty levels.</p>
          <Link to="/problems" className="feature-cta">Explore</Link>
        </div>
        <div className="feature-card">
          <h2>Technical Interview Prep</h2>
          <p>Prepare for technical interviews with mock interview questions and helpful resources.</p>
          <Link to="/technical-interview" className="feature-cta">Learn More</Link>
        </div>
      </div>
      <div className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <p>"Leetcode helped me improve my coding skills, and I landed my dream job. Highly recommended!"</p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        <div className="testimonial-card">
          <p>"The technical interview preparation resources were invaluable. Thanks, Leetcode!"</p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
        </div>
    </div>
  );
}

