import React from 'react';

const Logo = () => {
  const handleLogoClick = () => {
    window.location.href = 'http://localhost:9000/';
  };

  return (
    <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
      <img src="/eq4all.png" alt="Logo" />
    </div>
  );
};

export default Logo;
