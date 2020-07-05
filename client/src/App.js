import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Landing from './components/Landing';
import Posts from './components/Posts';
import Form from './components/Form';

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Badge /> */}
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
