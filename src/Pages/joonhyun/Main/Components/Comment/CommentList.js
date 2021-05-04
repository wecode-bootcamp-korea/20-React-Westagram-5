import React from 'react';
import './CommentList.scss';
import CommentInput from './commentInput';

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
      commentList: this.state.commentList.concat(this.state.inputComment),
      inputComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="commentPlus">
          {this.state.replyDatas.map(element => {
            const { id, reply, time } = element;
            return <CommentInput id={id} reply={reply} time={time} />;
          })}
        </div>
        <div id="typeComment">
          {this.state.commentList.map(e => {
            return (
              <div className="newInput">
                <span className="inputId">wecode20</span>
                <span className="inputMessage">{e}</span>
                <span className="inputTime">10분전</span>
              </div>
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
