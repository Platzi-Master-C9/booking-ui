import React from 'react';
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer';

import { Pagination } from '../../../src/components/resultsPage/Pagination';

describe('<Pagination />', () => {
  const Mock = {
    currentPage: 1,
    prevHandler: jest.fn(),
    nextHandler: jest.fn(),
    TotalPages: 30
  };

  it('Render the pagination component', () => {
    const component = shallow(
      <Pagination
       currentPage={Mock.currentPage}
       prevHandler={Mock.prevHandler}
       nextHandler={Mock.nextHandler}
       TotalPages={Mock.TotalPages}
      />
    );

    expect(component.length).toEqual(1);
    expect(component.find('.paging').length).toEqual(3);
    
    component.find('.icon--right').simulate('click');
    expect(Mock.nextHandler).toHaveBeenCalledTimes(1);
  });
});

describe('Pagination Snapshot', () => {
  it('compounding the UI of the component', () => {
    const pagination = create(<Pagination />);
    expect(pagination.toJSON()).toMatchSnapshot();
  });
});
