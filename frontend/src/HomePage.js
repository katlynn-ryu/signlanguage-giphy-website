import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import GifComponent from './GifComponent';
import './HomePage.css';

const HomePage = ({ allGifs, toggleFavorite, favorites, sortGifsByNewest, sortGifsByPopularity, mode, setMode, currentPage, setCurrentPage, handleSearch, searchQuery }) => {
  const gifsPerPage = 9;
  const [displayedGifs, setDisplayedGifs] = useState([]);
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const filteredGifs = useMemo(() => {
    let gifs = allGifs;
    if (categoryName) {
      gifs = gifs.filter(gif => gif.category.includes(categoryName));
    }
    if (searchQuery) {
      gifs = gifs.filter(gif => gif.tags.some(tag => tag.includes(searchQuery)));
    }
    return gifs;
  }, [allGifs, categoryName, searchQuery]);
  

  const indexOfLastGif = currentPage * gifsPerPage;
  const indexOfFirstGif = indexOfLastGif - gifsPerPage;
  const totalPages = Math.ceil(filteredGifs.length / gifsPerPage);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [currentPage, totalPages, setCurrentPage]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    if (mode === 'pagination') {
      setDisplayedGifs(filteredGifs.slice(indexOfFirstGif, indexOfLastGif));
    }
  }, [currentPage, mode, indexOfFirstGif, indexOfLastGif, filteredGifs]);

  useEffect(() => {
    if (mode === 'infinite') {
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setDisplayedGifs(prevGifs => {
            const nextGifs = filteredGifs.slice(prevGifs.length, prevGifs.length + gifsPerPage);
            return [...prevGifs, ...nextGifs];
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mode, filteredGifs, gifsPerPage]);

  const handleSortByNewest = () => {
    sortGifsByNewest();
    setCurrentPage(1);
  };

  

  const handleSortByPopularity = () => {
    sortGifsByPopularity();
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
    setDisplayedGifs(filteredGifs.slice(0, gifsPerPage));
  }, [categoryName, filteredGifs, gifsPerPage, setCurrentPage]);

  return (
    <div>
      <div className="gif-container">
        {displayedGifs.map((gif, index) => (
          <GifComponent
            key={index}
            src={gif.src}
            alt={gif.alt}
            isFavorite={favorites.includes(gif.src)}
            toggleFavorite={toggleFavorite}
            tags={gif.tags}
            onClick={() => navigate(`/gif/${allGifs.findIndex(g => g.src === gif.src)}`)}
          />
        ))}
      </div>
      {mode === 'pagination' && (
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
