import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import * as styles from './404.module.css';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className="title">404</h1>
        <p className="mono">
          Oops. You're lost. Head{' '}
          <Link to="/" className="highlightedLink">
            home
          </Link>
          .
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title="404" />;
