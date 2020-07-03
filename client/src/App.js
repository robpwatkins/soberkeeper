import React from 'react';
import './App.css';

const App = () => {

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
      body: 'heyoo'
    })
    const body = await response.json();
    return body;
  }

  const handleClick = () => {
    postBackendAPI()
      .then(res => console.log(res));
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click ME!</button>
      </header>
    </div>
  );
}

export default App;
