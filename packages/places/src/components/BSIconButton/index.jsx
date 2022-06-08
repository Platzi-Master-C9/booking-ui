import React from 'react';
import Link from 'next/link';
import './styles/bs-icon-button.scss';

export function BSIconButton({ bg, loading }) {
  return (
    <Link href="/">
      <span
        className={`bs-icon__button ${bg === 'prymary' ? 'bs-icon__button--primary' : 'bs-icon__button--secondary'} ${loading && 'bs-icon__button--loading'}`}
      >
        BS
      </span>
    </Link>
  );
}

export default BSIconButton;
