import React from 'react';
import { container, text } from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={container}>
      <a href="/" title="Go home" className={text}>
        DanHaggerty._
      </a>
    </div>
  );
};

export default Logo;
