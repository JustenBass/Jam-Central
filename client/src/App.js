import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Artist from './pages/Artist';

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/artists' element={ <Artist /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

