'use strict';
import { render } from '@testing-library/react';
import PriceFilter from '../../../src/components/Filters/PriceFilter'

describe('Given that PriceFilter component is used', () => {
  test('When we pass minPrice and MaxPrice, then the component show these prices', () => {
    const title = 'modalTitle';
    const minPrice = 1;
    const maxPrice = 2;

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
