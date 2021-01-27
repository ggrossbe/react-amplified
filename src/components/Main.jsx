import React, { Component } from 'react';
import { Container } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home.jsx';
//import Login from '../pages/Login.jsx';
import Teams from '../pages/Teams.jsx';
import Practices from '../pages/Practices.jsx';
import Feedback from '../pages/Feedback.jsx';
import Diary from '../pages/Diary.jsx';
import Reports from '../pages/Reports.jsx';

export default class Main extends Component {
  render() {
    return (
      <Container as="main" role="main">
        <div className="starter-template">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/practices" component={Practices} />
              <Route exact path="/feedback" component={Feedback} />
              <Route exact path="/diary" component={Diary} />
              <Route exact path="/reports" component={Reports} />
            </Switch>
          </HashRouter>
        </div>
      </Container>
    )
  }
}
