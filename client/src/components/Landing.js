import React from 'react';
import Badge from './Badge';
import Outward from './Outward';

const Landing = () => {
  return (
    <div className="landing">
      <div className="post-area">
        <Badge />
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