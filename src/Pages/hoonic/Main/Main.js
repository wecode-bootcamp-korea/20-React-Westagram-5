import React from 'react';
import './Main.scss';
import ArticleHoonic from './components/maincontainer/Article/Article';
import AsideHoonic from './components/maincontainer/Aside/Aside';
import NavHoonic from './components/Nav/Nav';
import ProfileListHoonic from './components/maincontainer/ProfileList/ProfileList';

class MainHoonic extends React.Component {
  render() {
    return (
      <div className="mainHoonic">
        <NavHoonic />
        <div className="mainContainer">
          <main>
            <div className="feedContainer">
              <ProfileListHoonic />
              <ArticleHoonic />
            </div>
            <AsideHoonic />
          </main>
        </div>
      </div>
    );
  }
}

export default MainHoonic;
