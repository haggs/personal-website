import React from 'react';
import { container, text } from './Logo.module.css';
import { Link } from 'gatsby';

const Logo: React.FC = () => {
  return (
    <div className={container}>
      <Link to="/" className={text}>
        DanHaggerty._
      </Link>
    </div>
  );
};

export default Logo;
