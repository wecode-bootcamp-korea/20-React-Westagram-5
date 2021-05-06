import React from 'react';
import './Comment.scss';

class CommentHoonic extends React.Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <span className="commentID">kancho</span>
        <span> {comment}</span>
      </div>
    );
  }
}

export default CommentHoonic;
