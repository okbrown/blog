import React from 'react';
import Logo from './logo';
import NavHeader from './nav-header';

const Header = ({logoName, mainMenuList, socialMenuList}) => {
  return (
  <header>
    <Logo logoName={logoName}/>
    <NavHeader mainMenuList={mainMenuList} socialMenuList={socialMenuList}/>
  </header>
)};

export default Header;
