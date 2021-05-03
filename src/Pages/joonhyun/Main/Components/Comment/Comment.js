import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    return (
      <>
        <div id="commentPlus">
          <div>
            <div>
              <span className="commentUser">junchi111</span>
              <span> 여행 가고 싶으다아~~~~</span>
            </div>
            <div>
              <span className="commentUser">koko</span>
              <span> 나아두~~</span>
            </div>
            <div>
              <span className="commentUser">565sddf212s</span>
              <span> 내일 고!?</span>
              <span className="commentLog"> 15분전 </span>
            </div>
            <div>
              <span className="commentUser">5221dsa</span>
              <span> 고고</span>
              <span className="commentLog"> 12분전 </span>
            </div>
          </div>
        </div>
        <div id="typeComment">
          <input type="text" placeholder="댓글 달기..." />
          <span className="btn">
            <button type="button">게시</button>
          </span>
        </div>
      </>
    );
  }
}

export default Comment;
