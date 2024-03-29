import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, Demo } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Main />} />
          <Route path={'/Demo'} element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
