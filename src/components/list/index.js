import React from 'react';
import { Link } from '@reach/router';

const List = ({ className, list }) => {
  return (
    (list && list.length) &&
    <ul className={className}>
      {
        list.map(item => <li key={item.name}>
            <Link to={`/${item.link}`}>
              {item.name}
            </Link>
          </li>
        )
      }
    </ul>
  );
};

export default List;
