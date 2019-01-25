import React, { Component } from 'react';
import axios from 'axios';
import Joke from "./Joke";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      jokes: [],
    }
  }

  authenticate = () => {
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token
      }
    }

    if (token) {
      axios.get('http://localhost:3300/api/jokes', options)
        .then(res => {
          if (res.status === 200 && res.data) {
            this.setState({ loggedIn: true, jokes: res.data })
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.props.history.push('/login')
        })
    } else {
      this.props.history.push('/login')
    }
  }

  componentDidMount() {
    this.authenticate()
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname === '/' && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.history.push('/Login')
  }

  render() {
    return (
      <div className='jokes'>
        <button onClick={this.logout}>Log out</button>
        <h1>Dad Jokes</h1>
        <ul>
          {this.state.jokes.map(joke => {
            return (
              <Joke
                joke={joke.joke}
                id={joke.id}                
                key={joke.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }  
} 



export default Jokes;