import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Counter from './Counter.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

        <Link to="/counter">Counter</Link>

          <Route path="/counter" component={Counter} />
        </div>
      </Router>
    );
  }
}

export default App;
