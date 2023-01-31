import React, { useEffect, useState } from 'react';
import {
  footer,
  header,
  page,
  scrollToTopButton,
  sourceCode,
} from './Layout.module.css';
import Contact from '../Contact/Contact';
import Credits from '../Copyright/Copyright';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const STICKY_THRESHOLD_PX = 200;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const handleScroll = () => {
    const scrollTopPositionPx =
      document.body.scrollTop || document.documentElement.scrollTop;
    setShowScrollToTopButton(scrollTopPositionPx > STICKY_THRESHOLD_PX);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={page}>
      <header className={header}>
        <div>
          <Logo />
        </div>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className={footer}>
        <Contact />
        <div className={sourceCode}>
          <Credits />
        </div>
      </footer>
      {showScrollToTopButton && (
        <ScrollToTopButton className={scrollToTopButton} />
      )}
    </div>
  );
};

export default Layout;
