import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Landing from './components/Landing';
import Posts from './components/Posts';
import Form from './components/Form';

const App = () => {

  // const getBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message);
  //   }
  //   return body;
  // }

  const postBackendAPI = async () => {
    const response = await fetch('/express_backend', {
      method: 'POST',
    })
    const body = await response.json();
    return body;
  }

  const handleClick = () => {
    postBackendAPI()
      .then(res => console.log(res));
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
