import React from 'react';
import './commentInputList.scss';

class CommentInputList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { id, reply, time, isLike } = this.props;
    return (
      <div className="commentPlus">
        <span className="id">{id}</span>
        <span className="reply">{reply}</span>
        <span className="time">{time}</span>
        <i className={`fas fa-heart ${isLike ? 'isLiked' : 'isNotLike'}`}></i>
      </div>
    );
  }
}

export default CommentInputList;
