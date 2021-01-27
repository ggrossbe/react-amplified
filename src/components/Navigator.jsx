import React, { Component } from 'react';
import { Navbar, Nav, BSpan } from 'bootstrap-4-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
//import Amplify, { AmplifySignout } from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import "../App.css";

const HomeItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/" active>
      Home
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams">
      Teams
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices">
      Practices
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback">
      Feedback
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports">
      Reports
    </Nav.ItemLink>
  </React.Fragment>
)

const LoginItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/login" active>
      Login
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
  </React.Fragment>
)

const TeamItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams" active>
      Teams
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices">
      Practices
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback">
      Feedback
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports">
      Reports
    </Nav.ItemLink>
  </React.Fragment>
)

const PracticeItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams">
      Teams
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices" active>
      Practices
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback">
      Feedback
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports">
      Reports
    </Nav.ItemLink>
  </React.Fragment>
)

const FeedbackItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams">
      Teams
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices">
      Practices
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback" active>
      Feedback
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports">
      Reports
    </Nav.ItemLink>
  </React.Fragment>
)


const DiaryItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams">
      Teams
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices">
      Practices
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback">
      Feedback
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports" active>
      Reports
    </Nav.ItemLink>
  </React.Fragment>
)

const ReportItems = props => (
  <React.Fragment>
    <Nav.ItemLink href="#/">
      Home
    </Nav.ItemLink>
    <Nav.ItemLink href="#/teams">
      Teams
    </Nav.ItemLink>
    <Nav.ItemLink href="#/practices">
      Practices
    </Nav.ItemLink>
    <Nav.ItemLink href="#/feedback">
      Feedback
    </Nav.ItemLink>
    <Nav.ItemLink href="#/diary">
      Diary
    </Nav.ItemLink>
    <Nav.ItemLink href="#/reports" active>
      Reports
      <BSpan srOnly>(current}</BSpan>
    </Nav.ItemLink>
  </React.Fragment>
)

export default class Navigator extends Component {
  render() {
    return (
      <Navbar expand="md" dark bg="dark" fixed="top" navbar-custom >
        <Navbar.Brand href="#">TrainingsTracker</Navbar.Brand>
        <Navbar.Toggler target="#navbarsExampleDefault" />

        <Navbar.Collapse id="navbarsExampleDefault">
          <Navbar.Nav mr="auto">
            <HashRouter>
              <Switch>
                <Route exact path="/" component={HomeItems} />
                <Route exact path="/login" component={LoginItems} />
                <Route exact path="/teams" component={TeamItems} />
                <Route exact path="/practices" component={PracticeItems} />
                <Route exact path="/feedback" component={FeedbackItems} />
                <Route exact path="/diary" component={DiaryItems} />
                <Route exact path="/reports" component={ReportItems} />
              </Switch>
            </HashRouter>
          </Navbar.Nav>
          <Navbar.Text>Greetings</Navbar.Text>
          <AmplifySignOut/>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
