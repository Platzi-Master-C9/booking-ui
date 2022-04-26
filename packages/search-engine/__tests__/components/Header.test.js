import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Header from '../../src/components/Header';

describe('<Header />', () => {
  it('Render the header component', () => {
    const header = mount(<Header />);
    expect(header.length).toEqual(1);
  });

  it('Render the header component in the landing page', () => {
    const header = mount(<Header classPage='landing' />);

    expect(header.length).toEqual(1);
    expect(header.find('.landing').length).toEqual(2);
  });
});

describe('Header Snapshot', () => {
  it('compounding the UI of the component', () => {
    const component = create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('compounding the UI of the component in the landing page', () => {
    const component = create(<Header classPage='landing' />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
