import React, { PropsWithChildren } from 'react';
import * as styles from './PersonalLifePage.module.css';
import Layout from '../../components/Layout/Layout';
import { graphql } from 'gatsby';
import Gallery from '@browniebroke/gatsby-image-gallery';

interface Props {
  title: string;
  data: Queries.PersonalLifePageQuery;
}

const PersonalLifePage: React.FC<PropsWithChildren<Props>> = ({
  title,
  data,
  children,
}) => {
  const images = data.allFile.edges.map((edge) => edge.node.childImageSharp);

  return (
    <Layout>
      <div className={styles.container}>
        <h1>{title}</h1>
        {children && <section>{children}</section>}
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
    allFile {
      ...PersonalLifePageImages
    }
  }
`;

export default PersonalLifePage;
