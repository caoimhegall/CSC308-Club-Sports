import React from 'react';
import '../../app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Register from '../register/Register';
import Login from '../login/Login';

import HomePage from './HomePage';
import FormsPage from '../forms/forms';
import NewEvent from '../events/newEvent';
import SportsDropDown from './SportsDropDown';
import CalendarPage from '../calendar/calendar';

/* TODO: add link to sports page on menu bar */

const Menu = () => (
  <Router>
    <div className="menu">
      <img src="/CalPolyLogo.png" alt="Cal Poly Logo" />
      <h1>CLUB SPORTS HUB</h1>
      <Link to="/login">LOGIN</Link>
      <Link to="/forms">FORMS</Link>
      <SportsDropDown />
      <Link to="/calendar">CALENDAR</Link>
      <Link to="/">HOME</Link>
    </div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/forms" component={FormsPage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/newEvent" component={NewEvent} />
      <Route exact path="/calendar" component={CalendarPage} />
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default Menu;
