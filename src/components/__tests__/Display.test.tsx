import React from 'react';
import Display from 'components/Display';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Display component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Display
        error="test error"
        expression="test expression"
        result="test result"
      />,
    );
  });

  it('renders correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders display div', () => {
    expect(wrapper.find('#display').length).toEqual(1);
  });

  it('renders error div', () => {
    expect(wrapper.find('#error').length).toEqual(1);
    expect(wrapper.find('#error').text()).toEqual('test error');
  });

  it('renders expression div', () => {
    expect(wrapper.find('#expression').length).toEqual(1);
    expect(wrapper.find('#expression').text()).toEqual('test expression =');
  });

  it('renders result div', () => {
    expect(wrapper.find('#result').length).toEqual(1);
    expect(wrapper.find('#result').text()).toEqual('test result');
  });
});
