import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Lake St. Clair';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      In the summer of 2020, my wife Alethea and I bought a fixer-upper on Lake
      St. Clair, a massive lake near Detroit that's part of the Great Lakes
      system. Right out our back door we're able to see tons of fresh water
      wildlife, distant windmills in Canada, violent storms, ice formations that
      look like the surface of another planet. In the summertime I'm usually out
      pleasure boating or fishing. Here are just a few highlights that I've
      photographed over the recent years.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "lake-st-clair" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;
