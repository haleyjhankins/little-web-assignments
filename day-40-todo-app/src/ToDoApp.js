import React from 'react';
import $ from 'jquery';

const bucketId = '2578c34d-70b9-49e0-b042-bd59d33734dc';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  refreshData() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      console.log('what data do I have?', data);
      this.setState({
        items: data.items
      })
    });
  }

  deleteItem(id){
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}?bucketId=${bucketId}`,
      method: 'DELETE'
    })
    .done((data) => {
      this.refreshData();
    });
  }

  markAsComplete(id){
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item/${id}/togglestatus?bucketId=${bucketId}`,
      method: 'POST'
    })
    .done(() =>{
      this.refreshData();
    })
  }

  componentDidMount() {
    this.refreshData();
  }

  createNewItem(inputText) {
    //ajax call to save data
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data) => {
      console.log('what do I get back?', data);

      this.refreshData();



    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }


  render() {

    const listItems = this.state.items.map((x) => {

        const className=x.isComplete ? 'complete' : '';

        return <li className={className} key={x.id} onClick={() => this.markAsComplete(x.id)} >
                {x.text}
                <button onClick={(evt) => this.deleteItem(x.id)}>delete</button>
            </li>
          })



    return (
      <div>
        <input
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue}
          />

        <ol>
          {listItems}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
