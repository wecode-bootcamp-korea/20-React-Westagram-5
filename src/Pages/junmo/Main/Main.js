import React from 'react';
import Nav from './components/nav';
import Aside from './components/aside';
import Feed from './components/feed';
import './main.scss';

class Main extends React.Component {
  render() {
    return (
      <div className="main-jm">
        <Nav></Nav>
        <main>
          <Feed></Feed>
          <Aside></Aside>
        </main>
      </div>
    );
  }
}

export default Main;
