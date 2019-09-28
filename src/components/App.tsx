import React, { Component } from 'react';
import './App.css';
import { handleInput, AppState, getLabel } from '../logic/utils';
import Calculator from './Calculator';
import { Label } from '../constants/buttons';

class App extends Component<{}, AppState> {
  private appDiv = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      displayValue: '0',
      isResult: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount(): void {
    if (this.appDiv.current) this.appDiv.current.focus();
  }

  handleClick(label: Label): void {
    this.setState(
      prevState =>
        handleInput(label, prevState) as Pick<AppState, keyof AppState>
    );
  }

  handleKeyDown({ key }: React.KeyboardEvent<HTMLDivElement>): void {
    const label = getLabel(key);
    if (label)
      this.setState(
        prevState =>
          handleInput(label, prevState) as Pick<AppState, keyof AppState>
      );
  }

  render(): JSX.Element {
    const { displayValue } = this.state;
    return (
      <div
        className="App"
        role="button"
        tabIndex={0}
        ref={this.appDiv}
        onKeyDown={this.handleKeyDown}
      >
        <Calculator handleClick={this.handleClick} result={displayValue} />
      </div>
    );
  }
}

export default App;
