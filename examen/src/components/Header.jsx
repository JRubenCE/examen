import React, { useEffect } from 'react';

// Componente Header con título que cambia de color
const Header = () => {
  useEffect(() => {
    const title = document.querySelector('.title');

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const interval = setInterval(() => {
      title.style.color = getRandomColor();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="header-left">
      <h1 className="title">FAKE TICKET</h1>
    </header>
  );
};

export default Header;
