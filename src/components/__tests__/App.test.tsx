import React from 'react';
import App from 'components/App';
import Calculator from 'components/Calculator';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders main div', () => {
    expect(wrapper.find('#main').length).toEqual(1);
  });

  it('renders Calculator', () => {
    expect(wrapper.find(Calculator).length).toEqual(1);
  });
});
