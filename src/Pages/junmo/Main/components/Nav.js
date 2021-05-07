import React from 'react';
import './nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="topNav">
        <header className="logo">
          <h1 className="title">Instagram</h1>
        </header>
        <div className="input">
          <input type="text" className="search" placeholder="검색" />
        </div>
        <ul className="btn">
          <li>
            <img
              alt="quest"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
          </li>
          <li>
            <img
              alt="like"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
          </li>
          <li>
            <img
              alt="profile"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
