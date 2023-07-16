// About.js
import React from "react";
import "./About.css"; // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <h1>About Our Platform</h1>
      <h3>
        Welcome to our coding platform! We are dedicated to helping developers
        and aspiring programmers enhance their coding skills and prepare for
        technical interviews.
      </h3>
      <h3>
        Our platform offers a wide range of coding problems and challenges
        covering various topics and difficulty levels. Whether you are a
        beginner looking to learn programming basics or an experienced
        developer aiming to ace coding interviews, we have something for
        everyone.
      </h3>
      <h3>
        Key Features:
        <ul>
          <li>Access to a vast collection of coding problems.</li>
          <li>Customizable coding environment with syntax highlighting.</li>
          <li>Mock technical interviews with detailed feedback.</li>
          <li>Community-driven discussion boards and solutions.</li>
          <li>Comprehensive interview preparation resources.</li>
        </ul>
      </h3>
      <h3>
        Join us now and embark on your coding journey with our supportive and
        diverse community of developers!
      </h3>
    </div>
  );
}
