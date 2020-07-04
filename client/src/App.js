import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './Router';
import Landing from './components/Landing';
import Posts from './components/Posts';
import Form from './components/Form';

const App = () => {
  const [posts, setPosts] = useState([]);

  const getBackendAPI = async () => {
    const response = await fetch('/testPosts/outward');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  const handleClick = () => {
    getBackendAPI()
      .then(res => setPosts(res));
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
