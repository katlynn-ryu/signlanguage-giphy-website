import React from 'react';
import GifComponent from './GifComponent';

const gifs = [
  { src: `${process.env.PUBLIC_URL}/3.1절_아담.gif`, alt: "GIF 1" },
  { src: `${process.env.PUBLIC_URL}/3.1절_이브.gif`, alt: "GIF 2" },
  // ... add all other GIFs
];

const GifGrid = () => (
  <div className="gif-grid">
    {gifs.map((gif, index) => (
      <GifComponent key={index} src={gif.src} alt={gif.alt} />
    ))}
  </div>
);

export default GifGrid;
