import React from 'react';
import Nav from './components/Nav';
import Feed from './components/feed';
import './Main.scss';
import Aside from './components/Aside';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <section>
          <Nav></Nav>
          <main>
            <Feed></Feed>
            <Aside></Aside>
          </main>
        </section>
      </div>
    );
  }
}

export default Main;
