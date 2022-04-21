import React from 'react';
import { mount } from 'enzyme';

import Header from '../../src/components/Header';

describe('<Header />', () => {
  const header = mount(<Header />);

  it('Render the header component', () => {
    expect(header.length).toEqual(1);
  });
  
  it('Render the header links', () => {
    expect(header.find('.link').length).toEqual(3);
    expect(header.find('.link').at(0).text()).toEqual('About us');
    expect(header.find('.link').at(1).text()).toEqual('Aim of the project');
    expect(header.find('.link').at(2).text()).toEqual('Social media');
  });
});
