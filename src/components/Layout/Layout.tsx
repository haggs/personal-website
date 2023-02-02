import React, { useEffect, useState, PropsWithChildren } from 'react';
import * as styles from './Layout.module.css';
import Contact from '../Contact/Contact';
import Credits from '../Credits/Credits';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMenuButton from '../NavigationMenuButton/NavigationMenuButton';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const STICKY_THRESHOLD_PX = 200;

// This should be kept in sync the breakpoints in Layout.modules.css
const MOBILE_BREAKPOINT = 900;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    const scrollTopPositionPx =
      document.body.scrollTop || document.documentElement.scrollTop;
    setShowScrollToTopButton(scrollTopPositionPx > STICKY_THRESHOLD_PX);
  };

  const handleResize = () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      setShowNavigationMenu(false);
    }
  };

  const toggleOpenNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logoAndSkipLink}>
          <a
            className={styles.skipLink}
            href="#main"
            title="Skip to main content"
          >{`Skip to content`}</a>
          <Logo />
        </div>
        <Navigation className={styles.fullNav} />
        <NavigationMenuButton
          open={showNavigationMenu}
          onClick={toggleOpenNavigationMenu}
          className={styles.navMenuButton}
        />
        <DarkModeToggle className={styles.darkModeToggle} />
      </header>
      {showNavigationMenu ? (
        <Navigation
          className={styles.navMenu}
          stacked
          onNavigate={toggleOpenNavigationMenu}
        />
      ) : (
        <>
          <main id="main" className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            <section className={styles.contact}>
              <Contact />
            </section>
            <Credits />
          </footer>
          {showScrollToTopButton && (
            <ScrollToTopButton className={styles.scrollToTopButton} />
          )}
        </>
      )}
    </div>
  );
};

export default Layout;
