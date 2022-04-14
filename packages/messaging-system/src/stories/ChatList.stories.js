import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatList from '../components/ChatList';

const stories = storiesOf('App Test', module);

stories.add('ChatList', () => {
    return (
        <ChatList />
    );
});