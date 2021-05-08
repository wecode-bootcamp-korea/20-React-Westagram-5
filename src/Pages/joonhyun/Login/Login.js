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

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.7.242:8000/users/signIn', {
      method: 'POST',
      headers: {
        Authorization: 'token',
      },
      body: JSON.stringify({
        email: this.state.idInputValue,
        password: this.state.pwInputValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('wtw-token', result.token);
        }

        if (result.result === 'SUCCESS') {
          return this.props.history.push('/Main-joonhyun');
        }

        if (result.result === 'INVALID_USER') {
          return alert('비밀번호 또는 이메일이 잘 못 되었습니다.');
        }
      });
  };

  render() {
    const validationInfo = {
      idValidation: this.state.idInputValue.indexOf('@') !== -1,
      pwValidation: this.state.pwInputValue.length > 5,
    };
    return (
      <div className="loginJoonhyun">
        <main className="logMain" role="main">
          <h1 className="logTitle">westagram</h1>
          <form id="idPw">
            <input
              id="userId"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={this.handleInput}
              name="idInputValue"
            />
            <input
              id="userPw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handleInput}
              name="pwInputValue"
            />
            <button
              className={
                validationInfo.idValidation && validationInfo.pwValidation
                  ? 'changeButtonColor'
                  : 'keepButtonColor'
              }
              disabled={
                !validationInfo.idValidation && validationInfo.pwValidation
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
