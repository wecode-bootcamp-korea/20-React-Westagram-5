import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Loginhoonic from './Pages/hoonic/Login/Login';
import Mainhoonic from './Pages/hoonic/Main/Main';

import Loginjoonhyun from './Pages/joonhyun/Login/Login';
import Mainjoonhyun from './Pages/joonhyun/Main/Main';

import Loginjunghyun from './Pages/junghyun/Login/Login';
import Mainjunghyun from './Pages/junghyun/Main/Main';

import Loginjunmo from './Pages/junmo/Login/Login';
import Mainjunmo from './Pages/junmo/Main/Main';

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/Login-hoonic" component={Loginhoonic} />
                    <Route exact path="/Main-hoonic" component={Mainhoonic} />

                    <Route exact path="/Login-junghyun" component={Loginjunghyun} />
                    <Route exact path="/Main-junghyun" component={Mainjunghyun} />

                    <Route exact path="/Login-joonhyun" component={Loginjoonhyun} />
                    <Route exact path="/Main-joonhyun" component={Mainjoonhyun} />

                    <Route exact path="/Login-junmo" component={Loginjunmo} />
                    <Route exact path="/Main-junmo" component={Mainkjunmo} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;

