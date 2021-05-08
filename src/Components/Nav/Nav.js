import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      imgSrc: [
        {
          id: 'navigator',
          img:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png',
        },
        {
          id: 'heart',
          img:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png',
        },
        {
          id: 'myPage',
          img:
            'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png',
        },
      ],
    };
  }

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
          {this.state.imgSrc.map(element => {
            const { id, img } = element;
            return (
              <>
                <img className="pic" alt={id} src={img} />
              </>
            );
          })}
        </div>
      </nav>
    );
  }
}

export default Nav;
