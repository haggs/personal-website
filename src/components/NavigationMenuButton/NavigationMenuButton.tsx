import React from 'react';
import { hamburger, line, menuOpen } from './NavigationMenuButton.module.css';
import classNames from 'classnames';

interface NavigationMenuProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

const NavigationMenuButton: React.FC<NavigationMenuProps> = ({
  open,
  onClick: onOpen,
  className,
}) => {
  const hamburgerClasses = classNames(className, hamburger, {
    [menuOpen]: open,
  });

  return (
    <button className={hamburgerClasses} onClick={onOpen}>
      <div className={line}></div>
      <div className={line}></div>
      <div className={line}></div>
    </button>
  );
};

export default NavigationMenuButton;
