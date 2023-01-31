import * as React from 'react';
import { container } from './personal-life.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, Link, graphql } from 'gatsby';

interface PersonalLifePageProps {
  data: any;
}

const PersonalLifePage: React.FC<PersonalLifePageProps> = ({ data }) => {
  return (
    <Layout>
      <div className={container}>
        {data.allMdx.nodes.map((node: any) => (
          <article key={node.id}>
            <h2>
              <Link to={`/personal-life/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
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
