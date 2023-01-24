import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './Layout.module.css';

interface LayoutProps {
  pageTitle?: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({
  pageTitle,
  children,
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/stories" className={navLinkText}>
              Stories
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {pageTitle && <h1 className={heading}>{pageTitle}</h1>}
        {children}
      </main>
    </div>
  );
};

export default Layout;
