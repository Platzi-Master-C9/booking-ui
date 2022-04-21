import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  it('Render the footer component', () => {
    expect(footer.length).toEqual(1);
  });
  
  it('Render the footer links', () => {
    expect(footer.find('.link').length).toEqual(3);
    expect(footer.find('.link').at(0).text()).toEqual('About us');
    expect(footer.find('.link').at(1).text()).toEqual('Aim of the project');
    expect(footer.find('.link').at(2).text()).toEqual('Social media');
  });
});
