import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import Home from './Home';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<App />} />
      </Routes>
    </Router>,
  document.getElementById('root')
);
