import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts';

const App = () => {
  const [posts, setPosts] = useState([]);

  const getBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  const postBackendAPI = async () => {
    const response = await fetch('/express_backend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tester: 'heyoo' })
    })
    const body = await response.json();
    console.log(body);
    return body;
  }

  const handleClick = () => {
    getBackendAPI()
      .then(res => setPosts(res));
  }
  console.log(posts);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click ME!</button>
        <Posts posts={posts} />
      </header>
    </div>
  );
}

export default App;
