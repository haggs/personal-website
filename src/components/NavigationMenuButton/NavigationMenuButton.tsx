import React from 'react';
import { hamburger, line, menuOpen } from './NavigationMenuButton.module.css';
import classnames from 'classnames';

interface NavigationMenuProps {
  open: boolean;
  onClick: () => void;
  className?: string;
}

const NavigationMenuButton: React.FC<NavigationMenuProps> = ({
  open,
  onClick,
  className,
}) => {
  const hamburgerClasses = classnames(className, hamburger, 'icon', {
    [menuOpen]: open,
  });

  return (
    <button
      className={hamburgerClasses}
      onClick={onClick}
      aria-label={`${open ? 'Close' : 'Open'} menu`}
    >
      <div className={line}></div>
      <div className={line}></div>
      <div className={line}></div>
    </button>
  );
};

export default NavigationMenuButton;
