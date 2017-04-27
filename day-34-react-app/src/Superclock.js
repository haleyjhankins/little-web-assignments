import React from 'react';


class SuperClock extends React.Component {
 constructor() {
   super();
   this.state = {
     date: new Date()
   }
 }

 changeTime() {
   this.setState({
     date: new Date()
   });
 }

 componentDidMount() {
   setInterval(() => this.changeTime(), 1000);
 }

 render() {
   return (
     <div>
       <Clock date={this.state.date} offset={-2} timezone="California Time"/>
       <Clock date={this.state.date} offset={0} timezone="Texas Time"/>
       <Clock date={this.state.date} offset={1} timezone="New York Time"/>
     </div>
   )
 }
}

class Clock extends React.Component {

 render() {

   var hour= this.props.date.getHours() + this.props.offset;
   if (hour > 12){
     hour -=12;
   }

   var minutes= this.props.date.getMinutes();
    if(minutes <10){
      minutes= "0" + minutes;
    }

   var seconds= this.props.date.getSeconds();
    if (seconds <10){
      seconds= "0" + seconds;
    }
     return(
       <div>
        {this.props.timezone} : {hour}:{minutes}:{seconds}
       </div>
     )
   }
 }

module.exports = SuperClock;
