import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getRooms, getEvents } from './api/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getRooms().then(rooms => {
      getEvents().then(events => {
        console.log(rooms, events);
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
