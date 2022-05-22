import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { ResultsPage } from '../../../src/components/resultsPage/Layout';

const waitForComponentToPaint = async (wrapper) => {
  await act(async () => {
    await new Promise(resolve => setTimeout(resolve, 0));
    wrapper.update();
  });
};

describe('<Results />', () => {
  const Results = mount(<ResultsPage />);
  waitForComponentToPaint(Results);

  it('Must be rendered', () => {
    expect(Results.length).toEqual(1);
  });
});
