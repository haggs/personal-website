import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { container } from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className={container}>
        <p>
          This is a placeholder for my personal website, more to come, probably.
        </p>
        <StaticImage alt="Dan Haggerty" src="../images/profile-pic.jpg" />
      </div>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="Home Page" />;

export default IndexPage;
