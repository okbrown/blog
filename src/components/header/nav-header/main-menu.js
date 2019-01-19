import React from 'react';
import List from '../../list';

const MainMenu = ({ className, list }) => {
  return (
    <List className={className} list={list}/>
  );
};

export default MainMenu;
