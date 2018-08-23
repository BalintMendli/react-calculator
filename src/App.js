import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      displayValue:'0'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    let newDisplay;
    const firstOp=this.state.displayValue==='0' && ['/','*'].indexOf(e.target.innerHTML)!==-1;
    const lastOpOrPoint=['.','/','*','+','-'].indexOf(this.state.displayValue[this.state.displayValue.length-1])!==-1;
    const operatorsCond= lastOpOrPoint && ['.','/','*','+','-'].indexOf(e.target.innerHTML)!==-1;
    const pointCond=this.state.displayValue.split(/[+\-*/]/).pop().indexOf('.')!==-1 && e.target.innerHTML==='.';
    if(e.target.innerHTML==='AC'){
      newDisplay='0';
    } else if(e.target.innerHTML==='=' && !lastOpOrPoint){
      newDisplay=eval(this.state.displayValue).toString();
    } else{
      if(this.state.displayValue==='0' && !firstOp && e.target.innerHTML!=='.'){
        newDisplay=e.target.innerHTML
      } else  if(!operatorsCond && !pointCond && !firstOp && e.target.innerHTML!=='='){
        newDisplay=this.state.displayValue+e.target.innerHTML;
      } else{
        newDisplay=this.state.displayValue;
      }
    }
    this.setState((prevState) => {
      return { displayValue: newDisplay }
    });
  }
  render() {
    return (
      <div className="App">
        <div id="calc-div">
          <div id="display">{this.state.displayValue}</div>
          <div id="AC" className="buttons" onClick={this.handleClick}>AC</div>
          <div id="divide" className="buttons" onClick={this.handleClick}>/</div>
          <div id="multiply" className="buttons" onClick={this.handleClick}>*</div>
          <div id="seven" className="buttons" onClick={this.handleClick}>7</div>
          <div id="eight" className="buttons" onClick={this.handleClick}>8</div>
          <div id="nine" className="buttons" onClick={this.handleClick}>9</div>
          <div id="minus" className="buttons" onClick={this.handleClick}>-</div>
          <div id="four" className="buttons" onClick={this.handleClick}>4</div>
          <div id="five" className="buttons" onClick={this.handleClick}>5</div>
          <div id="six" className="buttons" onClick={this.handleClick}>6</div>
          <div id="plus" className="buttons" onClick={this.handleClick}>+</div>
          <div id="one" className="buttons" onClick={this.handleClick}>1</div>
          <div id="two" className="buttons" onClick={this.handleClick}>2</div>
          <div id="three" className="buttons" onClick={this.handleClick}>3</div>
          <div id="equal" className="buttons" onClick={this.handleClick}>=</div>
          <div id="zero" className="buttons" onClick={this.handleClick}>0</div>
          <div id="point" className="buttons" onClick={this.handleClick}>.</div>
        </div>
      </div>
    );
  }
}

export default App;
