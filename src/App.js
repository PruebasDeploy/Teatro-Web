import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Politics from './pages/Politics/Politics';
import Layout from './Layout';

function App() {
  return (
    <div className="app bg-slate-200 min-h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/politics" element={<Politics />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
