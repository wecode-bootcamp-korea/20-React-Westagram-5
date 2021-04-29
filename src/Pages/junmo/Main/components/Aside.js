import React from 'react';
import './Aside.scss';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        <div className="asideProfile">
          <div className="asideProfileLeft">
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
          <div class="asideProfileRight">
            <p>전환</p>
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
        <div className="userRecommend">
          <div className="userRecommendLeft">
            <div className="userRecommendImg">
              <img
                alt="profileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div class="userRecommendText">
              <p>wecode</p>
              <p>junmopark님이 팔로우합니다</p>
            </div>
          </div>
          <div className="userRecommendRight">
            <p>팔로우</p>
          </div>
        </div>
        <div className="userRecommend">
          <div className="userRecommendLeft">
            <div className="userRecommendImg">
              <img
                alt="profileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div className="userRecommendText">
              <p>wecode</p>
              <p>junmopark님이 팔로우합니다</p>
            </div>
          </div>
          <div className="userRecommendRight">
            <p>팔로우</p>
          </div>
        </div>
        <div className="userRecommend">
          <div className="userRecommendLeft">
            <div className="userRecommendImg">
              <img
                alt="profileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div className="userRecommendText">
              <p>wecode</p>
              <p>junmopark님이 팔로우합니다</p>
            </div>
          </div>
          <div className="userRecommendRight">
            <p>팔로우</p>
          </div>
        </div>
        <div className="userRecommend">
          <div className="userRecommendLeft">
            <div className="userRecommendImg">
              <img
                alt="profileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div className="userRecommendText">
              <p>wecode</p>
              <p>junmopark님이 팔로우합니다</p>
            </div>
          </div>
          <div class="userRecommendRight">
            <p>팔로우</p>
          </div>
        </div>
        <div className="info">
          <div className="infoLink">
            <p>소개</p>
            <p>도움</p>
            <p>홍보 센터</p>
            <p>API</p>
            <p>채용정보</p>
            <p>개인정보처리방침</p>
            <p>약관</p>
            <p>위치</p>
            <p>인기 계정</p>
            <p>해시태그</p>
            <p>언어</p>
          </div>
          <div className="copyright">
            <p>© 2021 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </aside>
    );
  }
}

export default Aside;
