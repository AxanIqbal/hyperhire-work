import React from 'react';
import Logo from '@/assets/svg/logo.svg';

function Header() {
  return (
    <header className={'h-[60px] flex items-center'}>
      <Logo />
    </header>
  );
}

export default Header;
