import React from 'react';
import UserRecommend from './userRecommend';
import './aside.scss';

class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      infoLink: [
        '소개',
        '도움',
        '홍보센터',
        'API',
        '채용정보',
        '개인정보처리방침',
        '약관',
        '위치',
        '인기계정',
        '해시태그',
        '언어',
      ],
      recommendUserId: ['junmo', 'wecode', 'junmo', 'wecode'],
    };
  }
  render() {
    return (
      <aside className="rightAside">
        <div className="profile">
          <div className="profileImg">
            <div>
              <img
                alt="profileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div>
              <p>wecode</p>
            </div>
          </div>
          <div class="profileBtn">
            <p>전환</p>``
          </div>
        </div>
        <div class="recommend">
          <div>
            <p>회원님을 위한 추천</p>
          </div>
          <div>
            <p>모두 보기</p>
          </div>
        </div>
        {this.state.recommendUserId.map(el => {
          return <UserRecommend name={el} />;
        })}
        <div className="info">
          <ul className="infoLink">
            {this.state.infoLink.map(el => {
              return <li>{el}</li>;
            })}
          </ul>
          <div className="copyright">
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
