import React from 'react';
import { navLinkList } from './Navigation.module.css';
import { Link } from 'gatsby';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className={navLinkList}>
        <li>
          <Link to="/" className="mono">{`// home`}</Link>
        </li>
        <li>
          <Link to="/">{`// work`}</Link>
        </li>
        <li>
          <Link to="/personal-life">{`// personal life`}</Link>
        </li>
        <li>
          <Link to="/">{`// contact`}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
