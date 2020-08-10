import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import Counter from './Counter';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const wrapper = mount(<Counter />);

describe('Counter', () => {
  it('should be defined', () => {
    expect(Counter).toBeDefined();
  });

  it('should render correctly', () => {
    const dom = shallow(<Counter />);
    expect(dom).toMatchSnapshot();
  });

  // it('should update hooks', () => {
  //   wrapper.simulate('click');
  // });
});
