import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import Students from './Students';
import StudentTable from './StudentTable';
import Login from './Login';
import './App.css';
import { TextField, Button } from '@material-ui/core';

const baseUrl = 'http://localhost:7000/student';

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/student/:email">
            <Students />
          </Route>
          <Route path="/mtable" component={StudentTable} />
          {/* <StudentTable />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;

/*const App = () => {
  return <Router>
 <MainNavigation />
 <main>
 <Switch>

const App = () => {
  return <Router>
 <MainNavigation />
 <main>
 <Switch>
   <Route path = "/" exact>
    <Users />
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces />
    </Route>
    <Route path = "/places/new" exact>
    <NewPlace />
    </Route>

    <Redirect to = "/" />
   </Switch>
 </main>
  </Router>
}

export default App;
     <Users />
    </Route>
    <Route path="/:userId/places" exact>
      <UserPlaces />
    </Route>
    <Route path = "/places/new" exact>
    <NewPlace />
    </Route>

    <Redirect to = "/" />
   </Switch>
 </main>
  </Router>
}

export default App;
 */
