import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import * as styles from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

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
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className="title">DAN HAGGERTY</h1>
          <h2 className={classnames(styles.subtitle, 'mono')}>
            FRONT END DEVELOPER, HOME IMPROVEMENT ENTHUSIAST
          </h2>
          <p className={classnames(styles.underConstruction, 'mono')}>
            {underConstructionText}
          </p>
        </div>
        <div className={styles.introPhoto}>
          <StaticImage
            className={styles.profilePic}
            src="../images/profile-pic.jpg"
            alt="Dan Haggerty smiling wearing sunglasses"
          />
        </div>
      </section>
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>Job 1</li>
          <li>Job 2</li>
          <li>Job 3</li>
          <li>Job 4</li>
          <li>Job 5</li>
          <li>Job 6</li>
          <li>Job 7</li>
          <li>Job 8</li>
        </ul>
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home" />;

export default IndexPage;
