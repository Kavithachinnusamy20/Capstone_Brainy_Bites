import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import About from "./Components/About";
import Register from "./Components/register";
import User from "./Components/user";
import Test from "./Components/test";
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/User/:username" element={<User />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Test" element={<Test />} />
         <Route path="*" element={<Error/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
