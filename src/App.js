import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="calc-div">
          <div id="display">00000</div>
          <div id="AC" className="buttons">AC</div>
          <div id="divide" className="buttons">/</div>
          <div id="multiply" className="buttons">x</div>
          <div id="seven" className="buttons">7</div>
          <div id="eight" className="buttons">8</div>
          <div id="nine" className="buttons">9</div>
          <div id="minus" className="buttons">-</div>
          <div id="four" className="buttons">4</div>
          <div id="five" className="buttons">5</div>
          <div id="six" className="buttons">6</div>
          <div id="plus" className="buttons">+</div>
          <div id="one" className="buttons">1</div>
          <div id="two" className="buttons">2</div>
          <div id="three" className="buttons">3</div>
          <div id="equal" className="buttons">=</div>
          <div id="zero" className="buttons">0</div>
          <div id="point" className="buttons">.</div>
        </div>
      </div>
    );
  }
}

export default App;
