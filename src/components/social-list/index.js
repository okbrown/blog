import React from 'react';
import Link from '../link';

const SocialList = ({ className, list }) => {
  return (
    (list && list.length) &&
    <ul className={className}>
      {
        list.map(item => <li key={item.className}>
          <Link url={item.link} target="_blank">
            <i className={item.className}/>
          </Link>
        </li>)
      }
    </ul>
  );
};

export default SocialList;
