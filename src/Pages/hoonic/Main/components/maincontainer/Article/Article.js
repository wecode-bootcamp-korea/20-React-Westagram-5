import React from 'react';
import './Article';

class ArticleHoonic extends React.Component {
  render() {
    return (
      <article>
        <div className="feedHeader">
          <img alt="profile img" src="/images/hoonic/profileicon.png" />
          <span className="feedHeaderText">kancho</span>
        </div>
        <div className="feedImage">
          <img src="/images/hoonic/feed_image.jpeg" />
        </div>
        <div className="iconBar">
          <img
            alt="heart"
            className="iconBarHeart"
            src="/images/hoonic/heart.png"
          />
          <img
            alt="Chat"
            className="iconBarChat"
            src="/images/hoonic/free-icon-speech-bubble-13522.png"
          />
          <img alt="dm" className="iconBarDm" src="/images/hoonic/dm.png" />
          <img
            alt="book mark"
            className="iconBarBookMark"
            src="/images/hoonic/free-icon-bookmarks-1174410.png"
          />
        </div>
        <p className="likeCount">좋아요 55,555개</p>
        <div className="commentLists">
          <div className="chatList">
            <span>hoonic</span>
          </div>
          <div className="chatList">
            <span>Hoon</span>
          </div>
        </div>
        <div className="comment">
          <img src="/images/hoonic/free-icon-happy-569501.png" />
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="commentButton" disabled>
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default ArticleHoonic;
