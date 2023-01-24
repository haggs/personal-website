import React from 'react';
import Layout from '../components/Layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo/Seo';

const IndexPage: React.FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Dan Haggerty, developer extraordinaire"
        src="../images/profile-pic.jpg"
      />
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="Home Page" />;

export default IndexPage;
