'use strict';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import ModalFilters from '../../../src/components/Filters/ModalFilters'

describe('Given that ModalFilter component is used', () => {
  test('When the variable visible is false, then the modal should be invisible', () => {
    const title = 'modalTitle'
    const children = 'Texto de prueba'

    const component = render(
        <ModalFilters 
          title={title} 
          visible={false} 
          setVisible={() => {}} 
          reset={() => {}} 
          submitFn={() => {}}>
            {children}
        </ModalFilters>
    );

    const modal = component.queryAllByText(children);
      
    expect(modal).toHaveLength(0);
  });

  test('When the variable visible is true, then the modal should be visible', () => {
    const title = 'modalTitle'
    const children = 'Texto de prueba'

    const component = render(
        <ModalFilters 
          title={title} 
          visible={true} 
          setVisible={() => {}} 
          reset={() => {}} 
          submitFn={() => {}}>
            {children}
        </ModalFilters>
    );

    const modal = component.queryAllByText(children);
      
    expect(modal).toBeTruthy();
  });

  test('When the user presses the filter, then the modal opens', () => {
      const title = 'modalTitle'
      const openModal = jest.fn()

      const component = render(
          <ModalFilters 
            title={title} 
            visible={true} 
            setVisible={openModal} 
            reset={() => {}} 
            submitFn={() => {}}>
              Prueba
          </ModalFilters>
      );

      const pressButton = component.getByText(title);
      fireEvent.click(pressButton);

      expect(openModal).toHaveBeenCalledTimes(1);
  });

  test('When the user presses reset, then this function should be executed', () => {
    const title = 'modalTitle'
    const resetFn = jest.fn()

    const component = render(
        <ModalFilters 
          title={title} 
          visible={true} 
          setVisible={() => {}} 
          reset={resetFn} 
          submitFn={() => {}}>
            Prueba
        </ModalFilters>
    );

    const pressButton = component.getByText('Borrar');
    fireEvent.click(pressButton);

    expect(resetFn).toHaveBeenCalledTimes(1);
  });

  test('When the user presses submit button, then this function should be executed', () => {
    const title = 'modalTitle'
    const submitFn = jest.fn()

    const component = render(
        <ModalFilters 
          title={title} 
          visible={true} 
          setVisible={() => {}} 
          reset={() => {}} 
          submitFn={submitFn}>
            Prueba
        </ModalFilters>
    );

    const pressButton = component.getByText('Guardar');
    fireEvent.click(pressButton);

    expect(submitFn).toHaveBeenCalledTimes(1);
  });
});
