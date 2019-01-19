import React from 'react';

const AHrefLink = ({ url, children, ...rest}) => {
  return (
    <a href={url} rel="noopener nofollow noreferrer" {...rest}>
      {children}
    </a>
  );
};

export default AHrefLink;
