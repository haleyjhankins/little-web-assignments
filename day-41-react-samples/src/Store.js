import {createStore} from 'redux';

//Constants/Actions
const constants= {
   INCREMENT: {type: 'INCREMENT'},
   DECREMENT: {type: 'DECREMENT'},
   RESET: {type: 'RESET'}
};

//Action



//Reducer
const counterReducer = (state={number: 0}, action) =>{

  switch (action.type) {
    case 'INCREMENT' :
      return {number: state.number +1};
    case 'DECREMENT' :
      return {number: state.number -1};
    case 'RESET' :
      return {number:  0};
  }

  return state;

};
//Store
var store = createStore(counterReducer);

module.exports={
  store: store,
  constants: constants
};
