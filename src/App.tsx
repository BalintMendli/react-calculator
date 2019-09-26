import React, { Component } from 'react';
import './App.css';
import { evaluate } from 'mathjs';
import Calculator from './Calculator';

interface AppState {
  displayValue: string;
  isResult: boolean;
}

interface EventObj {
  target: { innerHTML: string };
}

class App extends Component<{}, AppState> {
  private appDiv = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      displayValue: '0',
      isResult: false
    };
    this.handleEval = this.handleEval.bind(this);
    this.handleNum = this.handleNum.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handlePoint = this.handlePoint.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.appDiv.current!.focus();
  }

  handleEval() {
    const { displayValue } = this.state;
    const lastOp =
      ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !==
      -1;
    const lastPoint = displayValue.slice(-1) === '.';
    if (!lastOp && !lastPoint) {
      this.setState(prevState => ({
        displayValue: (
          Math.round(1000000000000 * evaluate(prevState.displayValue)) /
          1000000000000
        ).toString(),
        isResult: true
      }));
    }
  }

  handleNum(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | EventObj) {
    const { displayValue, isResult } = this.state;
    const target = e.target as HTMLElement;
    const value = target.innerHTML;
    const lastZero = displayValue.slice(-1) === '0';
    const isMaxDigit = displayValue.length >= 18;
    if (displayValue === '0' || isResult) {
      this.setState({
        displayValue: value,
        isResult: false
      });
    } else if (!isMaxDigit && !lastZero) {
      this.setState(prevState => ({
        displayValue: prevState.displayValue + value
      }));
    }
  }

  handleOp(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | EventObj) {
    const { displayValue } = this.state;
    const target = e.target as HTMLElement;
    const value = target.innerHTML;
    const lastOp =
      ['/', '*', '+', '-'].indexOf(displayValue[displayValue.length - 1]) !==
      -1;
    const lastPoint = displayValue.slice(-1) === '.';
    const isMaxDigit = displayValue.length >= 18;
    if (displayValue === '0' && (value === '+' || value === '-')) {
      this.setState({
        displayValue: value,
        isResult: false
      });
    } else if (!lastOp && !lastPoint && displayValue !== '0' && !isMaxDigit) {
      this.setState(prevState => ({
        displayValue: prevState.displayValue + value,
        isResult: false
      }));
    } else if (lastOp) {
      this.setState(prevState => ({
        displayValue: prevState.displayValue.slice(0, -1) + value,
        isResult: false
      }));
    }
  }

  handlePoint() {
    const { displayValue, isResult } = this.state;
    const displayArr = displayValue.split(/[+\-*/]/);
    const pointCond = displayArr[displayArr.length - 1].indexOf('.') !== -1;
    const isMaxDigit = displayValue.length >= 18;
    if (!pointCond && !isResult && !isMaxDigit) {
      this.setState(prevState => ({
        displayValue: `${prevState.displayValue}.`
      }));
    } else if (isResult) {
      this.setState({
        displayValue: '0.',
        isResult: false
      });
    }
  }

  handleClear() {
    this.setState({ displayValue: '0' });
  }

  handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleEval();
    }
    if (e.key === '.' || e.key === ',' || e.key === 'Decimal') {
      this.handlePoint();
    }
    if (
      ['/', '*', '+', '-', 'Add', 'Subtract', 'Multiply', 'Divide'].indexOf(
        e.key
      ) !== -1
    ) {
      let char = e.key;
      if (e.key === 'Add') {
        char = '+';
      }
      if (e.key === 'Subtract') {
        char = '-';
      }
      if (e.key === 'Multiply') {
        char = '*';
      }
      if (e.key === 'Divide') {
        char = '/';
      }
      this.handleOp({ target: { innerHTML: char } });
    }
    if (
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].indexOf(e.key) !== -1
    ) {
      this.handleNum({ target: { innerHTML: e.key } });
    }
    if (e.key === 'Delete' || e.key === 'Backspace') {
      this.handleClear();
    }
  }

  render() {
    const { displayValue } = this.state;
    return (
      <div
        className="App"
        role="tabpanel"
        tabIndex={0}
        ref={this.appDiv}
        onKeyDown={this.handleKeyDown}
      >
        <Calculator
          handleClear={this.handleClear}
          handleOp={this.handleOp}
          handleNum={this.handleNum}
          handleEval={this.handleEval}
          handlePoint={this.handlePoint}
          display={displayValue}
        />
      </div>
    );
  }
}

export default App;
