// TechnicalInterview.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./TechnicalInterview.css";
import axios from "axios"; // Import axios
import YouTube from "react-youtube";
import {backendUrl} from "../constants.js";

export default function TechnicalInterview() {
  const [videoIds, setVideoIds] = useState([]);

  useEffect(() => {
    // Fetch video IDs and thumbnails from the server when the component mounts
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/videos`); // Fetch from server endpoint
      setVideoIds(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="technical-interview-container">
      <h1>Technical Interview Preparation Resources</h1>
      <h3>
        Welcome to our Technical Interview Preparation page! Here, we provide you
        with the tools and resources to excel in your technical interviews.
      </h3>
      <h3>
        Prepare for the most common technical interview topics, practice with
        mock interview questions, and learn the best practices to ace your next
        interview.
      </h3>
      <h3>
        Our collection includes:
        <ul>
          <li>Mock Interview Questions with Detailed Solutions</li>
          <li>Articles on Technical Interview Best Practices</li>
          <li>Video Tutorials for Coding Interview Strategies</li>
          <li>Tips on Nailing Behavioral and Technical Questions</li>
        </ul>
      </h3>
      <h3>
        Get ready to boost your confidence and skills, and land your dream job!
      </h3>
      <div className="youtube-video-container">
        <h2>Some popular coding interviews on Youtube :</h2>
        {videoIds.map((video, index) => (
          <div key={index} className="youtube-video">
            <YouTube videoId={video.id} />
          </div>
        ))}
      </div>
    </div>
  );
}