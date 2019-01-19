import React from 'react';
import SocialList from '../../social-list';

const SocialMenu = ({ className, list }) => {
  return (
    <SocialList className={className} list={list}/>
  );
};

export default SocialMenu;
