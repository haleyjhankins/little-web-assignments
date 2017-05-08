import React, {Component} from 'react';
import './Home.css';

class Home extends Component{
  render(){
    return(
      <div>
        <h1>Haleys react apps </h1>
        <div className="div1">
        <img src="faux-logo.png"/>
          <p>This page demonstrates that I can indeed use react to create a web app. </p>
        </div>

        <div className="div2">
          <p> Peace and blessings. </p>
        </div>

      </div>
    );
  }
}

export default Home;
