import React from 'react';
import classnames from 'classnames';
import * as styles from './Navigation.module.css';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export interface NavigationProps {
  onNavigate?: () => void;
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

  /**
   * This prevents flicker when navigating to a new page
   * but isn't used for AnchorLinks because they don't
   * cause a page refresh
   */
  const delayOnClick = () => {
    setTimeout(() => {
      onNavigate && onNavigate();
    }, 10);
  };

  return (
    <nav className={className}>
      <ul className={navLinkListStyles}>
        <li>
          <Link to="/" onClick={delayOnClick}>
            Home
          </Link>
        </li>
        <li>
          <AnchorLink
            stripHash
            to="/#work-life"
            title="Work Life"
            onAnchorLinkClick={onNavigate}
          >
            Work Life
          </AnchorLink>
        </li>
        <li>
          <Link to="/personal-life" onClick={delayOnClick}>
            Personal Life
          </Link>
        </li>
        <li>
          <AnchorLink
            stripHash
            to="/#contact"
            title="contact"
            onAnchorLinkClick={onNavigate}
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
