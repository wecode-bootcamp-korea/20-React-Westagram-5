import React from 'react';
import StoryList from './StoryList';
import './Story.scss';

class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      storyList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/images/joonhyun/data/storyList.json')
      .then(storyData => storyData.json())
      .then(storyData => {
        this.setState({
          storyList: storyData.storyListData,
        });
      });
  }

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
          {this.state.storyList.map(element => {
            const { FK, id, time, imgSrc } = element;
            return <StoryList key={FK} id={id} time={time} imgSrc={imgSrc} />;
          })}
        </div>
      </div>
    );
  }
}

export default Story;
