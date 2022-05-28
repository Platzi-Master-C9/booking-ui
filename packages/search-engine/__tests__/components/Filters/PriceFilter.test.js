'use strict';
import React from 'react';
import { render } from '@testing-library/react';
import PriceFilter from '../../../src/components/Filters/PriceFilter'
import { faker } from '@faker-js/faker'

describe('Given that PriceFilter component is used', () => {
  test('When we pass minPrice and MaxPrice, then the component show these prices', () => {
    const minPrice = faker.finance.amount(0, 10);
    const maxPrice = faker.finance.amount(10, 20);

    const component = render(
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        handleMinPrice={() => {}}
        handleMaxPrice={() => {}}
      />
    );

    const textMinPrice = component.getByDisplayValue(minPrice);
    const textMaxPrice = component.getByDisplayValue(maxPrice);

    expect(textMinPrice).toBeTruthy();
    expect(textMaxPrice).toBeTruthy();
  });
});
