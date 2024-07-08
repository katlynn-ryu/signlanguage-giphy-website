import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GifDetailPage.css';
import GifComponent from './GifComponent';

const GifDetailPage = ({ allGifs, toggleFavorite, favorites }) => {
  const { gifId } = useParams();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [additionalGifs, setAdditionalGifs] = useState([]);

  const gif = allGifs[gifId];

  useEffect(() => {
    if (!gif) {
      navigate('/');
    }
  }, [gif, navigate]);

  if (!gif) {
    return <div>GIF not found</div>;
  }

  const gifsPerPage = 3;

  const getRelatedGifs = (currentGif) => {
    const relatedGifs = allGifs.filter(
      (g) => g.category === currentGif.category && g.src !== currentGif.src
    );

    const counterpartRegex = new RegExp(`^${currentGif.src.split('_')[0]}_`);

    const counterparts = relatedGifs.filter(g => counterpartRegex.test(g.src));
    const others = relatedGifs.filter(g => !counterpartRegex.test(g.src));

    return [...counterparts, ...others];
  };

  const relatedGifs = getRelatedGifs(gif);

  const totalPages = Math.ceil(relatedGifs.length / gifsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const loadMoreGifs = () => {
    const newGifs = allGifs
      .filter(g => !additionalGifs.includes(g) && g.src !== gif.src)
      .sort(() => 0.5 - Math.random())
      .slice(0, 15);

    setAdditionalGifs((prevGifs) => [...prevGifs, ...newGifs]);
  };

  const startIndex = currentPage * gifsPerPage;
  const visibleRelatedGifs = relatedGifs.slice(startIndex, startIndex + gifsPerPage);

  const handleGifClick = (src) => {
    const index = allGifs.findIndex(g => g.src === src);
    if (index !== -1) {
      navigate(`/gif/${index}`);
    }
  };

  const handleTagClick = (tag) => {
    navigate(`/search/${tag}`);
  };

  return (
    <div className="gif-detail-container">
      <div className="gif-detail-content">
        <div className="gif-image">
          <img src={gif.src} alt={gif.alt} />
        </div>
        <div className="gif-actions">
          <button onClick={() => toggleFavorite(gif.src)}>
            {favorites.includes(gif.src) ? 'Unfavorite' : 'Favorite'}
          </button>
          <button>Share</button>
          <button>Download</button>
        </div>
      </div>
      <div className="gif-tags">
        {gif.tags.map((tag, index) => (
          <button key={index} className="gif-tag" onClick={() => handleTagClick(tag)}>
            #{tag}
          </button>
        ))}
      </div>
      <div className="related-gifs">
        <div className={`triangle-button triangle-button-left ${currentPage === 0 ? 'disabled' : ''}`} onClick={currentPage !== 0 ? handlePrevPage : null}></div>
        {visibleRelatedGifs.map((relatedGif, index) => (
          <div
            key={index}
            className="related-gif-item"
            onClick={() => handleGifClick(relatedGif.src)}
          >
            <GifComponent
              src={relatedGif.src}
              alt={relatedGif.alt}
              isFavorite={favorites.includes(relatedGif.src)}
              toggleFavorite={toggleFavorite}
              tags={relatedGif.tags}
            />
          </div>
        ))}
        <div className="triangle-button triangle-button-right" onClick={handleNextPage}></div>
      </div>
      <div className="additional-gifs">
        {additionalGifs.map((gif, index) => (
          <div
            key={index}
            className="additional-gif-item"
            onClick={() => handleGifClick(gif.src)}
          >
            <GifComponent
              src={gif.src}
              alt={gif.alt}
              isFavorite={favorites.includes(gif.src)}
              toggleFavorite={toggleFavorite}
              tags={gif.tags}
            />
          </div>
        ))}
        <button className="load-more-button" onClick={loadMoreGifs}>Load More</button>
      </div>
    </div>
  );
};

export default GifDetailPage;
