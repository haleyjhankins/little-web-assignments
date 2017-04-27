import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Clock extends React.Component{
  constructor(){
    super();
    this.state= {
      time: new Date().toLocaleTimeString()
    }
  }

  tick(){
    this.setState({
      time: new Date().toLocaleTimeString()
    })
  }



  componentDidMount(){
    setInterval(
      ()=>this.tick(),
      1000
    );
  }



  render(){
    return (
      <div>{this.state.time}</div>
    );
  }
}



class App extends React.Component{
  render() {
    return(
      <div>
       <Clock />
      </div>
    );


  }

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
