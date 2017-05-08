import React from 'react';
import {store, constants} from './Store.js';



class Counter extends React.Component {

  constructor(){
    super();

    this.state= store.getState();
  }

  componentDidMount(){
    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }


  down(){
    store.dispatch(constants.DECREMENT);
    // this.setState({
    //   number: this.state.number -1
    // })
  }

  up(){
    store.dispatch(constants.INCREMENT);
    // this.setState({
    //   number: this.state.number +1
    // })
  }

  reset(){
    store.dispatch(constants.RESET);
  }



  render() {
    return(
      <div>
      <button onClick={()=> this.up()}>+</button>
        <div>{this.state.number} </div>
        <button onClick={()=> this.down()}>-</button><br/>
        <button onClick={()=> this.reset()}>Reset</button>

      </div>

    )

  }
}

export default Counter;
