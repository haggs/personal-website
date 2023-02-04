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
import classnames from 'classnames';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className={styles.title}>Dan Haggerty</h1>
          <h1>
            Full stack developer and home improvement enthusiast, based in
            Detroit, Michigan.
          </h1>
          <p>
            Hey, I'm Dan. I recently resigned from Twitter after 5 years working
            on content review tools in the Trust & Safety space. I'm a full
            stack developer who leans heavily towards the front end, and I'm
            super into React/Typescript. During this time off between jobs, I've
            been working on renovating my home and otherwise just enjoying this
            moment.
          </p>
          <p>
            I'm open to work right now,{' '}
            <AnchorLink stripHash to="#contact" title="Contact me">
              contact me
            </AnchorLink>{' '}
            if you need a senior full stack or frontend developer.
          </p>
          <div className={styles.lifeLinksContainer}>
            <AnchorLink
              className={classnames('link-accent', styles.lifeLink)}
              stripHash
              to="#work-life"
              title="Work Life"
            >
              Work Life
              <FiArrowDown />
            </AnchorLink>
            <Link
              className={classnames('link-accent', styles.lifeLink)}
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
              className={styles.profilePhoto}
              placeholder="none"
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
