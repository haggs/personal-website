import * as React from 'react';
import * as styles from './PersonalLifeIndexPage.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, Link } from 'gatsby';

// ['Page Title', 'page-slug']
const PAGES = [
  ['Wedding', 'wedding'],
  ['Mom', 'mom'],
  ['Lake St. Clair', 'lake-st-clair'],
  ['Italy', 'italy'],
  ['Japan', 'japan'],
];

const PersonalLifeIndexPage: React.FC = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1>Personal Life</h1>
        {PAGES.map(([title, slug]) => (
          <article key={slug}>
            <h2>
              <Link to={`/personal-life/${slug}`}>{title}</Link>
            </h2>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Personal Life" />;

export default PersonalLifeIndexPage;
