import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { divIcon } from 'leaflet';
import CreateAccount from './component/createAccount';
import Login from "./component/login";
import ProviderList from './component/ProviderList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './Map';

function App() {
  const [customerLocation, setCustomerLocation] = useState([9.046599, 38.763332]); // Example customer location
    const providers = [
        { id: 1, name: "Provider A", location: "Location A", lat: 51.51, lng: -0.1 },
        { id: 2, name: "Provider B", location: "Location B", lat: 51.49, lng: -0.08 },
        { id: 3, name: "Provider C", location: "Location C", lat: 51.5, lng: -0.09 }
    ];

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
        <div>
          {/* <h1>Water Distribution System</h1> */}
          <Router>
            <Routes>
                <Route path="/login" element={<Login setCustomerLocation={setCustomerLocation} />} />
                <Route path="/providers" element={<ProviderList providers={providers} customerLocation={customerLocation} />} />
                <Route path="/" element={<Login setCustomerLocation={setCustomerLocation} />} /> {/* Default route */}
            </Routes>
        </Router>


          {/* <CreateAccount/> */}
          {/* <Map /> */}
        </div>

  );
    
};

export default App;
