import React, { useState } from 'react';

const GifGallery = ({ gifs, currentPage, gifsPerPage, setCurrentPage }) => {
  const categories = ['All', '카테고리 1', '카테고리 2', '카테고리 3', '카테고리 4', '카테고리 5'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGifs = selectedCategory === 'All' 
    ? gifs 
    : gifs.filter(gif => gif.category === selectedCategory);

  const indexOfLastGif = currentPage * gifsPerPage;
  const indexOfFirstGif = indexOfLastGif - gifsPerPage;
  const currentGifs = filteredGifs.slice(indexOfFirstGif, indexOfLastGif);
  const totalPages = Math.ceil(filteredGifs.length / gifsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div>
      <div className="category-buttons">
        {categories.map(category => (
          <button key={category} onClick={() => {setSelectedCategory(category); setCurrentPage(1);}}>
            {category}
          </button>
        ))}
      </div>
      <div className="gif-gallery">
        {currentGifs.map(gif => (
          <img key={gif.src} src={gif.src} alt={gif.alt} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default GifGallery;
