import React from 'react';
import { text } from './Logo.module.css';
import classNames from 'classnames';

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      title="Go home"
      className={classNames(text, 'mono', 'highlightedLink')}
    >
      DH._
    </a>
  );
};

export default Logo;
