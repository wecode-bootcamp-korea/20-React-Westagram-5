import React from 'react';
import CommentValue from './commentValue';
import './comments.scss';

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputComment: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/junmopark/mockdata.json', {
      method: 'Get',
    })
      .then(res => res.json())
      .then(mockdata => {
        this.setState({
          commentList: mockdata,
        });
      });
  }

  inputHandler = e => {
    this.setState({
      inputComment: e.target.value,
    });
  };
  addComment = e => {
    const { commentList, inputComment } = this.state;
    e.preventDefault();
    this.setState({
      commentList: commentList.concat(inputComment),
      inputComment: '',
    });
  };

  render() {
    const { commentList } = this.state;
    return (
      <>
        <div className="commentsList">
          <ul>
            {this.state.commentList.map(commentList => {
              return <CommentValue value={commentList} />;
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
