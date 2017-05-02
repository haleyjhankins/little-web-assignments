import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import SearchQuery from './SearchQuery';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import $ from 'jquery';


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      recipes: [],
      filters: ['potatoes', 'cheese']
    }
  }

  makeAjaxCall(){
    $.ajax({
      url: '/api/?i=onions,ketchup&q=steak'
    })
    .done((data) => {
      console.log(data)
      data = JSON.parse(data);

      let mappedArray= data.results.map((x) => {
        return{
          name: x.title,
          url: x.thumbnail,
          ingredients: x.ingredients
      };
    })

    this.setState({
      recipes: mappedArray
    });

  });
}

  componentDidMount(){
    this.makeAjaxCall();
  }


  render() {
    return (
      <div>
        <header>
          <h1 className="container">My Recipe App</h1>
        </header>
        <div className="contents container">
          <SearchQuery />
          <RecipeList recipes={this.state.recipes} />
          <Filter filters={this.state.filters} />
          <footer>This app is built with <a href="http://recipepuppy.com"><img src="recipepuppy.png" alt="recipe puppy" /></a></footer>

        </div>
      </div>
    );
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
