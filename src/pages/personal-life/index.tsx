import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { Link, graphql } from 'gatsby';

interface PersonalLifePageProps {
  data: any;
}

const PAGE_TITLE = 'Personal Life';

const PersonalLifePage: React.FC<PersonalLifePageProps> = ({ data }) => {
  return (
    <Layout pageTitle={PAGE_TITLE}>
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

export const Head: React.FC = () => <Seo title={PAGE_TITLE} />;

export default PersonalLifePage;
