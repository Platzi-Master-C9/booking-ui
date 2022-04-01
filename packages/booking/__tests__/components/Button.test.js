/* eslint-disable no-undef */
import React from "react";
import { shallow } from "enzyme";
import Button from '../../src/components/Button.jsx';

describe("is button rendered and clickable", () => {
  test("Render del Button", () => {
    const button = shallow(<Button />)
    expect(button.length).toEqual(1)
  })
})