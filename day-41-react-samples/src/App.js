import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import Counter from './Counter.js';
import Affirmations from './Affirmations.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Link to="/counter">Counter</Link>

          <Link to= "/affirmations">Affirmations</Link>

          <Route path="/counter" component={Counter} />
          <Route path="/affirmations" component={Affirmations}/>
        </div>
      </Router>
    );
  }
}

export default App;
