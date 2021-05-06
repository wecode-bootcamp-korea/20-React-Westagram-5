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
        </div>
        <div className="storyHistoryInfo">
          <div className="userId">
            <span className="id"> {id} </span>
          </div>
          <div className="usertime">
            <span className="time"> {time} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default StoryList;
