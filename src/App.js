import React, { Component } from 'react';
import logo from './img/blah.png';
import './App.css';
import Emotions from './Emotions.js'
import Query from './Query.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>blah</h2>
        </div>
        <p className="Emotions-container">
          <Emotions emotion="very negative" />
          <Emotions emotion="negative" />
          <Emotions emotion="neutral" />
          <Emotions emotion="positive" />
          <Emotions emotion="very positive" />
        </p>
      </div>
    );
  }
}

export default App;
