import React from 'react';
import * as styles from './index.module.css';
import Seo from '../components/Seo/Seo';
import Layout from '../components/Layout/Layout';
import { HeadFC, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { FiArrowDown } from '@react-icons/all-files/fi/FiArrowDown';
import { FiArrowRight } from '@react-icons/all-files/fi/FiArrowRight';
import classnames from 'classnames';
import WorkExperience from '../components/WorkExperience/WorkExperience';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.intro}>
        <div className={styles.introText}>
          <h1 className={styles.title}>Dan Haggerty</h1>
          <h2>Full stack developer based in Detroit, Michigan.</h2>
          <p>
            Hey, I'm Dan. I'm a full-stack developer, home improvement
            enthusiast, and new hire at NVIDIA working on UI for LLM apps. I
            recently resigned from Twitter where I worked on content moderation
            tools. I specialize in React, Typescript, and just generally
            building polished UIs. Aside from all that, I'm usually working on
            my house or out on the lake.
          </p>
          <p>
            I'm <strong>not looking for work</strong> right now, but feel free
            to{' '}
            <AnchorLink stripHash to="#contact" title="Contact me">
              contact me
            </AnchorLink>{' '}
            anyways.
          </p>
          <div className={styles.lifeLinksContainer}>
            <AnchorLink
              className={classnames('mono', 'link-accent', styles.lifeLink)}
              stripHash
              to="#work-life"
              title="Work Life"
            >
              Work Life
              <FiArrowDown />
            </AnchorLink>
            <Link
              className={classnames('mono', 'link-accent', styles.lifeLink)}
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
      <section id="work-life" className={styles.workExperience}>
        <h1>Work Experience</h1>
        <WorkExperience />
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo />;

export default IndexPage;
