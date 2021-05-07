import React from 'react';
import './commentInput.scss';

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="inputAcutalComment">
        <span className="inputId">{this.props.id}</span>
        <span className="inputMessage ">{this.props.comment}</span>
        <span className="inputTime">{this.props.time}</span>
      </div>
    );
  }
}

export default CommentInput;
