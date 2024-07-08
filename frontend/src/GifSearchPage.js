import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import GifComponent from './GifComponent';
import './GifSearchPage.css';

const GifSearchPage = ({ allGifs, toggleFavorite, favorites }) => {
  const { tag } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const gifsPerPage = 9;
  const navigate = useNavigate();

  useEffect(() => {
    const results = allGifs.filter(gif => gif.tags.includes(tag));
    setSearchResults(results);
  }, [tag, allGifs]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * gifsPerPage;
  const visibleGifs = searchResults.slice(startIndex, startIndex + gifsPerPage);

  return (
    <div className="gif-search-container">
      <h1>GIFs tagged with #{tag}</h1>
      <div className="gif-container">
        {visibleGifs.map((gif, index) => (
          <div key={index} className="gif-item" onClick={() => navigate(`/gif/${gif.src}`)}>
            <GifComponent
              src={gif.src}
              alt={gif.alt}
              isFavorite={favorites.includes(gif.src)}
              toggleFavorite={toggleFavorite}
              tags={gif.tags}
              onClick={() => navigate(`/gif/${gif.src}`)}
            />
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
        <button onClick={handleNextPage} disabled={startIndex + gifsPerPage >= searchResults.length}>Next</button>
      </div>
    </div>
  );
};

export default GifSearchPage;
