import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class Loginjoonhyun extends React.Component {
  goToMain = () => {
    this.props.history.push('/Main-joonhyun');
  };

  render() {
    return (
      <div className="loginJoonhyun">
        <main className="logMain" role="main">
          <h1 className="logTitle">westagram</h1>
          <form id="idPw">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input id="userPw" type="password" placeholder="비밀번호" />
            <button id="userLoginBtn" onClick={this.goToMain} type="button">
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
