import React from 'react';

class CommentValue extends React.Component {
  render() {
    return <li>{this.props.value.value}</li>;
  }
}

export default CommentValue;
