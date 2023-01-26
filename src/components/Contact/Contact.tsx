import React from 'react';
import classnames from 'classnames';

import { container, email, socialLinkList } from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className={container}>
      <h1>I'm open to work!</h1>
      <p className="mono">Need help with your app or website? Reach out!</p>
      <a
        className={classnames(email, 'mono')}
        href="mailto:daniel.r.haggerty@gmail.com"
      >
        daniel.r.haggerty@gmail.com
      </a>
      <ul className={classnames(socialLinkList, 'mono')}>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/haggertydan/"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.github.com/haggs"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.twitter.com/danhaggerty_"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.instagram.com/danhaggerty/"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
