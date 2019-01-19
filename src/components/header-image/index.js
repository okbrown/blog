import React from 'react';
import Image from '../image';

const HeaderImage = ({ image }) => {
  return (
    <figure>
      <Image {...image} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
};

export default HeaderImage;
