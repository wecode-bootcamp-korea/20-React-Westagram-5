import React from 'react';
import './Main.scss';

class Mainjunghyun extends React.Component {
  constructor() {
    super();
    this.state = {
      inputComment: '',
      commentList: [],
    };
  }

  handleCommentInput = e => {
    if (e.key === 'Enter') {
      this.addComment();
    } else {
      this.setState({
        inputComment: e.target.value,
      });
    }
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat(this.state.inputComment),
      inputComment: '',
    });
  };

  render() {
    return (
      <>
        <header className="Headerjunghyun">
          <div className="westagramImageAndLogo">
            <div className="westagramImage">
              <i className="fab fa-instagram"></i>
            </div>
            <div className="westagramLogo">
              <a>
                <h1>Westagram</h1>
              </a>
            </div>
          </div>
          <div className="inputAndSearch">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="검색" />
          </div>
          <nav className="topRightMenu">
            <a href="#">
              <i class="fas fa-compass"></i>
            </a>
            <a href="#">
              <i class="far fa-heart"></i>
            </a>
            <a href="#">
              <i class="fas fa-user"></i>
            </a>
          </nav>
        </header>
        <main className="Mainjunghyun">
          <div className="feedOutline">
            <article className="innerFeedOutline">
              <section className="feedHead">
                <div className="userImageAndName">
                  <i class="far fa-user-circle"></i>
                  <p>canon_mj</p>
                </div>
                <i class="fas fa-ellipsis-h"></i>
              </section>
              <div>
                <img
                  className="feedImage"
                  alt="scone bread image"
                  src="/images/junghyun/img_baking.jpeg"
                />
              </div>
              <section>
                <ul className="comments">
                  <li className="commentFirst">
                    canon_mj 위워크에서 진행한 베이킹 클래스...
                  </li>
                  <li className="commentSecond">
                    neceosecius 거봐 좋았잖아~~~~
                  </li>
                </ul>
                <div className="commentList">
                  {this.state.commentList.map(el => {
                    return <li>{el}</li>;
                  })}
                </div>
                <div>
                  <input
                    className="writeComment"
                    type="text"
                    placeholder="댓글 달기 ..."
                    onChange={this.handleCommentInput}
                    onKeyPress={this.handleCommentInput}
                    value={this.state.inputComment}
                  />
                  <button className="postButton" onClick={this.addComment}>
                    게시
                  </button>
                </div>
              </section>
            </article>
          </div>
          <aside className="Asidejunghyun">
            <section className="asideTop">
              <i class="fas fa-meteor"></i>
              <p>wecode_bootcamp</p>
            </section>
            <section className="asideStoryBox">
              <article>
                <div className="asideStoryMenu">
                  <p>스토리</p>
                  <p>모두보기</p>
                </div>
                <div className="asideStoryList">
                  <i class="far fa-user-circle"></i>
                  <p>wecode_bootcamp</p>
                </div>
              </article>
            </section>
            <section className="asideRecommendBox">
              <article>
                <div className="asideRecommendMenu">
                  <p>회원님을 위한 추천</p>
                  <p>모두보기</p>
                </div>
                <div className="asideRecommendList">
                  <div>
                    <i className="fas fa-user-circle"></i>
                    <p>joaaaaaahye</p>
                  </div>
                  <p>팔로우</p>
                </div>
              </article>
            </section>
            <footer>
              <p>
                Instagram 정보.지원.홍보 센터. API. 채용 정보. 개인정보처리방침.
                약관. 디렉터리. 프로필. 해시태그. 언어
              </p>
              <p>2019 INSTAGRAM</p>
            </footer>
          </aside>
        </main>
      </>
    );
  }
}

export default Mainjunghyun;
