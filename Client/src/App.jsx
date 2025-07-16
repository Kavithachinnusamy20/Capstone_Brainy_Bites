import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Test from "./Components/Test";

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
