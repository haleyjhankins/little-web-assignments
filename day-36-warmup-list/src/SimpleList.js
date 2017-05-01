import React from 'react';
import './simple-list.css';

//If you wanted a separate list item component
//import ListItemComponent from './ListItemComponent.js';

class SimpleList extends React.Component {

  constructor() {
    super();

    this.state = {
      items: []
    };

    this.handleKeyUp= this.handleKeyUp.bind(this);
  }


  handleKeyUp(evt) {
    console.log(evt.keyCode);
    if (evt.keyCode ===13) {

      var copy= this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value='';


      this.setState({
        items: copy
      });
    }

  }

  handleItemClick(index) {
    console.log('you clicked on', index);

    var copy= this.state.items.slice();
    copy.splice(index, 1);
    this.setState({
      items:copy
    });
  }

  // copy the array
  // splice out at that location
  // reset state, then you're done.


  render() {
    let items = this.state.items.map((x, i) => {
      return <li onClick={() => this.handleItemClick(i)} key={i}>{x}</li>
    });



    return (
      <div className="simple-list">
      <input onKeyUp={this.handleKeyUp}/>
        <ol>
          {items}
        </ol>
      </div>
    )
  }
}

module.exports = SimpleList;
