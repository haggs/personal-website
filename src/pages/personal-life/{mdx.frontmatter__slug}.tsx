import React, { useMemo } from 'react';
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

  console.log(filteredImages);
  console.log(data.mdx.frontmatter.hero_image);
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
      <ul>
        {filteredImages.map((image) => (
          <li>
            <GatsbyImage image={getImage(image)} alt={image.name} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query PersonalLifePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
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
