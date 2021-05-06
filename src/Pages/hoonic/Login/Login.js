import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHoonic extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }

  handleIdInput = e => {
    this.setState({ idValue: e.target.value });
  };

  handlePwInput = e => {
    this.setState({ pwValue: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('http://10.58.1.54:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.MESSAGE === 'SUSSES') {
          this.props.history.push('/Main-hoonic');
          console.log(result);
        } else {
          alert('확인해주세요');
        }
      });
  };

  // goToMain = () => {
  //   this.props.history.push('/Main-hoonic');
  // };
  render() {
    console.log('state >>>>>>>>', this.state.PwValue);
    return (
      <div className="loginHoonic">
        <div className="container">
          <h1 className="logoText">westagram</h1>
          <div className="input">
            <input
              id="id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일"
              onChange={this.handleIdInput}
            />
            <input
              id="pw"
              type="password"
              placeholder="비밀번호"
              onChange={this.handlePwInput}
            />
          </div>
          <button
            disabled={
              this.state.idValue.includes('@') && 4 < this.state.pwValue.length
                ? false
                : true
            }
            onClick={this.handleSubmit}
          >
            로그인
          </button>
          <footer>비밀번호를 잊으셨나요?</footer>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginHoonic);
