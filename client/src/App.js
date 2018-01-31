import React, { Component } from 'react';
import Header from './components/Header';
import Meetings from './components/Meetings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Meetings />
      </div>
    );
  }
}

export default App;
