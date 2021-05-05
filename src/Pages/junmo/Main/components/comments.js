import React from 'react';
import './comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputComment: '',
      commentList: [],
    };
  }
  inputHandler = e => {
    this.setState({
      inputComment: e.target.value,
    });
  };
  addComment = e => {
    e.preventDefault();
    this.setState({
      commentList: this.state.commentList.concat(this.state.inputComment),
      inputComment: '',
    });
  };

  render() {
    return (
      <>
        <div className="commentsList">
          <ul>
            {this.state.commentList.map(el => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <form className="addComments" onSubmit={this.addComment}>
          <input
            value={this.state.inputComment}
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            onChange={this.inputHandler}
          />
          <button className="commentAddBtn">게시</button>
        </form>
      </>
    );
  }
}

export default Comments;
