import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Vista1 from './Components/vista1';
import Vista2 from './Components/vista2';
import Vista3 from './Components/vista3';
import Vista4 from './Components/vista4';
import Vista5 from './Components/vista5';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vista1" element={<Vista1 />} />
          <Route path="/vista2" element={<Vista2 />} />
          <Route path="/vista3" element={<Vista3 />} />
          <Route path="/vista4" element={<Vista4 />} />
          <Route path="/vista5" element={<Vista5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;