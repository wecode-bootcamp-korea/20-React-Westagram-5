import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHoonic extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-hoonic');
  };
  render() {
    return (
      <div className="loginHoonic">
        <div className="container">
          <h1 className="logoText">westagram</h1>
          <div className="input">
            <input
              id="id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input id="pw" type="password" placeholder="비밀번호" />
          </div>
          <button className="loginButton" onClick={this.goToMain}>
            로그인
          </button>
          <footer>비밀번호를 잊으셨나요?</footer>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginHoonic);
