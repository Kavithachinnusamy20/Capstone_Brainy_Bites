import { useState } from 'react';
import validate from '../utils/validate';
const BASE_URL =  `${import.meta.env.VITE_BASE_URL}`

const useForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log('Server response:', data.message);
      
      if (response.ok) {
        window.alert(" Signup successful! Welcome to Brainy Bites.");
        setValues({ username: "", email: "", password: "", password2: "" });
      } else {
        window.alert(` Signup failed: ${data.error || "Something went wrong"}`);
      }
      
    } catch (error) {
      console.error('Signup error:', error);
    }
    
  };
  
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;