import React from 'react';
import classnames from 'classnames';
import { navLinkList } from './Navigation.module.css';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={classnames(navLinkList, 'mono')}>
        <li>
          <Link to="/">{`Home`}</Link>
        </li>
        <li>
          <Link to="/">{`Work Life`}</Link>
        </li>
        <li>
          <Link to="/personal-life">{`Personal Life`}</Link>
        </li>
        <li>
          <AnchorLink
            stripHash
            to="#contact"
            title="contact"
          >{`Contact`}</AnchorLink>
        </li>
        <li>
          <a className="button" href="/resume.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
