import React from 'react';

import BasicTextInput from './BasicTextInput';

export default {
    component: BasicTextInput,
    title: 'Basic Text Input',
};

const Template = args => <BasicTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    basicTextInput: {
        id: '1',
        title: 'Test Basic Text Input',
        state: 'BASIC_TEXT_INPUT_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    basicTextInput: {
        ...Default.args.basicTextInput,
        state: 'BASIC_TEXT_INPUT_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    basicTextInput: {
        ...Default.args.basicTextInput,
        state: 'BASIC_TEXT_INPUT_ARCHIVED',
    },
};
