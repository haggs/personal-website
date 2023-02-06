import React, { PropsWithChildren } from 'react';
import Layout from '../../components/Layout/Layout';
import Seo from '../../components/Seo/Seo';
import { HeadFC, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

interface StoryProps {
  data: any;
}

const Story: React.FC<PropsWithChildren<StoryProps>> = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {image && (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      )}
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<StoryProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default Story;
