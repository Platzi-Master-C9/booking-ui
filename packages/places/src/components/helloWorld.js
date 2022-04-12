import React from 'react';
import Link from 'next/Link';

export const Places = () => {
  return (
    <h1>
      Hello from
      <Link href="/places">
        <a>{' '}Places</a>
      </Link>
    </h1>
    //console.log('Hello from places')
  );
};
