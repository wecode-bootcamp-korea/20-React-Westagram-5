import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <>
        <li>{this.props.newComment}</li>
      </>
    );
  }
}

export default Comment;
