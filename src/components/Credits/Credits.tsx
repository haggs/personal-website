import React from 'react';
import { container } from './Credits.module.css';
import classNames from 'classnames';

const Credits: React.FC = () => {
  return (
    <div className={classNames(container, 'mono')}>
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
      <span>
        © {new Date().getFullYear()}. Made just for fun by Dan Haggerty. All
        rights reserved.
      </span>
    </div>
  );
};

export default Credits;
