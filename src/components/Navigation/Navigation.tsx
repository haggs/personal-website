import React from 'react';
import classnames from 'classnames';
import * as styles from './Navigation.module.css';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export interface NavigationProps {
  onNavigate?: (anchorIdToScrollTo?: string) => void;
  stacked?: boolean;
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  stacked = false,
  className,
}) => {
  const navLinkListStyles = classnames(styles.linkList, 'mono', {
    [styles.stackedList]: stacked,
  });

  const handleClickLink = (anchorIdToScrollTo?: string) => () => {
    // A little hack to prevent flicker when switching pages
    setTimeout(() => {
      onNavigate && onNavigate(anchorIdToScrollTo);
    }, 10);
  };

  return (
    <nav className={className}>
      <ul className={navLinkListStyles}>
        <li>
          <Link to="/" onClick={handleClickLink()}>
            Home
          </Link>
        </li>
        <li>
          <AnchorLink
            stripHash
            to="/#work-life"
            title="Work Life"
            onAnchorLinkClick={handleClickLink('work-life')}
          >
            Work Life
          </AnchorLink>
        </li>
        {/* <li>
          <Link to="/personal-life" onClick={handleClickLink()}>
            Personal Life
          </Link>
        </li> */}
        <li>
          <AnchorLink
            stripHash
            to="/#contact"
            title="contact"
            onAnchorLinkClick={handleClickLink('contact')}
          >
            Contact
          </AnchorLink>
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
