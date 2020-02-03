import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { getLabelFromKey } from 'logic/utils';
import handleInput from 'logic/handleInput';
import { Label } from 'constants/buttons';
import Calculator from './Calculator';
import { AppState } from './AppState';

const StyledApp = styled.main`
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
      expression: '',
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
        handleInput(label, { ...prevState }) as Pick<AppState, keyof AppState>,
    );
  }

  handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void {
    e.preventDefault();
    const label = getLabelFromKey(e.key);
    if (label)
      this.setState(
        prevState =>
          handleInput(label, prevState) as Pick<AppState, keyof AppState>,
      );
  }

  render(): JSX.Element {
    const { displayValue, expression, error } = this.state;
    return (
      <StyledApp
        id="main"
        tabIndex={0}
        ref={this.appDiv}
        onKeyDown={this.handleKeyDown}
      >
        <Calculator
          handleClick={this.handleClick}
          result={displayValue}
          expression={expression}
          error={error}
        />
      </StyledApp>
    );
  }
}

export default App;
