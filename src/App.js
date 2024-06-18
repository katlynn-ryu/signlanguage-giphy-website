import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import GifComponent from './GifComponent';
import './App.css';
import { CSSTransition } from 'react-transition-group';
import './DropdownAnimation.css';
import GifDetailPage from './GifDetailPage';
import Logo from './Logo';
import GifDetailHeader from './GifDetailHeader';

const HomePage = ({ allGifs, toggleFavorite, favorites, sortGifsByNewest, sortGifsByPopularity, mode, toggleMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const gifsPerPage = 9;
  const [displayedGifs, setDisplayedGifs] = useState(allGifs.slice(0, gifsPerPage));
  const navigate = useNavigate();

  const indexOfLastGif = currentPage * gifsPerPage;
  const indexOfFirstGif = indexOfLastGif - gifsPerPage;
  const totalPages = Math.ceil(allGifs.length / gifsPerPage);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  }, [currentPage]);

  useEffect(() => {
    if (mode === 'pagination') {
      setDisplayedGifs(allGifs.slice(indexOfFirstGif, indexOfLastGif));
    }
  }, [currentPage, mode, indexOfFirstGif, indexOfLastGif, allGifs]);

  useEffect(() => {
    if (mode === 'infinite') {
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          setDisplayedGifs(prevGifs => {
            const nextGifs = allGifs.slice(prevGifs.length, prevGifs.length + gifsPerPage);
            return [...prevGifs, ...nextGifs];
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [mode, allGifs]);

  const handleSortByNewest = () => {
    sortGifsByNewest();
    setCurrentPage(1);
  };

  const handleSortByPopularity = () => {
    sortGifsByPopularity();
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="gif-container">
        {displayedGifs.map((gif, index) => (
          <div key={index} className="gif-item" onClick={() => navigate(`/gif/${index}`)}>
            <GifComponent
              key={index}
              src={gif.src}
              alt={gif.alt}
              isFavorite={favorites.includes(gif.src)}
              toggleFavorite={toggleFavorite}
              tags={gif.tags}
            />
          </div>
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

const CategoryPage = ({ allGifs, toggleFavorite, favorites }) => {
  const { categoryName } = useParams();
  const filteredGifs = allGifs.filter(gif => gif.category.includes(categoryName));
  const navigate = useNavigate();

  return (
    <div className="gif-container">
      {filteredGifs.map((gif, index) => (
        <div key={index} className="gif-item" onClick={() => navigate(`/gif/${allGifs.indexOf(gif)}`)}>
          <GifComponent
            key={index}
            src={gif.src}
            alt={gif.alt}
            isFavorite={favorites.includes(gif.src)}
            toggleFavorite={toggleFavorite}
            tags={gif.tags}
          />
        </div>
      ))}
    </div>
  );
};

const Dropdown = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="dropbtn">
        {title}
      </button>
      <CSSTransition
        in={open}
        timeout={300}
        classNames="dropdown"
        unmountOnExit
      >
        <div className="dropdown-content">
          {items.map(item => (
            <Link key={item.name} to={`/category/${item.name}`}>{item.name}</Link>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

const App = () => {
  const [allGifs, setAllGifs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortedGifs, setSortedGifs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gifsPerPage = 9;
  const [mode, setMode] = useState('pagination');
  const [displayedGifs, setDisplayedGifs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch('/testGifs.json')
      .then(response => response.json())
      .then(data => {
        setAllGifs(data);
        setSortedGifs(data);
        setDisplayedGifs(data.slice(0, gifsPerPage));
      });
  }, []);

  const toggleFavorite = (src) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(src)
        ? prevFavorites.filter((favorite) => favorite !== src)
        : [...prevFavorites, src]
    );
  };

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'pagination' ? 'infinite' : 'pagination'));
    if (mode === 'infinite') {
      setDisplayedGifs(sortedGifs.slice(0, gifsPerPage));
      setCurrentPage(1);
    }
  };

  const sortGifsByNewest = () => {
    const sortedGifs = [...allGifs].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    setSortedGifs(sortedGifs);
    setDisplayedGifs(sortedGifs.slice(0, gifsPerPage));
    setCurrentPage(1);
  };

  const sortGifsByPopularity = () => {
    const sortedGifs = [...allGifs].sort((a, b) => b.popularity - a.popularity);
    setSortedGifs(sortedGifs);
    setDisplayedGifs(sortedGifs.slice(0, gifsPerPage));
    setCurrentPage(1);
  };

  return (
    <div className="app-container">
      {location.pathname.startsWith('/gif/') ? (
        <GifDetailHeader />
      ) : (
        <header className="header">
          <div className="top-bar">
            <Logo />
            <div className="login-toggle-section">
              <i className="fas fa-user"></i>
              <button className="toggle-button" onClick={toggleMode}>
                Toggle to {mode === 'pagination' ? 'Infinite Scroll' : 'Pagination'}
              </button>
            </div>
          </div>
          <div className="search-section">
            <input type="text" placeholder="수어티콘 키워드 검색" />
            <div className="dropdown">
              <button className="dropbtn">&#9660;</button>
              <div className="dropdown-content">
                <button onClick={sortGifsByNewest}>최신순</button>
                <button onClick={sortGifsByPopularity}>인기순</button>
              </div>
            </div>
          </div>
          <div className="categories">
            <Link to="/category/기념일및축제" className="category-button">기념일 및 축제</Link>
            <Link to="/category/감정표현" className="category-button">감정 표현</Link>
            <Link to="/category/상황행사" className="category-button">상황/행사</Link>
            <Link to="/category/축하축제" className="category-button">축하/축제</Link>
            <Link to="/category/기타" className="category-button">기타</Link>
          </div>
        </header>
      )}
      <Routes>
        <Route path="/" element={<HomePage allGifs={sortedGifs} toggleFavorite={toggleFavorite} favorites={favorites} sortGifsByNewest={sortGifsByNewest} sortGifsByPopularity={sortGifsByPopularity} mode={mode} toggleMode={toggleMode} />} />
        <Route path="/category/:categoryName" element={<CategoryPage allGifs={sortedGifs} toggleFavorite={toggleFavorite} favorites={favorites} />} />
        <Route path="/gif/:gifId" element={<GifDetailPage allGifs={allGifs} toggleFavorite={toggleFavorite} favorites={favorites} />} />
      </Routes>
      <footer>
        <div className="about-us">
          <h2>About Us</h2>
          <p>EQ4ALL is</p>
          <p>
            An innovative company based in South Korea, founded by Steve Ko and Kevin Lee, in November 2017. EQ4ALL was established to remove societal barriers that prohibit DHH (Deaf or Hard of Hearing) individuals from accessing information, education, communication, and jobs. EQ4ALL utilizes Rule Based Machine Translation engine (RBMT), Neural Machine Translation engine (NMT), and Sign Language Player to help DHH individuals break through the glass ceiling.
          </p>
        </div>
        <div className="footer">
          <div className="footer-links">
            <div className="social-media">
              <a href="https://www.linkedin.com/company/eq4all" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCCmPjKM7fwKtAUO61yTbYuQ/featured" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/Eq4allOfficial" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/eq4all__official/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-contact">
            <p>Tel: +82-2-6207-7898</p>
            <p>Fax: +82-2-6207-7897</p>
            <p>4F, Koram Bldg. Nonhyunro-76gil 11, Gangnam-Gu, Seoul, Korea</p>
            <p>© 2024 by EQ4ALL Co., Ltd <a href="https://www.eq4all.co.kr/privacy-policy">이용약관</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
