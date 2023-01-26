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
          <Link to="/">{`// home`}</Link>
        </li>
        <li>
          <Link to="/">{`// work life`}</Link>
        </li>
        <li>
          <Link to="/personal-life">{`// personal life`}</Link>
        </li>
        <li>
          <AnchorLink
            stripHash
            to="#contact"
            title="contact"
          >{`// contact`}</AnchorLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
