import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import cakeoff from "./img/bdayon.jpg";
import cakeon from "./img/bday.gif";


class App extends Component {
  constructor() {
    super();
    this.state = {
      bWish: [],
      bImage: cakeoff
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.InputName = React.createRef();
    this.InputDOB = React.createRef();
    this.InputMsg = React.createRef();
  }

  onSubmit() {
    this.setState({
      bWish: [{
        bName: this.InputName.current.value,
        bDOB: this.InputDOB.current.value,
        bMsg: 'Happy Birth Day',
      }],
      bImage: cakeon
    })

  }


  render() {
    return (
      <div class="cardMain">
        <h1>Happy Birthday</h1>
        <img id="myImg" style={{ width: '250px', height: '250px' }} src={this.state.bImage} alt="tester" />
        <div>
          {this.state.bWish.map((bWish, index) => {
            return (
              <div>
                <div class="borderRound">
                  <h3>Wish you a very happy  {bWish.bDOB}<sup>th </sup>birthday {bWish.bName}</h3>
                </div>
                <br />
              </div>
            )
          })}
        </div>
        <div>
          
        </div>
        <div><label>Name :</label><input ref={this.InputName}></input></div>
        <div><label>Label :</label><input ref={this.InputDOB}></input></div>
        <div><button onClick={this.onSubmit}>submit</button></div>


      </div>


    );
  }
}

render(<App />, document.getElementById('root'));
