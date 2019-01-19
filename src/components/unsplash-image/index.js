import React from 'react';
import Image from '../image';

const UnsplashImage = ({id, dimensions}) => {
  return (
    <Image src={`https://source.unsplash.com/${id}/${dimensions}`}/>
  );
};

export default UnsplashImage;
