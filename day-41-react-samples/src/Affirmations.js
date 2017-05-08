import React from 'react';

class Affirmations extends React.Component {
  constructor(){
    super();

    this.state= {
      number: 0,
      messages: [
        'You kick so much ass',
        'Wow, you lookin good girl',
        'Werk',
        'Yaaaaaas',
        'Look how far you\'ve come',
        'I\'m proud of you'
      ]
    }

  }

  componentDidMount(){

  }

  next(){
    if (this.state.number < this.state.messages.length-1){
      this.setState({
        number: this.state.number +1
      })
    }
    else{
       this.setState({
         number: 0
       })
    }

  }

  previous(){
    if (this.state.number >0){
      this.setState({
        number: this.state.number -1
      })
    }
    else{
      this.setState({
        number: 5
      })
    }
}


  render() {
    return(
      <div>
        <button onClick={()=> this.previous()}>Previous</button>
        <button onClick={()=> this.next()}>Next</button>

        <div>{this.state.messages[this.state.number]}</div>

      </div>
    )
  }

}




export default Affirmations;
