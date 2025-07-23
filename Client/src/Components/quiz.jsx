// src/components/Test.jsx
import React, { useState, useEffect } from "react";
import Questions from "./questions";
import { useNavigate } from "react-router-dom";
import "../styles/quizbutton.css";

const Quiz = ({setData,data}) => {
  const navigate = useNavigate();
 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Get all Quiz questions from database. 
  useEffect(() => {
    fetch("http://localhost:8080/api/questions")
      .then((response) => response.json())
      .then((quizData) => {
        setData(quizData);
        console.log("Fetched quiz data:", quizData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const question = data[currentQuestionIndex];
 console.log(`answers`,answers)

  const handleAnswerSelect = (selected) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selected;
    setAnswers(updatedAnswers);
    console.log("Updated answers:", updatedAnswers);
  };

  const onNext = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);

      // Clear radio buttons or checkboxes if needed
      const inputs = document.querySelectorAll("input[type='radio'], input[type='checkbox']");
      inputs.forEach((input) => (input.checked = false));
    }
  };

  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    navigate("/result", { state: { answers } });
  };

  if (data.length === 0) {
    return <div>Loading quiz...</div>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz</h1>
      <Questions question={question} onAnswerSelect={handleAnswerSelect} />
      <div className="button-row">
        <button className="btn prev" onClick={onPrev}>Previous</button>
        {currentQuestionIndex < data.length - 1 ? (
          <button className="btn next" onClick={onNext}>Next</button>
        ) : (
          <button className="btn submit" onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;