import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <img src={`${process.env.PUBLIC_URL}/eq4all.png`} alt="Logo" />
    </div>
  );
};

export default Logo;
