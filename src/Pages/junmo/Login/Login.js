import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  fetch = e => {
    e.preventDefault();
    fetch('http://10.58.7.242:8000/users/signIn', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
      }),
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(result => console.log('결과: ', result));
  };

  inputHendler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login">
        <section className="loginContainer">
          <header className="logo">
            <h1>Instagram</h1>
          </header>
          <form className="inputContainer" onSubmit={this.fetch}>
            <input
              onChange={this.handleIdInput}
              className="inputID"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              className="inputPW"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className="loginBtn"
              disabled
              disabled={
                this.state.id.includes('@') && this.state.pw.length >= 5
                  ? false
                  : true
              }
            >
              로그인
            </button>
            <button className="forgotPwBtn">비밀번호를 잊으셨나요?</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
