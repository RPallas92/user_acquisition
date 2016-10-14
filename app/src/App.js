import React, { Component } from 'react';
import logo from './logo.svg';
import AcquireUserView from './acquireUser/presentation/view/AcquireUserView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AcquireUserView/>
      </div>
    );
  }
}

export default App;
