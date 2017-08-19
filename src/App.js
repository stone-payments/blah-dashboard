import React, { Component } from 'react';
import logo from './blah.png';
import './App.css';
import Box from './Box.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>blah</h2>
        </div>
        <p className="App-intro">
          <Box/>
        </p>
      </div>
    );
  }
}

export default App;
