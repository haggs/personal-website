import React, { useMemo } from 'react';
import * as styles from './PersonalLifePage.module.css';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, PageProps, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';

const PersonalLifePage: React.FC<
  PageProps<Queries.PersonalLifePageQueryQuery>
> = ({ data, children }) => {
  const images = useMemo(() => {
    const path = data.mdx?.parent?.dir;

    if (!path) {
      return null;
    }

    return data.allFile.edges
      .filter(
        (edge) => edge.node.dir.includes(path) && edge.node.childImageSharp
      )
      .map((edge) => edge.node.childImageSharp);
  }, [data.allFile.edges, data.mdx?.parent]);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{data.mdx?.frontmatter?.title || 'Title?'}</h1>
        <section>{children}</section>
        {images && (
          <section>
            <Gallery images={images} />
          </section>
        )}
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
      sort: { relativePath: ASC }
    ) {
      edges {
        node {
          dir
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<Queries.PersonalLifePageQueryQuery> = ({ data }) => (
  <Seo title={data.mdx?.frontmatter?.title} />
);

export default PersonalLifePage;
