import React from 'react';
import './sports.css'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";



class SportsPage extends React.Component {
    render() {
        return <div>
            
            <Menu2/>
            <SportsTitle />
            <Follow/>
            <SportImage/>
            <SportsInfo/>
            <SportsInfoBottom/>
       
        </div>;
    }
}

class Menu2 extends React.Component {
    render() {
        return <Router>
            <div className="menu2">
            
                <h1>SWIM CLUB</h1>
                <Link to="/login">FAQ</Link>
                <Link to="/forms">FORMS</Link>
                <Link to="/login">CONTACT</Link>
                <Link to="/login">SCHEDULE</Link>
                <Link to="/login">RESULTS</Link>
            </div>;

            <Switch>
                
                <Route path="/login">
                    
                </Route>
            </Switch>
        </Router>
    }

}

class SportImage extends React.Component {
    render() {
        return <div className="placeholderImage">
            <img src='/Sport.jpg' alt='Sport'></img>
        </div>;
    }
}

class SportsInfo extends React.Component {
    render() {
        return <div className="sportsinfo">
            <h1>ABOUT SWIM CLUB</h1>
            <h2>Join one of the best collegiate swim clubs in the West Coast! Cal Poly Swim Club has over 100 members and is constantly growing. We offer high quality professional coaching that can reach swimmers of all ability. The goal of our team is to provide every member an opportunity to improve their swimming skills and achieve success at his or her level of ability, from beginner to international competitor. Come by and check us out! We are a non profit club, that is run by its elected Board of Directors which meets each month. All members are welcome at each meeting and encouraged to be involved in team activities and fundraisers.
              
                </h2>
            <a href="https://instagram.com">
                <img src='/instagram.png' className='instagramIcon' alt='Instagram'></img>
            </a>
        </div>
    }
}

class SportsInfoBottom extends React.Component {
    render() {
        return <div className="sportsinfobottom">
            <h1>UCLA Feb 9th</h1>
            <a href="#results">see results</a>
            <h2>We brought 34 swimmers to UCLA last weekend and broke 3 swim club records!</h2>
            <h1>UCSD Jan 24th</h1>
            <a href="#results">see results</a>
            <h2>Swim Club brought 46 swimmers to UCSD on January 24th </h2>
        </div>
    }
}

class Follow extends React.Component {

    render() {return <div className="follow">

        <button class="dropbtn"> FOLLOW
        </button>
     
        </div>
    }
}

class SportsTitle extends React.Component {
    render() {
        return <div className="sportstitle">
            <h3>CAL POLY SWIM CLUB</h3>
        </div>
    }
}

export default SportsPage;
