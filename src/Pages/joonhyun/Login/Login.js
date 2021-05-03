import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Loginjoonhyun extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      idInputValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="loginJoonhyun">
        <main className="logMain" role="main">
          <h1 className="logTitle">westagram</h1>
          <form id="idPw">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="userPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button id="userLoginBtn" type="button">
              로그인
            </button>
          </form>
          <footer>
            <a className="lossPw" href="d">
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </main>
      </div>
    );
  }
}

export default withRouter(Loginjoonhyun);
