// src/component/Login.js
import React, { useState } from 'react';  // Ensure React and useState are imported
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/Auth.css';

const Login = ({ setCustomerLocation }) => { // Accept the prop
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Define navigate

    const handleSubmit = (e) => {
        e.preventDefault();
        const simulatedLocation = [9.046599, 38.763332]; // Replace with actual location logic
        setCustomerLocation(simulatedLocation); // Call the prop function
        navigate('/providers'); // Redirect to providers page
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                    autoComplete="off" 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                    autoComplete="off" 
                />
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <Link to="/create-account">Create one here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;