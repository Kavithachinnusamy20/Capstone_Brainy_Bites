import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import Register from "./Components/register";
import Login from "./Components/login";
import Quiz from "./Components/quiz";
import Error from './Components/Error';
import Result from "./Components/result";

function App() {
  async function getData() {
    try {
      const response = await fetch('http://localhost:8080');
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
//  const [answers, setAnswers] = useState([]);

//   const resetQuiz = () => {
//     setAnswers([]);
//   };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Quiz" element={<Quiz />} />
      
         <Route path="*" element={<Error/>} />
         <Route path="/Result" element={<Result />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
