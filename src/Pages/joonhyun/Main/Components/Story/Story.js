import React from 'react';
import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <div className="storyJoonhyun">
        <div className="storyList">
          <a href="#/">
            <span className="storyStatus">스토리</span>
          </a>
          <a href="#/">
            <span className="viewAll">모두보기</span>
          </a>
        </div>

        <div className="storyHistory">
          <div className="storyHistory1">
            <div className="storyPic">
              <a href="#/">
                <img
                  className="storyImgPic"
                  alt="tokyo"
                  src="/images//joonhyun/tokyo.jpg"
                />
              </a>
            </div>
            <div className="storyHistory1Info">
              <a href="#/">
                <div className="userId">
                  <strong>Tokyo</strong>
                </div>
              </a>
              <a href="#/">
                <div className="time">16분전</div>
              </a>
            </div>
          </div>
          <div className="storyHistory2">
            <div className="storyPic">
              <a href="#/">
                <img
                  className="storyImgPic"
                  alt="paris"
                  src="/images//joonhyun/paris.jpg"
                />
              </a>
            </div>

            <div className="storyHistory2Info">
              <a href="#/">
                <div className="userId">
                  <strong>Paris</strong>
                </div>
              </a>
              <a href="#/">
                <div className="time">20분전</div>
              </a>
            </div>
          </div>
          <div className="storyHistory3">
            <div className="storyPic">
              <a href="#/">
                <img
                  className="storyImgPic"
                  alt="nhatrang"
                  src="/images/joonhyun/nhatrang.jpg"
                />
              </a>
            </div>

            <div className="storyHistory3Info">
              <a href="#/">
                <div className="userId">
                  <strong>Nhatrang</strong>
                </div>
              </a>
              <a href="#/">
                <div className="time">23분전</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
