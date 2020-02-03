import React from 'react';
import Calculator from 'components/Calculator';
import Display from 'components/Display';
import BtnPanel from 'components/BtnPanel';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Calculator component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Calculator
        error="test error"
        expression="test expression"
        result="test result"
        handleClick={jest.fn()}
      />,
    );
  });

  it('renders correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders calculator div', () => {
    expect(wrapper.find('#calculator').length).toEqual(1);
  });

  it('renders Display', () => {
    expect(wrapper.find(Display).length).toEqual(1);
  });

  it('renders BtnPanel', () => {
    expect(wrapper.find(BtnPanel).length).toEqual(1);
  });
});
