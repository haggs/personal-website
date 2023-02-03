import React from 'react';
import * as styles from './Logo.module.css';
import classnames from 'classnames';

const Logo: React.FC = () => {
  return (
    <a
      href="/"
      title="Go home"
      className={classnames(styles.text, 'link-accent', 'mono')}
    >
      DH._
    </a>
  );
};

export default Logo;
