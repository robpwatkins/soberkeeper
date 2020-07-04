import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
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
    <div className="App">
      <Header />
      <Landing />
      <Posts posts={posts} />
    </div>
  );
}

export default App;
