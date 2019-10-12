import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { getLabel } from '../logic/utils';
import handleInput from '../logic/handleInput';
import Calculator from './Calculator';
import { Label } from '../constants/buttons';
import { AppState } from './AppState';

const StyledApp = styled.div`
  text-align: center;
  background-color: #a6cfe2;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component<{}, AppState> {
  private appDiv = React.createRef<HTMLDivElement>();

  constructor(props: {}) {
    super(props);
    this.state = {
      displayValue: '0',
      isResult: false,
      error: '',
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

  handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void {
    e.preventDefault();
    const label = getLabel(e.key);
    if (label)
      this.setState(
        prevState =>
          handleInput(label, prevState) as Pick<AppState, keyof AppState>
      );
  }

  render(): JSX.Element {
    const { displayValue, error } = this.state;
    return (
      <StyledApp
        role="button"
        tabIndex={0}
        ref={this.appDiv}
        onKeyDown={this.handleKeyDown}
      >
        <Calculator
          handleClick={this.handleClick}
          result={displayValue}
          error={error}
        />
      </StyledApp>
    );
  }
}

export default App;
