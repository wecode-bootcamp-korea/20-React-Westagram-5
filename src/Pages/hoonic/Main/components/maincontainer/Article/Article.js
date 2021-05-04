import React from 'react';
import './Article.scss';

class ArticleHoonic extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentList: [],
    };
  }

  addCommentEnter = e => {
    if (this.state.commentValue >= 1 && e.key === 'Enter') {
      this.addComment();
    } else {
      this.setState({ commentValue: e.target.value });
    }
  };

  addComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.commentValue]),
      commentValue: '',
    });
  };

  render() {
    console.log('state >>>>>>>>', this.state);
    return (
      <article>
        <div className="feedHeader">
          <img alt="profile img" src="/images/hoonic/profileicon.png" />
          <span className="feedHeaderText">kancho</span>
        </div>
        <div className="feedImage">
          <img alt="feefimg" src="/images/hoonic/feed_image.jpeg" />
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
        <div divclassName="commentLists">
          <div className="chatList">
            <li>hoonic</li>
            <li>Hoon</li>
            {this.state.commentList.map(el => {
              return <li>{el}</li>;
            })}
          </div>
        </div>
        <div className="comment">
          <img
            alt="happyicon"
            src="/images/hoonic/free-icon-happy-569501.png"
          />
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.commentValue}
            onChange={this.addCommentEnter}
            onKeyPress={this.addCommentEnter}
          />
          <button
            className="commentButton"
            disabled={this.state.commentValue.length >= 1 ? false : true}
            onClick={this.addComment}
          >
            게시
          </button>
        </div>
      </article>
    );
  }
}

export default ArticleHoonic;
