import React, { useMemo } from 'react';
import * as styles from './PersonalLifePage.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, PageProps, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PersonalLifePage: React.FC<
  PageProps<Queries.PersonalLifePageQueryQuery>
> = ({ data, children }) => {
  const filteredImages = useMemo(() => {
    const path = data.mdx.parent.dir;
    const dir = path.substring(path.lastIndexOf('/') + 1);
    return data.allFile.edges
      .filter((edge) => edge.node.dir.includes(path))
      .map((edge) => edge.node);
  }, [data.allFile.edges, data.mdx.parent.dir]);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <section>{children}</section>
        <section>
          <ul>
            {filteredImages.map((image) => (
              <li>
                <GatsbyImage image={getImage(image)} alt={image.name} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PersonalLifePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      parent {
        ... on File {
          dir
        }
      }
    }
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        dir: { regex: "/personal-life/" }
      }
    ) {
      edges {
        node {
          dir
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.PersonalLifePageQueryQuery> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default PersonalLifePage;
