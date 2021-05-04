import React from 'react';
import CommentInputList from './commentInputList';
import CommentInput from './CommentInput';
import './CommentList.scss';

class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      replyDatas: [
        {
          id: 'junchi111',
          reply: '여행 가고 싶으다아~~~~',
          time: '20분전',
        },
        {
          id: 'koko',
          reply: '나아두~~',
          time: '16분전',
        },
        {
          id: '565sddf212s',
          reply: '내일 고?',
          time: '15분전',
        },
        {
          id: '5221dsa',
          reply: '고고',
          time: '12분전',
        },
      ],
      inputComment: '',
      commentList: [],
    };
  }

  inputHandler = e => {
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
      commentList: this.state.commentList.concat({
        id: 'wecode20',
        time: '10분',
        comment: this.state.inputComment,
      }),
      inputComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="commentPlus">
          {this.state.replyDatas.map(element => {
            const { id, reply, time } = element;
            return <CommentInputList id={id} reply={reply} time={time} />;
          })}
        </div>
        <div id="typeComment">
          {this.state.commentList.map(commentInfo => {
            return (
              <CommentInput
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