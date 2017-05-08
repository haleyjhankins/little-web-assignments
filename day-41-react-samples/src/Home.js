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
          <p> Lorem Ipsum
"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquet sem urna, ac fringilla mi tincidunt eget. Vivamus aliquet ultrices ante sit amet rhoncus. Ut auctor tristique molestie. Curabitur hendrerit ipsum blandit purus cursus, sit amet dictum metus imperdiet. Donec efficitur dui ligula, sit amet fringilla lectus rhoncus non. Pellentesque velit metus, consequat in tellus nec, placerat placerat felis. Vestibulum vitae arcu non lorem efficitur tempus. Donec id ornare dolor. Aenean volutpat placerat metus, et scelerisque risus congue vel. Morbi mollis blandit mi, molestie imperdiet nibh. Nunc finibus nisl ut lectus ultricies, sit amet pellentesque nisi viverra. Donec sollicitudin id mauris non condimentum. Suspendisse ante velit, mollis et congue eu, tincidunt non velit. Nulla facilisi.

Aliquam non ligula nisi. Nam porta blandit arcu in semper. Sed id mattis neque, et mattis turpis. Phasellus tincidunt tellus mollis semper porta. Praesent faucibus accumsan felis, eget hendrerit erat pretium vitae. Suspendisse ut leo sit amet tellus dapibus lacinia vel at augue. Aenean ex velit, sodales a odio non, commodo tempor sapien.

In eget mauris et sem bibendum tincidunt quis in nisi. Sed mattis neque a massa aliquet faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Donec sollicitudin tellus felis, in tempor metus consectetur eu. Nam magna arcu, suscipit a aliquet eu, fringilla in orci. Ut eu eros a erat gravida dignissim. Morbi metus ante, consectetur vel felis sit amet, tempus tincidunt velit. Donec at egestas purus, quis blandit tellus. Aenean a egestas nulla. Aliquam erat volutpat. Phasellus id lorem consectetur, varius neque a, vestibulum orci. In volutpat quam sit amet est luctus, ac sagittis nulla egestas. Maecenas vulputate urna vitae mollis pretium. Quisque ipsum elit, consequat id elementum sed, porta cursus augue. </p>
        </div>

      </div>
    );
  }
}

export default Home;
