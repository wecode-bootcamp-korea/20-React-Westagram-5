import React from 'react';
import './Main.scss';

class Component extends React.Component {
  render() {
    return (
      <div className="Main">
        <nav>
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
        <main id="main">
          <div className="feeds">
            <article>
              <div className="profileTop">
                <div className="profileImg">
                  <a href="#/">
                    <img
                      className="imgJoon"
                      alt="junchi211"
                      src="/images/joonhyun/fourseasons.jpg"
                    />
                  </a>
                  <a href="#/">
                    <span className="userId">junchi211</span>
                  </a>
                </div>
                <span>
                  {' '}
                  <button className="moreBtn"> ... </button>{' '}
                </span>
              </div>

              <img
                className="seychelles"
                alt="Seychelles"
                src="/images/joonhyun//fourseasons.jpg"
              />

              <div className="statusCheck">
                <div className="leftStatusCheck">
                  <span className="statusHeart">
                    <i className="fas fa-heart"></i>
                  </span>
                  <span className="statusIcon">
                    <i className="far fa-comment"></i>
                  </span>
                  <span className="statusIcon">
                    <i className="fas fa-paper-plane"></i>
                  </span>
                </div>
                <div className="rightStatuscheck">
                  <span className="download">
                    <i className="far fa-bookmark"></i>
                  </span>
                </div>
              </div>

              <div className="otherUsers">
                <a href="#/">
                  <img
                    className="imgJoon"
                    alt="junchi211"
                    src="/images//joonhyun/fourseasons.jpg"
                  />
                </a>
                <a href="#/">
                  <span className="userId">
                    <strong>wecode22</strong>님 외 <strong>10명</strong>이
                    좋아합니다.{' '}
                  </span>
                </a>
              </div>
              <div id="commentPlus">
                <div>
                  <div>
                    <span className="commentUser">junchi111</span>
                    <span> 여행 가고 싶으다아~~~~</span>
                  </div>
                  <div>
                    <span className="commentUser">koko</span>
                    <span> 나아두~~</span>
                  </div>
                  <div>
                    <span className="commentUser">565sddf212s</span>
                    <span> 내일 고!?</span>
                    <span className="commentLog"> 15분전 </span>
                  </div>
                  <div>
                    <span className="commentUser">5221dsa</span>
                    <span> 고고</span>
                    <span className="commentLog"> 12분전 </span>
                  </div>
                </div>
              </div>
              <div id="typeComment">
                <input type="text" placeholder="댓글 달기..." />
                <span className="btn">
                  <button type="button">게시</button>
                </span>
              </div>
            </article>
            <div className="mainRight">
              <div className="myAccount">
                <a href="#/">
                  <img
                    className="spainPic"
                    alt="barcelona"
                    src="/images//joonhyun/barcelona.jpg"
                  />
                </a>
                <a href="#/">
                  <span className="userId">Barcelona</span>
                </a>
              </div>
              <div className="story">
                <div className="storyList">
                  <a href="#/">
                    <span className="storyStatus">스토리</span>
                  </a>
                  <a href="#/">
                    <span className="viewAll">모두보기</span>
                  </a>
                </div>

                <div className="storyHistory">
                  <div className="storyHistory1">
                    <div className="storyPic">
                      <a href="#/">
                        <img
                          className="storyImgPic"
                          alt="tokyo"
                          src="/images//joonhyun/tokyo.jpg"
                        />
                      </a>
                    </div>
                    <div className="storyHistory1Info">
                      <a href="#/">
                        <div className="userId">
                          <strong>Tokyo</strong>
                        </div>
                      </a>
                      <a href="#/">
                        <div className="time">16분전</div>
                      </a>
                    </div>
                  </div>
                  <div className="storyHistory2">
                    <div className="storyPic">
                      <a href="#/">
                        <img
                          className="storyImgPic"
                          alt="paris"
                          src="/images//joonhyun/paris.jpg"
                        />
                      </a>
                    </div>

                    <div className="storyHistory2Info">
                      <a href="#/">
                        <div className="userId">
                          <strong>Paris</strong>
                        </div>
                      </a>
                      <a href="#/">
                        <div className="time">20분전</div>
                      </a>
                    </div>
                  </div>
                  <div className="storyHistory3">
                    <div className="storyPic">
                      <a href="#/">
                        <img
                          className="storyImgPic"
                          alt="nhatrang"
                          src="/images/joonhyun/nhatrang.jpg"
                        />
                      </a>
                    </div>

                    <div className="storyHistory3Info">
                      <a href="#/">
                        <div className="userId">
                          <strong>Nhatrang</strong>
                        </div>
                      </a>
                      <a href="#/">
                        <div className="time">23분전</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="legalInfo">
                <div className="detail">
                  <p>westagram 정보,지원,홍보센터,API</p>
                  <p>채용정보, 개인정보처리방침, 약관</p>
                  <p>디렉터리, 프로필, 해시태그, 언어</p>
                </div>
                <div className="copyright">
                  <span>2020 WESTAGRAM </span>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Component;
