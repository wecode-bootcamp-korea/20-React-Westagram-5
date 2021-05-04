import React from 'react';
import './CommentInput.scss';

class CommentInput extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
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
