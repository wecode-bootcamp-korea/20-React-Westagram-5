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

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
    console.log(this.state.id);
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
    console.log(this.state.pw);
  };
  render() {
    return (
      <div className="login">
        <section className="loginContainer">
          <header className="logo">
            <h1>Instagram</h1>
          </header>
          <form className="inputContainer">
            <input
              onChange={this.handleIdInput}
              className="inputID"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              className="inputPW"
              type="password"
              placeholder="비밀번호"
            />
            <div className="loginBtn">로그인</div>
            <button className="forgotPwBtn">비밀번호를 잊으셨나요?</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
