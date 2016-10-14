import React, { Component } from 'react';
import logo from './logo.svg';
import AcquireUserView from './acquireUser/presentation/view/AcquireUserView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AcquireUserView/>
      </div>
    );
  }
}

export default App;
