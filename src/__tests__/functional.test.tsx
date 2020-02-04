import React from 'react';
import App from 'components/App';
import { mount } from 'enzyme';

test('calculates entered expression', () => {
  const wrapper = mount(<App />);
  wrapper.find('button#five').simulate('click');
  wrapper.find('button#add').simulate('click');
  wrapper.find('button#six').simulate('click');
  wrapper.find('button#equals').simulate('click');
  expect(wrapper.find('div#result').text()).toEqual('11');
  expect(wrapper.find('div#expression').text()).toEqual('5 + 6 =');
  expect(wrapper.find('div#error').text()).toEqual('');
});

test('shows error on invalid expression', () => {
  const wrapper = mount(<App />);
  wrapper.find('button#eight').simulate('click');
  wrapper.find('button#add').simulate('click');
  wrapper.find('button#open-paren').simulate('click');
  wrapper.find('button#six').simulate('click');
  wrapper.find('button#subtract').simulate('click');
  wrapper.find('button#four').simulate('click');
  wrapper.find('button#equals').simulate('click');
  expect(wrapper.find('div#result').text()).toEqual('8 + (6 - 4');
  expect(wrapper.find('div#expression').text()).toEqual('');
  expect(wrapper.find('div#error').text()).toEqual(
    'Parenthesis ) expected (char 7)',
  );
});

test('handles floating point numbers correctly', () => {
  const wrapper = mount(<App />);
  wrapper.find('button#decimal').simulate('click');
  wrapper.find('button#one').simulate('click');
  wrapper.find('button#add').simulate('click');
  wrapper.find('button#zero').simulate('click');
  wrapper.find('button#decimal').simulate('click');
  wrapper.find('button#two').simulate('click');
  wrapper.find('button#equals').simulate('click');
  expect(wrapper.find('div#expression').text()).toEqual('0.1 + 0.2 =');
  expect(wrapper.find('div#result').text()).toEqual('0.3');
});
