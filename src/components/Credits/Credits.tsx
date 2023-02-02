import React from 'react';
import * as styles from './Credits.module.css';
import classnames from 'classnames';

const Credits: React.FC = () => {
  return (
    <div className={classnames(styles.container, 'mono')}>
      <span>
        This site was built using{' '}
        <a
          href="https://www.gatsbyjs.com"
          target="_blank"
          className="highlightedLink"
          rel="noreferrer"
        >
          Gatsby
        </a>
      </span>
      <p>
        See the source code on{' '}
        <a
          href="https://github.com/haggs/personal-website"
          target="_blank"
          className="highlightedLink"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <span>© {new Date().getFullYear()} Dan Haggerty</span>
    </div>
  );
};

export default Credits;
