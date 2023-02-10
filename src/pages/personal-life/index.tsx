import * as React from 'react';
import * as styles from './personal-life.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, graphql, Link, PageProps } from 'gatsby';

const PersonalLifePage: React.FC<
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
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query PersonalLifeIndexQuery {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/personal-life/" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          hero_image_alt
        }
        id
        excerpt
      }
    }
  }
`;

export const Head: HeadFC = () => <Seo title="Personal Life" />;

export default PersonalLifePage;
