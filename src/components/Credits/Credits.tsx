import React from 'react';
import * as styles from './Credits.module.css';

const Credits: React.FC = () => {
  return (
    <section className={styles.container}>
      <p>
        This site was built using{' '}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        {' with a little help from '}
        <a href="https://chat.openai.com" target="_blank" rel="noreferrer">
          ChatGPT
        </a>
        {'. See the source code on '}
        <a
          href="https://github.com/haggs/personal-website"
          target="_blank"
          className="highlightedLink"
          rel="noreferrer"
        >
          Github
        </a>
        .
        <br />© {new Date().getFullYear()} Dan Haggerty
      </p>
    </section>
  );
};

export default Credits;
