import React from 'react';

import { LoginButton } from '.';

export default {
  title: 'Auth/LoginButton',
  component: LoginButton,
};

const Template = (args) => <LoginButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  label: 'Auth in Storybook',
};
