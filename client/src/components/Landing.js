import React, { useState, useEffect } from 'react';
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
  
  useEffect(() => {
    getBackendAPI()
    .then(res => setPosts(res));
  }, [])


  const handleClick = () => {
    getBackendAPI()
      .then(res => setPosts(res));
  }
  // console.log(posts[0]);
  return (
    <div className="landing">
      <div className="post-area">
        <div className="outward-container">
          {posts.length > 0 &&
            <img src={posts[15].outward} alt=""/>
          }
          {/* <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward />
          <Outward /> */}
        </div>
      </div>
    </div>
  )
}

export default Landing;