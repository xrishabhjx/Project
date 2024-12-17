import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Quizzer</h1>
        <p className="home-text">
          Test your knowledge and have fun with our engaging quizzes. Start your journey now and challenge yourself!
        </p>
        <a href="/quiz" className="cta-button">Start Quiz</a>
      </div>
    </div>
  );
};

export default Home;
