import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import File from "./components/File";
import TimeTable from "./components/TimeTable";

class App extends Component {
  // state = { users: [] };

  // componentDidMount() {
  //   fetch("/users")
  //     .then(res => res.json())
  //     .then(users => this.setState({ users }));
  // }

  render() {
    return (
      //   <div className="App">
      //     <h1> Users</h1>
      //     <ul>
      //       {this.state.users.map(user => (
      //         <li key={user.id}> {user.username}</li>
      //       ))}
      //     </ul>
      //   </div>

      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/upload" component={File} />
            <Route exact path="/timetable" component={TimeTable} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
