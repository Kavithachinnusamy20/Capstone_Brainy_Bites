
// src/components/Questions.jsx
import React from "react";

const Questions = ({ question, onAnswerSelect }) => {
  return (
    <div className="questions">

    <h2 className="text-light">{question.question} </h2> 
      <ol>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`question-${question.id}`} 
              id={`q${index}-option`}
              onChange={() => onAnswerSelect(option)}
            />
            <label htmlFor={`q${index}-option`} className="text-primary">
              {option}
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Questions;
        
        
