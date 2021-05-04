import React from 'react';
import './Article.scss';
import CommentList from '../Comment/CommentList';

class Article extends React.Component {
  render() {
    return (
      <article className="articleJoonhyun">
        <div className="profileTop">
          <div className="profileImg">
            <a href="#/">
              <img
                className="imgJoon"
                alt="junchi211"
                src="/images/joonhyun/fourseasons.jpg"
              />
            </a>
            <a href="#/">
              <span className="userId">junchi211</span>
            </a>
          </div>
          <span>
            <button className="moreBtn"> ... </button>{' '}
          </span>
        </div>

        <img
          className="seychelles"
          alt="Seychelles"
          src="/images/joonhyun//fourseasons.jpg"
        />

        <div className="statusCheck">
          <div className="leftStatusCheck">
            <span className="statusHeart">
              <i className="fas fa-heart"></i>
            </span>
            <span className="statusIcon">
              <i className="far fa-comment"></i>
            </span>
            <span className="statusIcon">
              <i className="fas fa-paper-plane"></i>
            </span>
          </div>
          <div className="rightStatuscheck">
            <span className="download">
              <i className="far fa-bookmark"></i>
            </span>
          </div>
        </div>

        <div className="otherUsers">
          <a href="#/">
            <img
              className="imgJoon"
              alt="junchi211"
              src="/images//joonhyun/fourseasons.jpg"
            />
          </a>
          <a href="#/">
            <span className="userId">
              <strong>wecode22</strong>님 외 <strong>10명</strong>이 좋아합니다.
            </span>
          </a>
        </div>
        <CommentList />
      </article>
    );
  }
}
export default Article;
