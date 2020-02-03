import React from 'react';
import Button from 'components/Button';
import { shallow, ShallowWrapper } from 'enzyme';

describe('BtnPanel component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Button
        label="0"
        id="zero"
        color="#42464a"
        pos={{ x: 6, y: 1 }}
        handleClick={jest.fn()}
      />,
    );
  });

  it('renders correctly', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders button div', () => {
    expect(wrapper.find('[type="button"]').length).toEqual(1);
    expect(wrapper.find('[type="button"]').text()).toEqual('0');
  });
});
