// External dependencies
import React from 'react';
import {useRouter} from 'next/router';

// Internal dependencies
import { ChatPage } from '@booking-ui/shared';

function Chat() {
  const router = useRouter();
  const { customerId } = router.query;

  return <ChatPage customerId={customerId} />;
}

export default Chat;
