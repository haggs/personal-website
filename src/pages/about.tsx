import React from 'react';
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

const AboutPage: React.FC = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="About Me" />;

export default AboutPage;
