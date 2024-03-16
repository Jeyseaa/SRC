import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './AuthForm';
import Dashboard from './Dashboard';
import AboutUs from './AboutUs'; // Import the AboutUs component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add route for AboutUs component */}
      </Routes>
    </Router>
  );
}

export default App;
