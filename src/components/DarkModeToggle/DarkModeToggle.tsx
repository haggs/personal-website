import React, { useState } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import classnames from 'classnames';
import { toggle } from './DarkModeToggle.module.css';

const DarkModeToggle: React.FC = () => {
  const [checked, setChecked] = useState(window.__theme === 'dark');

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
      className={classnames(toggle, 'icon', 'hover-fill')}
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
