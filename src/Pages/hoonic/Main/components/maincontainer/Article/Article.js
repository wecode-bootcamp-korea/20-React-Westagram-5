import React from 'react';
import Comment from '../../Comments/Comment';
// import COMMENT from '../../Comments/CommentData';
import './Article.scss';

class ArticleHoonic extends React.Component {
  constructor() {
    super();
    this.state = {
      commentValue: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/hoonic/commentData.json', {
      method: 'Get',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentLsit: data,
        });
      });
  }
  //   this.setState({
  //     commentList: COMMENT,
  //   });

  addCommentEnter = e => {
    if (this.state.commentValue.length >= 1 && e.key === 'Enter') {
      this.addComment();
    } else {
      this.setState({ commentValue: e.target.value });
    }
  };

  addComment = () => {
    const { commentList, commentValue } = this.state;
    this.setState({
      commentList: commentList.concat([commentValue]),
      commentValue: '',
    });
  };

  // this.state.commentList.concat([this.state.commentValue])
  // commentList: [...commentList, commentValue] 스프레이드 연산자

  render() {
    const { commentValue, commentList } = this.state;
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
            <span className="commentID">hoonic</span>
            <span>안녕하세요</span>
            {commentList.map(el => {
              return (
                <Comment
                  // comment={el}
                  key={el.id}
                  name={el.userName}
                  content={el.content}
                />
              );
            })}
          </div>
        </div>
        <div className="commentPage">
          <img
            alt="happyicon"
            src="/images/hoonic/free-icon-happy-569501.png"
          />
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            value={commentValue}
            onChange={this.addCommentEnter}
            onKeyPress={this.addCommentEnter}
          />
          <button
            className="commentButton"
            disabled={commentValue.length >= 1 ? false : true}
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
