import React from 'react';
import { button } from './ScrollToTopButton.module.css';
import { MdArrowUpward } from '@react-icons/all-files/md/MdArrowUpward';
import classNames from 'classnames';

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
      className={classNames(className, button)}
      aria-label="Scroll to Top"
      onClick={scrollToTop}
    >
      <MdArrowUpward />
    </button>
  );
};

export default ScrollToTopButton;
