import { useEffect,useState } from 'react'; //useState manage local state, useEffect used to fetching data
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import QuestionGrid from "./Components/questionsAdmin";
import Register from "./Components/register";
import Login from "./Components/login";
import Quiz from "./Components/quiz";
import Error from './Components/Error';
import Result from "./Components/result";
import Resources from "./Components/resources";
//data fetching from local backend
function App() {
  const [data, setData] = useState([]); //local state quiz questions fetched
  async function getData() {
    try {
      const response = await fetch('http://localhost:8080');
      const data = await response.json();
      console.log(data);
      setData(data); //update state with fetched questions
    } catch (e) {
      console.log(e);
    }
  }
  //  const [answers, setAnswers] = useState([]);
  // const resetQuiz = () => {
  //    setAnswers([]);
  //  };
  // useEffect(() => {
  //    getData();
  //  }, []);
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuestionGrid" element={<QuestionGrid />} />
        <Route path="Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        {/*data props for questions  */}
        <Route path="/Quiz" element={<Quiz setData={setData}data={data}/>}/> 
         <Route path="*" element={<Error/>} />
         {/* using stored data and quiz answers */}
         <Route path="/Result" element={<Result data={data}/>} />
          <Route path="/Resources" element={<Resources />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
