import * as React from 'react';
import * as styles from './personal-life.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, graphql } from 'gatsby';
import UnderConstructionMessage from '../../components/UnderConstructionMessage/UnderConstructionMessage';

interface PersonalLifePageProps {
  data: any;
}

const PersonalLifePage: React.FC<PersonalLifePageProps> = () => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1>Personal Life</h1>
        <UnderConstructionMessage />
      </section>
      <div className={styles.container}>
        {/* {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>
              <Link to={`/personal-life/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))} */}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Personal Life" />;

export default PersonalLifePage;
