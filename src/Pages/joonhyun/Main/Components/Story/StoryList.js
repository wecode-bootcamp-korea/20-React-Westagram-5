import React from 'react';
import './StoryList.scss';

class StoryList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { id, time, imgSrc } = this.props;
    return (
      <div className="storyHistory">
        <div className="storyPic">
          <img className="storyImgPic" alt={id} src={imgSrc} />
          <span className="storyHitoryInfo">
            <span className="id"> {id} </span>
            <span className="time"> {time} </span>
          </span>
        </div>
      </div>
    );
  }
}

export default StoryList;
