import React from 'react';
import './Nav.scss';

class NavHoonic extends React.Component {
  render() {
    return (
      <nav className="navHoonic">
        <div className="navTop">
          <img
            alt="insta logo"
            className="instaImg"
            src="/images/hoonic/instagram.png"
          />
          <input className="searchBar" type="text" placeholder="검색" />
          <div className="navRightIcon">
            <img alt="home" className="home" src="/images/hoonic/home.png" />
            <img alt="dm" className="dm" src="/images/hoonic/dm.png" />
            <img
              alt="explore"
              className="explore"
              src="/images/hoonic/explore.png"
            />
            <img alt="heart" className="heart" src="/images/hoonic/heart.png" />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavHoonic;
