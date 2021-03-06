import React from 'react';
import CommentInputList from './commentInputList';
import CommentInput from './commentInput';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      inputComment: '',
      commentList: [],
      mockCommentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/images/joonhyun/data/commentData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          mockCommentList: res.replyData,
        });
      });
  }

  inputHandler = e => {
    e.key === 'Enter'
      ? this.addComment()
      : this.setState({ inputComment: e.target.value });
  };

  addComment = () => {
    this.setState({
      commentList: [
        ...this.state.commentList,
        { id: 'wecode20', time: '10분', comment: this.state.inputComment },
      ],
      inputComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="commentPlus">
          {this.state.mockCommentList.map(commentInfo => {
            const { id, reply, time, isLike } = commentInfo;
            return (
              <CommentInputList
                key={id}
                id={id}
                reply={reply}
                time={time}
                isLike={isLike}
              />
            );
          })}
        </div>
        <div id="typeComment">
          {this.state.commentList.map(commentInfo => {
            return (
              <CommentInput
                key={commentInfo.id}
                id={commentInfo.id}
                time={commentInfo.time}
                comment={commentInfo.comment}
              />
            );
          })}

          <div className="inputComment">
            <input
              value={this.state.inputComment}
              className="commentInput"
              type="text"
              placeholder="댓글 달기..."
              onKeyPress={this.inputHandler}
              onChange={this.inputHandler}
            />
            <span className="btn">
              <button onClick={this.addComment} type="button">
                게시
              </button>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default CommentList;
