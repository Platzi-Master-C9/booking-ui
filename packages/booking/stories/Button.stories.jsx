import React from 'react';

import Button  from '../src/components/Button.jsx';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  backgroundColor: 'Red',
  size: 'large'
};

export const Large = Template.bind({});
Large.args = {
  primary: 'false',
  size: 'large',
  label: 'Button',
  backgroundColor: 'gray'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  backgroundColor: 'green'
};
