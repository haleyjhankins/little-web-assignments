import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      value: 0
    };
  }
  handleClick() {
  //   var value= this.state.value;
  //   value +=1;
  //   this.setState({
  //     value: value
  //
  //   });
  // }
  // ------------------------OR--------------------------------
  this.setState({
    value: this.state.value + 1
  });
}

  render() {
    return (
      <div onClick={() => {this.handleClick(); }}>Click on me {this.state.value}</div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




// -------------------------What I Did:----------------------------
// 1. Created Component
// 2. Set some default state
// 3. Show the state
// 4. Click?
// 5. Change the state on click
