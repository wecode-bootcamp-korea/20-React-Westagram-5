import React from 'react';
import Comments from './comments';
import './feed.scss';

class Feed extends React.Component {
  render() {
    return (
      <div className="feed">
        <header className="feedHeader">
          <div className="profile">
            <div>
              <img
                alt="feedProfileImg"
                className="ProfileImg"
                src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
              />
            </div>
            <div>
              <p className="profileName">wecode</p>
            </div>
          </div>
          <div className="profileBtn">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </header>
        <article className="feedImg">
          <img
            alt="feedImg"
            src="https://i.pinimg.com/564x/04/59/4d/04594d4788648d569ee9c465aedae768.jpg"
          />
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
              <span class="userId">wecode_bootcamp</span> 위코드는 단순
              교육업체가 아닌 개발자 커뮤니티입니다.
            </p>
          </div>
          <Comments />
        </div>
      </div>
    );
  }
}

export default Feed;
