import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Index from './components/navbar/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
