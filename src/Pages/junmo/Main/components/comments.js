import React from 'react';
import './comments.scss';

class Comments extends React.Component {
  render() {
    return (
      <form className="commentBox">
        <input
          className="commentInput"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="commentAddBtn">게시</button>
      </form>
    );
  }
}

export default Comments;
