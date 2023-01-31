import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import { container, subtitle, underConstruction } from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import { HeadFC } from 'gatsby';

const IndexPage: React.FC = () => {
  const [underConstructionText, setUnderConstructionText] = useState(
    'Site under construction'
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newText =
        underConstructionText === 'Site under construction'
          ? 'Site under construction_'
          : 'Site under construction';
      setUnderConstructionText(newText);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [underConstructionText]);

  return (
    <Layout>
      <div className={container}>
        <h1 className="title">DAN HAGGERTY</h1>
        <h2 className={classnames(subtitle, 'mono')}>
          FRONT END DEVELOPER, HOME IMPROVEMENT ENTHUSIAST
        </h2>
        <p className={classnames(underConstruction, 'mono')}>
          {underConstructionText}
        </p>
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home" />;

export default IndexPage;
