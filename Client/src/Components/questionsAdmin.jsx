import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:8080'

const QuestionGrid = () => {
  const [questions, setQuestions] = useState([]);

  // Fetch questions from backend
  useEffect(() => {
    fetch(`${BASE_URL}/api/questions`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Error fetching questions:", err));
  }, []);

  // Handle Delete
  
const handleDelete = async (_id) => {
  try {
   
    await axios.delete(`${BASE_URL}/api/deleteQuestions/${_id}`);

    // Remove question from UI
    const updatedQuestions = questions.filter((q) => q._id !== _id);
    setQuestions(updatedQuestions);
  } catch (error) {
    console.error("Error deleting question:", error);
  }
};


  return (
    <div style={{ padding: "20px" }}>
      <h2>Question List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>ID</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>Question</th>
            <th style={{ borderBottom: "1px solid #ccc", padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q._id}>
              <td style={{ padding: "10px" }}>{q.id}</td>
              <td style={{ padding: "20px" }}>{q.question}</td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => handleDelete(q._id)}
                  style={{ color: "red", border: "none", background: "none", cursor: "pointer" }}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionGrid;