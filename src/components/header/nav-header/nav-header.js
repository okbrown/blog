import React from 'react';
import MainMenu from './main-menu';
import SocialMenu from './social-menu';

const NavHeader = ({ mainMenuList, socialMenuList }) => {
  return (
    <nav className="nav-header">
      <MainMenu {...mainMenuList}/>
      <SocialMenu {...socialMenuList}/>
    </nav>
  );
};

export default NavHeader;
