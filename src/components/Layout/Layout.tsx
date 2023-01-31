import React, { useEffect, useState, PropsWithChildren } from 'react';
import {
  credits,
  footer,
  fullNav,
  header,
  navMenuButton,
  navMenu,
  page,
  scrollToTopButton,
} from './Layout.module.css';
import Contact from '../Contact/Contact';
import Credits from '../Copyright/Copyright';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import NavigationMenuButton from '../NavigationMenuButton/NavigationMenuButton';

const STICKY_THRESHOLD_PX = 200;

interface LayoutProps {
  showContactInfo?: boolean;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  showContactInfo = true,
  children,
}) => {
  const [showNavigationMenu, setShowNavigationMenu] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollTopPositionPx =
      document.body.scrollTop || document.documentElement.scrollTop;
    setShowScrollToTopButton(scrollTopPositionPx > STICKY_THRESHOLD_PX);
  };

  const toggleOpenNavigationMenu = () => {
    setShowNavigationMenu(!showNavigationMenu);
  };

  return (
    <div className={page}>
      <header className={header}>
        <Logo />
        <Navigation className={fullNav} />
        <NavigationMenuButton
          open={showNavigationMenu}
          onClick={toggleOpenNavigationMenu}
          className={navMenuButton}
        />
      </header>
      {showNavigationMenu ? (
        <Navigation
          className={navMenu}
          stacked
          onNavigate={toggleOpenNavigationMenu}
        />
      ) : (
        <>
          <main>{children}</main>
          <footer className={footer}>
            {showContactInfo && <Contact />}
            <div className={credits}>
              <Credits />
            </div>
          </footer>
          {showScrollToTopButton && (
            <ScrollToTopButton className={scrollToTopButton} />
          )}
        </>
      )}
    </div>
  );
};

export default Layout;
