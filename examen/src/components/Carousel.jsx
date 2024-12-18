import React, { useState, useEffect } from 'react';

const images = [
  '/img/small-1.png',
  '/img/small-2.jpg',
  '/img/small-3.jpg',
  '/img/small-4.jpg',
  '/img/small-5.jpg',
  '/img/small-6.jpg'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const handlePuntos = (index) => setCurrentIndex(index);

  return (
    <div className="carousel">
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <div className="info-bar">
          <span className="subtitle">Fecha:</span>
          <span id="current-day">{new Date().toLocaleDateString()}</span>
          <span className="subtitle">Hora:</span>
          <Clock />
        </div>
      </div>

      <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item">
            <img src={src} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" onClick={prevSlide}>
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        <span className="carousel-control-next-icon"></span>
      </button>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handlePuntos(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <span id="current-time">{time}</span>;
};

export default Carousel;
