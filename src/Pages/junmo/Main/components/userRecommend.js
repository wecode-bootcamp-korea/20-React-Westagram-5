import React from 'react';
import './userRecommend.scss';

class UserRecommend extends React.Component {
  render() {
    return (
      <div className="userRecommend">
        <div className="userRecommendProfile">
          <div className="userRecommendImg">
            <img
              alt="profileImg"
              src="https://i.pinimg.com/564x/f6/25/17/f62517cc0d1f2ea71b0effedab07de98.jpg"
            />
          </div>
          <div className="userRecommendText">
            <p>{this.props.name}</p>
            <p>junmopark님이 팔로우합니다</p>
          </div>
        </div>
        <div className="userRecommendBtn">
          <p>팔로우</p>
        </div>
      </div>
    );
  }
}

export default UserRecommend;
