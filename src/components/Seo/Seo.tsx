import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

interface SeoProps {
  title?: string | null;
}

const Seo: React.FC<SeoProps> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <title>
      {`${title ? `${title} | ` : ''}${data.site.siteMetadata.title}`}
    </title>
  );
};

export default Seo;
