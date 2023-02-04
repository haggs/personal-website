import React, { useState } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import classnames from 'classnames';
import * as styles from './DarkModeToggle.module.css';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  let windowDarkModeSet = false;
  const hasWindow = typeof window !== 'undefined';

  if (hasWindow) {
    windowDarkModeSet = window.__theme === 'dark';
  }

  const [checked, setChecked] = useState(windowDarkModeSet);

  const handleToggleDarkMode = () => {
    const newValue = !checked;
    setChecked(newValue);
    window.__setPreferredTheme(newValue ? 'dark' : 'light');
  };

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <button
      className={classnames(className, styles.toggle, 'icon', 'hover-fill')}
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
