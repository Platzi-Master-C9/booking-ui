import React from 'react';
import { shallow } from 'enzyme';

import ResultsPage from '../../src/components/resultsPage/layout';

describe('<Results />', () => {
  const Results = shallow(<ResultsPage />);

  it('Must be rendered', () => {
    expect(Results.length).toEqual(1);
  });
  
  it('Render del Titulo Footer', () => {
    expect(Results.find('.results__container').length).toEqual(1);
  });
});
