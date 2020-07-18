import React from 'react';
import Badge from './Badge';

const Header = () => {
  return (
    <div className="header-container">
      <Badge />
      <div className="heal">
        Let's play fetch.
        {/* <div className="title">SoberKeeper</div> */}
        {/* <div className="header-links"> */}
          {/* <a href="">Join</a> */}
          {/* <a href="">Return</a> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Header;