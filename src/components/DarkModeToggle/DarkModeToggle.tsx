import React, { useState } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import classnames from 'classnames';
import * as styles from './DarkModeToggle.module.css';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  const hasWindow = typeof window !== 'undefined';
  const windowIsDarkMode = hasWindow && window.__theme === 'dark';

  const [checked, setChecked] = useState(windowIsDarkMode);

  const handleToggleDarkMode = () => {
    const newValue = !checked;
    setChecked(newValue);
    window.__setPreferredTheme(newValue ? 'dark' : 'light');
  };

  return (
    <button
      className={classnames(
        className,
        styles.toggle,
        'icon-button',
        'hover-fill'
      )}
      onClick={hasWindow ? handleToggleDarkMode : undefined}
      aria-label={`Turn ${checked ? 'off' : 'on'} dark mode`}
    >
      {checked ? (
        <FiMoon className="hover-fill" />
      ) : (
        <FiSun className="hover-fill" />
      )}
    </button>
  );
};

export default DarkModeToggle;
