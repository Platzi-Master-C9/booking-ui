import React from 'react';
import { mount } from 'enzyme';
import { LandingPage } from '../../src/components/LandingPage/LandingPage';

describe('<LandingPage />', () => {
  test('renderizar componente landing', () => {
    const landing = mount(<LandingPage />);
    expect(landing.length).toEqual(1);
  });
});
