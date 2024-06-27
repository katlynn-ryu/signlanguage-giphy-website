import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './GifDetailHeader.css';

const GifDetailHeader = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="gif-detail-header">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <Logo />
      </div>
      <div className="search-section">
        <input type="text" placeholder="수어티콘 키워드 검색" />
        <div className="dropdown">
          <button className="dropbtn">&#9660;</button>
          <div className="dropdown-content">
            <button>최신순</button>
            <button>인기순</button>
          </div>
        </div>
      </div>
      <div className="login-icon">
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default GifDetailHeader;
