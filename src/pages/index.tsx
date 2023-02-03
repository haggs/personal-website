import React from 'react';
import * as styles from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import UnderConstructionMessage from '../components/UnderConstructionMessage/UnderConstructionMessage';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiArrowDown } from '@react-icons/all-files/fi/FiArrowDown';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className={styles.title}>DAN HAGGERTY</h1>
          <h2 className="mono">Web developer, home improvement enthusiast</h2>
          <UnderConstructionMessage message="Site under construction" />
          <div className={styles.lifeLinksContainer}>
            <AnchorLink
              className={styles.lifeLink}
              stripHash
              to="#work-life"
              title="Work Life"
            >
              Work Life
              <FiArrowDown />
            </AnchorLink>
            <Link
              className={styles.lifeLink}
              to="/personal-life"
              title="Personal Life"
            >
              Personal Life
              <FiArrowRight />
            </Link>
          </div>
        </div>
        <div className={styles.profilePhotoContainer}>
          <div className={styles.profilePhoto}>
            <StaticImage
              src="../images/profile-pic.jpg"
              alt="Dan Haggerty smiling wearing sunglasses"
            />
          </div>
        </div>
      </section>
      <section id="work-life">
        <h1>Work Experience</h1>
        <UnderConstructionMessage />
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home" />;

export default IndexPage;
