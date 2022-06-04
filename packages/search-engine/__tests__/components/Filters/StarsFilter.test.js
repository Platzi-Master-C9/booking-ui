'use strict';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import StartsFilter from '../../../src/components/Filters/StarsFilter';

describe('Given that StarsFilter component is used', () => {

  test('When the user press a star, the function should be executed', () => {
    const handleStar = jest.fn();

    const component = render(
      <StartsFilter
        stars={1}
        handleStar={handleStar}
      />
    );
    
    const startOne = component.getByTestId('one-start');

    fireEvent.click(startOne);
    expect(handleStar).toHaveBeenCalledTimes(1);
  });
});
