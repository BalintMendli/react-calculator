import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      displayValue:'0',
      isResult: false
    }
    this.handleEval = this.handleEval.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handlePoint = this.handlePoint.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleEval(){
    const lastOp=['/','*','+','-'].indexOf(this.state.displayValue[this.state.displayValue.length-1])!==-1;
    const lastPoint=this.state.displayValue.slice(-1)==='.';
    if(!lastOp && !lastPoint){
      let newDisplay=(Math.round(1000000000000 * eval(this.state.displayValue))/1000000000000).toString();
      this.setState((prevState) => {
        return { 
          displayValue: newDisplay,
          isResult: true
        }
      });
    }
  }
  handleNum(e){
    const value=e.target.innerHTML;
    const lastZero=this.state.displayValue.slice(-1)==='0';
    const isMaxDigit=this.state.displayValue.length>=18;
    if((this.state.displayValue==='0' || this.state.isResult)){
      this.setState((prevState) => {
        return { 
          displayValue: value,
          isResult: false
        }
      });
    } else if(!isMaxDigit && !lastZero){
      this.setState((prevState) => {
        return { displayValue: prevState.displayValue+value }
      });
    }
  }
  handleOp(e){
    const value=e.target.innerHTML;
    const lastOp=['/','*','+','-'].indexOf(this.state.displayValue[this.state.displayValue.length-1])!==-1;
    const lastPoint=this.state.displayValue.slice(-1)==='.';
    const isMaxDigit=this.state.displayValue.length>=18;
    if(this.state.displayValue==='0' && (value==='+' || value==='-')){
      this.setState((prevState) => {
        return { 
          displayValue: value,
          isResult: false
        }
      });
    } else if(!lastOp && !lastPoint && this.state.displayValue!=='0' && !isMaxDigit){
      this.setState((prevState) => {
        return { 
          displayValue: prevState.displayValue+value,
          isResult: false
        }
      });
    } else if(lastOp){
      this.setState((prevState) => {
        return { 
          displayValue: prevState.displayValue.slice(0,-1)+value,
          isResult: false
        }
      });
    }
  }
  handlePoint(){
    const pointCond=this.state.displayValue.split(/[+\-*/]/).pop().indexOf('.')!==-1;
    const isMaxDigit=this.state.displayValue.length>=18;
    if(!pointCond && !this.state.isResult && !isMaxDigit){
      this.setState((prevState) => {
        return { displayValue: prevState.displayValue+'.' }
      });
    } else if(this.state.isResult){
      this.setState((prevState) => {
        return { 
          displayValue: '0.',
          isResult: false
        }
      });
    }
  }
  handleClear(){
    this.setState((prevState) => {
      return { displayValue: '0' }
    });
  }
  handleKeyDown(e){
    console.log(e.key);
    if(e.key==='Enter'){
      this.handleEval();
    }
    if(e.key==='.' || e.key===','){
      this.handlePoint();
    }
    if(['/','*','+','-'].indexOf(e.key)!==-1){
      this.handleOp({target:{innerHTML:e.key}});
    }
    if(['0','1','2','3','4','5','6','7','8','9'].indexOf(e.key)!==-1){
      this.handleNum({target:{innerHTML:e.key}});
    }
    if(e.key==='Delete' || e.key==='Backspace'){
      this.handleClear();
    }
  }
  render() {
    return (
      <div className="App" tabIndex="0" onKeyDown={this.handleKeyDown}>
        <div id="calc-div">
          <div id="display">{this.state.displayValue}</div>
          <div id="clear" className="buttons" onClick={this.handleClear}>AC</div>
          <div id="divide" className="buttons" onClick={this.handleOp}>/</div>
          <div id="multiply" className="buttons" onClick={this.handleOp}>*</div>
          <div id="seven" className="buttons" onClick={this.handleNum}>7</div>
          <div id="eight" className="buttons" onClick={this.handleNum}>8</div>
          <div id="nine" className="buttons" onClick={this.handleNum}>9</div>
          <div id="subtract" className="buttons" onClick={this.handleOp}>-</div>
          <div id="four" className="buttons" onClick={this.handleNum}>4</div>
          <div id="five" className="buttons" onClick={this.handleNum}>5</div>
          <div id="six" className="buttons" onClick={this.handleNum}>6</div>
          <div id="add" className="buttons" onClick={this.handleOp}>+</div>
          <div id="one" className="buttons" onClick={this.handleNum}>1</div>
          <div id="two" className="buttons" onClick={this.handleNum}>2</div>
          <div id="three" className="buttons" onClick={this.handleNum}>3</div>
          <div id="equals" className="buttons" onClick={this.handleEval}>=</div>
          <div id="zero" className="buttons" onClick={this.handleNum}>0</div>
          <div id="decimal" className="buttons" onClick={this.handlePoint}>.</div>
        </div>
      </div>
    );
  }
}

export default App;
