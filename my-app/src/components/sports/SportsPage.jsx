import React from 'react';
import './sports.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import SportCarousel from './SportCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from './button.png';
import CalendarPage from '../calendar/calendar';
import FormsPage from '../forms/forms';
import FAQPage from './faq';


const SportsPage = () => (
  <div>
    <SportsMenu />
    <SportsTitle />
    <Follow />
    <SportsInfoBottom />
    <SportCarousel />
  </div>
  
);

const SportsMenu = () => (
  <Router>
  <div className="menu2">

      <h1>SWIM CLUB</h1>
      <Link to="/faq">FAQ</Link>
      <Link to="/forms">FORMS</Link>
      <Link to="/forms">CONTACT</Link>
      <Link to="/calendar">SCHEDULE</Link>
      <Link to="/forms">RESULTS</Link>
  </div>
    <Switch>
      <Route exact path='/' component={SportsPage} />
      <Route exact path="/calendar" component={CalendarPage}  />
      <Route exact path="/forms" component={FormsPage} />
      <Route eaxct path="/faq" component={FAQPage} />
    </Switch>
  </Router>
);

class SportsInfo extends React.Component {
  constructor() 
  {
    super();
    this.state = {
      name: ' ',
      gender: ' ',
      sports: [],
    };
  }
  componentDidMount() {
    this.getEvents();
  }
  getEvents() 
  {
    const name = this.state.username;
    const gender = this.state.password;
    fetch(`http://localhost:5000/teams/${name}/${gender}`)
      .then((response) => response.json())
      .then((response) => this.setState({ sports: response.data }))
      .catch((err) => console.error(err));
  }
  render() {
      const { sports } = this.state; 
      return(
          <div className="sportsinfo">
          { sports.map((e) => (
          <h1>key={e.about}</h1>
          ))}
          <h2>Join one of the best collegiate swim clubs in the West Coast! Cal Poly Swim Club 
              has over 100 members and is constantly growing. We offer high quality professional 
              coaching that can reach swimmers of all ability. The goal of our team is to provide 
              every member an opportunity to improve their swimming skills and achieve success 
              at his or her level of ability, from beginner to international competitor. 
              Come by and check us out! We are a non profit club, that is run by its elected 
              Board of Directors which meets each month. All members are welcome at each meeting 
              and encouraged to be involved in team activities and fundraisers.
          </h2>
          <img src="web.jpg" alt="web icon" />
          <img src="instagram.jpg" alt="asdf" />
          <img src="facebook.jpg" alt="asdf" />
      </div>
      );}
}




const SportsInfoBottom = () => (
  <div className="sportsinfobottom">
    <h1>
      UCLA Feb 9th
    </h1>
    <a href="#results">see results</a>
    <h2>We brought 34 swimmers to UCLA last weekend and broke 3 swim club records!</h2>
    <h1>UCSD Jan 24th</h1>
    <a href="#results">see results</a>
    <h2>Swim Club brought 46 swimmers to UCSD on January 24th </h2>
  </div>
);

const Follow = () => (
  <div className="follow">
    <img src={logo} alt="button" />
    <button type="button" className="dropbtn">
      {' '}
      FOLLOW
    </button>
  </div>
);

const SportsTitle = () => (
  <div className="sportstitle">
    <h3>CAL POLY SWIM CLUB</h3>
    <SportsInfo />
  </div>
);

export default SportsPage;
