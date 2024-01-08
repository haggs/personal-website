import { HeadFC, PageProps, graphql } from 'gatsby';
import PersonalLifePage from '../../components/PersonalLifePage/PersonalLifePage';
import React from 'react';
import Seo from '../../components/Seo/Seo';

const TITLE = 'Ireland';

const Page: React.FC<PageProps<Queries.PersonalLifePageQuery>> = ({ data }) => (
  <PersonalLifePage title={TITLE} data={data}>
    <p>
      To end 2023, Alethea and I flew to Ireland just after Christmas. Dublin
      was an ideal city for a short trip, after 5 days you feel like you know
      your way around downtown. We visited museums, pubs, and did some shopping.
      We also took day trips to Belfast, Galway, and the cliffs of Moher. We
      celebrated the new year drinking and dancing at a Fleetwood Mac cover band
      show at Whelan's.
    </p>
  </PersonalLifePage>
);

export const Head: HeadFC = () => <Seo title={TITLE} />;

export const query = graphql`
  query {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativeDirectory: { eq: "ireland" }
      }
      sort: { relativePath: ASC }
    ) {
      ...PersonalLifePageImages
    }
  }
`;

export default Page;
