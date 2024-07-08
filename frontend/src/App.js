import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate, Link } from 'react-router-dom';
import HomePage from './HomePage';
import GifDetailPage from './GifDetailPage';
import GifSearchPage from './GifSearchPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Logo from './Logo';
import GifDetailHeader from './GifDetailHeader';
import './App.css';

const App = () => {
  const [allGifs, setAllGifs] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [sortedGifs, setSortedGifs] = useState([]);
  const [displayedGifs, setDisplayedGifs] = useState([]);
  const [mode, setMode] = useState('pagination');
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/testGifs.json')
      .then(response => response.json())
      .then(data => {
        setAllGifs(data);
        setSortedGifs(data);
        setDisplayedGifs(data.slice(0, 9));
      });
    return () => {
      setAllGifs([]);
      setSortedGifs([]);
      setDisplayedGifs([]);
    };
  }, []);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
    const filteredGifs = allGifs.filter(gif => gif.tags.includes(query));
    setSortedGifs(filteredGifs);
    setDisplayedGifs(filteredGifs.slice(0, 9));
    setCurrentPage(1);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event.target.value);
    }
  };

  const toggleFavorite = (src) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(src)
        ? prevFavorites.filter((favorite) => favorite !== src)
        : [...prevFavorites, src]
    );
  };

  const toggleModeAndReset = () => {
    setMode(prevMode => {
      const newMode = prevMode === 'pagination' ? 'infinite' : 'pagination';
      if (newMode === 'infinite') {
        setDisplayedGifs(sortedGifs.slice(0, 9));
      }
      setCurrentPage(1);
      return newMode;
    });
  };

  const sortGifsByNewest = () => {
    const sortedGifs = [...allGifs].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    setSortedGifs(sortedGifs);
    setDisplayedGifs(sortedGifs.slice(0, 9));
  };

  const sortGifsByPopularity = () => {
    const sortedGifs = [...allGifs].sort((a, b) => b.popularity - a.popularity);
    setSortedGifs(sortedGifs);
    setDisplayedGifs(sortedGifs.slice(0, 9));
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
    setDisplayedGifs(sortedGifs.slice((newPage - 1) * 9, newPage * 9));
  };

  return (
    <div className="app-container">
      {location.pathname.startsWith('/gif/') ? (
        <GifDetailHeader />
      ) : (
        <header className="header">
          <div className="top-bar">
            <div className="logo-container" onClick={() => navigate('/')}>
              <Logo />
            </div>
            <div className="login-toggle-section">
              <i className="fas fa-user login-icon" onClick={() => navigate('/login')}></i>
              <button className="toggle-button" onClick={toggleModeAndReset}>
                Toggle to {mode === 'pagination' ? 'Infinite Scroll' : 'Pagination'}
              </button>
            </div>
          </div>
          <div className="search-section">
            <input type="text" placeholder="수어티콘 키워드 검색" onKeyDown={handleKeyDown} />
            <div className="dropdown">
              <div className="dropdown-bar">&#9660; Sort</div>
              <div className="dropdown-content">
                <a onClick={sortGifsByNewest}>최신순</a>
                <a onClick={sortGifsByPopularity}>인기순</a>
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
        <Route
          path="/"
          element={
            <HomePage
              allGifs={sortedGifs}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              sortGifsByNewest={sortGifsByNewest}
              sortGifsByPopularity={sortGifsByPopularity}
              mode={mode}
              setMode={setMode}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              handleSearch={handleSearch}
              changePage={changePage}
            />
          }
        />
        <Route
          path="/category/:categoryName"
          element={
            <HomePage
              allGifs={sortedGifs}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
              sortGifsByNewest={sortGifsByNewest}
              sortGifsByPopularity={sortGifsByPopularity}
              mode={mode}
              setMode={setMode}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              handleSearch={handleSearch}
              changePage={changePage}
            />
          }
        />
        <Route
          path="/gif/:gifId"
          element={
            <GifDetailPage
              allGifs={allGifs}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          }
        />
        <Route
          path="/search/:tag"
          element={
            <GifSearchPage
              allGifs={allGifs}
              toggleFavorite={toggleFavorite}
              favorites={favorites}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <footer className="footer">
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
                <i className="fab fa-instagram"></i>
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
