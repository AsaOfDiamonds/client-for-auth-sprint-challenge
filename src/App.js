import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';
import Register from "./auth/Register";
import Login from './auth/Login'
import Jokes from './jokes/Jokes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='top_nav'>
          <NavLink to='/jokes' style={{ textDecoration: 'none' }}>OK Dad make me laugh</NavLink>
          <NavLink to='/login' style={{ textDecoration: 'none' }}>Log in</NavLink>
          <NavLink to='/register' style={{ textDecoration: 'none' }}>Register</NavLink>
          <button onClick={this.Logout}>Log out</button>
        </nav>

        <section>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/jokes' component={Jokes} />
            <Route path='/' render={() => (
              <Redirect to='/Jokes' />
            )
            } />
          </Switch>
        </section>
      </div>
    );
  }
  Logout = () => {
    localStorage.removeItem('jwt');
  };
}

export default withRouter(App);