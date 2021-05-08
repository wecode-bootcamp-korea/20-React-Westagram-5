import React from 'react';
import './Article.scss';
import CommentList from '../Comment/CommentList';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/images/joonhyun/data/feed.json')
      .then(feedData => feedData.json())
      .then(feedData => {
        this.setState({
          feedList: feedData.feedData,
        });
      });
  }

  render() {
    return (
      <article className="articleJoonhyun">
        {this.state.feedList.map(feedInfo => {
          const { id, imgSrc } = feedInfo;
          return (
            <div className="feedList">
              <div className="profileTop">
                <div className="profileImg">
                  <a href="#/">
                    <img className="imgJoon" alt={id} src={imgSrc} />
                  </a>
                  <a href="#/">
                    <span className="userId">{id}</span>
                  </a>
                </div>
                <span>
                  <button className="moreBtn"> ... </button>
                </span>
              </div>
              <img className="feedImg" alt="feedImg" src={imgSrc} />
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
                  <img className="imgJoon" alt="junchi211" src={imgSrc} />
                </a>
                <a href="#/">
                  <span className="userId">
                    <strong>wecode22</strong>님 외 <strong>10명</strong>이
                    좋아합니다.
                  </span>
                </a>
              </div>
              <CommentList />
            </div>
          );
        })}
      </article>
    );
  }
}
export default Article;
