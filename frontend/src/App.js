import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import AppointmentList from "./components/appointment-list.component";
import Reschedule from "./components/reschedule.component";
import MakeNew from "./components/makenew.component";
import CreateUser from "./components/create-user.component";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <Navbar />
            <br/>
            <Route path="/" exact component={AppointmentList}/>
            <Route path="/edit/:id" component={Reschedule}/>
            <Route path="/create" component={MakeNew}/>
            <Route path="/user" component={CreateUser}/>
          </div>
        </Router>
    );
  }
}

export default App;
