import React, { useEffect, useState, PropsWithChildren } from 'react';
import {
  credits,
  footer,
  fullNav,
  header,
  headerRight,
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
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const STICKY_THRESHOLD_PX = 200;
const MOBILE_BREAKPOINT = 900;

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
    <div className={page}>
      <header className={header}>
        <Logo />
        <div className={headerRight}>
          <Navigation className={fullNav} />
          <NavigationMenuButton
            open={showNavigationMenu}
            onClick={toggleOpenNavigationMenu}
            className={navMenuButton}
          />
          <DarkModeToggle />
        </div>
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
