'use strict';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SizeFilter from '../../../src/components/Filters/SizeFilter';

describe('Given that SizeFilter component is used', () => {

  test('When the user press fullPlace, the function should be executed', () => {
    const handleFullPlace = jest.fn();

    const component = render(
      <SizeFilter 
        fullPlace={false}
        privateRoom={false}
        handleFullPlace={handleFullPlace}
        handlePrivateRoom={() => {}}
      />
    );
    
    const fullPlace = component.getByText('Lugar completo');

    fireEvent.click(fullPlace);
    expect(handleFullPlace).toHaveBeenCalledTimes(1);
  });

  test('When the user press private room, the function should be executed', () => {
    const handlePrivateRoom = jest.fn();

    const component = render(
      <SizeFilter 
        fullPlace={false}
        privateRoom={false}
        handleFullPlace={() => {}}
        handlePrivateRoom={handlePrivateRoom}
      />
    );
    
    const privateRoom = component.getByText('Habitación privada');

    fireEvent.click(privateRoom);
    expect(handlePrivateRoom).toHaveBeenCalledTimes(1);
  });
});
