import React, { useEffect, useState } from 'react';
import {
  footer,
  header,
  headerSticky,
  main,
  page,
  scrollToTopButton,
  sourceCode,
} from './Layout.module.css';
import Contact from '../Contact/Contact';
import Credits from '../Credits/Credits';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import classNames from 'classnames';

const STICKY_THRESHOLD_PX = 200;

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showStickyElements, setShowStickyElements] = useState(false);

  const handleScroll = () => {
    const scrollTopPositionPx =
      document.body.scrollTop || document.documentElement.scrollTop;
    setShowStickyElements(scrollTopPositionPx >= STICKY_THRESHOLD_PX);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = classNames(header, {
    [headerSticky]: showStickyElements,
  });

  return (
    <div className={page}>
      <header className={headerClasses}>
        <Logo />
        <Navigation />
      </header>
      <main className={main}>{children}</main>
      <footer className={footer}>
        <Contact />
        <div className={sourceCode}>
          <Credits />
        </div>
      </footer>
      {showStickyElements && (
        <span className={scrollToTopButton}>
          <ScrollToTopButton />
        </span>
      )}
    </div>
  );
};

export default Layout;
