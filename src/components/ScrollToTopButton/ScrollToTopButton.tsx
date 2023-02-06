import React from 'react';
import { FiArrowUp } from '@react-icons/all-files/fi/FiArrowUp';
import classnames from 'classnames';

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={classnames('icon-button', className)}
      aria-label="Scroll to Top"
      onClick={scrollToTop}
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
