import React from 'react';
import * as styles from './NavigationMenuButton.module.css';
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
  const hamburgerClasses = classnames(className, styles.hamburger, 'icon', {
    [styles.menuOpen]: open,
  });

  return (
    <button
      className={hamburgerClasses}
      onClick={onClick}
      aria-label={`${open ? 'Close' : 'Open'} menu`}
    >
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </button>
  );
};

export default NavigationMenuButton;
