 import React from 'react'
 import Navbar from './Navbar';
 import { useParams } from 'react-router-dom';
 
 const User =() =>{
    const {username} = useParams();
    return(
        <div>
        
        <h1>Username:{username}</h1></div>
    );
};
export default User