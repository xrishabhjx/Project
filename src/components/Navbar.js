import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Function to navigate to the Quiz page
  const handleGetStartedClick = () => {
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">Quizzer</Link>
        </div>
        <div className="nav-container">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>
          </ul>
          <button className="get-started" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
