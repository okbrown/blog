import React from 'react';
import { Link } from '@reach/router';

const Logo = ({ logoName }) => (
  <Link to='/'>
    <div className="logo-container">
      <div className="logo">
        {logoName}
      </div>
    </div>
  </Link>
);

export default Logo;
