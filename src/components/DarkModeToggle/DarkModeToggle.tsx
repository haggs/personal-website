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
  if (typeof window !== 'undefined') {
    windowDarkModeSet = window.__theme === 'dark';
  }

  const [checked, setChecked] = useState(windowDarkModeSet);

  const handleToggleDarkMode = () => {
    const newValue = !checked;
    setChecked(newValue);
    window.__setPreferredTheme(newValue ? 'dark' : 'light');
  };

  if (typeof window === 'undefined') {
    // Never server-side render this, since we can't determine
    // the correct initial state until we get to the client.
    // Alternatively, use a loading placeholder here.
    return null;
  }

  return (
    <button
      className={classnames(className, styles.toggle, 'icon', 'hover-fill')}
      onClick={handleToggleDarkMode}
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
