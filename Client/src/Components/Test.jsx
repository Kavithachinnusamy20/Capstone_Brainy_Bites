// src/components/Test.jsx
import React, { useState } from "react";
import Questions from "./questions";
import { data } from "../Database/data";

const Test = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = data[currentQuestionIndex];

  const handleAnswerSelect = (selected) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = selected;
    setAnswers(updatedAnswers);
  };

  const onNext = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const onPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz</h1>
      <Questions question={question} onAnswerSelect={handleAnswerSelect} />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>Previous</button>
        <button className="btn next" onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Test;