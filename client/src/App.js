import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const callBackendAPI = async () => {
    const response = await fetch('/express_backend', { method: 'POST' });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  }

  const handleClick = () => {
    callBackendAPI()
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
