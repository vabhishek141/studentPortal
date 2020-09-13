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
import './App.css';
import { TextField, Button } from '@material-ui/core';
const baseUrl = 'http://localhost:7000/student';

const Login = props => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [data, setData] = useState([]);
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [isStudentLogin, setIsStudentLogin] = useState(false);
  const [temp, setTemp] = useState('');

  const getdata = async () => {
    await axios.get(baseUrl).then(response => {
      setData(response.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const handlechange = (val, name) => {
    if (name === 'email') {
      setEmail(val);
    } else if (name === 'pass') {
      setPass(val);
    }
  };

  const login = e => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && pass === 'admin') {
      setIsAdminLogin(true);
    } else if (data.find(obj => obj.email === email)) {
      const temporary = data.filter(obj => obj.email === email);
      console.log(temporary[0]);
      setTemp(temporary[0].email);
      setIsStudentLogin(true);
    } else {
      alert('Incorrect credentials, please try again.');
    }
  };
  return (
    <React.Fragment>
      <form onSubmit={login}>
        <TextField
          placeholder="Email"
          value={email}
          onChange={event => handlechange(event.target.value, 'email')}
        />
        <TextField
          placeholder="Password"
          value={pass}
          onChange={event => handlechange(event.target.value, 'pass')}
        />
        <Button variant="contained" color="primary" onClick={e => login(e)}>
          Login
        </Button>
      </form>
      {isAdminLogin && <Redirect to="/mtable" />}
      {isStudentLogin && <Redirect to={`/student/${temp}`} />}
    </React.Fragment>
  );
};

export default withRouter(Login);
