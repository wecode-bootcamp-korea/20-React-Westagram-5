import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Loginjoonhyun extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
      disabled: true,
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
              onChange={this.handleIdInput}
            />
            <input
              id="userPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
            <button
              className={
                this.state.idInputValue.indexOf('@') !== -1 &&
                this.state.pwInputValue.length > 5
                  ? 'changeButtonColor'
                  : 'keepButtonColor'
              }
              disabled={
                this.state.idInputValue.indexOf('@') !== -1 &&
                this.state.pwInputValue.length > 5
                  ? false
                  : true
              }
              onClick={this.goToMain}
              type="button"
            >
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
