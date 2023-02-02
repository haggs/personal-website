import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import * as styles from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import UnderConstructionMessage from '../components/UnderConstructionMessage/UnderConstructionMessage';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className="title">DAN HAGGERTY</h1>
          <h2 className={classnames(styles.subtitle, 'mono')}>
            FRONT END DEVELOPER, HOME IMPROVEMENT ENTHUSIAST
          </h2>
          <UnderConstructionMessage />
        </div>
        <div className={styles.introPhoto}>
          <StaticImage
            className={styles.profilePic}
            src="../images/profile-pic.jpg"
            alt="Dan Haggerty smiling wearing sunglasses"
          />
        </div>
      </section>
      <section id="work-life">
        <h2>Work Experience</h2>
        <UnderConstructionMessage />
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home" />;

export default IndexPage;
