import * as React from 'react';
import { container, header, footer } from './Layout.module.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import Contact from '../Contact/Contact';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={container}>
      <header className={header}>
        <Logo />
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className={footer}>
        <Contact />
      </footer>
    </div>
  );
};

export default Layout;
