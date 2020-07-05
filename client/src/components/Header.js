import React from 'react';
import Badge from './Badge';

const Header = () => {
  return (
    <div className="header-container">
      <header>
        {/* <Badge /> */}
        <div className="title">SoberKeeper</div>
        <div className="header-links">
          <a href="">Join</a>
          <a href="">Return</a>
        </div>
      </header>
    </div>
  )
}

export default Header;