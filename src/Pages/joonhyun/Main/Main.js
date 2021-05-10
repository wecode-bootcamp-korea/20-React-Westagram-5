import React from 'react';
import './Main.scss';
import Nav from '../../../Components/Nav/Nav';
import Article from '../Main/Components/Article/Article';
import Story from '../Main/Components/Story/Story';

class Component extends React.Component {
  render() {
    return (
      <div className="MainJoonhyun">
        <Nav />
        <main id="main">
          <div className="feeds">
            <Article />
            <div className="mainRight">
              <div className="myAccount">
                <a href="#/">
                  <img
                    className="spainPic"
                    alt="barcelona"
                    src="/images//joonhyun/barcelona.jpg"
                  />
                </a>
                <a href="#/">
                  <span className="userId">Barcelona</span>
                </a>
              </div>
              <Story />
              <footer className="legalInfo">
                <div className="detail">
                  <p>westagram 정보,지원,홍보센터,API</p>
                  <p>채용정보, 개인정보처리방침, 약관</p>
                  <p>디렉터리, 프로필, 해시태그, 언어</p>
                </div>
                <div className="copyright">
                  <span>2020 WESTAGRAM </span>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Component;
