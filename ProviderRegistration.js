// src/components/ProviderRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../Map'; // Import the Map component
import '../styles/Auth.css';

const ProviderRegistration = () => {
    const [location, setLocation] = useState([9.046599, 38.763332]); // Default location
    const navigate = useNavigate();

    const handleLocationSelect = (selectedLocation) => {
        setLocation(selectedLocation); // Update state with selected location
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Provider registered at:', location);
        // Here, you would typically send the location data to your backend
        navigate('/'); // Redirect to home or another page
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Register Provider</h2>
                <input 
                    type="text" 
                    placeholder="Location" 
                    value={`Lat: ${location[0]}, Lng: ${location[1]}`} 
                    readOnly 
                />
                {/* Include the Map component here */}
                <Map onLocationSelect={handleLocationSelect} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default ProviderRegistration;