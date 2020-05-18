import React from 'react';
import './register.css'; 
//import {Link} from "react-router-dom";
import {Link, withRouter} from "react-router-dom";

function validate(username, password) {
  const errors = [];

  if (username.length < 6) {
      errors.push("Username should be at least 5 characters long");
    }
  if (password.length < 6) {
    errors.push("Password should be at least 5 characters long");
  }
  return errors;
}

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
    user: {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      type: ''
    },
    errors: []
  };
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event) {
  event.preventDefault()
  const {user}= this.state;

    const errors = validate(user.username, user.password);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    else if (errors.length ===0) {
        this.setState({username: "", password: ""});
        this.setState({errors: []});
        this.props.history.push("/");
    }
  }

componentDidMount(){
  this.getUsers();
}

getUsers = _ => {
  fetch('/users')
  .then(response => response.json())
  .then(response => this.setState({users: response.data}))
  .catch(err => console.error(err));
}

addUser = _ => {
  const {user} = this.state;
  //console.log(user)
  fetch(`/users/add?firstname=${user.firstname}
  &lastname=${user.lastname}
  &email=${user.email}
  &username=${user.username}
  &password=${user.password}
  &type=${user.type}`)
  .then(response => response.json())
  .then(this.getUsers)
  .catch(err => console.error(err));
  this.props.history.push(`/login`);
  alert("User " + user.username + " was registered");
}

render() {
  const {user} = this.state;
  const {errors} = this.state;
  return (
      <div className="login-page">
          <div className="form">
          <form onSubmit ={this.handleSubmit}>
                {errors.map(error => (
                <p key={error}>Error: {error}</p>))}
              <h5>First Name</h5>
              <input 
              type="text"
              placeholder="Enter First Name"
              onChange={e => this.setState({user: {...user, firstname: e.target.value }})} 
              />
              <h5>Last Name</h5>
              <input 
              type="text"
              placeholder="Enter Last Name"
              onChange={e => this.setState({user: {...user, lastname: e.target.value }})} 
              />
              <h5>Email</h5>
              <input 
              type="text"
              placeholder="Enter Email"
              onChange={e => this.setState({user: {...user, email: e.target.value }})} 
              />
              <h5>Username</h5>
              <input 
              type="text"
              placeholder="Enter Username"
              onChange={e => this.setState({user: {...user, username: e.target.value }})} 
              />
              <h5>Password</h5>
              <input 
              type="password"
              placeholder="Enter Password"
              onChange={e => this.setState({user: {...user, password: e.target.value }})} 
              />
              <h5>Select type of User: </h5>
              <label class="container">Student
                <input type="radio" 
                value="student" 
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}/>
                <span class="checkmark"></span>
              </label>
              <label class="container">Supporter
                <input type="radio" 
                value="supporter" 
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">Coach
                <input type="radio" 
                value="coach" 
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              <label class="container">ASI Employee
                <input type="radio" 
                value="asi employee" 
                name="type"
                onChange={e => this.setState({user: {...user, type: e.target.value }})}></input>
                <span class="checkmark"></span>
              </label>
              </form>
              <button onClick={this.addUser}>Register</button>
              <p className="message">Already registered? <Link to='/login'>Sign In</Link></p>
          </div>
      </div>
    );
  }
}

export default withRouter(Register);
