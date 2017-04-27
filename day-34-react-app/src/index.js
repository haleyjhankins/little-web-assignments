import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock.js';
import SuperClock from './Superclock.js'


class App extends React.Component{
  render() {
    return(
      <div>
       <SuperClock />
      </div>
    );


  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
