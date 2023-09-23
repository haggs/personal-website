import React from 'react';
import * as styles from './PersonalLifePage.module.css';
import Layout from '../../components/Layout/Layout';
import { PageProps, graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';

const PersonalLifePage: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({
  data,
}) => {
  const title = data.mdx?.frontmatter?.title;
  const body = data.mdx?.body;
  const images = data.allFile.edges.map((edge) => edge.node.childImageSharp);

  return (
    <Layout>
      <div className={styles.container}>
        {title && <h1>{title}</h1>}
        {body && (
          <section>
            {body.split('\n\n').map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </section>
        )}
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
  fragment PersonalLifePageMdx on Mdx {
    frontmatter {
      title
      slug
    }
    body
  }

  fragment PersonalLifePageImages on FileConnection {
    edges {
      node {
        childImageSharp {
          thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
          full: gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }

  query PersonalLifePage {
    mdx {
      ...PersonalLifePageMdx
    }
    allFile {
      ...PersonalLifePageImages
    }
  }
`;

export default PersonalLifePage;
