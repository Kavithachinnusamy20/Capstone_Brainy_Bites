import { useState } from 'react';
import validate from '../utils/validate';

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
     setErrors(validate(values));
  try {
    const response = await fetch('http://localhost:8080/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
   const data = await response.json();
      console.log('Server response:', data.message);
    } catch (error) {
      console.error('Signup error:', error);
    }

    // console.log("Validation errors:", validationErrors);
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;