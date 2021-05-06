import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Loginjunghyun extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isButtonActive: false,
    };
  }

  goToMain = () => {
    this.props.history.push('/Main-junghyun');
    // console.log('패치해주세요');

    // fetch('http://10.58.0.184:8000/user/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.idValue,
    //     password: this.state.pwValue,
    //     phonenumber: '010-3263-2769',
    //     nickname: 'wecode1',
    //   }),
    // })
    //   .then(response => response.json())
    // .then(result => console.log('결과: ', result));
    //     .then(result => {
    //       if (result.MESSAGE === 'SUCCESS') {
    //         localStorage.setItem('token', result.token);
    //       } else {
    //         alert('아이디나 비밀번호를 확인해주세요');
    //       }
    //     });
  };

  handleIdPwInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeColorBtn = () => {
    const { idValue, pwValue } = this.state;
    idValue.includes('@') && pwValue.length >= 5
      ? this.setState({ isButtonActive: true })
      : this.setState({ isButtonActive: false });
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
                onKeyUp={this.changeColorBtn}
                name="idValue"
              />
              <input
                id="loginPassword"
                type="password"
                placeholder="비밀번호"
                onChange={this.handleIdPwInput}
                onKeyUp={this.changeColorBtn}
                name="pwValue"
              />
            </div>
          </form>
          <section className="loginButton">
            <button
              type="button"
              onClick={this.goToMain}
              className={
                this.state.isButtonActive ? 'activated' : 'deactivated'
              }
            >
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
