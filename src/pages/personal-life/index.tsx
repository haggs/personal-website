import * as React from 'react';
import * as styles from './PersonalLifeIndexPage.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, graphql, Link, PageProps } from 'gatsby';

const PersonalLifeIndexPage: React.FC<
  PageProps<Queries.PersonalLifeIndexQueryQuery>
> = ({ data }) => {
  return (
    <Layout>
      <section className={styles.container}>
        <h1>Personal Life</h1>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/personal-life/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PersonalLifeIndexQuery {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/personal-life/" } } }
    ) {
      nodes {
        frontmatter {
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Personal Life" />;

export default PersonalLifeIndexPage;
