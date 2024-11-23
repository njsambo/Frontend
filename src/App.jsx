import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Hobbies from './Pages/Hobbies';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
