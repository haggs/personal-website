import React from 'react';
import { button } from './ScrollToTopButton.module.css';

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={scrollToTop}>
      Scroll Up!
    </button>
  );
};

export default ScrollToTopButton;
