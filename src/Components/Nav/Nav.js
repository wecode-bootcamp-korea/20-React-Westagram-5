import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navJoonhyun">
        <div className="leftWrapper">
          <div className="instaIcon">
            <i className="fab fa-instagram"></i>
          </div>
          <h1 className="logTitle">westgram</h1>
        </div>
        <div className="center">
          <input className="search" type="text" placeholder="검색" />
          <i className="fas fa-search"></i>
        </div>
        <div className="rightWrapper">
          <img
            className="pic"
            alt="navigator"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="pic"
            alt="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="pic"
            alt="myPage"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
