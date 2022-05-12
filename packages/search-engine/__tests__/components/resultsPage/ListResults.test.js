import React from 'react';
import ListResultsMock from '../../../__mocks__/listResultsMock';
import { shallow } from 'enzyme';

import { ListResults } from '../../../src/components/resultsPage/ListResults';

describe('<ListResults />', () => {
  it('Render the list of places when are loading', () => {
    const statePlaces = { loading: true, error: false };
  
    const list = shallow(
      <ListResults
        places={[]}
        statePlaces={statePlaces} 
      />
    );
    expect(list.length).toEqual(1);
    expect(list.find('.loader').length).toEqual(1);
  });

  it('Render the list of places when error', () => {
    const statePlaces = { loading: false, error: 'An error has ocurred' };
  
    const list = shallow(
      <ListResults
        places={[]}
        statePlaces={statePlaces} 
      />
    );
    expect(list.length).toEqual(1);
    expect(list.find('span').text()).toEqual('An error has ocurred');
  });

  it('Render the list of places whitout places', () => {
    const statePlaces = { loading: false, error: false };
  
    const list = shallow(
      <ListResults
        places={[]}
        statePlaces={statePlaces} 
      />
    );
    expect(list.length).toEqual(1);
    expect(list.find('h1').text()).toEqual('Places not found');
  });

  it('Render the list of places whit 10 results', () => {
    const statePlaces = { loading: false, error: false };
  
    const list = shallow(
      <ListResults
        places={ListResultsMock}
        statePlaces={statePlaces} 
      />
    );
    expect(list.length).toEqual(1);
    expect(list.find('.results__card').length).toEqual(10);
  });
});
