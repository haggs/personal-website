import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { container } from './404.module.css';
import Layout from '../components/Layout/Layout';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout showContactInfo={false}>
      <div className={container}>
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

export const Head: HeadFC = () => <title>Not found</title>;
