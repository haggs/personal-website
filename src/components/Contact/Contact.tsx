import React from 'react';
import { container, heading } from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <div id="contact" className={container}>
      <h1 className={heading}>Open to Work</h1>
      <p className="mono">
        Looking for a frontend or full stack web app developer? Reach out!
      </p>
      <a className="mono highlightedLink" href="mailto:dan@dhaggerty.com">
        dan@dhaggerty.com
      </a>
      <ul className="mono highlightedLink">
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
