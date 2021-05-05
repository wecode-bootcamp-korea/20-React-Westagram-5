import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Loginjunghyun extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdPwInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  goToMain = () => {
    this.props.history.push('/Main-junghyun');
  };

  render() {
    return (
      <div className="Loginjunghyun">
        <div className="loginBox">
          <header>
            <h1>Westagram</h1>
          </header>
          <form>
            <div className="loginIdAndPassword">
              <input
                id="loginId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={this.handleIdPwInput}
                name="idValue"
              />
              <input
                id="loginPassword"
                type="password"
                placeholder="비밀번호"
                onChange={this.handleIdPwInput}
                name="pwValue"
              />
            </div>
          </form>
          <section className="loginButton">
            <button id="loginBtn" type="button" onClick={this.goToMain}>
              로그인
            </button>
          </section>
          <section className="forgotPassword">
            <p>비밀번호를 잊으셨나요?</p>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Loginjunghyun);
