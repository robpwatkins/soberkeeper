import React, { useState } from 'react';
import Outward from './Outward';

const Landing = () => {
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
    <div className="landing">
      <div className="post-area">
        <div className="outward-container">
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
        </div>
      </div>
    </div>
  )
}

export default Landing;