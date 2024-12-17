import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Quiz.css"; // Import the new CSS file

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/quiz`);
        setQuizData(response.data);
      } catch (error) {
        setError(error.response ? error.response.data.error : "Error fetching quiz data");
        console.error("Error fetching quiz data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizData();
  }, []);

  const handleCreateQuiz = () => {
    navigate("/create-quiz");
  };

  const handleAttemptQuiz = (quizId) => {
    navigate(`/attempt-quiz/${quizId}`);
  };

  if (loading) {
    return <div className="loading">Loading quizzes...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Available Quizzes</h1>

      <button className="quiz-button" onClick={handleCreateQuiz}>
        Create a New Quiz
      </button>

      {quizData.length === 0 ? (
        <p className="no-quizzes">No quizzes available yet. Please check back later.</p>
      ) : (
        <ul className="quiz-list">
          {quizData.map((quiz) => (
            <li key={quiz._id}>
              <span>{quiz.title}</span>
              <button className="quiz-button" onClick={() => handleAttemptQuiz(quiz._id)}>
                Attempt Quiz
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Quiz;
