import React from 'react';
import feedImg from '/public/images/junmo/feedImg.jpeg';
import './Main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <section>
          <nav className="navTop">
            <header className="navTopItemLogo">
              <h1 className="title">Instagram</h1>
            </header>
            <div className="navTopItemInput">
              <input type="text" className="search" placeholder="검색" />
            </div>
            <ul className="navTopItemBtn">
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
          <main>
            <div className="feed">
              <header>
                <div className="headerLeft">
                  <div>
                    <img
                      alt="feedProfileImg"
                      className="ProfileImg"
                      src={require('public/images/junmo/profileImg.jpeg')}
                    />
                  </div>
                  <div>
                    <p className="nickname">wecode</p>
                  </div>
                </div>
                <div className="headerRight">
                  <i className="fas fa-ellipsis-h"></i>
                </div>
              </header>
              <article className="feedImg">
                <img alt="feedImg" src={feedImg} />
              </article>
              <div className="reaction">
                <div className="btnBox">
                  <div>
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <div>
                    <i className="far fa-bookmark"></i>
                  </div>
                </div>
                <div className="paragraphBox">
                  <p>좋아요 999개</p>
                  <p>
                    {' '}
                    <span class="userId">wecode_bootcamp</span> 위코드는 단순
                    교육업체가 아닌 개발자 커뮤니티입니다.
                  </p>
                  <ul className="commentsList"></ul>
                </div>
                <form className="commentBox">
                  <input
                    className="commentInput"
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button className="commentAddBtn">게시</button>
                </form>
              </div>
            </div>
            <aside className="aside">
              <div className="asideProfile">
                <div className="asideProfileLeft">
                  <div>
                    <img
                      alt="profileImg"
                      src="../../../../public/images/junmo/profileImg.jpeg"
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
                      src="../../../../public/images/junmo/profileImg.jpeg"
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
                      src="../../../../public/images/junmo/profileImg.jpeg"
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
                      src="../../../../public/images/junmo/profileImg.jpeg"
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
                      src="../../../../public/images/junmo/profileImg.jpeg"
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
          </main>
        </section>
      </div>
    );
  }
}

export default Main;
