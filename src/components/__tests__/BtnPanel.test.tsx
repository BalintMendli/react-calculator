import React from 'react';
import BtnPanel from 'components/BtnPanel';
import Button from 'components/Button';
import buttons from 'constants/buttons';
import { shallow, ShallowWrapper } from 'enzyme';

describe('BtnPanel component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BtnPanel handleClick={jest.fn()} />);
  });

  it('renders correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders btn-panel div', () => {
    expect(wrapper.find('#btn-panel').length).toEqual(1);
  });

  it('renders Button components', () => {
    expect(wrapper.find(Button).length).toEqual(buttons.length);
  });
});
