import React from 'react';
import './commentInputList.scss';

class CommentInputList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { id, reply, time } = this.props;
    return (
      <>
        <div className="commentPlus">
          <span className="id">{id}</span>
          <span className="reply">{reply}</span>
          <span className="time">{time}</span>
        </div>
      </>
    );
  }
}

export default CommentInputList;
