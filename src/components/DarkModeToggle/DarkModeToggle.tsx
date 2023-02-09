import React, { useContext } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import classnames from 'classnames';
import * as styles from './DarkModeToggle.module.css';
import DarkModeContext from '../../context/DarkModeContext';

interface DarkModeToggleProps {
  className?: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className }) => {
  const { dark, toggleDark } = useContext(DarkModeContext);

  return (
    <button
      className={classnames(
        className,
        styles.toggle,
        'icon-button',
        'hover-fill'
      )}
      onClick={toggleDark}
      aria-label={`Turn ${dark ? 'off' : 'on'} dark mode`}
    >
      {dark ? (
        <FiMoon className="hover-fill" />
      ) : (
        <FiSun className="hover-fill" />
      )}
    </button>
  );
};

export default DarkModeToggle;
